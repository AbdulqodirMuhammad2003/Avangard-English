/**
 * O'quvchilarni o'qituvchilarga biriktirish (users.teacher_id) — faqat
 * qo'shadi, hech narsani o'chirmaydi, qayta ishga tushirsa bo'ladi:
 *
 *   node scripts/migrate-teacher-id.mjs          — nima qilinishini ko'rsatadi
 *   node scripts/migrate-teacher-id.mjs --apply  — haqiqatan bajaradi
 *
 *  1. users.teacher_id ustuni va indeksi (supabase/schema.sql dagi kabi).
 *  2. Hech kimga biriktirilmagan o'quvchilar birinchi (eng kichik ID li)
 *     o'qituvchiga biriktiriladi — ikkinchi o'qituvchi qo'shilishidan oldin
 *     bor o'quvchilar shu o'qituvchiniki edi.
 *
 * DATABASE_URL .env.local dan olinadi.
 */
import postgres from "postgres";
import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd());

const apply = process.argv.includes("--apply");

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL topilmadi — avval node scripts/setup-env.mjs");
    process.exit(1);
  }
  const sql = postgres(process.env.DATABASE_URL, { prepare: false, ssl: "require", max: 1 });

  const [col] = await sql`
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'teacher_id'
  `;
  const [first] = await sql`SELECT id, username FROM users WHERE role = 'teacher' ORDER BY id LIMIT 1`;
  const [{ n }] = col
    ? await sql`SELECT count(*)::int AS n FROM users WHERE role = 'student' AND teacher_id IS NULL`
    : await sql`SELECT count(*)::int AS n FROM users WHERE role = 'student'`;

  console.log(`teacher_id ustuni: ${col ? "bor" : "yo'q"}`);
  console.log(`Biriktirilmagan o'quvchilar: ${n}`);
  console.log(`Birinchi o'qituvchi: ${first ? `${first.username} (id ${first.id})` : "yo'q"}`);

  if (!apply) {
    console.log("\nSinov rejimi — bazaga yozilmadi. Bajarish uchun: --apply");
    await sql.end();
    return;
  }

  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS teacher_id INTEGER REFERENCES users(id) ON DELETE SET NULL`;
  await sql`CREATE INDEX IF NOT EXISTS users_teacher_id_idx ON users (teacher_id)`;
  console.log("✓ teacher_id ustuni tayyor.");

  if (first) {
    const rows = await sql`
      UPDATE users SET teacher_id = ${first.id}
      WHERE role = 'student' AND teacher_id IS NULL
      RETURNING id
    `;
    console.log(`✓ ${rows.length} ta o'quvchi ${first.username} ga biriktirildi.`);
  }
  await sql.end();
}

main().catch((err) => {
  console.error("Xatolik:", err.message);
  process.exit(1);
});
