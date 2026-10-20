/**
 * A1, 12-dars — «Kun tartibim». Kundalik ishlar (get up, have breakfast…),
 * kun qismlari, do'konda xarid. Grammatika: Present Simple — so'roq (Do you
 * …? Does she …?) va qisqa javoblar (Yes, I do. / No, she doesn't.); «at»
 * va «in the» vaqt bilan. Matn va mashqlar o'zimizniki.
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

export const A1_12_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("⏰", "get up", "ˌɡet ˈʌp|get ap", "fe'l", "O'rnidan turmoq", "To leave your bed in the morning.", "I get up at seven o'clock.", "Soat yettida turaman."),
      w("🥣", "have breakfast", "hæv ˈbrekfəst|hev brekfast", "ibora", "Nonushta qilmoq", "To eat in the morning.", "We have breakfast at half past seven.", "Soat yetti yarimda nonushta qilamiz."),
      w("🚿", "have a shower", "hæv ə ˈʃaʊə|hev a shaua", "ibora", "Dush qabul qilmoq", "To wash your body under water.", "I have a shower every morning.", "Har kuni ertalab dush qabul qilaman."),
      w("🏢", "go to work", "ˌɡəʊ tə ˈwɜːk|gou tu uyok", "ibora", "Ishga bormoq", "To travel to your job.", "I go to work at eight.", "Ishga soat sakkizda boraman."),
      w("🥪", "have lunch", "hæv ˈlʌntʃ|hev lanch", "ibora", "Tushlik qilmoq", "To eat in the middle of the day.", "We have lunch at one o'clock.", "Soat birda tushlik qilamiz."),
      w("🏠", "go home", "ˌɡəʊ ˈhəʊm|gou houm", "ibora", "Uyga bormoq", "To return to your house. No «to»: go home!", "I go home at six.", "Uyga soat oltida boraman."),
      w("🍲", "have dinner", "hæv ˈdɪnə|hev dina", "ibora", "Kechki ovqat qilmoq", "To eat in the evening.", "We have dinner together.", "Kechki ovqatni birga yeymiz."),
      w("📝", "do homework", "ˌduː ˈhəʊmwɜːk|duu houmuyok", "ibora", "Uy vazifasini bajarmoq", "To do work from school at home.", "Children do homework after school.", "Bolalar darsdan keyin uy vazifasini bajarishadi."),
      w("📺", "watch TV", "ˌwɒtʃ ˌtiː ˈviː|uoch tii vii", "ibora", "Televizor ko'rmoq", "To look at programmes on TV.", "My grandparents watch TV every evening.", "Bobom va buvim har kuni kechqurun televizor ko'rishadi."),
      w("🛏️", "go to bed", "ˌɡəʊ tə ˈbed|gou tu bed", "ibora", "Uxlashga yotmoq", "To get into bed at night.", "I go to bed at eleven.", "Soat o'n birda yotaman."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("💲", "how much", "ˌhaʊ ˈmʌtʃ|xau mach", "ibora", "Qancha (narx)", "A question about price.", "How much is this bag?", "Bu sumka qancha turadi?"),
      w("🛒", "buy", "baɪ|bay", "fe'l", "Sotib olmoq", "To get something with money.", "I buy bread every morning.", "Har kuni ertalab non sotib olaman."),
      w("🏷️", "sell", "sel|sel", "fe'l", "Sotmoq", "To give something for money.", "They sell fruit at the market.", "Ular bozorda meva sotishadi."),
      w("💳", "pay", "peɪ|pey", "fe'l", "To'lamoq", "To give money for something.", "Can I pay by card?", "Karta bilan to'lasam bo'ladimi?"),
      w("💵", "cash", "kæʃ|kesh", "ot", "Naqd pul", "Money in notes and coins.", "Sorry, we only take cash.", "Kechirasiz, faqat naqd pul olamiz."),
      w("🪪", "card", "kɑːd|kaad", "ot", "Karta (bank kartasi)", "A plastic card for paying.", "I haven't got a card. Only cash.", "Kartam yo'q. Faqat naqd pul."),
      w("🔖", "price", "praɪs|prays", "ot", "Narx", "How much money something costs.", "The price is on the label.", "Narx yorliqda yozilgan."),
      w("🟢", "open", "ˈəʊpən|oupen", "sifat", "Ochiq", "Not closed. You can go in.", "The shop is open from nine to nine.", "Do'kon soat to'qqizdan to'qqizgacha ochiq."),
      w("🔴", "closed", "kləʊzd|klouzd", "sifat", "Yopiq", "Not open.", "The bank is closed on Sunday.", "Bank yakshanba kuni yopiq."),
      w("🏪", "market", "ˈmɑːkɪt|maakit", "ot", "Bozor", "A place where people sell food and things.", "We buy fruit at Chorsu market.", "Mevani Chorsu bozoridan olamiz."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🌅", "morning", "ˈmɔːnɪŋ|mooning", "ot", "Ertalab, tong", "The time from sunrise to 12 o'clock.", "I study in the morning.", "Ertalab o'qiyman."),
      w("🌤️", "afternoon", "ˌɑːftəˈnuːn|aaftanuun", "ot", "Tushdan keyin", "The time from 12 o'clock to about 6.", "She works in the afternoon.", "U tushdan keyin ishlaydi."),
      w("🌆", "evening", "ˈiːvnɪŋ|iivning", "ot", "Kechqurun", "The time from about 6 to bedtime.", "We watch films in the evening.", "Kechqurun film ko'ramiz."),
      w("🌃", "night", "naɪt|nayt", "ot", "Tun, kecha", "The dark time when people sleep.", "The baby wakes up at night.", "Chaqaloq tunda uyg'onadi."),
      w("☀️", "day", "deɪ|dey", "ot", "Kun", "24 hours. Or the time when it is light.", "Have a nice day!", "Kuningiz yaxshi o'tsin!"),
      w("📅", "week", "wiːk|uiik", "ot", "Hafta", "Seven days.", "I go to the gym three times a week.", "Haftada uch marta sport zaliga boraman."),
      w("📍", "today", "təˈdeɪ|tadey", "ravish", "Bugun", "This day.", "What do you do today?", "Bugun nima qilasiz?"),
      w("➡️", "tomorrow", "təˈmɒrəʊ|tamorou", "ravish", "Ertaga", "The day after today.", "The shop is closed tomorrow.", "Do'kon ertaga yopiq."),
      w("🔁", "every", "ˈevri|evri", "sifat", "Har (bir)", "All of them, one by one: every day, every week.", "I call my mum every evening.", "Har kuni kechqurun onamga qo'ng'iroq qilaman."),
      w("⏭️", "then", "ðen|zen", "ravish", "Keyin, so'ng", "After that.", "I have breakfast, then I go to work.", "Nonushta qilaman, keyin ishga boraman."),
    ],
  },
];

const DO_DOES = ["Do", "Does"];
const SHORT = ["Yes, I do.", "No, I don't.", "Yes, she does.", "No, she doesn't."];

const SHOP = `Good morning! Can I help you?
Yes, please. How much are these apples?
They're twenty thousand som a kilo.
And the grapes?
Thirty thousand a kilo.
OK. A kilo of apples and half a kilo of grapes, please.
Here you are. That's thirty-five thousand.
Do you take cards?
No, sorry. We only take cash.
No problem. Here you are.
Thank you! Have a nice day!`;
const hear = hearing(SHOP);

const DAY = `Shahlo is a nurse. She works at night, so her day isn't usual. She gets up at two o'clock in the afternoon. She doesn't have breakfast — she has lunch! In the afternoon she goes to the gym or meets friends. She has dinner with her family at six. Then she takes the metro to the hospital. She starts work at eight in the evening and finishes at seven in the morning. She goes home, has a shower and goes to bed at eight. Does she like her job? Yes, she does!`;
const tf = trueFalse(DAY);

export const A1_12_EXERCISES: SeedExercise[] = [
  {
    title: "Kun tartibi",
    skill: "Tinglash",
    kind: "listen",
    instructions: "Ibora o'qiladi. Eshitganingizni toping.",
    questions: [
      listen("get up", ["get up", "go home", "go to bed", "have lunch"]),
      listen("have breakfast", ["have lunch", "have dinner", "have breakfast", "have a shower"]),
      listen("have a shower", ["have a shower", "watch TV", "do homework", "go to work"]),
      listen("go to bed", ["go home", "go to bed", "go to work", "get up"]),
      listen("have dinner", ["have dinner", "have lunch", "have breakfast", "do homework"]),
      listen("do homework", ["do homework", "go home", "watch TV", "have a shower"]),
      listen("how much", ["how much", "how many", "how old", "how are you"]),
      listen("afternoon", ["afternoon", "evening", "morning", "tomorrow"]),
      listen("tomorrow", ["today", "tomorrow", "morning", "every"]),
      listen("closed", ["closed", "close", "clothes", "cold"]),
    ],
  },
  {
    title: "Rasmga mos ibora",
    skill: "Rasm",
    kind: "picture",
    instructions: "Rasmga qarang va mos iborani toping.",
    questions: [
      pick("⏰", ["get up", "go to bed", "have dinner", "watch TV"], 0),
      pick("🚿", ["have breakfast", "have a shower", "go home", "do homework"], 1),
      pick("🥣", ["have dinner", "have lunch", "have breakfast", "go to work"], 2),
      pick("🛏️", ["get up", "go home", "have a shower", "go to bed"], 3),
      pick("📝", ["do homework", "watch TV", "go to work", "have lunch"], 0),
      pick("📺", ["go home", "watch TV", "get up", "buy"], 1),
      pick("💳", ["cash", "price", "card", "market"], 2),
      pick("💵", ["card", "price", "open", "cash"], 3),
      pick("🏪", ["market", "station", "hospital", "school"], 0),
      pick("🌃", ["morning", "night", "afternoon", "day"], 1),
    ],
  },
  {
    title: "Do yoki Does?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "I, you, we, they — Do…? He, she, it — Does…? Savolda fe'l -s siz bo'ladi.",
    questions: [
      pick("___ you get up early?", DO_DOES, 0),
      pick("___ she have breakfast?", DO_DOES, 1),
      pick("___ they live in Tashkent?", DO_DOES, 0),
      pick("___ your brother play football?", DO_DOES, 1),
      pick("___ we have homework today?", DO_DOES, 0),
      pick("___ the shop open on Sunday?", DO_DOES, 1, "The shop = it → Does."),
      pick("___ your parents watch TV?", DO_DOES, 0),
      pick("___ Aziz go to work by bus?", DO_DOES, 1),
      pick("___ you take cards?", DO_DOES, 0),
      pick("___ the bus stop here?", DO_DOES, 1),
    ],
  },
  {
    title: "Qisqa javob",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Javob savoldagi yordamchi fe'l bilan: Do you…? — Yes, I do. Does she…? — No, she doesn't. Belgiga qarang (✓ / ✗).",
    questions: [
      pick("Do you get up early? (✓)", SHORT, 0),
      pick("Do you like coffee? (✗)", SHORT, 1),
      pick("Does she work at night? (✓)", SHORT, 2),
      pick("Does she drive? (✗)", SHORT, 3),
      pick("Do you have lunch at work? (✓)", SHORT, 0),
      pick("Does your mother watch TV? (✓)", SHORT, 2),
      pick("Do you go to bed late? (✗)", SHORT, 1),
      pick("Does she have breakfast? (✗)", SHORT, 3),
      pick("Do you do homework every day? (✓)", SHORT, 0),
      pick("Does she like her job? (✓)", SHORT, 2),
    ],
  },
  {
    title: "Savol tuzing",
    skill: "Grammatika",
    kind: "type",
    instructions: "Gapni so'roq gapga aylantiring. Masalan: You get up early. → Do you get up early?",
    questions: written([
      ["You get up early.", "Do you get up early?"],
      ["She works at night.", "Does she work at night?", "Does bor — fe'l -s siz: work."],
      ["They live in Bukhara.", "Do they live in Bukhara?"],
      ["He plays football.", "Does he play football?"],
      ["You like tea.", "Do you like tea?"],
      ["Your sister has a car.", "Does your sister have a car?", "has → Does … have?"],
      ["The shop opens at nine.", "Does the shop open at nine?"],
      ["You take cards.", "Do you take cards?"],
      ["Aziz goes to work by bus.", "Does Aziz go to work by bus?"],
      ["We have homework today.", "Do we have homework today?"],
    ]),
  },
  {
    title: "Do'konda",
    skill: "Vaziyat",
    kind: "situation",
    instructions: "Vaziyatni o'qing va unga mos inglizcha iborani tanlang.",
    questions: [
      say("Olmaning narxini bilmoqchisiz.", ["How much are these apples?", "How many are these apples?", "What apples cost?", "How much apples are?"]),
      say("Karta bilan to'lamoqchisiz.", ["Can I pay by card?", "Can I pay with cash?", "Do you sell cards?", "How much is card?"]),
      say("Sotuvchi «Can I help you?» dedi. Sizga non kerak.", ["Yes, please. A loaf of bread, please.", "No, thank you. Bread.", "Yes, I help you.", "Bread is how much?"]),
      say("Sotuvchi sizga xaridingizni berdi.", ["Thank you!", "You're welcome!", "Good luck!", "Here you are."]),
      say("Siz sotuvchiga pul beryapsiz.", ["Here you are.", "Here are you.", "You are here.", "Take it you."]),
      say("Do'kon ertaga ishlaydimi, bilmoqchisiz.", ["Are you open tomorrow?", "Do you open tomorrow are?", "Is tomorrow open?", "Open you tomorrow?"]),
      say("Sotuvchi faqat naqd pul olar ekan, sizda esa bor.", ["No problem. Here you are.", "Sorry, I don't have a card.", "Good luck!", "Congratulations!"]),
      say("Bir kilo uzum so'rang.", ["A kilo of grapes, please.", "One grapes kilo, please.", "A grapes of kilo.", "Kilo grape a please."]),
      say("Narx juda qimmat ekan.", ["That's very expensive!", "That's very cheap!", "That's very open!", "That's very closed!"]),
      say("Xaridni tugatib chiqyapsiz.", ["Thanks. Bye!", "Good morning!", "How much?", "Can I help you?"]),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Chap va o'ng tomonni ulang.",
    questions: pairs([
      ["get|up", "have|breakfast", "go|to bed", "do|homework"],
      ["watch|TV", "go|home", "have a|shower", "go to|work"],
      ["buy|sotib olmoq", "sell|sotmoq", "pay|to'lamoq", "price|narx"],
      ["open|closed", "morning|evening", "buy|sell", "today|tomorrow"],
      ["Do you…?|Yes, I do.", "Does she…?|No, she doesn't.", "How much is it?|Ten thousand som.", "Can I help you?|Yes, please."],
      ["morning|ertalab", "afternoon|tushdan keyin", "evening|kechqurun", "night|tun"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("*Do she work at night?", "She bilan — Does."),
      mistake("Does he *plays football?", "Does bor — fe'l -s siz: Does he play…?"),
      mistake("Do you like tea? — Yes, I *like.", "Qisqa javob: Yes, I do."),
      mistake("Does she drive? — No, she *don't.", "she → doesn't."),
      mistake("I go *to home at six.", "go home — «to» kerak emas."),
      mistake("I get up *in seven o'clock.", "Soat bilan — at: at seven o'clock."),
      mistake("We have dinner *in evening.", "in the evening."),
      mistake("How *many is this bag?", "Narx — How much."),
      mistake("Can I pay *with card?", "by card: Can I pay by card?"),
      mistake("*You do get up early?", "So'roq: Do you get up early?"),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "Do you get up early?",
      "Does she work at night?",
      "I have breakfast at seven.",
      "Then I go to work by bus.",
      "We have dinner in the evening.",
      "How much is this bag?",
      "Can I pay by card?",
      "The shop is closed on Sunday.",
      "Yes, I do.",
      "No, she doesn't.",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: written([
      ["___ you have breakfast every day?", "Do"],
      ["___ your sister work in a bank?", "Does"],
      ["— Do you like coffee? — Yes, I ___.", "do"],
      ["— Does he drive? — No, he ___.", "doesn't"],
      ["I get ___ at seven o'clock.", "up"],
      ["I go to bed ___ eleven.", "at"],
      ["We watch TV in the ___. (kechqurun)", "evening"],
      ["How ___ are these apples?", "much"],
      ["Can I pay ___ card?", "by"],
      ["I have a shower, ___ I have breakfast.", "then"],
    ]),
  },
  {
    title: "Shahloning kuni",
    skill: "O'qish",
    kind: "truefalse",
    instructions: "Matnni o'qing va gap to'g'ri yoki noto'g'ri ekanini belgilang.",
    questions: [
      tf("Shahlo works at night.", true),
      tf("She gets up at seven o'clock in the morning.", false, "She gets up at two o'clock in the afternoon."),
      tf("She has breakfast every day.", false, "She doesn't have breakfast — she has lunch."),
      tf("She sometimes goes to the gym in the afternoon.", true),
      tf("She has dinner with her family.", true),
      tf("She goes to work by bus.", false, "She takes the metro."),
      tf("She starts work at eight in the evening.", true),
      tf("She finishes work at seven in the morning.", true),
      tf("She goes to bed at eleven at night.", false, "She goes to bed at eight (in the morning)."),
      tf("She likes her job.", true),
    ],
  },
  {
    title: "Bozorda",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Suhbat qachon bo'lyapti?", ["Ertalab", "Kechqurun", "Tushdan keyin", "Kechasi"]),
      hear("Bir kilo olma qancha turadi?", ["20 000 so'm", "30 000 so'm", "35 000 so'm", "15 000 so'm"]),
      hear("Bir kilo uzum qancha turadi?", ["30 000 so'm", "20 000 so'm", "35 000 so'm", "15 000 so'm"]),
      hear("Xaridor qancha olma oldi?", ["Bir kilo", "Yarim kilo", "Ikki kilo", "Uch kilo"]),
      hear("Xaridor qancha uzum oldi?", ["Yarim kilo", "Bir kilo", "Ikki kilo", "Olmadi"]),
      hear("Hammasi qancha bo'ldi?", ["35 000 so'm", "50 000 so'm", "30 000 so'm", "20 000 so'm"]),
      hear("Sotuvchi karta oladimi?", ["Yo'q, faqat naqd pul", "Ha", "Faqat karta", "Aytilmagan"]),
      hear("Xaridor qanday to'ladi?", ["Naqd pul bilan", "Karta bilan", "To'lamadi", "Telefon bilan"]),
      hear("«Can I help you?» ni kim aytdi?", ["Sotuvchi", "Xaridor", "Ikkalasi", "Hech kim"]),
      hear("Suhbat qanday tugaydi?", ["Have a nice day!", "Good night!", "See you tomorrow!", "No problem."]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "I get up at seven o'clock.",
      "Do you have breakfast?",
      "Yes, I do.",
      "Does she work at night?",
      "No, she doesn't.",
      "How much is this?",
      "Can I pay by card?",
      "Here you are.",
      "I go to bed at eleven.",
      "Have a nice day!",
    ]),
  },
];
