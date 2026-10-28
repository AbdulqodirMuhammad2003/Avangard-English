import { HUMO_BG, HUMO_BIRD } from "@/lib/logo";

/**
 * Avangard English logotipi — «Humo» qushi (lib/logo.ts): to'q plitkada oltin
 * qanotlar «A» harfini hosil qiladi. Plitka o'zi ramka bo'lgani uchun och va
 * to'q fonda ham ko'rinadi.
 */
export function LogoMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Avangard English logotipi"
    >
      <rect width="100" height="100" rx="24" fill={HUMO_BG} />
      <g transform="translate(5 5) scale(0.9)" dangerouslySetInnerHTML={{ __html: HUMO_BIRD }} />
    </svg>
  );
}

export function Logo({
  size = 40,
  showText = true,
  subtitle = "Ingliz tili maktabi",
}: {
  size?: number;
  showText?: boolean;
  subtitle?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark size={size} className="shrink-0 drop-shadow-[0_2px_6px_rgba(30,32,18,0.35)]" />
      {showText && (
        <div>
          <p className="font-display text-sm font-bold leading-tight tracking-wide">Avangard English</p>
          <p className="text-[11px] text-ink-700/70">{subtitle}</p>
        </div>
      )}
    </div>
  );
}
