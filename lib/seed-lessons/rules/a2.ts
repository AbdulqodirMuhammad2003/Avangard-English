/**
 * A2 darslarining «Qoida» bo'limi: lug'atdan keyin, mashqlardan oldin
 * ko'rsatiladigan sodda grammatika tushuntirishi (o'zbek tilida) va shu
 * qoida bo'yicha 10 ta test. Matn belgilari: «## » — sarlavha, «• » —
 * ro'yxat, «→ » — misol, «**…**» — qalin. Testlarda to'g'ri javob birinchi
 * yoziladi (seed paytida aralashtiriladi). Namuna:
 *
 *   "A1-01": rule("To be: am / is / are", `...`, [q("I ___ a student.", ["am", "is", "are"]), ...]),
 */
import { q, rule, type LessonRule } from "./types";

export const A2_RULES: Record<string, LessonRule> = {
  "A2-01": rule(
    "to be — to'liq takror · millat va tillar",
    `A1 da to be ni o'rgandik. A2 ni shu bilan boshlaymiz — endi hamma shakllarni birga, millat va tillar bilan.

## Darak gap
• **I am** (I'm) · **he / she / it is** (he's, she's, it's) · **you / we / they are** (you're, we're, they're)
→ I'm Uzbek. · My wife's Canadian. · Our children are British.

## Inkor gap
• I'm **not** · he / she / it **isn't** · you / we / they **aren't**
• «amn't» shakli **yo'q**: I'm not tired.
→ My boss isn't American. · We aren't English — we're Scottish.

## So'roq gap va qisqa javob
• **Am** I…? · **Is** he / she / it…? · **Are** you / we / they…?
• Qisqa javob: Yes, I **am**. / No, I'**m not**. · Yes, she **is**. / No, she **isn't**.
• «Ha» javobida qisqartma ishlatilmaydi: Yes, I am (Yes, I'm — xato).
→ Are you and your wife from England? — No, we aren't.

## Mamlakat → millat → til
• Spain → Spanish → Spanish · Italy → Italian → Italian · Poland → Polish → Polish
• the UK → **British** → English · the USA → **American** → English
• Brazil → Brazilian → **Portuguese** · Egypt → Egyptian → **Arabic**
• Millat va tillar ham **bosh harf** bilan yoziladi: She speaks English (english — xato).
• Urg'u ko'chishi mumkin: **IT**aly → i**TAL**ian, **CA**nada → ca**NA**dian.`,
    [
      q("My parents ___ from Bukhara.", ["are", "is", "am", "be"]),
      q("I ___ Russian. I'm Uzbek.", ["'m not", "amn't", "isn't", "not"]),
      q("___ your teacher British?", ["Is", "Are", "Am", "Do"]),
      q("Are you Polish? — Yes, ___.", ["I am", "I'm", "I do", "I is"]),
      q("Is she Italian? — No, she ___.", ["isn't", "aren't", "not", "doesn't"]),
      q("People in Brazil speak ___.", ["Portuguese", "Brazilian", "Spanish", "Brazil"]),
      q("Marco is from Italy. He's ___.", ["Italian", "Italy", "Italish", "italian"]),
      q("Qaysi gap to'g'ri yozilgan?", ["We speak English and Uzbek.", "We speak english and uzbek.", "We speak English and uzbek.", "we speak English and Uzbek."]),
      q("A person from the UK is ___.", ["British", "English only", "UKish", "Britain"]),
      q("Qaysi so'zda urg'u 2-bo'g'inda?", ["Italian", "Italy", "Mexico", "Arabic"]),
    ]
  ),
  "A2-02": rule(
    "Egalik: my, your, his… va 's",
    `## Egalik olmoshlari
Kishilik olmoshi → egalik olmoshi (otdan oldin keladi):
• I → **my** · you → **your** · he → **his** · she → **her**
• it → **its** · we → **our** · they → **their**
→ Mohammed and **his** wife have seven boys. **Their** sons are twins.

## Adashtirmang!
• **its** (uning — narsa, hayvon) ≠ **it's** (it is): The village is small, but its people are friendly.
• **their** (ularning) ≠ **they're** (they are) ≠ **there** (u yerda)
• **your** (sizning) ≠ **you're** (you are)

## Egalik 's
Kimgadir tegishli ekanini ko'rsatadi:
• Ism / ot + **'s**: Zafar**'s** wife · my sister**'s** name · the children**'s** toys
• -s bilan tugagan ko'plikka faqat **'**: my parent**s'** car
• Ikki kishiga tegishli bo'lsa, 's oxirgisiga: Tariq and Rafina**'s** daughter
• Murakkab so'zda — oxiriga: my brother-in-law**'s** job

## 's = is bo'lishi ham mumkin
→ Zafar**'s** wife (Zafarning xotini) · Zafar**'s** a doctor (Zafar — shifokor)

## Qayta so'rash
• Sorry, can you repeat that, please? · Pardon?
• How do you spell that? · How do you spell 'Yusupov'?`,
    [
      q("This is Aziz and ___ wife.", ["his", "her", "he", "their"]),
      q("My grandparents live with ___ son.", ["their", "they're", "there", "them"]),
      q("The dog is in ___ bed.", ["its", "it's", "it", "his'"]),
      q("Bu Malikaning telefoni: This is ___ phone.", ["Malika's", "Malikas", "Malika", "Malikas'"]),
      q("Ota-onamning mashinasi: my ___ car.", ["parents'", "parent's", "parents's", "parents"]),
      q("Zafar's a doctor. Bu yerda 's — …", ["is", "egalik", "has", "us"]),
      q("___ you married?", ["Are", "Your", "You're", "Our"]),
      q("Bu gapni tushunmadingiz. Nima deysiz?", ["Sorry, can you repeat that, please?", "Sorry, you repeat?", "Repeat me, please.", "How do you repeat?"]),
      q("We love ___ teacher.", ["our", "us", "we", "ours'"]),
      q("Qaysi to'g'ri?", ["my brother-in-law's car", "my brother's-in-law car", "my brothers-in-law car", "my brother-in-laws car"]),
    ]
  ),
  "A2-03": rule(
    "Present Simple · chastota ravishlari",
    `## Present Simple — qachon?
Takrorlanadigan ishlar, odatlar va doimiy holatlar:
→ Melanie **watches** penguins. · We **visit** different islands.

## he / she / it + -s
• Ko'pchilik fe'l: work → work**s**, live → live**s**
• -ch, -sh, -s, -x, -o: watch → watch**es**, wash → wash**es**, relax → relax**es**, go → go**es**, do → do**es**
• undosh + y: study → stud**ies**, fly → fl**ies** (lekin play → play**s**)
• have → **has**

## -s qanday o'qiladi?
• **/s/** — jarangsiz tovushdan keyin: cooks, makes, works
• **/z/** — jarangli tovush va unlidan keyin: plays, goes, lives
• **/ɪz/** — -ch, -sh, -s, -x, -ge dan keyin (qo'shimcha bo'g'in): teaches, relaxes, watches

## Chastota ravishlari
always (100 %) → usually → often → sometimes → rarely → **hardly ever** → never (0 %)
• Oddiy fe'ldan **oldin**: He **never works** alone.
• to be dan **keyin**: My job **is sometimes** dangerous.
• hardly ever = deyarli hech qachon (hardly never — xato).

## Iboralar — gap oxirida
• once a week · twice a day · three times a year · every day · from time to time
→ I go to the gym **twice a week**.`,
    [
      q("She ___ penguins.", ["watches", "watchs", "watch", "watchies"]),
      q("He ___ seals.", ["studies", "studys", "study", "studyes"]),
      q("My dad ___ a nap after lunch.", ["has", "haves", "have", "is have"]),
      q("Qaysi gap to'g'ri?", ["He never works alone.", "He works never alone.", "Never he works alone.", "He never work alone."]),
      q("Qaysi gap to'g'ri?", ["I'm usually tired.", "I usually am tired.", "Usually I tired.", "I'm tired usually always."]),
      q("Deyarli hech qachon — …", ["hardly ever", "hardly never", "rarely never", "ever hardly"]),
      q("Kuniga ikki marta — …", ["twice a day", "two a day", "twice in day", "two times in a day"]),
      q("«plays» oxiri qanday o'qiladi?", ["/z/", "/s/", "/ɪz/"]),
      q("«teaches» oxiri qanday o'qiladi?", ["/ɪz/", "/s/", "/z/"]),
      q("She ___ to bed late.", ["goes", "gos", "go", "going"]),
    ]
  ),
  "A2-04": rule(
    "Present Simple inkor · vaqtni aytish",
    `## Present Simple inkor gap
• I / you / we / they + **don't** (do not) + fe'l
• he / she / it + **doesn't** (does not) + fe'l
• doesn't dan keyin fe'l **-s olmaydi**: She doesn't like coffee (doesn't likes — xato).
→ Astronauts **don't sleep** in beds. · The sun **doesn't rise** once a day in space.

## to be bilan adashtirmang
• Sifat yoki ot bilan **am / is / are + not**: I'm not tired. · He isn't a doctor.
• Fe'l bilan **don't / doesn't**: I don't work. · He doesn't drive.

## Vaqtni aytish
• **past** — o'tdi: 3:05 five past three · 3:20 twenty past three · 3:30 half past three
• **to** — …ga qoldi: 3:40 twenty to four · 3:45 quarter to four · 3:55 five to four
• Soatning o'zi: three **o'clock**. 12:00 — **midday** / midnight.
• **a.m.** — ertalab (00:00–12:00), **p.m.** — tushdan keyin: The shop opens at 9 a.m.
• Talaffuz: past va to urg'usiz, **half** dagi l o'qilmaydi [haaf], **quarter** [kuoota].

## Fe'l + predlog
wait **for** · pay **for** · ask **for** · look **for** · think **about** · worry **about** · talk **to** · agree **with** · laugh **at** · depend **on**`,
    [
      q("She ___ have a lot of free time.", ["doesn't", "don't", "isn't", "not"]),
      q("Astronauts ___ wear special clothes.", ["don't", "doesn't", "aren't", "not"]),
      q("He doesn't ___ in a bed.", ["sleep", "sleeps", "sleeping", "to sleep"]),
      q("I ___ hungry.", ["'m not", "don't", "doesn't", "not"]),
      q("3:40 — It's ___.", ["twenty to four", "twenty past four", "forty past three", "twenty to three"]),
      q("6:15 — It's ___.", ["quarter past six", "quarter to six", "fifteen to six", "quarter past seven"]),
      q("Ertalab soat 8 — …", ["8 a.m.", "8 p.m.", "a.m. 8", "8 o'clock p.m."]),
      q("I wait ___ the bus.", ["for", "to", "at", "on"]),
      q("I agree ___ you.", ["with", "to", "for", "at"]),
      q("Don't worry ___ it.", ["about", "for", "on", "with"]),
    ]
  ),
  "A2-05": rule(
    "Taklif va uchrashuv · and, but, or, because",
    `## Taklif qilish
• **Are you free** (tonight)? — bo'shmisiz?
• **Would you like to** + fe'l…? → Would you like **to go** for a pizza?
• **Do you want to** + fe'l…? → Do you want **to see** a film?
• **Let's** + fe'l (to siz!): **Let's meet** at the station.
• **What time / Where shall we** + fe'l? → Where **shall we meet**?

## Rozilik
• Yes, **I'd love to**. · Yes, **that sounds nice**. · OK, see you then!

## Rad etish (odob bilan)
• **I'm sorry, but** I'm busy this evening.
• **Thanks, but I'm afraid** I have plans tonight.
• Rad etganda sababini ham ayting — bu odobli.

## Bog'lovchilar
• **and** — qo'shimcha: It has lots of parks **and** museums.
• **but** — zid fikr: It's beautiful, **but** it's very expensive.
• **or** — tanlov: You can go by bus **or** by metro.
• **because** — sabab: You need a car **because** the village is far.`,
    [
      q("Would you like ___ for a pizza?", ["to go", "go", "going", "goes"]),
      q("Let's ___ at the station.", ["meet", "to meet", "meeting", "meets"]),
      q("Where ___ we meet?", ["shall", "do", "are", "would"]),
      q("Taklifga rozilik bildiring:", ["Yes, I'd love to.", "Yes, I'd love.", "Yes, I like.", "Yes, I love to."]),
      q("Odob bilan rad eting:", ["Thanks, but I'm afraid I have plans.", "No. I don't want.", "No, I'm not free never.", "I'm afraid yes."]),
      q("It's a nice city, ___ it's very noisy.", ["but", "and", "or", "because"]),
      q("We can meet at the cafe ___ at the park.", ["or", "and", "but", "because"]),
      q("I live here ___ my job is here.", ["because", "but", "or", "so"]),
      q("Are you free ___?", ["tonight", "on tonight", "at tonight", "in tonight"]),
      q("Tashkent has great parks ___ cafes.", ["and", "but", "or", "because"]),
    ]
  ),
  "A2-06": rule(
    "Yes/no savollar: Is…? / Does…?",
    `## to be bilan savol
Ega oldiga **am / is / are** chiqadi:
→ **Are** you a pilot? — Yes, I **am**. / No, I'**m not**.
→ **Is** your job difficult? — Yes, it **is**. / No, it **isn't**.
• Sifat, kasb, joy haqida so'rasak — to be: Is it **dangerous**? Are you **a nurse**?

## Boshqa fe'llar bilan savol
**Do / Does** + ega + fe'lning oddiy shakli:
• I / you / we / they → **Do**: **Do** you **have** an unusual job? — Yes, I **do**. / No, I **don't**.
• he / she / it → **Does**: **Does** she **work** at night? — Yes, she **does**. / No, she **doesn't**.
• Does dan keyin fe'l **-s olmaydi**: Does he **play** (plays — xato).

## Qisqa javob savolga mos keladi
• Is…? → Yes, … is. · Do…? → Yes, … do. · Does…? → Yes, … does.
→ Is she a chef? — Yes, she **is** (Yes, she does — xato).

## Talaffuz
Savolda **do / does** urg'usiz va qisqa o'qiladi [da / daz], qisqa javobda esa urg'uli: Do they like it? — Yes, they **DO**.`,
    [
      q("___ you a student?", ["Are", "Do", "Is", "Does"]),
      q("___ your job make you happy?", ["Does", "Is", "Do", "Are"]),
      q("___ she work at night?", ["Does", "Do", "Is", "Are"]),
      q("Does he ___ a uniform?", ["wear", "wears", "wearing", "to wear"]),
      q("Is your job dangerous? — No, it ___.", ["isn't", "doesn't", "don't", "aren't"]),
      q("Do you like your job? — Yes, I ___.", ["do", "am", "like", "does"]),
      q("Is Dana a police officer? — No, she ___.", ["isn't", "doesn't", "don't", "not"]),
      q("___ they well-paid?", ["Are", "Do", "Does", "Is"]),
      q("Qaysi savol to'g'ri?", ["Do you have an unusual job?", "Are you have an unusual job?", "Have you an unusual job do?", "Does you have an unusual job?"]),
      q("A person who cooks in a restaurant is a ___.", ["chef", "cooker", "cook's", "kitchen"]),
    ]
  ),
  "A2-07": rule(
    "Wh- savollar · -er qo'shimchasi",
    `## So'roq so'zlari
• **What** — nima: What do you do? · **Who** — kim: Who do you live with?
• **Where** — qayerda: Where do you work? · **When** — qachon: When do you take breaks?
• **What time** — soat nechada: What time do you start work?
• **Why** — nega: Why do you want to learn English? (javob: Because…)
• **How often** — qanchalik tez-tez: How often do you check your emails?
• **How much** — qancha (pul): How much does she earn?

## So'z tartibi
• Oddiy fe'l bilan: **Wh- + do / does + ega + fe'l**
→ Where **does** your brother **work**? (Where your brother works? — xato)
• to be bilan: **Wh- + am / is / are + ega**
→ When **is** the deadline? · Who **is** your boss?
• What do you **do**? — kasbingiz nima? (birinchi do — yordamchi, ikkinchisi — fe'l)

## Ohang
Wh- savollarda oxirida ovoz **pasayadi** ↘: Where do you live? ↘

## -er qo'shimchasi: fe'l → odam
• teach → teach**er** · paint → paint**er** · own → own**er**
• -e bilan tugasa, faqat **-r**: bake → bak**er**, dance → danc**er**
• Qisqa fe'l: undosh ikkilanadi: swim → swi**mm**er, run → ru**nn**er
• Narsa ham bo'lishi mumkin: a DVD play**er**, a print**er**`,
    [
      q("___ do you live with? — My parents.", ["Who", "Where", "What", "Why"]),
      q("___ do you check your emails? — Twice a day.", ["How often", "When", "What time", "How"]),
      q("Where ___ your sister work?", ["does", "do", "is", "—"]),
      q("Qaysi savol to'g'ri?", ["What time do you start work?", "What time you start work?", "What time does you start work?", "What time start you work?"]),
      q("When ___ the meeting?", ["is", "does", "do", "—"]),
      q("What does your brother ___? — He's a baker.", ["do", "does", "doing", "work as"]),
      q("Why do you work from home? — ___ it's quiet.", ["Because", "So", "But", "And"]),
      q("swim → a ___", ["swimmer", "swimer", "swimor", "swimming"]),
      q("bake → a ___", ["baker", "bakeer", "bakor", "baking"]),
      q("A person who owns a cafe is the ___.", ["owner", "owna", "ownor", "owning"]),
    ]
  ),
  "A2-08": rule(
    "Can / Could — iltimos va ruxsat · email",
    `## Ruxsat so'rash (o'zim qilsam maylimi?)
• **Can I** + fe'l…? — oddiy: Can I sit here?
• **Could I** + fe'l…? — odobliroq: Could I open the window?

## Iltimos qilish (siz qila olasizmi?)
• **Can you** + fe'l…? · **Could you** + fe'l…, **please**?
→ Could you send me some information, please?
• can / could dan keyin **to yo'q**: Could I open (Could I to open — xato).

## Javoblar
• Ha: **Of course** (you can). · **Sure**. · Yes, **go ahead**. · **No problem**.
• Yo'q: **I'm afraid not**. · **I'm sorry, but** that's not possible.
• «I'm afraid no» — xato.

## Emailni boshlash va tugatish
• **Rasmiy:** Dear Mr / Mrs / Ms + familiya → **Yours sincerely**,
• **Neytral:** Dear + ism → **Best wishes** / **Regards**,
• **Norasmiy:** Hi / Hello + ism → **All the best** / **Love**,
• Foydali iboralar: I hope you're well. · I'm writing about… · Could you let me know…? · I look forward **to** your reply. · Many thanks.`,
    [
      q("Ruxsat so'rang: «___ use your phone?»", ["Could I", "Could you", "Do I", "Am I"]),
      q("Iltimos qiling: «___ help me, please?»", ["Could you", "Could I", "Do you", "Shall you"]),
      q("Could I ___ the window?", ["open", "to open", "opening", "opens"]),
      q("Can I sit here? — ___", ["Of course you can.", "Of course you sit.", "Yes, you could.", "I'm afraid yes."]),
      q("Could I leave early? — ___", ["I'm afraid not.", "I'm afraid no.", "No, you couldn't to.", "Not afraid."]),
      q("Rasmiy xat boshi:", ["Dear Mrs Zammit,", "Hi Zammit,", "Hello Mrs,", "Dear Zammit Mrs,"]),
      q("Rasmiy xat oxiri:", ["Yours sincerely,", "Love,", "All the best,", "See you!"]),
      q("I look forward ___ your reply.", ["to", "for", "on", "—"]),
      q("Do'stingizga xat oxiri:", ["Love,", "Yours sincerely,", "Dear,", "Regards, Sir"]),
      q("Eng odobli iltimos:", ["Could you send me the timetable, please?", "Send me the timetable.", "You send me the timetable?", "Timetable, please now."]),
    ]
  ),
};
