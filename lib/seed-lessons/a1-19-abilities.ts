/**
 * A1, 19-dars — «Qobiliyatlar». Ko'nikmalar, sport, musiqa asboblari.
 * Grammatika: can / can't — qobiliyat (I can swim. She can't drive.):
 * barcha shaxslar uchun bir xil, can dan keyin fe'l to'g'ridan-to'g'ri
 * (to va -s siz); talaffuz: can [kən] — can't [kaant]. Matn va mashqlar
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
  reading,
  say,
  sentences,
  w,
  written,
  type Rounds,
} from "./helpers";

export const A1_19_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🏊", "swim", "swɪm|suim", "fe'l", "Suzmoq", "To move in water.", "I can swim very well.", "Men juda yaxshi suza olaman."),
      w("💃", "dance", "dɑːns|daans", "fe'l", "Raqsga tushmoq", "To move to music.", "My sister can dance lazgi.", "Opam lazgi raqsini tusha oladi."),
      w("🎤", "sing", "sɪŋ|sing", "fe'l", "Qo'shiq aytmoq", "To make music with your voice.", "Can you sing?", "Qo'shiq ayta olasizmi?"),
      w("✏️", "draw", "drɔː|droo", "fe'l", "Rasm chizmoq (qalamda)", "To make a picture with a pencil.", "My son can draw animals.", "O'g'lim hayvonlarning rasmini chiza oladi."),
      w("🎨", "paint", "peɪnt|peynt", "fe'l", "Bo'yoq bilan rasm solmoq", "To make a picture with colours.", "She can paint beautiful flowers.", "U chiroyli gullar chiza oladi."),
      w("🏃", "run", "rʌn|ran", "fe'l", "Yugurmoq", "To move very fast on your feet.", "I can run five kilometres.", "Men besh kilometr yugura olaman."),
      w("🦘", "jump", "dʒʌmp|jamp", "fe'l", "Sakramoq", "To go up into the air with your feet.", "Kangaroos can jump very high.", "Kengurular juda baland sakray oladi."),
      w("🧗", "climb", "klaɪm|klaym", "fe'l", "Tirmashib chiqmoq", "To go up a mountain or a tree. The «b» is silent.", "Can you climb a tree?", "Daraxtga chiqa olasizmi?"),
      w("⛸️", "skate", "skeɪt|skeyt", "fe'l", "Konkida uchmoq", "To move on ice in special shoes.", "My brother can skate.", "Akam konkida ucha oladi."),
      w("⌨️", "type", "taɪp|tayp", "fe'l", "Klaviaturada yozmoq", "To write with a keyboard.", "She can type very fast.", "U klaviaturada juda tez yoza oladi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("✅", "can", "kæn|ken", "modal fe'l", "…a oladi, …a olaman", "To be able to do something.", "I can speak three languages.", "Men uch tilda gapira olaman."),
      w("🚫", "can't", "kɑːnt|kaant", "modal fe'l", "…a olmaydi, …a olmayman", "Cannot: not able to do something.", "I can't drive.", "Men mashina hayday olmayman."),
      w("🎸", "guitar", "ɡɪˈtɑː|gitaa", "ot", "Gitara", "A musical instrument with six strings.", "Can you play the guitar?", "Gitara chala olasizmi?"),
      w("🎹", "piano", "piˈænəʊ|pienou", "ot", "Pianino", "A big musical instrument with black and white keys.", "She plays the piano every day.", "U har kuni pianino chaladi."),
      w("♟️", "chess", "tʃes|ches", "ot", "Shaxmat", "A game for two people on a board.", "My grandfather can play chess very well.", "Bobom shaxmatni juda yaxshi o'ynaydi."),
      w("🎾", "tennis", "ˈtenɪs|tenis", "ot", "Tennis", "A sport with a racket and a small ball.", "We play tennis on Saturdays.", "Shanba kunlari tennis o'ynaymiz."),
      w("🏀", "basketball", "ˈbɑːskɪtbɔːl|baaskitbool", "ot", "Basketbol", "A sport where you throw a ball into a high basket.", "Tall people often play basketball.", "Baland bo'yli odamlar ko'pincha basketbol o'ynaydi."),
      w("🏐", "volleyball", "ˈvɒlibɔːl|volibool", "ot", "Voleybol", "A sport where you hit a ball over a net.", "We play volleyball on the beach.", "Sohilda voleybol o'ynaymiz."),
      w("🛠️", "skill", "skɪl|skil", "ot", "Ko'nikma, mahorat", "Something you can do well.", "Cooking is a useful skill.", "Ovqat pishirish — foydali ko'nikma."),
      w("🌟", "talent", "ˈtælənt|telent", "ot", "Iste'dod", "A natural ability to do something well.", "She has a talent for music.", "Uning musiqaga iste'dodi bor."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🙅", "at all", "ət ˈɔːl|at ool", "ibora", "Umuman (inkorda)", "Used to make a negative stronger.", "I can't sing at all.", "Men umuman qo'shiq ayta olmayman."),
      w("🤏", "a little", "ə ˈlɪtl|a litl", "ibora", "Biroz, ozgina", "Not much.", "I can speak a little French.", "Men biroz fransuzcha gapira olaman."),
      w("👌", "quite", "kwaɪt|kuayt", "ravish", "Ancha, yetarlicha", "More than a little, but not very.", "I can swim quite well.", "Men ancha yaxshi suza olaman."),
      w("💯", "sure", "ʃɔː|shoo", "sifat", "Ishonchim komil; albatta", "Certain. Also «yes, of course».", "— Can you help me? — Sure!", "— Yordam bera olasizmi? — Albatta!"),
      w("🤞", "try", "traɪ|tray", "fe'l", "Harakat qilmoq, urinib ko'rmoq", "To make an effort to do something.", "I can't skate, but I can try!", "Konkida ucha olmayman, lekin urinib ko'raman!"),
      w("📖", "learn", "lɜːn|lyon", "fe'l", "O'rganmoq", "To get new knowledge or a new skill.", "I want to learn the piano.", "Pianino chalishni o'rganmoqchiman."),
      w("🔁", "practise", "ˈpræktɪs|prektis", "fe'l", "Mashq qilmoq", "To do something again and again to get better.", "I practise English every day.", "Har kuni ingliz tilini mashq qilaman."),
      w("🐣", "beginner", "bɪˈɡɪnə|bigina", "ot", "Boshlovchi", "A person who is starting to learn.", "I'm a beginner at chess.", "Men shaxmatda boshlovchiman."),
      w("🎓", "expert", "ˈekspɜːt|ekspyot", "ot", "Mutaxassis, ustasi", "A person who knows a lot about something.", "My uncle is an expert in computers.", "Amakim kompyuterlar bo'yicha mutaxassis."),
      w("🏆", "competition", "ˌkɒmpəˈtɪʃn|kompatishn", "ot", "Musobaqa, tanlov", "An event where people try to win.", "She wins every chess competition.", "U har bir shaxmat musobaqasida g'olib bo'ladi."),
    ],
  },
];

const CAN = ["can", "can't"];

const CLUB = `NEW CLUBS AT AVANGARD ENGLISH CENTRE!
Can you sing, dance or play an instrument? Join our clubs!
• Music club — Monday and Wednesday, 5 p.m. Can't play the guitar? No problem — our teacher Rustam can teach beginners.
• Chess club — Tuesday, 4 p.m. All levels: beginners and experts. Every month there is a small competition.
• Sports club — Saturday, 10 a.m. We play volleyball and basketball. You can't come in jeans — wear sports clothes!
• Art club — Thursday, 6 p.m. You can learn to draw and paint. You don't need a talent — you only need to try!
All clubs are free for our students.`;
const read = reading(CLUB);

const INTERVIEW = `So, Laziz, you want a job at our summer camp for children. Can you swim?
Yes, I can. I can swim very well. I'm a swimming teacher.
Great! Can you play any sports?
Yes, I can play football and volleyball, but I can't play basketball — I'm not very tall!
That's OK. Can you play a musical instrument?
I can play the guitar a little. And I can sing quite well.
Wonderful — the children love songs. Can you drive?
No, I can't. Sorry.
No problem. And can you speak English?
Yes, I can. And I can speak a little Russian too.`;
const hear = hearing(INTERVIEW);

export const A1_19_EXERCISES: SeedExercise[] = [
  {
    title: "can yoki can't?",
    skill: "Tinglash",
    kind: "listen",
    instructions:
      "Gapda can odatda qisqa va urg'usiz aytiladi [kən], can't esa cho'zib va urg'u bilan [kaant]. Eshitgan gapingizni toping.",
    questions: [
      listen("I can swim.", ["I can swim.", "I can't swim."]),
      listen("She can't drive.", ["She can drive.", "She can't drive."]),
      listen("We can dance.", ["We can dance.", "We can't dance."]),
      listen("He can't sing.", ["He can sing.", "He can't sing."]),
      listen("They can play chess.", ["They can play chess.", "They can't play chess."]),
      listen("I can't skate.", ["I can skate.", "I can't skate."]),
      listen("You can paint.", ["You can paint.", "You can't paint."]),
      listen("My son can't climb trees.", ["My son can climb trees.", "My son can't climb trees."]),
      listen("She can type fast.", ["She can type fast.", "She can't type fast."]),
      listen("We can't play tennis.", ["We can play tennis.", "We can't play tennis."]),
    ],
  },
  {
    title: "Rasmga mos fe'l",
    skill: "Rasm",
    kind: "picture",
    instructions: "Rasmga qarang va mos so'zni toping.",
    questions: [
      pick("🏊", ["swim", "run", "jump", "skate"], 0),
      pick("💃", ["sing", "dance", "draw", "climb"], 1),
      pick("🧗", ["jump", "run", "climb", "swim"], 2),
      pick("⛸️", ["swim", "dance", "run", "skate"], 3),
      pick("🎸", ["guitar", "piano", "tennis", "chess"], 0),
      pick("🎹", ["guitar", "piano", "violin", "chess"], 1),
      pick("♟️", ["tennis", "basketball", "chess", "volleyball"], 2),
      pick("🏀", ["tennis", "volleyball", "football", "basketball"], 3),
      pick("🎤", ["sing", "dance", "paint", "type"], 0),
      pick("🏆", ["skill", "competition", "talent", "expert"], 1),
    ],
  },
  {
    title: "can yoki can't?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Belgiga qarang: ✓ — can, ✗ — can't.",
    questions: [
      pick("I ___ swim. (✓)", CAN, 0),
      pick("She ___ drive. (✗)", CAN, 1),
      pick("My grandfather ___ play chess very well. (✓)", CAN, 0),
      pick("We ___ come to the party. Sorry! (✗)", CAN, 1),
      pick("Fish ___ swim. (✓)", CAN, 0),
      pick("Fish ___ walk. (✗)", CAN, 1),
      pick("He ___ speak three languages. (✓)", CAN, 0),
      pick("I ___ sing at all. (✗)", CAN, 1),
      pick("They ___ play the piano. (✓)", CAN, 0),
      pick("My little brother ___ read. He's only three. (✗)", CAN, 1),
    ],
  },
  {
    title: "Gap yozing",
    skill: "Grammatika",
    kind: "type",
    instructions: "can / can't bilan gap yozing. can dan keyin fe'l o'zgarmaydi: She can swim (cans, swims — xato).",
    questions: written([
      ["she / swim (✓)", "She can swim."],
      ["he / drive (✗)", "He can't drive.|He cannot drive."],
      ["I / play the guitar (✓)", "I can play the guitar."],
      ["they / dance (✗)", "They can't dance.|They cannot dance."],
      ["we / speak English (✓)", "We can speak English."],
      ["my sister / cook (✓)", "My sister can cook."],
      ["my father / skate (✗)", "My father can't skate.|My father cannot skate."],
      ["you / sing (✓)", "You can sing."],
      ["Aziz / type fast (✗)", "Aziz can't type fast.|Aziz cannot type fast."],
      ["I / draw (✗)", "I can't draw.|I cannot draw."],
    ]),
  },
  {
    title: "Qanchalik yaxshi?",
    skill: "Lug'at",
    kind: "choice",
    instructions: "very well — juda yaxshi, quite well — ancha yaxshi, a little — biroz, not at all — umuman.",
    questions: [
      say("Men juda yaxshi suzaman. → I can swim ___.", ["very well", "a little", "at all", "quite"]),
      say("Biroz fransuzcha gapiraman. → I can speak ___ French.", ["a little", "very well", "at all", "quite good"]),
      say("Umuman qo'shiq ayta olmayman. → I can't sing ___.", ["at all", "a little", "very well", "quite"]),
      say("Ancha yaxshi rasm chizaman. → I can draw ___ well.", ["quite", "at all", "a little", "very much"]),
      say("U juda yaxshi raqs tushadi. → She can dance ___.", ["very well", "at all", "a little", "much good"]),
      say("Men shaxmatda boshlovchiman. → I'm a ___ at chess.", ["beginner", "expert", "talent", "skill"]),
      say("U kompyuterlarni juda yaxshi biladi. → He's an ___.", ["expert", "beginner", "a little", "at all"]),
      say("Har kuni mashq qilaman. → I ___ every day.", ["practise", "talent", "skill", "expert"]),
      say("Urinib ko'raman! → I can ___!", ["try", "learn", "skill", "sure"]),
      say("— Yordam bera olasizmi? — Albatta! → — Can you help me? — ___!", ["Sure", "At all", "A little", "Beginner"]),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Chap va o'ng tomonni ulang.",
    questions: pairs([
      ["swim|suzmoq", "dance|raqsga tushmoq", "sing|qo'shiq aytmoq", "draw|rasm chizmoq"],
      ["run|yugurmoq", "jump|sakramoq", "climb|tirmashmoq", "skate|konkida uchmoq"],
      ["play|the guitar", "play|chess", "speak|English", "ride|a bike"],
      ["can|…a oladi", "can't|…a olmaydi", "a little|biroz", "at all|umuman"],
      ["skill|ko'nikma", "talent|iste'dod", "beginner|boshlovchi", "expert|mutaxassis"],
      ["learn|o'rganmoq", "practise|mashq qilmoq", "try|urinib ko'rmoq", "competition|musobaqa"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("She *cans swim.", "can o'zgarmaydi: She can swim."),
      mistake("He can *drives a car.", "can dan keyin fe'l -s siz: He can drive."),
      mistake("I can *to play the guitar.", "can dan keyin to kerak emas: I can play."),
      mistake("I *don't can sing.", "Inkor — can't: I can't sing."),
      mistake("My brother can play *a chess.", "Sport va o'yinlar artiklsiz: play chess."),
      mistake("She can play *piano very well.", "Musiqa asbobi — the bilan: play the piano."),
      mistake("I can't swim *a little.", "Inkorda kuchaytirish — at all: I can't swim at all."),
      mistake("He's a *beginning at chess.", "Boshlovchi — beginner."),
      mistake("I *practice English every day.", "Britancha fe'l — practise (practice — ot)."),
      mistake("They can *dancing very well.", "can + fe'l: They can dance."),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "I can swim very well.",
      "She can't drive.",
      "My grandfather can play chess.",
      "Can you play the guitar?",
      "I can't sing at all.",
      "He can speak a little French.",
      "I'm a beginner at tennis.",
      "I want to learn the piano.",
      "She has a talent for music.",
      "I can't skate, but I can try.",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: written([
      ["I ___ swim. I love the sea! (✓)", "can"],
      ["She ___ drive. She hasn't got a car. (✗)", "can't|cannot"],
      ["Can you play ___ guitar?", "the"],
      ["I can't dance ___ all.", "at"],
      ["I can speak a ___ Russian. (biroz)", "little"],
      ["My brother is tall. He plays ___. (🏀)", "basketball"],
      ["My grandfather plays ___ with his friends. (♟️)", "chess"],
      ["I'm not an expert. I'm a ___.", "beginner"],
      ["I ___ the piano every day to get better.", "practise"],
      ["She wins every ___. She's the best!", "competition"],
    ]),
  },
  {
    title: "Markazdagi to'garaklar",
    skill: "Matn bilan ishlash",
    kind: "reading",
    instructions: "E'lonni diqqat bilan o'qing va har bir savolga javob bering.",
    questions: [
      read("When is the music club?", ["Monday and Wednesday, 5 p.m.", "Tuesday, 4 p.m.", "Saturday, 10 a.m.", "Thursday, 6 p.m."]),
      read("Who can teach beginners to play the guitar?", ["Rustam", "The chess teacher", "The art teacher", "The text doesn't say."]),
      read("Can experts go to the chess club?", ["Yes, all levels can go.", "No, only beginners.", "No, only children.", "The text doesn't say."]),
      read("How often is there a chess competition?", ["Every month", "Every week", "Every Tuesday", "Every year"]),
      read("What sports can you play in the sports club?", ["Volleyball and basketball", "Football and tennis", "Chess and tennis", "Swimming"]),
      read("What can't you wear in the sports club?", ["Jeans", "Sports clothes", "Trainers", "T-shirts"]),
      read("When is the art club?", ["Thursday, 6 p.m.", "Monday, 5 p.m.", "Saturday, 10 a.m.", "Tuesday, 4 p.m."]),
      read("What can you learn in the art club?", ["To draw and paint", "To sing and dance", "To play the guitar", "To play chess"]),
      read("Do you need a talent for the art club?", ["No, you only need to try.", "Yes, you do.", "Yes, a big talent.", "The text doesn't say."]),
      read("How much are the clubs for students?", ["They're free.", "$10 a month", "$5 a lesson", "The text doesn't say."]),
    ],
  },
  {
    title: "Yozgi lagerga ishga",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Laziz qayerda ishlamoqchi?", ["Bolalar yozgi lagerida", "Maktabda", "Mehmonxonada", "Sport zalida"]),
      hear("Laziz suza oladimi?", ["Ha, juda yaxshi", "Yo'q", "Biroz", "Aytilmagan"]),
      hear("Lazizning kasbi nima?", ["Suzish murabbiyi", "Haydovchi", "Musiqachi", "Ingliz tili o'qituvchisi"]),
      hear("U qaysi sport turlarini o'ynay oladi?", ["Futbol va voleybol", "Basketbol va tennis", "Futbol va basketbol", "Faqat voleybol"]),
      hear("Nega u basketbol o'ynay olmaydi?", ["Bo'yi uncha baland emas", "Vaqti yo'q", "Yoqtirmaydi", "Oyog'i og'riydi"]),
      hear("Gitarani qanday chala oladi?", ["Biroz", "Juda yaxshi", "Umuman chala olmaydi", "Ancha yaxshi"]),
      hear("Qo'shiqni qanday aytadi?", ["Ancha yaxshi", "Umuman ayta olmaydi", "Biroz", "Aytilmagan"]),
      hear("Laziz mashina hayday oladimi?", ["Yo'q", "Ha", "Biroz", "Aytilmagan"]),
      hear("U qaysi tillarda gapira oladi?", ["Ingliz va biroz rus tilida", "Faqat o'zbek tilida", "Ingliz va fransuz tilida", "Rus va nemis tilida"]),
      hear("Bolalar nimani yaxshi ko'radi?", ["Qo'shiqlarni", "Suzishni", "Basketbolni", "Gitarani"]),
    ],
  },
  {
    title: "Suhbatni davom ettiring",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("Can you swim?", ["Yes, I can. I swim every summer.", "Yes, I swim can.", "Yes, I cans.", "Yes, I do can."]),
      say("Can your brother drive?", ["No, he can't. He's only fifteen.", "No, he don't can.", "No, he can't drives.", "No, he isn't."]),
      say("Can you play a musical instrument?", ["Yes, I can play the piano a little.", "Yes, I can play piano a little.", "Yes, I play can the piano.", "Yes, I can to play."]),
      say("What can you do well?", ["I can cook very well.", "I can very well cook.", "I well can cook.", "I can cooking well."]),
      say("Can you dance?", ["Not at all! But I can sing.", "Not a little!", "At all, yes.", "Yes, I can't."]),
      say("Can you help me with my homework?", ["Sure! What's the problem?", "Sure, I can't.", "Yes, at all.", "No, I can help."]),
      say("Do you play chess?", ["Yes, but I'm only a beginner.", "Yes, I'm an expert beginner.", "Yes, I play a chess.", "Yes, I can chess."]),
      say("I can't skate.", ["Don't worry! You can learn.", "Yes, you can't.", "Me too can.", "At all!"]),
      say("What's your talent?", ["I can draw people's faces.", "My talent is can.", "I'm talent.", "Yes, I have."]),
      say("Can they come to the competition?", ["Yes, they can. They want to win!", "Yes, they cans.", "Yes, they can to come.", "Yes, they do."]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting. can — qisqa [kən], can't — cho'zib [kaant].",
    questions: phrases([
      "I can swim.",
      "I can't drive.",
      "Can you play the guitar?",
      "Yes, I can.",
      "No, I can't.",
      "She can speak three languages.",
      "I can't sing at all.",
      "I'm a beginner.",
      "competition",
      "climb",
    ]),
  },
];
