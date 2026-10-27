import { DAILY_GOAL } from "@/lib/data";
import type { Lang } from "@/lib/i18n";

const MONTHS = {
  uz: ["Yan", "Fev", "Mar", "Apr", "May", "Iyn", "Iyl", "Avg", "Sen", "Okt", "Noy", "Dek"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};
const DAYS = { uz: ["Du", "", "Ch", "", "Ju", "", "Ya"], en: ["Mo", "", "We", "", "Fr", "", "Su"] };

/** Kunlik to'g'ri javoblar soni → rang darajasi (kunlik maqsadga nisbatan). */
function level(count: number) {
  if (count < 0) return "bg-transparent";
  if (count === 0) return "bg-ink-100 dark:bg-white/[0.06]";
  if (count < DAILY_GOAL / 2) return "bg-mint-200 dark:bg-mint-900";
  if (count < DAILY_GOAL) return "bg-mint-400 dark:bg-mint-700";
  if (count < DAILY_GOAL * 2) return "bg-mint-500";
  return "bg-gradient-to-br from-mint-400 to-azure-500 shadow-sm shadow-mint-500/40";
}

/** GitHub uslubidagi faollik xaritasi: ustun — hafta, qator — hafta kuni. */
export function ActivityHeatmap({ weeks, lang }: { weeks: { day: string; count: number }[][]; lang: Lang }) {
  const months = MONTHS[lang];
  return (
    <div className="flex flex-col gap-3">
      <div className="no-scrollbar overflow-x-auto">
        <div className="flex min-w-max gap-[3px] sm:gap-1">
          <div className="mr-1 flex flex-col gap-[3px] pt-5 sm:gap-1">
            {DAYS[lang].map((d, i) => (
              <span key={i} className="flex h-3.5 items-center text-[10px] font-medium text-ink-400 sm:h-4">
                {d}
              </span>
            ))}
          </div>
          {weeks.map((week, w) => {
            const first = new Date(`${week[0].day}T00:00:00Z`);
            const showMonth = w === 0 || first.getUTCDate() <= 7;
            return (
              <div key={week[0].day} className="flex flex-col gap-[3px] sm:gap-1">
                <span className="h-4 text-[10px] font-semibold text-ink-400">
                  {showMonth ? months[first.getUTCMonth()] : ""}
                </span>
                {week.map((cell) => (
                  <span
                    key={cell.day}
                    title={cell.count >= 0 ? `${cell.day}: ${cell.count}` : undefined}
                    className={`h-3.5 w-3.5 rounded-[4px] transition-transform duration-150 hover:scale-125 sm:h-4 sm:w-4 ${level(cell.count)}`}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-end gap-1.5 text-[11px] text-ink-400">
        <span>{lang === "en" ? "Less" : "Kam"}</span>
        {[0, 1, DAILY_GOAL / 2, DAILY_GOAL, DAILY_GOAL * 2].map((c) => (
          <span key={c} className={`h-3 w-3 rounded-[3px] ${level(c)}`} />
        ))}
        <span>{lang === "en" ? "More" : "Ko'p"}</span>
      </div>
    </div>
  );
}
