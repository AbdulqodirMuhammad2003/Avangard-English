"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Headphones, Pause, Play, RotateCcw } from "lucide-react";
import { useT } from "../LangProvider";

const fmt = (s: number) => {
  if (!Number.isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};

const BARS = 46;
const SPEEDS = [0.75, 1, 1.25] as const;

/** Trek nomidan barqaror «to'lqin» — har bir trekning o'z naqshi bor. */
function waveform(seed: string): number[] {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return Array.from({ length: BARS }, (_, i) => {
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    const noise = ((h >>> 0) % 1000) / 1000;
    const envelope = 0.55 + 0.45 * Math.sin((i / BARS) * Math.PI);
    return 0.22 + 0.78 * envelope * (0.35 + 0.65 * noise);
  });
}

/** Yozib olingan audio (kitob treki) uchun pleyer: katta «play» tugmasi,
 *  bosib yoki surib boshqariladigan to'lqin, 5 soniya orqaga va tezlik
 *  (0.75× / 1× / 1.25×). Bir mashqdagi savollar orasida qayta yaratilmaydi —
 *  o'quvchi to'xtagan joyidan davom etadi. */
export function MediaAudioPlayer({ src, autoPlay = false }: { src: string; autoPlay?: boolean }) {
  const t = useT();
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState<(typeof SPEEDS)[number]>(1);
  const bars = useMemo(() => waveform(src), [src]);

  useEffect(() => {
    const a = audio.current;
    if (!a) return;
    window.speechSynthesis?.cancel();
    if (autoPlay) a.play().catch(() => {});
    // Faqat birinchi yuklanishda — keyingi savollarda o'quvchi o'zi boshqaradi.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (audio.current) audio.current.playbackRate = speed;
  }, [speed]);

  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) a.play().catch(() => {});
    else a.pause();
  };
  const seek = (to: number) => {
    if (audio.current) audio.current.currentTime = Math.max(0, Math.min(to, duration || to));
  };
  const progress = duration > 0 ? Math.min(1, time / duration) : 0;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-azure-600 via-azure-700 to-[#6d28d9] p-4 text-white shadow-xl shadow-azure-900/25 ring-1 ring-white/10">
      {/* Fondagi yumshoq nurlar */}
      <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 left-10 h-36 w-36 rounded-full bg-gold-400/20 blur-2xl" />

      <audio
        ref={audio}
        src={src}
        preload="metadata"
        onPlay={() => {
          setPlaying(true);
          setStarted(true);
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
      />

      <div className="relative flex items-center gap-4">
        <button
          onClick={toggle}
          className={`btn-press flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-azure-700 shadow-lg shadow-black/20 ${
            started ? "" : "pulse-ring"
          }`}
          aria-label={playing ? t("Pauza", "Pause") : t("Eshitish", "Play")}
        >
          {playing ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
        </button>

        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white/70">
            <Headphones size={14} /> {playing ? t("Tinglanmoqda", "Now playing") : t("Audio", "Audio")}
          </p>
          {/* To'lqin: ustidagi ko'rinmas slider bosish, surish va klaviatura bilan boshqaradi. */}
          <div className="relative h-11">
            <div className="flex h-full items-center gap-[2px]" aria-hidden="true">
              {bars.map((b, i) => {
                const done = (i + 0.5) / BARS <= progress;
                return (
                  <span
                    key={i}
                    className={`flex-1 rounded-full transition-colors duration-200 ${done ? "bg-gold-300" : "bg-white/30"} ${
                      playing && Math.abs((i + 0.5) / BARS - progress) < 0.03 ? "animate-pulse" : ""
                    }`}
                    style={{ height: `${Math.round(b * 100)}%` }}
                  />
                );
              })}
            </div>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={Math.min(time, duration || 0)}
              onChange={(e) => seek(Number(e.target.value))}
              aria-label={t("Audio vaqti", "Audio position")}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            />
          </div>
          <div className="flex justify-between text-xs font-semibold tabular-nums text-white/75">
            <span>{fmt(time)}</span>
            <span>{fmt(duration)}</span>
          </div>
        </div>
      </div>

      <div className="relative mt-3 flex flex-wrap items-center justify-between gap-2">
        <button
          onClick={() => seek(time - 5)}
          className="btn-press flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-2 text-xs font-bold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/25"
        >
          <RotateCcw size={14} strokeWidth={2.5} /> 5s
        </button>
        <div
          role="radiogroup"
          aria-label={t("Tezlik", "Speed")}
          className="flex rounded-full bg-black/20 p-1 ring-1 ring-white/15"
        >
          {SPEEDS.map((s) => (
            <button
              key={s}
              role="radio"
              aria-checked={speed === s}
              onClick={() => setSpeed(s)}
              className={`rounded-full px-3 py-1 text-xs font-bold tabular-nums transition-all duration-200 ${
                speed === s ? "bg-white text-azure-700 shadow" : "text-white/80 hover:text-white"
              }`}
            >
              {s}×
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
