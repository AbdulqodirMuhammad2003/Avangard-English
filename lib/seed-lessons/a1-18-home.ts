/**
 * A1, 18-dars — «Uy-joy». Xonalar, mebel va jihozlar, ijaraga uy, uydagi
 * muammolarni aytish. Grammatika: each (har bir — birlik ot + birlik fe'l)
 * va all the (barcha — ko'plik ot + ko'plik fe'l); upstairs / downstairs.
 * Matn va mashqlar o'zimizniki.
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

export const A1_18_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🍳", "kitchen", "ˈkɪtʃɪn|kichin", "ot", "Oshxona", "The room where you cook.", "My mother is in the kitchen.", "Onam oshxonada."),
      w("🛋️", "living room", "ˈlɪvɪŋ ruːm|living ruum", "ot", "Mehmonxona (uyda)", "The room where you sit, talk and watch TV.", "We watch TV in the living room.", "Mehmonxonada televizor ko'ramiz."),
      w("🛏️", "bedroom", "ˈbedruːm|bedruum", "ot", "Yotoqxona", "The room where you sleep.", "My bedroom is small but nice.", "Yotoqxonam kichik, lekin chiroyli."),
      w("🍽️", "dining room", "ˈdaɪnɪŋ ruːm|dayning ruum", "ot", "Ovqatlanish xonasi", "The room where you eat meals.", "We eat plov in the dining room.", "Palovni ovqatlanish xonasida yeymiz."),
      w("🚪", "hall", "hɔːl|hool", "ot", "Dahliz", "The room near the front door.", "Leave your shoes in the hall.", "Oyoq kiyimingizni dahlizda qoldiring."),
      w("🚘", "garage", "ˈɡærɑːʒ|geraaj", "ot", "Garaj", "A building for a car.", "Our car is in the garage.", "Mashinamiz garajda."),
      w("⬆️", "upstairs", "ˌʌpˈsteəz|apsteaz", "ravish", "Yuqori qavatda", "On a higher floor.", "The bedrooms are upstairs.", "Yotoqxonalar yuqori qavatda."),
      w("⬇️", "downstairs", "ˌdaʊnˈsteəz|daunsteaz", "ravish", "Pastki qavatda", "On a lower floor.", "The kitchen is downstairs.", "Oshxona pastki qavatda."),
      w("🚪", "room", "ruːm|ruum", "ot", "Xona", "A part of a house with walls and a door.", "This room is very bright.", "Bu xona juda yorug'."),
      w("🏡", "home", "həʊm|houm", "ot", "Uy (o'z uyi)", "The place where you live.", "There's no place like home.", "O'z uyingdek joy yo'q."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🛏️", "bed", "bed|bed", "ot", "Karavot", "You sleep in it.", "The bed is very comfortable.", "Karavot juda qulay."),
      w("🛋️", "sofa", "ˈsəʊfə|soufa", "ot", "Divan", "A long soft seat for two or three people.", "The cat is on the sofa.", "Mushuk divanda."),
      w("💺", "armchair", "ˈɑːmtʃeə|aamchea", "ot", "Kreslo", "A soft chair with arms.", "My grandfather sits in his armchair.", "Bobom o'z kreslosida o'tiradi."),
      w("🚪", "wardrobe", "ˈwɔːdrəʊb|uoodroub", "ot", "Kiyim javoni (shkaf)", "A tall cupboard for clothes.", "My clothes are in the wardrobe.", "Kiyimlarim shkafda."),
      w("📚", "shelf", "ʃelf|shelf", "ot", "Javon, tokcha (ko'plik: shelves)", "A long flat board on the wall for books.", "The books are on the shelf.", "Kitoblar javonda."),
      w("🧶", "carpet", "ˈkɑːpɪt|kaapit", "ot", "Gilam", "A soft cover on the floor.", "We have a beautiful Uzbek carpet.", "Bizda chiroyli o'zbek gilami bor."),
      w("🪞", "mirror", "ˈmɪrə|mira", "ot", "Oyna, ko'zgu", "You see yourself in it.", "Look in the mirror!", "Ko'zguga qarang!"),
      w("🗄️", "cupboard", "ˈkʌbəd|kabad", "ot", "Javon, shkaf (idish uchun)", "A small piece of furniture with doors. The «p» is silent!", "The cups are in the cupboard.", "Piyolalar javonda."),
      w("🧊", "fridge", "frɪdʒ|frij", "ot", "Muzlatgich", "It keeps food cold.", "The milk is in the fridge.", "Sut muzlatgichda."),
      w("🔥", "cooker", "ˈkʊkə|kuka", "ot", "Gaz plita", "You cook food on it. (A «cook» is a person!)", "Our cooker is new.", "Plitamiz yangi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("☝️", "each", "iːtʃ|iich", "aniqlovchi", "Har bir (alohida)", "Every one, one by one. Use a singular noun.", "Each room has a window.", "Har bir xonaning derazasi bor."),
      w("👐", "all the", "ˈɔːl ðə|ool za", "aniqlovchi", "Barcha, hamma", "Every one, as a group. Use a plural noun.", "All the rooms are big.", "Barcha xonalar katta."),
      w("💡", "lamp", "læmp|lemp", "ot", "Chiroq, lampa", "It gives light in a room.", "Turn on the lamp, please.", "Chiroqni yoqing, iltimos."),
      w("🪟", "curtains", "ˈkɜːtnz|kyotnz", "ot (ko'plik)", "Pardalar", "Cloth over a window.", "The curtains are blue.", "Pardalar ko'k."),
      w("🫧", "washing machine", "ˈwɒʃɪŋ məˌʃiːn|uoshing mashiin", "ot", "Kir yuvish mashinasi", "It washes your clothes.", "The washing machine is in the bathroom.", "Kir yuvish mashinasi vannaxonada."),
      w("♨️", "heating", "ˈhiːtɪŋ|hiiting", "ot", "Isitish tizimi", "It makes the house warm in winter.", "The heating doesn't work. It's cold!", "Isitish ishlamayapti. Sovuq!"),
      w("💸", "rent", "rent|rent", "ot", "Ijara haqi", "Money you pay every month to live in a flat.", "The rent is three hundred dollars a month.", "Ijara haqi oyiga uch yuz dollar."),
      w("🪑", "furniture", "ˈfɜːnɪtʃə|fyonicha", "ot", "Mebel", "Beds, tables, chairs, sofas… (no plural!)", "The flat has new furniture.", "Kvartirada yangi mebel bor."),
      w("📦", "move", "muːv|muuv", "fe'l", "Ko'chmoq", "To go to live in a new home.", "We move to a new flat next week.", "Kelasi hafta yangi kvartiraga ko'chamiz."),
      w("🔑", "landlord", "ˈlændlɔːd|lendlood", "ot", "Uy egasi (ijaraga beruvchi)", "The person who owns your rented flat.", "Call the landlord about the heating.", "Isitish haqida uy egasiga qo'ng'iroq qiling."),
    ],
  },
];

const EACH_ALL = ["each", "all the"];

const FLAT = `FLAT FOR RENT — Chilanzar, near the metro
A nice two-bedroom flat on the fourth floor. There is a big living room with a sofa, two armchairs and a TV. There's a kitchen with a new fridge and a cooker, and there is a small dining room. Each bedroom has a big bed and a wardrobe. All the rooms have new carpets and curtains. The bathroom has a shower and a washing machine. There isn't a garage, but there is a car park behind the building. The heating is good in winter.
Rent: $350 a month. Call the landlord, Mr Alimov: 90 777 12 12.`;
const tf = trueFalse(FLAT);

const CALL = `Hello, Mr Alimov? It's Nigora from flat 15.
Hello, Nigora. Is everything OK?
Not really. There are some problems in the flat.
Oh no. What's wrong?
First, the heating doesn't work. All the rooms are very cold.
I'm sorry. I can send someone tomorrow morning.
Thank you. Also, the fridge is very noisy, and the lamp in the hall is broken.
OK, no problem. I can bring a new lamp today.
And one more thing: there aren't any curtains in the bedroom.
Really? Each room has curtains… Oh, I remember. They're in the wardrobe!`;
const hear = hearing(CALL);

export const A1_18_EXERCISES: SeedExercise[] = [
  {
    title: "Uy so'zlari",
    skill: "Tinglash",
    kind: "listen",
    instructions: "So'z o'qiladi. Eshitganingizni toping.",
    questions: [
      listen("kitchen", ["kitchen", "chicken", "kitten", "children"]),
      listen("cupboard", ["cupboard", "keyboard", "clipboard", "cardboard"], "cupboard [kabad] — «p» o'qilmaydi!"),
      listen("wardrobe", ["wardrobe", "word", "robe", "wardrobes"]),
      listen("garage", ["garage", "garden", "carriage", "large"]),
      listen("mirror", ["mirror", "minor", "mirrors", "mayor"]),
      listen("cooker", ["cooker", "cook", "cookie", "corner"], "cooker — plita, cook — oshpaz."),
      listen("furniture", ["furniture", "future", "picture", "fortune"]),
      listen("upstairs", ["upstairs", "downstairs", "stairs", "upset"]),
      listen("each", ["each", "eat", "itch", "edge"]),
      listen("curtains", ["curtains", "certain", "cartoons", "captains"]),
    ],
  },
  {
    title: "Bu nima?",
    skill: "Rasm",
    kind: "picture",
    instructions: "Rasmga qarang va mos so'zni toping.",
    questions: [
      pick("🛋️", ["sofa", "bed", "armchair", "carpet"], 0),
      pick("🪞", ["window", "mirror", "lamp", "shelf"], 1),
      pick("💡", ["cooker", "heating", "lamp", "fridge"], 2),
      pick("🧊", ["cooker", "cupboard", "washing machine", "fridge"], 3),
      pick("🛏️", ["bed", "sofa", "wardrobe", "shelf"], 0),
      pick("🍳", ["bedroom", "kitchen", "hall", "garage"], 1),
      pick("🚘", ["hall", "living room", "garage", "dining room"], 2),
      pick("🧶", ["curtains", "mirror", "shelf", "carpet"], 3),
      pick("🫧", ["washing machine", "fridge", "cooker", "heating"], 0),
      pick("📦", ["rent", "move", "furniture", "landlord"], 1),
    ],
  },
  {
    title: "Qaysi xonada?",
    skill: "Lug'at",
    kind: "choice",
    instructions: "Narsa odatda qaysi xonada bo'lishini tanlang.",
    questions: [
      say("a cooker and a fridge", ["kitchen", "bedroom", "garage", "hall"]),
      say("a bed and a wardrobe", ["bedroom", "kitchen", "dining room", "garage"]),
      say("a sofa, armchairs and a TV", ["living room", "bathroom", "garage", "hall"]),
      say("a shower and a towel", ["bathroom", "living room", "kitchen", "hall"]),
      say("a car", ["garage", "bedroom", "dining room", "kitchen"]),
      say("a big table and six chairs for meals", ["dining room", "bathroom", "garage", "hall"]),
      say("shoes, coats and a mirror near the front door", ["hall", "kitchen", "bedroom", "garage"]),
      say("a washing machine", ["bathroom", "bedroom", "living room", "dining room"]),
      say("cups and plates", ["kitchen", "bedroom", "garage", "hall"]),
      say("books on a shelf and a desk", ["bedroom", "garage", "bathroom", "kitchen"]),
    ],
  },
  {
    title: "each yoki all the?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "each + birlik ot (Each room has…), all the + ko'plik ot (All the rooms have…).",
    questions: [
      pick("___ room has a window.", EACH_ALL, 0),
      pick("___ rooms are big.", EACH_ALL, 1),
      pick("___ bedroom has a wardrobe.", EACH_ALL, 0),
      pick("___ flats have a balcony.", EACH_ALL, 1),
      pick("___ student has a book.", EACH_ALL, 0),
      pick("___ students are in the classroom.", EACH_ALL, 1),
      pick("___ furniture is new.", EACH_ALL, 1, "furniture — sanalmaydigan ot: all the furniture."),
      pick("___ chair has a number.", EACH_ALL, 0),
      pick("___ windows are open.", EACH_ALL, 1),
      pick("___ guest gets a key card.", EACH_ALL, 0),
    ],
  },
  {
    title: "has yoki have?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "each dan keyin fe'l birlikda (has, is), all the dan keyin ko'plikda (have, are).",
    questions: [
      say("Each room ___ a lamp.", ["has", "have", "are", "is have"]),
      say("All the rooms ___ curtains.", ["have", "has", "is", "does"]),
      say("Each flat ___ a balcony.", ["has", "have", "are", "do"]),
      say("All the beds ___ comfortable.", ["are", "is", "has", "does"]),
      say("Each student ___ a desk.", ["has", "have", "are", "do"]),
      say("All the windows ___ big.", ["are", "is", "has", "am"]),
      say("Each bedroom ___ upstairs.", ["is", "are", "have", "do"]),
      say("All the furniture ___ new.", ["is", "are", "have", "were"], "furniture — sanalmaydi, shuning uchun is."),
      say("Each guest ___ a towel.", ["gets", "get", "are get", "getting"]),
      say("All the guests ___ breakfast at eight.", ["have", "has", "is", "does"]),
    ],
  },
  {
    title: "Uydagi muammolar",
    skill: "Vaziyat",
    kind: "situation",
    instructions: "Vaziyatni o'qing va unga mos inglizcha iborani tanlang.",
    questions: [
      say("Qishda uy sovuq, isitish ishlamayapti.", ["The heating doesn't work.", "The heating is free.", "The heating is upstairs.", "I like the heating."]),
      say("Muzlatgich juda shovqin qiladi.", ["The fridge is very noisy.", "The fridge is very quiet.", "The fridge is cold.", "The fridge has got noisy."]),
      say("Dahlizdagi chiroq buzilgan.", ["The lamp in the hall is broken.", "The hall is in the lamp.", "The lamp is free.", "I broken the lamp."]),
      say("Kir yuvish mashinasi ishlamayapti.", ["The washing machine doesn't work.", "The washing machine isn't working me.", "Washing machine no.", "It's a washing machine."]),
      say("Uy egasiga muammo haqida aytmoqchisiz.", ["There's a problem in the flat.", "There's a problem landlord.", "The problem has flat.", "Problem is there."]),
      say("Ijara haqi qancha, so'rang.", ["How much is the rent?", "How many is the rent?", "What is rent much?", "How rent?"]),
      say("Do'stingizga yangi uyingiz haqida ayting.", ["We've got a new flat. It has three rooms.", "We new flat three room.", "My flat is have three rooms.", "There is three rooms."]),
      say("Do'stingiz «Where's the kitchen?» dedi. U pastki qavatda.", ["It's downstairs.", "It's upstairs.", "It's in the garage.", "It's stairs."]),
      say("Mehmonga oyoq kiyimini qayerda qoldirishni ayting.", ["Leave your shoes in the hall, please.", "Leave your shoes in the fridge.", "Shoes are hall.", "Your shoes are kitchen."]),
      say("Yangi kvartiraga qachon ko'chishingizni ayting.", ["We move next week.", "We moving week next.", "We are move next week.", "Next week move."]),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Chap va o'ng tomonni ulang.",
    questions: pairs([
      ["kitchen|oshxona", "bedroom|yotoqxona", "living room|mehmonxona", "hall|dahliz"],
      ["sofa|divan", "armchair|kreslo", "wardrobe|kiyim javoni", "carpet|gilam"],
      ["fridge|muzlatgich", "cooker|plita", "mirror|ko'zgu", "lamp|chiroq"],
      ["upstairs|yuqorida", "downstairs|pastda", "rent|ijara haqi", "landlord|uy egasi"],
      ["each room|has", "all the rooms|have", "each bed|is", "all the beds|are"],
      ["bed|bedroom", "car|garage", "cooker|kitchen", "shower|bathroom"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("Each *rooms has a window.", "each + birlik ot: Each room has…"),
      mistake("All the rooms *has curtains.", "all the + ko'plik: have."),
      mistake("Each bedroom *have a wardrobe.", "each — birlik: has."),
      mistake("The flat has new *furnitures.", "furniture — ko'plik shakli yo'q."),
      mistake("The milk is in the *cooker.", "Sut sovuq joyda — fridge."),
      mistake("My mother is a good *cooker.", "Odam — cook. Cooker — plita."),
      mistake("The bedrooms are *downstair.", "upstairs / downstairs — oxirida -s bilan."),
      mistake("*All room has a lamp.", "Birlik ot bilan — each: Each room has a lamp."),
      mistake("The books are on the *shelfs.", "shelf → shelves."),
      mistake("The heating doesn't *works.", "doesn't + fe'l -s siz: work."),
    ],
  },
  {
    title: "Suhbatni davom ettiring",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("Tell me about your home.", ["It's a flat with three rooms and a big kitchen.", "It's home my.", "My home has got room.", "I'm a flat."]),
      say("How many bedrooms are there?", ["There are two. Each bedroom has a balcony.", "There is two.", "Two bedroom.", "They are two."]),
      say("Where do you watch TV?", ["In the living room.", "In the fridge.", "In the garage.", "On the cupboard."]),
      say("Is the kitchen upstairs?", ["No, it's downstairs.", "No, it's upstair.", "Yes, it downstairs.", "No, there isn't."]),
      say("How much is the rent?", ["It's four hundred dollars a month.", "It's four rooms.", "It's on the fourth floor.", "It's very rent."]),
      say("Is there a washing machine?", ["Yes, there is. It's in the bathroom.", "Yes, it is.", "Yes, there are.", "Yes, in the fridge."]),
      say("Are all the rooms big?", ["Not all. The bathroom is small.", "Yes, each rooms big.", "All the room is big.", "Yes, they has."]),
      say("What's the problem?", ["The heating doesn't work.", "The heating don't work.", "Heating is problem have.", "It's a heating."]),
      say("When do you move?", ["Next Saturday.", "In the hall.", "With the landlord.", "Upstairs."]),
      say("Do you like your new flat?", ["Yes, I love it! All the furniture is new.", "Yes, I like it furniture.", "Yes, all the furnitures are new.", "Yes, I does."]),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "Each room has a window.",
      "All the rooms are big.",
      "The bedrooms are upstairs.",
      "The kitchen is downstairs.",
      "The milk is in the fridge.",
      "My clothes are in the wardrobe.",
      "The heating doesn't work.",
      "The rent is three hundred dollars a month.",
      "We move to a new flat next week.",
      "Leave your shoes in the hall.",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: written([
      ["___ room has a lamp. (har bir)", "Each"],
      ["All ___ rooms have curtains.", "the"],
      ["Each bedroom ___ a wardrobe.", "has"],
      ["All the beds ___ comfortable.", "are"],
      ["I cook dinner in the ___.", "kitchen"],
      ["We sleep in the ___.", "bedroom"],
      ["The milk is in the ___.", "fridge"],
      ["The bedrooms aren't downstairs. They're ___.", "upstairs"],
      ["We pay the ___ every month.", "rent"],
      ["Look in the ___. You look great!", "mirror"],
    ]),
  },
  {
    title: "Ijaraga kvartira",
    skill: "O'qish",
    kind: "truefalse",
    instructions: "E'lonni o'qing va gap to'g'ri yoki noto'g'ri ekanini belgilang.",
    questions: [
      tf("The flat is near the metro.", true),
      tf("The flat has three bedrooms.", false, "A two-bedroom flat — ikki xonali yotoqxona."),
      tf("The flat is on the fourth floor.", true),
      tf("There are two sofas in the living room.", false, "a sofa — bitta divan, two armchairs — ikki kreslo."),
      tf("The fridge in the kitchen is new.", true),
      tf("Each bedroom has a wardrobe.", true),
      tf("All the rooms have old carpets.", false, "new carpets — yangi gilamlar."),
      tf("There is a garage.", false, "There isn't a garage, but there is a car park."),
      tf("The washing machine is in the bathroom.", true),
      tf("The rent is $350 a month.", true),
    ],
  },
  {
    title: "Uy egasiga qo'ng'iroq",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Nigora kimga qo'ng'iroq qilyapti?", ["Uy egasiga", "Do'stiga", "Mexanikka", "Mehmonxonaga"]),
      hear("Nigora qaysi kvartirada yashaydi?", ["15", "50", "5", "13"]),
      hear("Birinchi muammo nima?", ["Isitish ishlamayapti", "Muzlatgich buzilgan", "Chiroq yo'q", "Parda yo'q"]),
      hear("Xonalar qanday?", ["Juda sovuq", "Juda issiq", "Juda kichik", "Iflos"]),
      hear("Janob Alimov qachon odam yuboradi?", ["Ertaga ertalab", "Bugun kechqurun", "Hozir", "Kelasi hafta"]),
      hear("Muzlatgichda qanday muammo bor?", ["Juda shovqinli", "Ishlamayapti", "Juda kichik", "Iflos"]),
      hear("Qayerdagi chiroq buzilgan?", ["Dahlizdagi", "Oshxonadagi", "Yotoqxonadagi", "Vannaxonadagi"]),
      hear("Janob Alimov bugun nima olib keladi?", ["Yangi chiroq", "Yangi muzlatgich", "Pardalar", "Isitgich"]),
      hear("Yotoqxonada nima yo'q edi?", ["Pardalar", "Karavot", "Shkaf", "Chiroq"]),
      hear("Pardalar aslida qayerda ekan?", ["Shkafda", "Dahlizda", "Garajda", "Oshxonada"]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "Each room has a window.",
      "All the rooms are big.",
      "The bedrooms are upstairs.",
      "The kitchen is downstairs.",
      "The heating doesn't work.",
      "How much is the rent?",
      "cupboard",
      "wardrobe",
      "furniture",
      "kitchen",
    ]),
  },
];
