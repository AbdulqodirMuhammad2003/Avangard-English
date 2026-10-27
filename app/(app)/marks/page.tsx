import { getSession } from "@/lib/auth";
import { getLevelBoard } from "@/lib/data";
import { Avatar } from "@/components/Avatar";
import { Award, BookOpenCheck, PlayCircle, Trophy } from "lucide-react";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { StatCard } from "@/components/ui/StatCard";
import { getLang } from "@/lib/lang-server";
import { localizeLabel, translator, type Lang, type Translate } from "@/lib/i18n";

/** Dars natijasi doirasining rangi: 80%+ — yashil, 50–79% — sariq, undan past — qizil. */
function cellColor(pct: number) {
  if (pct >= 80) return "bg-gradient-to-br from-mint-400 to-mint-600 text-white shadow-sm shadow-mint-700/25";
  if (pct >= 50) return "bg-gradient-to-br from-gold-300 to-gold-500 text-ink-950 shadow-sm shadow-gold-700/20";
  return "bg-gradient-to-br from-rose-400 to-rose-600 text-white shadow-sm shadow-rose-700/25";
}

/** Telefondagi katak yorlig'i: «12-dars» → «12», «Takrorlash» → «T». */
function shortLabel(title: string) {
  return title.match(/^\d+/)?.[0] ?? title.slice(0, 1).toUpperCase();
}

type Board = Awaited<ReturnType<typeof getLevelBoard>>;
type Student = Board["students"][number];

/** Daraja imtihoni natijasi: o'quvchining o'zida foiz, boshqalarda faqat
 *  o'tdi (✓) / o'tmadi (✗); topshirilmagan bo'lsa — «—». */
function ExamBadge({ exam, t }: { exam: Student["exam"]; t: Translate }) {
  if (!exam.attempted) return <span className="text-ink-300 dark:text-ink-600">—</span>;
  if (exam.pct !== null) {
    return (
      <span
        title={exam.passed ? t("Imtihondan o'tgan", "Passed the exam") : t("Imtihondan o'tmagan", "Didn't pass the exam")}
        className={`inline-flex h-9 min-w-9 items-center justify-center rounded-full px-1.5 text-xs font-bold ${cellColor(exam.pct)}`}
      >
        {exam.pct}
      </span>
    );
  }
  return (
    <span
      title={exam.passed ? t("Imtihondan o'tgan", "Passed the exam") : t("Imtihondan o'tmagan", "Didn't pass the exam")}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-base font-bold ${
        exam.passed ? "bg-mint-500 text-white" : "bg-rose-500 text-white"
      }`}
    >
      {exam.passed ? "✓" : "✗"}
    </span>
  );
}

/** Telefon uchun o'quvchi kartasi: darslar raqamlangan kataklar to'rida —
 *  gorizontal aylantirishsiz hammasi bir qarashda ko'rinadi. */
function StudentCard({
  student,
  units,
  rank,
  t,
}: {
  student: Student;
  units: Board["units"];
  rank: number;
  t: Translate;
}) {
  const started = student.percents.filter((p) => p !== null).length;
  const done = student.percents.filter((p) => p !== null && p >= 80).length;
  return (
    <li
      className={`rounded-2xl p-4 shadow-sm ring-1 ${
        student.is_current_user
          ? "bg-gold-50 ring-gold-300/60 dark:bg-[#2a2517] dark:ring-gold-700/40"
          : "bg-white ring-ink-950/5 dark:bg-[#161b26] dark:ring-white/10"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="w-5 shrink-0 text-center text-xs font-semibold text-ink-400">{rank}</span>
        <Avatar name={student.name} photoUrl={student.avatar_url} size={40} />
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-ink-950 dark:text-ink-50">
            {student.name}
            {student.is_current_user && (
              <span className="ml-1.5 rounded-full bg-gold-400 px-2 py-0.5 align-middle text-[10px] font-bold text-ink-950">
                {t("siz", "you")}
              </span>
            )}
          </p>
          <p className="text-xs text-ink-500 dark:text-ink-400">
            {started === 0
              ? t("Hali boshlanmagan", "Not started yet")
              : t(`${started} ta dars boshlangan · ${done} tasi 80%+`, `${started} lessons started · ${done} at 80%+`)}
          </p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-6 gap-1.5">
        {units.map((unit, j) => {
          const pct = student.percents[j];
          return (
            <div
              key={unit.id}
              title={`${unit.title}: ${unit.subtitle}`}
              className={`flex aspect-square flex-col items-center justify-center rounded-xl ${
                pct === null ? "bg-ink-100/70 text-ink-400 dark:bg-white/5 dark:text-ink-500" : cellColor(pct)
              }`}
            >
              <span className="text-[10px] font-semibold leading-none opacity-75">{shortLabel(unit.title)}</span>
              <span className="mt-0.5 text-sm font-bold leading-none">{pct === null ? "—" : pct}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-between rounded-xl bg-ink-50/70 px-3 py-2 dark:bg-white/5">
        <span className="text-xs font-semibold text-ink-600 dark:text-ink-300">{t("Daraja imtihoni", "Level exam")}</span>
        <ExamBadge exam={student.exam} t={t} />
      </div>
    </li>
  );
}

function Legend({ t }: { t: Translate }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-ink-500 dark:text-ink-400">
      <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-mint-500" /> 80%+</span>
      <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-gold-400" /> 50–79%</span>
      <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-rose-500" /> {t("50% dan past", "below 50%")}</span>
      <span className="flex items-center gap-1.5"><span className="text-ink-300 dark:text-ink-600">—</span> {t("boshlanmagan", "not started")}</span>
      <span className="flex items-center gap-1.5"><span className="font-bold text-mint-600">✓</span>/<span className="font-bold text-rose-500">✗</span> {t("imtihondan o'tgan / o'tmagan", "passed / didn't pass the exam")}</span>
    </div>
  );
}

export default async function MarksPage() {
  const session = await getSession();
  const board = await getLevelBoard(session!.userId);
  const lang: Lang = await getLang();
  const t = translator(lang);
  // Telefonda o'z kartangiz doim birinchi.
  const mobileStudents = [
    ...board.students.filter((s) => s.is_current_user),
    ...board.students.filter((s) => !s.is_current_user),
  ];

  const me = board.students.find((s) => s.is_current_user);
  const myStarted = me ? me.percents.filter((p) => p !== null).length : 0;
  const myDone = me ? me.percents.filter((p) => p !== null && p >= 80).length : 0;
  const myPlace = me
    ? [...board.students].sort((a, b) => b.points - a.points).findIndex((s) => s.id === me.id) + 1
    : 0;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      {me && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_2fr]">
          <section className="relative flex animate-fade-up items-center gap-5 overflow-hidden rounded-[2rem] bg-gradient-to-br from-azure-600 via-azure-700 to-[#6d28d9] p-6 text-white shadow-xl shadow-azure-900/20">
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <ProgressRing value={me.average} size={120} stroke={12} tone="white" track="stroke-white/20">
              <span className="font-display text-3xl font-extrabold leading-none">{me.average}%</span>
              <span className="mt-1 text-[11px] font-semibold text-white/70">{t("o'rtacha", "average")}</span>
            </ProgressRing>
            <div className="relative min-w-0">
              <p className="text-xs font-bold uppercase tracking-widest text-white/60">{t("Mening natijam", "My progress")}</p>
              <p className="font-display mt-1 text-2xl font-extrabold leading-tight">{board.level}</p>
              <p className="mt-1 text-sm text-white/75">
                {myDone >= board.units.length && board.units.length > 0
                  ? t("Barcha darslar 80%+ — imtihonga tayyorsiz!", "All lessons at 80%+ — you're ready for the exam!")
                  : t(`80% ga yetkazish kerak: ${board.units.length - myDone} ta dars`, `${board.units.length - myDone} lessons still to reach 80%`)}
              </p>
            </div>
          </section>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <StatCard icon={PlayCircle} accent="azure" value={myStarted} label={t("Boshlangan", "Started")} hint={t(`${board.units.length} ta darsdan`, `of ${board.units.length} lessons`)} />
            <StatCard icon={BookOpenCheck} accent="mint" delay={60} value={myDone} label={t("80%+ darslar", "Lessons 80%+")} />
            <StatCard icon={Trophy} accent="gold" delay={120} value={myPlace ? `#${myPlace}` : "—"} label={t("Reytingda", "In ranking")} hint={t(`${board.students.length} o'quvchi`, `${board.students.length} students`)} />
            <StatCard
              icon={Award}
              accent="rose"
              delay={180}
              value={me.exam.attempted ? (me.exam.pct !== null ? `${me.exam.pct}%` : me.exam.passed ? "✓" : "✗") : "—"}
              label={t("Imtihon", "Exam")}
              hint={me.exam.attempted ? (me.exam.passed ? t("O'tgan", "Passed") : t("O'tmagan", "Not passed")) : t("Topshirilmagan", "Not taken")}
            />
          </div>
        </div>
      )}

      <div className="animate-fade-up">
        <h1 className="font-display text-2xl font-bold text-ink-950 dark:text-ink-50">{t("Baholar", "Marks")}</h1>
        <p className="text-sm text-ink-700/60 dark:text-ink-300/60">
          {t(
            `${board.level} darajasidagi o'quvchilarning har bir dars bo'yicha natijasi (lug'at va mashqlar) va daraja imtihoni.`,
            `Results of the students at level ${board.level} in every lesson (vocabulary and exercises) and the level exam.`
          )}
        </p>
      </div>

      {/* Telefon: o'quvchi kartalari */}
      <div className="flex animate-fade-up flex-col gap-3 md:hidden">
        <Legend t={t} />
        {mobileStudents.length > 0 ? (
          <ul className="flex flex-col gap-3">
            {mobileStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                units={board.units}
                rank={board.students.indexOf(student) + 1}
                t={t}
              />
            ))}
          </ul>
        ) : (
          <p className="rounded-2xl bg-white px-4 py-8 text-center text-sm text-ink-400 dark:bg-[#161b26] dark:text-ink-600">
            {t("Hozircha natijalar yo'q.", "No results yet.")}
          </p>
        )}
      </div>

      {/* Kompyuter: jadval */}
      <div className="hidden animate-fade-up overflow-hidden rounded-[2rem] bg-white ring-1 ring-ink-950/5 md:block dark:bg-[#151a28] dark:ring-white/10">
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-0 text-sm">
            <thead>
              <tr className="text-xs text-ink-500 dark:text-ink-400">
                <th className="sticky left-0 z-10 min-w-44 border-b border-ink-100 bg-white px-4 py-3 text-left font-semibold dark:border-white/10 dark:bg-[#161b26]">
                  {t("O'quvchilar", "Students")}
                </th>
                {board.units.map((unit) => (
                  <th
                    key={unit.id}
                    title={unit.subtitle}
                    className="whitespace-nowrap border-b border-ink-100 px-1.5 py-3 text-center font-semibold dark:border-white/10"
                  >
                    {localizeLabel(lang, unit.title)}
                  </th>
                ))}
                <th className="whitespace-nowrap border-b border-ink-100 px-3 py-3 text-center font-semibold dark:border-white/10">
                  {t("Imtihon", "Exam")}
                </th>
              </tr>
            </thead>
            <tbody>
              {board.students.map((student, i) => (
                <tr key={student.id} style={{ animationDelay: `${i * 30}ms` }} className="animate-fade-up">
                  <td
                    className={`sticky left-0 z-10 border-b border-ink-50 px-4 py-2.5 dark:border-white/5 ${
                      student.is_current_user ? "bg-gold-50 dark:bg-[#2a2517]" : "bg-white dark:bg-[#161b26]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-4 text-xs text-ink-400">{i + 1}</span>
                      <Avatar name={student.name} photoUrl={student.avatar_url} size={32} />
                      <span
                        className={`whitespace-nowrap ${
                          student.is_current_user ? "font-bold text-ink-950 dark:text-ink-50" : "font-medium text-ink-800 dark:text-ink-200"
                        }`}
                      >
                        {student.name}
                        {student.is_current_user && t(" (siz)", " (you)")}
                      </span>
                    </div>
                  </td>
                  {student.percents.map((pct, j) => (
                    <td
                      key={board.units[j].id}
                      className={`border-b border-ink-50 px-1.5 py-2.5 text-center dark:border-white/5 ${
                        student.is_current_user ? "bg-gold-50/60 dark:bg-gold-950/20" : ""
                      }`}
                    >
                      {pct === null ? (
                        <span className="text-ink-300 dark:text-ink-600">—</span>
                      ) : (
                        <span
                          title={`${board.units[j].title}: ${board.units[j].subtitle}`}
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold transition-transform duration-150 hover:scale-110 ${cellColor(pct)}`}
                        >
                          {pct}
                        </span>
                      )}
                    </td>
                  ))}
                  <td
                    className={`border-b border-ink-50 px-3 py-2.5 text-center dark:border-white/5 ${
                      student.is_current_user ? "bg-gold-50/60 dark:bg-gold-950/20" : ""
                    }`}
                  >
                    <ExamBadge exam={student.exam} t={t} />
                  </td>
                </tr>
              ))}
              {board.students.length === 0 && (
                <tr>
                  <td colSpan={board.units.length + 2} className="px-4 py-8 text-center text-ink-400 dark:text-ink-600">
                    {t("Hozircha natijalar yo'q.", "No results yet.")}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="border-t border-ink-100 px-4 py-3 dark:border-white/10">
          <Legend t={t} />
        </div>
      </div>
    </div>
  );
}
