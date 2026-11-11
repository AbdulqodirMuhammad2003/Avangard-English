/**
 * A1, 21-dars — «Sevimli mashg'ulotlar: like + -ing». Navigate A1, 7.3 «I like
 * going out», 7.4 «a post on a social media website» va 7.5 «An unusual
 * hobby» asosida: AQSH va Buyuk Britaniyada bo'sh vaqt mashg'ulotlari,
 * xobbilar haqida gapirish, ijtimoiy tarmoqda o'zi haqida post yozish
 * (so'z tartibi), jonglyorlik. Grammatika: like / love / don't like / hate +
 * ot yoki fe'l-ing; -ing imlosi (have → having, run → running).
 * Tinglash mashqlarida kitob treklari (yopiq ombordan), savollar va
 * matnlar o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  gaps,
  hearing,
  hearingTwo,
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

export const A1_21_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🎯", "hobby", "ˈhɒbi|hobi", "ot", "Xobbi, sevimli mashg'ulot", "Something you like doing in your free time.", "My favourite hobby is chess.", "Eng sevimli xobbim — shaxmat."),
      w("✈️", "travel", "ˈtrævl|trevl", "fe'l", "Sayohat qilmoq", "Go to other places and countries.", "People in the USA like to travel.", "AQSHdagi odamlar sayohat qilishni yoqtiradi."),
      w("🎮", "video game", "ˈvɪdiəʊ ɡeɪm|vidiou geym", "ot", "Video o'yin", "A game you play on a computer or phone.", "My brother plays a video game every evening.", "Akam har kech video o'yin o'ynaydi."),
      w("🛒", "online", "ˌɒnˈlaɪn|onlayn", "ravish", "Internetda, onlayn", "On the internet.", "I like shopping online.", "Internetdan xarid qilishni yoqtiraman."),
      w("📸", "take photos", "ˌteɪk ˈfəʊtəʊz|teyk foutouz", "ibora", "Suratga olmoq", "Make pictures with a camera or phone.", "I take photos of people.", "Men odamlarni suratga olaman."),
      w("✂️", "make things", "ˌmeɪk ˈθɪŋz|meyk singz", "ibora", "Qo'l bilan buyum yasamoq", "Create things with your hands (arts and crafts).", "My grandmother likes to make things with her hands.", "Buvim qo'llari bilan buyum yasashni yoqtiradi."),
      w("🎉", "go out", "ˌɡəʊ ˈaʊt|gou aut", "ibora", "Ko'chaga chiqmoq (dam olish uchun)", "Leave home to have fun.", "We go out with friends on Fridays.", "Juma kunlari do'stlar bilan ko'chaga chiqamiz."),
      w("🌱", "work in the garden", "ˌwɜːk ɪn ðə ˈɡɑːdn|uyork in za gaadn", "ibora", "Bog'da ishlamoq", "Look after plants and flowers.", "In the UK, people like to work in the garden.", "Britaniyada odamlar bog'da ishlashni yoqtiradi."),
      w("🎧", "listen to music", "ˌlɪsn tə ˈmjuːzɪk|lisn tu myuuzik", "ibora", "Musiqa tinglamoq", "Hear songs.", "I listen to music in the car.", "Mashinada musiqa tinglayman."),
      w("🌿", "nature", "ˈneɪtʃə|neycha", "ot", "Tabiat", "Trees, flowers, animals, mountains…", "Do you take photos of nature?", "Tabiatni suratga olasizmi?"),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("😠", "hate", "heɪt|heyt", "fe'l", "Yomon ko'rmoq", "Not like at all.", "I hate getting up early.", "Erta turishni yomon ko'raman."),
      w("😑", "bored", "bɔːd|bood", "sifat", "Zerikkan", "Not interested; with nothing to do.", "I'm always bored at the weekend.", "Dam olish kunlari doim zerikaman."),
      w("🥱", "boring", "ˈbɔːrɪŋ|booring", "sifat", "Zerikarli", "Not interesting.", "Football on TV is really boring.", "Televizordagi futbol juda zerikarli."),
      w("🎵", "pop music", "ˈpɒp ˌmjuːzɪk|pop myuuzik", "ot", "Pop musiqa", "Popular modern music.", "I usually listen to pop music.", "Odatda pop musiqa tinglayman."),
      w("🎸", "rock music", "ˈrɒk ˌmjuːzɪk|rok myuuzik", "ot", "Rok musiqa", "Loud music with electric guitars.", "His hobbies are football and rock music.", "Uning xobbilari — futbol va rok musiqa."),
      w("💃", "dancing", "ˈdɑːnsɪŋ|daansing", "ot", "Raqs", "Moving to music.", "Do you like dancing?", "Raqsga tushishni yoqtirasizmi?"),
      w("🏊", "swimming", "ˈswɪmɪŋ|suiming", "ot", "Suzish", "Moving in water as a sport.", "I like swimming and taking photos.", "Suzish va suratga olishni yoqtiraman."),
      w("📖", "reading", "ˈriːdɪŋ|riiding", "ot", "Kitob o'qish", "Looking at and understanding books.", "Five people in my group like reading.", "Guruhimda besh kishi kitob o'qishni yoqtiradi."),
      w("🤝", "meet", "miːt|miit", "fe'l", "Uchrashmoq, tanishmoq", "See and talk to a person.", "I want to meet people from all over the world.", "Dunyoning turli joylaridan odamlar bilan tanishmoqchiman."),
      w("📩", "contact", "ˈkɒntækt|kontekt", "fe'l", "Bog'lanmoq", "Write to or call someone.", "Please contact me.", "Iltimos, men bilan bog'laning."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🤹", "juggle", "ˈdʒʌɡl|jagl", "fe'l", "Jonglyorlik qilmoq", "Throw and catch a lot of balls without stopping.", "James can juggle five balls.", "Jeyms beshta to'pni jonglyorlik qila oladi."),
      w("⚾", "ball", "bɔːl|bool", "ot", "To'p", "A round thing for games.", "Throw a ball to someone.", "Kimgadir to'p oting."),
      w("🫴", "catch", "kætʃ|kech", "fe'l", "Ushlab olmoq", "Take something that is moving in the air.", "Catch the ball!", "To'pni ushla!"),
      w("🤾", "throw", "θrəʊ|srou", "fe'l", "Otmoq, tashlamoq", "Send something through the air with your hand.", "Throw the ball to me.", "To'pni menga ot."),
      w("🪄", "trick", "trɪk|trik", "ot", "Fokus, hiyla", "A clever thing you do to surprise people.", "I want to learn a new trick.", "Yangi fokus o'rganmoqchiman."),
      w("🔁", "practice", "ˈpræktɪs|praktis", "ot", "Mashq, amaliyot", "Doing something again and again to get better.", "Juggling needs a lot of practice.", "Jonglyorlik ko'p mashq talab qiladi."),
      w("😌", "easy", "ˈiːzi|iizi", "sifat", "Oson", "Not difficult.", "Is juggling easy?", "Jonglyorlik osonmi?"),
      w("🤫", "secret", "ˈsiːkrət|siikrat", "ot", "Sir", "Something only a few people know.", "The secret to juggling is practice.", "Jonglyorlikning siri — mashq."),
      w("👥", "group", "ɡruːp|gruup", "ot", "Guruh", "A number of people together.", "His juggling group meets every week.", "Uning jonglyorlar guruhi har hafta yig'iladi."),
      w("🎙️", "presenter", "prɪˈzentə|prizenta", "ot", "Boshlovchi", "A person who talks on a TV or video show.", "The presenter can't juggle very well.", "Boshlovchi unchalik yaxshi jonglyorlik qila olmaydi."),
    ],
  },
];

const POST = `Bobur (24) from Uzbekistan
Hello! I'm new to this site. I'm here because I like meeting people from all over the world. I like speaking English, but I can't speak very well because in my town people never speak English. I'm a nurse in a big hospital in Andijan and my hobbies are football and rock music. I like playing the guitar, too, but I play badly. I sometimes play music with my friend, Aziz. He's a great musician and he writes amazing songs.
Please contact me, so we can speak English to each other. Tell me what you like doing!`;
const read = reading(POST);

export const A1_21_EXERCISES: SeedExercise[] = [
  {
    title: "AQShda bo'sh vaqt",
    skill: "Tinglash",
    kind: "listenmatch",
    instructions: "AQShdagi odamlar bo'sh vaqtida nima qilishni yoqtiradi? Sakkizta mashg'ulot aytiladi. Tinglang va har bir raqamga yozing.",
    questions: [
      slots(track("7.10"), [
        ["1.", "travel"],
        ["2.", "cook"],
        ["3. watch / play …", "sport"],
        ["4. play video …", "games"],
        ["5. shop …", "online"],
        ["6. take …", "photos"],
        ["7. make …", "things"],
        ["8. go on …", "Facebook;Facebook / Twitter;Facebook/Twitter"],
      ]),
    ],
  },
  {
    title: "Britaniyada bo'sh vaqt",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Endi Buyuk Britaniyadagi ro'yxatni tinglang va to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("7.11"), [
        ["1. ___", "read", "travel", "cook"],
        ["2. watch ___", "TV", "films", "sport"],
        ["4. work in the ___", "garden", "office", "house"],
        ["5. listen to ___", "music", "the radio", "friends"],
        ["7. go out with ___", "friends", "family", "the dog"],
        ["8. play ___", "sport", "video games", "the guitar"],
        ["9. go to the ___ / theatre", "cinema", "museum", "park"],
      ]),
    ],
  },
  {
    title: "Anya va Marchin",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Anya va Marchin xobbilari haqida gaplashadi. Ular bir xil narsalarni yoqtiradimi? Tinglang va to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("7.12"), [
        ["M: «Do you have any ___, Anja?»", "hobbies", "friends", "photos"],
        ["A: «I like ___ and taking photos.»", "swimming", "running", "reading"],
        ["A: «I take photos of ___, usually.»", "people", "nature", "animals"],
        ["A: «What do you like ___ in your free time?»", "doing", "do", "to doing"],
        ["M: «No, I don't like ___ out.»", "going", "go", "goes"],
        ["M: «I like reading and listening to ___ at home.»", "music", "the radio", "stories"],
      ]),
    ],
  },
  {
    title: "like + -ing",
    skill: "Grammatika",
    kind: "choice",
    instructions: "like / love / don't like / hate dan keyin ot (I like tea) yoki fe'l + -ing (I like swimming) keladi.",
    questions: [
      say("Do you ___ any hobbies?", ["have", "having", "has", "to having"]),
      say("I like ___ and taking photos.", ["swimming", "swim", "swims", "to swimming"]),
      say("What do you like ___ in your free time?", ["doing", "do", "does", "did"]),
      say("Do you ___ out often?", ["go", "going", "goes", "to going"]),
      say("I don't like ___ out.", ["going", "go", "goes", "went"]),
      say("I like ___ and listening to music.", ["reading", "read", "reads", "to reading"]),
      say("My husband likes ___ at home.", ["being", "be", "is", "been"]),
      say("I like ___ my friends.", ["seeing", "see", "seing", "sees"]),
      say("I like ___ up late and going shopping.", ["getting", "geting", "get", "gets"]),
      say("I like ___ lots to do.", ["having", "haveing", "have", "has"]),
    ],
  },
  {
    title: "-ing imlosi",
    skill: "Imlo",
    kind: "choice",
    instructions: "Imlo: ko'p fe'lga -ing (listen → listening); -e bilan tugasa, e tushadi (have → having); unli + undosh bilan tugaydigan qisqa fe'lda oxirgi harf ikkilanadi (run → running).",
    questions: [
      say("listen → ?", ["listening", "listenning", "listning", "listeing"]),
      say("have → ?", ["having", "haveing", "havving", "haveng"]),
      say("run → ?", ["running", "runing", "runeing", "runnig"]),
      say("dance → ?", ["dancing", "danceing", "dancinng", "dancin"]),
      say("swim → ?", ["swimming", "swiming", "swimeing", "swimmming"]),
      say("get → ?", ["getting", "geting", "geeting", "getteing"]),
      say("write → ?", ["writing", "writeing", "writting", "writng"]),
      say("play → ?", ["playing", "plaing", "playyng", "playeing"]),
      say("shop → ?", ["shopping", "shoping", "shopeing", "shopin"]),
      say("make → ?", ["making", "makeing", "makking", "makin"]),
    ],
  },
  {
    title: "Ikki suhbat",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Ikki suhbatni tinglang va fe'lning to'g'ri shaklini tanlang.",
    questions: [
      gaps(track("7.13"), [
        ["1. «Do you like ___ out in the evening?»", "going", "go", "goes"],
        ["1. «But my husband likes ___ at home.»", "being", "be", "is"],
        ["1. «I often ___ out in the evening.»", "go", "going", "goes"],
        ["1. «I like ___ my friends.»", "seeing", "see", "sees"],
        ["2. «What do you like ___ at weekends?»", "doing", "do", "does"],
        ["2. «I like ___ up late and going shopping.»", "getting", "get", "gets"],
        ["2. «I'm always ___ at the weekend.»", "bored", "boring", "busy"],
      ]),
    ],
  },
  {
    title: "Mark va Xloya",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Mark va Xloya nimalarni yoqtirishi haqida gaplashadi. Tinglang va savollarga javob bering. Ba'zi savollarda IKKITA to'g'ri javob bor.",
    questions: [
      hearing(track("7.21"))("Does Mark like dancing?", ["Yes, but he can't dance very well.", "No, he doesn't.", "Yes, and he dances well.", "He doesn't say."]),
      hearing(track("7.21"))("What does Mark love?", ["Listening to music", "Dancing", "Swimming", "Playing sport"]),
      hearing(track("7.21"))("What music does Mark usually listen to?", ["Pop music", "Rock music", "Classical music", "Jazz"]),
      hearingTwo(track("7.21"))("Which TWO hobbies does Chloe like?", ["Playing sport", "Swimming"], ["Watching football", "Reading"]),
      hearing(track("7.21"))("Who likes dancing?", ["Both", "Only Chloe", "Only Mark", "Neither"]),
      hearing(track("7.21"))("What does Mark like watching on TV?", ["Football", "Films", "The news", "Cooking shows"]),
      hearing(track("7.21"))("What does Chloe think about football on TV?", ["It's really boring.", "It's great.", "It's OK.", "She loves it."]),
    ],
  },
  {
    title: "Boburning posti",
    skill: "O'qish",
    kind: "reading",
    instructions: "Ijtimoiy tarmoqdagi postni o'qing va savollarga javob bering.",
    questions: [
      read("How old is Bobur?", ["24", "42", "14", "The text doesn't say."]),
      read("Where is he from?", ["Uzbekistan", "Uruguay", "Andijan in Turkey", "The text doesn't say."]),
      read("What's his job?", ["He's a nurse.", "He's a musician.", "He's an engineer.", "He's a teacher."]),
      read("What are his hobbies?", ["Football and rock music", "Swimming and photos", "Reading and cooking", "Dancing and pop music"]),
      read("Why is he on this website?", ["He likes meeting people from all over the world.", "He wants a new job.", "He wants to sell his guitar.", "His friend Aziz is there."]),
      read("Why can't he speak English very well?", ["People in his town never speak English.", "He doesn't like English.", "He hasn't got time.", "He's new to the site."]),
      read("How does he play the guitar?", ["Badly", "Very well", "Fast", "He can't play."]),
      read("Who is Aziz?", ["His friend and a great musician", "His brother", "A nurse", "His teacher"]),
      read("«He writes amazing songs.» — Where is the adjective?", ["Before the noun «songs»", "After the noun «songs»", "Before the verb «writes»", "At the end"]),
      read("«I sometimes play music.» — Where is «sometimes»?", ["Before the verb", "After the verb", "At the end", "Before «I»"]),
    ],
  },
  {
    title: "Gap yozing",
    skill: "Grammatika",
    kind: "type",
    instructions: "Qavs ichidagi fe'lni -ing shaklida yozib, gapni to'liq yozing.",
    questions: written([
      ["I like ___. (swim)", "I like swimming."],
      ["She loves ___. (dance)", "She loves dancing."],
      ["We don't like ___ up early. (get)", "We don't like getting up early."],
      ["He hates ___ at the weekend. (work)", "He hates working at the weekend."],
      ["Do you like ___? (cook)", "Do you like cooking?"],
      ["My sister loves ___ photos. (take)", "My sister loves taking photos."],
      ["I don't like ___. (run)", "I don't like running."],
      ["They like ___ video games. (play)", "They like playing video games."],
      ["What do you like ___? (do)", "What do you like doing?"],
      ["I love ___ to music. (listen)", "I love listening to music."],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("I like *swim.", "like + -ing: I like swimming."),
      mistake("She loves *danceing.", "-e tushadi: dancing."),
      mistake("I hate *runing.", "run → running (n ikkilanadi)."),
      mistake("Do you like *go out?", "like + going out."),
      mistake("He *like watching football.", "he → likes."),
      mistake("I'm always *boring at the weekend.", "His-tuyg'u — bored; boring — zerikarli narsa."),
      mistake("Football on TV is really *bored.", "Narsa — boring."),
      mistake("I play *bad the guitar.", "Ravish fe'l+otdan keyin: I play the guitar badly."),
      mistake("He writes songs *amazing.", "Sifat otdan oldin: amazing songs."),
      mistake("I *often am bored.", "be dan keyin: I'm often bored."),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Yozish",
    kind: "order",
    instructions: "So'z tartibiga e'tibor bering: sifat + ot, fe'l + ravish, chastota ravishi + fe'l.",
    questions: sentences([
      "They always play football at the weekend.",
      "I can speak English slowly.",
      "We live in a small flat.",
      "I like cooking, but I can't cook well.",
      "I like taking photos in my free time.",
      "I sometimes watch American films.",
      "What do you like doing in your free time?",
      "I don't like going out.",
      "My husband loves cooking.",
      "He's a great musician.",
    ]),
  },
  {
    title: "Jonglyorlik",
    skill: "Lug'at",
    kind: "match",
    instructions: "«G'ayrioddiy xobbi» videosidagi iboralar. Juftlarni ulang.",
    questions: pairs([
      ["throw|a ball to someone", "catch|a ball", "juggle|two balls with one hand", "learn|a new trick"],
      ["need|a lot of practice", "like|juggling", "be|easy", "meet|every week"],
      ["juggle|jonglyorlik qilmoq", "catch|ushlamoq", "throw|otmoq", "trick|fokus"],
      ["love|❤️❤️", "like|❤️", "don't like|✗", "hate|✗✗"],
      ["bored|zerikkan", "boring|zerikarli", "easy|oson", "secret|sir"],
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting. going, being, seeing, doing so'zlarida tovushlar silliq bog'lanadi.",
    questions: phrases([
      "going, being, seeing, doing",
      "What do you like doing in your free time?",
      "I like swimming and taking photos.",
      "I don't like going out.",
      "I like reading and listening to music at home.",
      "I love dancing.",
      "I hate getting up early.",
      "My husband loves cooking.",
      "Do you have any hobbies?",
      "Please contact me.",
    ]),
  },
];
