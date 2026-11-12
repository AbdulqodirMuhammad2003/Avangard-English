/**
 * B2, 6-dars — «Learning holidays and travel stories». O'quv sayohatlari,
 * Shimoliy Amerika va Britaniya inglizchasi, sayohat hikoyasini aytish va
 * unga munosabat bildirish, shikoyat xati.
 * Navigate B2, 2.3 + 2.4 + 2.5 asosida: tinglash mashqlarida kitob treklari
 * (yopiq ombordan), lug'at misollari kitob matni va Wordlist'idan yoki unga
 * yaqin; mashq matnlari o'zimizniki. Mashqlar inglizcha.
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
  trueFalse,
  w,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;
/** 2.5 video (Navigate B2 «Report» 2) — tinglash mashqida ovozi ishlatiladi. */
const VIDEO = "media:navigate-b2/video/report-02.mp4";

export const B2_06_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🏖️", "vacation", "veɪˈkeɪʃn|veykeyshn", "ot", "Ta'til (AmE) = holiday", "A holiday (North American English).", "For our last vacation we rented a travel trailer and drove to the west coast.", "Oxirgi ta'tilimizda uy-furgon ijaraga olib, g'arbiy sohilga bordik."),
      w("🍁", "fall", "fɔːl|fool", "ot", "Kuz (AmE) = autumn", "Autumn (North American English).", "We went to New England last fall to see the leaves.", "O'tgan kuzda barglarni ko'rish uchun Yangi Angliyaga bordik."),
      w("🚗", "trunk", "trʌŋk|trank", "ot", "Mashina yukxonasi (AmE) = boot", "The back part of a car for bags (North American English).", "Put the baggage in the trunk.", "Yuklarni yukxonaga qo'ying."),
      w("🚶", "sidewalk", "ˈsaɪdwɔːk|saydwook", "ot", "Piyodalar yo'lagi (AmE) = pavement", "The path at the side of a street (North American English).", "Please walk on the sidewalk, not in the road.", "Iltimos, yo'lda emas, piyodalar yo'lagida yuring."),
      w("🗑️", "garbage", "ˈɡɑːbɪdʒ|gaabij", "ot", "Axlat (AmE) = rubbish", "Things you throw away (North American English).", "There was a lot of garbage in the street after the festival.", "Festivaldan keyin ko'chada axlat ko'p edi."),
      w("🚻", "restroom", "ˈrestruːm|restruum", "ot", "Hojatxona (AmE) = toilet", "A public toilet (North American English).", "There was a very long line for the restroom at the gas station.", "Yoqilg'i quyish shoxobchasidagi hojatxonaga juda uzun navbat bor edi."),
      w("🚇", "subway", "ˈsʌbweɪ|sabwey", "ot", "Metro (AmE) = the Underground", "An underground railway (North American English).", "We took the subway to downtown New York.", "Nyu-York markaziga metroda bordik."),
      w("🛣️", "freeway", "ˈfriːweɪ|friiwey", "ot", "Avtomagistral (AmE) = motorway", "A big fast road (North American English).", "The freeway was closed because a truck was on fire.", "Yuk mashinasi yonib ketgani uchun avtomagistral yopildi."),
      w("🎫", "round-trip", "ˌraʊnd ˈtrɪp|raund trip", "sifat", "Borib-kelish (chipta) (AmE) = return", "For a journey there and back (North American English).", "Would you like a one-way or a round-trip bus ticket?", "Bir tomonga chipta olasizmi yoki borib-kelishgami?"),
      w("🅿️", "parking lot", "ˈpɑːkɪŋ lɒt|paaking lot", "ot", "Avtoturargoh (AmE) = car park", "A place to leave cars (North American English).", "I'll meet you in the parking lot after work.", "Ishdan keyin siz bilan avtoturargohda uchrashaman."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🌱", "enrich", "ɪnˈrɪtʃ|inrich", "fe'l", "Boyitmoq", "Make something better or more interesting.", "Learning holidays can enrich your life long after the trip is over.", "O'quv sayohatlari safar tugagandan keyin ham hayotingizni boyitishi mumkin."),
      w("📈", "trend", "trend|trend", "ot", "Yo'nalish, moda (yangi)", "A new way of doing something that is becoming popular.", "Learning holidays are a hot new trend in travel.", "O'quv sayohatlari — sayohatdagi yangi moda."),
      w("🧳", "souvenirs", "ˌsuːvəˈnɪəz|suuvaniaz", "ot", "Esdaliklar, suvenirlar", "Things you buy to remember a place.", "What if you could come back with a new skill, not a suitcase full of souvenirs?", "Bir chamadon suvenir emas, yangi ko'nikma bilan qaytsangiz-chi?"),
      w("🦅", "falconry", "ˈfɔːlkənri|foolkanri", "ot", "Lochinbozlik (ov qushlari bilan ishlash)", "Training falcons and other birds to hunt.", "I did a falconry course at a castle in Ireland.", "Irlandiyadagi qal'ada lochinbozlik kursida o'qidim."),
      w("🦜", "perched", "pɜːtʃt|poocht", "sifat", "(Qush) qo'nib o'tirgan", "Sitting on something, like a bird on a branch.", "You walk through the castle grounds with a huge bird perched on your arm.", "Qo'lingizga katta qush qo'nib o'tirgan holda qal'a hududida yurasiz."),
      w("🌌", "gravity", "ˈɡrævəti|grevati", "ot", "Tortishish kuchi", "The force that pulls things towards the ground.", "In the simulator you experience the conditions of low gravity.", "Simulyatorda past tortishish sharoitini his qilasiz."),
      w("⚔️", "hand-to-hand combat", "ˌhænd tə ˌhænd ˈkɒmbæt|hend ta hend kombet", "ibora", "Qo'l jangi (yaqin masofadan)", "Fighting very close to your enemy.", "At gladiator school you engage in hand-to-hand combat with your instructors.", "Gladiator maktabida murabbiylaringiz bilan qo'l jangiga kirasiz."),
      w("🥋", "martial arts", "ˌmɑːʃl ˈɑːts|maashl aats", "ibora", "Yakkakurash san'ati", "Fighting sports like karate and judo.", "Gladiator school is kind of like a martial arts workout.", "Gladiator maktabi yakkakurash mashg'ulotiga o'xshaydi."),
      w("🕹️", "flight simulator", "ˈflaɪt ˌsɪmjuleɪtə|flayt simyuleyta", "ot", "Parvoz simulyatori", "A machine that makes you feel you are flying.", "Using a flight simulator, you can find out what it feels like to walk on the moon.", "Parvoz simulyatori yordamida Oyda yurish qanday ekanini bilib olasiz."),
      w("🎁", "rewarding", "rɪˈwɔːdɪŋ|riwooding", "sifat", "Foydali, qoniqish beradigan", "Giving you satisfaction because it is useful or important.", "These sound like fun and rewarding learning holidays.", "Bular qiziqarli va foydali o'quv sayohatlariga o'xshaydi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("😩", "to make matters worse", "tə ˌmeɪk ˌmætəz ˈwɜːs|ta meyk metaz woos", "ibora", "Ustiga-ustak, ishlar yanada yomonlashib", "Used to add another bad thing to a story.", "And then, to make matters worse, they decided to search my hand luggage.", "Ustiga-ustak, ular qo'l yukimni tekshirishga qaror qilishdi."),
      w("🛤️", "end up", "ˌend ˈʌp|end ap", "ibora", "Oxir-oqibat …ga tushib qolmoq", "Finally be in a place or situation you didn't plan.", "If you don't book a hotel, you might end up sleeping in the car.", "Mehmonxona band qilmasangiz, oxiri mashinada uxlab qolishingiz mumkin."),
      w("😲", "You're kidding", "jɔː ˈkɪdɪŋ|yoo kiding", "ibora", "Hazillashyapsizmi! (hayrat)", "Said when you are very surprised.", "They lost your luggage? You're kidding!", "Yukingizni yo'qotishdimi? Hazillashyapsizmi!"),
      w("😂", "hilarious", "hɪˈleəriəs|hilearias", "sifat", "Juda kulgili", "Extremely funny.", "You parked in a school playground? That's hilarious!", "Maktab hovlisiga mashina qo'ydingizmi? Juda kulgili!"),
      w("😳", "embarrassed", "ɪmˈbærəst|imberast", "sifat", "Uyalgan, xijolat bo'lgan", "Feeling silly or uncomfortable in front of other people.", "Hundreds of children were staring at you? You must have been so embarrassed!", "Yuzlab bolalar sizga tikilib turganmi? Rosa xijolat bo'lgandirsiz!"),
      w("😤", "inconvenient", "ˌɪnkənˈviːniənt|inkanviiniyant", "sifat", "Noqulay, ortiqcha tashvish keltiradigan", "Causing problems or extra work.", "They lost my luggage. Just for a day, but still very inconvenient.", "Ular yukimni yo'qotishdi. Bir kunga bo'lsa ham, baribir juda noqulay."),
      w("📢", "dissatisfaction", "ˌdɪsˌsætɪsˈfækʃn|dissetisfekshn", "ot", "Norozilik", "The feeling of not being happy with something.", "I am writing to express my dissatisfaction with your service.", "Xizmatingizdan noroziligimni bildirish uchun yozyapman."),
      w("💷", "compensation", "ˌkɒmpenˈseɪʃn|kompenseyshn", "ot", "Tovon puli, kompensatsiya", "Money you get because something bad happened to you.", "I am therefore requesting compensation for the MP3 player.", "Shu sababli MP3 pleyer uchun tovon to'lashni so'rayman."),
      w("⚠️", "incident", "ˈɪnsɪdənt|insidant", "ot", "Hodisa, voqea", "Something that happens, often something bad.", "I am writing to complain about an incident which occurred during my flight.", "Parvozim davomida sodir bo'lgan hodisa haqida shikoyat qilish uchun yozyapman."),
      w("🔍", "investigate", "ɪnˈvestɪɡeɪt|investigeyt", "fe'l", "Tekshirmoq, surishtirmoq", "Try to find out the facts about something.", "I suggest that you investigate the matter.", "Ushbu masalani tekshirib ko'rishingizni taklif qilaman."),
    ],
  },
];

const HOLIDAY = `GO ON HOLIDAY, COME BACK WITH A SKILL
Most people come home from a holiday with a suntan and a suitcase full of souvenirs. But more and more travellers now want something that lasts longer: a new skill.
Learning holidays combine travel and learning, and they have become one of the latest trends in travel. You can learn to make chocolate in Italy, dance the tango in Argentina or cook curry in India.
Fans say these holidays help you discover a country's culture much better than a beach does — and the new skill can enrich your life long after the trip is over.`;
const tf = trueFalse(HOLIDAY);

const EMAIL = `Dear Sir/Madam,
I am writing to complain about an incident which occurred at your hotel on 3 June.
I had asked reception for a wake-up call at 6 a.m., as I had to catch an early flight. I had been informed that this would not be a problem. However, the call came an hour late. As a result, I missed my flight and had to buy another ticket, which cost £180.
I am extremely dissatisfied with this service. I am therefore requesting compensation for the cost of the new ticket. I also suggest that you investigate the matter to ensure that this does not happen to other guests.
I look forward to your reply.
Yours faithfully,
Ana Torres`;
const read = reading(EMAIL);

export const B2_06_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("Have I ever told you about the camping experience we had in France?", ["Have I ever told you about the camping experience we had in France?", "Have I ever told you about the camping trip we had in France?", "Did I ever tell you about the camping experience we had in France?", "Have you ever told me about the camping experience in France?"]),
      listen("And then, to make matters worse, they lost my luggage.", ["And then, to make matters worse, they lost my luggage.", "And then, to make it worse, they lost my luggage.", "And then, to make matters worse, they lost my ticket.", "And then, to make matters worse, they found my luggage."]),
      listen("You're not going to believe this.", ["You're not going to believe this.", "You're not going to believe it.", "You won't believe this.", "You're not going to leave this."]),
      listen("You must have been so embarrassed!", ["You must have been so embarrassed!", "You must be so embarrassed!", "You must have been so amazed!", "You must have been embarrassed!"]),
      listen("We ended up getting to the airport an hour late.", ["We ended up getting to the airport an hour late.", "We ended up getting to the airport an hour early.", "We ended getting to the airport an hour late.", "We ended up going to the airport an hour late."]),
      listen("I am therefore requesting compensation.", ["I am therefore requesting compensation.", "I am therefore requesting a conversation.", "I am therefore expecting compensation.", "I am therefore requesting confirmation."]),
      listen("Last fall, I did a falconry course.", ["Last fall, I did a falconry course.", "Last fall, I did a photography course.", "Last fall, I took a falconry course.", "Last full, I did a falconry course."]),
      listen("hilarious", ["hilarious", "various", "hilariously", "Hilary's"]),
      listen("inconvenient", ["inconvenient", "convenient", "inconsistent", "inconvenience"]),
      listen("certificate", ["certificate", "certified", "certain", "certificates"]),
    ],
  },
  {
    title: "A travel programme",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to the start of an interview on a travel programme. Answer the questions.",
    questions: [
      hearing(track("2.4"))("What is the programme talking about this morning?", ["Learning holidays", "Cheap flights", "Beach holidays", "Travel insurance"]),
      hearing(track("2.4"))("What does the guest, Ilana Canter, do?", ["She's a senior editor of a travel magazine.", "She's a tour guide.", "She's a falconry teacher.", "She's a pilot."]),
      hearing(track("2.4"))("What is the name of her magazine?", ["Escape", "Adventure", "Travel Today", "Holiday"]),
      hearing(track("2.4"))("Why has she been invited?", ["To give her selection of interesting learning holidays", "To talk about her new book", "To complain about an airline", "To teach English"]),
    ],
  },
  {
    title: "Three learning holidays",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to the rest of the interview. Answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("2.9"))("Which learning holiday does Ilana talk about first?", ["Falconry in Ireland", "Space camp in the USA", "Gladiator school in Italy", "Chocolate making in Italy"]),
      hearing(track("2.9"))("When was the castle built?", ["In 1228", "In 1828", "In 1282", "In 2018"]),
      hearing(track("2.9"))("What did walking with a falcon remind her of?", ["A Harry Potter film", "A space film", "Her childhood", "A Roman film"]),
      hearing(track("2.9"))("Why isn't falconry dangerous?", ["The falcons are well trained.", "The birds are very small.", "You wear a special helmet.", "You only watch the birds."]),
      hearingTwo(track("2.9"))("Which TWO things can you do at the Adult Space Academy in Alabama?", ["Learn how to launch and land a space shuttle", "Find out what it feels like to walk on the moon"], ["Fly to the space station", "Train with real astronauts in space"]),
      hearing(track("2.9"))("How many people share a room at the space centre?", ["Up to seven", "Two", "Up to twelve", "Nobody — the rooms are single"]),
      hearing(track("2.9"))("Who gives the gladiator lessons in Rome?", ["Members of The Historic Group of Rome", "University teachers", "Film actors", "Professional boxers"]),
      hearing(track("2.9"))("What does each participant get at the end of the gladiator course?", ["A little certificate", "A sword", "A Roman outfit", "A free holiday"]),
    ],
  },
  {
    title: "Four sentences",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear four sentences from the interview. Listen and choose the missing words.",
    questions: [
      gaps(track("2.8"), [
        ["You get a little ___.", "certificate", "souvenir", "ticket"],
        ["One of the hottest new ___ in travel.", "trends", "trips", "tours"],
        ["Where did you learn to ___?", "surf", "swim", "sail"],
        ["I read about it on the ___.", "internet", "plane", "news"],
      ]),
    ],
  },
  {
    title: "Go on holiday, come back with a skill",
    skill: "Reading",
    kind: "truefalse",
    instructions: "Read the text. Are the sentences true or false?",
    questions: [
      tf("Most people come home from holiday with a new skill.", false, "Most come home with a suntan and souvenirs."),
      tf("Learning holidays combine travel and learning.", true),
      tf("Learning holidays are becoming less popular.", false, "They are one of the latest trends."),
      tf("You can learn to dance the tango in Argentina.", true),
      tf("Fans say a beach helps you discover a culture better.", false, "Learning holidays help you discover it better."),
      tf("A new skill can enrich your life after the trip.", true),
    ],
  },
  {
    title: "American words, British words",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear eight North American words. Choose the word you hear. Its British meaning is given.",
    questions: [
      gaps(track("2.13"), [
        ["___ (BrE: holiday)", "vacation", "vocation", "location"],
        ["___ (BrE: toilet)", "restroom", "restaurant", "bedroom"],
        ["___ (BrE: pavement)", "sidewalk", "side road", "catwalk"],
        ["___ (BrE: caravan)", "travel trailer", "travel train", "trailer park"],
        ["___ (BrE: lorry)", "truck", "track", "trunk"],
        ["___ (BrE: boot of a car)", "trunk", "truck", "drunk"],
        ["___ (BrE: rubbish)", "garbage", "garage", "cabbage"],
        ["___ (BrE: petrol)", "gasoline", "gas line", "gas station"],
      ]),
    ],
  },
  {
    title: "Say it the British way",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the British English word for the North American word in CAPITALS.",
    questions: [
      say("Put the BAGGAGE in the trunk.", ["luggage", "rubbish", "queue", "lorry"]),
      say("Put the baggage in the TRUNK.", ["boot", "caravan", "pavement", "toilet"]),
      say("There was a lot of GARBAGE on the sidewalk.", ["rubbish", "luggage", "petrol", "queue"]),
      say("There was a lot of garbage on the SIDEWALK.", ["pavement", "motorway", "Underground", "boot"]),
      say("There was a very long LINE for the restroom.", ["queue", "row", "list", "road"]),
      say("We took the SUBWAY to downtown New York.", ["Underground", "motorway", "lorry", "caravan"]),
      say("We took the subway to DOWNTOWN New York.", ["central", "single", "return", "local"]),
      say("The FREEWAY was closed because a truck was on fire.", ["motorway", "pavement", "car park", "Underground"]),
      say("Would you like a ONE-WAY or a round-trip ticket?", ["single", "return", "central", "holiday"]),
      say("For our last vacation we rented a TRAVEL TRAILER.", ["caravan", "lorry", "boot", "car park"]),
    ],
  },
  {
    title: "Travel nightmares",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to two people telling a story about a travel experience. Answer the questions.",
    questions: [
      hearing(track("2.10"))("Conversation 1: When did Jamie's story happen?", ["About ten years ago, when the kids were young", "Last month", "Last summer", "When he was a student"]),
      hearing(track("2.10"))("Why was Jamie annoyed with Liz?", ["She was doing a rubbish job of navigating.", "She fell asleep while driving.", "She lost the map.", "She booked the wrong campsite."]),
      hearing(track("2.10"))("Where did they end up parking for the night?", ["In a school playground", "At the campsite", "At a petrol station", "Outside a hotel"]),
      hearing(track("2.10"))("Conversation 2: Why was Sabrina travelling?", ["She was going to a work conference in Mumbai.", "She was going on a family holiday.", "She was visiting friends in Paris.", "She was moving abroad."]),
      hearing(track("2.10"))("Why did she get to the airport late?", ["A lorry had turned over and there was a traffic jam.", "She had overslept.", "The coach had broken down.", "She had forgotten her passport."]),
      hearingTwo(track("2.10"))("Which TWO things went wrong at the airport?", ["The flight had been cancelled.", "The airline lost her luggage."], ["She missed the coach home.", "Her passport was stolen."]),
      hearing(track("2.10"))("How long did she wait for the next flight?", ["Nine hours", "Four hours", "One hour", "A day"]),
    ],
  },
  {
    title: "Reacting to a story",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear six reactions to a story. Listen and choose the missing word.",
    questions: [
      gaps(track("2.11"), [
        ["I'm not ___!", "surprised", "serious", "sure"],
        ["You must have been so ___!", "embarrassed", "excited", "exhausted"],
        ["I bet you were ___!", "furious", "terrified", "relieved"],
        ["You're ___!", "kidding", "joking", "lying"],
        ["That is ___!", "hilarious", "horrible", "amazing"],
        ["You can't be ___!", "serious", "surprised", "sure"],
      ]),
    ],
  },
  {
    title: "Story phrases",
    skill: "Speaking",
    kind: "match",
    instructions: "Match the beginnings and endings of the phrases.",
    questions: pairs([
      ["I'm|not surprised!", "You must have been|so embarrassed!", "I bet you|were furious!", "That is|hilarious!"],
      ["You're|kidding!", "You|can't be serious!", "To make matters|worse, …", "You'll never|guess what I saw …"],
    ]),
  },
  {
    title: "Telling a story",
    skill: "Speaking",
    kind: "situation",
    instructions: "What do you want to do? Choose the best phrase.",
    questions: [
      say("You want to start telling a story.", ["Have I ever told you about …?", "In the end, …", "I'm not surprised.", "That is hilarious!"]),
      say("You want to say when it happened.", ["This happened about ten years ago.", "You can't be serious!", "Have I ever told you about …?", "To make matters worse, …"]),
      say("You want to add one more bad thing.", ["And then, to make matters worse, …", "This was in the days before …", "I bet you were furious!", "In the end, …"]),
      say("You want to make the listener curious.", ["You're not going to believe this …", "We ended up …", "This happened ages ago.", "I'm not surprised."]),
      say("You want to finish the story.", ["In the end, …", "Did you hear about …?", "You're kidding!", "You'll never guess …"]),
      say("You want to show the time was very different.", ["This was in the days before satnav.", "That is hilarious!", "To make matters worse, …", "You can't be serious!"]),
    ],
  },
  {
    title: "React to the story",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best reaction.",
    questions: [
      say("I woke up and saw I'd parked in a school playground!", ["That is hilarious!", "I'm not surprised.", "I bet you were relieved!", "You must have been satisfied!"]),
      say("Everyone at the party was staring at me — I had my shirt on inside out!", ["You must have been so embarrassed!", "I bet you were delighted!", "That's very inconvenient.", "You can't be relieved!"]),
      say("We were driving around Paris at three in the morning and kept getting lost.", ["I'm not surprised. At three in the morning!", "You must have been so embarrassed!", "That is hilarious!", "I bet you were delighted!"]),
      say("The airline lost my luggage and nobody said sorry.", ["I bet you were furious!", "That is hilarious!", "I'm not surprised!", "You must have been relieved!"]),
      say("And the flight had been cancelled!", ["You're kidding!", "Have I ever told you?", "In the end!", "This happened ages ago!"]),
      say("They want me to pay for the new ticket myself.", ["You can't be serious!", "That is hilarious!", "You must have been embarrassed!", "I'm not surprised at all, well done!"]),
    ],
  },
  {
    title: "An email of complaint",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the email. Choose the correct answer.",
    questions: [
      read("Why is Ana writing?", ["To complain about a late wake-up call", "To book a room", "To thank the hotel", "To complain about her flight"]),
      read("Why did she ask for a wake-up call?", ["She had to catch an early flight.", "She had a meeting at the hotel.", "Her alarm was broken.", "She wanted breakfast early."]),
      read("What happened as a result?", ["She missed her flight.", "She missed breakfast.", "She lost her luggage.", "She got a free room."]),
      read("What does she want the hotel to do? Choose the full answer.", ["Pay for the new ticket and investigate the matter", "Give her a free night", "Say sorry by phone", "Call the airline"]),
      read("Which phrase is formal?", ["I am therefore requesting compensation.", "Give me my money back!", "That was rubbish!", "Sort it out, please."]),
    ],
  },
  {
    title: "Formal or informal?",
    skill: "Writing",
    kind: "match",
    instructions: "Match the formal phrases from a complaint email to their informal meaning.",
    questions: pairs([
      ["an incident which occurred|something that happened", "remain on board|stay on the plane", "we had been informed|somebody had told us", "prepare the seats|get the seats ready"],
      ["requested that we|asked us to", "cleaning staff|cleaners", "returned|got back", "I am requesting compensation|I would like my money back"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Vocabulary",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("To make *things worse, they lost my luggage.", "to make matters worse."),
      mistake("We ended *in sleeping in the car.", "end up + -ing: We ended up sleeping in the car."),
      mistake("You must have been so *embarrassing!", "embarrassed = how you feel."),
      mistake("That's *hilariously! You parked in a playground?", "That's hilarious! (adjective)."),
      mistake("I am writing to complain *for an incident.", "complain about something."),
      mistake("I am therefore requesting *compensate for the ticket.", "compensation (noun)."),
      mistake("I look forward to *hear from you.", "look forward to + -ing: hearing."),
      mistake("In American English, a *boot is the back of a car.", "BrE boot = NAmE trunk."),
      mistake("We took the *subway in London.", "In London it's the Underground (the Tube)."),
      mistake("I'd like a *round return ticket, please.", "BrE return = NAmE round-trip."),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then say it yourself. Make your voice rise and fall in exclamations, so you sound interested.",
    questions: phrases([
      "You're kidding!",
      "That's hilarious!",
      "I bet you were furious!",
      "You must have been so embarrassed!",
      "You can't be serious!",
      "Have I ever told you about our trip to France?",
      "And then, to make matters worse, it started to rain.",
      "In the end, we slept in the car.",
      "I am writing to complain about an incident.",
      "I look forward to your reply.",
    ]),
  },
  {
    title: "Video words: a painting holiday",
    skill: "Vocabulary",
    kind: "match",
    instructions: "These words are from the video «Learning holidays». Match them to their meanings.",
    questions: pairs([
      ["harbour|a place where boats stay safely", "fishing boat|a boat for catching fish", "beach resort|a seaside town for holidays", "ocean view|you can see the sea from it"],
      ["studio|a room where an artist works", "still life|a painting of objects, e.g. fruit", "tutor|a teacher of a small group", "paintbrush|a tool for putting on paint"],
    ]),
  },
  {
    title: "Video: Learning holidays",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to the video «Learning holidays» about a painting school in St Ives (you can also watch it in «Inglizcha tomosha» after the exercises). Choose the option that completes each sentence.",
    questions: [
      hearing(VIDEO)("St Ives is a seaside town in the ___ of Britain.", ["south-west", "south-east", "north-west", "north-east"]),
      hearing(VIDEO)("As well as being famous for its ___, it is well known for its arts scene.", ["sandy beaches", "fish restaurants", "old castle", "museums"]),
      hearing(VIDEO)("By the 1950s, it had become ___ for a large group of influential artists.", ["home", "a popular holiday destination", "too expensive", "a quiet village"]),
      hearing(VIDEO)("The St Ives School of Painting opened in ___.", ["1938", "1958", "1918", "1988"]),
      hearing(VIDEO)("The school runs courses in ___.", ["a range of art forms", "oil painting only", "photography only", "sculpture only"]),
      hearing(VIDEO)("The school is located ___.", ["on the edge of a beach", "in the centre of the town", "on a hill outside the town", "next to the station"]),
    ],
  },
];
