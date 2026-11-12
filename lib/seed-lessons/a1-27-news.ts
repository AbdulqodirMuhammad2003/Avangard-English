/**
 * A1, 27-dars — «Yangiliklar va ob-havo: ago». Navigate A1, 9.3 «News
 * stories», 9.4 «the weather / a review of an event» va 9.5 «Whatever the
 * weather» asosida: g'aroyib choychaqalar haqidagi yangilik, notanish
 * so'zni kontekstdan topish, ob-havo va fasllar, is / was ni eshitib
 * farqlash, tadbir haqida sharh. Grammatika: ago (two years ago); Past
 * Simple savollari. Tinglash mashqlarida kitob treklari (yopiq ombordan),
 * savollar va matnlar o'zimizniki.
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

export const A1_27_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("⏮️", "ago", "əˈɡəʊ|agou", "ravish", "…oldin (vaqt)", "Before now: two days ago.", "He got married six years ago.", "U olti yil oldin uylangan."),
      w("💵", "tip", "tɪp|tip", "ot", "Choychaqa", "Extra money you give a waiter.", "Customers always leave a tip for the waiter.", "Mijozlar ofitsiantga doim choychaqa qoldiradi."),
      w("🧾", "bill", "bɪl|bil", "ot", "Hisob (restoranda)", "The paper that shows how much you must pay.", "He left a $3,000 tip on an $88 bill.", "U 88 dollarlik hisobga 3000 dollar choychaqa qoldirdi."),
      w("🧑‍💼", "customer", "ˈkʌstəmə|kastama", "ot", "Mijoz, xaridor", "A person who buys something in a shop or restaurant.", "A customer left a big tip.", "Bir mijoz katta choychaqa qoldirdi."),
      w("❌", "mistake", "mɪˈsteɪk|misteyk", "ot", "Xato", "Something that is wrong.", "It wasn't a mistake.", "Bu xato emas edi."),
      w("💰", "millionaire", "ˌmɪljəˈneə|milyanea", "ot", "Millioner", "A person who has more than a million dollars.", "He's a millionaire, but he lives in a small flat.", "U millioner, lekin kichik kvartirada yashaydi."),
      w("🐘", "huge", "hjuːdʒ|hyuuj", "sifat", "Ulkan, juda katta", "Very big.", "A waiter got a huge tip.", "Bir ofitsiant ulkan choychaqa oldi."),
      w("🧾", "receipt", "rɪˈsiːt|risiit", "ot", "Chek", "A paper that shows you paid.", "He wants to find the credit card receipt.", "U kredit karta chekini topmoqchi."),
      w("🔪", "knife", "naɪf|nayf", "ot", "Pichoq", "A thing you cut with.", "He saw a boy with a knife.", "U pichoq ushlagan bolani ko'rdi."),
      w("🚦", "rush hour", "ˈrʌʃ ˌaʊə|rash aua", "ot", "Tig'iz soat (cho'qqi vaqt)", "The busy time when people go to and from work.", "There were lots of people at the station because it was rush hour.", "Tig'iz soat bo'lgani uchun vokzalda odam ko'p edi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🌦️", "weather", "ˈweðə|ueza", "ot", "Ob-havo", "Sun, rain, wind, snow…", "What's the weather like with you?", "Sizda ob-havo qanday?"),
      w("☀️", "sunny", "ˈsʌni|sani", "sifat", "Quyoshli", "With a lot of sun.", "It was sunny and very hot.", "Quyoshli va juda issiq edi."),
      w("☁️", "cloudy", "ˈklaʊdi|klaudi", "sifat", "Bulutli", "With a lot of clouds.", "It's a little cloudy, but it's warm.", "Biroz bulutli, lekin iliq."),
      w("🌧️", "rainy", "ˈreɪni|reyni", "sifat", "Yomg'irli", "With a lot of rain.", "It's rainy here.", "Bu yerda yomg'ir yog'yapti."),
      w("⛈️", "stormy", "ˈstɔːmi|stoomi", "sifat", "Bo'ronli", "With strong wind and rain.", "It was stormy in Tokyo.", "Tokioda bo'ron bo'ldi."),
      w("🌨️", "snowy", "ˈsnəʊi|snoui", "sifat", "Qorli", "With a lot of snow.", "It's very cold and it's often snowy.", "Juda sovuq va ko'pincha qor yog'adi."),
      w("🌡️", "temperature", "ˈtemprətʃə|tempracha", "ot", "Harorat", "How hot or cold it is.", "In summer, the temperature is 20–24°C.", "Yozda harorat 20–24 daraja."),
      w("🌡️", "degree", "dɪˈɡriː|digrii", "ot", "Daraja (harorat)", "A unit for temperature: °C.", "It's one degree today. It's cold!", "Bugun bir daraja. Sovuq!"),
      w("🍃", "season", "ˈsiːzn|siizn", "ot", "Fasl, mavsum", "Spring, summer, autumn or winter.", "It was the rainy season for the first week.", "Birinchi hafta yomg'irli mavsum edi."),
      w("💨", "wind", "wɪnd|uind", "ot", "Shamol", "Air that moves fast.", "The sun and wind are very strong.", "Quyosh va shamol juda kuchli."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🌸", "spring", "sprɪŋ|spring", "ot", "Bahor", "The season after winter.", "In spring, it's warm and often sunny.", "Bahorda iliq va ko'pincha quyoshli."),
      w("🌞", "summer", "ˈsʌmə|sama", "ot", "Yoz", "The hottest season.", "In summer, it's usually sunny.", "Yozda odatda quyoshli."),
      w("🍂", "autumn", "ˈɔːtəm|ootam", "ot", "Kuz", "The season after summer.", "It's cold and wet in autumn.", "Kuzda sovuq va nam."),
      w("❄️", "winter", "ˈwɪntə|uinta", "ot", "Qish", "The coldest season.", "What's the weather like in winter in New York?", "Nyu-Yorkda qishda ob-havo qanday?"),
      w("🎪", "event", "ɪˈvent|ivent", "ot", "Tadbir, voqea", "Something special that happens: a concert, a festival…", "Write a review of an event.", "Tadbir haqida sharh yozing."),
      w("✨", "atmosphere", "ˈætməsfɪə|etmasfia", "ot", "Muhit, kayfiyat", "The feeling in a place.", "The atmosphere was great.", "Muhit ajoyib edi."),
      w("🎤", "comedian", "kəˈmiːdiən|kamiidian", "ot", "Komik, hajvchi", "A person who tells funny stories on stage.", "We saw a comedian, but he wasn't very funny.", "Bir komikni ko'rdik, lekin u unchalik kulgili emas edi."),
      w("⛺", "tent", "tent|tent", "ot", "Chodir", "A small house made of cloth for camping.", "We slept in a tent in the mountains.", "Tog'da chodirda uxladik."),
      w("🌊", "ocean", "ˈəʊʃn|oushn", "ot", "Okean", "A very big sea.", "Auckland is next to the ocean.", "Oklend okean bo'yida."),
      w("🌌", "sky", "skaɪ|skay", "ot", "Osmon", "The space above the earth, where you see clouds and the sun.", "The sky is blue today.", "Bugun osmon moviy."),
    ],
  },
];

const TIPS = `UNUSUAL TIPS
Customers in American restaurants always leave a tip for the waiter. Normally the tip is between 10 and 20% of the cost of the meal. But six months ago in Michigan, a customer left a $3,000 tip on an $88 bill — and it wasn't a mistake. This started a fashion for big tips all over America. Last week, a worker in a fast food restaurant in California got a $100 tip for a $4 drink, and yesterday a lucky waiter in Los Angeles got a $6,000 tip for his service.
No one knows the names of the givers, but people think it is a group of internet millionaires from California. They have a lot of money and they want to help poor people.`;
const read = reading(TIPS);

const REVIEW = `THE SAMARKAND MUSIC FESTIVAL
Last Saturday, we went to a music festival in Samarkand. It's a big festival (around 5,000 people) every year in August, in a beautiful park near the Registan. People often go for the weekend and stay in hotels, but we went just for the day. The weather was hot and sunny and everyone was really friendly.
It's a music festival, but there is dance and theatre, too. We saw two bands. One was from Kazakhstan — they were amazing! We saw a comedian, but he wasn't very funny. There was interesting food from all over Central Asia. The atmosphere was great. Some things were good and some were bad, but it was never boring and we loved it.`;
const review = reading(REVIEW);

const IS = "is (hozir)";
const WAS = "was (o'tgan)";

export const A1_27_EXERCISES: SeedExercise[] = [
  {
    title: "G'aroyib choychaqalar",
    skill: "O'qish",
    kind: "reading",
    instructions: "Yangilikni o'qing va savollarga javob bering.",
    questions: [
      read("What is a normal tip in America?", ["10–20% of the cost of the meal", "$100", "50% of the bill", "There aren't any tips."]),
      read("What happened six months ago in Michigan?", ["A customer left a $3,000 tip on an $88 bill.", "A waiter lost his job.", "A restaurant closed.", "A customer didn't pay."]),
      read("Was the Michigan tip a mistake?", ["No, it wasn't.", "Yes, it was.", "The text doesn't say.", "Nobody knows."]),
      read("What happened last week in California?", ["A worker got a $100 tip for a $4 drink.", "A waiter got $6,000.", "A millionaire opened a restaurant.", "Nothing."]),
      read("When did a waiter in Los Angeles get $6,000?", ["Yesterday", "Six months ago", "Last week", "Last year"]),
      read("Who do people think gave the tips?", ["A group of internet millionaires", "The restaurant owners", "Famous actors", "The waiters' families"]),
      read("Why did they do it?", ["They want to help poor people.", "They lost a bet.", "It was a mistake.", "The text doesn't say."]),
      read("«six months ago» means…", ["six months before now", "in six months", "for six months", "every six months"]),
    ],
  },
  {
    title: "ago bilan yozing",
    skill: "Grammatika",
    kind: "type",
    instructions: "ago o'tgan zamonda «…oldin» degani: vaqt oralig'i + ago. Hozir 2026-yil. Gapni ago bilan qayta yozing. Misol: He got married in 2020. → He got married six years ago.",
    questions: written([
      ["He got married in 2020.", "He got married six years ago."],
      ["I saw her on Sunday. (bugun — chorshanba)", "I saw her three days ago."],
      ["She went to Switzerland in June. (hozir — sentyabr)", "She went to Switzerland three months ago."],
      ["He left his job last week.", "He left his job a week ago.|He left his job one week ago."],
      ["We sold our house in 2016.", "We sold our house ten years ago."],
      ["I had a meeting at 10 a.m. (hozir — 12 p.m.)", "I had a meeting two hours ago."],
      ["I left school in 2021.", "I left school five years ago."],
      ["They arrived at 5.30. (hozir — 6.00)", "They arrived thirty minutes ago.|They arrived half an hour ago."],
      ["I phoned my friend yesterday.", "I phoned my friend a day ago.|I phoned my friend one day ago."],
      ["We visited Bukhara in 2025.", "We visited Bukhara a year ago.|We visited Bukhara one year ago."],
    ]),
  },
  {
    title: "Oxirgi marta qachon?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "When did you last…? — oxirgi marta qachon …? Javob: a week ago, two days ago, last year…",
    questions: [
      say("When did you last play sport? — I played sport a week ___.", ["ago", "before", "last", "past"]),
      say("___ did you last see a film at the cinema?", ["When", "Where", "What", "Who"]),
      say("When ___ you last phone a friend?", ["did", "do", "were", "are"]),
      say("I bought something online two days ___.", ["ago", "last", "before now", "past"]),
      say("Qaysi gap to'g'ri?", ["I saw her two weeks ago.", "I saw her ago two weeks.", "I saw her before two weeks.", "I see her two weeks ago."]),
      say("Qaysi gap to'g'ri?", ["He left school five years ago.", "He left school five years before ago.", "He left school ago five years.", "He leaves school five years ago."]),
      say("Who did you play ___?", ["with", "to", "at", "for"]),
      say("When did it ___?", ["happen", "happened", "happens", "happening"]),
      say("How did the story ___?", ["end", "ended", "ends", "ending"]),
      say("Why ___ the man give the boy his jacket?", ["did", "does", "was", "is"]),
    ],
  },
  {
    title: "Ob-havo",
    skill: "Tinglash",
    kind: "listenmatch",
    instructions: "Sakkizta ob-havo so'zi aytiladi. Tinglang va har bir raqamga sifatni yozing (It's …).",
    questions: [
      slots(track("9.15"), [
        ["1. It's …", "sunny"],
        ["2. It's …", "cloudy"],
        ["3. It's …", "rainy"],
        ["4. It's …", "stormy"],
        ["5. It's …", "snowy"],
        ["6. It's …", "cold"],
        ["7. It's …", "hot"],
        ["8. It's …", "warm"],
      ]),
    ],
  },
  {
    title: "Ob-havo qanday?",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Uchta qisqa suhbatni tinglang va to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("9.17"), [
        ["1. «What's the ___ like with you?»", "weather", "season", "temperature"],
        ["1. «It's OK. It's a little ___, but it's warm.»", "cloudy", "rainy", "snowy"],
        ["1. «It's ___ here.»", "rainy", "sunny", "stormy"],
        ["2. «Did you have a good ___?»", "holiday", "day", "time"],
        ["2. «It was the ___ season for the first week.»", "rainy", "hot", "cold"],
        ["2. «But after that it was sunny and very ___.»", "hot", "cold", "windy"],
        ["3. «What's the weather like in ___ in New York?»", "winter", "summer", "spring"],
        ["3. «It's very cold and it's often ___, too.»", "snowy", "rainy", "stormy"],
      ]),
    ],
  },
  {
    title: "is yoki was?",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Darak gapda is va was kuchsiz aytiladi, ularni eshitish qiyin. Vaqt so'zlariga (today, yesterday) va mazmunga quloq soling. Hozirgimi yoki o'tganmi?",
    questions: [
      hearing(track("9.19"))("1. … sunny in London, so we went to the park.", [WAS, IS]),
      hearing(track("9.19"))("2. … rainy in Berlin? Do you have an umbrella?", [IS, WAS]),
      hearing(track("9.19"))("3. … stormy in Tokyo today, so we didn't go out.", [WAS, IS]),
      hearing(track("9.19"))("4. … cold in New York today? Did you wear your winter jacket?", [WAS, IS]),
      hearing(track("9.19"))("5. … sunny and warm here in Buenos Aires. I've got a summer dress on.", [IS, WAS]),
    ],
  },
  {
    title: "Oklend ob-havosi",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Yangi Zelandiyadagi Oklend shahrining ob-havosi haqida tinglang va savollarga javob bering. Ba'zi savollarda IKKITA to'g'ri javob bor.",
    questions: [
      hearing(track("9.23"))("What's the weather like in Auckland?", ["It's never very hot and never very cold.", "It's very hot in summer.", "It's very cold in winter.", "It's always sunny."]),
      hearing(track("9.23"))("Is it ever snowy?", ["No, never.", "Yes, in winter.", "Yes, every year.", "Sometimes in spring."]),
      hearing(track("9.23"))("What's the temperature in summer?", ["20–24°C", "12–16°C", "Around 18°C", "30–34°C"]),
      hearingTwo(track("9.23"))("Which TWO are true about winter?", ["It's 12–16°C.", "It's cloudy and often rainy."], ["It's snowy.", "It's 20–24°C."]),
      hearing(track("9.23"))("What's autumn like?", ["Not hot, but warm — around 18°C", "Very cold", "Very hot", "Snowy"]),
    ],
  },
  {
    title: "Elisning kuni",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Elis kecha nima qilgani haqida gapiradi. Tinglang va to'g'ri variantni tanlang.",
    questions: [
      gaps(track("9.22"), [
        ["She ___ to work yesterday.", "didn't go", "went", "walked"],
        ["She got up at about ___.", "nine", "seven", "eleven"],
        ["She had a ___ breakfast.", "big", "small", "quick"],
        ["She ___ into the city centre.", "cycled", "walked", "drove"],
        ["She ___ the shoes because they were expensive.", "didn't buy", "bought", "sold"],
        ["She met her friend, Helen, for ___.", "tea", "coffee", "lunch"],
        ["Then they visited the ___.", "museum", "cinema", "park"],
        ["She started cooking dinner with her ___.", "daughter", "sister", "mother"],
      ]),
    ],
  },
  {
    title: "Festival haqida sharh",
    skill: "O'qish",
    kind: "reading",
    instructions: "Tadbir haqidagi sharhni o'qing. Sifatlarga e'tibor bering: ular tadbir, ob-havo, odamlar va muhitni tasvirlaydi.",
    questions: [
      review("When did the writer go to the festival?", ["Last Saturday", "Last year", "In August last year", "The text doesn't say."]),
      review("Where is the festival?", ["In a park near the Registan", "In Tashkent", "In a big hotel", "Next to the sea"]),
      review("How long did they stay?", ["Just for the day", "For the weekend", "For a week", "The text doesn't say."]),
      review("What was the weather like?", ["Hot and sunny", "Cold and rainy", "Cloudy", "Stormy"]),
      review("Where was the amazing band from?", ["Kazakhstan", "Uzbekistan", "Russia", "Turkey"]),
      review("What was the comedian like?", ["Not very funny", "Very funny", "Amazing", "Boring"]),
      review("Which adjective describes the atmosphere?", ["great", "funny", "hot", "interesting"]),
      review("Did they like the festival?", ["Yes, they loved it.", "No, it was boring.", "Only the food.", "The text doesn't say."]),
    ],
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("I saw her *before two days.", "…oldin — two days ago."),
      mistake("He left school *ago five years.", "ago vaqtdan keyin: five years ago."),
      mistake("I *see him three days ago.", "ago — o'tgan zamon: saw."),
      mistake("When *you did leave school?", "When did you leave school?"),
      mistake("What's the weather *likes today?", "What's the weather like?"),
      mistake("It's *rain today.", "Sifat — rainy (yoki: It's raining)."),
      mistake("In *the summer it's usually sunny.", "Fasllar bilan the shart emas: In summer…"),
      mistake("It was *sun and very hot.", "Sifat — sunny."),
      mistake("Yesterday it *is cold and snowy.", "O'tgan — was."),
      mistake("The temperature is 20 *degree.", "Ko'plik — 20 degrees."),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Juftlarni ulang.",
    questions: pairs([
      ["sun|sunny", "cloud|cloudy", "rain|rainy", "snow|snowy"],
      ["spring|bahor", "summer|yoz", "autumn|kuz", "winter|qish"],
      ["tip|choychaqa", "bill|hisob", "receipt|chek", "mistake|xato"],
      ["What's the weather like?|It's sunny.", "What was the weather like?|It was cold.", "When did you leave school?|In 2015.", "Did you have a good holiday?|Yes, it was great."],
      ["two days|ago", "last|week", "this|morning", "in|2010"],
    ]),
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap yoki savol tuzing.",
    questions: sentences([
      "I had a meeting two hours ago.",
      "When did it happen?",
      "Where did it happen?",
      "What did the boy say?",
      "How did the story end?",
      "What's the weather like with you?",
      "It's a little cloudy, but it's warm.",
      "It was sunny and very hot.",
      "In winter it's very cold and often snowy.",
      "The atmosphere was great.",
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "I had a meeting two hours ago.",
      "Is this the correct answer?",
      "I can't decide what colour to wear.",
      "What's the weather like with you?",
      "It's sunny. It's cloudy. It's rainy.",
      "It's stormy. It's snowy.",
      "spring, summer, autumn, winter",
      "What was the weather like?",
      "It was hot and sunny.",
      "The atmosphere was great.",
    ]),
  },
];
