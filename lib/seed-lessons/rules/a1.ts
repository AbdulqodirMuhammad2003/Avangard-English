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

  "A1-02": rule(
    "to be: we are, you are · Where are you from?",
    `O'tgan darsda **I am** va **you are**ni o'rgandik. Endi ko'plikda: «biz» va «sizlar».

## Darak gap
• **We are** (we're) — biz …miz
• **You are** (you're) — sizlar …siz
→ We're from Uzbekistan. — Biz O'zbekistondanmiz.
→ You're students. — Sizlar talabasiz.
**you** — «sen», «siz» va «sizlar» uchun bitta so'z. Shakli doim **are**.

## Inkor gap
• we are not → **we aren't** (we're not)
• you are not → **you aren't** (you're not)
→ We aren't from Tashkent. We're from Bukhara.

## So'roq gap va qisqa javob
→ **Are you** from Japan? — **Yes, we are.** / **No, we aren't.**
Qisqa javob savolga mos: savol «sizlar» haqida bo'lsa, javob «biz» (**we**) bilan beriladi.

## Qayerdansiz? — from
• **Where are you from?** — Qayerdansiz?
• **I'm from** Samarkand. — Samarqanddanman.
O'zbek tilidagi **-dan** qo'shimchasi o'rniga so'zdan **oldin from** qo'yiladi.

## Mamlakatlar va bosh harf
• Mamlakat va shahar nomlari doim **bosh harf** bilan yoziladi: Japan, Tashkent.
• Ko'pchiligi artiklsiz: from Japan, from France.
• Lekin: **the USA**, **the UK** — the bilan.`,
    [
      q("We ___ from Uzbekistan.", ["are", "is", "am", "be"]),
      q("«Biz Buxorodan emasmiz» inglizcha qanday?", ["We aren't from Bukhara.", "We not from Bukhara.", "We isn't from Bukhara.", "We aren't Bukhara from."]),
      q("Are you from Japan? (✓, ikki kishi javob beradi)", ["Yes, we are.", "Yes, we're.", "Yes, I am.", "Yes, you are."]),
      q("«Qayerdansiz?» inglizcha qanday?", ["Where are you from?", "Where you are from?", "From where you are?", "Where are you?"]),
      q("Qaysi gap to'g'ri?", ["I'm from France.", "I'm France.", "I from France.", "I'm in France from."]),
      q("Qaysi biri to'g'ri yozilgan?", ["I'm from Japan.", "I'm from japan.", "I'm from the Japan.", "i'm from Japan."]),
      q("Qaysi biri to'g'ri?", ["She's from the USA.", "She's from USA.", "She's from the usa.", "She's USA."], "the USA — artikl bilan."),
      q("«we are» ning qisqa shakli qaysi?", ["we're", "were", "we'r", "we's"], "we're [uia] — were [uyo] (o'tgan zamon) bilan adashtirmang."),
      q("Are you students? (✗)", ["No, we aren't.", "No, we not.", "No, you aren't.", "No, I amn't."]),
      q("«Sizlar» inglizcha qanday?", ["you", "your", "we", "they"]),
    ]
  ),

  "A1-03": rule(
    "So'roq so'zlari: What? Who? Where? How?",
    `Ingliz tilida so'roq gap ko'pincha **so'roq so'zi**dan boshlanadi. Undan keyin **to be** (am / is / are), keyin esa ega keladi.

## So'roq so'zlari
• **What** — nima? → What is your name?
• **Who** — kim? → Who is your teacher?
• **Where** — qayerda? qayerdan? → Where are you from?
• **How** — qanday? → How are you?
• **How old** — necha yoshda? → How old are you?

## So'z tartibi
**So'roq so'zi + to be + ega**
→ Where **are you** from? (Where you are from? — xato)
→ What **is your** surname?

## Qisqa shakl
• What is → **What's**: What's your phone number?
• Who is → **Who's**, Where is → **Where's**

## Yosh
• **How old are you?** — **I'm 19.** yoki **I'm 19 years old.**
• O'zbekchadagidek «19 yoshdaman» — fe'l **am** bilan: I **am** 19.

## Harflab so'rash
• **How do you spell it?** — U qanday harflanadi?
• Javob harfma-harf beriladi: K-A-R-I-M-O-V.

## E'tibor bering
• Manzil va telefon raqamini **What** bilan so'raymiz: **What's** your address? (Where emas!)
• Millat — **Uzbek**, mamlakat — **Uzbekistan**: I'm Uzbek. I'm from Uzbekistan.`,
    [
      q("___ is your name?", ["What", "Who", "Where", "How"]),
      q("___ is your teacher? — Mrs Brown.", ["Who", "What", "How", "Where"]),
      q("Qaysi gap to'g'ri?", ["Where are you from?", "Where you are from?", "Where from you are?", "From where are you?"]),
      q("___ old are you?", ["How", "What", "Who", "Where"]),
      q("«Yoshim 20 da» inglizcha qanday?", ["I'm 20.", "I have 20 years.", "I'm 20 year old.", "My 20."]),
      q("Manzil haqida qanday so'raymiz?", ["What's your address?", "Where's your address?", "Who's your address?", "How's your address?"]),
      q("«What is» ning qisqa shakli qaysi?", ["What's", "Whats", "What'is", "Wha's"]),
      q("«U qanday harflanadi?» inglizcha qanday?", ["How do you spell it?", "What do you spell it?", "How it spell?", "How spell you it?"]),
      q("Millatingizni qanday aytasiz?", ["I'm Uzbek.", "I'm Uzbekistan.", "I'm from Uzbek.", "My Uzbek."]),
      q("Odam haqida qaysi so'z bilan so'raymiz?", ["Who", "What", "Where", "How old"]),
    ]
  ),

  "A1-04": rule(
    "this / that / these / those · ko'plik · a / an",
    `## Bu, u, bular, ular
Buyumni ko'rsatganda ikki narsaga qaraymiz: **bittami yoki ko'pmi** va **yaqindami yoki uzoqdami**.

• Yaqinda, bitta — **this** (bu)
• Uzoqda, bitta — **that** (ana u)
• Yaqinda, ko'p — **these** (bular)
• Uzoqda, ko'p — **those** (ana ular)
→ This is my phone. That is my car.
→ These are my keys. Those are my friends.

## is yoki are
• Bitta: this / that / it + **is**
• Ko'p: these / those / they + **are**
→ What's this? — **It's** a pencil.
→ What are these? — **They're** pencils.

## Ko'plik shakli
• Odatda **+ s**: phone → phones, ticket → tickets
• s, x, ch, sh bilan tugasa **+ es**: bus → buses, box → boxes, watch → watches
• Undosh + y → **ies**: city → cities, country → countries
• Unli + y → faqat **+ s**: key → keys
• Ba'zi so'zlar doim ko'plikda bo'ladi: **glasses** (ko'zoynak) → My glasses **are** new.

## a yoki an
Bitta narsa haqida gapirganda otdan oldin **a** yoki **an** qo'yiladi (o'zbekchada «bitta» deyish shart emas, inglizchada shart).
• Undosh tovushdan oldin — **a**: a phone, a camera, a ticket
• Unli tovushdan oldin — **an**: an apple, an umbrella, an egg
• Ko'plikda **a / an qo'yilmaydi**: phones, umbrellas.

## Sonlar 11–100
• 13–19: **-teen**, urg'u oxirida: thir**TEEN**, fif**TEEN**
• 20, 30…: **-ty**, urg'u boshida: **THIR**ty, **FIF**ty
• 21–99: chiziqcha bilan: twenty-one, forty-five
• Imloga e'tibor bering: **forty** (u harfisiz), **eight**een (bitta t).`,
    [
      q("___ are my keys. (yaqinda)", ["These", "This", "That", "Those"]),
      q("___ is my car. (uzoqda)", ["That", "These", "This", "Those"]),
      q("What are these? — ___", ["They're tickets.", "It's tickets.", "This is tickets.", "They're ticket."]),
      q("«box» ning ko'plik shakli qaysi?", ["boxes", "boxs", "boxies", "box"]),
      q("«city» ning ko'plik shakli qaysi?", ["cities", "citys", "cityes", "cityies"]),
      q("Qaysi biri to'g'ri?", ["an umbrella", "a umbrella", "an camera", "a apple"]),
      q("Qaysi biri to'g'ri?", ["My glasses are new.", "My glasses is new.", "My glass are new.", "My glasses new."]),
      q("«thirteen» da urg'u qayerda?", ["thir-TEEN", "THIR-teen", "Urg'u yo'q", "Ikkalasida"]),
      q("40 qanday yoziladi?", ["forty", "fourty", "fortty", "fourteen"]),
      q("Qaysi gap to'g'ri?", ["These are my friends.", "This are my friends.", "These is my friends.", "Those is my friends."]),
    ]
  ),
};
