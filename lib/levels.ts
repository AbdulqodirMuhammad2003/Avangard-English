/**
 * Darajalar: CEFR (A1–B2) va oxirida IELTS'ga tayyorlov. Har bir darajaning
 * taxminiy IELTS bali ko'rsatiladi. Seed (lib/seed-data.ts), darslar sahifasi,
 * sertifikat va qo'llanmalar shu ro'yxatdan foydalanadi.
 */
export interface LevelInfo {
  code: string;
  /** O'zbekcha nomi. */
  uz: string;
  /** Inglizcha (CEFR) nomi. */
  en: string;
  /** Taxminiy IELTS bali, masalan "4.0–5.0". */
  ielts: string;
  description: string;
  /** Inglizcha tavsif (A2 va undan yuqori darajadagi o'quvchilar uchun). */
  descriptionEn: string;
}

export const LEVEL_INFO: LevelInfo[] = [
  {
    code: "A1",
    uz: "Boshlang'ich daraja",
    en: "Beginner",
    ielts: "2.0–3.0",
    description: "Ingliz tilini noldan boshlaymiz: alifbo, salomlashish, oila, sonlar va kundalik so'zlar.",
    descriptionEn: "English from zero: the alphabet, greetings, family, numbers and everyday words.",
  },
  {
    code: "A2",
    uz: "Elementar daraja",
    en: "Elementary",
    ielts: "3.0–4.0",
    description: "Oddiy suhbatlar, o'tgan va kelasi zamon, kengroq so'z boyligi.",
    descriptionEn: "Simple conversations, the past and the future, and a bigger vocabulary.",
  },
  {
    code: "B1",
    uz: "O'rta daraja",
    en: "Intermediate",
    ielts: "4.0–5.0",
    description: "Murakkabroq grammatika va erkin muloqot ko'nikmalari.",
    descriptionEn: "More complex grammar and the skills to speak freely.",
  },
  {
    code: "B2",
    uz: "Yuqori o'rta daraja",
    en: "Upper-Intermediate",
    ielts: "5.5–6.5",
    description: "Ilg'or grammatika, rasmiy nutq va o'z fikrini asoslab bayon qilish.",
    descriptionEn: "Advanced grammar, formal speech and giving reasons for your opinions.",
  },
  {
    code: "IELTS",
    uz: "IELTS'ga tayyorlov",
    en: "IELTS Preparation",
    ielts: "6.0–7.5",
    description: "Imtihonning to'rt qismi: Listening, Reading, Writing va Speaking strategiyalari.",
    descriptionEn: "All four parts of the exam: strategies for Listening, Reading, Writing and Speaking.",
  },
];

export const levelInfo = (code: string): LevelInfo | undefined => LEVEL_INFO.find((l) => l.code === code);
