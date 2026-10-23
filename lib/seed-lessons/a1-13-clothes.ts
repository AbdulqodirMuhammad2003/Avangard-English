/**
 * A1, 13-dars — «Kiyim». Ranglar va kiyimlar. Grammatika: chastota
 * ravishlari (always, usually, often, sometimes, never) va ularning gapdagi
 * o'rni (fe'ldan oldin, lekin to be dan keyin); and / but / because bilan
 * gaplarni bog'lash. Matn va mashqlar o'zimizniki.
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
  stress,
  trueFalse,
  w,
  written,
  type Rounds,
} from "./helpers";

export const A1_13_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("⚫", "black", "blæk|blek", "sifat", "Qora", "The colour of the night.", "My phone is black.", "Telefonim qora."),
      w("⚪", "white", "waɪt|uayt", "sifat", "Oq", "The colour of snow and milk.", "The snow is white.", "Qor oq."),
      w("🔵", "blue", "bluː|bluu", "sifat", "Ko'k, havorang", "The colour of the sky on a sunny day.", "The sky is blue.", "Osmon ko'k."),
      w("🟢", "green", "ɡriːn|griin", "sifat", "Yashil", "The colour of grass and leaves.", "Green tea is good for you.", "Ko'k choy foydali."),
      w("🟡", "yellow", "ˈjeləʊ|yelou", "sifat", "Sariq", "The colour of a lemon.", "Bananas are yellow.", "Bananlar sariq."),
      w("🟤", "brown", "braʊn|braun", "sifat", "Jigarrang", "The colour of chocolate.", "My eyes are brown.", "Ko'zlarim jigarrang."),
      w("🩶", "grey", "ɡreɪ|grey", "sifat", "Kulrang", "Between black and white.", "The sky is grey today.", "Bugun osmon kulrang."),
      w("🩷", "pink", "pɪŋk|pink", "sifat", "Pushti", "Light red.", "Her bag is pink.", "Uning sumkasi pushti."),
      w("🟣", "purple", "ˈpɜːpl|pyopl", "sifat", "Binafsha", "Red and blue together.", "Purple is my favourite colour.", "Binafsha — sevimli rangim."),
      w("🌑", "dark", "dɑːk|daak", "sifat", "To'q; qorong'i", "Not light: dark blue, dark hair.", "She has dark hair.", "Uning sochi qora (to'q)."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("👔", "shirt", "ʃɜːt|shyot", "ot", "Ko'ylak (erkaklar)", "Clothes for the top of your body, with buttons.", "He wears a white shirt to work.", "U ishga oq ko'ylak kiyadi."),
      w("👕", "T-shirt", "ˈtiː ʃɜːt|tii shyot", "ot", "Futbolka", "A simple shirt with short sleeves.", "This T-shirt is cheap.", "Bu futbolka arzon."),
      w("👖", "trousers", "ˈtraʊzəz|trauzaz", "ot (ko'plik)", "Shim", "Clothes for your legs.", "These trousers are too long.", "Bu shim juda uzun."),
      w("👖", "jeans", "dʒiːnz|jiinz", "ot (ko'plik)", "Jinsi shim", "Blue trousers made of strong cotton.", "Students often wear jeans.", "Talabalar ko'pincha jinsi kiyishadi."),
      w("👗", "dress", "dres|dres", "ot", "Ko'ylak (ayollar)", "A one-piece clothes for women and girls.", "What a beautiful dress!", "Qanday chiroyli ko'ylak!"),
      w("🩱", "skirt", "skɜːt|skyot", "ot", "Yubka", "Women's clothes from the waist down.", "Her skirt is red.", "Uning yubkasi qizil."),
      w("🧥", "jacket", "ˈdʒækɪt|jekit", "ot", "Kurtka, jaket", "A short coat.", "Take a jacket. It's cold.", "Kurtka oling. Sovuq."),
      w("🧥", "coat", "kəʊt|kout", "ot", "Palto", "A long warm jacket for winter.", "My coat is very warm.", "Paltoim juda issiq."),
      w("👟", "shoes", "ʃuːz|shuuz", "ot (ko'plik)", "Oyoq kiyim, tufli", "You wear them on your feet.", "These shoes are new.", "Bu tufli yangi."),
      w("👒", "hat", "hæt|het", "ot", "Shlyapa, bosh kiyim", "You wear it on your head.", "I wear a hat in summer.", "Yozda shlyapa kiyaman."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("💯", "always", "ˈɔːlweɪz|oolueyz", "ravish", "Doim, har doim", "Every time.", "I always wear black shoes.", "Men doim qora tufli kiyaman."),
      w("🔁", "usually", "ˈjuːʒuəli|yuujuali", "ravish", "Odatda", "Most times.", "She usually wears a dress.", "U odatda ko'ylak kiyadi."),
      w("🔂", "often", "ˈɒfn|ofn", "ravish", "Tez-tez, ko'pincha", "Many times. The «t» is silent.", "We often go shopping on Saturday.", "Shanba kunlari tez-tez xaridga boramiz."),
      w("🎲", "sometimes", "ˈsʌmtaɪmz|samtaymz", "ravish", "Ba'zan", "Not always, not never.", "I sometimes wear a cap.", "Ba'zan kepka kiyaman."),
      w("🚫", "never", "ˈnevə|neva", "ravish", "Hech qachon", "Not at any time.", "He never wears a tie.", "U hech qachon galstuk taqmaydi."),
      w("🧣", "wear", "weə|uea", "fe'l", "Kiymoq, kiyib yurmoq", "To have clothes on your body.", "I wear a uniform at school.", "Maktabda forma kiyaman."),
      w("↔️", "but", "bʌt|bat", "bog'lovchi", "Lekin, ammo", "It joins two different ideas.", "It's cold, but I don't wear a coat.", "Sovuq, lekin palto kiymayman."),
      w("❓", "because", "bɪˈkɒz|bikoz", "bog'lovchi", "Chunki", "It gives the reason.", "I wear a coat because it's cold.", "Palto kiyaman, chunki sovuq."),
      w("👚", "clothes", "kləʊðz|klouz", "ot (ko'plik)", "Kiyim-kechak", "Shirts, trousers, dresses…", "I buy clothes at the market.", "Kiyimni bozordan olaman."),
      w("🎨", "colour", "ˈkʌlə|kala", "ot", "Rang", "Red, blue and green are colours.", "What colour is your car?", "Mashinangiz qanday rangda?"),
    ],
  },
];

const FREQ = ["always", "usually", "often", "sometimes", "never"];
const LINK = ["and", "but", "because"];

const SURVEY = `WHAT DO STUDENTS WEAR? — Our university magazine asked three students.
Javohir, 19: "I always wear jeans and a T-shirt. I never wear a shirt and tie — it's not comfortable. My favourite colour is black."
Madina, 20: "I usually wear a long skirt or a dress. I sometimes wear jeans, but not at university. I love bright colours — pink, yellow and purple."
Sherzod, 22: "I work in a bank after my lessons, so I often wear a white shirt and dark trousers. At the weekend I wear a tracksuit because I play football."`;
const tf = trueFalse(SURVEY);

const SHOP = `Hello! Can I help you?
Yes, I'm looking for a jacket.
What colour?
Dark blue or black. I usually wear dark colours.
What about this one? It's dark blue.
Oh, it's nice! How much is it?
It's four hundred thousand som.
Hmm, that's expensive. Have you got a cheaper one?
Yes, this grey jacket is two hundred and fifty thousand.
Great, I'll take the grey one.`;
const hear = hearing(SHOP);

export const A1_13_EXERCISES: SeedExercise[] = [
  {
    title: "Ranglar va kiyimlar",
    skill: "Tinglash",
    kind: "listen",
    instructions: "So'z o'qiladi. Eshitganingizni toping.",
    questions: [
      listen("brown", ["brown", "blue", "black", "grey"]),
      listen("purple", ["purple", "people", "pink", "paper"]),
      listen("yellow", ["yellow", "hello", "follow", "yes"]),
      listen("shirt", ["shirt", "skirt", "short", "shoes"]),
      listen("skirt", ["shirt", "skirt", "sport", "street"]),
      listen("coat", ["coat", "cat", "cold", "court"]),
      listen("clothes", ["clothes", "close", "closed", "colours"]),
      listen("trousers", ["trousers", "towers", "flowers", "trains"]),
      listen("usually", ["usually", "really", "early", "only"]),
      listen("sometimes", ["sometimes", "summertime", "something", "some time ago"]),
    ],
  },
  {
    title: "Bu nima?",
    skill: "Rasm",
    kind: "picture",
    instructions: "Rasmga qarang va mos so'zni toping.",
    questions: [
      pick("👕", ["T-shirt", "shirt", "dress", "coat"], 0),
      pick("👗", ["skirt", "dress", "jacket", "hat"], 1),
      pick("👟", ["hat", "jeans", "shoes", "coat"], 2),
      pick("👒", ["shoes", "skirt", "coat", "hat"], 3),
      pick("👔", ["shirt", "T-shirt", "jacket", "trousers"], 0),
      pick("👖", ["dress", "jeans", "skirt", "coat"], 1),
      pick("🟡", ["white", "green", "yellow", "brown"], 2),
      pick("🟣", ["pink", "blue", "grey", "purple"], 3),
      pick("🟤", ["brown", "black", "dark", "grey"], 0),
      pick("🩷", ["purple", "pink", "red", "white"], 1),
    ],
  },
  {
    title: "Qanchalik tez-tez?",
    skill: "Grammatika",
    kind: "choice",
    instructions:
      "always — 100%, usually — 80%, often — 60%, sometimes — 30%, never — 0%. Foizga mos so'zni tanlang.",
    questions: [
      pick("I ___ wear jeans. (100%)", FREQ, 0),
      pick("She ___ wears a dress. (80%)", FREQ, 1),
      pick("We ___ go shopping. (60%)", FREQ, 2),
      pick("He ___ wears a hat. (30%)", FREQ, 3),
      pick("I ___ wear a tie. (0%)", FREQ, 4),
      pick("They ___ play football at the weekend. (100%)", FREQ, 0),
      pick("My father ___ reads the newspaper. (80%)", FREQ, 1),
      pick("I ___ eat meat. I'm a vegetarian. (0%)", FREQ, 4),
      pick("We ___ go to the cinema. (30%)", FREQ, 3),
      pick("My sister ___ buys new clothes. (60%)", FREQ, 2),
    ],
  },
  {
    title: "Ravish qayerda turadi?",
    skill: "Grammatika",
    kind: "type",
    instructions:
      "Qavsdagi so'zni gapga qo'ying: oddiy fe'ldan OLDIN (I always wear…), lekin am/is/are dan KEYIN (I am always late).",
    questions: written([
      ["I wear jeans. (always)", "I always wear jeans."],
      ["She wears a skirt. (sometimes)", "She sometimes wears a skirt."],
      ["He is late. (never)", "He is never late.", "to be dan keyin: is never."],
      ["We go shopping on Sunday. (often)", "We often go shopping on Sunday."],
      ["They are at home in the evening. (usually)", "They are usually at home in the evening."],
      ["I drink coffee. (never)", "I never drink coffee."],
      ["My shoes are dirty. (always)", "My shoes are always dirty."],
      ["She wears a hat. (often)", "She often wears a hat."],
      ["I am tired on Monday. (sometimes)", "I am sometimes tired on Monday.|I'm sometimes tired on Monday."],
      ["He wears a coat in winter. (usually)", "He usually wears a coat in winter."],
    ]),
  },
  {
    title: "and, but yoki because?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "and — va (qo'shimcha), but — lekin (qarama-qarshi), because — chunki (sabab).",
    questions: [
      pick("I like jeans ___ T-shirts.", LINK, 0),
      pick("It's cold, ___ I don't wear a coat.", LINK, 1),
      pick("I wear a coat ___ it's cold.", LINK, 2),
      pick("This dress is beautiful, ___ it's expensive.", LINK, 1),
      pick("She wears a white shirt ___ black trousers.", LINK, 0),
      pick("I don't wear this skirt ___ it's too short.", LINK, 2),
      pick("He likes blue ___ green.", LINK, 0),
      pick("I often go to the market ___ the clothes are cheap there.", LINK, 2),
      pick("My jacket is old, ___ I love it.", LINK, 1),
      pick("I never wear a tie ___ it's not comfortable.", LINK, 2),
    ],
  },
  {
    title: "Urg'u qayerda?",
    skill: "Talaffuz",
    kind: "stress",
    instructions: "So'zni eshiting va urg'uli bo'g'inni bosing.",
    questions: stress([
      ["trou|sers", 0, "TROU-sers"],
      ["jack|et", 0],
      ["yel|low", 0],
      ["pur|ple", 0],
      ["al|ways", 0],
      ["u|sual|ly", 0, "U-sual-ly"],
      ["some|times", 0],
      ["ne|ver", 0],
      ["be|cause", 1, "be-CAUSE"],
      ["col|our", 0],
    ]),
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Chap va o'ng tomonni ulang.",
    questions: pairs([
      ["black|qora", "white|oq", "blue|ko'k", "green|yashil"],
      ["yellow|sariq", "brown|jigarrang", "grey|kulrang", "pink|pushti"],
      ["shirt|ko'ylak (erkak)", "dress|ko'ylak (ayol)", "trousers|shim", "skirt|yubka"],
      ["coat|palto", "jacket|kurtka", "shoes|tufli", "hat|shlyapa"],
      ["always|100%", "usually|80%", "sometimes|30%", "never|0%"],
      ["and|va", "but|lekin", "because|chunki", "often|tez-tez"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("I wear *always jeans.", "Ravish fe'ldan oldin: I always wear jeans."),
      mistake("She *never is late.", "to be dan keyin: She is never late."),
      mistake("I like this dress *because it's expensive.", "Qimmat — qarama-qarshi fikr: …, but it's expensive."),
      mistake("These trousers *is too long.", "trousers — doim ko'plik: are."),
      mistake("He wears a *blacks jacket.", "Sifat o'zgarmaydi: a black jacket."),
      mistake("My jeans *is blue.", "jeans — ko'plik: My jeans are blue."),
      mistake("What *color is your car?", "Britancha imlo: colour."),
      mistake("I don't wear a coat *and it isn't cold.", "Sabab — because: …because it isn't cold."),
      mistake("She *wear a dress every day.", "she → wears."),
      mistake("I never *don't wear a tie.", "never — o'zi inkor: I never wear a tie."),
    ],
  },
  {
    title: "Suhbatni davom ettiring",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("What do you usually wear to work?", ["I usually wear a shirt and trousers.", "I wear usually a shirt.", "Usually I am wear a shirt.", "I usual wear a shirt."]),
      say("What's your favourite colour?", ["Blue. I often wear blue clothes.", "My colour is favourite blue.", "I'm blue.", "Blue is colour."]),
      say("Do you ever wear a hat?", ["Sometimes, in summer.", "Sometimes I'm hat.", "Yes, I never.", "No, always."]),
      say("Why do you wear a coat?", ["Because it's cold outside.", "But it's cold.", "And it's cold.", "Because cold is."]),
      say("I love your dress!", ["Thank you! It's new.", "Yes, I love.", "No problem.", "Because it's new."]),
      say("Are you ever late?", ["No, I'm never late.", "No, I never am late.", "No, I'm late never.", "No, never I'm late."]),
      say("How much are these jeans?", ["They're two hundred thousand som.", "It's two hundred thousand.", "They're jeans.", "Blue, two hundred."]),
      say("What colour are your eyes?", ["They're brown.", "It's brown.", "My eye is brown colour.", "Brown eyes are."]),
      say("Do you like this jacket?", ["Yes, but it's too big for me.", "Yes, because it's too big.", "Yes, and it's too big for me.", "Yes, it like."]),
      say("Do you often go shopping?", ["No, not often. Maybe once a month.", "No, I go often.", "Yes, I never go.", "No, I'm often."]),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "I always wear jeans.",
      "She usually wears a dress.",
      "He is never late.",
      "We often go shopping on Saturday.",
      "I wear a coat because it's cold.",
      "It's cold, but I don't wear a coat.",
      "My favourite colour is purple.",
      "These shoes are new.",
      "What colour is your car?",
      "They are usually at home in the evening.",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: written([
      ["The sky is ___ today. It's going to rain. (kulrang)", "grey"],
      ["Bananas are ___.", "yellow"],
      ["I ___ wear a tie. (0%)", "never"],
      ["She ___ wears a dress. (100%)", "always"],
      ["I wear a coat ___ it's cold.", "because"],
      ["The dress is nice, ___ it's expensive.", "but"],
      ["What ___ is your bag? — Black.", "colour"],
      ["I buy ___ at the market. (kiyim)", "clothes"],
      ["These ___ are too long. (shim)", "trousers"],
      ["It's cold. Take a ___!", "coat|jacket"],
    ]),
  },
  {
    title: "Talabalar nima kiyadi?",
    skill: "O'qish",
    kind: "truefalse",
    instructions: "Jurnaldagi so'rovnomani o'qing va gap to'g'ri yoki noto'g'ri ekanini belgilang.",
    questions: [
      tf("Javohir always wears jeans and a T-shirt.", true),
      tf("Javohir sometimes wears a shirt and tie.", false, "I never wear a shirt and tie."),
      tf("Javohir's favourite colour is black.", true),
      tf("Madina usually wears a skirt or a dress.", true),
      tf("Madina wears jeans at university.", false, "Not at university."),
      tf("Madina likes dark colours.", false, "She loves bright colours."),
      tf("Sherzod works in a bank.", true),
      tf("Sherzod often wears a white shirt.", true),
      tf("Sherzod wears a tracksuit because he plays football.", true),
      tf("All three students are twenty years old.", false, "19, 20 va 22."),
    ],
  },
  {
    title: "Kiyim do'konida",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Xaridor nima qidiryapti?", ["Kurtka", "Palto", "Ko'ylak", "Shim"]),
      hear("U odatda qanday ranglarni kiyadi?", ["To'q ranglarni", "Yorqin ranglarni", "Oq rangni", "Aytilmagan"]),
      hear("Birinchi kurtka qanday rangda?", ["To'q ko'k", "Qora", "Kulrang", "Jigarrang"]),
      hear("Birinchi kurtka qancha turadi?", ["400 000 so'm", "250 000 so'm", "200 000 so'm", "450 000 so'm"]),
      hear("Xaridor birinchi kurtka haqida nima deydi?", ["Qimmat", "Arzon", "Katta", "Kichik"]),
      hear("Ikkinchi kurtka qanday rangda?", ["Kulrang", "To'q ko'k", "Qora", "Jigarrang"]),
      hear("Ikkinchi kurtka qancha turadi?", ["250 000 so'm", "400 000 so'm", "150 000 so'm", "200 000 so'm"]),
      hear("Xaridor qaysi kurtkani oldi?", ["Kulrangini", "To'q ko'kini", "Ikkalasini", "Hech birini"]),
      hear("«Can I help you?» ni kim aytdi?", ["Sotuvchi", "Xaridor", "Ikkalasi", "Hech kim"]),
      hear("«cheaper» so'zi nimani bildiradi?", ["Arzonroq", "Qimmatroq", "Kattaroq", "Chiroyliroq"]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "I always wear jeans.",
      "She usually wears a dress.",
      "I'm never late.",
      "I wear a coat because it's cold.",
      "What colour is your car?",
      "My favourite colour is blue.",
      "These shoes are new.",
      "clothes",
      "trousers",
      "usually",
    ]),
  },
];
