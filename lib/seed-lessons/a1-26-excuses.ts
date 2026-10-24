/**
 * A1, 26-dars — «Bahona». Kechikish, unutish va uzr so'rash.
 * Grammatika: Past Simple — inkor (didn't + fe'l) va savol (Did you…?),
 * qisqa javoblar (Yes, I did. / No, I didn't.); do / make / have / take /
 * go bilan fe'l iboralari. Matn va mashqlar o'zimizniki.
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

export const A1_26_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🤦", "forgot", "fəˈɡɒt|fagot", "fe'l (forget)", "Unutdi", "Past of «forget».", "Sorry, I forgot my homework.", "Kechirasiz, uy vazifamni unutibman."),
      w("🔑", "lost", "lɒst|lost", "fe'l (lose)", "Yo'qotdi", "Past of «lose».", "I lost my keys yesterday.", "Kecha kalitlarimni yo'qotdim."),
      w("💔", "broke", "brəʊk|brouk", "fe'l (break)", "Sindirdi; buzildi", "Past of «break».", "My brother broke my phone.", "Akam telefonimni sindirib qo'ydi."),
      w("🚌", "missed", "mɪst|mist", "fe'l (miss)", "(Avtobusga) ulgurmadi; sog'indi", "Past of «miss».", "I missed the bus this morning.", "Bugun ertalab avtobusga ulgurmadim."),
      w("😴", "overslept", "ˌəʊvəˈslept|ouvaslept", "fe'l (oversleep)", "Uxlab qoldi", "Past of «oversleep»: slept too long.", "I overslept and came late.", "Uxlab qolib, kech keldim."),
      w("✅", "on time", "ɒn ˈtaɪm|on taym", "ibora", "O'z vaqtida", "At the right time, not late.", "Please come on time.", "Iltimos, o'z vaqtida kel."),
      w("🙊", "excuse", "ɪkˈskjuːs|ikskyuus", "ot", "Bahona", "A reason you give when you do something wrong.", "That's a terrible excuse!", "Bu juda yomon bahona!"),
      w("⏰", "alarm clock", "əˈlɑːm klɒk|alaam klok", "ot", "Budilnik", "A clock that wakes you up.", "My alarm clock didn't ring.", "Budilnigim jiringlamadi."),
      w("🙇", "apologise", "əˈpɒlədʒaɪz|apolajayz", "fe'l", "Uzr so'ramoq", "Say you are sorry.", "I want to apologise.", "Uzr so'ramoqchiman."),
      w("🤥", "truth", "truːθ|truus", "ot", "Haqiqat, rost", "What really happened.", "Please tell me the truth.", "Iltimos, menga rostini ayt."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🛒", "do the shopping", "duː ðə ˈʃɒpɪŋ|duu za shoping", "ibora", "Oziq-ovqat xarid qilmoq", "Buy food for the home.", "I didn't do the shopping.", "Xarid qilmadim."),
      w("🍽️", "do the washing-up", "duː ðə ˌwɒʃɪŋ ˈʌp|duu za voshing ap", "ibora", "Idish yuvmoq", "Wash the plates and cups.", "Did you do the washing-up?", "Idishlarni yuvdingmi?"),
      w("🛏️", "make the bed", "meɪk ðə bed|meyk za bed", "ibora", "O'rinni yig'ishtirmoq", "Make your bed tidy in the morning.", "I didn't make the bed this morning.", "Bugun ertalab o'rnimni yig'ishtirmadim."),
      w("❌", "make a mistake", "meɪk ə mɪˈsteɪk|meyk a misteyk", "ibora", "Xato qilmoq", "Do something wrong.", "Everyone can make a mistake.", "Hamma xato qilishi mumkin."),
      w("📞", "make a phone call", "meɪk ə ˈfəʊn kɔːl|meyk a foun kool", "ibora", "Qo'ng'iroq qilmoq", "Call someone on the phone.", "Can I make a phone call?", "Qo'ng'iroq qilsam bo'ladimi?"),
      w("🎉", "have a party", "hæv ə ˈpɑːti|hev a paati", "ibora", "Bazm qilmoq", "Invite friends to celebrate.", "Let's have a party!", "Keling, bazm qilamiz!"),
      w("🛋️", "have a rest", "hæv ə rest|hev a rest", "ibora", "Dam olmoq", "Stop working and relax.", "Let's have a rest.", "Keling, dam olaylik."),
      w("🛍️", "go shopping", "ɡəʊ ˈʃɒpɪŋ|gou shoping", "ibora", "Xarid qilishga bormoq", "Go to shops to buy things.", "We go shopping on Sundays.", "Yakshanba kunlari xarid qilishga boramiz."),
      w("🚕", "take a taxi", "teɪk ə ˈtæksi|teyk a teksi", "ibora", "Taksiga o'tirmoq", "Travel by taxi.", "We didn't take a taxi.", "Biz taksiga o'tirmadik."),
      w("📝", "take an exam", "teɪk ən ɪɡˈzæm|teyk an igzem", "ibora", "Imtihon topshirmoq", "Answer questions to show what you know.", "We take an exam in June.", "Iyunda imtihon topshiramiz."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🧠", "remember", "rɪˈmembə|rimemba", "fe'l", "Eslamoq, esda tutmoq", "Not forget.", "Did you remember his birthday?", "Uning tug'ilgan kunini esladingmi?"),
      w("🙏", "believe", "bɪˈliːv|biliiv", "fe'l", "Ishonmoq", "Think that something is true.", "I don't believe you!", "Senga ishonmayman!"),
      w("🤞", "promise", "ˈprɒmɪs|promis", "ot, fe'l", "Va'da; va'da bermoq", "Say you will really do something.", "It's a promise!", "Bu va'da!"),
      w("❓", "happen", "ˈhæpən|hepan", "fe'l", "Sodir bo'lmoq", "Take place.", "Accidents happen.", "Baxtsiz hodisalar bo'lib turadi."),
      w("💥", "accident", "ˈæksɪdənt|eksidant", "ot", "Baxtsiz hodisa, avariya", "A bad thing that happens by chance.", "There was an accident on the road.", "Yo'lda avariya bo'lgan edi."),
      w("😠", "angry", "ˈæŋɡri|engri", "sifat", "Jahli chiqqan", "Very unhappy with someone.", "My teacher was angry.", "O'qituvchimning jahli chiqdi."),
      w("😟", "worried", "ˈwʌrid|uarid", "sifat", "Xavotirda", "Thinking about a problem; not calm.", "My mum was worried about me.", "Onam men uchun xavotirda edi."),
      w("🤒", "ill", "ɪl|il", "sifat", "Kasal", "Not well.", "I was ill yesterday.", "Kecha kasal edim."),
      w("🤕", "headache", "ˈhedeɪk|hedeyk", "ot", "Bosh og'rig'i", "A pain in your head.", "I had a terrible headache.", "Boshim qattiq og'ridi."),
      w("✔️", "true", "truː|truu", "sifat", "Rost, to'g'ri", "Correct; real.", "Is it true?", "Bu rostmi?"),
    ],
  },
];

const EMAIL = `From: Bekzod
To: Mr Karimov
Subject: Yesterday's lesson

Dear Mr Karimov,
I'm very sorry. I didn't come to your lesson yesterday, and I didn't send you my homework. Here is the truth: I was ill. I had a terrible headache in the morning, so I didn't go to college. I stayed in bed and slept all day.
I didn't call you because my phone battery was dead. My mum was worried, and she took me to the doctor in the evening. The doctor said, "Have a rest for two days."
I did the homework today. It's in this email. I promise: no more late homework!
Best wishes,
Bekzod`;
const tf = trueFalse(EMAIL);

const LATE = `Good morning, Dilnoza. You're late again!
I'm so sorry, Mr Rahimov. I missed the bus.
Did you get up late?
No, I didn't. I got up at seven. But I didn't find my keys, and I lost ten minutes.
Hmm. And yesterday? Did you miss the bus yesterday too?
No, I didn't. Yesterday there was an accident on the road, and there was a lot of traffic.
And on Monday?
On Monday I… overslept.
At least that's the truth! Please sit down.`;
const hear = hearing(LATE);

export const A1_26_EXERCISES: SeedExercise[] = [
  {
    title: "Nima eshitildi?",
    skill: "Tinglash",
    kind: "listen",
    instructions: "Gap o'qiladi. Eshitganingizni toping. «did» va «didn't» ga quloq soling.",
    questions: [
      listen("I didn't go.", ["I didn't go.", "I did go.", "I don't go.", "I didn't goes."]),
      listen("Did you see it?", ["Did you see it?", "Do you see it?", "Did you saw it?", "Did he see it?"]),
      listen("She didn't come.", ["She didn't come.", "She doesn't come.", "She did come.", "She didn't came."]),
      listen("Yes, I did.", ["Yes, I did.", "Yes, I do.", "Yes, I didn't.", "Yes, it did."]),
      listen("No, they didn't.", ["No, they didn't.", "No, they don't.", "No, they did.", "No, we didn't."]),
      listen("Did you forget?", ["Did you forget?", "Do you forget?", "Did you forgot?", "Did they forget?"]),
      listen("I missed the bus.", ["I missed the bus.", "I miss the bus.", "I missed a bus.", "I kissed the bus."]),
      listen("We didn't take a taxi.", ["We didn't take a taxi.", "We don't take a taxi.", "We didn't took a taxi.", "We did take a taxi."]),
      listen("What happened?", ["What happened?", "What happens?", "What's happened?", "When happened?"]),
      listen("I overslept.", ["I overslept.", "I over slept.", "I slept.", "I oversleep."]),
    ],
  },
  {
    title: "Inkor shakli",
    skill: "Grammatika",
    kind: "type",
    instructions: "Gapni inkorga aylantiring: didn't + fe'lning oddiy shakli. Masalan: I went. → I didn't go.",
    questions: written([
      ["I went to college.", "I didn't go to college."],
      ["She saw the film.", "She didn't see the film."],
      ["We had a lesson.", "We didn't have a lesson."],
      ["He bought a new phone.", "He didn't buy a new phone."],
      ["They came to the party.", "They didn't come to the party."],
      ["I did my homework.", "I didn't do my homework."],
      ["She called me.", "She didn't call me."],
      ["We took a taxi.", "We didn't take a taxi."],
      ["He made a mistake.", "He didn't make a mistake."],
      ["I remembered his birthday.", "I didn't remember his birthday."],
    ]),
  },
  {
    title: "Did you…?",
    skill: "Grammatika",
    kind: "type",
    instructions: "Savol tuzing: Did + ega + fe'lning oddiy shakli. Masalan: You went home. → Did you go home?",
    questions: written([
      ["You went to the party.", "Did you go to the party?"],
      ["She saw the accident.", "Did she see the accident?"],
      ["They had a rest.", "Did they have a rest?"],
      ["He lost his keys.", "Did he lose his keys?"],
      ["You did the washing-up.", "Did you do the washing-up?"],
      ["She forgot her bag.", "Did she forget her bag?"],
      ["You made the bed.", "Did you make the bed?"],
      ["They missed the train.", "Did they miss the train?"],
      ["He broke the window.", "Did he break the window?"],
      ["You took an exam.", "Did you take an exam?"],
    ]),
  },
  {
    title: "Qisqa javob",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Savolga mos qisqa javobni tanlang. Qavsdagi belgi: ✓ — ha, ✗ — yo'q.",
    questions: [
      say("Did you go to college yesterday? (✗)", ["No, I didn't.", "No, I don't.", "No, I wasn't.", "No, I didn't go."]),
      say("Did she call you? (✓)", ["Yes, she did.", "Yes, she called.", "Yes, she does.", "Yes, she was."]),
      say("Did they come late? (✓)", ["Yes, they did.", "Yes, they came.", "Yes, they do.", "Yes, they were."]),
      say("Did he miss the bus? (✗)", ["No, he didn't.", "No, he doesn't.", "No, he wasn't.", "No, he don't."]),
      say("Did you do the shopping? (✓)", ["Yes, I did.", "Yes, I do.", "Yes, I did shopping.", "Yes, I was."]),
      say("Did your mum make plov? (✗)", ["No, she didn't.", "No, he didn't.", "No, she doesn't.", "No, she wasn't."]),
      say("Were you ill? (✓)", ["Yes, I was.", "Yes, I did.", "Yes, I were.", "Yes, I am."], "Were…? → was / wasn't."),
      say("Did you have a headache? (✓)", ["Yes, I did.", "Yes, I had.", "Yes, I was.", "Yes, I have."]),
      say("Was the traffic bad? (✗)", ["No, it wasn't.", "No, it didn't.", "No, it wasn't bad no.", "No, it weren't."], "Was…? → was / wasn't."),
      say("Did we make a mistake? (✗)", ["No, we didn't.", "No, we don't.", "No, we weren't.", "No, they didn't."]),
    ],
  },
  {
    title: "Fe'l iboralari",
    skill: "Lug'at",
    kind: "choice",
    instructions: "Iborani to'ldiradigan fe'lni tanlang: do, make, have, take yoki go.",
    questions: [
      say("___ the shopping", ["do", "make", "take", "go"]),
      say("___ the bed", ["make", "do", "have", "go"]),
      say("___ a shower", ["have", "make", "do", "go"]),
      say("___ a taxi", ["take", "make", "do", "have"]),
      say("___ shopping", ["go", "do", "make", "take"]),
      say("___ a mistake", ["make", "do", "take", "go"]),
      say("___ the washing-up", ["do", "make", "have", "take"]),
      say("___ an exam", ["take", "make", "go", "have"]),
      say("___ a phone call", ["make", "do", "go", "take"]),
      say("___ a rest", ["have", "do", "go", "make"]),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Juftlarni ulang.",
    questions: pairs([
      ["forget|forgot", "lose|lost", "break|broke", "oversleep|overslept"],
      ["do|the washing-up", "make|the bed", "have|a shower", "take|a taxi"],
      ["go|shopping", "make|a mistake", "take|an exam", "have|a rest"],
      ["excuse|bahona", "truth|haqiqat", "traffic|tirbandlik", "accident|avariya"],
      ["angry|jahli chiqqan", "worried|xavotirda", "ill|kasal", "late|kech"],
      ["remember|eslamoq", "believe|ishonmoq", "promise|va'da", "happen|sodir bo'lmoq"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("I didn't *went to college.", "didn't dan keyin oddiy shakl: go."),
      mistake("Did you *saw the film?", "Did dan keyin oddiy shakl: see."),
      mistake("She *don't call me yesterday.", "O'tgan zamon: didn't."),
      mistake("*Do you do your homework yesterday?", "yesterday → Did you…?"),
      mistake("We didn't *took a taxi.", "didn't + take."),
      mistake("Did he *lost his keys?", "Did + lose."),
      mistake("Yes, I *didn't. I went there.", "Ijobiy javob: Yes, I did."),
      mistake("I *maked a mistake.", "make → made."),
      mistake("Did you *do a shower?", "have a shower."),
      mistake("I *was overslept this morning.", "was kerak emas: I overslept."),
    ],
  },
  {
    title: "Uzr so'rang",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("You're late again!", ["I'm sorry. I missed the bus.", "Yes, I'm late. Good.", "I didn't late.", "Sorry, I miss the bus tomorrow."]),
      say("Did you do your homework?", ["No, I didn't. I'm sorry — I was ill.", "No, I don't.", "Yes, I didn't.", "No, I didn't do it yesterday tomorrow."]),
      say("Why didn't you call me?", ["My battery was dead.", "Because I don't call.", "My battery is dead tomorrow.", "Yes, I called."]),
      say("Why were you late?", ["There was a lot of traffic.", "Because I late.", "There were a lot of traffic.", "I was late because yes."]),
      say("Did you remember Mum's birthday?", ["Oh no! I forgot!", "Oh no! I forget!", "Yes, I didn't.", "I don't remember yesterday."]),
      say("What happened?", ["I lost my keys.", "I lose my keys yesterday.", "I losted my keys.", "It happened."]),
      say("I'm sorry. I broke your cup.", ["Don't worry. It's OK.", "Well done!", "Happy birthday!", "Have fun!"]),
      say("Is it true?", ["Yes, it's the truth. I promise!", "Yes, it's true excuse.", "No, it's truth.", "Yes, I true."]),
      say("Did you have a good weekend?", ["No, I didn't. I had a headache.", "No, I hadn't.", "No, I didn't had.", "Yes, I didn't."]),
      say("I didn't take the exam. I overslept!", ["What a pity!", "Congratulations!", "Well done!", "Enjoy your meal!"]),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "I didn't go to college yesterday.",
      "Did you do your homework?",
      "Sorry, I forgot my homework.",
      "I missed the bus this morning.",
      "There was a lot of traffic.",
      "Did she call you last night?",
      "We didn't take a taxi.",
      "My battery was dead.",
      "Please tell me the truth.",
      "I had a terrible headache.",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Bo'sh joyga bitta so'z yozing.",
    questions: written([
      ["I ___ go to the party. I was ill.", "didn't"],
      ["___ you see the match last night?", "Did"],
      ["Did she ___ her keys? (lose)", "lose"],
      ["No, she ___. She found them.", "didn't"],
      ["Yes, I ___. I called him.", "did"],
      ["Sorry, I ___ my homework. (forget)", "forgot"],
      ["I ___ the bus and came late. (miss)", "missed"],
      ["Can you ___ the bed, please?", "make"],
      ["I always ___ a shower in the morning.", "have"],
      ["There was a lot of ___ on the road.", "traffic"],
    ]),
  },
  {
    title: "Bekzodning xati",
    skill: "Matn bilan ishlash",
    kind: "truefalse",
    instructions: "Xatni o'qing va gap to'g'ri yoki noto'g'ri ekanini belgilang.",
    questions: [
      tf("Bekzod didn't come to the lesson yesterday.", true),
      tf("He sent his homework yesterday.", false, "He didn't send it."),
      tf("He had a terrible headache.", true),
      tf("He went to college in the afternoon.", false, "He stayed in bed all day."),
      tf("He didn't call because his phone battery was dead.", true),
      tf("His father took him to the doctor.", false, "His mum took him."),
      tf("He went to the doctor in the evening.", true),
      tf("The doctor said, «Go to college tomorrow».", false, "«Have a rest for two days»."),
      tf("He did the homework today.", true),
      tf("Bekzod makes a promise at the end.", true),
    ],
  },
  {
    title: "Yana kechikdi!",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Dilnoza bugun nima uchun kechikdi?", ["Avtobusga ulgurmadi", "Uxlab qoldi", "Kasal bo'ldi", "Tirbandlik bo'ldi"]),
      hear("U kech turdimi?", ["Yo'q, soat yettida turdi", "Ha, soat to'qqizda", "Ha, soat sakkizda", "Aytilmagan"]),
      hear("U nimani topa olmadi?", ["Kalitlarini", "Telefonini", "Sumkasini", "Daftarini"]),
      hear("U necha daqiqa yo'qotdi?", ["10 daqiqa", "5 daqiqa", "15 daqiqa", "30 daqiqa"]),
      hear("Kecha nima bo'lgan edi?", ["Yo'lda avariya bo'lgan", "Avtobusga ulgurmagan", "Kasal bo'lgan", "Uxlab qolgan"]),
      hear("Kecha yo'lda nima ko'p edi?", ["Tirbandlik", "Odamlar", "Qor", "Yomg'ir"]),
      hear("Dushanba kuni nima bo'lgan edi?", ["Uxlab qolgan", "Avtobusga ulgurmagan", "Kalitini yo'qotgan", "Kasal bo'lgan"]),
      hear("O'qituvchining ismi nima?", ["Rahimov", "Karimov", "Aliyev", "Toshev"]),
      hear("Dilnoza bu hafta necha marta kechikdi?", ["Kamida uch marta", "Bir marta", "Hech qachon", "Ikki marta"]),
      hear("Oxirida o'qituvchi nima dedi?", ["O'tir", "Uyga ket", "Ertaga kel", "Direktorga bor"]),
    ],
  },
  {
    title: "Diktant",
    skill: "Yozish",
    kind: "dictation",
    instructions: "Gapni tinglang va eshitganingizni yozing.",
    questions: dictation([
      "I didn't go.",
      "Did you see it?",
      "Yes, I did.",
      "No, she didn't.",
      "I forgot my keys.",
      "I missed the bus.",
      "Did you call him?",
      "We didn't take a taxi.",
      "What happened?",
      "Is it true?",
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "Sorry I'm late!",
      "I missed the bus.",
      "I didn't do my homework.",
      "Did you call me?",
      "Yes, I did.",
      "No, I didn't.",
      "I forgot!",
      "There was a lot of traffic.",
      "Please tell me the truth.",
      "headache",
    ]),
  },
];
