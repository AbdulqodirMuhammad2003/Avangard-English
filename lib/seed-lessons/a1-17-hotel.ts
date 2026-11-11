/**
 * A1, 17-dars — «Mehmonxonada: Is there…?». Navigate A1, 6.2 «Is there
 * Wi-fi?» va 6.4 «explaining problems» asosida: mehmonxona qulayliklari,
 * resepshnda savol berish, «qayerda» va «qachon»ni eshitib tushunish,
 * mehmonxonadagi muammolarni tushuntirish va yordam taklif qilish (I'll…).
 * Grammatika: Is there a…? / Are there any…? va qisqa javoblar.
 * Tinglash mashqlarida kitob treklari (yopiq ombordan), savollar va
 * matnlar o'zimizniki.
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

export const A1_17_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("❄️", "air conditioning", "ˈeə kənˌdɪʃənɪŋ|ea kandishaning", "ot", "Konditsioner", "A machine that makes a room cool.", "There's air conditioning in every room.", "Har bir xonada konditsioner bor."),
      w("🛁", "bath", "bɑːθ|baas", "ot", "Vanna", "A long container you sit in to wash.", "Is there a bath in the bathroom?", "Hammomda vanna bormi?"),
      w("🅿️", "car park", "ˈkɑː pɑːk|kaa paak", "ot", "Avtoturargoh", "A place where you leave your car.", "Is there a hotel car park?", "Mehmonxona avtoturargohi bormi?"),
      w("🏋️", "gym", "dʒɪm|jim", "ot", "Sport zali", "A room with machines for exercise.", "The gym is on level 1.", "Sport zali 1-qavatda."),
      w("👔", "iron", "ˈaɪən|ayan", "ot", "Dazmol", "You use it to make clothes flat.", "Is there an iron in the room?", "Xonada dazmol bormi?"),
      w("🛗", "lift", "lɪft|lift", "ot", "Lift", "A small room that takes you up and down in a building.", "The toilets are next to the lift.", "Hojatxonalar lift yonida."),
      w("🥤", "refreshments", "rɪˈfreʃmənts|rifreshmants", "ot", "Ichimlik va yengil taomlar", "Drinks and small things to eat.", "Are there any refreshments in the room?", "Xonada ichimlik va yegulik bormi?"),
      w("🔐", "safe", "seɪf|seyf", "ot", "Seyf", "A strong metal box for money and passports.", "A safe is important for me.", "Men uchun seyf muhim."),
      w("🧺", "towel", "ˈtaʊəl|taual", "ot", "Sochiq", "A cloth you use to make your body dry.", "Please take a towel from your room.", "Iltimos, xonangizdan sochiq oling."),
      w("📶", "Wi-fi", "ˈwaɪ faɪ|uay fay", "ot", "Wi-fi (simsiz internet)", "Internet without wires.", "Is there Wi-fi in the room?", "Xonada Wi-fi bormi?"),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("📝", "reservation", "ˌrezəˈveɪʃn|rezaveyshn", "ot", "Bron, oldindan buyurtma", "An arrangement to keep a room or table for you.", "Hi. I have a reservation.", "Salom. Menda bron bor."),
      w("🔑", "password", "ˈpɑːswɜːd|paasuyord", "ot", "Parol", "A secret word you need to use something.", "The password is «guest».", "Parol — «guest»."),
      w("🏢", "level", "ˈlevl|levl", "ot", "Qavat, sath", "A floor of a building.", "The gym is on level 1.", "Sport zali 1-qavatda."),
      w("🍫", "snack", "snæk|snek", "ot", "Yengil tamaddi", "A little food between meals.", "I have a snack at four o'clock.", "Soat to'rtda yengil tamaddi qilaman."),
      w("🧃", "drink", "drɪŋk|drink", "ot, fe'l", "Ichimlik; ichmoq", "Water, juice, tea, coffee…", "There's a cold drink in the mini-bar.", "Mini-barda sovuq ichimlik bor."),
      w("🆓", "free", "friː|frii", "sifat", "Bepul", "You don't pay for it.", "There's free Wi-fi in reception.", "Resepshnda bepul Wi-fi bor."),
      w("🚘", "parking", "ˈpɑːkɪŋ|paaking", "ot", "Mashina qo'yish joyi", "A place to leave your car.", "The hotel has free parking.", "Mehmonxonada bepul avtoturargoh bor."),
      w("🛎️", "reception", "rɪˈsepʃn|risepshn", "ot", "Qabulxona, resepshn", "The desk at the entrance of a hotel.", "Ask at reception.", "Resepshndan so'rang."),
      w("🧳", "checkout", "ˈtʃekaʊt|chekaut", "ot", "Mehmonxonadan chiqish", "The time when you leave a hotel room.", "Checkout is before 11 a.m.", "Chiqish soat 11 dan oldin."),
      w("🍹", "mini-bar", "ˈmɪni bɑː|mini baa", "ot", "Mini-bar", "A small fridge with drinks in a hotel room.", "The mini-bar has got tea, coffee and water.", "Mini-barda choy, qahva va suv bor."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("💔", "broken", "ˈbrəʊkən|broukan", "sifat", "Buzilgan, singan", "Not working.", "The shower in my room is broken.", "Xonamdagi dush buzilgan."),
      w("🤢", "dirty", "ˈdɜːti|dyorti", "sifat", "Kir, iflos", "Not clean.", "The bathroom is very dirty.", "Hammom juda iflos."),
      w("📢", "noisy", "ˈnɔɪzi|noyzi", "sifat", "Shovqinli", "With a lot of noise.", "Our room is very noisy.", "Xonamiz juda shovqinli."),
      w("🔢", "code", "kəʊd|koud", "ot", "Kod", "Secret numbers or letters that open a door.", "I don't know the code for the door.", "Eshik kodini bilmayman."),
      w("🔘", "switch", "swɪtʃ|suich", "ot", "Tugma, o'chirgich", "You press it to turn something on or off.", "The switch is next to the door.", "Tugma eshik yonida."),
      w("🚪", "cupboard", "ˈkʌbəd|kabad", "ot", "Javon, shkaf", "A piece of furniture with doors for things.", "Try in the cupboard near the window.", "Deraza yonidagi shkafga qarang."),
      w("🔥", "heater", "ˈhiːtə|hiita", "ot", "Isitgich", "A machine that makes a room warm.", "There's a heater near the bed.", "Karavot yonida isitgich bor."),
      w("📤", "send", "send|send", "fe'l", "Yubormoq", "Make someone or something go to a place.", "I'll send someone to look.", "Ko'rish uchun odam yuboraman."),
      w("🔍", "try", "traɪ|tray", "fe'l", "Urinib ko'rmoq", "Do something to see if it works.", "Try in the cupboard.", "Shkafga qarab ko'ring."),
      w("ℹ️", "information", "ˌɪnfəˈmeɪʃn|infameyshn", "ot", "Ma'lumot", "Facts about something.", "I need some information about your hotel.", "Mehmonxonangiz haqida ma'lumot kerak."),
    ],
  },
];

const HOTELS = `V8 HOTEL, BÖBLINGEN, GERMANY
The V8 Hotel is next to a big car factory. Each room has a car theme. It has all the facilities of a business hotel — free parking, Wi-fi and a gym — and there's a classic car museum next door. But there isn't a swimming pool.

SILK ROAD GUEST HOUSE, KHIVA, UZBEKISTAN
The Silk Road Guest House is a small family hotel in the old city of Khiva. There are only eight rooms. There's air conditioning in every room, but there aren't any TVs. There's a beautiful garden and breakfast is on the roof. There isn't a gym, but there are a lot of things to do — the old city is only two minutes away.`;
const read = reading(HOTELS);

export const A1_17_EXERCISES: SeedExercise[] = [
  {
    title: "Mehmonxona qulayliklari",
    skill: "Tinglash",
    kind: "listenmatch",
    instructions: "O'nta qulaylik nomi aytiladi. Tinglang va har bir raqamga so'zni inglizcha yozing.",
    questions: [
      slots(track("6.3"), [
        ["1.", "Wi-fi;wifi"],
        ["2.", "air conditioning"],
        ["3.", "iron"],
        ["4.", "refreshments"],
        ["5.", "lift"],
        ["6.", "safe"],
        ["7.", "bath"],
        ["8.", "gym"],
        ["9.", "car park"],
        ["10.", "towels"],
      ]),
    ],
  },
  {
    title: "Ikki mehmonxona",
    skill: "O'qish",
    kind: "reading",
    instructions: "Ikki mehmonxona haqida o'qing va savollarga javob bering.",
    questions: [
      read("Where is the V8 Hotel?", ["Next to a car factory in Germany", "In the old city of Khiva", "Near the sea", "The text doesn't say."]),
      read("What is special about the rooms in the V8 Hotel?", ["Each room has a car theme.", "They're very big.", "They haven't got Wi-fi.", "They're on the roof."]),
      read("What is next door to the V8 Hotel?", ["A classic car museum", "A swimming pool", "A park", "A restaurant"]),
      read("Is there a swimming pool at the V8 Hotel?", ["No, there isn't.", "Yes, there is.", "Yes, two.", "The text doesn't say."]),
      read("How many rooms are there in the Silk Road Guest House?", ["Eight", "Eighteen", "Two", "The text doesn't say."]),
      read("Are there any TVs in the guest house rooms?", ["No, there aren't.", "Yes, there are.", "Only in some rooms.", "The text doesn't say."]),
      read("Where is breakfast?", ["On the roof", "In the garden", "In the rooms", "In a café next door"]),
      read("Is there a gym at the guest house?", ["No, there isn't.", "Yes, there is.", "Yes, on the roof.", "The text doesn't say."]),
      read("How far is the old city from the guest house?", ["Two minutes", "Two hours", "Twenty minutes", "The text doesn't say."]),
      read("Which hotel has got free parking?", ["The V8 Hotel", "The Silk Road Guest House", "Both", "Neither"]),
    ],
  },
  {
    title: "Resepshnda",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Resepshndagi ikki suhbatni tinglang. Mehmonlar nima haqida so'raydi? To'g'ri so'zni tanlang.",
    questions: [
      gaps(track("6.4"), [
        ["1. «Hi. I have a reservation. The name is ___.»", "Davis", "David", "Daniels"],
        ["1. «A room for ___ nights.»", "two", "three", "four"],
        ["1. «Is there ___ in the room?»", "Wi-fi", "a TV", "a safe"],
        ["1. «Yes, there is. The password is «___».»", "guest", "hotel", "welcome"],
        ["2. «Is there a ___ in the hotel?»", "gym", "lift", "restaurant"],
        ["2. «It's on level ___.»", "1", "2", "3"],
        ["2. «Are there any ___ in the gym?» — «No, there aren't.»", "towels", "showers", "people"],
      ]),
    ],
  },
  {
    title: "Is there yoki Are there?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Birlik bilan: Is there a / an…? Ko'plik bilan: Are there any…? Javob: Yes, there is / are. No, there isn't / aren't.",
    questions: [
      say("___ a hotel car park?", ["Is there", "Are there", "There is", "Is it"]),
      say("Is there a hotel car park? — Yes, ___.", ["there is", "it is", "there are", "is there"]),
      say("Where are the toilets? — ___ next to the gym.", ["They are", "There are", "There is", "Are they"]),
      say("___ a bath in the bathroom?", ["Is there", "Are there", "There is", "Have there"]),
      say("Is there a bath? — No, ___. But there's a shower.", ["there isn't", "there aren't", "it isn't", "isn't there"]),
      say("___ any refreshments in the room?", ["Are there", "Is there", "There are", "Have there"]),
      say("Are there any refreshments? — Yes, ___.", ["there are", "they are", "there is", "it is"]),
      say("Is there ___ Wi-fi?", ["—", "a", "an", "any a"], "Wi-fi oldida a qo'yilmaydi: Is there Wi-fi?"),
      say("Is there ___ iron in the room?", ["an", "a", "any", "—"]),
      say("Are there ___ towels?", ["any", "a", "an", "one"]),
    ],
  },
  {
    title: "Savol va javob",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "To'rtta qisqa suhbatni tinglang va javoblaringizni tekshiring.",
    questions: [
      gaps(track("6.5"), [
        ["1. «___ a hotel car park?»", "Is there", "Are there", "There is"],
        ["2. «Where are the toilets?» — «___ next to the gym.»", "They are", "There are", "It's"],
        ["3. «Is there a bath in the bathroom?» — «No, there isn't. But there's a ___.»", "shower", "sink", "towel"],
        ["4. «Are there any refreshments in the room?» — «Yes, there ___.»", "are", "is", "aren't"],
        ["4. «The mini-bar has got tea, coffee and ___.»", "water", "juice", "milk"],
      ]),
    ],
  },
  {
    title: "Nima, qayerda, qachon?",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "there is / there are ko'pincha nima qayerda yoki qachon ekanini aytadi. To'rtta savol va javobni tinglang.",
    questions: [
      gaps(track("6.10"), [
        ["1. «Are there any towels in the room?» — «Yes, there are towels in the ___.»", "bathroom", "cupboard", "bedroom"],
        ["2. «Is there a bus to the airport?» — «Yes, there's a bus at ten o'clock and at ___ o'clock.»", "two", "twelve", "four"],
        ["3. «Is there a restaurant in the hotel?» — «No, there isn't. There's a ___ near the hotel.»", "café", "bakery", "restaurant"],
        ["4. «Are there any shops near the museum?» — «No, there aren't. But there are shops in the ___.»", "city centre", "hotel", "station"],
      ]),
    ],
  },
  {
    title: "Nitstsadagi mehmonxona",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Mehmon Nitstsadagi mehmonxonaga qo'ng'iroq qiladi. Tinglang va savollarga javob bering. Ba'zi savollarda IKKITA to'g'ri javob bor.",
    questions: [
      hearing(track("6.11"))("When does the flight arrive?", ["At 4.30 a.m. on Friday", "At 4.30 p.m. on Friday", "At 4.30 a.m. on Thursday", "At 2 p.m. on Friday"]),
      hearing(track("6.11"))("What's the best way to get to the hotel?", ["By bus", "By taxi", "By train", "On foot"]),
      hearing(track("6.11"))("Where is the bus stop?", ["On London Road, near the airport", "Next to the hotel", "In the city centre", "At the station"]),
      hearing(track("6.11"))("Where is the hotel?", ["In the city centre", "Near the airport", "By the sea", "Near the station"]),
      hearing(track("6.11"))("Where is the free Wi-fi?", ["In reception", "In all the rooms", "In the restaurant", "There isn't any."]),
      hearing(track("6.11"))("When is breakfast?", ["From 7 to 10", "From 6 to 9", "From 8 to 11", "From 7 to 11"]),
      hearingTwo(track("6.11"))("Which TWO are true?", ["Check-in is after 2 p.m.", "Checkout is before 11 a.m."], ["Check-in is after 11 a.m.", "Checkout is before 2 p.m."]),
    ],
  },
  {
    title: "Mehmonxonadagi muammolar",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Mehmonlar beshta muammo haqida aytadi. Resepshn qanday yordam beradi? To'g'ri so'zni tanlang.",
    questions: [
      gaps(track("6.17"), [
        ["1. «My room is very hot.» — «There's air conditioning. The switch is next to the ___.»", "door", "window", "bed"],
        ["2. «I don't know the code for the door.» — «It's ___.»", "A5468", "A5486", "A4568"],
        ["3. «There aren't any towels.» — «Try in the cupboard near the ___.»", "window", "door", "bed"],
        ["4. «Our room is very ___.» — «You can have another room.»", "noisy", "dirty", "small"],
        ["5. «The ___ in my room is broken.» — «I'll send someone to look.»", "shower", "phone", "TV"],
      ]),
    ],
  },
  {
    title: "Muammo va yechim",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Yana to'rtta muammoni tinglang. Kalit so'zlarga (joy, raqam, fe'l) e'tibor bering.",
    questions: [
      hearing(track("6.19"))("1. The phone is broken. What does the receptionist do?", ["Sends someone to look", "Gives a new phone", "Gives another room", "Says «try the cupboard»"]),
      hearing(track("6.19"))("2. The bathroom is very dirty. What's the solution?", ["Another room", "A new towel", "Someone cleans it now", "A free breakfast"]),
      hearing(track("6.19"))("3. What's the address of the museum?", ["23 Water Street", "32 Water Street", "23 Walter Street", "23 Waterloo Road"]),
      hearing(track("6.19"))("4. The room is very cold. What is there?", ["A heater", "Air conditioning", "A blanket in the cupboard", "Another room"]),
      hearing(track("6.19"))("4. Where is the switch?", ["Near the door", "Next to the bed", "Near the window", "In the cupboard"]),
    ],
  },
  {
    title: "Yordam taklif qiling",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Mehmon muammo haqida aytdi. Resepshn xodimi sifatida mos javobni tanlang. I'll + fe'l — yordam taklif qilish: I'll send someone.",
    questions: [
      say("The phone in my room is broken.", ["Oh, I'm sorry. I'll send someone to look.", "Yes, there is.", "It's on level 1.", "Try the password «guest»."]),
      say("The bathroom is very dirty.", ["I'm so sorry. You can have another room.", "There's a heater.", "It's 23 Water Street.", "Yes, there are."]),
      say("I don't know the address of this museum.", ["It's 23 Water Street.", "I'll send someone.", "There's air conditioning.", "Try in the cupboard."]),
      say("My room is very cold.", ["There's a heater. The switch is near the door.", "There's air conditioning.", "You can have a towel.", "It's A5468."]),
      say("My room is very hot.", ["There's air conditioning. The switch is next to the door.", "There's a heater.", "Try in the cupboard.", "Yes, it is."]),
      say("There aren't any towels in the bathroom.", ["Try in the cupboard near the window.", "There's a heater.", "It's on level 1.", "No, there aren't."]),
      say("Is there a gym in the hotel?", ["Yes, there is. It's on level 1.", "Yes, it is.", "Yes, there are.", "Yes, I'll send someone."]),
      say("Are there any shops near the museum?", ["No, there aren't. But there are shops in the city centre.", "No, there isn't.", "Yes, they're.", "No, it isn't."]),
      say("Is there a bus to the airport?", ["Yes, there's a bus at ten o'clock.", "Yes, it's a bus.", "Yes, there are.", "It's on London Road."]),
      say("Our room is very noisy.", ["I'm so sorry. You can have another room.", "There's a heater.", "I don't know.", "Try the password."]),
    ],
  },
  {
    title: "Savol yozing",
    skill: "Grammatika",
    kind: "type",
    instructions: "Is there…? yoki Are there any…? bilan savol yozing. Misol: a gym → Is there a gym?",
    questions: written([
      ["a gym", "Is there a gym?"],
      ["towels", "Are there any towels?"],
      ["a restaurant", "Is there a restaurant?"],
      ["museums", "Are there any museums?"],
      ["an iron", "Is there an iron?"],
      ["good shops", "Are there any good shops?"],
      ["Wi-fi in the room", "Is there Wi-fi in the room?|Is there wifi in the room?"],
      ["snacks in the room", "Are there any snacks in the room?"],
      ["Is there a cinema? (✗)", "No, there isn't."],
      ["Are there any drinks? (✓)", "Yes, there are."],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("*Are there a gym in the hotel?", "Birlik — Is there a gym?"),
      mistake("Is there *any towels in the room?", "Ko'plik — Are there any towels?"),
      mistake("Is there a car park? — Yes, *it is.", "Javob: Yes, there is."),
      mistake("Are there any snacks? — No, there *isn't.", "Ko'plik — there aren't."),
      mistake("Is there *a Wi-fi?", "Is there Wi-fi? (a siz)."),
      mistake("Is there *a iron?", "Unli oldida — an iron."),
      mistake("Where are the toilets? — *There are next to the lift.", "Joyini aytish — They are next to the lift."),
      mistake("The shower in my room is *break.", "Sifat — broken."),
      mistake("I *will to send someone to look.", "I'll + fe'l (to siz): I'll send someone."),
      mistake("Are there *some museums in the town?", "Savolda — any."),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Juftlarni ulang.",
    questions: pairs([
      ["Is there a gym?|Yes, there is.", "Are there any towels?|No, there aren't.", "Is there a cinema?|No, there isn't.", "Are there any good shops?|Yes, there are."],
      ["My room is very hot.|air conditioning", "My room is very cold.|a heater", "There aren't any towels.|the cupboard", "The shower is broken.|send someone"],
      ["towel|sochiq", "lift|lift", "safe|seyf", "iron|dazmol"],
      ["broken|buzilgan", "dirty|iflos", "noisy|shovqinli", "free|bepul"],
      ["Wi-fi|password", "breakfast|7 to 10", "check-in|after 2 p.m.", "checkout|before 11 a.m."],
    ]),
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap yoki savol tuzing.",
    questions: sentences([
      "Is there Wi-fi in the room?",
      "Are there any towels in the gym?",
      "Is there a bath in the bathroom?",
      "Yes, there is. It's on level 1.",
      "No, there aren't.",
      "There's free Wi-fi in reception.",
      "The shower in my room is broken.",
      "I'll send someone to look.",
      "Try in the cupboard near the window.",
      "Checkout is before 11 a.m.",
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting. Muhim so'zlarni urg'u bilan ayting: Is there a GYM? — YES, there IS.",
    questions: phrases([
      "Is there a gym?",
      "Yes, there is.",
      "Are there any towels?",
      "No, there aren't.",
      "Is there a restaurant? — Yes, there is.",
      "Is there a cinema? — No, there isn't.",
      "Hi. I have a reservation.",
      "My room is very hot.",
      "The shower in my room is broken.",
      "I'll send someone to look.",
    ]),
  },
];
