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
import { A1_17_EXERCISES, A1_17_ROUNDS } from "./a1-17-hotel";
import { A1_18_EXERCISES, A1_18_ROUNDS } from "./a1-18-home";
import { A1_19_EXERCISES, A1_19_ROUNDS } from "./a1-19-abilities";
import { A1_20_EXERCISES, A1_20_ROUNDS } from "./a1-20-requests";
import { A1_21_EXERCISES, A1_21_ROUNDS } from "./a1-21-hobbies";
import { A1_22_EXERCISES, A1_22_ROUNDS } from "./a1-22-childhood";
import { A1_23_EXERCISES, A1_23_ROUNDS } from "./a1-23-past-lives";
import { A1_24_EXERCISES, A1_24_ROUNDS } from "./a1-24-special-moments";
import { A1_25_EXERCISES, A1_25_ROUNDS } from "./a1-25-memories";
import { A1_26_EXERCISES, A1_26_ROUNDS } from "./a1-26-excuses";
import { A1_27_EXERCISES, A1_27_ROUNDS } from "./a1-27-news";
import { A1_28_EXERCISES, A1_28_ROUNDS } from "./a1-28-plans";
import { A1_29_EXERCISES, A1_29_ROUNDS } from "./a1-29-new-life";
import { A1_30_EXERCISES, A1_30_ROUNDS } from "./a1-30-cafe";
import { A1_T_EXERCISES, A1_T_ROUNDS } from "./a1-t-review";
import { A2_01_EXERCISES, A2_01_ROUNDS } from "./a2-01-multicultural";
import { A2_02_EXERCISES, A2_02_ROUNDS } from "./a2-02-family";
import { A2_03_EXERCISES, A2_03_ROUNDS } from "./a2-03-scientist";
import { A2_04_EXERCISES, A2_04_ROUNDS } from "./a2-04-space";
import { A2_05_EXERCISES, A2_05_ROUNDS } from "./a2-05-arrangements";
import { A2_06_EXERCISES, A2_06_ROUNDS } from "./a2-06-jobs";
import { A2_07_EXERCISES, A2_07_ROUNDS } from "./a2-07-work";
import { A2_08_EXERCISES, A2_08_ROUNDS } from "./a2-08-requests";
import { A2_10_EXERCISES, A2_10_ROUNDS } from "./a2-10-home";
import { A2_11_EXERCISES, A2_11_ROUNDS } from "./a2-11-directions";
import { A2_12_EXERCISES, A2_12_ROUNDS } from "./a2-12-shopping";
import { A2_13_EXERCISES, A2_13_ROUNDS } from "./a2-13-wearing";
import { A2_14_EXERCISES, A2_14_ROUNDS } from "./a2-14-in-a-shop";
import { A2_15_EXERCISES, A2_15_ROUNDS } from "./a2-15-dont-give-up";
import { A2_16_EXERCISES, A2_16_ROUNDS } from "./a2-16-stories";
import { A2_17_EXERCISES, A2_17_ROUNDS } from "./a2-17-healthy";
import { A2_18_EXERCISES, A2_18_ROUNDS } from "./a2-18-sporting-heroes";
import { A2_19_EXERCISES, A2_19_ROUNDS } from "./a2-19-holidays";
import { A2_20_EXERCISES, A2_20_ROUNDS } from "./a2-20-journeys";
import { A2_21_EXERCISES, A2_21_ROUNDS } from "./a2-21-food";
import { A2_22_EXERCISES, A2_22_ROUNDS } from "./a2-22-kitchen";
import { A2_23_EXERCISES, A2_23_ROUNDS } from "./a2-23-weather";
import { A2_24_EXERCISES, A2_24_ROUNDS } from "./a2-24-natural-wonders";
import { A2_09_EXERCISES, A2_09_ROUNDS } from "./a2-09-places";
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
  { code: "A1-17", rounds: A1_17_ROUNDS, exercises: A1_17_EXERCISES },
  { code: "A1-18", rounds: A1_18_ROUNDS, exercises: A1_18_EXERCISES },
  { code: "A1-19", rounds: A1_19_ROUNDS, exercises: A1_19_EXERCISES },
  { code: "A1-20", rounds: A1_20_ROUNDS, exercises: A1_20_EXERCISES },
  { code: "A1-21", rounds: A1_21_ROUNDS, exercises: A1_21_EXERCISES },
  { code: "A1-22", rounds: A1_22_ROUNDS, exercises: A1_22_EXERCISES },
  { code: "A1-23", rounds: A1_23_ROUNDS, exercises: A1_23_EXERCISES },
  { code: "A1-24", rounds: A1_24_ROUNDS, exercises: A1_24_EXERCISES },
  { code: "A1-25", rounds: A1_25_ROUNDS, exercises: A1_25_EXERCISES },
  { code: "A1-26", rounds: A1_26_ROUNDS, exercises: A1_26_EXERCISES },
  { code: "A1-27", rounds: A1_27_ROUNDS, exercises: A1_27_EXERCISES },
  { code: "A1-28", rounds: A1_28_ROUNDS, exercises: A1_28_EXERCISES },
  { code: "A1-29", rounds: A1_29_ROUNDS, exercises: A1_29_EXERCISES },
  { code: "A1-30", rounds: A1_30_ROUNDS, exercises: A1_30_EXERCISES },
  { code: "A1-T", rounds: A1_T_ROUNDS, exercises: A1_T_EXERCISES },
  { code: "A2-01", rounds: A2_01_ROUNDS, exercises: A2_01_EXERCISES },
  { code: "A2-02", rounds: A2_02_ROUNDS, exercises: A2_02_EXERCISES },
  { code: "A2-03", rounds: A2_03_ROUNDS, exercises: A2_03_EXERCISES },
  { code: "A2-04", rounds: A2_04_ROUNDS, exercises: A2_04_EXERCISES },
  { code: "A2-05", rounds: A2_05_ROUNDS, exercises: A2_05_EXERCISES },
  { code: "A2-06", rounds: A2_06_ROUNDS, exercises: A2_06_EXERCISES },
  { code: "A2-07", rounds: A2_07_ROUNDS, exercises: A2_07_EXERCISES },
  { code: "A2-08", rounds: A2_08_ROUNDS, exercises: A2_08_EXERCISES },
  { code: "A2-10", rounds: A2_10_ROUNDS, exercises: A2_10_EXERCISES },
  { code: "A2-11", rounds: A2_11_ROUNDS, exercises: A2_11_EXERCISES },
  { code: "A2-12", rounds: A2_12_ROUNDS, exercises: A2_12_EXERCISES },
  { code: "A2-13", rounds: A2_13_ROUNDS, exercises: A2_13_EXERCISES },
  { code: "A2-14", rounds: A2_14_ROUNDS, exercises: A2_14_EXERCISES },
  { code: "A2-15", rounds: A2_15_ROUNDS, exercises: A2_15_EXERCISES },
  { code: "A2-16", rounds: A2_16_ROUNDS, exercises: A2_16_EXERCISES },
  { code: "A2-17", rounds: A2_17_ROUNDS, exercises: A2_17_EXERCISES },
  { code: "A2-18", rounds: A2_18_ROUNDS, exercises: A2_18_EXERCISES },
  { code: "A2-19", rounds: A2_19_ROUNDS, exercises: A2_19_EXERCISES },
  { code: "A2-20", rounds: A2_20_ROUNDS, exercises: A2_20_EXERCISES },
  { code: "A2-21", rounds: A2_21_ROUNDS, exercises: A2_21_EXERCISES },
  { code: "A2-22", rounds: A2_22_ROUNDS, exercises: A2_22_EXERCISES },
  { code: "A2-23", rounds: A2_23_ROUNDS, exercises: A2_23_EXERCISES },
  { code: "A2-24", rounds: A2_24_ROUNDS, exercises: A2_24_EXERCISES },
  { code: "A2-09", rounds: A2_09_ROUNDS, exercises: A2_09_EXERCISES },
];

/** Har bir darsning «Qoida» bo'limi (sodda tushuntirish + 10 ta test) —
 *  mashqlar ro'yxatining boshiga qo'yiladi. */
const RULES: Record<string, SeedExercise> = { ...A1_RULES, ...A2_RULES, ...B1_RULES, ...B2_RULES };

export const LESSON_CONTENT: LessonContent[] = LESSONS.map((l) => ({
  ...l,
  exercises: withMixedAnswers(RULES[l.code] ? [RULES[l.code], ...l.exercises] : l.exercises),
}));
