/**
 * Dars kontentini bazaga yozishdan oldin tekshiradi (bazaga ulanmaydi):
 *
 *   npm run lessons:check
 *
 * Lug'at: so'z misol gapida butun so'z bo'lib uchraydi («Gap» bosqichi uni
 * bo'sh joyga aylantiradi), talaffuz "IPA|o'zbekcha" ko'rinishida, darslar
 * orasida takror so'z yo'q. Mashqlar: har bir turning formati, to'g'ri javob
 * variantlar ichida. Har bir dars uchun «Qoida» bor. Xato bo'lsa — exit 1.
 */
import { LESSON_CONTENT } from "../lib/seed-lessons";
import { UNITS } from "../lib/seed-data";
import { normalizeAnswer } from "../lib/english-speech";

const errors: string[] = [];
const warnings: string[] = [];
const seenWords = new Map<string, string>();

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const inSentence = (word: string, sentence: string) =>
  new RegExp(`(?<![A-Za-z'])${escape(word)}(?![A-Za-z'])`, "i").test(sentence);

for (const lesson of LESSON_CONTENT) {
  const at = (where: string) => `${lesson.code} · ${where}`;
  if (!UNITS.some((u) => u.code === lesson.code)) errors.push(at("UNITS ro'yxatida yo'q"));

  let words = 0;
  for (const round of lesson.rounds) {
    for (const w of round.words) {
      words++;
      const where = at(`${round.title} · ${w.word}`);
      if (!inSentence(w.word, w.ex)) errors.push(`${where}: so'z misol gapida butun so'z sifatida yo'q`);
      const [ipa, uz] = w.transcription.split("|");
      if (!ipa?.trim() || !uz?.trim()) errors.push(`${where}: talaffuz "IPA|o'zbekcha" emas`);
      if (/[ɪʊəɜɒʌæθðŋʃʒː]/.test(uz ?? "")) warnings.push(`${where}: o'zbekcha talaffuzda IPA belgisi bor (${uz})`);
      for (const [k, v] of Object.entries({ emoji: w.emoji, pos: w.pos, uz: w.uz, def: w.def, exUz: w.exUz })) {
        if (!v?.trim()) errors.push(`${where}: ${k} bo'sh`);
      }
      const key = w.word.toLowerCase();
      if (seenWords.has(key)) warnings.push(`${where}: so'z ${seenWords.get(key)} darsida ham bor`);
      else seenWords.set(key, lesson.code);
    }
  }

  const rules = lesson.exercises.filter((e) => e.kind === "rule");
  if (rules.length !== 1) errors.push(at(`«Qoida» soni ${rules.length} (1 bo'lishi kerak)`));
  const practice = lesson.exercises.length - rules.length;

  for (const ex of lesson.exercises) {
    for (const [i, q] of ex.questions.entries()) {
      const where = at(`«${ex.title}» ${i + 1}-savol`);
      const opts = q.options ?? [];
      const needsOptions = ["choice", "listen", "dialog", "picture", "situation", "truefalse", "reading", "audiotext", "rule", "stress", "mistake"];
      if (needsOptions.includes(ex.kind)) {
        if (opts.length < 2) errors.push(`${where}: variantlar yo'q`);
        if ((q.correct ?? 0) < 0 || (q.correct ?? 0) >= opts.length) errors.push(`${where}: to'g'ri javob variantlar ichida emas`);
        // «mistake» da gap so'zlari takrorlanishi tabiiy (he … he) — tugma o'rni bo'yicha ishlaydi.
        if (ex.kind !== "mistake" && new Set(opts).size !== opts.length) errors.push(`${where}: takroriy variant`);
      }
      switch (ex.kind) {
        case "listen":
          // Odatda audio — variantlardan biri; harflab aytilgan so'zda (A, Z, I, Z) farq qiladi.
          if (!q.audio) errors.push(`${where}: audio yo'q`);
          else if (!opts.includes(q.audio) && !q.audio.includes(", ")) errors.push(`${where}: audio variantlar ichida yo'q`);
          break;
        case "match":
          if (!opts.every((o) => o.split("|").length === 2)) errors.push(`${where}: juft "chap|o'ng" emas`);
          break;
        case "listenmatch":
          if (!q.audio) errors.push(`${where}: audio yo'q`);
          if (opts.length < 2 || !opts.every((o) => o.split("|").length === 2)) errors.push(`${where}: juft "raqam|javob" emas`);
          break;
        case "stress":
          if (opts.join("").toLowerCase() !== (q.audio ?? "").toLowerCase()) errors.push(`${where}: bo'g'inlar so'zga teng emas`);
          break;
        case "fill":
          if (!q.prompt.includes("___")) errors.push(`${where}: "___" yo'q`);
          if (!q.answer) errors.push(`${where}: javob yo'q`);
          break;
        case "type":
        case "dictation":
        case "number":
        case "order":
        case "anagram":
          if (!q.answer?.trim()) errors.push(`${where}: javob yo'q`);
          if (ex.kind === "anagram" && q.answer && normalizeAnswer(q.prompt.split("").sort().join("")) !== normalizeAnswer(q.answer.split("").sort().join("")))
            errors.push(`${where}: harflar javobga mos emas`);
          break;
        case "truefalse":
        case "reading":
          if (!q.prompt.includes("||")) errors.push(`${where}: "matn||savol" emas`);
          break;
        case "audiotext":
          if (!q.audio) errors.push(`${where}: tinglanadigan matn yo'q`);
          break;
        case "mistake":
          if (q.correct === -1) errors.push(`${where}: xato so'z belgilanmagan (*)`);
          break;
      }
    }
  }
  console.log(`${lesson.code}: ${words} so'z, ${practice} mashq + qoida`);
}

for (const w of warnings) console.warn(`! ${w}`);
for (const e of errors) console.error(`✗ ${e}`);
console.log(errors.length ? `\n${errors.length} ta xato.` : "\n✓ Xato yo'q.");
process.exit(errors.length ? 1 : 0);
