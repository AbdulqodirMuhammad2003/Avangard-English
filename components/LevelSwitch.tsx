import Link from "next/link";

/** O'qituvchi uchun daraja tanlagich («Baholar» va «Reyting» sahifalarida):
 *  har bir daraja — `?level=A2` havolasi. */
export function LevelSwitch({
  levels,
  current,
  path,
  teacherId,
}: {
  levels: string[];
  current: string;
  path: string;
  /** Admin boshqa o'qituvchi jadvalida bo'lsa — havolalarda saqlanadi. */
  teacherId?: number;
}) {
  if (levels.length < 2) return null;
  return (
    <div role="tablist" aria-label="Daraja" className="flex w-fit flex-wrap gap-1 rounded-full bg-white p-1 ring-1 ring-ink-950/5 dark:bg-[#151a28] dark:ring-white/10">
      {levels.map((code) => {
        const active = code === current;
        return (
          <Link
            key={code}
            href={`${path}?level=${code}${teacherId ? `&teacher=${teacherId}` : ""}`}
            role="tab"
            aria-selected={active}
            className={`rounded-full px-4 py-1.5 text-sm font-bold transition-all ${
              active
                ? "bg-gradient-to-r from-azure-500 to-[#7c3aed] text-white shadow-md shadow-azure-700/30"
                : "text-ink-500 hover:bg-ink-50 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-white/10 dark:hover:text-ink-50"
            }`}
          >
            {code}
          </Link>
        );
      })}
    </div>
  );
}
