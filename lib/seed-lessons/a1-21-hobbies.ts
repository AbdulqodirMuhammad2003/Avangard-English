/**
 * A1, 21-dars — «Sevimli mashg'ulotlar». Xobbilar va bo'sh vaqt.
 * Grammatika: like / love / enjoy / don't mind / hate + -ing (I love
 * cooking); -ing imlosi (make → making, swim → swimming); be good at /
 * be interested in + -ing. Matn va mashqlar o'zimizniki.
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

export const A1_21_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("👩‍🍳", "cooking", "ˈkʊkɪŋ|kuking", "ot", "Ovqat pishirish", "Making food.", "I love cooking for my family.", "Oilam uchun ovqat pishirishni yaxshi ko'raman."),
      w("🛍️", "shopping", "ˈʃɒpɪŋ|shoping", "ot", "Xarid qilish", "Going to shops to buy things.", "My sister enjoys shopping.", "Opam xarid qilishni yoqtiradi."),
      w("✈️", "travelling", "ˈtrævəlɪŋ|trevaling", "ot", "Sayohat qilish", "Going to other places and countries.", "Travelling is my favourite hobby.", "Sayohat — sevimli mashg'ulotim."),
      w("⛺", "camping", "ˈkæmpɪŋ|kemping", "ot", "Chodirda dam olish", "Sleeping in a tent in nature.", "We go camping in the mountains.", "Biz tog'larda chodirda dam olamiz."),
      w("🎣", "fishing", "ˈfɪʃɪŋ|fishing", "ot", "Baliq ovi", "Catching fish.", "My grandfather loves fishing.", "Bobom baliq ovini yaxshi ko'radi."),
      w("🌻", "gardening", "ˈɡɑːdnɪŋ|gaadning", "ot", "Bog'dorchilik", "Working in a garden with plants and flowers.", "My mother enjoys gardening.", "Onam bog'dorchilikni yoqtiradi."),
      w("🥾", "hiking", "ˈhaɪkɪŋ|hayking", "ot", "Tog' sayri, piyoda sayohat", "Walking a long way in nature.", "We go hiking in Chimgan.", "Chimyonda piyoda sayr qilamiz."),
      w("📸", "photography", "fəˈtɒɡrəfi|fatografi", "ot", "Fotosuratga olish", "Taking photos as a hobby.", "He is interested in photography.", "U fotosuratga qiziqadi."),
      w("🎉", "going out", "ˌɡəʊɪŋ ˈaʊt|gouing aut", "ot", "Ko'chaga chiqish, sayr", "Going to cafes, cinemas and parties.", "Students like going out at the weekend.", "Talabalar dam olish kunlari sayrga chiqishni yoqtirishadi."),
      w("🗃️", "collecting", "kəˈlektɪŋ|kalekting", "ot", "Kolleksiya yig'ish", "Keeping many things of one type: stamps, coins…", "Collecting coins is an interesting hobby.", "Tanga yig'ish — qiziqarli mashg'ulot."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("😡", "hate", "heɪt|heyt", "fe'l", "Yomon ko'rmoq", "To dislike very much.", "I hate getting up early.", "Erta turishni yomon ko'raman."),
      w("😊", "enjoy", "ɪnˈdʒɔɪ|injoy", "fe'l", "Rohatlanmoq, yoqtirmoq", "To like doing something.", "We enjoy walking in the park.", "Parkda sayr qilishni yoqtiramiz."),
      w("😐", "don't mind", "dəʊnt ˈmaɪnd|dount maynd", "ibora", "Qarshi emasman, mayli", "It's OK for me — not good, not bad.", "I don't mind cleaning the house.", "Uy tozalashga qarshi emasman."),
      w("⚖️", "prefer", "prɪˈfɜː|prifyo", "fe'l", "Afzal ko'rmoq", "To like one thing more than another.", "I prefer tea to coffee.", "Qahvadan ko'ra choyni afzal ko'raman."),
      w("🔍", "interested in", "ˈɪntrəstɪd ɪn|intrestid in", "ibora", "…ga qiziqadi", "Wanting to know more about something.", "I'm interested in history.", "Tarixga qiziqaman."),
      w("🏅", "good at", "ˈɡʊd ət|gud at", "ibora", "…ni yaxshi biladi, …da usta", "Able to do something well.", "She's good at drawing.", "U rasm chizishni yaxshi biladi."),
      w("🥱", "bored", "bɔːd|bood", "sifat", "Zerikkan", "Feeling that nothing is interesting.", "I'm bored. Let's go out!", "Zerikdim. Keling, sayrga chiqamiz!"),
      w("😴", "boring", "ˈbɔːrɪŋ|booring", "sifat", "Zerikarli", "Not interesting.", "This film is boring.", "Bu film zerikarli."),
      w("🤩", "exciting", "ɪkˈsaɪtɪŋ|iksayting", "sifat", "Hayajonli", "Very interesting and fun.", "Football matches are exciting.", "Futbol o'yinlari hayajonli."),
      w("🧘", "relaxing", "rɪˈlæksɪŋ|rileksing", "sifat", "Tinchlantiruvchi, dam beruvchi", "It makes you calm.", "Fishing is very relaxing.", "Baliq ovi juda tinchlantiradi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🕑", "free time", "ˌfriː ˈtaɪm|frii taym", "ibora", "Bo'sh vaqt", "Time when you don't work or study.", "What do you do in your free time?", "Bo'sh vaqtingizda nima qilasiz?"),
      w("🎯", "hobby", "ˈhɒbi|hobi", "ot", "Sevimli mashg'ulot, xobbi", "Something you do for fun.", "What's your hobby?", "Sevimli mashg'ulotingiz nima?"),
      w("🎶", "concert", "ˈkɒnsət|konsat", "ot", "Konsert", "A music show.", "We go to a concert every month.", "Har oy konsertga boramiz."),
      w("📱", "social media", "ˌsəʊʃl ˈmiːdiə|soushl miidia", "ot", "Ijtimoiy tarmoqlar", "Instagram, Telegram, TikTok…", "Teenagers spend a lot of time on social media.", "O'smirlar ijtimoiy tarmoqlarda ko'p vaqt o'tkazishadi."),
      w("🎮", "video game", "ˈvɪdiəʊ ɡeɪm|vidiou geym", "ot", "Kompyuter o'yini", "A game on a computer or a phone.", "My son plays a video game every evening.", "O'g'lim har kuni kechqurun kompyuter o'yini o'ynaydi."),
      w("👥", "team", "tiːm|tiim", "ot", "Jamoa", "A group of players.", "Which team do you support?", "Qaysi jamoaga muxlislik qilasiz?"),
      w("📣", "fan", "fæn|fen", "ot", "Muxlis", "A person who loves a team, a singer…", "I'm a big fan of Pakhtakor.", "Men «Paxtakor»ning ashaddiy muxlisiman."),
      w("🪪", "member", "ˈmembə|memba", "ot", "A'zo", "A person in a club or a group.", "She is a member of the chess club.", "U shaxmat to'garagi a'zosi."),
      w("🏃", "activity", "ækˈtɪvəti|ektiviti", "ot", "Mashg'ulot, faoliyat", "Something you do.", "Swimming is a good activity for children.", "Suzish — bolalar uchun yaxshi mashg'ulot."),
      w("🌲", "outdoors", "ˌaʊtˈdɔːz|autdooz", "ravish", "Ochiq havoda", "Outside, not in a building.", "I like spending time outdoors.", "Ochiq havoda vaqt o'tkazishni yoqtiraman."),
    ],
  },
];

const VERBS = ["love", "like", "don't mind", "hate"];

const SURVEY = `FREE TIME SURVEY — Avangard English students
We asked our students about their hobbies. Here are some answers:
Dilnoza (17): "I love reading and drawing. I'm good at drawing faces. I hate doing sport — it's boring for me!"
Akmal (25): "I'm a big fan of football. I play in a team every Sunday. I don't mind watching TV, but I prefer being outdoors."
Shahnoza (30): "I enjoy cooking and gardening. They're very relaxing after work. I'm also interested in photography."
Timur (19): "I like playing video games and going out with friends. I hate getting up early at the weekend!"`;
const read = reading(SURVEY);

const RADIO = `Good evening! Today on "Free Time" we talk to Laylo, a student from Namangan. Laylo, what do you do in your free time?
I really enjoy hiking. Every month I go to the mountains with my friends. It's exciting!
Do you go camping too?
Yes, sometimes. I love sleeping in a tent! But my sister hates camping — she prefers staying at home.
What else do you like doing?
I'm interested in photography. I take photos of mountains and flowers. I'm a member of a photo club.
Do you like social media?
Not really. I don't mind using Telegram, but I think social media is boring.`;
const hear = hearing(RADIO);

export const A1_21_EXERCISES: SeedExercise[] = [
  {
    title: "Xobbilar",
    skill: "Tinglash",
    kind: "listen",
    instructions: "So'z o'qiladi. Eshitganingizni toping.",
    questions: [
      listen("camping", ["camping", "cooking", "shopping", "jumping"]),
      listen("fishing", ["fishing", "finishing", "washing", "wishing"]),
      listen("hiking", ["hiking", "biking", "liking", "making"]),
      listen("gardening", ["gardening", "garden", "guarding", "cleaning"]),
      listen("photography", ["photography", "photographer", "photo", "geography"]),
      listen("boring", ["boring", "bored", "pouring", "morning"]),
      listen("bored", ["bored", "boring", "board", "bread"]),
      listen("exciting", ["exciting", "excited", "existing", "inviting"]),
      listen("enjoy", ["enjoy", "join", "annoy", "employ"]),
      listen("prefer", ["prefer", "perfect", "offer", "refer"]),
    ],
  },
  {
    title: "Rasmga mos mashg'ulot",
    skill: "Rasm",
    kind: "picture",
    instructions: "Rasmga qarang va mos so'zni toping.",
    questions: [
      pick("⛺", ["camping", "fishing", "hiking", "shopping"], 0),
      pick("🎣", ["cooking", "fishing", "gardening", "swimming"], 1),
      pick("📸", ["collecting", "drawing", "photography", "reading"], 2),
      pick("🌻", ["camping", "hiking", "shopping", "gardening"], 3),
      pick("🛍️", ["shopping", "travelling", "going out", "cooking"], 0),
      pick("🥾", ["camping", "hiking", "fishing", "collecting"], 1),
      pick("🎮", ["social media", "team", "video game", "concert"], 2),
      pick("🎶", ["team", "fan", "member", "concert"], 3),
      pick("😴", ["boring", "exciting", "relaxing", "bored"], 0),
      pick("🤩", ["boring", "exciting", "relaxing", "bored"], 1),
    ],
  },
  {
    title: "Qanchalik yoqadi?",
    skill: "Lug'at",
    kind: "choice",
    instructions: "❤️❤️ — love, ❤️ — like, 😐 — don't mind, 😡 — hate. Belgiga mos so'zni tanlang.",
    questions: [
      pick("I ___ cooking. (❤️❤️)", VERBS, 0),
      pick("She ___ reading. (❤️)", ["loves", "likes", "doesn't mind", "hates"], 1),
      pick("I ___ cleaning the house. (😐)", VERBS, 2),
      pick("He ___ getting up early. (😡)", ["loves", "likes", "doesn't mind", "hates"], 3),
      pick("We ___ travelling. (❤️❤️)", VERBS, 0),
      pick("They ___ watching football. (❤️)", VERBS, 1),
      pick("My mother ___ shopping. (😐)", ["loves", "likes", "doesn't mind", "hates"], 2),
      pick("I ___ waiting for the bus. (😡)", VERBS, 3),
      pick("My grandfather ___ fishing. (❤️❤️)", ["loves", "likes", "doesn't mind", "hates"], 0),
      pick("You ___ playing chess. (❤️)", VERBS, 1),
    ],
  },
  {
    title: "-ing shakli",
    skill: "Grammatika",
    kind: "type",
    instructions: "Fe'lning -ing shaklini yozing: odatda + ing; -e tushib qoladi (make → making); qisqa so'zda undosh ikkilanadi (swim → swimming).",
    questions: written([
      ["read", "reading"],
      ["cook", "cooking"],
      ["make", "making", "-e tushib qoladi."],
      ["dance", "dancing"],
      ["swim", "swimming", "unli + undosh bilan tugagan qisqa so'z: m ikkilanadi."],
      ["run", "running"],
      ["shop", "shopping"],
      ["write", "writing"],
      ["play", "playing"],
      ["travel", "travelling", "Britancha: travelling (ikki l)."],
    ]),
  },
  {
    title: "Fe'ldan keyin -ing",
    skill: "Grammatika",
    kind: "choice",
    instructions: "like, love, enjoy, hate, don't mind, be good at, be interested in dan keyin fe'l -ing bilan keladi.",
    questions: [
      say("I love ___ for my family.", ["cooking", "cook", "cooks", "to cooking"]),
      say("She enjoys ___ in the park.", ["walking", "walk", "walks", "to walking"]),
      say("He's good at ___.", ["drawing", "draw", "draws", "to draw"]),
      say("I'm interested in ___ photos.", ["taking", "take", "takes", "to taking"]),
      say("They hate ___ up early.", ["getting", "get", "gets", "to getting"]),
      say("I don't mind ___ the dishes.", ["washing", "wash", "washes", "to washing"]),
      say("We like ___ in the sea.", ["swimming", "swiming", "swim", "swims"]),
      say("My dad enjoys ___ the newspaper.", ["reading", "read", "reads", "to readings"]),
      say("Do you like ___?", ["dancing", "danceing", "dance it", "dances"]),
      say("I prefer ___ at home.", ["staying", "stay", "stays", "to staying"]),
    ],
  },
  {
    title: "bored yoki boring?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "-ed — odamning his-tuyg'usi (I'm bored), -ing — narsaning xususiyati (The film is boring).",
    questions: [
      pick("This film is ___.", ["bored", "boring"], 1),
      pick("I'm ___. Let's do something!", ["bored", "boring"], 0),
      pick("The lesson is very ___.", ["bored", "boring"], 1),
      pick("The children are ___. It's raining.", ["bored", "boring"], 0),
      pick("Football is ___!", ["excited", "exciting"], 1),
      pick("I'm very ___ about the trip!", ["excited", "exciting"], 0),
      pick("Fishing is ___.", ["relaxed", "relaxing"], 1),
      pick("I feel ___ on holiday.", ["relaxed", "relaxing"], 0),
      pick("History is ___.", ["interested", "interesting"], 1),
      pick("I'm ___ in history.", ["interested", "interesting"], 0),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Chap va o'ng tomonni ulang.",
    questions: pairs([
      ["love|juda yoqtirmoq", "enjoy|rohatlanmoq", "don't mind|qarshi emasman", "hate|yomon ko'rmoq"],
      ["cooking|ovqat pishirish", "fishing|baliq ovi", "hiking|tog' sayri", "gardening|bog'dorchilik"],
      ["good at|drawing", "interested in|history", "a fan of|football", "a member of|a club"],
      ["make|making", "swim|swimming", "write|writing", "play|playing"],
      ["bored|zerikkan", "boring|zerikarli", "exciting|hayajonli", "relaxing|tinchlantiruvchi"],
      ["free time|bo'sh vaqt", "team|jamoa", "concert|konsert", "outdoors|ochiq havoda"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("I love *cook for my family.", "love + -ing: I love cooking."),
      mistake("She enjoys *to read.", "enjoy + -ing: She enjoys reading."),
      mistake("He's good *in drawing.", "good at: He's good at drawing."),
      mistake("I'm interested *on photography.", "interested in."),
      mistake("I'm *boring. Let's go out!", "Odam his qiladi — bored."),
      mistake("We like *swiming in the sea.", "swim → swimming (m ikkilanadi)."),
      mistake("I don't *minding cleaning the house.", "don't mind + -ing: I don't mind cleaning the house."),
      mistake("She *likes dance very much.", "like + -ing: She likes dancing."),
      mistake("I prefer tea *than coffee.", "prefer A to B: I prefer tea to coffee."),
      mistake("My hobby *are camping.", "hobby — birlik: My hobby is camping."),
    ],
  },
  {
    title: "Suhbatni davom ettiring",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("What do you do in your free time?", ["I like reading and playing chess.", "I like read and play chess.", "I'm free time.", "I likes reading."]),
      say("Do you like cooking?", ["Yes, I love it! I'm good at making plov.", "Yes, I love cook.", "Yes, I'm cooking.", "Yes, I good at cooking."]),
      say("What's your hobby?", ["Photography. I take photos every day.", "My hobby is photo.", "I'm hobby.", "It's take photos."]),
      say("Are you interested in history?", ["Yes, very. I often go to museums.", "Yes, I'm interesting.", "Yes, I interested.", "Yes, history is interested."]),
      say("Do you enjoy shopping?", ["Not really. I find it boring.", "Not really. I'm boring.", "Yes, I enjoy shop.", "No, I'm enjoy."]),
      say("Which team do you support?", ["Pakhtakor! I'm a big fan.", "I support a team fan.", "Football team.", "I'm a member team."]),
      say("Do you prefer tea or coffee?", ["I prefer tea.", "I prefer to tea than coffee.", "I prefer tea than coffee.", "Tea prefer."]),
      say("I'm bored!", ["Let's go out! There's a concert tonight.", "Me too, I'm boring.", "Yes, bored is good.", "Go to bored."]),
      say("Do you mind washing the dishes?", ["No, I don't mind.", "No, I don't mind wash.", "Yes, I mind not.", "No, I'm not mind."]),
      say("Is camping exciting?", ["Yes, I love sleeping in a tent!", "Yes, I'm exciting.", "Yes, camping is excited.", "Yes, I love sleep tent."]),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "I love cooking for my family.",
      "She enjoys walking in the park.",
      "He's good at drawing.",
      "I'm interested in history.",
      "I hate getting up early.",
      "I don't mind cleaning the house.",
      "What do you do in your free time?",
      "Fishing is very relaxing.",
      "I'm a big fan of football.",
      "I prefer tea to coffee.",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: written([
      ["I love ___ books. (read)", "reading"],
      ["She enjoys ___ in the sea. (swim)", "swimming"],
      ["He's good ___ playing the guitar.", "at"],
      ["I'm interested ___ photography.", "in"],
      ["I hate ___ for the bus. (wait)", "waiting"],
      ["This film is very ___. Let's watch something else.", "boring"],
      ["What do you do in your free ___?", "time"],
      ["My ___ is collecting stamps. (sevimli mashg'ulot)", "hobby"],
      ["She's a ___ of the chess club. (a'zo)", "member"],
      ["I prefer tea ___ coffee.", "to"],
    ]),
  },
  {
    title: "So'rovnoma: bo'sh vaqt",
    skill: "Matn bilan ishlash",
    kind: "reading",
    instructions: "Matnni diqqat bilan o'qing va har bir savolga javob bering.",
    questions: [
      read("What does Dilnoza love doing?", ["Reading and drawing", "Doing sport", "Cooking", "Playing video games"]),
      read("What is Dilnoza good at?", ["Drawing faces", "Reading", "Sport", "Photography"]),
      read("What does Dilnoza hate?", ["Doing sport", "Drawing", "Reading", "Getting up early"]),
      read("When does Akmal play football?", ["Every Sunday", "Every day", "On Saturday", "The text doesn't say."]),
      read("What does Akmal prefer?", ["Being outdoors", "Watching TV", "Playing video games", "Going shopping"]),
      read("Why does Shahnoza enjoy cooking and gardening?", ["They're relaxing after work.", "They're exciting.", "Her family likes them.", "The text doesn't say."]),
      read("What is Shahnoza interested in?", ["Photography", "Football", "Video games", "Drawing"]),
      read("Who likes playing video games?", ["Timur", "Akmal", "Dilnoza", "Shahnoza"]),
      read("What does Timur hate?", ["Getting up early at the weekend", "Going out", "Video games", "Football"]),
      read("Who is the oldest student?", ["Shahnoza", "Akmal", "Timur", "Dilnoza"]),
    ],
  },
  {
    title: "Radio: «Free Time»",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Radio suhbatini tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Laylo qayerdan?", ["Namangandan", "Toshkentdan", "Samarqanddan", "Aytilmagan"]),
      hear("Layloning eng sevimli mashg'uloti nima?", ["Tog' sayri", "Ovqat pishirish", "Xarid qilish", "Kompyuter o'yinlari"]),
      hear("U tog'larga qanchalik tez-tez boradi?", ["Har oy", "Har hafta", "Har yili", "Har kuni"]),
      hear("U kim bilan boradi?", ["Do'stlari bilan", "Singlisi bilan", "Ota-onasi bilan", "Yolg'iz"]),
      hear("Laylo chodirda uxlashni yoqtiradimi?", ["Ha, juda", "Yo'q, yomon ko'radi", "Qarshi emas", "Aytilmagan"]),
      hear("Uning singlisi nimani afzal ko'radi?", ["Uyda qolishni", "Chodirda dam olishni", "Tog'ga chiqishni", "Suratga olishni"]),
      hear("Laylo yana nimaga qiziqadi?", ["Fotosuratga olishga", "Musiqaga", "Futbolga", "Tarixga"]),
      hear("U nimalarning suratini oladi?", ["Tog'lar va gullarning", "Odamlarning", "Shaharning", "Hayvonlarning"]),
      hear("U qanday to'garak a'zosi?", ["Foto to'garagi", "Shaxmat to'garagi", "Sport to'garagi", "Musiqa to'garagi"]),
      hear("Laylo ijtimoiy tarmoqlar haqida nima deydi?", ["Zerikarli", "Hayajonli", "Juda yoqadi", "Aytilmagan"]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "I love cooking.",
      "She enjoys reading.",
      "I hate getting up early.",
      "I don't mind cleaning.",
      "He's good at drawing.",
      "I'm interested in history.",
      "What do you do in your free time?",
      "This film is boring.",
      "photography",
      "exciting",
    ]),
  },
];
