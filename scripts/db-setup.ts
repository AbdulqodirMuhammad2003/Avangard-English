/**
 * Yangi bazani tayyorlash — hech narsani o'chirmaydi, qayta ishga tushirsa
 * bo'ladi:
 *
 *   npm run db:setup            — nima qilinishini ko'rsatadi (bazaga yozmaydi)
 *   npm run db:setup -- --apply — haqiqatan bajaradi
 *
 *  1. supabase/schema.sql — jadvallar (CREATE TABLE IF NOT EXISTS).
 *  2. public sxemasidagi barcha jadvallarda Row Level Security yoqiladi:
 *     sayt bazaga jadvallar egasi sifatida ulanadi (RLS unga ta'sir
 *     qilmaydi), boshqa rollar (anon, authenticated) esa hech narsa ko'rmaydi.
 *  3. Darajalar (lib/levels.ts) — yo'qlari qo'shiladi, borlarining nomi va
 *     tavsifi yangilanadi (`locked` va tartib raqami o'zgarmaydi).
 *
 * Demo foydalanuvchilar yaratilmaydi. Darslar — `npm run db:add-lessons`,
 * o'qituvchi hisobi — `node scripts/create-teacher.mjs`.
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

import fs from "fs";
import path from "path";
import { getDb } from "../lib/db";
import { LEVELS } from "../lib/seed-data";

const apply = process.argv.includes("--apply");

async function main() {
  const sql = getDb();
  const schema = fs.readFileSync(path.join(process.cwd(), "supabase", "schema.sql"), "utf8");

  const tablesBefore = await sql<{ tablename: string }[]>`
    SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename
  `;
  console.log(`Bazadagi jadvallar: ${tablesBefore.length ? tablesBefore.map((t) => t.tablename).join(", ") : "(yo'q)"}`);

  if (!apply) {
    console.log("\nSinov rejimi. --apply bilan quyidagilar bajariladi:");
    console.log("  - supabase/schema.sql (jadvallar, mavjudlari o'zgarmaydi)");
    console.log("  - barcha public jadvallarda RLS yoqiladi");
    console.log(`  - darajalar: ${LEVELS.map((l) => l.code).join(", ")}`);
    await sql.end();
    return;
  }

  await sql.unsafe(schema).simple();
  console.log("✓ Sxema qo'llandi.");

  await sql.unsafe(`
    DO $$
    DECLARE t record;
    BEGIN
      FOR t IN SELECT tablename FROM pg_tables WHERE schemaname = 'public' LOOP
        EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', t.tablename);
      END LOOP;
    END $$;
  `).simple();
  console.log("✓ RLS yoqildi.");

  const [{ max }] = await sql<{ max: number }[]>`SELECT COALESCE(MAX(order_index), 0)::int AS max FROM levels`;
  let next = max;
  for (const l of LEVELS) {
    const [row] = await sql<{ inserted: boolean }[]>`
      INSERT INTO levels (code, title, description, order_index, locked)
      VALUES (${l.code}, ${l.title}, ${l.description}, ${next + 1}, ${l.locked})
      ON CONFLICT (code) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description
      RETURNING (xmax = 0) AS inserted
    `;
    if (row.inserted) next++;
    console.log(`  ${row.inserted ? "+" : "="} ${l.code} — ${l.title}`);
  }

  const tables = await sql<{ tablename: string; rowsecurity: boolean }[]>`
    SELECT tablename, rowsecurity FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename
  `;
  const noRls = tables.filter((t) => !t.rowsecurity);
  console.log(`\n✓ Tayyor: ${tables.length} ta jadval, RLS'siz: ${noRls.length ? noRls.map((t) => t.tablename).join(", ") : "yo'q"}.`);
  await sql.end();
}

main().catch(async (err) => {
  console.error("Xatolik:", err);
  await getDb().end({ timeout: 1 }).catch(() => {});
  process.exit(1);
});
