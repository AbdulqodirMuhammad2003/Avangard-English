/**
 * Litsenziyalangan audio va video (masalan, Navigate A2 treklari) Supabase
 * Storage'ning yopiq bucket'ida saqlanadi. Saytda ular faqat `/media/…`
 * orqali ochiladi: app/media/[...path]/route.ts tizimga kirganini tekshirib,
 * qisqa muddatli imzolangan havolaga yo'naltiradi.
 *
 * Mashq savolidagi `audio_text` yoki darsning `clip_url` i `media:` bilan
 * boshlansa — bu matn emas, shu bucket'dagi fayl:
 *   media:navigate-a2/audio/1.2.mp3
 */
export const MEDIA_BUCKET = "course-media";
const PREFIX = "media:";

export const isMediaRef = (value: string | null | undefined): value is string => !!value?.startsWith(PREFIX);

/** `media:a/b.mp3` → `/media/a/b.mp3` (brauzer uchun manzil). */
export const mediaUrl = (ref: string) => `/media/${ref.slice(PREFIX.length)}`;

/** Har bir darajaning darsligi (litsenziyalangan Navigate kitobi). Supabase
 *  bepul tarifida fayl 50 MB dan oshmasligi kerak, shuning uchun kitob
 *  qismlarga bo'lingan (scripts/upload-media.ts bilan yuklangan). */
export const LEVEL_BOOKS: Record<string, { title: string; parts: string[] }> = {
  A1: { title: "Navigate A1 Beginner", parts: ["media:books/navigate-a1-1.pdf", "media:books/navigate-a1-2.pdf"] },
  A2: {
    title: "Navigate A2 Elementary",
    parts: ["media:books/navigate-a2-1.pdf", "media:books/navigate-a2-2.pdf", "media:books/navigate-a2-3.pdf"],
  },
};
