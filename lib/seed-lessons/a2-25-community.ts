/**
 * A2, 25-dars — «Mahalla ruhi». Boshqalarga yordam berish, ko'ngillilik,
 * xayriya; Mandela kuni rejalari.
 * Grammatika: going to — reja va niyatlar (darak, inkor, so'roq va qisqa
 * javoblar); «verb + noun» iboralari (organize a party, plant flowers).
 * Navigate A2, 11.1 asosida: tinglash mashqlarida kitob treklari (yopiq
 * ombordan), savollar va matnlar o'zimizniki. Mashqlar inglizcha.
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
  reading,
  say,
  sentences,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-a2/audio/${n}.mp3`;

export const A2_25_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🎉", "organize a party", "ˌɔːɡənaɪz ə ˈpɑːti|oo-ganayz a paati", "ibora", "Ziyofat uyushtirmoq", "Plan and prepare a party.", "We're going to organize a party for Grandma.", "Buvim uchun ziyofat uyushtiramiz."),
      w("🎁", "give a present", "ˌɡɪv ə ˈpreznt|giv a preznt", "ibora", "Sovg'a bermoq", "Give someone a gift.", "I'm going to give a present to my teacher.", "O'qituvchimga sovg'a bermoqchiman."),
      w("🔧", "repair a bike", "rɪˌpeər ə ˈbaɪk|ripear a bayk", "ibora", "Velosiped tuzatmoq", "Make a broken bike work again.", "Can you help me repair a bike?", "Velosiped tuzatishga yordam bera olasanmi?"),
      w("🏥", "visit someone in hospital", "ˌvɪzɪt ˌsʌmwʌn ɪn ˈhɒspɪtl|vizit samwan in hospitl", "ibora", "Kasalxonadagi odamni ko'rgani bormoq", "Go to see someone who is ill in hospital.", "On Sunday I'm going to visit someone in hospital.", "Yakshanba kuni kasalxonadagi bir kishini ko'rgani boraman."),
      w("📚", "help with homework", "ˌhelp wɪð ˈhəʊmwɜːk|help wiz houmwyork", "ibora", "Uy vazifasiga yordam bermoq", "Help someone to do their school work.", "My brother is going to help with homework tonight.", "Akam bugun kechqurun uy vazifasiga yordam beradi."),
      w("🌷", "plant flowers", "ˌplɑːnt ˈflaʊəz|plaant flauaz", "ibora", "Gul ekmoq", "Put flowers in the ground to grow.", "Let's plant flowers in front of the school.", "Maktab oldiga gul ekaylik."),
      w("👶", "look after children", "ˌlʊk ˈɑːftə ˈtʃɪldrən|luk aafta childran", "ibora", "Bolalarga qaramoq", "Take care of children.", "Can you look after children for an evening?", "Bir kechqurun bolalarga qarab tura olasanmi?"),
      w("🚗", "teach someone to drive", "ˌtiːtʃ ˌsʌmwʌn tə ˈdraɪv|tiich samwan ta drayv", "ibora", "Kimgadir mashina haydashni o'rgatmoq", "Show someone how to drive a car.", "My dad is going to teach someone to drive this summer.", "Dadam bu yoz bir kishiga mashina haydashni o'rgatadi."),
      w("🗑️", "pick up rubbish", "ˌpɪk ʌp ˈrʌbɪʃ|pik ap rabish", "ibora", "Axlat yig'moq", "Collect rubbish from the ground.", "On Saturday we're going to pick up rubbish in the park.", "Shanba kuni parkda axlat yig'amiz."),
      w("🏘️", "local area", "ˌləʊkl ˈeəriə|loukl earia", "ibora", "Mahalla, yashash hududi", "The part of town where you live.", "There are lots of trees in my local area.", "Mahallamda daraxtlar ko'p."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🤝", "community", "kəˈmjuːnəti|kamyuunati", "ot", "Jamoa, mahalla", "All the people who live in one place.", "Our community has a big party every summer.", "Mahallamiz har yozda katta bayram qiladi."),
      w("🙋", "volunteer", "ˌvɒlənˈtɪə|volantia", "ot", "Ko'ngilli", "A person who works for free to help others.", "She's a volunteer at the animal hospital.", "U hayvonlar shifoxonasida ko'ngilli."),
      w("💝", "charity", "ˈtʃærəti|cherati", "ot", "Xayriya tashkiloti", "An organization that helps people in need.", "All the money goes to charity.", "Barcha pul xayriyaga ketadi."),
      w("🛏️", "homeless", "ˈhəʊmləs|houmlas", "sifat", "Uysiz", "Without a home.", "They give food to homeless people.", "Ular uysiz odamlarga ovqat beradi."),
      w("📄", "CV", "ˌsiː ˈviː|sii vii", "ot", "Rezyume (tarjimai hol)", "A document about your education and jobs.", "I'm going to help him write his CV.", "Unga rezyume yozishga yordam beraman."),
      w("🪙", "collect money", "kəˌlekt ˈmʌni|kalekt mani", "ibora", "Pul yig'moq", "Get money from many people for something.", "We're going to collect money for the hospital.", "Shifoxona uchun pul yig'amiz."),
      w("💡", "electricity", "ɪˌlekˈtrɪsəti|ilektrisati", "ot", "Elektr", "The power for lights and machines.", "Tomorrow we aren't going to use any electricity.", "Ertaga umuman elektr ishlatmaymiz."),
      w("📅", "event", "ɪˈvent|ivent", "ot", "Tadbir", "Something important that happens, like a party or a concert.", "The school event starts at six.", "Maktab tadbiri soat oltida boshlanadi."),
      w("💰", "raise money", "ˌreɪz ˈmʌni|reyz mani", "ibora", "Mablag' to'plamoq", "Collect money for a good reason.", "The children want to raise money for a new park.", "Bolalar yangi park uchun mablag' to'plamoqchi."),
      w("🎗️", "donate", "dəʊˈneɪt|douneyt", "fe'l", "Hadya qilmoq, ehson qilmoq", "Give money or things to help others.", "I'm going to donate my old clothes.", "Eski kiyimlarimni ehson qilaman."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🗓️", "spend the day", "ˌspend ðə ˈdeɪ|spend za dey", "ibora", "Kunni o'tkazmoq", "Use a whole day doing something.", "We're going to spend the day at the beach.", "Kunni dengiz bo'yida o'tkazamiz."),
      w("✨", "make a difference", "ˌmeɪk ə ˈdɪfrəns|meyk a difrans", "ibora", "O'zgarish yasamoq, foyda keltirmoq", "Do something that helps and changes things.", "Small actions can make a difference.", "Kichik ishlar ham o'zgarish yasashi mumkin."),
      w("🥪", "hand out", "ˌhænd ˈaʊt|hend aut", "ibora", "Tarqatmoq", "Give things to many people.", "We're going to hand out sandwiches in the city centre.", "Shahar markazida sendvich tarqatamiz."),
      w("💗", "kindness", "ˈkaɪndnəs|kayndnas", "ot", "Mehribonlik", "Being nice and helpful to others.", "Thank you for your kindness.", "Mehribonligingiz uchun rahmat."),
      w("🧍", "stranger", "ˈstreɪndʒə|streynja", "ot", "Notanish odam", "A person you don't know.", "A stranger helped me with my bags.", "Notanish odam sumkalarimga yordam berdi."),
      w("👍", "good deed", "ˌɡʊd ˈdiːd|gud diid", "ibora", "Savob ish, yaxshilik", "Something good you do for another person.", "Do one good deed every day.", "Har kuni bitta yaxshilik qiling."),
      w("😊", "cheer up", "ˌtʃɪər ˈʌp|chiar ap", "ibora", "Ko'nglini ko'tarmoq", "Make someone feel happier.", "We're going to cheer up my sad neighbour.", "Xafa qo'shnimizning ko'nglini ko'taramiz."),
      w("😔", "lonely", "ˈləʊnli|lounli", "sifat", "Yolg'iz (va zerikkan)", "Sad because you are alone.", "My grandfather feels lonely at the weekend.", "Bobom dam olish kunlari yolg'izlanadi."),
      w("👵", "elderly", "ˈeldəli|eldali", "sifat", "Keksa", "Old (a polite word).", "We visit elderly people every month.", "Har oy keksalarni ko'rgani boramiz."),
      w("🎪", "fundraiser", "ˈfʌndreɪzə|fandreyza", "ot", "Xayriya tadbiri", "An event to collect money for a good reason.", "The fundraiser raised $5,000.", "Xayriya tadbiri 5 000 dollar to'pladi."),
    ],
  },
];

const ARTICLE = `ONE DAY, MANY GOOD DEEDS
Next Saturday is «Kindness Day» in our town, and everyone in the community is going to do something for other people.
The students from the music school are going to give a free concert in the park. My neighbour Dilnoza is a nurse, so she's going to visit elderly people at home and check their health. My brother and his friends aren't going to play football this time — they're going to pick up rubbish in the local area and plant flowers near the bus station.
And me? I'm going to organize a cake sale at my office. We're going to sell cakes and coffee and give all the money to a children's charity. My boss isn't going to bake — he can't cook! — but he's going to buy the first cake.
Are you going to join us? Small actions can make a difference.`;
const read = reading(ARTICLE);

export const A2_25_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("I'm going to help my neighbour.", ["I'm going to help my neighbour.", "I'm going to help my neighbours.", "I'm going help my neighbour.", "I helped my neighbour."]),
      listen("We aren't going to use the car.", ["We aren't going to use the car.", "We are going to use the car.", "We weren't going to use the car.", "We aren't using the car."]),
      listen("Are you going to cycle to work?", ["Are you going to cycle to work?", "Are you going to walk to work?", "Do you cycle to work?", "Were you going to cycle to work?"]),
      listen("She's going to organize a party.", ["She's going to organize a party.", "She's going to organize the party.", "She organized a party.", "He's going to organize a party."]),
      listen("They're going to raise money.", ["They're going to raise money.", "They're going to raise many.", "They're going to save money.", "They raised money."]),
      listen("Is he going to look for work?", ["Is he going to look for work?", "Is he going to look at work?", "Is she going to look for work?", "Does he look for work?"]),
      listen("plant flowers", ["plant flowers", "plant flour", "plan flowers", "planned flowers"]),
      listen("volunteer", ["volunteer", "volunteers", "voluntary", "valley"]),
      listen("charity", ["charity", "cherry", "chatty", "charities"]),
      listen("homeless", ["homeless", "homework", "harmless", "holidays"]),
    ],
  },
  {
    title: "Helping others",
    skill: "Listening",
    kind: "listengap",
    instructions: "Listen to ten ways to help other people. Choose the correct verb for each one.",
    questions: [
      gaps(track("11.1"), [
        ["___ a party", "organize", "make", "do"],
        ["___ a present to someone", "give", "take", "send"],
        ["___ your friend's bike", "repair", "help", "plant"],
        ["___ someone in hospital", "visit", "look", "teach"],
        ["___ a cake for a colleague's birthday", "make", "do", "cook"],
        ["___ a classmate with their homework", "help", "teach", "give"],
        ["___ some flowers", "plant", "pick", "make"],
        ["___ a friend's children for the evening", "look after", "look for", "visit"],
        ["___ someone to drive", "teach", "help", "learn"],
        ["improve your local area by ___ rubbish", "picking up", "putting down", "taking out"],
      ]),
    ],
  },
  {
    title: "going to",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct answer.",
    questions: [
      say("I ___ going to visit my aunt.", ["'m", "is", "are", "be"]),
      say("She ___ going to cook tonight. (–)", ["isn't", "aren't", "doesn't", "not"]),
      say("___ you going to help us?", ["Are", "Do", "Is", "Will"]),
      say("We're going ___ a cake.", ["to make", "make", "making", "to making"]),
      say("Is he going to come? — Yes, he ___.", ["is", "does", "will", "going"]),
      say("Are they going to stay? — No, they ___.", ["aren't", "don't", "isn't", "won't"]),
      say("What ___ you going to do on Saturday?", ["are", "do", "is", "will"]),
      say("Look at those clouds! It's ___ rain.", ["going to", "go to", "going", "goes to"]),
      say("I'm not going ___ the car tomorrow.", ["to use", "use", "using", "to using"]),
      say("Where is she going ___?", ["to go", "go", "going", "to going"]),
    ],
  },
  {
    title: "Three plans",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Three people talk about their plans. Listen and answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("11.2"))("How is the first speaker going to go to work tomorrow?", ["On foot", "By car", "By bike", "By bus"]),
      hearing(track("11.2"))("How is Arturo going to go to work?", ["By bike", "On foot", "By car", "By train"]),
      hearing(track("11.2"))("What is the second speaker going to organize next Saturday?", ["A game of football for the kids", "A party for the neighbours", "A cake sale", "A concert"]),
      hearing(track("11.2"))("Where is the money from the tickets going to go?", ["To charity", "To the school", "To the players", "To a hospital"]),
      hearingTwo(track("11.2"))("Which TWO things are true about the third speaker's neighbour?", ["He's unemployed at the moment.", "He's a bit unhappy."], ["He's ill in hospital.", "He has got a new job."]),
      hearing(track("11.2"))("What are they going to improve?", ["His CV", "His English", "His garden", "His flat"]),
    ],
  },
  {
    title: "Mandela Day",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to an interview about plans for Mandela Day. Answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("11.3"))("What are people sending to the office?", ["Emails about their plans", "Money", "Photos of their families", "Food"]),
      hearingTwo(track("11.3"))("What are a lot of people going to make?", ["Soup", "Sandwiches"], ["Cakes", "Pizza"]),
      hearing(track("11.3"))("Who are they going to give the food to?", ["Homeless people", "Children", "Elderly people", "Hospital workers"]),
      hearing(track("11.3"))("What is one man not going to do for 24 hours?", ["Eat", "Sleep", "Talk", "Use his phone"]),
      hearing(track("11.3"))("Where are they going to post everything?", ["On their website", "In a newspaper", "On TV", "In a book"]),
      hearing(track("11.3"))("What is going to happen at the office?", ["A big party", "A football game", "A concert", "Nothing special"]),
    ],
  },
  {
    title: "Kindness Day",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the text and answer the questions.",
    questions: [
      read("When is Kindness Day?", ["Next Saturday", "Next Sunday", "Today", "Last Saturday"]),
      read("What are the music students going to do?", ["Give a free concert in the park", "Sell cakes", "Visit elderly people", "Plant flowers"]),
      read("What is Dilnoza's job?", ["She's a nurse.", "She's a teacher.", "She's a musician.", "She's a cook."]),
      read("Who is Dilnoza going to visit?", ["Elderly people", "Children", "Her family", "Musicians"]),
      read("What aren't the brother and his friends going to do?", ["Play football", "Pick up rubbish", "Plant flowers", "Help the town"]),
      read("Where are they going to plant flowers?", ["Near the bus station", "In the park", "At school", "At the office"]),
      read("What is the writer going to organize?", ["A cake sale", "A concert", "A football game", "A party"]),
      read("Where is the money going to go?", ["To a children's charity", "To the office", "To the music school", "To the hospital"]),
      read("Why isn't the boss going to bake?", ["He can't cook.", "He's busy.", "He doesn't like cake.", "He's on holiday."]),
      read("What is the message of the text?", ["Small actions can make a difference.", "Cakes are expensive.", "Football is bad.", "Nurses work hard."]),
    ],
  },
  {
    title: "Make sentences with going to",
    skill: "Grammar",
    kind: "fill",
    instructions: "Write the correct form of going to and the verb.",
    questions: written([
      ["I ___ a present to my teacher. (give)", "'m going to give|am going to give"],
      ["We ___ any electricity tomorrow. (not use)", "aren't going to use|are not going to use|'re not going to use"],
      ["She ___ rubbish in the park. (pick up)", "'s going to pick up|is going to pick up"],
      ["Are you ___ your grandmother? (visit)", "going to visit"],
      ["They ___ money for the hospital. (collect)", "'re going to collect|are going to collect"],
      ["He ___ his CV this week. (not write)", "isn't going to write|is not going to write|'s not going to write"],
      ["I ___ flowers in the garden. (plant)", "'m going to plant|am going to plant"],
      ["What are you ___ on Mandela Day? (do)", "going to do"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("I'm going *help my neighbour.", "going to + verb: going to help."),
      mistake("She *are going to cook tonight.", "she → is going to."),
      mistake("We *not are going to use the car.", "Negative: we aren't going to."),
      mistake("*Do you going to visit him?", "Question: Are you going to…?"),
      mistake("Are they going to come? — Yes, they *do.", "Short answer: Yes, they are."),
      mistake("He's going to *organizing a party.", "going to + base verb: organize."),
      mistake("I'm going to *giving all the money to charity.", "going to + base verb: give."),
      mistake("What *is you going to do?", "you → are."),
      mistake("We're going to pick *on rubbish in the park.", "pick up rubbish."),
      mistake("Is she going to look *at the children tonight?", "look after = take care of."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "We're going to organize a party.",
      "I'm not going to visit my family this weekend.",
      "What are you going to do for Mandela Day?",
      "She's going to plant some flowers.",
      "Are you going to help your classmate?",
      "They aren't going to use any electricity.",
      "He's going to look after the children.",
      "All the money is going to go to charity.",
      "We're going to pick up rubbish in the park.",
      "Small actions can make a difference.",
    ]),
  },
  {
    title: "Find the pairs",
    skill: "Matching",
    kind: "match",
    instructions: "Match the words.",
    questions: pairs([
      ["organize|a party", "plant|flowers", "repair|a bike", "raise|money"],
      ["visit|someone in hospital", "look after|children", "pick up|rubbish", "help with|homework"],
      ["volunteer|works for free", "charity|helps people in need", "homeless|without a home", "elderly|old"],
      ["Are you going to help?|Yes, I am.", "Is she going to come?|No, she isn't.", "Are they going to stay?|Yes, they are.", "Is he going to cook?|No, he isn't."],
      ["I'm|going to", "she's|going to", "we aren't|going to", "are you|going to…?"],
    ]),
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself. In going to, «to» is short: /tə/.",
    questions: phrases([
      "We're going to organize a party.",
      "I'm not going to visit my family this weekend.",
      "What are you going to do for Mandela Day?",
      "Are you going to visit someone in hospital?",
      "She's going to give a present.",
      "We're going to raise money for charity.",
      "community",
      "volunteer",
      "electricity",
      "kindness",
    ]),
  },
];
