/**
 * Lug'at so'zlarining fotosuratlari (Unsplash, bepul litsenziya) —
 * scripts/gen-word-images.ts to'ldiradi. Faqat aniq narsalarni bildiradigan
 * so'zlarda bor (scripts/word-photo-queries.ts); qolganlarida emoji
 * ko'rsatiladi (components/WordPicture.tsx).
 *
 * Kalit — so'zning kichik harfli ko'rinishi. Bu ro'yxat skript tomonidan
 * qayta yoziladi — qo'lda tahrirlamang.
 */
export type WordImage = {
  /** Unsplash CDN manzili (kvadrat, siqilgan). */
  src: string;
  /** Fotograf ismi — rasm ostida yoziladi. */
  by: string;
  /** Fotografning Unsplash sahifasi (utm bilan). */
  link: string;
};

export const WORD_IMAGES: Record<string, WordImage> = {
  "breakfast": {"src":"https://images.unsplash.com/photo-1558888565-86add11fa452?ixid=M3wxMTM0NDUyfDB8MXxzZWFyY2h8MXx8YnJlYWtmYXN0JTIwdGFibGV8ZW58MXwyfHx8MTc5NDczMzAzOXww&ixlib=rb-4.1.0&w=640&h=640&fit=crop&crop=entropy&auto=format&q=70","by":"Mettfluencer Mett Lifestyle","link":"https://unsplash.com/@mettfluencer_de?utm_source=avangard_english&utm_medium=referral"},
  "credit card": {"src":"https://images.unsplash.com/photo-1758551652244-45a6889b9451?ixid=M3wxMTM0NDUyfDB8MXxzZWFyY2h8MXx8Y3JlZGl0JTIwY2FyZHxlbnwxfDJ8fHwxNzk0NzMzMDQxfDA&ixlib=rb-4.1.0&w=640&h=640&fit=crop&crop=entropy&auto=format&q=70","by":"MACAU PHOTOGRAPHY","link":"https://unsplash.com/@macau_photography?utm_source=avangard_english&utm_medium=referral"},
  "guest": {"src":"https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixid=M3wxMTM0NDUyfDB8MXxzZWFyY2h8MXx8aG90ZWwlMjBndWVzdHxlbnwxfHx8fDE3OTQ3MzMwNjB8MA&ixlib=rb-4.1.0&w=640&h=640&fit=crop&crop=entropy&auto=format&q=70","by":"Louis Hansel","link":"https://unsplash.com/@louishansel?utm_source=avangard_english&utm_medium=referral"},
  "hotel": {"src":"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixid=M3wxMTM0NDUyfDB8MXxzZWFyY2h8MXx8aG90ZWx8ZW58MXwyfHx8MTc5NDczMzAzNnww&ixlib=rb-4.1.0&w=640&h=640&fit=crop&crop=entropy&auto=format&q=70","by":"Anmol Seth","link":"https://unsplash.com/@anmol_seth?utm_source=avangard_english&utm_medium=referral"},
  "receptionist": {"src":"https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?ixid=M3wxMTM0NDUyfDB8MXxzZWFyY2h8MXx8cmVjZXB0aW9uaXN0fGVufDF8Mnx8fDE3OTQ3MzMwMzh8MA&ixlib=rb-4.1.0&w=640&h=640&fit=crop&crop=entropy&auto=format&q=70","by":"True Agency","link":"https://unsplash.com/@trueagency?utm_source=avangard_english&utm_medium=referral"},
  "restaurant": {"src":"https://images.unsplash.com/photo-1663530761401-15eefb544889?ixid=M3wxMTM0NDUyfDB8MXxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwxfDJ8fHwxNzk0NzMzMDQwfDA&ixlib=rb-4.1.0&w=640&h=640&fit=crop&crop=entropy&auto=format&q=70","by":"Urban Gyllström","link":"https://unsplash.com/@gyllstrom_photo?utm_source=avangard_english&utm_medium=referral"},
  "road": {"src":"https://images.unsplash.com/photo-1515256722043-0f2b082ddadc?ixid=M3wxMTM0NDUyfDB8MXxzZWFyY2h8MXx8cm9hZHxlbnwxfDJ8fHwxNzk0NzMzMDQxfDA&ixlib=rb-4.1.0&w=640&h=640&fit=crop&crop=entropy&auto=format&q=70","by":"Deva Darshan","link":"https://unsplash.com/@darshan394?utm_source=avangard_english&utm_medium=referral"},
  "room key": {"src":"https://images.unsplash.com/photo-1584985429926-08867327d3a6?ixid=M3wxMTM0NDUyfDB8MXxzZWFyY2h8MXx8aG90ZWwlMjBrZXl8ZW58MXx8fHwxNzk0NzMzMTQ1fDA&ixlib=rb-4.1.0&w=640&h=640&fit=crop&crop=entropy&auto=format&q=70","by":"Everyday basics","link":"https://unsplash.com/@zanardi?utm_source=avangard_english&utm_medium=referral"},
  "street": {"src":"https://images.unsplash.com/photo-1552819686-25b0c726045d?ixid=M3wxMTM0NDUyfDB8MXxzZWFyY2h8MXx8c3RyZWV0fGVufDF8Mnx8fDE3OTQ3MzMwNDJ8MA&ixlib=rb-4.1.0&w=640&h=640&fit=crop&crop=entropy&auto=format&q=70","by":"Matthias Schröder","link":"https://unsplash.com/@trancepole?utm_source=avangard_english&utm_medium=referral"},
};

export const wordImageKey = (word: string) => word.trim().toLowerCase();

export function wordImage(word: string): WordImage | null {
  return WORD_IMAGES[wordImageKey(word)] ?? null;
}
