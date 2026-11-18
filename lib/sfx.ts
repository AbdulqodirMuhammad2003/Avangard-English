/** Javob ovozlari — to'g'ri / xato / dars yakuni. Web Audio API bilan shu
 *  yerning o'zida «sintez» qilinadi: fayl yuklanmaydi, kechikish yo'q, har
 *  qanday brauzerda ishlaydi. Ovoz marimba / qo'ng'iroqcha uslubida — yumshoq
 *  boshlanadi va tez so'nadi, quloqni charchatmaydi.
 *
 *  O'quvchi sarlavhadagi tugma bilan ovozni o'chirib qo'yishi mumkin
 *  (localStorage). */

const SOUND_KEY = "avangard-sound";
const CHANGE_EVENT = "avangard-sound-change";

let ctx: AudioContext | null = null;
let master: GainNode | null = null;

export function isSoundOn() {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(SOUND_KEY) !== "off";
  } catch {
    return true;
  }
}

export function setSoundOn(on: boolean) {
  try {
    localStorage.setItem(SOUND_KEY, on ? "on" : "off");
  } catch {}
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: on }));
  if (on) correctSound();
}

export function onSoundChange(cb: () => void) {
  const h = () => cb();
  window.addEventListener(CHANGE_EVENT, h);
  return () => window.removeEventListener(CHANGE_EVENT, h);
}

/** Qisqa, yumshoq «xona» aksi — ovozga hajm beradi. */
function roomImpulse(c: AudioContext) {
  const len = Math.floor(c.sampleRate * 0.6);
  const buf = c.createBuffer(2, len, c.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.5);
  }
  return buf;
}

function audio() {
  if (typeof window === "undefined") return null;
  const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  if (!ctx) {
    ctx = new AC();
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.ratio.value = 3;
    master = ctx.createGain();
    master.gain.value = 0.55;
    const dry = ctx.createGain();
    const wet = ctx.createGain();
    wet.gain.value = 0.18;
    const verb = ctx.createConvolver();
    verb.buffer = roomImpulse(ctx);
    master.connect(dry).connect(comp);
    master.connect(verb).connect(wet).connect(comp);
    comp.connect(ctx.destination);
  }
  if (ctx.state === "suspended") ctx.resume().catch(() => {});
  return ctx;
}

/** Brauzerlar ovozni faqat foydalanuvchi bosgandan keyin ruxsat beradi —
 *  birinchi bosishda AudioContext tayyorlab qo'yiladi. */
if (typeof window !== "undefined") {
  const unlock = () => {
    if (isSoundOn()) audio();
    window.removeEventListener("pointerdown", unlock);
    window.removeEventListener("keydown", unlock);
  };
  window.addEventListener("pointerdown", unlock, { passive: true });
  window.addEventListener("keydown", unlock);
}

/** Bitta «marimba» notasi: asosiy ton + yuqori garmonikalar, tez hujum va
 *  eksponensial so'nish. */
function note(freq: number, at: number, { dur = 0.5, vol = 0.35, bright = 1 } = {}) {
  const c = ctx!;
  const t0 = c.currentTime + at;
  const out = c.createGain();
  out.gain.setValueAtTime(0.0001, t0);
  out.gain.exponentialRampToValueAtTime(vol, t0 + 0.006);
  out.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  const lp = c.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.setValueAtTime(Math.min(12000, freq * 6 * bright), t0);
  lp.frequency.exponentialRampToValueAtTime(freq * 1.5, t0 + dur);
  out.connect(lp).connect(master!);
  // [garmonika, nisbiy balandlik, so'nish tezligi]
  const partials: [number, number, number][] = [
    [1, 1, 1],
    [2, 0.28 * bright, 0.45],
    [3.98, 0.12 * bright, 0.25],
  ];
  for (const [mult, level, decay] of partials) {
    const o = c.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(freq * mult, t0);
    const g = c.createGain();
    g.gain.setValueAtTime(level, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur * decay);
    o.connect(g).connect(out);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }
}

function play(fn: () => void) {
  if (!isSoundOn()) return;
  if (!audio()) return;
  try {
    fn();
  } catch {}
}

/** To'g'ri javob: ikki ko'tariluvchi yorqin nota (A5 → E6). */
export function correctSound() {
  play(() => {
    note(880, 0, { dur: 0.35, vol: 0.28 });
    note(1318.5, 0.085, { dur: 0.6, vol: 0.32 });
  });
}

/** Xato javob: past, yumshoq, pasayuvchi ikki nota — jazolovchi emas. */
export function wrongSound() {
  play(() => {
    note(311.1, 0, { dur: 0.28, vol: 0.26, bright: 0.45 });
    note(233.1, 0.12, { dur: 0.42, vol: 0.24, bright: 0.4 });
  });
}

/** Dars / imtihon yakuni: major arpedjio (C5 E5 G5 C6) va yakuniy akkord. */
export function completeSound() {
  play(() => {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => note(f, i * 0.09, { dur: 0.5, vol: 0.26 }));
    [523.25, 783.99, 1318.5].forEach((f) => note(f, 0.4, { dur: 1.1, vol: 0.18 }));
  });
}
