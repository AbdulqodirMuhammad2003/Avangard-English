import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPlacementLevels,
  getTeacherAccounts,
  getTeacherStudents,
  requireTeacher,
} from "@/lib/teacher";
import { TeacherPanel } from "@/components/teacher/TeacherPanel";
import { TeachersPanel } from "@/components/teacher/TeachersPanel";

/** O'qituvchi o'z o'quvchilarini ko'radi. Admin qo'shimcha ravishda
 *  «O'qituvchilar» bo'limini (`?view=teachers`) va istalgan o'qituvchining
 *  o'quvchilarini (`?t=<id>`) ko'radi. */
export default async function TeacherPage({ searchParams }: PageProps<"/teacher">) {
  const me = await requireTeacher();
  const params = await searchParams;
  const view = params.view === "teachers" && me.isAdmin ? "teachers" : "students";
  const otherId = me.isAdmin && typeof params.t === "string" ? Number(params.t) : null;

  let body: React.ReactNode;
  let title = "O'qituvchi paneli";
  let subtitle = "O'quvchilarga login va parol bering, suhbatdan keyin ularni kerakli daraja va darsdan boshlating.";

  if (view === "teachers") {
    const students = await getTeacherStudents(null);
    const teachers = await getTeacherAccounts(students);
    const names = new Map(teachers.map((t) => [t.id, t.name]));
    const candidates = students.map((s) => ({
      id: s.id,
      name: s.name,
      login: [s.username ?? s.email ?? "", s.teacherId ? names.get(s.teacherId) : ""].filter(Boolean).join(", "),
    }));
    title = "O'qituvchilar";
    subtitle = "O'qituvchilarga login va parol bering, ularning o'quvchilari va natijalarini kuzating.";
    body = <TeachersPanel meId={me.id} teachers={teachers} candidates={candidates} />;
  } else if (otherId && otherId !== me.id) {
    const [students, levels] = await Promise.all([getTeacherStudents(otherId), getPlacementLevels()]);
    const teacher = (await getTeacherAccounts(students)).find((t) => t.id === otherId);
    if (!teacher) notFound();
    title = `${teacher.name} — o'quvchilar`;
    subtitle = "Bu o'qituvchining o'quvchilari va natijalari. U sizning o'quvchilaringizni ko'rmaydi.";
    body = <TeacherPanel students={students} levels={levels} canAdd={false} />;
  } else {
    const [students, levels] = await Promise.all([getTeacherStudents(me.id), getPlacementLevels()]);
    body = <TeacherPanel students={students} levels={levels} />;
  }

  const tab = (href: string, label: string, active: boolean) => (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
        active
          ? "bg-azure-600 text-white"
          : "bg-white text-ink-700 ring-1 ring-ink-950/5 hover:bg-ink-50 dark:bg-white/5 dark:text-ink-200 dark:ring-white/10"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <div className="animate-fade-up flex flex-col gap-3">
        {me.isAdmin && (
          <div className="flex flex-wrap gap-2">
            {tab("/teacher", "Mening o'quvchilarim", view === "students" && !otherId)}
            {tab("/teacher?view=teachers", "O'qituvchilar", view === "teachers" || !!otherId)}
          </div>
        )}
        <div>
          <h1 className="font-display text-2xl font-bold text-ink-950 dark:text-ink-50">{title}</h1>
          <p className="text-sm text-ink-700/60 dark:text-ink-300/60">{subtitle}</p>
        </div>
      </div>
      {body}
    </div>
  );
}
