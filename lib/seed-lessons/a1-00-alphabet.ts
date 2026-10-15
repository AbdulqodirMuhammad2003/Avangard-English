/**
 * A1, 0-dars — «Alifbo va tovushlar». Ingliz alifbosining 26 harfi: har bir
 * harfga bittadan oddiy so'z (x — so'z oxirida: box) va yana bir nechta
 * kundalik so'z. Harf nomi va tovushi farqi, unli harflar, bosh/kichik harf,
 * so'zni harflab aytish. Matn va mashqlar o'zimizniki.
 */
import { scramble, type SeedExercise, type SeedQuestion } from "../seed-exercises";
import type { VocabSeed } from "./types";

const w = (
  emoji: string,
  word: string,
  transcription: string,
  pos: string,
  uz: string,
  def: string,
  ex: string,
  exUz: string
): VocabSeed => ({ emoji, word, transcription, pos, uz, def, ex, exUz });

export const A1_00_ROUNDS: { title: string; words: VocabSeed[] }[] = [
  {
    title: "1-bosqich",
    words: [
      w("🍎", "apple", "ˈæpl|epl", "ot", "Olma", "A red or green fruit.", "I have an apple.", "Menda olma bor."),
      w("👜", "bag", "bæɡ|beg", "ot", "Sumka", "You carry things in it.", "My bag is black.", "Sumkam qora."),
      w("🐱", "cat", "kæt|ket", "ot", "Mushuk", "A small animal. It says «meow».", "The cat is on the bed.", "Mushuk karavotning ustida."),
      w("🐶", "dog", "dɒɡ|dog", "ot", "It", "An animal. It says «woof».", "My dog is very big.", "Mening itim juda katta."),
      w("🥚", "egg", "eɡ|eg", "ot", "Tuxum", "Food from a chicken.", "I eat an egg every morning.", "Men har kuni ertalab tuxum yeyman."),
      w("🐟", "fish", "fɪʃ|fish", "ot", "Baliq", "It lives in water.", "The fish is in the water.", "Baliq suvda."),
      w("👧", "girl", "ɡɜːl|gyol", "ot", "Qiz bola", "A young female person.", "The girl is my sister.", "Qiz — mening singlim."),
      w("🏠", "house", "haʊs|xaus", "ot", "Uy", "People live in it.", "This is my house.", "Bu mening uyim."),
      w("🧊", "ice", "aɪs|ays", "ot", "Muz", "Very cold, hard water.", "Ice is cold.", "Muz sovuq."),
      w("🧃", "juice", "dʒuːs|juus", "ot", "Sharbat", "A drink from fruit.", "Orange juice, please.", "Apelsin sharbati, iltimos."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🔑", "key", "kiː|kii", "ot", "Kalit", "It opens a door.", "Where is my key?", "Kalitim qayerda?"),
      w("🍋", "lemon", "ˈlemən|lemon", "ot", "Limon", "A yellow fruit. It is not sweet.", "Tea with lemon, please.", "Limonli choy, iltimos."),
      w("🥛", "milk", "mɪlk|milk", "ot", "Sut", "A white drink from a cow.", "The baby drinks milk.", "Chaqaloq sut ichadi."),
      w("👃", "nose", "nəʊz|nouz", "ot", "Burun", "It is on your face. You smell with it.", "The clown has a red nose.", "Masxarabozning burni qizil."),
      w("🍊", "orange", "ˈɒrɪndʒ|orinj", "ot", "Apelsin", "A round fruit. Its colour is orange too.", "This orange is sweet.", "Bu apelsin shirin."),
      w("🖊️", "pen", "pen|pen", "ot", "Ruchka", "You write with it.", "Can I have a pen?", "Menga ruchka bera olasizmi?"),
      w("👸", "queen", "kwiːn|kviin", "ot", "Qirolicha", "The wife of a king, or a woman king.", "The queen lives in a palace.", "Qirolicha saroyda yashaydi."),
      w("🔴", "red", "red|red", "sifat", "Qizil", "The colour of a tomato.", "My car is red.", "Mening mashinam qizil."),
      w("☀️", "sun", "sʌn|san", "ot", "Quyosh", "It is in the sky in the day.", "The sun is hot today.", "Bugun quyosh issiq."),
      w("🍵", "tea", "tiː|tii", "ot", "Choy", "A hot drink. People in Uzbekistan love it.", "We drink green tea.", "Biz ko'k choy ichamiz."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("☂️", "umbrella", "ʌmˈbrelə|ambrela", "ot", "Soyabon", "You use it in the rain.", "Take an umbrella. It's raining.", "Soyabon oling. Yomg'ir yog'yapti."),
      w("🚐", "van", "væn|ven", "ot", "Furgon (kichik yuk mashinasi)", "A small truck.", "The van is white.", "Furgon oq rangda."),
      w("💧", "water", "ˈwɔːtə|uota", "ot", "Suv", "A drink. It has no colour.", "A glass of water, please.", "Bir stakan suv, iltimos."),
      w("🪟", "window", "ˈwɪndəʊ|uindou", "ot", "Deraza", "You look out of it.", "Open the window, please.", "Derazani oching, iltimos."),
      w("📦", "box", "bɒks|boks", "ot", "Quti", "You put things in it.", "The box is empty.", "Quti bo'sh."),
      w("👍", "yes", "jes|yes", "ibora", "Ha", "The opposite of «no».", "Yes, I am!", "Ha, men!"),
      w("🦁", "zoo", "zuː|zuu", "ot", "Hayvonot bog'i", "You see lions and tigers there.", "Tashkent has a big zoo.", "Toshkentda katta hayvonot bog'i bor."),
      w("📖", "book", "bʊk|buk", "ot", "Kitob", "You read it.", "This book is very good.", "Bu kitob juda yaxshi."),
      w("🚗", "car", "kɑː|kaa", "ot", "Mashina", "It has four wheels. You drive it.", "My father's car is new.", "Otamning mashinasi yangi."),
      w("🍞", "bread", "bred|bred", "ot", "Non", "Food. In Uzbekistan it is round.", "Uzbek bread is round.", "O'zbek noni dumaloq."),
    ],
  },
];

const pick = (prompt: string, options: string[], correct: number, explanation?: string): SeedQuestion => ({
  prompt,
  options,
  correct,
  explanation,
});
const listen = (audio: string, options: string[], explanation?: string, prompt = "Eshitgan so'zingizni toping"): SeedQuestion => ({
  prompt,
  audio,
  options,
  correct: options.indexOf(audio),
  explanation,
});

export const A1_00_EXERCISES: SeedExercise[] = [
  {
    title: "Qaysi harf?",
    skill: "Tinglash",
    kind: "listen",
    instructions:
      "Harfning nomi o'qiladi. Eshitgan harfingizni toping. Diqqat: ingliz harflarining nomi o'zbekchadan farq qiladi (G — «ji», J — «jey», E — «ii», I — «ay»).",
    questions: [
      listen("A", ["A", "E", "I", "R"], "A — «ey».", "Eshitgan harfingizni toping"),
      listen("E", ["A", "E", "I", "Y"], "E — «ii».", "Eshitgan harfingizni toping"),
      listen("I", ["A", "E", "I", "Y"], "I — «ay».", "Eshitgan harfingizni toping"),
      listen("G", ["G", "J", "Z", "C"], "G — «ji».", "Eshitgan harfingizni toping"),
      listen("J", ["G", "J", "H", "Y"], "J — «jey».", "Eshitgan harfingizni toping"),
      listen("H", ["A", "H", "K", "R"], "H — «eych».", "Eshitgan harfingizni toping"),
      listen("Y", ["I", "W", "Y", "U"], "Y — «uay».", "Eshitgan harfingizni toping"),
      listen("W", ["V", "W", "Y", "U"], "W — «dabl-yu» (ikkita U).", "Eshitgan harfingizni toping"),
      listen("R", ["A", "R", "O", "E"], "R — «aa» (britancha).", "Eshitgan harfingizni toping"),
      listen("Q", ["K", "Q", "U", "C"], "Q — «kyu».", "Eshitgan harfingizni toping"),
    ],
  },
  {
    title: "Bu nima?",
    skill: "Rasm",
    kind: "picture",
    instructions: "Rasmga qarang va uning inglizcha nomini toping.",
    questions: [
      pick("🍎", ["apple", "orange", "lemon", "egg"], 0),
      pick("🐱", ["dog", "cat", "fish", "car"], 1),
      pick("🏠", ["horse", "house", "box", "bag"], 1, "house [xaus] — uy; horse [hos] — ot (hayvon)."),
      pick("🔑", ["key", "tea", "queen", "pen"], 0),
      pick("☀️", ["son", "sun", "zoo", "ice"], 1, "sun — quyosh; son [san] — o'g'il. Talaffuzi bir xil!"),
      pick("📖", ["box", "book", "bag", "bread"], 1),
      pick("💧", ["water", "window", "juice", "milk"], 0),
      pick("🪟", ["water", "van", "window", "umbrella"], 2),
      pick("🍞", ["bread", "red", "egg", "milk"], 0),
      pick("☂️", ["umbrella", "apple", "orange", "zoo"], 0),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Chapdagi inglizcha so'zni, keyin o'ngdagi tarjimasini bosing. Hamma juftlarni ulang.",
    questions: [
      ["apple|olma", "egg|tuxum", "fish|baliq", "juice|sharbat"],
      ["cat|mushuk", "dog|it", "girl|qiz bola", "queen|qirolicha"],
      ["key|kalit", "pen|ruchka", "bag|sumka", "box|quti"],
      ["tea|choy", "milk|sut", "water|suv", "bread|non"],
      ["house|uy", "window|deraza", "car|mashina", "van|furgon"],
      ["sun|quyosh", "ice|muz", "umbrella|soyabon", "zoo|hayvonot bog'i"],
      ["red|qizil", "yes|ha", "nose|burun", "book|kitob"],
      ["lemon|limon", "orange|apelsin", "apple|olma", "bread|non"],
      ["A|ey", "E|ii", "I|ay", "O|ou"],
      ["G|ji", "J|jey", "H|eych", "Y|uay"],
    ].map((options) => ({ prompt: "Juftlarni ulang", options })),
  },
  {
    title: "Unli harflar",
    skill: "Alifbo",
    kind: "choice",
    instructions:
      "Ingliz alifbosida 5 ta unli harf bor: A, E, I, O, U. Qolgan 21 tasi — undosh. Har savolda unli harfni toping.",
    questions: [
      pick("Qaysi biri unli harf?", ["E", "B", "K", "T"], 0),
      pick("Qaysi biri unli harf?", ["S", "O", "M", "P"], 1),
      pick("Qaysi biri unli harf?", ["D", "F", "U", "W"], 2),
      pick("Qaysi biri unli harf?", ["L", "N", "R", "A"], 3),
      pick("Qaysi biri unli harf?", ["I", "Y", "J", "H"], 0, "Y ba'zan unli tovush beradi (my), lekin alifboda u undosh hisoblanadi."),
      pick("«apple» so'zi qaysi harf bilan boshlanadi?", ["A", "E", "I", "O"], 0),
      pick("«egg» so'zi qaysi harf bilan boshlanadi?", ["A", "E", "I", "U"], 1),
      pick("«ice» so'zi qaysi harf bilan boshlanadi?", ["A", "E", "I", "Y"], 2),
      pick("«orange» so'zi qaysi harf bilan boshlanadi?", ["A", "U", "E", "O"], 3),
      pick("«umbrella» so'zi qaysi harf bilan boshlanadi?", ["U", "A", "O", "Y"], 0, "umbrella [ambrela] — u «a» kabi o'qiladi, lekin U bilan yoziladi."),
    ],
  },
  {
    title: "Alifbo tartibi",
    skill: "Alifbo",
    kind: "choice",
    instructions: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Qaysi harf keyin keladi?",
    questions: [
      pick("A, B, C, …", ["D", "E", "F", "G"], 0),
      pick("F, G, H, …", ["J", "I", "K", "E"], 1),
      pick("J, K, L, …", ["N", "O", "M", "P"], 2),
      pick("O, P, Q, …", ["S", "T", "U", "R"], 3),
      pick("S, T, U, …", ["V", "W", "Y", "X"], 0),
      pick("W, X, Y, …", ["Z", "A", "V", "S"], 0),
      pick("Qaysi harf «M» dan oldin keladi?", ["N", "L", "K", "O"], 1),
      pick("Qaysi harf «E» dan oldin keladi?", ["F", "C", "D", "G"], 2),
      pick("Qaysi harf alifboda birinchi?", ["B", "C", "D", "A"], 3),
      pick("Ingliz alifbosida nechta harf bor?", ["26", "29", "33", "24"], 0, "26 ta harf: 5 ta unli va 21 ta undosh."),
    ],
  },
  {
    title: "Eshitib toping",
    skill: "Tinglash",
    kind: "listen",
    instructions: "So'z ovoz chiqarib o'qiladi. Eshitgan so'zingizni toping.",
    questions: [
      listen("cat", ["cat", "car", "cut", "cap"]),
      listen("pen", ["pan", "pen", "pin", "bag"]),
      listen("tea", ["key", "tea", "ten", "zoo"]),
      listen("box", ["bag", "book", "box", "bus"]),
      listen("fish", ["fish", "dish", "egg", "red"]),
      listen("bread", ["red", "bed", "bread", "bag"]),
      listen("water", ["window", "water", "orange", "lemon"]),
      listen("house", ["horse", "house", "nose", "juice"]),
      listen("queen", ["green", "key", "queen", "zoo"]),
      listen("milk", ["milk", "make", "pen", "van"]),
    ],
  },
  {
    title: "Qaysi harf tushib qoldi?",
    skill: "Imlo",
    kind: "fill",
    instructions: "So'zda bitta harf tushib qolgan. Uni yozing.",
    questions: [
      ["___pple", "a", "apple — olma."],
      ["c___t", "a"],
      ["d___g", "o"],
      ["f___sh", "i"],
      ["h___use", "o", "house: o + u birga «au» bo'lib o'qiladi."],
      ["k___y", "e", "key: «e» harfi bor, lekin «kii» deb o'qiladi."],
      ["m___lk", "i"],
      ["___ueen", "q", "Q harfidan keyin deyarli doim U keladi: queen."],
      ["wat___r", "e"],
      ["bo___", "x"],
    ].map(([prompt, answer, explanation]) => ({ prompt, answer, explanation })),
  },
  {
    title: "Harflardan so'z",
    skill: "Imlo",
    kind: "anagram",
    instructions: "Harflar aralashib ketgan. Ularni to'g'ri tartibda bosib, so'z tuzing.",
    questions: ["apple", "house", "juice", "lemon", "orange", "queen", "water", "window", "bread", "umbrella"].map(
      (word) => ({ prompt: scramble(word), answer: word })
    ),
  },
  {
    title: "Harflab aytilgan so'z",
    skill: "Spelling",
    kind: "type",
    instructions:
      "Inglizlar so'zni ko'pincha harflab aytadi: «How do you spell it?» — «C-A-T». Harflardan so'zni yig'ib yozing.",
    questions: [
      ["C – A – T", "cat"],
      ["D – O – G", "dog"],
      ["B – O – O – K", "book", "Ikkita O ketma-ket: «double O» deb aytiladi."],
      ["T – E – A", "tea"],
      ["K – E – Y", "key"],
      ["M – I – L – K", "milk"],
      ["Z – O – O", "zoo"],
      ["G – I – R – L", "girl"],
      ["B – R – E – A – D", "bread"],
      ["N – O – S – E", "nose"],
    ].map(([prompt, answer, explanation]) => ({ prompt, answer, explanation })),
  },
  {
    title: "Eshitib yozing",
    skill: "Diktant",
    kind: "dictation",
    instructions: "So'zni eshiting va yozing. Kerak bo'lsa, qayta yoki sekinroq eshiting.",
    questions: ["cat", "pen", "red", "sun", "egg", "fish", "bag", "box", "van", "yes"].map((word) => ({
      prompt: "Eshitganingizni yozing",
      audio: word,
      answer: word,
    })),
  },
  {
    title: "Urg'u qayerda?",
    skill: "Talaffuz",
    kind: "stress",
    instructions:
      "Ikki va undan ko'p bo'g'inli so'zda bitta bo'g'in kuchliroq aytiladi (urg'u). So'zni eshiting va urg'uli bo'g'inni bosing.",
    questions: (
      [
        ["ap|ple", 0, "AP-ple"],
        ["le|mon", 0],
        ["o|range", 0, "O-range [orinj]"],
        ["wa|ter", 0],
        ["win|dow", 0],
        ["um|brel|la", 1, "um-BREL-la"],
        ["po|ta|to", 1, "po-TA-to — kartoshka."],
        ["yel|low", 0],
        ["ho|tel", 1, "ho-TEL — urg'u oxirgi bo'g'inda."],
        ["com|pu|ter", 1, "com-PU-ter"],
      ] as [string, number, string?][]
    ).map(([syllables, correct, explanation]) => ({
      prompt: "Urg'uli bo'g'inni toping",
      audio: syllables.replace(/\|/g, ""),
      options: syllables.split("|"),
      correct,
      explanation,
    })),
  },
  {
    title: "Bosh harf va kichik harf",
    skill: "Yozuv",
    kind: "match",
    instructions: "Har bir harfning ikki shakli bor: bosh (A) va kichik (a). Juftlarni ulang.",
    questions: [
      ["A|a", "B|b", "D|d", "E|e"],
      ["G|g", "H|h", "Q|q", "R|r"],
      ["L|l", "I|i", "J|j", "T|t"],
      ["M|m", "N|n", "W|w", "V|v"],
      ["F|f", "P|p", "Y|y", "U|u"],
    ].map((options) => ({ prompt: "Juftlarni ulang", options })),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "So'zni eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: ["apple", "house", "water", "queen", "orange", "umbrella", "juice", "window", "bread", "girl"].map(
      (phrase) => ({ prompt: phrase, answer: phrase })
    ),
  },
];
