/**
 * A1, 1-dars — «Hello! Tanishuv». Salomlashish va xayrlashish (kun
 * vaqtiga qarab), o'zini tanishtirish, «How are you?». Grammatika: to be —
 * I am / you are, qisqa shakllar (I'm, you're), so'roq (Are you…?) va qisqa
 * javoblar (Yes, I am. / No, I'm not.). Matn va mashqlar o'zimizniki.
 */
import type { SeedExercise, SeedQuestion } from "../seed-exercises";
import type { VocabSeed } from "./types";

const w = (
  emoji: string,
  word: string,
  transcription: string,
  pos: string,
  uz: string,
  def: string,
  ex: string,
  exUz: string
): VocabSeed => ({ emoji, word, transcription, pos, uz, def, ex, exUz });

export const A1_01_ROUNDS: { title: string; words: VocabSeed[] }[] = [
  {
    title: "1-bosqich",
    words: [
      w("👋", "hello", "həˈləʊ|halou", "undov", "Salom; assalomu alaykum", "A word you say when you meet someone.", "Hello! I'm Aziz.", "Salom! Men Azizman."),
      w("🙋", "hi", "haɪ|hay", "undov", "Salom (do'stlarga)", "An informal «hello».", "Hi, Anna! How are you?", "Salom, Anna! Qalaysan?"),
      w("🚪", "goodbye", "ˌɡʊdˈbaɪ|gudbay", "undov", "Xayr", "A word you say when you leave.", "Goodbye, Ms Brown! See you tomorrow.", "Xayr, Braun xonim! Ertaga ko'rishamiz."),
      w("✋", "bye", "baɪ|bay", "undov", "Xayr (do'stlarga)", "An informal «goodbye».", "Bye, Malika!", "Xayr, Malika!"),
      w("🌅", "good morning", "ɡʊd ˈmɔːnɪŋ|gud mooning", "ibora", "Xayrli tong", "Hello in the morning (before 12 o'clock).", "Good morning, everyone!", "Hammaga xayrli tong!"),
      w("🌤️", "good afternoon", "ɡʊd ˌɑːftəˈnuːn|gud aaftanuun", "ibora", "Xayrli kun (tushdan keyin)", "Hello after 12 o'clock.", "Good afternoon, Mr Karimov.", "Xayrli kun, Karimov janoblari."),
      w("🌆", "good evening", "ɡʊd ˈiːvnɪŋ|gud iivning", "ibora", "Xayrli kech", "Hello in the evening.", "Good evening! Welcome to the hotel.", "Xayrli kech! Mehmonxonaga xush kelibsiz."),
      w("🌙", "good night", "ɡʊd ˈnaɪt|gud nayt", "ibora", "Xayrli tun", "You say it when you go to bed or leave late.", "Good night, Mum!", "Xayrli tun, oyijon!"),
      w("🙏", "thank you", "ˈθæŋk juː|senk yu", "ibora", "Rahmat", "You say it when someone helps you.", "Thank you very much!", "Katta rahmat!"),
      w("😊", "please", "pliːz|pliiz", "ibora", "Iltimos", "A polite word when you ask for something.", "A cup of tea, please.", "Bir piyola choy, iltimos."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🏷️", "name", "neɪm|neym", "ot", "Ism", "What people call you: Aziz, Anna, Tom…", "What's your name?", "Ismingiz nima?"),
      w("☝️", "my", "maɪ|may", "olmosh", "Mening", "It is for me: my book, my name.", "My name is Malika.", "Mening ismim Malika."),
      w("👉", "your", "jɔː|yoo", "olmosh", "Sening; sizning", "It is for you: your book, your name.", "Is this your bag?", "Bu sizning sumkangizmi?"),
      w("🙋‍♂️", "I", "aɪ|ay", "olmosh", "Men", "The word for yourself. Always a capital letter!", "I am a student.", "Men talabaman."),
      w("🫵", "you", "juː|yuu", "olmosh", "Sen; siz", "The person you talk to.", "Are you a teacher?", "Siz o'qituvchimisiz?"),
      w("🤝", "nice to meet you", "naɪs tə ˈmiːt juː|nays tu miit yu", "ibora", "Tanishganimdan xursandman", "You say it when you meet a new person.", "Hi, Tom. Nice to meet you!", "Salom, Tom. Tanishganimdan xursandman!"),
      w("🙋‍♀️", "excuse me", "ɪkˈskjuːz miː|ikskyuuz mii", "ibora", "Kechirasiz (murojaat)", "You say it to start talking to a stranger.", "Excuse me, are you Mr Green?", "Kechirasiz, siz janob Grinmisiz?"),
      w("😔", "sorry", "ˈsɒri|sori", "ibora", "Kechirasiz, uzr", "You say it when you make a mistake.", "Sorry, I'm late!", "Uzr, kechikdim!"),
      w("👎", "no", "nəʊ|nou", "ibora", "Yo'q", "The opposite of «yes».", "No, I'm not a teacher.", "Yo'q, men o'qituvchi emasman."),
      w("🚫", "not", "nɒt|not", "yuklama", "Emas (inkor)", "It makes a sentence negative.", "I'm not tired.", "Men charchamaganman."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("❓", "how are you", "ˌhaʊ ə ˈjuː|hau aa yu", "ibora", "Qalaysiz? Ishlaringiz qalay?", "A question about how a person feels.", "Hi, Dilnoza! How are you?", "Salom, Dilnoza! Qalaysan?"),
      w("🙂", "fine", "faɪn|fayn", "sifat", "Yaxshi, joyida", "OK, well.", "I'm fine, thanks.", "Yaxshi, rahmat."),
      w("🤩", "great", "ɡreɪt|greyt", "sifat", "Ajoyib, zo'r", "Very, very good.", "I'm great, thank you!", "Zo'rman, rahmat!"),
      w("😐", "not bad", "ˌnɒt ˈbæd|not bed", "ibora", "Yomon emas", "OK. Not very good, not bad.", "Not bad, thanks. And you?", "Yomon emas, rahmat. O'zingiz-chi?"),
      w("🧑‍🎓", "student", "ˈstjuːdnt|styudent", "ot", "Talaba, o'quvchi", "A person who studies at a school or university.", "I'm a student in Tashkent.", "Men Toshkentda talabaman."),
      w("👩‍🏫", "teacher", "ˈtiːtʃə|tiicha", "ot", "O'qituvchi", "A person who teaches.", "Ms Brown is my teacher.", "Braun xonim — mening o'qituvchim."),
      w("🧑‍🤝‍🧑", "friend", "frend|frend", "ot", "Do'st", "A person you like and know well.", "Bekzod is my friend.", "Bekzod — mening do'stim."),
      w("👨‍💼", "Mr", "ˈmɪstə|mista", "ot", "Janob (erkak familiyasidan oldin)", "A title for a man: Mr Karimov.", "Good morning, Mr Karimov!", "Xayrli tong, Karimov janoblari!"),
      w("👩‍💼", "Ms", "mɪz|miz", "ot", "Xonim (ayol familiyasidan oldin)", "A title for a woman: Ms Brown.", "This is Ms Brown.", "Bu — Braun xonim."),
      w("➕", "too", "tuː|tuu", "ravish", "Ham", "Also.", "I'm a student too.", "Men ham talabaman."),
    ],
  },
];

const pick = (prompt: string, options: string[], correct: number, explanation?: string): SeedQuestion => ({
  prompt,
  options,
  correct,
  explanation,
});
/** To'g'ri javob birinchi yoziladi (seed paytida aralashtiriladi). */
const say = (prompt: string, options: string[], explanation?: string): SeedQuestion => ({
  prompt,
  options,
  correct: 0,
  explanation,
});
const listen = (audio: string, options: string[], explanation?: string): SeedQuestion => ({
  prompt: "Eshitgan iborangizni toping",
  audio,
  options,
  correct: options.indexOf(audio),
  explanation,
});
/** «Xatoni toping»: gapdagi so'zlar ro'yxati, xato so'z `*` bilan belgilanadi. */
const mistake = (sentence: string, explanation: string): SeedQuestion => {
  const tokens = sentence.split(" ");
  const correct = tokens.findIndex((t) => t.startsWith("*"));
  return {
    prompt: "Xato so'zni bosing",
    options: tokens.map((t) => t.replace(/^\*/, "")),
    correct,
    explanation,
  };
};

const AM_ARE = ["am", "are"];
const SHORT = ["Yes, I am.", "No, I'm not.", "Yes, you are.", "No, you aren't."];

const CLASS_TEXT = `Ms Brown: Good morning! I'm Ms Brown. I'm your teacher.
Aziz: Good morning, Ms Brown. My name is Aziz.
Ms Brown: Nice to meet you, Aziz. Are you a new student?
Aziz: Yes, I am.
Ms Brown: And you? What's your name?
Malika: I'm Malika. I'm not a new student.
Ms Brown: Thank you, Malika.
Malika: Hi, Aziz! How are you?
Aziz: I'm fine, thanks. And you?
Malika: I'm great!`;

const TF = ["To'g'ri", "Noto'g'ri"];
const tf = (statement: string, isTrue: boolean, explanation?: string): SeedQuestion => ({
  prompt: `${CLASS_TEXT}||${statement}`,
  options: TF,
  correct: isTrue ? 0 : 1,
  explanation,
});

const HOTEL_AUDIO = `Good evening! Welcome to Hotel Registan.
Good evening. My name is Tom Green.
Are you Mr Tom Green from England?
Yes, I am.
Here is your key, Mr Green.
Thank you very much.
You're welcome. Good night!
Good night!`;

const hear = (question: string, options: string[], explanation?: string): SeedQuestion => ({
  prompt: question,
  audio: HOTEL_AUDIO,
  options,
  correct: 0,
  explanation,
});

export const A1_01_EXERCISES: SeedExercise[] = [
  {
    title: "Tinglang va toping",
    skill: "Tinglash",
    kind: "listen",
    instructions: "Ibora ovoz chiqarib o'qiladi. Eshitganingizni toping. Qayta eshitish uchun tugmani bosing.",
    questions: [
      listen("hello", ["hello", "hi", "bye", "please"]),
      listen("good morning", ["good night", "good morning", "good evening", "goodbye"]),
      listen("good evening", ["good afternoon", "good morning", "good evening", "good night"]),
      listen("thank you", ["thank you", "excuse me", "how are you", "nice to meet you"]),
      listen("nice to meet you", ["how are you", "excuse me", "thank you", "nice to meet you"]),
      listen("excuse me", ["sorry", "excuse me", "please", "goodbye"]),
      listen("how are you", ["how are you", "who are you", "are you", "thank you"]),
      listen("I'm fine", ["I'm fine", "I'm fine too", "not bad", "great"]),
      listen("goodbye", ["good night", "good evening", "goodbye", "bye"]),
      listen("not bad", ["not bad", "not fine", "not great", "no"]),
    ],
  },
  {
    title: "Nima deysiz?",
    skill: "Vaziyat",
    kind: "situation",
    instructions: "Vaziyatni o'qing va unga mos inglizcha iborani tanlang.",
    questions: [
      pick("Soat 8:00. Darsga kirdingiz va o'qituvchi bilan salomlashasiz.", ["Good morning!", "Good night!", "Good evening!", "Bye!"], 0, "Ertalab (soat 12 gacha) — Good morning."),
      pick("Soat 15:00. Ofisda direktorni ko'rdingiz.", ["Good morning!", "Good afternoon!", "Good night!", "Hi, bro!"], 1, "Tushdan keyin — Good afternoon."),
      pick("Soat 19:00. Mehmonxonaga keldingiz.", ["Good afternoon!", "Good night!", "Good evening!", "Goodbye!"], 2),
      pick("Soat 23:00. Uxlashga ketyapsiz.", ["Good evening!", "Good morning!", "Hello!", "Good night!"], 3, "Good night — salomlashish emas, xayrlashish: uxlashdan oldin yoki kech ketayotganda."),
      pick("Do'stingiz bilan salomlashasiz.", ["Hi!", "Good afternoon, sir!", "Goodbye!", "Sorry!"], 0),
      pick("Sizga choy berishdi.", ["Please!", "Thank you!", "Sorry!", "Excuse me!"], 1),
      pick("Ko'chada notanish odamga murojaat qilmoqchisiz.", ["Sorry!", "Thank you!", "Excuse me!", "Good night!"], 2, "Gap boshlash uchun — Excuse me; xato qilganda — Sorry."),
      pick("Darsga kechikdingiz.", ["Excuse me!", "Thank you!", "Hello!", "Sorry, I'm late!"], 3),
      pick("Yangi odam bilan tanishdingiz.", ["Nice to meet you!", "Good night!", "How are you?", "Sorry!"], 0),
      pick("Do'stingizning ahvolini so'ramoqchisiz.", ["What's your name?", "How are you?", "Are you a teacher?", "Excuse me?"], 1),
    ],
  },
  {
    title: "Rasmga mos ibora",
    skill: "Rasm",
    kind: "picture",
    instructions: "Rasmga qarang va mos inglizcha so'z yoki iborani toping.",
    questions: [
      pick("🌅", ["good morning", "good night", "good evening", "goodbye"], 0),
      pick("🌙", ["good morning", "good afternoon", "good night", "hello"], 2),
      pick("👩‍🏫", ["student", "teacher", "friend", "name"], 1),
      pick("🧑‍🎓", ["teacher", "Mr", "student", "friend"], 2),
      pick("🙏", ["sorry", "please", "thank you", "excuse me"], 2),
      pick("🤝", ["nice to meet you", "good night", "not bad", "goodbye"], 0),
      pick("😔", ["great", "sorry", "fine", "hello"], 1),
      pick("🤩", ["not bad", "great", "sorry", "no"], 1),
      pick("🧑‍🤝‍🧑", ["teacher", "friend", "student", "Ms"], 1),
      pick("👋", ["hello", "sorry", "please", "no"], 0),
    ],
  },
  {
    title: "am yoki are?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "I bilan — am, you bilan — are. To'g'ri shaklni tanlang.",
    questions: [
      pick("I ___ a student.", AM_ARE, 0),
      pick("You ___ my teacher.", AM_ARE, 1),
      pick("___ you OK?", AM_ARE, 1, "So'roqda are oldinga chiqadi: Are you OK?"),
      pick("I ___ fine, thanks.", AM_ARE, 0),
      pick("You ___ my friend.", AM_ARE, 1),
      pick("I ___ not a teacher.", AM_ARE, 0),
      pick("___ you Mr Green?", AM_ARE, 1),
      pick("Yes, I ___.", AM_ARE, 0, "Qisqa javob: Yes, I am. (I'm deb qisqartirilmaydi!)"),
      pick("You ___ not late.", AM_ARE, 1),
      pick("I ___ Malika. Nice to meet you!", AM_ARE, 0),
    ],
  },
  {
    title: "Qisqa shakl",
    skill: "Grammatika",
    kind: "type",
    instructions:
      "Og'zaki nutqda qisqa shakl ishlatiladi: I am → I'm, you are → you're. Apostrofni (') unutmang. Qisqa shaklini yozing.",
    questions: [
      ["I am", "I'm"],
      ["you are", "you're"],
      ["I am not", "I'm not"],
      ["you are not", "you aren't|you're not", "Ikkalasi ham to'g'ri: you aren't yoki you're not."],
      ["I am Aziz.", "I'm Aziz."],
      ["You are late.", "You're late."],
      ["I am a student.", "I'm a student."],
      ["You are my friend.", "You're my friend."],
      ["I am not a teacher.", "I'm not a teacher."],
      ["You are not a student.", "You aren't a student.|You're not a student."],
    ].map(([prompt, answer, explanation]) => ({ prompt, answer, explanation })),
  },
  {
    title: "Ha yoki yo'q?",
    skill: "Grammatika",
    kind: "choice",
    instructions:
      "Qisqa javob savoldagi fe'l bilan beriladi: Are you…? — Yes, I am. / No, I'm not. Belgiga (✓ ha, ✗ yo'q) qarab javobni tanlang.",
    questions: [
      pick("Are you a student? (✓)", SHORT, 0),
      pick("Are you a teacher? (✗)", SHORT, 1),
      pick("Am I late? (✓)", SHORT, 2, "Am I…? — savol o'zi haqida, javob «siz» haqida: Yes, you are."),
      pick("Am I right? (✗)", SHORT, 3),
      pick("Are you OK? (✓)", SHORT, 0),
      pick("Are you Aziz? (✗)", SHORT, 1),
      pick("Am I your friend? (✓)", SHORT, 2),
      pick("Are you tired? (✗)", SHORT, 1),
      pick("Am I in room 5? (✗)", SHORT, 3),
      pick("Are you Ms Brown? (✓)", SHORT, 0),
    ],
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("I *are a student.", "I bilan — am: I am a student."),
      mistake("You *am my teacher.", "You bilan — are: You are my teacher."),
      mistake("*Am you a student?", "You bilan so'roq — Are you…?"),
      mistake("Yes, *I'm.", "Qisqa javobda qisqartirilmaydi: Yes, I am."),
      mistake("*i am Aziz.", "I — doim bosh harf bilan yoziladi."),
      mistake("I *no a teacher.", "Inkor — not: I'm not a teacher."),
      mistake("Good *night! Welcome to the hotel.", "Mehmonga kelganda — Good evening. Good night — xayrlashish."),
      mistake("Nice to *meeting you!", "Ibora o'zgarmaydi: Nice to meet you!"),
      mistake("How *is you?", "How are you?"),
      mistake("My name *are Malika.", "My name is Malika. (name = it → is)"),
    ],
  },
  {
    title: "Suhbatni davom ettiring",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("Hello! I'm Tom.", ["Hi, Tom! I'm Aziz.", "Goodbye, Tom!", "Yes, I am.", "I'm fine."]),
      say("What's your name?", ["My name is Dilnoza.", "I'm fine, thanks.", "Nice to meet you.", "Yes, you are."]),
      say("Nice to meet you!", ["Nice to meet you too!", "Good night!", "I'm a student.", "Sorry!"]),
      say("How are you?", ["Fine, thanks. And you?", "I'm Malika.", "Yes, I am.", "Goodbye!"]),
      say("Are you a student?", ["Yes, I am.", "Yes, I'm.", "Yes, you am.", "Yes, I are."], "Qisqa javob: Yes, I am."),
      say("Are you Ms Brown?", ["No, I'm not. I'm Ms Smith.", "No, I amn't.", "Yes, you are.", "Good afternoon!"]),
      say("Thank you!", ["You're welcome!", "Thank you!", "Sorry!", "Excuse me!"]),
      say("Sorry, I'm late!", ["That's OK. Come in.", "Nice to meet you.", "Good morning, I'm late.", "Yes, I am."]),
      say("Excuse me, are you Mr Green?", ["Yes, I am.", "Yes, you are.", "No, thank you.", "Good night."]),
      say("Goodbye!", ["Bye! See you!", "Hello!", "How are you?", "Nice to meet you!"]),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Chapdagi inglizcha ibora va o'ngdagi tarjimasini ulang.",
    questions: [
      ["hello|salom", "goodbye|xayr", "please|iltimos", "thank you|rahmat"],
      ["good morning|xayrli tong", "good evening|xayrli kech", "good night|xayrli tun", "good afternoon|xayrli kun"],
      ["I|men", "you|siz", "my|mening", "your|sizning"],
      ["student|talaba", "teacher|o'qituvchi", "friend|do'st", "name|ism"],
      ["fine|yaxshi", "great|zo'r", "not bad|yomon emas", "too|ham"],
      ["I am|I'm", "you are|you're", "I am not|I'm not", "you are not|you aren't"],
      ["sorry|uzr", "excuse me|kechirasiz (murojaat)", "yes|ha", "no|yo'q"],
      ["How are you?|Fine, thanks.", "What's your name?|I'm Aziz.", "Are you a student?|Yes, I am.", "Thank you!|You're welcome!"],
    ].map((options) => ({ prompt: "Juftlarni ulang", options })),
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: [
      "My name is Aziz.",
      "I'm a student.",
      "Are you a teacher?",
      "I'm not a teacher.",
      "Nice to meet you!",
      "How are you?",
      "I'm fine, thank you.",
      "Are you Mr Green?",
      "You're my friend.",
      "I'm a student too.",
    ].map((answer) => ({ prompt: "Gap tuzing", answer })),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: [
      ["Hello! My ___ is Malika.", "name"],
      ["Nice to ___ you!", "meet"],
      ["How ___ you?", "are"],
      ["I'm ___, thanks.", "fine|great|OK|good"],
      ["— Are you a student? — Yes, I ___.", "am"],
      ["— Are you a teacher? — No, I'm ___.", "not"],
      ["Thank ___ very much!", "you"],
      ["Good ___! It's 7 a.m.", "morning", "Ertalab — Good morning."],
      ["___ me, are you Ms Brown?", "Excuse", "Murojaat — Excuse me."],
      ["I'm a student ___.", "too"],
    ].map(([prompt, answer, explanation]) => ({ prompt, answer, explanation })),
  },
  {
    title: "Birinchi dars",
    skill: "O'qish",
    kind: "truefalse",
    instructions: "Suhbatni o'qing va gap to'g'ri yoki noto'g'ri ekanini belgilang.",
    questions: [
      tf("Ms Brown is a teacher.", true),
      tf("It is evening.", false, "Ular «Good morning» deyishadi — bu ertalab."),
      tf("Aziz is a new student.", true),
      tf("Malika is a new student.", false, "Malika: I'm not a new student."),
      tf("The teacher's name is Ms Smith.", false, "Uning ismi — Ms Brown."),
      tf("Aziz is fine.", true),
      tf("Malika is not OK.", false, "Malika: I'm great!"),
      tf("Malika says «How are you?».", true),
      tf("Ms Brown says «Good night».", false, "U «Good morning» deydi."),
      tf("Aziz says «My name is Aziz».", true),
    ],
  },
  {
    title: "Mehmonxonada",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions:
      "Mehmonxonadagi suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Suhbat qachon bo'lyapti?", ["Kechqurun", "Ertalab", "Tushdan keyin", "Kechasi"], "Good evening — xayrli kech."),
      hear("Mehmonxona nomi nima?", ["Registan", "Samarkand", "Tashkent", "Green"]),
      hear("Mehmonning ismi nima?", ["Tom Green", "Tom Brown", "Aziz Green", "Tom Grey"]),
      hear("Mehmon qayerdan?", ["Angliyadan", "Toshkentdan", "Amerikadan", "Samarqanddan"], "from England — Angliyadan."),
      hear("Mehmonga nima berishdi?", ["Kalit", "Choy", "Kitob", "Sumka"], "Here is your key — mana kalitingiz."),
      hear("«Are you Mr Tom Green?» savoliga u nima deb javob berdi?", ["Yes, I am.", "No, I'm not.", "Yes, you are.", "Thank you."]),
      hear("Kalitni olgach, mehmon nima dedi?", ["Thank you very much.", "Sorry.", "Excuse me.", "Hello."]),
      hear("«You're welcome» qaysi gapga javob?", ["Thank you", "Good evening", "Here is your key", "Good night"], "Thank you → You're welcome (arzimaydi)."),
      hear("Suhbat qanday tugaydi?", ["Good night!", "Goodbye!", "Nice to meet you!", "See you!"]),
      hear("Tom Green kim?", ["Mehmon", "Mehmonxona xodimi", "O'qituvchi", "Talaba"]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: [
      "Hello! My name is Aziz.",
      "Nice to meet you!",
      "How are you?",
      "I'm fine, thank you.",
      "Good morning!",
      "Good evening!",
      "Are you a student?",
      "Yes, I am.",
      "No, I'm not.",
      "Excuse me!",
    ].map((phrase) => ({ prompt: phrase, answer: phrase })),
  },
];
