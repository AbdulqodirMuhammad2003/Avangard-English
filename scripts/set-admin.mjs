/**
 * O'qituvchini asosiy admin qilish (users.is_admin) — faqat qo'shadi, hech
 * narsani o'chirmaydi, qayta ishga tushirsa bo'ladi:
 *
 *   node scripts/set-admin.mjs <login>          — nima qilinishini ko'rsatadi
 *   node scripts/set-admin.mjs <login> --apply  — haqiqatan bajaradi
 *
 * Admin o'qituvchi panelida «O'qituvchilar» bo'limini ko'radi: o'qituvchi
 * yaratadi, ularning o'quvchilari va natijalarini kuzatadi. Ustun yo'q
 * bo'lsa, avval qo'shiladi. DATABASE_URL .env.local dan olinadi.
 */
import postgres from "postgres";
import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd());

const apply = process.argv.includes("--apply");
const login = process.argv.slice(2).find((a) => !a.startsWith("--"))?.toLowerCase();

async function main() {
  if (!login) {
    console.error("Foydalanish: node scripts/set-admin.mjs <login> [--apply]");
    process.exit(1);
  }
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL topilmadi — avval node scripts/setup-env.mjs");
    process.exit(1);
  }
  const sql = postgres(process.env.DATABASE_URL, { prepare: false, ssl: "require", max: 1 });

  const [user] = await sql`
    SELECT id, name, role FROM users WHERE lower(username) = ${login} OR lower(email) = ${login}
  `;
  if (!user) {
    console.error(`«${login}» topilmadi.`);
    process.exit(1);
  }
  if (user.role !== "teacher") {
    console.error(`«${login}» o'qituvchi emas — avval node scripts/create-teacher.mjs`);
    process.exit(1);
  }
  console.log(`Admin bo'ladi: ${user.name} (id ${user.id})`);

  if (!apply) {
    console.log("\nSinov rejimi — bazaga yozilmadi. Bajarish uchun: --apply");
    await sql.end();
    return;
  }

  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS is_admin BOOLEAN NOT NULL DEFAULT false`;
  await sql`UPDATE users SET is_admin = true WHERE id = ${user.id}`;
  console.log("✓ Tayyor.");
  await sql.end();
}

main().catch((err) => {
  console.error("Xatolik:", err.message);
  process.exit(1);
});
