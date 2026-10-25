/**
 * A1, takror — butun A1 darajasi bo'yicha umumiy takrorlash.
 * Lug'at: bog'lovchilar va tartib so'zlari (because, so, but, then…),
 * eng kerakli fe'l va sifatlar. Mashqlar A1 grammatikasini aralash
 * tekshiradi: to be, have got, Present Simple, can, there is / are,
 * was / were, Past Simple, be going to, would like, predloglar.
 * Matn va mashqlar o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  dictation,
  hearing,
  listen,
  mistake,
  pairs,
  phrases,
  reading,
  say,
  sentences,
  trueFalse,
  w,
  written,
  type Rounds,
} from "./helpers";

export const A1_T_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("⏮️", "before", "bɪˈfɔː|bifoo", "predlog", "…dan oldin", "Earlier than.", "Wash your hands before dinner.", "Kechki ovqatdan oldin qo'lingni yuv."),
      w("➡️", "so", "səʊ|sou", "bog'lovchi", "Shuning uchun", "It gives the result.", "It was cold, so I stayed at home.", "Sovuq edi, shuning uchun uyda qoldim."),
      w("⏩", "after", "ˈɑːftə|aafta", "predlog", "…dan keyin", "Later than.", "We went for a walk after lunch.", "Tushlikdan keyin sayr qildik."),
      w("🔀", "or", "ɔː|oo", "bog'lovchi", "Yoki", "It gives a choice.", "Tea or coffee?", "Choymi yoki qahva?"),
      w("1️⃣", "at first", "ət ˈfɜːst|at fyorst", "ibora", "Avvaliga", "At the beginning.", "At first, English was difficult.", "Avvaliga ingliz tili qiyin edi."),
      w("⏱️", "until", "ənˈtɪl|antil", "predlog", "…gacha", "Up to a time.", "I waited until six o'clock.", "Soat oltigacha kutdim."),
      w("🔜", "after that", "ˈɑːftə ðæt|aafta zet", "ibora", "Shundan keyin", "Next; then.", "After that, I go to work.", "Shundan keyin ishga boraman."),
      w("🏁", "finally", "ˈfaɪnəli|faynali", "ravish", "Nihoyat, oxirida", "At the end.", "Finally, I go to bed.", "Oxirida uxlagani yotaman."),
      w("📝", "for example", "fər ɪɡˈzɑːmpl|far igzaampl", "ibora", "Masalan", "We use it to give an example.", "I like fruit, for example apples.", "Mevani yaxshi ko'raman, masalan, olmani."),
      w("🤷", "maybe", "ˈmeɪbi|meybi", "ravish", "Balki", "Perhaps; it's possible.", "Maybe it's going to rain.", "Balki yomg'ir yog'ar."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🤔", "think", "θɪŋk|sink", "fe'l", "O'ylamoq", "Have an idea or opinion.", "I think English is easy.", "Menimcha, ingliz tili oson."),
      w("☑️", "choose", "tʃuːz|chuuz", "fe'l", "Tanlamoq", "Decide which one you want.", "Choose the right answer.", "To'g'ri javobni tanlang."),
      w("🤦", "forget", "fəˈɡet|faget", "fe'l", "Unutmoq", "Not remember.", "Don't forget your keys!", "Kalitlaringni unutma!"),
      w("🫴", "keep", "kiːp|kiip", "fe'l", "Saqlamoq, o'zida qoldirmoq", "Have something and not give it back.", "You can keep this book.", "Bu kitobni o'zingda qoldirishing mumkin."),
      w("📨", "send", "send|send", "fe'l", "Yubormoq", "Make a letter or message go to someone.", "Send me a message.", "Menga xabar yubor."),
      w("🏆", "finish", "ˈfɪnɪʃ|finish", "fe'l", "Tugatmoq, tugamoq", "End something.", "I finish work at six.", "Ishni soat oltida tugataman."),
      w("📬", "bring", "brɪŋ|bring", "fe'l", "Olib kelmoq", "Take something to a place with you.", "Can you bring some bread?", "Non olib kela olasanmi?"),
      w("👣", "follow", "ˈfɒləʊ|folou", "fe'l", "Ortidan bormoq", "Go after someone.", "Follow me, please.", "Iltimos, ortimdan yuring."),
      w("🙌", "agree", "əˈɡriː|agrii", "fe'l", "Rozi bo'lmoq", "Have the same opinion.", "I agree with you.", "Sen bilan roziman."),
      w("🏃", "hurry", "ˈhʌri|hari", "fe'l", "Shoshilmoq", "Do something quickly.", "Hurry up! The bus is here!", "Shoshil! Avtobus keldi!"),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("👌", "simple", "ˈsɪmpl|simpl", "sifat", "Oddiy, oson", "Not difficult.", "It's a simple question.", "Bu oddiy savol."),
      w("🛠️", "useful", "ˈjuːsfl|yuusfl", "sifat", "Foydali", "Good for doing something.", "This book is very useful.", "Bu kitob juda foydali."),
      w("❗", "important", "ɪmˈpɔːtnt|impootnt", "sifat", "Muhim", "It matters a lot.", "Sleep is very important.", "Uyqu juda muhim."),
      w("✅", "ready", "ˈredi|redi", "sifat", "Tayyor", "Prepared.", "Dinner is ready!", "Kechki ovqat tayyor!"),
      w("🎯", "right", "raɪt|rayt", "sifat", "To'g'ri", "Correct.", "Your answer is right.", "Javobing to'g'ri."),
      w("❌", "wrong", "rɒŋ|rong", "sifat", "Noto'g'ri", "Not correct.", "Sorry, that's the wrong answer.", "Kechirasiz, bu noto'g'ri javob."),
      w("💯", "perfect", "ˈpɜːfɪkt|pyorfikt", "sifat", "Mukammal, a'lo", "Without any mistakes.", "Your English is perfect!", "Ingliz tiling a'lo!"),
      w("📌", "same", "seɪm|seym", "sifat", "Bir xil", "Not different.", "We were born in the same year.", "Biz bir yilda tug'ilganmiz."),
      w("🤷", "possible", "ˈpɒsəbl|posabl", "sifat", "Mumkin", "It can happen.", "Is it possible to pay by card?", "Karta bilan to'lash mumkinmi?"),
      w("🎉", "proud", "praʊd|praud", "sifat", "Faxrlangan", "Happy about what you or your family did.", "I'm proud of you!", "Sen bilan faxrlanaman!"),
    ],
  },
];

const STORY = `MY YEAR OF ENGLISH — by Otabek
A year ago I didn't know any English. I only knew "hello" and "thank you". Now I can talk about my family, my job and my plans!
I'm twenty-four, and I'm a nurse at a hospital in Samarkand. I've got a wife and a little daughter. We live in a small flat near the river.
Last October I started an English course because I wanted a better job. First, it was very difficult — the spelling was terrible! But I practised every day: I learned ten new words in the morning, and then I listened to English songs on the bus. After that, it was easier.
Last month I went to Tashkent and took a test. I passed it! My teacher said, "I'm proud of you."
Next year I'm going to apply for a job at an international clinic. I'd also like to visit London one day. My English isn't perfect, but I'm not going to stop!`;
const read = reading(STORY);

const CHAT = `Hi, Madina! Are you free on Saturday?
Yes, I am. Why?
It's my birthday, and I'm going to have a party. Would you like to come?
Oh, I'd love to! Thank you! Where is it going to be?
At my house. There's a big garden, so we're going to eat outside.
What time does it start?
At five o'clock. My mum is going to make plov, and my sister is going to bring a cake.
Great! Can I bring anything?
Can you bring some music? You've got a good speaker.
Of course! Oh, how old are you going to be?
Twenty! And last year I was at your party, remember? It was fantastic!
Yes, I remember! OK, see you on Saturday!`;
const hear = hearing(CHAT);

const NOTE = `Hi Mum,
I'm at college now. I'm sorry, I didn't make the bed this morning because I got up late. I had an omelette for breakfast, and I left the plates in the kitchen. Sorry!
After college I'm going to go to the library with Aziza. We've got an important exam on Monday. Then I'm going to buy some bread — there isn't any at home.
I'm going to be home at seven. Can we have soup for dinner? I'd really like soup!
Love,
Nodira`;
const tf = trueFalse(NOTE);

export const A1_T_EXERCISES: SeedExercise[] = [
  {
    title: "Nima eshitildi?",
    skill: "Tinglash",
    kind: "listen",
    instructions: "Gap o'qiladi. Eshitganingizni toping. Zamonga quloq soling.",
    questions: [
      listen("She works in a bank.", ["She works in a bank.", "She worked in a bank.", "She's going to work in a bank.", "She'd like to work in a bank."]),
      listen("We went to Bukhara.", ["We went to Bukhara.", "We go to Bukhara.", "We're going to Bukhara.", "We want Bukhara."]),
      listen("I'm going to call him.", ["I'm going to call him.", "I called him.", "I call him.", "I can call him."]),
      listen("He can't swim.", ["He can't swim.", "He can swim.", "She can't swim.", "He doesn't swim."]),
      listen("There were two cats.", ["There were two cats.", "There are two cats.", "There was a cat.", "They were two cats."]),
      listen("I'd like some tea.", ["I'd like some tea.", "I like some tea.", "I liked tea.", "I'd like to see."]),
      listen("Did you see it?", ["Did you see it?", "Do you see it?", "Can you see it?", "Are you going to see it?"]),
      listen("She hasn't got a car.", ["She hasn't got a car.", "She has got a car.", "She didn't get a car.", "He hasn't got a car."]),
      listen("They weren't at home.", ["They weren't at home.", "They aren't at home.", "They were at home.", "There weren't at home."]),
      listen("because", ["because", "become", "be cause", "begin"]),
    ],
  },
  {
    title: "Qaysi zamon?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Vaqt so'ziga qarab, to'g'ri shaklni tanlang.",
    questions: [
      say("I ___ to work every day.", ["go", "went", "am going to go", "goes"]),
      say("I ___ to Samarkand last week.", ["went", "go", "am going to go", "goes"]),
      say("I ___ to Samarkand next week.", ["am going to go", "went", "go", "goes"]),
      say("She ___ English every evening.", ["studies", "studied", "is going to study", "study"]),
      say("Yesterday she ___ English for three hours.", ["studied", "studies", "study", "is going to study"]),
      say("___ you at home last night?", ["Were", "Are", "Did", "Do"]),
      say("___ you go out last night?", ["Did", "Were", "Do", "Are"]),
      say("___ you like coffee? — Yes, I love it.", ["Do", "Would", "Are", "Did"]),
      say("___ you like a coffee? — Yes, please.", ["Would", "Do", "Are", "Did"]),
      say("Look at the clouds! It ___ rain.", ["is going to", "rained", "rains", "was"]),
    ],
  },
  {
    title: "Savollar",
    skill: "Grammatika",
    kind: "choice",
    instructions: "To'g'ri savolni tanlang.",
    questions: [
      say("Ismini so'rang:", ["What's your name?", "What your name is?", "What is name your?", "How is your name?"]),
      say("Yoshini so'rang:", ["How old are you?", "How many years you have?", "What old are you?", "How old you are?"]),
      say("Ishini so'rang:", ["What do you do?", "What you do?", "What are you do?", "What does you do?"]),
      say("Akasi bormi?", ["Have you got a brother?", "Do you got a brother?", "Are you have a brother?", "Has you got a brother?"]),
      say("Suzishni biladimi?", ["Can you swim?", "Do you can swim?", "Are you swim?", "You can swim?"]),
      say("Yaqinda bank bormi?", ["Is there a bank near here?", "Are there a bank near here?", "There is a bank near here?", "Is it a bank near here?"]),
      say("Kecha qayerda edi?", ["Where were you yesterday?", "Where was you yesterday?", "Where did you yesterday?", "Where you were yesterday?"]),
      say("Kecha nima qildi?", ["What did you do yesterday?", "What you did yesterday?", "What did you did yesterday?", "What do you did yesterday?"]),
      say("Ertaga nima qilmoqchi?", ["What are you going to do tomorrow?", "What you going to do tomorrow?", "What do you going to do tomorrow?", "What are you go to do tomorrow?"]),
      say("Nima ichishni xohlaydi?", ["What would you like to drink?", "What would you like drink?", "What do you would like?", "What you'd like to drink?"]),
    ],
  },
  {
    title: "Fe'lning to'g'ri shakli",
    skill: "Grammatika",
    kind: "fill",
    instructions: "Qavsdagi fe'lni to'g'ri shaklda yozing.",
    questions: written([
      ["My brother ___ in a hospital. (work — har kuni)", "works"],
      ["We ___ a great time last summer. (have)", "had"],
      ["I ___ at home yesterday. (be)", "was"],
      ["They ___ at the party last night. (be)", "were"],
      ["She doesn't ___ meat. (eat)", "eat"],
      ["Did you ___ the film? (see)", "see"],
      ["I'm going to ___ a new phone. (buy)", "buy"],
      ["He can ___ three languages. (speak)", "speak"],
      ["I'd like ___ order, please.", "to"],
      ["My sister ___ got two children. (have)", "has"],
    ]),
  },
  {
    title: "Bog'lovchilar",
    skill: "Lug'at",
    kind: "choice",
    instructions: "Gapni to'g'ri bog'lovchi bilan to'ldiring.",
    questions: [
      say("I was tired, ___ I went to bed early.", ["so", "because", "but", "or"]),
      say("I went to bed early ___ I was tired.", ["because", "so", "but", "or"]),
      say("I like tea, ___ I don't like coffee.", ["but", "so", "because", "or"]),
      say("Would you like tea ___ coffee?", ["or", "but", "so", "because"]),
      say("___, I get up. Then I have breakfast.", ["First", "Finally", "Too", "But"]),
      say("I have breakfast, and ___ I go to work.", ["then", "first", "too", "or"]),
      say("___, I go to bed at eleven.", ["Finally", "First", "Because", "Or"]),
      say("I'm hungry. — Me ___!", ["too", "also", "so", "then"]),
      say("She speaks English. She ___ speaks Korean.", ["also", "too", "so", "or"]),
      say("It was raining, ___ we didn't go out.", ["so", "because", "or", "first"]),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Juftlarni ulang.",
    questions: pairs([
      ["because|chunki", "so|shuning uchun", "but|lekin", "or|yoki"],
      ["first|avval", "then|keyin", "finally|oxirida", "also|shuningdek"],
      ["easy|oson", "difficult|qiyin", "right|to'g'ri", "wrong|noto'g'ri"],
      ["need|kerak bo'lmoq", "wait|kutmoq", "bring|olib kelmoq", "agree|rozi bo'lmoq"],
      ["go|went", "see|saw", "buy|bought", "make|made"],
      ["am|was", "are|were", "have|had", "is|was"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("She *don't like coffee.", "she → doesn't."),
      mistake("I *am agree with you.", "I agree — am kerak emas."),
      mistake("There *is two banks in our street.", "Ko'plik: There are."),
      mistake("He *can to swim very well.", "can + fe'l: He can swim."),
      mistake("We *was at home yesterday.", "we → were."),
      mistake("Did you *went to the party?", "Did + go."),
      mistake("I'm going to *visited my aunt.", "going to + visit."),
      mistake("She *have got a new car.", "she → has got."),
      mistake("I *like a coffee, please.", "Xohish: I'd like."),
      mistake("I was late *so I missed the bus.", "Sabab: because."),
    ],
  },
  {
    title: "Kundalik suhbatlar",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("Nice to meet you!", ["Nice to meet you too!", "Me too meet.", "Fine, thanks.", "Goodbye!"]),
      say("Where are you from?", ["I'm from Uzbekistan.", "I from Uzbekistan.", "I'm Uzbek from.", "Yes, I am."]),
      say("What do you do?", ["I'm a nurse.", "I do nurse.", "I'm fine.", "I'm doing."]),
      say("Can you speak Russian?", ["Yes, I can. A little.", "Yes, I speak can.", "Yes, I do can.", "Yes, I can speaking."]),
      say("What did you do at the weekend?", ["I visited my grandparents.", "I visit my grandparents.", "I'm going to visit them.", "I'd like to visit."]),
      say("What are you going to do tomorrow?", ["I'm going to study.", "I studied.", "I study yesterday.", "I'd study."]),
      say("Would you like some tea?", ["Yes, please.", "Yes, I like.", "Yes, I would like.", "Yes, I do."]),
      say("Why are you late?", ["Because I missed the bus.", "So I missed the bus.", "Because I miss the bus tomorrow.", "But I missed the bus."]),
      say("I passed my exam!", ["Congratulations! I'm proud of you!", "What a pity!", "Get well soon!", "Never mind."]),
      say("Excuse me, is there a pharmacy near here?", ["Yes, there is. It's next to the bank.", "Yes, it is.", "Yes, there are.", "Yes, I am."]),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "I usually get up at seven.",
      "She has got two brothers.",
      "There are three rooms in our flat.",
      "Can you play the guitar?",
      "We were at home last night.",
      "I didn't go to college yesterday.",
      "I'm going to visit my aunt next week.",
      "I'd like a coffee, please.",
      "It was cold, so I stayed at home.",
      "I was late because I missed the bus.",
    ]),
  },
  {
    title: "Otabekning bir yili",
    skill: "Matn bilan ishlash",
    kind: "reading",
    instructions: "Matnni diqqat bilan o'qing va har bir savolga javob bering.",
    questions: [
      read("What English did Otabek know a year ago?",["Only «hello» and «thank you»", "Nothing", "A lot of things", "The text doesn't say."]),
      read("What is his job?", ["He's a nurse.", "He's a doctor.", "He's a teacher.", "He's a driver."]),
      read("Where does he live?", ["In a small flat near the river", "In a big house", "In Tashkent", "With his parents"]),
      read("Why did he start an English course?", ["He wanted a better job.", "He wanted to visit London.", "His wife said so.", "The text doesn't say."]),
      read("What was very difficult at first?", ["The spelling", "The grammar", "The listening", "The speaking"]),
      read("What did he do on the bus?", ["Listened to English songs", "Learned new words", "Read books", "Slept"]),
      read("When did he take the test?", ["Last month", "Last October", "A year ago", "Next year"]),
      read("Where did he take the test?", ["In Tashkent", "In Samarkand", "In London", "Online"]),
      read("What is he going to do next year?", ["Apply for a job at an international clinic", "Visit London", "Stop English", "Move to Tashkent"]),
      read("What would he like to do one day?", ["Visit London", "Be a teacher", "Buy a house", "Go to university"]),
    ],
  },
  {
    title: "Tug'ilgan kunga taklif",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Bazm qaysi kuni?", ["Shanba kuni", "Juma kuni", "Yakshanba kuni", "Bugun"]),
      hear("Bazm nima munosabati bilan?", ["Tug'ilgan kun", "To'y", "Yangi yil", "Imtihon"]),
      hear("Bazm qayerda bo'ladi?", ["Uyda", "Kafeda", "Parkda", "Restoranda"]),
      hear("Nima uchun ular tashqarida ovqatlanishadi?", ["Katta bog' bor", "Uy kichkina", "Havo issiq", "Aytilmagan"]),
      hear("Bazm soat nechada boshlanadi?", ["Beshda", "Oltida", "Yettida", "To'rtda"]),
      hear("Kim palov pishiradi?", ["Onasi", "Opasi", "Madina", "Buvisi"]),
      hear("Tortni kim olib keladi?", ["Singlisi", "Madina", "Onasi", "Do'sti"]),
      hear("Madina nima olib kelishi kerak?", ["Musiqa", "Tort", "Gullar", "Ichimlik"]),
      hear("U necha yoshga to'ladi?", ["20", "19", "21", "18"]),
      hear("O'tgan yil u qayerda edi?", ["Madinaning bazmida", "Uyida", "Toshkentda", "Chet elda"]),
    ],
  },
  {
    title: "Nodiraning xati",
    skill: "Matn bilan ishlash",
    kind: "truefalse",
    instructions: "Xatni o'qing va gap to'g'ri yoki noto'g'ri ekanini belgilang.",
    questions: [
      tf("Nodira is at college now.", true),
      tf("She made the bed this morning.", false, "She didn't make the bed."),
      tf("She got up late.", true),
      tf("She had pancakes for breakfast.", false, "She had an omelette."),
      tf("She washed the plates.", false, "She left them in the kitchen."),
      tf("She's going to go to the library after college.", true),
      tf("Her exam is on Friday.", false, "It's on Monday."),
      tf("There isn't any bread at home.", true),
      tf("She's going to be home at seven.", true),
      tf("She'd like soup for dinner.", true),
    ],
  },
  {
    title: "Diktant",
    skill: "Yozish",
    kind: "dictation",
    instructions: "Gapni tinglang va eshitganingizni yozing.",
    questions: dictation([
      "I'm a student.",
      "She has got a sister.",
      "Can you help me?",
      "There is a bank near here.",
      "We were at home.",
      "I didn't see him.",
      "I'm going to study.",
      "I'd like some water.",
      "because",
      "finally",
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "My name is Aziz. I'm from Uzbekistan.",
      "I usually get up at seven.",
      "I can speak English.",
      "Yesterday I went to the market.",
      "I'm going to visit my friend.",
      "I'd like a coffee, please.",
      "I was late because I missed the bus.",
      "I'm proud of you!",
      "difficult",
      "important",
    ]),
  },
];
