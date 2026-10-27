import { getSession } from "@/lib/auth";
import { getAllUnitsDetailed, withoutQuestions, getLevels, getUserStats } from "@/lib/data";
import { LessonsBoard } from "@/components/lessons/LessonsBoard";
import { getExamStatus } from "@/lib/exam";
import { langForLevel, translator } from "@/lib/i18n";

/** «Darslar» — faqat darajalar va darslar. Kunlik panel (salomlashish,
 *  davom ettirish, maqsad) bosh sahifada turadi — bu yerda takrorlanmaydi,
 *  shunda telefonda darslar birinchi ekranda ko'rinadi. */
export default async function LessonsPage() {
  const session = await getSession();
  const userId = session!.userId;
  const user = await getUserStats(userId);
  const lang = langForLevel(user?.level);
  const t = translator(lang);
  const [units, levels, exam] = await Promise.all([
    getAllUnitsDetailed(userId).then(withoutQuestions),
    getLevels(userId),
    getExamStatus(userId, lang),
  ]);
  // O'qituvchi saytni tekshirishi uchun unga hamma narsa ochiq.
  const isTeacher = user?.role === "teacher";

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-4">
      <h1 className="font-display animate-fade-up text-2xl font-bold text-ink-950 dark:text-ink-50">{t("Darslar", "Lessons")}</h1>
      <LessonsBoard
        units={units}
        levels={levels}
        previewAll={isTeacher}
        exam={{
          level: exam.level,
          // Imtihon daraja tugagach (barcha darslar 80 %) ochiladi; boshlangan
          // urinish yoki takrorlash rejasi bo'lsa ham kirish mumkin.
          open: isTeacher || exam.levelComplete || !!exam.active || (!!exam.lastResult && !exam.levelResetHappened),
          passed: exam.passed,
          note: exam.active
            ? t("Imtihon davom etyapti", "The exam is in progress")
            : exam.canStart
            ? t(`${exam.attemptsLeft} ta urinish qoldi`, `${exam.attemptsLeft} attempts left`)
            : exam.blockReason ?? "",
        }}
      />
    </div>
  );
}
