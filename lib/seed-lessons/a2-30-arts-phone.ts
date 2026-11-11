/**
 * A2, 30-dars — «Bollivud va telefon suhbati». Hind kino sanoati, telefon
 * orqali gaplashish, Verona kolizeyi.
 * Grammatika: present perfect takrori (has recorded, have performed) va
 * telefon iboralari (Could I speak to…? Can you tell her to call me back?).
 * Navigate A2, 12.3–12.4 asosida: tinglash mashqlarida kitob treklari
 * (yopiq ombordan), savollar va matnlar o'zimizniki. Mashqlar inglizcha.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  gaps,
  hearing,
  hearingTwo,
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

const track = (n: string) => `media:navigate-a2/audio/${n}.mp3`;

export const A2_30_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🎬", "Bollywood", "ˈbɒliwʊd|boliwud", "ot", "Bollivud (Hindiston kino sanoati)", "The Indian film industry in Mumbai.", "Bollywood makes more films than Hollywood.", "Bollivud Gollivuddan ko'proq film suratga oladi."),
      w("🎤", "playback singer", "ˈpleɪbæk ˌsɪŋə|pleybek singa", "ibora", "Kadr ortidagi qo'shiqchi", "A singer who records songs that actors use in films.", "She's a playback singer, so the actors don't really sing.", "U kadr ortidagi qo'shiqchi, shuning uchun aktyorlar aslida kuylamaydi."),
      w("💿", "album", "ˈælbəm|elbam", "ot", "Albom", "A collection of songs on a CD or online.", "Her new album is excellent.", "Uning yangi albomi a'lo."),
      w("⏺️", "record", "rɪˈkɔːd|rikood", "fe'l", "Yozib olmoq (ovoz, qo'shiq)", "Put songs or sounds on a CD or computer.", "She's going to record a new song.", "U yangi qo'shiq yozib oladi."),
      w("🏭", "film industry", "ˈfɪlm ˌɪndəstri|film indastri", "ibora", "Kino sanoati", "All the companies and people that make films.", "India has an enormous film industry.", "Hindistonning ulkan kino sanoati bor."),
      w("🎞️", "produce", "prəˈdjuːs|pradyuus", "fe'l", "Ishlab chiqarmoq, suratga olmoq", "Make films, music or things to sell.", "Bollywood can produce over a thousand films a year.", "Bollivud yiliga mingdan ortiq film suratga olishi mumkin."),
      w("🗣️", "voice", "vɔɪs|voys", "ot", "Ovoz", "The sound you make when you speak or sing.", "She has a beautiful voice.", "Uning ovozi chiroyli."),
      w("🇮🇳", "independence", "ˌɪndɪˈpendəns|indipendans", "ot", "Mustaqillik", "When a country is free and has its own government.", "India celebrated fifty years of independence in 1997.", "Hindiston 1997-yilda mustaqillikning 50 yilligini nishonladi."),
      w("🎭", "perform", "pəˈfɔːm|pafoom", "fe'l", "Ijro etmoq, chiqish qilmoq", "Sing, dance or act in front of people.", "Many famous singers perform there every summer.", "Har yozda u yerda ko'plab mashhur qo'shiqchilar chiqish qiladi."),
      w("🌏", "worldwide", "ˌwɜːldˈwaɪd|wyorldwayd", "sifat, ravish", "Butun dunyo bo'ylab", "In all parts of the world.", "Her songs are famous worldwide.", "Uning qo'shiqlari butun dunyoda mashhur."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("📞", "call back", "ˌkɔːl ˈbæk|kool bek", "ibora", "Qayta qo'ng'iroq qilmoq", "Phone someone again, or phone someone who phoned you.", "Can you tell her to call back later?", "Unga keyinroq qayta qo'ng'iroq qilishini aytib qo'ya olasizmi?"),
      w("⏸️", "hang on", "ˌhæŋ ˈɒn|heng on", "ibora", "Biroz kuting", "Wait a short time (informal).", "Hang on a minute. I'll just get her.", "Bir daqiqa kuting. Hozir uni chaqiraman."),
      w("📩", "leave a message", "ˌliːv ə ˈmesɪdʒ|liiv a mesij", "ibora", "Xabar qoldirmoq", "Give information for someone who isn't there.", "Would you like to leave a message?", "Xabar qoldirishni xohlaysizmi?"),
      w("🎫", "ticket office", "ˈtɪkɪt ˌɒfɪs|tikit ofis", "ibora", "Chipta kassasi", "The place where you buy tickets.", "Could I speak to the ticket office manager?", "Chipta kassasi menejeri bilan gaplashsam bo'ladimi?"),
      w("🚫", "sold out", "ˌsəʊld ˈaʊt|sould aut", "ibora", "Hammasi sotilgan", "There are no more tickets.", "Their website says the show is sold out.", "Saytlarida shou chiptalari sotilib bo'lgani yozilgan."),
      w("↩️", "returned ticket", "rɪˌtɜːnd ˈtɪkɪt|ritornd tikit", "ibora", "Qaytarilgan chipta", "A ticket that someone gave back because they can't go.", "Is there a returned ticket for tonight?", "Bugun kechqurun uchun qaytarilgan chipta bormi?"),
      w("🙋", "speak to", "ˈspiːk tə|spiik ta", "ibora", "…bilan gaplashmoq", "Talk with someone (often on the phone).", "Could I speak to Ms Martinez, please?", "Martines xonim bilan gaplashsam bo'ladimi?"),
      w("🏢", "out of the office", "ˌaʊt əv ði ˈɒfɪs|aut av zi ofis", "ibora", "Ofisda emas", "Not at work at the moment.", "I'm afraid she's out of the office at the moment.", "Afsuski, u hozir ofisda emas."),
      w("🗒️", "take a message", "ˌteɪk ə ˈmesɪdʒ|teyk a mesij", "ibora", "Xabarni yozib olmoq", "Write down information for someone who isn't there.", "He isn't here. Can I take a message?", "U bu yerda emas. Xabaringizni yozib olaymi?"),
      w("☎️", "extension", "ɪkˈstenʃn|ikstenshn", "ot", "Ichki raqam", "One of the phone numbers inside a big office.", "Please call extension 245.", "Iltimos, 245 ichki raqamiga qo'ng'iroq qiling."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🏟️", "coliseum", "ˌkɒləˈsiːəm|kolasiiam", "ot", "Kolizey", "A very big old round building for shows and games.", "The Verona coliseum is almost two thousand years old.", "Verona kolizeyi qariyb ikki ming yillik."),
      w("🎼", "opera festival", "ˈɒprə ˌfestɪvl|opra festivl", "ibora", "Opera festivali", "An event with many operas.", "Verona is famous for its opera festival.", "Verona o'zining opera festivali bilan mashhur."),
      w("🌋", "earthquake", "ˈɜːθkweɪk|yorskweyk", "ot", "Zilzila", "When the ground shakes very strongly.", "In 1117 there was a big earthquake in Verona.", "1117-yilda Veronada kuchli zilzila bo'lgan."),
      w("⚔️", "gladiator", "ˈɡlædieɪtə|gledieyta", "ot", "Gladiator", "A fighter in ancient Rome.", "People came from far away to see the gladiator fights.", "Odamlar gladiatorlar jangini ko'rish uchun uzoqdan kelishardi."),
      w("🏛️", "arena", "əˈriːnə|ariina", "ot", "Arena", "A big round place with seats for sports or concerts.", "The arena has seats for thousands of people.", "Arenada minglab odam uchun o'rindiq bor."),
      w("🎡", "entertainment", "ˌentəˈteɪnmənt|entateynmant", "ot", "Ko'ngilochar tadbirlar", "Things like films, music and shows that people enjoy.", "It has been a place for many types of entertainment.", "U ko'plab ko'ngilochar tadbirlar maskani bo'lgan."),
      w("🧱", "rebuild", "ˌriːˈbɪld|riibild", "fe'l", "Qayta qurmoq", "Build something again after it was damaged.", "They decided to rebuild the old theatre.", "Ular eski teatrni qayta qurishga qaror qilishdi."),
      w("🔨", "repair", "rɪˈpeə|ripea", "fe'l", "Ta'mirlamoq", "Fix something that is broken or old.", "The Venetians decided to repair the building.", "Venetsiyaliklar binoni ta'mirlashga qaror qilishdi."),
      w("🤹", "performer", "pəˈfɔːmə|pafooma", "ot", "Ijrochi", "A person who sings, dances or acts for an audience.", "The performer waved to the audience.", "Ijrochi tomoshabinlarga qo'l silkitdi."),
      w("🩰", "ballet", "ˈbæleɪ|beley", "ot", "Balet", "A kind of dance that tells a story with music.", "Famous ballet dancers have performed there.", "U yerda mashhur balet raqqoslari chiqish qilgan."),
    ],
  },
];

const TEXT = `THE BUKHARA SUMMER FESTIVAL
Every year in August, the old city of Bukhara has a big summer festival. It started in 1997, and since then thousands of people have come from all over the world to enjoy it.
The festival happens in the open air, next to the old walls. There's music, dance and traditional clothes. Many famous Uzbek singers have performed there, and dancers from India, Turkey and Korea have visited too.
Tickets are cheap, but they often sell out quickly. If the website says «sold out», don't worry — you can phone the ticket office and ask about returned tickets.
In 2019, a famous playback singer from Bollywood came to the festival. Thousands of people watched her live. She said: «I've sung in many countries, but I've never seen a city like this!»`;
const tf = trueFalse(TEXT);

export const A2_30_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("Could I speak to the ticket office manager, please?", ["Could I speak to the ticket office manager, please?", "Can I speak to the ticket office manager, please?", "Could I speak to the office manager, please?", "Could you speak to the ticket office manager, please?"]),
      listen("She's not here at the moment.", ["She's not here at the moment.", "He's not here at the moment.", "She's not here for the moment.", "She wasn't here at the moment."]),
      listen("Can you tell her to call me back, please?", ["Can you tell her to call me back, please?", "Can you ask her to call me back, please?", "Can you tell him to call me back, please?", "Can you tell her to call back, please?"]),
      listen("Could I have your number, please?", ["Could I have your number, please?", "Could I have your name, please?", "Can I have your number, please?", "Could you have my number, please?"]),
      listen("Hang on a minute. I'll just get her.", ["Hang on a minute. I'll just get her.", "Hang on a minute. I'll just get him.", "Hang on a second. I'll just get her.", "Hold on a minute. I'll just get her."]),
      listen("Would you like to leave a message?", ["Would you like to leave a message?", "Would you like to take a message?", "Do you want to leave a message?", "Would you like to send a message?"]),
      listen("independence", ["independence", "independent", "intelligence", "difference"]),
      listen("earthquake", ["earthquake", "earthquakes", "headache", "earth"]),
      listen("ballet", ["ballet", "ballad", "bullet", "palette"]),
      listen("entertainment", ["entertainment", "entertaining", "environment", "appointment"]),
    ],
  },
  {
    title: "Bollywood",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to the start of a radio programme about Bollywood. Answer the questions.",
    questions: [
      hearing(track("12.14"))("What is the guest going to talk about?", ["The Indian film industry", "Hollywood", "Indian food", "Music festivals"]),
      hearing(track("12.14"))("Is Bollywood bigger than Hollywood these days?", ["Yes, it is.", "No, it isn't.", "They're the same.", "He doesn't know."]),
      hearing(track("12.14"))("How many films did Bollywood produce in 2009?", ["Over 1,200", "About 500", "About 200", "Over 2,000"]),
      hearing(track("12.14"))("How many films did Hollywood make in 2009?", ["About 500", "Over 1,200", "About 50", "About 5,000"]),
      hearing(track("12.14"))("Where are Bollywood films popular?", ["All over the world", "Only in India", "Only in Asia", "Only in the USA"]),
    ],
  },
  {
    title: "A playback singer",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to the rest of the programme. Answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("12.15"))("What is Hema Sardesai?", ["A playback singer", "An actress", "A film director", "A dancer"]),
      hearing(track("12.15"))("What does a playback singer do?", ["Records the songs that actors use in films", "Plays music in the cinema", "Sings in the theatre", "Teaches actors to sing"]),
      hearing(track("12.15"))("For how many Bollywood films has she recorded songs?", ["Over sixty", "Over sixteen", "About six", "Over six hundred"]),
      hearingTwo(track("12.15"))("Which TWO things has she done?", ["She's had a few successful albums.", "She's visited a lot of different countries."], ["She's acted in many films.", "She's never been in shows."]),
      hearing(track("12.15"))("What happened when India celebrated fifty years of independence?", ["She sang her own song.", "She made a film.", "She stopped singing.", "She moved abroad."]),
      hearing(track("12.15"))("How many people watched her live?", ["Three million", "Three thousand", "Thirty million", "Three hundred"]),
    ],
  },
  {
    title: "On the phone",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to two phone calls about tickets for a comedy club. Answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("12.16"))("Who does Marcus want to speak to?", ["Caitlin", "Francis", "The ticket office manager", "His mother"]),
      hearing(track("12.16"))("Where are they going tonight?", ["To a comedy club", "To the cinema", "To a concert", "To the opera"]),
      hearing(track("12.16"))("Why hasn't Caitlin booked tickets?", ["The website said they're sold out.", "She forgot.", "They're too expensive.", "She's busy tonight."]),
      hearing(track("12.16"))("What is Marcus's idea?", ["Call and ask about returned tickets", "Go to a different club", "Buy tickets online tomorrow", "Stay at home"]),
      hearing(track("12.16"))("Who does Caitlin ask to speak to at the club?", ["The ticket office manager", "Marcus", "A comedian", "Francis"]),
      hearingTwo(track("12.16"))("Which TWO things happen at the end?", ["The manager isn't available.", "Caitlin gives her number."], ["Caitlin buys two tickets.", "The manager calls back immediately."]),
    ],
  },
  {
    title: "Phone language",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the correct answer.",
    questions: [
      say("Hello. Could I ___ to Ms Martinez, please?", ["speak", "talk", "say", "tell"]),
      say("I'm afraid she's ___ of the office at the moment.", ["out", "off", "away", "outside"]),
      say("Would you like to ___ a message?", ["leave", "take", "make", "do"]),
      say("He isn't here. Can I ___ a message?", ["take", "leave", "do", "give"]),
      say("Can you tell her to call me ___, please?", ["back", "again", "later", "up"]),
      say("___ on a minute. I'll just get her.", ["Hang", "Hold up", "Stay", "Wait on"]),
      say("Could I ___ your number, please?", ["have", "take", "get to", "know"]),
      say("I'm afraid he's not ___ at the moment.", ["available", "possible", "free time", "able"]),
      say("No, that's fine. I'll call ___ later.", ["back", "again back", "up back", "to"]),
      say("Hi Francis, it's Marcus. ___ Caitlin there?", ["Is", "Are", "Has", "Does"]),
    ],
  },
  {
    title: "Phone calls",
    skill: "Listening",
    kind: "listengap",
    instructions: "Listen to eight phone phrases. Choose the correct word for each one.",
    questions: [
      gaps(track("12.17"), [
        ["Hi Francis, it's Marcus. Is Caitlin ___?", "there", "here", "home"],
        ["Hello. Could I speak to the ticket office ___, please?", "manager", "assistant", "director"],
        ["She's not here at the ___.", "moment", "minute", "office"],
        ["I'm afraid he's not ___ at the moment.", "available", "free", "here"],
        ["Can you tell her to call me ___, please?", "back", "later", "again"],
        ["Could you ask him to ___ me back, please?", "call", "phone", "ring"],
        ["Could I have your ___, please?", "number", "name", "address"],
        ["Hang on a ___. I'll just get her.", "minute", "moment", "second"],
      ]),
    ],
  },
  {
    title: "Verona coliseum",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to a text about the coliseum in Verona. Answer the questions.",
    questions: [
      hearing(track("12.19"))("What is Verona coliseum famous for these days?", ["Its opera festival", "Its football games", "Its film festival", "Its museum"]),
      hearing(track("12.19"))("Who built the coliseum?", ["The Romans", "The Venetians", "The Greeks", "The Italians in 1117"]),
      hearing(track("12.19"))("When did they build it?", ["Almost two thousand years ago", "In 1117", "Two hundred years ago", "Centuries later"]),
      hearing(track("12.19"))("What were the most famous games?", ["Fights between gladiators", "Horse races", "Football games", "Concerts"]),
      hearing(track("12.19"))("What happened in 1117?", ["There was a big earthquake.", "There was a big fire.", "The Venetians repaired it.", "The first opera festival started."]),
      hearing(track("12.19"))("What did the Venetians do?", ["They repaired it and used it for concerts.", "They built a new coliseum.", "They closed it.", "They used it for sport."]),
    ],
  },
  {
    title: "The Bukhara summer festival",
    skill: "Reading",
    kind: "truefalse",
    instructions: "Read the text. Are the sentences true or false?",
    questions: [
      tf("The festival is in August.", true),
      tf("It started in 2019.", false, "It started in 1997."),
      tf("People have come from all over the world.", true),
      tf("The festival happens inside a big concert hall.", false, "It's in the open air, next to the old walls."),
      tf("Dancers from India have visited the festival.", true),
      tf("Tickets are very expensive.", false, "Tickets are cheap."),
      tf("Tickets often sell out quickly.", true),
      tf("You can phone the ticket office about returned tickets.", true),
      tf("A playback singer from Bollywood came in 2019.", true),
      tf("The singer has never sung abroad.", false, "«I've sung in many countries.»"),
    ],
  },
  {
    title: "Complete the phone call",
    skill: "Grammar",
    kind: "fill",
    instructions: "Write the missing word.",
    questions: written([
      ["Could I ___ to Ms Martinez, please?", "speak"],
      ["I'm afraid she's out of the ___ at the moment.", "office"],
      ["Would you like to ___ a message?", "leave"],
      ["Can you ask him to call me ___, please?", "back"],
      ["___ on a minute. I'll just get her.", "Hang"],
      ["She ___ recorded songs for over sixty films. (have)", "has|'s"],
      ["Thousands of people ___ watched her. (have)", "have|'ve"],
      ["Many famous singers have ___ there. (perform)", "performed"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("Could I *talk Ms Martinez, please?", "Could I speak to…? (talk needs «to» too)."),
      mistake("I'm afraid she's out *from the office.", "out of the office."),
      mistake("Would you like to *make a message?", "leave a message."),
      mistake("Can you tell her to call me *again, please?", "call me back."),
      mistake("Could I *has your number, please?", "Could I + base verb: have."),
      mistake("She has *record songs for sixty films.", "Past participle: recorded."),
      mistake("The show is sold *off tonight.", "sold out."),
      mistake("Many famous singers have *performing there.", "Past participle: performed."),
      mistake("In 1117 there *has been a big earthquake.", "In 1117 = finished time → there was."),
      mistake("India celebrated fifty years of *independent.", "Noun: independence."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "Could I speak to the ticket office manager, please?",
      "She's not here at the moment.",
      "Can you tell her to call me back, please?",
      "Would you like to leave a message?",
      "Hang on a minute. I'll just get her.",
      "No, that's fine. I'll call back later.",
      "She has recorded songs for over sixty films.",
      "Bollywood films have become popular all over the world.",
      "Many famous opera singers have performed there.",
      "The Romans built the coliseum almost two thousand years ago.",
    ]),
  },
  {
    title: "Find the pairs",
    skill: "Matching",
    kind: "match",
    instructions: "Match the words.",
    questions: pairs([
      ["leave|a message", "call|back", "hang|on", "speak|to"],
      ["Could I speak to Ana?|I'm afraid she's not here.", "Would you like to leave a message?|No, that's fine.", "Could I have your number?|Yes, it's 0 7 5…", "Is Caitlin there?|Hang on a minute."],
      ["playback singer|records songs for films", "sold out|no more tickets", "earthquake|the ground shakes", "gladiator|a fighter in ancient Rome"],
      ["record|recorded", "perform|performed", "become|become", "sing|sung"],
      ["film|industry", "opera|festival", "ticket|office", "ballet|dancers"],
    ]),
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself. Be polite on the phone!",
    questions: phrases([
      "Could I speak to the ticket office manager, please?",
      "I'm afraid she's out of the office at the moment.",
      "Would you like to leave a message?",
      "Can you tell her to call me back, please?",
      "Hang on a minute. I'll just get her.",
      "No, that's fine. I'll call back later.",
      "Bollywood",
      "independence",
      "earthquake",
      "entertainment",
    ]),
  },
];
