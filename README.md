# Avangard English — o'zbek o'quvchilari uchun ingliz tili platformasi

O'zbek o'quvchilariga ingliz tilini o'rgatadigan veb-sayt (PWA). Darajalar
A1, A2, B1, B2 (har biri taxminiy IELTS bali bilan) va oxirida «IELTS
Preparation». Interfeys va tushuntirishlar o'zbek tilida, o'rganiladigan
kontent ingliz tilida: har bir so'z IPA va o'zbekcha talaffuz, tarjima va
misol gap bilan beriladi.

Dars tuzilishi: lug'at bosqichlari (kartochkalar, variant tanlash, harf
plitkalari bilan yozish, talaffuz) → «Qoida» va uning testi → mashqlar.
Har bir daraja oxirida yakuniy imtihon va sertifikat bor.

## Texnologiyalar

- **Next.js 16** (App Router, React 19, Server Actions). Kod yozishdan oldin
  `AGENTS.md` ni o'qing.
- **TypeScript** + **Tailwind CSS 4**
- **Supabase Postgres** (`postgres.js`; session pooler, 5432-port)
- Autentifikatsiya: JWT + httpOnly cookie, Google orqali kirish faqat
  o'qituvchi qo'shgan o'quvchilar uchun.

## Ishga tushirish

`.env.local` faylida `DATABASE_URL`, `JWT_SECRET`, `GOOGLE_CLIENT_ID` va
`GOOGLE_CLIENT_SECRET` bo'lishi kerak. Bu fayl gitga qo'shilmaydi.

```bash
npm install
npm run dev
```

## Kontent qayerda

- `lib/levels.ts`: darajalar (CEFR nomi, IELTS bali, tavsif).
- `lib/seed-data.ts` → `UNITS`: darslar ro'yxati.
- `lib/seed-lessons/<kod>.ts`: dars lug'ati va mashqlari, `index.ts` ga ulanadi.
- `lib/seed-lessons/rules/*.ts`: har bir darsning «Qoida» bo'limi.
- `lib/exam-bank.ts`: daraja imtihonlarining grammatika savollari.
- So'z talaffuzi `"IPA|o'zbekcha"` ko'rinishida yoziladi, masalan
  `"həˈləʊ|halou"` (`lib/transcription.ts`).

Barcha matn, misol va mashqlarni o'zimiz yozamiz, hech qanday darslikdan
ko'chirilmaydi.

## Buyruqlar

```bash
npm run build                          # production build
npm run start                          # production'ni ishga tushirish
npm run lint                           # linter
npm run db:add-lessons                 # bazaga yangi darslar (avval quruq sinov)
npm run db:add-lessons -- --apply      # haqiqatan qo'shish
npm run handbooks                      # darajalar bo'yicha PDF qo'llanmalar
node scripts/set-admin.mjs <login> --apply  # asosiy admin: o'qituvchilarni boshqaradi va kuzatadi
node scripts/create-teacher.mjs        # yangi o'qituvchi (admin panelidan ham bo'ladi)
npm run db:seed                        # DIQQAT: bazani butunlay o'chirib qayta yaratadi
```
