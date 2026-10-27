import type { LucideIcon } from "lucide-react";

const ACCENTS = {
  azure: "from-azure-500 to-[#7c3aed] shadow-azure-700/30",
  mint: "from-mint-400 to-mint-600 shadow-mint-700/30",
  gold: "from-gold-400 to-gold-600 shadow-gold-700/30",
  rose: "from-rose-400 to-rose-600 shadow-rose-700/30",
} as const;

/** Statistika kartasi: rangli ikonka, katta raqam, izoh. */
export function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  accent = "azure",
  delay = 0,
}: {
  icon: LucideIcon;
  label: string;
  value: React.ReactNode;
  hint?: React.ReactNode;
  accent?: keyof typeof ACCENTS;
  delay?: number;
}) {
  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className="group relative flex min-w-0 animate-fade-up flex-col gap-3 overflow-hidden rounded-3xl bg-white p-4 ring-1 ring-ink-950/5 transition-transform duration-300 hover:-translate-y-1 sm:p-5 dark:bg-[#151a28] dark:ring-white/10"
    >
      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br opacity-[0.12] blur-xl transition-opacity duration-300 group-hover:opacity-25 ${ACCENTS[accent]}`}
      />
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 ${ACCENTS[accent]}`}
      >
        <Icon size={20} strokeWidth={2.4} />
      </span>
      <div>
        <p className="font-display text-2xl font-extrabold leading-none tracking-tight text-ink-950 tabular-nums sm:text-3xl dark:text-ink-50">
          {value}
        </p>
        <p className="mt-1.5 text-sm font-semibold text-ink-600 dark:text-ink-300">{label}</p>
        {hint && <p className="mt-0.5 text-xs text-ink-400 dark:text-ink-500">{hint}</p>}
      </div>
    </div>
  );
}
