/** Mazmuni tayyor darslar: unit kodi → lug'at bosqichlari va mashqlar.
 *  Yangi dars qo'shilganda shu ro'yxatga qo'shiladi. */
import { mixAnswers, type SeedExercise } from "../seed-exercises";
import type { VocabSeed } from "./types";
import { A1_00_EXERCISES, A1_00_ROUNDS } from "./a1-00-alphabet";
import { A1_01_EXERCISES, A1_01_ROUNDS } from "./a1-01-hello";
import { A1_02_EXERCISES, A1_02_ROUNDS } from "./a1-02-where-from";
import { A1_03_EXERCISES, A1_03_ROUNDS } from "./a1-03-spell";
import { A1_04_EXERCISES, A1_04_ROUNDS } from "./a1-04-what-is-this";
import { A1_05_EXERCISES, A1_05_ROUNDS } from "./a1-05-jobs";
import { A1_06_EXERCISES, A1_06_ROUNDS } from "./a1-06-where-time";
import { A1_07_EXERCISES, A1_07_ROUNDS } from "./a1-07-neighbours";
import { A1_08_EXERCISES, A1_08_ROUNDS } from "./a1-08-things";
import { A1_09_EXERCISES, A1_09_ROUNDS } from "./a1-09-family";
import { A1_10_EXERCISES, A1_10_ROUNDS } from "./a1-10-about-me";
import { A1_11_EXERCISES, A1_11_ROUNDS } from "./a1-11-journeys";
import { A1_12_EXERCISES, A1_12_ROUNDS } from "./a1-12-my-day";
import { A1_13_EXERCISES, A1_13_ROUNDS } from "./a1-13-clothes";
import { A1_14_EXERCISES, A1_14_ROUNDS } from "./a1-14-buildings";
import { A1_15_EXERCISES, A1_15_ROUNDS } from "./a1-15-style";
import { A1_16_EXERCISES, A1_16_ROUNDS } from "./a1-16-my-town";
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
  { code: "A1-05", rounds: A1_05_ROUNDS, exercises: A1_05_EXERCISES },
  { code: "A1-06", rounds: A1_06_ROUNDS, exercises: A1_06_EXERCISES },
  { code: "A1-07", rounds: A1_07_ROUNDS, exercises: A1_07_EXERCISES },
  { code: "A1-08", rounds: A1_08_ROUNDS, exercises: A1_08_EXERCISES },
  { code: "A1-09", rounds: A1_09_ROUNDS, exercises: A1_09_EXERCISES },
  { code: "A1-10", rounds: A1_10_ROUNDS, exercises: A1_10_EXERCISES },
  { code: "A1-11", rounds: A1_11_ROUNDS, exercises: A1_11_EXERCISES },
  { code: "A1-12", rounds: A1_12_ROUNDS, exercises: A1_12_EXERCISES },
  { code: "A1-13", rounds: A1_13_ROUNDS, exercises: A1_13_EXERCISES },
  { code: "A1-14", rounds: A1_14_ROUNDS, exercises: A1_14_EXERCISES },
  { code: "A1-15", rounds: A1_15_ROUNDS, exercises: A1_15_EXERCISES },
  { code: "A1-16", rounds: A1_16_ROUNDS, exercises: A1_16_EXERCISES },
];

/** Har bir darsning «Qoida» bo'limi (sodda tushuntirish + 10 ta test) —
 *  mashqlar ro'yxatining boshiga qo'yiladi. */
const RULES: Record<string, SeedExercise> = { ...A1_RULES, ...A2_RULES, ...B1_RULES, ...B2_RULES };

export const LESSON_CONTENT: LessonContent[] = LESSONS.map((l) => ({
  ...l,
  exercises: withMixedAnswers(RULES[l.code] ? [RULES[l.code], ...l.exercises] : l.exercises),
}));
