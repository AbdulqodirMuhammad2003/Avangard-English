/**
 * A1, 30-dars — «Kafeda». Taom buyurtma qilish, hisobni so'rash.
 * Grammatika: would like — xohish va taklif: I'd like a coffee. / Would you
 * like some tea? — Yes, please. / No, thank you.; I'd like + ot va I'd like
 * to + fe'l; like va would like farqi; some / any (takror). Matn va mashqlar
 * o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  dictation,
  hearing,
  listen,
  mistake,
  pairs,
  phrases,
  say,
  sentences,
  trueFalse,
  w,
  written,
  type Rounds,
} from "./helpers";

export const A1_30_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🍲", "soup", "suːp|suup", "ot", "Sho'rva", "Hot liquid food.", "I'd like the chicken soup, please.", "Tovuq sho'rvasini olaman, iltimos."),
      w("🥗", "salad", "ˈsæləd|selad", "ot", "Salat", "Cold vegetables, often with oil.", "Would you like a salad?", "Salat xohlaysizmi?"),
      w("🥪", "sandwich", "ˈsænwɪtʃ|senuich", "ot", "Sendvich, buterbrod", "Two pieces of bread with food between them.", "A cheese sandwich, please.", "Pishloqli sendvich, iltimos."),
      w("🍳", "omelette", "ˈɒmlət|omlat", "ot", "Omlet", "Eggs cooked in a pan.", "I always have an omelette for breakfast.", "Nonushtaga doim omlet yeyman."),
      w("🥞", "pancake", "ˈpænkeɪk|penkeyk", "ot", "Quymoq, blin", "A thin, flat cake cooked in a pan.", "I'd like a pancake with honey.", "Asalli quymoq olaman."),
      w("🍨", "ice cream", "ˌaɪs ˈkriːm|ays kriim", "ot", "Muzqaymoq", "A cold, sweet dessert.", "Would you like some ice cream?", "Muzqaymoq xohlaysizmi?"),
      w("🍮", "dessert", "dɪˈzɜːt|dizyort", "ot", "Desert, shirinlik", "Sweet food after the main meal.", "What would you like for dessert?", "Desertga nima xohlaysiz?"),
      w("🍟", "chips", "tʃɪps|chips", "ot", "Kartoshka fri", "Long pieces of fried potato (British English).", "Fish and chips, please.", "Baliq va kartoshka fri, iltimos."),
      w("🍔", "burger", "ˈbɜːɡə|byorga", "ot", "Burger", "Meat in a round bread roll.", "My brother ordered a big burger.", "Akam katta burger buyurtma qildi."),
      w("🍋", "lemonade", "ˌleməˈneɪd|lemaneyd", "ot", "Limonad", "A cold, sweet lemon drink.", "Two glasses of lemonade, please.", "Ikki stakan limonad, iltimos."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("📜", "menu", "ˈmenjuː|menyuu", "ot", "Menyu", "A list of food and drinks in a cafe.", "Can I see the menu, please?", "Menyuni ko'rsam bo'ladimi?"),
      w("🍛", "main course", "ˌmeɪn ˈkɔːs|meyn koos", "ibora", "Asosiy taom", "The biggest part of a meal.", "What would you like for your main course?", "Asosiy taomga nima xohlaysiz?"),
      w("💁‍♀️", "waitress", "ˈweɪtrəs|ueytras", "ot", "Ofitsiant (ayol)", "A woman who brings food in a restaurant.", "The waitress brought our tea.", "Ofitsiant qiz choyimizni olib keldi."),
      w("🧾", "bill", "bɪl|bil", "ot", "Hisob (to'lov)", "A paper that shows how much you must pay.", "Can we have the bill, please?", "Hisobni olib kelasizmi, iltimos?"),
      w("🪙", "tip", "tɪp|tip", "ot", "Choychaqa", "Extra money for the waiter.", "We left a tip for the waitress.", "Ofitsiant qizga choychaqa qoldirdik."),
      w("📝", "order", "ˈɔːdə|ooda", "fe'l, ot", "Buyurtma qilmoq; buyurtma", "Ask for food in a cafe.", "Are you ready to order?", "Buyurtma berishga tayyormisiz?"),
      w("🙋", "customer", "ˈkʌstəmə|kastama", "ot", "Mijoz", "A person who buys something.", "Every customer gets a free tea.", "Har bir mijozga bepul choy beriladi."),
      w("🍽️", "portion", "ˈpɔːʃn|pooshn", "ot", "Porsiya", "The amount of food for one person.", "This portion is very big.", "Bu porsiya juda katta."),
      w("🧾", "receipt", "rɪˈsiːt|risiit", "ot", "Chek", "A paper that shows you paid. The «p» is silent.", "Here's your receipt.", "Mana chekingiz."),
      w("🥡", "takeaway", "ˈteɪkəweɪ|teykauey", "ot", "Olib ketiladigan ovqat", "Food you buy in a cafe and eat at home.", "Let's get a takeaway tonight.", "Bugun kechqurun ovqatni olib ketamiz."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🙂", "I'd like", "aɪd laɪk|ayd layk", "ibora", "…xohlardim, …olaman", "A polite way to say «I want».", "I'd like a coffee, please.", "Bitta qahva olaman, iltimos."),
      w("🫴", "Would you like", "wʊd ju laɪk|vud yu layk", "ibora", "…xohlaysizmi?", "A polite way to offer something.", "Would you like some tea?", "Choy xohlaysizmi?"),
      w("➕", "anything else", "ˈeniθɪŋ els|enising els", "ibora", "Yana biror narsa", "Something more.", "Would you like anything else?", "Yana biror narsa xohlaysizmi?"),
      w("🤲", "here you are", "ˈhɪə ju ɑː|hia yu aa", "ibora", "Mana, marhamat", "We say it when we give something to someone.", "Here you are — your tea.", "Marhamat — choyingiz."),
      w("💧", "still water", "stɪl ˈwɔːtə|stil voota", "ibora", "Gazsiz suv", "Water without bubbles.", "A bottle of still water, please.", "Bir shisha gazsiz suv, iltimos."),
      w("🫧", "sparkling", "ˈspɑːklɪŋ|spaakling", "sifat", "Gazli", "With bubbles.", "Still or sparkling?", "Gazsizmi yoki gazli?"),
      w("🌶️", "spicy", "ˈspaɪsi|spaysi", "sifat", "Achchiq", "With a hot taste, like chilli.", "Is the soup spicy?", "Sho'rva achchiqmi?"),
      w("🍬", "sweet", "swiːt|suiit", "sifat", "Shirin", "With a lot of sugar.", "This cake is very sweet.", "Bu tort juda shirin."),
      w("🥵", "thirsty", "ˈθɜːsti|syorsti", "sifat", "Chanqagan", "You want to drink something.", "I'm thirsty. I'd like some water.", "Chanqadim. Suv ichardim."),
      w("🥕", "vegetarian", "ˌvedʒəˈteəriən|vejaterian", "sifat, ot", "Vegetarian (go'sht yemaydigan)", "A person who doesn't eat meat.", "Have you got any vegetarian dishes?", "Vegetarian taomlaringiz bormi?"),
    ],
  },
];

const ORDER = `Good afternoon! Are you ready to order?
Yes, please. I'd like the chicken soup to start. Is it spicy?
No, it isn't. And for your main course?
I'd like fish and chips, please.
And for you, madam?
Hmm… Have you got any vegetarian dishes?
Yes, we've got a vegetable plov and a mushroom omelette.
I'd like the omelette, please. And a salad.
Would you like anything to drink?
Yes. A lemonade for me, and a bottle of still water for my friend.
Anything else?
No, thank you. That's all.
… Can we have the bill, please?
Of course. Here you are. That's 186,000 so'm.
Can I pay by card?
Yes, of course.`;
const hear = hearing(ORDER);

const REVIEW = `CAFE «CHINOR» — a review by Laylo
Last Saturday my friends and I had lunch at Cafe Chinor in the city centre. It's a small cafe with a lovely garden.
The waiter gave us the menu, and it had a lot of choice: soups, salads, burgers and Uzbek dishes. I'd like to say that the prices were very good too.
I ordered a lentil soup and a chicken sandwich. My friend Gulnoza is a vegetarian, so she had a big salad and a cheese omelette. Our other friend, Madina, ordered a burger and chips, but the chips were cold and she wasn't happy. The waiter was very nice, and he brought her new chips.
For dessert we all had pancakes with honey — they were delicious! We drank lemonade and green tea.
The bill wasn't expensive: 210,000 so'm for three people. We left a tip for the waiter. I'd like to go there again in summer and sit in the garden.`;
const tf = trueFalse(REVIEW);

export const A1_30_EXERCISES: SeedExercise[] = [
  {
    title: "Nima eshitildi?",
    skill: "Tinglash",
    kind: "listen",
    instructions: "Gap yoki so'z o'qiladi. Eshitganingizni toping. «I like» va «I'd like» farqiga quloq soling.",
    questions: [
      listen("I'd like a coffee.", ["I'd like a coffee.", "I like a coffee.", "I like coffee.", "I'd like coffee."]),
      listen("I like tea.", ["I like tea.", "I'd like tea.", "I'd like a tea.", "I liked tea."]),
      listen("Would you like some tea?", ["Would you like some tea?", "Do you like tea?", "Would you like tea?", "Would you like some to eat?"]),
      listen("Do you like ice cream?", ["Do you like ice cream?", "Would you like ice cream?", "Would you like an ice cream?", "Do you like cream?"]),
      listen("the bill", ["the bill", "the pill", "the bell", "the ball"]),
      listen("dessert", ["dessert", "desert", "dissert", "the shirt"], "dessert [dizyort] — shirinlik; desert [dezat] — sahro."),
      listen("receipt", ["receipt", "recipe", "reset", "receive"]),
      listen("menu", ["menu", "many", "money", "manual"]),
      listen("spicy", ["spicy", "space", "spice", "speedy"]),
      listen("thirsty", ["thirsty", "thirty", "thirteen", "Thursday"]),
    ],
  },
  {
    title: "like yoki would like?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Gapga mos variantni tanlang. like — umuman yoqadi; would like — hozir xohlayman.",
    questions: [
      say("I'm thirsty. I ___ some water, please.", ["'d like", "like", "likes", "liking"]),
      say("I ___ tea. I drink it every day.", ["like", "'d like", "would like", "'d liking"]),
      say("___ you like some cake? — Yes, please.", ["Would", "Do", "Are", "Did"]),
      say("___ you like cake? — Yes, I love it.", ["Do", "Would", "Are", "Did"]),
      say("Would you like a coffee? — ___", ["Yes, please.", "Yes, I like.", "Yes, I would like.", "Yes, I do."]),
      say("Would you like some soup? — ___", ["No, thank you.", "No, I don't.", "No, I wouldn't like.", "No, I not."]),
      say("I'd like ___ order, please.", ["to", "—", "for", "at"]),
      say("She'd like ___ pancake with honey.", ["a", "to", "some", "—"]),
      say("What ___ you like to drink?", ["would", "do", "are", "did"]),
      say("He ___ like a big burger.", ["'d", "would to", "do", "does"]),
    ],
  },
  {
    title: "Odobli so'rang",
    skill: "Grammatika",
    kind: "type",
    instructions: "«I want» o'rniga odobliroq «I'd like» bilan yozing. Masalan: I want a tea. → I'd like a tea, please.",
    questions: written([
      ["I want a coffee.", "I'd like a coffee, please."],
      ["I want the menu.", "I'd like the menu, please."],
      ["I want a cheese sandwich.", "I'd like a cheese sandwich, please."],
      ["I want some water.", "I'd like some water, please."],
      ["I want the bill.", "I'd like the bill, please."],
      ["I want to order.", "I'd like to order, please."],
      ["I want to pay by card.", "I'd like to pay by card, please."],
      ["I want an omelette.", "I'd like an omelette, please."],
      ["I want two lemonades.", "I'd like two lemonades, please."],
      ["I want the chicken soup.", "I'd like the chicken soup, please."],
    ]),
  },
  {
    title: "Taklif qiling",
    skill: "Grammatika",
    kind: "type",
    instructions: "Would you like…? bilan taklif qiling. Masalan: some tea → Would you like some tea?",
    questions: written([
      ["some tea", "Would you like some tea?"],
      ["a sandwich", "Would you like a sandwich?"],
      ["some ice cream", "Would you like some ice cream?"],
      ["anything else", "Would you like anything else?"],
      ["a dessert", "Would you like a dessert?"],
      ["to order", "Would you like to order?"],
      ["to see the menu", "Would you like to see the menu?"],
      ["still or sparkling water", "Would you like still or sparkling water?"],
      ["to come with us", "Would you like to come with us?"],
      ["a takeaway", "Would you like a takeaway?"],
    ]),
  },
  {
    title: "Ofitsiant va mijoz",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Siz kafedasiz. Ofitsiant yoki do'stingiz gapirdi. Mos javobni tanlang.",
    questions: [
      say("Good evening! Are you ready to order?", ["Yes, I'd like the soup, please.", "Yes, I like soup.", "Yes, I'd like.", "Yes, I ordered."]),
      say("Would you like anything to drink?", ["A lemonade, please.", "Yes, I like drinks.", "No, I don't.", "I drink."]),
      say("Still or sparkling?", ["Still, please.", "Yes, please.", "I'd like.", "It's water."]),
      say("Would you like anything else?", ["No, thank you. That's all.", "No, I wouldn't.", "Yes, I would like.", "I don't like."]),
      say("Would you like a dessert?", ["Yes, please. Ice cream.", "Yes, I like.", "Yes, I'd.", "Yes, I do."]),
      say("Here you are.", ["Thank you.", "Here you are.", "You're welcome.", "Yes, please."]),
      say("Can we have the bill, please?", ["Of course. Here you are.", "Yes, I'd like.", "No, thank you.", "Here's the menu."]),
      say("How would you like to pay?", ["By card, please.", "In card, please.", "With card.", "Yes, please."]),
      say("Thank you very much!", ["You're welcome!", "Here you are!", "Yes, please!", "I'd like!"]),
      say("Is the soup spicy?", ["No, it isn't. It's mild.", "No, it doesn't.", "Yes, it does.", "It's sweet spicy."]),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Juftlarni ulang.",
    questions: pairs([
      ["soup|sho'rva", "salad|salat", "omelette|omlet", "pancake|quymoq"],
      ["dessert|desert", "chips|kartoshka fri", "ice cream|muzqaymoq", "lemonade|limonad"],
      ["menu|menyu", "bill|hisob", "tip|choychaqa", "receipt|chek"],
      ["customer|mijoz", "waiter|ofitsiant", "cash|naqd pul", "takeaway|olib ketiladigan ovqat"],
      ["spicy|achchiq", "sweet|shirin", "thirsty|chanqagan", "sparkling|gazli"],
      ["Are you ready|to order?", "Can we have|the bill?", "Would you like|anything else?", "Can I pay|by card?"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("I *like a coffee, please.", "Hozirgi xohish: I'd like a coffee."),
      mistake("*Do you like some tea? — Yes, please.", "Taklif: Would you like…?"),
      mistake("I'd like *order, please.", "would like + to + fe'l: I'd like to order."),
      mistake("Would you like a dessert? — Yes, I *like.", "Yes, please. / Yes, I would."),
      mistake("She'd *likes a sandwich.", "would dan keyin like o'zgarmaydi."),
      mistake("Can we have the *menu? We'd like to pay.", "To'lash uchun: the bill."),
      mistake("I'd like *a chips.", "chips — ko'plik: some chips."),
      mistake("I'm *thirty. I'd like some water.", "Chanqagan — thirsty."),
      mistake("Can I pay *with cash?", "in cash."),
      mistake("What would you like *drink?", "to drink."),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "I'd like a coffee, please.",
      "Would you like some tea?",
      "Are you ready to order?",
      "Can we have the bill, please?",
      "Would you like anything else?",
      "Can I pay in cash?",
      "Is the soup spicy?",
      "What would you like for dessert?",
      "I'd like to pay by card.",
      "Have you got any vegetarian dishes?",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Bo'sh joyga bitta so'z yozing.",
    questions: written([
      ["I'd ___ a lemonade, please.", "like"],
      ["___ you like some ice cream?", "Would"],
      ["I'd like ___ order, please.", "to"],
      ["Can we have the ___, please? We'd like to pay.", "bill"],
      ["Would you like anything ___?", "else"],
      ["Here you ___ — your tea.", "are"],
      ["Can I pay ___ card?", "by"],
      ["Still or ___ water?", "sparkling"],
      ["I'm ___. Can I have some water? (chanqagan)", "thirsty"],
      ["We left a ___ for the waiter. (choychaqa)", "tip"],
    ]),
  },
  {
    title: "Buyurtma",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Kafedagi suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Birinchi mijoz avval nimani buyurtma qildi?", ["Tovuq sho'rvasi", "Salat", "Omlet", "Burger"]),
      hear("Sho'rva achchiqmi?", ["Yo'q", "Ha, juda", "Biroz", "Aytilmagan"]),
      hear("Asosiy taomga u nima oldi?", ["Baliq va kartoshka fri", "Palov", "Burger", "Sendvich"]),
      hear("Ikkinchi mijoz qanday taom so'radi?", ["Vegetarian taom", "Achchiq taom", "Shirinlik", "Go'shtli taom"]),
      hear("Kafeda qaysi vegetarian taomlar bor?", ["Sabzavotli palov va qo'ziqorinli omlet", "Salat va sho'rva", "Pitsa va makaron", "Faqat salat"]),
      hear("Ikkinchi mijoz nima oldi?", ["Omlet va salat", "Palov", "Faqat salat", "Sho'rva"]),
      hear("Birinchi mijoz nima ichadi?", ["Limonad", "Gazsiz suv", "Choy", "Qahva"]),
      hear("Do'sti uchun nima buyurtma qilindi?", ["Bir shisha gazsiz suv", "Gazli suv", "Choy", "Limonad"]),
      hear("Hisob qancha?", ["186 000 so'm", "168 000 so'm", "186 so'm", "210 000 so'm"]),
      hear("Ular qanday to'lashdi?", ["Karta bilan", "Naqd pul bilan", "Aytilmagan", "To'lashmadi"]),
    ],
  },
  {
    title: "Kafe haqida fikr",
    skill: "Matn bilan ishlash",
    kind: "truefalse",
    instructions: "Fikrni o'qing va gap to'g'ri yoki noto'g'ri ekanini belgilang.",
    questions: [
      tf("Laylo had lunch at the cafe last Saturday.", true),
      tf("Cafe Chinor is a big cafe near the station.", false, "It's a small cafe in the city centre."),
      tf("The prices were good.", true),
      tf("Laylo ordered a lentil soup and a chicken sandwich.", true),
      tf("Gulnoza eats meat.", false, "She's a vegetarian."),
      tf("Madina's chips were cold.", true),
      tf("The waiter was unfriendly.", false, "He was very nice and brought new chips."),
      tf("They all had ice cream for dessert.", false, "They had pancakes with honey."),
      tf("The bill was 210,000 so'm for three people.", true),
      tf("Laylo would like to go there again.", true),
    ],
  },
  {
    title: "Diktant",
    skill: "Yozish",
    kind: "dictation",
    instructions: "Gapni tinglang va eshitganingizni yozing.",
    questions: dictation([
      "I'd like a coffee.",
      "Would you like some tea?",
      "Yes, please.",
      "No, thank you.",
      "Here you are.",
      "The bill, please.",
      "Anything else?",
      "Still or sparkling?",
      "Can I pay by card?",
      "I'm thirsty.",
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "I'd like a coffee, please.",
      "Would you like some tea?",
      "Are you ready to order?",
      "Can we have the bill, please?",
      "No, thank you. That's all.",
      "Here you are.",
      "Can I pay by card?",
      "dessert",
      "receipt",
      "vegetarian",
    ]),
  },
];
