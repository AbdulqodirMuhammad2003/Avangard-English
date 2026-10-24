/**
 * A1, 23-dars — «O'tmishdagi hayot». Mashhur odamlar, tarix. Grammatika:
 * Past Simple — to'g'ri fe'llar (+ -ed: work → worked, study → studied,
 * stop → stopped), barcha shaxslar uchun bir xil; was born / died; -ed
 * ning uch xil talaffuzi (/t/, /d/, /ɪd/). Lug'atda fe'llar o'tgan zamon
 * shaklida. Matn va mashqlar o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  hearing,
  listen,
  mistake,
  pairs,
  phrases,
  pick,
  reading,
  say,
  sentences,
  w,
  written,
  type Rounds,
} from "./helpers";

export const A1_23_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🏠", "lived", "lɪvd|livd", "fe'l (o'tgan z.)", "Yashadi", "Past of «live».", "My grandparents lived in a village.", "Bobom va buvim qishloqda yashashgan."),
      w("💼", "worked", "wɜːkt|uyokt", "fe'l (o'tgan z.)", "Ishladi", "Past of «work».", "My father worked in a factory.", "Otam zavodda ishlagan."),
      w("📚", "studied", "ˈstʌdid|stadid", "fe'l (o'tgan z.)", "O'qidi", "Past of «study» (y → ied).", "She studied medicine in Tashkent.", "U Toshkentda tibbiyotni o'qigan."),
      w("▶️", "started", "ˈstɑːtɪd|staatid", "fe'l (o'tgan z.)", "Boshladi", "Past of «start».", "The lesson started at nine.", "Dars soat to'qqizda boshlandi."),
      w("🏁", "finished", "ˈfɪnɪʃt|finisht", "fe'l (o'tgan z.)", "Tugatdi", "Past of «finish».", "I finished school in 2020.", "Maktabni 2020-yilda tugatdim."),
      w("⚽", "played", "pleɪd|pleyd", "fe'l (o'tgan z.)", "O'ynadi", "Past of «play».", "We played football after school.", "Darsdan keyin futbol o'ynadik."),
      w("🙏", "wanted", "ˈwɒntɪd|uontid", "fe'l (o'tgan z.)", "Xohladi", "Past of «want».", "As a child, I wanted to be a pilot.", "Bolaligimda uchuvchi bo'lishni xohlardim."),
      w("🧳", "visited", "ˈvɪzɪtɪd|vizitid", "fe'l (o'tgan z.)", "Borib ko'rdi, tashrif buyurdi", "Past of «visit».", "We visited Khiva last summer.", "O'tgan yozda Xivaga borib keldik."),
      w("📦", "moved", "muːvd|muuvd", "fe'l (o'tgan z.)", "Ko'chdi", "Past of «move».", "They moved to Tashkent in 2015.", "Ular 2015-yilda Toshkentga ko'chishgan."),
      w("🕯️", "died", "daɪd|dayd", "fe'l (o'tgan z.)", "Vafot etdi", "Past of «die».", "Alisher Navoi died in 1501.", "Alisher Navoiy 1501-yilda vafot etgan."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("👶", "was born", "wəz ˈbɔːn|uoz boon", "ibora", "Tug'ilgan", "Started life.", "Amir Temur was born in 1336.", "Amir Temur 1336-yilda tug'ilgan."),
      w("💡", "invented", "ɪnˈventɪd|inventid", "fe'l (o'tgan z.)", "Ixtiro qildi", "Made something new for the first time.", "Who invented the telephone?", "Telefonni kim ixtiro qilgan?"),
      w("🔭", "discovered", "dɪˈskʌvəd|diskavad", "fe'l (o'tgan z.)", "Kashf etdi", "Found something for the first time.", "Who discovered America?", "Amerikani kim kashf etgan?"),
      w("🗺️", "travelled", "ˈtrævld|trevld", "fe'l (o'tgan z.)", "Sayohat qildi", "Past of «travel» (British: ll).", "Marco Polo travelled to China.", "Marko Polo Xitoyga sayohat qilgan."),
      w("🔓", "opened", "ˈəʊpənd|oupand", "fe'l (o'tgan z.)", "Ochdi", "Past of «open».", "The metro opened in 1977.", "Metro 1977-yilda ochilgan."),
      w("🔄", "changed", "tʃeɪndʒd|cheynjd", "fe'l (o'tgan z.)", "O'zgartirdi; o'zgardi", "Past of «change».", "The internet changed our lives.", "Internet hayotimizni o'zgartirdi."),
      w("🛠️", "created", "kriˈeɪtɪd|krieytid", "fe'l (o'tgan z.)", "Yaratdi", "Made something new.", "He created a famous app.", "U mashhur ilovani yaratgan."),
      w("📐", "designed", "dɪˈzaɪnd|dizaynd", "fe'l (o'tgan z.)", "Loyihalashtirdi", "Planned how something looks.", "Who designed this building?", "Bu binoni kim loyihalashtirgan?"),
      w("🏨", "stayed", "steɪd|steyd", "fe'l (o'tgan z.)", "Qoldi, turdi", "Past of «stay».", "We stayed in a small hotel.", "Kichkina mehmonxonada turdik."),
      w("↩️", "returned", "rɪˈtɜːnd|rityond", "fe'l (o'tgan z.)", "Qaytdi", "Came back.", "He returned home after ten years.", "U o'n yildan keyin uyga qaytdi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🌱", "life", "laɪf|layf", "ot", "Hayot (ko'plik: lives)", "The time from birth to death.", "He had a long and happy life.", "Uning hayoti uzoq va baxtli o'tgan."),
      w("📜", "history", "ˈhɪstri|histri", "ot", "Tarix", "Things that happened in the past.", "I'm interested in Uzbek history.", "O'zbek tarixiga qiziqaman."),
      w("💯", "century", "ˈsentʃəri|sencheri", "ot", "Asr", "One hundred years.", "Ulugh Beg lived in the fifteenth century.", "Ulug'bek XV asrda yashagan."),
      w("🔬", "scientist", "ˈsaɪəntɪst|sayantist", "ot", "Olim", "A person who studies science.", "Al-Khwarizmi was a great scientist.", "Al-Xorazmiy buyuk olim edi."),
      w("💡", "inventor", "ɪnˈventə|inventa", "ot", "Ixtirochi", "A person who invents new things.", "Edison was a famous inventor.", "Edison mashhur ixtirochi edi."),
      w("✍️", "writer", "ˈraɪtə|rayta", "ot", "Yozuvchi", "A person who writes books.", "Abdulla Qodiriy was a writer.", "Abdulla Qodiriy yozuvchi edi."),
      w("📝", "poet", "ˈpəʊɪt|pouit", "ot", "Shoir", "A person who writes poems.", "Navoi was a great poet.", "Navoiy buyuk shoir edi."),
      w("👑", "king", "kɪŋ|king", "ot", "Qirol, podsho", "A man who rules a country.", "The king lived in a big palace.", "Qirol katta saroyda yashagan."),
      w("🌌", "astronomer", "əˈstrɒnəmə|astronama", "ot", "Astronom, munajjim", "A scientist who studies the stars.", "Ulugh Beg was a famous astronomer.", "Ulug'bek mashhur astronom edi."),
      w("💊", "medicine", "ˈmedsn|medsn", "ot", "Tibbiyot; dori", "The science of treating ill people.", "Ibn Sina wrote books about medicine.", "Ibn Sino tibbiyot haqida kitoblar yozgan."),
    ],
  },
];

const ED = ["/t/", "/d/", "/ɪd/"];

const ULUGH = `ULUGH BEG — A KING AND A SCIENTIST
Ulugh Beg was born in 1394. He was the grandson of Amir Temur. In 1409 he started to rule Samarkand — he was only fifteen! But Ulugh Beg wasn't only a king. He loved science, and he studied mathematics and the stars.
In the 1420s he opened a madrasah on the Registan, and many scientists worked and studied there. Then he built an observatory near Samarkand. With other astronomers, he watched the sky for many years and created a famous catalogue of more than a thousand stars.
Ulugh Beg died in 1449. Today his observatory is a museum, and people from all over the world visit it.`;
const read = reading(ULUGH);

const GRANDPA = `Grandpa, tell me about your life.
Well, I was born in 1950 in a small village near Bukhara. My father was a farmer, and I helped him in the fields.
Did you go to school?
Yes, of course. I studied at the village school. Then, in 1968, I moved to Tashkent and studied engineering at university.
And then?
I worked in a factory for thirty years. I designed machines. In 1975 I married your grandmother.
Did you travel?
Yes, a little. We visited Moscow and Kyiv. And in 2010, after work, we returned to the village. We stayed there for ten years.`;
const hear = hearing(GRANDPA);

export const A1_23_EXERCISES: SeedExercise[] = [
  {
    title: "Hozirgi yoki o'tgan?",
    skill: "Tinglash",
    kind: "listen",
    instructions: "-ed ni eshitishga harakat qiling. Eshitgan gapingizni toping.",
    questions: [
      listen("I worked in a bank.", ["I work in a bank.", "I worked in a bank."]),
      listen("We play football.", ["We play football.", "We played football."]),
      listen("They lived in Bukhara.", ["They live in Bukhara.", "They lived in Bukhara."]),
      listen("I start at nine.", ["I start at nine.", "I started at nine."]),
      listen("She visited Khiva.", ["She visits Khiva.", "She visited Khiva."]),
      listen("We watch TV.", ["We watch TV.", "We watched TV."]),
      listen("He finished school.", ["He finishes school.", "He finished school."]),
      listen("I wanted a dog.", ["I want a dog.", "I wanted a dog."]),
      listen("They moved to Tashkent.", ["They move to Tashkent.", "They moved to Tashkent."]),
      listen("I study English.", ["I study English.", "I studied English."]),
    ],
  },
  {
    title: "O'tgan zamon shakli",
    skill: "Grammatika",
    kind: "type",
    instructions: "Fe'lning o'tgan zamon shaklini yozing: + ed; -e bilan tugasa + d; undosh + y → ied; qisqa so'zda undosh ikkilanadi (stop → stopped).",
    questions: written([
      ["work", "worked"],
      ["live", "lived", "-e bilan tugasa, faqat + d."],
      ["study", "studied", "undosh + y → ied."],
      ["play", "played", "unli + y → + ed."],
      ["stop", "stopped", "qisqa so'z: p ikkilanadi."],
      ["visit", "visited"],
      ["travel", "travelled", "Britancha: ll."],
      ["move", "moved"],
      ["want", "wanted"],
      ["die", "died"],
    ]),
  },
  {
    title: "-ed qanday o'qiladi?",
    skill: "Talaffuz",
    kind: "choice",
    instructions:
      "-ed uch xil o'qiladi: /t/ — worked, finished; /d/ — lived, played; /ɪd/ — wanted, started (faqat t va d dan keyin!). O'zingiz ovoz chiqarib ayting va tanlang.",
    questions: [
      pick("worked", ED, 0),
      pick("lived", ED, 1),
      pick("wanted", ED, 2),
      pick("finished", ED, 0),
      pick("played", ED, 1),
      pick("started", ED, 2),
      pick("watched", ED, 0),
      pick("moved", ED, 1),
      pick("visited", ED, 2),
      pick("stopped", ED, 0),
    ],
  },
  {
    title: "Gapni o'tgan zamonga o'giring",
    skill: "Grammatika",
    kind: "type",
    instructions: "Gapni o'tgan zamonga o'giring. Masalan: I live in Tashkent. → I lived in Tashkent.",
    questions: written([
      ["I live in Bukhara.", "I lived in Bukhara."],
      ["She works in a hospital.", "She worked in a hospital.", "o'tgan zamonda -s yo'qoladi: she worked."],
      ["They play tennis.", "They played tennis."],
      ["He studies history.", "He studied history."],
      ["We visit our grandparents.", "We visited our grandparents."],
      ["The film starts at seven.", "The film started at seven."],
      ["I want a new bike.", "I wanted a new bike."],
      ["My parents travel a lot.", "My parents travelled a lot."],
      ["He finishes work at six.", "He finished work at six."],
      ["We stay at home.", "We stayed at home."],
    ]),
  },
  {
    title: "Mashhur odamlar",
    skill: "Lug'at",
    kind: "choice",
    instructions: "Gapga mos so'zni tanlang.",
    questions: [
      say("Alisher Navoi was a great ___.", ["poet", "king", "inventor", "astronomer"]),
      say("Ulugh Beg studied the stars. He was an ___.", ["astronomer", "writer", "inventor", "poet"]),
      say("Ibn Sina wrote books about ___.", ["medicine", "football", "history", "cooking"]),
      say("Amir Temur was ___ in 1336.", ["born", "died", "lived", "started"]),
      say("Edison ___ the light bulb.", ["invented", "discovered", "visited", "returned"]),
      say("A century is ___ years.", ["one hundred", "ten", "one thousand", "fifty"]),
      say("Al-Khwarizmi was a great ___. He worked with numbers.", ["scientist", "king", "poet", "writer"]),
      say("Abdulla Qodiriy ___ the novel «O'tkan kunlar».", ["created", "invented", "discovered", "visited"]),
      say("Columbus ___ to America in 1492.", ["travelled", "invented", "designed", "died"]),
      say("I'm interested in ___. I love old stories about kings.", ["history", "medicine", "century", "life"]),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Chap va o'ng tomonni ulang.",
    questions: pairs([
      ["live|lived", "study|studied", "stop|stopped", "play|played"],
      ["was born|tug'ilgan", "died|vafot etgan", "moved|ko'chgan", "returned|qaytgan"],
      ["invented|ixtiro qildi", "discovered|kashf etdi", "designed|loyihaladi", "created|yaratdi"],
      ["poet|shoir", "writer|yozuvchi", "scientist|olim", "astronomer|astronom"],
      ["life|hayot", "history|tarix", "century|asr", "king|qirol"],
      ["worked|/t/", "lived|/d/", "wanted|/ɪd/", "finished|/t/"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("Yesterday I *work in the garden.", "O'tgan zamon: worked."),
      mistake("She *studyed medicine.", "y → ied: studied."),
      mistake("We *stoped at a cafe.", "stop → stopped (p ikkilanadi)."),
      mistake("He *workeds in a bank.", "O'tgan zamonda -s yo'q: worked."),
      mistake("Navoi *is born in 1441.", "O'tmish — was born."),
      mistake("Amir Temur *borned in 1336.", "was born: Amir Temur was born in 1336."),
      mistake("I *was visited Khiva last year.", "Oddiy o'tgan zamon: I visited Khiva."),
      mistake("Navoi lived *on the fifteenth century.", "Asr bilan — in: in the fifteenth century."),
      mistake("They *lifed in Samarkand.", "live → lived."),
      mistake("My grandfather *die in 2015.", "O'tgan zamon: died."),
    ],
  },
  {
    title: "Suhbatni davom ettiring",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("Where were you born?", ["I was born in Fergana.", "I born in Fergana.", "I am born in Fergana.", "I was borned in Fergana."]),
      say("When did you finish school?", ["I finished school in 2019.", "I finish school 2019.", "I finished school on 2019.", "I was finish school."]),
      say("Who was Ulugh Beg?", ["He was a king and an astronomer.", "He is a king.", "He was born a king.", "He were a scientist."]),
      say("What did you do last weekend?", ["I visited my grandparents.", "I visit my grandparents.", "I was visit grandparents.", "I visiting grandparents."]),
      say("Where did your family live before?", ["We lived in a village near Namangan.", "We live in a village.", "We was live in a village.", "We lifed in a village."]),
      say("Who invented the telephone?", ["Alexander Graham Bell.", "In 1876.", "In America.", "It was a telephone."]),
      say("When did they move to Tashkent?", ["In 2015.", "On 2015.", "In Tashkent.", "They moved."]),
      say("Did you like primary school?", ["Yes, I loved it. My teacher was great.", "Yes, I like it.", "Yes, I was like.", "Yes, I loving it."]),
      say("What did you want to be as a child?", ["I wanted to be a doctor.", "I want to be a doctor as child.", "I was want a doctor.", "I wanted be doctor."]),
      say("How long did you stay in Bukhara?", ["We stayed there for a week.", "We stay there week.", "We were stayed a week.", "For Bukhara a week."]),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "I was born in 2005.",
      "My father worked in a factory.",
      "She studied medicine in Tashkent.",
      "We visited Khiva last summer.",
      "They moved to Tashkent in 2015.",
      "Navoi was a great poet.",
      "Ulugh Beg was a famous astronomer.",
      "The metro opened in 1977.",
      "Who invented the telephone?",
      "He returned home after ten years.",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Qavsdagi fe'lni o'tgan zamon shaklida yozing.",
    questions: written([
      ["I ___ in a small village as a child. (live)", "lived"],
      ["She ___ English at university. (study)", "studied"],
      ["We ___ football after school. (play)", "played"],
      ["The bus ___ near my house. (stop)", "stopped"],
      ["They ___ Samarkand last year. (visit)", "visited"],
      ["He ___ to London in 2020. (move)", "moved"],
      ["Navoi was ___ in Herat in 1441.", "born"],
      ["Ulugh Beg lived in the fifteenth ___.", "century"],
      ["Who ___ the computer? (invent)", "invented"],
      ["The lesson ___ at nine. (start)", "started"],
    ]),
  },
  {
    title: "Ulug'bek",
    skill: "Matn bilan ishlash",
    kind: "reading",
    instructions: "Matnni diqqat bilan o'qing va har bir savolga javob bering.",
    questions: [
      read("When was Ulugh Beg born?", ["In 1394", "In 1409", "In 1449", "In 1336"]),
      read("Who was his grandfather?", ["Amir Temur", "Alisher Navoi", "Ibn Sina", "The text doesn't say."]),
      read("How old was he when he started to rule Samarkand?", ["Fifteen", "Twenty", "Ten", "Fifty"]),
      read("What did he study?", ["Mathematics and the stars", "Medicine", "Poetry", "History"]),
      read("Where did he open a madrasah?", ["On the Registan", "In Bukhara", "In Tashkent", "Near the observatory"]),
      read("What did he build near Samarkand?", ["An observatory", "A palace", "A mosque", "A school"]),
      read("What did he create with other astronomers?", ["A catalogue of stars", "A map of the world", "A book about medicine", "A new calendar"]),
      read("How many stars are in the catalogue?", ["More than a thousand", "About a hundred", "Ten thousand", "The text doesn't say."]),
      read("When did Ulugh Beg die?", ["In 1449", "In 1394", "In 1420", "In 1409"]),
      read("What is his observatory today?", ["A museum", "A school", "A university", "A hotel"]),
    ],
  },
  {
    title: "Bobomning hayoti",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Bobo qachon tug'ilgan?", ["1950-yilda", "1968-yilda", "1975-yilda", "1960-yilda"]),
      hear("U qayerda tug'ilgan?", ["Buxoro yaqinidagi qishloqda", "Toshkentda", "Samarqandda", "Moskvada"]),
      hear("Uning otasi kim bo'lgan?", ["Dehqon", "Muhandis", "O'qituvchi", "Haydovchi"]),
      hear("Bobo qachon Toshkentga ko'chgan?", ["1968-yilda", "1950-yilda", "1975-yilda", "2010-yilda"]),
      hear("U universitetda nimani o'qigan?", ["Muhandislikni", "Tibbiyotni", "Tarixni", "Matematikani"]),
      hear("Zavodda necha yil ishlagan?", ["30 yil", "10 yil", "20 yil", "40 yil"]),
      hear("U zavodda nima qilgan?", ["Mashinalarni loyihalagan", "Mashina haydagan", "Ovqat pishirgan", "Dars bergan"]),
      hear("Buvi bilan qachon turmush qurgan?", ["1975-yilda", "1968-yilda", "1950-yilda", "2010-yilda"]),
      hear("Ular qaysi shaharlarga borishgan?", ["Moskva va Kiyev", "London va Parij", "Samarqand va Xiva", "Istanbul va Moskva"]),
      hear("2010-yilda nima bo'lgan?", ["Qishloqqa qaytishgan", "Toshkentga ko'chishgan", "Turmush qurishgan", "Ishga kirgan"]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "I was born in 2005.",
      "She studied medicine.",
      "We visited Khiva.",
      "They moved to Tashkent.",
      "He worked in a factory.",
      "Navoi was a great poet.",
      "worked",
      "lived",
      "wanted",
      "century",
    ]),
  },
];
