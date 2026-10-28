/**
 * A2, 23-dars — «Ob-havo». Ob-havo so'zlari (ot / fe'l / sifat: snow — to snow
 * — snowy), ob-havo ma'lumoti, iqlim; shahar va hayvonlarni taqqoslash.
 * Grammatika: sifatlarning qiyosiy darajasi — -er / -ier / more … than,
 * good → better, bad → worse.
 * Navigate A2, 10.1 asosida: tinglash mashqlarida kitob treklari (yopiq
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
  trueFalse,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-a2/audio/${n}.mp3`;

export const A2_23_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🥶", "freezing", "ˈfriːzɪŋ|friizing", "sifat", "Qahraton, juda sovuq", "Very, very cold.", "It's freezing here today.", "Bugun bu yerda qahraton sovuq."),
      w("🧊", "icy", "ˈaɪsi|aysi", "sifat", "Muzlagan, muz qoplagan", "Covered with ice.", "The roads are very icy.", "Yo'llar juda muzlagan."),
      w("🌩️", "thunder", "ˈθʌndə|sanda", "ot", "Momaqaldiroq", "The loud noise in a storm.", "There was very loud thunder last night.", "Kecha kechasi juda kuchli momaqaldiroq bo'ldi."),
      w("🌨️", "snowy", "ˈsnəʊi|snoui", "sifat", "Qorli", "With a lot of snow.", "It was a cold, snowy day.", "Sovuq, qorli kun edi."),
      w("🌧️", "rainy", "ˈreɪni|reyni", "sifat", "Yomg'irli", "With a lot of rain.", "Spring is the rainy season here.", "Bu yerda bahor — yomg'irli fasl."),
      w("📺", "weather forecast", "ˈweðə ˌfɔːkɑːst|weza fookaast", "ibora", "Ob-havo ma'lumoti", "What TV or radio says the weather will be.", "Let's check the weather forecast for tomorrow.", "Ertangi ob-havo ma'lumotini ko'raylik."),
      w("🌡️", "degrees", "dɪˈɡriːz|digriiz", "ot", "Daraja (harorat)", "The unit for temperature (°).", "It's 38 degrees in Tashkent today.", "Bugun Toshkentda 38 daraja."),
      w("°C", "Celsius", "ˈselsiəs|selsias", "ot", "Selsiy", "The temperature scale where water freezes at 0°.", "Temperatures are around 20 degrees Celsius.", "Harorat 20 daraja selsiy atrofida."),
      w("➖", "minus", "ˈmaɪnəs|maynas", "ot", "Minus", "Below zero.", "In Moscow it's minus fourteen today.", "Bugun Moskvada minus o'n to'rt."),
      w("💦", "humid", "ˈhjuːmɪd|hyuumid", "sifat", "Nam, dim (havo)", "Hot and wet in the air.", "Malaysia is very hot and humid.", "Malayziya juda issiq va nam."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🔥", "heatwave", "ˈhiːtweɪv|hiitweyv", "ot", "Jazirama (issiq to'lqini)", "A time of very hot weather.", "There was a heatwave in July.", "Iyulda jazirama bo'ldi."),
      w("❄️", "frost", "frɒst|frost", "ot", "Ayoz, qirov", "Thin white ice on the ground when it's very cold.", "There was frost on the car this morning.", "Bugun ertalab mashina ustida qirov bor edi."),
      w("⬇️", "below zero", "bɪˌləʊ ˈzɪərəʊ|bilou ziarou", "ibora", "Noldan past", "Colder than 0°C.", "At night it's often below zero in January.", "Yanvarda kechasi ko'pincha noldan past bo'ladi."),
      w("☀️", "boiling", "ˈbɔɪlɪŋ|boyling", "sifat", "Jazirama, o'ta issiq", "Very, very hot.", "It's boiling today! Let's go to the pool.", "Bugun o'ta issiq! Basseynga boraylik."),
      w("🌤️", "mild", "maɪld|mayld", "sifat", "Mo'tadil, iliq", "Not too cold and not too hot.", "The winter here is quite mild.", "Bu yerda qish ancha mo'tadil."),
      w("🍃", "breeze", "briːz|briiz", "ot", "Shabada", "A light, nice wind.", "There's a nice breeze by the sea.", "Dengiz bo'yida yoqimli shabada bor."),
      w("🧣", "chilly", "ˈtʃɪli|chili", "sifat", "Salqin, sovuqroq", "A bit cold.", "It's a bit chilly — take a jacket.", "Biroz salqin — kurtka ol."),
      w("☁️", "cloud", "klaʊd|klaud", "ot", "Bulut", "A white or grey shape in the sky.", "There isn't a cloud in the sky.", "Osmonda birorta ham bulut yo'q."),
      w("🌨️", "snowstorm", "ˈsnəʊstɔːm|snoustoom", "ot", "Qor bo'roni", "A storm with a lot of snow and wind.", "The airport closed because of a snowstorm.", "Qor bo'roni tufayli aeroport yopildi."),
      w("🌞", "sunshine", "ˈsʌnʃaɪn|sanshayn", "ot", "Quyosh nuri", "The light and warmth of the sun.", "Uzbekistan has a lot of sunshine.", "O'zbekistonda quyoshli kunlar ko'p."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🌍", "climate", "ˈklaɪmət|klaymat", "ot", "Iqlim", "The usual weather in a place.", "Siberia has a very cold climate.", "Sibirning iqlimi juda sovuq."),
      w("🌧️", "wet season", "ˈwet ˌsiːzn|wet siizn", "ibora", "Yomg'irli mavsum", "The months with a lot of rain.", "We went to Malaysia in the wet season.", "Malayziyaga yomg'irli mavsumda bordik."),
      w("🏜️", "dry season", "ˈdraɪ ˌsiːzn|dray siizn", "ibora", "Quruq mavsum", "The months with little or no rain.", "The dry season is the best time to visit.", "Quruq mavsum — borish uchun eng yaxshi vaqt."),
      w("🤏", "slightly", "ˈslaɪtli|slaytli", "ravish", "Biroz, sal", "A little.", "Canada is slightly bigger than the USA.", "Kanada AQShdan biroz kattaroq."),
      w("↔️", "different from", "ˈdɪfrənt frəm|difrant from", "ibora", "…dan farq qiladi", "Not the same as.", "The weather in Tashkent is very different from London.", "Toshkent ob-havosi Londonnikidan juda farq qiladi."),
      w("🐘", "elephant", "ˈelɪfənt|elifant", "ot", "Fil", "A very big grey animal with a long nose.", "An African elephant is heavier than an Indian one.", "Afrika fili Hindiston filidan og'irroq."),
      w("🦒", "giraffe", "dʒəˈrɑːf|jiraaf", "ot", "Jirafa", "An animal with a very long neck.", "A giraffe can run faster than a person.", "Jirafa odamdan tezroq yugura oladi."),
      w("⚖️", "weigh", "weɪ|wey", "fe'l", "Og'irligi … bo'lmoq; tortmoq", "Be a certain weight.", "How much does an elephant weigh?", "Filning og'irligi qancha?"),
      w("🧭", "the North Pole", "ðə ˌnɔːθ ˈpəʊl|za noos poul", "ibora", "Shimoliy qutb", "The point furthest north on Earth.", "The North Pole is warmer than the South Pole.", "Shimoliy qutb Janubiy qutbdan iliqroq."),
      w("📐", "area", "ˈeəriə|earia", "ot", "Maydon, hudud", "The size of a place; a part of a place.", "Canada has a bigger area than the USA.", "Kanadaning maydoni AQShnikidan kattaroq."),
    ],
  },
];

const TEXT = `TWO CITIES, TWO CLIMATES
My name is Nodira. I'm from Tashkent, but last year I studied in London for six months. The weather was very different from home!
In Tashkent, summers are much hotter than in London — sometimes it's 40 degrees. London summers are milder and wetter. In London it rains a lot, but the rain is usually light. In Tashkent the rain is heavier, but it doesn't rain very often.
Winters in Tashkent are colder and snowier, and it's often below zero at night. London winters are warmer, but they are darker: in December the sun goes down before four o'clock!
Which do I prefer? Tashkent, of course. There's more sunshine — and the fruit is better!`;
const tf = trueFalse(TEXT);

export const A2_23_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen. Choose what you hear.",
    questions: [
      listen("It's freezing today.", ["It's freezing today.", "It's breezy today.", "It was freezing today.", "It's freezing tonight."]),
      listen("The roads are very icy.", ["The roads are very icy.", "The roads are very busy.", "The road is very icy.", "The roads were very icy."]),
      listen("Dublin is wetter than Paris.", ["Dublin is wetter than Paris.", "Dublin is better than Paris.", "Dublin is wetter in Paris.", "Dublin was wetter than Paris."]),
      listen("Is Sydney bigger than Cairo?", ["Is Sydney bigger than Cairo?", "Is Sydney big as Cairo?", "Is Sydney bigger then Cairo?", "Was Sydney bigger than Cairo?"]),
      listen("Tokyo is more expensive than Singapore.", ["Tokyo is more expensive than Singapore.", "Tokyo is most expensive than Singapore.", "Tokyo is expensive than Singapore.", "Tokyo is more expensive in Singapore."]),
      listen("The nights are colder than the days.", ["The nights are colder than the days.", "The nights are cold in the days.", "The night is colder than the day.", "The nights were colder than the days."]),
      listen("It's cold and foggy now.", ["It's cold and foggy now.", "It's cold and frosty now.", "It's cloudy and foggy now.", "It was cold and foggy now."]),
      listen("thunder and lightning", ["thunder and lightning", "thunder and lighting", "under the lightning", "thunder and rain"]),
      listen("twenty degrees Celsius", ["twenty degrees Celsius", "twelve degrees Celsius", "twenty degrees", "twenty-two degrees Celsius"]),
      listen("slightly bigger", ["slightly bigger", "slightly better", "slowly bigger", "lightly bigger"]),
    ],
  },
  {
    title: "Three weather reports",
    skill: "Listening",
    kind: "listengap",
    instructions: "Listen to three people talking about the weather: in Lisbon, in Malaysia and in Chicago. Choose the correct word for each sentence.",
    questions: [
      gaps(track("10.1"), [
        ["Lisbon: It's ___ this morning…", "cloudy", "sunny", "foggy"],
        ["… but ___, and we don't expect any rain.", "dry", "wet", "cold"],
        ["By the afternoon it's going to be ___ and sunny.", "warm", "hot", "cold"],
        ["Temperatures are around ___ degrees Celsius.", "20", "12", "30"],
        ["Malaysia: We went in the ___ season.", "wet", "dry", "cold"],
        ["… so we had some ___.", "storms", "snow", "fog"],
        ["The first night it was really ___.", "windy", "sunny", "foggy"],
        ["There was a big storm with very loud ___ and lightning.", "thunder", "rain", "wind"],
        ["Chicago: It's ___ here today.", "freezing", "warm", "windy"],
        ["There was a lot of ___ last night.", "snow", "rain", "fog"],
        ["… and the roads are very ___.", "icy", "wet", "busy"],
        ["It's cold and ___ now.", "foggy", "sunny", "dry"],
      ]),
    ],
  },
  {
    title: "Weather words",
    skill: "Listening",
    kind: "listengap",
    instructions: "Listen: noun, verb, adjective. Choose the adjective you hear.",
    questions: [
      gaps(track("10.2"), [
        ["snow, to snow, ___", "snowy", "snowing", "snowed"],
        ["rain, to rain, ___", "rainy", "raining", "rained"],
        ["sun, to shine, ___", "sunny", "shiny", "sunshine"],
        ["wind, to blow, ___", "windy", "winding", "blowy"],
        ["ice, to freeze, ___", "icy / freezing", "iced / frozen", "icing / froze"],
        ["fog, ___", "foggy", "fogging", "fogged"],
      ]),
    ],
  },
  {
    title: "Comparatives",
    skill: "Grammar",
    kind: "type",
    instructions: "Write the comparative form. Example: cold → colder.",
    questions: written([
      ["warm", "warmer"],
      ["big", "bigger", "One vowel + one consonant: double it — bigger."],
      ["hot", "hotter"],
      ["dry", "drier", "Consonant + y → -ier."],
      ["foggy", "foggier"],
      ["heavy", "heavier"],
      ["expensive", "more expensive", "Long adjectives: more + adjective."],
      ["beautiful", "more beautiful"],
      ["good", "better"],
      ["bad", "worse"],
    ]),
  },
  {
    title: "Is it bigger?",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to five short conversations comparing places, animals and the poles. Answer the questions. Some have TWO correct answers.",
    questions: [
      hearing(track("10.6"))("Which elephants are heavier?", ["African elephants", "Indian elephants", "They weigh the same.", "They don't say."]),
      hearingTwo(track("10.6"))("What do they say about Tokyo and Singapore?", ["Both are quite expensive.", "Tokyo is more expensive."], ["Singapore is more expensive.", "Both are cheap."]),
      hearing(track("10.6"))("How fast can a giraffe run?", ["35 miles an hour", "53 miles an hour", "25 miles an hour", "15 miles an hour"]),
      hearing(track("10.6"))("Which country is bigger?", ["Canada — slightly", "The USA — slightly", "Canada — a lot", "They're the same."]),
      hearingTwo(track("10.6"))("What do they say about the poles?", ["The North Pole is warmer.", "The South Pole is colder."], ["The North Pole is colder.", "They're the same."]),
    ],
  },
  {
    title: "Which is drier?",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to two short conversations. Answer the questions.",
    questions: [
      hearing(track("10.5"))("Which city is wetter?", ["Dublin", "Paris", "They're the same.", "They don't say."]),
      hearing(track("10.5"))("Which city has a bigger population?", ["Cairo", "Sydney", "They're the same.", "They don't say."]),
      hearing(track("10.5"))("What is the population of Cairo?", ["Over nine million", "About four million", "Over nineteen million", "About one million"]),
      hearing(track("10.5"))("What is the population of Sydney?", ["Just over four and a half million", "Over nine million", "About two million", "Fourteen million"]),
    ],
  },
  {
    title: "Than what?",
    skill: "Listening",
    kind: "listengap",
    instructions: "Listen to six facts. Choose the comparative you hear.",
    questions: [
      gaps(track("10.16"), [
        ["Bangkok is ___ than Cairo.", "hotter", "colder", "bigger"],
        ["Canberra is ___ than London.", "foggier", "wetter", "windier"],
        ["The pollution is ___ in New Delhi than in Beijing.", "worse", "better", "bigger"],
        ["Damascus is ___ than Rome.", "older", "newer", "bigger"],
        ["Ottawa is ___ than Moscow.", "snowier", "colder", "windier"],
        ["Tokyo has a ___ population than Mexico City.", "bigger", "smaller", "older"],
      ]),
    ],
  },
  {
    title: "Two cities, two climates",
    skill: "Reading",
    kind: "truefalse",
    instructions: "Read Nodira's text. Are the sentences true or false?",
    questions: [
      tf("Nodira studied in London for a year.", false, "For six months."),
      tf("Summers in Tashkent are hotter than in London.", true),
      tf("London summers are drier than Tashkent summers.", false, "They're wetter."),
      tf("It rains more often in London.", true),
      tf("The rain in Tashkent is heavier.", true),
      tf("Winters in Tashkent are warmer than in London.", false, "They're colder."),
      tf("It's often below zero at night in Tashkent in winter.", true),
      tf("London winters are darker.", true),
      tf("Nodira prefers London.", false, "She prefers Tashkent."),
      tf("She thinks the fruit is better in Tashkent.", true),
    ],
  },
  {
    title: "Compare them",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct answer.",
    questions: [
      say("Tashkent is ___ than London in summer.", ["hotter", "hoter", "more hot", "hottest"]),
      say("Is Dublin ___ than Paris?", ["drier", "dryer", "more dry", "dry"]),
      say("Tokyo is ___ than Singapore.", ["more expensive", "expensiver", "most expensive", "more expensiver"]),
      say("The weather today is ___ than yesterday.", ["better", "gooder", "more good", "best"]),
      say("The traffic is ___ in the evening.", ["worse", "badder", "more bad", "worst"]),
      say("An elephant is heavier ___ a giraffe.", ["than", "that", "then", "as"]),
      say("Canada is ___ bigger than the USA.", ["slightly", "slight", "more", "very"]),
      say("Spring is ___ than winter.", ["sunnier", "sunnyer", "more sunny", "sunniest"]),
      say("Which is ___, a giraffe or a person?", ["faster", "fast", "more fast", "fastest"]),
      say("Which sentence is correct?", ["Moscow is colder than Tashkent.", "Moscow is more cold than Tashkent.", "Moscow is colder that Tashkent.", "Moscow is more colder than Tashkent."]),
    ],
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("London is *more wet than Tashkent.", "Short adjective: wetter."),
      mistake("Bangkok is hotter *that Cairo.", "We use than."),
      mistake("Today is *gooder than yesterday.", "good → better."),
      mistake("Tokyo is *expensiver than Singapore.", "Long adjective: more expensive."),
      mistake("Is Sydney *biger than Cairo?", "Double the g: bigger."),
      mistake("The traffic is *badder today.", "bad → worse."),
      mistake("Paris is *dryer than Dublin.", "dry → drier."),
      mistake("It's very *ice today. Be careful!", "Adjective: icy."),
      mistake("There was a lot of *snowy last night.", "Noun: snow."),
      mistake("The weather here is different *of London.", "different from."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "It's freezing here today.",
      "The roads are very icy.",
      "Dublin is wetter than Paris.",
      "Is Sydney bigger than Cairo?",
      "Tokyo is more expensive than Singapore.",
      "The South Pole is colder than the North Pole.",
      "Canada is slightly bigger than the USA.",
      "We went in the wet season.",
      "Let's check the weather forecast.",
      "The weather today is better than yesterday.",
    ]),
  },
  {
    title: "Find the pairs",
    skill: "Matching",
    kind: "match",
    instructions: "Match the words.",
    questions: pairs([
      ["snow|snowy", "rain|rainy", "wind|windy", "fog|foggy"],
      ["cold|colder", "big|bigger", "dry|drier", "good|better"],
      ["boiling|very hot", "freezing|very cold", "chilly|a bit cold", "mild|not too hot or cold"],
      ["thunder|loud noise", "lightning|bright light", "frost|thin ice", "breeze|light wind"],
      ["expensive|more expensive", "beautiful|more beautiful", "bad|worse", "heavy|heavier"],
    ]),
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself. than is weak: /ðən/.",
    questions: phrases([
      "The nights are colder than the days.",
      "Is spring wetter than summer?",
      "Tokyo is more expensive than Singapore.",
      "It's freezing today.",
      "It's cloudy but dry.",
      "There was thunder and lightning.",
      "weather forecast",
      "Celsius",
      "climate",
      "humid",
    ]),
  },
];
