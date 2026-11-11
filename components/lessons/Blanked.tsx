import { Fragment } from "react";

export type BlankTone = "idle" | "selected" | "right" | "wrong";

/**
 * Savol matnidagi «___» (uchta pastki chiziq) ni bitta chiroyli bo'sh joyga
 * aylantiradi. Ma'lumot o'zgarmaydi — faqat ko'rinish.
 *
 * - So'z ichidagi bo'sh joy («c___t») tor bo'ladi, alohida turgani keng.
 * - `fill` berilsa va matnda bitta bo'sh joy bo'lsa, so'z bo'sh joy ichida
 *   ko'rsatiladi (tanlangan / to'g'ri / xato javob).
 */
export function Blanked({
  text,
  fill,
  tone = "idle",
}: {
  text: string;
  fill?: string | null;
  tone?: BlankTone;
}) {
  if (!text.includes("___")) return <>{text}</>;
  const parts = text.split("___");
  const single = parts.length === 2;
  return (
    <>
      {parts.map((part, i) => {
        if (i === parts.length - 1) return <Fragment key={i}>{part}</Fragment>;
        const nextPart = parts[i + 1];
        const inWord = /[\p{L}\p{N}]$/u.test(part) || /^[\p{L}\p{N}]/u.test(nextPart);
        const shown = single && fill ? fill : null;
        return (
          <Fragment key={i}>
            {part}
            <span
              className={`ae-blank${inWord ? " ae-blank-in" : ""}`}
              data-tone={shown ? tone : "idle"}
              aria-label={shown ? undefined : "bo'sh joy"}
            >
              {shown ?? " "}
            </span>
          </Fragment>
        );
      })}
    </>
  );
}
