/**
 * A1, 28-dars — «Rejalar». Kelajakdagi rejalar, ta'til va hayot maqsadlari.
 * Grammatika: be going to + fe'l (+ va –): I'm going to… / I'm not going
 * to…; kelasi zamon iboralari: tonight, tomorrow, next week, the day after
 * tomorrow, soon. Savol shakli 29-darsda. Matn va mashqlar o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  dictation,
  hearing,
  listen,
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

export const A1_28_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("➡️", "going to", "ˈɡəʊɪŋ tə|gouing ta", "ibora", "…moqchi, …adi (reja)", "We use it for plans: I'm going to…", "I'm going to study tonight.", "Bugun kechqurun dars qilmoqchiman."),
      w("🌙", "tonight", "təˈnaɪt|tanayt", "ravish", "Bugun kechqurun", "This evening or night.", "We're going to watch a film tonight.", "Bugun kechqurun film ko'ramiz."),
      w("📅", "next week", "nekst wiːk|nekst uiik", "ibora", "Kelasi hafta", "The week after this week.", "I'm going to visit my aunt next week.", "Kelasi hafta xolamnikiga boraman."),
      w("🗓️", "next year", "nekst jɪə|nekst yia", "ibora", "Kelasi yil", "The year after this year.", "My brother is going to finish school next year.", "Akam kelasi yil maktabni bitiradi."),
      w("⏭️", "the day after tomorrow", "ðə deɪ ˈɑːftə təˈmɒrəʊ|za dey aafta tamorou", "ibora", "Indinga", "In two days.", "We're going to leave the day after tomorrow.", "Indinga jo'naymiz."),
      w("⏳", "soon", "suːn|suun", "ravish", "Tez orada", "In a short time.", "See you soon!", "Tez orada ko'rishguncha!"),
      w("🔜", "later", "ˈleɪtə|leyta", "ravish", "Keyinroq", "At a time after now.", "I'm going to call you later.", "Senga keyinroq qo'ng'iroq qilaman."),
      w("🔮", "future", "ˈfjuːtʃə|fyuucha", "ot", "Kelajak", "The time after now.", "I'm going to be a doctor in the future.", "Kelajakda shifokor bo'laman."),
      w("🤞", "hope", "həʊp|houp", "fe'l, ot", "Umid qilmoq; umid", "Want something good to happen.", "I hope it's sunny tomorrow.", "Ertaga quyoshli bo'ladi, deb umid qilaman."),
      w("🤔", "decide", "dɪˈsaɪd|disayd", "fe'l", "Qaror qilmoq", "Choose what to do.", "Let's decide together.", "Keling, birga qaror qilaylik."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🐷", "save money", "seɪv ˈmʌni|seyv mani", "ibora", "Pul yig'moq", "Keep money for later.", "I'm going to save money for a car.", "Mashina uchun pul yig'moqchiman."),
      w("💼", "get a job", "ɡet ə dʒɒb|get a job", "ibora", "Ishga kirmoq", "Start working for a company.", "She's going to get a job in a bank.", "U bankka ishga kirmoqchi."),
      w("💍", "get married", "ɡet ˈmærid|get merid", "ibora", "Turmush qurmoq, uylanmoq", "Become husband and wife.", "They're going to get married in June.", "Ular iyunda turmush qurishadi."),
      w("🏠", "move house", "muːv haʊs|muuv haus", "ibora", "Ko'chib o'tmoq", "Go to live in a new home.", "We're going to move house next month.", "Kelasi oy ko'chib o'tamiz."),
      w("🏪", "start a business", "stɑːt ə ˈbɪznəs|staat a biznas", "ibora", "Biznes boshlamoq", "Open your own company or shop.", "He's going to start a business.", "U biznes boshlamoqchi."),
      w("🚗", "learn to drive", "lɜːn tə draɪv|lyorn ta drayv", "ibora", "Mashina haydashni o'rganmoq", "Have driving lessons.", "I'm going to learn to drive this summer.", "Bu yoz mashina haydashni o'rganaman."),
      w("👨‍👩‍👧", "visit relatives", "ˈvɪzɪt ˈrelətɪvz|vizit relativz", "ibora", "Qarindoshlarnikiga bormoq", "Go to see your family members.", "We're going to visit relatives in Andijan.", "Andijondagi qarindoshlarnikiga boramiz."),
      w("✅", "pass the exam", "pɑːs ði ɪɡˈzæm|paas zi igzem", "ibora", "Imtihondan o'tmoq", "Get a good result in an exam.", "I'm going to pass the exam!", "Imtihondan o'taman!"),
      w("🚙", "buy a car", "baɪ ə kɑː|bay a kaa", "ibora", "Mashina sotib olmoq", "Get a car for money.", "My brother is going to buy a car.", "Akam mashina sotib olmoqchi."),
      w("🎓", "go to university", "ɡəʊ tə ˌjuːnɪˈvɜːsəti|gou ta yuunivyorsati", "ibora", "Universitetga o'qishga kirmoq", "Study at a university after school.", "My sister is going to go to university.", "Singlim universitetga o'qishga kirmoqchi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🎒", "pack", "pæk|pek", "fe'l", "(Narsalarni) yig'moq, joylamoq", "Put things in a bag for a trip.", "I'm going to pack my bag tonight.", "Bugun kechqurun sumkamni yig'aman."),
      w("🏖️", "beach", "biːtʃ|biich", "ot", "Plyaj, sohil", "Sand next to the sea.", "We're going to lie on the beach.", "Plyajda yotamiz."),
      w("✈️", "abroad", "əˈbrɔːd|abrood", "ravish", "Chet elda, chet elga", "In or to another country.", "I'm going to study abroad.", "Chet elda o'qimoqchiman."),
      w("🏛️", "sightseeing", "ˈsaɪtsiːɪŋ|saytsiiing", "ot", "Diqqatga sazovor joylarni ko'rish", "Visiting famous places as a tourist.", "We're going to go sightseeing in Rome.", "Rimda diqqatga sazovor joylarni ko'ramiz."),
      w("⛺", "tent", "tent|tent", "ot", "Chodir", "A small house of cloth for camping.", "We're going to sleep in a tent.", "Chodirda uxlaymiz."),
      w("✉️", "invite", "ɪnˈvaɪt|invayt", "fe'l", "Taklif qilmoq", "Ask someone to come to a party or event.", "I'm going to invite all my friends.", "Barcha do'stlarimni taklif qilaman."),
      w("🏨", "book a hotel", "bʊk ə həʊˈtel|buk a houtel", "ibora", "Mehmonxona band qilmoq", "Reserve a room before you travel.", "I'm going to book a hotel online.", "Internet orqali mehmonxona band qilaman."),
      w("🔑", "rent a car", "rent ə kɑː|rent a kaa", "ibora", "Mashina ijaraga olmoq", "Pay to use a car for some days.", "We're going to rent a car.", "Mashina ijaraga olamiz."),
      w("🗿", "souvenir", "ˌsuːvəˈnɪə|suuvania", "ot", "Esdalik sovg'a", "A thing you buy to remember a trip.", "I bought a souvenir for my mum.", "Onamga esdalik sovg'a oldim."),
      w("🛫", "flight", "flaɪt|flayt", "ot", "Parvoz, reys", "A journey by plane.", "Our flight is going to leave at six.", "Reysimiz soat oltida jo'naydi."),
    ],
  },
];

const POST = `MY PLANS FOR THE SUMMER — by Malika
School finishes in two weeks, and I have big plans!
First, I'm going to pass all my exams — I hope! Then in July my family and I are going to visit relatives in Namangan. We're not going to stay long, only five days.
In August I'm going to go abroad for the first time! My aunt lives in Istanbul, and she invited me. I'm going to book a cheap flight online. We're going to go sightseeing, and I'm going to buy souvenirs for my friends. I'm not going to spend all my money — I'm going to save some for September.
And in the future? I'm going to go to university and study medicine. My parents are very happy about my plans!`;
const read = reading(POST);

const WEEKEND = `Hi, Rustam! What are your plans for the weekend?
I'm going to go camping with my brothers in the mountains.
Camping? Cool! Are you going to sleep in a tent?
Yes, we are. It's going to be cold at night, so I'm going to pack a warm jacket.
How are you going to get there?
We're going to rent a car. My brother is going to drive.
Sounds great! I'm not going to do anything special. I'm going to stay at home and have a rest.
Why don't you come with us?
Thanks, but I can't. My cousin is going to get married next week, and I'm going to help my family.`;
const hear = hearing(WEEKEND);

export const A1_28_EXERCISES: SeedExercise[] = [
  {
    title: "Nima eshitildi?",
    skill: "Tinglash",
    kind: "listen",
    instructions: "Gap o'qiladi. Eshitganingizni toping.",
    questions: [
      listen("I'm going to study.", ["I'm going to study.", "I'm going to the study.", "I'm not going to study.", "I went to study."]),
      listen("She's going to call.", ["She's going to call.", "She's going to fall.", "He's going to call.", "She isn't going to call."]),
      listen("We aren't going to stay.", ["We aren't going to stay.", "We are going to stay.", "We weren't going to stay.", "We aren't going to say."]),
      listen("tonight", ["tonight", "today", "to night", "tomorrow"]),
      listen("next week", ["next week", "last week", "next weekend", "this week"]),
      listen("the day after tomorrow", ["the day after tomorrow", "the day before yesterday", "after tomorrow", "the day tomorrow"]),
      listen("soon", ["soon", "son", "sun", "spoon"]),
      listen("abroad", ["abroad", "a broad", "a road", "aboard"]),
      listen("beach", ["beach", "peach", "teach", "bench"]),
      listen("future", ["future", "feature", "furniture", "few tour"]),
    ],
  },
  {
    title: "am, is yoki are?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "going to oldidan to be ning to'g'ri shaklini tanlang.",
    questions: [
      say("I ___ going to study tonight.", ["am", "is", "are", "be"]),
      say("She ___ going to get a job.", ["is", "am", "are", "be"]),
      say("We ___ going to move house.", ["are", "is", "am", "be"]),
      say("My parents ___ going to buy a car.", ["are", "is", "am", "be"]),
      say("It ___ going to be cold.", ["is", "are", "am", "be"]),
      say("They ___ going to get married.", ["are", "is", "am", "be"]),
      say("He ___ going to start a business.", ["is", "are", "am", "be"]),
      say("You ___ going to love this film!", ["are", "is", "am", "be"]),
      say("My sister ___ going to go to university.", ["is", "are", "am", "be"]),
      say("Aziz and I ___ going to play football.", ["are", "is", "am", "be"]),
    ],
  },
  {
    title: "Rejani yozing",
    skill: "Grammatika",
    kind: "type",
    instructions: "Gap tuzing: be going to + fe'l. Qisqartma ishlating. Masalan: I / study / tonight → I'm going to study tonight.",
    questions: written([
      ["I / visit my aunt / next week", "I'm going to visit my aunt next week."],
      ["She / learn to drive / this summer", "She's going to learn to drive this summer."],
      ["We / move house / next month", "We're going to move house next month."],
      ["He / save money / for a car", "He's going to save money for a car."],
      ["They / get married / in June", "They're going to get married in June."],
      ["I / pack my bag / tonight", "I'm going to pack my bag tonight."],
      ["We / rent a car", "We're going to rent a car."],
      ["She / study abroad", "She's going to study abroad."],
      ["I / call you / later", "I'm going to call you later."],
      ["They / sleep in a tent", "They're going to sleep in a tent."],
    ]),
  },
  {
    title: "Inkor shakli",
    skill: "Grammatika",
    kind: "type",
    instructions: "Gapni inkorga aylantiring. Qisqartma ishlating: I'm not, isn't, aren't. Masalan: I'm going to go. → I'm not going to go.",
    questions: written([
      ["I'm going to stay at home.", "I'm not going to stay at home."],
      ["She's going to buy a car.", "She isn't going to buy a car."],
      ["We're going to take a taxi.", "We aren't going to take a taxi."],
      ["He's going to get a job.", "He isn't going to get a job."],
      ["They're going to invite him.", "They aren't going to invite him."],
      ["I'm going to watch TV tonight.", "I'm not going to watch TV tonight."],
      ["It's going to rain.", "It isn't going to rain."],
      ["We're going to go sightseeing.", "We aren't going to go sightseeing."],
      ["My dad is going to drive.", "My dad isn't going to drive."],
      ["You're going to be late.", "You aren't going to be late."],
    ]),
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Iborani tugating yoki tarjimasini toping.",
    questions: pairs([
      ["save|money", "get|married", "move|house", "start|a business"],
      ["learn|to drive", "visit|relatives", "book|a hotel", "rent|a car"],
      ["go|sightseeing", "pass|the exam", "go to|university", "sleep in|a tent"],
      ["tonight|bugun kechqurun", "soon|tez orada", "later|keyinroq", "future|kelajak"],
      ["next week|kelasi hafta", "next year|kelasi yil", "the day after tomorrow|indinga", "abroad|chet elda"],
      ["beach|plyaj", "souvenir|esdalik sovg'a", "journey|yo'l, safar", "hope|umid qilmoq"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("I *going to study tonight.", "be kerak: I'm going to…"),
      mistake("She *are going to get a job.", "she → is."),
      mistake("We're going to *moving house.", "going to + oddiy fe'l: move."),
      mistake("He's going *study abroad.", "to kerak: going to study."),
      mistake("They *don't going to come.", "Inkor: aren't going to."),
      mistake("I'm going to visit my aunt *last week.", "Kelasi zamon: next week."),
      mistake("I'm going to visit you *on tonight.", "tonight dan oldin predlog kerak emas: …visit you tonight."),
      mistake("It's going to *is cold.", "going to + be: It's going to be cold."),
      mistake("My parents *is going to buy a car.", "parents — ko'plik: are."),
      mistake("I'm going to call you *latter.", "Keyinroq — later."),
    ],
  },
  {
    title: "Rejalar haqida suhbat",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("What are your plans for the weekend?", ["I'm going to visit my grandparents.", "I visited my grandparents.", "I going to visit them.", "I'm going visit them."]),
      say("What are you going to do tonight?", ["I'm going to watch a film.", "I watched a film tonight.", "I'm go to watch a film.", "I'm going to watched a film."]),
      say("What are you going to do after school?", ["I'm going to go to university.", "I went to university.", "I'm going university to.", "I'm going to went to university."]),
      say("Let's go to the cinema tonight!", ["Sorry, I can't. I'm going to study.", "Sorry, I'm going to studied.", "Yes, I went.", "No, I'm not going tonight to."]),
      say("Where are you going to stay in Istanbul?", ["We're going to book a hotel.", "We booked a hotel last year.", "We're going book a hotel.", "We stay hotel."]),
      say("I'm going to get married next month!", ["Congratulations!", "What a pity!", "Get well soon!", "Sorry I'm late!"]),
      say("When are you going to leave?", ["The day after tomorrow.", "The day before yesterday.", "Two days ago.", "Last week."]),
      say("Is your brother going to drive?", ["No, he isn't. He can't drive.", "No, he didn't.", "No, he doesn't going.", "No, he wasn't."]),
      say("I'm going to pass all my exams!", ["Good luck!", "Enjoy your meal!", "What a pity!", "Happy New Year!"]),
      say("See you later!", ["See you soon!", "See you yesterday!", "Nice to meet you!", "I'm going to later."]),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "I'm going to study tonight.",
      "We're going to move house next month.",
      "She's going to get a job in a bank.",
      "They're going to get married in June.",
      "I'm not going to stay at home.",
      "He isn't going to buy a car.",
      "We're going to sleep in a tent.",
      "I'm going to book a hotel online.",
      "My sister is going to go to university.",
      "I hope it's sunny tomorrow.",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Bo'sh joyga bitta so'z yozing.",
    questions: written([
      ["I'm ___ to visit my grandparents.", "going"],
      ["She's going ___ learn to drive.", "to"],
      ["We ___ going to stay long. (inkor)", "aren't"],
      ["He ___ going to come. He's ill. (inkor)", "isn't"],
      ["I'm going to visit Samarkand ___ week.", "next"],
      ["We're going to leave the day ___ tomorrow.", "after"],
      ["I'm going to ___ my bag tonight.", "pack"],
      ["They're going to get ___ in June.", "married"],
      ["I'm going to study ___ — in London! (chet elda)", "abroad"],
      ["See you ___! (tez orada)", "soon"],
    ]),
  },
  {
    title: "Malikaning rejalari",
    skill: "Matn bilan ishlash",
    kind: "reading",
    instructions: "Blogni diqqat bilan o'qing va har bir savolga javob bering.",
    questions: [
      read("When does school finish?", ["In two weeks", "Next month", "Tomorrow", "In July"]),
      read("What is Malika going to do first?", ["Pass her exams", "Go abroad", "Visit relatives", "Get a job"]),
      read("Where do her relatives live?", ["In Namangan", "In Istanbul", "In Tashkent", "The text doesn't say."]),
      read("How long are they going to stay with their relatives?", ["Five days", "Two weeks", "One month", "All summer"]),
      read("When is Malika going to go abroad?", ["In August", "In July", "In September", "Next year"]),
      read("Who invited her to Istanbul?", ["Her aunt", "Her friend", "Her school", "Her cousin"]),
      read("How is she going to book the flight?", ["Online", "At the airport", "By phone", "Her aunt is going to book it."]),
      read("What is she going to buy for her friends?", ["Souvenirs", "Clothes", "Books", "Sweets"]),
      read("Why isn't she going to spend all her money?", ["She's going to save some for September.", "She hasn't got any money.", "Her aunt is going to pay.", "The text doesn't say."]),
      read("What is she going to study at university?", ["Medicine", "English", "Business", "Music"]),
    ],
  },
  {
    title: "Dam olish rejalari",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Rustam dam olish kunlari nima qilmoqchi?", ["Tog'da chodirda dam olmoqchi", "Uyda dam olmoqchi", "Plyajga bormoqchi", "Ishlamoqchi"]),
      hear("U kim bilan boradi?", ["Akalari bilan", "Do'stlari bilan", "Ota-onasi bilan", "Yolg'iz"]),
      hear("Ular qayerda uxlashadi?", ["Chodirda", "Mehmonxonada", "Qarindoshlarnikida", "Mashinada"]),
      hear("Nima uchun Rustam issiq kurtka oladi?", ["Kechasi sovuq bo'ladi", "Yomg'ir yog'adi", "Onasi aytdi", "Aytilmagan"]),
      hear("Ular u yerga qanday borishadi?", ["Ijaraga olingan mashinada", "Avtobusda", "Poyezdda", "Piyoda"]),
      hear("Kim mashina haydaydi?", ["Rustamning akasi", "Rustam", "Rustamning otasi", "Taksi haydovchisi"]),
      hear("Ikkinchi odam dam olish kunlari nima qiladi?", ["Uyda dam oladi", "Tog'ga boradi", "Ishlaydi", "Sayohat qiladi"]),
      hear("Rustam uni nima qilishga taklif qildi?", ["Ular bilan birga borishga", "Kinoga borishga", "Uyda qolishga", "To'yga borishga"]),
      hear("Nima uchun u bora olmaydi?", ["Amakivachchasining to'yi bor", "Kasal", "Imtihoni bor", "Pul yo'q"]),
      hear("To'y qachon?", ["Kelasi hafta", "Ertaga", "Bugun kechqurun", "Kelasi oy"]),
    ],
  },
  {
    title: "Diktant",
    skill: "Yozish",
    kind: "dictation",
    instructions: "Gapni tinglang va eshitganingizni yozing.",
    questions: dictation([
      "I'm going to study.",
      "She's going to call.",
      "We aren't going to stay.",
      "See you soon!",
      "I'm going to call you later.",
      "We're going to rent a car.",
      "next week",
      "tonight",
      "I hope so.",
      "Good luck!",
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "I'm going to study tonight.",
      "We're going to move house.",
      "I'm not going to stay at home.",
      "She's going to get a job.",
      "next week",
      "the day after tomorrow",
      "See you soon!",
      "I hope so.",
      "abroad",
      "sightseeing",
    ]),
  },
];
