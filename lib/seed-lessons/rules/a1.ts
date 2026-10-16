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

  "A1-05": rule(
    "to be: he / she / it is, they are · kasblar",
    `Endi **to be** fe'lining to'liq jadvalini bilamiz.

## To'liq jadval
• I **am** (I'm)
• you **are** (you're)
• he / she / it **is** (he's, she's, it's)
• we **are** (we're)
• they **are** (they're)

## U — he, she yoki it?
O'zbek tilida «u» bitta so'z, ingliz tilida esa uchta:
• **he** — erkak yoki o'g'il bola: Aziz → he
• **she** — ayol yoki qiz bola: Malika → she
• **it** — narsa, hayvon yoki joy: the hospital → it
• **they** — ko'plik, odamlar ham, narsalar ham: Jasur and Timur → they

## Inkor va so'roq
• is not → **isn't**, are not → **aren't**
→ She isn't a doctor. They aren't at home.
→ **Is he** a pilot? — **Yes, he is.** / **No, he isn't.**
→ **Are they** students? — **Yes, they are.** / **No, they aren't.**

## Kasb: a / an shart!
O'zbekchada «U shifokor» deymiz, inglizchada esa kasbdan oldin **a** yoki **an** qo'yiladi:
→ He's **a** doctor. (He's doctor — xato)
→ She's **an** engineer. (unli tovushdan oldin — an)
→ Ko'plikda a/an qo'yilmaydi: They're doctor**s**.

## Kasb haqida so'rash
→ **What's your job?** — I'm a programmer.
→ Ishda — **at work**: He's at work now.`,
    [
      q("She ___ a nurse.", ["is", "are", "am", "be"]),
      q("Aziz is a pilot. → ___ is a pilot.", ["He", "She", "It", "They"]),
      q("The hospital is new. → ___ is new.", ["It", "He", "She", "They"]),
      q("Qaysi gap to'g'ri?", ["He's an engineer.", "He's engineer.", "He's a engineer.", "He an engineer."]),
      q("Are they doctors? (✗)", ["No, they aren't.", "No, they isn't.", "No, they not.", "No, it isn't."]),
      q("Is she a teacher? (✓)", ["Yes, she is.", "Yes, she's.", "Yes, he is.", "Yes, she are."]),
      q("«U kasalxonada emas» (ayol) inglizcha qanday?", ["She isn't at the hospital.", "She not at the hospital.", "She aren't at the hospital.", "He isn't at the hospital."]),
      q("Kasb haqida qanday so'raymiz?", ["What's your job?", "Who is your job?", "Where is your job?", "How is your job?"]),
      q("Qaysi biri to'g'ri?", ["They're doctors.", "They're a doctors.", "They're doctor.", "They're an doctors."]),
      q("My brothers ___ programmers.", ["are", "is", "am", "has"]),
    ]
  ),

  "A1-06": rule(
    "Joy predloglari · Where…? · vaqt",
    `## Joy predloglari
O'zbek tilida joy qo'shimcha bilan bildiriladi (stolda, stol ustida), ingliz tilida esa otdan **oldin predlog** qo'yiladi.
• **in** — ichida: in the box, in my bag, in Tashkent
• **on** — ustida: on the table, on the wall
• **under** — tagida: under the chair
• **near** — yaqinida: near the park
• **next to** — yonida: next to the bank
• **behind** — orqasida: behind the house
• **in front of** — oldida: in front of the school
• **between** — orasida: between the bank **and** the shop
→ Devordagi narsa — **on the wall**. Ishda — **at work**, uyda — **at home**.

## Qayerda?
• Bitta narsa: **Where is** (Where's) my phone? — **It's** on the desk.
• Ko'p narsa: **Where are** my keys? — **They're** in my bag.
• **They're** (ular) — **their** (ularning) — **there** (u yerda): talaffuzi o'xshash, yozilishi boshqa.

## Soat necha?
**What time is it?** — **It's** …
• 7:00 — seven **o'clock**
• 7:30 — **half past** seven
• 7:15 — **quarter past** seven
• 6:45 — **quarter to** seven (yettiga chorak qoldi)
• O'zbekchadan farqi: «yarim» oldingi soat bilan aytiladi: 2:30 — **half past two**.
• Vaqt — **at** bilan: The film is **at** seven o'clock.`,
    [
      q("The picture is ___ the wall.", ["on", "in", "under", "at"]),
      q("The cat is ___ the box. (ichida)", ["in", "on", "under", "between"]),
      q("___ are my keys?", ["Where", "Where is", "What", "Who"]),
      q("Where is the bank? — ___", ["It's next to the hotel.", "They're next to the hotel.", "It next to hotel.", "Is next the hotel."]),
      q("7:30 inglizcha qanday?", ["half past seven", "half past eight", "half to eight", "seven half"]),
      q("8:45 inglizcha qanday?", ["quarter to nine", "quarter past eight", "quarter to eight", "half past eight"]),
      q("The café is between the bank ___ the shop.", ["and", "or", "next", "to"]),
      q("«Ular uyda» inglizcha qanday?", ["They're at home.", "Their at home.", "There at home.", "They at home."]),
      q("The film is ___ seven o'clock.", ["at", "in", "on", "to"]),
      q("Qaysi gap to'g'ri?", ["Where are my glasses?", "Where is my glasses?", "Where my glasses?", "Where are my glass?"]),
    ]
  ),

  "A1-07": rule(
    "have got · sifat + ot · noto'g'ri ko'plik",
    `## have got — …i bor
O'zbekchada «Mening mushugim bor» deymiz. Ingliz tilida egalik **have got** bilan aytiladi:
• I / you / we / they **have got** (I've got, they've got)
• he / she / it **has got** (he's got, she's got)
→ I've got a cat. — Mening mushugim bor.
→ She's got two children. — Uning ikki farzandi bor.
→ The flat has got two rooms. — Kvartirada ikki xona bor.
Diqqat: **she's got** = she **has** got, **she's** a doctor = she **is** a doctor. Qaysi biri ekanini **got** so'zidan bilib olasiz.

## Sifat + ot
• Sifat **otdan oldin** keladi: a **big** house (a house big — xato)
• Sifat ko'plikda **o'zgarmaydi**: big house**s** (bigs houses — xato)
• **a / an** sifatga qarab tanlanadi: **an old** car, **a new** car
• Sifat **to be** dan keyin ham keladi: Our street **is quiet**.

## Noto'g'ri ko'plik
Ba'zi otlar ko'plikda **-s olmaydi**, butunlay o'zgaradi:
• man → **men**, woman → **women**
• child → **children**
• person → **people**
• Talaffuzga e'tibor bering: woman [vuman] — women [uimin].
• **people** — o'zi ko'plik: five people (peoples — xato).`,
    [
      q("She ___ two children.", ["has got", "have got", "is got", "got has"]),
      q("We ___ a small flat.", ["have got", "has got", "are got", "got"]),
      q("Qaysi biri to'g'ri?", ["a big house", "a house big", "an big house", "big a house"]),
      q("Qaysi biri to'g'ri?", ["new phones", "news phones", "phones new", "a new phones"]),
      q("«child» ning ko'plik shakli qaysi?", ["children", "childs", "childrens", "childes"]),
      q("«woman» ning ko'plik shakli qaysi?", ["women", "womans", "womens", "woman"]),
      q("Qaysi biri to'g'ri?", ["five people", "five peoples", "five persons people", "five person"]),
      q("«I have got» ning qisqa shakli qaysi?", ["I've got", "I'm got", "I'got", "I's got"]),
      q("Qaysi biri to'g'ri?", ["an old car", "a old car", "an car old", "old a car"]),
      q("«He's got a bike» dagi 's nimani bildiradi?", ["has", "is", "his", "us"]),
    ]
  ),

  "A1-08": rule(
    "have got: inkor va so'roq",
    `## Inkor gap
**have / has** dan keyin **not** qo'yiladi:
• have not got → **haven't got**
• has not got → **hasn't got**
→ I haven't got a car. — Mening mashinam yo'q.
→ She hasn't got a tablet. — Uning plansheti yo'q.

## So'roq gap
**Have / Has** gapning boshiga chiqadi, **got** esa joyida qoladi:
→ You've got a pen. → **Have you got** a pen?
→ He's got a bike. → **Has he got** a bike?

## Qisqa javob
Javobda **got** ishlatilmaydi:
• Have you got a pet? — **Yes, I have.** / **No, I haven't.**
• Has she got a car? — **Yes, she has.** / **No, she hasn't.**
• Ijobiy javobda qisqartirilmaydi: «Yes, I've» — xato.

## Zid ma'noli sifatlar
So'zlarni juft-juft o'rganish oson:
• cheap — expensive, fast — slow, long — short
• heavy — light, easy — difficult, hot — cold
• clean — dirty, full — empty, happy — sad, rich — poor
→ This laptop isn't cheap. It's **expensive**.`,
    [
      q("___ you got a tablet?", ["Have", "Has", "Are", "Do"]),
      q("___ she got a car?", ["Has", "Have", "Is", "Does"]),
      q("Have you got a pet? (✓)", ["Yes, I have.", "Yes, I've.", "Yes, I have got.", "Yes, I has."]),
      q("Has he got a bike? (✗)", ["No, he hasn't.", "No, he haven't.", "No, he hasn't got.", "No, he isn't."]),
      q("«Mening mashinam yo'q» inglizcha qanday?", ["I haven't got a car.", "I hasn't got a car.", "I not got a car.", "I haven't a got car."]),
      q("She ___ got a printer.", ["hasn't", "haven't", "isn't", "don't"]),
      q("«cheap» ning zid ma'nosi qaysi?", ["expensive", "rich", "easy", "light"]),
      q("«heavy» ning zid ma'nosi qaysi?", ["light", "short", "slow", "empty"]),
      q("Qaysi gap to'g'ri?", ["Has the hotel got internet?", "Have the hotel got internet?", "Has got the hotel internet?", "The hotel has got internet?"]),
      q("«full» ning zid ma'nosi qaysi?", ["empty", "clean", "cold", "poor"]),
    ]
  ),
};
