/**
 * Lug'at so'zlarining 3D rasmlari (AI yasagan, scripts/gen-word-images.ts).
 * Rasmlar yopiq media bucket'da: course-media/word-images/<fayl>.webp, saytda
 * /media/word-images/<fayl>.webp orqali ochiladi.
 *
 * Kalit — so'zning kichik harfli ko'rinishi. Rasmi yo'q so'zda emoji
 * ko'rsatiladi (components/WordPicture.tsx). Bu fayl skript tomonidan qayta
 * yoziladi — qo'lda tahrirlamang.
 */
export const WORD_IMAGES: Record<string, string> = {
};

export const wordImageKey = (word: string) => word.trim().toLowerCase();

/** So'zning rasmi bo'lsa — brauzer uchun manzil, bo'lmasa null. */
export function wordImageUrl(word: string): string | null {
  const file = WORD_IMAGES[wordImageKey(word)];
  return file ? `/media/word-images/${file}` : null;
}
