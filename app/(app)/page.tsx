import Link from "next/link";
import { ArrowUpRight, BookMarked, BookOpen, CalendarCheck, Flame, GraduationCap, PartyPopper, Target } from "lucide-react";
import { getSession } from "@/lib/auth";
import { getUserStats, getAllUnitsDetailed, withoutQuestions, getActivityOverview, getReviewSummary } from "@/lib/data";
import { TodayPanel } from "@/components/TodayPanel";
import { StatCard } from "@/components/ui/StatCard";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { ActivityHeatmap } from "@/components/ui/ActivityHeatmap";
import { currentUnitOf, levelUnits } from "@/lib/progress";
import { langForLevel, localizeLabel, translator } from "@/lib/i18n";

export default async function HomePage() {
  const session = await getSession();
  const userId = session!.userId;
  const [userRow, unitsDetailed, activity, review] = await Promise.all([
    getUserStats(userId),
    getAllUnitsDetailed(userId).then(withoutQuestions),
    getActivityOverview(userId),
    getReviewSummary(userId),
  ]);
  const user = userRow!;
  const lang = langForLevel(user.level);
  const t = translator(lang);

  // Hisoblagichlar va joriy dars — faqat o'quvchining joriy darajasi bo'yicha.
  const myUnits = levelUnits(unitsDetailed, user.level);
  const totalWords = myUnits.reduce((s, u) => s + u.totalWords, 0);
  const learnedWords = myUnits.reduce((s, u) => s + u.learnedWords, 0);
  const wordsPct = totalWords === 0 ? 0 : Math.round((learnedWords / totalWords) * 100);
  const totalUnits = myUnits.length;
  const doneUnits = myUnits.filter((u) => u.percent >= 80).length;
  const currentUnit = currentUnitOf(unitsDetailed, user.level);

  const LIBRARY_CARDS = [
    {
      href: "/lessons",
      label: t("Darslar", "Lessons"),
      desc: t(`${user.level} darajasida ${totalUnits} ta dars`, `${totalUnits} lessons at level ${user.level}`),
      icon: GraduationCap,
      tint: "from-azure-500 to-[#7c3aed]",
    },
    {
      href: "/lessons",
      label: t("Lug'at", "Vocabulary"),
      desc: t(`${user.level} darajasida ${totalWords} ta so'z`, `${totalWords} words at level ${user.level}`),
      icon: BookOpen,
      tint: "from-gold-400 to-gold-600",
    },
  ];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:gap-6">
      <h1 className="sr-only">{t("Bosh sahifa", "Home")}</h1>
      <TodayPanel user={user} units={unitsDetailed} activity={activity} review={review} />

      {/* Statistika */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard
          icon={Flame}
          accent="gold"
          value={activity.streak}
          label={t("Kun ketma-ket", "Day streak")}
          hint={t(`Eng uzuni: ${activity.bestStreak} kun`, `Best: ${activity.bestStreak} days`)}
        />
        <StatCard
          icon={BookMarked}
          accent="mint"
          delay={60}
          value={learnedWords}
          label={t("O'rganilgan so'z", "Words learned")}
          hint={t(`${user.level}: ${totalWords} tadan`, `${user.level}: of ${totalWords}`)}
        />
        <StatCard
          icon={CalendarCheck}
          accent="azure"
          delay={120}
          value={activity.activeDays}
          label={t("Faol kun", "Active days")}
          hint={t("Oxirgi yil", "Last year")}
        />
        <StatCard
          icon={Target}
          accent="rose"
          delay={180}
          value={activity.totalCorrect.toLocaleString("ru-RU")}
          label={t("To'g'ri javob", "Correct answers")}
          hint={t("Oxirgi yil", "Last year")}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.7fr_1fr]">
        {/* Faollik xaritasi */}
        <section className="min-w-0 animate-fade-up rounded-[2rem] bg-white p-5 ring-1 ring-ink-950/5 sm:p-6 dark:bg-[#151a28] dark:ring-white/10">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-lg font-bold text-ink-950 dark:text-ink-50">{t("Faolligingiz", "Your activity")}</h2>
              <p className="text-sm text-ink-500 dark:text-ink-400">
                {t("Har bir katak — bir kun. Qanchalik yorqin bo'lsa, shuncha ko'p mashq.", "Each square is a day. The brighter, the more you practised.")}
              </p>
            </div>
          </div>
          <ActivityHeatmap weeks={activity.heatmap} lang={lang} />
        </section>

        {/* Lug'at halqasi */}
        <section className="relative flex animate-fade-up flex-col items-center justify-center gap-4 overflow-hidden rounded-[2rem] bg-white p-6 text-center ring-1 ring-ink-950/5 dark:bg-[#151a28] dark:ring-white/10">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-mint-400/15 blur-2xl" />
          <ProgressRing value={wordsPct} size={150} stroke={14} tone="mint">
            <span className="font-display text-4xl font-extrabold leading-none text-ink-950 dark:text-ink-50">{wordsPct}%</span>
            <span className="mt-1 text-xs font-semibold text-ink-500 dark:text-ink-400">
              {learnedWords} / {totalWords}
            </span>
          </ProgressRing>
          <div>
            <p className="font-display text-lg font-bold text-ink-950 dark:text-ink-50">{t("Lug'at boyligi", "Your vocabulary")}</p>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              {t(`${user.level} darajasidagi so'zlardan`, `of the words at level ${user.level}`)}
            </p>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">
        {/* Joriy dars */}
        {currentUnit ? (
          <Link
            href={`/lessons?unit=${currentUnit.id}`}
            className="group relative flex min-w-0 animate-fade-up items-center gap-5 overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-6 text-white shadow-xl shadow-ink-950/20 ring-1 ring-white/5 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-azure-500/30 blur-3xl" />
            <div className="sheen pointer-events-none absolute inset-0 animate-shimmer opacity-30" />
            <ProgressRing value={currentUnit.percent} size={96} stroke={10} tone="gold" track="stroke-white/10">
              <span className="font-display text-xl font-extrabold">{currentUnit.percent}%</span>
            </ProgressRing>
            <div className="relative min-w-0 flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-300">{t("Joriy dars", "Current lesson")}</p>
              <p className="font-display mt-1 text-lg font-bold leading-snug">{currentUnit.subtitle}</p>
              <p className="mt-0.5 text-xs text-white/60">
                {currentUnit.level_code} · {localizeLabel(lang, currentUnit.title)} ·{" "}
                {t(`${doneUnits} / ${totalUnits} dars tugallangan`, `${doneUnits} / ${totalUnits} lessons done`)}
              </p>
            </div>
            <ArrowUpRight size={22} className="relative shrink-0 opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <div className="flex animate-fade-up flex-col items-center justify-center gap-2 rounded-[2rem] bg-gradient-to-br from-mint-500 to-mint-800 p-6 text-center text-white shadow-xl">
            <PartyPopper size={30} />
            <p className="font-display text-lg font-bold">{t("Barcha darslar tugallandi!", "All lessons are finished!")}</p>
            <p className="text-sm text-white/80">{t("Ajoyib natija — davom eting.", "Great result — keep going.")}</p>
          </div>
        )}

        {/* Kutubxona */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {LIBRARY_CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.label}
                href={c.href}
                style={{ animationDelay: `${i * 70}ms` }}
                className="group flex animate-fade-up flex-col justify-between gap-6 rounded-[2rem] bg-white p-5 ring-1 ring-ink-950/5 transition-transform duration-300 hover:-translate-y-1 dark:bg-[#151a28] dark:ring-white/10"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 ${c.tint}`}
                >
                  <Icon size={24} />
                </span>
                <div>
                  <p className="font-display font-bold text-ink-950 dark:text-ink-50">{c.label}</p>
                  <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">{c.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
