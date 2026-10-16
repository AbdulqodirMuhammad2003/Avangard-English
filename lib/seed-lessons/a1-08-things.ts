/**
 * A1, 8-dars — «Narsalarim». Zid ma'noli sifatlar (cheap — expensive, hot
 * — cold…), gadjetlar va texnika. Grammatika: have got — inkor (haven't
 * got, hasn't got), so'roq (Have you got…? Has she got…?) va qisqa javoblar
 * (Yes, I have. / No, she hasn't.). Matn va mashqlar o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  hearing,
  listen,
  mistake,
  pairs,
  phrases,
  pick,
  reading,
  say,
  sentences,
  stress,
  w,
  written,
  type Rounds,
} from "./helpers";

export const A1_08_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🪙", "cheap", "tʃiːp|chiip", "sifat", "Arzon", "It doesn't cost a lot of money.", "This phone is cheap.", "Bu telefon arzon."),
      w("💎", "expensive", "ɪkˈspensɪv|ikspensiv", "sifat", "Qimmat", "It costs a lot of money.", "Is that laptop expensive?", "U noutbuk qimmatmi?"),
      w("🚀", "fast", "fɑːst|faast", "sifat", "Tez", "Very quick.", "My new laptop is fast.", "Yangi noutbukim tez ishlaydi."),
      w("🐌", "slow", "sləʊ|slou", "sifat", "Sekin", "Not fast.", "The internet is very slow today.", "Bugun internet juda sekin."),
      w("📏", "long", "lɒŋ|long", "sifat", "Uzun", "Not short.", "It's a long story.", "Bu — uzun hikoya."),
      w("✂️", "short", "ʃɔːt|shoot", "sifat", "Qisqa; past bo'yli", "Not long.", "The film is short.", "Film qisqa."),
      w("🏋️", "heavy", "ˈhevi|hevi", "sifat", "Og'ir", "It weighs a lot.", "My bag is very heavy.", "Sumkam juda og'ir."),
      w("🪶", "light", "laɪt|layt", "sifat", "Yengil", "Not heavy.", "This laptop is very light.", "Bu noutbuk juda yengil."),
      w("😌", "easy", "ˈiːzi|iizi", "sifat", "Oson", "Not difficult.", "English is easy!", "Ingliz tili oson!"),
      w("🧗", "difficult", "ˈdɪfɪkəlt|difikalt", "sifat", "Qiyin", "Not easy.", "Is English difficult?", "Ingliz tili qiyinmi?"),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🔥", "hot", "hɒt|hot", "sifat", "Issiq", "Very warm.", "The tea is hot.", "Choy issiq."),
      w("❄️", "cold", "kəʊld|kould", "sifat", "Sovuq", "Not hot.", "Is the water cold?", "Suv sovuqmi?"),
      w("🧼", "clean", "kliːn|kliin", "sifat", "Toza", "Not dirty.", "My room is clean.", "Xonam toza."),
      w("🟫", "dirty", "ˈdɜːti|dyoti", "sifat", "Iflos", "Not clean.", "Your shoes are dirty.", "Oyoq kiyimingiz iflos."),
      w("🈵", "full", "fʊl|ful", "sifat", "To'la", "With no space inside.", "The bus is full.", "Avtobus to'la."),
      w("🫙", "empty", "ˈempti|empti", "sifat", "Bo'sh", "With nothing inside.", "The bottle is empty.", "Shisha bo'sh."),
      w("😃", "happy", "ˈhæpi|hepi", "sifat", "Xursand, baxtli", "Feeling good.", "I'm very happy today!", "Bugun juda xursandman!"),
      w("😢", "sad", "sæd|sed", "sifat", "Xafa, g'amgin", "Not happy.", "Why are you sad?", "Nega xafasan?"),
      w("🤑", "rich", "rɪtʃ|rich", "sifat", "Boy", "With a lot of money.", "He's got a lot of money. He's rich.", "Uning puli ko'p. U boy."),
      w("🪫", "poor", "pɔː|poo", "sifat", "Kambag'al", "With very little money.", "They are poor, but they are happy.", "Ular kambag'al, lekin baxtli."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("📲", "tablet", "ˈtæblət|teblat", "ot", "Planshet", "A small flat computer with a touch screen.", "Have you got a tablet?", "Planshetingiz bormi?"),
      w("🔌", "charger", "ˈtʃɑːdʒə|chaaja", "ot", "Quvvatlagich", "You use it to put power in your phone.", "I haven't got my charger.", "Quvvatlagichim yonimda yo'q."),
      w("🔋", "battery", "ˈbætri|betri", "ot", "Batareya", "It gives power to a phone or a laptop.", "The battery is low.", "Batareya kam qoldi."),
      w("⌨️", "keyboard", "ˈkiːbɔːd|kiibood", "ot", "Klaviatura", "You type on it.", "This keyboard is new.", "Bu klaviatura yangi."),
      w("🖥️", "screen", "skriːn|skriin", "ot", "Ekran", "The flat part of a TV or phone with the picture.", "The screen is very big.", "Ekran juda katta."),
      w("🖨️", "printer", "ˈprɪntə|printa", "ot", "Printer", "It puts words and pictures on paper.", "Has the office got a printer?", "Ofisda printer bormi?"),
      w("📳", "app", "æp|ep", "ot", "Ilova (dastur)", "A program on your phone.", "Have you got this app?", "Sizda bu ilova bormi?"),
      w("🌐", "internet", "ˈɪntənet|intanet", "ot", "Internet", "It connects computers all over the world.", "Has your hotel got internet?", "Mehmonxonangizda internet bormi?"),
      w("🤳", "photo", "ˈfəʊtəʊ|foutou", "ot", "Rasm, surat (foto)", "A picture from a camera or phone.", "Look at this photo!", "Bu rasmga qarang!"),
      w("🎮", "game", "ɡeɪm|geym", "ot", "O'yin", "You play it for fun.", "Has he got this game?", "Unda bu o'yin bormi?"),
    ],
  },
];

const HAVE_HAS_Q = ["Have", "Has"];

const SHOP = `TECHNO MARKET — SALE!
• Smartphone X5: big screen, fast, but not cheap — 4 000 000 som.
• Tablet Mini: small and light. It hasn't got a camera. Very cheap — 1 200 000 som!
• Laptop Pro: very fast and light, but expensive — 9 500 000 som.
• Old printer: slow and heavy, but it's free with every laptop!
Have you got questions? Our shop assistants are friendly. Open from 9:00 to 21:00.`;
const read = reading(SHOP);

const CALL = `Hi, Dad! I'm at the airport.
Hi, Sardor! Have you got your passport?
Yes, I have. It's in my bag.
Have you got your ticket?
Yes, I've got my ticket on my phone.
And your charger? Your battery is always empty!
Oh no! I haven't got my charger! It's at home, next to the TV.
No problem. Your sister has got a charger. Ask her.
Good idea. Thanks, Dad!`;
const hear = hearing(CALL);

export const A1_08_EXERCISES: SeedExercise[] = [
  {
    title: "Zid ma'noni toping",
    skill: "Tinglash",
    kind: "listen",
    instructions: "Sifat o'qiladi. Eshitganingizni toping.",
    questions: [
      listen("cheap", ["cheap", "chip", "sheep", "shop"]),
      listen("expensive", ["expensive", "excellent", "exercise", "easy"]),
      listen("heavy", ["heavy", "happy", "hungry", "every"]),
      listen("light", ["light", "late", "right", "night"]),
      listen("difficult", ["difficult", "different", "dirty", "delicious"]),
      listen("empty", ["empty", "twenty", "eighty", "happy"]),
      listen("full", ["full", "fool", "fall", "fill"]),
      listen("cold", ["cold", "old", "gold", "called"]),
      listen("poor", ["poor", "four", "door", "pour"]),
      listen("sad", ["sad", "said", "sat", "side"]),
    ],
  },
  {
    title: "Rasmga mos sifat",
    skill: "Rasm",
    kind: "picture",
    instructions: "Rasmga qarang va mos sifatni toping.",
    questions: [
      pick("🔥", ["hot", "cold", "full", "light"], 0),
      pick("❄️", ["hot", "cold", "clean", "sad"], 1),
      pick("🐌", ["fast", "light", "slow", "rich"], 2),
      pick("🚀", ["slow", "heavy", "empty", "fast"], 3),
      pick("😃", ["happy", "sad", "poor", "dirty"], 0),
      pick("😢", ["happy", "sad", "easy", "long"], 1),
      pick("🤑", ["poor", "cheap", "rich", "short"], 2),
      pick("🏋️", ["light", "empty", "easy", "heavy"], 3),
      pick("💎", ["expensive", "cheap", "clean", "full"], 0),
      pick("🧼", ["dirty", "clean", "cold", "slow"], 1),
    ],
  },
  {
    title: "Zid ma'noli juftlar",
    skill: "Juftlik",
    kind: "match",
    instructions: "Har bir sifatni zid ma'noli sifat bilan ulang.",
    questions: pairs([
      ["cheap|expensive", "fast|slow", "long|short", "heavy|light"],
      ["easy|difficult", "hot|cold", "clean|dirty", "full|empty"],
      ["happy|sad", "rich|poor", "big|small", "new|old"],
      ["quiet|noisy", "young|old", "cheap|expensive", "hot|cold"],
      ["tablet|planshet", "charger|quvvatlagich", "battery|batareya", "screen|ekran"],
      ["keyboard|klaviatura", "printer|printer", "app|ilova", "game|o'yin"],
      ["have not got|haven't got", "has not got|hasn't got", "I have got|I've got", "she has got|she's got"],
    ]),
  },
  {
    title: "Have yoki Has?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "So'roqda Have / Has gapning boshiga chiqadi: Have you got…? Has she got…?",
    questions: [
      pick("___ you got a tablet?", HAVE_HAS_Q, 0),
      pick("___ she got a laptop?", HAVE_HAS_Q, 1),
      pick("___ they got a car?", HAVE_HAS_Q, 0),
      pick("___ your brother got a printer?", HAVE_HAS_Q, 1),
      pick("___ the hotel got internet?", HAVE_HAS_Q, 1, "the hotel = it → Has."),
      pick("___ we got time?", HAVE_HAS_Q, 0),
      pick("___ Aziz got a charger?", HAVE_HAS_Q, 1),
      pick("___ your parents got a garden?", HAVE_HAS_Q, 0),
      pick("___ I got a lesson today?", HAVE_HAS_Q, 0),
      pick("___ the flat got a balcony?", HAVE_HAS_Q, 1),
    ],
  },
  {
    title: "Qisqa javob yozing",
    skill: "Grammatika",
    kind: "type",
    instructions: "Belgiga qarab qisqa javob yozing: ✓ — ha, ✗ — yo'q. Masalan: Have you got a pen? (✓) → Yes, I have.",
    questions: written([
      ["Have you got a tablet? (✓)", "Yes, I have."],
      ["Have you got a car? (✗)", "No, I haven't."],
      ["Has she got a laptop? (✓)", "Yes, she has."],
      ["Has he got a bike? (✗)", "No, he hasn't."],
      ["Have they got children? (✓)", "Yes, they have."],
      ["Have they got a pet? (✗)", "No, they haven't."],
      ["Has the hotel got internet? (✓)", "Yes, it has."],
      ["Has your brother got a motorbike? (✗)", "No, he hasn't.", "your brother → he."],
      ["Has your mother got a phone? (✓)", "Yes, she has."],
      ["Have you got your charger? (✗)", "No, I haven't."],
    ]),
  },
  {
    title: "Inkor gap",
    skill: "Grammatika",
    kind: "type",
    instructions: "Gapni inkor shaklga o'giring: have got → haven't got, has got → hasn't got.",
    questions: written([
      ["I've got a car.", "I haven't got a car."],
      ["She's got a tablet.", "She hasn't got a tablet."],
      ["We've got a garden.", "We haven't got a garden."],
      ["He's got a printer.", "He hasn't got a printer."],
      ["They've got a TV.", "They haven't got a TV."],
      ["The flat has got a balcony.", "The flat hasn't got a balcony."],
      ["You've got my charger.", "You haven't got my charger."],
      ["My phone has got a big screen.", "My phone hasn't got a big screen."],
      ["I've got time.", "I haven't got time."],
      ["Aziz has got a pet.", "Aziz hasn't got a pet."],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("*Have she got a tablet?", "She bilan — Has she got…?"),
      mistake("Has he got a car? — Yes, he *have.", "Yes, he has."),
      mistake("I *hasn't got a printer.", "I bilan — haven't got."),
      mistake("She *haven't got a bike.", "She bilan — hasn't got."),
      mistake("Have you got a pen? — Yes, *I've.", "Qisqa javobda qisqartirilmaydi: Yes, I have."),
      mistake("Have you *get a charger?", "have got — got: Have you got a charger?"),
      mistake("The tea is *cold. Be careful, it's very hot!", "Ehtiyot bo'ling, issiq — hot: The tea is hot."),
      mistake("This laptop is very *cheap. It's 9 000 000 som!", "Qimmat — expensive."),
      mistake("My bag is *light. I can't carry it!", "Ko'tara olmayapman — heavy (og'ir)."),
      mistake("Has the hotel got internet? — No, it *haven't.", "it → hasn't: No, it hasn't."),
    ],
  },
  {
    title: "Suhbatni davom ettiring",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("Have you got a charger?", ["Yes, I have. Here you are.", "Yes, I've.", "Yes, I has.", "Yes, I got."]),
      say("Has your brother got a car?", ["No, he hasn't. He's got a bike.", "No, he haven't.", "No, she hasn't.", "No, he not."]),
      say("Have they got children?", ["Yes, they have. They've got two.", "Yes, they has.", "Yes, they've.", "Yes, it has."]),
      say("Is your laptop expensive?", ["No, it isn't. It's cheap.", "No, it hasn't.", "No, it's expensive.", "No, I haven't."]),
      say("Has the hotel got internet?", ["Yes, it has. It's free.", "Yes, it's.", "Yes, he has.", "Yes, they have."]),
      say("Is English difficult?", ["No, it's easy!", "No, it hasn't.", "Yes, I have.", "No, it difficult."]),
      say("Why are you sad?", ["I haven't got my phone!", "I'm happy.", "Yes, I am.", "Because sad."]),
      say("Is the bottle full?", ["No, it's empty.", "No, it's full.", "No, it hasn't.", "Yes, it empty."]),
      say("Have you got a pet?", ["No, I haven't. But I want a dog!", "No, I haven't got.", "No, I hasn't.", "No, I'm not."]),
      say("Have we got time?", ["Yes, we have. The film is at eight.", "Yes, we've.", "Yes, it has.", "Yes, we are."]),
    ],
  },
  {
    title: "Urg'u qayerda?",
    skill: "Talaffuz",
    kind: "stress",
    instructions: "So'zni eshiting va urg'uli bo'g'inni bosing.",
    questions: stress([
      ["ex|pen|sive", 1, "ex-PEN-sive"],
      ["dif|fi|cult", 0, "DIF-fi-cult"],
      ["hea|vy", 0],
      ["emp|ty", 0],
      ["hap|py", 0],
      ["dir|ty", 0],
      ["bat|te|ry", 0, "BAT-te-ry"],
      ["in|ter|net", 0, "IN-ter-net"],
      ["key|board", 0],
      ["ta|blet", 0],
    ]),
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "Have you got a tablet?",
      "Yes, I have.",
      "She hasn't got a laptop.",
      "Has your hotel got internet?",
      "No, it hasn't.",
      "I haven't got my charger.",
      "This phone is cheap.",
      "My bag is very heavy.",
      "Is English difficult?",
      "They are poor, but they are happy.",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: written([
      ["___ you got a car?", "Have"],
      ["___ she got a phone?", "Has"],
      ["— Have you got a pen? — Yes, I ___.", "have"],
      ["— Has he got a bike? — No, he ___.", "hasn't"],
      ["I ___ got time. Sorry!", "haven't"],
      ["This laptop isn't cheap. It's ___.", "expensive"],
      ["The tea isn't cold. It's ___.", "hot"],
      ["The bottle isn't full. It's ___.", "empty"],
      ["English isn't difficult. It's ___!", "easy"],
      ["My phone battery is low. Where is my ___?", "charger"],
    ]),
  },
  {
    title: "Texnika do'koni",
    skill: "Matn bilan ishlash",
    kind: "reading",
    instructions: "Do'kon e'lonini diqqat bilan o'qing va har bir savolga javob bering.",
    questions: [
      read("Which phone has got a big screen?", ["Smartphone X5", "Tablet Mini", "Laptop Pro", "Old printer"]),
      read("Is Smartphone X5 cheap?", ["No, it isn't.", "Yes, it is.", "Yes, very cheap.", "The text doesn't say."]),
      read("Has Tablet Mini got a camera?", ["No, it hasn't.", "Yes, it has.", "Yes, two cameras.", "The text doesn't say."]),
      read("Which is the cheapest?", ["Tablet Mini", "Smartphone X5", "Laptop Pro", "They're the same."], "1 200 000 som — eng arzon (old printer bepul, lekin u alohida sotilmaydi)."),
      read("What is the laptop like?", ["Fast and light, but expensive.", "Slow and heavy.", "Cheap and light.", "Old and slow."]),
      read("What is the old printer like?", ["Slow and heavy.", "Fast and light.", "New and cheap.", "Expensive and fast."]),
      read("How much is the printer with a laptop?", ["It's free.", "9 500 000 som.", "1 200 000 som.", "4 000 000 som."]),
      read("How much is Laptop Pro?", ["9 500 000 som", "4 000 000 som", "1 200 000 som", "It's free."]),
      read("What are the shop assistants like?", ["Friendly.", "Noisy.", "Young.", "The text doesn't say."]),
      read("When is the shop open?", ["From 9:00 to 21:00.", "From 8:00 to 20:00.", "All day and night.", "The text doesn't say."]),
    ],
  },
  {
    title: "Aeroportda",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Telefondagi suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Sardor qayerda?", ["Aeroportda", "Uyda", "Mehmonxonada", "Do'konda"]),
      hear("Sardor kim bilan gaplashyapti?", ["Otasi bilan", "Onasi bilan", "Singlisi bilan", "Do'sti bilan"]),
      hear("Pasport qayerda?", ["Sumkasida", "Uyda", "Telefonida", "Singlisida"]),
      hear("Chipta qayerda?", ["Telefonida", "Sumkasida", "Uyda", "Pasportida"]),
      hear("Sardorda nima yo'q?", ["Quvvatlagich", "Pasport", "Chipta", "Telefon"]),
      hear("Quvvatlagich qayerda?", ["Uyda, televizor yonida", "Sumkasida", "Aeroportda", "Singlisida"]),
      hear("Kimda quvvatlagich bor?", ["Singlisida", "Otasida", "Do'stida", "Hech kimda"]),
      hear("Otasi Sardorning batareyasi haqida nima deydi?", ["U doim bo'sh", "U yangi", "U juda yaxshi", "U qimmat"]),
      hear("«Have you got your passport?» savoliga javob?", ["Yes, I have.", "No, I haven't.", "Yes, I've got.", "Yes, it has."]),
      hear("Suhbat qanday tugaydi?", ["Good idea. Thanks, Dad!", "Goodbye, Dad!", "See you tomorrow!", "No problem."]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "Have you got a charger?",
      "Yes, I have.",
      "No, I haven't.",
      "Has she got a tablet?",
      "No, she hasn't.",
      "This laptop is expensive.",
      "English is easy!",
      "My bag is very heavy.",
      "The bottle is empty.",
      "I'm very happy today!",
    ]),
  },
];
