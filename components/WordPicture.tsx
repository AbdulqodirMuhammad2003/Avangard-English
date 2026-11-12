"use client";

import { useState } from "react";
import { wordImage } from "@/lib/word-images";

/**
 * Lug'at so'zining rasmi: aniq narsa bo'lsa — Pexels fotosurati (ostida
 * fotograf va Pexels nomi), mavhum so'zda yoki rasm yuklanmasa — emoji
 * (lib/word-images.ts). Ota blok `relative` va `overflow-hidden` bo'lsin —
 * foto butun blokni to'ldiradi.
 */
export function WordPicture({
  word,
  emoji,
  emojiClassName = "",
  credit = true,
}: {
  word: string;
  emoji: string;
  emojiClassName?: string;
  credit?: boolean;
}) {
  const image = wordImage(word);
  const [failed, setFailed] = useState(false);
  if (!image || failed) return <span className={emojiClassName} aria-hidden="true">{emoji}</span>;
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element -- Pexels CDN, o'lcham URL'da berilgan */}
      <img
        key={image.src}
        src={image.src}
        alt=""
        draggable={false}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className="ae-word-img absolute inset-0 h-full w-full object-cover"
      />
      {credit && (
        <a
          href={image.link}
          target="_blank"
          rel="noopener noreferrer"
          className="ae-word-credit"
          onClick={(e) => e.stopPropagation()}
        >
          {image.by} · Pexels
        </a>
      )}
    </>
  );
}
