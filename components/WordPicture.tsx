"use client";

import { useState } from "react";
import { wordImageUrl } from "@/lib/word-images";

/**
 * Lug'at so'zining rasmi: AI yasagan 3D rasm bo'lsa — o'sha, bo'lmasa yoki
 * yuklanmasa — so'zning emojisi (lib/word-images.ts).
 */
export function WordPicture({
  word,
  emoji,
  imgClassName = "h-full w-auto",
  emojiClassName = "",
}: {
  word: string;
  emoji: string;
  imgClassName?: string;
  emojiClassName?: string;
}) {
  const src = wordImageUrl(word);
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <span className={emojiClassName} aria-hidden="true">{emoji}</span>;
  return (
    // eslint-disable-next-line @next/next/no-img-element -- /media yo'naltirishi imzolangan URL beradi
    <img
      key={src}
      src={src}
      alt=""
      draggable={false}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`ae-word-img ${imgClassName}`}
    />
  );
}
