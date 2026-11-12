import Link from "next/link";
import { PlayFill } from "@/components/ui/IosIcons";

const WORD = "Avangard";

/**
 * Yuqori paneldagi animatsiyali «Avangard» nomi: harflar birin-ketin
 * ko'tarilib chiqadi, keyin har ~7 soniyada harflar bo'ylab rangli «to'lqin»
 * o'tadi; «English» yonida kichik yulduzcha miltillaydi (globals.css →
 * .ae-wordmark). Harakatni kamaytirish sozlamasida animatsiya o'chadi.
 */
export function AnimatedWordmark() {
  return (
    <Link href="/" className="ae-wordmark" aria-label="Avangard English">
      <span className="ae-wordmark-word font-display" aria-hidden="true">
        {WORD.split("").map((ch, i) => (
          <span key={i} className="ae-wordmark-letter" style={{ "--i": i } as React.CSSProperties}>
            {ch}
          </span>
        ))}
      </span>
      <span className="ae-wordmark-sub" aria-hidden="true">
        English
        <span className="ae-wordmark-spark" />
      </span>
    </Link>
  );
}

/** «Davom etish» — o'quvchini joriy darsiga bir bosishda olib boradi. */
export function ContinueButton({
  href,
  label,
  detail,
  percent,
}: {
  href: string;
  label: string;
  detail: string;
  percent: number;
}) {
  return (
    <Link href={href} className="ae-continue btn-press" title={detail} aria-label={label}>
      <span className="ae-continue-icon" style={{ "--p": `${percent}%` } as React.CSSProperties}>
        <PlayFill size={13} />
      </span>
      <span className="hidden min-w-0 flex-col leading-tight sm:flex">
        <span className="font-display text-sm font-bold">{label}</span>
        <span className="hidden max-w-44 truncate text-[11px] font-medium opacity-80 md:block">{detail}</span>
      </span>
    </Link>
  );
}
