"use client";

import { useSyncExternalStore } from "react";
import { Speaker2Fill, SpeakerSlashFill } from "@/components/ui/IosIcons";
import { isSoundOn, onSoundChange, setSoundOn } from "@/lib/sfx";
import { useT } from "./LangProvider";

/** Javob ovozlarini (to'g'ri / xato / yakun) yoqish-o'chirish. Yoqilganda
 *  namuna sifatida «to'g'ri» ovozi chaladi. */
export function SoundToggle() {
  const t = useT();
  // Serverda localStorage yo'q — u yerda tugma ko'rinmas holda chiziladi.
  const state = useSyncExternalStore(
    onSoundChange,
    () => (isSoundOn() ? "on" : "off"),
    () => "ssr"
  );
  const on = state !== "off";
  const mounted = state !== "ssr";

  const label = on ? t("Ovozni o'chirish", "Mute sounds") : t("Ovozni yoqish", "Turn sounds on");

  return (
    <button
      type="button"
      onClick={() => setSoundOn(!on)}
      aria-label={label}
      aria-pressed={on}
      title={label}
      className={`btn-press flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
        on
          ? "border-gold-200 bg-gold-50 text-gold-700 hover:bg-gold-100 dark:border-white/10 dark:bg-white/5 dark:text-gold-300 dark:hover:bg-white/10"
          : "border-ink-100 bg-white text-ink-400 hover:bg-ink-50 dark:border-white/10 dark:bg-transparent dark:text-ink-500 dark:hover:bg-white/5"
      } ${mounted ? "" : "opacity-0"}`}
    >
      {on ? <Speaker2Fill size={15} /> : <SpeakerSlashFill size={15} />}
    </button>
  );
}
