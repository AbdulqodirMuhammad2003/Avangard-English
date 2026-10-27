"use client";

import { createContext, useContext } from "react";
import { translator, type Lang } from "@/lib/i18n";

const LangContext = createContext<Lang>("uz");

/** Ilova tilini (o'quvchi darajasidan) klient komponentlarga uzatadi. */
export function LangProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

/** t("O'zbekcha", "English") — joriy tilga mos matn. */
export const useT = () => translator(useContext(LangContext));
