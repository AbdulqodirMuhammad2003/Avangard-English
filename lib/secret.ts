/** JWT va parol nusxasini shifrlash kaliti. Production'da JWT_SECRET
 *  bo'lmasa xato beradi — ochiq standart kalit bilan sessiya soxtalashtirib
 *  bo'lmasligi uchun. Lokal ishlab chiqishda vaqtinchalik kalit ishlatiladi. */
export function jwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (secret) return secret;
  if (process.env.NODE_ENV === "production") {
    throw new Error("JWT_SECRET o'rnatilmagan (Vercel → Settings → Environment Variables).");
  }
  return "dev-only-secret-avangard-english";
}
