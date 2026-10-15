/** Lug'at so'zining seed ko'rinishi (vocabulary_words jadvaliga yoziladi). */
export type VocabSeed = {
  emoji: string;
  word: string;
  /** Talaffuz: "IPA|o'zbekcha", masalan "həˈləʊ|halou" (lib/transcription.ts). */
  transcription: string;
  pos: string;
  uz: string;
  /** So'zning ingliz tilidagi sodda izohi (ta'rifi). */
  def: string;
  /** So'z ishtirok etgan inglizcha gap — "gap" bosqichida so'z o'rniga
   *  bo'sh joy qoldiriladi, shuning uchun so'z gapda aynan shu shaklda bo'lsin. */
  ex: string;
  /** `ex` gapining o'zbek tiliga tarjimasi. */
  exUz: string;
};
