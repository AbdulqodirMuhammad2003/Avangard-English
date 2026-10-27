/**
 * Interfeys tili. A1 o'quvchilar uchun sayt o'zbekcha; A2 va undan yuqori
 * darajadagilar uchun hamma narsa inglizcha (faqat darsning «Qoida» bo'limi
 * o'zbekcha qoladi). Matnlar joyida ikki tilda yoziladi: t("O'zbekcha", "English").
 */
export type Lang = "uz" | "en";

export const langForLevel = (level: string | null | undefined): Lang =>
  !level || level === "A1" ? "uz" : "en";

export type Translate = (uz: string, en: string) => string;

export const translator =
  (lang: Lang): Translate =>
  (uz, en) =>
    lang === "en" ? en : uz;

/** Bazadagi tayyor yorliqlar: «3-dars» → «Lesson 3», «2-bosqich» → «Stage 2»,
 *  «Takrorlash» → «Review». Boshqa matn o'zgarmaydi. */
export function localizeLabel(lang: Lang, label: string): string {
  if (lang === "uz") return label;
  return label
    .replace(/^(\d+)-dars$/, "Lesson $1")
    .replace(/^(\d+)-bosqich$/, "Stage $1")
    .replace(/^Takrorlash$/, "Review");
}

/** Dars nega yopiqligi (lib/data.ts): «Tez orada», «3-darsni 80% ga yetkazing». */
export function localizeLockReason(lang: Lang, reason: string): string {
  if (lang === "uz") return reason;
  if (reason === "Tez orada") return "Coming soon";
  const m = reason.match(/^(.+?)ni (\d+)% ga yetkazing$/);
  return m ? `Get ${localizeLabel(lang, m[1])} to ${m[2]}%` : reason;
}

/** Bazadagi o'zbekcha variantlar (To'g'ri / Noto'g'ri) inglizcha ko'rinishi. */
export function localizeOption(lang: Lang, option: string): string {
  if (lang === "uz") return option;
  return option === "To'g'ri" ? "True" : option === "Noto'g'ri" ? "False" : option;
}

const POS_EN: Record<string, string> = {
  ot: "noun",
  "fe'l": "verb",
  sifat: "adjective",
  ravish: "adverb",
  ibora: "phrase",
  predlog: "preposition",
  olmosh: "pronoun",
  undov: "exclamation",
  qisqartma: "abbreviation",
  "modal fe'l": "modal verb",
  "bog'lovchi": "conjunction",
  son: "number",
};

/** So'z turkumi («sifat, ot») inglizchasi («adjective, noun»). */
export function localizePos(lang: Lang, pos: string): string {
  if (lang === "uz") return pos;
  return pos
    .split(",")
    .map((p) => POS_EN[p.trim()] ?? p.trim())
    .join(", ");
}
