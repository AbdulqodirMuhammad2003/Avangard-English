/**
 * A1, 23-dars — «O'tmishdagi hayot: -ed». Navigate A1, 8.2 «Lives from the
 * past» asosida: mashhur va unchalik mashhur bo'lmagan odamlar hayoti
 * (was born / died), Frida Kahlo, Marie Curie, Tolstoy, Martin Luther King,
 * Ulug'bek, Bill va Melinda Gates. Grammatika: Past Simple — to'g'ri
 * fe'llar (+ -ed / -d / -ied, stop → stopped); fe'l shakli va vaqt so'zlariga
 * qarab o'tgan yoki hozirgi zamonni eshitib farqlash. Tinglash mashqlarida
 * kitob treklari (yopiq ombordan), savollar va matnlar o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  gaps,
  hearing,
  mistake,
  pairs,
  phrases,
  pick,
  reading,
  say,
  sentences,
  slots,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-a1/audio/${n}.mp3`;

export const A1_23_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("✒️", "writer", "ˈraɪtə|rayta", "ot", "Yozuvchi", "A person who writes books.", "Leo Tolstoy was a writer from Russia.", "Lev Tolstoy — rossiyalik yozuvchi edi."),
      w("🔬", "scientist", "ˈsaɪəntɪst|sayantist", "ot", "Olim", "A person who works in science.", "Marie Curie was a scientist from Poland.", "Mariya Kyuri — polshalik olima edi."),
      w("✊", "civil rights leader", "ˌsɪvl ˈraɪts ˌliːdə|sivl rayts liida", "ot", "Fuqarolik huquqlari yetakchisi", "A person who fights for equal rights for all people.", "Martin Luther King was a civil rights leader.", "Martin Lyuter King fuqarolik huquqlari yetakchisi edi."),
      w("🕯️", "die", "daɪ|day", "fe'l", "Vafot etmoq, o'lmoq", "Stop living.", "People die, but their books live.", "Odamlar o'ladi, lekin kitoblari yashaydi."),
      w("🪚", "carpenter", "ˈkɑːpəntə|kaapanta", "ot", "Duradgor", "A person who makes things from wood.", "Jan Wnęk was a carpenter.", "Yan Vnenk duradgor edi."),
      w("🪂", "glider", "ˈɡlaɪdə|glayda", "ot", "Planyor", "A light plane without an engine.", "He wanted to make the world's first glider.", "U dunyodagi birinchi planyorni yasamoqchi edi."),
      w("🕊️", "fly", "flaɪ|flay", "fe'l", "Uchmoq", "Move through the air.", "His dream was to fly.", "Uning orzusi uchish edi."),
      w("💥", "accident", "ˈæksɪdənt|eksidant", "ot", "Baxtsiz hodisa, avariya", "Something bad that happens suddenly.", "He died in a flying accident.", "U parvoz paytidagi baxtsiz hodisada halok bo'lgan."),
      w("🧗", "adventure", "ədˈventʃə|advencha", "ot", "Sarguzasht", "Something exciting that you do.", "They both loved adventure.", "Ikkalasi ham sarguzashtni yaxshi ko'rardi."),
      w("🎓", "education", "ˌedʒuˈkeɪʃn|edyukeyshn", "ot", "Ta'lim", "Learning at school or university.", "He had no school education.", "U maktab ta'limi olmagan."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("▶️", "start", "stɑːt|staat", "fe'l", "Boshlamoq", "Begin.", "Lessons start at nine.", "Darslar soat to'qqizda boshlanadi."),
      w("⏹️", "finish", "ˈfɪnɪʃ|finish", "fe'l", "Tugatmoq, tugamoq", "End.", "I finish work at six.", "Ishni oltida tugataman."),
      w("💍", "marry", "ˈmæri|meri", "fe'l", "Turmush qurmoq, uylanmoq", "Become husband and wife.", "They want to marry next year.", "Ular kelasi yili turmush qurmoqchi."),
      w("💬", "talk", "tɔːk|took", "fe'l", "Gaplashmoq, so'zlamoq", "Speak to someone.", "I talk to my grandmother every day.", "Har kuni buvim bilan gaplashaman."),
      w("🖼️", "show", "ʃəʊ|shou", "fe'l", "Ko'rsatmoq", "Let someone see something.", "Can you show me your photos?", "Suratlaringizni ko'rsata olasizmi?"),
      w("🗃️", "collect", "kəˈlekt|kalekt", "fe'l", "To'plamoq, yig'moq", "Get a lot of things of one kind.", "The brothers started to collect stories.", "Aka-ukalar ertaklarni to'plashni boshlagan."),
      w("🔄", "change", "tʃeɪndʒ|cheynj", "fe'l", "O'zgartirmoq, almashtirmoq", "Make something different.", "I want to change my job.", "Ishimni almashtirmoqchiman."),
      w("📦", "move", "muːv|muuv", "fe'l", "Ko'chmoq", "Go to live in a new place.", "We want to move to a bigger flat.", "Kattaroq kvartiraga ko'chmoqchimiz."),
      w("🏡", "stay", "steɪ|stey", "fe'l", "Qolmoq; yashab turmoq", "Not leave a place.", "I stay at home on Sundays.", "Yakshanba kunlari uyda qolaman."),
      w("🤔", "decide", "dɪˈsaɪd|disayd", "fe'l", "Qaror qilmoq", "Choose what to do.", "I can't decide.", "Qaror qila olmayapman."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("💯", "century", "ˈsentʃəri|senchari", "ot", "Asr (100 yil)", "One hundred years.", "Ulugh Beg lived in the fifteenth century.", "Ulug'bek XV asrda yashagan."),
      w("📜", "history", "ˈhɪstri|histri", "ot", "Tarix", "Things that happened in the past.", "They are important people in history.", "Ular tarixdagi muhim shaxslar."),
      w("❗", "important", "ɪmˈpɔːtnt|impootant", "sifat", "Muhim", "It matters a lot.", "The films are important historical documents.", "Filmlar muhim tarixiy hujjatlar."),
      w("🏦", "foundation", "faʊnˈdeɪʃn|faundeyshn", "ot", "Jamg'arma, fond", "An organization that gives money to help people.", "In 2000, they started the Gates Foundation.", "2000-yilda ular Geyts jamg'armasini tashkil etishgan."),
      w("💻", "developer", "dɪˈveləpə|divelapa", "ot", "Ishlab chiquvchi", "A person who makes new products or programs.", "Melinda worked as a product developer.", "Melinda mahsulot ishlab chiquvchi bo'lib ishlagan."),
      w("🧑‍🎨", "self-portrait", "ˌself ˈpɔːtrət|self pootrat", "ot", "Avtoportret", "A picture an artist paints of himself or herself.", "This self-portrait is by Frida Kahlo.", "Bu avtoportret Frida Kaloniki."),
      w("🖼️", "picture", "ˈpɪktʃə|pikcha", "ot", "Rasm, surat", "A painting or a drawing.", "It's a picture of a bird.", "Bu qush rasmi."),
      w("💑", "marriage", "ˈmærɪdʒ|merij", "ot", "Nikoh", "The time when two people are married.", "Their marriage finished in 1939.", "Ularning nikohi 1939-yilda tugagan."),
      w("🌱", "life", "laɪf|layf", "ot", "Hayot (ko'pligi: lives)", "The time from when you are born to when you die.", "He lived there all his life.", "U butun umri o'sha yerda yashagan."),
      w("🌍", "around the world", "əˌraʊnd ðə ˈwɜːld|araund za uyorld", "ibora", "Dunyo bo'ylab", "In or to many places on Earth.", "In 1995, they travelled around the world.", "1995-yilda ular dunyo bo'ylab sayohat qilishgan."),
    ],
  },
];

const ULUGH = `ULUGH BEG — A KING AND A SCIENTIST
Ulugh Beg was born in 1394. He was the grandson of Amir Temur. In 1409 he started to rule Samarkand — he was only fifteen! But Ulugh Beg wasn't only a king. He loved science, and he studied mathematics and the stars.
In the 1420s he opened a madrasah on the Registan, and many scientists worked and studied there. Then he built an observatory near Samarkand. With other astronomers, he watched the sky for many years and created a famous catalogue of more than a thousand stars.
Ulugh Beg died in 1449. Today his observatory is a museum, and people from all over the world visit it.`;
const read = reading(ULUGH);

const PAST = "O'tgan zamon";
const PRESENT = "Hozirgi zamon";

export const A1_23_EXERCISES: SeedExercise[] = [
  {
    title: "To'rtta mashhur odam",
    skill: "Tinglash",
    kind: "listenmatch",
    instructions: "To'rtta mashhur odam haqida tinglang. Yillarni raqamlar bilan yozing (masalan: 1907).",
    questions: [
      slots(track("8.10"), [
        ["1. Frida Kahlo was born in", "1907"],
        ["2. Frida Kahlo died in", "1954"],
        ["3. Marie Curie was born in", "1867"],
        ["4. Marie Curie died in", "1934"],
        ["5. Leo Tolstoy died in", "1910"],
        ["6. Martin Luther King was born in", "1929"],
      ]),
    ],
  },
  {
    title: "Kim edi?",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Yana tinglang va savollarga javob bering.",
    questions: [
      hearing(track("8.10"))("Frida Kahlo was…", ["an artist from Mexico", "a writer from Russia", "a scientist from Poland", "a civil rights leader"]),
      hearing(track("8.10"))("Marie Curie was…", ["a scientist from Poland", "an artist from Mexico", "a writer from Russia", "a teacher from France"]),
      hearing(track("8.10"))("Leo Tolstoy was…", ["a writer from Russia", "a scientist from Poland", "an artist from Russia", "a politician from Russia"]),
      hearing(track("8.10"))("When was Leo Tolstoy born?", ["1828", "1882", "1910", "1928"]),
      hearing(track("8.10"))("Martin Luther King was from…", ["the USA", "the UK", "Mexico", "Canada"]),
      hearing(track("8.10"))("When did Martin Luther King die?", ["1968", "1929", "1986", "1963"]),
    ],
  },
  {
    title: "Past Simple: -ed",
    skill: "Grammatika",
    kind: "choice",
    instructions: "To'g'ri fe'llarda o'tgan zamon: ko'pchilikka -ed (want → wanted); -e bilan tugasa -d (love → loved); undosh + y → -ied (try → tried). Barcha shaxslar uchun bir xil!",
    questions: [
      say("Frida Kahlo ___ painting when she was 18. (start)", ["started", "starts", "startted", "start"]),
      say("She ___ 140 pictures in her life. (paint)", ["painted", "paintted", "paints", "painted's"]),
      say("Their marriage ___ in 1939. (finish)", ["finished", "finishd", "finishes", "finishied"]),
      say("They ___ again in 1940! (marry)", ["married", "marryed", "marries", "marred"]),
      say("Martin Luther King ___ a better life for black people. (want)", ["wanted", "wantd", "wants", "wantted"]),
      say("In 1963, he ___ to the White House. (walk)", ["walked", "walkd", "walks", "walkked"]),
      say("Marie Curie ___ at the Sorbonne in France. (study)", ["studied", "studyed", "studies", "studed"]),
      say("She ___ in Paris. (live)", ["lived", "liveed", "lives", "livd"]),
      say("Later in his life, Tolstoy ___ thirteen schools for poor children. (open)", ["opened", "openned", "opens", "opend"]),
      say("I ___ in Canada from 2011 to 2013. (work)", ["worked", "workt", "works", "workd"]),
    ],
  },
  {
    title: "Ulug'bek",
    skill: "O'qish",
    kind: "reading",
    instructions: "Ulug'bek haqidagi matnni o'qing va savollarga javob bering.",
    questions: [
      read("When was Ulugh Beg born?", ["In 1394", "In 1409", "In 1449", "In 1420"]),
      read("Who was his grandfather?", ["Amir Temur", "Babur", "Navoi", "The text doesn't say."]),
      read("How old was he when he started to rule Samarkand?", ["Fifteen", "Fifty", "Thirty", "The text doesn't say."]),
      read("What did he study?", ["Mathematics and the stars", "History and art", "Languages", "Medicine"]),
      read("Where did he open a madrasah?", ["On the Registan", "In Bukhara", "Near the observatory", "In Tashkent"]),
      read("What did he build near Samarkand?", ["An observatory", "A palace", "A museum", "A school for children"]),
      read("What did he create with other astronomers?", ["A catalogue of more than a thousand stars", "A map of the world", "A big library", "A new calendar"]),
      read("When did he die?", ["In 1449", "In 1394", "In 1409", "In 1420"]),
      read("What is his observatory today?", ["A museum", "A school", "A madrasah", "A hotel"]),
      read("Which verb is regular (-ed)?", ["studied", "was", "built", "rule"]),
    ],
  },
  {
    title: "Fe'l shaklini eshiting",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Hozirgi yoki o'tgan zamonni farqlash uchun fe'l oxirini tinglang: oxiri yo'q yoki -s — hozirgi; -ed — o'tgan. Eshitgan shaklni tanlang.",
    questions: [
      gaps(track("8.14"), [
        ["1. ___", "talked", "talk"],
        ["2. ___", "finished", "finish"],
        ["3. ___", "play", "played"],
        ["4. ___", "worked", "works"],
        ["5. ___", "lives", "lived"],
        ["6. ___", "like", "liked"],
      ]),
    ],
  },
  {
    title: "O'tganmi yoki hozirgi?",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Oltita gapni tinglang. Fe'l oxiri va vaqt so'zlari (from 2011 to 2013, every day) yordam beradi.",
    questions: [
      hearing(track("8.15"))("1. He remembered my name.", [PAST, PRESENT]),
      hearing(track("8.15"))("2. I studied French at university.", [PAST, PRESENT]),
      hearing(track("8.15"))("3. The bank opens at nine every day.", [PRESENT, PAST]),
      hearing(track("8.15"))("4. I worked in Canada from 2011 to 2013.", [PAST, PRESENT]),
      hearing(track("8.15"))("5. We played football at the weekend.", [PAST, PRESENT]),
      hearing(track("8.15"))("6. I live with my parents.", [PRESENT, PAST]),
    ],
  },
  {
    title: "Bill va Melinda Geyts",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Bill va Melinda Geyts haqidagi hikoyani tinglang va to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("8.16"), [
        ["Bill and Melinda Gates married in ___.", "1994", "1995", "2000"],
        ["Bill Gates ___ the boss of Microsoft.", "was", "is", "were"],
        ["Melinda ___ for Microsoft as a product developer.", "worked", "works", "work"],
        ["In 1995, they ___ around the world.", "travelled", "travel", "travels"],
        ["They have got ___ children.", "three", "two", "four"],
        ["They live in a big house near ___.", "Seattle", "New York", "Boston"],
        ["In ___ they started the Gates Foundation.", "2000", "1995", "2010"],
        ["Now they ___ the foundation to help poor people.", "use", "used", "uses"],
      ]),
    ],
  },
  {
    title: "-ed ni to'g'ri yozing",
    skill: "Imlo",
    kind: "choice",
    instructions: "O'tgan zamon -ed imlosi: ko'p fe'lga -ed (worked); -e bilan tugasa faqat -d (lived); undosh + y → -ied (studied); qisqa so'z undosh-unli-undosh bilan tugasa, oxirgi harf ikkilanadi (stop → stopped).",
    questions: [
      pick("work → ?", ["worked", "workd", "workied", "workked"], 0),
      pick("live → ?", ["liveed", "lived", "livd", "livied"], 1),
      pick("want → ?", ["wantd", "wantted", "wanted", "wantied"], 2),
      pick("finish → ?", ["finished", "finishd", "finishied", "finishhed"], 0),
      pick("play → ?", ["plaied", "played", "playd", "playyed"], 1),
      pick("study → ?", ["studyed", "studed", "studied", "studdied"], 2),
      pick("stop → ?", ["stopped", "stoped", "stopd", "stopied"], 0),
      pick("move → ?", ["moveed", "moved", "movd", "movied"], 1),
      pick("visit → ?", ["visitd", "visitted", "visited", "visitied"], 2),
      pick("love → ?", ["loved", "loveed", "lovd", "lovved"], 0),
    ],
  },
  {
    title: "Gapni to'ldiring",
    skill: "Grammatika",
    kind: "type",
    instructions: "Qavs ichidagi fe'lni o'tgan zamonda yozing.",
    questions: written([
      ["Jacob and Wilhelm ___ together all their lives. (live)", "lived"],
      ["Wilhelm ___ music very much. (like)", "liked"],
      ["They ___ at the University of Marburg. (study)", "studied"],
      ["Their younger brother ___ them with their work. (help)", "helped"],
      ["Jacob ___ until the last day of his life. (work)", "worked"],
      ["Jacob ___ in 1863. (die)", "died"],
      ["Harriet ___ Franklin Adams in 1899. (marry)", "married"],
      ["They ___ every country in South America. (visit)", "visited"],
      ["She ___ to people about her travels. (talk)", "talked"],
      ["The bus ___ near the park. (stop)", "stopped"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("She *studyed medicine.", "study → studied."),
      mistake("They *marryed in 1994.", "marry → married."),
      mistake("Jan *liveed in Poland.", "live → lived."),
      mistake("The bus *stoped near the school.", "stop → stopped."),
      mistake("Yesterday I *watch a film.", "O'tgan zamon — watched."),
      mistake("He *was work in a factory.", "Past Simple — He worked."),
      mistake("Navoi *borned in 1441.", "Navoi was born in 1441."),
      mistake("She *dead in 1954.", "Vafot etdi — died."),
      mistake("I lived in Madrid *on 2009.", "Yil bilan — in 2009."),
      mistake("Ulugh Beg lived in the fifteenth *centure.", "century."),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Juftlarni ulang.",
    questions: pairs([
      ["Frida Kahlo|artist, Mexico", "Marie Curie|scientist, Poland", "Leo Tolstoy|writer, Russia", "Martin Luther King|civil rights leader, USA"],
      ["want|wanted", "love|loved", "try|tried", "stop|stopped"],
      ["was born|tug'ilgan", "died|vafot etgan", "married|turmush qurgan", "moved|ko'chgan"],
      ["writer|yozuvchi", "scientist|olim", "carpenter|duradgor", "glider|planyor"],
      ["century|asr", "history|tarix", "adventure|sarguzasht", "accident|baxtsiz hodisa"],
    ]),
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "Ingrid Bergman was an actress from Sweden.",
      "She was born in 1915.",
      "She died in 1982.",
      "Frida Kahlo started painting when she was 18.",
      "Marie Curie studied at the Sorbonne.",
      "They married again in 1940.",
      "He talked to 250,000 people about his dream.",
      "Jan wanted to make the world's first glider.",
      "They travelled around the world.",
      "Tolstoy opened thirteen schools for poor children.",
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting. -ed ba'zan /t/ (helped), ba'zan /d/ (lived), t va d dan keyin /ɪd/ (wanted) eshitiladi.",
    questions: phrases([
      "She was born in 1907.",
      "He died in 1910.",
      "helped, worked, watched",
      "lived, loved, married",
      "wanted, started, painted",
      "Frida Kahlo started painting when she was 18.",
      "They married again in 1940.",
      "I studied French at university.",
      "I worked in Canada from 2011 to 2013.",
      "We played football at the weekend.",
    ]),
  },
];
