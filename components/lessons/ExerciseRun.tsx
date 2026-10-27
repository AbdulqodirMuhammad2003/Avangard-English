"use client";

import { useEffect, useState } from "react";
import { BookOpen, Check, Delete, Eye, X, GraduationCap, Info, MapPin, Mic, PlayCircle, Snail, Trophy, Volume2 } from "lucide-react";
import type { UnitDetail } from "@/lib/data";
import { isMediaRef, mediaUrl } from "@/lib/media";
import { MediaAudioPlayer } from "./MediaAudioPlayer";
import { buzz, celebrate } from "@/lib/celebrate";
import { localizeOption } from "@/lib/i18n";
import { useLang, useT } from "../LangProvider";
import { answerMatches, matchesPronunciation, normalizeAnswer, playListening, speechNorm, SPEECH_ERRORS, SPEECH_ERRORS_EN, SPEECH_LANG } from "@/lib/english-speech";

/** Mashqlarda so'z va gaplar biroz sekinroq o'qiladi; `media:` — yozib olingan audio fayl. */
const speakEn = (text: string, rate = 0.85) => playListening(text, rate);

/** Har bir savol uchun bir xil tartibda aralashtiradi (sahifa yangilansa ham
 *  plitkalar/juftlar joyidan sakramaydi). */
type Question = UnitDetail["exercises"][number]["questions"][number];

/** Bir sahifali testda savolning to'g'ri variantlari. «audiotext»da
 *  `answer_text` bo'lsa — «Choose TWO»: to'g'ri variant matnlari "|" bilan. */
function rightOptions(q: Question): number[] {
  if (!q.answer_text) return [q.correct_index];
  const right = q.answer_text.split("|");
  return q.options.flatMap((o, i) => (right.includes(o) ? [i] : []));
}

function seededShuffle<T>(items: T[], seed: number): T[] {
  const a = [...items];
  let x = (seed * 7 + 3) % 9973;
  for (let i = a.length - 1; i > 0; i--) {
    x = (x * 31 + 11) % 9973;
    const j = x % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** «**qalin**» belgilarini ajratib ko'rsatadi. */
function RichLine({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-bold text-ink-950 dark:text-ink-50">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

/** Qoida matni: «## » — kichik sarlavha, «• » — ro'yxat, «→ » — misol
 *  (alohida ajratilgan qator), qolgani — oddiy xatboshi. */
function RuleText({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-2 text-[15px] leading-relaxed text-ink-800 dark:text-ink-200">
      {text.split("\n").map((raw, i) => {
        const line = raw.trim();
        if (!line) return <div key={i} className="h-1" />;
        if (line.startsWith("## "))
          return (
            <p key={i} className="font-display mt-2 text-base font-bold text-azure-700 dark:text-azure-300">
              {line.slice(3)}
            </p>
          );
        if (line.startsWith("• "))
          return (
            <p key={i} className="flex gap-2 pl-1">
              <span className="text-azure-500">•</span>
              <span>
                <RichLine text={line.slice(2)} />
              </span>
            </p>
          );
        if (line.startsWith("→ "))
          return (
            <p
              key={i}
              lang="en"
              className="rounded-xl bg-mint-50 px-3 py-1.5 font-medium text-mint-900 dark:bg-mint-950/40 dark:text-mint-100"
            >
              <RichLine text={line.slice(2)} />
            </p>
          );
        return (
          <p key={i}>
            <RichLine text={line} />
          </p>
        );
      })}
    </div>
  );
}

const OPTION_STATE_CLASSES = {
  right: "border-mint-500 bg-mint-50 font-semibold text-mint-900 dark:bg-mint-950/40 dark:text-mint-100",
  wrong: "border-rose-400 bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200",
  selected: "border-azure-500 bg-azure-50 font-semibold text-azure-900 dark:bg-azure-950/40 dark:text-azure-100",
  idle: "border-ink-100 bg-white hover:border-ink-200 hover:bg-ink-50/60 dark:border-white/10 dark:bg-white/5 dark:text-ink-200 dark:hover:bg-white/10",
};

/** To'g'ri javobdan keyingi maqtovlar (savolga qarab almashib turadi). */
const PRAISE: [string, string][] = [
  ["To'g'ri!", "Correct!"],
  ["Zo'r!", "Great!"],
  ["Barakalla!", "Well done!"],
  ["Ajoyib!", "Excellent!"],
  ["Aynan shunday!", "Exactly right!"],
  ["Davom eting!", "Keep it up!"],
];

/** Qoida testidan o'tish (mashqlar ochilishi) uchun kerakli natija. */
export const RULE_PASS_PCT = 60;

export function ExerciseRun({
  exercise,
  onFinish,
  onRetry,
  onDone,
  revealsLeft,
  onReveal,
}: {
  exercise: UnitDetail["exercises"][number];
  /** Shu darsda «Javobni ko'rish» imkoniyatlaridan nechtasi qolgan. */
  revealsLeft: number;
  /** Bitta imkoniyatni sarflaydi; tugagan bo'lsa false. */
  onReveal: () => Promise<boolean>;
  /** Oxirgi savoldan keyin shu safar berilgan javoblar bilan bir marta
   *  chaqiriladi (server ularni avvalgi natijalar bilan birlashtiradi). */
  onFinish: (answers: { questionId: number; correct: boolean }[]) => void;
  onRetry: () => void;
  /** Natija oynasidan chiqish; yakuniy natija (%) bilan. */
  onDone: (resultPct: number) => void;
}) {
  const lang = useLang();
  const t = useT();
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [typed, setTyped] = useState("");
  // Anagramma: bosilgan harflarning (aralash qatordagi) indekslari.
  const [picked, setPicked] = useState<number[]>([]);
  const [checked, setChecked] = useState<boolean | null>(null);
  // Juftlik: ulangan juftlar, tanlangan chap so'z va xato bo'lganmi.
  const [matched, setMatched] = useState<number[]>([]);
  const [matchLeft, setMatchLeft] = useState<number | null>(null);
  const [matchMistake, setMatchMistake] = useState(false);
  const [matchFlash, setMatchFlash] = useState(false);
  // «listenmatch»: har bir raqam uchun o'quvchi yozgan javob.
  const [slots, setSlots] = useState<string[]>([]);
  // Talaffuz: eshitilgan matn va holat.
  const [heard, setHeard] = useState("");
  const [listening, setListening] = useState(false);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ questionId: number; correct: boolean }[]>([]);
  const [result, setResult] = useState<number | null>(null);
  // Xato javobdan keyin to'g'ri javob faqat «Javobni ko'rish» bosilsa chiqadi.
  const [revealed, setRevealed] = useState(false);
  const [revealing, setRevealing] = useState(false);
  // Ko'p qatorli mashqlarda (gaplar, ro'yxat, bir sahifali test) har bir xato
  // qator alohida ochiladi; `askReveal` — tasdiqlash oynasi qaysi qator uchun
  // (yoki «all» — butun savol uchun) ochilgani.
  const [revealedRows, setRevealedRows] = useState<number[]>([]);
  const [askReveal, setAskReveal] = useState<number | "all" | null>(null);
  // Bir sahifali test (matn yoki audio + hamma savollar): har savolda tanlangan variant.
  // «Choose TWO» savolida ikkita variant tanlanadi, shuning uchun har savolga ro'yxat.
  const [pagePicks, setPagePicks] = useState<number[][]>([]);

  // Mashq qisman bajarilgan bo'lsa, faqat hali to'g'ri topilmagan savollar
  // beriladi (mashq ochilgandagi holat saqlanadi). Hammasi to'g'ri yoki
  // hech biri ishlanmagan bo'lsa — butun mashq.
  const [pending] = useState(() => {
    const left = exercise.questions.filter((q) => !q.answered_correctly);
    return left.length > 0 ? left : exercise.questions;
  });
  const alreadyCorrect = exercise.questions.length - pending.length;
  const resuming = alreadyCorrect > 0;
  const correctCount = answers.filter((a) => a.correct).length;

  const question = pending[qIndex];
  const kind = exercise.kind;
  const total = pending.length;
  // Bitta matn yoki audio bo'yicha savollar bitta sahifada beriladi va birga
  // tekshiriladi — o'quvchi matnni/audioni savollar orasida yo'qotmaydi.
  const pageMode = kind === "audiotext" || kind === "reading" || kind === "truefalse";
  // Juftlikda xato juftlar ulanmaydi, talaffuzda javob — gapning o'zi:
  // bularda yashiradigan narsa yo'q.
  const showAnswer = checked === true || revealed || kind === "match" || kind === "speak";
  const rowMode = pageMode || kind === "listengap" || kind === "listenmatch";
  const rowShown = (i: number) => showAnswer || revealedRows.includes(i);
  // Qoida mashqida avval tushuntirish ko'rsatiladi, test undan keyin.
  const [showRule, setShowRule] = useState(kind === "rule");

  // Tinglash savoli ochilishi bilan so'z bir marta avtomatik o'qiladi.
  // Tinglab tushunish mashqida matn hamma savollar uchun bitta — u faqat
  // birinchi savolda o'qiladi, keyin o'quvchi o'zi qayta eshitadi.
  useEffect(() => {
    // Yozib olingan audioni (media:) pleyerning o'zi boshqaradi.
    if (question?.audio_text && !isMediaRef(question.audio_text) && !(kind === "audiotext" && qIndex > 0))
      speakEn(question.audio_text);
  }, [question?.audio_text, qIndex, kind]);

  if (result !== null) {
    const great = result >= 80;
    const rulePassed = result >= RULE_PASS_PCT;
    return (
      <div className="flex animate-pop-in flex-col items-center gap-4 py-10 text-center">
        <div
          className={`flex h-24 w-24 items-center justify-center rounded-full text-white shadow-lg ${
            great
              ? "bg-gradient-to-br from-mint-400 to-mint-700 shadow-mint-700/30"
              : "bg-gradient-to-br from-gold-400 to-gold-600 shadow-gold-700/30"
          }`}
        >
          {great ? <Trophy size={40} /> : <PlayCircle size={40} />}
        </div>
        <p className="font-display text-4xl font-bold text-ink-950 dark:text-ink-50">{result}%</p>
        <p className="text-sm text-ink-600 dark:text-ink-300">
          {great ? t("Ajoyib natija!", "Great result!") : t("Xato qilingan savollarni yana bir marta ishlab ko'ring.", "Try the questions you got wrong once more.")}{" "}
          {t("To'g'ri javoblar:", "Correct answers:")} {alreadyCorrect + correctCount} / {exercise.questions.length}
        </p>
        {kind === "rule" && (
          <p
            className={`rounded-xl px-3 py-2 text-sm font-semibold ${
              rulePassed
                ? "bg-mint-50 text-mint-700 dark:bg-mint-950/40 dark:text-mint-300"
                : "bg-gold-50 text-gold-700 dark:bg-gold-950/40 dark:text-gold-300"
            }`}
          >
            {rulePassed
              ? t("Testdan o'tdingiz — mashqlar ochildi!", "You passed the test — the exercises are open!")
              : t(
                  `Mashqlarga o'tish uchun kamida ${RULE_PASS_PCT}% kerak. Qoidani yana bir ko'rib, xatolarni qayta ishlang.`,
                  `You need at least ${RULE_PASS_PCT}% to open the exercises. Read the rule again and try the mistakes again.`
                )}
          </p>
        )}
        <div className="mt-2 flex gap-2">
          <button
            onClick={onRetry}
            className="btn-press rounded-full bg-ink-100 px-5 py-2.5 text-sm font-bold text-ink-800 hover:bg-ink-200 dark:bg-white/10 dark:text-ink-100"
          >
            {t("Qayta ishlash", "Try again")}
          </button>
          <button
            onClick={() => onDone(result)}
            className="btn-press rounded-full bg-azure-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-azure-500"
          >
            {t("Tayyor", "Done")}
          </button>
        </div>
      </div>
    );
  }

  if (kind === "rule" && showRule) {
    return (
      <div className="flex animate-fade-up flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 text-white shadow-md shadow-gold-700/20">
            <GraduationCap size={22} />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">{t("Qoida", "Rule")}</p>
            <p className="font-display text-lg font-bold leading-tight text-ink-950 dark:text-ink-50">
              {exercise.title.replace(/^Qoida:\s*/, "")}
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink-950/5 dark:bg-white/5 dark:ring-white/10">
          <RuleText text={exercise.instructions ?? ""} />
        </div>
        <button
          onClick={() => setShowRule(false)}
          className="btn-press self-center rounded-full bg-azure-600 px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-azure-500"
        >
          {qIndex > 0 ? t("Testga qaytish", "Back to the test") : t(`Testni boshlash (${total} savol)`, `Start the test (${total} questions)`)}
        </button>
      </div>
    );
  }

  const letters = kind === "anagram" ? question.prompt.split("") : [];
  const orderTiles =
    kind === "order"
      ? seededShuffle(
          (question.answer_text ?? "")
            .split("|")[0]
            .split(/\s+/)
            .map((t) => t.replace(/^[«"(]+|[.,!?;:»")]+$/g, ""))
            .filter(Boolean),
          question.id
        )
      : [];
  const matchPairs = kind === "match" || kind === "listenmatch" ? question.options.map((o) => o.split("|")) : [];
  const matchRight =
    kind === "match" || kind === "listenmatch" ? seededShuffle(matchPairs.map((_, i) => i), question.id) : [];
  // «listengap»: [gap, to'g'ri, ...xatolar]; variantlar har qatorda o'z tartibida.
  const gapRows = kind === "listengap" ? question.options.map((o) => o.split("|")) : [];
  const gapChoices = gapRows.map((row, i) => seededShuffle(row.slice(1), question.id * 31 + i));
  const gapsFilled = gapRows.length > 0 && gapRows.every((_, i) => !!slots[i]);
  const slotsFilled = matchPairs.length > 0 && matchPairs.every((_, i) => (slots[i] ?? "").trim() !== "");
  // Javobda bir nechta to'g'ri variant «;» bilan ajratiladi.
  const slotRight = (i: number) =>
    (matchPairs[i]?.[1] ?? "").split(";").some((a) => answerMatches(slots[i] ?? "", a.trim()));
  const answerValue =
    kind === "anagram"
      ? picked.map((i) => letters[i]).join("")
      : kind === "order"
      ? picked.map((i) => orderTiles[i]).join(" ")
      : kind === "speak"
      ? heard
      : typed;
  const isWritten = kind === "anagram" || kind === "order" || !!question.answer_text;
  // Son va vaqt (kind "number") faqat raqamlari bo'yicha solishtiriladi:
  // telefon raqam klaviaturasida «:» yo'q, shuning uchun 8:15 = 815.
  const normalizeWritten = (s: string) => (kind === "number" ? s.replace(/\D/g, "") : normalizeAnswer(s));
  const acceptedAnswers = (question.answer_text ?? "").split("|").map(normalizeWritten);
  const canCheck = pageMode
    ? pending.every((q, k) => (pagePicks[k]?.length ?? 0) === rightOptions(q).length)
    : kind === "listengap" ? gapsFilled : kind === "listenmatch" ? slotsFilled : isWritten ? answerValue.trim() !== "" : selected !== null;

  /** To'g'ri javobda — «Tekshirish» tugmasi ustidan kichik konfetti va
   *  qisqa tebranish; xatoda — ikki marta qisqa tebranish. */
  function feel(ok: boolean) {
    if (ok) {
      const btn = document.querySelector<HTMLElement>("[data-check-button]")?.getBoundingClientRect();
      celebrate({ origin: btn ? { x: btn.left + btn.width / 2, y: btn.top } : undefined, count: 18, spread: 0.7 });
      buzz(12);
    } else buzz([18, 60, 18]);
  }

  function record(ok: boolean) {
    feel(ok);
    setChecked(ok);
    setAnswers((a) => [...a, { questionId: question.id, correct: ok }]);
  }

  function check() {
    if (!canCheck || checked !== null) return;
    if (pageMode) {
      const results = pending.map((q, k) => ({ questionId: q.id, correct: pageQuestionRight(k) }));
      setChecked(results.every((r) => r.correct));
      feel(results.every((r) => r.correct));
      setAnswers(results);
      return;
    }
    if (kind === "speak") {
      record(matchesPronunciation(heard, [speechNorm(question.answer_text ?? question.prompt)]));
      return;
    }
    if (kind === "listenmatch") {
      record(matchPairs.every((_, i) => slotRight(i)));
      return;
    }
    if (kind === "listengap") {
      record(gapRows.every((row, i) => slots[i] === row[1]));
      return;
    }
    const ok = isWritten
      ? acceptedAnswers.includes(normalizeWritten(answerValue))
      : selected === question.correct_index;
    record(ok);
    // Sonni ovoz bilan qayta o'qish javobni aytib qo'yadi — faqat to'g'ri bo'lsa.
    if (kind === "number" && question.audio_text && ok) speakEn(question.audio_text);
  }

  async function confirmReveal() {
    const target = askReveal;
    if (target === null || revealing) return;
    setRevealing(true);
    try {
      if (await onReveal()) {
        if (target === "all") setRevealed(true);
        else setRevealedRows((rows) => [...rows, target]);
      }
    } finally {
      setRevealing(false);
      setAskReveal(null);
    }
  }

  /** Xato qatordagi «Javob» tugmasi: bosilganda tasdiqlash oynasi chiqadi. */
  const revealPill = (i: number) => (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setAskReveal(i);
      }}
      className="btn-press ml-2 inline-flex shrink-0 items-center gap-1 rounded-full bg-white px-2.5 py-1 align-middle text-xs font-bold text-rose-700 ring-1 ring-rose-200 hover:bg-rose-50 dark:bg-white/10 dark:text-rose-100 dark:ring-white/15 dark:hover:bg-white/15"
    >
      <Eye size={13} /> {t("Javob", "Answer")}
    </button>
  );

  function pickMatchRight(pairIndex: number) {
    if (matchLeft === null || checked !== null) return;
    if (pairIndex === matchLeft) {
      const done = [...matched, pairIndex];
      setMatched(done);
      setMatchFlash(false);
      if (done.length === matchPairs.length) record(!matchMistake);
    } else {
      setMatchMistake(true);
      setMatchFlash(true);
    }
    setMatchLeft(null);
  }

  function listen() {
    if (checked !== null) return;
    const SR =
      (window as unknown as { SpeechRecognition?: new () => any }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: new () => any }).webkitSpeechRecognition;
    if (!SR) {
      setSpeechError(t("Brauzeringiz ovozni tanimaydi (Chrome yoki Edge tavsiya etiladi).", "Your browser can't recognise speech (try Chrome or Edge)."));
      return;
    }
    window.speechSynthesis?.cancel();
    const recog = new SR();
    recog.lang = SPEECH_LANG;
    recog.maxAlternatives = 5;
    recog.onresult = (e: any) => {
      const alts: string[] = Array.from(e.results[0]).map((r: any) => String(r.transcript));
      const target = [speechNorm(question.answer_text ?? question.prompt)];
      setHeard(alts.find((a) => matchesPronunciation(a, target)) ?? alts[0] ?? "");
      setListening(false);
    };
    recog.onerror = (e: any) => {
      setListening(false);
      if (e.error !== "aborted")
        setSpeechError((lang === "en" ? SPEECH_ERRORS_EN : SPEECH_ERRORS)[e.error] ?? t("Ovozni tanib bo'lmadi.", "We couldn't recognise your voice."));
    };
    recog.onend = () => setListening(false);
    setSpeechError(null);
    setHeard("");
    setListening(true);
    try {
      recog.start();
    } catch {
      setListening(false);
    }
  }

  function next() {
    if (!pageMode && qIndex + 1 < total) {
      setQIndex(qIndex + 1);
      setRevealed(false);
      setRevealedRows([]);
      setAskReveal(null);
      setSelected(null);
      setTyped("");
      setPicked([]);
      setChecked(null);
      setMatched([]);
      setMatchLeft(null);
      setMatchMistake(false);
      setMatchFlash(false);
      setSlots([]);
      setHeard("");
      setSpeechError(null);
    } else {
      const pct = Math.round(((alreadyCorrect + correctCount) / exercise.questions.length) * 100);
      setResult(pct);
      if (pct >= 80) setTimeout(() => celebrate({ count: 70, spread: 1.4 }), 150);
      onFinish(answers);
    }
  }

  function optionState(i: number): keyof typeof OPTION_STATE_CLASSES {
    if (checked === null) return selected === i ? "selected" : "idle";
    if (i === question.correct_index && (selected === i || showAnswer)) return "right";
    return selected === i ? "wrong" : "idle";
  }

  function pageOptionState(k: number, i: number): keyof typeof OPTION_STATE_CLASSES {
    const picked = (pagePicks[k] ?? []).includes(i);
    if (checked === null) return picked ? "selected" : "idle";
    const right = rightOptions(pending[k]).includes(i);
    if (picked) return right ? "right" : "wrong";
    return right && rowShown(k) ? "right" : "idle";
  }

  function pageQuestionRight(k: number) {
    const picks = pagePicks[k] ?? [];
    const right = rightOptions(pending[k]);
    return picks.length === right.length && picks.every((i) => right.includes(i));
  }

  function pickPageOption(k: number, i: number) {
    if (checked !== null) {
      if (!pageQuestionRight(k) && !rowShown(k)) setAskReveal(k);
      return;
    }
    const need = rightOptions(pending[k]).length;
    setPagePicks((cur) => {
      const all = [...cur];
      const picks = all[k] ?? [];
      // Ko'p javobli savolda: qayta bosish — bekor qilish; to'lgan bo'lsa eng
      // birinchi tanlangani almashadi.
      all[k] =
        need === 1 ? [i] : picks.includes(i) ? picks.filter((p) => p !== i) : [...picks, i].slice(-need);
      return all;
    });
  }

  // Telefonda 4 ta ustunga faqat juda qisqa variantlar sig'adi (am, is, are);
  // o'rtacha uzunlikdagilar (Canadian, Greekish) 2 ustunda turadi.
  const longestOption = Math.max(0, ...question.options.map((o) => o.length));
  const shortOptions = longestOption <= 12;
  const optionGrid = (prefix = "") => (
    <div
      className={`grid gap-2 ${
        kind === "choice" || kind === "rule"
          ? question.options.length === 2 && shortOptions
            ? "grid-cols-2"
            : longestOption <= 5
            ? question.options.length === 3
              ? "grid-cols-3"
              : "grid-cols-4"
            : shortOptions
            ? question.options.length === 3
              ? "grid-cols-1 sm:grid-cols-3"
              : "grid-cols-2 sm:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2"
          : kind === "truefalse"
          ? "grid-cols-2"
          : "grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {question.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => checked === null && setSelected(i)}
          className={`min-w-0 break-words rounded-xl border-2 px-3 py-3 text-base transition-all duration-150 ${
            shortOptions ? "text-center" : "text-left"
          } ${OPTION_STATE_CLASSES[optionState(i)]}`}
        >
          {prefix}
          {localizeOption(lang, opt)}
        </button>
      ))}
    </div>
  );

  const resultTone =
    checked === null ? "text-azure-600 dark:text-azure-300" : checked ? "text-mint-600" : "text-rose-500";
  const correctAnswerText = kind === "stress"
    ? question.options.map((o, i) => (i === question.correct_index ? o.toUpperCase() : o)).join("-")
    : kind === "match" || kind === "listenmatch"
    ? matchPairs.map((p) => `${p[0]} — ${p[1].split(";")[0]}`).join(", ")
    : kind === "listengap"
    ? gapRows.map((row, i) => `${i + 1}) ${row[1]}`).join(", ")
    : kind === "mistake"
    ? t(`«${question.options[question.correct_index]}» — xato so'z`, `«${question.options[question.correct_index]}» is the wrong word`)
    : isWritten
    ? question.answer_text!.split("|")[0]
    : localizeOption(lang, question.options[question.correct_index]);

  return (
    <div className="flex flex-col gap-4">
      {resuming && (
        <p className="rounded-2xl bg-gold-50 px-4 py-2.5 text-sm font-semibold text-gold-800 dark:bg-gold-950/40 dark:text-gold-200">
          {t(
            `Faqat xato qilingan ${total} ta savol qoldi — ${alreadyCorrect} tasi avval to'g'ri topilgan.`,
            `Only the ${total} questions you got wrong are left — you already got ${alreadyCorrect} right.`
          )}
        </p>
      )}
      {kind === "rule" && (
        <button
          onClick={() => setShowRule(true)}
          className="flex items-center gap-2 self-start rounded-full bg-gold-50 px-4 py-2 text-sm font-semibold text-gold-800 hover:bg-gold-100 dark:bg-gold-950/40 dark:text-gold-200"
        >
          <GraduationCap size={16} /> {t("Qoidani ko'rish", "See the rule")}
        </button>
      )}
      {exercise.instructions && kind !== "rule" && (
        <div className="flex gap-2.5 rounded-2xl bg-azure-50 px-4 py-3 text-sm leading-relaxed text-azure-900 dark:bg-azure-950/40 dark:text-azure-100">
          <Info size={18} className="mt-0.5 shrink-0" />
          <p>
            <span className="font-bold">{t("Shart:", "Task:")} </span>
            {exercise.instructions}
          </p>
        </div>
      )}

      {/* Yozib olingan audio savol blokidan tashqarida: keyingi savolga o'tganda
          pleyer qayta yaratilmaydi va to'xtagan joyidan davom etadi. */}
      {(kind === "audiotext" || kind === "listenmatch" || kind === "listengap") && isMediaRef(question.audio_text) && (
        <MediaAudioPlayer key={question.audio_text} src={mediaUrl(question.audio_text)} autoPlay={qIndex === 0} />
      )}

      <div key={qIndex} className="flex animate-fade-up flex-col gap-4">
        {!pageMode && (
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink-100 dark:bg-white/10">
            <div
              className="h-full rounded-full bg-mint-500 transition-[width] duration-500"
              style={{ width: `${(qIndex / total) * 100}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-ink-500 dark:text-ink-400">
            {qIndex + 1} / {total}
          </span>
        </div>
        )}

        {kind === "listen" && (
          <>
            <button
              onClick={() => question.audio_text && speakEn(question.audio_text)}
              className="btn-press mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold-500 text-white shadow-lg shadow-gold-700/30 hover:bg-gold-400"
              aria-label={t("Eshitish", "Listen")}
            >
              <Volume2 size={34} />
            </button>
            {optionGrid()}
          </>
        )}

        {(kind === "choice" || kind === "rule") && (
          <>
            <p
              className={`whitespace-pre-line text-center font-semibold text-ink-950 dark:text-ink-50 ${
                question.prompt.length <= 24 ? "font-display py-2 text-3xl" : "text-lg"
              }`}
            >
              {question.prompt}
            </p>
            {optionGrid()}
          </>
        )}

        {kind === "mistake" && (
          <div className="flex flex-wrap justify-center gap-2 py-2">
            {question.options.map((token, i) => (
              <button
                key={i}
                lang="en"
                onClick={() => checked === null && setSelected(i)}
                className={`rounded-xl border-2 px-3 py-2 text-lg font-semibold transition-all duration-150 ${
                  OPTION_STATE_CLASSES[optionState(i)]
                }`}
              >
                {token}
              </button>
            ))}
          </div>
        )}

        {kind === "dialog" && (
          <>
            <div className="flex flex-col gap-2">
              <p className="max-w-[80%] self-start rounded-2xl rounded-bl-md bg-ink-100 px-4 py-2.5 text-base text-ink-900 dark:bg-white/10 dark:text-ink-50">
                — {question.prompt}
              </p>
              <p
                className={`max-w-[80%] self-end rounded-2xl rounded-br-md px-4 py-2.5 text-base transition-colors ${
                  checked === null
                    ? "bg-azure-100 text-azure-900 dark:bg-azure-950/50 dark:text-azure-100"
                    : checked
                    ? "bg-mint-100 text-mint-900 dark:bg-mint-950/50 dark:text-mint-100"
                    : "bg-rose-100 text-rose-900 dark:bg-rose-950/50 dark:text-rose-100"
                }`}
              >
                — {selected === null ? "…" : question.options[selected]}
              </p>
            </div>
            {optionGrid()}
          </>
        )}

        {kind === "anagram" && (
          <>
            <div className="flex flex-wrap justify-center gap-1.5">
              {letters.map((_, i) => (
                <span
                  key={i}
                  className={`flex h-12 w-10 items-center justify-center border-b-2 text-2xl font-bold ${
                    checked === null
                      ? "border-ink-300 text-ink-950 dark:border-white/30 dark:text-ink-50"
                      : checked
                      ? "border-mint-500 text-mint-700 dark:text-mint-300"
                      : "border-rose-400 text-rose-600 dark:text-rose-300"
                  }`}
                >
                  {picked[i] !== undefined ? letters[picked[i]] : ""}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {letters.map((ch, i) => (
                <button
                  key={i}
                  disabled={picked.includes(i) || checked !== null}
                  onClick={() => setPicked((p) => [...p, i])}
                  className="btn-press h-12 w-11 rounded-xl bg-azure-50 text-xl font-bold text-azure-900 shadow-sm ring-1 ring-azure-200 transition-opacity hover:bg-azure-100 disabled:opacity-25 dark:bg-azure-950/40 dark:text-azure-100 dark:ring-azure-900"
                >
                  {ch}
                </button>
              ))}
            </div>
            <button
              onClick={() => setPicked((p) => p.slice(0, -1))}
              disabled={picked.length === 0 || checked !== null}
              className="mx-auto flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-ink-500 hover:bg-ink-100 disabled:opacity-40 dark:text-ink-400 dark:hover:bg-white/10"
            >
              <Delete size={14} /> {t("Oxirgi harfni o'chirish", "Delete the last letter")}
            </button>
          </>
        )}

        {kind === "picture" && (
          <>
            <p className="py-2 text-center text-7xl" aria-hidden="true">
              {question.prompt}
            </p>
            {optionGrid()}
          </>
        )}

        {pageMode && (
          <>
            {kind === "audiotext" && !isMediaRef(question.audio_text) && (
              <div className="flex items-center gap-3 rounded-2xl bg-gold-50 px-4 py-3 dark:bg-gold-950/30">
                <button
                  onClick={() => question.audio_text && speakEn(question.audio_text)}
                  className="btn-press flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold-500 text-white shadow-lg shadow-gold-700/30 hover:bg-gold-400"
                  aria-label={t("Matnni eshitish", "Listen to the text")}
                >
                  <Volume2 size={26} />
                </button>
                <button
                  onClick={() => question.audio_text && speakEn(question.audio_text, 0.6)}
                  className="btn-press flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700 hover:bg-gold-200 dark:bg-gold-900/50 dark:text-gold-200"
                  aria-label={t("Sekinroq eshitish", "Listen more slowly")}
                  title={t("Sekinroq", "Slower")}
                >
                  <Snail size={20} />
                </button>
                <p className="text-sm text-gold-900 dark:text-gold-100">
                  {t(
                    "Matnni tinglang. Qayta eshitish uchun tugmani bosing, sekinroq eshitish uchun — shilliqqurtni.",
                    "Listen to the text. Tap the button to hear it again, or the snail to hear it more slowly."
                  )}
                </p>
              </div>
            )}
            {kind !== "audiotext" && (
              <div className="rounded-2xl border border-ink-100 bg-white px-4 py-3 text-base leading-relaxed text-ink-900 dark:border-white/10 dark:bg-white/5 dark:text-ink-50">
                <p className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-400">
                  <BookOpen size={14} /> {t("Matn", "Text")}
                </p>
                <p lang="en" className="whitespace-pre-line">{question.prompt.split("||")[0]}</p>
              </div>
            )}
            <p className="text-center text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">
              {t(`Savollar (${total} ta)`, `Questions (${total})`)}
            </p>
            <ol className="flex flex-col gap-6">
              {pending.map((q, k) => {
                const stem = kind === "audiotext" ? q.prompt : q.prompt.split("||")[1];
                const gotIt = checked !== null && pageQuestionRight(k);
                const multi = rightOptions(q).length > 1;
                return (
                  <li key={q.id} className="flex flex-col gap-2.5">
                    <p lang="en" className="flex items-start gap-2.5 text-base font-semibold text-ink-950 dark:text-ink-50">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-400 text-sm font-bold text-ink-950">
                        {k + 1}
                      </span>
                      <span className="min-w-0 pt-0.5">
                        {stem}
                        {multi && (
                          <span className="ml-2 inline-block rounded-full bg-gold-100 px-2.5 py-0.5 align-middle text-xs font-bold text-gold-800 dark:bg-gold-900/50 dark:text-gold-200">
                            {t("IKKITA to'g'ri javobni tanlang", "Choose TWO correct answers")}
                          </span>
                        )}
                      </span>
                    </p>
                    <div className={`grid gap-2 ${kind === "truefalse" ? "grid-cols-2" : "grid-cols-1"}`}>
                      {q.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => pickPageOption(k, i)}
                          className={`flex min-w-0 items-stretch overflow-hidden rounded-xl border-2 text-left text-base transition-all duration-150 ${
                            OPTION_STATE_CLASSES[pageOptionState(k, i)]
                          }`}
                        >
                          <span className="flex w-10 shrink-0 items-center justify-center border-r border-ink-950/10 font-semibold opacity-70 dark:border-white/10">
                            {String.fromCharCode(65 + i)}.
                          </span>
                          <span lang="en" className="min-w-0 break-words px-3 py-2.5">
                            {localizeOption(lang, opt)}
                          </span>
                        </button>
                      ))}
                    </div>
                    {checked === false && !gotIt && !rowShown(k) && <div>{revealPill(k)}</div>}
                    {checked !== null && q.explanation && (gotIt || rowShown(k)) && (
                      <p className="text-sm text-ink-600 dark:text-ink-300">{q.explanation}</p>
                    )}
                  </li>
                );
              })}
            </ol>
          </>
        )}

        {kind === "situation" && (
          <>
            <div className="flex gap-2.5 rounded-2xl border border-ink-100 bg-white px-4 py-3 text-base text-ink-900 dark:border-white/10 dark:bg-white/5 dark:text-ink-50">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold-500" />
              <p>{question.prompt}</p>
            </div>
            {optionGrid()}
          </>
        )}

        {(kind === "stress" || kind === "number" || kind === "dictation") && (
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => question.audio_text && speakEn(question.audio_text)}
              className="btn-press flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 text-white shadow-lg shadow-gold-700/30 hover:bg-gold-400"
              aria-label={t("Eshitish", "Listen")}
            >
              <Volume2 size={28} />
            </button>
            {kind === "dictation" && (
              <button
                onClick={() => question.audio_text && speakEn(question.audio_text, 0.55)}
                className="btn-press flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-700 hover:bg-gold-200 dark:bg-gold-950/40 dark:text-gold-200"
                aria-label={t("Sekinroq eshitish", "Listen more slowly")}
                title={t("Sekinroq", "Slower")}
              >
                <Snail size={22} />
              </button>
            )}
          </div>
        )}

        {kind === "stress" && (
          <div className="flex flex-wrap justify-center gap-2">
            {question.options.map((syllable, i) => (
              <button
                key={i}
                onClick={() => checked === null && setSelected(i)}
                className={`min-w-16 rounded-xl border-2 px-4 py-3 text-2xl font-bold transition-all duration-150 ${
                  OPTION_STATE_CLASSES[optionState(i)]
                }`}
              >
                {syllable}
              </button>
            ))}
          </div>
        )}

        {kind === "number" && (
          <input
            value={typed}
            onChange={(e) => setTyped(e.target.value.replace(/[^\d:]/g, ""))}
            onKeyDown={(e) => {
              if (e.key === "Enter") (checked === null ? check : next)();
            }}
            disabled={checked !== null}
            inputMode="numeric"
            placeholder="?"
            aria-label={t("Raqam", "Number")}
            className={`mx-auto w-36 rounded-2xl border-2 bg-white py-3 text-center text-4xl font-bold text-ink-900 outline-none dark:bg-white/5 dark:text-ink-50 ${
              checked === true
                ? "border-mint-500"
                : checked === false
                ? "border-rose-400"
                : "border-ink-200 focus:border-azure-500 dark:border-white/10"
            }`}
          />
        )}

        {kind === "dictation" && (
          <div className="flex flex-col gap-3">
            <input
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") (checked === null ? check : next)();
              }}
              disabled={checked !== null}
              lang="en"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              placeholder={t("Eshitganingizni yozing", "Write what you hear")}
              className={`w-full rounded-xl border-2 bg-white px-4 py-3 text-center text-xl font-semibold text-ink-900 outline-none transition-colors placeholder:text-sm placeholder:font-normal placeholder:text-ink-300 dark:bg-white/5 dark:text-ink-50 ${
                checked === true
                  ? "border-mint-500"
                  : checked === false
                  ? "border-rose-400"
                  : "border-ink-200 focus:border-azure-500 dark:border-white/10"
              }`}
            />
          </div>
        )}

        {kind === "match" && (
          <>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-2">
                {matchPairs.map((pair, i) => (
                  <button
                    key={i}
                    disabled={matched.includes(i) || checked !== null}
                    onClick={() => {
                      setMatchLeft(i);
                      setMatchFlash(false);
                    }}
                    className={`min-w-0 break-words rounded-xl border-2 px-3 py-3 text-base transition-all duration-150 ${
                      matched.includes(i)
                        ? OPTION_STATE_CLASSES.right
                        : matchLeft === i
                        ? OPTION_STATE_CLASSES.selected
                        : OPTION_STATE_CLASSES.idle
                    }`}
                  >
                    {pair[0]}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {matchRight.map((pairIndex) => (
                  <button
                    key={pairIndex}
                    disabled={matched.includes(pairIndex) || checked !== null}
                    onClick={() => pickMatchRight(pairIndex)}
                    className={`min-w-0 break-words rounded-xl border-2 px-3 py-3 text-base transition-all duration-150 ${
                      matched.includes(pairIndex) ? OPTION_STATE_CLASSES.right : OPTION_STATE_CLASSES.idle
                    }`}
                  >
                    {matchPairs[pairIndex][1]}
                  </button>
                ))}
              </div>
            </div>
            {matchFlash && (
              <p className="text-center text-sm font-semibold text-rose-500">{t("Bu juft emas — yana urinib ko'ring", "That's not a pair — try again")}</p>
            )}
          </>
        )}

        {kind === "listengap" && (
          <ol className="flex flex-col gap-2">
            {gapRows.map((row, i) => {
              const [before, after = ""] = row[0].split("___");
              const state =
                checked === null ? (slots[i] ? "selected" : "idle") : slots[i] === row[1] ? "right" : "wrong";
              return (
                <li
                  key={i}
                  onClick={() => state === "wrong" && !rowShown(i) && setAskReveal(i)}
                  className={`flex items-start gap-3 rounded-xl border-2 px-3 py-2.5 ${OPTION_STATE_CLASSES[state]} ${
                    state === "wrong" && !rowShown(i) ? "cursor-pointer" : ""
                  }`}
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400 text-xs font-bold text-ink-950">
                    {i + 1}
                  </span>
                  <p lang="en" className="min-w-0 flex-1 leading-9">
                    {before}
                    <select
                      value={slots[i] ?? ""}
                      disabled={checked !== null}
                      onChange={(e) => {
                        const v = e.target.value;
                        setSlots((cur) => {
                          const nextSlots = [...cur];
                          nextSlots[i] = v;
                          return nextSlots;
                        });
                      }}
                      aria-label={t(`${i + 1}-bo'sh joy`, `Gap ${i + 1}`)}
                      className="mx-1 max-w-full rounded-lg border border-ink-200 bg-white px-2 py-1 align-middle text-base text-ink-900 dark:border-white/15 dark:bg-[#161b26] dark:text-ink-50"
                    >
                      <option value="">…</option>
                      {gapChoices[i].map((choice) => (
                        <option key={choice} value={choice}>
                          {choice}
                        </option>
                      ))}
                    </select>
                    {after}
                    {checked !== null && slots[i] !== row[1] &&
                      (rowShown(i) ? (
                        <span className="ml-2 text-sm font-semibold text-mint-700 dark:text-mint-300">→ {row[1]}</span>
                      ) : (
                        revealPill(i)
                      ))}
                  </p>
                </li>
              );
            })}
          </ol>
        )}

        {kind === "listenmatch" && (
          <div className="flex flex-col gap-2">
            {matchPairs.map((pair, i) => {
              const filled = (slots[i] ?? "").trim() !== "";
              // Uzun yorliq (gap) bo'lsa, yozish maydoni uning ostida turadi.
              const longLabel = pair[0].length > 14;
              const state = checked === null ? (filled ? "selected" : "idle") : slotRight(i) ? "right" : "wrong";
              return (
                <label
                  key={i}
                  onClick={() => state === "wrong" && !rowShown(i) && setAskReveal(i)}
                  className={`flex rounded-xl border-2 px-3 py-2 ${state === "wrong" && !rowShown(i) ? "cursor-pointer " : ""}${
                    longLabel ? "flex-col gap-2" : "items-center gap-3"
                  } ${OPTION_STATE_CLASSES[state]}`}
                >
                  <span className={longLabel ? "text-sm font-semibold" : "min-w-8 shrink-0 font-bold"}>{pair[0]}</span>
                  <input
                    value={slots[i] ?? ""}
                    disabled={checked !== null}
                    onChange={(e) => {
                      const v = e.target.value;
                      setSlots((cur) => {
                        const nextSlots = [...cur];
                        nextSlots[i] = v;
                        return nextSlots;
                      });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const inputs = e.currentTarget.closest("div")?.querySelectorAll("input");
                        const nextInput = inputs?.[i + 1];
                        if (nextInput) nextInput.focus();
                        else check();
                      }
                    }}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    enterKeyHint={i + 1 < matchPairs.length ? "next" : "done"}
                    className="w-full min-w-0 flex-1 rounded-lg border border-ink-200 bg-white px-3 py-2 text-base text-ink-900 outline-none focus:border-azure-500 dark:border-white/15 dark:bg-[#161b26] dark:text-ink-50"
                  />
                  {checked !== null &&
                    !slotRight(i) &&
                    (rowShown(i) ? (
                      <span className="shrink-0 text-sm font-semibold text-mint-700 dark:text-mint-300">
                        {pair[1].split(";")[0]}
                      </span>
                    ) : (
                      revealPill(i)
                    ))}
                </label>
              );
            })}
          </div>
        )}

        {kind === "order" && (
          <>
            {/* Ikki gapni birlashtirish kabi topshiriqlarda manba gaplar
                ko'rsatiladi; oddiy «Gap tuzing»da prompt ko'rsatilmaydi. */}
            {question.prompt !== "Gap tuzing" && (
              <p
                lang="en"
                className="rounded-2xl bg-ink-50 px-4 py-3 text-center text-lg font-semibold leading-relaxed text-ink-900 dark:bg-white/5 dark:text-ink-50"
              >
                {question.prompt}
              </p>
            )}
            <div
              className={`flex min-h-14 flex-wrap items-center gap-2 border-b-2 py-2 ${
                checked === null
                  ? "border-ink-300 dark:border-white/30"
                  : checked
                  ? "border-mint-500"
                  : "border-rose-400"
              }`}
            >
              {picked.map((i, k) => (
                <span
                  key={k}
                  className="rounded-xl bg-white px-3 py-2 text-base font-semibold text-ink-900 shadow-sm ring-1 ring-ink-950/10 dark:bg-white/10 dark:text-ink-50"
                >
                  {orderTiles[i]}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {orderTiles.map((tile, i) => (
                <button
                  key={i}
                  disabled={picked.includes(i) || checked !== null}
                  onClick={() => setPicked((p) => [...p, i])}
                  className="btn-press rounded-xl bg-azure-50 px-3 py-2 text-base font-semibold text-azure-900 ring-1 ring-azure-200 transition-opacity hover:bg-azure-100 disabled:opacity-25 dark:bg-azure-950/40 dark:text-azure-100 dark:ring-azure-900"
                >
                  {tile}
                </button>
              ))}
            </div>
            <button
              onClick={() => setPicked((p) => p.slice(0, -1))}
              disabled={picked.length === 0 || checked !== null}
              className="mx-auto flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-ink-500 hover:bg-ink-100 disabled:opacity-40 dark:text-ink-400 dark:hover:bg-white/10"
            >
              <Delete size={14} /> {t("Oxirgi so'zni o'chirish", "Delete the last word")}
            </button>
          </>
        )}

        {kind === "fill" && (
          <div className="flex flex-col gap-3">
            <p className="text-center text-2xl font-semibold leading-relaxed text-ink-950 dark:text-ink-50">
              {question.prompt.split("___")[0]}
              <span className={`inline-block min-w-16 border-b-2 border-current px-1 ${resultTone}`}>
                {typed || "\u00a0"}
              </span>
              {question.prompt.split("___")[1]}
            </p>
            <input
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") (checked === null ? check : next)();
              }}
              disabled={checked !== null}
              lang="en"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              placeholder={t("Tushib qolgan so'zni yozing", "Write the missing word")}
              className={`w-full rounded-xl border-2 bg-white px-4 py-3 text-center text-lg font-semibold text-ink-900 outline-none transition-colors placeholder:text-sm placeholder:font-normal placeholder:text-ink-300 dark:bg-white/5 dark:text-ink-50 ${
                checked === true
                  ? "border-mint-500"
                  : checked === false
                  ? "border-rose-400"
                  : "border-ink-200 focus:border-azure-500 dark:border-white/10"
              }`}
            />
          </div>
        )}

        {kind === "speak" && (
          <div className="flex flex-col items-center gap-3">
            <p className="font-display text-center text-3xl font-bold text-ink-950 dark:text-ink-50">
              {question.prompt}
            </p>
            <button
              onClick={() => speakEn(question.prompt)}
              className="flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-500"
            >
              <Volume2 size={16} /> {t("Namunani eshitish", "Listen to the example")}
            </button>
            <button
              onClick={listen}
              disabled={checked !== null}
              aria-label={t("Yozib olish", "Record")}
              className={`btn-press flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lg transition-all ${
                listening
                  ? "animate-pulse bg-gold-500"
                  : "bg-gradient-to-b from-azure-600 to-azure-800 hover:from-azure-500 hover:to-azure-700"
              }`}
            >
              <Mic size={30} />
            </button>
            <p className="min-h-5 text-center text-sm text-ink-500 dark:text-ink-400">
              {listening
                ? t("Tinglanmoqda…", "Listening…")
                : speechError
                ? speechError
                : heard
                ? t(`Eshitildi: «${heard}»`, `We heard: «${heard}»`)
                : t("Mikrofonni bosib, iborani ayting", "Tap the microphone and say the phrase")}
            </p>
            {speechError && checked === null && (
              <div className="flex gap-2">
                <button
                  onClick={() => record(true)}
                  className="btn-press rounded-full bg-azure-600 px-4 py-2 text-xs font-bold text-white hover:bg-azure-500"
                >
                  {t("To'g'ri aytdim", "I said it right")}
                </button>
                <button
                  onClick={() => record(false)}
                  className="btn-press rounded-full bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-500"
                >
                  {t("Xato qildim", "I made a mistake")}
                </button>
              </div>
            )}
          </div>
        )}

        {kind === "type" && (
          <div className="flex flex-col gap-3">
            <p className="font-display text-center text-3xl font-bold text-ink-950 dark:text-ink-50">
              {question.prompt} <span className="text-ink-300 dark:text-ink-600">→ ?</span>
            </p>
            <input
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") (checked === null ? check : next)();
              }}
              disabled={checked !== null}
              lang="en"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              placeholder={t("Javobni inglizcha yozing", "Write the answer in English")}
              className={`w-full rounded-xl border-2 bg-white px-4 py-3 text-center text-lg font-semibold text-ink-900 outline-none transition-colors placeholder:text-sm placeholder:font-normal placeholder:text-ink-300 dark:bg-white/5 dark:text-ink-50 ${
                checked === true
                  ? "border-mint-500"
                  : checked === false
                  ? "border-rose-400"
                  : "border-ink-200 focus:border-azure-500 dark:border-white/10"
              }`}
            />
          </div>
        )}

        {checked !== null && (
          <div
            className={`flex animate-pop-in gap-3 rounded-2xl px-4 py-3.5 text-sm ring-1 ${
              checked
                ? "bg-gradient-to-br from-mint-50 to-mint-100/70 text-mint-900 ring-mint-200 dark:from-mint-950/50 dark:to-mint-900/30 dark:text-mint-100 dark:ring-mint-800/50"
                : "bg-gradient-to-br from-rose-50 to-rose-100/60 text-rose-900 ring-rose-200 dark:from-rose-950/50 dark:to-rose-900/20 dark:text-rose-100 dark:ring-rose-900/50"
            }`}
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-md ${
                checked ? "bg-mint-500 shadow-mint-700/30" : "bg-rose-500 shadow-rose-700/30"
              }`}
            >
              {checked ? <Check size={20} strokeWidth={3} /> : <X size={20} strokeWidth={3} />}
            </span>
            <div className="min-w-0 flex-1">
            <p className="font-display text-base font-bold">
              {checked
                ? pageMode
                  ? t("Hammasi to'g'ri! Barakalla!", "All correct! Brilliant!")
                  : PRAISE[question.id % PRAISE.length][lang === "en" ? 1 : 0]
                : pageMode
                ? t(
                    `${correctCount} / ${total} to'g'ri.${showAnswer ? " To'g'ri javoblar yashil rangda." : ""}`,
                    `${correctCount} / ${total} correct.${showAnswer ? " The correct answers are in green." : ""}`
                  )
                : showAnswer
                ? t(`To'g'ri javob: ${correctAnswerText}`, `Correct answer: ${correctAnswerText}`)
                : t("Noto'g'ri.", "Not quite.")}
            </p>
            {!pageMode && question.explanation && (checked || showAnswer) && (
              <p className="mt-1 opacity-90">{question.explanation}</p>
            )}
            {!checked && !showAnswer && (
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                {rowMode ? (
                  <span className="text-xs font-semibold opacity-90">
                    {revealsLeft > 0
                      ? t(
                          `Xato qatordagi «Javob» tugmasini bosing — faqat o'sha savolning javobi ochiladi (${revealsLeft} ta imkoniyat qoldi).`,
                          `Tap «Answer» on a wrong row to see just that answer (${revealsLeft} reveals left).`
                        )
                      : t("Bu darsda javobni ko'rish imkoniyatlari tugadi.", "You've used all your answer reveals for this lesson.")}
                  </span>
                ) : revealsLeft > 0 ? (
                  <button
                    onClick={() => setAskReveal("all")}
                    disabled={revealing}
                    className="btn-press rounded-full bg-white px-4 py-1.5 text-xs font-bold text-rose-700 ring-1 ring-rose-200 hover:bg-rose-100 disabled:opacity-50 dark:bg-white/10 dark:text-rose-100 dark:ring-white/15"
                  >
                    {t(`Javobni ko'rish (${revealsLeft} ta qoldi)`, `Show the answer (${revealsLeft} left)`)}
                  </button>
                ) : (
                  <span className="text-xs opacity-80">
                    {t("Bu darsda javobni ko'rish imkoniyatlari tugadi.", "You've used all your answer reveals for this lesson.")}
                  </span>
                )}
                <span className="text-xs opacity-80">
                  {t("Xato savollar keyin qayta beriladi.", "You'll get the questions you missed again later.")}
                </span>
              </div>
            )}
            </div>
          </div>
        )}

        {/* Juftlikda "Tekshirish" kerak emas — hamma juft ulanganda o'zi tekshiriladi. */}
        {!(kind === "match" && checked === null) && (
          <button
            data-check-button
            onClick={checked === null ? check : next}
            disabled={checked === null && !canCheck}
            className={`btn-press mt-1 rounded-full py-3.5 font-display text-base font-bold tracking-wide text-white disabled:opacity-40 ${
              checked ? "bg-mint-600 hover:bg-mint-500" : "bg-azure-600 hover:bg-azure-500"
            }`}
          >
            {checked === null
              ? t("Tekshirish", "Check")
              : !pageMode && qIndex + 1 < total
              ? t("Keyingisi", "Next")
              : t("Natijani ko'rish", "See your result")}
          </button>
        )}
      </div>

      {askReveal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink-950/50 p-4 backdrop-blur-sm sm:items-center"
          onClick={() => !revealing && setAskReveal(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reveal-title"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm animate-pop-in rounded-3xl bg-white p-6 text-center shadow-2xl ring-1 ring-ink-950/5 dark:bg-[#161b26] dark:ring-white/10"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-white shadow-lg shadow-gold-700/30">
              <Eye size={26} />
            </span>
            <p id="reveal-title" className="mt-3 font-display text-lg font-bold text-ink-950 dark:text-ink-50">
              {revealsLeft > 0 ? t("Javobni ochasizmi?", "Show this answer?") : t("Imkoniyatlar tugadi", "No reveals left")}
            </p>
            <p className="mt-1.5 text-sm text-ink-600 dark:text-ink-300">
              {revealsLeft > 0
                ? t(
                    `Bu darsdagi ${revealsLeft} ta imkoniyatdan bittasi ishlatiladi.`,
                    `This uses 1 of your ${revealsLeft} answer reveals for this lesson.`
                  )
                : t(
                    "Bu darsda javobni ko'rish imkoniyatlari tugadi. Xato savollar keyin qayta beriladi.",
                    "You've used all your answer reveals for this lesson. You'll get the questions you missed again later."
                  )}
            </p>
            <div className="mt-5 flex gap-2">
              <button
                onClick={() => setAskReveal(null)}
                disabled={revealing}
                className="btn-press flex-1 rounded-full bg-ink-100 py-3 text-sm font-bold text-ink-800 hover:bg-ink-200 disabled:opacity-50 dark:bg-white/10 dark:text-ink-100 dark:hover:bg-white/15"
              >
                {revealsLeft > 0 ? t("Bekor qilish", "Cancel") : t("Yopish", "Close")}
              </button>
              {revealsLeft > 0 && (
                <button
                  onClick={confirmReveal}
                  disabled={revealing}
                  className="btn-press flex-1 rounded-full bg-azure-600 py-3 text-sm font-bold text-white hover:bg-azure-500 disabled:opacity-50"
                >
                  {revealing ? t("Ochilmoqda…", "Opening…") : t("Ha, ko'rsat", "Yes, show it")}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
