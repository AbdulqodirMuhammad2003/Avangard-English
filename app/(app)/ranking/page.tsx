import { Crown, Medal, Trophy } from "lucide-react";
import { getSession } from "@/lib/auth";
import { getLevelBoard } from "@/lib/data";
import { Avatar } from "@/components/Avatar";
import { getT } from "@/lib/lang-server";

type Row = Awaited<ReturnType<typeof getLevelBoard>>["students"][number];

/** Shohsupa joyi: 1 — o'rtada va eng baland, 2 — chapda, 3 — o'ngda. */
const PODIUM = {
  1: { order: "order-2", height: "h-32 sm:h-36", ring: "ring-gold-300", base: "from-gold-300 via-gold-400 to-gold-600", avatar: 76, text: "text-ink-950" },
  2: { order: "order-1", height: "h-24 sm:h-28", ring: "ring-ink-200", base: "from-ink-100 via-ink-200 to-ink-400", avatar: 60, text: "text-ink-900" },
  3: { order: "order-3", height: "h-20 sm:h-24", ring: "ring-gold-700/50", base: "from-gold-600 via-gold-700 to-gold-900", avatar: 60, text: "text-white" },
} as const;

function PodiumPlace({ row, place, you }: { row: Row; place: 1 | 2 | 3; you: string }) {
  const p = PODIUM[place];
  return (
    <div className={`flex min-w-0 flex-1 flex-col items-center ${p.order}`}>
      <div className="relative mb-2 flex flex-col items-center">
        {place === 1 && <Crown size={26} className="mb-1 text-gold-400 drop-shadow animate-float-slow" fill="currentColor" />}
        <div className={`rounded-full ring-4 ${p.ring} ${row.is_current_user ? "outline-2 outline-offset-2 outline-azure-500" : ""}`}>
          <Avatar name={row.name} photoUrl={row.avatar_url} size={p.avatar} />
        </div>
        <p className="mt-2 max-w-full truncate px-1 text-center text-sm font-bold text-ink-950 dark:text-ink-50">
          {row.name.split(" ")[0]}
          {row.is_current_user && <span className="ml-1 text-azure-600 dark:text-azure-300">({you})</span>}
        </p>
        <p className="flex items-center gap-1 text-xs font-semibold text-ink-500 dark:text-ink-400">
          <Trophy size={12} className="text-gold-500" />
          {row.points.toLocaleString("ru-RU")}
        </p>
      </div>
      <div
        className={`flex w-full items-start justify-center rounded-t-2xl bg-gradient-to-b pt-3 shadow-lg ${p.height} ${p.base} ${p.text}`}
      >
        <span className="font-display text-3xl font-extrabold drop-shadow-sm">{place}</span>
      </div>
    </div>
  );
}

export default async function RankingPage() {
  const session = await getSession();
  const board = await getLevelBoard(session!.userId);
  const t = await getT();
  // Reyting — darslar foizlari yig'indisi bo'yicha; teng ball bo'lsa, ism bo'yicha.
  const rows = [...board.students].sort((a, b) => b.points - a.points || a.name.localeCompare(b.name));
  const leader = Math.max(1, rows[0]?.points ?? 1);
  const podium = rows.slice(0, 3);
  const rest = rows.slice(3);
  const you = t("siz", "you");

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <div className="animate-fade-up">
        <h1 className="font-display text-2xl font-bold text-ink-950 dark:text-ink-50">{t("Reyting", "Ranking")}</h1>
        <p className="text-sm text-ink-500 dark:text-ink-400">
          {t(
            `${board.level} darajasida o'qiyotgan o'quvchilar. Ball — barcha darslar bo'yicha natijalaringiz yig'indisi.`,
            `Students at level ${board.level}. Points are the total of your results in all lessons.`
          )}
        </p>
      </div>

      {podium.length > 0 && (
        <section className="relative animate-fade-up overflow-hidden rounded-[2rem] bg-white px-4 pt-6 ring-1 ring-ink-950/5 sm:px-8 dark:bg-[#151a28] dark:ring-white/10">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-72 -translate-x-1/2 rounded-full bg-gold-400/20 blur-3xl" />
          <div className="relative flex items-end gap-2 sm:gap-4">
            {podium.map((row, i) => (
              <PodiumPlace key={row.id} row={row} place={(i + 1) as 1 | 2 | 3} you={you} />
            ))}
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <ol className="flex flex-col gap-2">
          {rest.map((row, i) => {
            const place = i + 4;
            return (
              <li
                key={row.id}
                style={{ animationDelay: `${i * 40}ms` }}
                className={`flex animate-fade-up items-center gap-3 rounded-2xl p-3 ring-1 transition-transform duration-200 hover:-translate-y-0.5 ${
                  row.is_current_user
                    ? "bg-gradient-to-r from-azure-50 to-white ring-azure-300 dark:from-azure-950/60 dark:to-[#151a28] dark:ring-azure-700/50"
                    : "bg-white ring-ink-950/5 dark:bg-[#151a28] dark:ring-white/10"
                }`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-ink-50 text-sm font-bold text-ink-500 dark:bg-white/5 dark:text-ink-400">
                  {place}
                </span>
                <Avatar name={row.name} photoUrl={row.avatar_url} size={40} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className={`truncate text-sm ${row.is_current_user ? "font-bold text-ink-950 dark:text-ink-50" : "font-semibold text-ink-800 dark:text-ink-200"}`}>
                      {row.name}
                      {row.is_current_user && <span className="ml-1 text-azure-600 dark:text-azure-300">({you})</span>}
                    </p>
                    <span className="flex shrink-0 items-center gap-1 text-sm font-bold tabular-nums text-ink-700 dark:text-ink-200">
                      <Medal size={14} className="text-gold-500" />
                      {row.points.toLocaleString("ru-RU")}
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-2">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-100 dark:bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-azure-500 to-[#7c3aed]"
                        style={{ width: `${Math.round((row.points / leader) * 100)}%` }}
                      />
                    </div>
                    <span className="shrink-0 text-[11px] text-ink-400">
                      {t("o'rtacha", "avg")} {row.average}%
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      )}

      {rows.length === 0 && (
        <p className="rounded-[2rem] bg-white px-3 py-10 text-center text-sm text-ink-400 dark:bg-[#151a28] dark:text-ink-600">
          {t("Hozircha o'quvchilar yo'q.", "No students yet.")}
        </p>
      )}
    </div>
  );
}
