/**
 * A1, 11-dars — «Yo'lda». Transport, yo'l va safar. Grammatika: Present
 * Simple — inkor (I don't drive / she doesn't drive), «by bus» / «on foot»,
 * doesn't dan keyin fe'l -s siz. Matn va mashqlar o'zimizniki.
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

export const A1_11_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🚌", "bus", "bʌs|bas", "ot", "Avtobus", "A big vehicle for a lot of people.", "I go to work by bus.", "Ishga avtobusda boraman."),
      w("🚆", "train", "treɪn|treyn", "ot", "Poyezd", "It goes on rails from station to station.", "The train to Samarkand is fast.", "Samarqandga poyezd tez."),
      w("✈️", "plane", "pleɪn|pleyn", "ot", "Samolyot", "It flies in the sky.", "The plane to London leaves at ten.", "Londonga samolyot soat o'nda uchadi."),
      w("🚕", "taxi", "ˈtæksi|teksi", "ot", "Taksi", "A car you pay to drive you.", "Let's take a taxi.", "Keling, taksiga o'tiramiz."),
      w("🚇", "metro", "ˈmetrəʊ|metrou", "ot", "Metro", "A train under the city.", "The Tashkent metro is beautiful.", "Toshkent metrosi go'zal."),
      w("⛵", "boat", "bəʊt|bout", "ot", "Qayiq", "A small vehicle on water.", "We go by boat to the island.", "Orolga qayiqda boramiz."),
      w("🚶", "on foot", "ɒn ˈfʊt|on fut", "ibora", "Piyoda", "Walking, not by car or bus.", "I go to school on foot.", "Maktabga piyoda boraman."),
      w("🚉", "station", "ˈsteɪʃn|steyshn", "ot", "Vokzal, bekat", "A place where trains or the metro stop.", "The station is near my house.", "Vokzal uyim yaqinida."),
      w("🛫", "airport", "ˈeəpɔːt|eapoot", "ot", "Aeroport", "Planes leave and arrive there.", "The airport is far from the city.", "Aeroport shahardan uzoqda."),
      w("🚏", "bus stop", "ˈbʌs stɒp|bas stop", "ot", "Avtobus bekati", "The place where a bus stops for people.", "Wait for me at the bus stop.", "Meni avtobus bekatida kut."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🚗", "drive", "draɪv|drayv", "fe'l", "Mashina haydamoq", "To control a car.", "I don't drive. I haven't got a car.", "Men mashina haydamayman. Mashinam yo'q."),
      w("🚶‍♀️", "walk", "wɔːk|uook", "fe'l", "Piyoda yurmoq", "To go on foot. The «l» is silent.", "I walk to work every day.", "Har kuni ishga piyoda boraman."),
      w("🚲", "ride", "raɪd|rayd", "fe'l", "Minmoq (velosiped, ot)", "To travel on a bike or a horse.", "Children ride bikes in the park.", "Bolalar parkda velosiped minishadi."),
      w("🎫", "take", "teɪk|teyk", "fe'l", "(Transportga) o'tirmoq; olmoq", "To use a bus, train or taxi.", "We take the metro to the centre.", "Markazga metroda boramiz."),
      w("🧳", "travel", "ˈtrævl|trevl", "fe'l", "Sayohat qilmoq", "To go to other places or countries.", "My parents travel a lot.", "Ota-onam ko'p sayohat qilishadi."),
      w("🚪", "leave", "liːv|liiv", "fe'l", "Ketmoq, jo'nab ketmoq", "To go away from a place.", "We leave home at seven.", "Uydan soat yettida chiqamiz."),
      w("🏁", "arrive", "əˈraɪv|arayv", "fe'l", "Yetib kelmoq", "To get to a place.", "We arrive in Bukhara at noon.", "Buxoroga tushda yetib boramiz."),
      w("⏳", "wait", "weɪt|ueyt", "fe'l", "Kutmoq", "To stay until something happens.", "I wait for the bus for ten minutes.", "Avtobusni o'n daqiqa kutaman."),
      w("🛩️", "fly", "flaɪ|flay", "fe'l", "Uchmoq (samolyotda)", "To travel by plane.", "We fly to Istanbul every summer.", "Har yozda Istanbulga uchamiz."),
      w("🏃", "catch", "kætʃ|kech", "fe'l", "Ulgurmoq (transportga)", "To get on a bus or train in time.", "I catch the bus at eight.", "Soat sakkizdagi avtobusga ulguraman."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🚫", "don't", "dəʊnt|dount", "yordamchi fe'l", "…ma(y)man (inkor)", "Do not: I / you / we / they don't…", "I don't like the metro.", "Men metroni yoqtirmayman."),
      w("⛔", "doesn't", "ˈdʌznt|daznt", "yordamchi fe'l", "…maydi (inkor: he/she/it)", "Does not: he / she / it doesn't…", "She doesn't drive.", "U mashina haydamaydi."),
      w("🌄", "far", "fɑː|faa", "sifat / ravish", "Uzoq", "Not near.", "My school isn't far from here.", "Maktabim bu yerdan uzoq emas."),
      w("🗺️", "journey", "ˈdʒɜːni|jyoni", "ot", "Yo'l, safar", "Going from one place to another.", "The journey to work is long.", "Ishga yo'l uzoq."),
      w("📏", "kilometre", "ˈkɪləmiːtə|kilomiita", "ot", "Kilometr", "1,000 metres.", "The station is one kilometre from my house.", "Vokzal uyimdan bir kilometr uzoqlikda."),
      w("🚦", "traffic", "ˈtræfɪk|trefik", "ot", "Transport oqimi, tirbandlik", "All the cars and buses on the road.", "There is a lot of traffic in the morning.", "Ertalab tirbandlik ko'p."),
      w("🛣️", "road", "rəʊd|roud", "ot", "Yo'l", "Cars and buses go on it.", "This road goes to Samarkand.", "Bu yo'l Samarqandga boradi."),
      w("🏘️", "street", "striːt|striit", "ot", "Ko'cha", "A road in a town with houses.", "I live on Navoi Street.", "Navoiy ko'chasida yashayman."),
      w("🎯", "centre", "ˈsentə|senta", "ot", "Markaz", "The middle part of a city.", "The museum is in the city centre.", "Muzey shahar markazida."),
      w("📆", "every day", "ˌevri ˈdeɪ|evri dey", "ibora", "Har kuni", "On all days.", "I study English every day.", "Har kuni ingliz tilini o'rganaman."),
    ],
  },
];

const DONT = ["don't", "doesn't"];

const COMMUTE = `How do people in our office get to work?
Kamola lives in Chilanzar. She doesn't drive — she takes the metro. Her journey is twenty-five minutes.
Sardor lives near the office. He doesn't take the bus. He walks — it's only one kilometre.
Mr Usmonov lives far from the city centre. He drives to work, but he doesn't like the traffic. His journey is one hour!
Nilufar and her husband live in Yunusabad. They don't have a car. They take a taxi every day.
And our boss? He doesn't come to the office. He works at home!`;
const read = reading(COMMUTE);

const STATION = `Excuse me, does this train go to Bukhara?
No, it doesn't. This train goes to Samarkand. The Bukhara train leaves from platform three.
What time does it leave?
At eleven o'clock. You have twenty minutes.
Great. And how long is the journey?
About four hours. It arrives at three.
Thank you! Oh, I don't have a ticket. Where can I buy one?
The ticket office is next to the café.`;
const hear = hearing(STATION);

export const A1_11_EXERCISES: SeedExercise[] = [
  {
    title: "Transport",
    skill: "Tinglash",
    kind: "listen",
    instructions: "So'z o'qiladi. Eshitganingizni toping.",
    questions: [
      listen("train", ["train", "rain", "plane", "trip"]),
      listen("plane", ["plan", "plane", "play", "train"]),
      listen("boat", ["bought", "boot", "boat", "bus"]),
      listen("airport", ["airport", "passport", "sport", "report"]),
      listen("walk", ["walk", "work", "wake", "week"], "walk [uook] — work [uyok]: ular farq qiladi!"),
      listen("drive", ["drive", "ride", "five", "arrive"]),
      listen("leave", ["live", "leave", "love", "life"], "live [liv] — leave [liiv]: qisqa va cho'ziq «i»."),
      listen("doesn't", ["doesn't", "don't", "isn't", "didn't"]),
      listen("journey", ["journey", "journal", "Germany", "turkey"]),
      listen("traffic", ["traffic", "terrific", "fabric", "trip"]),
    ],
  },
  {
    title: "Qanday borasiz?",
    skill: "Rasm",
    kind: "picture",
    instructions: "Rasmga qarang va mos so'zni toping.",
    questions: [
      pick("🚌", ["bus", "train", "taxi", "metro"], 0),
      pick("🚆", ["bus", "train", "plane", "boat"], 1),
      pick("🚇", ["taxi", "plane", "metro", "bus stop"], 2),
      pick("⛵", ["plane", "car", "train", "boat"], 3),
      pick("🚶", ["on foot", "by bus", "by car", "by taxi"], 0),
      pick("🛫", ["station", "airport", "bus stop", "centre"], 1),
      pick("🚏", ["station", "airport", "bus stop", "road"], 2),
      pick("🚦", ["road", "street", "journey", "traffic"], 3),
      pick("🚕", ["taxi", "bus", "car", "metro"], 0),
      pick("🚉", ["airport", "station", "street", "bus stop"], 1),
    ],
  },
  {
    title: "don't yoki doesn't?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "I, you, we, they — don't; he, she, it — doesn't.",
    questions: [
      pick("I ___ drive.", DONT, 0),
      pick("She ___ take the metro.", DONT, 1),
      pick("We ___ live in the centre.", DONT, 0),
      pick("My brother ___ like the bus.", DONT, 1),
      pick("They ___ have a car.", DONT, 0),
      pick("The train ___ stop here.", DONT, 1, "The train = it → doesn't."),
      pick("You ___ need a ticket for the boat.", DONT, 0),
      pick("Mr Usmonov ___ walk to work.", DONT, 1),
      pick("My parents ___ travel by plane.", DONT, 0),
      pick("This bus ___ go to the airport.", DONT, 1),
    ],
  },
  {
    title: "Inkor gapga o'giring",
    skill: "Grammatika",
    kind: "type",
    instructions: "Gapni inkor shaklga o'giring. doesn't dan keyin fe'l -s siz: She drives → She doesn't drive.",
    questions: written([
      ["I drive to work.", "I don't drive to work.|I do not drive to work."],
      ["She takes the metro.", "She doesn't take the metro.|She does not take the metro."],
      ["We live near the station.", "We don't live near the station.|We do not live near the station."],
      ["He walks to school.", "He doesn't walk to school.|He does not walk to school."],
      ["They travel a lot.", "They don't travel a lot.|They do not travel a lot."],
      ["The bus goes to the airport.", "The bus doesn't go to the airport.|The bus does not go to the airport."],
      ["My sister rides a bike.", "My sister doesn't ride a bike.|My sister does not ride a bike."],
      ["I like the traffic.", "I don't like the traffic.|I do not like the traffic."],
      ["He has a car.", "He doesn't have a car.|He does not have a car.", "has → doesn't have."],
      ["The train arrives at six.", "The train doesn't arrive at six.|The train does not arrive at six."],
    ]),
  },
  {
    title: "by yoki on?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Transport bilan — by: by bus, by car, by plane. Piyoda — on foot.",
    questions: [
      say("I go to work ___ bus.", ["by", "on", "with", "in"]),
      say("We go to school ___ foot.", ["on", "by", "with", "at"]),
      say("They travel to London ___ plane.", ["by", "on", "in", "with"]),
      say("She comes to the office ___ metro.", ["by", "on", "at", "with"]),
      say("Do you go home ___ taxi?", ["by", "on", "at", "for"]),
      say("He goes to the village ___ car.", ["by", "on", "at", "to"]),
      say("I get to university ___ foot. It's near.", ["on", "by", "at", "in"]),
      say("We go to the island ___ boat.", ["by", "on", "at", "to"]),
      say("I wait ___ the bus at the bus stop.", ["for", "to", "by", "on"], "wait for — …ni kutmoq."),
      say("The airport is far ___ the city.", ["from", "to", "by", "on"], "far from — …dan uzoq."),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Chap va o'ng tomonni ulang.",
    questions: pairs([
      ["drive|a car", "ride|a bike", "take|a taxi", "catch|the bus"],
      ["leave|ketmoq", "arrive|yetib kelmoq", "wait|kutmoq", "travel|sayohat qilmoq"],
      ["by bus|avtobusda", "on foot|piyoda", "by plane|samolyotda", "by metro|metroda"],
      ["I drive|I don't drive", "she drives|she doesn't drive", "we walk|we don't walk", "he has|he doesn't have"],
      ["station|vokzal", "airport|aeroport", "bus stop|avtobus bekati", "centre|markaz"],
      ["far|uzoq", "road|yo'l", "street|ko'cha", "journey|safar"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("She *don't drive.", "She bilan — doesn't."),
      mistake("I *doesn't like the metro.", "I bilan — don't."),
      mistake("He doesn't *walks to work.", "doesn't dan keyin -s siz: He doesn't walk."),
      mistake("I go to work *with bus.", "Transport — by: by bus."),
      mistake("We go to school *by foot.", "Piyoda — on foot."),
      mistake("They *not have a car.", "Inkor: They don't have a car."),
      mistake("The train doesn't *stops here.", "doesn't stop."),
      mistake("The airport is far *of the city.", "far from the city."),
      mistake("I wait *the bus every morning.", "wait for: I wait for the bus."),
      mistake("My father *isn't drive.", "Present Simple inkori — doesn't: My father doesn't drive."),
    ],
  },
  {
    title: "Suhbatni davom ettiring",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("How do you get to work?", ["I take the metro.", "I'm take the metro.", "By metro I go take.", "I takes the metro."]),
      say("Do you drive?", ["No, I don't. I haven't got a car.", "No, I not.", "No, I doesn't.", "No, I'm not drive."]),
      say("Is your school far from here?", ["No, it isn't. I walk there.", "No, it doesn't.", "No, I walk.", "No, it don't."]),
      say("How long is your journey?", ["About twenty minutes.", "Twenty kilometres long minutes.", "It's by bus.", "At eight o'clock."]),
      say("Does your sister take the bus?", ["No, she doesn't. She rides a bike.", "No, she don't.", "No, she isn't.", "No, she doesn't rides."]),
      say("What time does the train leave?", ["At half past nine.", "It leaves on foot.", "From platform nine.", "Nine kilometres."]),
      say("Excuse me, does this bus go to the airport?", ["No, it doesn't. Take bus 67.", "No, it isn't.", "No, I don't.", "Yes, it goes airport."]),
      say("Why are you late?", ["Sorry! The traffic is terrible today.", "I don't late.", "Because bus.", "I'm not traffic."]),
      say("Let's take a taxi.", ["Good idea!", "No, I don't taxi.", "Yes, I take.", "Taxi is take."]),
      say("Do you travel a lot?", ["Yes, I do. I fly to Istanbul every summer.", "Yes, I travel a lot do.", "Yes, I does.", "Yes, I'm travel."]),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "I don't drive.",
      "She doesn't take the metro.",
      "We go to work by bus.",
      "He walks to school every day.",
      "The train leaves at seven.",
      "My parents don't have a car.",
      "The airport is far from the city.",
      "I wait for the bus at the bus stop.",
      "This bus doesn't go to the centre.",
      "We travel to Bukhara by train.",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: written([
      ["I ___ drive. I haven't got a car.", "don't"],
      ["She ___ like the metro.", "doesn't"],
      ["We go to the village ___ car.", "by"],
      ["I go to school on ___.", "foot"],
      ["He doesn't ___ to work. He drives. (walk)", "walk"],
      ["The train ___ at nine and arrives at one.", "leaves"],
      ["I wait ___ the bus every morning.", "for"],
      ["The airport isn't near. It's ___ from the city.", "far"],
      ["Planes leave and arrive at the ___.", "airport"],
      ["There is a lot of ___ on the roads in the morning.", "traffic"],
    ]),
  },
  {
    title: "Ishga qanday boramiz?",
    skill: "Matn bilan ishlash",
    kind: "reading",
    instructions: "Matnni diqqat bilan o'qing va har bir savolga javob bering.",
    questions: [
      read("How does Kamola get to work?", ["By metro", "By car", "On foot", "By taxi"]),
      read("How long is Kamola's journey?", ["Twenty-five minutes", "One hour", "Ten minutes", "The text doesn't say."]),
      read("Where does Sardor live?", ["Near the office", "In Chilanzar", "Far from the centre", "In Yunusabad"]),
      read("How does Sardor get to work?", ["He walks.", "He takes the bus.", "He drives.", "He takes a taxi."]),
      read("Does Mr Usmonov like the traffic?", ["No, he doesn't.", "Yes, he does.", "Yes, very much.", "The text doesn't say."]),
      read("How long is Mr Usmonov's journey?", ["One hour", "Twenty-five minutes", "One kilometre", "Two hours"]),
      read("Have Nilufar and her husband got a car?", ["No, they haven't.", "Yes, they have.", "Yes, two cars.", "The text doesn't say."]),
      read("How do Nilufar and her husband get to work?", ["By taxi", "By metro", "By bus", "On foot"]),
      read("Where does the boss work?", ["At home", "In the office", "In the city centre", "The text doesn't say."]),
      read("Who drives to work?", ["Mr Usmonov", "Kamola", "Sardor", "Nilufar"]),
    ],
  },
  {
    title: "Vokzalda",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Yo'lovchi qayerga bormoqchi?", ["Buxoroga", "Samarqandga", "Toshkentga", "Xivaga"]),
      hear("Bu poyezd qayerga boradi?", ["Samarqandga", "Buxoroga", "Toshkentga", "Aytilmagan"]),
      hear("Buxoro poyezdi qaysi platformadan jo'naydi?", ["3", "2", "11", "4"]),
      hear("Buxoro poyezdi soat nechada jo'naydi?", ["11:00 da", "3:00 da", "10:00 da", "4:00 da"]),
      hear("Yo'lovchining qancha vaqti bor?", ["20 daqiqa", "4 soat", "11 daqiqa", "3 soat"]),
      hear("Yo'l qancha davom etadi?", ["Taxminan 4 soat", "20 daqiqa", "3 soat", "11 soat"]),
      hear("Poyezd soat nechada yetib boradi?", ["3:00 da", "11:00 da", "4:00 da", "1:00 da"]),
      hear("Yo'lovchida nima yo'q?", ["Chipta", "Pasport", "Pul", "Sumka"]),
      hear("Chipta kassasi qayerda?", ["Kafe yonida", "3-platformada", "Kafe ichida", "Poyezd yonida"]),
      hear("«Does this train go to Bukhara?» savoliga javob?", ["No, it doesn't.", "Yes, it does.", "No, it isn't.", "No, I don't."]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "I don't drive.",
      "She doesn't take the metro.",
      "I go to work by bus.",
      "I walk to school.",
      "The train leaves at seven.",
      "The airport is far from the city.",
      "Let's take a taxi.",
      "Excuse me, does this bus go to the centre?",
      "walk",
      "work",
    ]),
  },
];
