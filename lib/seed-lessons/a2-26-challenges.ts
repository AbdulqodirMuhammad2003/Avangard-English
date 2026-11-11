/**
 * A2, 26-dars — «Yangi sinovlar». Geocaching, Yangi yil va'dalari, kundalik
 * ishlar.
 * Grammatika: maqsad infinitivi — «to + fe'l» (I go geocaching to keep fit).
 * Navigate A2, 11.2 asosida: tinglash mashqlarida kitob treklari (yopiq
 * ombordan), savollar va matnlar o'zimizniki. Mashqlar inglizcha.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  hearing,
  hearingTwo,
  listen,
  mistake,
  pairs,
  phrases,
  say,
  sentences,
  slots,
  trueFalse,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-a2/audio/${n}.mp3`;

export const A2_26_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🧗", "challenge", "ˈtʃælɪndʒ|chelinj", "ot", "Sinov, qiyin vazifa", "Something new and difficult that you try to do.", "Learning Japanese is a big challenge for me.", "Yapon tilini o'rganish men uchun katta sinov."),
      w("🧭", "geocaching", "ˈdʒiːəʊkæʃɪŋ|jiiokeshing", "ot", "Geokeshing (GPS bilan yashirin qutini qidirish o'yini)", "A game where you use GPS to find hidden boxes.", "I go geocaching to keep fit.", "Sog'lom bo'lish uchun geokeshing qilaman."),
      w("📆", "arrange", "əˈreɪndʒ|areynj", "fe'l", "Kelishmoq, uyushtirmoq", "Plan a time and place to do something with someone.", "I arrange to meet them in a café.", "Ular bilan kafeda uchrashishga kelishaman."),
      w("💎", "treasure", "ˈtreʒə|treja", "ot", "Xazina", "Gold, money or other things of great value.", "The children looked for treasure in the garden.", "Bolalar bog'dan xazina qidirishdi."),
      w("🗺️", "explore", "ɪkˈsplɔː|iksploo", "fe'l", "Kashf qilmoq, aylanib o'rganmoq", "Travel around a place to learn about it.", "We went to the mountains to explore the area.", "Hududni o'rganish uchun tog'larga bordik."),
      w("🙈", "hide", "haɪd|hayd", "fe'l", "Yashirmoq, berkitmoq", "Put something where people can't see it.", "People hide small boxes in the countryside.", "Odamlar qishloq joylarda kichik qutilar yashiradi."),
      w("🔍", "discover", "dɪˈskʌvə|diskava", "fe'l", "Topmoq, kashf etmoq", "Find something for the first time.", "I discover new places every weekend.", "Har dam olish kuni yangi joylar topaman."),
      w("📱", "keep in touch", "ˌkiːp ɪn ˈtʌtʃ|kiip in tach", "ibora", "Aloqani uzmaslik", "Continue to talk or write to someone.", "We send messages to keep in touch.", "Aloqani uzmaslik uchun xabar yozib turamiz."),
      w("🥾", "walk for miles", "ˌwɔːk fə ˈmaɪlz|wook fa maylz", "ibora", "Uzoq yo'l yurmoq", "Walk a very long way.", "I walk for miles to find the boxes.", "Qutilarni topish uchun uzoq yo'l yuraman."),
      w("📦", "cache", "kæʃ|kesh", "ot", "Yashirin quti (geokeshingda)", "A hidden box in the game of geocaching.", "There's a small notebook in every cache.", "Har bir yashirin qutida kichik daftar bor."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🎆", "resolution", "ˌrezəˈluːʃn|rezaluushn", "ot", "Qat'iy niyat, va'da (Yangi yilda)", "A promise to yourself to do or stop something.", "My New Year's resolution is to read more books.", "Yangi yildagi niyatim — ko'proq kitob o'qish."),
      w("⏳", "spend time", "ˌspend ˈtaɪm|spend taym", "ibora", "Vaqt o'tkazmoq", "Use your time doing something or with someone.", "I want to spend time with my brother.", "Akam bilan vaqt o'tkazmoqchiman."),
      w("🏋️", "join a gym", "ˌdʒɔɪn ə ˈdʒɪm|joyn a jim", "ibora", "Sport zaliga a'zo bo'lmoq", "Become a member of a sports club.", "We're not going to join a gym this year.", "Bu yil sport zaliga a'zo bo'lmaymiz."),
      w("✈️", "move abroad", "ˌmuːv əˈbrɔːd|muuv abrood", "ibora", "Chet elga ko'chmoq", "Go to live in another country.", "She wants to move abroad to teach English.", "U ingliz tilidan dars berish uchun chet elga ko'chmoqchi."),
      w("🏢", "apartment", "əˈpɑːtmənt|apaatmant", "ot", "Kvartira (AmE)", "A flat (American English).", "Is he going to look for a new apartment?", "U yangi kvartira qidiradimi?"),
      w("🔄", "instead", "ɪnˈsted|insted", "ravish", "O'rniga", "In the place of something else.", "We're going to save money for a trip instead.", "O'rniga sayohat uchun pul yig'amiz."),
      w("🏖️", "take time off", "ˌteɪk ˌtaɪm ˈɒf|teyk taym of", "ibora", "Ishdan ruxsat olmoq", "Not go to work for a short time.", "I'm going to take time off to visit my aunt.", "Xolamni ko'rgani ishdan ruxsat olaman."),
      w("🍬", "cut down on", "ˌkʌt ˈdaʊn ɒn|kat daun on", "ibora", "Kamaytirmoq", "Eat, drink or do less of something.", "I want to cut down on sugar.", "Shakarni kamaytirmoqchiman."),
      w("🎸", "take up", "ˌteɪk ˈʌp|teyk ap", "ibora", "(Yangi mashg'ulot) boshlamoq", "Start a new hobby or sport.", "This year I'm going to take up the guitar.", "Bu yil gitara chalishni boshlayman."),
      w("⚖️", "decision", "dɪˈsɪʒn|disijn", "ot", "Qaror", "Something you choose after thinking.", "Moving to Italy was a big decision.", "Italiyaga ko'chish katta qaror bo'ldi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🚘", "fix a car", "ˌfɪks ə ˈkɑː|fiks a kaa", "ibora", "Mashina tuzatmoq", "Make a broken car work again.", "He went to the garage to fix a car.", "U mashina tuzatish uchun ustaxonaga bordi."),
      w("🛒", "buy groceries", "ˌbaɪ ˈɡrəʊsəriz|bay grousariz", "ibora", "Oziq-ovqat xarid qilmoq", "Buy food and things for the home.", "I go to the market to buy groceries.", "Oziq-ovqat olish uchun bozorga boraman."),
      w("🧾", "pay a bill", "ˌpeɪ ə ˈbɪl|pey a bil", "ibora", "Hisob (to'lov)ni to'lamoq", "Give money for gas, water, a phone, etc.", "I went to the bank to pay a bill.", "To'lovni to'lash uchun bankka bordim."),
      w("💇", "get a haircut", "ˌɡet ə ˈheəkʌt|get a heakat", "ibora", "Soch oldirmoq", "Have your hair cut at a hairdresser's.", "He went out to get a haircut.", "U soch oldirish uchun chiqdi."),
      w("🛂", "renew a passport", "rɪˌnjuː ə ˈpɑːspɔːt|rinyuu a paaspoot", "ibora", "Pasportni yangilamoq", "Get a new passport when the old one is too old.", "I need to renew a passport before the trip.", "Sayohatdan oldin pasportni yangilashim kerak."),
      w("🏧", "withdraw money", "wɪðˌdrɔː ˈmʌni|wizdroo mani", "ibora", "Pul yechib olmoq", "Take money out of the bank or a cash machine.", "I stopped at the cash machine to withdraw money.", "Pul yechish uchun bankomat oldida to'xtadim."),
      w("📮", "post a parcel", "ˌpəʊst ə ˈpɑːsl|poust a paasl", "ibora", "Posilka jo'natmoq", "Send a box by post.", "She went to the post office to post a parcel.", "U posilka jo'natish uchun pochtaga bordi."),
      w("🔌", "charge a phone", "ˌtʃɑːdʒ ə ˈfəʊn|chaaj a foun", "ibora", "Telefonni quvvatlamoq", "Put electricity into a phone battery.", "Can I use your socket to charge a phone?", "Telefonni quvvatlash uchun rozetkangizdan foydalansam bo'ladimi?"),
      w("🏃", "get some exercise", "ˌɡet sʌm ˈeksəsaɪz|get sam eksasayz", "ibora", "Bir oz jismoniy mashq qilmoq", "Move your body, for example walk or run.", "I walk to work to get some exercise.", "Bir oz harakat qilish uchun ishga piyoda boraman."),
      w("🧩", "clue", "kluː|kluu", "ot", "Ishora, kalit (topishmoqda)", "Information that helps you find an answer.", "The website gives you a clue to find the box.", "Sayt qutini topish uchun ishora beradi."),
    ],
  },
];

const TEXT = `MY YEAR OF CHALLENGES
Last January I made a list of twelve resolutions — one for every month.
In February I took up geocaching. I didn't do it to win prizes; I did it to get some exercise and to explore my city. I walked for miles and discovered parks I didn't know.
In April I joined a cooking class to meet new people. Now I cook for my friends every Friday.
In June I took time off work to visit my grandparents in the village. I stayed for two weeks to help them in the garden.
In September I cut down on coffee. I drink green tea instead.
I didn't do all twelve challenges — I'm still not going to the gym! — but it was a great year. This year I'm going to learn Spanish to travel around South America.`;
const tf = trueFalse(TEXT);

export const A2_26_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("I go geocaching to keep fit.", ["I go geocaching to keep fit.", "I go geocaching to keep it.", "I went geocaching to keep fit.", "I go geocaching and keep fit."]),
      listen("I do it to meet new people.", ["I do it to meet new people.", "I do it to meet your people.", "I did it to meet new people.", "I do it to meet nice people."]),
      listen("She went to the bank to pay a bill.", ["She went to the bank to pay a bill.", "She went to the bank to pay the bill.", "She goes to the bank to pay a bill.", "He went to the bank to pay a bill."]),
      listen("We're going to save some money instead.", ["We're going to save some money instead.", "We're going to spend some money instead.", "We're going to save money in Italy.", "We aren't going to save some money."]),
      listen("He got up early to paint the living room.", ["He got up early to paint the living room.", "He gets up early to paint the living room.", "He got up early to clean the living room.", "He got up early to paint the bedroom."]),
      listen("I'm going to take up the guitar.", ["I'm going to take up the guitar.", "I'm going to pick up the guitar.", "I'm going to play the guitar.", "I took up the guitar."]),
      listen("resolution", ["resolution", "revolution", "reservation", "relation"]),
      listen("treasure", ["treasure", "pleasure", "measure", "treasures"]),
      listen("challenge", ["challenge", "change", "challenges", "channel"]),
      listen("discover", ["discover", "recover", "cover", "discovered"]),
    ],
  },
  {
    title: "Why do people go geocaching?",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Four people talk about geocaching. Listen and answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("11.8"))("Why does the first speaker go geocaching?", ["To keep fit", "To meet new people", "To see different places", "To win presents"]),
      hearing(track("11.8"))("Where does the first speaker choose caches?", ["In the countryside", "In the city centre", "In cafés", "Near the gym"]),
      hearing(track("11.8"))("What does the first speaker think about geocaching?", ["It's better than going to the gym.", "It's boring.", "It's very expensive.", "It's only for children."]),
      hearingTwo(track("11.8"))("Which TWO things does the second speaker do?", ["Arranges to meet people on the website", "Meets people in a café in town"], ["Goes geocaching alone", "Works in a café"]),
      hearing(track("11.8"))("Who did the second speaker meet geocaching?", ["Their best friend", "Their husband", "Their teacher", "Their boss"]),
      hearing(track("11.8"))("Why does the third speaker go geocaching?", ["To see different places", "To keep fit", "To meet new people", "To find presents"]),
      hearing(track("11.8"))("What does the fourth speaker say geocaching is like?", ["Being a kid again", "Going to the gym", "Reading a good book", "Going on holiday"]),
    ],
  },
  {
    title: "Infinitive of purpose",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct answer.",
    questions: [
      say("I go to the gym ___ fit.", ["to keep", "for keep", "for keeping", "keep"]),
      say("She went to the shop ___ some milk.", ["to buy", "for buy", "buying", "to buying"]),
      say("Why did you go to the bank? — ___ withdraw money.", ["To", "For", "Because", "So"]),
      say("He's learning English ___ abroad.", ["to work", "for work", "working", "to working"]),
      say("We stopped at the café ___ a coffee.", ["to have", "for having", "have", "to having"]),
      say("I called my friend ___ her about the party.", ["to tell", "for tell", "telling", "tell"]),
      say("They went to Italy ___ their son.", ["to visit", "for visit", "visiting", "visit"]),
      say("I use my phone ___ in touch with my family.", ["to keep", "for keep", "keeping", "keep"]),
      say("She's saving money ___ a new car.", ["to buy", "for buy", "buy", "to buying"]),
      say("Why are you going to the post office? — To ___ a parcel.", ["post", "posting", "posted", "to post"]),
    ],
  },
  {
    title: "New Year's resolutions",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Two friends talk about New Year's resolutions. Listen and answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("11.13"))("What is the woman's first resolution?", ["To spend less time at work", "To join a gym", "To learn Italian", "To move abroad"]),
      hearing(track("11.13"))("Who does she want to spend more time with?", ["Her brother", "Her parents", "Her boss", "Her neighbours"]),
      hearing(track("11.13"))("Where is her brother going to move?", ["To Italy", "To Spain", "To a new apartment in town", "To Greece"]),
      hearing(track("11.13"))("When is he going to move?", ["Next year", "Next month", "This weekend", "Last year"]),
      hearingTwo(track("11.13"))("Which TWO things are true about her other resolution?", ["They aren't going to join a gym.", "They're going to save money for a trip to Italy."], ["They're going to join a gym.", "They're going to buy a new car."]),
      hearing(track("11.13"))("Why aren't they going to join a gym?", ["It's too expensive.", "They don't like sport.", "It's too far.", "They haven't got time."]),
    ],
  },
  {
    title: "Why did they do it?",
    skill: "Listening",
    kind: "listenmatch",
    instructions: "Listen to eight sentences. Write why each person did it — the verb after «to».",
    questions: [
      slots(track("11.14"), [
        ["1. He got up early to … the living room.", "paint"],
        ["2. She's going to Greece to … English.", "teach"],
        ["3. I go to Bob's house to … after his dog.", "look"],
        ["4. I went to my parents' house to … Mum's car.", "repair"],
        ["5. I'm going to call our friends to … a party.", "organize"],
        ["6. We're going to buy eggs and sugar to … a cake.", "make"],
        ["7. I'm going to take the afternoon off to … my aunt.", "visit"],
        ["8. I went to the garden to … some flowers.", "plant"],
      ]),
    ],
  },
  {
    title: "My year of challenges",
    skill: "Reading",
    kind: "truefalse",
    instructions: "Read the text. Are the sentences true or false?",
    questions: [
      tf("The writer made twelve resolutions.", true),
      tf("The writer took up geocaching to win prizes.", false, "To get some exercise and to explore the city."),
      tf("Geocaching helped the writer discover new parks.", true),
      tf("The writer joined a cooking class to meet new people.", true),
      tf("The writer cooks for friends every Saturday.", false, "Every Friday."),
      tf("The writer took time off work to visit their grandparents.", true),
      tf("The writer stayed in the village for a month.", false, "For two weeks."),
      tf("The writer drinks green tea instead of coffee now.", true),
      tf("The writer goes to the gym now.", false, "«I'm still not going to the gym!»"),
      tf("This year the writer is going to learn Spanish to travel.", true),
    ],
  },
  {
    title: "Why? Use to + verb",
    skill: "Grammar",
    kind: "fill",
    instructions: "Complete the sentence with to + the verb in brackets.",
    questions: written([
      ["I went to the hairdresser's ___ a haircut. (get)", "to get"],
      ["She goes to the market ___ groceries. (buy)", "to buy"],
      ["We use the website ___ in touch. (keep)", "to keep"],
      ["He went to the cash machine ___ money. (withdraw)", "to withdraw"],
      ["I'm going to the passport office ___ my passport. (renew)", "to renew"],
      ["They walk to work ___ some exercise. (get)", "to get"],
      ["She called the garage ___ about her car. (ask)", "to ask"],
      ["I'm saving money ___ abroad. (move)", "to move"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("I go to the gym *for keep fit.", "Purpose: to + verb → to keep fit."),
      mistake("She went to the shop to *buys some bread.", "to + base verb: to buy."),
      mistake("We went to Italy *for visiting our son.", "to visit our son."),
      mistake("He's learning English to *working abroad.", "to + base verb: to work."),
      mistake("I went to the bank to *paid a bill.", "to + base verb: to pay."),
      mistake("Why did you call? — *For tell you the news.", "To tell you the news."),
      mistake("My New Year's *resolve is to read more.", "resolution (noun)."),
      mistake("I want to cut *up on sugar.", "cut down on = eat less."),
      mistake("This year I'm going to take *on the guitar.", "take up = start a hobby."),
      mistake("We're going to save money for a trip instead *of.", "At the end of a sentence we say «instead» without «of»."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "I go geocaching to keep fit.",
      "She went to the bank to pay a bill.",
      "We use our phones to keep in touch.",
      "He's going to Greece to teach English.",
      "I walk to work to get some exercise.",
      "My resolution is to spend more time with my family.",
      "They're going to save some money instead.",
      "I arrange to meet them in a café.",
      "She took time off work to visit her aunt.",
      "I want to cut down on sugar this year.",
    ]),
  },
  {
    title: "Find the pairs",
    skill: "Matching",
    kind: "match",
    instructions: "Match the words.",
    questions: pairs([
      ["pay|a bill", "renew|a passport", "post|a parcel", "charge|a phone"],
      ["buy|groceries", "get|a haircut", "withdraw|money", "fix|a car"],
      ["take up|start a hobby", "cut down on|have less", "move abroad|live in another country", "take time off|not go to work"],
      ["the bank|to withdraw money", "the post office|to post a parcel", "the hairdresser's|to get a haircut", "the gym|to keep fit"],
      ["hide|put where no one can see", "discover|find for the first time", "explore|travel around a place", "arrange|plan to meet"],
    ]),
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself. «to» is short: /tə/.",
    questions: phrases([
      "I go geocaching to keep fit.",
      "I do it to meet new people.",
      "I go geocaching to see different places.",
      "She went to the bank to pay a bill.",
      "My resolution is to spend more time with my family.",
      "We're going to save some money instead.",
      "challenge",
      "resolution",
      "treasure",
      "decision",
    ]),
  },
];
