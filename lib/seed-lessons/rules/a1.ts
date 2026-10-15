/**
 * A1 darslarining «Qoida» bo'limi: lug'atdan keyin, mashqlardan oldin
 * ko'rsatiladigan sodda grammatika tushuntirishi (o'zbek tilida) va shu
 * qoida bo'yicha 10 ta test. Matn belgilari: «## » — sarlavha, «• » —
 * ro'yxat, «→ » — misol, «**…**» — qalin. Testlarda to'g'ri javob birinchi
 * yoziladi (seed paytida aralashtiriladi) — shuning uchun bir xil variantlar
 * to'plamini 3 martadan ko'p takrorlamang.
 */
import { q, rule, type LessonRule } from "./types";

export const A1_RULES: Record<string, LessonRule> = {
  "A1-00": rule(
    "Ingliz alifbosi",
    `Ingliz alifbosida **26 ta harf** bor. Ular o'zbek lotin alifbosiga o'xshaydi, lekin ikkita muhim farq bor.

## 1. Harfning nomi va tovushi har xil
Alifboni aytganda harfning **nomi** aytiladi, so'z ichida esa harf boshqacha o'qilishi mumkin.
• **A** — nomi «ey», lekin apple so'zida [e] — «epl».
• **E** — nomi «ii», **I** — nomi «ay». O'zbekchadagidan farq qiladi!
• **G** — «ji», **J** — «jey». Bu ikkisini adashtirmang.
• **H** — «eych», **R** — «aa», **W** — «dabl-yu», **Y** — «uay», **Q** — «kyu».
→ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

## 2. Yozilishi va o'qilishi har doim bir xil emas
O'zbek tilida so'z qanday yozilsa, shunday o'qiladi. Ingliz tilida esa unday emas, shuning uchun har bir yangi so'zning talaffuzini alohida o'rganamiz.
→ key — «kii», house — «xaus», water — «uota»

## 3. Unli va undosh harflar
• **5 ta unli harf:** A, E, I, O, U.
• Qolgan **21 tasi undosh**.
• **Q** dan keyin deyarli doim **U** keladi: queen.

## 4. Bosh harf
• Gap bosh harf bilan boshlanadi.
• Ismlar, shaharlar va mamlakatlar bosh harf bilan yoziladi: Aziz, Tashkent, England.
• **I** (men) so'zi gapning qayerida bo'lmasin, doim bosh harf bilan yoziladi.
→ My friend and I are students.

## 5. Harflab aytish (spelling)
Ism yoki so'zni harflab so'rashadi: «How do you spell it?».
• Ikkita bir xil harf ketma-ket kelsa, «double» deyiladi: book — B, double O, K.
→ Aziz — A-Z-I-Z.`,
    [
      q("Ingliz alifbosida nechta harf bor?", ["26", "29", "33", "24"]),
      q("Qaysi harflar unli?", ["A, E, I, O, U", "A, B, C, D, E", "A, O, U, Y, W", "E, I, Y, R, S"]),
      q("«G» harfi qanday aytiladi?", ["ji", "jey", "gey", "ge"], "G — «ji», J — «jey»."),
      q("«E» harfining nomi qanday?", ["ii", "e", "ey", "ay"]),
      q("«I» harfining nomi qanday?", ["ay", "i", "ii", "ey"]),
      q("Qaysi so'z to'g'ri yozilgan?", ["My friend and I", "my friend and i", "My friend and i", "my Friend and I"], "I va gap boshi — bosh harf bilan."),
      q("«book» qanday harflanadi?", ["B, double O, K", "B, O, K", "B, U, K", "B, double U, K"]),
      q("Q harfidan keyin deyarli doim qaysi harf keladi?", ["U", "A", "E", "O"]),
      q("«W» harfining nomi qanday?", ["dabl-yu", "ve", "vey", "uay"]),
      q("Qaysi so'z bosh harf bilan yoziladi?", ["Tashkent", "apple", "water", "house"], "Shahar nomi — bosh harf bilan."),
    ]
  ),

  "A1-01": rule(
    "to be: I am, you are",
    `O'zbek tilida «Men talabaman» deymiz: «men» so'ziga **-man** qo'shimchasi qo'shiladi. Ingliz tilida qo'shimcha o'rniga **alohida so'z** — **to be** fe'li ishlatiladi.

## Darak gap
• **I am** — men …man
• **You are** — sen …san / siz …siz
→ I am a student. — Men talabaman.
→ You are my teacher. — Siz mening o'qituvchimsiz.

Bu fe'lni tashlab ketish mumkin emas! «I student» — xato.

## Qisqa shakl
Og'zaki nutqda deyarli doim qisqa shakl ishlatiladi:
• I am → **I'm**
• you are → **you're**
→ I'm Aziz. You're Malika.

## Inkor gap (emas)
**am / are** dan keyin **not** qo'yiladi:
• I am not → **I'm not**
• you are not → **you aren't** yoki **you're not**
→ I'm not a teacher. — Men o'qituvchi emasman.

## So'roq gap
**Are** gapning boshiga chiqadi:
→ You are a student. → **Are you** a student?
→ Are you OK? — Yaxshimisiz?

## Qisqa javob
Javob savoldagi fe'l bilan beriladi:
• Are you a student? — **Yes, I am.** / **No, I'm not.**
• Ijobiy qisqa javobda qisqartirilmaydi: «Yes, I'm» — xato, **Yes, I am** — to'g'ri.

## Sen va siz
Ingliz tilida «sen» va «siz» uchun bitta so'z bor: **you**. Hurmat **Mr**, **Ms** va **please** so'zlari bilan ifodalanadi.
→ Good morning, Mr Karimov! — Assalomu alaykum, Karimov janoblari!`,
    [
      q("I ___ a student.", ["am", "are", "is", "be"]),
      q("You ___ my friend.", ["are", "am", "is", "be"]),
      q("«I am» ning qisqa shakli qaysi?", ["I'm", "Im", "I'am", "I's"], "Apostrof «a» harfi o'rnida: I'm."),
      q("«Siz o'qituvchimisiz?» inglizcha qanday?", ["Are you a teacher?", "You are a teacher?", "Am you a teacher?", "You teacher?"]),
      q("Are you a student? (✓)", ["Yes, I am.", "Yes, I'm.", "Yes, you are.", "Yes, I are."], "Ijobiy qisqa javobda qisqartirilmaydi."),
      q("Are you a teacher? (✗)", ["No, I'm not.", "No, I amn't.", "No, I not.", "No, you aren't."]),
      q("«Men o'qituvchi emasman» inglizcha qanday?", ["I'm not a teacher.", "I not a teacher.", "I'm no teacher.", "I amn't a teacher."]),
      q("Qaysi gap to'g'ri?", ["I am Aziz.", "I Aziz.", "Me am Aziz.", "I are Aziz."], "to be fe'lini tashlab ketish mumkin emas."),
      q("«you are not» ning qisqa shakli qaysi?", ["you aren't", "you amn't", "you'ren't", "you not"], "you aren't yoki you're not."),
      q("«sen» va «siz» inglizchada qanday?", ["Ikkalasi ham — you", "sen — you, siz — your", "sen — I, siz — you", "sen — thou, siz — you"]),
    ]
  ),
};
