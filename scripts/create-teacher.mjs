/**
 * O'qituvchi hisobini yaratish (yoki mavjud foydalanuvchini o'qituvchi
 * qilish) — terminalda, parol ekranda ko'rinmaydi:
 *
 *   node scripts/create-teacher.mjs
 *
 * Ism, login, Google orqali kirish uchun email (ixtiyoriy) va parol so'raladi.
 * DATABASE_URL .env.local dan olinadi.
 */
import readline from "readline";
import bcrypt from "bcryptjs";
import postgres from "postgres";
import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd());

function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(question, (a) => (rl.close(), resolve(a.trim()))));
}

function askHidden(question) {
  return new Promise((resolve) => {
    process.stdout.write(question);
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");
    let value = "";
    const onData = (chunk) => {
      for (const ch of chunk) {
        if (ch === "\r" || ch === "\n") {
          stdin.setRawMode(false);
          stdin.pause();
          stdin.off("data", onData);
          process.stdout.write("\n");
          return resolve(value);
        }
        if (ch === "\u0003") process.exit(1);
        if (ch === "\u007f" || ch === "\b") {
          if (value.length > 0) {
            value = value.slice(0, -1);
            process.stdout.write("\b \b");
          }
          continue;
        }
        value += ch;
        process.stdout.write("*");
      }
    };
    stdin.on("data", onData);
  });
}

const USERNAME_RE = /^[a-z0-9._-]{3,32}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL topilmadi — avval node scripts/setup-env.mjs");
    process.exit(1);
  }
  const sql = postgres(process.env.DATABASE_URL, { prepare: false, ssl: "require", max: 1 });

  const name = await ask("Ism familiya: ");
  const username = (await ask("Login (lotin harf, raqam, . _ -): ")).toLowerCase();
  const email = (await ask("Google email (ixtiyoriy, Enter — o'tkazib yuborish): ")).toLowerCase() || null;
  if (name.length < 2 || !USERNAME_RE.test(username) || (email && !EMAIL_RE.test(email))) {
    console.error("Ism, login yoki email noto'g'ri.");
    process.exit(1);
  }
  const password = await askHidden("Parol (kamida 8 belgi, ko'rinmaydi): ");
  const again = await askHidden("Parolni takrorlang: ");
  if (password.length < 8 || password !== again) {
    console.error("Parol juda qisqa yoki ikkalasi bir xil emas.");
    process.exit(1);
  }

  const hash = await bcrypt.hash(password, 10);
  const [existing] = await sql`
    SELECT id FROM users WHERE lower(username) = ${username} OR (${email}::text IS NOT NULL AND lower(email) = ${email})
  `;
  if (existing) {
    await sql`
      UPDATE users SET name = ${name}, username = ${username}, email = COALESCE(${email}, email),
        password_hash = ${hash}, role = 'teacher'
      WHERE id = ${existing.id}
    `;
    console.log(`\n✓ Mavjud foydalanuvchi (id ${existing.id}) o'qituvchi qilindi, parol yangilandi.`);
  } else {
    const [row] = await sql`
      INSERT INTO users (name, username, email, password_hash, role)
      VALUES (${name}, ${username}, ${email}, ${hash}, 'teacher')
      RETURNING id
    `;
    console.log(`\n✓ O'qituvchi hisobi yaratildi (id ${row.id}). Login: ${username}`);
  }
  await sql.end();
}

main().catch((err) => {
  console.error("Xatolik:", err.message);
  process.exit(1);
});
