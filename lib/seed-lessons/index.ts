/** Mazmuni tayyor darslar: unit kodi → lug'at bosqichlari va mashqlar.
 *  Yangi dars qo'shilganda shu ro'yxatga qo'shiladi. */
import { mixAnswers, type SeedExercise } from "../seed-exercises";
import type { VocabSeed } from "./types";
import { A1_00_EXERCISES, A1_00_ROUNDS } from "./a1-00-alphabet";
import { A1_01_EXERCISES, A1_01_ROUNDS } from "./a1-01-hello";
import { A1_02_EXERCISES, A1_02_ROUNDS } from "./a1-02-where-from";
import { A1_03_EXERCISES, A1_03_ROUNDS } from "./a1-03-spell";
import { A1_04_EXERCISES, A1_04_ROUNDS } from "./a1-04-what-is-this";
import { A1_RULES } from "./rules/a1";
import { A2_RULES } from "./rules/a2";
import { B1_RULES } from "./rules/b1";
import { B2_RULES } from "./rules/b2";

export interface LessonContent {
  code: string;
  rounds: { title: string; words: VocabSeed[] }[];
  exercises: SeedExercise[];
}

/** Mualliflik qulayligi uchun to'g'ri javob ko'pincha birinchi yoziladi —
 *  bu yerda u har bir savolda boshqa o'ringa ko'chiriladi. Qat'iy tartibli
 *  variantlar to'plamidan foydalanadigan mashqlar (am/is/are, in/on/at, a/an —
 *  bir yoki ikki to'plam, har biri bir necha savolda) va tartibi muhim turlar
 *  (match, stress, truefalse) tegilmaydi. */
const MIXED_KINDS = new Set([
  "listen", "dialog", "picture", "situation", "choice", "reading", "audiotext", "rule",
]);

function withMixedAnswers(exercises: SeedExercise[]): SeedExercise[] {
  return exercises.map((e) => {
    if (!MIXED_KINDS.has(e.kind)) return e;
    const setUse = new Map<string, number>();
    for (const q of e.questions) {
      const key = (q.options ?? []).join("|");
      setUse.set(key, (setUse.get(key) ?? 0) + 1);
    }
    const fixedSets = setUse.size <= 2 && [...setUse.values()].every((n) => n >= 3);
    return fixedSets ? e : { ...e, questions: mixAnswers(e.questions) };
  });
}

// Yangi dars: lib/seed-lessons/<kod>.ts faylida ROUNDS va EXERCISES
// yoziladi va shu ro'yxatga qo'shiladi.
const LESSONS: LessonContent[] = [
  { code: "A1-00", rounds: A1_00_ROUNDS, exercises: A1_00_EXERCISES },
  { code: "A1-01", rounds: A1_01_ROUNDS, exercises: A1_01_EXERCISES },
  { code: "A1-02", rounds: A1_02_ROUNDS, exercises: A1_02_EXERCISES },
  { code: "A1-03", rounds: A1_03_ROUNDS, exercises: A1_03_EXERCISES },
  { code: "A1-04", rounds: A1_04_ROUNDS, exercises: A1_04_EXERCISES },
];

/** Har bir darsning «Qoida» bo'limi (sodda tushuntirish + 10 ta test) —
 *  mashqlar ro'yxatining boshiga qo'yiladi. */
const RULES: Record<string, SeedExercise> = { ...A1_RULES, ...A2_RULES, ...B1_RULES, ...B2_RULES };

export const LESSON_CONTENT: LessonContent[] = LESSONS.map((l) => ({
  ...l,
  exercises: withMixedAnswers(RULES[l.code] ? [RULES[l.code], ...l.exercises] : l.exercises),
}));
