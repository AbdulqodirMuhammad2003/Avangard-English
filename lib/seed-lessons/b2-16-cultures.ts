/**
 * B2, 16-dars — «Crossing cultures». San-Paulodagi yapon jamoasi
 * (Liberdade), Argentinadagi uels jamoasi; madaniyat va jamoa so'zlari.
 * Grammatika: artikllar — a/an, the va artiklsiz.
 * Navigate B2, 6.1 asosida: grammatika tinglash mashqida kitob treki
 * (yopiq ombordan), lug'at misollari kitob matni va Wordlist'idan yoki
 * unga yaqin; mashq matnlari o'zimizniki. Mashqlar inglizcha.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  gaps,
  listen,
  mistake,
  pairs,
  phrases,
  reading,
  say,
  sentences,
  trueFalse,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

export const B2_16_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🏘️", "the Liberdade neighbourhood", "ðə ˌlɪbəˈdɑːdʒi ˈneɪbəhʊd|za libadaaji neybahud", "ibora", "Liberdade mahallasi", "The Japanese area of São Paulo.", "As you pass through the red gate into the Liberdade neighbourhood, you might think you were in Tokyo.", "Qizil darvozadan Liberdade mahallasiga kirganingizda, o'zingizni Tokioda deb o'ylashingiz mumkin."),
      w("👥", "Japanese community", "ˌdʒæpəniːz kəˈmjuːnəti|jepaniiz kamyuunati", "ibora", "Yapon jamoasi", "A group of Japanese people living together in another country.", "Liberdade is the centre of the biggest Japanese community outside Japan.", "Liberdade — Yaponiyadan tashqaridagi eng katta yapon jamoasining markazi."),
      w("👴", "ancestors", "ˈænsestəz|ensestaz", "ot", "Ajdodlar", "Family members who lived a long time ago.", "More than 1.5 million people with Japanese ancestors live in Brazil.", "Braziliyada ajdodlari yapon bo'lgan 1,5 milliondan ortiq odam yashaydi."),
      w("✈️", "immigrants", "ˈɪmɪɡrənts|imigrants", "ot", "Muhojirlar", "People who come to live in a foreign country permanently.", "Immigrants need to adjust to new things.", "Muhojirlar yangi narsalarga moslashishlari kerak."),
      w("🔧", "adjust", "əˈdʒʌst|ajast", "fe'l", "Moslashmoq", "Get used to a new situation.", "It was difficult for the Japanese settlers to adjust at first.", "Dastlab yapon ko'chmanchilariga moslashish qiyin edi."),
      w("🏛️", "established", "ɪˈstæblɪʃt|istebliSHt", "sifat", "O'rnashgan, mustahkam", "Existing for a long time and accepted.", "The community is now very well established.", "Jamoa hozir juda yaxshi o'rnashgan."),
      w("🎊", "festivals", "ˈfestɪvlz|festivlz", "ot", "Bayramlar, festivallar", "Special days or events when people celebrate.", "Many popular Japanese festivals also take place in the area.", "Hududda ko'plab mashhur yapon bayramlari ham o'tkaziladi."),
      w("🕯️", "ceremony", "ˈserəməni|seramani", "ot", "Marosim", "A formal event with special traditions.", "Hanamatsuri is a ceremony where sweet tea is poured onto a statue.", "Hanamatsuri — haykal oyog'iga shirin choy quyiladigan marosim."),
      w("🎺", "parade", "pəˈreɪd|pareyd", "ot", "Parad, kortej", "A line of people moving through the streets to celebrate.", "The ceremony is followed by a parade through the streets.", "Marosimdan keyin ko'chalar bo'ylab parad bo'ladi."),
      w("👘", "costumes", "ˈkɒstjuːmz|kostyuumz", "ot", "Liboslar (an'anaviy)", "Special clothes for a festival or show.", "At Tanabata Matsuri, people wear typical Japanese costumes.", "Tanabata Matsuri bayramida odamlar an'anaviy yapon liboslarini kiyishadi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🎀", "decorate", "ˈdekəreɪt|dekareyt", "fe'l", "Bezamoq", "Make something look nicer by adding things to it.", "People decorate the streets with colourful paper.", "Odamlar ko'chalarni rang-barang qog'oz bilan bezashadi."),
      w("🪪", "citizens", "ˈsɪtɪznz|sitiznz", "ot", "Fuqarolar", "People who are legally members of a country.", "They consider themselves to be firmly Argentinian citizens.", "Ular o'zlarini chin argentinalik fuqarolar deb hisoblashadi."),
      w("🌳", "descendants", "dɪˈsendənts|disendants", "ot", "Avlodlar, nasl", "People in a later generation of a family.", "Many of their 50,000 descendants still speak Welsh.", "Ularning 50 000 avlodining ko'pi hali ham uels tilida gaplashadi."),
      w("🫖", "customs", "ˈkʌstəmz|kastamz", "ot", "Urf-odatlar", "Traditional ways of doing things in a culture.", "They maintain traditions and customs, such as serving Welsh teas.", "Ular uelscha choy berish kabi an'ana va urf-odatlarni saqlashadi."),
      w("⛩️", "torii gate", "ˈtɔːriː ɡeɪt|toorii geyt", "ibora", "Torii darvozasi (yaponcha)", "A traditional Japanese gate.", "You pass through a nine-metre-tall red torii gate.", "To'qqiz metr balandlikdagi qizil torii darvozasidan o'tasiz."),
      w("☕", "plantations", "plɑːnˈteɪʃnz|plaanteyshnz", "ot", "Plantatsiyalar", "Large farms growing one crop, e.g. coffee.", "The first settlers came to work in the coffee plantations.", "Birinchi ko'chmanchilar qahva plantatsiyalarida ishlash uchun kelgan."),
      w("🌡️", "very different climate", "ˌveri ˌdɪfrənt ˈklaɪmət|veri difrant klaymat", "ibora", "Juda boshqacha iqlim", "Weather that is not at all like at home.", "The settlers had to get used to a very different climate.", "Ko'chmanchilar juda boshqacha iqlimga ko'nikishlari kerak edi."),
      w("📍", "attractions", "əˈtrækʃnz|atrekshnz", "ot", "Diqqatga sazovor joylar", "Places that people visit for interest or fun.", "Liberdade is one of São Paulo's main attractions.", "Liberdade San-Pauloning asosiy diqqatga sazovor joylaridan biri."),
      w("🛠️", "maintain", "meɪnˈteɪn|meynteyn", "fe'l", "Saqlab qolmoq", "Keep something going.", "It's important to maintain your traditions in a new country.", "Yangi mamlakatda an'analaringizni saqlab qolish muhim."),
      w("🎶", "eisteddfod", "aɪˈstedfəd|aystedfad", "ot", "Eisteddfod (uels adabiyot va musiqa bayrami)", "A Welsh festival of literature, music and performance.", "An eisteddfod has been held in Patagonia since the 19th century.", "Patagoniyada XIX asrdan beri eisteddfod o'tkaziladi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🌍", "consider themselves", "kənˌsɪdə ðəmˈselvz|kansida zamselvz", "ibora", "O'zlarini … deb hisoblamoq", "Think of themselves as something.", "They consider themselves Argentinian, but they still speak Welsh.", "Ular o'zlarini argentinalik deb hisoblashadi, lekin hali ham uelscha gaplashadi."),
      w("🏡", "settle", "ˈsetl|setl", "fe'l", "O'rnashmoq (yashash uchun)", "Go to live in a new place permanently.", "Many Japanese families decided to settle in São Paulo.", "Ko'p yapon oilalari San-Pauloda o'rnashishga qaror qilishdi."),
      w("🙌", "welcoming", "ˈwelkəmɪŋ|welkaming", "sifat", "Mehmondo'st", "Friendly to new people.", "The local people were very welcoming.", "Mahalliy aholi juda mehmondo'st edi."),
      w("🗣️", "mother tongue", "ˌmʌðə ˈtʌŋ|maza tang", "ibora", "Ona tili", "The first language you learn as a child.", "Their mother tongue is Welsh, but they also speak Spanish.", "Ularning ona tili uelscha, lekin ispancha ham gaplashadi."),
      w("🎭", "heritage", "ˈherɪtɪdʒ|heritij", "ot", "Meros (madaniy)", "Traditions and history passed down from the past.", "They are proud of their Welsh heritage.", "Ular uels merosidan faxrlanishadi."),
      w("🧳", "emigrate", "ˈemɪɡreɪt|emigreyt", "fe'l", "Chet elga ko'chib ketmoq", "Leave your country to live in another one.", "Thousands of people decided to emigrate to South America.", "Minglab odamlar Janubiy Amerikaga ko'chib ketishga qaror qilishdi."),
      w("🌐", "the minimum wage", "ðə ˌmɪnɪməm ˈweɪdʒ|za minimam weyj", "ibora", "Eng kam ish haqi", "The lowest pay allowed by law.", "The minimum wage has gone up by around one pound an hour.", "Eng kam ish haqi soatiga taxminan bir funtga oshdi."),
      w("🌕", "full moon", "ˌfʊl ˈmuːn|ful muun", "ibora", "To'lin oy", "The moon when it is a complete circle.", "Did you see the full moon last night?", "Kecha to'lin oyni ko'rdingizmi?"),
      w("🏛️", "the Parthenon", "ðə ˈpɑːθənɒn|za paasanon", "ot", "Parfenon (Afinadagi ibodatxona)", "An ancient temple in Athens.", "I walked up to the Parthenon. The view was breathtaking.", "Parfenongacha piyoda chiqdim. Manzara hayratlanarli edi."),
      w("📈", "risen dramatically", "ˌrɪzn drəˈmætɪkli|rizn drametikli", "ibora", "Keskin oshgan", "Gone up a lot.", "The price of food has risen dramatically in the last year.", "O'tgan yilda oziq-ovqat narxi keskin oshdi."),
    ],
  },
];

const TEXT = `A LITTLE TOKYO IN BRAZIL
Walk through the big red gate into Liberdade and you might think you were in Japan. In fact, it's in São Paulo, Brazil, and it's the centre of the largest Japanese community outside Japan.
The first Japanese immigrants arrived more than a hundred years ago to work on coffee plantations. Life was hard at first: the language, food and climate were all new.
Today the community is well established. At weekends the streets are full of people buying flowers and Japanese food, and many festivals take place there, with parades, costumes and decorated streets.
In Patagonia, Argentina, there is a Welsh community too. Their descendants are Argentinian citizens, but many still speak Welsh and keep old customs alive.`;
const tf = trueFalse(TEXT);

const PATAGONIA = `An eisteddfod is a Welsh festival of literature, music and performance. But it is not only held in Wales. An eisteddfod has been held in Patagonia since a group of Welsh immigrants arrived in the valleys of the Andes in the second half of the nineteenth century.`;
const pat = reading(PATAGONIA);

export const B2_16_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("There's a concert in Hyde Park at the weekend.", ["There's a concert in Hyde Park at the weekend.", "There's the concert in Hyde Park at the weekend.", "There's a concert in the Hyde Park at the weekend.", "There was a concert in Hyde Park at the weekend."]),
      listen("Did you see the full moon last night?", ["Did you see the full moon last night?", "Did you see a full moon last night?", "Did you see full moon last night?", "Have you seen the full moon last night?"]),
      listen("The quickest way is to go by car.", ["The quickest way is to go by car.", "A quickest way is to go by car.", "The quickest way is to go by the car.", "The quicker way is to go by car."]),
      listen("The price of food has risen dramatically.", ["The price of food has risen dramatically.", "The price of the food has risen dramatically.", "A price of food has risen dramatically.", "The price of food has risen gradually."]),
      listen("The community is now very well established.", ["The community is now very well established.", "The community is now very well organized.", "The communities are now very well established.", "The community was very well established."]),
      listen("Immigrants need to adjust to new things.", ["Immigrants need to adjust to new things.", "The immigrants need to adjust to new things.", "Immigrants needed to adjust to new things.", "Immigrants need to adapt to new things."]),
      listen("They maintain traditions and customs.", ["They maintain traditions and customs.", "They maintain traditions and costumes.", "They maintained traditions and customs.", "They maintain the traditions and customs."]),
      listen("descendants", ["descendants", "ancestors", "descending", "defendants"]),
      listen("ceremony", ["ceremony", "cemetery", "ceremonies", "harmony"]),
      listen("neighbourhood", ["neighbourhood", "neighbour", "neighbouring", "brotherhood"]),
    ],
  },
  {
    title: "A little Tokyo in Brazil",
    skill: "Reading",
    kind: "truefalse",
    instructions: "Read the text. Are the sentences true or false?",
    questions: [
      tf("Liberdade is in Tokyo.", false, "It's in São Paulo, Brazil."),
      tf("It has the largest Japanese community outside Japan.", true),
      tf("The first immigrants came to work on coffee plantations.", true),
      tf("Life was easy for the first immigrants.", false, "Life was hard at first."),
      tf("Many festivals take place in Liberdade.", true),
      tf("The Welsh community lives in Brazil.", false, "It lives in Patagonia, Argentina."),
      tf("Their descendants are Argentinian citizens.", true),
      tf("Nobody in the Welsh community speaks Welsh now.", false, "Many still speak Welsh."),
    ],
  },
  {
    title: "People and groups",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match the words to their meanings.",
    questions: pairs([
      ["descendants|people in a later generation of a family", "immigrants|people who come to live in a foreign country", "citizens|people who are legally members of a country", "ancestors|people in your family who lived long ago"],
    ]),
  },
  {
    title: "Easily confused words",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the correct word.",
    questions: [
      say("What aspects of the Liberdade ___ make it seem like Tokyo? (the area)", ["neighbourhood", "community", "citizens", "ancestors"]),
      say("Why did the first Japanese ___ come to Brazil?", ["immigrants", "descendants", "citizens", "ancestors"]),
      say("Why was it difficult for them to ___ at first?", ["adjust", "establish", "decorate", "maintain"]),
      say("Which event includes a ___ through the streets?", ["parade", "ceremony", "custom", "costume"]),
      say("Give an example of a Japanese ___ mentioned in the article.", ["festival", "costume", "citizen", "custom"]),
      say("Serving Welsh teas is an old ___.", ["custom", "costume", "parade", "ceremony"]),
      say("At the festival, people wear traditional ___.", ["costumes", "customs", "communities", "ceremonies"]),
      say("The Japanese ___ in São Paulo is very large. (the people)", ["community", "neighbourhood", "parade", "ceremony"]),
    ],
  },
  {
    title: "Which article?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose a/an, the or – (no article).",
    questions: [
      say("I saw ___ amazing film last night.", ["an", "the", "a", "–"]),
      say("How was ___ concert last night? (we both know which)", ["the", "a", "an", "–"]),
      say("___ sun is hot today.", ["The", "A", "An", "–"]),
      say("Notting Hill is ___ biggest carnival in the UK.", ["the", "a", "an", "–"]),
      say("How long is ___ Amazon?", ["the", "an", "a", "–"]),
      say("Have you been to ___ Guggenheim Museum?", ["the", "a", "an", "–"]),
      say("My daughter's always listening to ___ music.", ["–", "the", "a", "an"]),
      say("Have you ever been to ___ Australia?", ["–", "the", "an", "a"]),
      say("We flew over ___ Sahara Desert.", ["the", "–", "a", "an"]),
      say("She's ___ university student.", ["a", "an", "the", "–"]),
    ],
  },
  {
    title: "the or no article?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Do we use «the» or no article with these names?",
    questions: [
      say("___ Asia", ["–", "the"]),
      say("___ Himalayas", ["the", "–"]),
      say("___ Globe Theatre", ["the", "–"]),
      say("___ Fifth Avenue", ["–", "the"]),
      say("___ Bahamas", ["the", "–"]),
      say("___ Mount Fuji", ["–", "the"]),
      say("___ British Museum", ["the", "–"]),
      say("___ Nile", ["the", "–"]),
      say("___ Germany", ["–", "the"]),
      say("___ Netherlands", ["the", "–"]),
    ],
  },
  {
    title: "Grammar sentences",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear six sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("gr-6.1"), [
        ["There's ___ concert in Hyde Park at the weekend.", "a", "the", "one"],
        ["The minimum wage has gone up by around one pound ___ hour.", "an", "a", "the"],
        ["Did you see ___ full moon last night? It was spectacular.", "the", "a", "one"],
        ["___ quickest way is to go by car; the bus takes ages.", "The", "A", "One"],
        ["I walked up to the Parthenon. The view over ___ was breathtaking.", "Athens", "the Athens", "an Athens"],
        ["The price of ___ has risen dramatically in the last year.", "food", "the food", "a food"],
      ]),
    ],
  },
  {
    title: "An eisteddfod in Patagonia",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the text. Choose the correct answer.",
    questions: [
      pat("What is an eisteddfod?", ["A Welsh festival of literature, music and performance", "A Welsh valley", "A type of Welsh tea", "A mountain in the Andes"]),
      pat("Where is it held, apart from Wales?", ["In Patagonia", "In Tokyo", "In São Paulo", "In London"]),
      pat("When did the Welsh immigrants arrive?", ["In the second half of the nineteenth century", "In the 1990s", "A hundred years ago", "In the twentieth century"]),
      pat("Why is «the» used in «the Andes»?", ["It's a range of mountains.", "It's a country.", "It's a city.", "It's the first mention."]),
      pat("Why is there no article before «Wales»?", ["Most country names have no article.", "It's a plural name.", "It's a range of mountains.", "It's a museum."]),
    ],
  },
  {
    title: "Complete with an article",
    skill: "Grammar",
    kind: "fill",
    instructions: "Write a, an or the. If no article is needed, write –.",
    questions: written([
      ["How do prices compare between ___ UK and the USA?", "the"],
      ["I'd say the USA is cheaper for everyday things like ___ clothes.", "–|-"],
      ["I think ___ cars should be banned in city centres. (in general)", "–|-"],
      ["I need to send ___ email, but I can't get a signal.", "an"],
      ["There's a café with Wi-fi just down ___ road.", "the"],
      ["It's next to the bank. It's got ___ red-and-white sign outside.", "a"],
      ["I hear you're having ___ party. Is it a special occasion?", "a"],
      ["It's to celebrate ___ end of the exams.", "the"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("I'd love to visit *the Japan one day.", "Most countries: no article — Japan."),
      mistake("Have you been to *Louvre in Paris?", "Museums: the Louvre."),
      mistake("She's *a honest person.", "an honest (vowel sound /ɒ/)."),
      mistake("I'm studying at *an university in Tashkent.", "a university (/juː/ sound)."),
      mistake("*The life is too short to worry.", "General idea: Life is too short."),
      mistake("Mount Everest is *highest mountain in the world.", "Superlative: the highest."),
      mistake("We sailed across *Atlantic Ocean.", "Oceans: the Atlantic Ocean."),
      mistake("Serving Welsh tea is an old *costume.", "custom = tradition; costume = clothes."),
      mistake("It was hard for them to *establish to a new climate.", "adjust to = get used to."),
      mistake("Many of their *ancestors still speak Welsh today.", "People living now = descendants."),
    ],
  },
  {
    title: "Word pairs",
    skill: "Vocabulary",
    kind: "match",
    instructions: "These pairs of words are easily confused. Match each word to its meaning.",
    questions: pairs([
      ["custom|a traditional way of doing things", "costume|special clothes for a festival", "neighbourhood|an area of a town", "community|a group of people"],
      ["adjust|get used to something new", "establish|start something that lasts", "ceremony|a formal event with traditions", "parade|people moving through the streets"],
    ]),
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "Liberdade is the centre of the biggest Japanese community.",
      "Immigrants need to adjust to new things.",
      "The community is now very well established.",
      "The ceremony is followed by a parade.",
      "Many of their descendants still speak Welsh.",
      "Did you see the full moon last night?",
      "The price of food has risen dramatically.",
      "Have you ever been to Australia?",
    ]),
  },
  {
    title: "Talk about cultures",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best answer.",
    questions: [
      say("Is there a big foreign community in your city?", ["Yes, there's a large Korean community in Tashkent.", "Yes, there's the large Korean community in the Tashkent.", "Yes, there's large Korean community in a Tashkent.", "Yes, there's an large Korean community."]),
      say("What festivals do you celebrate?", ["Navruz is the most important festival for us.", "Navruz is a most important festival for us.", "Navruz is most important the festival.", "The Navruz is an important festival."]),
      say("Have you ever been abroad?", ["Yes, I've been to the UAE and Turkey.", "Yes, I've been to UAE and the Turkey.", "Yes, I've been to a UAE and a Turkey.", "Yes, I've been to the Turkey."]),
      say("What's a typical custom in your country?", ["We always offer guests tea and bread.", "We always offer the guests the tea and the bread.", "We always offer a guests a tea.", "We always offer costume to guests."]),
      say("Was it hard to adjust when you moved?", ["Yes, the climate was very different.", "Yes, a climate was very different.", "Yes, climate was the very different.", "Yes, the climate were different."]),
      say("Do you like music?", ["Yes, I love music, especially jazz.", "Yes, I love the music, especially the jazz.", "Yes, I love a music.", "Yes, I love musics."]),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself. «the» is /ðə/ before a consonant and /ði/ before a vowel.",
    questions: phrases([
      "There's a concert in Hyde Park at the weekend.",
      "Did you see the full moon last night?",
      "The quickest way is to go by car.",
      "I walked up to the Parthenon.",
      "The price of food has risen dramatically.",
      "Immigrants need to adjust to new things.",
      "They maintain traditions and customs.",
      "descendants",
      "ceremony",
      "multicultural",
    ]),
  },
];
