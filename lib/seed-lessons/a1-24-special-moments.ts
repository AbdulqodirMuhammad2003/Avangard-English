/**
 * A1, 24-dars — «Unutilmas lahzalar». Bayramlar, tabriklar, qiziqish
 * bildirish. Grammatika: obyekt olmoshlari (me, you, him, her, it, us,
 * them) — fe'l va predlogdan keyin; o'tgan zamon iboralari (last night,
 * last week, this morning, the day before yesterday). Matn va mashqlar
 * o'zimizniki.
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

export const A1_24_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🫵", "me", "miː|mii", "olmosh", "Meni, menga", "Object form of «I».", "Can you help me?", "Menga yordam bera olasizmi?"),
      w("👨", "him", "hɪm|him", "olmosh", "Uni, unga (erkak)", "Object form of «he».", "I called him yesterday.", "Kecha unga qo'ng'iroq qildim."),
      w("👪", "us", "ʌs|as", "olmosh", "Bizni, bizga", "Object form of «we».", "Our teacher helped us a lot.", "O'qituvchimiz bizga ko'p yordam berdi."),
      w("👥", "them", "ðem|zem", "olmosh", "Ularni, ularga", "Object form of «they».", "I visited them last week.", "O'tgan hafta ularni ko'rgani bordim."),
      w("🌃", "last night", "ˌlɑːst ˈnaɪt|laast nayt", "ibora", "Kecha kechqurun (tunda)", "The night before today.", "I watched a film last night.", "Kecha kechqurun film ko'rdim."),
      w("📅", "last week", "ˌlɑːst ˈwiːk|laast uiik", "ibora", "O'tgan hafta", "The week before this one.", "We visited Samarkand last week.", "O'tgan hafta Samarqandga borib keldik."),
      w("🗓️", "last month", "ˌlɑːst ˈmʌnθ|laast mans", "ibora", "O'tgan oy", "The month before this one.", "She started a new job last month.", "U o'tgan oy yangi ishni boshladi."),
      w("📆", "last year", "ˌlɑːst ˈjɪə|laast yiia", "ibora", "O'tgan yil", "The year before this one.", "We moved to a new flat last year.", "O'tgan yili yangi kvartiraga ko'chdik."),
      w("⏮️", "the day before yesterday", "ðə ˌdeɪ bɪˌfɔː ˈjestədeɪ|za dey bifoo yestadey", "ibora", "Avvalgi kuni (o'tgan kun)", "Two days ago.", "I was ill the day before yesterday.", "O'tgan kuni kasal edim."),
      w("🌅", "this morning", "ˌðɪs ˈmɔːnɪŋ|zis mooning", "ibora", "Bugun ertalab", "The morning of today.", "I talked to her this morning.", "Bugun ertalab u bilan gaplashdim."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🎉", "party", "ˈpɑːti|paati", "ot", "Ziyofat, bazm", "A meeting of friends with food and music.", "We had a great party.", "Zo'r ziyofat qildik."),
      w("🎁", "present", "ˈpreznt|preznt", "ot", "Sovg'a", "A gift.", "Thank you for the present!", "Sovg'a uchun rahmat!"),
      w("💌", "invitation", "ˌɪnvɪˈteɪʃn|inviteyshn", "ot", "Taklifnoma", "A card or a message that asks you to come.", "I got an invitation to a wedding.", "To'yga taklifnoma oldim."),
      w("🥳", "celebrate", "ˈselɪbreɪt|selibreyt", "fe'l", "Nishonlamoq", "To have a party for a special day.", "We always celebrate Navruz with our family.", "Navro'zni doim oilamiz bilan nishonlaymiz."),
      w("💑", "anniversary", "ˌænɪˈvɜːsəri|enivyosari", "ot", "Yubiley, yillik", "The same date as a special day in the past.", "It's my parents' wedding anniversary.", "Bugun ota-onamning to'y yilligi."),
      w("🎓", "graduation", "ˌɡrædʒuˈeɪʃn|grejueyshn", "ot", "Bitiruv", "The day you finish university or school.", "My graduation was in June.", "Bitiruvim iyunda bo'ldi."),
      w("🎆", "New Year", "ˌnjuː ˈjɪə|nyuu yiia", "ot", "Yangi yil", "The first day of January.", "We celebrated New Year at home.", "Yangi yilni uyda nishonladik."),
      w("🌱", "Navruz", "nævˈruːz|navruuz", "ot", "Navro'z", "The spring holiday on the 21st of March.", "We cook sumalak for Navruz.", "Navro'zga sumalak pishiramiz."),
      w("🎇", "fireworks", "ˈfaɪəwɜːks|fayauyoks", "ot (ko'plik)", "Mushakbozlik, salyut", "Lights and colours in the night sky.", "We watched the fireworks at midnight.", "Yarim tunda mushakbozlikni tomosha qildik."),
      w("🎂", "cake", "keɪk|keyk", "ot", "Tort", "A sweet food for birthdays.", "My mother made a big cake.", "Onam katta tort pishirdi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🎆", "Happy New Year", "ˌhæpi njuː ˈjɪə|hepi nyuu yiia", "ibora", "Yangi yilingiz bilan", "You say it on the 1st of January.", "Happy New Year, everyone!", "Hammani yangi yil bilan!"),
      w("👏", "well done", "ˌwel ˈdʌn|uel dan", "ibora", "Barakalla, ofarin", "You say it when someone does something well.", "You passed the exam? Well done!", "Imtihondan o'tdingmi? Barakalla!"),
      w("😲", "no way", "ˌnəʊ ˈweɪ|nou uey", "ibora", "Bo'lishi mumkin emas! (hayrat)", "You say it when you are very surprised.", "— I won the competition! — No way!", "— Musobaqada g'olib bo'ldim! — Bo'lishi mumkin emas!"),
      w("🤔", "how interesting", "ˌhaʊ ˈɪntrəstɪŋ|xau intresting", "ibora", "Qanday qiziq!", "You say it to show interest.", "— My grandfather was a pilot. — How interesting!", "— Bobom uchuvchi bo'lgan. — Qanday qiziq!"),
      w("👍", "that's great", "ˌðæts ˈɡreɪt|zets greyt", "ibora", "Ajoyib!", "You say it about good news.", "— I've got a new job. — That's great!", "— Yangi ishga kirdim. — Ajoyib!"),
      w("😞", "what a pity", "ˌwɒt ə ˈpɪti|uot a piti", "ibora", "Afsus!", "You say it about bad news.", "— I can't come to the party. — What a pity!", "— Ziyofatga kela olmayman. — Afsus!"),
      w("🎈", "have fun", "hæv ˈfʌn|hev fan", "ibora", "Maza qiling, yaxshi dam oling", "Enjoy yourself!", "Have fun at the party!", "Ziyofatda maza qiling!"),
      w("🍽️", "enjoy your meal", "ɪnˌdʒɔɪ jɔː ˈmiːl|injoy yoo miil", "ibora", "Yoqimli ishtaha", "You say it before people eat.", "Here's your plov. Enjoy your meal!", "Mana palovingiz. Yoqimli ishtaha!"),
      w("💐", "best wishes", "ˌbest ˈwɪʃɪz|best uishiz", "ibora", "Eng yaxshi tilaklar bilan", "You write it at the end of a card.", "Best wishes, Malika.", "Eng yaxshi tilaklar bilan, Malika."),
      w("🙏", "thanks a lot", "ˌθæŋks ə ˈlɒt|senks a lot", "ibora", "Katta rahmat", "Thank you very much (informal).", "Thanks a lot for your help!", "Yordamingiz uchun katta rahmat!"),
    ],
  },
];

const OBJ = ["me", "you", "him", "her", "it", "us", "them"];

const BLOG = `MY BEST BIRTHDAY — a blog by Kamola
Last year I was eighteen, and it was my best birthday ever. In the morning my parents gave me a beautiful present — a new laptop! My little brother made a card for me. I loved it.
In the evening I celebrated with my friends. We had dinner at a cafe near the park. My best friend, Nilufar, organised everything — I didn't know about it! All my friends were there, and they brought a big chocolate cake. At ten o'clock we watched fireworks from the bridge.
Thank you, Nilufar! I love you!`;
const tf = trueFalse(BLOG);

const CALL = `Hi, Bekzod! How was your weekend?
Great, thanks! My sister's graduation was on Saturday.
No way! Congratulations to her!
Thanks. We were all so happy. My parents gave her a watch.
That's great! Did you have a party?
Yes, we had a small party at home. My grandmother made her famous plov.
How lovely! And what about Sunday?
On Sunday I helped my father in the garden. Then I called my friends and we played football.
Sounds fun! I stayed at home and studied all weekend.
What a pity! Next weekend you can come with us.`;
const hear = hearing(CALL);

export const A1_24_EXERCISES: SeedExercise[] = [
  {
    title: "Iboralar",
    skill: "Tinglash",
    kind: "listen",
    instructions: "Ibora o'qiladi. Eshitganingizni toping.",
    questions: [
      listen("well done", ["well done", "well known", "welcome", "well, no"]),
      listen("what a pity", ["what a pity", "what a party", "what a city", "what's a pity"]),
      listen("no way", ["no way", "no wait", "know why", "the way"]),
      listen("have fun", ["have fun", "have one", "have a fan", "half fun"]),
      listen("last night", ["last night", "last week", "last month", "last nine"]),
      listen("last month", ["last month", "last Monday", "last week", "last moment"]),
      listen("them", ["them", "then", "they", "these"]),
      listen("him", ["him", "her", "his", "hymn"]),
      listen("anniversary", ["anniversary", "university", "January", "unnecessary"]),
      listen("invitation", ["invitation", "information", "imagination", "invention"]),
    ],
  },
  {
    title: "Bayramlar",
    skill: "Rasm",
    kind: "picture",
    instructions: "Rasmga qarang va mos so'zni toping.",
    questions: [
      pick("🎁", ["present", "party", "cake", "invitation"], 0),
      pick("🎂", ["present", "cake", "fireworks", "party"], 1),
      pick("🎇", ["New Year", "cake", "fireworks", "present"], 2),
      pick("💌", ["present", "party", "cake", "invitation"], 3),
      pick("🎓", ["graduation", "anniversary", "wedding", "birthday"], 0),
      pick("🌱", ["New Year", "Navruz", "anniversary", "party"], 1),
      pick("👏", ["what a pity", "no way", "well done", "have fun"], 2),
      pick("😞", ["well done", "that's great", "have fun", "what a pity"], 3),
      pick("🎈", ["have fun", "best wishes", "no way", "well done"], 0),
      pick("🍽️", ["have fun", "enjoy your meal", "best wishes", "thanks a lot"], 1),
    ],
  },
  {
    title: "Obyekt olmoshlari",
    skill: "Grammatika",
    kind: "choice",
    instructions: "I → me, you → you, he → him, she → her, it → it, we → us, they → them.",
    questions: [
      pick("Can you help ___? (I)", OBJ, 0),
      pick("I called ___ yesterday. (he)", OBJ, 2),
      pick("This present is for ___. (she)", OBJ, 3),
      pick("Our teacher helped ___ a lot. (we)", OBJ, 5),
      pick("I visited ___ last week. (they)", OBJ, 6),
      pick("I love this cake. Can I eat ___?", OBJ, 4),
      pick("Where are my keys? I can't find ___.", OBJ, 6),
      pick("Malika is my friend. I often see ___ at the park.", OBJ, 3),
      pick("Aziz phoned. Please call ___ back.", OBJ, 2),
      pick("Thank ___ for the present! (siz)", OBJ, 1),
    ],
  },
  {
    title: "Olmoshni almashtiring",
    skill: "Grammatika",
    kind: "type",
    instructions: "Ajratilgan so'zlarni olmosh bilan almashtirib, butun gapni yozing. Masalan: I called Aziz. → I called him.",
    questions: written([
      ["I called Aziz.", "I called him."],
      ["I visited my grandparents.", "I visited them."],
      ["She helped my brother and me.", "She helped us."],
      ["We love our teacher Mrs Brown.", "We love her."],
      ["He bought the cake.", "He bought it."],
      ["Can you help Malika?", "Can you help her?"],
      ["I watched the fireworks.", "I watched them."],
      ["They invited my sister and me.", "They invited us."],
      ["I know Mr Karimov.", "I know him."],
      ["Give the present to Kamola.", "Give the present to her.|Give it to her."],
    ]),
  },
  {
    title: "Qachon bo'ldi?",
    skill: "Lug'at",
    kind: "choice",
    instructions: "Bugun — 2026-yil 15-oktyabr, payshanba. Qaysi ibora to'g'ri?",
    questions: [
      say("14-oktyabr kechqurun → ___", ["last night", "last week", "last year", "this morning"]),
      say("13-oktyabr → ___", ["the day before yesterday", "yesterday", "last night", "last week"]),
      say("15-oktyabr, soat 8:00 → ___", ["this morning", "last night", "yesterday", "last week"]),
      say("2025-yil → ___", ["last year", "last month", "this year", "yesterday"]),
      say("Sentyabr → ___", ["last month", "last year", "last week", "this month"]),
      say("5–11-oktyabr (dushanba–yakshanba) → ___", ["last week", "last month", "yesterday", "this week"]),
      say("14-oktyabr → ___", ["yesterday", "last night", "the day before yesterday", "last week"]),
      say("«O'tgan hafta» inglizcha qanday?", ["last week", "the last week", "in last week", "week last"]),
      say("«Kecha kechqurun» inglizcha qanday?", ["last night", "yesterday night", "last evening night", "the night last"], "Ko'pincha last night deyiladi."),
      say("«O'tgan yil» inglizcha qanday?", ["last year", "the last year", "on last year", "past year last"]),
    ],
  },
  {
    title: "Nima deysiz?",
    skill: "Vaziyat",
    kind: "situation",
    instructions: "Vaziyatni o'qing va mos iborani tanlang.",
    questions: [
      say("Do'stingiz imtihondan a'lo baho oldi.", ["Well done!", "What a pity!", "Enjoy your meal!", "Best wishes!"]),
      say("Do'stingiz kasal bo'lib, ziyofatga kela olmaydi.", ["What a pity!", "Well done!", "Have fun!", "Happy New Year!"]),
      say("Do'stingiz «I won a car!» dedi. Juda hayron bo'ldingiz.", ["No way!", "Enjoy your meal!", "What a pity!", "Best wishes!"]),
      say("Do'stingiz ziyofatga ketyapti.", ["Have fun!", "What a pity!", "Well done!", "Enjoy your meal!"]),
      say("Mehmonlarga palov tortdingiz.", ["Enjoy your meal!", "Have fun!", "No way!", "Well done!"]),
      say("31-dekabr, yarim tun.", ["Happy New Year!", "Happy birthday!", "Good luck!", "What a pity!"]),
      say("Tabriknomani tugatyapsiz.", ["Best wishes, Aziz.", "No way, Aziz.", "What a pity, Aziz.", "Enjoy your meal, Aziz."]),
      say("Do'stingiz «My grandfather was an astronaut» dedi.", ["How interesting!", "What a pity!", "Have fun!", "Best wishes!"]),
      say("Do'stingiz sizga yordam berdi.", ["Thanks a lot!", "What a pity!", "No way!", "Well done!"]),
      say("Do'stingiz «I've got a new job!» dedi.", ["That's great!", "What a pity!", "Enjoy your meal!", "Happy New Year!"]),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Chap va o'ng tomonni ulang.",
    questions: pairs([
      ["I|me", "he|him", "we|us", "they|them"],
      ["she|her", "it|it", "you|you", "I|me"],
      ["I passed my exam!|Well done!", "I can't come.|What a pity!", "I'm going to a party.|Have fun!", "Here's your food.|Thank you!"],
      ["party|ziyofat", "present|sovg'a", "invitation|taklifnoma", "cake|tort"],
      ["last night|kecha kechqurun", "last week|o'tgan hafta", "last year|o'tgan yil", "this morning|bugun ertalab"],
      ["celebrate|nishonlamoq", "graduation|bitiruv", "anniversary|yillik", "fireworks|mushakbozlik"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("Can you help *I?", "Fe'ldan keyin — me: Can you help me?"),
      mistake("I called *he yesterday.", "him: I called him."),
      mistake("This present is for *she.", "Predlogdan keyin — her."),
      mistake("Our teacher helped *we.", "us: helped us."),
      mistake("I visited *they last week.", "them: I visited them."),
      mistake("*Me and Aziz went to the party.", "Ega — I: Aziz and I went to the party."),
      mistake("We celebrated New Year *in last week.", "last week dan oldin predlog kerak emas."),
      mistake("I saw him *the last night.", "last night — artiklsiz."),
      mistake("— I can't come. — *Well done!", "Yomon xabarga — What a pity!"),
      mistake("*Them are my best friends.", "Ega — They: They are my best friends."),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "Can you help me?",
      "I called him last night.",
      "We visited them last week.",
      "This present is for you.",
      "Our teacher helped us a lot.",
      "We celebrated Navruz with our family.",
      "Thank you for the invitation!",
      "Have fun at the party!",
      "Thanks a lot for your help!",
      "I started a new job last month.",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: written([
      ["Aziz is my friend. I phoned ___ yesterday.", "him"],
      ["My grandparents live in Bukhara. I visited ___ last month.", "them"],
      ["Malika, this present is for ___!", "you"],
      ["Can you help ___? I'm lost. (men)", "me"],
      ["We were at the cinema ___ night.", "last"],
      ["I was ill the day before ___.", "yesterday"],
      ["We ___ Navruz with our neighbours. (celebrate)", "celebrated"],
      ["— I passed the test! — Well ___!", "done"],
      ["— I can't come. — What a ___!", "pity"],
      ["Here's your plov. Enjoy your ___!", "meal"],
    ]),
  },
  {
    title: "Eng yaxshi tug'ilgan kun",
    skill: "O'qish",
    kind: "truefalse",
    instructions: "Blogni o'qing va gap to'g'ri yoki noto'g'ri ekanini belgilang.",
    questions: [
      tf("Kamola was eighteen last year.", true),
      tf("Her parents gave her a phone.", false, "a new laptop — yangi noutbuk."),
      tf("Her brother made a card for her.", true),
      tf("She celebrated at home with her friends.", false, "They had dinner at a cafe."),
      tf("The cafe was near the park.", true),
      tf("Kamola organised the party.", false, "Nilufar organised everything."),
      tf("Kamola didn't know about the party.", true),
      tf("Her friends brought a chocolate cake.", true),
      tf("They watched fireworks at midnight.", false, "At ten o'clock."),
      tf("Kamola thanks Nilufar at the end.", true),
    ],
  },
  {
    title: "Dam olish kunlari qanday o'tdi?",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Shanba kuni nima bo'ldi?", ["Bekzodning opasining bitiruvi", "Bekzodning tug'ilgan kuni", "To'y", "Navro'z"]),
      hear("Ota-onasi opasiga nima sovg'a qildi?", ["Qo'l soati", "Telefon", "Noutbuk", "Tort"]),
      hear("Ular qayerda ziyofat qilishdi?", ["Uyda", "Kafeda", "Restoranda", "Parkda"]),
      hear("Ziyofat qanday edi?", ["Kichik", "Juda katta", "Zerikarli", "Aytilmagan"]),
      hear("Buvisi nima tayyorladi?", ["Mashhur palovini", "Tort", "Sumalak", "Non"]),
      hear("Yakshanba kuni Bekzod kimga yordam berdi?", ["Otasiga", "Onasiga", "Opasiga", "Buvisiga"]),
      hear("U qayerda yordam berdi?", ["Bog'da", "Oshxonada", "Garajda", "Do'konda"]),
      hear("Keyin Bekzod nima qildi?", ["Do'stlari bilan futbol o'ynadi", "Uyda o'qidi", "Kinoga bordi", "Uxladi"]),
      hear("Ikkinchi odam dam olish kunlari nima qildi?", ["Uyda qolib, dars qildi", "Futbol o'ynadi", "Ziyofatga bordi", "Sayohatga ketdi"]),
      hear("«What a pity!» kim haqida aytildi?", ["Uyda o'qigan ikkinchi odam haqida", "Bekzodning opasi haqida", "Buvisi haqida", "Otasi haqida"]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "Can you help me?",
      "I called him last night.",
      "We visited them last week.",
      "Well done!",
      "What a pity!",
      "No way!",
      "Have fun!",
      "Enjoy your meal!",
      "Happy New Year!",
      "Thanks a lot!",
    ]),
  },
];
