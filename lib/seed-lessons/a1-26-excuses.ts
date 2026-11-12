/**
 * A1, 26-dars — «Bahona: didn't / Did you…?». Navigate A1, 9.2 «A good
 * excuse» asosida: ishga kelmaslik sabablari, Nathan va boshlig'i, Jenny'ning
 * omadsiz kuni, fe'l iboralari (sleep badly, miss the train, feel sick),
 * bir xil eshitiladigan so'zlar (knew / new, ate / eight, your / you're).
 * Grammatika: Past Simple — inkor (didn't + fe'l), so'roq (Did you…?) va
 * qisqa javoblar; couldn't. Tinglash mashqlarida kitob treklari (yopiq
 * ombordan), savollar va matnlar o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  gaps,
  hearing,
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

export const A1_26_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🙊", "excuse", "ɪkˈskjuːs|ikskyuus", "ot", "Bahona, uzr sababi", "A reason you give for something bad you did.", "It's not a good excuse.", "Bu yaxshi bahona emas."),
      w("❔", "reason", "ˈriːzn|riizn", "ot", "Sabab", "Why something happens.", "What's the reason for not coming to work?", "Ishga kelmaslik sababi nima?"),
      w("😴", "sleep", "sliːp|sliip", "fe'l", "Uxlamoq (o'tgani: slept)", "Rest with your eyes closed at night.", "I didn't sleep.", "Uxlamadim."),
      w("🤢", "feel", "fiːl|fiil", "fe'l", "His qilmoq (o'tgani: felt)", "Have a feeling in your body or mind.", "I didn't feel well.", "O'zimni yaxshi his qilmadim."),
      w("🤦", "forget", "fəˈɡet|faget", "fe'l", "Unutmoq (o'tgani: forgot)", "Not remember.", "Don't forget the time of the meeting!", "Yig'ilish vaqtini unutma!"),
      w("🚉", "miss", "mɪs|mis", "fe'l", "Ulgurmay qolmoq (poyezd, avtobus)", "Be too late for a train or bus.", "Hurry up! Don't miss the train.", "Tezroq! Poyezdga kech qolma."),
      w("🤕", "headache", "ˈhedeɪk|hedeyk", "ot", "Bosh og'rig'i", "A pain in your head.", "She had a really bad headache.", "Uning boshi qattiq og'rigan."),
      w("🤮", "sick", "sɪk|sik", "sifat", "Ko'ngli aynigan; kasal", "Feeling ill in your stomach.", "She felt sick.", "Uning ko'ngli aynidi."),
      w("👻", "horror film", "ˈhɒrə fɪlm|hora film", "ot", "Qo'rqinchli film", "A film that makes you afraid.", "I watched a horror film and I couldn't sleep.", "Qo'rqinchli film ko'rib, uxlay olmadim."),
      w("😡", "angry", "ˈæŋɡri|engri", "sifat", "Jahli chiqqan", "Not happy because of something bad.", "Was your boss angry?", "Boshlig'ingizning jahli chiqdimi?"),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("❓", "did", "dɪd|did", "yordamchi fe'l", "O'tgan zamon so'rog'i (Did you…?)", "Used to make past questions.", "Did you phone the office?", "Ofisga qo'ng'iroq qildingizmi?"),
      w("🚫", "didn't", "ˈdɪdnt|didnt", "yordamchi fe'l", "…madi (o'tgan zamon inkori)", "did not.", "I didn't get up until twelve o'clock.", "Soat o'n ikkigacha turmadim."),
      w("📞", "phone", "fəʊn|foun", "fe'l", "Qo'ng'iroq qilmoq", "Call someone.", "Please phone me tomorrow.", "Iltimos, ertaga menga qo'ng'iroq qiling."),
      w("📚", "homework", "ˈhəʊmwɜːk|houmuyork", "ot", "Uy vazifasi", "Work a teacher gives you to do at home.", "I don't have my homework.", "Uy vazifam yo'q."),
      w("🎉", "party", "ˈpɑːti|paati", "ot", "Ziyofat, bazm", "A meeting with friends, music and food.", "Did you go to a party last week?", "O'tgan hafta ziyofatga bordingizmi?"),
      w("🍔", "fast food", "ˌfɑːst ˈfuːd|faast fuud", "ot", "Tez tayyor ovqat", "Burgers, chips and other quick food.", "I ate at a fast food restaurant.", "Tez tayyor ovqat restoranida ovqatlandim."),
      w("📻", "radio", "ˈreɪdiəʊ|reydiou", "ot", "Radio", "You listen to music and news on it.", "Did you listen to the radio?", "Radio tingladingizmi?"),
      w("🍎", "eat", "iːt|iit", "fe'l", "Yemoq (o'tgani: ate)", "Put food in your mouth.", "What did you eat?", "Nima yedingiz?"),
      w("👌", "enough", "ɪˈnʌf|inaf", "sifat, ravish", "Yetarli", "As much as you need.", "That's not good enough.", "Bu yetarlicha yaxshi emas."),
      w("🍀", "bad luck", "ˌbæd ˈlʌk|bed lak", "ibora", "Omadsizlik", "When bad things happen by chance.", "Oh! That's bad luck.", "Voy! Omadingiz kelmabdi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🆕", "new", "njuː|nyuu", "sifat", "Yangi", "Not old (sounds like «knew»).", "She's got a new job now.", "Uning hozir yangi ishi bor."),
      w("🍽️", "ate", "eɪt|eyt", "fe'l (o'tgan z.)", "Yedi (eat) — «eight» kabi eshitiladi", "The past of «eat».", "He ate six apples and eight bananas.", "U oltita olma va sakkizta banan yedi."),
      w("👉", "you're", "jɔː|yoo", "qisqartma", "Sen …san (you are) — «your» kabi eshitiladi", "You are.", "You're late for your train.", "Poyezdingizga kechikyapsiz."),
      w("✅", "right", "raɪt|rayt", "sifat", "To'g'ri — «write» kabi eshitiladi", "Correct.", "You're at the supermarket, right?", "Supermarketdasan, to'g'rimi?"),
      w("🥩", "meat", "miːt|miit", "ot", "Go'sht — «meet» kabi eshitiladi", "Food from animals.", "I need some meat, too.", "Menga go'sht ham kerak."),
      w("⏳", "until", "ənˈtɪl|antil", "predlog", "…gacha", "Up to a time.", "I didn't get up until twelve.", "O'n ikkigacha turmadim."),
      w("⚡", "immediately", "ɪˈmiːdiətli|imiidiatli", "ravish", "Darhol", "Now, at once.", "I started work immediately.", "Darhol ishni boshladim."),
      w("🏁", "finally", "ˈfaɪnəli|faynali", "ravish", "Nihoyat", "At the end, after a long time.", "We finally got home at eight o'clock.", "Nihoyat soat sakkizda uyga yetib keldik."),
      w("⌛", "wait", "weɪt|ueyt", "fe'l", "Kutmoq", "Stay until something happens.", "Please wait here.", "Iltimos, shu yerda kuting."),
      w("😞", "unfortunately", "ʌnˈfɔːtʃənətli|anfoochanatli", "ravish", "Afsuski", "Sadly; it's bad that…", "Unfortunately, I forgot the time of my meeting.", "Afsuski, yig'ilish vaqtini unutib qo'ydim."),
    ],
  },
];

const EXCUSES = `WHY WEREN'T YOU AT WORK?
We asked six companies to tell us people's reasons for not coming to work. Here are some examples.
• «I was in the kitchen and the fridge fell on me.»
• «My dog was ill.»
• «I went shopping because I didn't have a birthday present for my wife.»
• «I watched a horror film and I couldn't sleep.»
• «I ate something bad.»
• «I didn't want to come to work.»`;
const read = reading(EXCUSES);

export const A1_26_EXERCISES: SeedExercise[] = [
  {
    title: "Bahonalar",
    skill: "O'qish",
    kind: "reading",
    instructions: "Ishga kelmaslikning haqiqiy sabablarini o'qing. Ular yaxshi yoki yomon bahonami?",
    questions: [
      read("Who told the reasons?", ["Six companies", "Six workers", "A doctor", "The text doesn't say."]),
      read("What fell on one worker?", ["The fridge", "A chair", "A dog", "A TV"]),
      read("Why did one worker go shopping?", ["He didn't have a birthday present for his wife.", "He needed food.", "His dog was ill.", "He wanted new clothes."]),
      read("Why couldn't one worker sleep?", ["He watched a horror film.", "His dog was ill.", "He ate something bad.", "He had a headache."]),
      read("Which excuse is the most honest?", ["«I didn't want to come to work.»", "«My dog was ill.»", "«The fridge fell on me.»", "«I ate something bad.»"]),
      read("«I couldn't sleep» — «couldn't» is the past of…", ["can't", "don't", "isn't", "won't"]),
    ],
  },
  {
    title: "Nathan nega kelmadi?",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Nathan kecha nega ishga kelmaganini tushuntiradi. Tinglang va to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("9.3"), [
        ["«So where ___ you yesterday, Nathan?»", "were", "was", "did"],
        ["«I'm very sorry. I ___ a bad night.»", "had", "have", "did"],
        ["«I didn't ___.»", "sleep", "slept", "sleeping"],
        ["«Well, I ___ a horror film.»", "watched", "watch", "saw"],
        ["«Did you ___ the office in the morning?»", "phone", "phoned", "call"],
        ["«I didn't get up until ___ o'clock.»", "twelve", "ten", "eleven"],
        ["«I phoned in the ___.»", "afternoon", "evening", "morning"],
      ]),
    ],
  },
  {
    title: "didn't + fe'l",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Inkor: didn't + fe'l (o'zgarmagan): I didn't sleep. So'roq: Did + ega + fe'l? Did you phone? Qisqa javob: Yes, I did. / No, I didn't.",
    questions: [
      say("Did you ___ to work yesterday?", ["go", "went", "goes", "going"]),
      say("No, I ___. I went shopping.", ["didn't", "don't", "wasn't", "not"]),
      say("He didn't ___ it.", ["like", "liked", "likes", "liking"]),
      say("Did you ___ at home yesterday?", ["stay", "stayed", "stays", "staying"]),
      say("Did you stay at home? — Yes, I ___.", ["did", "do", "stayed", "was"]),
      say("I didn't ___ well.", ["feel", "felt", "feeled", "feels"]),
      say("I ___ something bad.", ["ate", "eat", "eated", "eats"]),
      say("What did you ___?", ["eat", "ate", "eated", "eating"]),
      say("Why ___ you have a bad night?", ["did", "do", "were", "was"]),
      say("___ she fall?", ["Did", "Was", "Does", "Is"]),
    ],
  },
  {
    title: "Ikki suhbat",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Ikki suhbatni tinglang va javoblaringizni tekshiring.",
    questions: [
      gaps(track("9.4"), [
        ["1. «Did you go to work yesterday?» — «No, I ___.»", "didn't", "don't", "wasn't"],
        ["1. «I ___ shopping.»", "went", "go", "goed"],
        ["1. «Was your boss angry?» — «Yes. He didn't ___ it.»", "like", "liked", "likes"],
        ["2. «Did you stay at home yesterday?» — «Yes, I ___.»", "did", "do", "was"],
        ["2. «I didn't ___ well.»", "feel", "felt", "fell"],
        ["2. «I ___ something bad.»", "ate", "eat", "eight"],
      ]),
    ],
  },
  {
    title: "Urg'uli so'zlar",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Inkor va so'roq gaplarda muhim so'zlar urg'u bilan aytiladi: They LOST their DOG. Tinglang va eshitganingizni tanlang.",
    questions: [
      gaps(track("9.6"), [
        ["1. They lost their ___.", "dog", "cat", "keys"],
        ["2. Did you phone the ___?", "office", "doctor", "school"],
        ["3. He didn't ___ it.", "like", "see", "eat"],
        ["4. Did you go to the ___?", "doctor", "office", "party"],
      ]),
    ],
  },
  {
    title: "Jennyning yomon kuni",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Jenny kechagi omadsiz kuni haqida gapiradi. Tinglang va savollarga javob bering.",
    questions: [
      hearing(track("9.7"))("How did she sleep?", ["Badly", "Well", "She didn't sleep.", "She doesn't say."]),
      hearing(track("9.7"))("How late was she for work?", ["Two hours", "Three hours", "One hour", "She wasn't late."]),
      hearing(track("9.7"))("What did she forget?", ["The time of her meeting", "Her phone", "Her lunch", "Her keys"]),
      hearing(track("9.7"))("Who was ill?", ["Her daughter", "Jenny", "Her husband", "Her boss"]),
      hearing(track("9.7"))("Who did they meet on the way out?", ["An old friend, Cathy", "Her boss", "The doctor", "Her husband"]),
      hearing(track("9.7"))("Why did they miss the last bus?", ["Cathy talked for about an hour.", "They forgot the time.", "The bus was early.", "They were at the doctor's."]),
      hearing(track("9.7"))("When did they finally get home?", ["At eight o'clock in the evening", "At six o'clock", "At ten o'clock", "At midnight"]),
    ],
  },
  {
    title: "Fe'llarning o'tgan shakli",
    skill: "Tinglash",
    kind: "listenmatch",
    instructions: "Fe'llar va ularning o'tgan zamon shakli aytiladi. O'tgan zamon shaklini yozing.",
    questions: [
      slots(track("9.8"), [
        ["fall →", "fell"],
        ["feel →", "felt"],
        ["forget →", "forgot"],
        ["go →", "went"],
        ["have →", "had"],
        ["meet →", "met"],
        ["miss →", "missed"],
        ["sleep →", "slept"],
      ]),
    ],
  },
  {
    title: "Bir xil eshitiladi",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Ba'zi so'zlar bir xil eshitiladi, lekin ma'nosi boshqa: ate — eight, knew — new, your — you're, two — too. Kontekstga qarab to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("9.9"), [
        ["1. He ___ six apples…", "ate", "eight"],
        ["1. …and ___ bananas.", "eight", "ate"],
        ["2. I ___ her when we worked at the hospital.", "knew", "new"],
        ["2. She's got a ___ job now.", "new", "knew"],
        ["3. ___ late for your train.", "You're", "Your"],
        ["4. Do you know the woman in flat number ___?", "two", "too"],
        ["4. I know her, ___.", "too", "two"],
      ]),
    ],
  },
  {
    title: "Kontekstga qarang",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Oltita gapni tinglang va to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("9.10"), [
        ["1. Are these ___ keys?", "your", "you're"],
        ["2. She said ___ and left.", "bye", "buy"],
        ["3. Did you ___ a letter or an email?", "write", "right"],
        ["4. The children went for a swim in the ___.", "sea", "see"],
        ["5. I waited for an ___, but she never came.", "hour", "our"],
        ["6. Is it ___ flat?", "their", "there"],
      ]),
    ],
  },
  {
    title: "Savol yozing",
    skill: "Grammatika",
    kind: "type",
    instructions: "Did bilan savol yozing. Misol: you / see your friends / last week → Did you see your friends last week?",
    questions: written([
      ["you / see your friends / last week", "Did you see your friends last week?"],
      ["you / watch a film / yesterday", "Did you watch a film yesterday?"],
      ["she / write an email", "Did she write an email?"],
      ["they / go to a party", "Did they go to a party?"],
      ["he / buy something expensive", "Did he buy something expensive?"],
      ["you / leave work early", "Did you leave work early?"],
      ["Did you phone the office? (✗)", "No, I didn't."],
      ["Did she go to the doctor? (✓)", "Yes, she did."],
      ["I / sleep / well (−)", "I didn't sleep well.|I did not sleep well."],
      ["the bus / come (−)", "The bus didn't come.|The bus did not come."],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("I didn't *slept well.", "didn't + fe'l (o'zgarmagan): sleep."),
      mistake("*Do you go to work yesterday?", "O'tgan zamon — Did you go…?"),
      mistake("Did you *went shopping?", "Did + go."),
      mistake("Did you phone? — Yes, I *phoned.", "Qisqa javob: Yes, I did."),
      mistake("He *not liked it.", "Inkor: He didn't like it."),
      mistake("I *can't sleep last night.", "O'tgan zamon — couldn't."),
      mistake("She *feeled sick.", "feel → felt."),
      mistake("I *forgetted my homework.", "forget → forgot."),
      mistake("He ate six apples and *ate bananas.", "Son — eight."),
      mistake("*Your late for the train.", "You are → You're."),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Juftlarni ulang.",
    questions: pairs([
      ["sleep|badly", "miss|the train", "feel|sick", "have|a headache"],
      ["knew|new", "ate|eight", "your|you're", "buy|bye"],
      ["write|right", "meet|meat", "see|sea", "hour|our"],
      ["Did you go to work?|No, I didn't.", "Was your boss angry?|Yes, he was.", "What did you eat?|I don't know.", "Did you see the doctor?|Yes, I did."],
      ["I'm late. The bus didn't come.|That's bad luck.", "I lost my keys.|Oh no!", "I didn't have my lunch.|Never mind.", "I didn't sleep.|Why not?"],
    ]),
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "I didn't sleep.",
      "Did you phone the office?",
      "No, I didn't.",
      "I didn't get up until twelve o'clock.",
      "Did you go to the doctor?",
      "He didn't like it.",
      "I didn't feel well.",
      "We missed the last bus home.",
      "What did you do last night?",
      "When did you leave school?",
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "I didn't sell the car.",
      "Did you see the film?",
      "They lost their dog.",
      "Did you phone the office?",
      "He didn't like it.",
      "Did you go to the doctor?",
      "I'm very sorry. I had a bad night.",
      "I slept badly and missed my train.",
      "Are these your keys?",
      "That's bad luck!",
    ]),
  },
];
