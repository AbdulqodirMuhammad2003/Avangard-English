/**
 * Bazadagi bitta mashqni (turi, sharti va savollari) koddagi bilan
 * almashtiradi. Darsning boshqa mashqlari, lug'ati va natijalariga tegmaydi.
 *
 *   npm run db:rebuild-exercise -- "A2-04:Qaysi vaqt?" ["A2-02:Bu kim?" …] [--apply]
 *
 * Xavfsizlik: mashq bo'yicha birorta o'quvchining natijasi bo'lsa (savol yoki
 * mashq progressi), o'sha mashq o'zgartirilmaydi — natijalar o'chib ketmasin.
 * --apply siz faqat nima o'zgarishi ko'rsatiladi.
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

import { getDb } from "../lib/db";
import { LESSON_CONTENT } from "../lib/seed-lessons";

const apply = process.argv.includes("--apply");
const targets = process.argv.slice(2).filter((a) => !a.startsWith("--"));

async function main() {
  if (targets.length === 0) throw new Error('Mashqni ko\'rsating: "A2-04:Qaysi vaqt?"');
  const sql = getDb();
  for (const target of targets) {
    const [code, title] = [target.slice(0, target.indexOf(":")), target.slice(target.indexOf(":") + 1)];
    const ex = LESSON_CONTENT.find((l) => l.code === code)?.exercises.find((e) => e.title === title);
    if (!ex) throw new Error(`${target}: kodda topilmadi`);
    const [row] = await sql<{ id: number; kind: string; questions: number }[]>`
      SELECT e.id, e.kind, (SELECT count(*)::int FROM exercise_questions q WHERE q.exercise_id = e.id) AS questions
      FROM exercises e JOIN units u ON u.id = e.unit_id
      WHERE u.code = ${code} AND e.title = ${title}
    `;
    if (!row) throw new Error(`${target}: bazada topilmadi`);
    const [{ progress }] = await sql<{ progress: number }[]>`
      SELECT (SELECT count(*) FROM user_exercise_progress WHERE exercise_id = ${row.id})
           + (SELECT count(*) FROM user_question_progress p JOIN exercise_questions q ON q.id = p.question_id
              WHERE q.exercise_id = ${row.id}) AS progress
    `;
    console.log(`${target}: ${row.kind} (${row.questions} savol) → ${ex.kind} (${ex.questions.length} savol)`);
    if (Number(progress) > 0) {
      console.log(`  o'tkazib yuborildi: ${progress} ta o'quvchi natijasi bor`);
      continue;
    }
    if (!apply) continue;
    await sql.begin(async (t) => {
      await t`UPDATE exercises SET kind = ${ex.kind}, instructions = ${ex.instructions ?? null}, skill_label = ${ex.skill} WHERE id = ${row.id}`;
      await t`DELETE FROM exercise_questions WHERE exercise_id = ${row.id}`;
      const rows = ex.questions.map((q, qi) => ({
        exercise_id: row.id,
        prompt: q.prompt,
        options_json: JSON.stringify(q.options ?? []),
        correct_index: q.correct ?? 0,
        order_index: qi + 1,
        audio_text: q.audio ?? null,
        answer_text: q.answer ?? null,
        explanation: q.explanation ?? null,
      }));
      await t`INSERT INTO exercise_questions ${t(rows)}`;
    });
    console.log("  yangilandi");
  }
  if (!apply) console.log("\nSinov rejimi — bazaga hech narsa yozilmadi. Yozish uchun --apply qo'shing.");
  await sql.end();
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
