/**
 * Lug'at so'zlari uchun AI 3D rasmlar yasaydi, media bucket'ga yuklaydi va
 * lib/word-images.ts ro'yxatini yangilaydi. Rasmi bor so'zlar o'tkazib
 * yuboriladi (qayta yasash uchun --force).
 *
 * Kalitlar .env.local dan: OPENAI_API_KEY, SUPABASE_URL,
 * SUPABASE_SERVICE_ROLE_KEY. Model: OPENAI_IMAGE_MODEL (standart gpt-image-1).
 *
 *   npm run words:images -- --unit A1-03                  # faqat ro'yxat va promptlar
 *   npm run words:images -- --unit A1-03 --apply          # yasash + yuklash
 *   npm run words:images -- --level A2 --limit 50 --apply
 *   npm run words:images -- --word interrupt --force --apply
 *
 * Yasalgan fayllar .word-images/ papkasida ham qoladi (git'ga kirmaydi).
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { LESSON_CONTENT } from "../lib/seed-lessons";
import type { VocabSeed } from "../lib/seed-lessons/types";
import { MEDIA_BUCKET } from "../lib/media";
import { WORD_IMAGES, wordImageKey } from "../lib/word-images";

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
const limit = Number(opt("limit") ?? Infinity);
const concurrency = Number(opt("concurrency") ?? 3);

const OUT_DIR = ".word-images";
const MAP_FILE = "lib/word-images.ts";
const model = process.env.OPENAI_IMAGE_MODEL || "gpt-image-1";

/** Hamma rasmlar bir xil uslubda chiqishi uchun umumiy uslub. */
const STYLE = [
  "Charming stylized 3D render, soft clay / Pixar-like look, rounded friendly shapes,",
  "warm palette of saffron orange, soft indigo and cream accents, soft studio lighting,",
  "gentle shadow under the subject, plain very light warm-cream background, centered,",
  "one clear scene that a language learner instantly connects with this exact meaning.",
  "If people appear, show friendly stylized characters with diverse, including Central Asian, looks.",
  "Absolutely no text, letters, numbers, captions, speech-bubble words, logos or watermarks.",
].join(" ");

function promptFor(w: VocabSeed) {
  return [
    `Illustrate the English ${w.pos === "fe'l" ? "verb" : w.pos === "sifat" ? "adjective" : "word or phrase"} "${w.word}".`,
    `Meaning: ${w.def}`,
    `Example of use: "${w.ex}"`,
    "Show the meaning concretely (an action, situation or object), not a generic symbol.",
    STYLE,
  ].join("\n");
}

const slug = (word: string) =>
  wordImageKey(word)
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "word";

// So'zlarni yig'amiz (bir so'z bir necha darsda bo'lsa — birinchisi).
const words = new Map<string, { w: VocabSeed; code: string }>();
for (const lesson of LESSON_CONTENT) {
  if (unit && lesson.code !== unit) continue;
  if (level && !lesson.code.startsWith(`${level}-`)) continue;
  for (const round of lesson.rounds)
    for (const w of round.words) {
      const key = wordImageKey(w.word);
      if (only && key !== wordImageKey(only)) continue;
      if (!words.has(key)) words.set(key, { w, code: lesson.code });
    }
}
const todo = [...words.entries()].filter(([key]) => force || !WORD_IMAGES[key]).slice(0, limit);

console.log(`So'zlar: ${words.size}, yasaladigan: ${todo.length}${apply ? "" : " (ko'rib chiqish — --apply yo'q)"}`);
if (!apply) {
  for (const [, { w, code }] of todo.slice(0, 5)) console.log(`\n— ${code} · ${w.word}\n${promptFor(w)}`);
  if (todo.length > 5) console.log(`\n… va yana ${todo.length - 5} ta.`);
  process.exit(0);
}

const openaiKey = process.env.OPENAI_API_KEY;
const base = process.env.SUPABASE_URL;
const sbKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!openaiKey || !base || !sbKey) {
  console.error(".env.local da OPENAI_API_KEY, SUPABASE_URL va SUPABASE_SERVICE_ROLE_KEY kerak.");
  process.exit(1);
}
mkdirSync(OUT_DIR, { recursive: true });

async function generate(w: VocabSeed): Promise<Buffer> {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { Authorization: `Bearer ${openaiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      prompt: promptFor(w),
      size: "1024x1024",
      quality: "medium",
      output_format: "webp",
      output_compression: 80,
      n: 1,
    }),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const json = (await res.json()) as { data: { b64_json: string }[] };
  return Buffer.from(json.data[0].b64_json, "base64");
}

async function upload(file: string, body: Buffer) {
  const res = await fetch(`${base}/storage/v1/object/${MEDIA_BUCKET}/word-images/${file}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${sbKey}`, apikey: sbKey!, "Content-Type": "image/webp", "x-upsert": "true" },
    body: new Uint8Array(body),
  });
  if (!res.ok) throw new Error(`Supabase ${res.status}: ${(await res.text()).slice(0, 200)}`);
}

/** lib/word-images.ts dagi ro'yxatni (alifbo tartibida) qayta yozadi. */
function saveMap(map: Record<string, string>) {
  const src = readFileSync(MAP_FILE, "utf8");
  const body = Object.keys(map)
    .sort()
    .map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(map[k])},`)
    .join("\n");
  const next = src.replace(
    /export const WORD_IMAGES: Record<string, string> = \{[\s\S]*?\n\};/,
    `export const WORD_IMAGES: Record<string, string> = {\n${body}${body ? "\n" : ""}};`
  );
  writeFileSync(MAP_FILE, next);
}

const map: Record<string, string> = { ...WORD_IMAGES };
let done = 0;
let failed = 0;
const queue = [...todo];
async function worker() {
  while (queue.length) {
    const [key, { w, code }] = queue.shift()!;
    const file = `${slug(w.word)}.webp`;
    try {
      const local = join(OUT_DIR, file);
      const img = !force && existsSync(local) ? readFileSync(local) : await generate(w);
      writeFileSync(local, img);
      await upload(file, img);
      map[key] = file;
      saveMap(map); // har rasmdan keyin — to'xtab qolsa ham yo'qolmaydi
      done++;
      console.log(`✓ ${done}/${todo.length} ${code} · ${w.word} → ${file}`);
    } catch (e) {
      failed++;
      console.error(`✗ ${code} · ${w.word}: ${(e as Error).message}`);
    }
  }
}
Promise.all(Array.from({ length: Math.max(1, concurrency) }, worker)).then(() =>
  console.log(`\nTayyor: ${done} ta, xato: ${failed} ta. lib/word-images.ts yangilandi.`)
);
