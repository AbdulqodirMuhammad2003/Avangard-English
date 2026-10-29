"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Check, ChevronRight, Copy, Eye, EyeOff, KeyRound, ShieldCheck, UserMinus, UserPlus, Users, X } from "lucide-react";
import type { TeacherAccount } from "@/lib/teacher";
import {
  createTeacherAction,
  promoteToTeacherAction,
  resetTeacherPasswordAction,
  revealTeacherCredentialsAction,
  revokeTeacherAction,
  type TeacherActionResult,
} from "@/app/teacher-actions";
import { SITE_HOST, SITE_URL } from "@/lib/site";
import { ErrorText, PasswordField, formatDay, generatePassword, inputClass, labelClass } from "./TeacherPanel";

const card = "rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink-950/5 dark:bg-[#151a28] dark:ring-white/10";
const saveBtn =
  "btn-press rounded-full bg-azure-600 px-4 py-2 text-sm font-bold text-white hover:bg-azure-500 disabled:opacity-60";

function newPassword() {
  return generatePassword() + generatePassword().slice(0, 2);
}

/** Yangi o'qituvchi: yaratilgach login va parol ko'rsatiladi — admin ularni
 *  o'qituvchiga beradi (keyin ham kartadan ko'rish mumkin). */
function NewTeacherForm({ onClose }: { onClose: () => void }) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string>();
  const [created, setCreated] = useState<{ username: string; password: string } | null>(null);
  const [password, setPassword] = useState(newPassword);

  if (created) {
    const text = `Sayt: ${SITE_URL}\nLogin: ${created.username}\nParol: ${created.password}\nO'qituvchi paneli: ${SITE_URL}/teacher`;
    return (
      <div className="flex flex-col gap-3 rounded-2xl bg-mint-50 p-5 dark:bg-mint-950/30">
        <p className="flex items-center gap-2 font-bold text-mint-800 dark:text-mint-200">
          <Check size={18} /> O'qituvchi qo'shildi
        </p>
        <p className="text-sm text-ink-700 dark:text-ink-200">
          Quyidagilarni o'qituvchiga bering. U kirgach «O'qituvchi» bo'limida o'z o'quvchilarini qo'shadi.
        </p>
        <div className="grid gap-2 rounded-xl bg-white p-3 font-mono text-sm dark:bg-white/5">
          <span>Sayt: {SITE_HOST}</span>
          <span>Login: {created.username}</span>
          <span>Parol: {created.password}</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => navigator.clipboard?.writeText(text)}
            className="btn-press rounded-full bg-mint-600 px-4 py-2 text-sm font-bold text-white hover:bg-mint-500"
          >
            Nusxa olish
          </button>
          <button onClick={onClose} className="btn-press rounded-full bg-ink-100 px-4 py-2 text-sm font-bold text-ink-700 dark:bg-white/10 dark:text-ink-200">
            Yopish
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      action={(fd) =>
        startTransition(async () => {
          const res = await createTeacherAction(fd);
          if (res.ok) setCreated({ username: String(fd.get("username")).trim().toLowerCase(), password });
          else setError(res.error);
        })
      }
      className={`flex flex-col gap-3 ${card} p-5`}
    >
      <div className="flex items-center justify-between">
        <p className="font-display text-lg font-bold text-ink-950 dark:text-ink-50">Yangi o'qituvchi</p>
        <button type="button" onClick={onClose} className="rounded-full p-1.5 text-ink-500 hover:bg-ink-50 dark:hover:bg-white/10">
          <X size={18} />
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 [&>*]:min-w-0">
        <div>
          <label className={labelClass}>Ism familiya</label>
          <input name="name" required className={inputClass} placeholder="Sherzod Karimov" />
        </div>
        <div>
          <label className={labelClass}>Login</label>
          <input name="username" required autoCapitalize="none" autoCorrect="off" className={inputClass} placeholder="sherzod" />
        </div>
        <PasswordField value={password} onChange={setPassword} placeholder="kamida 8 belgi" />
        <div>
          <label className={labelClass}>Email (ixtiyoriy — Google bilan kirish uchun)</label>
          <input name="email" type="email" className={inputClass} placeholder="sherzod@gmail.com" />
        </div>
      </div>
      <ErrorText error={error} />
      <button disabled={pending} className="btn-press rounded-full bg-gradient-to-b from-azure-600 to-azure-700 py-2.5 text-sm font-bold text-white hover:from-azure-500 hover:to-azure-600 disabled:opacity-60">
        {pending ? "Saqlanmoqda…" : "O'qituvchini qo'shish"}
      </button>
    </form>
  );
}

/** Mavjud o'quvchi hisobini o'qituvchi qilish. */
function PromoteForm({ candidates, onClose }: { candidates: { id: number; name: string; login: string }[]; onClose: () => void }) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string>();
  return (
    <form
      action={(fd) =>
        startTransition(async () => {
          const res = await promoteToTeacherAction(fd);
          if (res.ok) onClose();
          else setError(res.error);
        })
      }
      className={`flex flex-col gap-3 ${card} p-5`}
    >
      <div className="flex items-center justify-between">
        <p className="font-display text-lg font-bold text-ink-950 dark:text-ink-50">O'quvchini o'qituvchi qilish</p>
        <button type="button" onClick={onClose} className="rounded-full p-1.5 text-ink-500 hover:bg-ink-50 dark:hover:bg-white/10">
          <X size={18} />
        </button>
      </div>
      <div>
        <label className={labelClass}>O'quvchi</label>
        <select name="id" required className={inputClass}>
          {candidates.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} ({c.login})
            </option>
          ))}
        </select>
      </div>
      <p className="text-xs text-ink-500 dark:text-ink-400">
        Logini va paroli o'zgarmaydi. U o'quvchilar ro'yxatidan chiqadi va o'z o'quvchilarini qo'sha oladi.
      </p>
      <ErrorText error={error} />
      <button disabled={pending || candidates.length === 0} className={saveBtn}>
        {pending ? "Saqlanmoqda…" : "O'qituvchi qilish"}
      </button>
    </form>
  );
}

function TeacherCredentials({ teacher }: { teacher: TeacherAccount }) {
  const [shown, setShown] = useState<{ username: string | null; password: string | null } | null>(null);
  const [pending, startTransition] = useTransition();
  const [copied, setCopied] = useState(false);

  function toggle() {
    if (shown) return setShown(null);
    startTransition(async () => {
      const res = await revealTeacherCredentialsAction(teacher.id);
      if (res.ok) setShown({ username: res.username ?? null, password: res.password ?? null });
    });
  }

  function copy() {
    if (!shown?.password) return;
    navigator.clipboard?.writeText(`Sayt: ${SITE_URL}\nLogin: ${shown.username ?? ""}\nParol: ${shown.password}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="mt-3 flex items-center gap-2 rounded-xl bg-ink-50/70 px-3 py-2 text-xs dark:bg-white/5">
      <KeyRound size={14} className="shrink-0 text-ink-400" />
      <div className="min-w-0 flex-1 font-mono text-ink-800 dark:text-ink-100">
        <span>{teacher.username ?? teacher.email ?? "—"}</span>
        <span className="mx-1.5 text-ink-300">·</span>
        {shown ? (
          shown.password ? (
            <span className="font-bold">{shown.password}</span>
          ) : (
            <span className="font-sans text-ink-500">parol saqlanmagan — «Parol» orqali yangisini bering</span>
          )
        ) : (
          <span className="tracking-widest text-ink-400">••••••</span>
        )}
      </div>
      {shown?.password && (
        <button onClick={copy} aria-label="Nusxa olish" className="shrink-0 rounded-full p-1 text-ink-500 hover:text-ink-800 dark:hover:text-ink-100">
          {copied ? <Check size={15} className="text-mint-600" /> : <Copy size={15} />}
        </button>
      )}
      <button
        onClick={toggle}
        disabled={pending || (!teacher.passwordViewable && !shown)}
        aria-label={shown ? "Yashirish" : "Parolni ko'rsatish"}
        title={teacher.passwordViewable ? undefined : "Bu o'qituvchining paroli saqlanmagan — yangi parol bering"}
        className="shrink-0 rounded-full p-1 text-ink-500 hover:text-ink-800 disabled:opacity-40 dark:hover:text-ink-100"
      >
        {shown ? <EyeOff size={15} /> : <Eye size={15} />}
      </button>
    </div>
  );
}

type Mode = "password" | "revoke";

function TeacherEditor({ teacher, mode, onDone }: { teacher: TeacherAccount; mode: Mode; onDone: () => void }) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string>();
  const [saved, setSaved] = useState(false);
  const [password, setPassword] = useState(newPassword);
  const box = "mt-3 flex flex-col gap-3 rounded-xl bg-ink-50/70 p-3 dark:bg-white/5";

  function run(action: (fd: FormData) => Promise<TeacherActionResult>, keepOpen = false) {
    return (fd: FormData) =>
      startTransition(async () => {
        fd.set("id", String(teacher.id));
        const res = await action(fd);
        if (!res.ok) return setError(res.error);
        if (keepOpen) setSaved(true);
        else onDone();
      });
  }

  if (mode === "password") {
    return saved ? (
      <div className={box}>
        <p className="text-sm font-semibold text-mint-700 dark:text-mint-300">Yangi parol saqlandi:</p>
        <p className="font-mono text-sm">
          Login: {teacher.username ?? teacher.email} · Parol: {password}
        </p>
        <button type="button" onClick={onDone} className={saveBtn}>Yopish</button>
      </div>
    ) : (
      <form action={run(resetTeacherPasswordAction, true)} className={box}>
        <PasswordField value={password} onChange={setPassword} placeholder="kamida 8 belgi" />
        <ErrorText error={error} />
        <button disabled={pending} className={saveBtn}>{pending ? "Saqlanmoqda…" : "Parolni almashtirish"}</button>
      </form>
    );
  }
  return (
    <form action={run(revokeTeacherAction)} className={`${box} bg-rose-50 dark:bg-rose-950/30`}>
      <p className="text-sm text-rose-800 dark:text-rose-200">
        <b>{teacher.name}</b> o'qituvchi paneliga kira olmaydi (hisobi o'quvchi bo'lib qoladi). Uning {teacher.students} ta
        o'quvchisi sizga o'tadi. Hech narsa o'chmaydi.
      </p>
      <ErrorText error={error} />
      <button disabled={pending} className="btn-press rounded-full bg-rose-600 px-4 py-2 text-sm font-bold text-white hover:bg-rose-500 disabled:opacity-60">
        {pending ? "Saqlanmoqda…" : "Ha, huquqni olib qo'yish"}
      </button>
    </form>
  );
}

/** Admin hisoblari (o'zingiz yoki boshqa admin) bu yerdan tahrirlanmaydi. */
function TeacherCard({ teacher, isMe }: { teacher: TeacherAccount; isMe: boolean }) {
  const [mode, setMode] = useState<Mode | null>(null);
  const stats = [
    { label: "O'quvchilar", value: teacher.students },
    { label: "Shu hafta faol", value: teacher.activeWeek },
    { label: "O'rtacha natija", value: `${teacher.average}%` },
    { label: "80%+ darslar", value: teacher.done },
  ];
  const actions: { mode: Mode; label: string; icon: typeof KeyRound }[] = [
    { mode: "password", label: "Parol", icon: KeyRound },
    { mode: "revoke", label: "Huquqni olish", icon: UserMinus },
  ];

  return (
    <li className={`min-w-0 ${card}`}>
      <div className="flex items-start gap-3">
        <span className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-mint-600 to-mint-800 text-white">
          {teacher.isAdmin ? <ShieldCheck size={20} /> : <Users size={20} />}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-ink-950 dark:text-ink-50">
            {teacher.name}{" "}
            {(isMe || teacher.isAdmin) && (
              <span className="text-xs font-normal text-ink-500">({[isMe && "siz", teacher.isAdmin && "admin"].filter(Boolean).join(", ")})</span>
            )}
          </p>
          <p className="truncate text-xs text-ink-500 dark:text-ink-400">
            {teacher.username ? `login: ${teacher.username}` : "login yo'q"}
            {teacher.email ? ` · ${teacher.email}` : ""}
          </p>
          <p className="text-xs text-ink-500 dark:text-ink-400">Oxirgi faollik: {formatDay(teacher.lastActive)}</p>
        </div>
      </div>

      {!teacher.isAdmin && <TeacherCredentials teacher={teacher} />}

      <div className="mt-3 grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="min-w-0 rounded-xl bg-ink-50/70 px-3 py-2 dark:bg-white/5">
            <p className="truncate text-ink-500 dark:text-ink-400">{s.label}</p>
            <p className="font-semibold text-ink-900 dark:text-ink-100">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <Link
          href={isMe ? "/teacher" : `/teacher?t=${teacher.id}`}
          className="flex items-center gap-1 rounded-full bg-azure-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-azure-500"
        >
          O'quvchilarini ko'rish <ChevronRight size={13} />
        </Link>
        {/* Boshqa o'qituvchi o'quvchilarining dars bo'yicha natijalari —
            admin uchun, faqat ko'rish (ma'lumot yig'ish) maqsadida. */}
        {!isMe && (
          <Link
            href={`/marks?teacher=${teacher.id}`}
            className="flex items-center gap-1 rounded-full bg-gold-100 px-3 py-1.5 text-xs font-semibold text-gold-800 hover:bg-gold-200 dark:bg-gold-950/40 dark:text-gold-200"
          >
            O'quvchilar bahosi <ChevronRight size={13} />
          </Link>
        )}
        {!teacher.isAdmin &&
          actions.map((a) => {
            const Icon = a.icon;
            const active = mode === a.mode;
            return (
              <button
                key={a.mode}
                onClick={() => setMode(active ? null : a.mode)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  active
                    ? a.mode === "revoke"
                      ? "bg-rose-600 text-white"
                      : "bg-azure-600 text-white"
                    : a.mode === "revoke"
                    ? "bg-rose-50 text-rose-700 hover:bg-rose-100 dark:bg-rose-950/30 dark:text-rose-300"
                    : "bg-ink-100 text-ink-700 hover:bg-ink-200 dark:bg-white/10 dark:text-ink-200"
                }`}
              >
                <Icon size={13} /> {a.label}
              </button>
            );
          })}
      </div>

      {mode && <TeacherEditor key={mode} teacher={teacher} mode={mode} onDone={() => setMode(null)} />}
    </li>
  );
}

/** Admin bo'limi: o'qituvchilar, ularning ko'rsatkichlari va hisoblarini boshqarish. */
export function TeachersPanel({
  meId,
  teachers,
  candidates,
}: {
  meId: number;
  teachers: TeacherAccount[];
  candidates: { id: number; name: string; login: string }[];
}) {
  const [form, setForm] = useState<"new" | "promote" | null>(null);
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setForm("new")}
          className="btn-press flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-azure-600 to-azure-800 p-4 text-sm font-bold text-white shadow-sm"
        >
          <UserPlus size={18} /> Yangi o'qituvchi
        </button>
        <button
          onClick={() => setForm("promote")}
          className="btn-press flex items-center justify-center gap-2 rounded-2xl bg-white p-4 text-sm font-bold text-ink-800 shadow-sm ring-1 ring-ink-950/5 dark:bg-[#151a28] dark:text-ink-100 dark:ring-white/10"
        >
          <ShieldCheck size={18} /> O'quvchini o'qituvchi qilish
        </button>
      </div>

      {form === "new" && <NewTeacherForm onClose={() => setForm(null)} />}
      {form === "promote" && <PromoteForm candidates={candidates} onClose={() => setForm(null)} />}

      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {teachers.map((t) => (
          <TeacherCard key={t.id} teacher={t} isMe={t.id === meId} />
        ))}
      </ul>
    </div>
  );
}
