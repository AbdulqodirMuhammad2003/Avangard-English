/**
 * A2, 20-dars — «Safarlar». Transport iboralari (take the train, miss the bus,
 * go on foot), shahar bo'ylab yurish, vokzalda chipta olish.
 * Grammatika: should / shouldn't (maslahat), have to / don't have to
 * (majburiyat va zarurat yo'qligi).
 * Navigate A2, 8.2–8.4 asosida: tinglash mashqlarida kitob treklari (yopiq
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
  say,
  sentences,
  slots,
  trueFalse,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-a2/audio/${n}.mp3`;

export const A2_20_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🚆", "take the train", "ˌteɪk ðə ˈtreɪn|teyk za treyn", "ibora", "Poyezdda bormoq", "Travel by train.", "I usually take the train to Samarkand.", "Samarqandga odatda poyezdda boraman."),
      w("🚕", "get a taxi", "ˌɡet ə ˈtæksi|get a teksi", "ibora", "Taksi olmoq, taksida ketmoq", "Travel by taxi.", "It's late — let's get a taxi.", "Kech bo'ldi — taksi olaylik."),
      w("🚇", "the underground", "ði ˈʌndəɡraʊnd|zi andagraund", "ibora", "Metro", "Trains that go under a city.", "The underground in Tashkent is beautiful.", "Toshkent metrosi chiroyli."),
      w("🏃‍♀️", "miss the bus", "ˌmɪs ðə ˈbʌs|mis za bas", "ibora", "Avtobusga ulgurmay qolmoq", "Arrive too late to get on the bus.", "Hurry up or we'll miss the bus!", "Tezroq bo'l, bo'lmasa avtobusga ulgurmaymiz!"),
      w("🚶", "go on foot", "ˌɡəʊ ɒn ˈfʊt|gou on fut", "ibora", "Piyoda bormoq", "Walk.", "I go on foot because it's close.", "Yaqin bo'lgani uchun piyoda boraman."),
      w("🚲", "go by bike", "ˌɡəʊ baɪ ˈbaɪk|gou bay bayk", "ibora", "Velosipedda bormoq", "Travel on a bicycle.", "In summer I go by bike.", "Yozda velosipedda boraman."),
      w("🔄", "commute", "kəˈmjuːt|kamyuut", "ot", "Ishga qatnov (yo'li)", "The journey to work and back every day.", "My commute to work takes forty minutes.", "Ishga qatnovim qirq daqiqa oladi."),
      w("⏰", "rush hour", "ˈrʌʃ aʊə|rash aua", "ibora", "Tig'iz vaqt (ish boshlanishi/tugashi)", "The busy time when people go to and from work.", "The buses are full in rush hour.", "Tig'iz vaqtda avtobuslar to'la bo'ladi."),
      w("🤝", "give someone a lift", "ˌɡɪv ˌsʌmwʌn ə ˈlɪft|giv samwan a lift", "ibora", "Birovni mashinada olib bormoq", "Take a person somewhere in your car.", "It's kind to give someone a lift when it rains.", "Yomg'irda birovni mashinada olib borib qo'yish — yaxshilik."),
      w("🚗", "by car", "baɪ ˈkɑː|bay kaa", "ibora", "Mashinada", "Using a car.", "My dad goes to work by car.", "Dadam ishga mashinada boradi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("⛑️", "helmet", "ˈhelmɪt|helmit", "ot", "Dubulg'a, kaska", "A hard hat that keeps your head safe.", "You have to wear a helmet on a motorbike.", "Mototsiklda dubulg'a kiyish shart."),
      w("🔒", "seat belt", "ˈsiːt belt|siit belt", "ibora", "Xavfsizlik kamari", "A belt in a car or plane that keeps you in your seat.", "Please wear your seat belt.", "Iltimos, xavfsizlik kamaringizni taqing."),
      w("⚖️", "against the law", "əˌɡenst ðə ˈlɔː|agenst za loo", "ibora", "Qonunga zid", "Not allowed by the law.", "It's against the law to drive without a licence.", "Guvohnomasiz mashina haydash qonunga zid."),
      w("🌱", "environment", "ɪnˈvaɪrənmənt|invayranmant", "ot", "Atrof-muhit", "The air, water and land around us.", "Bikes are good for the environment.", "Velosipedlar atrof-muhit uchun foydali."),
      w("❄️", "air-conditioned", "ˈeə kənˌdɪʃnd|ea kandishnd", "sifat", "Konditsionerli", "Kept cool by a machine.", "I like air-conditioned taxis in summer.", "Yozda konditsionerli taksilarni yoqtiraman."),
      w("🤕", "fall off", "ˌfɔːl ˈɒf|fool of", "ibora", "Yiqilib tushmoq (biror narsadan)", "Drop down from a bike, horse, etc.", "Hold the driver so you don't fall off.", "Yiqilib tushmaslik uchun haydovchini ushlang."),
      w("🧭", "get around", "ˌɡet əˈraʊnd|get araund", "ibora", "Shahar bo'ylab yurmoq", "Travel from place to place.", "What's the best way to get around Hanoi?", "Hanoyda yurishning eng yaxshi usuli qaysi?"),
      w("🛍️", "street life", "ˈstriːt laɪf|striit layf", "ibora", "Ko'cha hayoti", "What happens in the streets: people, shops, cafés.", "Walking is the best way to see the street life.", "Ko'cha hayotini ko'rishning eng yaxshi yo'li — piyoda yurish."),
      w("💬", "agree the price", "əˌɡriː ðə ˈpraɪs|agrii za prays", "ibora", "Narxni kelishib olmoq", "Decide the price together before you buy.", "Always agree the price before the journey.", "Yo'lga chiqishdan oldin doim narxni kelishib oling."),
      w("⌛", "delay", "dɪˈleɪ|diley", "ot", "Kechikish", "When something happens later than planned.", "There was a delay of two hours.", "Ikki soatlik kechikish bo'ldi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🛏️", "sleeper", "ˈsliːpə|sliipa", "ot", "Yotoqli vagon (poyezd)", "A train with beds for long night journeys.", "We took the sleeper to Moscow.", "Moskvaga yotoqli poyezdda bordik."),
      w("🛫", "departure", "dɪˈpɑːtʃə|dipaacha", "ot", "Jo'nash", "When a train, bus or plane leaves.", "The departure time is 18.40.", "Jo'nash vaqti 18:40."),
      w("🚉", "leave from", "ˈliːv frəm|liiv from", "ibora", "…dan jo'namoq", "Start a journey at a place.", "The train will leave from platform 7.", "Poyezd 7-platformadan jo'naydi."),
      w("🛬", "arrival", "əˈraɪvl|arayvl", "ot", "Yetib kelish", "When a train, bus or plane comes.", "The arrival time is 11.25 tomorrow morning.", "Yetib kelish vaqti — ertaga ertalab 11:25."),
      w("😤", "complain", "kəmˈpleɪn|kampleyn", "fe'l", "Shikoyat qilmoq", "Say that you are not happy about something.", "Local people often complain about the buses.", "Mahalliy aholi ko'pincha avtobuslardan shikoyat qiladi."),
      w("🗺️", "transport system", "ˈtrænspɔːt ˌsɪstəm|trenspoot sistam", "ibora", "Transport tizimi", "All the buses, trains, etc. in a city or country.", "The transport system in Moscow is very good.", "Moskvaning transport tizimi juda yaxshi."),
      w("💵", "fare", "feə|fea", "ot", "Yo'l haqi", "The money you pay for a journey.", "The bus fare is 2,000 sum.", "Avtobus yo'l haqi 2000 so'm."),
      w("💺", "seat", "siːt|siit", "ot", "O'rindiq", "A place to sit.", "Can I sit in this seat?", "Bu o'rindiqqa o'tirsam bo'ladimi?"),
      w("🚃", "carriage", "ˈkærɪdʒ|kerij", "ot", "Vagon", "One part of a train.", "Our seats are in carriage number five.", "O'rinlarimiz beshinchi vagonda."),
      w("🔀", "change trains", "ˌtʃeɪndʒ ˈtreɪnz|cheynj treynz", "ibora", "Poyezd almashtirmoq", "Get off one train and get on another.", "You have to change trains in Bukhara.", "Buxoroda poyezd almashtirishingiz kerak."),
    ],
  },
];

const GUIDE = `GETTING AROUND TASHKENT
Tashkent is a big city with almost three million people. What's the best way to get around?
THE UNDERGROUND: The metro is fast and cheap, and the stations are beautiful. You don't have to buy a paper ticket — you can pay with a card or your phone. But you shouldn't take it in rush hour if you don't like crowds!
BUSES: There are lots of buses, and the fare is low. You should download a map app, because the bus stops don't always have timetables.
TAXIS: Taxis are comfortable and most of them are air-conditioned. Use an app, or you have to agree the price with the driver before the journey.
ON FOOT: The city centre has wide streets and lots of parks. You don't have to pay anything — but you should wear a hat in summer. It's very hot!`;
const tf = trueFalse(GUIDE);

export const A2_20_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("You should have a map.", ["You should have a map.", "You shouldn't have a map.", "You have to have a map.", "You should have a mop."]),
      listen("You shouldn't take a taxi.", ["You shouldn't take a taxi.", "You should take a taxi.", "You don't have to take a taxi.", "You shouldn't take the taxi."]),
      listen("You have to wear it.", ["You have to wear it.", "You don't have to wear it.", "You have to wear a hat.", "You have to where it."]),
      listen("You don't have to pay.", ["You don't have to pay.", "You have to pay.", "You don't have to play.", "You didn't have to pay."]),
      listen("I missed the bus.", ["I missed the bus.", "I miss the bus.", "I missed the boss.", "I'll miss the bus."]),
      listen("I go to work on foot.", ["I go to work on foot.", "I go to work by bike.", "I go to work on food.", "I go to work by foot."]),
      listen("When's the next train?", ["When's the next train?", "Where's the next train?", "When's the last train?", "When's the next rain?"]),
      listen("Would you like a single or a return?", ["Would you like a single or a return?", "Would you like a single return?", "Would you like a sink or a return?", "Do you like a single or a return?"]),
      listen("Which platform does it leave from?", ["Which platform does it leave from?", "Which platform does it live from?", "Which platform did it leave from?", "Which plan does it leave from?"]),
      listen("air-conditioned", ["air-conditioned", "air condition", "conditioned", "hair-conditioned"]),
    ],
  },
  {
    title: "Five journeys to work",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to five people talking about their journeys to work. Answer the questions. Some questions have TWO correct answers — choose both.",
    questions: [
      hearingTwo(track("8.8"))("How does speaker 1 get to work?", ["by bus", "by underground"], ["by car", "on foot"]),
      hearing(track("8.8"))("How long does speaker 1's journey take?", ["About forty minutes", "About an hour", "About fourteen minutes", "Two hours"]),
      hearingTwo(track("8.8"))("What does speaker 2 say?", ["She usually goes on foot.", "She drives when it's raining."], ["She takes the bus.", "She goes by bike."]),
      hearingTwo(track("8.8"))("What does speaker 3 do in the car?", ["He listens to music.", "He sometimes listens to CDs in English."], ["He reads the news.", "He phones his friends."]),
      hearing(track("8.8"))("Why does speaker 3's journey take an hour?", ["There's a lot of traffic.", "He lives very far away.", "The car is old.", "He stops for coffee."]),
      hearingTwo(track("8.8"))("What does speaker 4 say?", ["She goes by bike.", "She takes the bus when it rains."], ["She hates exercise.", "She goes on foot."]),
      hearingTwo(track("8.8"))("What does speaker 5 say?", ["He usually takes the train.", "Sometimes he misses his train and gets a taxi."], ["He goes by car.", "He never gets up late."]),
      hearing(track("8.8"))("What should speaker 5 do?", ["Get up earlier", "Buy a car", "Go by bike", "Take the bus"]),
    ],
  },
  {
    title: "take, miss or go?",
    skill: "Listening",
    kind: "listengap",
    instructions: "Listen and choose the correct word.",
    questions: [
      gaps(track("8.9"), [
        ["You ___ or get the train, the underground, a taxi or the bus.", "take", "go", "ride"],
        ["You can ___ the bus, your plane or your train.", "miss", "lose", "pass"],
        ["You go ___ foot.", "on", "by", "with"],
        ["You go ___ public transport, by bike or by car.", "by", "on", "with"],
      ]),
    ],
  },
  {
    title: "should or have to?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the best answer.",
    questions: [
      say("It's against the law to ride without a helmet. You ___ wear one.", ["have to", "don't have to", "shouldn't", "should"]),
      say("Walking is free. You ___ pay.", ["don't have to", "have to", "shouldn't", "should"]),
      say("There's a lot of traffic. You ___ take a taxi if you're in a hurry.", ["shouldn't", "have to", "should", "don't have to"]),
      say("It's a good idea to have a map. You ___ have a map.", ["should", "have to", "don't have to", "shouldn't"]),
      say("You ___ start the journey before you agree the price. It's a bad idea.", ["shouldn't", "don't have to", "have to", "should"]),
      say("In Japan you ___ drive on the left. It's the law.", ["have to", "should", "don't have to", "shouldn't"]),
      say("She ___ get up early tomorrow. It's Sunday!", ["doesn't have to", "don't have to", "hasn't to", "shouldn't to"]),
      say("He ___ wear a uniform at work. It's a rule.", ["has to", "have to", "should to", "must to"]),
      say("You ___ drink a lot of coffee on long journeys. It's bad for your sleep.", ["shouldn't", "don't have to", "have to", "has to"]),
      say("___ I have to buy a ticket on the bus?", ["Do", "Should", "Have", "Am"]),
    ],
  },
  {
    title: "Life in Moscow",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to two friends talking about living in Moscow. Answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("8.14"))("How long is the first speaker going to Moscow for?", ["Two months", "Two weeks", "Three years", "Two years"]),
      hearing(track("8.14"))("How long did the second speaker live there?", ["Three years", "Two months", "A few weeks", "Ten years"]),
      hearingTwo(track("8.14"))("What can the second speaker do in Russian?", ["Buy things in shops", "Order food in restaurants"], ["Read the newspapers", "Teach lessons"]),
      hearingTwo(track("8.14"))("What does the speaker say about the Underground?", ["It was built in the 1930s.", "Every station is a work of art."], ["It's very expensive.", "It's always empty."]),
      hearing(track("8.14"))("What do local people do about the Underground?", ["They complain about it a lot.", "They never use it.", "They love it.", "They walk instead."]),
      hearing(track("8.14"))("What are the buses like?", ["They're usually full.", "They're always late.", "They're new.", "They're free."]),
      hearing(track("8.14"))("Why did the speaker often get taxis?", ["To go to lessons and not be late", "Because the buses were dirty", "Because taxis were cheap", "To go to the airport"]),
      hearing(track("8.14"))("What great thing can you do in Moscow?", ["Stop any car in the street and pay for a lift", "Use the Underground for free", "Rent a bike anywhere", "Take a boat to work"]),
    ],
  },
  {
    title: "At the train station",
    skill: "Listening",
    kind: "listengap",
    instructions: "A man buys a train ticket in India. Listen and choose the correct answer.",
    questions: [
      gaps(track("8.16"), [
        ["I need to get to New ___.", "Delhi", "York", "Town"],
        ["The next one leaves at ___ p.m.", "18.40", "18.14", "8.40"],
        ["It takes about ___ hours.", "seventeen", "seven", "seventy"],
        ["It arrives at ___ tomorrow.", "11.25 a.m.", "11.25 p.m.", "12.25 a.m."],
        ["How much is a ___ ticket?", "sleeper", "cheap", "first-class"],
        ["Would you like a single or a ___?", "return", "double", "sleeper"],
        ["Just a ___, please.", "single", "return", "sleeper"],
        ["That's ___ rupees.", "775", "757", "577"],
        ["It leaves from platform ___.", "7", "17", "11"],
      ]),
    ],
  },
  {
    title: "Advice for New Zealand",
    skill: "Listening",
    kind: "listengap",
    instructions: "Listen to six pieces of advice for visitors to New Zealand. Choose what you hear.",
    questions: [
      gaps(track("8.18"), [
        ["You ___ leave a tip in restaurants.", "don't have to", "have to", "should"],
        ["You ___ forget your umbrella.", "shouldn't", "don't have to", "have to"],
        ["Australians ___ have a visa to visit.", "don't have to", "shouldn't", "have to"],
        ["You ___ go to Myers Park at night.", "shouldn't", "don't have to", "should"],
        ["You ___ get a student visa to study for more than 3 months.", "have to", "don't have to", "shouldn't"],
        ["You ___ visit the islands in the Hauraki Gulf.", "should", "shouldn't", "don't have to"],
      ]),
    ],
  },
  {
    title: "A bus ticket",
    skill: "Listening",
    kind: "listenmatch",
    instructions: "Listen to a woman buying a bus ticket. Write the information. Numbers and times can be in any form (4.00, 4:00, four).",
    questions: [
      slots(track("8.19"), [
        ["1. To", "Manchester"],
        ["2. Next bus at", "4.00;4;4:00;four;four o'clock"],
        ["3. Ticket (single / return)", "return;a return"],
        ["4. Coming back", "next Sunday;Sunday"],
        ["5. Price (£)", "32;£32;32 pounds;thirty-two"],
        ["6. Journey time", "2 hours 45 minutes;two hours 45 minutes;2 hours and 45 minutes;two hours forty-five minutes;2h 45;2 h 45 min"],
        ["7. Leaves from bay", "6;six;bay 6;bay six"],
      ]),
    ],
  },
  {
    title: "Getting around Tashkent",
    skill: "Reading",
    kind: "truefalse",
    instructions: "Read the guide. Are the sentences true or false?",
    questions: [
      tf("The metro is fast and cheap.", true),
      tf("You have to buy a paper ticket for the metro.", false, "You can pay with a card or your phone."),
      tf("The writer thinks the metro is good in rush hour.", false, "You shouldn't take it in rush hour if you don't like crowds."),
      tf("The bus fare is expensive.", false, "The fare is low."),
      tf("You should download a map app for the buses.", true),
      tf("All bus stops have timetables.", false, "They don't always have timetables."),
      tf("Most taxis are air-conditioned.", true),
      tf("Without an app, you have to agree the price with the driver.", true),
      tf("Walking is free.", true),
      tf("You should wear a hat in summer.", true),
    ],
  },
  {
    title: "At the ticket office",
    skill: "Conversation",
    kind: "dialog",
    instructions: "You are buying a ticket. Choose the best answer.",
    questions: [
      say("Hello. Can I help you?", ["Yes, please. I need to get to Samarkand.", "Yes, you can help.", "No, I'm just looking.", "Hello. I help you."]),
      say("When would you like to travel?", ["Later today or tomorrow.", "By train.", "Two hours.", "Platform 3."]),
      say("The next train leaves at 15.20.", ["OK. How long does it take?", "OK. How long does it leave?", "OK. How much long?", "OK. When's it take?"]),
      say("About two hours.", ["Right. How much is a ticket?", "Right. How many is a ticket?", "Right. How much tickets?", "Right. What cost?"]),
      say("Would you like a single or a return?", ["A return, please.", "A returning, please.", "A single return.", "Yes, please."]),
      say("And when would you like to come back?", ["Next Sunday.", "Last Sunday.", "By bus.", "From platform 2."]),
      say("That's 180,000 sum, please.", ["Can I pay by card?", "Can I pay with card?", "Can I card?", "How much?"]),
      say("Here's your ticket.", ["Thanks. Which platform does it leave from?", "Thanks. Which platform it leaves?", "Thanks. Where does it leave?", "Thanks. Which platform leave from?"]),
      say("Platform 3. It's just over there.", ["Thank you very much.", "You're welcome.", "Me too.", "Over where?"]),
      say("Have a good journey!", ["Thanks!", "You too!", "Yes, I have.", "No, thanks."]),
    ],
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("You should *to have a map.", "should + verb, no to."),
      mistake("She *have to wear a helmet.", "she → has to."),
      mistake("You *don't should take a taxi.", "Negative: shouldn't."),
      mistake("He *doesn't has to pay.", "doesn't have to."),
      mistake("I go to work *by foot.", "on foot."),
      mistake("I *lost the bus this morning.", "miss the bus."),
      mistake("You go *with bike.", "by bike."),
      mistake("Which platform does it *leaves from?", "After does: leave."),
      mistake("*Do I should buy a ticket?", "Should I buy…?"),
      mistake("It's *against of the law.", "against the law."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "You should have a map of the city.",
      "You shouldn't take a taxi in rush hour.",
      "You have to wear a helmet.",
      "You don't have to pay to see the city.",
      "I usually take the train to work.",
      "Sometimes I miss my train.",
      "When's the next train?",
      "How long does it take?",
      "Would you like a single or a return?",
      "Which platform does it leave from?",
    ]),
  },
  {
    title: "Find the pairs",
    skill: "Matching",
    kind: "match",
    instructions: "Match the words.",
    questions: pairs([
      ["take|the train", "miss|the bus", "go|on foot", "go by|bike"],
      ["should|a good idea", "shouldn't|a bad idea", "have to|it's necessary", "don't have to|it's not necessary"],
      ["seat|belt", "rush|hour", "street|life", "transport|system"],
      ["departure|leaving", "arrival|coming", "fare|money for a journey", "delay|being late"],
      ["single|one way", "return|there and back", "platform|where you get on the train", "carriage|part of a train"],
    ]),
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself.",
    questions: phrases([
      "You should have a map.",
      "You shouldn't take a taxi.",
      "You have to wear it.",
      "You don't have to pay.",
      "When's the next train?",
      "A return, please.",
      "Which platform does it leave from?",
      "environment",
      "air-conditioned",
      "departure",
    ]),
  },
];
