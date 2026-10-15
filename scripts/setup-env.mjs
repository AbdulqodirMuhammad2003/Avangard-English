/**
 * .env.local faylini terminalda xavfsiz to'ldirish:
 *
 *   node scripts/setup-env.mjs [papka]
 *
 * Supabase'ning Session pooler manzilini (Connect → Method: Session pooler)
 * va baza parolini so'raydi. Parol yozilayotganda ekranda ko'rinmaydi va
 * hech qayerga chiqarilmaydi. Parol URL uchun kodlanadi (maxsus belgilar
 * buzmasligi uchun), JWT_SECRET bo'lmasa yaratiladi, so'ng bazaga sinov
 * ulanishi qilinadi. Fayl berilgan papkaga (standart — joriy papka) yoziladi.
 */
import fs from "fs";
import path from "path";
import crypto from "crypto";
import readline from "readline";
import postgres from "postgres";

const dir = path.resolve(process.argv[2] ?? process.cwd());
const envPath = path.join(dir, ".env.local");

function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(question, (a) => (rl.close(), resolve(a.trim()))));
}

/** Yozilgan belgilar ekranga chiqmaydi (faqat yulduzcha). */
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
        if (ch === "\u0003") process.exit(1); // Ctrl+C
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

function setVar(text, name, value) {
  const line = `${name}=${value}`;
  const re = new RegExp(`^${name}=.*$`, "m");
  if (re.test(text)) return text.replace(re, line);
  return (text && !text.endsWith("\n") ? text + "\n" : text) + line + "\n";
}

async function main() {
  console.log(`.env.local: ${envPath}\n`);
  console.log("Supabase → Connect → Method: Session pooler manzilini qo'ying");
  console.log("([YOUR-PASSWORD] qismi bilan birga, o'zgartirmasdan):");
  const uri = await ask("> ");
  if (!/^postgres(ql)?:\/\/[^:]+:.+@.+\.pooler\.supabase\.com:\d+\/\w+/.test(uri)) {
    console.error("\nBu Session pooler manziliga o'xshamayapti (…pooler.supabase.com:5432/postgres bo'lishi kerak).");
    process.exit(1);
  }
  const password = await askHidden("\nBaza paroli (ekranda ko'rinmaydi): ");
  if (!password) {
    console.error("Parol bo'sh.");
    process.exit(1);
  }

  // Parol joyini almashtiramiz; port 6543 bo'lsa — 5432 (session pooler).
  const m = uri.match(/^(postgres(?:ql)?:\/\/[^:]+:)(.*)(@[^@]+)$/);
  const url = `${m[1]}${encodeURIComponent(password)}${m[3]}`.replace(
    /(\.pooler\.supabase\.com):6543\b/,
    "$1:5432"
  );

  console.log("\nUlanish tekshirilmoqda…");
  const sql = postgres(url, { prepare: false, ssl: "require", max: 1, connect_timeout: 15 });
  try {
    const [row] = await sql`SELECT current_database() AS db, version() AS v`;
    console.log(`Ulandi: ${row.db} · ${String(row.v).split(" ").slice(0, 2).join(" ")}`);
  } catch (e) {
    console.error(`Ulanib bo'lmadi: ${e.message}`);
    console.error("Parol yoki manzilni tekshirib, qaytadan ishga tushiring. Fayl o'zgartirilmadi.");
    await sql.end({ timeout: 1 }).catch(() => {});
    process.exit(1);
  }
  await sql.end({ timeout: 5 });

  let text = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf8") : "";
  text = setVar(text, "DATABASE_URL", url);
  if (!/^JWT_SECRET=.+$/m.test(text)) {
    text = setVar(text, "JWT_SECRET", crypto.randomBytes(48).toString("base64url"));
    console.log("JWT_SECRET yaratildi.");
  }
  fs.writeFileSync(envPath, text);
  console.log(`\nTayyor: ${envPath} yangilandi (DATABASE_URL, JWT_SECRET). Bu oynani yopsangiz bo'ladi.`);
}

main();
