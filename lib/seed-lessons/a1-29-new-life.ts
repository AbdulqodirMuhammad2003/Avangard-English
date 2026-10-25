/**
 * A1, 29-dars — «Yangi hayot». Chet elga o'qishga yoki ishga ketish rejalari.
 * Grammatika: be going to — savol shakli (Are you going to…? What are you
 * going to…?) va qisqa javoblar; vaqt predloglari: at (soat, midnight, the
 * weekend), on (kun, sana), in (oy, yil, fasl, kun qismi). Matn va mashqlar
 * o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
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

export const A1_29_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("💭", "dream", "driːm|driim", "ot", "Orzu; tush", "Something you really want in your life.", "My dream is to study in London.", "Orzuim — Londonda o'qish."),
      w("🎯", "goal", "ɡəʊl|goul", "ot", "Maqsad", "Something you want to do and work for.", "My goal is to speak English well.", "Maqsadim — ingliz tilida yaxshi gapirish."),
      w("🍀", "chance", "tʃɑːns|chaans", "ot", "Imkoniyat", "A time when you can do something good.", "It's a great chance for me.", "Bu men uchun ajoyib imkoniyat."),
      w("🔀", "different", "ˈdɪfrənt|difrant", "sifat", "Boshqacha, har xil", "Not the same.", "Life there is very different.", "U yerda hayot juda boshqacha."),
      w("🌐", "foreign", "ˈfɒrən|foran", "sifat", "Chet, xorijiy", "From another country.", "I'm going to learn a foreign language.", "Chet tilini o'rganmoqchiman."),
      w("🎎", "culture", "ˈkʌltʃə|kalcha", "ot", "Madaniyat", "The traditions, art and way of life of a country.", "I love Japanese culture.", "Yapon madaniyatini yaxshi ko'raman."),
      w("🛂", "visa", "ˈviːzə|viiza", "ot", "Viza", "A document you need to enter some countries.", "I'm going to get a student visa.", "Talabalik vizasini olmoqchiman."),
      w("😬", "nervous", "ˈnɜːvəs|nyorvas", "sifat", "Hayajonlangan, xavotirli", "A little afraid before something important.", "I'm nervous about the interview.", "Suhbatdan oldin hayajondaman."),
      w("🤩", "excited", "ɪkˈsaɪtɪd|iksaytid", "sifat", "Hayajonda (xursand)", "Very happy about something in the future.", "I'm so excited about my trip!", "Sayohatimdan juda hayajondaman!"),
      w("🏡", "homesick", "ˈhəʊmsɪk|houmsik", "sifat", "Uyni sog'ingan", "Sad because you are far from home.", "I'm going to be homesick at first.", "Avvaliga uyni sog'inaman."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🕛", "at midnight", "ət ˈmɪdnaɪt|at midnayt", "ibora", "Yarim tunda", "At twelve o'clock at night.", "Our plane leaves at midnight.", "Samolyotimiz yarim tunda uchadi."),
      w("🌞", "at noon", "ət nuːn|at nuun", "ibora", "Tush paytida, soat 12 da", "At twelve o'clock in the day.", "Let's meet at noon.", "Soat o'n ikkida uchrashaylik."),
      w("🎈", "at the weekend", "ət ðə ˌwiːkˈend|at za uiikend", "ibora", "Dam olish kunlari", "On Saturday and Sunday (British English).", "What are you going to do at the weekend?", "Dam olish kunlari nima qilmoqchisan?"),
      w("🎂", "on my birthday", "ɒn maɪ ˈbɜːθdeɪ|on may byorsdey", "ibora", "Tug'ilgan kunimda", "On the day you were born, every year.", "I'm going to have a party on my birthday.", "Tug'ilgan kunimda bazm qilaman."),
      w("🌆", "on Friday evening", "ɒn ˈfraɪdeɪ ˈiːvnɪŋ|on fraydey iivning", "ibora", "Juma kuni kechqurun", "In the evening of Friday.", "We're going to the cinema on Friday evening.", "Juma kuni kechqurun kinoga boramiz."),
      w("🎆", "on New Year's Eve", "ɒn ˌnjuː jɪəz ˈiːv|on nyuu yiaz iiv", "ibora", "Yangi yil arafasida (31-dekabr)", "On 31 December.", "We always watch fireworks on New Year's Eve.", "Yangi yil arafasida doim mushak otishini tomosha qilamiz."),
      w("🌇", "in the afternoon", "ɪn ði ˌɑːftəˈnuːn|in zi aaftanuun", "ibora", "Tushdan keyin", "Between twelve o'clock and the evening.", "I have English lessons in the afternoon.", "Tushdan keyin ingliz tili darslarim bor."),
      w("🌱", "in March", "ɪn mɑːtʃ|in maach", "ibora", "Mart oyida", "During the month of March.", "Navruz is in March.", "Navro'z mart oyida."),
      w("🚀", "in 2030", "ɪn ˌtwenti ˈθɜːti|in tuenti syorti", "ibora", "2030-yilda", "During the year 2030.", "I'm going to finish university in 2030.", "2030-yilda universitetni bitiraman."),
      w("⌛", "for a year", "fə(r) ə jɪə|far a yia", "ibora", "Bir yilga, bir yil davomida", "During one year.", "She's going to live in Seoul for a year.", "U bir yil Seulda yashaydi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("📚", "course", "kɔːs|koos", "ot", "Kurs", "A set of lessons about one subject.", "I'm going to do an English course.", "Ingliz tili kursida o'qiyman."),
      w("📋", "apply", "əˈplaɪ|aplay", "fe'l", "Ariza topshirmoq", "Ask in writing for a job or a place at university.", "I'm going to apply to a university in Korea.", "Koreyadagi universitetga hujjat topshiraman."),
      w("🎤", "interview", "ˈɪntəvjuː|intavyuu", "ot", "Suhbat (ishga, o'qishga)", "A meeting where people ask you questions for a job.", "My interview is on Monday.", "Suhbatim dushanba kuni."),
      w("👔", "manager", "ˈmænɪdʒə|menija", "ot", "Menejer, rahbar", "The person who controls a team or company.", "The manager is going to call me.", "Menejer menga qo'ng'iroq qiladi."),
      w("🧑‍🤝‍🧑", "colleague", "ˈkɒliːɡ|koliig", "ot", "Hamkasb", "A person you work with.", "My new colleague is from Turkey.", "Yangi hamkasbim Turkiyadan."),
      w("💵", "salary", "ˈsæləri|selari", "ot", "Maosh", "The money you get every month for your work.", "The salary is very good.", "Maosh juda yaxshi."),
      w("🎓", "degree", "dɪˈɡriː|digrii", "ot", "Ilmiy daraja, diplom", "What you get when you finish university.", "She's got a degree in economics.", "Uning iqtisodiyot bo'yicha diplomi bor."),
      w("🏅", "scholarship", "ˈskɒləʃɪp|skolaship", "ot", "Grant, stipendiya", "Money to pay for your studies.", "I'm going to try for a scholarship.", "Grant olishga harakat qilaman."),
      w("📈", "career", "kəˈrɪə|karia", "ot", "Kasbiy yo'l, karyera", "The jobs you do in your life.", "I want a career in medicine.", "Tibbiyotda karyera qilishni xohlayman."),
      w("📈", "improve", "ɪmˈpruːv|impruuv", "fe'l", "Yaxshilamoq", "Make something better.", "I'm going to improve my English.", "Ingliz tilimni yaxshilamoqchiman."),
    ],
  },
];

const BLOG = `A NEW LIFE IN SEOUL — by Shahzoda
Big news: I got a scholarship! In September I'm going to study at a university in Seoul for a year. I'm very excited, but I'm a little nervous too.
People ask me a lot of questions. "Are you going to learn Korean?" Yes, I am! I'm going to do a language course in the mornings, and in the afternoon I'm going to have my lessons in English.
"Where are you going to live?" In a student flat with two other girls — one is from Brazil, and the other is from Kazakhstan.
"Are you going to work?" No, I'm not. The scholarship pays for everything, so I'm going to study and practise my Korean.
"Are you going to come home for New Year?" No, I'm not — the tickets are very expensive. I'm going to be homesick, I know! But my family is going to visit me in March.
My goal? I'm going to finish my degree in 2028 and then start a career at an international company.`;
const read = reading(BLOG);

const INTERVIEW = `Good morning, Mr Hasanov. Please sit down. So, you're going to move to Dubai?
Yes, that's right. I'm going to work at a hotel there.
Are you going to go alone?
No, I'm not. My wife and my son are going to come with me.
When are you going to leave?
On the fifteenth of January. Our plane leaves at midnight.
What are you going to do there?
I'm going to be a manager in the restaurant. The salary is very good.
Is your son going to go to school there?
Yes, he is. He's going to go to an international school.
Are you excited?
Yes, very! But I'm a little nervous. It's a very different culture.`;
const hear = hearing(INTERVIEW);

export const A1_29_EXERCISES: SeedExercise[] = [
  {
    title: "Nima eshitildi?",
    skill: "Tinglash",
    kind: "listen",
    instructions: "Gap yoki ibora o'qiladi. Eshitganingizni toping.",
    questions: [
      listen("Are you going to stay?", ["Are you going to stay?", "You are going to stay.", "Are you going to say?", "Is he going to stay?"]),
      listen("What are you going to do?", ["What are you going to do?", "What do you do?", "What are you doing?", "What did you do?"]),
      listen("Yes, I am.", ["Yes, I am.", "Yes, I do.", "Yes, I did.", "Yes, I can."]),
      listen("No, she isn't.", ["No, she isn't.", "No, she doesn't.", "No, she didn't.", "No, he isn't."]),
      listen("at midnight", ["at midnight", "at night", "in the night", "on Monday night"]),
      listen("at the weekend", ["at the weekend", "on the weekend", "at weekends", "this weekend"]),
      listen("in the afternoon", ["in the afternoon", "in the morning", "this afternoon", "after noon"]),
      listen("colleague", ["colleague", "college", "collect", "call it"]),
      listen("career", ["career", "Korea", "carrier", "carer"]),
      listen("salary", ["salary", "celery", "gallery", "Sally"]),
    ],
  },
  {
    title: "Savol tuzing",
    skill: "Grammatika",
    kind: "type",
    instructions: "Savol tuzing: Am / Is / Are + ega + going to + fe'l. Masalan: you / stay → Are you going to stay?",
    questions: written([
      ["you / learn Korean", "Are you going to learn Korean?"],
      ["she / get a visa", "Is she going to get a visa?"],
      ["they / move house", "Are they going to move house?"],
      ["he / apply to university", "Is he going to apply to university?"],
      ["you / work in Dubai", "Are you going to work in Dubai?"],
      ["your parents / visit you", "Are your parents going to visit you?"],
      ["it / be cold", "Is it going to be cold?"],
      ["we / take a taxi", "Are we going to take a taxi?"],
      ["your sister / do a course", "Is your sister going to do a course?"],
      ["I / be late", "Am I going to be late?"],
    ]),
  },
  {
    title: "Qisqa javob",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Savolga mos qisqa javobni tanlang. Qavsdagi belgi: ✓ — ha, ✗ — yo'q.",
    questions: [
      say("Are you going to learn Korean? (✓)", ["Yes, I am.", "Yes, I do.", "Yes, I going.", "Yes, I'm."]),
      say("Is she going to work? (✗)", ["No, she isn't.", "No, she doesn't.", "No, she not.", "No, she aren't."]),
      say("Are they going to come? (✓)", ["Yes, they are.", "Yes, they do.", "Yes, they're.", "Yes, they going."]),
      say("Is he going to drive? (✗)", ["No, he isn't.", "No, he doesn't.", "No, he didn't.", "No, he aren't."]),
      say("Are you going to be homesick? (✓)", ["Yes, I am.", "Yes, I will.", "Yes, I do.", "Yes, I'm going."]),
      say("Is it going to rain? (✗)", ["No, it isn't.", "No, it doesn't.", "No, it not.", "No, it wasn't."]),
      say("Are we going to be late? (✗)", ["No, we aren't.", "No, we don't.", "No, we isn't.", "No, we didn't."]),
      say("Is your brother going to apply? (✓)", ["Yes, he is.", "Yes, he does.", "Yes, he's.", "Yes, he going."]),
      say("Did you get the visa? (✓)", ["Yes, I did.", "Yes, I am.", "Yes, I got.", "Yes, I was."], "Did…? → did / didn't."),
      say("Do you practise every day? (✗)", ["No, I don't.", "No, I'm not.", "No, I didn't.", "No, I amn't."], "Do…? → do / don't."),
    ],
  },
  {
    title: "Wh- savollar",
    skill: "Grammatika",
    kind: "type",
    instructions: "Javobga qarab savol tuzing. Masalan: I'm going to study medicine. (What) → What are you going to study?",
    questions: written([
      ["I'm going to live in Seoul. (Where)", "Where are you going to live?"],
      ["I'm going to leave in September. (When)", "When are you going to leave?"],
      ["She's going to study English. (What)", "What is she going to study?"],
      ["They're going to stay for a year. (How long)", "How long are they going to stay?"],
      ["He's going to work in a hotel. (Where)", "Where is he going to work?"],
      ["We're going to travel by plane. (How)", "How are you going to travel?"],
      ["I'm going to meet my manager. (Who)", "Who are you going to meet?"],
      ["She's going to call at noon. (What time)", "What time is she going to call?"],
      ["I'm going to do a course. (What)", "What are you going to do?"],
      ["They're going to visit us in March. (When)", "When are they going to visit you?"],
    ]),
  },
  {
    title: "at, on yoki in?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Bo'sh joyga mos predlogni tanlang.",
    questions: [
      say("I'm going to leave ___ Monday.", ["on", "in", "at", "—"]),
      say("The plane leaves ___ midnight.", ["at", "in", "on", "—"]),
      say("Navruz is ___ March.", ["in", "on", "at", "—"]),
      say("My birthday is ___ 5 July.", ["on", "in", "at", "—"]),
      say("I'm going to finish university ___ 2030.", ["in", "on", "at", "—"]),
      say("We have lessons ___ the afternoon.", ["in", "on", "at", "—"]),
      say("Let's meet ___ seven o'clock.", ["at", "in", "on", "—"]),
      say("What are you going to do ___ the weekend?", ["at", "in", "—", "to"]),
      say("It's very hot ___ summer.", ["in", "on", "at", "—"]),
      say("I'm going to call you ___ tomorrow.", ["—", "on", "in", "at"], "tomorrow, next…, last…, this… — predlogsiz."),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Juftlarni ulang.",
    questions: pairs([
      ["at|midnight", "on|Friday evening", "in|March", "at|the weekend"],
      ["on|my birthday", "in|the afternoon", "at|noon", "in|2030"],
      ["dream|orzu", "goal|maqsad", "change|o'zgarish", "culture|madaniyat"],
      ["nervous|hayajonlangan", "excited|hayajonda (xursand)", "homesick|uyni sog'ingan", "different|boshqacha"],
      ["salary|maosh", "colleague|hamkasb", "manager|rahbar", "interview|suhbat"],
      ["apply|ariza topshirmoq", "practise|mashq qilmoq", "scholarship|grant", "degree|diplom"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("*Do you going to learn Korean?", "Savol: Are you going to…?"),
      mistake("Is she going to *gets a visa?", "going to + oddiy fe'l: get."),
      mistake("Where *you are going to live?", "Savolda tartib: Where are you…?"),
      mistake("Are you going to stay? — Yes, I *do.", "Yes, I am."),
      mistake("Is he going to work? — No, he *doesn't.", "No, he isn't."),
      mistake("The plane leaves *in midnight.", "at midnight."),
      mistake("Navruz is *on March.", "Oy oldidan: in March."),
      mistake("My interview is *in Monday.", "Kun oldidan: on Monday."),
      mistake("I'm going to call you *on tomorrow.", "tomorrow — predlogsiz."),
      mistake("What *is they going to do?", "they → are."),
    ],
  },
  {
    title: "Rejalar haqida so'rang",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("Are you going to study abroad?", ["Yes, I am. I'm going to study in Korea.", "Yes, I do.", "Yes, I'm study in Korea.", "Yes, I went to Korea."]),
      say("What are you going to study?", ["Business. It's my dream.", "I studied business.", "Yes, I am.", "In September."]),
      say("When are you going to leave?", ["In September.", "On September.", "At September.", "For September."]),
      say("How long are you going to stay?", ["For a year.", "In a year ago.", "At a year.", "On Monday."]),
      say("Are you nervous?", ["A little, but I'm very excited!", "Yes, I'm nervously.", "No, I didn't.", "Yes, I nervous."]),
      say("Is your family going to visit you?", ["Yes, they are. In March.", "Yes, they do.", "Yes, they visited.", "Yes, it is."]),
      say("Where are you going to live?", ["In a student flat.", "Next week.", "Yes, I am.", "With a scholarship."]),
      say("What are you going to do at the weekend?", ["I'm going to visit my grandparents.", "I visited them at the weekend.", "On Saturday ago.", "Yes, I'm going."]),
      say("I got the scholarship!", ["Congratulations! That's fantastic!", "What a pity!", "Get well soon!", "No problem."]),
      say("My interview is tomorrow.", ["Good luck! Don't be nervous.", "Well done!", "Happy birthday!", "Enjoy your meal!"]),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "Are you going to learn Korean?",
      "What are you going to do?",
      "Where is she going to live?",
      "When are they going to leave?",
      "Our plane leaves at midnight.",
      "My interview is on Monday.",
      "I'm going to finish university in 2030.",
      "My dream is to study in London.",
      "I'm going to apply to a university in Korea.",
      "What are you going to do at the weekend?",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Bo'sh joyga bitta so'z yozing.",
    questions: written([
      ["___ you going to work in Dubai?", "Are"],
      ["___ she going to learn Korean?", "Is"],
      ["Where are you going ___ live?", "to"],
      ["Are you going to come? — Yes, I ___.", "am"],
      ["Is he going to drive? — No, he ___.", "isn't"],
      ["My birthday is ___ Saturday.", "on"],
      ["We have English ___ the morning.", "in"],
      ["The film starts ___ eight o'clock.", "at"],
      ["She's going to live in Seoul ___ a year.", "for"],
      ["My ___ is to speak English well. (maqsad)", "goal"],
    ]),
  },
  {
    title: "Seuldagi yangi hayot",
    skill: "Matn bilan ishlash",
    kind: "reading",
    instructions: "Blogni diqqat bilan o'qing va har bir savolga javob bering.",
    questions: [
      read("What did Shahzoda get?", ["A scholarship", "A job", "A visa", "A flat"]),
      read("How long is she going to study in Seoul?", ["For a year", "For two years", "For six months", "The text doesn't say."]),
      read("How does she feel?", ["Excited and a little nervous", "Only nervous", "Sad", "Homesick"]),
      read("When is she going to have her Korean course?", ["In the mornings", "In the afternoon", "In the evenings", "At the weekend"]),
      read("Who is she going to live with?", ["Two other girls", "Her family", "A Korean family", "Alone"]),
      read("Where is one of the girls from?", ["Brazil", "Korea", "Turkey", "Russia"]),
      read("Why isn't she going to work?", ["The scholarship pays for everything.", "She can't speak Korean.", "She hasn't got a visa.", "Her parents said no."]),
      read("Why isn't she going to come home for New Year?", ["The tickets are expensive.", "She has exams.", "She's going to work.", "Her family is going to visit her."]),
      read("When is her family going to visit her?", ["In March", "In September", "At New Year", "In 2028"]),
      read("What is her plan after 2028?", ["A career at an international company", "Another degree", "To stay in Korea", "To be a teacher"]),
    ],
  },
  {
    title: "Dubaydagi ish",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Hasanov qayerga ko'chmoqchi?", ["Dubayga", "Seulga", "Istanbulga", "Londonga"]),
      hear("U qayerda ishlaydi?", ["Mehmonxonada", "Bankda", "Maktabda", "Aeroportda"]),
      hear("U yolg'iz ketadimi?", ["Yo'q, xotini va o'g'li bilan", "Ha, yolg'iz", "Yo'q, akasi bilan", "Yo'q, hamkasblari bilan"]),
      hear("Ular qachon jo'nashadi?", ["15-yanvarda", "5-yanvarda", "15-iyunda", "Yangi yil arafasida"]),
      hear("Samolyot soat nechada uchadi?", ["Yarim tunda", "Tush paytida", "Ertalab", "Kechqurun soat sakkizda"]),
      hear("U kim bo'lib ishlaydi?", ["Restoran menejeri", "Oshpaz", "Haydovchi", "O'qituvchi"]),
      hear("Maosh qanday?", ["Juda yaxshi", "Kam", "Yomon emas", "Aytilmagan"]),
      hear("O'g'li qanday maktabga boradi?", ["Xalqaro maktabga", "Arab maktabiga", "O'zbek maktabiga", "Bormaydi"]),
      hear("Hasanov o'zini qanday his qilyapti?", ["Hayajonda, biroz xavotirda", "Xafa", "Zerikkan", "Charchagan"]),
      hear("Nima uchun u biroz xavotirda?", ["Madaniyat juda boshqacha", "Maosh kam", "Ishni bilmaydi", "Oilasi bormaydi"]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "Are you going to learn Korean?",
      "Yes, I am.",
      "No, I'm not.",
      "What are you going to do?",
      "Where are you going to live?",
      "at the weekend",
      "on my birthday",
      "in the afternoon",
      "colleague",
      "scholarship",
    ]),
  },
];
