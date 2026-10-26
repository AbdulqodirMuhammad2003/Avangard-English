"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw, Snail } from "lucide-react";

const fmt = (s: number) => {
  if (!Number.isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};

/** Yozib olingan audio (kitob treki) uchun pleyer: pauza, vaqt chizig'ida
 *  istalgan joyga o'tish, 5 soniya orqaga va sekinroq tezlik. Bir mashqdagi
 *  savollar orasida qayta yaratilmaydi — o'quvchi to'xtagan joyidan davom etadi. */
export function MediaAudioPlayer({ src, autoPlay = false }: { src: string; autoPlay?: boolean }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    const a = audio.current;
    if (!a) return;
    window.speechSynthesis?.cancel();
    if (autoPlay) a.play().catch(() => {});
    // Faqat birinchi yuklanishda — keyingi savollarda o'quvchi o'zi boshqaradi.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (audio.current) audio.current.playbackRate = slow ? 0.75 : 1;
  }, [slow]);

  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) a.play().catch(() => {});
    else a.pause();
  };
  const seek = (t: number) => {
    if (audio.current) audio.current.currentTime = Math.max(0, Math.min(t, duration || t));
  };

  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-gold-50 px-4 py-3 dark:bg-gold-950/30">
      <audio
        ref={audio}
        src={src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
      />
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="btn-press flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold-500 text-white shadow-lg shadow-gold-700/30 hover:bg-gold-400"
          aria-label={playing ? "Pauza" : "Eshitish"}
        >
          {playing ? <Pause size={26} /> : <Play size={26} className="ml-0.5" />}
        </button>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={Math.min(time, duration || 0)}
            onChange={(e) => seek(Number(e.target.value))}
            aria-label="Audio vaqti"
            className="w-full accent-gold-500"
          />
          <div className="flex justify-between text-xs tabular-nums text-gold-900/70 dark:text-gold-100/70">
            <span>{fmt(time)}</span>
            <span>{fmt(duration)}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => seek(time - 5)}
          className="btn-press flex items-center gap-1 rounded-full bg-gold-100 px-3 py-1.5 text-xs font-semibold text-gold-800 hover:bg-gold-200 dark:bg-gold-900/50 dark:text-gold-200"
        >
          <RotateCcw size={14} /> 5 soniya orqaga
        </button>
        <button
          onClick={() => setSlow((s) => !s)}
          aria-pressed={slow}
          className={`btn-press flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold ${
            slow
              ? "bg-gold-500 text-white"
              : "bg-gold-100 text-gold-800 hover:bg-gold-200 dark:bg-gold-900/50 dark:text-gold-200"
          }`}
        >
          <Snail size={14} /> Sekinroq
        </button>
      </div>
    </div>
  );
}
