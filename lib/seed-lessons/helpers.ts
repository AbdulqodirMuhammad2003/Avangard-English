/** Dars fayllari uchun umumiy yordamchilar (lug'at so'zi va savol turlari). */
import type { SeedQuestion } from "../seed-exercises";
import type { VocabSeed } from "./types";

export type Rounds = { title: string; words: VocabSeed[] }[];

/** Lug'at so'zi. `transcription` — "IPA|o'zbekcha". */
export const w = (
  emoji: string,
  word: string,
  transcription: string,
  pos: string,
  uz: string,
  def: string,
  ex: string,
  exUz: string
): VocabSeed => ({ emoji, word, transcription, pos, uz, def, ex, exUz });

/** To'g'ri javob o'rni aniq ko'rsatiladigan savol. */
export const pick = (prompt: string, options: string[], correct: number, explanation?: string): SeedQuestion => ({
  prompt,
  options,
  correct,
  explanation,
});

/** To'g'ri javob birinchi yoziladi (seed paytida aralashtiriladi). */
export const say = (prompt: string, options: string[], explanation?: string): SeedQuestion => ({
  prompt,
  options,
  correct: 0,
  explanation,
});

/** «listen»: `audio` o'qiladi, u variantlardan biri bo'lishi kerak. */
export const listen = (audio: string, options: string[], explanation?: string): SeedQuestion => ({
  prompt: "Eshitganingizni toping",
  audio,
  options,
  correct: options.indexOf(audio),
  explanation,
});

/** «mistake»: gapdagi xato so'z oldiga `*` qo'yiladi. */
export const mistake = (sentence: string, explanation: string): SeedQuestion => {
  const tokens = sentence.split(" ");
  return {
    prompt: "Xato so'zni bosing",
    options: tokens.map((t) => t.replace(/^\*/, "")),
    correct: tokens.findIndex((t) => t.startsWith("*")),
    explanation,
  };
};

/** «truefalse» savollari uchun: bitta matnga bog'langan yasovchi. */
export const trueFalse =
  (text: string) =>
  (statement: string, isTrue: boolean, explanation?: string): SeedQuestion => ({
    prompt: `${text}||${statement}`,
    options: ["To'g'ri", "Noto'g'ri"],
    correct: isTrue ? 0 : 1,
    explanation,
  });

/** «reading» savollari: matn + savol, to'g'ri javob birinchi. */
export const reading =
  (text: string) =>
  (question: string, options: string[], explanation?: string): SeedQuestion => ({
    prompt: `${text}||${question}`,
    options,
    correct: 0,
    explanation,
  });

/** «audiotext» savollari: tinglanadigan matn, to'g'ri javob birinchi. */
export const hearing =
  (audio: string) =>
  (question: string, options: string[], explanation?: string): SeedQuestion => ({
    prompt: question,
    audio,
    options,
    correct: 0,
    explanation,
  });

/** «audiotext»: ikki to'g'ri javobli savol («Choose TWO»). `answer` — to'g'ri
 *  variantlar "|" bilan; ikkinchi to'g'ri javob xatolar orasiga qo'yiladi,
 *  birinchisini mixAnswers aralashtiradi. */
export const hearingTwo =
  (audio: string) =>
  (question: string, right: [string, string], wrong: string[], explanation?: string): SeedQuestion => ({
    prompt: question,
    audio,
    options: [right[0], wrong[0], right[1], ...wrong.slice(1)],
    correct: 0,
    answer: right.join("|"),
    explanation,
  });

/** [prompt, answer, explanation?] juftlaridan yozma savollar (type, fill). */
export const written = (rows: (string | undefined)[][]): SeedQuestion[] =>
  rows.map(([prompt, answer, explanation]) => ({ prompt: prompt!, answer, explanation }));

/** «order»: gaplardan savollar. */
export const sentences = (list: string[]): SeedQuestion[] => list.map((answer) => ({ prompt: "Gap tuzing", answer }));

/** «speak»: iboralardan savollar. */
export const phrases = (list: string[]): SeedQuestion[] => list.map((p) => ({ prompt: p, answer: p }));

/** «listenmatch»: ro'yxatli trek — har bir raqamga (chap) javob (o'ng) tanlanadi. */
export const slots = (audio: string, rows: [string, string][]): SeedQuestion => ({
  prompt: "Tinglab, har bir raqamga javobni tanlang",
  audio,
  options: rows.map(([label, answer]) => `${label}|${answer}`),
});

/** «listengap»: tinglab, har bir gapdagi bo'sh joy uchun o'z variantlaridan
 *  tanlash. Qator: [gap ___ bilan, to'g'ri javob, ...xato variantlar]. */
export const gaps = (audio: string, rows: string[][]): SeedQuestion => ({
  prompt: "Tinglab, har bir gapni to'ldiring",
  audio,
  options: rows.map((r) => r.join("|")),
});

/** «match»: 4 tadan "chap|o'ng" juftlar. */
export const pairs = (sets: string[][]): SeedQuestion[] => sets.map((options) => ({ prompt: "Juftlarni ulang", options }));

/** «stress»: "bo'g'in|bo'g'in" + urg'uli bo'g'in o'rni. */
export const stress = (rows: [string, number, string?][]): SeedQuestion[] =>
  rows.map(([syllables, correct, explanation]) => ({
    prompt: "Urg'uli bo'g'inni toping",
    audio: syllables.replace(/\|/g, ""),
    options: syllables.split("|"),
    correct,
    explanation,
  }));

/** «number»: inglizcha son o'qiladi, raqam bilan yoziladi. */
export const numbers = (rows: [string, string, string?][]): SeedQuestion[] =>
  rows.map(([audio, answer, explanation]) => ({ prompt: "Raqamni yozing", audio, answer, explanation }));

/** «dictation»: eshitilgan so'z/gapni yozish. */
export const dictation = (list: string[]): SeedQuestion[] =>
  list.map((text) => ({ prompt: "Eshitganingizni yozing", audio: text, answer: text }));
