/**
 * Daraja yakuniy imtihonlarining grammatika savollari banki.
 * Imtihon qanday tuzilishi va baholanishi — lib/exam.ts da.
 *
 * Har bir savolda to'g'ri javob birinchi yoziladi — variantlar imtihon
 * tuzilayotganda aralashtiriladi.
 */

import { A1_EXAM_BANK } from "./exam-banks/a1";

export interface ExamGrammarItem {
  prompt: string;
  /** options[0] — to'g'ri javob. */
  options: string[];
  explanation: string;
}

/** Daraja kodi → (dars kodi → shu dars grammatikasi bo'yicha savollar,
 *  har birida 5 ta). Bank bo'sh daraja uchun imtihon hali ochilmaydi. */
export const GRAMMAR_BANKS: Record<string, Record<string, ExamGrammarItem[]>> = {
  A1: A1_EXAM_BANK,
  A2: {},
  B1: {},
  B2: {},
};
