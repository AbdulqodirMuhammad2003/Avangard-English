"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, GraduationCap, RotateCcw, Trophy, XCircle } from "lucide-react";
import type { ExamAnswer, ExamResult, ExamStatus } from "@/lib/exam";
import { saveExamAnswersAction, startExamAction, submitExamAction } from "@/app/actions";
import { useLang, useT } from "../LangProvider";

const CARD =
  "rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink-950/5 sm:p-7 dark:bg-[#161b26] dark:shadow-none dark:ring-white/10";

function formatDateTime(iso: string, lang: string) {
  return new Date(iso).toLocaleString(lang === "en" ? "en-GB" : "uz-UZ", { day: "2-digit", month: "long", hour: "2-digit", minute: "2-digit" });
}

export function ExamView({ status }: { status: ExamStatus }) {
  const [result, setResult] = useState<ExamResult | null>(null);
  if (result) return <ExamResultView result={result} />;
  if (status.active) return <ExamRun key={status.active.id} active={status.active} onFinished={setResult} />;
  return <ExamIntro status={status} />;
}

function ExamIntro({ status }: { status: ExamStatus }) {
  const t = useT();
  const lang = useLang();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [confirming, setConfirming] = useState(false);
  const attemptNo = status.attemptsUsed + 1;

  function start() {
    startTransition(async () => {
      await startExamAction();
      router.refresh();
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <div className={CARD}>
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-azure-500 to-azure-900 text-white shadow-sm">
            <GraduationCap size={28} />
          </span>
          <div className="min-w-0">
            <h1 className="font-display text-2xl font-bold text-ink-950 dark:text-ink-50">{status.title}</h1>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              {t(`${status.level} darajasining barcha darslari bo'yicha yakuniy imtihon.`, `The final exam for all the lessons of level ${status.level}.`)}
            </p>
          </div>
        </div>

        {status.passed ? (
          <div className="mt-5 flex items-center gap-3 rounded-2xl bg-mint-50 px-4 py-3 text-mint-900 dark:bg-mint-950/40 dark:text-mint-100">
            <Trophy size={22} />
            <p className="text-sm font-semibold">
              {t("Siz imtihondan muvaffaqiyatli o'tgansiz", "You have passed the exam")}
              {status.lastResult ? ` (${status.lastResult.pct}%)` : ""}. {t("Tabriklaymiz!", "Congratulations!")}
            </p>
          </div>
        ) : (
          <>
            <ul className="mt-5 grid gap-2 text-sm text-ink-700 sm:grid-cols-2 dark:text-ink-200">
              <li className="rounded-2xl bg-ink-50 px-4 py-3 dark:bg-white/5">
                <b>1–20:</b>{" "}
                {t(
                  "lug'at — rasm va tarjimaga qarab inglizcha so'zni o'z klaviaturangizdan yozasiz.",
                  "vocabulary — look at the picture and the translation and type the English word."
                )}
              </li>
              <li className="rounded-2xl bg-ink-50 px-4 py-3 dark:bg-white/5">
                <b>21–40:</b> {t("grammatika — to'g'ri variantni tanlaysiz.", "grammar — choose the correct answer.")}
              </li>
              <li className="rounded-2xl bg-ink-50 px-4 py-3 dark:bg-white/5">
                <b>{t("40 daqiqa.", "40 minutes.")}</b>{" "}
                {t("Vaqt tugasa, imtihon avtomatik topshiriladi.", "When the time is up, the exam is sent automatically.")}
              </li>
              <li className="rounded-2xl bg-ink-50 px-4 py-3 dark:bg-white/5">
                <b>{t("O'tish bali — 80%", "Pass mark — 80%")}</b>{" "}
                {t("(40 tadan kamida 32 ta to'g'ri javob).", "(at least 32 correct answers out of 40).")}
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-ink-700 dark:text-ink-200">{t("Urinishlar:", "Attempts:")}</span>
              {Array.from({ length: 3 }, (_, i) => (
                <span
                  key={i}
                  className={`h-3 w-8 rounded-full ${
                    i < status.attemptsUsed ? "bg-rose-400" : "bg-mint-400"
                  }`}
                />
              ))}
              <span className="text-sm text-ink-500 dark:text-ink-400">
                {t(`${status.attemptsLeft} ta urinish qoldi`, `${status.attemptsLeft} attempts left`)}
              </span>
            </div>
            <p className="mt-2 text-xs text-ink-500 dark:text-ink-400">
              {t(
                "3 ta urinishda ham o'ta olmasangiz, daraja qayta o'qiladi: darslardagi natijalar nolga tushadi va darslar qaytadan ketma-ket ochiladi.",
                "If you don't pass in 3 attempts, you study the level again: your lesson results go back to zero and the lessons open one by one again."
              )}
            </p>

            {status.levelResetHappened && (
              <div className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-800 dark:bg-rose-950/40 dark:text-rose-200">
                {t(
                  "3 ta urinishda ham 80% ga yetmadingiz, shuning uchun daraja qaytadan o'qilyapti. Darslarni qayta o'tib, barchasini 80% ga yetkazing — shundan keyin sizga yana 3 ta urinish beriladi.",
                  "You didn't get 80% in 3 attempts, so you are studying the level again. Do the lessons again and get them all to 80% — then you get 3 more attempts."
                )}
              </div>
            )}

            {status.plan.length > 0 && (
              <div className="mt-5">
                <p className="font-semibold text-ink-950 dark:text-ink-50">{t("Takrorlash rejasi", "Review plan")}</p>
                <p className="mb-2 text-xs text-ink-500 dark:text-ink-400">
                  {t(
                    "Qayta topshirishdan oldin zaif darslarni 90% ga yetkazing. Imtihonda xato yozilgan so'zlar «Takrorlash» bo'limiga qo'shildi.",
                    "Before you try again, get your weak lessons to 90%. The words you got wrong in the exam are now in «Review»."
                  )}
                </p>
                <div className="flex flex-col divide-y divide-ink-100 dark:divide-white/10">
                  {status.plan.map((p) => (
                    <div key={p.lesson} className="flex items-center justify-between py-2 text-sm">
                      <span className="flex items-center gap-2 text-ink-800 dark:text-ink-200">
                        {p.done ? (
                          <CheckCircle2 size={16} className="text-mint-500" />
                        ) : (
                          <XCircle size={16} className="text-rose-400" />
                        )}
                        {p.title}
                      </span>
                      <span className={p.done ? "font-semibold text-mint-600" : "font-semibold text-rose-500"}>
                        {p.percent}% / 90%
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link href="/lessons" className="btn-press rounded-full bg-ink-100 px-4 py-2 text-sm font-bold text-ink-800 hover:bg-ink-200 dark:bg-white/10 dark:text-ink-100">
                    {t("Darslarga o'tish", "Go to lessons")}
                  </Link>
                  <Link href="/review" className="btn-press rounded-full bg-ink-100 px-4 py-2 text-sm font-bold text-ink-800 hover:bg-ink-200 dark:bg-white/10 dark:text-ink-100">
                    {t("So'zlarni takrorlash", "Review words")}
                  </Link>
                </div>
              </div>
            )}

            {status.blockReason && (
              <div className="mt-5 flex items-start gap-2 rounded-2xl bg-gold-50 px-4 py-3 text-sm text-gold-900 dark:bg-gold-950/40 dark:text-gold-100">
                <Clock size={18} className="mt-0.5 shrink-0" />
                <p>
                  {status.blockReason}
                  {status.nextAvailableAt && (
                    <>
                      {" "}
                      {t("Keyingi urinish:", "Next attempt:")} <b>{formatDateTime(status.nextAvailableAt, lang)}</b>.
                    </>
                  )}
                </p>
              </div>
            )}

            {status.canStart &&
              (confirming ? (
                <div className="mt-6 rounded-2xl bg-azure-50 p-4 dark:bg-azure-950/40">
                  <p className="text-sm text-azure-900 dark:text-azure-100">
                    {lang === "en" ? (
                      <>
                        This is <b>attempt {attemptNo}</b> (of 3). When you start, you have 40 minutes to finish. Shall we start?
                      </>
                    ) : (
                      <>
                        Bu sizning <b>{attemptNo}-urinishingiz</b> (3 tadan). Boshlaganingizdan keyin 40 daqiqa ichida
                        topshirishingiz kerak. Boshlaymizmi?
                      </>
                    )}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={start}
                      disabled={pending}
                      className="btn-press rounded-full bg-azure-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-azure-500 disabled:opacity-60"
                    >
                      {pending ? t("Tayyorlanmoqda…", "Getting ready…") : t("Ha, boshlash", "Yes, start")}
                    </button>
                    <button
                      onClick={() => setConfirming(false)}
                      className="btn-press rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink-700 ring-1 ring-ink-200 dark:bg-white/10 dark:text-ink-100 dark:ring-white/10"
                    >
                      {t("Bekor qilish", "Cancel")}
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setConfirming(true)}
                  className="btn-press mt-6 inline-flex items-center gap-2 rounded-full bg-azure-600 px-6 py-3 text-sm font-bold text-white hover:bg-azure-500"
                >
                  {t("Imtihonni boshlash", "Start the exam")} <ArrowRight size={18} />
                </button>
              ))}
          </>
        )}
      </div>
    </div>
  );
}

function ExamRun({
  active,
  onFinished,
}: {
  active: NonNullable<ExamStatus["active"]>;
  onFinished: (r: ExamResult) => void;
}) {
  const t = useT();
  const { questions } = active;
  const total = questions.length;
  const [answers, setAnswers] = useState<ExamAnswer[]>(() => questions.map((_, i) => active.answers[i] ?? null));
  const [index, setIndex] = useState(() => {
    const firstEmpty = questions.findIndex((_, i) => active.answers[i] == null || active.answers[i] === "");
    return firstEmpty === -1 ? 0 : firstEmpty;
  });
  const [now, setNow] = useState(() => Date.now());
  const [confirmFinish, setConfirmFinish] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const answersRef = useRef(answers);
  answersRef.current = answers;
  const deadline = new Date(active.deadline).getTime();
  const secondsLeft = Math.max(0, Math.round((deadline - now) / 1000));

  async function submit() {
    if (submitting) return;
    setSubmitting(true);
    const result = await submitExamAction(active.id, answersRef.current);
    if (result) onFinished(result);
    else window.location.reload();
  }

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Vaqt tugaganda imtihon avtomatik topshiriladi.
  useEffect(() => {
    if (secondsLeft === 0) submit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft === 0]);

  function go(next: number) {
    saveExamAnswersAction(active.id, answersRef.current);
    setConfirmFinish(false);
    setIndex(next);
  }

  function setAnswer(value: ExamAnswer) {
    setAnswers((a) => a.map((x, i) => (i === index ? value : x)));
  }

  const q = questions[index];
  const answered = answers.filter((a) => a !== null && a !== "").length;
  const unanswered = total - answered;
  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="flex flex-col gap-4">
      <div className={`${CARD} flex items-center justify-between gap-3 !py-4`}>
        <span className="rounded-full bg-azure-50 px-3 py-1 text-xs font-bold text-azure-800 dark:bg-azure-950/40 dark:text-azure-100">
          {q.section === "vocab" ? t("Lug'at", "Vocabulary") : t("Grammatika", "Grammar")} · {index + 1} / {total}
        </span>
        <span
          className={`flex items-center gap-1.5 font-mono text-sm font-bold ${
            secondsLeft < 300 ? "text-rose-500" : "text-ink-700 dark:text-ink-200"
          }`}
        >
          <Clock size={16} /> {mm}:{ss}
        </span>
      </div>

      <div className={CARD}>
        {q.kind === "type" ? (
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-7xl" aria-hidden="true">{q.emoji}</p>
            <p className="font-display text-2xl font-bold text-ink-950 dark:text-ink-50">{q.uz}</p>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              {t(`Inglizchasini yozing · ${q.letters} ta harf`, `Write it in English · ${q.letters} letters`)}
            </p>
            <input
              key={index}
              autoFocus
              value={typeof answers[index] === "string" ? (answers[index] as string) : ""}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && index < total - 1) go(index + 1);
              }}
              lang="en"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              placeholder={t("Inglizcha so'z", "English word")}
              className="w-full max-w-sm rounded-2xl border-2 border-ink-200 bg-white px-4 py-3 text-center text-xl font-semibold text-ink-900 outline-none focus:border-azure-500 dark:border-white/10 dark:bg-white/5 dark:text-ink-50"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <p lang="en" className="text-center text-xl font-semibold text-ink-950 dark:text-ink-50">{q.prompt}</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {q.options!.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setAnswer(i)}
                  className={`rounded-xl border-2 px-4 py-3 text-left text-base transition-all duration-150 ${
                    answers[index] === i
                      ? "border-azure-500 bg-azure-50 font-semibold text-azure-900 dark:bg-azure-950/40 dark:text-azure-100"
                      : "border-ink-100 bg-white hover:border-ink-200 dark:border-white/10 dark:bg-white/5 dark:text-ink-200"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 flex items-center justify-between gap-2">
          <button
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className="btn-press inline-flex items-center gap-1.5 rounded-full bg-ink-100 px-4 py-2.5 text-sm font-bold text-ink-800 disabled:opacity-40 dark:bg-white/10 dark:text-ink-100"
          >
            <ArrowLeft size={16} /> {t("Oldingi", "Back")}
          </button>
          {index < total - 1 ? (
            <button
              onClick={() => go(index + 1)}
              className="btn-press inline-flex items-center gap-1.5 rounded-full bg-azure-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-azure-500"
            >
              {t("Keyingisi", "Next")} <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={() => (unanswered > 0 ? setConfirmFinish(true) : submit())}
              disabled={submitting}
              className="btn-press rounded-full bg-mint-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-mint-500 disabled:opacity-60"
            >
              {submitting ? t("Tekshirilmoqda…", "Checking…") : t("Imtihonni yakunlash", "Finish the exam")}
            </button>
          )}
        </div>

        {confirmFinish && (
          <div className="mt-4 rounded-2xl bg-gold-50 p-4 text-sm text-gold-900 dark:bg-gold-950/40 dark:text-gold-100">
            {t(
              `${unanswered} ta savolga javob berilmagan — ular xato hisoblanadi. Baribir yakunlaysizmi?`,
              `${unanswered} questions have no answer — they count as wrong. Finish anyway?`
            )}
            <div className="mt-3 flex gap-2">
              <button onClick={submit} className="btn-press rounded-full bg-mint-600 px-4 py-2 font-bold text-white">
                {t("Ha, yakunlash", "Yes, finish")}
              </button>
              <button
                onClick={() => go(answers.findIndex((a) => a === null || a === ""))}
                className="btn-press rounded-full bg-white px-4 py-2 font-bold text-ink-700 ring-1 ring-ink-200 dark:bg-white/10 dark:text-ink-100 dark:ring-white/10"
              >
                {t("Javobsiz savolga o'tish", "Go to an unanswered question")}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Savollar xaritasi: javob berilganlar ajratilgan */}
      <div className={`${CARD} !py-4`}>
        <div className="grid grid-cols-10 gap-1.5">
          {questions.map((_, i) => {
            const done = answers[i] !== null && answers[i] !== "";
            return (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-8 rounded-lg text-xs font-bold ${
                  i === index
                    ? "bg-azure-600 text-white"
                    : done
                    ? "bg-azure-100 text-azure-900 dark:bg-azure-950/60 dark:text-azure-100"
                    : "bg-ink-50 text-ink-500 dark:bg-white/5 dark:text-ink-400"
                }`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-ink-500 dark:text-ink-400">
          {t(
            `Javob berilgan: ${answered} / ${total}. Javoblar avtomatik saqlanadi.`,
            `Answered: ${answered} / ${total}. Your answers are saved automatically.`
          )}
        </p>
      </div>
    </div>
  );
}

function ExamResultView({ result }: { result: ExamResult }) {
  const t = useT();
  return (
    <div className="flex flex-col gap-5">
      <div className={CARD}>
        <div className="flex items-center gap-3">
          {result.passed ? (
            <Trophy size={32} className="text-mint-500" />
          ) : (
            <XCircle size={32} className="text-rose-500" />
          )}
          <h1 className={`font-display text-2xl font-bold ${result.passed ? "text-mint-600" : "text-rose-500"}`}>
            {result.passed
              ? t("Tabriklaymiz! Imtihondan o'tdingiz", "Congratulations! You passed the exam")
              : t("Afsuski, imtihondan o'ta olmadingiz", "Sorry, you didn't pass the exam")}
          </h1>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-ink-50 p-4 dark:bg-white/5">
            <p className="text-xs text-ink-500 dark:text-ink-400">{t("Umumiy natija", "Total score")}</p>
            <p className={`font-display text-3xl font-bold ${result.passed ? "text-mint-600" : "text-rose-500"}`}>{result.pct}%</p>
            <p className="text-xs text-ink-500 dark:text-ink-400">{result.score} / {result.total} · {t("kerak 80%", "you need 80%")}</p>
          </div>
          <div className="rounded-2xl bg-ink-50 p-4 dark:bg-white/5">
            <p className="text-xs text-ink-500 dark:text-ink-400">{t("Lug'at", "Vocabulary")}</p>
            <p className="font-display text-3xl font-bold text-ink-950 dark:text-ink-50">{result.vocabPct}%</p>
          </div>
          <div className="rounded-2xl bg-ink-50 p-4 dark:bg-white/5">
            <p className="text-xs text-ink-500 dark:text-ink-400">{t("Grammatika", "Grammar")}</p>
            <p className="font-display text-3xl font-bold text-ink-950 dark:text-ink-50">{result.grammarPct}%</p>
          </div>
        </div>

        {result.passed ? (
          <p className="mt-4 text-sm text-ink-600 dark:text-ink-300">{t("Natija «Baholar» bo'limiga yozildi.", "Your result is saved in «Marks».")}</p>
        ) : result.levelReset ? (
          <div className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-800 dark:bg-rose-950/40 dark:text-rose-200">
            {t(
              "Bu 3-urinish edi. Daraja qayta o'qiladi: darslardagi natijalar nolga tushirildi. Darslarni qayta o'tib, barchasini 80% ga yetkazing — shundan keyin yana 3 ta urinish beriladi.",
              "That was attempt 3. You will study the level again: your lesson results are back to zero. Do the lessons again and get them all to 80% — then you get 3 more attempts."
            )}
          </div>
        ) : (
          <div className="mt-4 rounded-2xl bg-gold-50 px-4 py-3 text-sm text-gold-900 dark:bg-gold-950/40 dark:text-gold-100">
            {t(
              `Yana ${result.attemptsLeft} ta urinish qoldi. Qayta topshirish 24 soatdan keyin ochiladi. Undan oldin`,
              `You have ${result.attemptsLeft} more attempts. You can try again after 24 hours. Before that,`
            )}
            {result.weakLessons.length > 0
              ? t(
                  ` zaif darslarni (${result.weakLessons.map((l) => `${l}-dars`).join(", ")}) 90% ga yetkazing va`,
                  ` get your weak lessons (${result.weakLessons.map((l) => `Lesson ${l}`).join(", ")}) to 90% and`
                )
              : null}{" "}
            {t("xato yozilgan so'zlarni «Takrorlash» bo'limida takrorlang.", "review the words you got wrong in «Review».")}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/lessons" className="btn-press rounded-full bg-azure-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-azure-500">
            {t("Darslarga qaytish", "Back to lessons")}
          </Link>
          {!result.passed && (
            <Link
              href="/review"
              className="btn-press inline-flex items-center gap-1.5 rounded-full bg-ink-100 px-5 py-2.5 text-sm font-bold text-ink-800 hover:bg-ink-200 dark:bg-white/10 dark:text-ink-100"
            >
              <RotateCcw size={16} /> {t("So'zlarni takrorlash", "Review words")}
            </Link>
          )}
        </div>
      </div>

      {result.wrongWords.length > 0 && (
        <div className={CARD}>
          <p className="font-semibold text-ink-950 dark:text-ink-50">{t("Xato yozilgan so'zlar", "Words you got wrong")}</p>
          <div className="mt-2 flex flex-col divide-y divide-ink-100 dark:divide-white/10">
            {result.wrongWords.map((w, i) => (
              <div key={i} className="flex items-center justify-between gap-3 py-2 text-sm">
                <span className="text-ink-700 dark:text-ink-200">
                  {w.emoji} {w.uz}
                </span>
                <span>
                  <span className="text-rose-500 line-through">{w.given || "—"}</span>{" "}
                  <b className="text-mint-600">{w.answer}</b>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={CARD}>
        <p className="font-semibold text-ink-950 dark:text-ink-50">{t("Darslar bo'yicha", "By lesson")}</p>
        <div className="mt-2 grid grid-cols-2 gap-x-6 sm:grid-cols-3">
          {result.lessons.map((l) => (
            <div key={l.lesson} className="flex justify-between border-b border-ink-100 py-1.5 text-sm dark:border-white/10">
              <span className="text-ink-700 dark:text-ink-200">{t(`${l.lesson}-dars`, `Lesson ${l.lesson}`)}</span>
              <span className={l.correct / l.total < 0.75 ? "font-semibold text-rose-500" : "font-semibold text-mint-600"}>
                {l.correct} / {l.total}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
