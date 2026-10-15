/** So'z talaffuzi bazada "IPA|o'zbekcha" ko'rinishida saqlanadi, masalan
 *  "həˈləʊ|halou". Ekranda "/həˈləʊ/ · halou" bo'lib ko'rinadi. Faqat bitta
 *  qism yozilgan bo'lsa — o'zi ko'rsatiladi. */
export function formatTranscription(raw: string): string {
  const [ipa, uz] = raw.split("|").map((s) => s.trim());
  if (!uz) return ipa ? `/${ipa}/` : "";
  return ipa ? `/${ipa}/ · ${uz}` : uz;
}
