/**
 * A1, 20-dars — «Yordam bera olasizmi?». Iltimos qilish va javob berish.
 * Grammatika: Can you…? / Could you…? (iltimos), Can I…? (ruxsat), qisqa
 * javoblar; harakat ravishlari — sifat + -ly (quick → quickly), well,
 * hard, fast; ravish fe'ldan keyin keladi. Matn va mashqlar o'zimizniki.
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

export const A1_20_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("⚡", "quickly", "ˈkwɪkli|kuikli", "ravish", "Tez", "In a fast way.", "Please come quickly!", "Iltimos, tez keling!"),
      w("👍", "well", "wel|uel", "ravish", "Yaxshi (ravish)", "In a good way. «Good» is an adjective, «well» is an adverb.", "She speaks English well.", "U inglizcha yaxshi gapiradi."),
      w("👎", "badly", "ˈbædli|bedli", "ravish", "Yomon (ravish)", "In a bad way.", "I sing badly.", "Men yomon qo'shiq aytaman."),
      w("🧐", "carefully", "ˈkeəfəli|keafali", "ravish", "Ehtiyotkorlik bilan, diqqat bilan", "With a lot of attention.", "Read the question carefully.", "Savolni diqqat bilan o'qing."),
      w("🤫", "quietly", "ˈkwaɪətli|kuayatli", "ravish", "Sekin, ohista (ovoz)", "Without much noise.", "Please speak quietly. The baby is asleep.", "Iltimos, sekin gapiring. Chaqaloq uxlayapti."),
      w("📣", "loudly", "ˈlaʊdli|laudli", "ravish", "Baland ovozda", "With a lot of noise.", "He always speaks loudly on the phone.", "U telefonda doim baland ovozda gapiradi."),
      w("💪", "hard", "hɑːd|haad", "ravish", "Qattiq, astoydil", "With a lot of effort. (No -ly!)", "She works very hard.", "U juda astoydil ishlaydi."),
      w("😌", "easily", "ˈiːzəli|iizali", "ravish", "Oson, osonlik bilan", "Without problems.", "He can answer easily.", "U osonlik bilan javob bera oladi."),
      w("🌸", "beautifully", "ˈbjuːtɪfli|byuutifli", "ravish", "Chiroyli qilib", "In a beautiful way.", "She sings beautifully.", "U chiroyli qo'shiq aytadi."),
      w("💯", "perfectly", "ˈpɜːfɪktli|pyofiktli", "ravish", "Mukammal, a'lo darajada", "With no mistakes.", "He speaks Russian perfectly.", "U ruschani mukammal gapiradi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🚪", "close", "kləʊz|klouz", "fe'l", "Yopmoq", "To shut.", "Can you close the window, please?", "Derazani yopib qo'ya olasizmi?"),
      w("💡", "turn on", "ˌtɜːn ˈɒn|tyon on", "fe'l", "Yoqmoq", "To start a machine or a light.", "Could you turn on the light?", "Chiroqni yoqib bera olasizmi?"),
      w("🔌", "turn off", "ˌtɜːn ˈɒf|tyon of", "fe'l", "O'chirmoq", "To stop a machine or a light.", "Please turn off your phones.", "Iltimos, telefonlaringizni o'chiring."),
      w("📦", "carry", "ˈkæri|keri", "fe'l", "Ko'tarib bormoq", "To hold something and take it with you.", "Can you carry my bag?", "Sumkamni ko'tarishib yubora olasizmi?"),
      w("🤲", "borrow", "ˈbɒrəʊ|borou", "fe'l", "Qarzga olmoq", "To take something and give it back later.", "Can I borrow your pen?", "Ruchkangizni olib tursam maylimi?"),
      w("🫴", "lend", "lend|lend", "fe'l", "Qarzga bermoq", "To give something for a short time.", "Could you lend me your phone?", "Telefoningizni berib turolmaysizmi?"),
      w("👉", "show", "ʃəʊ|shou", "fe'l", "Ko'rsatmoq", "To let someone see something.", "Can you show me the way to the station?", "Vokzalga yo'lni ko'rsatib bera olasizmi?"),
      w("🗣️", "tell", "tel|tel", "fe'l", "Aytmoq, aytib bermoq", "To give information to someone.", "Can you tell me the time?", "Soat necha bo'lganini aytib bera olasizmi?"),
      w("🎁", "give", "ɡɪv|giv", "fe'l", "Bermoq", "To put something in someone's hand.", "Could you give me the salt, please?", "Tuzni uzatib yuborasizmi?"),
      w("🧑‍🏫", "explain", "ɪkˈspleɪn|ikspleyn", "fe'l", "Tushuntirmoq", "To make something easy to understand.", "Can you explain this rule?", "Bu qoidani tushuntirib bera olasizmi?"),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🙏", "could you", "ˈkʊd juː|kud yu", "ibora", "…bera olmaysizmi? (muloyim iltimos)", "A very polite way to ask for help.", "Could you help me, please?", "Menga yordam bera olmaysizmi?"),
      w("👌", "of course", "əv ˈkɔːs|ov koos", "ibora", "Albatta", "Yes, sure.", "— Can I sit here? — Of course!", "— Shu yerga o'tirsam maylimi? — Albatta!"),
      w("🎩", "certainly", "ˈsɜːtnli|syotnli", "ravish", "Albatta (rasmiy)", "A very polite «yes».", "— Could you bring the menu? — Certainly.", "— Menyuni olib kela olasizmi? — Albatta."),
      w("😕", "I'm afraid", "aɪm əˈfreɪd|aym afreyd", "ibora", "Afsuski", "A polite way to say «sorry, no».", "I'm afraid I can't help you.", "Afsuski, sizga yordam bera olmayman."),
      w("🤝", "a favour", "ə ˈfeɪvə|a feyva", "ibora", "Iltifot, yaxshilik", "Something kind you do to help someone.", "Can you do me a favour?", "Bir iltifot qila olasizmi?"),
      w("👫", "together", "təˈɡeðə|tageza", "ravish", "Birga", "With each other.", "Let's do it together.", "Keling, buni birga qilamiz."),
      w("📋", "instructions", "ɪnˈstrʌkʃnz|instrakshnz", "ot (ko'plik)", "Ko'rsatmalar, yo'riqnoma", "Information about how to do something.", "Read the instructions carefully.", "Ko'rsatmalarni diqqat bilan o'qing."),
      w("📜", "rules", "ruːlz|ruulz", "ot (ko'plik)", "Qoidalar", "What you must and mustn't do.", "Can you explain the rules of the game?", "O'yin qoidalarini tushuntirib bera olasizmi?"),
      w("🔇", "noise", "nɔɪz|noyz", "ot", "Shovqin", "A loud or unpleasant sound.", "What's that noise?", "Bu qanday shovqin?"),
      w("🙋", "ask", "ɑːsk|aask", "fe'l", "So'ramoq", "To say a question or a request.", "Can I ask you a question?", "Sizga bir savol bersam maylimi?"),
    ],
  },
];

const ADJ_ADV = ["quick", "quickly"];

const NOTES = `NOTES FROM YOUR TEACHER — Mrs Brown
Dear students,
Some simple rules for our English classes:
• Please come on time. Our lessons start at 9:00.
• Turn off your phones, or put them on silent.
• Listen carefully and speak loudly — I want to hear you!
• Can't understand something? Just ask: "Could you explain that again, please?" Asking is never a problem.
• Do you need a pen or a dictionary? You can borrow one from me.
• Work together in groups, but speak English, not Uzbek!
• Do your homework carefully. You don't need to write perfectly — mistakes help us learn.
See you on Monday!`;
const tf = trueFalse(NOTES);

const OFFICE = `Excuse me, Sherzod, can you do me a favour?
Sure. What is it?
Could you carry these boxes to the meeting room? They're very heavy.
Of course. Where's the meeting room?
It's upstairs, on the third floor. And can you turn on the projector? I'm afraid I can't do it — I don't understand the instructions.
No problem. I can show you. It's easy.
Thank you! Oh, and could you lend me your laptop for the meeting? Mine is very slow today.
I'm afraid I need it — I work on it all day. But you can use the computer in the meeting room.
OK, thanks a lot!`;
const hear = hearing(OFFICE);

export const A1_20_EXERCISES: SeedExercise[] = [
  {
    title: "Ravishlar",
    skill: "Tinglash",
    kind: "listen",
    instructions: "So'z o'qiladi. Eshitganingizni toping.",
    questions: [
      listen("quickly", ["quickly", "quietly", "quick", "quite"]),
      listen("quietly", ["quietly", "quickly", "quiet", "quite"]),
      listen("carefully", ["carefully", "careful", "cheerfully", "perfectly"]),
      listen("loudly", ["loudly", "lovely", "loud", "lonely"]),
      listen("badly", ["badly", "bad", "body", "baby"]),
      listen("easily", ["easily", "easy", "early", "eagerly"]),
      listen("borrow", ["borrow", "tomorrow", "barrow", "narrow"]),
      listen("lend", ["lend", "land", "lent", "send"]),
      listen("certainly", ["certainly", "certain", "surely", "curtains"]),
      listen("could you", ["could you", "can you", "would you", "do you"]),
    ],
  },
  {
    title: "Sifat yoki ravish?",
    skill: "Grammatika",
    kind: "choice",
    instructions:
      "Sifat otni tasvirlaydi (a quick answer), ravish fe'lni (answer quickly). Ravish ko'pincha sifat + -ly.",
    questions: [
      pick("He is a ___ runner.", ADJ_ADV, 0),
      pick("He runs ___.", ADJ_ADV, 1),
      pick("Please speak ___. The baby is asleep.", ["quiet", "quietly"], 1),
      pick("It's a ___ room.", ["quiet", "quietly"], 0),
      pick("She is a ___ driver.", ["careful", "carefully"], 0),
      pick("She drives ___.", ["careful", "carefully"], 1),
      pick("Your English is ___!", ["good", "well"], 0, "Sifat (to be dan keyin) — good."),
      pick("You speak English very ___!", ["good", "well"], 1, "Ravish (fe'ldan keyin) — well."),
      pick("This test is ___.", ["easy", "easily"], 0),
      pick("I can do this test ___.", ["easy", "easily"], 1),
    ],
  },
  {
    title: "Ravish yasang",
    skill: "Grammatika",
    kind: "type",
    instructions: "Sifatdan ravish yasang: odatda + ly; -y bilan tugasa → -ily; good → well; hard, fast o'zgarmaydi.",
    questions: written([
      ["quick", "quickly"],
      ["slow", "slowly"],
      ["careful", "carefully"],
      ["loud", "loudly"],
      ["easy", "easily", "-y → -ily."],
      ["happy", "happily"],
      ["good", "well", "good → well (noto'g'ri ravish)."],
      ["hard", "hard", "hard — o'zgarmaydi (hardly — boshqa ma'no!)."],
      ["fast", "fast", "fast — o'zgarmaydi."],
      ["beautiful", "beautifully"],
    ]),
  },
  {
    title: "Iltimos qiling",
    skill: "Vaziyat",
    kind: "situation",
    instructions: "Vaziyatni o'qing va unga mos inglizcha iborani tanlang.",
    questions: [
      say("Xona issiq. Do'stingizdan derazani ochishni so'rang.", ["Can you open the window, please?", "Can you to open the window?", "You can open window?", "Open you the window can?"]),
      say("Darsda ruchkangiz yo'q. Qo'shningizdan so'rang.", ["Can I borrow your pen?", "Can you borrow me your pen?", "Can I lend your pen?", "Borrow pen me."]),
      say("Notanish odamdan vokzalga yo'l ko'rsatishni muloyim so'rang.", ["Could you show me the way to the station, please?", "Show me station!", "Could you to show me the station?", "You show way station?"]),
      say("O'qituvchi qoidani tez tushuntirdi, tushunmadingiz.", ["Could you explain that again, please?", "Explain again you could?", "Can you explaining again?", "Again explain, please me."]),
      say("Restoranda ofitsiant «Could you bring some water?» iltimosingizga rozi.", ["Certainly.", "I'm afraid yes.", "At all.", "Badly."]),
      say("Siz do'stingizga yordam bera olmaysiz.", ["I'm afraid I can't.", "Of course I can't.", "Certainly not can.", "I'm afraid yes."]),
      say("Kinoteatrda telefonlarni o'chirish kerak.", ["Please turn off your phones.", "Please turn on your phones.", "Please close your phones.", "Please give your phones."]),
      say("Xona qorong'i. Chiroqni yoqishni so'rang.", ["Could you turn on the light, please?", "Could you turn off the light, please?", "Could you close the light?", "Could you carry the light?"]),
      say("Do'stingiz sizdan bir iltifot so'ramoqchi. U nima deydi?", ["Can you do me a favour?", "Can you make me a favour?", "Can I favour you?", "Do a favour me can?"]),
      say("Kimdir «Can I sit here?» deb so'radi. Rozisiz.", ["Of course!", "I'm afraid.", "Badly.", "No, of course."]),
    ],
  },
  {
    title: "borrow yoki lend?",
    skill: "Lug'at",
    kind: "choice",
    instructions: "borrow — olib turmoq (Can I borrow…?), lend — berib turmoq (Can you lend me…?).",
    questions: [
      say("Can I ___ your dictionary?", ["borrow", "lend", "give back", "show"]),
      say("Can you ___ me your dictionary?", ["lend", "borrow", "carry", "turn on"]),
      say("Could I ___ your umbrella? It's raining.", ["borrow", "lend", "tell", "explain"]),
      say("Could you ___ me some money? I can give it back tomorrow.", ["lend", "borrow", "show", "close"]),
      say("My brother often ___ my clothes!", ["borrows", "lends", "shows", "explains"]),
      say("The library ___ books to students.", ["lends", "borrows", "turns on", "asks"]),
      say("Can you ___ me the photos from the wedding?", ["show", "borrow", "turn off", "close"]),
      say("Can you ___ me the way to the bank?", ["tell", "borrow", "lend", "carry"]),
      say("Could you ___ the door, please? It's cold.", ["close", "lend", "borrow", "explain"]),
      say("Can you ___ this bag? It's very heavy.", ["carry", "tell", "show", "borrow"]),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Chap va o'ng tomonni ulang.",
    questions: pairs([
      ["quick|quickly", "careful|carefully", "easy|easily", "good|well"],
      ["quietly|sekin, ohista", "loudly|baland ovozda", "badly|yomon", "hard|astoydil"],
      ["turn on|yoqmoq", "turn off|o'chirmoq", "close|yopmoq", "carry|ko'tarmoq"],
      ["borrow|olib turmoq", "lend|berib turmoq", "show|ko'rsatmoq", "explain|tushuntirmoq"],
      ["Could you help me?|Of course!", "Can I borrow your pen?|Sure, here you are.", "Can you lend me $100?|I'm afraid I can't.", "Could you bring the menu?|Certainly."],
      ["together|birga", "noise|shovqin", "rules|qoidalar", "ask|so'ramoq"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("She speaks English very *good.", "Fe'ldan keyin ravish — well."),
      mistake("He drives *careful.", "Ravish — carefully."),
      mistake("Please speak *quiet.", "Ravish — quietly."),
      mistake("Can you *to help me?", "Can you + fe'l: Can you help me?"),
      mistake("Can I *lend your pen?", "O'zim olib turaman — borrow: Can I borrow your pen?"),
      mistake("Could you *borrow me your phone?", "Berib turing — lend: Could you lend me…?"),
      mistake("She works very *hardly.", "hard o'zgarmaydi: She works very hard. (hardly — deyarli … emas)"),
      mistake("He speaks *quickly English.", "Ravish obyektdan keyin: He speaks English quickly."),
      mistake("Can you do me a *favourite?", "Iltifot — favour: do me a favour."),
      mistake("I'm afraid I *can help you. Sorry!", "Afsuski + inkor: I'm afraid I can't help you."),
    ],
  },
  {
    title: "Suhbatni davom ettiring",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("Could you help me with these bags?", ["Of course! They look heavy.", "Of course not can.", "I'm afraid yes.", "Yes, I could helped."]),
      say("Can I borrow your phone for a minute?", ["Sure, here you are.", "Sure, I borrow.", "Yes, you can lend.", "Of course I'm afraid."]),
      say("Could you lend me some money?", ["I'm afraid I can't. I haven't got any.", "Yes, I'm afraid.", "Yes, borrow me.", "Certainly not, of course."]),
      say("Can you speak more slowly, please?", ["Sorry! Yes, of course.", "Yes, I speak slow.", "I'm slowly.", "No, you can."]),
      say("Can you do me a favour?", ["Sure. What do you need?", "Sure, I'm favour.", "Yes, I do a favourite.", "No, at all."]),
      say("How well can you speak English?", ["Quite well, but I make mistakes.", "Quite good, I speaks.", "I can English well speak.", "Very good I."]),
      say("Could you turn off the TV? It's very loud.", ["Oh, sorry! Of course.", "Yes, I turn on.", "It's very quietly.", "Of course, loud."]),
      say("Can you show me how this app works?", ["Sure. It's easy — look.", "Sure, I lend you.", "Sure, I borrow it.", "Sure, it's easily."]),
      say("Could you bring us the bill, please?", ["Certainly. One moment.", "Certainly not, sir.", "I'm afraid yes.", "Of course, borrow."]),
      say("Can I ask you a question?", ["Yes, of course. Go ahead.", "Yes, ask me can.", "No, I'm question.", "Of course, at all."]),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "Can you help me, please?",
      "Could you open the window?",
      "Can I borrow your pen?",
      "Could you lend me your phone?",
      "She speaks English very well.",
      "Please speak quietly.",
      "Read the instructions carefully.",
      "I'm afraid I can't help you.",
      "Can you do me a favour?",
      "Let's do it together.",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: written([
      ["___ you help me, please? (muloyim)", "Could|Can"],
      ["Can I ___ your umbrella? (olib tursam)", "borrow"],
      ["Could you ___ me your book? (berib tursangiz)", "lend"],
      ["She sings ___. (chiroyli qilib)", "beautifully"],
      ["He drives very ___. (ehtiyotkorlik bilan)", "carefully"],
      ["You speak English very ___!", "well"],
      ["It's dark. Could you turn ___ the light?", "on"],
      ["— Can I sit here? — Of ___!", "course"],
      ["I'm ___ I can't come. Sorry!", "afraid"],
      ["Can I ___ you a question?", "ask"],
    ]),
  },
  {
    title: "O'qituvchining eslatmasi",
    skill: "O'qish",
    kind: "truefalse",
    instructions: "Eslatmani o'qing va gap to'g'ri yoki noto'g'ri ekanini belgilang.",
    questions: [
      tf("The lessons start at 9:00.", true),
      tf("Students can use their phones in class.", false, "Turn off your phones, or put them on silent."),
      tf("Mrs Brown wants students to speak loudly.", true),
      tf("Students mustn't ask questions.", false, "Asking is never a problem."),
      tf("Students can borrow a pen from the teacher.", true),
      tf("Students can speak Uzbek in groups.", false, "Speak English, not Uzbek!"),
      tf("Students should do their homework carefully.", true),
      tf("Homework must be perfect.", false, "You don't need to write perfectly."),
      tf("Mrs Brown thinks mistakes help us learn.", true),
      tf("The next lesson is on Monday.", true),
    ],
  },
  {
    title: "Ofisda",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Birinchi iltimos nima?", ["Qutilarni ko'tarib borish", "Noutbukni berib turish", "Chiroqni yoqish", "Kofe olib kelish"]),
      hear("Qutilar qanday?", ["Juda og'ir", "Juda yengil", "Bo'sh", "Kichik"]),
      hear("Majlis xonasi qayerda?", ["Uchinchi qavatda", "Birinchi qavatda", "Pastda", "Ikkinchi qavatda"]),
      hear("Ikkinchi iltimos nima?", ["Proyektorni yoqish", "Proyektorni o'chirish", "Derazani yopish", "Qahva olib kelish"]),
      hear("Ayol nega o'zi proyektorni yoqa olmaydi?", ["Ko'rsatmani tushunmaydi", "Vaqti yo'q", "Kaliti yo'q", "Proyektor buzilgan"]),
      hear("Sherzod proyektor haqida nima deydi?", ["Oson, ko'rsatib beraman", "Juda qiyin", "Buzilgan", "Bilmayman"]),
      hear("Uchinchi iltimos nima?", ["Noutbukni berib turish", "Telefonni berib turish", "Pul berib turish", "Ruchka berib turish"]),
      hear("Sherzod noutbukini beradimi?", ["Yo'q, unga o'zi kerak", "Ha, albatta", "Ha, ertaga", "Aytilmagan"]),
      hear("Ayol nimadan foydalanishi mumkin?", ["Majlis xonasidagi kompyuterdan", "Sherzodning telefonidan", "Uyidagi noutbukdan", "Proyektordan"]),
      hear("Ayolning noutbuki qanday?", ["Bugun juda sekin", "Buzilgan", "Uyda qolgan", "Yangi"]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "Can you help me, please?",
      "Could you open the window?",
      "Can I borrow your pen?",
      "Of course!",
      "I'm afraid I can't.",
      "Can you do me a favour?",
      "She speaks English very well.",
      "Please speak quietly.",
      "carefully",
      "certainly",
    ]),
  },
];
