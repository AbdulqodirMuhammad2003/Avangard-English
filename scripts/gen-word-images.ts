/**
 * Aniq narsalarni bildiradigan lug'at so'zlariga Unsplash'dan bepul
 * fotosurat topadi va lib/word-images.ts ro'yxatini yangilaydi. Qaysi so'zga
 * foto olinishi va qanday qidirilishi — scripts/word-photo-queries.ts; u yerda
 * yo'q (mavhum) so'zlar emoji bilan qoladi. Rasmi bor so'zlar o'tkazib
 * yuboriladi (qayta tanlash uchun --force).
 *
 * Kalit .env.local dan: UNSPLASH_ACCESS_KEY (https://unsplash.com/oauth/applications).
 * Unsplash qoidalari: rasm Unsplash CDN'idan (images.unsplash.com) to'g'ridan
 * ko'rsatiladi, ostida fotograf va Unsplash nomi havola bilan yoziladi,
 * tanlangan rasm uchun download_location chaqiriladi.
 *
 * Demo kalit — soatiga 50 so'rov. Limit tugasa skript ro'yxatni saqlab,
 * keyingi soatgacha kutadi va davom etadi (to'xtatish — Ctrl+C, keyin qayta
 * ishga tushirilsa tayyorlari o'tkazib yuboriladi).
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
const UTM = "utm_source=avangard_english&utm_medium=referral";

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

const key = process.env.UNSPLASH_ACCESS_KEY;
if (!key) {
  console.error(".env.local da UNSPLASH_ACCESS_KEY kerak (https://unsplash.com/oauth/applications).");
  process.exit(1);
}

type UnsplashPhoto = {
  urls: { raw: string };
  links: { html: string; download_location: string };
  user: { name: string; links: { html: string } };
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const map: Record<string, WordImage> = { ...WORD_IMAGES };

/** Unsplash API so'rovi; limit tugasa ro'yxatni saqlab, kutib, qayta urinadi. */
async function api(url: string): Promise<Response> {
  for (;;) {
    const res = await fetch(url, { headers: { Authorization: `Client-ID ${key}`, "Accept-Version": "v1" } });
    const left = res.headers.get("x-ratelimit-remaining");
    const limited = res.status === 429 || (res.status === 403 && left === "0");
    if (!limited) {
      if (!res.ok) throw new Error(`Unsplash ${res.status}: ${(await res.text()).slice(0, 200)}`);
      return res;
    }
    saveMap(map);
    const at = new Date(Date.now() + 61 * 60_000);
    console.log(`… soatlik limit tugadi, ${at.toLocaleTimeString()} da davom etadi.`);
    await sleep(61 * 60_000);
  }
}

async function search(query: string, squarish = true): Promise<UnsplashPhoto | null> {
  const params = new URLSearchParams({ query, per_page: String(Math.max(5, pickIndex + 1)), content_filter: "high" });
  if (squarish) params.set("orientation", "squarish");
  const res = await api(`https://api.unsplash.com/search/photos?${params}`);
  const json = (await res.json()) as { results: UnsplashPhoto[] };
  const photo = json.results[pickIndex] ?? json.results[0] ?? null;
  // Kvadratga yaqini topilmasa — istalgan shakldagi (URL baribir kvadrat qirqadi).
  return photo ?? (squarish ? search(query, false) : null);
}

/** lib/word-images.ts dagi ro'yxatni (alifbo tartibida) qayta yozadi. */
function saveMap(m: Record<string, WordImage>) {
  const src = readFileSync(MAP_FILE, "utf8");
  const body = Object.keys(m)
    .sort()
    .map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(m[k])},`)
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
  let done = 0;
  let missing = 0;
  for (const [k, v] of todo) {
    const photo = await search(v.query);
    if (!photo) {
      missing++;
      console.log(`– ${v.code} · ${v.word}: foto topilmadi ("${v.query}")`);
      continue;
    }
    // Unsplash talabi: tanlangan rasm «yuklab olindi» deb belgilanadi.
    await api(photo.links.download_location).catch(() => {});
    map[k] = {
      src: `${photo.urls.raw}&w=640&h=640&fit=crop&crop=entropy&auto=format&q=70`,
      by: photo.user.name,
      link: `${photo.user.links.html}?${UTM}`,
    };
    done++;
    if (done % 10 === 0) saveMap(map); // to'xtab qolsa ham yo'qolmaydi
    console.log(`✓ ${done}/${todo.length} ${v.code} · ${v.word} — ${photo.user.name}`);
  }
  saveMap(map);
  console.log(`\nTayyor: ${done} ta foto, topilmadi: ${missing} ta. lib/word-images.ts yangilandi.`);
}

main().catch((e) => {
  saveMap(map);
  console.error((e as Error).message);
  process.exit(1);
});
