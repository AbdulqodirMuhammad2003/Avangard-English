/**
 * Litsenziyalangan audio/videoni Supabase Storage'ning yopiq bucket'iga
 * yuklaydi (lib/media.ts). Kalitlar .env.local dan: SUPABASE_URL,
 * SUPABASE_SERVICE_ROLE_KEY.
 *
 *   npm run media:upload -- <papka> <bucket ichidagi papka> [--apply]
 *   npm run media:upload -- "C:/…/Navigate A2 Audio" navigate-a2/audio --apply
 *
 * Papkadagi .mp3/.mp4 fayllar (ichki papkalar ham) qisqa nomlar bilan
 * yuklanadi: Track_1.2.mp3 → 1.2.mp3, GR/Track_GR_1.1a.mp3 → gr-1.1a.mp3,
 * report_u01_olb.mp4 → report-01.mp4, voxpops_video_11_1.mp4 → voxpops-11-1.mp4.
 * Bor fayl ustidan yoziladi. --apply siz faqat ro'yxat ko'rsatiladi.
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { MEDIA_BUCKET } from "../lib/media";

const [srcDir, destDir] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const apply = process.argv.includes("--apply");
if (!srcDir || !destDir) {
  console.error("Foydalanish: npm run media:upload -- <papka> <bucket ichidagi papka> [--apply]");
  process.exit(1);
}

const base = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!base || !key) {
  console.error(".env.local da SUPABASE_URL va SUPABASE_SERVICE_ROLE_KEY kerak.");
  process.exit(1);
}
const headers = { Authorization: `Bearer ${key}`, apikey: key };

const shortName = (file: string) =>
  file
    .replace(/^Track_GR_/, "gr-")
    .replace(/^Track_/, "")
    .replace(/^report_u(\d+)_olb/, "report-$1")
    .replace(/^voxpops_video_/, "voxpops-")
    .replace(/_/g, "-");

function listFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? listFiles(path) : /\.(mp3|mp4)$/i.test(name) ? [path] : [];
  });
}

async function ensureBucket() {
  const res = await fetch(`${base}/storage/v1/bucket/${MEDIA_BUCKET}`, { headers });
  if (res.ok) {
    const bucket = (await res.json()) as { public: boolean };
    if (bucket.public) throw new Error(`«${MEDIA_BUCKET}» bucket ochiq (public) — yopiq bo'lishi kerak.`);
    return;
  }
  const created = await fetch(`${base}/storage/v1/bucket`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ id: MEDIA_BUCKET, name: MEDIA_BUCKET, public: false }),
  });
  if (!created.ok) throw new Error(`Bucket yaratilmadi: ${created.status} ${await created.text()}`);
  console.log(`+ bucket «${MEDIA_BUCKET}» (yopiq)`);
}

async function main() {
  const files = listFiles(srcDir).sort();
  const targets = files.map((f) => ({ file: f, dest: `${destDir}/${shortName(f.split(/[\\/]/).pop()!)}` }));
  const dupes = targets.filter((t, i) => targets.findIndex((u) => u.dest === t.dest) !== i);
  if (dupes.length) throw new Error(`Bir xil nomlar: ${dupes.map((d) => d.dest).join(", ")}`);

  const mb = files.reduce((s, f) => s + statSync(f).size, 0) / 1e6;
  console.log(`${files.length} ta fayl, ${mb.toFixed(1)} MB → ${MEDIA_BUCKET}/${destDir}`);
  if (!apply) {
    for (const t of targets.slice(0, 10)) console.log(`  ${relative(srcDir, t.file)} → ${t.dest}`);
    console.log("Sinov rejimi. Yuklash uchun --apply qo'shing.");
    return;
  }

  await ensureBucket();
  let done = 0;
  for (const t of targets) {
    const type = t.dest.endsWith(".mp4") ? "video/mp4" : "audio/mpeg";
    const res = await fetch(`${base}/storage/v1/object/${MEDIA_BUCKET}/${t.dest}`, {
      method: "POST",
      headers: { ...headers, "Content-Type": type, "x-upsert": "true", "Cache-Control": "max-age=31536000" },
      body: readFileSync(t.file),
    });
    if (!res.ok) throw new Error(`${t.dest}: ${res.status} ${await res.text()}`);
    if (++done % 20 === 0 || done === targets.length) console.log(`  ${done}/${targets.length}`);
  }
  console.log("Tayyor.");
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
