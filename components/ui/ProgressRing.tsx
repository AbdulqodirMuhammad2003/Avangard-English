import { useId } from "react";

const TONES = {
  azure: ["#8183f8", "#7c3aed"],
  mint: ["#31d39f", "#02976e"],
  gold: ["#ffca4a", "#f99307"],
  white: ["#ffffff", "#ffe088"],
} as const;

/** Doiraviy progress: gradientli halqa, ochilganda noldan to'ladi
 *  (globals.css → .ring-fill). Markazga istalgan narsa qo'yiladi. */
export function ProgressRing({
  value,
  size = 96,
  stroke = 10,
  tone = "azure",
  track = "stroke-ink-100 dark:stroke-white/10",
  children,
}: {
  /** 0–100 */
  value: number;
  size?: number;
  stroke?: number;
  tone?: keyof typeof TONES;
  track?: string;
  children?: React.ReactNode;
}) {
  const id = useId();
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const [a, b] = TONES[tone];
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden="true">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={a} />
            <stop offset="100%" stopColor={b} />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} className={track} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - pct / 100)}
          className="ring-fill"
          style={{ "--circ": circ } as React.CSSProperties}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">{children}</div>
    </div>
  );
}
