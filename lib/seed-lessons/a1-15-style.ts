/**
 * A1, 15-dars — «Uslub va tana». Tana a'zolari, tashqi ko'rinish, uslub;
 * vokzalda yo'l so'rash (platform, timetable, return ticket). Grammatika:
 * Present Simple — barcha shakllar takrori (darak, inkor, so'roq, Wh-
 * savol); very / really + sifat; foot → feet, tooth → teeth. Matn va
 * mashqlar o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  hearing,
  listen,
  mistake,
  pairs,
  phrases,
  pick,
  say,
  sentences,
  trueFalse,
  w,
  written,
  type Rounds,
} from "./helpers";

export const A1_15_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🗣️", "head", "hed|hed", "ot", "Bosh", "The top part of your body.", "My head hurts.", "Boshim og'riyapti."),
      w("😊", "face", "feɪs|feys", "ot", "Yuz", "The front of your head: eyes, nose, mouth.", "She has a beautiful face.", "Uning yuzi chiroyli."),
      w("👁️", "eye", "aɪ|ay", "ot", "Ko'z", "You see with it.", "I've got something in my eye.", "Ko'zimga nimadir tushdi."),
      w("👂", "ear", "ɪə|iia", "ot", "Quloq", "You hear with it.", "Put your hand on your ear.", "Qo'lingizni qulog'ingizga qo'ying."),
      w("👄", "mouth", "maʊθ|maus", "ot", "Og'iz", "You eat and speak with it.", "Open your mouth, please.", "Og'zingizni oching, iltimos."),
      w("💇", "hair", "heə|hea", "ot", "Soch", "It grows on your head.", "She has long black hair.", "Uning sochi uzun va qora."),
      w("💪", "arm", "ɑːm|aam", "ot", "Qo'l (yelkadan bilakkacha)", "From your shoulder to your hand.", "My arm hurts after the gym.", "Sport zalidan keyin qo'lim og'riyapti."),
      w("✋", "hand", "hænd|hend", "ot", "Qo'l (kaft)", "At the end of your arm. It has five fingers.", "Raise your hand, please.", "Qo'lingizni ko'taring, iltimos."),
      w("🦵", "leg", "leɡ|leg", "ot", "Oyoq (son-boldir)", "You walk and run with your legs.", "My leg hurts after football.", "Futboldan keyin oyog'im og'riyapti."),
      w("🦶", "foot", "fʊt|fut", "ot", "Oyoq (panja). Ko'plik: feet", "At the end of your leg. Plural: feet.", "My left foot hurts.", "Chap oyog'im og'riyapti."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🔙", "back", "bæk|bek", "ot", "Bel, orqa", "The back part of your body.", "I've got a bad back.", "Belim og'riydi."),
      w("☝️", "finger", "ˈfɪŋɡə|finga", "ot", "Barmoq", "You have five on each hand.", "She wears a ring on her finger.", "U barmog'ida uzuk taqib yuradi."),
      w("🦒", "neck", "nek|nek", "ot", "Bo'yin", "Between your head and your shoulders.", "Giraffes have a very long neck.", "Jirafalarning bo'yni juda uzun."),
      w("🎒", "shoulder", "ˈʃəʊldə|shoulda", "ot", "Yelka", "Where your arm joins your body.", "Put your bag on your shoulder.", "Sumkangizni yelkangizga osing."),
      w("🦷", "teeth", "tiːθ|tiis", "ot (ko'plik)", "Tishlar (bitta — tooth)", "Plural of «tooth». You eat with them.", "Brush your teeth twice a day.", "Tishingizni kuniga ikki marta yuving."),
      w("🧔", "beard", "bɪəd|biiad", "ot", "Soqol", "Hair on a man's face.", "My grandfather has a white beard.", "Bobomning soqoli oq."),
      w("👗", "fashion", "ˈfæʃn|feshn", "ot", "Moda", "Popular styles of clothes.", "She loves fashion.", "U modani yaxshi ko'radi."),
      w("✨", "style", "staɪl|stayl", "ot", "Uslub", "Your way of dressing.", "I like your style!", "Uslubingiz menga yoqadi!"),
      w("👀", "look", "lʊk|luk", "fe'l", "Ko'rinmoq; qaramoq", "To seem: you look happy.", "You look great today!", "Bugun zo'r ko'rinyapsiz!"),
      w("🤵", "smart", "smɑːt|smaat", "sifat", "Ozoda, did, chiroyli kiyingan", "Clean and nicely dressed.", "He wears a smart suit to work.", "U ishga chiroyli kostyum kiyadi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🔝", "very", "ˈveri|veri", "ravish", "Juda", "It makes an adjective stronger.", "It's very cold today.", "Bugun juda sovuq."),
      w("💯", "really", "ˈrɪəli|riali", "ravish", "Rostdan, juda", "Very (more friendly, spoken).", "This film is really good.", "Bu film rostdan yaxshi."),
      w("🚉", "platform", "ˈplætfɔːm|pletfoom", "ot", "Platforma (vokzal)", "Where you get on a train.", "The train leaves from platform four.", "Poyezd to'rtinchi platformadan jo'naydi."),
      w("🗓️", "timetable", "ˈtaɪmteɪbl|taymteybl", "ot", "Jadval (qatnov)", "A list of times for buses or trains.", "Check the bus timetable.", "Avtobus jadvalini tekshiring."),
      w("🔄", "return ticket", "rɪˈtɜːn ˌtɪkɪt|rityon tikit", "ibora", "Borib-kelish chiptasi", "A ticket to go there and come back.", "A return ticket to Samarkand, please.", "Samarqandga borib-kelish chiptasi, iltimos."),
      w("➡️", "single ticket", "ˈsɪŋɡl ˌtɪkɪt|singl tikit", "ibora", "Bir tomonlama chipta", "A ticket to go there only.", "A single ticket, please.", "Bir tomonlama chipta, iltimos."),
      w("🔀", "change", "tʃeɪndʒ|cheynj", "fe'l", "Almashtirmoq (poyezd, avtobus)", "To get off one train and take another.", "Change at Amir Temur station.", "Amir Temur bekatida almashtiring."),
      w("⏭️", "next", "nekst|nekst", "sifat", "Keyingi", "Coming after this one.", "When is the next train?", "Keyingi poyezd qachon?"),
      w("🔚", "last", "lɑːst|laast", "sifat", "Oxirgi", "After all the others.", "The last bus is at eleven.", "Oxirgi avtobus soat o'n birda."),
      w("🧭", "get to", "ˈɡet tə|get tu", "fe'l", "Yetib bormoq", "To arrive at a place.", "How do I get to the station?", "Vokzalga qanday borsam bo'ladi?"),
    ],
  },
];

const DO_FORMS = ["do", "does", "don't", "doesn't"];

const BLOG = `MY STYLE — a blog by Laylo, 23, Tashkent
People often ask me about my style. I don't follow fashion — I wear what I like! I usually wear long dresses and comfortable shoes, because I walk a lot. I never wear high heels — my feet really hurt in them. My hair is very long and dark, and I sometimes wear a scarf. My brother Timur is different. He always looks very smart: a white shirt, dark trousers and black shoes. He doesn't wear jeans to work. Does he like fashion? Yes, he does — he reads fashion magazines every week!`;
const tf = trueFalse(BLOG);

const STATION = `Good morning. A ticket to Bukhara, please.
Single or return?
Return, please. I come back on Sunday.
That's three hundred thousand som.
Can I pay by card?
Yes, of course. Here's your ticket.
Thanks. Which platform does the train leave from?
Platform two. The next train leaves at ten fifteen.
Do I change trains?
No, you don't. It's a direct train.
And when is the last train back on Sunday?
At six p.m. Have a good journey!`;
const hear = hearing(STATION);

export const A1_15_EXERCISES: SeedExercise[] = [
  {
    title: "Tana a'zolari",
    skill: "Tinglash",
    kind: "listen",
    instructions: "So'z o'qiladi. Eshitganingizni toping.",
    questions: [
      listen("head", ["head", "hand", "hat", "hair"]),
      listen("hair", ["hair", "here", "ear", "head"]),
      listen("mouth", ["mouth", "month", "south", "mouse"]),
      listen("arm", ["arm", "am", "farm", "harm"]),
      listen("leg", ["leg", "egg", "back", "neck"]),
      listen("foot", ["foot", "food", "feet", "fat"]),
      listen("teeth", ["teeth", "tooth", "tea", "tea set"]),
      listen("shoulder", ["shoulder", "soldier", "older", "colder"]),
      listen("beard", ["beard", "bird", "bread", "bed"]),
      listen("platform", ["platform", "uniform", "plate", "form"]),
    ],
  },
  {
    title: "Rasmga mos so'z",
    skill: "Rasm",
    kind: "picture",
    instructions: "Rasmga qarang va mos inglizcha so'zni toping.",
    questions: [
      pick("👂", ["ear", "eye", "mouth", "hand"], 0),
      pick("👄", ["nose", "mouth", "face", "teeth"], 1),
      pick("✋", ["arm", "foot", "hand", "finger"], 2),
      pick("🦵", ["arm", "back", "neck", "leg"], 3),
      pick("🦶", ["foot", "leg", "hand", "shoulder"], 0),
      pick("💪", ["leg", "arm", "back", "head"], 1),
      pick("🧔", ["hair", "face", "beard", "head"], 2),
      pick("🦷", ["mouth", "eye", "ear", "teeth"], 3),
      pick("👁️", ["eye", "ear", "face", "hair"], 0),
      pick("🦒", ["back", "neck", "shoulder", "arm"], 1),
    ],
  },
  {
    title: "do, does, don't, doesn't",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Present Simple takrori: so'roq — Do/Does, inkor — don't/doesn't.",
    questions: [
      pick("___ you wear glasses?", ["Do", "Does", "Are", "Is"], 0),
      pick("He ___ wear jeans to work.", DO_FORMS, 3),
      pick("Where ___ your sister buy her clothes?", DO_FORMS, 1),
      pick("I ___ like high heels.", DO_FORMS, 2),
      pick("What time ___ the last train leave?", DO_FORMS, 1),
      pick("They ___ follow fashion.", DO_FORMS, 2),
      pick("How often ___ you go to the gym?", DO_FORMS, 0),
      pick("— Does she have long hair? — Yes, she ___.", DO_FORMS, 1),
      pick("— Do you change trains? — No, we ___.", DO_FORMS, 2),
      pick("My brother ___ have a beard.", DO_FORMS, 3),
    ],
  },
  {
    title: "Wh- savol yozing",
    skill: "Grammatika",
    kind: "type",
    instructions: "Javobga mos savol yozing (so'roq so'z + do/does + ega + fe'l).",
    questions: written([
      ["She lives in Bukhara. (Where…?)", "Where does she live?"],
      ["The train leaves at ten. (What time…?)", "What time does the train leave?"],
      ["He goes to the gym twice a week. (How often…?)", "How often does he go to the gym?"],
      ["I like this shirt because it's comfortable. (Why…?)", "Why do you like this shirt?"],
      ["They work in a bank. (Where…?)", "Where do they work?"],
      ["She wears a scarf in winter. (When…?)", "When does she wear a scarf?"],
      ["I take bus number 12. (Which bus…?)", "Which bus do you take?"],
      ["He speaks three languages. (How many…?)", "How many languages does he speak?"],
      ["We have dinner at seven. (What time…?)", "What time do you have dinner?", "we → savolda you: What time do you…?"],
      ["She reads fashion magazines. (What…?)", "What does she read?"],
    ]),
  },
  {
    title: "Ko'plik: foot → feet",
    skill: "Grammatika",
    kind: "type",
    instructions: "Ko'plik shaklini yozing. Ba'zi so'zlar -s olmaydi!",
    questions: written([
      ["foot", "feet"],
      ["tooth", "teeth"],
      ["hand", "hands"],
      ["eye", "eyes"],
      ["man", "men"],
      ["child", "children"],
      ["shoulder", "shoulders"],
      ["person", "people"],
      ["finger", "fingers"],
      ["woman", "women"],
    ]),
  },
  {
    title: "Vokzalda",
    skill: "Vaziyat",
    kind: "situation",
    instructions: "Vaziyatni o'qing va unga mos inglizcha iborani tanlang.",
    questions: [
      say("Samarqandga borib, qaytib kelmoqchisiz.", ["A return ticket to Samarkand, please.", "A single ticket to Samarkand, please.", "A Samarkand to ticket.", "Samarkand return, please ticket."]),
      say("Faqat bir tomonga bormoqchisiz.", ["A single ticket, please.", "A return ticket, please.", "Two tickets, please back.", "Ticket single me."]),
      say("Poyezd qaysi platformadan ketishini bilmoqchisiz.", ["Which platform does the train leave from?", "Where platform is train?", "What platform the train?", "Which train is platform?"]),
      say("Keyingi poyezd qachonligini so'rang.", ["When is the next train?", "When is the last train?", "Where is the next train?", "What is train next?"]),
      say("Oxirgi avtobusni bilmoqchisiz.", ["What time is the last bus?", "What time is the next bus?", "When last bus is?", "Which bus is last?"]),
      say("Poyezd almashtirish kerakmi, so'rang.", ["Do I change trains?", "Does I change trains?", "Am I change trains?", "Change I trains?"]),
      say("Vokzalga qanday borishni so'rang.", ["How do I get to the station?", "How I get to station?", "Where get the station?", "What is station?"]),
      say("Jadvalni ko'rmoqchisiz.", ["Where's the timetable, please?", "Where's the time, please?", "Which is the table time?", "Where's the platform time?"]),
      say("Do'stingiz bugun juda chiroyli kiyingan.", ["You look really smart today!", "You look really ugly today!", "You are look smart.", "You smart look."]),
      say("Boshingiz og'riyapti.", ["I've got a headache. / My head hurts.", "My head is hurt me.", "I have head.", "Head hurts I."]),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Chap va o'ng tomonni ulang.",
    questions: pairs([
      ["head|bosh", "face|yuz", "eye|ko'z", "ear|quloq"],
      ["mouth|og'iz", "hair|soch", "hand|qo'l (kaft)", "leg|oyoq"],
      ["back|bel", "neck|bo'yin", "shoulder|yelka", "finger|barmoq"],
      ["foot|feet", "tooth|teeth", "man|men", "child|children"],
      ["single ticket|bir tomonlama", "return ticket|borib-kelish", "platform|platforma", "timetable|jadval"],
      ["next|keyingi", "last|oxirgi", "change|almashtirmoq", "get to|yetib bormoq"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("My *foots hurt.", "foot → feet."),
      mistake("Brush your *tooths every day.", "tooth → teeth."),
      mistake("He *don't have a beard.", "he → doesn't."),
      mistake("Where *does they buy clothes?", "they → do."),
      mistake("What time does the train *leaves?", "does bor — fe'l -s siz: leave."),
      mistake("It's *very very cold.", "Bir marta yetarli: very cold yoki really cold."),
      mistake("She has *a long hair.", "hair — sanalmaydigan ot: She has long hair."),
      mistake("You look *greatly today!", "look dan keyin sifat: You look great."),
      mistake("A *returning ticket, please.", "A return ticket."),
      mistake("Does she *wears glasses?", "Does she wear…?"),
    ],
  },
  {
    title: "Suhbatni davom ettiring",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("What does your brother look like?", ["He's tall and he has a beard.", "He likes football.", "He looks at me.", "He's a doctor like."]),
      say("Does your sister have long hair?", ["Yes, she does. It's very long.", "Yes, she has.", "Yes, she is.", "Yes, she do."]),
      say("You look tired. Are you OK?", ["My head hurts. I need a rest.", "Yes, I look.", "I'm tired look.", "No, you are."]),
      say("Single or return?", ["Return, please.", "Yes, please.", "Ticket, please.", "Platform two."]),
      say("Which platform does the train leave from?", ["Platform three.", "At three.", "Three tickets.", "It's three hundred."]),
      say("Do I change trains?", ["No, you don't. It's a direct train.", "No, you doesn't.", "No, I'm not.", "Yes, you change."]),
      say("I like your style!", ["Thanks! I love this jacket.", "Yes, I like.", "Style is mine.", "No problem, style."]),
      say("How often do you go to the gym?", ["Three times a week.", "At the gym.", "Yes, often.", "By bus."]),
      say("When is the last bus?", ["At eleven p.m.", "It's the next.", "Platform eleven.", "It's last."]),
      say("Excuse me, how do I get to the station?", ["Go straight on and turn left.", "By the station.", "It's a station.", "At the station."]),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "She has long dark hair.",
      "He doesn't wear jeans to work.",
      "Does your brother have a beard?",
      "My feet really hurt.",
      "You look very smart today.",
      "Where does she buy her clothes?",
      "A return ticket to Bukhara, please.",
      "Which platform does the train leave from?",
      "When is the next train?",
      "How do I get to the station?",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: written([
      ["My ___ hurt. I walk a lot. (oyoqlar)", "feet"],
      ["Brush your ___ twice a day.", "teeth"],
      ["She ___ wear glasses. (inkor)", "doesn't"],
      ["Where ___ they live?", "do"],
      ["It's ___ hot today! (juda)", "very|really"],
      ["You ___ great in that dress!", "look"],
      ["A ___ ticket, please. I come back on Sunday.", "return"],
      ["The train leaves from ___ two.", "platform"],
      ["When is the ___ train? — In ten minutes.", "next"],
      ["How do I ___ to the station?", "get"],
    ]),
  },
  {
    title: "Mening uslubim",
    skill: "O'qish",
    kind: "truefalse",
    instructions: "Blogni o'qing va gap to'g'ri yoki noto'g'ri ekanini belgilang.",
    questions: [
      tf("Laylo follows fashion.", false, "I don't follow fashion."),
      tf("She usually wears long dresses.", true),
      tf("She wears comfortable shoes because she walks a lot.", true),
      tf("She often wears high heels.", false, "I never wear high heels."),
      tf("Her hair is short.", false, "My hair is very long and dark."),
      tf("She sometimes wears a scarf.", true),
      tf("Timur always looks smart.", true),
      tf("Timur wears jeans to work.", false, "He doesn't wear jeans to work."),
      tf("Timur likes fashion.", true),
      tf("Timur reads fashion magazines every day.", false, "every week — har hafta."),
    ],
  },
  {
    title: "Chipta kassasida",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Yo'lovchi qayerga boradi?", ["Buxoroga", "Samarqandga", "Xivaga", "Toshkentga"]),
      hear("U qanday chipta oldi?", ["Borib-kelish (return)", "Bir tomonlama (single)", "Ikkita chipta", "Aytilmagan"]),
      hear("U qachon qaytadi?", ["Yakshanba kuni", "Shanba kuni", "Ertaga", "Juma kuni"]),
      hear("Chipta qancha turadi?", ["300 000 so'm", "200 000 so'm", "350 000 so'm", "30 000 so'm"]),
      hear("U qanday to'ladi?", ["Karta bilan", "Naqd pul bilan", "To'lamadi", "Aytilmagan"]),
      hear("Poyezd qaysi platformadan jo'naydi?", ["2", "3", "4", "1"]),
      hear("Keyingi poyezd soat nechada?", ["10:15", "10:50", "9:15", "6:00"]),
      hear("Poyezd almashtirish kerakmi?", ["Yo'q, to'g'ri poyezd", "Ha, bir marta", "Ha, ikki marta", "Aytilmagan"]),
      hear("Yakshanba kuni oxirgi poyezd soat nechada?", ["18:00", "16:00", "20:00", "10:15"]),
      hear("Kassir oxirida nima deydi?", ["Have a good journey!", "Good night!", "See you on Sunday!", "Thank you!"]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "My head hurts.",
      "She has long dark hair.",
      "You look really smart!",
      "Brush your teeth.",
      "A return ticket, please.",
      "Which platform does the train leave from?",
      "When is the next train?",
      "How do I get to the station?",
      "shoulder",
      "mouth",
    ]),
  },
];
