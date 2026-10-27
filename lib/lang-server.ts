import "server-only";
import { cache } from "react";
import { getSession } from "./auth";
import { getUserStats } from "./data";
import { langForLevel, translator, type Lang } from "./i18n";

/** Joriy foydalanuvchining interfeys tili (darajasidan). */
export const getLang = cache(async (): Promise<Lang> => {
  const session = await getSession();
  if (!session) return "uz";
  const user = await getUserStats(session.userId);
  return langForLevel(user?.level);
});

/** Server komponentlar uchun: const t = await getT(); t("O'zbekcha", "English"). */
export const getT = async () => translator(await getLang());
