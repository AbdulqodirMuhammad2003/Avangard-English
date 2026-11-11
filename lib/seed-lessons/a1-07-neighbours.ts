/**
 * A1, 7-dars — «Qo'shnilarim: have got». Navigate A1, 3.1 «My neighbours»
 * asosida: sifat + ot birikmalari (a clever woman), noto'g'ri ko'plik
 * (man → men), qo'shnilar haqida gapirish, matndagi kalit so'zlar.
 * Grammatika: have got / has got (darak gap). Tinglash mashqlarida kitob
 * treklari (yopiq ombordan), savollar va matnlar o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  gaps,
  hearing,
  hearingTwo,
  listen,
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

export const A1_07_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🧠", "clever", "ˈklevə|kleva", "sifat", "Aqlli", "Quick to learn and understand.", "Syreeta is a clever woman.", "Sirita — aqlli ayol."),
      w("😂", "funny", "ˈfʌni|fani", "sifat", "Kulgili, qiziq", "It makes you laugh.", "It's a funny film.", "Bu kulgili film."),
      w("🐕", "friendly", "ˈfrendli|frendli", "sifat", "Do'stona, mehribon", "Kind and nice to other people.", "It's a friendly dog.", "Bu mehribon it."),
      w("🏋️", "hard", "hɑːd|haad", "sifat", "Og'ir, qiyin", "Not easy; it needs a lot of work.", "It's a hard job.", "Bu og'ir ish."),
      w("🥰", "lovely", "ˈlʌvli|lavli", "sifat", "Yoqimli, juda chiroyli", "Very nice.", "Bengaluru is a lovely city.", "Bengaluru — juda yoqimli shahar."),
      w("🙂", "nice", "naɪs|nays", "sifat", "Yaxshi, yoqimli", "Good, pleasant.", "It's a nice place.", "Bu yaxshi joy."),
      w("🤓", "interesting", "ˈɪntrəstɪŋ|intrasting", "sifat", "Qiziqarli", "You want to know more about it.", "Sophia has got an interesting house.", "Sofiyaning qiziqarli uyi bor."),
      w("🤫", "quiet", "ˈkwaɪət|kuayat", "sifat", "Sokin, jim", "Not noisy.", "She's got a quiet room.", "Uning sokin xonasi bor."),
      w("👩", "woman", "ˈwʊmən|uuman", "ot", "Ayol (ko'pligi: women)", "An adult female person.", "She's a clever woman.", "U aqlli ayol."),
      w("👨", "man", "mæn|men", "ot", "Erkak (ko'pligi: men)", "An adult male person.", "He's a friendly man.", "U mehribon erkak."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🏘️", "neighbour", "ˈneɪbə|neyba", "ot", "Qo'shni", "A person who lives near you.", "Antony's my neighbour.", "Antoni — mening qo'shnim."),
      w("🏢", "flat", "flæt|flet", "ot", "Kvartira", "Rooms to live in, in a big building.", "We've got a flat near Notre-Dame.", "Bizning Notr-Dam yaqinida kvartiramiz bor."),
      w("🏬", "building", "ˈbɪldɪŋ|bilding", "ot", "Bino", "A house, a school, an office… with walls and a roof.", "There are twenty flats in the building.", "Binoda yigirmata kvartira bor."),
      w("🏠", "house", "haʊs|xaus", "ot", "Uy (hovli)", "A building where a family lives.", "They've got a lovely house.", "Ularning chiroyli uyi bor."),
      w("🌷", "garden", "ˈɡɑːdn|gaadn", "ot", "Bog', hovli", "Land next to a house with flowers or grass.", "She's got a nice garden.", "Uning yaxshi bog'i bor."),
      w("🏡", "village", "ˈvɪlɪdʒ|vilij", "ot", "Qishloq", "A very small town in the country.", "This is my village.", "Bu mening qishlog'im."),
      w("🧒", "child", "tʃaɪld|chayld", "ot", "Bola (ko'pligi: children)", "A young boy or girl.", "They've got one child.", "Ularning bitta bolasi bor."),
      w("🐾", "pet", "pet|pet", "ot", "Uy hayvoni", "An animal you have at home.", "Has she got a pet?", "Uning uy hayvoni bormi?"),
      w("🐶", "dog", "dɒɡ|dog", "ot", "It", "An animal that says «woof».", "They've got a dog called Benji.", "Ularning Benji ismli iti bor."),
      w("🐱", "cat", "kæt|ket", "ot", "Mushuk", "A small animal that says «miaow».", "He's got a nice cat.", "Uning chiroyli mushugi bor."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🤲", "have got", "ˌhæv ˈɡɒt|hev got", "fe'l", "…i bor (I, you, we, they)", "Own something.", "We have got two cats.", "Bizning ikkita mushugimiz bor."),
      w("🫴", "has got", "ˌhæz ˈɡɒt|hez got", "fe'l", "…i bor (he, she, it)", "He, she or it owns something.", "Amit has got a job in a hospital.", "Amitning kasalxonada ishi bor."),
      w("🏭", "work", "wɜːk|uyork", "ot, fe'l", "Ish; ishlamoq", "The place where you do your job.", "I'm at work from 8 a.m. to 7 p.m.", "Men ertalab 8 dan kechki 7 gacha ishdaman."),
      w("📊", "manager", "ˈmænɪdʒə|menija", "ot", "Menejer, boshqaruvchi", "The boss of a hotel, shop or office.", "Sophia is the manager of a hotel.", "Sofiya mehmonxona menejeri."),
      w("🎨", "artist", "ˈɑːtɪst|aatist", "ot", "Rassom", "A person who makes paintings.", "Emilie is an artist.", "Emili — rassom."),
      w("🎸", "musician", "mjuˈzɪʃn|myuzishn", "ot", "Musiqachi", "A person who plays music.", "He's a musician, too.", "U musiqachi ham."),
      w("🎵", "song", "sɒŋ|song", "ot", "Qo'shiq", "Music with words that you sing.", "It's a great song.", "Bu ajoyib qo'shiq."),
      w("📍", "place", "pleɪs|pleys", "ot", "Joy", "A building, a town, a room…", "It's a nice place.", "Bu yaxshi joy."),
      w("🎯", "centre", "ˈsentə|senta", "ot", "Markaz", "The middle part of a city.", "La Défense is the business centre of Paris.", "La Defans — Parijning biznes markazi."),
      w("🔄", "about", "əˈbaʊt|abaut", "predlog, ravish", "Haqida; taxminan", "On the subject of; a little more or less than.", "There are about twenty flats.", "Taxminan yigirmata kvartira bor."),
    ],
  },
];

const NEIGHBOURS = `Nodira
We've got a flat in Tashkent, in a big building near the city centre. My job is in a bank and it's a hard job. I'm at work from 8 a.m. to 7 p.m., so for me the flat is like a hotel. We've got about thirty neighbours, but they aren't our friends.

Rustam
My house is in a small village near Samarkand, and the people are very friendly. My neighbours, Anvar and Zarina, are good friends. Anvar has got a job in a school — he's a teacher. He's a musician, too. Zarina is a doctor. She's a clever woman, and she's funny, too. They've got three lovely children and a big garden.`;
const read = reading(NEIGHBOURS);

export const A1_07_EXERCISES: SeedExercise[] = [
  {
    title: "Sifat + ot",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Oltita ibora aytiladi. Tinglang va sifatni tanlang. Ingliz tilida sifat otdan OLDIN keladi: a clever woman.",
    questions: [
      gaps(track("3.1"), [
        ["1. a ___ book", "great", "good", "big"],
        ["2. a ___ film", "funny", "friendly", "fine"],
        ["3. a ___ dog", "friendly", "funny", "lovely"],
        ["4. a ___ job", "hard", "great", "nice"],
        ["5. a ___ woman", "clever", "lovely", "friendly"],
        ["6. a ___ city", "lovely", "clever", "hard"],
      ]),
    ],
  },
  {
    title: "Sifat qayerda turadi?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "To'g'ri gapni tanlang. Sifat otdan oldin keladi va o'zgarmaydi (ko'plikda ham -s olmaydi).",
    questions: [
      say("Qaysi gap to'g'ri?", ["Spain is a lovely country.", "Spain is a country lovely.", "Spain is lovely a country.", "Spain is an lovely country."]),
      say("Qaysi gap to'g'ri?", ["He's a funny man.", "He's a man funny.", "He's funny a man.", "He's an funny man."]),
      say("Qaysi gap to'g'ri?", ["They're lovely people.", "They're lovelys people.", "They're people lovely.", "They're a lovely people."], "Sifat ko'plikda o'zgarmaydi."),
      say("It's ___ interesting book.", ["an", "a", "—", "two"], "interesting — unli bilan boshlanadi."),
      say("It's ___ hard job.", ["a", "an", "—", "the a"]),
      say("She's ___.", ["clever", "a clever", "an clever", "clevers"], "Ot bo'lmasa a kerak emas: She's clever. / She's a clever woman."),
      say("Qaysi gap to'g'ri?", ["We've got friendly neighbours.", "We've got neighbours friendly.", "We've got friendlies neighbours.", "We've got a friendly neighbours."]),
      say("Vienna's ___ nice city.", ["a", "an", "—", "the an"]),
      say("Qaysi gap to'g'ri?", ["Is teaching a hard job?", "Is teaching a job hard?", "Teaching is job a hard?", "Is a teaching hard job?"]),
      say("Morocco's a ___ country.", ["friendly", "friendlys", "friend", "friendly a"]),
    ],
  },
  {
    title: "Noto'g'ri ko'plik",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Ba'zi otlarning ko'pligi -s bilan yasalmaydi. Tinglang va to'g'ri ko'plik shaklini tanlang.",
    questions: [
      gaps(track("3.2"), [
        ["a man → two ___", "men", "mans", "mens"],
        ["a woman → two ___", "women", "womans", "woman"],
        ["a person → two ___", "people", "persons", "peoples"],
        ["a child → two ___", "children", "childs", "childrens"],
      ]),
    ],
  },
  {
    title: "Qo'shnilar",
    skill: "O'qish",
    kind: "reading",
    instructions: "Ikki kishi qo'shnilari haqida yozadi. Matnni o'qing va savollarga javob bering.",
    questions: [
      read("Who has got friendly neighbours?", ["Rustam", "Nodira", "Both", "Neither"]),
      read("Where is Nodira's flat?", ["In Tashkent, near the city centre", "In a village", "In Samarkand", "In a hotel"]),
      read("What is Nodira's job like?", ["It's hard.", "It's funny.", "It's quiet.", "The text doesn't say."]),
      read("Why is her flat «like a hotel»?", ["She's at work all day.", "It's very big.", "It's got a restaurant.", "It's expensive."]),
      read("How many neighbours has Nodira got?", ["About thirty", "Three", "Two", "The text doesn't say."]),
      read("Where is Rustam's house?", ["In a small village near Samarkand", "In Tashkent", "In Samarkand city centre", "Near a hotel"]),
      read("What is Anvar's job?", ["He's a teacher.", "He's a doctor.", "He works in a bank.", "He's a manager."]),
      read("Who is a clever woman?", ["Zarina", "Nodira", "Rustam's sister", "The text doesn't say."]),
      read("How many children have Anvar and Zarina got?", ["Three", "Two", "Thirty", "One"]),
      read("Which word is an adjective (sifat)?", ["friendly", "village", "garden", "teacher"]),
    ],
  },
  {
    title: "have got yoki has got?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "I / you / we / they bilan — have got ('ve got), he / she / it bilan — has got ('s got).",
    questions: [
      say("We ___ two cats and a dog.", ["'ve got", "'s got", "has got", "got"]),
      say("My village ___ fourteen houses.", ["has got", "have got", "'ve got", "got"]),
      say("I ___ great neighbours.", ["'ve got", "'s got", "has got", "got have"]),
      say("Emilie and Bruno ___ lovely paintings.", ["have got", "has got", "'s got", "is got"]),
      say("Cedric ___ a hard job, but he's happy.", ["has got", "have got", "'ve got", "is"]),
      say("Amit ___ a job in a hospital.", ["'s got", "'ve got", "have got", "is got"]),
      say("They ___ two great children.", ["'ve got", "'s got", "has", "is got"]),
      say("She ___ a nice garden.", ["has got", "have got", "'ve got", "got"]),
      say("You ___ a lovely house!", ["'ve got", "'s got", "has got", "are got"]),
      say("He's got a nice cat. «He's got» = ___", ["He has got", "He is got", "He was got", "He have got"], "'s + got = has got; 's + ot/sifat = is."),
    ],
  },
  {
    title: "Antony va Tompsonlar",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Ikki kishi qo'shnilari haqida gapiradi. Tinglang va to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("3.3"), [
        ["1. Antony's got a ___ in my building.", "flat", "house", "shop"],
        ["1. He's a ___ in an Italian restaurant.", "waiter", "chef", "manager"],
        ["1. He's a ___ man.", "friendly", "funny", "clever"],
        ["1. He's got a nice ___. Its name's Mr Muffin.", "cat", "dog", "car"],
        ["2. Mr and Mrs Thompson are from ___.", "New Zealand", "Australia", "the UK"],
        ["2. Mr Thompson is a ___ in a big school.", "teacher", "doctor", "manager"],
        ["2. Mrs Thompson is a ___.", "doctor", "nurse", "teacher"],
        ["2. They've got four children and two ___.", "dogs", "cats", "cars"],
      ]),
    ],
  },
  {
    title: "Judson ko'chasidagi qo'shnilar",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Caleb qo'shnilari haqida gapiradi. Tinglang va savollarga javob bering. Ba'zi savollarda IKKITA to'g'ri javob bor.",
    questions: [
      hearing(track("3.26"))("What number is Caleb's house?", ["36", "34", "38", "63"]),
      hearing(track("3.26"))("What's Charlie's job?", ["He's a waiter.", "He's a nurse.", "He's a teacher.", "He's a student."]),
      hearing(track("3.26"))("Why is Linda at home now?", ["They've got two young children.", "She hasn't got a job.", "She's ill.", "She's on holiday."]),
      hearing(track("3.26"))("What's the name of their dog?", ["Benji", "Junior", "Mr Muffin", "Max"]),
      hearingTwo(track("3.26"))("Which TWO are true about the neighbours at number 38?", ["They're university students.", "They're very friendly."], ["They've got a cat.", "Two people live in the house."]),
      hearing(track("3.26"))("How many people live at number 38?", ["Six", "Two", "Four", "Eight"]),
    ],
  },
  {
    title: "Gap yozing",
    skill: "Grammatika",
    kind: "type",
    instructions: "have got / has got bilan qisqa shaklda gap yozing. Misol: she / a nice garden → She's got a nice garden.",
    questions: written([
      ["we / two cats", "We've got two cats.|We have got two cats."],
      ["he / a hard job", "He's got a hard job.|He has got a hard job."],
      ["they / four children", "They've got four children.|They have got four children."],
      ["I / great neighbours", "I've got great neighbours.|I have got great neighbours."],
      ["she / a friendly dog", "She's got a friendly dog.|She has got a friendly dog."],
      ["the village / fourteen houses", "The village has got fourteen houses.|The village's got fourteen houses."],
      ["you / a lovely flat", "You've got a lovely flat.|You have got a lovely flat."],
      ["Amit / a job in a hospital", "Amit's got a job in a hospital.|Amit has got a job in a hospital."],
      ["my parents / a big garden", "My parents have got a big garden.|My parents've got a big garden."],
      ["it / a restaurant", "It's got a restaurant.|It has got a restaurant."],
    ]),
  },
  {
    title: "Sofiyaning mehmonxonasi",
    skill: "Yozish",
    kind: "fill",
    instructions: "Matndagi bo'sh joyni bitta so'z bilan to'ldiring: otlar — children, hotel, manager, pets, room, work; sifatlar — happy, hard, interesting.",
    questions: written([
      ["Sophia has got an ___ house.", "interesting"],
      ["It's a ___! (mehmonxona)", "hotel"],
      ["She's the ___ of the hotel.", "manager"],
      ["She's got a quiet ___ there.", "room"],
      ["She's at ___ from 6.30 a.m. to 5.30 p.m. every day.", "work"],
      ["It's a ___ job, but she's happy.", "hard"],
      ["It's a hard job, but she's ___.", "happy"],
      ["She hasn't got ___, but she's got two pets.", "children"],
      ["She's got two ___ — goldfish!", "pets"],
      ["a man — two ___", "men"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("She *have got a nice garden.", "she → has got."),
      mistake("We *has got two cats.", "we → have got."),
      mistake("It's a *woman clever.", "Sifat otdan oldin: a clever woman."),
      mistake("They're *lovelys people.", "Sifat ko'plikda o'zgarmaydi: lovely people."),
      mistake("I've got two *childs.", "child → children."),
      mistake("There are three *mans in the room.", "man → men."),
      mistake("He's got *an friendly dog.", "Undosh oldida — a: a friendly dog."),
      mistake("Amit *got a job in a hospital.", "Amit's got / Amit has got."),
      mistake("Two *womans are at the door.", "woman → women."),
      mistake("My neighbours are *a friendly.", "Ot bo'lmasa a yo'q: My neighbours are friendly."),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Juftlarni ulang.",
    questions: pairs([
      ["a man|men", "a woman|women", "a person|people", "a child|children"],
      ["I have got|I've got", "she has got|she's got", "they have got|they've got", "it has got|it's got"],
      ["clever|aqlli", "funny|kulgili", "friendly|mehribon", "quiet|sokin"],
      ["neighbour|qo'shni", "flat|kvartira", "village|qishloq", "garden|bog'"],
      ["a funny|film", "a hard|job", "a clever|woman", "a friendly|dog"],
    ]),
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "Stefan Hell's a clever man.",
      "Birdman's a funny film.",
      "Vienna's a nice city.",
      "My neighbours are lovely people.",
      "Morocco's a friendly country.",
      "Is teaching a hard job?",
      "We've got a flat near the centre.",
      "He's got a nice cat.",
      "They've got four children and two dogs.",
      "My village has got fourteen houses.",
    ]),
  },
  {
    title: "Tekshiring",
    skill: "Tinglash",
    kind: "listenmatch",
    instructions: "Tuzgan gaplaringizni tekshiring: oltita gapni tinglang va har biridagi sifatni yozing.",
    questions: [
      slots(track("3.24"), [
        ["1. Stefan Hell's a ___ man.", "clever"],
        ["2. Birdman's a ___ film.", "funny"],
        ["3. Vienna's a ___ city.", "nice"],
        ["4. My neighbours are ___ people.", "lovely"],
        ["5. Morocco's a ___ country.", "friendly"],
        ["6. Is teaching a ___ job?", "hard"],
      ]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "a clever woman",
      "a funny film",
      "a friendly dog",
      "a lovely city",
      "men, women, people, children",
      "Antony's my neighbour.",
      "He's got a nice cat.",
      "We've got a flat near the centre.",
      "They've got four children and two dogs.",
      "My neighbours are lovely people.",
    ]),
  },
];
