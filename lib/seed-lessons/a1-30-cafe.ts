/**
 * A1, 30-dars — «Kafeda: would like». Navigate A1, 10.3 «Cafe cities»,
 * 10.4 «ordering food and drink / invitations» va 10.5 «A New York cafe»
 * asosida: dunyoning eng yaxshi kafe shaharlari, kafe taomlari va
 * ichimliklari, buyurtma berish (Can I take your order? Small or large?),
 * rasmiy va norasmiy iboralar, taklifnoma va minnatdorchilik xati.
 * Grammatika: would like + ot / to + fe'l (I'd like a coffee. Would you like
 * to order?); bog'langan nutqni eshitish. Tinglash mashqlarida kitob
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

export const A1_30_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("☕", "coffee", "ˈkɒfi|kofi", "ot", "Qahva", "A hot brown drink.", "The coffee in Vienna is world famous.", "Vena qahvasi dunyoga mashhur."),
      w("🍊", "orange juice", "ˈɒrɪndʒ dʒuːs|orinj juus", "ot", "Apelsin sharbati", "A drink made from oranges.", "We'd like an orange juice.", "Bizga apelsin sharbati kerak."),
      w("🍏", "apple juice", "ˈæpl dʒuːs|epl juus", "ot", "Olma sharbati", "A drink made from apples.", "Would you like an apple juice?", "Olma sharbati ichasizmi?"),
      w("🍰", "cake", "keɪk|keyk", "ot", "Tort, pirojniy", "A sweet food for special days or with tea.", "Sachertorte is a kind of chocolate cake.", "Zaxertort — shokoladli tortning bir turi."),
      w("🥐", "croissant", "ˈkwæsɒ̃|kuason", "ot", "Kruassan", "A soft French bread for breakfast.", "A croissant and a coffee, please.", "Kruassan va qahva, iltimos."),
      w("🍩", "doughnut", "ˈdəʊnʌt|dounat", "ot", "Ponchik", "A round sweet cake, often with a hole.", "Try a doughnut with your coffee.", "Qahvangiz bilan ponchik tatib ko'ring."),
      w("🥪", "sandwich", "ˈsænwɪtʃ|senuich", "ot", "Sendvich, buterbrod", "Two pieces of bread with food inside.", "A croque monsieur is a kind of sandwich.", "Krok-msye — sendvichning bir turi."),
      w("🥗", "salad", "ˈsæləd|selad", "ot", "Salat", "Cold vegetables mixed together.", "She'd like a salad, please.", "U salat istaydi."),
      w("🍪", "biscuit", "ˈbɪskɪt|biskit", "ot", "Pechenye", "A small, hard, sweet food.", "Would you like a doughnut or a biscuit?", "Ponchik yoki pechenye istaysizmi?"),
      w("🍫", "chocolate", "ˈtʃɒklət|choklat", "ot", "Shokolad", "A sweet brown food.", "If you like chocolate, try the Sachertorte.", "Shokoladni yoqtirsangiz, zaxertortni tatib ko'ring."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🙏", "would like", "wʊd ˈlaɪk|vud layk", "fe'l", "Istardi (muloyim)", "A polite way to say «want».", "We would like a table for two.", "Bizga ikki kishilik stol kerak."),
      w("😊", "I'd like", "aɪd ˈlaɪk|ayd layk", "ibora", "Men … istardim", "I would like.", "I'd like the cake and a cup of tea.", "Men tort va bir piyola choy istardim."),
      w("🍨", "dessert", "dɪˈzɜːt|dizyort", "ot", "Desert, shirinlik", "Sweet food after a meal.", "I'd like to have some dessert.", "Shirinlik yemoqchiman."),
      w("📋", "menu", "ˈmenjuː|menyuu", "ot", "Menyu", "A list of food and drinks in a café.", "Would you like to see the menu?", "Menyuni ko'rasizmi?"),
      w("✍️", "order", "ˈɔːdə|ooda", "fe'l, ot", "Buyurtma bermoq; buyurtma", "Ask for food in a café or restaurant.", "Would you like to order?", "Buyurtma berasizmi?"),
      w("😋", "hungry", "ˈhʌŋɡri|hangri", "sifat", "Och, qorni och", "Wanting to eat.", "I'm not very hungry.", "Unchalik qornim och emas."),
      w("🪑", "table for two", "ˌteɪbl fə ˈtuː|teybl fo tuu", "ibora", "Ikki kishilik stol", "A table for two people.", "Hello. Table for two?", "Salom. Ikki kishilik stolmi?"),
      w("🍰", "piece", "piːs|piis", "ot", "Bo'lak", "A part of something.", "A piece of Sachertorte, please.", "Bir bo'lak zaxertort, iltimos."),
      w("🔤", "a kind of", "ə ˈkaɪnd əv|a kaynd ov", "ibora", "…ning bir turi", "A type of.", "A macchiato is a kind of coffee.", "Makiato — qahvaning bir turi."),
      w("🏛️", "culture", "ˈkʌltʃə|kalcha", "ot", "Madaniyat", "The way of life, art and traditions of a place.", "These cities are famous for their café culture.", "Bu shaharlar kafe madaniyati bilan mashhur."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🍔", "burger", "ˈbɜːɡə|byorga", "ot", "Burger", "Meat in a round bread.", "A burger and chips, please.", "Burger va kartoshka fri, iltimos."),
      w("🍟", "chips", "tʃɪps|chips", "ot", "Kartoshka fri", "Hot fried pieces of potato.", "A large burger, some chips and a coffee.", "Katta burger, kartoshka fri va qahva."),
      w("🌭", "hot dog", "ˈhɒt dɒɡ|hot dog", "ot", "Xot-dog", "A long sausage in bread.", "A large hot dog, please.", "Katta xot-dog, iltimos."),
      w("🤏", "small", "smɔːl|smool", "sifat", "Kichik (porsiya)", "Not large.", "Small or large?", "Kichikmi yoki kattami?"),
      w("🍹", "large", "lɑːdʒ|laaj", "sifat", "Katta (porsiya)", "Big.", "Large, please.", "Kattasini, iltimos."),
      w("➕", "anything else", "ˌeniθɪŋ ˈels|enising els", "ibora", "Yana biror narsa?", "Do you want something more?", "Anything else? — No, thanks.", "Yana biror narsa? — Yo'q, rahmat."),
      w("✅", "that's all", "ˌðæts ˈɔːl|zets ool", "ibora", "Shu xolos, bo'ldi", "Nothing more.", "No, thanks. That's all.", "Yo'q, rahmat. Shu xolos."),
      w("🥡", "take away", "ˌteɪk əˈweɪ|teyk auey", "ibora", "Olib ketish uchun", "Buy food or drink to eat somewhere else.", "This customer always buys coffee to take away.", "Bu mijoz doim qahvani olib ketadi."),
      w("🧑‍💼", "owner", "ˈəʊnə|ouna", "ot", "Egasi", "The person a shop or café belongs to.", "The owner of the café is from Venezuela.", "Kafe egasi Venesueladan."),
      w("🥟", "pastry", "ˈpeɪstri|peystri", "ot", "Pishiriq", "Baked food made from flour, butter and water.", "The café is famous for a kind of pastry.", "Kafe pishiriqning bir turi bilan mashhur."),
    ],
  },
];

const CITIES = `THE WORLD'S BEST CAFÉ CITIES
The café is a popular place to have food and drink and to meet friends. These cities are famous for their café culture.
1 Vienna, Austria. People sit and talk or read the newspaper for hours in the city's beautiful cafés. The coffee is world famous and not very expensive. If you like chocolate, try the special Sachertorte — it's a kind of chocolate cake.
2 Melbourne, Australia. Coffee in Melbourne isn't very cheap, but it's very good. Every year, there is an international Coffee Expo there.
3 Taipei, Taiwan. There are new cafés everywhere. You can try many different kinds of coffees and teas. Enjoy your drink with moa-chi, a kind of rice cake with a sweet filling.
4 Havana, Cuba. Coffee is very cheap in Cuba, and it's very good. Try the popular tres leches cake, made with three kinds of milk.
5 Seattle, USA. Seattle is the home of a famous coffee company, but there are many other cafés here, too. Try a doughnut or a colourful cupcake with your coffee.`;
const read = reading(CITIES);

const FORMAL = "Rasmiyroq";
const INFORMAL = "Norasmiy";

export const A1_30_EXERCISES: SeedExercise[] = [
  {
    title: "Kafe shaharlari",
    skill: "O'qish",
    kind: "reading",
    instructions: "Dunyoning eng yaxshi kafe shaharlari haqida o'qing va savollarga javob bering.",
    questions: [
      read("What do people do in Vienna's cafés?", ["They sit and talk or read the newspaper for hours.", "They drink coffee quickly.", "They have big dinners.", "They work on laptops."]),
      read("What is Sachertorte?", ["A kind of chocolate cake", "A kind of coffee", "A kind of sandwich", "A kind of tea"]),
      read("Is coffee in Melbourne cheap?", ["No, but it's very good.", "Yes, very cheap.", "Yes, and it's very good.", "The text doesn't say."]),
      read("What happens in Melbourne every year?", ["An international Coffee Expo", "A cake festival", "A tea competition", "The text doesn't say."]),
      read("What is moa-chi?", ["A rice cake with a sweet filling", "A kind of tea", "A chocolate cake", "A doughnut"]),
      read("Where is coffee very cheap and very good?", ["In Havana", "In Melbourne", "In Seattle", "In Vienna"]),
      read("What is tres leches cake made with?", ["Three kinds of milk", "Three kinds of chocolate", "Rice", "Coffee"]),
      read("What can you try with your coffee in Seattle?", ["A doughnut or a cupcake", "Moa-chi", "Sachertorte", "A salad"]),
    ],
  },
  {
    title: "Kafe menyusi",
    skill: "Tinglash",
    kind: "listenmatch",
    instructions: "Menyudagi ichimliklar va gazaklar aytiladi. Tinglang va har bir qatorga yozing.",
    questions: [
      slots(track("10.7"), [
        ["Drinks: 1.", "coffee"],
        ["Drinks: 2.", "tea"],
        ["Drinks: 3.", "apple juice"],
        ["Drinks: 4.", "orange juice"],
        ["Drinks: 5.", "water"],
        ["Drinks: 6.", "milk"],
        ["Snacks: 7.", "cake"],
        ["Snacks: 8.", "croissant"],
        ["Snacks: 9.", "doughnut"],
        ["Snacks: 10.", "sandwich"],
      ]),
    ],
  },
  {
    title: "Bu nima?",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Uchta qisqa suhbatni tinglang. a kind of … — «…ning bir turi».",
    questions: [
      gaps(track("10.9"), [
        ["1. A croque monsieur is a kind of ___.", "sandwich", "cake", "coffee"],
        ["2. A buñuelo is a kind of ___ here in Mexico.", "doughnut", "biscuit", "salad"],
        ["3. A macchiato is a kind of ___…", "coffee", "tea", "juice"],
        ["3. …with ___.", "milk", "sugar", "chocolate"],
      ]),
    ],
  },
  {
    title: "Vena kafesida",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Ikki do'st Vena kafesida buyurtma beradi. Tinglang va savollarga javob bering. Ba'zi savollarda IKKITA to'g'ri javob bor.",
    questions: [
      hearing(track("10.10"))("How many people need a table?", ["Two", "One", "Three", "Four"]),
      hearing(track("10.10"))("What city are they in?", ["Vienna", "Melbourne", "Seattle", "Havana"]),
      hearing(track("10.10"))("What is Sachertorte?", ["A kind of chocolate cake", "A kind of coffee", "A kind of sandwich", "A kind of tea"]),
      hearingTwo(track("10.10"))("What do they order?", ["A coffee and a cup of tea", "A piece of Sachertorte"], ["Two coffees", "A sandwich"]),
      hearing(track("10.10"))("What do they talk about at the end?", ["Going to another museum or back to the hotel", "Paying the bill", "Ordering more cake", "Calling a taxi"]),
    ],
  },
  {
    title: "would like",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Muloyim so'rov: would like + ot (I'd like a sandwich) yoki would like + to + fe'l (Would you like to order?). Javob: Yes, please. / No, thanks.",
    questions: [
      say("I'd like ___ have some dessert.", ["to", "—", "for", "the"]),
      say("Would you like ___ coffee, too?", ["a", "to", "—", "an"]),
      say("I'd like ___ cake and a cup of tea.", ["the", "to", "—", "for"]),
      say("Would you like to order? — Yes, ___.", ["please", "I like", "I would", "I'd like"]),
      say("Would you like a coffee? — No, ___.", ["thanks", "I wouldn't like", "I don't", "not"]),
      say("___ you like to see the menu?", ["Would", "Do", "Are", "Will"]),
      say("We'd like ___ orange juice.", ["an", "a", "to", "—"]),
      say("She'd like a salad, ___.", ["please", "thanks", "sure", "OK"]),
      say("Qaysi gap to'g'ri?", ["I'd like to order now.", "I'd like order now.", "I like to order now, please would.", "I would like ordering now."]),
      say("Qaysi gap to'g'ri?", ["Would you like milk with your coffee?", "Do you would like milk with your coffee?", "Would you like to milk with your coffee?", "You would like milk with your coffee?"]),
    ],
  },
  {
    title: "Buyurtma",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Kafe va tez ovqatlanish joyidagi uchta suhbatni tinglang. To'g'ri so'zni tanlang.",
    questions: [
      gaps(track("10.15"), [
        ["1. «Can I take your ___?»", "order", "bill", "menu"],
        ["1. «A burger and ___, please.»", "chips", "salad", "rice"],
        ["1. «Small or large?» — «___, please.»", "Large", "Small", "Medium"],
        ["1. «No, thanks. That's ___.»", "all", "fine", "it"],
        ["2. «A large ___, please.»", "hot dog", "coffee", "burger"],
        ["2. «How much is that?» — «Two pounds ___.»", "fifty", "fifteen", "five"],
        ["3. «Can we have the ___, please?»", "bill", "menu", "table"],
      ]),
    ],
  },
  {
    title: "Rasmiymi yoki norasmiy?",
    skill: "Dialog",
    kind: "choice",
    instructions: "Qisqa ibora — norasmiyroq, to'liq savol — rasmiyroq. Iborani belgilang.",
    questions: [
      say("Anything else?", [INFORMAL, FORMAL]),
      say("Would you like anything else?", [FORMAL, INFORMAL]),
      say("Can we have the bill, please?", [FORMAL, INFORMAL]),
      say("The bill, please.", [INFORMAL, FORMAL]),
      say("Salad?", [INFORMAL, FORMAL]),
      say("Would you like a salad?", [FORMAL, INFORMAL]),
      say("Can I have a large hot dog, please?", [FORMAL, INFORMAL]),
      say("A large hot dog, please.", [INFORMAL, FORMAL]),
    ],
  },
  {
    title: "Ofitsiant va mijoz",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Kafedagi suhbat. Mos javobni tanlang.",
    questions: [
      say("Can I take your order?", ["A sandwich and an orange juice, please.", "Yes, I can.", "Here you are.", "That's all."]),
      say("Small or large?", ["Large, please.", "Yes, please.", "A kind of coffee.", "Here you are."]),
      say("Anything else?", ["No, thanks. That's all.", "Yes, I'd like.", "Small, please.", "Here you are."]),
      say("Would you like a coffee?", ["Yes, please. With milk, please.", "Yes, I would like.", "Yes, I'd.", "Large."]),
      say("What would you like to drink?", ["A tea, please.", "Yes, please.", "No, thanks.", "Here you are."]),
      say("Can we have the bill, please?", ["Of course, just a moment.", "Small or large?", "Anything else?", "Yes, please."]),
      say("Would you like to come to our house for dinner on Saturday?", ["That sounds great.", "Yes, I'd like dinner.", "Here you are.", "That's all."]),
      say("Hello. Table for two?", ["Yes, please.", "Two coffees.", "No, I'm hungry.", "That's all."]),
      say("What's a macchiato?", ["It's a kind of coffee, with milk.", "It's a kind of sandwich.", "Yes, please.", "I'd like a macchiato."]),
      say("Here you are.", ["Thank you.", "Here you are.", "You're welcome.", "Anything else?"]),
    ],
  },
  {
    title: "Uchta ovoz",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Odamlar yoshi, jinsi, tezligi va talaffuzi bilan har xil eshitiladi. Uch kishi (A, B, C) bir xil gapni aytadi, lekin bittasi boshqacha gap aytadi. Qaysi biri?",
    questions: [
      hearing(track("10.18"))("1. Who says something different?", ["C — «What would you like to drink?»", "A", "B", "Nobody"]),
      hearing(track("10.18"))("2. Who says something different?", ["B — «Can I have a small coffee, please?»", "A", "C", "Nobody"]),
      hearing(track("10.18"))("3. Who says something different?", ["A — «I'd like a sandwich.»", "B", "C", "Nobody"]),
      hearing(track("10.18"))("4. Who says something different?", ["B — «The café's going to close at four thirty.»", "A", "C", "Nobody"]),
    ],
  },
  {
    title: "Gap yozing",
    skill: "Grammatika",
    kind: "type",
    instructions: "would like bilan gap yoki savol yozing. Qisqartma ishlating. Misol: I / order now → I'd like to order now.",
    questions: written([
      ["I / order now", "I'd like to order now.|I would like to order now."],
      ["you / try the cake? (?)", "Would you like to try the cake?"],
      ["you / see the menu? (?)", "Would you like to see the menu?"],
      ["we / an orange juice", "We'd like an orange juice.|We would like an orange juice."],
      ["you / milk with your coffee? (?)", "Would you like milk with your coffee?"],
      ["she / a salad, please", "She'd like a salad, please.|She would like a salad, please."],
      ["I / a table for two", "I'd like a table for two.|I would like a table for two."],
      ["they / a cup of tea", "They'd like a cup of tea.|They would like a cup of tea."],
      ["you / come to my party? (?)", "Would you like to come to my party?"],
      ["where / you / go? (?)", "Where would you like to go?"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("I'd like *have some dessert.", "would like + to + fe'l: I'd like to have."),
      mistake("Would you like *a order?", "Would you like to order?"),
      mistake("*Do you would like a coffee?", "Would you like a coffee?"),
      mistake("Would you like a coffee? — Yes, I *like.", "Javob: Yes, please."),
      mistake("I'd like *a orange juice.", "Unli oldida — an orange juice."),
      mistake("Can I *taking your order?", "Can I take your order?"),
      mistake("Small or large? — *Big, please.", "Porsiya — Large, please."),
      mistake("Can we have the *menu, please? I'd like to pay.", "To'lash uchun — the bill."),
      mistake("A macchiato is a kind *for coffee.", "a kind of coffee."),
      mistake("I'm so sorry, but I *don't can come.", "can't come."),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Juftlarni ulang.",
    questions: pairs([
      ["Small or large?|Large, please.", "Anything else?|No, thanks. That's all.", "Would you like a coffee?|Yes, please.", "Can we have the bill?|Of course."],
      ["Vienna|Sachertorte", "Taipei|moa-chi", "Havana|tres leches cake", "Seattle|doughnuts"],
      ["coffee|hot", "tea|hot", "orange juice|cold", "salad|cold"],
      ["Can you come?|Thanks! Sounds great.", "Please join us for a party.|I'd love to come.", "Would you like to come for dinner?|Yes, I can come.", "Can you come today?|Sorry, I can't come."],
      ["dessert|shirinlik", "menu|menyu", "bill|hisob", "owner|egasi"],
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting. So'zlarni bog'lab ayting: I'd_like_a_cake.",
    questions: phrases([
      "I'd like a cake.",
      "Would you like a drink?",
      "When does it open?",
      "Would you like a doughnut or a biscuit?",
      "Can I take your order?",
      "A burger and chips, please.",
      "No, thanks. That's all.",
      "Can we have the bill, please?",
      "Thank you very much for the invitation.",
      "I'm so sorry, but I can't come.",
    ]),
  },
];
