/**
 * Darsning mashqlarini koddagi holatga keltiradi (matnlar, savollar), o'quvchi
 * natijalarini saqlagan holda:
 *
 *   npm run db:sync-exercises -- A2-01 A2-02 … [--apply]
 *
 * Mashqlar tartib bo'yicha solishtiriladi (bazada order_index, kodda ro'yxat):
 *  - turi va savollar soni bir xil — sarlavha, shart va savollar matni joyida
 *    yangilanadi (savol id lari, demak natijalar ham saqlanadi);
 *  - turi yoki savollar soni o'zgargan — savollar qayta yoziladi, lekin faqat
 *    shu mashq bo'yicha hech kimning natijasi bo'lmasa;
 *  - kodda yangi mashq bo'lsa — oxiriga qo'shiladi.
 * Lug'atga tegmaydi. --apply siz faqat nima o'zgarishi ko'rsatiladi.
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

import { getDb } from "../lib/db";
import { LESSON_CONTENT } from "../lib/seed-lessons";
import type { SeedExercise } from "../lib/seed-exercises";

const apply = process.argv.includes("--apply");
const codes = process.argv.slice(2).filter((a) => !a.startsWith("--"));

const questionRows = (exerciseId: number, ex: SeedExercise) =>
  ex.questions.map((q, qi) => ({
    exercise_id: exerciseId,
    prompt: q.prompt,
    options_json: JSON.stringify(q.options ?? []),
    correct_index: q.correct ?? 0,
    order_index: qi + 1,
    audio_text: q.audio ?? null,
    answer_text: q.answer ?? null,
    explanation: q.explanation ?? null,
  }));

async function main() {
  if (codes.length === 0) throw new Error("Dars kodlarini ko'rsating: A2-01 A2-02 …");
  const sql = getDb();
  for (const code of codes) {
    const lesson = LESSON_CONTENT.find((l) => l.code === code);
    if (!lesson) throw new Error(`${code}: kodda yo'q`);
    const [unit] = await sql<{ id: number }[]>`SELECT id FROM units WHERE code = ${code}`;
    if (!unit) throw new Error(`${code}: bazada yo'q`);
    const dbExercises = await sql<{ id: number; kind: string; title: string; order_index: number; questions: number; progress: number }[]>`
      SELECT e.id, e.kind, e.title, e.order_index,
        (SELECT count(*)::int FROM exercise_questions q WHERE q.exercise_id = e.id) AS questions,
        ((SELECT count(*) FROM user_exercise_progress p WHERE p.exercise_id = e.id)
          + (SELECT count(*) FROM user_question_progress p JOIN exercise_questions q ON q.id = p.question_id
             WHERE q.exercise_id = e.id))::int AS progress
      FROM exercises e WHERE e.unit_id = ${unit.id} ORDER BY e.order_index
    `;
    console.log(`\n${code}: bazada ${dbExercises.length}, kodda ${lesson.exercises.length} mashq`);
    if (dbExercises.length > lesson.exercises.length) {
      console.log("  ! bazada koddagidan ko'p mashq bor — o'tkazib yuborildi");
      continue;
    }
    const maxOrder = Math.max(0, ...dbExercises.map((e) => e.order_index));

    for (const [i, ex] of lesson.exercises.entries()) {
      const db = dbExercises[i];
      if (!db) {
        console.log(`  + yangi: «${ex.title}» (${ex.kind}, ${ex.questions.length} savol)`);
        if (apply) {
          await sql.begin(async (t) => {
            const [row] = await t<{ id: number }[]>`
              INSERT INTO exercises (unit_id, title, skill_label, kind, instructions, order_index)
              VALUES (${unit.id}, ${ex.title}, ${ex.skill}, ${ex.kind}, ${ex.instructions ?? null}, ${maxOrder + i + 1})
              RETURNING id
            `;
            await t`INSERT INTO exercise_questions ${t(questionRows(row.id, ex))}`;
          });
        }
        continue;
      }
      const sameShape = db.kind === ex.kind && db.questions === ex.questions.length;
      if (!sameShape && db.progress > 0) {
        console.log(`  ! «${db.title}»: ${db.kind}/${db.questions} → ${ex.kind}/${ex.questions.length}, lekin ${db.progress} ta natija bor — o'tkazib yuborildi`);
        continue;
      }
      console.log(`  ${sameShape ? "~" : "↻"} «${db.title}» → «${ex.title}»${sameShape ? "" : ` (${db.kind}/${db.questions} → ${ex.kind}/${ex.questions.length})`}`);
      if (!apply) continue;
      await sql.begin(async (t) => {
        await t`UPDATE exercises SET title = ${ex.title}, skill_label = ${ex.skill}, kind = ${ex.kind},
                  instructions = ${ex.instructions ?? null} WHERE id = ${db.id}`;
        if (sameShape) {
          for (const r of questionRows(db.id, ex)) {
            await t`UPDATE exercise_questions SET prompt = ${r.prompt}, options_json = ${r.options_json},
                      correct_index = ${r.correct_index}, audio_text = ${r.audio_text}, answer_text = ${r.answer_text},
                      explanation = ${r.explanation}
                    WHERE exercise_id = ${db.id} AND order_index = ${r.order_index}`;
          }
        } else {
          await t`DELETE FROM exercise_questions WHERE exercise_id = ${db.id}`;
          await t`INSERT INTO exercise_questions ${t(questionRows(db.id, ex))}`;
        }
      });
    }
  }
  if (!apply) console.log("\nSinov rejimi — bazaga hech narsa yozilmadi. Yozish uchun --apply qo'shing.");
  await sql.end();
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
