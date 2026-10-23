/**
 * A1, 16-dars — «Shahrim». Shahar joylari. Grammatika: there is / there
 * are (darak va inkor: there isn't, there aren't any), some / any / a lot
 * of, joyni tasvirlash (opposite, on the corner). Matn va mashqlar
 * o'zimizniki.
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
  w,
  written,
  type Rounds,
} from "./helpers";

export const A1_16_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🏦", "bank", "bæŋk|benk", "ot", "Bank", "You keep your money there.", "The bank is open from nine to five.", "Bank soat to'qqizdan beshgacha ishlaydi."),
      w("🏛️", "museum", "mjuˈziːəm|myuziiam", "ot", "Muzey", "You see old and famous things there.", "The museum is closed on Monday.", "Muzey dushanba kuni yopiq."),
      w("🌳", "park", "pɑːk|paak", "ot", "Park, bog'", "A green place with trees in a city.", "Let's go to the park!", "Keling, parkka boramiz!"),
      w("🛒", "supermarket", "ˈsuːpəmɑːkɪt|suupamaakit", "ot", "Supermarket", "A big shop for food and other things.", "I buy food at the supermarket.", "Oziq-ovqatni supermarketdan olaman."),
      w("🎦", "cinema", "ˈsɪnəmə|sinama", "ot", "Kinoteatr", "You watch films there.", "There's a new film at the cinema.", "Kinoteatrda yangi film bor."),
      w("💊", "pharmacy", "ˈfɑːməsi|faamasi", "ot", "Dorixona", "You buy medicine there.", "Is the pharmacy open now?", "Dorixona hozir ochiqmi?"),
      w("📚", "library", "ˈlaɪbrəri|laybrari", "ot", "Kutubxona", "You read or take books there.", "I study in the library.", "Kutubxonada o'qiyman."),
      w("📮", "post office", "ˈpəʊst ˌɒfɪs|poust ofis", "ot", "Pochta bo'limi", "You send letters and parcels there.", "The post office is next to the bank.", "Pochta bank yonida."),
      w("☕", "cafe", "ˈkæfeɪ|kefey", "ot", "Kafe", "A small place for coffee, tea and food.", "Let's meet at the cafe.", "Kafeda uchrashamiz."),
      w("🎭", "theatre", "ˈθɪətə|siiata", "ot", "Teatr", "You watch plays and concerts there.", "The Navoi Theatre is beautiful.", "Navoiy teatri go'zal."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🏬", "shopping centre", "ˈʃɒpɪŋ ˌsentə|shoping senta", "ot", "Savdo markazi", "A big building with a lot of shops.", "The shopping centre is very big.", "Savdo markazi juda katta."),
      w("🏋️", "gym", "dʒɪm|jim", "ot", "Sport zali", "A place for sport and exercise.", "I go to the gym three times a week.", "Haftada uch marta sport zaliga boraman."),
      w("🏊", "swimming pool", "ˈswɪmɪŋ puːl|suiming puul", "ot", "Suzish havzasi, basseyn", "A place with water for swimming.", "Our hotel has a swimming pool.", "Mehmonxonamizda basseyn bor."),
      w("⛽", "petrol station", "ˈpetrəl ˌsteɪʃn|petrol steyshn", "ot", "Yoqilg'i quyish shoxobchasi", "You buy petrol for your car there.", "The petrol station is on the corner.", "Yoqilg'i shoxobchasi burchakda."),
      w("🅿️", "car park", "ˈkɑː pɑːk|kaa paak", "ot", "Avtoturargoh", "A place to leave your car.", "The car park is behind the supermarket.", "Avtoturargoh supermarket orqasida."),
      w("🥐", "bakery", "ˈbeɪkəri|beykari", "ot", "Novvoyxona", "A shop that makes and sells bread.", "This bakery sells fresh bread.", "Bu novvoyxona yangi non sotadi."),
      w("🏟️", "stadium", "ˈsteɪdiəm|steydiam", "ot", "Stadion", "A big place for football matches.", "The stadium is full today.", "Bugun stadion to'la."),
      w("⬜", "square", "skweə|skuea", "ot", "Maydon", "An open place in the centre of a city.", "Amir Temur Square is in the centre.", "Amir Temur maydoni markazda."),
      w("🚓", "police station", "pəˈliːs ˌsteɪʃn|paliis steyshn", "ot", "Politsiya bo'limi", "The building where police officers work.", "Where is the police station?", "Politsiya bo'limi qayerda?"),
      w("⛲", "fountain", "ˈfaʊntən|fauntan", "ot", "Favvora", "Water that goes up into the air in a park or square.", "Children play near the fountain.", "Bolalar favvora yonida o'ynashadi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("☝️", "there is", "ˈðeər ɪz|zear iz", "ibora", "…bor (bitta)", "We use it to say that one thing exists.", "There is a park near my house.", "Uyim yaqinida park bor."),
      w("✌️", "there are", "ˈðeər ɑː|zear aa", "ibora", "…bor (ko'p)", "We use it to say that many things exist.", "There are two cinemas in our town.", "Shahrimizda ikkita kinoteatr bor."),
      w("🔹", "some", "sʌm|sam", "aniqlovchi", "Bir nechta, biroz", "A few (in positive sentences).", "There are some cafes in the square.", "Maydonda bir nechta kafe bor."),
      w("❔", "any", "ˈeni|eni", "aniqlovchi", "Hech qanday; biror", "We use it in negatives and questions.", "There aren't any banks here.", "Bu yerda birorta ham bank yo'q."),
      w("🔢", "a lot of", "ə ˈlɒt əv|a lot ov", "ibora", "Ko'p", "Many or much.", "There are a lot of people in the square.", "Maydonda odam ko'p."),
      w("↔️", "opposite", "ˈɒpəzɪt|opazit", "predlog", "Qarshisida", "On the other side of the street.", "The bank is opposite the hotel.", "Bank mehmonxonaning qarshisida."),
      w("📐", "corner", "ˈkɔːnə|koona", "ot", "Burchak, muyulish", "Where two streets meet.", "The cafe is on the corner.", "Kafe muyulishda."),
      w("🏘️", "town", "taʊn|taun", "ot", "Shaharcha, shahar", "A place with houses and shops, smaller than a city.", "I live in a small town.", "Men kichik shaharchada yashayman."),
      w("🚶‍♂️", "busy", "ˈbɪzi|bizi", "sifat", "Gavjum; band", "With a lot of people or cars.", "The market is very busy on Sunday.", "Yakshanba kuni bozor juda gavjum."),
      w("💖", "favourite", "ˈfeɪvərɪt|feyvarit", "sifat", "Sevimli", "The one you like best.", "My favourite place is the park.", "Sevimli joyim — park."),
    ],
  },
];

const IS_ARE = ["There is", "There are"];
const SOME_ANY = ["some", "any"];

const TOWN = `MY TOWN — by Bekzod, 16
I live in Chirchiq. It's a small town near Tashkent. There isn't a big airport or a famous museum here, but there are a lot of nice places. In the centre there is a square with a big fountain. Opposite the square there is a shopping centre with a cinema. There are some cafes on the corner of my street, and there's a bakery next to my school — the bread is amazing! There are two parks and a stadium. My favourite place is the gym: I go there every day after school. The only problem? There aren't any good bookshops.`;
const read = reading(TOWN);

const ASK = `Excuse me, I'm new here. Is there a pharmacy near here?
Yes, there is. It's on Navoi Street, opposite the bank.
Thank you. And are there any supermarkets?
There's a small one next to the pharmacy, and there's a big supermarket in the shopping centre.
Great. Is there a post office too?
Hmm, no, there isn't a post office in this area. It's in the centre, near the square.
OK. And where can I park my car?
There's a car park behind the shopping centre.
Thank you very much!
You're welcome.`;
const hear = hearing(ASK);

export const A1_16_EXERCISES: SeedExercise[] = [
  {
    title: "Shahar joylari",
    skill: "Tinglash",
    kind: "listen",
    instructions: "So'z o'qiladi. Eshitganingizni toping.",
    questions: [
      listen("museum", ["museum", "music", "mushroom", "moment"]),
      listen("library", ["library", "lorry", "laboratory", "liberty"]),
      listen("pharmacy", ["pharmacy", "farmer", "family", "factory"]),
      listen("theatre", ["theatre", "teacher", "together", "three"]),
      listen("bakery", ["bakery", "battery", "baker", "bakeries"]),
      listen("stadium", ["stadium", "station", "studio", "standard"]),
      listen("square", ["square", "squirrel", "scare", "share"]),
      listen("opposite", ["opposite", "position", "possible", "upstairs"]),
      listen("there are", ["there are", "there is", "they are", "where are"]),
      listen("fountain", ["fountain", "mountain", "fourteen", "fountains"]),
    ],
  },
  {
    title: "Bu qayer?",
    skill: "Rasm",
    kind: "picture",
    instructions: "Rasmga qarang va mos joyni toping.",
    questions: [
      pick("🏦", ["bank", "museum", "library", "cafe"], 0),
      pick("💊", ["bakery", "pharmacy", "gym", "cinema"], 1),
      pick("📚", ["museum", "theatre", "library", "post office"], 2),
      pick("📮", ["bank", "cafe", "library", "post office"], 3),
      pick("🏊", ["swimming pool", "gym", "park", "stadium"], 0),
      pick("⛽", ["car park", "petrol station", "police station", "square"], 1),
      pick("🅿️", ["park", "petrol station", "car park", "square"], 2),
      pick("🏟️", ["theatre", "cinema", "museum", "stadium"], 3),
      pick("⛲", ["fountain", "swimming pool", "square", "park"], 0),
      pick("🥐", ["cafe", "bakery", "supermarket", "pharmacy"], 1),
    ],
  },
  {
    title: "There is yoki There are?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Bitta narsa — There is (There's); ko'p narsa — There are.",
    questions: [
      pick("___ a park near my house.", IS_ARE, 0),
      pick("___ two cinemas in our town.", IS_ARE, 1),
      pick("___ a lot of people in the square.", IS_ARE, 1),
      pick("___ a bakery next to my school.", IS_ARE, 0),
      pick("___ some cafes on the corner.", IS_ARE, 1),
      pick("___ an old mosque in the centre.", IS_ARE, 0),
      pick("___ three banks on this street.", IS_ARE, 1),
      pick("___ a fountain in the park.", IS_ARE, 0),
      pick("___ a lot of cars in the car park.", IS_ARE, 1),
      pick("___ a pharmacy opposite the bank.", IS_ARE, 0),
    ],
  },
  {
    title: "some yoki any?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Darak gapda — some; inkor va so'roqda — any.",
    questions: [
      pick("There are ___ cafes in the square.", SOME_ANY, 0),
      pick("There aren't ___ banks near here.", SOME_ANY, 1),
      pick("Are there ___ supermarkets in your area?", SOME_ANY, 1),
      pick("There are ___ nice shops on my street.", SOME_ANY, 0),
      pick("We haven't got ___ bread.", SOME_ANY, 1),
      pick("I've got ___ friends in Chirchiq.", SOME_ANY, 0),
      pick("Are there ___ good restaurants here?", SOME_ANY, 1),
      pick("There aren't ___ cinemas in my village.", SOME_ANY, 1),
      pick("There are ___ children in the park.", SOME_ANY, 0),
      pick("Have you got ___ money?", SOME_ANY, 1),
    ],
  },
  {
    title: "Gap tuzing: there is / there are",
    skill: "Grammatika",
    kind: "type",
    instructions:
      "Belgiga qarab gap yozing: ✓ — There is a… / There are some…; ✗ — There isn't a… / There aren't any…",
    questions: written([
      ["a park (✓)", "There is a park.|There's a park."],
      ["two cafes (✓)", "There are two cafes."],
      ["a cinema (✗)", "There isn't a cinema.|There is not a cinema."],
      ["banks (✗)", "There aren't any banks.|There are not any banks."],
      ["a lot of people (✓)", "There are a lot of people."],
      ["a museum (✗)", "There isn't a museum.|There is not a museum."],
      ["some shops (✓)", "There are some shops."],
      ["a gym (✓)", "There is a gym.|There's a gym."],
      ["supermarkets (✗)", "There aren't any supermarkets.|There are not any supermarkets."],
      ["a fountain (✓)", "There is a fountain.|There's a fountain."],
    ]),
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Joyni u yerda qilinadigan ish bilan ulang.",
    questions: pairs([
      ["bank|money", "library|books", "pharmacy|medicine", "bakery|bread"],
      ["cinema|films", "gym|sport", "post office|letters", "petrol station|petrol"],
      ["museum|muzey", "theatre|teatr", "square|maydon", "fountain|favvora"],
      ["car park|avtoturargoh", "shopping centre|savdo markazi", "swimming pool|basseyn", "stadium|stadion"],
      ["there is|bitta bor", "there are|ko'p bor", "some|bir nechta", "any|hech qanday"],
      ["opposite|qarshisida", "corner|burchak", "busy|gavjum", "favourite|sevimli"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("There *is two cinemas in our town.", "Ko'plik — There are."),
      mistake("There *are a park near my house.", "Bitta — There is."),
      mistake("There aren't *some banks here.", "Inkorda — any."),
      mistake("In the square *it is a big fountain.", "…bor — there is: In the square there is a big fountain."),
      mistake("There are a lot *people in the square.", "a lot of people."),
      mistake("The bank is opposite *of the hotel.", "opposite dan keyin of kerak emas."),
      mistake("The cafe is *in the corner.", "Ko'cha muyulishida — on the corner."),
      mistake("Are there *a supermarkets near here?", "Ko'plikda a kerak emas: any supermarkets."),
      mistake("There *isn't any parks in my town.", "parks — ko'plik: There aren't any parks."),
      mistake("*Their is a gym next to my school.", "There is (bor). Their — «ularning»."),
    ],
  },
  {
    title: "Suhbatni davom ettiring",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("Tell me about your town.", ["It's small, but there are a lot of parks.", "It has small.", "There is a lot of park.", "My town is there."]),
      say("Is there a cinema in your town?", ["Yes, there is. It's in the shopping centre.", "Yes, it is.", "Yes, there are.", "Yes, there's cinema."]),
      say("Are there any good cafes here?", ["Yes, there are some on the corner.", "Yes, there is some.", "Yes, they are.", "No, there isn't any cafes."]),
      say("Excuse me, where's the pharmacy?", ["It's opposite the bank.", "There is pharmacy.", "Yes, there is.", "It's a pharmacy."]),
      say("What's your favourite place in your town?", ["The park. I go there every weekend.", "Yes, it's favourite.", "There is a park.", "My town is favourite."]),
      say("Is the market busy?", ["Yes, there are a lot of people.", "Yes, there is a lot of people.", "Yes, it's a lot.", "No, it's busy."]),
      say("Is there a post office near here?", ["No, there isn't. It's in the centre.", "No, there aren't.", "No, it isn't here post.", "No, there's not any."]),
      say("Where can I park my car?", ["There's a car park behind the supermarket.", "There are car park.", "In the park.", "Your car is park."]),
      say("Are there any museums in Chirchiq?", ["No, there aren't any.", "No, there isn't any.", "No, they aren't.", "No, there aren't some."]),
      say("Where do you buy bread?", ["At the bakery next to my house.", "At the pharmacy.", "At the library.", "At the petrol station."]),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "There is a park near my house.",
      "There are two cinemas in our town.",
      "There aren't any banks here.",
      "Is there a pharmacy near here?",
      "There are some cafes on the corner.",
      "The bank is opposite the hotel.",
      "There are a lot of people in the square.",
      "My favourite place is the park.",
      "The market is very busy on Sunday.",
      "I go to the gym every day.",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: written([
      ["There ___ a museum in the centre.", "is"],
      ["There ___ two parks in my town.", "are"],
      ["There aren't ___ banks near here.", "any"],
      ["There are ___ nice cafes on my street. (bir nechta)", "some"],
      ["There are a ___ of people in the square.", "lot"],
      ["The bank is ___ the hotel. (qarshisida)", "opposite"],
      ["The cafe is on the ___. (muyulishda)", "corner"],
      ["I buy medicine at the ___.", "pharmacy"],
      ["I read books in the ___.", "library"],
      ["I go swimming at the swimming ___.", "pool"],
    ]),
  },
  {
    title: "Mening shahrim",
    skill: "Matn bilan ishlash",
    kind: "reading",
    instructions: "Matnni diqqat bilan o'qing va har bir savolga javob bering.",
    questions: [
      read("Where does Bekzod live?", ["In Chirchiq", "In Tashkent", "In Samarkand", "The text doesn't say."]),
      read("Is there a big airport in Chirchiq?", ["No, there isn't.", "Yes, there is.", "Yes, two airports.", "The text doesn't say."]),
      read("What is in the square?", ["A big fountain", "A museum", "A stadium", "A bakery"]),
      read("What is opposite the square?", ["A shopping centre with a cinema", "A bakery", "A gym", "Bekzod's school"]),
      read("Where are the cafes?", ["On the corner of his street", "In the square", "In the shopping centre", "Next to the school"]),
      read("What is next to his school?", ["A bakery", "A cafe", "A gym", "A park"]),
      read("How many parks are there?", ["Two", "One", "Three", "None"]),
      read("What is Bekzod's favourite place?", ["The gym", "The park", "The cinema", "The bakery"]),
      read("How often does he go to the gym?", ["Every day after school", "At the weekend", "Twice a week", "The text doesn't say."]),
      read("What is the problem in Chirchiq?", ["There aren't any good bookshops.", "There aren't any parks.", "There isn't a cinema.", "The bread is bad."]),
    ],
  },
  {
    title: "Yangi mahallada",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Birinchi odam avval nima qidiryapti?", ["Dorixona", "Supermarket", "Pochta", "Avtoturargoh"]),
      hear("Dorixona qayerda?", ["Navoiy ko'chasida, bank qarshisida", "Savdo markazida", "Markazda, maydon yonida", "Bank yonida"]),
      hear("Kichik supermarket qayerda?", ["Dorixona yonida", "Bank qarshisida", "Savdo markazida", "Maydonda"]),
      hear("Katta supermarket qayerda?", ["Savdo markazida", "Dorixona yonida", "Markazda", "Navoiy ko'chasida"]),
      hear("Bu hududda pochta bormi?", ["Yo'q", "Ha, bank yonida", "Ha, ikkita", "Aytilmagan"]),
      hear("Pochta qayerda?", ["Markazda, maydon yaqinida", "Bank qarshisida", "Savdo markazida", "Dorixona yonida"]),
      hear("Mashinani qayerga qo'yish mumkin?", ["Savdo markazi orqasidagi avtoturargohga", "Bank oldiga", "Maydonga", "Dorixona yoniga"]),
      hear("Birinchi odam kim?", ["Bu joyga yangi kelgan kishi", "Dorixona xodimi", "Bank xodimi", "Haydovchi"]),
      hear("«opposite» so'zi nimani bildiradi?", ["Qarshisida", "Yonida", "Orqasida", "Ichida"]),
      hear("Suhbat qanday tugaydi?", ["You're welcome.", "Good night!", "See you!", "No problem."]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "There is a park near my house.",
      "There are two cinemas in our town.",
      "There aren't any banks here.",
      "Is there a pharmacy near here?",
      "The bank is opposite the hotel.",
      "My favourite place is the park.",
      "library",
      "pharmacy",
      "museum",
      "theatre",
    ]),
  },
];
