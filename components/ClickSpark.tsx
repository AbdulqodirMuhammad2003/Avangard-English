"use client";

import { useEffect } from "react";

const COLORS = ["#6563f1", "#7c3aed", "#ffb520", "#0dba87"];
const SPARKS = 8;

/** Saytdagi istalgan tugma yoki havola bosilganda o'sha joydan kichik
 *  uchqunlar sochiladi — har bir bosish «javob beradi» va yana bosgisi
 *  keladi. Bitta umumiy tinglovchi; harakatni kamaytirish sozlamasida o'chadi. */
export function ClickSpark() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onDown = (e: PointerEvent) => {
      const target = (e.target as Element | null)?.closest("button, a, [role=button], summary, select, label");
      if (!target || (target as HTMLButtonElement).disabled) return;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      for (let i = 0; i < SPARKS; i++) {
        const spark = document.createElement("span");
        spark.className = "click-spark";
        spark.style.background = color;
        spark.style.left = `${e.clientX - 3.5}px`;
        spark.style.top = `${e.clientY - 1.25}px`;
        const angle = (360 / SPARKS) * i;
        document.body.appendChild(spark);
        spark
          .animate(
            [
              { transform: `rotate(${angle}deg) translateX(4px) scaleX(1)`, opacity: 1 },
              { transform: `rotate(${angle}deg) translateX(22px) scaleX(0.2)`, opacity: 0 },
            ],
            { duration: 420, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
          )
          .finished.finally(() => spark.remove());
      }
    };

    document.addEventListener("pointerdown", onDown, { passive: true });
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  return null;
}
