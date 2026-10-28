"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { CalendarClock, CheckCircle2, Trophy, Volume2 } from "lucide-react";
import type { ReviewWord } from "@/lib/data";
import { submitReviewAnswer } from "@/app/actions";
import { speak } from "@/lib/english-speech";
import { formatTranscription } from "@/lib/transcription";
import { translator, type Translate } from "@/lib/i18n";
import { useLang } from "../LangProvider";
import { buzz, celebrate } from "@/lib/celebrate";

export interface ReviewItem {
  word: ReviewWord;
  /** en-uz: inglizcha so'z → tarjima; uz-en: tarjima → inglizcha so'z;
   *  audio: eshitib inglizcha so'zni topish. */
  mode: "en-uz" | "uz-en" | "audio";
  options: string[];
  correct: number;
}

const speakEn = (text: string) => speak(text, 0.85);

function formatNextDue(iso: string | null, t: Translate) {
  if (!iso) return null;
  const days = Math.ceil((new Date(iso).getTime() - Date.now()) / 86_400_000);
  if (days <= 0) return t("bugun", "today");
  if (days === 1) return t("ertaga", "tomorrow");
  return t(`${days} kundan keyin`, `in ${days} days`);
}

const MODE_LABELS: Record<ReviewItem["mode"], [string, string]> = {
  "en-uz": ["Tarjimasini toping", "Find the translation"],
  "uz-en": ["Inglizchasini toping", "Find the English word"],
  audio: ["Eshitgan so'zingizni toping", "Find the word you hear"],
};

export function ReviewSession({ items, nextDueAt }: { items: ReviewItem[]; nextDueAt: string | null }) {
  const t = translator(useLang());
  const [, startTransition] = useTransition();
  // Xato javob berilgan so'z seans oxirida yana bir marta so'raladi (qutichasi
  // esa faqat birinchi javobga qarab o'zgaradi).
  const [queue, setQueue] = useState(items);
  const [pos, setPos] = useState(0);
  const [answered, setAnswered] = useState<Set<number>>(() => new Set());
  const [firstTryCorrect, setFirstTryCorrect] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const item = queue[pos];
  const done = pos >= queue.length;

  useEffect(() => {
    if (item?.mode === "audio" || item?.mode === "en-uz") speakEn(item.word.word);
  }, [item, pos]);

  if (items.length === 0) {
    const when = formatNextDue(nextDueAt, t);
    return (
      <div className="flex animate-fade-up flex-col items-center gap-3 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-ink-950/5 dark:bg-[#151a28] dark:ring-white/10">
        <CalendarClock size={40} className="text-mint-500" />
        <p className="font-display text-xl font-bold text-ink-950 dark:text-ink-50">{t("Hozircha takrorlash yo'q", "Nothing to review yet")}</p>
        <p className="max-w-sm text-sm text-ink-500 dark:text-ink-400">
          {when
            ? t(`Keyingi so'zlar ${when} takrorlashga chiqadi.`, `The next words come for review ${when}.`)
            : t(
                "Darslarda so'zlarni o'rganing — o'rganilgan har bir so'z ertasi kuni shu yerda takrorlanadi.",
                "Learn words in the lessons — every word you learn comes back here the next day."
              )}
        </p>
        <Link
          href="/lessons"
          className="btn-press mt-2 rounded-full bg-azure-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-azure-500"
        >
          {t("Darslarga o'tish", "Go to lessons")}
        </Link>
      </div>
    );
  }

  if (done) {
    const pct = Math.round((firstTryCorrect / items.length) * 100);
    return (
      <div className="flex animate-pop-in flex-col items-center gap-3 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-ink-950/5 dark:bg-[#151a28] dark:ring-white/10">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-mint-400 to-mint-700 text-white shadow-lg shadow-mint-700/30">
          <Trophy size={36} />
        </div>
        <p className="font-display text-3xl font-bold text-ink-950 dark:text-ink-50">{pct}%</p>
        <p className="text-sm text-ink-600 dark:text-ink-300">
          {t(
            `${items.length} ta so'zdan ${firstTryCorrect} tasini birinchi urinishda esladingiz.`,
            `You remembered ${firstTryCorrect} of ${items.length} words the first time.`
          )}
        </p>
        <p className="max-w-sm text-xs text-ink-500 dark:text-ink-400">
          {t(
            "Yaxshi eslangan so'zlar endi kamroq so'raladi, qiyinlari esa ertaga yana chiqadi.",
            "Words you know well will come less often; the difficult ones come back tomorrow."
          )}
        </p>
        <Link
          href="/"
          className="btn-press mt-2 rounded-full bg-azure-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-azure-500"
        >
          {t("Bosh sahifaga", "Home")}
        </Link>
      </div>
    );
  }

  const isFirstAttempt = !answered.has(item.word.id);
  const checked = selected !== null;
  const isRight = selected === item.correct;

  function choose(i: number) {
    if (checked) return;
    setSelected(i);
    const ok = i === item.correct;
    if (isFirstAttempt) {
      setAnswered((s) => new Set(s).add(item.word.id));
      if (ok) setFirstTryCorrect((c) => c + 1);
      startTransition(async () => {
        await submitReviewAnswer(item.word.id, ok);
      });
    }
    if (ok) {
      celebrate({ count: 16, spread: 0.7 });
      buzz(12);
    } else buzz([18, 60, 18]);
    if (!ok) setQueue((q) => [...q, item]);
    if (item.mode !== "en-uz") speakEn(item.word.word);
  }

  function next() {
    setSelected(null);
    setPos(pos + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink-100 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-mint-500 transition-[width] duration-500"
            style={{ width: `${(answered.size / items.length) * 100}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-ink-500 dark:text-ink-400">
          {answered.size} / {items.length}
        </span>
      </div>

      <div
        key={pos}
        className="flex animate-fade-up flex-col gap-5 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink-950/5 sm:p-6 dark:bg-[#151a28] dark:ring-white/10"
      >
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
          {t(...MODE_LABELS[item.mode])}
          {!isFirstAttempt && t(" · yana bir marta", " · one more time")}
        </p>

        {item.mode === "audio" ? (
          <button
            onClick={() => speakEn(item.word.word)}
            className="btn-press mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold-500 text-white shadow-lg shadow-gold-700/30 hover:bg-gold-400"
            aria-label={t("Eshitish", "Listen")}
          >
            <Volume2 size={34} />
          </button>
        ) : (
          <div className="text-center">
            <div className="text-5xl">{item.word.emoji}</div>
            <p className="font-display mt-2 text-3xl font-bold text-ink-950 dark:text-ink-50">
              {item.mode === "en-uz" ? item.word.word : item.word.translation_uz}
            </p>
            {item.mode === "en-uz" && (
              <button
                onClick={() => speakEn(item.word.word)}
                className="mt-1 inline-flex items-center gap-1 text-sm text-ink-500 hover:text-azure-600 dark:text-ink-400"
              >
                <Volume2 size={14} /> {formatTranscription(item.word.transcription)}
              </button>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {item.options.map((opt, i) => {
            const state = !checked
              ? "idle"
              : i === item.correct
              ? "right"
              : i === selected
              ? "wrong"
              : "idle";
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                className={`rounded-xl border-2 px-4 py-3 text-left text-base transition-all duration-150 ${
                  state === "right"
                    ? "border-mint-500 bg-mint-50 font-semibold text-mint-900 dark:bg-mint-950/40 dark:text-mint-100"
                    : state === "wrong"
                    ? "border-rose-400 bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200"
                    : "border-ink-100 bg-white hover:border-ink-200 hover:bg-ink-50/60 dark:border-white/10 dark:bg-white/5 dark:text-ink-200 dark:hover:bg-white/10"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {checked && (
          <div
            className={`flex animate-fade-up items-center gap-3 rounded-2xl px-4 py-3 text-sm ${
              isRight
                ? "bg-mint-50 text-mint-900 dark:bg-mint-950/40 dark:text-mint-100"
                : "bg-rose-50 text-rose-900 dark:bg-rose-950/40 dark:text-rose-100"
            }`}
          >
            {isRight && <CheckCircle2 size={20} className="shrink-0" />}
            <p>
              <span className="font-bold">{isRight ? t("To'g'ri! ", "Correct! ") : t("Eslab qoling: ", "Remember: ")}</span>
              {item.word.word} — {item.word.translation_uz}
              {!isRight && t(". Bu so'z oxirida yana so'raladi.", ". You'll get this word again at the end.")}
            </p>
          </div>
        )}

        <button
          onClick={next}
          disabled={!checked}
          className="btn-press rounded-full bg-azure-600 py-3 text-sm font-bold text-white hover:bg-azure-500 disabled:opacity-40"
        >
          {t("Keyingisi", "Next")}
        </button>
      </div>
    </div>
  );
}
