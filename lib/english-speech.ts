/** Ingliz tilidagi ovoz (Web Speech API): so'zni o'qib berish, ovozni tanish
 *  natijasini tekshirish va yozma javoblarni solishtirish uchun umumiy
 *  yordamchilar — lug'at bosqichlari, mashqlar va takrorlash ishlatadi. */

/** Ovoz o'qish va tanish tili. */
export const SPEECH_LANG = "en-US";

/** Matnni inglizcha ovozda o'qib beradi. */
export function speak(text: string, rate?: number) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = SPEECH_LANG;
  if (rate) utter.rate = rate;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

/** Apostrof va tirelarning turli shakllari (telefon klaviaturalari ’ yuboradi)
 *  bitta ko'rinishga keltiriladi. */
const unifyMarks = (s: string) =>
  s.normalize("NFC").replace(/[’‘`´ʼ]/g, "'").replace(/[‐-―]/g, "-");

/** Yozma javobni solishtirish uchun: kichik harf, apostroflar bir xil,
 *  tinish belgilari olib tashlanadi, bo'shliqlar bittaga. «don't» va
 *  «dont» farqlanadi — apostrof javobning bir qismi. */
export function normalizeAnswer(s: string) {
  return unifyMarks(s)
    .toLowerCase()
    .replace(/[^a-z0-9'\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Ovoz tanish uchun normallashtirish: kichik harf, tinish belgilari va
 *  apostroflar olib tashlanadi (brauzer «I'm» ni «I am» deb ham yozishi
 *  mumkin, shuning uchun qisqartmalar ochiladi). */
export function speechNorm(s: string) {
  return unifyMarks(s)
    .toLowerCase()
    .replace(/\b(i)'m\b/g, "$1 am")
    .replace(/n't\b/g, " not")
    .replace(/'re\b/g, " are")
    .replace(/'s\b/g, " is")
    .replace(/'ll\b/g, " will")
    .replace(/'ve\b/g, " have")
    .replace(/'d\b/g, " would")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Lug'atdagi yozuvdan talaffuzda kutiladigan shakllarni ajratadi:
 *  "Get up / wake up" → ["get up", "wake up"],
 *  "Child (children)" → ["child", "children"],
 *  "Grandmother (-s)" → ["grandmother"] (qo'shimchalar tashlanadi). */
export function pronunciationTargets(word: string): string[] {
  const targets: string[] = [];
  const base = word.replace(/\([^)]*\)/g, " ");
  targets.push(...base.split(/[,/]/));
  for (const group of word.match(/\(([^)]*)\)/g) ?? []) {
    const inner = group.slice(1, -1).trim();
    if (!inner.startsWith("-")) targets.push(...inner.split(/[,/]/));
  }
  return targets.map(speechNorm).filter(Boolean);
}

export function levenshtein(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return row[b.length];
}

/** Brauzer eshitgan matn kutilgan so'zga mosmi. Ovoz tanish ko'pincha bitta
 *  harfda adashadi (ship/sheep, live/leave), shuning uchun 4+ harfli so'zlarda
 *  ~75% o'xshashlik yetarli; qisqa so'zlar (it, yes) aynan mos kelishi kerak. */
export function matchesPronunciation(heard: string, targets: string[]) {
  const h = speechNorm(heard);
  if (!h) return false;
  const heardWords = h.split(" ");
  return targets.some((t) => {
    if (` ${h} `.includes(` ${t} `)) return true;
    if (t.length < 4) return false;
    const close = (x: string) => 1 - levenshtein(x, t) / Math.max(x.length, t.length) >= 0.75;
    return close(h) || heardWords.some(close);
  });
}

export const SPEECH_ERRORS: Record<string, string> = {
  "not-allowed":
    "Mikrofonga ruxsat berilmagan. Manzil satridagi qulf belgisini bosib, mikrofonga ruxsat bering.",
  "service-not-allowed":
    "Brauzer ovozni tanish xizmatini bloklagan. Google Chrome yoki Microsoft Edge'da oching.",
  "audio-capture": "Mikrofon topilmadi. Mikrofon ulanganini tekshiring.",
  network:
    "Ovozni tanish xizmatiga ulanib bo'lmadi. Internetni tekshiring yoki Chrome/Edge'dan foydalaning.",
  "no-speech": "Ovoz eshitilmadi. Mikrofonga yaqinroq, balandroq gapiring.",
  "language-not-supported": "Brauzeringiz ingliz tilidagi ovozni tanimaydi. Chrome yoki Edge'dan foydalaning.",
};
