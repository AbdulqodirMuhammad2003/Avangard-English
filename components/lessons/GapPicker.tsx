"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown } from "@/components/ui/IosIcons";
import type { BlankTone } from "./Blanked";

const TILE = {
  idle: "border-ink-100 bg-white hover:border-ink-200 dark:border-white/10 dark:bg-white/5 dark:text-ink-200",
  selected: "border-azure-500 bg-azure-50 font-semibold text-azure-900 dark:bg-azure-950/40 dark:text-azure-100",
};

/**
 * «listengap» qatoridagi bo'sh joy uchun tanlagich — brauzerning oddiy
 * <select> i o'rniga. Yopiq holatda savoldagi «___» bo'sh joyiga o'xshaydi
 * (tanlangan so'z ichida, ▾ belgisi bilan); bosilganda kompyuterda yonida
 * popover, telefonda pastdan chiquvchi oyna ochiladi, variantlar — saytdagi
 * 3D plitkalar. Klaviatura: ↑↓←→ / Home / End — yurish, Enter — tanlash,
 * Esc — yopish (fokus tugmaga qaytadi).
 */
export function GapPicker({
  value,
  options,
  onChange,
  disabled,
  tone,
  label,
  before,
  after,
  chooseText,
}: {
  value: string | undefined;
  options: string[];
  onChange: (v: string) => void;
  disabled: boolean;
  tone: BlankTone;
  /** Ekran o'quvchi uchun nom, masalan «2-bo'sh joy». */
  label: string;
  /** Gapning bo'sh joydan oldingi/keyingi qismi (oynada ko'rsatiladi). */
  before: string;
  after: string;
  /** «Bo'sh joyga mos so'zni tanlang» (til bo'yicha). */
  chooseText: string;
}) {
  const [open, setOpen] = useState(false);
  const [sheet, setSheet] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number; up: boolean } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const close = useCallback((refocus = true) => {
    setOpen(false);
    if (refocus) requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  // Telefonda — pastki oyna, kattaroq ekranda — tugma yonidagi popover.
  function openPicker() {
    const isSheet = !window.matchMedia("(min-width: 640px)").matches;
    setSheet(isSheet);
    if (!isSheet) {
      const r = triggerRef.current!.getBoundingClientRect();
      const width = 288;
      const left = Math.min(Math.max(12, r.left + r.width / 2 - width / 2), window.innerWidth - width - 12);
      const up = window.innerHeight - r.bottom < 260 && r.top > 260;
      setPos({ left, top: up ? r.top - 8 : r.bottom + 8, up });
    }
    setOpen(true);
  }

  // Ochilganda tanlangan (yoki birinchi) variantga fokus.
  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => {
      const items = listRef.current?.querySelectorAll<HTMLButtonElement>('[role="option"]');
      const idx = Math.max(0, options.indexOf(value ?? ""));
      items?.[idx]?.focus();
    });
    const onScrollOrResize = () => close(false);
    window.addEventListener("resize", onScrollOrResize);
    if (!sheet) window.addEventListener("scroll", onScrollOrResize, true);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("scroll", onScrollOrResize, true);
    };
  }, [open, sheet, options, value, close]);

  function onListKey(e: React.KeyboardEvent) {
    const items = [...(listRef.current?.querySelectorAll<HTMLButtonElement>('[role="option"]') ?? [])];
    const cur = items.indexOf(document.activeElement as HTMLButtonElement);
    const go = (i: number) => {
      e.preventDefault();
      items[(i + items.length) % items.length]?.focus();
    };
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown" || e.key === "ArrowRight") go(cur + 1);
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") go(cur - 1);
    else if (e.key === "Home") go(0);
    else if (e.key === "End") go(items.length - 1);
    else if (e.key === "Tab") close(false);
  }

  const shown = value || "";
  const panel = (
    <div
      ref={listRef}
      id={listId}
      role="listbox"
      aria-label={label}
      onKeyDown={onListKey}
      className="grid grid-cols-2 gap-2"
    >
      {options.map((opt) => {
        const sel = opt === value;
        return (
          <button
            key={opt}
            type="button"
            role="option"
            aria-selected={sel}
            lang="en"
            onClick={() => {
              onChange(opt);
              close();
            }}
            className={`min-h-12 min-w-0 break-words rounded-xl border-2 px-3 py-2.5 text-center text-base ${sel ? TILE.selected : TILE.idle}`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-label={shown ? `${label}: ${shown}` : label}
        onClick={(e) => {
          e.stopPropagation();
          if (open) close();
          else openPicker();
        }}
        className="ae-blank ae-gap-btn"
        data-tone={shown ? tone : "idle"}
        data-empty={shown ? undefined : ""}
      >
        <span className="min-w-0 truncate">{shown || " "}</span>
        {!disabled && <ChevronDown size={11} className="ae-gap-chevron" />}
      </button>

      {open &&
        createPortal(
          sheet ? (
            <div className="fixed inset-0 z-[120] flex items-end bg-ink-950/45 backdrop-blur-[2px] animate-fade-in" onClick={() => close()}>
              <div
                className="ae-gap-sheet w-full rounded-t-3xl bg-white px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-2.5 shadow-2xl dark:bg-[#201b17]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-ink-200 dark:bg-white/15" aria-hidden="true" />
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-400">{chooseText}</p>
                <p lang="en" className="mb-4 text-base font-semibold leading-relaxed text-ink-950 dark:text-ink-50">
                  {before}
                  <span className="ae-blank" data-tone={shown ? "selected" : "idle"}>
                    {shown || " "}
                  </span>
                  {after}
                </p>
                {panel}
              </div>
            </div>
          ) : (
            <>
              <div className="fixed inset-0 z-[120]" onClick={() => close()} />
              {pos && (
                <div
                  className="ae-gap-popover fixed z-[121] w-72 rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-ink-950/10 dark:bg-[#201b17] dark:ring-white/10"
                  style={{ left: pos.left, top: pos.top, transform: pos.up ? "translateY(-100%)" : undefined }}
                >
                  <p className="mb-2 px-1 text-xs font-bold uppercase tracking-wide text-ink-400">{chooseText}</p>
                  {panel}
                </div>
              )}
            </>
          ),
          document.body
        )}
    </>
  );
}
