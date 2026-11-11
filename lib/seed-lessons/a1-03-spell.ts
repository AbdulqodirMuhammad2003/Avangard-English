/**
 * A1, 3-dars — «Ismingiz qanday yoziladi?». Navigate A1, 1.3 «How do you
 * spell that?», 1.4 «filling in a form» va 1.5 «At the hotel» asosida:
 * alifbo va harflar tovushi, ismni harflab aytish, telefon raqami,
 * mehmonxona ro'yxatdan o'tish varaqasi, bosh harflar.
 * Grammatika: so'roq so'zlari — What? Where? How? Tinglash mashqlarida kitob
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
  slots,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-a1/audio/${n}.mp3`;

export const A1_03_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🔤", "alphabet", "ˈælfəbet|elfabet", "ot", "Alifbo", "All the letters of a language: A, B, C…", "Listen and repeat the letters of the alphabet.", "Alifbo harflarini tinglang va takrorlang."),
      w("🅰️", "letter", "ˈletə|leta", "ot", "Harf", "A, B, C… are letters.", "Write the first letter of your name.", "Ismingizning birinchi harfini yozing."),
      w("✍️", "spell", "spel|spel", "fe'l", "Harflab aytmoq / yozmoq", "Say or write the letters of a word.", "How do you spell that?", "Bu qanday yoziladi?"),
      w("🔠", "capital", "ˈkæpɪtl|kepitl", "sifat", "Bosh (harf)", "A big letter: A, B, C (not a, b, c).", "Names have a capital letter.", "Ismlar bosh harf bilan yoziladi."),
      w("✌️", "double", "ˈdʌbl|dabl", "sifat", "Qo'sh, ikkita", "Two of the same: «ll» is double L.", "Bill — B-I-double L.", "Bill — B-I-qo'sh L."),
      w("❔", "what", "wɒt|uot", "so'roq so'zi", "Nima; qanday", "A question word about things and information.", "What is your name?", "Ismingiz nima?"),
      w("🛠️", "how", "haʊ|hau", "so'roq so'zi", "Qanday, qanaqa", "A question word about the way you do something.", "How do you spell that?", "Bu qanday yoziladi?"),
      w("📱", "phone number", "ˈfəʊn ˌnʌmbə|foun namba", "ot", "Telefon raqami", "The number you call to talk to someone.", "What's your phone number?", "Telefon raqamingiz qanday?"),
      w("🪪", "first name", "ˈfɜːst neɪm|fyorst neym", "ot", "Ism", "Your own name, e.g. Havva in Havva Yilmaz.", "Write your first name here.", "Ismingizni shu yerga yozing."),
      w("👪", "last name", "ˈlɑːst neɪm|laast neym", "ot", "Familiya", "Your family name, e.g. Yilmaz in Havva Yilmaz.", "What's your last name?", "Familiyangiz nima?"),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🏨", "hotel", "həʊˈtel|houtel", "ot", "Mehmonxona", "A building where you pay to sleep and eat.", "The hotel is in London.", "Mehmonxona Londonda."),
      w("🛎️", "receptionist", "rɪˈsepʃənɪst|risepshanist", "ot", "Qabulxona xodimi (resepshn)", "The person at the front desk of a hotel.", "The receptionist says «Welcome!».", "Resepshn xodimi «Xush kelibsiz!» deydi."),
      w("🧳", "guest", "ɡest|gest", "ot", "Mehmon", "A person who stays in a hotel.", "The guest is from France.", "Mehmon Fransiyadan."),
      w("🔑", "room key", "ˈruːm kiː|ruum kii", "ot", "Xona kaliti", "The key (or card) that opens your hotel room.", "Here's your room key.", "Mana xonangiz kaliti."),
      w("🍳", "breakfast", "ˈbrekfəst|brekfast", "ot", "Nonushta", "The first meal of the day.", "Breakfast is in the restaurant.", "Nonushta restoranda."),
      w("🍽️", "restaurant", "ˈrestrɒnt|restront", "ot", "Restoran", "A place where you buy and eat meals.", "The restaurant is over there.", "Restoran ana u yerda."),
      w("💳", "credit card", "ˈkredɪt kɑːd|kredit kaad", "ot", "Kredit karta", "A plastic card you pay with.", "Here's my credit card.", "Mana kredit kartam."),
      w("📋", "form", "fɔːm|foom", "ot", "Anketa, varaqa", "A paper with spaces for your name, address and other information.", "Complete the form.", "Anketani to'ldiring."),
      w("🏠", "address", "əˈdres|adres", "ot", "Manzil", "The number, street and city where you live.", "What's your address?", "Manzilingiz qanday?"),
      w("🖊️", "sign", "saɪn|sayn", "fe'l", "Imzo qo'ymoq", "Write your name in your own way at the end of a form.", "Sign here, please.", "Shu yerga imzo qo'ying, iltimos."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("✔️", "that's right", "ˌðæts ˈraɪt|zets rayt", "ibora", "To'g'ri, xuddi shunday", "You say it when something is correct.", "R-O-G-E-R? — Yes, that's right.", "R-O-G-E-R? — Ha, to'g'ri."),
      w("🎤", "conference", "ˈkɒnfərəns|konfarans", "ot", "Konferensiya, anjuman", "A big meeting of people for work.", "Are you here for the conference?", "Konferensiyaga keldingizmi?"),
      w("🛣️", "road", "rəʊd|roud", "ot", "Yo'l, ko'cha", "A way for cars in a town; part of an address.", "My address is 8 Park Road.", "Manzilim — Park ko'chasi, 8."),
      w("🏘️", "street", "striːt|striit", "ot", "Ko'cha", "A road in a town with houses on it.", "I live on Navoi Street.", "Men Navoiy ko'chasida yashayman."),
      w("0️⃣", "oh", "əʊ|ou", "son", "Nol (raqamlarda)", "We often say «oh» for 0 in phone numbers.", "My number is double oh, four, four.", "Raqamim — ikki nol, to'rt, to'rt."),
      w("🌙", "night", "naɪt|nayt", "ot", "Tun, kecha", "The time when it is dark; a night in a hotel.", "One night in this hotel is $90.", "Bu mehmonxonada bir kecha — 90 dollar."),
      w("🤗", "welcome", "ˈwelkəm|uelkam", "undov", "Xush kelibsiz", "A word you say to a new guest.", "Welcome to the hotel!", "Mehmonxonaga xush kelibsiz!"),
      w("📝", "check-in", "ˈtʃek ɪn|chek in", "ot", "Ro'yxatdan o'tish (mehmonxonada)", "The place or time when you arrive and give your name at a hotel.", "Excuse me, is check-in here?", "Kechirasiz, ro'yxatdan o'tish shu yerdami?"),
      w("👉", "over there", "ˌəʊvə ˈðeə|ouva zea", "ibora", "Ana u yerda", "In that place (not near).", "The restaurant is over there.", "Restoran ana u yerda."),
      w("🤔", "reason", "ˈriːzn|riizn", "ot", "Sabab", "Why you do something.", "Reason for visit: business.", "Tashrif sababi: ish."),
    ],
  },
];

const CARD = `Hi, I'm Dilshod Rahimov from Uzbekistan. I'm here in London on business. I'm at a conference for three nights. My address is 15 Navoi Street, Tashkent, and my phone number is 00 998 90 123 4567.

HOTEL REGISTRATION CARD
First name: Dilshod
Last name: Rahimov
Country: Uzbekistan
Home address: 15 Navoi Street, Tashkent
Reason for visit: business
Number of nights: 3
Signature: D. Rahimov`;
const read = reading(CARD);

const RECEPTIONIST = "Resepshn xodimi";
const GUEST = "Mehmon";

export const A1_03_EXERCISES: SeedExercise[] = [
  {
    title: "Harflarning tovushi",
    skill: "Tinglash",
    kind: "listenmatch",
    instructions:
      "Ingliz alifbosining har bir harfi yettita tovushdan birida aytiladi: /eɪ/ eight, /iː/ three, /e/ ten, /aɪ/ five, /əʊ/ no, /juː/ you, /ɑː/ are. Tinglang va har bir guruhga harflarni tanlang.",
    questions: [
      slots(track("1.20"), [
        ["/eɪ/ — eight", "A H J K"],
        ["/iː/ — three", "B C D E G P T V"],
        ["/e/ — ten", "F L M N S X Z"],
        ["/aɪ/ — five", "I Y"],
        ["/əʊ/ — no", "O"],
        ["/juː/ — you", "Q U W"],
        ["/ɑː/ — are", "R"],
      ]),
    ],
  },
  {
    title: "Qaysi harf?",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Har bir raqamda bitta harf aytiladi. Tinglang va eshitgan harfingizni tanlang. G va J, E va I, A va R ni adashtirmang!",
    questions: [
      gaps(track("1.21"), [
        ["1. ___", "G", "J"],
        ["2. ___", "E", "I"],
        ["3. ___", "F", "V"],
        ["4. ___", "C", "S"],
        ["5. ___", "R", "A"],
        ["6. ___", "Y", "J"],
        ["7. ___", "I", "Y"],
        ["8. ___", "Q", "K"],
        ["9. ___", "H", "A"],
        ["10. ___", "O", "U"],
      ]),
    ],
  },
  {
    title: "Qaysi ism?",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Ismlar harflab aytiladi. Tinglang va to'g'ri yozilgan ismni tanlang.",
    questions: [
      gaps(track("1.22"), [
        ["1. ___", "Elinor", "Elena"],
        ["2. ___", "Jacqui", "Jackie"],
        ["3. ___", "Jorge", "George"],
        ["4. ___", "Paula", "Paola"],
        ["5. ___", "Joan", "John"],
      ]),
    ],
  },
  {
    title: "To'rtta ism",
    skill: "Tinglash",
    kind: "listenmatch",
    instructions: "To'rtta suhbatni tinglang. Har bir suhbatdagi ismni tanlang.",
    questions: [
      slots(track("1.23"), [
        ["Conversation 1", "Bill"],
        ["Conversation 2", "Aylin"],
        ["Conversation 3", "Stephanie"],
        ["Conversation 4", "Roger"],
      ]),
    ],
  },
  {
    title: "Harflardan so'z",
    skill: "Yozish",
    kind: "type",
    instructions: "So'z harflab berilgan. Uni to'liq yozing (ism va joy nomlari bosh harf bilan).",
    questions: written([
      ["B-I-double L (ism)", "Bill"],
      ["R-O-G-E-R (ism)", "Roger"],
      ["Y-I-L-M-A-Z (familiya)", "Yilmaz"],
      ["S-A-N-T-O-S (familiya)", "Santos"],
      ["L-Y-N-D-A (ism)", "Lynda"],
      ["F-R-E-N-C-H (familiya)", "French"],
      ["T-A-S-H-K-E-N-T (shahar)", "Tashkent"],
      ["H-O-T-E-L", "hotel"],
      ["A-double D-R-E-double S", "address"],
      ["S-T-R-E-E-T", "street", "street — qo'sh E: S-T-R-E-E-T."],
    ]),
  },
  {
    title: "What, where yoki how?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Savol so'zini tanlang: What — nima (ism, raqam), Where — qayerda/qayerdan (joy), How — qanday.",
    questions: [
      say("___'s your name?", ["What", "Where", "How", "Who are"]),
      say("___ do you spell that?", ["How", "What", "Where", "Who"]),
      say("___ are you from?", ["Where", "What", "How", "Who"]),
      say("___ in Spain? — Barcelona.", ["Where", "What", "How", "When"]),
      say("___'s your phone number?", ["What", "Where", "How", "Who"]),
      say("___ are you? — Fine, thanks.", ["How", "What", "Where", "Who"]),
      say("___'s your address?", ["What", "Where", "How", "Who"]),
      say("___'s breakfast? — In the restaurant.", ["Where", "What", "How", "Who"]),
      say("___'s your last name? — Aguilar.", ["What", "How", "Where", "Who"]),
      say("___ is check-in? — Over there.", ["Where", "What", "How", "Who"]),
    ],
  },
  {
    title: "Savolni tuzing",
    skill: "Juftlik",
    kind: "match",
    instructions: "Savolning boshini oxiri bilan ulang.",
    questions: pairs([
      ["What's|your name?", "Where are|you from?", "Where in|Italy?", "How do|you spell that?"],
      ["What's your name?|Osvaldo Aguilar.", "How do you spell that?|A-G-U-I-L-A-R.", "Where are you from?|Spain.", "What's your phone number?|00 34 735 994 6810."],
      ["first name|ism", "last name|familiya", "address|manzil", "phone number|telefon raqami"],
      ["receptionist|resepshn xodimi", "guest|mehmon", "room key|xona kaliti", "breakfast|nonushta"],
      ["0|oh", "88|double eight", "ll|double L", "A|capital A"],
    ]),
  },
  {
    title: "GHQ konferensiyasi",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Jane konferensiyaga kelgan ikki kishini ro'yxatga oladi. Tinglang va savollarga javob bering. Ba'zi savollarda IKKITA to'g'ri javob bor.",
    questions: [
      hearing(track("1.25"))("What is Havva's last name?", ["Yilmaz", "Santos", "Yildiz", "Havva"]),
      hearing(track("1.25"))("Where is Havva from?", ["Turkey", "Brazil", "Spain", "Russia"]),
      hearing(track("1.25"))("How does Havva's phone number start?", ["00 90", "00 55", "00 34", "00 44"], "Turkiya kodi — 90."),
      hearing(track("1.25"))("What is Josue's last name?", ["Santos", "Yilmaz", "Sanders", "Josue"]),
      hearing(track("1.25"))("Where is Josue from?", ["Brazil", "Turkey", "Spain", "the USA"]),
      hearingTwo(track("1.25"))("Which TWO questions does Jane ask both people?", ["How do you spell that?", "What's your phone number?"], ["How are you?", "Are you on holiday?"]),
      hearing(track("1.25"))("Why are Havva and Josue here?", ["For the GHQ conference", "On holiday", "To study", "To see Jane"]),
    ],
  },
  {
    title: "Ro'yxatga olish",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Birinchi suhbatni yana tinglang va gaplarni to'ldiring.",
    questions: [
      gaps(track("1.26"), [
        ["Jane: «Hello. Are you here for the GHQ ___?»", "conference", "hotel", "holiday"],
        ["Havva: «Yes, I ___.»", "am", "'m", "are"],
        ["Jane: «What's your ___?»", "name", "number", "country"],
        ["Jane: «How do you ___ that?»", "spell", "say", "write"],
        ["Jane: «Where are you ___, Havva?»", "from", "in", "to"],
        ["Jane: «And what's your phone ___?»", "number", "name", "address"],
        ["Jane: «Thanks. Have a good ___.»", "day", "night", "time"],
      ]),
    ],
  },
  {
    title: "Ro'yxatdan o'tish varaqasi",
    skill: "O'qish",
    kind: "reading",
    instructions: "Dilshod haqidagi ma'lumotni va mehmonxona varaqasini o'qing. Savollarga javob bering.",
    questions: [
      read("What is Dilshod's last name?", ["Rahimov", "Dilshod", "Navoi", "Tashkent"]),
      read("What country is he from?", ["Uzbekistan", "the UK", "Turkey", "The text doesn't say."]),
      read("Where is he now?", ["In London", "In Tashkent", "In Navoi", "At home"]),
      read("What is the reason for his visit?", ["Business", "Holiday", "Study", "Family"]),
      read("Why is he in London?", ["He's at a conference.", "He's on holiday.", "He's a student.", "He's a receptionist."]),
      read("How many nights is he at the hotel?", ["Three", "Two", "Fifteen", "Ten"]),
      read("What's his home address?", ["15 Navoi Street, Tashkent", "15 London Road", "Navoi, Uzbekistan", "The text doesn't say."]),
      read("What is «D. Rahimov» on the card?", ["His signature", "His first name", "His address", "His phone number"]),
      read("Which country code is in his phone number?", ["998", "90", "44", "15"]),
      read("Which line of the card has a number?", ["Number of nights", "First name", "Country", "Reason for visit"]),
    ],
  },
  {
    title: "Bosh harflarni toping",
    skill: "Yozish",
    kind: "mistake",
    instructions:
      "Bosh harf bilan yoziladi: ism, shahar, mamlakat, I (men), gapning birinchi so'zi, ko'cha nomi. Har bir gapda bosh harf bilan yozilishi kerak bo'lgan bitta so'zni bosing.",
    questions: [
      mistake("My name is *kabelo.", "Ism — Kabelo."),
      mistake("I'm from *johannesburg.", "Shahar — Johannesburg."),
      mistake("Johannesburg is in South *africa.", "Mamlakat — South Africa."),
      mistake("Danisa and *i are on holiday.", "I (men) — doim bosh harf bilan."),
      mistake("*we are in a hotel in London.", "Gapning birinchi so'zi — We."),
      mistake("We are on holiday in *england.", "Mamlakat — England."),
      mistake("My address is 8 Park *road.", "Ko'cha nomi — Park Road."),
      mistake("Josie is from Austin in *texas.", "Shtat nomi — Texas."),
      mistake("*her name is Havva.", "Gapning birinchi so'zi — Her."),
      mistake("I live on Navoi *street.", "Ko'cha nomi — Navoi Street."),
    ],
  },
  {
    title: "Mehmonxonada: kim aytadi?",
    skill: "Vaziyat",
    kind: "choice",
    instructions: "Bu gapni kim aytadi: mehmonxona resepshn xodimimi yoki mehmonmi?",
    questions: [
      say("Excuse me, is check-in here?", [GUEST, RECEPTIONIST]),
      say("Are you here on business?", [RECEPTIONIST, GUEST]),
      say("I'm here on holiday.", [GUEST, RECEPTIONIST]),
      say("What's your address?", [RECEPTIONIST, GUEST]),
      say("Here's my credit card.", [GUEST, RECEPTIONIST]),
      say("Where's breakfast?", [GUEST, RECEPTIONIST]),
      say("Here's your room key.", [RECEPTIONIST, GUEST]),
      say("The restaurant is over there.", [RECEPTIONIST, GUEST]),
      say("How do you spell that?", [RECEPTIONIST, GUEST]),
      say("Sign here, please.", [RECEPTIONIST, GUEST]),
    ],
  },
  {
    title: "Ism, familiya, shahar",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Tinglang va eshitgan ism yoki joy nomini tanlang. Harflarga diqqat qiling!",
    questions: [
      gaps(track("1.31"), [
        ["1. My name's ___.", "Lynda", "Linda", "Lindy"],
        ["2. My last name is ___.", "French", "Frank", "Franch"],
        ["3. We are from ___ in Russia.", "Yaroslavl", "Moscow", "St Petersburg"],
      ]),
    ],
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: written([
      ["What's your ___? — My name's Roger.", "name"],
      ["How do you ___ that? — R-O-G-E-R.", "spell"],
      ["R-O-G-E-R? — Yes, that's ___.", "right"],
      ["___ are you from? — I'm from Turkey.", "Where"],
      ["What's your phone ___?", "number"],
      ["Are you here for the ___? — Yes, I am.", "conference"],
      ["Here's your room ___.", "key"],
      ["Breakfast is in the ___.", "restaurant"],
      ["___ here, please.", "Sign"],
      ["___ to the hotel!", "Welcome"],
    ]),
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, savol yoki gap tuzing.",
    questions: sentences([
      "What's your name?",
      "How do you spell that?",
      "Where are you from?",
      "What's your phone number?",
      "Yes, that's right.",
      "Are you here for the conference?",
      "Here's my credit card.",
      "Where's breakfast?",
      "The restaurant is over there.",
      "Have a good day.",
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "What's your name?",
      "My name's Roger.",
      "How do you spell that?",
      "Yes, that's right.",
      "Where are you from?",
      "What's your phone number?",
      "Here's your room key.",
      "Sign here, please.",
      "Welcome to the hotel!",
      "Have a good day.",
    ]),
  },
];
