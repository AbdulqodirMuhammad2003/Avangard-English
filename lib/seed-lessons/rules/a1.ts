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

  "A1-09": rule(
    "Egalik: my, his, her… va 's",
    `## Egalik olmoshlari
O'zbek tilida egalik qo'shimcha bilan bildiriladi: kitob**im**, kitob**ing**. Ingliz tilida otdan **oldin** alohida so'z qo'yiladi:
• I → **my** (mening): my book
• you → **your** (sening, sizning): your phone
• he → **his** (uning — erkak): his car
• she → **her** (uning — ayol): her name
• it → **its** (uning — narsa, hayvon): its bed
• we → **our** (bizning): our flat
• they → **their** (ularning): their house
Bu so'zlar ko'plikda ham o'zgarmaydi: my brother**s**, their children.

## Egalik 's
Kimningdir narsasi haqida gapirganda otga **'s** qo'shiladi:
→ Aziz**'s** car — Azizning mashinasi
→ my sister**'s** name — opamning ismi
• Ko'plik -s bilan tugasa, faqat **apostrof** qo'shiladi: my parent**s'** house.

## Adashtirmang
• **its** (uning) — **it's** (it is): The dog is in **its** bed. **It's** a big dog.
• **their** (ularning) — **there** (u yerda) — **they're** (they are): talaffuzi bir xil.
• **he's** = he is, lekin **his** = uning.

## Kimning?
→ **Whose** bag is this? — It's **Malika's**.`,
    [
      q("She's my aunt. ___ son is my cousin.", ["Her", "His", "She", "Hers"]),
      q("He's a doctor. ___ wife is a nurse.", ["His", "Her", "He's", "Him"]),
      q("We live in Tashkent. ___ flat is small.", ["Our", "We", "Us", "Their"]),
      q("«Azizning mashinasi» inglizcha qanday?", ["Aziz's car", "Aziz car", "car's Aziz", "Azizs car"]),
      q("«Ota-onamning uyi» inglizcha qanday?", ["my parents' house", "my parent's houses", "my parents house's", "my parents's house"]),
      q("The cat is in ___ bed.", ["its", "it's", "it", "his"]),
      q("___ bag is this?", ["Whose", "Who's", "Who", "Which"]),
      q("They're my neighbours. ___ garden is beautiful.", ["Their", "There", "They're", "They"]),
      q("My father's brother is my …", ["uncle", "aunt", "cousin", "grandfather"]),
      q("Qaysi gap to'g'ri?", ["Her name is Malika.", "She name is Malika.", "His name is Malika. (ayol)", "Hers name is Malika."]),
    ]
  ),

  "A1-10": rule(
    "Present Simple: darak gap",
    `**Present Simple** — doimiy, odatiy ishlar uchun: qayerda yashaysiz, nima ish qilasiz, nimani yoqtirasiz.
→ I live in Tashkent. — Toshkentda yashayman.
→ She works in a hotel. — U mehmonxonada ishlaydi.

## Shakli
• I / you / we / they + fe'l: I **work**, they **speak**
• he / she / it + fe'l**-s**: she **works**, it **opens**
O'zbekchada har bir shaxsning o'z qo'shimchasi bor. Ingliz tilida esa qo'shimcha faqat **he / she / it** da: **-s**.

## -s qanday yoziladi
• Odatda **+ s**: work → works, live → lives
• s, sh, ch, x, o bilan tugasa **+ es**: watch → watch**es**, go → go**es**, do → do**es**
• Undosh + y → **ies**: study → stud**ies**, fly → fl**ies**
• Unli + y → **+ s**: play → plays
• have → **has**

## -s qanday o'qiladi
• /s/ — works, likes, speaks
• /z/ — lives, plays, reads
• /ɪz/ — watches, teaches (s, sh, ch, x dan keyin)

## Diqqat
• Present Simple'da **am / is / are kerak emas**: I **live** in Bukhara. (I am live — xato)
• My parents = they → My parents **live**…`,
    [
      q("She ___ in Samarkand.", ["lives", "live", "is live", "living"]),
      q("I ___ English.", ["study", "studies", "am study", "studys"]),
      q("«watch» ning he/she shakli qaysi?", ["watches", "watchs", "watchies", "watch"]),
      q("«study» ning he/she shakli qaysi?", ["studies", "studys", "studyes", "study"]),
      q("«have» ning he/she shakli qaysi?", ["has", "haves", "have", "had"]),
      q("My parents ___ in a village.", ["live", "lives", "are live", "living"]),
      q("Qaysi gap to'g'ri?", ["He goes to work by bus.", "He go to work by bus.", "He gos to work by bus.", "He is go to work by bus."]),
      q("«teaches» oxiri qanday o'qiladi?", ["/ɪz/", "/s/", "/z/", "o'qilmaydi"]),
      q("Qaysi gap to'g'ri?", ["I work in a bank.", "I works in a bank.", "I am work in a bank.", "I working in a bank."]),
      q("The shop ___ at nine o'clock.", ["opens", "open", "is open at", "opening"]),
    ]
  ),

  "A1-11": rule(
    "Present Simple: inkor gap",
    `## don't va doesn't
Present Simple'da inkor yordamchi fe'l bilan yasaladi:
• I / you / we / they + **don't** (do not) + fe'l
• he / she / it + **doesn't** (does not) + fe'l
→ I **don't** drive. — Men mashina haydamayman.
→ She **doesn't** take the metro. — U metroga tushmaydi.

## Muhim: doesn't dan keyin -s yo'q
**-s** endi **doesn't** ichida, shuning uchun fe'l o'z holiga qaytadi:
→ She drives. → She doesn't **drive**. (doesn't drives — xato)
→ He has a car. → He doesn't **have** a car.

## am / is / are bilan adashtirmang
• to be bilan gapda: **isn't / aren't** — She **isn't** a doctor.
• Boshqa fe'l bilan: **doesn't / don't** — She **doesn't** drive. (She isn't drive — xato)

## Transport
• by + transport: **by** bus, **by** car, **by** train, **by** plane, **by** metro, **by** taxi
• Piyoda: **on foot**
• Kutmoq — **wait for**: I wait **for** the bus.
• Uzoq — **far from**: The airport is far **from** the city.`,
    [
      q("She ___ drive.", ["doesn't", "don't", "isn't", "not"]),
      q("I ___ like the metro.", ["don't", "doesn't", "am not", "not"]),
      q("Qaysi gap to'g'ri?", ["He doesn't walk to work.", "He doesn't walks to work.", "He don't walk to work.", "He isn't walk to work."]),
      q("«They have a car» inkor shakli qaysi?", ["They don't have a car.", "They doesn't have a car.", "They haven't a car.", "They not have a car."]),
      q("«My sister has a bike» inkor shakli qaysi?", ["My sister doesn't have a bike.", "My sister doesn't has a bike.", "My sister don't have a bike.", "My sister isn't have a bike."]),
      q("I go to work ___ bus.", ["by", "on", "with", "in"]),
      q("We go to school ___ foot.", ["on", "by", "with", "at"]),
      q("I wait ___ the bus.", ["for", "to", "on", "—"]),
      q("Qaysi gap to'g'ri?", ["She isn't a doctor.", "She doesn't a doctor.", "She don't a doctor.", "She not a doctor."], "to be bilan — isn't."),
      q("The train ___ stop here.", ["doesn't", "don't", "isn't", "aren't"]),
    ]
  ),

  "A1-12": rule(
    "Present Simple: so'roq gap · kun tartibi",
    `## Do va Does
So'roq gap yordamchi fe'l bilan boshlanadi:
• **Do** + I / you / we / they + fe'l: **Do you** get up early?
• **Does** + he / she / it + fe'l: **Does she** work at night?
• Does dan keyin fe'l **-s siz** bo'ladi: Does she **work**? (Does she works — xato)

## Qisqa javob
• Do you…? — **Yes, I do.** / **No, I don't.**
• Does he…? — **Yes, he does.** / **No, he doesn't.**
• Javobda asosiy fe'l takrorlanmaydi: «Yes, I like» — xato.

## Vaqt predloglari
• Soat bilan — **at**: at seven o'clock, at half past eight
• Kun qismlari — **in the**: in the morning, in the afternoon, in the evening
• Lekin: **at night**, **at the weekend**
• **go home** — «to» kerak emas (go to home — xato).

## Kun tartibi iboralari
get up, have breakfast, have a shower, go to work, have lunch, go home, have dinner, do homework, watch TV, go to bed.
→ I get up at seven. **Then** I have breakfast.

## Do'konda
→ **How much** is this? / How much **are** these apples?
→ Can I pay **by card**? — Sorry, only **cash**.
→ **Here you are.** — Marhamat (biror narsa berganda).`,
    [
      q("___ she work at night?", ["Does", "Do", "Is", "Has"]),
      q("___ you like tea?", ["Do", "Does", "Are", "Is"]),
      q("Do you get up early? (✓)", ["Yes, I do.", "Yes, I get.", "Yes, I am.", "Yes, I does."]),
      q("Does he drive? (✗)", ["No, he doesn't.", "No, he don't.", "No, he isn't.", "No, he doesn't drive it."]),
      q("Qaysi gap to'g'ri?", ["Does she play tennis?", "Does she plays tennis?", "Do she play tennis?", "She does play tennis?"]),
      q("I get up ___ seven o'clock.", ["at", "in", "on", "to"]),
      q("We watch TV ___ the evening.", ["in", "at", "on", "to"]),
      q("Qaysi biri to'g'ri?", ["I go home at six.", "I go to home at six.", "I go at home at six.", "I home go at six."]),
      q("Narxni qanday so'raymiz?", ["How much is it?", "How many is it?", "How price is it?", "What much is it?"]),
      q("Sotuvchiga pul berayotib nima deysiz?", ["Here you are.", "Here are you.", "You are here.", "Take you."]),
    ]
  ),

  "A1-13": rule(
    "Chastota ravishlari · and, but, because",
    `## Qanchalik tez-tez?
• **always** — doim (100%)
• **usually** — odatda (80%)
• **often** — tez-tez (60%)
• **sometimes** — ba'zan (30%)
• **never** — hech qachon (0%)

## Gapdagi o'rni
• Oddiy fe'ldan **oldin**: I **always** wear jeans. She **never** drinks coffee.
• **am / is / are** dan **keyin**: He **is never** late. I'**m usually** tired on Monday.
• **never** — o'zi inkor, unga don't qo'shilmaydi: I never wear a tie. (I never don't — xato)

## Gaplarni bog'lash
• **and** — va (qo'shimcha fikr): I like jeans **and** T-shirts.
• **but** — lekin (qarama-qarshi fikr): It's cold, **but** I don't wear a coat.
• **because** — chunki (sabab): I wear a coat **because** it's cold.

## Kiyim va ranglar
• **trousers, jeans, shoes, clothes** — doim ko'plikda: My jeans **are** blue.
• Rang — sifat, otdan oldin keladi va o'zgarmaydi: a **black** jacket, black jacket**s**.
• Britancha imlo: **colour** (amerikancha — color).`,
    [
      q("I ___ wear jeans. (100%)", ["always", "never", "sometimes", "often"]),
      q("Qaysi gap to'g'ri?", ["She is never late.", "She never is late.", "She is late never.", "Never she is late."]),
      q("Qaysi gap to'g'ri?", ["I usually wear a dress.", "I wear usually a dress.", "I usually am wear a dress.", "Usually I a dress wear."]),
      q("I wear a coat ___ it's cold.", ["because", "but", "and", "so"]),
      q("It's cold, ___ I don't wear a coat.", ["but", "because", "and", "or"]),
      q("My jeans ___ blue.", ["are", "is", "am", "be"]),
      q("«sometimes» qanchalik tez-tez?", ["Ba'zan", "Doim", "Hech qachon", "Odatda"]),
      q("Qaysi gap to'g'ri?", ["I never wear a tie.", "I never don't wear a tie.", "I don't never wear a tie.", "I wear never a tie."]),
      q("Qaysi biri to'g'ri?", ["a black jacket", "a jacket black", "a blacks jacket", "black a jacket"]),
      q("Britancha imloda «rang» qanday yoziladi?", ["colour", "color", "colur", "coulor"]),
    ]
  ),

  "A1-14": rule(
    "Wh- savollar",
    `## So'roq so'zlari
• **What** — nima · **Who** — kim · **Where** — qayerda
• **When** — qachon · **Why** — nega · **Which** — qaysi
• **How** — qanday · **How many** — nechta · **How long** — qancha uzun / qancha vaqt
• **How often** — qanchalik tez-tez · **How far** — qancha uzoq
• **What time** — soat nechada · **What colour** — qanday rangda · **What kind of** — qanaqa

## Oddiy fe'l bilan
**So'roq so'zi + do / does + ega + fe'l**
→ Where **do** you live?
→ What time **does** the museum **open**? (opens emas!)

## to be bilan
**So'roq so'zi + am / is / are + ega**
→ Where **is** the station?
→ How tall **is** the tower? (sifat bilan doim to be)

## Javoblar
• Why…? — **Because** …: Why do you like it? — Because it's beautiful.
• How many…? — son: How many floors? — Twenty.
• **How many** — sanaladigan (floors, people), **How much** — narx yoki sanalmaydigan (money).`,
    [
      q("___ does the museum open? — At nine.", ["When", "Why", "Who", "Which"]),
      q("Qaysi savol to'g'ri?", ["Where does she live?", "Where she lives?", "Where does she lives?", "Where do she live?"]),
      q("Qaysi savol to'g'ri?", ["How tall is the tower?", "How tall does the tower?", "How tall the tower is?", "How does tall the tower?"]),
      q("Why do you like Samarkand? — ___", ["Because it's beautiful.", "But it's beautiful.", "Yes, I do.", "At nine."]),
      q("___ floors are there? — Twelve.", ["How many", "How much", "How long", "How far"]),
      q("___ bus goes to the centre? — Number 5.", ["Which", "Who", "Why", "When"]),
      q("___ is the airport? — Twenty kilometres.", ["How far", "How long", "How many", "How often"]),
      q("___ do you go to the gym? — Twice a week.", ["How often", "How many", "When", "What time"]),
      q("What time ___ the train leave?", ["does", "do", "is", "are"]),
      q("«Qaysi» inglizcha qanday?", ["which", "why", "who", "what"]),
    ]
  ),

  "A1-15": rule(
    "Present Simple — hammasi bir joyda · very / really",
    `## Present Simple: to'liq jadval
• **Darak:** I/you/we/they **work** · he/she/it **works**
• **Inkor:** I/you/we/they **don't work** · he/she/it **doesn't work**
• **So'roq:** **Do** you **work**? · **Does** she **work**?
• **Qisqa javob:** Yes, I **do**. / No, she **doesn't**.
• **Wh- savol:** Where **does** he **work**? What time **do** you **get up**?
Esda tuting: -s faqat bitta joyda bo'ladi. «She doesn't works», «Does she works» — xato.

## very / really + sifat
• **very** — juda: It's **very** cold.
• **really** — rostdan, juda (og'zaki nutqda ko'p): This film is **really** good.
• **look** + sifat — …ko'rinmoq: You **look great**! (greatly emas)

## Noto'g'ri ko'plik
• foot → **feet**, tooth → **teeth**
• man → men, woman → women, child → children
• **hair** — sanalmaydigan ot: She has **long hair**. (a long hair — xato)

## Vokzalda
→ A **single** / **return** ticket to Samarkand, please.
→ Which **platform** does the train leave from?
→ When is the **next** / **last** train?
→ Do I **change** trains? How do I **get to** the station?`,
    [
      q("She ___ wear glasses. (inkor)", ["doesn't", "don't", "isn't", "not"]),
      q("Qaysi savol to'g'ri?", ["Where does he work?", "Where does he works?", "Where he works?", "Where do he work?"]),
      q("Does your brother have a beard? (✓)", ["Yes, he does.", "Yes, he has.", "Yes, he is.", "Yes, he do."]),
      q("«foot» ning ko'pligi qaysi?", ["feet", "foots", "feets", "foot"]),
      q("«tooth» ning ko'pligi qaysi?", ["teeth", "tooths", "teeths", "toothes"]),
      q("Qaysi gap to'g'ri?", ["She has long hair.", "She has a long hair.", "She has long hairs.", "She long hair has."]),
      q("You look ___!", ["great", "greatly", "very greatly", "greatness"]),
      q("Borib-qaytish chiptasi qanday ataladi?", ["return ticket", "single ticket", "next ticket", "last ticket"]),
      q("___ do I get to the station?", ["How", "What", "Which", "Who"]),
      q("This film is ___ good.", ["really", "real", "much", "very much"]),
    ]
  ),

  "A1-16": rule(
    "there is / there are · some / any",
    `## …bor
O'zbekchada «Uyim yaqinida park bor» deymiz. Inglizchada biror joyda nimadir borligini **there is / there are** bilan aytamiz:
• Bitta: **There is** (There's) a park near my house.
• Ko'p: **There are** two cinemas in our town.
Gap «There is / There are» bilan boshlanadi, joy esa oxirida keladi.

## Inkor
• **There isn't a** museum here. — Bu yerda muzey yo'q.
• **There aren't any** banks near here. — Yaqin atrofda birorta bank yo'q.

## some va any
• Darak gapda — **some**: There are **some** cafes in the square.
• Inkor va so'roqda — **any**: There aren't **any** shops. Are there **any** parks?
• **a lot of** — ko'p: There are **a lot of** people. (a lot people — xato)

## «It is» bilan adashtirmang
• **There is** a fountain in the square. — Maydonda favvora **bor**.
• **It is** a big fountain. — U katta favvora.
• **There** (bor / u yerda) va **their** (ularning) — boshqa-boshqa so'zlar.

## Joy
• **opposite** the bank — bank qarshisida (opposite **of** — xato)
• **on the corner** — muyulishda
• **next to**, **near**, **behind**, **in front of** — 6-darsdagidek.`,
    [
      q("___ a park near my house.", ["There is", "There are", "It is", "Their is"]),
      q("___ two cinemas in our town.", ["There are", "There is", "They are", "It are"]),
      q("There aren't ___ banks here.", ["any", "some", "a", "no"]),
      q("There are ___ cafes in the square.", ["some", "any", "a", "an"]),
      q("Qaysi gap to'g'ri?", ["There are a lot of people.", "There are a lot people.", "There is a lot of people.", "It is a lot of people."]),
      q("Are there ___ supermarkets near here?", ["any", "some", "a", "the"]),
      q("Qaysi gap to'g'ri?", ["The bank is opposite the hotel.", "The bank is opposite of the hotel.", "The bank is opposite to hotel.", "The bank opposite is the hotel."]),
      q("«Bu yerda muzey yo'q» inglizcha qanday?", ["There isn't a museum here.", "There aren't a museum here.", "It isn't a museum here.", "There isn't any museum here are."]),
      q("The cafe is ___ the corner.", ["on", "in", "at", "to"]),
      q("Qaysi gap to'g'ri?", ["There is a gym next to my school.", "Their is a gym next to my school.", "They is a gym next to my school.", "It there is a gym."]),
    ]
  ),

  "A1-17": rule(
    "Is there…? Are there…?",
    `## So'roq gap
**there is / there are** da so'roq uchun **is / are** oldinga chiqadi:
• Bitta: **Is there a** gym in the hotel? — Mehmonxonada sport zali bormi?
• Ko'p: **Are there any** towels in the room? — Xonada sochiqlar bormi?
So'roqda ko'plik bilan **any** ishlatiladi (some emas).

## Qisqa javob
• Is there…? — **Yes, there is.** / **No, there isn't.**
• Are there…? — **Yes, there are.** / **No, there aren't.**
• «Yes, it is» — xato: javob ham **there** bilan bo'ladi.

## Nechta bor?
→ **How many** rooms **are there**? — There are twelve.
How many dan keyin ot doim ko'plikda, fe'l esa **are there**.

## Mehmonxonada foydali iboralar
→ I'd like to **book** a double room for two nights.
→ How much is it **per night**? — Is breakfast **free**?
→ The air conditioning **doesn't work**. / The TV **is broken**.
→ Can I have another **towel / pillow**, please?
→ What time is **check-in** / **check-out**?`,
    [
      q("___ a gym in the hotel?", ["Is there", "Are there", "There is", "Is it"]),
      q("___ any towels in the room?", ["Are there", "Is there", "There are", "Are they"]),
      q("Is there a pool? (✓)", ["Yes, there is.", "Yes, it is.", "Yes, there are.", "Yes, is there."]),
      q("Are there any rooms available? (✗)", ["No, there aren't.", "No, there isn't.", "No, they aren't.", "No, aren't there."]),
      q("How many rooms ___?", ["are there", "is there", "there are", "there is"]),
      q("Are there ___ blankets in the cupboard?", ["any", "some", "a", "an"]),
      q("Qaysi gap to'g'ri?", ["It's fifty dollars per night.", "It's fifty dollars for night per.", "It's fifty dollars per a night.", "It's per night fifty dollars."]),
      q("«Konditsioner ishlamayapti» inglizcha qanday?", ["The air conditioning doesn't work.", "The air conditioning isn't work.", "The air conditioning don't work.", "The air conditioning no work."]),
      q("«bepul» inglizcha qanday?", ["free", "broken", "available", "only"]),
      q("Qaysi gap to'g'ri?", ["I'd like to book a room.", "I'd like book a room.", "I like to booking a room.", "I'd like to booking a room."]),
    ]
  ),

  "A1-18": rule(
    "each va all the · uy-joy",
    `## each — har bir (alohida)
• **each** + **birlik** ot + **birlik** fe'l
→ **Each room has** a window. — Har bir xonaning derazasi bor.
→ **Each student is** in the classroom.

## all the — barcha (hammasi birga)
• **all the** + **ko'plik** ot + **ko'plik** fe'l
→ **All the rooms have** curtains. — Barcha xonalarda parda bor.
→ **All the beds are** comfortable.
• Sanalmaydigan ot bilan: **All the furniture is** new.

## Diqqat
• Each rooms — xato (each dan keyin birlik).
• All rooms the — xato (to'g'ri tartib: **all the** rooms).
• **furniture** — sanalmaydigan ot: furnitures — xato.
• shelf → **shelves** (f → ves).

## Joy
• **upstairs** — yuqori qavatda, **downstairs** — pastki qavatda (oxirida -s!)
• Xonalar: kitchen, living room, bedroom, dining room, bathroom, hall, garage.

## Muammolar
→ The heating **doesn't work**. The fridge **is very noisy**. The lamp **is broken**.`,
    [
      q("___ room has a lamp.", ["Each", "All the", "All", "Every the"]),
      q("___ rooms have curtains.", ["All the", "Each", "Each the", "All of"]),
      q("Each bedroom ___ a wardrobe.", ["has", "have", "are", "do"]),
      q("All the beds ___ comfortable.", ["are", "is", "has", "does"]),
      q("Qaysi gap to'g'ri?", ["All the furniture is new.", "All the furnitures are new.", "Each furnitures is new.", "All furniture the is new."]),
      q("«shelf» ning ko'pligi qaysi?", ["shelves", "shelfs", "shelfes", "shelf"]),
      q("Yotoqxonalar yuqori qavatda — The bedrooms are ___.", ["upstairs", "upstair", "up stair", "downstairs"]),
      q("Sut qayerda saqlanadi?", ["in the fridge", "in the cooker", "in the wardrobe", "in the garage"]),
      q("«cooker» nima?", ["Plita", "Oshpaz", "Muzlatgich", "Shkaf"]),
      q("Qaysi gap to'g'ri?", ["The heating doesn't work.", "The heating doesn't works.", "The heating isn't work.", "The heating not work."]),
    ]
  ),

  "A1-19": rule(
    "can / can't — qobiliyat",
    `## …a olaman
**can** — biror ishni qila olishni bildiradi:
→ I **can** swim. — Men suza olaman.
→ She **can't** drive. — U mashina hayday olmaydi.

## Shakli hamma uchun bir xil
• I / you / he / she / it / we / they **can**
• can **-s olmaydi**: she can (she cans — xato)
• can dan keyin fe'l **to siz** va **-s siz**: He can **drive**. (can to drive, can drives — xato)

## Inkor va so'roq
• can not → **can't** (yoki cannot): I can't sing.
• So'roq — can oldinga chiqadi: **Can** you **swim**?
• Qisqa javob: **Yes, I can.** / **No, I can't.**
• «I don't can» — xato.

## Talaffuz
• Gapda **can** qisqa va urg'usiz: I can swim [ay kən suim]
• **can't** cho'ziq va urg'uli: I can't swim [ay **kaant** suim]

## Qanchalik yaxshi?
• very well — juda yaxshi · quite well — ancha yaxshi
• a little — biroz · not … at all — umuman
→ I can speak **a little** French. I can't sing **at all**.

## O'yin va musiqa
• Sport, o'yin — artiklsiz: play **chess**, play **tennis**
• Musiqa asbobi — **the** bilan: play **the guitar**, play **the piano**`,
    [
      q("She ___ swim.", ["can", "cans", "can to", "is can"]),
      q("Qaysi gap to'g'ri?", ["He can drive.", "He can drives.", "He can to drive.", "He cans drive."]),
      q("«Men qo'shiq ayta olmayman» inglizcha qanday?", ["I can't sing.", "I don't can sing.", "I can't to sing.", "I not can sing."]),
      q("Can you play the guitar? (✓)", ["Yes, I can.", "Yes, I do.", "Yes, I play.", "Yes, I can play it can."]),
      q("Can she dance? (✗)", ["No, she can't.", "No, she doesn't.", "No, she isn't.", "No, she can."]),
      q("Qaysi biri to'g'ri?", ["play the piano", "play piano the", "play a piano chess", "play pianos the"]),
      q("Qaysi biri to'g'ri?", ["play chess", "play the chess", "play a chess", "play chesses"]),
      q("I can't swim ___ all.", ["at", "a", "in", "for"]),
      q("«biroz» inglizcha qanday?", ["a little", "at all", "quite", "very well"]),
      q("Gapda qaysi biri cho'ziq va urg'u bilan aytiladi?", ["can't", "can", "Ikkalasi bir xil", "Hech biri"]),
    ]
  ),

  "A1-20": rule(
    "Can you…? Could you…? · ravishlar",
    `## Iltimos
• **Can you** close the window, please? — oddiy iltimos
• **Could you** close the window, please? — muloyimroq iltimos
• Ruxsat so'rash: **Can I** borrow your pen?
can / could dan keyin fe'l to siz keladi.

## Javoblar
• Ha: **Sure.** / **Of course.** / **Certainly.** (rasmiy)
• Yo'q: **I'm afraid I can't.** / **Sorry, I can't.**

## borrow va lend
• **borrow** — olib turmoq: Can **I borrow** your pen?
• **lend** — berib turmoq: Can **you lend me** your pen?

## Harakat ravishlari
Ravish fe'lni tasvirlaydi: qanday qiladi?
• Sifat **+ ly**: quick → quick**ly**, careful → careful**ly**, quiet → quiet**ly**
• **-y → -ily**: easy → eas**ily**, happy → happ**ily**
• Noto'g'ri: good → **well**; hard → **hard**; fast → **fast**
• Ravish fe'ldan (yoki obyektdan) **keyin**: She speaks English **well**. (speaks well English — xato)

## Sifat va ravish
• Sifat otni tasvirlaydi: a **careful** driver, Your English is **good**.
• Ravish fe'lni tasvirlaydi: He drives **carefully**. You speak English **well**.`,
    [
      q("___ you help me, please? (muloyim)", ["Could", "Do", "Are", "Does"]),
      q("Qaysi gap to'g'ri?", ["Can you open the window?", "Can you to open the window?", "Can you opening the window?", "You can open the window please?"]),
      q("Can I ___ your pen?", ["borrow", "lend", "give", "take me"]),
      q("Could you ___ me your phone?", ["lend", "borrow", "take", "have"]),
      q("Muloyim rad etish qaysi?", ["I'm afraid I can't.", "No, I can't help, go.", "Of course not.", "Certainly."]),
      q("«careful» dan ravish qaysi?", ["carefully", "carefuly", "carefull", "careful"]),
      q("«easy» dan ravish qaysi?", ["easily", "easyly", "easly", "easy"]),
      q("«good» dan ravish qaysi?", ["well", "goodly", "good", "better"]),
      q("Qaysi gap to'g'ri?", ["She speaks English well.", "She speaks well English.", "She speaks English good.", "She well speaks English."]),
      q("He works very ___.", ["hard", "hardly", "hardily", "harder"]),
    ]
  ),

  "A1-21": rule(
    "like / love / hate + -ing",
    `## Nimani yoqtirasiz?
Mashg'ulot haqida gapirganda bu fe'llardan keyin ikkinchi fe'l **-ing** bilan keladi:
• **love** + -ing — juda yoqtiraman: I **love cooking**.
• **like** + -ing — yoqtiraman: She **likes reading**.
• **enjoy** + -ing — rohatlanaman: We **enjoy walking**.
• **don't mind** + -ing — qarshi emasman: I **don't mind cleaning**.
• **hate** + -ing — yomon ko'raman: He **hates getting up** early.
O'zbekchadagi «…ishni» (o'qishni, pishirishni) qo'shimchasiga o'xshaydi.

## -ing imlosi
• Odatda + ing: read → reading, play → playing
• -e tushib qoladi: make → mak**ing**, dance → danc**ing**
• Qisqa so'zda oxirgi undosh ikkilanadi: swim → swi**mm**ing, run → ru**nn**ing, shop → sho**pp**ing
• Britancha: travel → trave**ll**ing

## Predlogdan keyin ham -ing
• be **good at** + -ing: She's good at **drawing**.
• be **interested in** + -ing: I'm interested in **taking** photos.

## -ed va -ing sifatlar
• **bored** — zerikkan (odam): I'm bored.
• **boring** — zerikarli (narsa): The film is boring.
• Xuddi shunday: interested / interesting, excited / exciting, relaxed / relaxing.`,
    [
      q("I love ___ for my family.", ["cooking", "cook", "to cooking", "cooks"]),
      q("She enjoys ___ in the park.", ["walking", "walk", "walks", "to walking"]),
      q("«swim» ning -ing shakli qaysi?", ["swimming", "swiming", "swimeing", "swimmin"]),
      q("«make» ning -ing shakli qaysi?", ["making", "makeing", "makking", "make"]),
      q("He's good ___ drawing.", ["at", "in", "on", "for"]),
      q("I'm interested ___ history.", ["in", "at", "on", "with"]),
      q("This film is very ___.", ["boring", "bored", "bore", "bores"]),
      q("I'm ___. Let's go out!", ["bored", "boring", "bore", "bores"]),
      q("Qaysi gap to'g'ri?", ["I don't mind washing the dishes.", "I don't mind wash the dishes.", "I don't minding wash the dishes.", "I not mind washing the dishes."]),
      q("Qaysi gap to'g'ri?", ["I prefer tea to coffee.", "I prefer tea than coffee.", "I prefer tea from coffee.", "I prefer tea as coffee."]),
    ]
  ),

  "A1-22": rule(
    "was / were · sanalar",
    `## to be ning o'tgan zamoni
• I / he / she / it **was** — edim, edi
• you / we / they **were** — eding(iz), edik, edi(lar)
→ I **was** a shy child. — Men uyatchan bola edim.
→ My parents **were** teachers. — Ota-onam o'qituvchi edi.

## Inkor va so'roq
• was not → **wasn't**, were not → **weren't**
→ She **wasn't** at school yesterday.
• So'roq: **Was** he…? / **Were** you…?
• Qisqa javob: Yes, I **was**. / No, they **weren't**.

## O'tgan zamon so'zlari
yesterday — kecha, when I was a child — bolaligimda
→ **Yesterday** I **was** at home. (Yesterday I am — xato)

## Tartib sonlar
1st — fir**st**, 2nd — seco**nd**, 3rd — thi**rd**, 4th — four**th**, 5th — fif**th**, 8th — eigh**th**, 9th — nin**th**, 12th — twelf**th**, 20th — twentie**th**, 21st — twenty-fir**st**

## Sana
• Kun — **on**: on the 5th of May (on the fifth of May)
• Oy — **in**: in May · Yil — **in**: in 2008
• Oy nomlari doim **bosh harf** bilan: January, March.
• What's the date today? — It's the twenty-fifth of October.`,
    [
      q("I ___ at home yesterday.", ["was", "were", "am", "is"]),
      q("My parents ___ teachers.", ["were", "was", "are", "is"]),
      q("___ you at school yesterday?", ["Were", "Was", "Are", "Did"]),
      q("Was she late? (✗)", ["No, she wasn't.", "No, she weren't.", "No, she isn't.", "No, she didn't."]),
      q("My birthday is ___ the fifth of May.", ["on", "in", "at", "of"]),
      q("I was born ___ 2008.", ["in", "on", "at", "from"]),
      q("«3rd» qanday yoziladi?", ["third", "threeth", "thirdth", "three"]),
      q("«12th» qanday yoziladi?", ["twelfth", "twelveth", "twelfeth", "twelf"]),
      q("Qaysi oy to'g'ri yozilgan?", ["February", "february", "Febuary", "Februar"]),
      q("Qaysi gap to'g'ri?", ["Yesterday I was ill.", "Yesterday I am ill.", "Yesterday I were ill.", "Yesterday I ill."]),
    ]
  ),

  "A1-23": rule(
    "Past Simple: to'g'ri fe'llar (-ed)",
    `**Past Simple** — o'tmishda bo'lib o'tgan va tugagan ish:
→ I **worked** in a bank. — Bankda ishladim.
→ Navoi **lived** in Herat. — Navoiy Hirotda yashagan.

## Shakli hamma uchun bir xil
• I / you / he / she / we / they **worked**
• He-she uchun -s **yo'q**: she worked (she workeds — xato)

## -ed imlosi
• Odatda + ed: work → work**ed**, play → play**ed**
• -e bilan tugasa + d: live → liv**ed**, move → mov**ed**
• Undosh + y → **ied**: study → stud**ied**
• Qisqa so'zda undosh ikkilanadi: stop → sto**pp**ed
• Britancha: travel → trave**ll**ed

## -ed qanday o'qiladi
• /t/ — worked, finished, watched, stopped
• /d/ — lived, played, moved
• /ɪd/ — wanted, started, visited (faqat **t** va **d** dan keyin)

## Tug'ilgan, vafot etgan
• **was born** — tug'ilgan: Amir Temur **was born** in 1336. (borned — xato)
• **died** — vafot etgan: Navoi **died** in 1501.

## O'tgan zamonga ishora
yesterday, in 2015, last year, in the fifteenth **century** (asr bilan — in)`,
    [
      q("I ___ in Samarkand as a child. (live)", ["lived", "liveed", "live", "living"]),
      q("She ___ medicine. (study)", ["studied", "studyed", "studies", "studdied"]),
      q("The bus ___ near the park. (stop)", ["stopped", "stoped", "stops", "stopping"]),
      q("Qaysi gap to'g'ri?", ["He worked in a factory.", "He workeds in a factory.", "He was work in a factory.", "He work in a factory yesterday."]),
      q("Qaysi gap to'g'ri?", ["Navoi was born in 1441.", "Navoi borned in 1441.", "Navoi is born in 1441.", "Navoi was borned in 1441."]),
      q("«wanted» oxiri qanday o'qiladi?", ["/ɪd/", "/t/", "/d/", "o'qilmaydi"]),
      q("«worked» oxiri qanday o'qiladi?", ["/t/", "/d/", "/ɪd/", "o'qilmaydi"]),
      q("«travel» ning o'tgan zamoni (britancha)?", ["travelled", "traveled", "travelt", "travelling"]),
      q("Ulugh Beg lived ___ the fifteenth century.", ["in", "on", "at", "for"]),
      q("«century» nima?", ["Asr (100 yil)", "Ming yil", "O'n yil", "Bir yil"]),
    ]
  ),

  "A1-24": rule(
    "Obyekt olmoshlari · o'tgan zamon iboralari",
    `## Ega va obyekt
Gapdagi o'rniga qarab olmosh shakli o'zgaradi:
• Ega (kim?): **I, you, he, she, it, we, they**
• Obyekt (kimni? kimga?): **me, you, him, her, it, us, them**
→ **He** called **me**. — U menga qo'ng'iroq qildi.
→ **I** called **him**. — Men unga qo'ng'iroq qildim.

## Qayerda ishlatiladi
• Fe'ldan keyin: Can you help **me**? I visited **them**.
• Predlogdan keyin: This present is for **her**. Come with **us**!
• «Me and Aziz went…» — og'zaki, lekin to'g'risi: **Aziz and I** went…

## O'tgan zamon iboralari
• **yesterday** — kecha · **the day before yesterday** — o'tgan kuni
• **last night** — kecha kechqurun · **this morning** — bugun ertalab
• **last week / month / year** — o'tgan hafta / oy / yil
• **last** dan oldin predlog va artikl kerak emas: in last week, the last night — xato.

## Bayram iboralari
• Happy birthday! / Happy New Year! — tabrik
• Congratulations! / Well done! — muvaffaqiyat uchun
• Good luck! / Have fun! — tilak
• Enjoy your meal! — yoqimli ishtaha
• Qiziqish bildirish: Really? / No way! / How interesting! / That's great! / What a pity!`,
    [
      q("Can you help ___?", ["me", "I", "my", "mine"]),
      q("I called ___ yesterday. (he)", ["him", "he", "his", "her"]),
      q("This present is for ___. (she)", ["her", "she", "hers", "him"]),
      q("Our teacher helped ___. (we)", ["us", "we", "our", "them"]),
      q("I visited ___ last week. (they)", ["them", "they", "their", "us"]),
      q("Qaysi gap to'g'ri?", ["Aziz and I went to the party.", "Me and Aziz went to the party.", "Aziz and me went to the party.", "I and Aziz went to party."]),
      q("Qaysi ibora to'g'ri?", ["last week", "in last week", "the last week ago", "on last week"]),
      q("Do'stingiz imtihondan o'tdi. Nima deysiz?", ["Well done!", "What a pity!", "Enjoy your meal!", "Have fun!"]),
      q("Do'stingiz kela olmaydi. Nima deysiz?", ["What a pity!", "Well done!", "No problem!", "Happy New Year!"]),
      q("«o'tgan kuni» inglizcha qanday?", ["the day before yesterday", "last yesterday", "yesterday before", "the day last"]),
    ]
  ),
};
