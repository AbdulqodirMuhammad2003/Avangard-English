import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Flame, PartyPopper, RefreshCw, Sparkles } from "lucide-react";
import {
  DAILY_GOAL,
  type ActivityOverview,
  type ReviewSummary,
  type UnitDetail,
  type UserRecord,
} from "@/lib/data";
import { EditableAvatar } from "./EditableAvatar";
import { ProgressRing } from "./ui/ProgressRing";
import { currentUnitOf, levelUnits } from "@/lib/progress";
import { langForLevel, localizeLabel, translator, type Lang } from "@/lib/i18n";

const WEEKDAYS_EN = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

interface NextStep {
  title: string;
  detail: string;
  percent: number;
  href: string;
}

/** O'quvchi to'xtagan joy: joriy darsdagi (joriy darajaning oxirgi ochiq
 *  darsi) tugallanmagan lug'at bosqichi yoki ishlanmagan mashq; u to'liq
 *  bo'lsa — joriy darajaning boshqa ochiq darslaridan. Oldingi darajalar
 *  hisobga olinmaydi (o'qituvchi o'quvchini daraja o'rtasidan boshlatishi mumkin). */
function findNextStep(units: UnitDetail[], level: string, lang: Lang): NextStep | null {
  const t = translator(lang);
  const current = currentUnitOf(units, level);
  const ordered = [
    ...(current ? [current] : []),
    ...levelUnits(units, level).filter((u) => u !== current),
  ];
  for (const unit of ordered) {
    if (unit.locked) continue;
    for (const round of unit.rounds) {
      const left = round.word_count - round.learned_count;
      if (left > 0) {
        return {
          title: t(`${unit.title} · Lug'at, ${round.title}`, `${localizeLabel(lang, unit.title)} · Vocabulary, ${localizeLabel(lang, round.title)}`),
          detail: t(`${left} ta so'z qoldi`, `${left} words left`),
          percent: Math.round((round.learned_count / round.word_count) * 100),
          href: `/lessons?unit=${unit.id}`,
        };
      }
    }
    const done = unit.exercises.filter((e) => e.attempted).length;
    const next = unit.exercises.find((e) => !e.attempted);
    if (next) {
      return {
        title: t(`${unit.title} · Mashqlar`, `${localizeLabel(lang, unit.title)} · Exercises`),
        detail: next.title,
        percent: Math.round((done / unit.exercises.length) * 100),
        href: `/lessons?unit=${unit.id}`,
      };
    }
  }
  return null;
}

export function TodayPanel({
  user,
  units,
  activity,
  review,
}: {
  user: UserRecord;
  units: UnitDetail[];
  activity: ActivityOverview;
  review: ReviewSummary;
}) {
  const lang = langForLevel(user.level);
  const t = translator(lang);
  const next = findNextStep(units, user.level, lang);
  const goalPct = Math.round((Math.min(activity.todayCorrect, DAILY_GOAL) / DAILY_GOAL) * 100);
  const goalReached = activity.todayCorrect >= DAILY_GOAL;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
      {/* Qahramon karta */}
      <section className="relative min-w-0 animate-fade-up overflow-hidden rounded-[2rem] bg-gradient-to-br from-azure-600 via-azure-700 to-[#6d28d9] p-5 text-white shadow-xl shadow-azure-900/20 sm:p-7">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-gold-400/25 blur-3xl animate-float-slow" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1.2px)", backgroundSize: "18px 18px" }}
        />

        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <EditableAvatar name={user.name} avatarUrl={user.avatar_url} size={56} triggerClassName="min-w-0 items-center gap-3.5">
            <div className="min-w-0 text-left">
              <p className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                {t("Salom", "Hello")}, {user.name.split(" ")[0]}! 👋
              </p>
              <p className="mt-0.5 text-sm text-white/75">
                {goalReached
                  ? t("Bugungi maqsad bajarildi — zo'r!", "Today's goal is done — great!")
                  : t("Bugun yana bir qadam — 10 daqiqa yetarli", "One more step today — 10 minutes is enough")}
              </p>
            </div>
          </EditableAvatar>
          <div className="flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-bold ring-1 ring-white/25 backdrop-blur">
            <Flame size={18} className={activity.streak > 0 ? "text-gold-300" : "text-white/60"} fill={activity.streak > 0 ? "currentColor" : "none"} />
            {activity.streak > 0 ? t(`${activity.streak} kun ketma-ket`, `${activity.streak}-day streak`) : t("0 kun", "0 days")}
          </div>
        </div>

        <div className="relative mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
          <ProgressRing value={goalPct} size={112} stroke={11} tone="white" track="stroke-white/20">
            <span className="font-display text-2xl font-extrabold leading-none">{Math.min(activity.todayCorrect, DAILY_GOAL)}</span>
            <span className="mt-0.5 text-[11px] font-semibold text-white/70">/ {DAILY_GOAL}</span>
          </ProgressRing>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-white/60">{t("Bugungi maqsad", "Today's goal")}</p>
            <p className="font-display mt-0.5 text-lg font-bold">
              {goalReached
                ? t("Maqsad bajarildi! 🎉", "Goal reached! 🎉")
                : t(`Yana ${DAILY_GOAL - activity.todayCorrect} ta to'g'ri javob`, `${DAILY_GOAL - activity.todayCorrect} more correct answers`)}
            </p>
            {next ? (
              <Link
                href={next.href}
                className="btn-press group mt-3 flex items-center gap-3 rounded-2xl bg-white p-3 pr-4 text-ink-950 shadow-lg shadow-black/15"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-white shadow-md shadow-gold-700/30">
                  <Sparkles size={20} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-bold">{next.title}</span>
                  <span className="block truncate text-xs text-ink-500">{next.detail}</span>
                  <span className="mt-1.5 block h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                    <span className="block h-full rounded-full bg-gradient-to-r from-azure-500 to-[#7c3aed]" style={{ width: `${next.percent}%` }} />
                  </span>
                </span>
                <ArrowRight size={20} className="shrink-0 text-azure-600 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <Link href="/lessons" className="btn-press mt-3 flex items-center gap-3 rounded-2xl bg-white/15 p-3 ring-1 ring-white/25">
                <PartyPopper size={22} />
                <span className="text-sm font-semibold">{t("Ochiq darslarning hammasi tugallandi!", "All open lessons are finished!")}</span>
              </Link>
            )}
          </div>
        </div>

        <div className="relative mt-6 flex items-center justify-between gap-2 rounded-2xl bg-black/15 px-3 py-2.5 ring-1 ring-white/10 sm:px-4">
          <span className="hidden text-xs font-semibold text-white/70 sm:block">{t("Bu hafta", "This week")}</span>
          <div className="flex flex-1 justify-between gap-1 sm:flex-none sm:gap-2.5">
            {activity.week.map((d, i) => (
              <div key={d.label} className="flex flex-col items-center gap-1">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-transform ${
                    d.active
                      ? "bg-gradient-to-br from-gold-300 to-gold-500 text-ink-950 shadow-md shadow-gold-700/30"
                      : d.isToday
                      ? "bg-white/20 ring-2 ring-gold-300"
                      : d.isFuture
                      ? "bg-white/5"
                      : "bg-white/10"
                  }`}
                >
                  {d.active ? <Check size={16} strokeWidth={3} /> : d.isToday ? <Flame size={15} className="text-gold-300" /> : ""}
                </span>
                <span className={`text-[11px] ${d.isToday ? "font-bold text-white" : "text-white/60"}`}>{t(d.label, WEEKDAYS_EN[i] ?? d.label)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Takrorlash kartasi */}
      <Link
        href="/review"
        style={{ animationDelay: "80ms" }}
        className={`group relative flex min-w-0 animate-fade-up flex-col justify-between overflow-hidden rounded-[2rem] p-6 ring-1 transition-transform duration-300 hover:-translate-y-1 ${
          review.due > 0
            ? "bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 text-white shadow-xl shadow-gold-700/25 ring-white/10"
            : "bg-white text-ink-950 ring-ink-950/5 dark:bg-[#151a28] dark:text-ink-50 dark:ring-white/10"
        }`}
      >
        <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/15 blur-2xl" />
        <div className="relative flex items-center justify-between">
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-180 ${
              review.due > 0 ? "bg-white/20" : "bg-gold-100 text-gold-600 dark:bg-gold-950/50 dark:text-gold-300"
            }`}
          >
            <RefreshCw size={24} />
          </span>
          <ChevronRight size={22} className="opacity-60 transition-transform group-hover:translate-x-1" />
        </div>
        <div className="relative mt-8">
          <p className={`text-xs font-bold uppercase tracking-widest ${review.due > 0 ? "text-white/70" : "text-ink-400"}`}>
            {t("Takrorlash vaqti", "Time to review")}
          </p>
          <p className="font-display mt-1 text-4xl font-extrabold tracking-tight">
            {review.due > 0 ? review.due : "0"}
            <span className="ml-2 text-base font-bold opacity-80">{t("ta so'z", "words")}</span>
          </p>
          <p className={`mt-1 text-sm ${review.due > 0 ? "text-white/80" : "text-ink-500 dark:text-ink-400"}`}>
            {review.due > 0
              ? t("So'zlar xotirada mustahkamlansin — 3 daqiqa.", "Lock the words into memory — 3 minutes.")
              : t("Hozircha takrorlanadigan so'z yo'q.", "Nothing to review right now.")}
          </p>
        </div>
      </Link>
    </div>
  );
}
