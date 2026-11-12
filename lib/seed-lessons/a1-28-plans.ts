/**
 * A1, 28-dars — «Rejalar: going to». Navigate A1, 10.1 «We're going to raise
 * £5,000» asosida: loyihalar uchun pul yig'ish sayti, Roxanne va Shaun
 * loyihalari, Gvatemalada ko'ngillilik, kelasi zamon vaqt iboralari
 * (tomorrow, next week…), gapning egasini topish. Grammatika: be going to
 * + fe'l — darak va inkor; «to» ning kuchsiz aytilishi. Tinglash
 * mashqlarida kitob treklari (yopiq ombordan), savollar va matnlar
 * o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  gaps,
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

export const A1_28_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🔮", "going to", "ˈɡəʊɪŋ tə|gouing ta", "ibora", "…moqchi (reja)", "Used to talk about future plans.", "She's going to travel around Europe.", "U Yevropa bo'ylab sayohat qilmoqchi."),
      w("📋", "project", "ˈprɒdʒekt|projekt", "ot", "Loyiha", "A planned piece of work.", "We need $3,500 for this project.", "Bu loyiha uchun 3500 dollar kerak."),
      w("💰", "raise", "reɪz|reyz", "fe'l", "Yig'moq (pul)", "Collect money for something.", "We're going to raise £5,000.", "Biz 5000 funt yig'moqchimiz."),
      w("🚌", "tour", "tʊə|tua", "ot", "Gastrol, sayohat", "A trip to visit many places.", "They can't pay for the hotels during the tour.", "Ular gastrol paytida mehmonxona haqini to'lay olmaydi."),
      w("🏢", "organization", "ˌɔːɡənaɪˈzeɪʃn|ooganayzeyshn", "ot", "Tashkilot", "A group of people working together.", "It's an international organization for dogs.", "Bu itlar uchun xalqaro tashkilot."),
      w("🌍", "environment", "ɪnˈvaɪrənmənt|invayranmant", "ot", "Atrof-muhit", "The air, water and land around us.", "We're going to study the environment there.", "U yerdagi atrof-muhitni o'rganmoqchimiz."),
      w("🎯", "goal", "ɡəʊl|goul", "ot", "Maqsad", "Something you want to do.", "$40,000 is our goal.", "Maqsadimiz — 40 000 dollar."),
      w("🏗️", "build", "bɪld|bild", "fe'l", "Qurmoq", "Make a building or a thing.", "We're going to build a new front for the café.", "Kafe uchun yangi old qism qurmoqchimiz."),
      w("🔥", "popular", "ˈpɒpjələ|popyala", "sifat", "Mashhur, ommabop", "Liked by a lot of people.", "It was a very popular café.", "Bu juda ommabop kafe edi."),
      w("😋", "enjoy", "ɪnˈdʒɔɪ|injoy", "fe'l", "Zavqlanmoq, rohatlanmoq", "Like doing or having something.", "Everyone can enjoy great coffee again.", "Hamma yana ajoyib qahvadan zavq oladi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("📅", "today", "təˈdeɪ|tadey", "ravish", "Bugun", "This day.", "I'm going to study today.", "Bugun dars qilmoqchiman."),
      w("🌆", "this evening", "ðɪs ˈiːvnɪŋ|zis iivning", "ibora", "Bugun kechqurun", "Later today, in the evening.", "This evening, I'm going to play football.", "Bugun kechqurun futbol o'ynamoqchiman."),
      w("➡️", "tomorrow", "təˈmɒrəʊ|tamorou", "ravish", "Ertaga", "The day after today.", "I'm not going to come to class tomorrow.", "Ertaga darsga kelmayman."),
      w("⏩", "the day after tomorrow", "ðə ˌdeɪ ˌɑːftə təˈmɒrəʊ|za dey aafta tamorou", "ibora", "Indinga", "In two days.", "The day after tomorrow my parents are going to visit me.", "Indinga ota-onam meni ko'rgani kelishadi."),
      w("3️⃣", "in three days", "ɪn ˌθriː ˈdeɪz|in srii deyz", "ibora", "Uch kundan keyin", "Three days from now.", "We're going to leave in three days.", "Biz uch kundan keyin jo'naymiz."),
      w("📆", "next week", "ˌnekst ˈwiːk|nekst uiik", "ibora", "Kelasi hafta", "The week after this week.", "Oliver is going to email you next week.", "Oliver sizga kelasi hafta xat yozadi."),
      w("🗓️", "next month", "ˌnekst ˈmʌnθ|nekst mans", "ibora", "Kelasi oy", "The month after this month.", "Next month I'm going to travel to the Arctic.", "Kelasi oy Arktikaga sayohat qilmoqchiman."),
      w("🎆", "next year", "ˌnekst ˈjɪə|nekst yia", "ibora", "Kelasi yil", "The year after this year.", "Next year she has a chance to go to Europe.", "Kelasi yil uning Yevropaga borish imkoni bor."),
      w("🔭", "future", "ˈfjuːtʃə|fyuucha", "ot", "Kelajak", "The time after now.", "They want to visit different countries in the future.", "Ular kelajakda turli mamlakatlarga bormoqchi."),
      w("📝", "plan", "plæn|plen", "ot, fe'l", "Reja; rejalashtirmoq", "Something you decide to do in the future.", "What's your plan for the weekend?", "Dam olish kunlari uchun rejangiz qanday?"),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🍀", "chance", "tʃɑːns|chaans", "ot", "Imkoniyat", "A time when you can do something.", "She has a chance to go to Europe and sing.", "Uning Yevropaga borib qo'shiq aytish imkoni bor."),
      w("🎤", "singer", "ˈsɪŋə|singa", "ot", "Xonanda", "A person who sings.", "Roxanne is a young singer.", "Roksanna — yosh xonanda."),
      w("🇪🇺", "Europe", "ˈjʊərəp|yuarap", "ot", "Yevropa", "The continent with France, Spain, Italy…", "She's going to travel around Europe.", "U Yevropa bo'ylab sayohat qilmoqchi."),
      w("🧊", "Arctic", "ˈɑːktɪk|aaktik", "ot", "Arktika", "The very cold area in the far north.", "Shaun is going to travel to the Arctic.", "Shon Arktikaga sayohat qilmoqchi."),
      w("🏪", "front", "frʌnt|frant", "ot", "Old tomon, peshtoq", "The part of a building that faces the street.", "The café needs a new front.", "Kafega yangi old tomon kerak."),
      w("🤔", "guess", "ɡes|ges", "fe'l", "Taxmin qilmoq", "Say what you think without knowing.", "Guess what your partner is going to do.", "Sherigingiz nima qilmoqchi ekanini taxmin qiling."),
      w("✔️", "true", "truː|truu", "sifat", "To'g'ri, rost", "Correct; not false.", "Write two true sentences.", "Ikkita to'g'ri gap yozing."),
      w("✖️", "false", "fɔːls|fools", "sifat", "Noto'g'ri, yolg'on", "Not true.", "False. I'm going to visit them on Sunday.", "Noto'g'ri. Men ularni yakshanba kuni ko'rgani boraman."),
      w("🏛️", "department", "dɪˈpɑːtmənt|dipaatmant", "ot", "Bo'lim, kafedra", "A part of a university or company.", "The English department is going to travel to Italy.", "Ingliz tili kafedrasi Italiyaga boradi."),
      w("🌙", "tonight", "təˈnaɪt|tanayt", "ravish", "Bugun kechasi", "This evening or night.", "I'm going to cook tonight.", "Bugun kechqurun ovqat pishiraman."),
    ],
  },
];

const PROJECTS = `SEND ROXANNE TO EUROPE TO SING!
Roxanne loves singing, and next year she has a chance to go to Europe and sing. She's going to travel around Europe with a music group. They're going to visit five cities in five different countries. The group has money for the flights, but they can't pay for the hotels or food during the tour. We need $3,500 for this project. Help us with Roxanne's dream!
Money raised: $1,875 of $3,500

WALKING WITH DOGS IN THE ARCTIC
Hello! My name is Shaun and next month I'm going to travel to the Arctic. That's right! But I'm not going to do this as a holiday! I'm going to walk 150 kilometres with a group of three scientists and twenty Arctic dogs to help an international organization for dogs. We're going to visit the Brooks Range Mountains in Alaska and study the environment there. We're also going to write a blog about it.
Money raised: £340 of £5,000`;
const read = reading(PROJECTS);

const CAFE = `SAVE THE CHINOR CAFÉ
My name is Jasur and I need your help. The Chinor Café first opened its doors in 1964 and it was a very popular café in the centre of our town. It is now closed, but a group of neighbours and I would like to open it again because we love this place. But we are going to need money. $40,000 is our goal. With this money, we are going to build a new front for the café. We are also going to pay for new tables, chairs and a coffee machine. In eight months, the Chinor Café is going to open to the public and everyone can enjoy great tea and coffee again.`;
const cafe = reading(CAFE);

export const A1_28_EXERCISES: SeedExercise[] = [
  {
    title: "Ikki loyiha",
    skill: "O'qish",
    kind: "reading",
    instructions: "Pul yig'ish saytidagi ikki loyiha haqida o'qing. Qaysi loyiha (Roxanne yoki Shaun)?",
    questions: [
      read("Which project raises money to help animals?", ["Shaun's", "Roxanne's", "Both", "Neither"]),
      read("Which project is about a music group tour?", ["Roxanne's", "Shaun's", "Both", "Neither"]),
      read("Which project needs money for hotels and food?", ["Roxanne's", "Shaun's", "Both", "Neither"]),
      read("Which project has a blog?", ["Shaun's", "Roxanne's", "Both", "Neither"]),
      read("How many cities is Roxanne's group going to visit?", ["Five", "Three", "Twenty", "The text doesn't say."]),
      read("Is Shaun going on holiday?", ["No, he isn't.", "Yes, he is.", "Yes, with dogs.", "The text doesn't say."]),
      read("How far is Shaun going to walk?", ["150 kilometres", "15 kilometres", "1,500 kilometres", "The text doesn't say."]),
      read("Which project has more money now (in its currency)?", ["Roxanne's — $1,875", "Shaun's — £340", "They have the same.", "The text doesn't say."]),
    ],
  },
  {
    title: "going to: darak va inkor",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Reja: am / is / are + going to + fe'l. Inkor: 'm not / isn't / aren't going to.",
    questions: [
      say("She ___ going to travel around Europe.", ["'s", "'re", "'m", "—"]),
      say("They ___ going to visit five cities.", ["'re", "'s", "'m", "be"]),
      say("I'm not going ___ do this as a holiday!", ["to", "for", "—", "at"]),
      say("We're going to ___ a blog about it.", ["write", "writing", "writes", "wrote"]),
      say("He ___ going to ask for money.", ["isn't", "aren't", "don't", "not"]),
      say("We ___ going to take mobile phones.", ["aren't", "isn't", "don't", "not"]),
      say("I ___ going to be a volunteer in Guatemala.", ["'m", "'s", "'re", "be"]),
      say("The group is going to ___ with local people.", ["work", "works", "working", "to work"]),
      say("Qaysi gap to'g'ri?", ["We're going to raise £5,000.", "We going to raise £5,000.", "We're going raise £5,000.", "We're go to raise £5,000."]),
      say("Qaysi gap to'g'ri?", ["She isn't going to sing.", "She doesn't going to sing.", "She not going to sing.", "She isn't going sing."]),
    ],
  },
  {
    title: "Gvatemalada ko'ngilli",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Talaba kelgusi yozgi rejasi haqida gapiradi. Tinglang va to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("10.1"), [
        ["I study international ___.", "relations", "business", "languages"],
        ["I'm going to be a volunteer in ___ next summer.", "Guatemala", "Mexico", "Peru"],
        ["My friend and I ___ going to join a group there.", "are", "is", "am"],
        ["The group is going to work with local people in the ___.", "mountains", "city", "forest"],
        ["We're going to be there for ___ weeks.", "three", "two", "four"],
        ["We aren't going to take mobile phones or ___.", "computers", "money", "cameras"],
        ["We need $___ for this project.", "2,000", "20,000", "200"],
        ["We're going to use the money to pay for flights and ___.", "transport", "hotels", "food"],
      ]),
    ],
  },
  {
    title: "«to» qanday aytiladi?",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "going to dagi «to» odatda kuchsiz, qisqa aytiladi. Tinglang va to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("10.2"), [
        ["1. She's going to travel to ___.", "Europe", "Asia", "Africa"],
        ["2. They're going to visit ___ cities.", "five", "nine", "four"],
        ["3. We're going to write a ___.", "blog", "book", "letter"],
      ]),
    ],
  },
  {
    title: "Vaqt iboralari",
    skill: "Tinglash",
    kind: "listenmatch",
    instructions: "Kelasi zamon vaqt iboralari hozirdan boshlab tartib bilan aytiladi. Tinglang va har bir raqamga yozing.",
    questions: [
      slots(track("10.3"), [
        ["1.", "today"],
        ["2.", "this evening"],
        ["3.", "tomorrow"],
        ["4.", "the day after tomorrow"],
        ["5.", "in three days"],
        ["6.", "next week"],
        ["7.", "next month"],
        ["8.", "next year"],
      ]),
    ],
  },
  {
    title: "Gap yozing",
    skill: "Grammatika",
    kind: "type",
    instructions: "going to bilan qisqa shaklda gap yozing. (+) reja bor, (−) reja yo'q.",
    questions: written([
      ["I / be a volunteer (+)", "I'm going to be a volunteer.|I am going to be a volunteer."],
      ["my friend and I / join a group (+)", "My friend and I are going to join a group."],
      ["we / take mobile phones (−)", "We aren't going to take mobile phones.|We're not going to take mobile phones.|We are not going to take mobile phones."],
      ["she / sing in Europe (+)", "She's going to sing in Europe.|She is going to sing in Europe."],
      ["he / ask for money (−)", "He isn't going to ask for money.|He's not going to ask for money.|He is not going to ask for money."],
      ["they / visit five cities (+)", "They're going to visit five cities.|They are going to visit five cities."],
      ["I / study English / next year (+)", "I'm going to study English next year.|I am going to study English next year."],
      ["we / have an exam / the day after tomorrow (+)", "We're going to have an exam the day after tomorrow.|We are going to have an exam the day after tomorrow."],
      ["I / come to class / tomorrow (−)", "I'm not going to come to class tomorrow.|I am not going to come to class tomorrow."],
      ["I / see my family / next weekend (+)", "I'm going to see my family next weekend.|I am going to see my family next weekend."],
    ]),
  },
  {
    title: "Kafeni qutqaraylik",
    skill: "O'qish",
    kind: "reading",
    instructions: "Matnni o'qing. Har bir fe'lning egasini (kim / nima?) toping.",
    questions: [
      cafe("Who needs your help?", ["Jasur", "The café", "The neighbours", "The town"]),
      cafe("What did the Chinor Café do in 1964?", ["It first opened its doors.", "It closed.", "It got a new front.", "It moved to the centre."]),
      cafe("Who wants to open the café again?", ["Jasur and a group of neighbours", "The town", "A big company", "The text doesn't say."]),
      cafe("What is their goal?", ["$40,000", "$4,000", "$400,000", "Eight months"]),
      cafe("What are they going to build?", ["A new front for the café", "A new café", "A new town centre", "A coffee machine"]),
      cafe("When is the café going to open?", ["In eight months", "Next week", "In 1964", "Tomorrow"]),
      cafe("Who is going to enjoy great tea and coffee again?", ["Everyone", "Only Jasur", "Only the neighbours", "Only tourists"]),
      cafe("«It is now closed» — what is the subject?", ["It (the café)", "now", "closed", "Jasur"]),
    ],
  },
  {
    title: "Ega qaysi?",
    skill: "O'qish",
    kind: "choice",
    instructions: "Har bir fe'lning egasi bor. «Kim / nima + fe'l?» deb so'rang. Gapning egasini tanlang.",
    questions: [
      say("Next weekend, my wife's parents are going to buy a new car.", ["my wife's parents", "Next weekend", "a new car", "my wife"]),
      say("All my friends have got laptops.", ["All my friends", "laptops", "my", "All"]),
      say("Did Roxanne raise the money for her project?", ["Roxanne", "the money", "her project", "Did"]),
      say("Next month, the English department of the university is going to travel to Italy.", ["the English department of the university", "Next month", "Italy", "the university"]),
      say("Where are the musicians from?", ["the musicians", "Where", "from", "are"]),
      say("We are going to join a group of scientists.", ["We", "a group", "scientists", "going"]),
      say("Rebecca and her friends want to visit different countries.", ["Rebecca and her friends", "Rebecca", "different countries", "her friends"]),
      say("Shaun is going to walk 150 kilometres.", ["Shaun", "150 kilometres", "walk", "going"]),
    ],
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("Next year I'm going *study English.", "going to + fe'l: going to study."),
      mistake("She *going to travel around Europe.", "be kerak: She's going to…"),
      mistake("We're going to *visiting five cities.", "going to + fe'l (o'zgarmagan): visit."),
      mistake("They *isn't going to take phones.", "they → aren't."),
      mistake("I *don't going to ask for money.", "Inkor: I'm not going to…"),
      mistake("We're going to have an exam the day *after.", "the day after tomorrow."),
      mistake("I'm going to see my family *last weekend.", "Kelasi — next weekend."),
      mistake("He *are going to write a blog.", "he → is."),
      mistake("I'm going to *came to class tomorrow.", "going to + come."),
      mistake("My English class *going to watch a film.", "is kerak: My English class is going to…"),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Juftlarni ulang.",
    questions: pairs([
      ["today|bugun", "tomorrow|ertaga", "the day after tomorrow|indinga", "next week|kelasi hafta"],
      ["I|'m going to", "she|'s going to", "they|'re going to", "we|aren't going to"],
      ["project|loyiha", "goal|maqsad", "raise money|pul yig'moq", "organization|tashkilot"],
      ["Roxanne|sing in Europe", "Shaun|walk with dogs", "The student|volunteer in Guatemala", "Jasur|open the café again"],
      ["true|to'g'ri", "false|noto'g'ri", "guess|taxmin qilmoq", "future|kelajak"],
    ]),
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "She's going to travel to Europe.",
      "They're going to visit five cities.",
      "We're going to write a blog.",
      "I'm not going to do this as a holiday.",
      "We're going to raise £5,000.",
      "This evening, I'm going to play football.",
      "Next year I'm going to study Spanish.",
      "I'm going to visit my parents on Sunday.",
      "You aren't going to visit your parents.",
      "The café is going to open in eight months.",
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting. going to dagi «to» ni qisqa ayting.",
    questions: phrases([
      "She's going to travel to Europe.",
      "They're going to visit five cities.",
      "We're going to write a blog.",
      "I'm not going to ask for money.",
      "today, this evening, tomorrow",
      "the day after tomorrow",
      "in three days, next week",
      "next month, next year",
      "This evening, I'm going to play football.",
      "What are your plans for the weekend?",
    ]),
  },
];
