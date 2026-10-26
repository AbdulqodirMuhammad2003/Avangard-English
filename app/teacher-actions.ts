"use server";

import { revalidatePath } from "next/cache";
import { sql } from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import { requireAdmin, requireTeacher, type TeacherSession } from "@/lib/teacher";
import { decryptPasswordView, encryptPasswordView } from "@/lib/password-view";

export interface TeacherActionResult {
  ok: boolean;
  error?: string;
}

const USERNAME_RE = /^[a-z0-9._-]{3,32}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: FormDataEntryValue | null) {
  return String(v ?? "").trim();
}

/** O'qituvchi faqat o'z o'quvchisini o'zgartiradi; admin — istalganini. */
function ownStudent(me: TeacherSession) {
  return sql`(${me.isAdmin}::boolean OR teacher_id = ${me.id})`;
}

/** Daraja va boshlanadigan dars mosligini tekshiradi (dars shu darajaniki bo'lsin). */
async function checkPlacement(level: string, startUnitId: number | null): Promise<string | null> {
  const [lv] = await sql<{ id: number }[]>`SELECT id FROM levels WHERE code = ${level}`;
  if (!lv) return "Daraja noto'g'ri tanlangan.";
  if (startUnitId !== null) {
    const [u] = await sql<{ id: number }[]>`SELECT id FROM units WHERE id = ${startUnitId} AND level_id = ${lv.id}`;
    if (!u) return "Dars tanlangan darajaga tegishli emas.";
  }
  return null;
}

function parseUnit(v: FormDataEntryValue | null) {
  const n = Number(v);
  return Number.isInteger(n) && n > 0 ? n : null;
}

/** Yangi o'quvchi: ism, login, parol, ixtiyoriy email (Google bilan kirish
 *  uchun), daraja va boshlanadigan dars. */
export async function createStudentAction(formData: FormData): Promise<TeacherActionResult> {
  const me = await requireTeacher();
  const name = clean(formData.get("name"));
  const username = clean(formData.get("username")).toLowerCase();
  const password = String(formData.get("password") ?? "");
  const email = clean(formData.get("email")).toLowerCase() || null;
  const level = clean(formData.get("level"));
  const startUnitId = parseUnit(formData.get("startUnitId"));

  if (name.length < 2) return { ok: false, error: "Ismni kiriting." };
  if (!USERNAME_RE.test(username))
    return { ok: false, error: "Login 3–32 belgi: lotin harflari, raqamlar, nuqta, chiziqcha." };
  if (password.length < 6) return { ok: false, error: "Parol kamida 6 belgidan iborat bo'lsin." };
  if (email && !EMAIL_RE.test(email)) return { ok: false, error: "Email noto'g'ri." };
  const placementError = await checkPlacement(level, startUnitId);
  if (placementError) return { ok: false, error: placementError };

  const [taken] = await sql<{ id: number }[]>`
    SELECT id FROM users WHERE lower(username) = ${username} OR lower(email) = ${username}
       OR (${email}::text IS NOT NULL AND (lower(email) = ${email} OR lower(username) = ${email}))
  `;
  if (taken) return { ok: false, error: "Bu login yoki email band." };

  await sql`
    INSERT INTO users (name, username, email, password_hash, password_view, level, start_unit_id, role, teacher_id)
    VALUES (${name}, ${username}, ${email}, ${await hashPassword(password)}, ${encryptPasswordView(password)},
            ${level}, ${startUnitId}, 'student', ${me.id})
  `;
  revalidatePath("/teacher");
  return { ok: true };
}

/** O'quvchini suhbatdan keyin joylashtirish: daraja va boshlanadigan dars. */
export async function updatePlacementAction(formData: FormData): Promise<TeacherActionResult> {
  const me = await requireTeacher();
  const id = Number(formData.get("id"));
  const level = clean(formData.get("level"));
  const startUnitId = parseUnit(formData.get("startUnitId"));
  const placementError = await checkPlacement(level, startUnitId);
  if (placementError) return { ok: false, error: placementError };
  await sql`UPDATE users SET level = ${level}, start_unit_id = ${startUnitId} WHERE id = ${id} AND role = 'student' AND ${ownStudent(me)}`;
  revalidatePath("/teacher");
  return { ok: true };
}

/** Ism va emailni o'zgartirish. */
export async function updateStudentInfoAction(formData: FormData): Promise<TeacherActionResult> {
  const me = await requireTeacher();
  const id = Number(formData.get("id"));
  const name = clean(formData.get("name"));
  const email = clean(formData.get("email")).toLowerCase() || null;
  if (name.length < 2) return { ok: false, error: "Ismni kiriting." };
  if (email && !EMAIL_RE.test(email)) return { ok: false, error: "Email noto'g'ri." };
  if (email) {
    const [taken] = await sql<{ id: number }[]>`
      SELECT id FROM users WHERE (lower(email) = ${email} OR lower(username) = ${email}) AND id <> ${id}
    `;
    if (taken) return { ok: false, error: "Bu email boshqa hisobda bor." };
  }
  // Email o'zgarsa, eski Google bog'lanishi bekor qilinadi.
  await sql`
    UPDATE users SET name = ${name},
      google_sub = CASE WHEN email IS DISTINCT FROM ${email} THEN NULL ELSE google_sub END,
      email = ${email}
    WHERE id = ${id} AND role = 'student' AND ${ownStudent(me)}
  `;
  revalidatePath("/teacher");
  return { ok: true };
}

/** Yangi parol berish. */
export async function resetPasswordAction(formData: FormData): Promise<TeacherActionResult> {
  const me = await requireTeacher();
  const id = Number(formData.get("id"));
  const password = String(formData.get("password") ?? "");
  if (password.length < 6) return { ok: false, error: "Parol kamida 6 belgidan iborat bo'lsin." };
  await sql`
    UPDATE users SET password_hash = ${await hashPassword(password)}, password_view = ${encryptPasswordView(password)}
    WHERE id = ${id} AND role = 'student' AND ${ownStudent(me)}
  `;
  revalidatePath("/teacher");
  return { ok: true };
}

/** O'qituvchi o'quvchining login va parolini qayta ko'radi (o'quvchi unutsa).
 *  Parol faqat shu tugma bosilganda yuboriladi. Panel qo'shilishidan oldin
 *  berilgan parollar saqlanmagan — ular uchun null (yangi parol beriladi). */
export async function revealCredentialsAction(
  id: number
): Promise<{ ok: boolean; username?: string | null; password?: string | null }> {
  const me = await requireTeacher();
  const [row] = await sql<{ username: string | null; email: string | null; password_view: string | null }[]>`
    SELECT username, email, password_view FROM users WHERE id = ${id} AND role = 'student' AND ${ownStudent(me)}
  `;
  if (!row) return { ok: false };
  return { ok: true, username: row.username ?? row.email, password: decryptPasswordView(row.password_view) };
}

/** O'quvchini va uning barcha natijalarini o'chirish. */
export async function deleteStudentAction(formData: FormData): Promise<TeacherActionResult> {
  const me = await requireTeacher();
  const id = Number(formData.get("id"));
  await sql`DELETE FROM users WHERE id = ${id} AND role = 'student' AND ${ownStudent(me)}`;
  revalidatePath("/teacher");
  return { ok: true };
}

/* ——— Admin: o'qituvchi hisoblari ——— */

/** Yangi o'qituvchi hisobi: ism, login, parol, ixtiyoriy email. Parol
 *  nusxasi saqlanadi — admin keyin ham ko'ra oladi. */
export async function createTeacherAction(formData: FormData): Promise<TeacherActionResult> {
  await requireAdmin();
  const name = clean(formData.get("name"));
  const username = clean(formData.get("username")).toLowerCase();
  const password = String(formData.get("password") ?? "");
  const email = clean(formData.get("email")).toLowerCase() || null;

  if (name.length < 2) return { ok: false, error: "Ismni kiriting." };
  if (!USERNAME_RE.test(username))
    return { ok: false, error: "Login 3–32 belgi: lotin harflari, raqamlar, nuqta, chiziqcha." };
  if (password.length < 8) return { ok: false, error: "O'qituvchi paroli kamida 8 belgidan iborat bo'lsin." };
  if (email && !EMAIL_RE.test(email)) return { ok: false, error: "Email noto'g'ri." };

  const [taken] = await sql<{ id: number }[]>`
    SELECT id FROM users WHERE lower(username) = ${username} OR lower(email) = ${username}
       OR (${email}::text IS NOT NULL AND (lower(email) = ${email} OR lower(username) = ${email}))
  `;
  if (taken) return { ok: false, error: "Bu login yoki email band." };

  await sql`
    INSERT INTO users (name, username, email, password_hash, password_view, role)
    VALUES (${name}, ${username}, ${email}, ${await hashPassword(password)}, ${encryptPasswordView(password)}, 'teacher')
  `;
  revalidatePath("/teacher");
  return { ok: true };
}

/** Mavjud o'quvchini o'qituvchi qilish (logini va paroli o'zgarmaydi). */
export async function promoteToTeacherAction(formData: FormData): Promise<TeacherActionResult> {
  await requireAdmin();
  const id = Number(formData.get("id"));
  const rows = await sql`
    UPDATE users SET role = 'teacher', teacher_id = NULL WHERE id = ${id} AND role = 'student' RETURNING id
  `;
  if (!rows.length) return { ok: false, error: "O'quvchi topilmadi." };
  revalidatePath("/teacher");
  return { ok: true };
}

/** O'qituvchiga yangi parol berish. */
export async function resetTeacherPasswordAction(formData: FormData): Promise<TeacherActionResult> {
  await requireAdmin();
  const id = Number(formData.get("id"));
  const password = String(formData.get("password") ?? "");
  if (password.length < 8) return { ok: false, error: "O'qituvchi paroli kamida 8 belgidan iborat bo'lsin." };
  await sql`
    UPDATE users SET password_hash = ${await hashPassword(password)}, password_view = ${encryptPasswordView(password)}
    WHERE id = ${id} AND role = 'teacher' AND NOT is_admin
  `;
  revalidatePath("/teacher");
  return { ok: true };
}

/** O'qituvchining login va parolini ko'rish (admin o'zinikini ko'rmaydi). */
export async function revealTeacherCredentialsAction(
  id: number
): Promise<{ ok: boolean; username?: string | null; password?: string | null }> {
  await requireAdmin();
  const [row] = await sql<{ username: string | null; email: string | null; password_view: string | null }[]>`
    SELECT username, email, password_view FROM users WHERE id = ${id} AND role = 'teacher' AND NOT is_admin
  `;
  if (!row) return { ok: false };
  return { ok: true, username: row.username ?? row.email, password: decryptPasswordView(row.password_view) };
}

/** O'qituvchilik huquqini olib qo'yish: hisob o'quvchiga aylanadi (adminga
 *  biriktiriladi), uning o'quvchilari ham adminga o'tadi. Hech narsa o'chmaydi. */
export async function revokeTeacherAction(formData: FormData): Promise<TeacherActionResult> {
  const me = await requireAdmin();
  const id = Number(formData.get("id"));
  const rows = await sql.begin(async (tx) => {
    const r = await tx`
      UPDATE users SET role = 'student', teacher_id = ${me.id}
      WHERE id = ${id} AND role = 'teacher' AND NOT is_admin RETURNING id
    `;
    if (r.length) await tx`UPDATE users SET teacher_id = ${me.id} WHERE teacher_id = ${id}`;
    return r;
  });
  if (!rows.length) return { ok: false, error: "O'qituvchi topilmadi." };
  revalidatePath("/teacher");
  return { ok: true };
}
