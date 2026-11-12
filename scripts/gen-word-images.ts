/**
 * Aniq narsalarni bildiradigan lug'at so'zlariga Pexels'dan bepul fotosurat
 * topadi va lib/word-images.ts ro'yxatini yangilaydi. Qaysi so'zga foto
 * olinishi va qanday qidirilishi — scripts/word-photo-queries.ts; u yerda
 * yo'q (mavhum) so'zlar emoji bilan qoladi. Rasmi bor so'zlar o'tkazib
 * yuboriladi (qayta tanlash uchun --force).
 *
 * Kalit .env.local dan: PEXELS_API_KEY (bepul — https://www.pexels.com/api/).
 * Pexels litsenziyasi: tijoriy foydalanish bepul; rasmlar Pexels CDN'idan
 * ko'rsatiladi, ostida fotograf va Pexels nomi yoziladi.
 *
 *   npm run words:images -- --unit A1-03            # faqat ro'yxat
 *   npm run words:images -- --unit A1-03 --apply    # qidirish + saqlash
 *   npm run words:images -- --apply                 # hamma darslar
 *   npm run words:images -- --word seal --pick 2 --force --apply   # boshqa foto
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

import { readFileSync, writeFileSync } from "node:fs";
import { LESSON_CONTENT } from "../lib/seed-lessons";
import { WORD_IMAGES, wordImageKey, type WordImage } from "../lib/word-images";
import { WORD_PHOTO_QUERIES } from "./word-photo-queries";

const args = process.argv.slice(2);
const opt = (name: string) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const apply = args.includes("--apply");
const force = args.includes("--force");
const unit = opt("unit");
const level = opt("level");
const only = opt("word");
/** Qidiruv natijalaridan nechanchisini olish (1 — birinchisi). */
const pickIndex = Math.max(1, Number(opt("pick") ?? 1)) - 1;
const limit = Number(opt("limit") ?? Infinity);
const MAP_FILE = "lib/word-images.ts";

// Darslardagi so'zlar ichidan ro'yxatda so'rovi borlari.
const words = new Map<string, { word: string; code: string; query: string }>();
for (const lesson of LESSON_CONTENT) {
  if (unit && lesson.code !== unit) continue;
  if (level && !lesson.code.startsWith(`${level}-`)) continue;
  for (const round of lesson.rounds)
    for (const w of round.words) {
      const key = wordImageKey(w.word);
      if (only && key !== wordImageKey(only)) continue;
      const query = WORD_PHOTO_QUERIES[key];
      if (query && !words.has(key)) words.set(key, { word: w.word, code: lesson.code, query });
    }
}
const todo = [...words.entries()].filter(([key]) => force || !WORD_IMAGES[key]).slice(0, limit);
console.log(`Fotoga mos so'zlar: ${words.size}, qidiriladigan: ${todo.length}${apply ? "" : " (ko'rib chiqish — --apply yo'q)"}`);
if (!apply) {
  for (const [, v] of todo.slice(0, 15)) console.log(`  ${v.code} · ${v.word} → "${v.query}"`);
  if (todo.length > 15) console.log(`  … va yana ${todo.length - 15} ta.`);
  process.exit(0);
}

const key = process.env.PEXELS_API_KEY;
if (!key) {
  console.error(".env.local da PEXELS_API_KEY kerak (bepul: https://www.pexels.com/api/).");
  process.exit(1);
}

type PexelsPhoto = { url: string; photographer: string; alt: string; src: { original: string } };

async function search(query: string): Promise<PexelsPhoto | null> {
  const url = `https://api.pexels.com/v1/search?${new URLSearchParams({
    query,
    per_page: String(Math.max(5, pickIndex + 1)),
    orientation: "square",
  })}`;
  const res = await fetch(url, { headers: { Authorization: key! } });
  if (res.status === 429) throw new Error("Pexels limiti tugadi (soatiga 200 so'rov) — keyinroq qayta ishga tushiring.");
  if (!res.ok) throw new Error(`Pexels ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const json = (await res.json()) as { photos: PexelsPhoto[] };
  return json.photos[pickIndex] ?? json.photos[0] ?? null;
}

/** lib/word-images.ts dagi ro'yxatni (alifbo tartibida) qayta yozadi. */
function saveMap(map: Record<string, WordImage>) {
  const src = readFileSync(MAP_FILE, "utf8");
  const body = Object.keys(map)
    .sort()
    .map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(map[k])},`)
    .join("\n");
  writeFileSync(
    MAP_FILE,
    src.replace(
      /export const WORD_IMAGES: Record<string, WordImage> = \{[\s\S]*?\n\};/,
      `export const WORD_IMAGES: Record<string, WordImage> = {\n${body}${body ? "\n" : ""}};`
    )
  );
}

async function main() {
  const map: Record<string, WordImage> = { ...WORD_IMAGES };
  let done = 0;
  let missing = 0;
  for (const [k, v] of todo) {
    const photo = await search(v.query);
    if (!photo) {
      missing++;
      console.log(`– ${v.code} · ${v.word}: foto topilmadi ("${v.query}")`);
      continue;
    }
    map[k] = {
      src: `${photo.src.original}?auto=compress&cs=tinysrgb&fit=crop&w=640&h=640`,
      by: photo.photographer,
      link: photo.url,
    };
    done++;
    if (done % 10 === 0) saveMap(map); // to'xtab qolsa ham yo'qolmaydi
    console.log(`✓ ${done}/${todo.length} ${v.code} · ${v.word} — ${photo.photographer}`);
  }
  saveMap(map);
  console.log(`\nTayyor: ${done} ta foto, topilmadi: ${missing} ta. lib/word-images.ts yangilandi.`);
}

main().catch((e) => {
  console.error((e as Error).message);
  process.exit(1);
});
