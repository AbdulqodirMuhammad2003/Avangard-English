/**
 * A1, 20-dars — «Yordam bera olasizmi?». Navigate A1, 7.2 «Can you help?» va
 * 7.4 «simple requests» asosida: ko'ngillilar ishi uchun suhbat, ish
 * e'lonini tez ko'zdan kechirib kerakli ma'lumotni topish, oddiy
 * iltimoslar va javoblar (Of course. / Sorry, it's taken.).
 * Grammatika: Can you…? Can I…? va qisqa javoblar; holat ravishlari (well,
 * badly, fast, slowly) — fe'ldan keyin. Tinglash mashqlarida kitob
 * treklari (yopiq ombordan), savollar va matnlar o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  gaps,
  hearing,
  hearingTwo,
  mistake,
  pairs,
  phrases,
  reading,
  say,
  sentences,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-a1/audio/${n}.mp3`;

export const A1_20_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("👍", "well", "wel|uel", "ravish", "Yaxshi (qanday?)", "In a good way.", "I can swim well.", "Men yaxshi suzaman."),
      w("👎", "badly", "ˈbædli|bedli", "ravish", "Yomon (qanday?)", "In a bad way.", "He speaks French badly.", "U fransuzchani yomon gapiradi."),
      w("⚡", "fast", "fɑːst|faast", "ravish, sifat", "Tez", "Quickly; not slow.", "She can type fast.", "U tez yoza oladi (klaviaturada)."),
      w("🐢", "slowly", "ˈsləʊli|slouli", "ravish", "Sekin", "Not fast.", "Please speak slowly.", "Iltimos, sekinroq gapiring."),
      w("🤏", "quite", "kwaɪt|kuayt", "ravish", "Ancha, birmuncha", "A little, but not very.", "I type quite slowly.", "Men ancha sekin yozaman."),
      w("⌨️", "type", "taɪp|tayp", "fe'l", "Klaviaturada yozmoq", "Write on a computer.", "Can you type fast?", "Tez yoza olasizmi?"),
      w("🧠", "learner", "ˈlɜːnə|lyorna", "ot", "O'rganuvchi", "A person who learns.", "I'm a fast learner.", "Men tez o'rganaman."),
      w("🛠️", "skill", "skɪl|skil", "ot", "Ko'nikma, mahorat", "Something you can do well.", "Typing is a useful skill.", "Tez yozish — foydali ko'nikma."),
      w("🤝", "volunteer", "ˌvɒlənˈtɪə|volantia", "ot", "Ko'ngilli", "A person who works without money to help.", "I'm a volunteer in Zanzibar.", "Men Zanzibarda ko'ngilliman."),
      w("📰", "advert", "ˈædvɜːt|edvyort", "ot", "E'lon, reklama", "Information about a job or a thing to buy.", "Look at the advert for a job.", "Ish e'loniga qarang."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🆘", "help", "help|help", "fe'l, ot", "Yordam bermoq; yordam", "Make things easier for someone.", "Can you help me?", "Menga yordam bera olasizmi?"),
      w("📦", "open", "ˈəʊpən|oupan", "fe'l", "Ochmoq", "Make something not closed.", "I can't open this box.", "Bu qutini ocha olmayapman."),
      w("🧭", "lost", "lɒst|lost", "sifat", "Adashgan", "Not knowing where you are.", "Excuse me. I'm lost.", "Kechirasiz. Men adashib qoldim."),
      w("🥵", "thirsty", "ˈθɜːsti|syorsti", "sifat", "Chanqagan", "Wanting to drink.", "I'm really thirsty.", "Juda chanqadim."),
      w("🚕", "taxi", "ˈtæksi|teksi", "ot", "Taksi", "A car you pay to take you somewhere.", "Can you call me a taxi?", "Menga taksi chaqirib bera olasizmi?"),
      w("🛤️", "way", "weɪ|uey", "ot", "Yo'l", "How to get to a place.", "Can you tell me the way to the city centre?", "Shahar markaziga yo'lni ayta olasizmi?"),
      w("👌", "sure", "ʃɔː|shoo", "undov", "Albatta, xo'p", "Yes, of course.", "Sure. It's that way.", "Albatta. Ana u tomonda."),
      w("😊", "no problem", "ˌnəʊ ˈprɒbləm|nou problam", "ibora", "Muammo yo'q, mayli", "Yes, I'm happy to help.", "Can you speak slowly? — Sure, no problem.", "Sekinroq gapira olasizmi? — Albatta, muammo yo'q."),
      w("🤲", "here you are", "ˌhɪə juː ˈɑː|hia yu aa", "ibora", "Mana, marhamat", "You say it when you give something.", "Can I have some water? — Sure. Here you are.", "Suv bersangiz? — Albatta. Mana."),
      w("🪑", "taken", "ˈteɪkən|teykan", "sifat", "Band (joy)", "Somebody is using it.", "Sorry. It's taken.", "Kechirasiz. Bu joy band."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🐬", "dolphin", "ˈdɒlfɪn|dolfin", "ot", "Delfin", "A clever sea animal.", "A dolphin can understand about sixty words.", "Delfin oltmishga yaqin so'zni tushuna oladi."),
      w("🏝️", "island", "ˈaɪlənd|ayland", "ot", "Orol", "Land with water all round it.", "Visit the beautiful island of Zanzibar.", "Go'zal Zanzibar oroliga boring."),
      w("📷", "photography", "fəˈtɒɡrəfi|fatografi", "ot", "Fotografiya", "Taking photos as a hobby or job.", "I like photography a lot.", "Men fotografiyani juda yaxshi ko'raman."),
      w("💾", "program", "ˈprəʊɡræm|prougrem", "ot", "Dastur (kompyuter)", "Software on a computer.", "Can you use this computer program?", "Bu kompyuter dasturidan foydalana olasizmi?"),
      w("🔬", "research", "rɪˈsɜːtʃ|risyorch", "ot", "Tadqiqot", "Careful study to find new facts.", "It's a dolphin research project.", "Bu delfinlarni o'rganish loyihasi."),
      w("📝", "record", "rɪˈkɔːd|rikood", "fe'l", "Qayd etmoq, yozib bormoq", "Write notes about something.", "Record the numbers of tourists.", "Sayyohlar sonini qayd eting."),
      w("💶", "cost", "kɒst|kost", "ot, fe'l", "Narx; turmoq (narxi)", "How much money you pay.", "Cost: from €800 for two weeks.", "Narxi: ikki hafta uchun 800 yevrodan."),
      w("🎙️", "interview", "ˈɪntəvjuː|intavyuu", "ot", "Suhbat (ishga qabul)", "A meeting where someone asks you questions for a job.", "Listen to an interview for the job.", "Ishga qabul suhbatini tinglang."),
      w("🏷️", "for sale", "fə ˈseɪl|fo seyl", "ibora", "Sotiladi", "Somebody wants to sell it.", "FOR SALE: beautiful Mercedes.", "SOTILADI: chiroyli Mersedes."),
      w("😊", "personality", "ˌpɜːsəˈnæləti|pyorsanelati", "ot", "Fe'l-atvor, shaxsiyat", "What kind of person you are.", "Personality: friendly, fast learner.", "Fe'l-atvori: do'stona, tez o'rganadi."),
    ],
  },
];

const ADVERT = `VOLUNTEERS WANTED — DOLPHIN RESEARCH PROJECT, ZANZIBAR
The Dolphin Research Project studies dolphins' behaviour and records the number of tourists in Zanzibar.
Work: record numbers of tourists and dolphins (on computer); watch dolphins; take photos of dolphins; teach English to tourist guides; drive.
Free time: visit the beautiful island of Zanzibar.
Duration: 2–6 weeks.
Cost: from €800 for two weeks.`;
const read = reading(ADVERT);

export const A1_20_EXERCISES: SeedExercise[] = [
  {
    title: "Ko'ngillilar kerak",
    skill: "O'qish",
    kind: "reading",
    instructions: "E'lonni tez o'qing va kerakli ma'lumotni toping: ismlar, joylar — so'zlar; vaqt, narx — raqamlar.",
    questions: [
      read("Where is the project?", ["In Zanzibar", "In the UK", "In Brighton", "The text doesn't say."]),
      read("What does the project study?", ["Dolphins' behaviour", "Birds", "Tourists' food", "English teachers"]),
      read("What do volunteers record on the computer?", ["The numbers of tourists and dolphins", "Their photos", "Their free time", "The cost"]),
      read("Who do volunteers teach English to?", ["Tourist guides", "Children", "Dolphins", "Tourists"]),
      read("What can you do in your free time?", ["Visit the island", "Go to the cinema", "Drive", "Study"]),
      read("How long is the job?", ["2–6 weeks", "2 months", "6 months", "A year"]),
      read("How much does it cost for two weeks?", ["From €800", "€80", "€2,600", "It's free."]),
      read("Which skill is NOT in the advert?", ["Cooking", "Driving", "Taking photos", "Using a computer"]),
    ],
  },
  {
    title: "Jek suhbatda",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Jek ishga suhbatda nima qila olishini aytadi. Tinglang va savollarga javob bering. Ba'zi savollarda IKKITA to'g'ri javob bor.",
    questions: [
      hearing(track("7.6"))("Can Jack swim?", ["Yes, he can swim well.", "No, he can't.", "Yes, but not very well.", "He doesn't say."]),
      hearing(track("7.6"))("How does Jack type?", ["Quite slowly", "Very fast", "Very badly", "He can't type."]),
      hearing(track("7.6"))("Can he use computer programs?", ["Yes, different programs.", "No, he can't.", "Only one program.", "He doesn't say."]),
      hearing(track("7.6"))("Can he drive?", ["No, but he can learn.", "Yes, very well.", "Yes, but slowly.", "No, and he doesn't want to."]),
      hearingTwo(track("7.6"))("Which TWO are true about Jack?", ["He can use a camera.", "He likes photography."], ["He types very fast.", "He can drive."]),
      hearing(track("7.6"))("What kind of learner is he?", ["A fast learner", "A slow learner", "A bad learner", "He doesn't say."]),
    ],
  },
  {
    title: "Can you…?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "So'roq: Can + ega + fe'l? Qisqa javob: Yes, I can. / No, I can't.",
    questions: [
      say("___ you swim?", ["Can", "Do", "Are", "Does"]),
      say("Can you swim? — Yes, I ___.", ["can", "do", "swim", "am"]),
      say("Can you drive? — No, I ___.", ["can't", "don't", "not", "can"]),
      say("Can you ___ a camera?", ["use", "uses", "to use", "using"]),
      say("Qaysi savol to'g'ri?", ["Can you speak English?", "Do you can speak English?", "Can you to speak English?", "You can speak English?"]),
      say("Qaysi savol to'g'ri?", ["Can she understand English well?", "Can she understands English well?", "Does she can understand English?", "Can she understand well English?"]),
      say("___ I use your pen?", ["Can", "Do", "Am", "Does"]),
      say("Are you good ___ a computer?", ["with", "at a", "for", "to"]),
      say("Can you teach English? — Yes, I ___.", ["can", "teach", "do", "am"]),
      say("___ he play the guitar?", ["Can", "Do", "Is", "Cans"]),
    ],
  },
  {
    title: "Ravishlar",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Holat ravishi fe'l qanday bajarilishini aytadi va fe'ldan (yoki fe'l + otdan) KEYIN keladi: I can drive a car well. good → well, bad → badly, slow → slowly, fast → fast.",
    questions: [
      say("I have a good camera, but I can't use it ___.", ["well", "good", "fast", "slow"]),
      say("Sorry, I can't understand you. Please speak ___.", ["slowly", "slow", "fast", "badly"]),
      say("I don't like their food. They cook ___.", ["badly", "bad", "well", "good"]),
      say("She drives very ___, but she's a good driver.", ["fast", "fastly", "good", "badly"]),
      say("Qaysi gap to'g'ri?", ["He reads very slowly.", "He very slowly reads.", "He reads slow very.", "Very slowly he reads."]),
      say("Qaysi gap to'g'ri?", ["She can type fast.", "She can fast type.", "She can type fastly.", "Fast she can type."]),
      say("Qaysi gap to'g'ri?", ["He speaks French badly.", "He speaks badly French.", "He badly speaks French.", "He speaks French bad."]),
      say("Qaysi gap to'g'ri?", ["I can't play tennis well.", "I can't play well tennis.", "I can't well play tennis.", "I can't play tennis good."]),
      say("good → ?", ["well", "goodly", "good", "better"]),
      say("slow → ?", ["slowly", "slow", "slowy", "slowlly"]),
    ],
  },
  {
    title: "Ravishni eshiting",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Beshta gapni tinglang va javobingizni tekshiring.",
    questions: [
      gaps(track("7.9"), [
        ["1. He reads very ___.", "slowly", "badly", "fast"],
        ["2. She can type ___.", "fast", "well", "slowly"],
        ["3. He speaks French ___.", "badly", "well", "slowly"],
        ["4. I can't play tennis ___.", "well", "badly", "fast"],
        ["5. Can she understand English ___?", "well", "fast", "slowly"],
      ]),
    ],
  },
  {
    title: "can ni qanday aytamiz?",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Darak va so'roq gapda can kuchsiz aytiladi; qisqa javobda (Yes, I CAN) kuchli; can't doim kuchli. Tinglang va eshitganingizni tanlang.",
    questions: [
      gaps(track("7.8"), [
        ["1. I ___ use a computer.", "can", "can't"],
        ["2. ___ you speak English?", "Can", "Do"],
        ["3. Yes, I ___.", "can", "can't"],
        ["4. No, I ___.", "can't", "can"],
      ]),
    ],
  },
  {
    title: "Iltimos qiling",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Oltita vaziyatda odamlar iltimos qiladi. Tinglang va javobni to'ldiring.",
    questions: [
      gaps(track("7.17"), [
        ["1. «I can't open this box. Can you help me?» — «Of course I ___.»", "can", "do", "help"],
        ["2. «Can you speak slowly?» — «Sure, no ___.»", "problem", "way", "thanks"],
        ["3. «Can you tell me the way to the city centre?» — «Sure. It's ___ way.»", "that", "this", "the"],
        ["4. «Can you call me a taxi?» — «Yes, of course. Do you want it ___?»", "now", "here", "too"],
        ["5. «Can I have some water, please?» — «Sure. Here you ___.»", "are", "go", "is"],
        ["6. «Can I take this chair, please?» — «Sorry. It's ___.»", "taken", "broken", "mine"],
      ]),
    ],
  },
  {
    title: "Ha yoki yo'q?",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Iltimos qilganda javobni tushunish muhim: Sure. / Of course. = ha; Sorry… = yo'q. To'rtta suhbatni tinglang.",
    questions: [
      hearing(track("7.19"))("1. Can the speaker use the pen?", ["Yes, of course.", "No, sorry.", "Only for a minute.", "The speaker doesn't ask."]),
      hearing(track("7.19"))("2. Does the man know the way to the station?", ["No, he doesn't.", "Yes, it's that way.", "Yes, it's near.", "He doesn't answer."]),
      hearing(track("7.19"))("3. Can the speaker have a bottle of water?", ["No, there isn't any water.", "Yes, here you are.", "Yes, but it's expensive.", "Only a small one."]),
      hearing(track("7.19"))("4. Can the speaker take the chair?", ["Yes, go ahead.", "No, it's taken.", "No, it's broken.", "Only later."]),
    ],
  },
  {
    title: "Nima deysiz?",
    skill: "Vaziyat",
    kind: "dialog",
    instructions: "Vaziyatga mos iltimos yoki javobni tanlang.",
    questions: [
      say("You are thirsty.", ["Can I have some water, please?", "Can you speak slowly?", "Can I take this chair?", "Can you call me a taxi?"]),
      say("You can't open the door.", ["Excuse me. Can you help me?", "Can I have some water?", "Sorry. It's taken.", "Here you are."]),
      say("You are lost and can't find the bank.", ["Excuse me. Can you tell me the way to the bank?", "Can I use your pen?", "Can you call me a taxi?", "Sorry, I'm busy."]),
      say("You can't understand the person.", ["Sorry, I can't understand you. Can you speak slowly?", "Can I take this chair?", "Of course.", "I'm thirsty."]),
      say("You want to go to the airport.", ["Can you call me a taxi?", "Can I have some tea?", "Can you speak slowly?", "It's taken."]),
      say("Excuse me. Can I take this chair?", ["Sure. Go ahead.", "Yes, I can.", "Here you are, chair.", "No problem, it's me."]),
      say("Can you help me?", ["Of course.", "Of course I help.", "Yes, I help.", "Yes, you can."]),
      say("Can I use your phone?", ["Sorry. I'm busy.", "Sorry. It's taken.", "Yes, I can.", "No, I don't."]),
      say("Can I have some tea, please?", ["Sure. Here you are.", "Yes, you have.", "Yes, I can.", "No problem, it's taken."]),
      say("Thank you!", ["You're welcome.", "Here you are.", "Of course I can.", "No, I can't."]),
    ],
  },
  {
    title: "Savol yozing",
    skill: "Grammatika",
    kind: "type",
    instructions: "can bilan savol yoki iltimos yozing. Misol: you / speak English → Can you speak English?",
    questions: written([
      ["you / speak English", "Can you speak English?"],
      ["you / use a camera", "Can you use a camera?"],
      ["you / swim", "Can you swim?"],
      ["you / teach English", "Can you teach English?"],
      ["you / drive", "Can you drive?"],
      ["I / have some water", "Can I have some water?"],
      ["you / call me a taxi", "Can you call me a taxi?"],
      ["I / take this chair", "Can I take this chair?"],
      ["you / tell me the way to the station", "Can you tell me the way to the station?"],
      ["you / speak slowly", "Can you speak slowly?"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("*Do you can swim?", "Can you swim?"),
      mistake("Can you swim? — Yes, I *do.", "Yes, I can."),
      mistake("She can type *fastly.", "fast — o'zgarmaydi."),
      mistake("She's a *well driver.", "Ot oldida sifat keladi: a good driver."),
      mistake("I can drive *good.", "Fe'ldan keyin ravish — well."),
      mistake("Please speak *slow.", "Ravish — slowly."),
      mistake("He *slowly reads.", "Ravish fe'ldan keyin: He reads slowly."),
      mistake("Can I *having some water?", "Can I have…?"),
      mistake("Sorry. It's *take.", "It's taken."),
      mistake("Can you tell me the *road to the city centre?", "Yo'l so'rash — the way to…"),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap yoki savol tuzing.",
    questions: sentences([
      "Can you tell me the way to the city centre?",
      "Can I take this chair?",
      "Can you help me?",
      "Can I have some water?",
      "Can you speak slowly?",
      "Can you call me a taxi?",
      "He reads very slowly.",
      "She can type fast.",
      "I can't play tennis well.",
      "I'm a fast learner.",
    ]),
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Juftlarni ulang.",
    questions: pairs([
      ["good|well", "bad|badly", "slow|slowly", "fast|fast"],
      ["I'm thirsty.|Can I have some water?", "I'm lost.|Can you tell me the way?", "I can't open this box.|Can you help me?", "I want to go to the airport.|Can you call me a taxi?"],
      ["Of course.|ha", "Sure.|ha", "Sorry. I'm busy.|yo'q", "Sorry. It's taken.|yo'q"],
      ["volunteer|ko'ngilli", "island|orol", "skill|ko'nikma", "advert|e'lon"],
      ["Can you swim?|Yes, I can.", "Can you drive?|No, I can't.", "Are you good with a computer?|Yes, I am.", "Can I use your pen?|Here you are."],
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "I can use a computer.",
      "Can you speak English?",
      "Yes, I can.",
      "No, I can't.",
      "Excuse me. Can you help me?",
      "Can you tell me the way to the city centre?",
      "Can I have some water, please?",
      "Sure. Here you are.",
      "Sorry. It's taken.",
      "Can you speak slowly, please?",
    ]),
  },
];
