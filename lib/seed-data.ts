/**
 * Baza ma'lumotlarini namunaviy kontent bilan to'ldirish uchun umumiy mantiq.
 * Platforma o'zbek o'quvchilariga ingliz tilini o'rgatadi.
 *
 * Bu fayl faqat `scripts/seed.ts` orqali, qo'lda (`npm run db:seed`)
 * ishga tushiriladi — Supabase (Postgres) doimiy baza bo'lgani uchun
 * (avvalgi SQLite versiyasidan farqli o'laroq) serverning har bir sovuq
 * boshlanishida avtomatik ishlamaydi. Ishlab turgan bazaga yangi darslarni
 * qo'shish uchun — `npm run db:add-lessons` (scripts/add-lessons.ts).
 */
import bcrypt from "bcryptjs";
import { sql } from "./db";
import type { SeedExercise } from "./seed-exercises";
import { LESSON_CONTENT } from "./seed-lessons";
import type { VocabSeed } from "./seed-lessons/types";
import { LEVEL_INFO } from "./levels";

/** Mashqlarni savollari bilan birga darsga qo'shadi (tartib raqami
 *  darsdagi mavjud mashqlardan keyin davom etadi). Seed va bir martalik
 *  migratsiya skriptlari ikkalasi ham ishlatadi. */
export async function insertExercises(
  db: typeof sql,
  unitId: number,
  exercises: SeedExercise[]
) {
  const [{ max }] = await db<{ max: number }[]>`
    SELECT COALESCE(MAX(order_index), 0)::int AS max FROM exercises WHERE unit_id = ${unitId}
  `;
  for (const [i, ex] of exercises.entries()) {
    const [row] = await db<{ id: number }[]>`
      INSERT INTO exercises (unit_id, title, skill_label, kind, instructions, order_index)
      VALUES (${unitId}, ${ex.title}, ${ex.skill}, ${ex.kind}, ${ex.instructions}, ${max + i + 1})
      RETURNING id
    `;
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
    await db`INSERT INTO exercise_questions ${db(rows)}`;
  }
}

/** Lug'at bosqichini so'zlari bilan qo'shadi. */
export async function insertRound(
  db: typeof sql,
  unitId: number,
  title: string,
  order: number,
  words: VocabSeed[]
) {
  const [round] = await db<{ id: number }[]>`
    INSERT INTO vocabulary_rounds (unit_id, title, order_index) VALUES (${unitId}, ${title}, ${order})
    RETURNING id
  `;
  // postgres.js'ning ko'p qatorli INSERT yordamchisi — har bir so'z uchun
  // alohida so'rov yubormaslik uchun (tezroq, Supabase'ga kam murojaat).
  await db`INSERT INTO vocabulary_words ${db(
    words.map((w, i) => ({
      round_id: round.id,
      emoji: w.emoji,
      word: w.word,
      transcription: w.transcription,
      part_of_speech: w.pos,
      translation_uz: w.uz,
      definition: w.def,
      example_sentence: w.ex,
      example_translation: w.exUz,
      order_index: i + 1,
    }))
  )}`;
}

/** Darsni (unit) qo'shadi va id sini qaytaradi. */
export async function insertUnit(db: typeof sql, levelId: number, orderIndex: number, u: UnitSeed) {
  const [row] = await db<{ id: number }[]>`
    INSERT INTO units (level_id, code, title, subtitle, color, icon, order_index, locked, date_label,
      clip_url, clip_title, clip_kind, clip_start, clip_end)
    VALUES (
      ${levelId}, ${u.code}, ${u.title}, ${u.subtitle}, ${u.color}, ${u.icon},
      ${orderIndex}, ${u.locked}, ${u.date},
      ${u.clip?.url ?? null}, ${u.clip?.title ?? null}, ${u.clip?.kind ?? null},
      ${u.clip?.start ?? null}, ${u.clip?.end ?? null}
    )
    RETURNING id
  `;
  return row.id;
}

export async function resetDatabase() {
  const tables = [
    "exam_attempts",
    "extra_lesson_bookings",
    "extra_lessons",
    "ranking_entries",
    "marks",
    "user_unit_progress",
    "user_question_progress",
    "user_exercise_progress",
    "exercise_questions",
    "exercises",
    "user_daily_activity",
    "user_word_review",
    "user_word_stage_progress",
    "user_word_progress",
    "vocabulary_words",
    "vocabulary_rounds",
    "units",
    "levels",
    "users",
  ];
  for (const t of tables) {
    // Jadval nomlari shu yerdagi qattiq kodlangan ro'yxatdan kelgani uchun
    // (foydalanuvchi kiritmasi emas) to'g'ridan-to'g'ri qo'yish xavfsiz.
    await sql.unsafe(`DELETE FROM ${t}`);
  }
}

// ---------- Darajalar (A1, A2, B1, B2, IELTS) — lib/levels.ts ----------
export const LEVELS = LEVEL_INFO.map((l, i) => ({
  code: l.code,
  title: l.uz,
  description: l.description,
  locked: i === 0 ? 0 : 1,
}));

export interface UnitSeed {
  code: string;
  level: string;
  title: string;
  subtitle: string;
  color: string;
  icon: string;
  locked: number;
  date: string;
  clip: { url: string; title: string; kind: string; start: number | null; end: number | null } | null;
}

// ---------- Darslar (Units) ----------
// Kod: "<daraja>-<raqam>" (A1-01, A1-02, …), takror — "<daraja>-T". Darslar
// o'quvchi natijasiga qarab ochiladi (lib/data.ts — UNLOCK_THRESHOLD),
// `locked` bu yerda faqat boshlang'ich qiymat. Darsning tartib raqami —
// shu ro'yxatda o'z darajasi ichidagi o'rni. Matn, misol va mashqlar
// o'zimizniki — hech qanday darslikdan ko'chirilmaydi.
//
// "Inglizcha tomosha" — mashqlar tugatilgach ochiladigan haqiqiy inglizcha
// parcha (5-10 daqiqa), faqat rasmiy kanallardan va O'zbekistonda
// ochiladiganlari.
export const UNITS: UnitSeed[] = [
  // ---------- A1 — Beginner ----------
  { code: "A1-00", level: "A1", title: "0-dars", subtitle: "Alifbo va tovushlar", color: "green", icon: "headphones", locked: 0, date: "", clip: null },
  { code: "A1-01", level: "A1", title: "1-dars", subtitle: "Hello! Tanishuv", color: "blue", icon: "chat", locked: 1, date: "", clip: null },
  { code: "A1-02", level: "A1", title: "2-dars", subtitle: "Qayerdansiz? Mamlakatlar, 1–10", color: "orange", icon: "headphones", locked: 1, date: "", clip: null },
  { code: "A1-03", level: "A1", title: "3-dars", subtitle: "Ismingiz qanday yoziladi?", color: "purple", icon: "book", locked: 1, date: "", clip: null },
  { code: "A1-04", level: "A1", title: "4-dars", subtitle: "Bu nima? Buyumlar, 11–100", color: "green", icon: "chart", locked: 1, date: "", clip: null },
  { code: "A1-05", level: "A1", title: "5-dars", subtitle: "Kasbingiz nima?", color: "blue", icon: "book", locked: 1, date: "", clip: null },
  { code: "A1-06", level: "A1", title: "6-dars", subtitle: "Qayerda? Soat necha?", color: "orange", icon: "headphones", locked: 1, date: "", clip: null },
  { code: "A1-07", level: "A1", title: "7-dars", subtitle: "Qo'shnilarim: have got", color: "purple", icon: "chat", locked: 1, date: "", clip: null },
  { code: "A1-08", level: "A1", title: "8-dars", subtitle: "Narsalarim: Have you got…?", color: "green", icon: "book", locked: 1, date: "", clip: null },
  { code: "A1-09", level: "A1", title: "9-dars", subtitle: "Oilam: my, his, her, 's", color: "orange", icon: "chat", locked: 1, date: "", clip: null },
  { code: "A1-10", level: "A1", title: "10-dars", subtitle: "Men haqimda: Present Simple", color: "blue", icon: "book", locked: 1, date: "", clip: null },
  { code: "A1-11", level: "A1", title: "11-dars", subtitle: "Yo'lda: don't / doesn't", color: "purple", icon: "headphones", locked: 1, date: "", clip: null },
  { code: "A1-12", level: "A1", title: "12-dars", subtitle: "Kun tartibim: Do you…?", color: "green", icon: "chat", locked: 1, date: "", clip: null },
  { code: "A1-13", level: "A1", title: "13-dars", subtitle: "Kiyim: always, never", color: "orange", icon: "book", locked: 1, date: "", clip: null },
  { code: "A1-14", level: "A1", title: "14-dars", subtitle: "Binolar: Wh- savollar", color: "blue", icon: "chat", locked: 1, date: "", clip: null },
  { code: "A1-15", level: "A1", title: "15-dars", subtitle: "Uslub va tana", color: "purple", icon: "headphones", locked: 1, date: "", clip: null },
  { code: "A1-16", level: "A1", title: "16-dars", subtitle: "Shahrim: there is / there are", color: "green", icon: "book", locked: 1, date: "", clip: null },
  { code: "A1-17", level: "A1", title: "17-dars", subtitle: "Mehmonxonada: Is there…?", color: "orange", icon: "chat", locked: 1, date: "", clip: null },
  { code: "A1-18", level: "A1", title: "18-dars", subtitle: "Uy-joy: each / all the", color: "blue", icon: "book", locked: 1, date: "", clip: null },
  { code: "A1-19", level: "A1", title: "19-dars", subtitle: "Qobiliyatlar: can / can't", color: "purple", icon: "headphones", locked: 1, date: "", clip: null },
  { code: "A1-20", level: "A1", title: "20-dars", subtitle: "Yordam bera olasizmi?", color: "green", icon: "chat", locked: 1, date: "", clip: null },
];

export async function seedDatabase() {
  // ---------- Foydalanuvchi (demo hisob) ----------
  const passwordHash = bcrypt.hashSync("demo1234", 10);

  const [demoUser] = await sql<{ id: number }[]>`
    INSERT INTO users (name, email, password_hash, avatar_url, course, level, coins, stars,
      branch_rank, group_rank, battle_wins, august_average, reading_pct, writing_pct, listening_pct, speaking_pct)
    VALUES (
      ${"Abdulqodir Xabibullayev"}, ${"demo@avangard-english.uz"}, ${passwordHash}, ${null},
      ${"Ingliz tili kursi"}, ${"A1"}, ${11130}, ${6006}, ${20}, ${5}, ${7}, ${78.98}, ${96}, ${100}, ${90}, ${100}
    )
    RETURNING id
  `;
  const userId = demoUser.id;

  await sql`
    INSERT INTO users (name, email, password_hash, avatar_url, course, level, coins, stars,
      branch_rank, group_rank, battle_wins, august_average, reading_pct, writing_pct, listening_pct, speaking_pct)
    VALUES (
      ${"Madina Yusupova"}, ${"madina@avangard-english.uz"}, ${passwordHash}, ${null},
      ${"Ingliz tili kursi"}, ${"A2"}, ${9820}, ${5210}, ${4}, ${2}, ${9}, ${81.2}, ${92}, ${95}, ${88}, ${97}
    )
  `;

  // ---------- Darajalar ----------
  const levelIds: Record<string, number> = {};
  for (let i = 0; i < LEVELS.length; i++) {
    const l = LEVELS[i];
    const [row] = await sql<{ id: number }[]>`
      INSERT INTO levels (code, title, description, order_index, locked)
      VALUES (${l.code}, ${l.title}, ${l.description}, ${i + 1}, ${l.locked})
      RETURNING id
    `;
    levelIds[l.code] = row.id;
  }

  // ---------- Darslar ----------
  const unitIds: Record<string, number> = {};
  const unitOrderByLevel: Record<string, number> = {};
  for (const u of UNITS) {
    unitOrderByLevel[u.level] = (unitOrderByLevel[u.level] || 0) + 1;
    unitIds[u.code] = await insertUnit(sql, levelIds[u.level], unitOrderByLevel[u.level], u);
  }

  // ---------- Lug'at va mashqlar ----------
  for (const lesson of LESSON_CONTENT) {
    for (const [i, round] of lesson.rounds.entries()) {
      await insertRound(sql, unitIds[lesson.code], round.title, i + 1, round.words);
    }
    await insertExercises(sql, unitIds[lesson.code], lesson.exercises);
  }

  // ---------- Baholar (Marks) ----------
  await sql`
    INSERT INTO marks (user_id, unit_id, subject, score, max_score, date)
    VALUES (${userId}, ${unitIds[UNITS[0]?.code] ?? null}, ${"Tinglab tushunish"}, ${96}, ${100}, ${"2026-08-11"})
  `;
  await sql`
    INSERT INTO marks (user_id, unit_id, subject, score, max_score, date)
    VALUES (${userId}, ${null}, ${"Sinov testi (A1 darajasi)"}, ${78}, ${100}, ${"2026-08-17"})
  `;

  // ---------- Qo'shimcha darslar (Extra lessons) ----------
  // Diqqat: `sql(rows)` helper'ining o'zi "(ustunlar) values (...)" qismini
  // to'liq generatsiya qiladi — shuning uchun ustunlar ro'yxati va "VALUES"
  // so'zini alohida yozish shart emas (aks holda ustunlar ikki marta
  // yozilib, "INSERT has more target columns than expressions" xatosi
  // chiqadi).
  await sql`
    INSERT INTO extra_lessons ${sql([
      {
        title: "Speaking Club — suhbat klubi",
        description: "Kundalik mavzularda kichik guruhlarda ingliz tilida erkin suhbat mashqi.",
        teacher: "Emily Carter",
        date_label: "21 avg",
        time_label: "18:00 - 19:00",
        seats_total: 12,
        seats_taken: 7,
      },
      {
        title: "Grammatika bo'yicha individual maslahat",
        description: "Zamonlar va artikllar bo'yicha o'qituvchi bilan yakka tartibda ishlash.",
        teacher: "James Wilson",
        date_label: "23 avg",
        time_label: "17:00 - 18:00",
        seats_total: 8,
        seats_taken: 8,
      },
      {
        title: "Tinglab tushunish mashg'uloti",
        description: "Ingliz tilidagi audio va videolarni tinglab tushunish amaliyoti (IELTS Listening uslubida).",
        teacher: "Sarah Kim",
        date_label: "25 avg",
        time_label: "19:00 - 20:00",
        seats_total: 15,
        seats_taken: 4,
      },
    ])}
  `;
}
