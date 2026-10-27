/** To'g'ri javob va yaxshi natija uchun konfetti — kutubxonasiz, Web
 *  Animations API bilan. `origin` — portlash markazi (ekran koordinatalari),
 *  berilmasa ekranning yuqori o'rtasi. */
const COLORS = ["#6563f1", "#7c3aed", "#ffb520", "#f99307", "#0dba87", "#31d39f", "#f472b6"];

export function celebrate({ origin, count = 26, spread = 1 }: { origin?: { x: number; y: number }; count?: number; spread?: number } = {}) {
  if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const x0 = origin?.x ?? window.innerWidth / 2;
  const y0 = origin?.y ?? window.innerHeight / 3;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    const w = 6 + Math.random() * 5;
    piece.style.width = `${w}px`;
    piece.style.height = `${w * (Math.random() < 0.5 ? 0.45 : 1)}px`;
    piece.style.background = COLORS[i % COLORS.length];
    if (Math.random() < 0.3) piece.style.borderRadius = "999px";
    document.body.appendChild(piece);
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.1 * spread;
    const power = (140 + Math.random() * 180) * spread;
    const dx = Math.cos(angle) * power;
    const dy = Math.sin(angle) * power;
    const spin = (Math.random() - 0.5) * 720;
    piece
      .animate(
        [
          { transform: `translate(${x0}px, ${y0}px) rotate(0deg)`, opacity: 1 },
          { transform: `translate(${x0 + dx}px, ${y0 + dy}px) rotate(${spin / 2}deg)`, opacity: 1, offset: 0.45 },
          { transform: `translate(${x0 + dx * 1.15}px, ${y0 + dy + 260}px) rotate(${spin}deg)`, opacity: 0 },
        ],
        { duration: 1100 + Math.random() * 500, easing: "cubic-bezier(0.2, 0.7, 0.4, 1)" }
      )
      .finished.finally(() => piece.remove());
  }
}

/** Telefonda qisqa tebranish (qo'llab-quvvatlansa). */
export function buzz(pattern: number | number[] = 12) {
  try {
    navigator.vibrate?.(pattern);
  } catch {}
}
