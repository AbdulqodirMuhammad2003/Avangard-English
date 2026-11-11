/**
 * A1, 1-dars — «Hello! Tanishuv». Navigate A1, 1.1 «On business or on
 * holiday?» va 1.4 «hello and goodbye» asosida: o'zini tanishtirish,
 * on business / on holiday / to study, salomlashish va xayrlashish.
 * Grammatika: to be — I am / you are, inkor, so'roq va qisqa javoblar;
 * darak gap va so'roq gapni farqlash. Tinglash mashqlarida kitob treklari
 * (yopiq ombordan), savollar va matnlar o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  gaps,
  hearing,
  hearingTwo,
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

const track = (n: string) => `media:navigate-a1/audio/${n}.mp3`;

export const A1_01_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("👋", "hello", "həˈləʊ|halou", "undov", "Salom; assalomu alaykum", "A word you say when you meet someone.", "Hello, I'm Alisa.", "Salom, men Alisaman."),
      w("🙋", "hi", "haɪ|hay", "undov", "Salom (oddiy)", "An informal «hello».", "Hi, I'm Paul.", "Salom, men Polman."),
      w("🏷️", "name", "neɪm|neym", "ot", "Ism", "What people call you: Paul, Alisa, Aziz…", "My name is Sunil.", "Mening ismim Sunil."),
      w("🤝", "nice to meet you", "ˌnaɪs tə ˈmiːt juː|nays tu miit yu", "ibora", "Tanishganimdan xursandman", "You say it when you meet a new person.", "Nice to meet you, Julie.", "Tanishganimdan xursandman, Juli."),
      w("↩️", "and you", "ənd ˈjuː|end yu", "ibora", "Sizni ham; o'zingiz-chi?", "You say it to give the same words back, or to ask the same question.", "I'm fine, thanks. And you?", "Yaxshi, rahmat. O'zingiz-chi?"),
      w("🙋‍♀️", "introduce", "ˌɪntrəˈdjuːs|intradyuus", "fe'l", "Tanishtirmoq", "Tell a new person your name.", "Introduce yourself to a partner.", "Sherigingizga o'zingizni tanishtiring."),
      w("👎", "no", "nəʊ|nou", "ravish", "Yo'q", "The answer when something is not true.", "No, I'm not.", "Yo'q, unday emasman."),
      w("📍", "here", "hɪə|hia", "ravish", "Bu yerda", "In this place.", "Are you here on business?", "Bu yerga ish bilan keldingizmi?"),
      w("🏖️", "on holiday", "ɒn ˈhɒlədeɪ|on holadey", "ibora", "Ta'tilda, dam olishda", "Not at work; travelling for fun.", "I'm here on holiday.", "Men bu yerga dam olishga kelganman."),
      w("💼", "on business", "ɒn ˈbɪznəs|on biznas", "ibora", "Ish bilan (xizmat safarida)", "Travelling for your work.", "Paul is here on business.", "Pol bu yerga ish bilan kelgan."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("📚", "study", "ˈstʌdi|stadi", "fe'l", "O'qimoq, tahsil olmoq", "Learn at a school or university.", "I'm here to study.", "Men bu yerga o'qishga kelganman."),
      w("👂", "listen", "ˈlɪsn|lisn", "fe'l", "Tinglamoq", "Hear something and pay attention to it.", "Listen and repeat.", "Tinglang va takrorlang."),
      w("🔁", "repeat", "rɪˈpiːt|ripiit", "fe'l", "Takrorlamoq", "Say something again.", "Listen again and repeat the words.", "Yana tinglang va so'zlarni takrorlang."),
      w("📖", "read", "riːd|riid", "fe'l", "O'qimoq (matnni)", "Look at words and understand them.", "Listen and read the conversation.", "Suhbatni tinglang va o'qing."),
      w("🗣️", "practise", "ˈpræktɪs|praktis", "fe'l", "Mashq qilmoq", "Do something again and again to be better.", "Practise the conversation with a partner.", "Suhbatni sherigingiz bilan mashq qiling."),
      w("👫", "partner", "ˈpɑːtnə|paatna", "ot", "Sherik (darsdagi)", "The person you work with in class.", "Work with a partner.", "Sherigingiz bilan ishlang."),
      w("💬", "conversation", "ˌkɒnvəˈseɪʃn|konvaseyshn", "ot", "Suhbat", "A talk between two or more people.", "Practise the conversation with a partner.", "Suhbatni sherigingiz bilan mashq qiling."),
      w("❓", "question", "ˈkwestʃən|kuesschan", "ot", "Savol", "Something you ask.", "«Are you on holiday?» is a question.", "«Are you on holiday?» — bu savol."),
      w("💡", "answer", "ˈɑːnsə|aansa", "ot, fe'l", "Javob; javob bermoq", "What you say when someone asks you something.", "Ask a question and give an answer.", "Savol bering va javob qaytaring."),
      w("✅", "check", "tʃek|chek", "fe'l", "Tekshirmoq", "Look again to see if something is right.", "Listen and check your answers.", "Tinglang va javoblaringizni tekshiring."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🌅", "good morning", "ɡʊd ˈmɔːnɪŋ|gud mooning", "ibora", "Xayrli tong", "Hello in the morning (before 12 o'clock).", "Good morning, Patrick.", "Xayrli tong, Patrik."),
      w("🙂", "how are you", "ˌhaʊ ə ˈjuː|hau aa yu", "ibora", "Qalaysiz? Ishlaringiz yaxshimi?", "A question about how a person feels.", "Hi. How are you?", "Salom. Qalaysiz?"),
      w("😊", "fine", "faɪn|fayn", "sifat", "Yaxshi, joyida", "OK, well.", "Fine, thanks. And you?", "Yaxshi, rahmat. O'zingiz-chi?"),
      w("🤩", "great", "ɡreɪt|greyt", "sifat", "Ajoyib, zo'r", "Very good.", "Great, thanks!", "Zo'r, rahmat!"),
      w("🙏", "thanks", "θæŋks|senks", "undov", "Rahmat", "A short way to say «thank you».", "Thanks. You, too.", "Rahmat. Sizga ham."),
      w("☀️", "have a nice day", "ˌhæv ə ˌnaɪs ˈdeɪ|hev a nays dey", "ibora", "Kuningiz yaxshi o'tsin", "You say it when you leave someone in the day.", "Have a nice day, Sally!", "Kuningiz yaxshi o'tsin, Salli!"),
      w("➕", "too", "tuː|tuu", "ravish", "Ham", "Also.", "I'm here on business, too.", "Men ham bu yerga ish bilan kelganman."),
      w("🚪", "goodbye", "ˌɡʊdˈbaɪ|gudbay", "undov", "Xayr", "A word you say when you leave.", "Goodbye, Mr Karimov.", "Xayr, Karimov janoblari."),
      w("✋", "bye", "baɪ|bay", "undov", "Xayr (oddiy)", "An informal «goodbye».", "Bye, Malika!", "Xayr, Malika!"),
      w("🔜", "see you later", "ˌsiː juː ˈleɪtə|sii yu leyta", "ibora", "Keyinroq ko'rishamiz", "Goodbye — we meet again soon.", "Bye. See you later!", "Xayr. Keyinroq ko'rishamiz!"),
    ],
  },
];

const MEETING = `Dilnoza: Hello, I'm Dilnoza.
Tom: Hi, I'm Tom. Nice to meet you, Dilnoza.
Dilnoza: And you. Are you here on holiday, Tom?
Tom: No, I'm not. I'm here on business. And you? Are you here on business, too?
Dilnoza: No, I'm not. I'm here to study. I'm a student.
Tom: Great! Have a nice day, Dilnoza.
Dilnoza: Thanks. You, too. Bye!`;
const tf = trueFalse(MEETING);

const STATEMENT = "Darak gap (.)";
const QUESTION = "So'roq gap (?)";

export const A1_01_EXERCISES: SeedExercise[] = [
  {
    title: "Tinglang va toping",
    skill: "Tinglash",
    kind: "listen",
    instructions: "Ibora ovoz chiqarib o'qiladi. Eshitganingizni toping. Qayta eshitish uchun tugmani bosing.",
    questions: [
      listen("Hi, I'm Paul.", ["Hi, I'm Paul.", "Hi, I'm Paula.", "Hello, I'm Paul.", "Hi, I'm Alisa."]),
      listen("Nice to meet you.", ["Nice to meet you.", "Nice to see you.", "Nice day to you.", "Nice to meet you, too."]),
      listen("Are you here on business?", ["Are you here on business?", "Are you here on holiday?", "You're here on business.", "Are you here to study?"]),
      listen("I'm here on holiday.", ["I'm here on holiday.", "I'm not here on holiday.", "Are you here on holiday?", "I'm here on business."]),
      listen("No, I'm not.", ["No, I'm not.", "No, I am.", "Yes, I am.", "No, you aren't."]),
      listen("I'm here to study.", ["I'm here to study.", "I'm here on business.", "I'm here on holiday.", "You're here to study."]),
      listen("How are you?", ["How are you?", "Who are you?", "Are you?", "And you?"]),
      listen("Have a nice day.", ["Have a nice day.", "Have a good day.", "Have a nice evening.", "Nice to meet you."]),
      listen("See you later.", ["See you later.", "See you.", "Thank you later.", "Bye. See you."]),
      listen("Fine, thanks. And you?", ["Fine, thanks. And you?", "Fine, thanks.", "Great, thanks. And you?", "Fine. And you?"]),
    ],
  },
  {
    title: "Hi, I'm Paul",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Ikki kishi tanishmoqda. Tinglang va har bir gap uchun eshitgan so'zingizni tanlang.",
    questions: [
      gaps(track("1.1"), [
        ["Paul: «Hi, I'm ___.»", "Paul", "Peter", "Paula"],
        ["Alisa: «___. I'm Alisa.»", "Hello", "Hi", "Morning"],
        ["Alisa: «Nice to ___ you, Paul.»", "meet", "see", "know"],
        ["Paul: «And ___.»", "you", "me", "too"],
      ]),
    ],
  },
  {
    title: "Ish, dam olish yoki o'qish?",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Uchta suhbatni tinglang. Kim ish bilan (on business), kim dam olishga (on holiday), kim o'qishga (to study) kelgan? Ba'zi savollarda IKKITA to'g'ri javob bor.",
    questions: [
      hearing(track("1.4"))("Conversation 1: Why is Paul here?", ["On business", "On holiday", "To study", "He doesn't say."]),
      hearing(track("1.4"))("Conversation 1: Why is Havva here?", ["On holiday", "On business", "To study", "She doesn't say."]),
      hearingTwo(track("1.4"))("Conversation 2: Which TWO people are talking?", ["Alisa", "Josue"], ["Julie", "Sunil"]),
      hearing(track("1.4"))("Conversation 2: Is Josue here on business?", ["Yes, he is.", "No, he isn't. He's on holiday.", "No, he isn't. He's here to study.", "He doesn't say."]),
      hearing(track("1.4"))("Conversation 2: What does Alisa say?", ["I'm here on business, too.", "I'm here on holiday, too.", "I'm here to study, too.", "I'm not here on business."]),
      hearing(track("1.4"))("Conversation 3: Why is Sunil here?", ["To study", "On business", "On holiday", "He doesn't say."]),
      hearingTwo(track("1.4"))("Which TWO people are here on holiday?", ["Havva", "Julie"], ["Sunil", "Josue"]),
    ],
  },
  {
    title: "am, 'm yoki are?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "I bilan — am ('m), you bilan — are ('re). To'g'ri shaklni tanlang.",
    questions: [
      say("Hello, I ___ Sunil.", ["'m", "'re", "are", "is"]),
      say("___ you here on holiday?", ["Are", "Am", "Is", "Do"], "So'roqda are oldinga chiqadi: Are you…?"),
      say("No, I ___ not. I'm here to study.", ["'m", "are", "'re", "is"]),
      say("You ___ here on business.", ["'re", "'m", "am", "is"]),
      say("Are you Alisa? — Yes, I ___.", ["am", "'m", "are", "is"], "Ijobiy qisqa javobda qisqartirilmaydi: Yes, I am."),
      say("You ___ here to study.", ["aren't", "amn't", "isn't", "not"], "you are not → you aren't (yoki you're not)."),
      say("I ___ here on holiday. I'm here on business.", ["'m not", "aren't", "not", "no"]),
      say("___ you on business, Paul?", ["Are", "Am", "Is", "You"]),
      say("Are you here on business? — No, I ___.", ["'m not", "am", "aren't", "not"]),
      say("And you? Are you on holiday? — Yes, I ___.", ["am", "are", "'m", "is"]),
    ],
  },
  {
    title: "Havva va Paul",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Havva va Paulni yana tinglang. Savol va qisqa javoblarni to'ldiring.",
    questions: [
      gaps(track("1.5"), [
        ["Havva: «Are you here on ___?»", "business", "holiday", "study"],
        ["Paul: «___, I am.»", "Yes", "No", "And"],
        ["Paul: «And ___? Are you here on business?»", "you", "me", "Havva"],
        ["Havva: «___, I'm not.»", "No", "Yes", "And"],
        ["Havva: «I'm here on ___.»", "holiday", "business", "study"],
      ]),
    ],
  },
  {
    title: "Sunil va Julie",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Sunil va Julie suhbatini tinglang va har bir gap uchun to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("1.7"), [
        ["Sunil: «Hello, I'm ___.»", "Sunil", "Paul", "Josue"],
        ["Sunil: «Nice to meet you, ___.»", "Julie", "Julia", "Alisa"],
        ["Julie: «And you. Are you here on ___?»", "holiday", "business", "study"],
        ["Sunil: «No, I'm ___.»", "not", "no", "am"],
        ["Sunil: «I'm here to ___.»", "study", "work", "meet"],
        ["Julie: «Yes, I ___.»", "am", "are", "'m"],
      ]),
    ],
  },
  {
    title: "Darak gapmi yoki savol?",
    skill: "Tinglash",
    kind: "audiotext",
    instructions:
      "Inglizchada so'z tartibi gapning turini ko'rsatadi: You are on holiday. (darak gap) — Are you on holiday? (savol). Beshta gapni tinglang. Har biri darak gapmi yoki savolmi?",
    questions: [
      hearing(track("1.8"))("Sentence 1", [STATEMENT, QUESTION], "I'm here to study. — darak gap."),
      hearing(track("1.8"))("Sentence 2", [STATEMENT, QUESTION], "You're here on holiday. — darak gap (you oldin, are keyin)."),
      hearing(track("1.8"))("Sentence 3", [QUESTION, STATEMENT], "Are you Francesca? — savol (are oldin)."),
      hearing(track("1.8"))("Sentence 4", [STATEMENT, QUESTION], "I'm Peter. Nice to meet you. — darak gap."),
      hearing(track("1.8"))("Sentence 5", [QUESTION, STATEMENT], "Are you on business? — savol."),
    ],
  },
  {
    title: "Nuqta yoki so'roq belgisi?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Gap oxiriga qaysi belgi kerak: nuqta (.) yoki so'roq belgisi (?)? So'z tartibiga qarang.",
    questions: [
      pick("Are you Angela", [".", "?"], 1, "Are you… — savol."),
      pick("You're here on business", [".", "?"], 0),
      pick("Are you here to study", [".", "?"], 1),
      pick("I am here on business", [".", "?"], 0),
      pick("Are you on holiday", [".", "?"], 1),
      pick("I'm not here on holiday", [".", "?"], 0),
      pick("Nice to meet you", [".", "?"], 0),
      pick("Are you Paul", [".", "?"], 1),
      pick("You aren't here to study", [".", "?"], 0),
      pick("How are you", [".", "?"], 1, "How… — savol so'zi bilan boshlangan savol."),
    ],
  },
  {
    title: "Salom va xayr",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "To'rtta qisqa suhbatni tinglang: odamlar salomlashyaptimi yoki xayrlashyaptimi? Har bir gap uchun eshitgan so'zingizni tanlang.",
    questions: [
      gaps(track("1.27"), [
        ["1. A: «Hi. How are you?» B: «___, thanks. And you?»", "Fine", "Great", "Good"],
        ["1. A: «___, thanks.»", "Great", "Fine", "Good"],
        ["2. A: «Morning, Patrick.» B: «Good ___.»", "morning", "evening", "afternoon"],
        ["3. A: «Have a nice ___.»", "day", "time", "evening"],
        ["3. B: «Thanks. You, ___.»", "too", "two", "also"],
        ["4. A: «Bye. See you ___.»", "later", "soon", "tomorrow"],
        ["4. B: «___.»", "Goodbye", "Hello", "Thanks"],
      ]),
    ],
  },
  {
    title: "Tez javob bering",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Qisqa javoblarni yodlab oling — ular tez javob berishga yordam beradi. Suhbatdoshingizga mos javobni tanlang.",
    questions: [
      say("Hello!", ["Hi!", "Bye!", "You, too.", "Yes, I am."]),
      say("Good morning.", ["Morning.", "Good night.", "Goodbye.", "Thanks."]),
      say("How are you?", ["Fine, thanks. And you?", "I'm Paul.", "Yes, I am.", "Nice to meet you."]),
      say("Have a nice day.", ["Thanks. You, too.", "Fine, thanks.", "Hello.", "And you?"]),
      say("See you later.", ["Bye.", "Hello.", "How are you?", "Morning."]),
      say("Nice to meet you.", ["And you.", "See you later.", "Fine, thanks.", "Good morning."]),
      say("Are you here on holiday?", ["No, I'm not. I'm here on business.", "No, I amn't.", "Yes, I'm.", "Yes, you are."]),
      say("Are you Josue?", ["Yes, I am.", "Yes, I'm.", "Yes, you're.", "Yes, I are."]),
      say("Hi, I'm Sally.", ["Hi, Sally. I'm Gary.", "Bye, Sally.", "Yes, I am.", "You, too."]),
      say("Goodbye.", ["Bye. See you later.", "Hello.", "Nice to meet you.", "Fine, thanks."]),
    ],
  },
  {
    title: "Suhbatni tartiblang",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, suhbatdagi gapni tuzing.",
    questions: sentences([
      "Hello, I'm Gary.",
      "Hi, I'm Sally.",
      "Nice to meet you, Sally.",
      "Are you here on holiday?",
      "No, I'm not.",
      "I'm here on business.",
      "And you?",
      "I'm here to study.",
      "Are you on business, too?",
      "Fine, thanks. And you?",
    ]),
  },
  {
    title: "Gary va Sally",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Tuzgan gaplaringizni tekshiring: Gary va Sally suhbatini tinglang va to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("1.30"), [
        ["Gary: «Hello, I'm ___.»", "Gary", "Gareth", "Barry"],
        ["Sally: «Hi, I'm ___.»", "Sally", "Sarah", "Sunil"],
        ["Sally: «You, too. Are you here on ___?»", "holiday", "business", "study"],
        ["Gary: «No, I'm not. I'm here on ___.»", "business", "holiday", "study"],
        ["Sally: «I'm here to ___.»", "study", "work", "meet"],
      ]),
    ],
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("You *is here on holiday.", "you bilan — are: You are (You're) here on holiday."),
      mistake("*Am you here on business?", "you bilan so'roq — Are you…?"),
      mistake("Yes, *I'm.", "Ijobiy qisqa javobda qisqartirilmaydi: Yes, I am."),
      mistake("No, I *amn't.", "Inkor: No, I'm not. («amn't» degan shakl yo'q)."),
      mistake("I'm here *in holiday.", "on holiday — «on» bilan."),
      mistake("I'm here *for study.", "Maqsad: I'm here to study."),
      mistake("Nice to meet you. — And *me.", "Javob: And you."),
      mistake("*i am Sunil.", "I — har doim bosh harf bilan yoziladi."),
      mistake("Have a nice day. — Thanks. You, *two.", "too — «ham»; two — «ikki»."),
      mistake("Hi. How *is you?", "How are you?"),
    ],
  },
  {
    title: "Tanishuv",
    skill: "O'qish",
    kind: "truefalse",
    instructions: "Suhbatni o'qing va har bir gap to'g'ri yoki noto'g'ri ekanini belgilang.",
    questions: [
      tf("Tom is here on holiday.", false, "Tom: No, I'm not. I'm here on business."),
      tf("Tom is here on business.", true),
      tf("Dilnoza is here on business, too.", false, "Dilnoza: No, I'm not. I'm here to study."),
      tf("Dilnoza is a student.", true),
      tf("Tom says «Nice to meet you».", true),
      tf("Dilnoza says «Have a nice day».", false, "«Have a nice day» ni Tom aytadi."),
      tf("Dilnoza answers «Thanks. You, too».", true),
      tf("Tom is here to study.", false),
      tf("Dilnoza asks a question: «Are you here on holiday?»", true),
      tf("They say goodbye at the end.", true, "Dilnoza: Bye!"),
    ],
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: written([
      ["Hello, I'm Julie. Nice to ___ you.", "meet"],
      ["— Are you here on business? — Yes, I ___.", "am"],
      ["— Are you here on holiday? — No, I'm ___.", "not"],
      ["I'm here ___ study.", "to"],
      ["I'm here ___ holiday.", "on"],
      ["Hi. How ___ you?", "are"],
      ["Fine, ___. And you?", "thanks"],
      ["Have a nice ___.", "day"],
      ["Thanks. You, ___.", "too"],
      ["Bye. See you ___.", "later"],
    ]),
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Chapdagi gapga o'ngdagi javobni ulang.",
    questions: pairs([
      ["Nice to meet you.|And you.", "How are you?|Fine, thanks. And you?", "Have a nice day.|Thanks. You, too.", "Goodbye.|Bye. See you later."],
      ["Are you Paul?|Yes, I am.", "Are you on holiday?|No, I'm not.", "Hello, I'm Sunil.|Hi, I'm Julie.", "Good morning.|Morning."],
      ["on holiday|ta'tilda", "on business|ish bilan", "to study|o'qishga", "here|bu yerda"],
      ["I am|I'm", "you are|you're", "I am not|I'm not", "you are not|you aren't"],
      ["listen|tinglamoq", "repeat|takrorlamoq", "practise|mashq qilmoq", "check|tekshirmoq"],
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting. Urg'uli so'zlarni kuchliroq ayting: Hi, I'm PAUL. NICE to MEET you.",
    questions: phrases([
      "Hi, I'm Paul.",
      "Hello. I'm Alisa. Nice to meet you, Paul.",
      "And you.",
      "Are you here on business?",
      "Yes, I am.",
      "No, I'm not. I'm here on holiday.",
      "I'm here to study.",
      "How are you?",
      "Fine, thanks. And you?",
      "Bye. See you later.",
    ]),
  },
];
