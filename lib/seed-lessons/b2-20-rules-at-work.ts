/**
 * B2, 20-dars — «Rules at work». Ishdan tashqari emaillarni taqiqlash,
 * g'alati ofis qoidalari; fe'l + predlog birikmalari.
 * Grammatika: past modals of deduction (must/can't/might/could/may have +
 * past participle).
 * Navigate B2, 7.2 asosida: tinglash mashqlarida kitob treklari (yopiq
 * ombordan), lug'at misollari kitob matni va Wordlist'idan yoki unga yaqin;
 * mashq matnlari o'zimizniki. Mashqlar inglizcha.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  gaps,
  hearing,
  listen,
  mistake,
  pairs,
  phrases,
  reading,
  say,
  sentences,
  trueFalse,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

export const B2_20_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🛡️", "protect workers from", "prəˌtekt ˈwɜːkəz frəm|pratekt wookaz fram", "ibora", "Ishchilarni …dan himoya qilmoq", "Keep workers safe from something.", "The new rules protect workers from being disturbed by work emails.", "Yangi qoidalar ishchilarni ish emaillari bezovta qilishidan himoya qiladi."),
      w("↩️", "react to", "riˈækt tə|riekt ta", "fe'l", "…ga javob bermoq, munosabat bildirmoq", "Do something because of something that has happened.", "Firms had to react to growing levels of employee stress.", "Kompaniyalar xodimlar stressining ortishiga javob choralarini ko'rishga majbur bo'ldi."),
      w("📣", "protest against", "prəˈtest əˌɡenst|pratest agenst", "fe'l", "…ga qarshi norozilik bildirmoq", "Show strongly that you disagree with something.", "Workers decided to protest against working longer unpaid hours.", "Ishchilar haq to'lanmaydigan uzunroq ish soatlariga qarshi norozilik bildirishga qaror qilishdi."),
      w("📱", "exposing workers to", "ɪkˈspəʊzɪŋ ˌwɜːkəz tə|ikspouzing wookaz ta", "ibora", "Ishchilarni …ga duchor qilish", "Putting workers in a situation where they experience something.", "Devices have been exposing workers to much longer hours.", "Qurilmalar ishchilarni ancha uzun ish soatlariga duchor qilmoqda."),
      w("💪", "insist on", "ɪnˈsɪst ɒn|insist on", "fe'l", "…ni talab qilmoq", "Say firmly that something must happen.", "The new laws insist on employers switching off email contact after 6 p.m.", "Yangi qonunlar ish beruvchilardan soat 18:00 dan keyin email aloqani o'chirishni talab qiladi."),
      w("👎", "criticized for", "ˈkrɪtɪsaɪzd fə|kritisayzd fa", "ibora", "…uchun tanqid qilingan", "Said to be bad because of something.", "The rules have been criticized for not taking account of flexible working.", "Qoidalar moslashuvchan ishni hisobga olmagani uchun tanqid qilindi."),
      w("⚠️", "accused of", "əˈkjuːzd əv|akyuuzd av", "ibora", "…da ayblangan", "Said to have done something wrong.", "Employers have been accused of taking advantage of their employees.", "Ish beruvchilar xodimlaridan nohaq foydalanishda ayblanmoqda."),
      w("😈", "take advantage of", "ˌteɪk ədˈvɑːntɪdʒ əv|teyk advaantij av", "ibora", "…dan (nohaq) foydalanmoq", "Use someone unfairly for your own benefit.", "Some companies take advantage of their workers.", "Ba'zi kompaniyalar ishchilaridan nohaq foydalanadi."),
      w("👉", "blamed for", "bleɪmd fə|bleymd fa", "ibora", "…da aybdor deb topilgan", "Said to be responsible for something bad.", "Employers' expectations have been blamed for increasing working hours.", "Ish soatlari ortishida ish beruvchilarning talablari aybdor deb topildi."),
      w("⛔", "prohibited from", "prəˈhɪbɪtɪd frəm|prahibitid fram", "ibora", "…dan man qilingan", "Not allowed by law to do something.", "Employers are prohibited from contacting workers outside office hours.", "Ish beruvchilarga ish vaqtidan tashqari xodimlar bilan bog'lanish man qilingan."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("📋", "apply to", "əˈplaɪ tə|aplay ta", "fe'l", "…ga taalluqli bo'lmoq", "Affect or be relevant to someone.", "The new rules will not apply to all jobs.", "Yangi qoidalar barcha ishlarga taalluqli bo'lmaydi."),
      w("🤝", "count on", "ˈkaʊnt ɒn|kaunt on", "fe'l", "…ga ishonmoq, tayanmoq", "Depend on someone to help you.", "Lawyers whose clients count on them will still be available.", "Mijozlari ularga tayanadigan advokatlar baribir aloqada bo'ladi."),
      w("🔥", "burnout", "ˈbɜːnaʊt|boonaut", "ot", "Charchab tugash (ishdan)", "Being very tired and ill because of too much work.", "Firms have reacted to growing levels of stress and burnout.", "Kompaniyalar stress va charchab tugashning ortishiga javob qaytarishdi."),
      w("📵", "switch off", "ˌswɪtʃ ˈɒf|swich of", "ibora", "O'chirmoq", "Stop a machine or system working.", "Employers must switch off email contact after 6 p.m.", "Ish beruvchilar soat 18:00 dan keyin email aloqani o'chirishi kerak."),
      w("🕘", "working hours", "ˈwɜːkɪŋ ˌaʊəz|wooking auaz", "ibora", "Ish vaqti", "The hours when you are at work.", "Companies ban work emails outside working hours.", "Kompaniyalar ish vaqtidan tashqari ish emaillarini taqiqlaydi."),
      w("🔄", "flexible", "ˈfleksəbl|fleksabl", "sifat", "Moslashuvchan", "Able to change easily.", "Many parents prefer flexible working practices.", "Ko'p ota-onalar moslashuvchan ish tartibini afzal ko'radi."),
      w("📰", "leaked", "liːkt|liikt", "fe'l", "Sizib chiqqan (maxfiy ma'lumot)", "Given secretly to newspapers.", "A list of rules for her staff has been leaked to the media.", "Uning xodimlari uchun qoidalar ro'yxati ommaviy axborot vositalariga sizib chiqdi."),
      w("🤫", "corridor", "ˈkɒrɪdɔː|koridoo", "ot", "Yo'lak", "A long passage in a building with rooms on each side.", "Staff must not use the corridor next to her office while she is eating.", "U ovqatlanayotganda xodimlar uning ofisi yonidagi yo'lakdan foydalanmasligi kerak."),
      w("🚗", "facing the same way", "ˌfeɪsɪŋ ðə ˈseɪm weɪ|feysing za seym wey", "ibora", "Bir tomonga qaragan holda", "Pointing in the same direction.", "We had to park our cars all facing the same way.", "Mashinalarimizni hammasini bir tomonga qaratib qo'yishimiz kerak edi."),
      w("☕", "lids", "lɪdz|lidz", "ot", "Qopqoqlar", "Covers for cups or containers.", "We were forbidden to use cups without lids.", "Qopqoqsiz stakanlardan foydalanish bizga man qilingan edi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("✅", "must have been", "ˈmʌst əv biːn|mast av biin", "ibora", "…bo'lgan bo'lsa kerak (aniq)", "I'm almost certain it was.", "It must have been a way of making the car park look tidier.", "Bu avtoturargohni tartibliroq ko'rsatish usuli bo'lgan bo'lsa kerak."),
      w("🤔", "might have been", "ˈmaɪt əv biːn|mayt av biin", "ibora", "…bo'lgan bo'lishi mumkin", "Perhaps it was.", "It might have been a safety issue.", "Bu xavfsizlik masalasi bo'lgan bo'lishi mumkin."),
      w("❌", "can't have", "ˈkɑːnt əv|kaant av", "ibora", "…bo'lishi mumkin emas (o'tmishda)", "I'm almost certain it didn't happen.", "They can't have stopped them having a lunch break.", "Ular tushlik tanaffusini taqiqlagan bo'lishi mumkin emas."),
      w("💭", "may have needed", "ˌmeɪ əv ˈniːdɪd|mey av niidid", "ibora", "…kerak bo'lgan bo'lishi mumkin", "Perhaps they needed.", "They may have needed people to stay in order to answer the phones.", "Telefonlarga javob berish uchun odamlar qolishi kerak bo'lgan bo'lishi mumkin."),
      w("🥤", "spilt", "spɪlt|spilt", "fe'l", "To'kib yubordi", "Made liquid fall out of a container by accident.", "Someone must have spilt a drink over a computer!", "Kimdir kompyuterga ichimlik to'kib yuborgan bo'lsa kerak!"),
      w("🛡️", "safety issue", "ˈseɪfti ˌɪʃuː|seyfti ishuu", "ibora", "Xavfsizlik masalasi", "A problem connected with people's safety.", "Parking that way might have been a safety issue.", "Shunday qilib mashina qo'yish xavfsizlik masalasi bo'lgan bo'lishi mumkin."),
      w("📤", "resign", "rɪˈzaɪn|rizayn", "fe'l", "Iste'foga chiqmoq", "Leave your job because you choose to.", "He could have decided to resign.", "U iste'foga chiqishga qaror qilgan bo'lishi mumkin."),
      w("🔥", "fired", "ˈfaɪəd|fayad", "fe'l", "Ishdan bo'shatildi", "Told to leave your job because of something you did.", "He must have been fired.", "U ishdan bo'shatilgan bo'lsa kerak."),
      w("📉", "made redundant", "ˌmeɪd rɪˈdʌndənt|meyd ridandant", "ibora", "Ishdan qisqartirilgan", "Lost your job because it is no longer needed.", "He may have been made redundant.", "U ishdan qisqartirilgan bo'lishi mumkin."),
      w("😴", "fallen asleep", "ˌfɔːlən əˈsliːp|foolan asliip", "ibora", "Uxlab qolgan", "Started sleeping.", "It's very quiet up there. The children must have fallen asleep.", "Tepada juda jim. Bolalar uxlab qolgan bo'lsa kerak."),
    ],
  },
];

const ARTICLE = `MAJOR EUROPEAN COMPANIES BAN WORK EMAILS OUTSIDE WORKING HOURS
Some of Germany's biggest companies have brought in rules to protect their workers from being disturbed by work email outside office hours. Firms such as Volkswagen have reacted to growing levels of stress and burnout by installing software that stops emails reaching employees at home.
In France, workers have protested against the way electronic devices have been exposing them to much longer, unpaid hours. In response, the government has introduced laws which insist on employers switching off email contact after 6 p.m.
But some people have criticized the new rules for not taking account of flexible working. Many parents prefer to leave work early to pick up their children and then check emails later in the evening.`;
const read = reading(ARTICLE);

const officeTf = trueFalse(
  "A government minister has reportedly made a list of rules for her staff, which have been leaked to the media. They include a rule that staff stand up when she arrives, and that people do not use the corridor next to her office while she is eating, as the noise is distracting."
);

export const B2_20_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("The children must have fallen asleep.", ["The children must have fallen asleep.", "The children might have fallen asleep.", "The children must fall asleep.", "The children must have fallen ill."]),
      listen("Do you think he could have heard us?", ["Do you think he could have heard us?", "Do you think he could hear us?", "Do you think he can have heard us?", "Do you think he would have heard us?"]),
      listen("You might have dropped it in the car.", ["You might have dropped it in the car.", "You must have dropped it in the car.", "You might drop it in the car.", "You might have dropped it in the bar."]),
      listen("They can't have worked such long hours.", ["They can't have worked such long hours.", "They couldn't work such long hours.", "They can't work such long hours.", "They can't have walked such long hours."]),
      listen("He may have been made redundant.", ["He may have been made redundant.", "He must have been made redundant.", "He may be made redundant.", "He may have been made responsible."]),
      listen("Someone must have spilt a drink over a computer.", ["Someone must have spilt a drink over a computer.", "Someone might have spilt a drink over a computer.", "Someone must have spent a drink over a computer.", "Someone must spill a drink over a computer."]),
      listen("Employers have been accused of taking advantage of their employees.", ["Employers have been accused of taking advantage of their employees.", "Employers have been accused for taking advantage of their employees.", "Employers were accused of taking advantage of their employees.", "Employers have been accused of taking advantage from their employees."]),
      listen("burnout", ["burnout", "burn out", "workout", "breakout"]),
      listen("redundant", ["redundant", "abundant", "redundancy", "dependent"]),
      listen("distracting", ["distracting", "distracted", "attracting", "subtracting"]),
    ],
  },
  {
    title: "Banning work emails",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the article. Choose the correct answer.",
    questions: [
      read("Why did German companies bring in the new rules?", ["To protect workers from stress and burnout", "To save money", "To make people work longer", "To sell more cars"]),
      read("What did Volkswagen do?", ["Installed software to stop emails reaching employees at home", "Banned mobile phones", "Gave workers more holidays", "Closed its offices at 6 p.m."]),
      read("What did French workers protest against?", ["Working longer unpaid hours because of electronic devices", "Low salaries", "A ban on emails", "Long holidays"]),
      read("What do the French laws insist on?", ["Switching off email contact after 6 p.m.", "Working 35 hours a day", "Answering emails at night", "Buying new devices"]),
      read("Why do some people criticize the rules?", ["They don't take account of flexible working.", "They are too relaxed.", "They are only for parents.", "They are too expensive."]),
    ],
  },
  {
    title: "Verbs and prepositions",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the correct preposition.",
    questions: [
      say("The rules protect workers ___ being disturbed.", ["from", "of", "against", "on"]),
      say("Firms have reacted ___ growing levels of stress.", ["to", "for", "on", "from"]),
      say("Workers have protested ___ the new laws.", ["against", "for", "to", "from"]),
      say("Devices have been exposing workers ___ longer hours.", ["to", "from", "for", "against"]),
      say("The laws insist ___ employers switching off email.", ["on", "for", "to", "from"]),
      say("They criticized the rules ___ not taking account of flexible working.", ["for", "of", "on", "to"]),
      say("Employers have been accused ___ taking advantage of their employees.", ["of", "for", "on", "from"]),
      say("Employers' expectations have been blamed ___ increasing working hours.", ["for", "on", "of", "to"]),
      say("The government has prohibited employers ___ contacting workers.", ["from", "in", "of", "to"]),
      say("The new rules will not apply ___ all jobs.", ["to", "on", "for", "at"]),
      say("Lawyers whose clients count ___ them will still be available.", ["on", "against", "for", "to"]),
    ],
  },
  {
    title: "Odd rules",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to two people discussing some strange rules at work. Answer the questions.",
    questions: [
      hearing(track("7.2"))("Rule 1 was parking all cars facing the same way. What does B think the reason was?", ["It might have been a safety issue — fewer accidents when leaving.", "To make the car park look tidier.", "To save space.", "Because the boss liked it."]),
      hearing(track("7.2"))("Rule 2 was eating lunch at your desk. What do they think?", ["They may have needed people to stay to answer the phones.", "It must have been to save money.", "It can't have happened.", "It was for safety."]),
      hearing(track("7.2"))("Rule 3 was starting work very early. What does A think?", ["It might have been in a hot country, to avoid the heat.", "It must have been a mistake.", "It was unfair.", "It was to answer phones."]),
      hearing(track("7.2"))("What does B say about rule 3?", ["It's fine if you also go home early or get a long lunch.", "It's always unfair.", "It's illegal.", "It's a safety issue."]),
      hearing(track("7.2"))("Rule 4 was no cups without lids. Why?", ["Someone must have spilt a drink over a computer.", "To save money on cups.", "Because of the noise.", "Because it was a hot country."]),
    ],
  },
  {
    title: "How sure are they?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Is the speaker almost certain it happened, almost certain it didn't happen, or guessing?",
    questions: [
      say("It must have been a way of making the car park look tidier.", ["almost certain it happened", "almost certain it didn't happen", "guessing"]),
      say("It might have been a safety issue.", ["guessing", "almost certain it happened", "almost certain it didn't happen"]),
      say("It could have been something like that.", ["guessing", "almost certain it happened", "almost certain it didn't happen"]),
      say("They can't have stopped them having a lunch break.", ["almost certain it didn't happen", "almost certain it happened", "guessing"]),
      say("They may have needed people to stay to answer the phones.", ["guessing", "almost certain it happened", "almost certain it didn't happen"]),
      say("Someone must have spilt a drink over a computer!", ["almost certain it happened", "guessing", "almost certain it didn't happen"]),
    ],
  },
  {
    title: "Grammar sentences",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear three sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("gr-7.2"), [
        ["It's awfully quiet up there. I think the children ___ asleep.", "must have fallen", "might fall", "can't have fallen"],
        ["Do you think he ___ us? He doesn't look very pleased.", "could have heard", "must hear", "can have heard"],
        ["Go back and look for it. You ___ it in the car.", "might have dropped", "must drop", "can't have dropped"],
      ]),
    ],
  },
  {
    title: "Past modals in speech",
    skill: "Listening",
    kind: "listengap",
    instructions: "«have» is weak in past modals: /əv/. You will hear seven sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("7.3"), [
        ["They ___ such long hours.", "can't have worked", "couldn't work", "must have worked"],
        ["They ___ a long lunch break.", "might have had", "must have had", "can't have had"],
        ["They ___ their jobs.", "must have hated", "might have hated", "can't have hated"],
        ["He ___ fired.", "must have been", "might have been", "can't have been"],
        ["He ___ resigned.", "could have", "must have", "can't have"],
        ["He ___ made redundant.", "may have been", "must have been", "can't have been"],
        ["They ___ friends.", "can't have been", "must have been", "might have been"],
      ]),
    ],
  },
  {
    title: "Rewrite with a past modal",
    skill: "Grammar",
    kind: "type",
    instructions: "Rewrite the sentence with must have, can't have, might have or may have.",
    questions: written([
      ["It isn't possible that they worked such long hours. → They ___ such long hours.", "can't have worked|couldn't have worked"],
      ["Perhaps they had a long lunch break. → They ___ a long lunch break.", "might have had|may have had|could have had"],
      ["I'm sure they hated their jobs. → They ___ their jobs.", "must have hated"],
      ["Maybe he resigned. → He ___.", "might have resigned|may have resigned|could have resigned"],
      ["They definitely weren't friends. → They ___ friends.", "can't have been|couldn't have been"],
      ["I'm sure there was some mistake. → There ___ some mistake.", "must have been"],
      ["Perhaps he didn't understand. → He ___.", "might not have understood|may not have understood"],
    ]),
  },
  {
    title: "Which preposition?",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match each verb to the preposition that follows it.",
    questions: pairs([
      ["protect|from", "react|to", "protest|against", "insist|on"],
      ["accuse|of", "blame|for", "prohibit|from", "count|on"],
    ]),
  },
  {
    title: "Strange office rules",
    skill: "Reading",
    kind: "truefalse",
    instructions: "Read about a minister's office rules. Are the sentences true or false?",
    questions: [
      officeTf("Staff have to stand up when the minister arrives.", true),
      officeTf("The list of rules was leaked to the media.", true),
      officeTf("Staff can use the corridor next to her office at any time.", false, "Not while she is eating."),
      officeTf("The noise from the corridor is distracting for her.", true),
    ],
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("She's late. She might have *miss the bus.", "might have + past participle: missed."),
      mistake("He *mustn't have known about it — he wasn't at the meeting.", "Certain it's not true → can't have known."),
      mistake("I *can have left my phone in the taxi.", "Possibility → could / might have left."),
      mistake("The children must *had fallen asleep.", "must have fallen."),
      mistake("You *must seen Alice — she's in Dubai!", "can't have seen."),
      mistake("Employers have been accused *for taking advantage.", "accused of."),
      mistake("The government prohibited them *to contact workers.", "prohibit from + -ing: from contacting."),
      mistake("Workers protested *for the new laws.", "protest against."),
      mistake("The rules don't apply *on all jobs.", "apply to."),
      mistake("You can always count *to me.", "count on."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "It must have been a safety issue.",
      "They can't have stopped them having lunch.",
      "Someone must have spilt a drink.",
      "He may have been made redundant.",
      "The rules protect workers from stress.",
      "Employers have been blamed for longer hours.",
      "The laws insist on switching off email.",
      "You can always count on me.",
    ]),
  },
  {
    title: "Make a deduction",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best answer.",
    questions: [
      say("Olga and Bogdan should've been here half an hour ago.", ["They might have got lost.", "They must get lost.", "They can't get lost.", "They might got lost."]),
      say("The bill is £75!", ["That can't be right. They must have overcharged us.", "That can't be right. They must overcharge us.", "That can't be right. They can't have charged.", "That must right."]),
      say("Erica hasn't been in touch yet.", ["She might not have got your message.", "She mustn't have got your message.", "She can't get your message.", "She might not get your message yesterday."]),
      say("Carlos is driving a new sports car.", ["He must have had a pay rise!", "He must have a pay rise yesterday!", "He can't have had a pay rise!", "He must had a pay rise!"]),
      say("You were in the office when the burglars broke in?", ["You must have been terrified!", "You can't have been terrified!", "You must be terrified yesterday!", "You might be terrified!"]),
      say("I didn't see you at the reception last night.", ["We must have just missed each other.", "We must just miss each other.", "We can't have miss each other.", "We might missing each other."]),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then say it yourself. «have» is weak: must've, might've, can't've.",
    questions: phrases([
      "They can't have worked such long hours.",
      "They might have had a long lunch break.",
      "They must have hated their jobs.",
      "He must have been fired.",
      "He may have been made redundant.",
      "Someone must have spilt a drink over a computer.",
      "The children must have fallen asleep.",
      "You might have dropped it in the car.",
      "burnout",
      "redundant",
    ]),
  },
];
