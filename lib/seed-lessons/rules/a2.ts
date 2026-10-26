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
};
