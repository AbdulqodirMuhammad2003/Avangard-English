/**
 * Lug'at so'zlarining fotosuratlari (Pexels, bepul litsenziya) —
 * scripts/gen-word-images.ts to'ldiradi. Faqat aniq narsalarni bildiradigan
 * so'zlarda bor (scripts/word-photo-queries.ts); qolganlarida emoji
 * ko'rsatiladi (components/WordPicture.tsx).
 *
 * Kalit — so'zning kichik harfli ko'rinishi. Bu ro'yxat skript tomonidan
 * qayta yoziladi — qo'lda tahrirlamang.
 */
export type WordImage = {
  /** Pexels CDN manzili (kvadrat, siqilgan). */
  src: string;
  /** Fotograf ismi — rasm ostida yoziladi. */
  by: string;
  /** Pexels'dagi foto sahifasi. */
  link: string;
};

export const WORD_IMAGES: Record<string, WordImage> = {
};

export const wordImageKey = (word: string) => word.trim().toLowerCase();

export function wordImage(word: string): WordImage | null {
  return WORD_IMAGES[wordImageKey(word)] ?? null;
}
