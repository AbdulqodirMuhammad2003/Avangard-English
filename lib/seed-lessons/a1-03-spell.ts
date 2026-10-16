/**
 * A1, 3-dars — «Ismingiz qanday yoziladi?». So'roq so'zlari (what, who,
 * where, how, how old) to be bilan, ismni harflab aytish, anketa to'ldirish
 * (ism, familiya, manzil, telefon, email), sinfda kerakli iboralar va
 * xayrlashish. Matn va mashqlar o'zimizniki.
 */
import type { SeedExercise, SeedQuestion } from "../seed-exercises";
import {
  hearing,
  mistake,
  pairs,
  phrases,
  pick,
  reading,
  say,
  sentences,
  w,
  written,
  type Rounds,
} from "./helpers";

export const A1_03_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("❔", "what", "wɒt|uot", "so'roq so'z", "Nima; qanday", "A question word about a thing.", "What is your surname?", "Familiyangiz nima?"),
      w("🧑", "who", "huː|xuu", "so'roq so'z", "Kim", "A question word about a person.", "Who is your teacher?", "O'qituvchingiz kim?"),
      w("🤔", "how", "haʊ|xau", "so'roq so'z", "Qanday; qanaqa", "A question word about the way.", "How do you spell it?", "U qanday yoziladi?"),
      w("🎂", "how old", "ˌhaʊ ˈəʊld|xau ould", "ibora", "Necha yoshda", "A question about age.", "How old are you?", "Necha yoshdasiz?"),
      w("🪪", "first name", "ˈfɜːst neɪm|fyost neym", "ibora", "Ism", "Your name, not your family name: Dilnoza, Aziz.", "My first name is Dilnoza.", "Mening ismim Dilnoza."),
      w("👨‍👩‍👧", "surname", "ˈsɜːneɪm|syoneym", "ot", "Familiya", "Your family name: Karimov, Rakhimova.", "My surname is Karimov.", "Familiyam — Karimov."),
      w("🏠", "address", "əˈdres|adres", "ot", "Manzil", "The street and number of your home.", "My address is 5 Navoi Street.", "Manzilim — Navoiy ko'chasi, 5."),
      w("📞", "phone number", "ˈfəʊn ˌnʌmbə|foun namba", "ibora", "Telefon raqami", "Numbers you call to talk to a person.", "My phone number is 90 123 45 67.", "Telefon raqamim 90 123 45 67."),
      w("📧", "email", "ˈiːmeɪl|iimeyl", "ot", "Elektron pochta", "A message on the internet, or its address.", "Write your email here, please.", "Elektron pochtangizni shu yerga yozing, iltimos."),
      w("🔢", "age", "eɪdʒ|eyj", "ot", "Yosh", "How old a person is.", "Write your name and age.", "Ismingiz va yoshingizni yozing."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🔤", "spell", "spel|spel", "fe'l", "Harflab aytmoq (yozmoq)", "To say or write the letters of a word.", "How do you spell your name?", "Ismingiz qanday harflanadi?"),
      w("🅰️", "letter", "ˈletə|leta", "ot", "Harf", "A, B, C… are letters.", "A is the first letter of the alphabet.", "A — alifboning birinchi harfi."),
      w("💬", "word", "wɜːd|uyod", "ot", "So'z", "«Apple» is a word. It has five letters.", "What is this word?", "Bu qanday so'z?"),
      w("🙋", "question", "ˈkwestʃən|kueschen", "ot", "Savol", "You ask it. It ends with «?».", "Sorry, one question!", "Kechirasiz, bitta savol!"),
      w("✅", "answer", "ˈɑːnsə|aansa", "ot", "Javob", "What you say after a question.", "The answer is ten.", "Javob — o'n."),
      w("🔁", "repeat", "rɪˈpiːt|ripiit", "fe'l", "Takrorlamoq", "To say something one more time.", "Can you repeat that, please?", "Buni takrorlay olasizmi, iltimos?"),
      w("↩️", "again", "əˈɡen|agen", "ravish", "Yana, qaytadan", "One more time.", "Say it again, please.", "Yana bir bor ayting, iltimos."),
      w("🐢", "slowly", "ˈsləʊli|slouli", "ravish", "Sekin", "Not fast.", "Please speak slowly.", "Iltimos, sekinroq gapiring."),
      w("💡", "understand", "ˌʌndəˈstænd|andastend", "fe'l", "Tushunmoq", "To know what something means.", "Sorry, I don't understand.", "Kechirasiz, tushunmadim."),
      w("🤷", "I don't know", "aɪ dəʊnt ˈnəʊ|ay dount nou", "ibora", "Bilmayman", "You say it when you have no answer.", "Sorry, I don't know.", "Kechirasiz, bilmayman."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("👋", "see you later", "ˌsiː juː ˈleɪtə|sii yu leyta", "ibora", "Keyinroq ko'rishamiz", "Goodbye for a short time.", "Bye! See you later!", "Xayr! Keyinroq ko'rishamiz!"),
      w("📅", "see you tomorrow", "ˌsiː juː təˈmɒrəʊ|sii yu tamorou", "ibora", "Ertaga ko'rishamiz", "Goodbye until the next day.", "Good night! See you tomorrow!", "Xayrli tun! Ertaga ko'rishamiz!"),
      w("🌞", "have a nice day", "hæv ə ˌnaɪs ˈdeɪ|hev a nays dey", "ibora", "Kuningiz yaxshi o'tsin", "A friendly goodbye in the day.", "Thank you! Have a nice day!", "Rahmat! Kuningiz yaxshi o'tsin!"),
      w("🤗", "welcome", "ˈwelkəm|uelkam", "undov", "Xush kelibsiz", "You say it to a new guest or student.", "Welcome to our school!", "Maktabimizga xush kelibsiz!"),
      w("👩", "Mrs", "ˈmɪsɪz|misiz", "ot", "Xonim (turmushga chiqqan ayol)", "A title for a married woman: Mrs Karimova.", "This is Mrs Karimova, my teacher.", "Bu — Karimova xonim, mening o'qituvchim."),
      w("👱‍♀️", "Miss", "mɪs|mis", "ot", "Qiz, xonim (turmushga chiqmagan)", "A title for a young woman who is not married.", "Excuse me, Miss!", "Kechirasiz, qizim (xonim)!"),
      w("💍", "married", "ˈmærid|merid", "sifat", "Uylangan, turmush qurgan", "With a husband or a wife.", "Are you married?", "Turmush qurganmisiz?"),
      w("🧍", "single", "ˈsɪŋɡl|singl", "sifat", "Bo'ydoq, turmush qurmagan", "Not married.", "No, I'm single.", "Yo'q, men turmush qurmaganman."),
      w("📝", "form", "fɔːm|foom", "ot", "Anketa, blanka", "A paper with questions: name, age, address…", "Please fill in this form.", "Iltimos, bu anketani to'ldiring."),
      w("🌐", "nationality", "ˌnæʃəˈnæləti|neshanaliti", "ot", "Millat; fuqarolik", "Uzbek, English, Japanese…", "My nationality is Uzbek.", "Millatim — o'zbek."),
    ],
  },
];

/** Harflab aytilgan ism: `audio` — harflar vergul bilan (ovoz harf nomini o'qiydi). */
const spelled = (name: string, options: string[]): SeedQuestion => ({
  prompt: "Qaysi ism harflab aytildi?",
  audio: name.toUpperCase().split("").join(", "),
  options,
  correct: options.indexOf(name),
});

const QW = ["What", "Who", "Where", "How"];

const FORM = `STUDENT FORM — AVANGARD ENGLISH
First name: Dilnoza
Surname: Rakhimova
Age: 19
Nationality: Uzbek
Address: 12 Amir Temur Street, Tashkent
Phone number: 90 123 45 67
Email: dilnoza.r@mail.uz
Married / Single: Single`;
const read = reading(FORM);

const CALL = `Hello, Avangard English school. How can I help you?
Hi! I'm a new student.
Welcome! What's your name?
My name is Ali Sharipov.
How do you spell your surname?
S, H, A, R, I, P, O, V.
Thank you. How old are you, Ali?
I'm eighteen.
And what's your phone number?
It's 93 555 12 34.
Great. Your first lesson is tomorrow at nine. See you tomorrow!
Thank you. Goodbye!`;
const hear = hearing(CALL);

export const A1_03_EXERCISES: SeedExercise[] = [
  {
    title: "Harflab aytilgan ism",
    skill: "Tinglash",
    kind: "listen",
    instructions: "Ism harfma-harf aytiladi. Qaysi ism ekanini toping. G — «ji», J — «jey», E — «ii», I — «ay» ekanini eslang.",
    questions: [
      spelled("Aziz", ["Aziz", "Azim", "Eziz", "Iziz"]),
      spelled("Jasur", ["Gasur", "Jasur", "Yasur", "Jahur"]),
      spelled("Gulnora", ["Julnora", "Gulnora", "Gulnara", "Kulnora"]),
      spelled("Erkin", ["Irkin", "Arkin", "Erkin", "Erkan"]),
      spelled("Kamola", ["Kamola", "Camola", "Kamila", "Komola"]),
      spelled("Yusuf", ["Usuf", "Yusif", "Iusuf", "Yusuf"]),
      spelled("Ravshan", ["Ravshan", "Rafshan", "Rawshan", "Ravhan"]),
      spelled("Hilola", ["Xilola", "Hilola", "Hilala", "Holola"]),
      spelled("Sardor", ["Sardar", "Serdor", "Sardor", "Sordor"]),
      spelled("Iroda", ["Iroda", "Eroda", "Aroda", "Iruda"]),
    ],
  },
  {
    title: "Qaysi so'roq so'z?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "What — nima, Who — kim, Where — qayerda/qayerdan, How — qanday. Mos so'roq so'zni tanlang.",
    questions: [
      pick("___ is your name?", QW, 0),
      pick("___ is your teacher? — Mrs Karimova.", QW, 1),
      pick("___ are you from? — Japan.", QW, 2),
      pick("___ are you? — Fine, thanks.", QW, 3),
      pick("___ old are you? — I'm 20.", QW, 3, "Yosh haqida — How old…?"),
      pick("___ is your phone number?", QW, 0),
      pick("___ is that man? — He's my father.", QW, 1),
      pick("___ is Samarkand? — In Uzbekistan.", QW, 2),
      pick("___ do you spell it? — K-E-Y.", QW, 3),
      pick("___ is your address?", QW, 0, "Manzil haqida — What is your address? (Where emas!)"),
    ],
  },
  {
    title: "Anketa so'zlari",
    skill: "Rasm",
    kind: "picture",
    instructions: "Rasmga qarang va mos inglizcha so'zni toping.",
    questions: [
      pick("📞", ["phone number", "address", "email", "age"], 0),
      pick("📧", ["form", "email", "letter", "word"], 1),
      pick("🏠", ["age", "surname", "address", "single"], 2),
      pick("🎂", ["nationality", "form", "email", "how old"], 3),
      pick("📝", ["form", "word", "map", "flag"], 0),
      pick("💍", ["single", "married", "Miss", "welcome"], 1),
      pick("🐢", ["again", "repeat", "slowly", "answer"], 2),
      pick("🔁", ["question", "spell", "understand", "repeat"], 3),
      pick("🤷", ["I don't know", "I understand", "welcome", "see you later"], 0),
      pick("🙋", ["answer", "question", "letter", "who"], 1),
    ],
  },
  {
    title: "Savol va javob",
    skill: "Juftlik",
    kind: "match",
    instructions: "Savolni unga mos javob bilan ulang.",
    questions: pairs([
      ["What's your name?|Kamola.", "How old are you?|I'm 21.", "Where are you from?|Bukhara.", "How are you?|Fine, thanks."],
      ["Who is your teacher?|Mrs Brown.", "What's your surname?|Karimov.", "Are you married?|No, I'm single.", "What's your nationality?|Uzbek."],
      ["How do you spell it?|K-E-Y.", "What's your phone number?|90 111 22 33.", "What's your email?|aziz@mail.uz", "Where is Tokyo?|In Japan."],
      ["what|nima", "who|kim", "where|qayerda", "how|qanday"],
      ["surname|familiya", "first name|ism", "address|manzil", "age|yosh"],
      ["see you later|keyinroq ko'rishamiz", "see you tomorrow|ertaga ko'rishamiz", "have a nice day|kuningiz yaxshi o'tsin", "welcome|xush kelibsiz"],
      ["repeat|takrorlamoq", "spell|harflamoq", "understand|tushunmoq", "slowly|sekin"],
    ]),
  },
  {
    title: "Sinfda",
    skill: "Vaziyat",
    kind: "situation",
    instructions: "Vaziyatni o'qing va unga mos inglizcha iborani tanlang.",
    questions: [
      say("O'qituvchi juda tez gapiryapti.", ["Please speak slowly.", "Have a nice day.", "See you tomorrow.", "I'm single."]),
      say("O'qituvchining gapini eshitmay qoldingiz.", ["Can you repeat that, please?", "How old are you?", "Welcome!", "I'm married."]),
      say("Yangi so'zning yozilishini bilmoqchisiz.", ["How do you spell it?", "Where are you from?", "Who are you?", "See you later!"]),
      say("Savolga javobni bilmaysiz.", ["Sorry, I don't know.", "Yes, I am.", "Have a nice day!", "Again, please."]),
      say("Gapni tushunmadingiz.", ["Sorry, I don't understand.", "I don't know my name.", "Nice to meet you!", "Good morning!"]),
      say("Do'stingiz bilan bir soatdan keyin yana ko'rishasiz.", ["See you later!", "See you tomorrow!", "Good night!", "Welcome!"]),
      say("Dars tugadi, ertaga yana dars bor.", ["See you tomorrow!", "See you later, in five minutes!", "Have a nice holiday!", "Welcome!"]),
      say("Do'kondan chiqyapsiz, sotuvchi «Thank you!» dedi.", ["Thank you! Have a nice day!", "Good night! See you tomorrow!", "Welcome!", "How old are you?"]),
      say("Maktabga yangi o'quvchi keldi.", ["Welcome to our school!", "See you later!", "I don't know.", "Speak slowly."]),
      say("Darsda savol bermoqchisiz.", ["Excuse me, one question!", "Sorry, I'm married.", "Have a nice day!", "Welcome!"]),
    ],
  },
  {
    title: "Suhbatni davom ettiring",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("What's your surname?", ["It's Karimov.", "I'm fine.", "It's 19.", "From Tashkent."]),
      say("How do you spell it?", ["K, A, R, I, M, O, V.", "Yes, I do.", "It's my name.", "Slowly, please."]),
      say("How old are you?", ["I'm nineteen.", "I'm fine.", "I'm old.", "I'm nineteen old."], "Yosh: I'm 19. («years old» qo'shish mumkin: I'm 19 years old.)"),
      say("What's your nationality?", ["I'm Uzbek.", "I'm Uzbekistan.", "I'm from Uzbek.", "My Uzbek."]),
      say("Are you married?", ["No, I'm single.", "No, I'm not single.", "Yes, I'm.", "Married, no."]),
      say("What's your email?", ["It's aziz@mail.uz.", "It's 90 123 45 67.", "It's Navoi Street.", "It's Aziz."]),
      say("Who is that?", ["That's Mrs Karimova, our teacher.", "That's 19.", "That's Uzbek.", "That's Navoi Street."]),
      say("Can you repeat that, please?", ["Sure. My name is Dilnoza.", "I don't know.", "See you later.", "Welcome."]),
      say("Bye! See you tomorrow!", ["Bye! Have a nice day!", "Welcome!", "How old are you?", "Nice to meet you!"]),
      say("Please fill in this form.", ["OK. Have you got a pen?", "I'm fine, thanks.", "No, I'm single.", "Good night!"]),
    ],
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("What *are your name?", "Name — bitta narsa: What is (What's) your name?"),
      mistake("Where *you are from?", "So'roq: Where are you from?"),
      mistake("How *many are you? — I'm 20.", "Yosh haqida: How old are you?"),
      mistake("*Where is your teacher? — Mrs Brown.", "Odam haqida — Who: Who is your teacher?"),
      mistake("I'm 20 *year old.", "years old — ko'plikda: I'm 20 years old."),
      mistake("What is your *surname? — Aziz.", "Aziz — bu ism: What is your first name? — Aziz."),
      mistake("Sorry, I don't *understanding.", "Sorry, I don't understand."),
      mistake("How do you *spelling it?", "How do you spell it?"),
      mistake("I'm *Uzbekistan.", "Millat — Uzbek: I'm Uzbek. (I'm from Uzbekistan.)"),
      mistake("See you *tomorrow later!", "Bitta ibora tanlanadi: See you later! yoki See you tomorrow!"),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "What is your surname?",
      "How do you spell it?",
      "How old are you?",
      "Who is your teacher?",
      "My first name is Dilnoza.",
      "Please fill in this form.",
      "Can you repeat that, please?",
      "Please speak slowly.",
      "Sorry, I don't understand.",
      "See you tomorrow!",
    ]),
  },
  {
    title: "Anketani to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: written([
      ["What's your ___? — Rakhimova.", "surname"],
      ["How ___ are you? — I'm 19.", "old"],
      ["___ is your teacher? — Mr Brown.", "Who"],
      ["What's your phone ___?", "number"],
      ["How do you ___ your name?", "spell"],
      ["Sorry, I don't ___.", "understand|know"],
      ["Can you ___ that, please?", "repeat"],
      ["Please speak ___.", "slowly"],
      ["___ to our school!", "Welcome"],
      ["Are you married? — No, I'm ___.", "single"],
    ]),
  },
  {
    title: "Talaba anketasi",
    skill: "Matn bilan ishlash",
    kind: "reading",
    instructions: "Anketani diqqat bilan o'qing va har bir savolga javob bering.",
    questions: [
      read("Talabaning ismi nima?", ["Dilnoza", "Rakhimova", "Amir", "Temur"]),
      read("Uning familiyasi qanday?", ["Rakhimova", "Dilnoza", "Karimova", "Tashkent"]),
      read("U necha yoshda?", ["19", "12", "90", "45"]),
      read("Uning millati?", ["O'zbek", "Ingliz", "Rus", "Aytilmagan"]),
      read("U qaysi shaharda yashaydi?", ["Toshkentda", "Samarqandda", "Buxoroda", "Aytilmagan"]),
      read("Ko'cha nomi qanday?", ["Amir Temur", "Navoi", "Avangard", "Tashkent"]),
      read("Uy raqami nechchi?", ["12", "19", "90", "45"]),
      read("Uning elektron pochtasi qaysi?", ["dilnoza.r@mail.uz", "rakhimova@mail.uz", "dilnoza@gmail.com", "90 123 45 67"]),
      read("U turmush qurganmi?", ["Yo'q, single", "Ha, married", "Aytilmagan", "Ha, Mrs"]),
      read("Bu anketa qayerniki?", ["Avangard English maktabiniki", "Mehmonxonaniki", "Aeroportniki", "Bankniki"]),
    ],
  },
  {
    title: "Telefon qo'ng'irog'i",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Telefondagi suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Kim qo'ng'iroq qildi?", ["Yangi talaba", "O'qituvchi", "Mehmonxona xodimi", "Ota-ona"]),
      hear("Talabaning ismi nima?", ["Ali", "Aziz", "Avangard", "Sharif"]),
      hear("Uning familiyasi qanday yoziladi?", ["Sharipov", "Sharifov", "Sharapov", "Sheripov"]),
      hear("Ali necha yoshda?", ["18", "8", "80", "19"], "eighteen — 18."),
      hear("Uning telefon raqami qaysi?", ["93 555 12 34", "90 555 12 34", "93 515 12 34", "93 555 21 43"]),
      hear("Birinchi dars qachon?", ["Ertaga soat 9 da", "Bugun soat 9 da", "Ertaga soat 10 da", "Kechqurun"]),
      hear("Maktab nomi nima?", ["Avangard English", "Tashkent English", "Avangard School", "English Centre"]),
      hear("Xodim «Welcome!» deganda nima demoqchi?", ["Xush kelibsiz!", "Xayr!", "Rahmat!", "Kechirasiz!"]),
      hear("Suhbat qanday tugaydi?", ["Thank you. Goodbye!", "Good night!", "See you later!", "Have a nice day!"]),
      hear("Xodim nima haqida SO'RAMADI?", ["Manzili", "Familiyasi", "Yoshi", "Telefon raqami"]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "What's your name?",
      "How do you spell it?",
      "How old are you?",
      "Who is your teacher?",
      "Can you repeat that, please?",
      "Sorry, I don't understand.",
      "Please speak slowly.",
      "See you tomorrow!",
      "Have a nice day!",
      "Welcome to our school!",
    ]),
  },
];
