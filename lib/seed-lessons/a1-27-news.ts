/**
 * A1, 27-dars — «Yangiliklar». Qisqa xabarlar va ob-havo.
 * Grammatika: ago (two days ago, ten years ago) — «last» va «in» bilan
 * farqi; Past Simple'ni takrorlash; ob-havo: It's sunny / It was windy,
 * What's the weather like? Matn va mashqlar o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  hearing,
  listen,
  mistake,
  pairs,
  phrases,
  reading,
  say,
  sentences,
  stress,
  w,
  written,
  type Rounds,
} from "./helpers";

export const A1_27_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🌦️", "weather", "ˈweðə|ueza", "ot", "Ob-havo", "Sun, rain, wind and so on.", "What's the weather like today?", "Bugun ob-havo qanday?"),
      w("☀️", "sunny", "ˈsʌni|sani", "sifat", "Quyoshli", "With a lot of sun.", "It's sunny and warm.", "Havo quyoshli va iliq."),
      w("☁️", "cloudy", "ˈklaʊdi|klaudi", "sifat", "Bulutli", "With a lot of clouds.", "It was cloudy all day.", "Kun bo'yi bulutli edi."),
      w("💨", "windy", "ˈwɪndi|uindi", "sifat", "Shamolli", "With a lot of wind.", "It's very windy today.", "Bugun juda shamolli."),
      w("🌫️", "foggy", "ˈfɒɡi|fogi", "sifat", "Tumanli", "You can't see far because of fog.", "It was foggy in the morning.", "Ertalab tuman edi."),
      w("🌧️", "rain", "reɪn|reyn", "ot, fe'l", "Yomg'ir; yomg'ir yog'moq", "Water that falls from the sky.", "We didn't go out because of the rain.", "Yomg'ir tufayli tashqariga chiqmadik."),
      w("❄️", "snow", "snəʊ|snou", "ot, fe'l", "Qor; qor yog'moq", "White, cold, soft ice from the sky.", "The children played in the snow.", "Bolalar qorda o'ynashdi."),
      w("⛈️", "storm", "stɔːm|stoom", "ot", "Bo'ron, momaqaldiroq", "Very bad weather with strong wind and rain.", "There was a big storm last night.", "Kecha kechasi kuchli bo'ron bo'ldi."),
      w("🌤️", "warm", "wɔːm|voom", "sifat", "Iliq", "Nice and a little hot.", "It's warm in May.", "May oyida havo iliq."),
      w("🌡️", "temperature", "ˈtemprətʃə|tempracha", "ot", "Harorat", "How hot or cold something is.", "The temperature is twenty degrees.", "Harorat yigirma daraja."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("📰", "news", "njuːz|nyuuz", "ot", "Yangilik(lar)", "Information about things that happened. «news» — birlikda: The news is…", "Did you hear the news?", "Yangilikni eshitdingmi?"),
      w("⏪", "ago", "əˈɡəʊ|agou", "ravish", "…oldin", "Before now: two days ago.", "I came here three years ago.", "Bu yerga uch yil oldin keldim."),
      w("🌐", "online", "ˌɒnˈlaɪn|onlayn", "ravish, sifat", "Internetda, onlayn", "On the internet.", "I read the news online.", "Yangiliklarni internetda o'qiyman."),
      w("🏆", "won", "wʌn|uan", "fe'l (win)", "Yutdi, g'olib bo'ldi", "Past of «win». Sounds like «one».", "Our team won the match.", "Jamoamiz o'yinda yutdi."),
      w("🥇", "prize", "praɪz|prayz", "ot", "Sovrin, mukofot", "Something you get when you win.", "She won first prize.", "U birinchi o'rinni egalladi."),
      w("🔥", "fire", "ˈfaɪə|faya", "ot", "Yong'in, olov", "Flames that burn.", "There was a fire in an old building.", "Eski binoda yong'in bo'ldi."),
      w("👮", "police", "pəˈliːs|paliis", "ot", "Politsiya", "People who stop crime.", "The police found the car.", "Politsiya mashinani topdi."),
      w("🌍", "world", "wɜːld|vyorld", "ot", "Dunyo", "All the countries on Earth.", "He's the best player in the world.", "U dunyodagi eng yaxshi o'yinchi."),
      w("🍀", "lucky", "ˈlʌki|laki", "sifat", "Omadli", "When good things happen to you by chance.", "You were very lucky!", "Sen juda omadli eding!"),
      w("🎟️", "lottery", "ˈlɒtəri|lotari", "ot", "Lotereya", "A game: you buy a ticket and can win money.", "A teacher from Fergana won the lottery.", "Farg'onalik o'qituvchi lotereyada yutdi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🌸", "spring", "sprɪŋ|spring", "ot", "Bahor", "The season after winter.", "Navruz is in spring.", "Navro'z bahorda."),
      w("🏖️", "summer", "ˈsʌmə|sama", "ot", "Yoz", "The hottest season.", "It's very hot in summer.", "Yozda juda issiq."),
      w("🍂", "autumn", "ˈɔːtəm|ootam", "ot", "Kuz", "The season after summer. The «n» is silent.", "We pick cotton in autumn.", "Kuzda paxta teramiz."),
      w("⛄", "winter", "ˈwɪntə|uinta", "ot", "Qish", "The coldest season.", "It snows in winter.", "Qishda qor yog'adi."),
      w("🗓️", "season", "ˈsiːzn|siizn", "ot", "Fasl", "Spring, summer, autumn or winter.", "My favourite season is spring.", "Sevimli faslim — bahor."),
      w("🌈", "rainbow", "ˈreɪnbəʊ|reynbou", "ot", "Kamalak", "Colours in the sky after rain.", "There's a rainbow in the sky.", "Osmonda kamalak bor."),
      w("💧", "wet", "wet|uet", "sifat", "Ho'l", "Covered with water.", "My shoes are wet.", "Oyoq kiyimim ho'l."),
      w("🏜️", "dry", "draɪ|dray", "sifat", "Quruq", "Without water.", "The summer was very dry.", "Yoz juda quruq keldi."),
      w("📺", "forecast", "ˈfɔːkɑːst|fookaast", "ot", "Ob-havo ma'lumoti, bashorat", "What the weather will be like.", "The forecast says it's sunny tomorrow.", "Ob-havo ma'lumotiga ko'ra ertaga quyoshli."),
      w("🌌", "sky", "skaɪ|skay", "ot", "Osmon", "It's blue on a sunny day.", "The sky was grey.", "Osmon kulrang edi."),
    ],
  },
];

const NEWS = `NEWS FROM UZBEKISTAN
1. LUCKY TEACHER
Two weeks ago, Dilbar Usmonova, a teacher from Fergana, bought a lottery ticket for the first time. Last Friday she won 500 million so'm! "I didn't believe it," she said. "I called my husband, and he laughed!"
2. SNOW IN APRIL
It was a strange day in Tashkent yesterday. In the morning it was sunny and warm, but at three o'clock it was very windy, and then it snowed! The snow didn't stay long — an hour later the sky was blue again.
3. YOUNG CHAMPION
Ten years ago, Sardor Qodirov played chess at school for fun. Last week, at nineteen, he won first prize at a big competition in Paris. He is now one of the best young players in the world.`;
const read = reading(NEWS);

const FORECAST = `Good morning! Here's the weather forecast for today.
In Tashkent it's cloudy this morning, but in the afternoon it's sunny and warm. The temperature is twenty-two degrees.
In Samarkand it's windy, and there's some rain in the evening. Take an umbrella!
In Nukus it's sunny and very dry. The temperature is twenty-eight degrees — the hottest place in the country today.
In the mountains near Chimgan it's cold and foggy. There's snow on the mountain tops, and it's only three degrees.
And yesterday? Yesterday there was a big storm in Fergana, and a lot of trees fell. Please be careful on the roads.
That's all for now. Have a nice day!`;
const hear = hearing(FORECAST);

export const A1_27_EXERCISES: SeedExercise[] = [
  {
    title: "Ob-havo",
    skill: "Tinglash",
    kind: "listen",
    instructions: "So'z o'qiladi. Eshitganingizni toping.",
    questions: [
      listen("sunny", ["sunny", "Sunday", "funny", "sun"]),
      listen("windy", ["windy", "window", "Wendy", "wind"]),
      listen("cloudy", ["cloudy", "cloud", "loudly", "clothes"]),
      listen("foggy", ["foggy", "froggy", "fog", "food"]),
      listen("rain", ["rain", "run", "train", "ran"]),
      listen("snow", ["snow", "show", "now", "slow"]),
      listen("warm", ["warm", "worm", "war", "wall"]),
      listen("won", ["won", "want", "when", "wine"], "won — «one» bilan bir xil o'qiladi."),
      listen("autumn", ["autumn", "Adam", "atom", "item"]),
      listen("ago", ["ago", "a go", "again", "agree"]),
    ],
  },
  {
    title: "Urg'u",
    skill: "Talaffuz",
    kind: "stress",
    instructions: "So'z o'qiladi. Urg'uli bo'g'inni bosing.",
    questions: stress([
      ["sun|ny", 0],
      ["clou|dy", 0],
      ["tem|pe|ra|ture", 0, "TEM-pra-cha — o'rtadagi «e» deyarli eshitilmaydi."],
      ["a|go", 1],
      ["po|lice", 1],
      ["au|tumn", 0],
      ["lot|te|ry", 0],
      ["fore|cast", 0],
      ["on|line", 1],
      ["Sep|tem|ber", 1],
    ]),
  },
  {
    title: "Qanday ob-havo?",
    skill: "Lug'at",
    kind: "choice",
    instructions: "Belgiga mos gapni tanlang.",
    questions: [
      say("☀️", ["It's sunny.", "It's cloudy.", "It's foggy.", "It's snowy."]),
      say("☁️", ["It's cloudy.", "It's sunny.", "It's windy.", "It's dry."]),
      say("💨", ["It's windy.", "It's warm.", "It's foggy.", "It's wet."]),
      say("🌫️", ["It's foggy.", "It's sunny.", "It's windy.", "It's hot."]),
      say("🌧️", ["It's rainy.", "It's snowy.", "It's sunny.", "It's dry."]),
      say("❄️", ["It's snowy.", "It's rainy.", "It's warm.", "It's sunny."]),
      say("⛈️", ["There's a storm.", "It's sunny.", "It's warm.", "It's dry."]),
      say("🌸", ["spring", "autumn", "winter", "summer"]),
      say("🍂", ["autumn", "spring", "summer", "winter"]),
      say("⛄", ["winter", "summer", "spring", "autumn"]),
    ],
  },
  {
    title: "Qancha oldin?",
    skill: "Grammatika",
    kind: "type",
    instructions: "Bugun — 2026-yil 24-oktabr, shanba. Qancha vaqt oldin bo'lganini «ago» bilan yozing. Sonlarni so'z bilan yozing. Masalan: on 22 October → two days ago.",
    questions: written([
      ["on 19 October", "five days ago"],
      ["on 21 October", "three days ago"],
      ["on 17 October", "a week ago"],
      ["on 10 October", "two weeks ago"],
      ["on 24 September", "a month ago"],
      ["on 24 October 2025", "a year ago"],
      ["in 2016", "ten years ago"],
      ["in 2021", "five years ago"],
      ["this morning at 8:00 (now it's 11:00)", "three hours ago"],
      ["at 10:40 (now it's 11:00)", "twenty minutes ago"],
    ]),
  },
  {
    title: "ago, last yoki in?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Bo'sh joyga mos so'zni tanlang.",
    questions: [
      say("I saw him two days ___.", ["ago", "last", "in", "before ago"]),
      say("We went to Bukhara ___ summer.", ["last", "ago", "in", "on"]),
      say("She was born ___ 2010.", ["in", "ago", "last", "on"]),
      say("It snowed ___ night.", ["last", "ago", "in", "on"]),
      say("They came here ten years ___.", ["ago", "last", "in", "before"]),
      say("I called you an hour ___.", ["ago", "last", "in", "on"]),
      say("He won the prize ___ week.", ["last", "ago", "in", "on"]),
      say("My grandfather was a teacher ___ the 1970s.", ["in", "ago", "last", "on"]),
      say("___ did you buy this phone? — A month ago.", ["When", "Where", "What", "Who"]),
      say("How long ___ did it happen?", ["ago", "last", "in", "before"]),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Juftlarni ulang.",
    questions: pairs([
      ["sunny|quyoshli", "cloudy|bulutli", "windy|shamolli", "foggy|tumanli"],
      ["rain|yomg'ir", "snow|qor", "storm|bo'ron", "ice|muz"],
      ["spring|bahor", "summer|yoz", "autumn|kuz", "winter|qish"],
      ["wet|ho'l", "dry|quruq", "warm|iliq", "lucky|omadli"],
      ["news|yangilik", "prize|sovrin", "fire|yong'in", "world|dunyo"],
      ["win|won", "see|saw", "make|made", "buy|bought"],
    ]),
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("I saw him *before two days.", "«…oldin» — two days ago."),
      mistake("We went there *ago two years.", "ago — vaqtdan keyin: two years ago."),
      mistake("She came *last two days ago.", "last kerak emas: two days ago."),
      mistake("It was *sun yesterday.", "Sifat kerak: sunny."),
      mistake("The news *are very good.", "news — birlikda: The news is…"),
      mistake("It *snow every winter.", "it + -s: It snows."),
      mistake("Our team *winned the match.", "win → won."),
      mistake("What's the weather *likes today?", "What's the weather like?"),
      mistake("It was very *wind in the afternoon.", "Sifat kerak: windy."),
      mistake("I read the news *in online.", "in kerak emas: online."),
    ],
  },
  {
    title: "Ob-havo haqida suhbat",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Suhbatdoshingiz gapirdi. Unga mos javobni tanlang.",
    questions: [
      say("What's the weather like today?", ["It's sunny and warm.", "It's like weather.", "It was sunny yesterday ago.", "I like the weather."]),
      say("What was the weather like yesterday?", ["It was cloudy and windy.", "It's cloudy now.", "It were cloudy.", "Yesterday is windy."]),
      say("Did you hear the news?", ["No, I didn't. What happened?", "No, I don't hear.", "Yes, I didn't.", "No, I heared."]),
      say("When did you come to Tashkent?", ["Five years ago.", "Before five years.", "Ago five years.", "Last five years."]),
      say("What's your favourite season?", ["Spring. It's warm and green.", "My season is Monday.", "It's weather.", "I like a season."]),
      say("Take an umbrella!", ["Thanks! Is the forecast bad?", "Why? Is it sunny?", "Thanks, it's dry.", "No, I won."]),
      say("Our team won the match!", ["Fantastic! Well done!", "What a pity!", "Take an umbrella!", "Sorry I'm late!"]),
      say("What's the temperature today?", ["About twenty degrees.", "It's very weather.", "It's temperature.", "Two days ago."]),
      say("Was it cold in the mountains?", ["Yes, it was. There was snow.", "Yes, it did.", "Yes, it is cold yesterday.", "No, it didn't."]),
      say("What does the forecast say?", ["It says it's windy tomorrow.", "It says yesterday.", "It said two days ago tomorrow.", "Forecast is news."]),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "What's the weather like today?",
      "It was cloudy all day.",
      "I came here three years ago.",
      "There was a big storm last night.",
      "Did you hear the news?",
      "Our team won the match.",
      "She won first prize.",
      "It snows in winter.",
      "My favourite season is spring.",
      "The forecast says it's sunny tomorrow.",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Bo'sh joyga bitta so'z yozing.",
    questions: written([
      ["I met her three years ___.", "ago"],
      ["We went to Khiva ___ summer.", "last"],
      ["What's the weather ___ today?", "like"],
      ["It's ___ today. Take an umbrella! (yomg'irli)", "rainy"],
      ["There's a lot of wind. It's very ___.", "windy"],
      ["We can't see the road. It's ___.", "foggy"],
      ["Our team ___ the match. (win)", "won"],
      ["The ___ is thirty degrees. It's hot!", "temperature"],
      ["Navruz is in ___.", "spring"],
      ["Did you hear the ___? A teacher won the lottery!", "news"],
    ]),
  },
  {
    title: "Yangiliklar",
    skill: "Matn bilan ishlash",
    kind: "reading",
    instructions: "Yangiliklarni diqqat bilan o'qing va har bir savolga javob bering.",
    questions: [
      read("When did Dilbar buy the lottery ticket?", ["Two weeks ago", "Last Friday", "Yesterday", "Ten years ago"]),
      read("What is Dilbar's job?", ["She's a teacher.", "She's a doctor.", "She's a journalist.", "The text doesn't say."]),
      read("Who did she call?", ["Her husband", "Her mother", "The police", "Her friend"]),
      read("What was the weather like in Tashkent yesterday morning?", ["Sunny and warm", "Windy", "Snowy", "Foggy"]),
      read("What happened at three o'clock?", ["It was windy, and then it snowed.", "It rained.", "There was a fire.", "It was sunny."]),
      read("How long did the snow stay?", ["About an hour", "All day", "Two days", "A week"]),
      read("What colour was the sky later?", ["Blue", "Grey", "White", "Black"]),
      read("What did Sardor do ten years ago?", ["He played chess at school.", "He won a prize.", "He went to Paris.", "He was a teacher."]),
      read("How old is Sardor now?", ["Nineteen", "Ten", "Twenty-nine", "Fifteen"]),
      read("Where did he win first prize?", ["In Paris", "In Tashkent", "In Fergana", "In London"]),
    ],
  },
  {
    title: "Ob-havo ma'lumoti",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Ob-havo ma'lumotini tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Toshkentda ertalab havo qanday?", ["Bulutli", "Quyoshli", "Shamolli", "Tumanli"]),
      hear("Toshkentda harorat necha daraja?", ["22", "28", "3", "12"]),
      hear("Samarqandda kechqurun nima bo'ladi?", ["Yomg'ir", "Qor", "Bo'ron", "Tuman"]),
      hear("Samarqandliklarga nima olish tavsiya qilindi?", ["Soyabon", "Kurtka", "Shapka", "Ko'zoynak"]),
      hear("Nukusda havo qanday?", ["Quyoshli va juda quruq", "Bulutli va ho'l", "Sovuq va tumanli", "Shamolli va yomg'irli"]),
      hear("Bugun eng issiq joy qayer?", ["Nukus", "Toshkent", "Samarqand", "Chimyon"]),
      hear("Chimyon yaqinidagi tog'larda havo qanday?", ["Sovuq va tumanli", "Issiq va quyoshli", "Shamolli va quruq", "Iliq va bulutli"]),
      hear("Tog'larda harorat necha daraja?", ["3", "13", "22", "0"]),
      hear("Kecha Farg'onada nima bo'ldi?", ["Kuchli bo'ron", "Yong'in", "Qor", "Zilzila"]),
      hear("Bo'ron tufayli nima bo'ldi?", ["Ko'p daraxtlar yiqildi", "Uylar yondi", "Yo'llar muzladi", "Hech narsa"]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "What's the weather like?",
      "It's sunny and warm.",
      "It was windy yesterday.",
      "Take an umbrella!",
      "two days ago",
      "ten years ago",
      "Did you hear the news?",
      "We won!",
      "autumn",
      "temperature",
    ]),
  },
];
