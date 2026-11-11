/**
 * A1, 22-dars — «Bolaligimizda: was / were». Navigate A1, 8.1 «When we were
 * seven» asosida: «Seven Up!» filmi, Neil va Suzyning bolaligi va hozirgi
 * hayoti, yillarni aytish (1964 — nineteen sixty-four), oylar va tartib
 * sonlar, sanalar (the first of January). Grammatika: was / were —
 * darak, inkor, so'roq, qisqa javoblar; urg'u (WASN'T, Yes, I WAS).
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

export const A1_22_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("⬅️", "was", "wɒz|uoz", "fe'l", "Edi (I, he, she, it bilan)", "The past of am and is.", "Neil was a clever child.", "Nil aqlli bola edi."),
      w("⬅️", "were", "wɜː|uyor", "fe'l", "Edi (you, we, they bilan)", "The past of are.", "His parents weren't rich, but they were happy.", "Ota-onasi boy emas edi, lekin baxtli edi."),
      w("👶", "born", "bɔːn|boon", "sifat", "Tug'ilgan (was born)", "Start your life.", "I was born in 1980.", "Men 1980-yilda tug'ilganman."),
      w("💭", "dream", "driːm|driim", "ot", "Orzu", "Something you really want.", "His dream was to be an astronaut.", "Uning orzusi kosmonavt bo'lish edi."),
      w("🧑‍🚀", "astronaut", "ˈæstrənɔːt|estranoot", "ot", "Kosmonavt, astronavt", "A person who travels into space.", "I wanted to be an astronaut.", "Men kosmonavt bo'lishni xohlardim."),
      w("🏛️", "politician", "ˌpɒləˈtɪʃn|polatishn", "ot", "Siyosatchi", "A person whose job is in government.", "Now Neil is a politician.", "Hozir Nil siyosatchi."),
      w("🎭", "actor", "ˈæktə|ekta", "ot", "Aktyor", "A person who acts in films or plays.", "My uncle is an actor.", "Amakim aktyor."),
      w("😓", "difficult", "ˈdɪfɪkəlt|difikalt", "sifat", "Qiyin", "Not easy.", "At twenty-eight his life was difficult.", "Yigirma sakkiz yoshida uning hayoti qiyin edi."),
      w("✅", "real", "rɪəl|rial", "sifat", "Haqiqiy", "Not from a story; true.", "They were real children, not actors.", "Ular aktyor emas, haqiqiy bolalar edi."),
      w("👫", "together", "təˈɡeðə|tageza", "ravish", "Birga", "With each other.", "Her parents weren't happy together.", "Ota-onasi birga baxtli emas edi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("❄️", "January", "ˈdʒænjuəri|jenyuari", "ot", "Yanvar", "The first month of the year.", "New Year's Day is on the first of January.", "Yangi yil 1-yanvarda."),
      w("💘", "February", "ˈfebruəri|februari", "ot", "Fevral", "The second month.", "Valentine's Day is on the fourteenth of February.", "Valentin kuni — 14-fevral."),
      w("💐", "March", "mɑːtʃ|maach", "ot", "Mart", "The third month.", "Women's Day is on the eighth of March.", "Xotin-qizlar kuni — 8-mart."),
      w("🌧️", "April", "ˈeɪprəl|eypral", "ot", "Aprel", "The fourth month.", "My birthday is in April.", "Tug'ilgan kunim aprelda."),
      w("🌷", "May", "meɪ|mey", "ot", "May", "The fifth month.", "The exam is on the thirtieth of May.", "Imtihon 30-mayda."),
      w("☀️", "June", "dʒuːn|juun", "ot", "Iyun", "The sixth month.", "School finishes in June.", "Maktab iyunda tugaydi."),
      w("🌙", "July", "dʒuˈlaɪ|julay", "ot", "Iyul", "The seventh month.", "The first moon landing was on the twentieth of July 1969.", "Oyga birinchi qo'nish 1969-yil 20-iyulda bo'lgan."),
      w("🏖️", "August", "ˈɔːɡəst|oogast", "ot", "Avgust", "The eighth month.", "We go to the mountains in August.", "Avgustda tog'larga boramiz."),
      w("🇺🇿", "September", "sepˈtembə|septemba", "ot", "Sentyabr", "The ninth month.", "Independence Day is on the first of September.", "Mustaqillik kuni — 1-sentyabr."),
      w("🍂", "October", "ɒkˈtəʊbə|oktouba", "ot", "Oktyabr", "The tenth month.", "Teachers' Day is on the first of October.", "O'qituvchilar kuni — 1-oktyabr."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🍁", "November", "nəʊˈvembə|nouvemba", "ot", "Noyabr", "The eleventh month.", "The First World War ended on the eleventh of November 1918.", "Birinchi jahon urushi 1918-yil 11-noyabrda tugagan."),
      w("🎄", "December", "dɪˈsembə|disemba", "ot", "Dekabr", "The last month of the year.", "Nelson Mandela died on the fifth of December 2013.", "Nelson Mandela 2013-yil 5-dekabrda vafot etgan."),
      w("🥇", "first", "fɜːst|fyorst", "son", "Birinchi (1st)", "Number one in order.", "My birthday is on the first of May.", "Tug'ilgan kunim 1-mayda."),
      w("🥈", "second", "ˈsekənd|sekand", "son", "Ikkinchi (2nd)", "Number two in order.", "In the second film, the children were fourteen.", "Ikkinchi filmda bolalar o'n to'rt yoshda edi."),
      w("🥉", "third", "θɜːd|syord", "son", "Uchinchi (3rd)", "Number three in order.", "Today is the third of March.", "Bugun 3-mart."),
      w("📅", "date", "deɪt|deyt", "ot", "Sana", "The day, month and year.", "What's the date today?", "Bugun nechanchi sana?"),
      w("🎂", "birthday", "ˈbɜːθdeɪ|byorsdey", "ot", "Tug'ilgan kun", "The day of the year when you were born.", "When is your birthday?", "Tug'ilgan kuningiz qachon?"),
      w("🎉", "celebration", "ˌselɪˈbreɪʃn|selibreyshn", "ot", "Bayram, nishonlash", "A special event for a happy day.", "Navruz is a big celebration in Uzbekistan.", "Navro'z — O'zbekistonda katta bayram."),
      w("🌕", "moon", "muːn|muun", "ot", "Oy (osmondagi)", "The big light in the sky at night.", "The first moon landing was in 1969.", "Oyga birinchi qo'nish 1969-yilda bo'lgan."),
      w("⚔️", "war", "wɔː|uoo", "ot", "Urush", "Fighting between countries.", "The war ended in 1918.", "Urush 1918-yilda tugagan."),
    ],
  },
];

const SEVEN_UP = `SEVEN UP!
Seven Up! was a 1964 film about fourteen children. But it wasn't a Hollywood film and the children weren't actors. It was a TV film and the characters were real children from different places in England. They were all from different families — rich and poor. There was a new TV film about these people every seven years — in 1970, 1977, 1984, 1991, 1998, 2005 and 2012. In the first film, in 1964, the children were seven years old. In the 2012 film, the «children» were 56 years old. The films are important historical documents, but they tell amazing personal stories, too.`;
const read = reading(SEVEN_UP);

export const A1_22_EXERCISES: SeedExercise[] = [
  {
    title: "«Seven Up!» filmi",
    skill: "O'qish",
    kind: "reading",
    instructions: "Film haqidagi maqolani o'qing va savollarga javob bering.",
    questions: [
      read("What was Seven Up!?", ["A TV film about fourteen children", "A Hollywood film", "A book about seven children", "A TV show for children"]),
      read("When was the first film?", ["In 1964", "In 1970", "In 1977", "In 2012"]),
      read("Were the children actors?", ["No, they weren't.", "Yes, they were.", "Some of them were.", "The text doesn't say."]),
      read("Where were the children from?", ["Different places in England", "London only", "The USA", "Different countries"]),
      read("Were all the children from rich families?", ["No — rich and poor families.", "Yes, they were.", "No, they were all poor.", "The text doesn't say."]),
      read("How often was there a new film?", ["Every seven years", "Every year", "Every fourteen years", "Every five years"]),
      read("How old were the children in the first film?", ["Seven", "Fourteen", "Eight", "Fifty-six"]),
      read("How old were they in the 2012 film?", ["56", "49", "63", "21"]),
    ],
  },
  {
    title: "Nil va Suzi",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "«Seven Up!» bolalaridan ikkitasi — Nil va Suzi haqida tinglang. Ular hozir baxtlimi? Savollarga javob bering. Ba'zi savollarda IKKITA to'g'ri javob bor.",
    questions: [
      hearing(track("8.1"))("Who is from London?", ["Suzy", "Neil", "Both", "Neither"]),
      hearing(track("8.1"))("Who was a happy child?", ["Neil", "Suzy", "Both", "Neither"]),
      hearing(track("8.1"))("Who was at an expensive school?", ["Suzy", "Neil", "Both", "Neither"]),
      hearing(track("8.1"))("Who wanted to be an astronaut?", ["Neil", "Suzy", "Both", "Neither"]),
      hearing(track("8.1"))("Who wanted to be married with children?", ["Suzy", "Neil", "Both", "Neither"]),
      hearingTwo(track("8.1"))("Which TWO are true about Neil now?", ["He's a politician.", "He has a house in a beautiful part of England."], ["He lives on the streets.", "He's an astronaut."]),
      hearing(track("8.1"))("What does Suzy do now?", ["She helps people with their problems.", "She's an actress.", "She's a teacher.", "She makes films."]),
      hearing(track("8.1"))("Does Suzy like the Seven Up! films?", ["No, she doesn't.", "Yes, she loves them.", "Yes, a little.", "The speaker doesn't say."]),
    ],
  },
  {
    title: "Suzi haqida",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Suzi haqidagi to'rtta gapni tinglang va to'g'ri variantni tanlang.",
    questions: [
      gaps(track("8.4"), [
        ["1. Suzy was at ___ school.", "an expensive", "a cheap", "a big"],
        ["2. She wasn't ___ as a child.", "happy", "rich", "clever"],
        ["3. Suzy's ___ were rich.", "parents", "grandparents", "friends"],
        ["4. Suzy's parents weren't ___.", "happy", "married", "rich"],
      ]),
    ],
  },
  {
    title: "was yoki were?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "I / he / she / it — was (wasn't); you / we / they — were (weren't). So'roq: Was he…? Were they…?",
    questions: [
      say("Neil ___ a clever child.", ["was", "were", "is", "are"]),
      say("His parents ___ rich.", ["weren't", "wasn't", "aren't", "didn't"]),
      say("___ you born in 1964?", ["Were", "Was", "Are", "Did"]),
      say("No, I ___ born in 1964! I was born in 1980.", ["wasn't", "weren't", "didn't", "isn't"]),
      say("Were you a happy child? — Yes, I ___.", ["was", "were", "did", "am"]),
      say("There ___ six children in our family.", ["were", "was", "are", "be"]),
      say("___ your grandfather a doctor, too?", ["Was", "Were", "Did", "Is"]),
      say("Was your grandfather a doctor? — No, he ___.", ["wasn't", "weren't", "didn't", "isn't"]),
      say("Where ___ you born?", ["were", "was", "did", "are"]),
      say("The children ___ actors.", ["weren't", "wasn't", "didn't", "isn't"]),
    ],
  },
  {
    title: "Qayerda tug'ilgansiz?",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Suhbatni tinglang va to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("8.6"), [
        ["«Where ___ you born?»", "were", "was", "are"],
        ["«In Malmö, ___.»", "Sweden", "Norway", "Denmark"],
        ["«No, I wasn't born in 1964! I was born in ___.»", "1980", "1968", "1990"],
        ["«Were you a happy child?» — «Yes, I ___.»", "was", "were", "did"],
        ["«There were ___ children in our family.»", "six", "two", "four"],
        ["«My parents weren't ___, but we were very happy.»", "rich", "happy", "teachers"],
        ["«Was your grandfather a doctor, too?» — «No, he ___.»", "wasn't", "was", "weren't"],
        ["«He was a ___.»", "shop assistant", "teacher", "farmer"],
      ]),
    ],
  },
  {
    title: "Yillarni ayting",
    skill: "Tinglash",
    kind: "listenmatch",
    instructions: "Inglizchada yil ikki qismga bo'lib aytiladi: 1964 — nineteen sixty-four; 2008 — two thousand and eight; 2016 — twenty sixteen. Beshta yilni tinglang va raqam bilan yozing.",
    questions: [
      slots(track("8.3"), [
        ["1.", "1978"],
        ["2.", "1981"],
        ["3.", "1996"],
        ["4.", "2003"],
        ["5.", "2019"],
      ]),
    ],
  },
  {
    title: "Tartib sonlar",
    skill: "Lug'at",
    kind: "match",
    instructions: "Sanalarda tartib sonlar ishlatiladi: 1st — first, 2nd — second. Juftlarni ulang.",
    questions: pairs([
      ["1st|first", "2nd|second", "3rd|third", "4th|fourth"],
      ["6th|sixth", "7th|seventh", "9th|ninth", "10th|tenth"],
      ["12th|twelfth", "20th|twentieth", "23rd|twenty-third", "31st|thirty-first"],
      ["January|yanvar", "March|mart", "July|iyul", "October|oktyabr"],
      ["1st January|New Year's Day", "14th February|Valentine's Day", "8th March|Women's Day", "20th July 1969|the first moon landing"],
    ]),
  },
  {
    title: "Muhim sanalar",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Bayramlar va voqealar qaysi sanada? Tinglang va to'g'ri sanani tanlang. Sana shunday aytiladi: the first of January.",
    questions: [
      gaps(track("8.9"), [
        ["1. The first moon landing was on ___ 1969.", "20th July", "2nd July", "20th June"],
        ["2. Women's Day is on ___.", "8th March", "18th March", "8th May"],
        ["3. New Year's Day is on ___.", "1st January", "1st June", "31st December"],
        ["4. Nelson Mandela died on ___ 2013.", "5th December", "15th December", "5th November"],
        ["5. Valentine's Day is on ___.", "14th February", "4th February", "14th March"],
        ["6. The end of the First World War was on ___ 1918.", "11th November", "1st November", "11th December"],
      ]),
    ],
  },
  {
    title: "Sanani yozing",
    skill: "Yozish",
    kind: "type",
    instructions: "Sanani so'z bilan yozing. Misol: 1st January → the first of January.",
    questions: written([
      ["1st January", "the first of January|The first of January"],
      ["8th March", "the eighth of March|The eighth of March"],
      ["14th February", "the fourteenth of February|The fourteenth of February"],
      ["21st March (Navruz)", "the twenty-first of March|The twenty-first of March"],
      ["1st September", "the first of September|The first of September"],
      ["3rd May", "the third of May|The third of May"],
      ["2nd June", "the second of June|The second of June"],
      ["30th October", "the thirtieth of October|The thirtieth of October"],
      ["12th April", "the twelfth of April|The twelfth of April"],
      ["31st December", "the thirty-first of December|The thirty-first of December"],
    ]),
  },
  {
    title: "Gap yozing",
    skill: "Grammatika",
    kind: "type",
    instructions: "was / were bilan gap yozing. (+) darak, (−) inkor, (?) so'roq.",
    questions: written([
      ["I / a happy child (+)", "I was a happy child."],
      ["my parents / teachers (−)", "My parents weren't teachers.|My parents were not teachers."],
      ["you / happy (?)", "Were you happy?"],
      ["he / a doctor (?)", "Was he a doctor?"],
      ["Was he a doctor? (✗)", "No, he wasn't.|No, he was not."],
      ["Were you happy? (✓)", "Yes, I was."],
      ["she / at an expensive school (+)", "She was at an expensive school."],
      ["we / rich (−)", "We weren't rich.|We were not rich."],
      ["where / you / born (?)", "Where were you born?"],
      ["I / born / in 2008 (+)", "I was born in 2008."],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("His parents *was rich.", "they → were."),
      mistake("I *were a happy child.", "I → was."),
      mistake("*Was you born in 1980?", "you → Were you…?"),
      mistake("I *born in Tashkent.", "Tug'ilgan — I was born."),
      mistake("Were you happy? — Yes, I *were.", "I → was."),
      mistake("She *weren't happy as a child.", "she → wasn't."),
      mistake("There *was six children in our family.", "Ko'plik — There were."),
      mistake("My birthday is on the *one of May.", "Tartib son — the first of May."),
      mistake("I was born *on 1990.", "Yil bilan — in 1990."),
      mistake("Women's Day is *in 8th March.", "Sana bilan — on 8th March."),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "I was a happy child.",
      "My parents weren't teachers.",
      "Were you happy?",
      "Yes, I was.",
      "Was he a doctor?",
      "No, he wasn't.",
      "Where were you born?",
      "His dream was to be an astronaut.",
      "New Year's Day is on the first of January.",
      "There were six children in our family.",
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting. Darak gapda was / were kuchsiz, inkor va qisqa javobda kuchli aytiladi.",
    questions: phrases([
      "I was a happy child.",
      "My parents weren't teachers.",
      "Were you happy? — Yes, I was.",
      "Was he a doctor? — No, he wasn't.",
      "nineteen sixty-four",
      "two thousand and five",
      "twenty twelve",
      "the first of January",
      "January, February, March, April",
      "When is your birthday?",
    ]),
  },
];
