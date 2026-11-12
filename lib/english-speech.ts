/** Ingliz tilidagi ovoz (Web Speech API): so'zni o'qib berish, ovozni tanish
 *  natijasini tekshirish va yozma javoblarni solishtirish uchun umumiy
 *  yordamchilar — lug'at bosqichlari, mashqlar va takrorlash ishlatadi. */

import { isMediaRef, mediaUrl } from "./media";

/** Ovoz o'qish va tanish tili — britancha (kitob va IELTS britancha talaffuzda). */
export const SPEECH_LANG = "en-GB";

/** Eng mos inglizcha ovoz: avval britancha, keyin istalgan inglizcha.
 *  Ovoz aniq berilmasa, ba'zi brauzerlar (Windows'dagi Chrome, Android)
 *  en-GB ovozi topilmaganda umuman jim qoladi. */
function englishVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  const lang = (v: SpeechSynthesisVoice) => v.lang.replace("_", "-").toLowerCase();
  return (
    voices.find((v) => lang(v) === "en-gb" && /google|natural|online/i.test(v.name)) ??
    voices.find((v) => lang(v) === "en-gb") ??
    voices.find((v) => lang(v).startsWith("en-") && v.localService === false) ??
    voices.find((v) => lang(v).startsWith("en"))
  );
}

// Ovozlar ro'yxati asinxron yuklanadi — sahifa ochilishi bilan so'rab qo'yamiz.
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener?.("voiceschanged", () => window.speechSynthesis.getVoices());
}

/** Chrome o'qilayotgan iborani axlatga chiqarib, ovozni uzib qo'ymasligi uchun. */
let current: SpeechSynthesisUtterance | null = null;

/** Matnni inglizcha ovozda o'qib beradi. */
export function speak(text: string, rate?: number) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  const voice = englishVoice();
  if (voice) utter.voice = voice;
  utter.lang = voice?.lang ?? SPEECH_LANG;
  if (rate) utter.rate = rate;
  current = utter;
  utter.onend = () => {
    if (current === utter) current = null;
  };
  const wasBusy = synth.speaking || synth.pending;
  synth.cancel();
  // Chrome ba'zan «pauza» holatida qotib qoladi; cancel() dan darhol keyin
  // speak() esa yangi iborani ham yutib yuboradi — shuning uchun biroz kutamiz.
  const start = () => {
    synth.resume();
    synth.speak(utter);
  };
  if (wasBusy) setTimeout(start, 60);
  else start();
}

let player: HTMLAudioElement | null = null;

/** Yopiq ombordagi audio faylni (`media:…`) boshidan o'ynatadi; `rate` < 1 —
 *  sekinroq. Ovozli o'qish ketayotgan bo'lsa, to'xtatiladi. */
export function playMedia(ref: string, rate = 1) {
  if (typeof window === "undefined") return;
  window.speechSynthesis?.cancel();
  const src = mediaUrl(ref);
  if (!player || !player.src.endsWith(src)) {
    player?.pause();
    player = new Audio(src);
  }
  player.currentTime = 0;
  player.playbackRate = rate;
  player.play().catch(() => {});
}

/** Tinglash savoli: `media:` fayli bo'lsa o'ynatiladi, aks holda matn
 *  ovoz chiqarib o'qiladi. `rate` — o'qish tezligi (0.6 atrofi — sekin). */
export function playListening(textOrRef: string, rate = 0.85) {
  if (isMediaRef(textOrRef)) playMedia(textOrRef, rate < 0.8 ? 0.75 : 1);
  else {
    player?.pause();
    speak(textOrRef, rate);
  }
}

/** Apostrof va tirelarning turli shakllari (telefon klaviaturalari ’ yuboradi)
 *  bitta ko'rinishga keltiriladi. */
const unifyMarks = (s: string) =>
  s.normalize("NFC").replace(/[’‘`´ʼ]/g, "'").replace(/[‐-―]/g, "-");

/** Qisqartmalarni to'liq shaklga ochadi: I'm → I am, doesn't → does not,
 *  can't → can not. Ikkala tomon (javob va namuna) bir xil ochilgani uchun
 *  's (is / has / egalik) farqlanmasa ham solishtirish to'g'ri ishlaydi. */
const expandContractions = (s: string) =>
  s
    .replace(/\bwon't\b/g, "will not")
    .replace(/\bcan't\b|\bcannot\b/g, "can not")
    .replace(/\bshan't\b/g, "shall not")
    .replace(/\blet's\b/g, "let us")
    .replace(/n't\b/g, " not")
    .replace(/'m\b/g, " am")
    .replace(/'re\b/g, " are")
    .replace(/'ll\b/g, " will")
    .replace(/'ve\b/g, " have")
    .replace(/'d\b/g, " would")
    .replace(/'s got\b/g, " has got")
    .replace(/'s\b/g, " is");

/** Yozma javobni solishtirish uchun: kichik harf, apostroflar bir xil,
 *  qisqartmalar ochiladi (I'm = I am), tinish belgilari olib tashlanadi,
 *  bo'shliqlar bittaga. «don't» va «dont» farqlanadi — apostrof javobning
 *  bir qismi. */
export function normalizeAnswer(s: string) {
  return expandContractions(unifyMarks(s).toLowerCase())
    .replace(/[^a-z0-9'\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const TIME = /^(\d{1,2})(?:\s*[:.\-\s]\s*|(?=\d{2}\b))?(\d{2})?\s*(a\.?m\.?|p\.?m\.?)?$/i;

/** Vaqt yozuvini [soat 0–11, daqiqa] ga keltiradi: 9:50, 9-50, 9.50, 950,
 *  9 PM, 21:50 — hammasi bir xil. am/pm farqlanmaydi (tinglashda odatda
 *  aytilmaydi). Vaqt bo'lmasa — null. */
function parseTime(s: string): [number, number] | null {
  const m = unifyMarks(s).trim().match(TIME);
  if (!m) return null;
  const hour = Number(m[1]);
  const minute = Number(m[2] ?? 0);
  if (hour > 24 || minute > 59) return null;
  return [hour % 12, minute];
}

/** O'quvchi yozgan javob namunaga mosmi: vaqt bo'lsa — har xil yozilishi
 *  (9:50 = 9-50 = 950), aks holda normalizeAnswer bo'yicha (I'm = I am). */
export function answerMatches(given: string, expected: string) {
  const want = /^\d{1,2}[:.]\d{2}$/.test(expected.trim()) || /^\d{1,2}\s*(a\.?m\.?|p\.?m\.?)$/i.test(expected.trim())
    ? parseTime(expected)
    : null;
  if (want) {
    const got = parseTime(given);
    return !!got && got[0] === want[0] && got[1] === want[1];
  }
  return normalizeAnswer(given) === normalizeAnswer(expected);
}

/** Ovoz tanish uchun normallashtirish: kichik harf, tinish belgilari va
 *  apostroflar olib tashlanadi (brauzer «I'm» ni «I am» deb ham yozishi
 *  mumkin, shuning uchun qisqartmalar ochiladi). */
export function speechNorm(s: string) {
  return unifyMarks(s)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
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

const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const ORDINALS: Record<string, string> = { "1st": "first", "2nd": "second", "3rd": "third", "5th": "fifth", "8th": "eighth", "9th": "ninth", "12th": "twelfth" };

function below100(n: number) {
  return n < 20 ? ONES[n] : TENS[Math.floor(n / 10)] + (n % 10 ? ` ${ONES[n % 10]}` : "");
}

/** Raqamni so'z bilan yozadi (brauzer «ten» ni «10» deb yozishi mumkin).
 *  1100–2099 oralig'idagi to'rt xonali sonlar yil kabi o'qiladi (1990 → nineteen ninety). */
function numberWords(n: number): string {
  if (n < 100) return below100(n);
  if (n >= 1100 && n < 2100 && n % 100 !== 0 && !(n >= 2000 && n < 2010))
    return `${below100(Math.floor(n / 100))} ${n % 100 < 10 ? `oh ${ONES[n % 100]}` : below100(n % 100)}`;
  if (n < 1000) return `${ONES[Math.floor(n / 100)]} hundred${n % 100 ? ` ${below100(n % 100)}` : ""}`;
  if (n < 1_000_000)
    return `${numberWords(Math.floor(n / 1000))} thousand${n % 1000 ? ` ${numberWords(n % 1000)}` : ""}`;
  return String(n);
}

/** Talaffuzni solishtirish uchun matnning normallashtirilgan shakllari:
 *  qisqartmalar ochilgan («baker is») va apostrofsiz («bakers», «dont»). Diakritika
 *  (café), raqamlar (10 → ten, 1st → first) va okay/ok bir xil ko'rinishga keladi. */
function speechForms(s: string): string[] {
  const base = unifyMarks(s)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\b(\d+)(st|nd|rd|th)\b/g, (m, d) => ORDINALS[m] ?? `${numberWords(Number(d))}th`)
    .replace(/\d+(?:,\d{3})*/g, (d) => ` ${numberWords(Number(d.replace(/,/g, "")))} `)
    .replace(/\bokay\b/g, "ok");
  const clean = (x: string) => x.replace(/[^a-z\s]/g, " ").replace(/\s+/g, " ").trim();
  return [...new Set([clean(speechNorm(base)), clean(base.replace(/'/g, ""))])].filter(Boolean);
}

/** Bir xil eshitiladigan so'zlar (omofonlar) va UK/US yozuvlari: ovoz tanish
 *  ulardan istalganini yozishi mumkin, shuning uchun bitta shaklga keltiriladi. */
const SAME_SOUND: Record<string, string> = Object.fromEntries(
  [
    "two too to", "eight ate", "son sun", "sea see", "write right", "hour our", "one won",
    "buy by bye", "die dye", "i eye", "know no", "new knew", "meet meat", "week weak",
    "wait weight", "wear where", "pair pear", "hear here", "there their theyre", "flower flour",
    "mail male", "sale sail", "road rode", "tail tale", "plane plain", "piece peace",
    "blue blew", "hole whole", "some sum", "for four", "cell sell", "fair fare", "hi high",
    "would wood", "weather whether", "which witch", "check cheque", "centre center",
    "theatre theater", "metre meter", "grey gray", "tyre tire", "colour color",
    "favourite favorite", "neighbour neighbor", "jewellery jewelry", "programme program",
    "travelling traveling", "cancelled canceled", "mum mom", "mr mister", "mrs missus",
    "ok okay", "be bee", "won't wont",
    "great grate", "made maid", "steak stake", "stair stare",
    "allowed aloud", "bored board", "brake break", "cereal serial", "dear deer", "fir fur",
    "flu flew", "knight night", "knot not", "nose knows", "rain reign", "scene seen",
    "stationary stationery", "waist waste", "way weigh", "whale wail",
  ].flatMap((g) => {
    const [first, ...rest] = g.split(" ");
    return [first, ...rest].map((w) => [w, first] as const);
  })
);

const soundAlike = (phrase: string) =>
  phrase
    .split(" ")
    .map((w) => SAME_SOUND[w] ?? w)
    .join(" ");

/** Brauzer eshitgan matn kutilgan so'zga mosmi. Har bir variant (qisqartma
 *  ochilgan / apostrofsiz) solishtiriladi: aynan, bo'shliqsiz (a.m. = am,
 *  T-shirt = tshirt), omofonlar (two = too, eight = ate, centre = center) va
 *  4+ harfli so'zlarda ~75% yozuv o'xshashligi (ship/sheep, centre/center). */
export function matchesPronunciation(heard: string, targets: string[]) {
  const heardForms = speechForms(heard);
  if (heardForms.length === 0) return false;
  const targetForms = targets.flatMap(speechForms);
  return targetForms.some((t) => {
    const n = t.split(" ").length;
    const tCompact = t.replace(/ /g, "");
    const tSound = soundAlike(t);
    return heardForms.some((h) => {
      if (` ${h} `.includes(` ${t} `)) return true;
      const words = h.split(" ");
      const slices = (size: number) =>
        Array.from({ length: Math.max(0, words.length - size + 1) }, (_, i) => words.slice(i, i + size).join(" "));
      // Bo'shliqsiz aynan: «a.m.» = «am», «T-shirt» = «tshirt», «Wi-fi» = «wifi».
      if ([n - 1, n, n + 1].some((size) => size > 0 && slices(size).some((c) => c.replace(/ /g, "") === tCompact)))
        return true;
      // Kutilgan so'z soniga teng har bir bo'lak (va butun matn): omofon yoki yozuvi yaqin.
      return [h, ...slices(n)].some((c) => {
        if (soundAlike(c) === tSound) return true;
        if (tCompact.length < 4) return false;
        const cCompact = c.replace(/ /g, "");
        return 1 - levenshtein(cCompact, tCompact) / Math.max(cCompact.length, tCompact.length) >= 0.75;
      });
    });
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

/** SPEECH_ERRORS ning inglizcha nusxasi (A2 va undan yuqori darajalar uchun). */
export const SPEECH_ERRORS_EN: Record<string, string> = {
  "not-allowed": "The microphone is blocked. Tap the lock icon in the address bar and allow the microphone.",
  "service-not-allowed": "Your browser blocks speech recognition. Open the site in Google Chrome or Microsoft Edge.",
  "audio-capture": "No microphone found. Check that your microphone is connected.",
  network: "Can't connect to speech recognition. Check your internet or use Chrome/Edge.",
  "no-speech": "We didn't hear anything. Speak louder and closer to the microphone.",
  "language-not-supported": "Your browser can't recognise English speech. Use Chrome or Edge.",
};
