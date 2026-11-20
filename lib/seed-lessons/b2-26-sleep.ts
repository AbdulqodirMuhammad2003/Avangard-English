/**
 * B2, 26-dars — «Sleep». Uyqu haqidagi faktlar, uyqu idiomalari (sleep like
 * a log, a light sleeper, not sleep a wink …).
 * Grammatika: past and present habits — used to, would, be/get used to.
 * Navigate B2, 9.2 asosida: tinglash mashqlarida kitob treklari (yopiq
 * ombordan), lug'at misollari kitob matni va Wordlist'idan yoki unga yaqin;
 * mashq matnlari o'zimizniki. Mashqlar inglizcha.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  gaps,
  hearing,
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

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

export const B2_26_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("😳", "insomnia", "ɪnˈsɒmniə|insomnia", "ot", "Uyqusizlik", "A condition when you can't sleep.", "Insomnia is almost twice as common in women as in men.", "Uyqusizlik ayollarda erkaklarga qaraganda deyarli ikki baravar ko'p uchraydi."),
      w("👁️", "didn't sleep a wink", "ˌdɪdnt sliːp ə ˈwɪŋk|didnt sliip a wink", "ibora", "Mijja qoqmadi", "Didn't sleep at all.", "I was so worried that I didn't sleep a wink.", "Shunchalik xavotirda edimki, mijja qoqmadim."),
      w("😴", "uninterrupted", "ˌʌnɪntəˈrʌptɪd|anintaraptid", "sifat", "Uzluksiz, to'xtovsiz", "Without stopping or breaks.", "We believe that we need eight hours' uninterrupted sleep.", "Biz sakkiz soat uzluksiz uyqu kerak deb hisoblaymiz."),
      w("👀", "wide awake", "ˌwaɪd əˈweɪk|wayd aweyk", "ibora", "Butunlay uyg'oq", "Completely awake.", "In the Middle Ages, people would often get up in the night, wide awake, to chat.", "O'rta asrlarda odamlar ko'pincha tunda butunlay uyg'onib, suhbatlashish uchun turishardi."),
      w("🚗", "unintentionally", "ˌʌnɪnˈtenʃənəli|aninetenshanali", "ravish", "Beixtiyor", "Without wanting to.", "Nearly half of US adults admitted to falling asleep unintentionally during the day.", "AQShdagi kattalarning qariyb yarmi kunduzi beixtiyor uxlab qolganini tan oldi."),
      w("🥱", "nodding off", "ˈnɒdɪŋ ɒf|noding of", "ibora", "Mudrab ketish", "Falling asleep when you don't want to.", "Twice as many men as women admit to nodding off while driving.", "Haydash paytida mudrab ketganini tan olgan erkaklar ayollardan ikki baravar ko'p."),
      w("💤", "a snooze", "ə ˈsnuːz|a snuuz", "ibora", "Qisqa mudroq", "A short, light sleep.", "In many cultures, having a snooze is much more acceptable.", "Ko'p madaniyatlarda qisqa mudrash ancha maqbul hisoblanadi."),
      w("☕", "refreshing", "rɪˈfreʃɪŋ|rifreshing", "sifat", "Tetiklantiruvchi", "Making you feel less tired.", "A short nap is more refreshing than a cup of coffee.", "Qisqa uyqu bir piyola qahvadan ko'ra tetiklantiruvchiroq."),
      w("🕙", "bedtimes", "ˈbedtaɪmz|bedtaymz", "ot", "Uxlash vaqti", "The times when you usually go to bed.", "Once parents stop managing their bedtimes, teenagers start going to bed much later.", "Ota-onalar uxlash vaqtini nazorat qilmay qo'ygach, o'smirlar ancha kech yota boshlaydi."),
      w("🧠", "retain", "rɪˈteɪn|riteyn", "fe'l", "Saqlab qolmoq (xotirada)", "Keep something, e.g. in your memory.", "Sleeping after you learn something new helps your memory to retain it.", "Yangi narsa o'rgangandan keyin uxlash xotirangizga uni saqlab qolishga yordam beradi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🪵", "sleep like a log", "ˌsliːp laɪk ə ˈlɒɡ|sliip layk a log", "ibora", "Qotib uxlamoq", "Sleep very deeply.", "After a day in the mountains, I always sleep like a log.", "Tog'da bir kun o'tkazgandan keyin doim qotib uxlayman."),
      w("🛏️", "have a lie-in", "ˌhæv ə ˈlaɪ ɪn|hev a lay in", "ibora", "Ertalab uzoqroq yotmoq", "Stay in bed later than usual in the morning.", "On Sundays I like to have a lie-in.", "Yakshanbalari ertalab uzoqroq yotishni yaxshi ko'raman."),
      w("⏰", "catch up on", "ˌkætʃ ˈʌp ɒn|kech ap on", "ibora", "To'ldirib olmoq (kechikkan narsani)", "Do something you didn't have time for before.", "At the weekend I catch up on sleep.", "Dam olish kunlari uyquni to'ldirib olaman."),
      w("🌅", "crack of dawn", "ˌkræk əv ˈdɔːn|krek av doon", "ibora", "Tong sahar", "Very early in the morning.", "Would you prefer to have a lie-in or to get up at the crack of dawn?", "Uzoqroq yotishni afzal ko'rasizmi yoki tong saharda turishnimi?"),
      w("😪", "fast asleep", "ˌfɑːst əˈsliːp|faast asliip", "ibora", "Qattiq uxlagan", "Completely asleep.", "When I got home, the children were fast asleep.", "Uyga kelganimda bolalar qattiq uxlab yotishgan edi."),
      w("🪶", "a light sleeper", "ə ˌlaɪt ˈsliːpə|a layt sliipa", "ibora", "Sezgir uxlaydigan odam", "Someone who wakes up easily.", "I'm a light sleeper — the smallest noise wakes me up.", "Men sezgir uxlayman — eng kichik ovoz ham uyg'otib yuboradi."),
      w("😌", "sleep soundly", "ˌsliːp ˈsaʊndli|sliip saundli", "ibora", "Tinch uxlamoq", "Sleep deeply and well.", "After a long walk, I always sleep soundly all night.", "Uzoq sayrdan keyin doim tun bo'yi tinch uxlayman."),
      w("🛌", "drop off", "ˌdrɒp ˈɒf|drop of", "ibora", "Uxlab qolmoq", "Fall asleep.", "How quickly do you usually drop off at night?", "Kechasi odatda qanchalik tez uxlab qolasiz?"),
      w("😰", "nightmares", "ˈnaɪtmeəz|naytmeaz", "ot", "Dahshatli tushlar", "Very frightening dreams.", "Did you use to have nightmares when you were a kid?", "Bolaligingizda dahshatli tushlar ko'rarmidingiz?"),
      w("🎒", "hammock", "ˈhæmək|hemak", "ot", "Gamak (osma to'r karavot)", "A bed made of cloth or net that hangs between two trees.", "If you aren't used to sleeping in a hammock, it can be uncomfortable.", "Gamakda uxlashga o'rganmagan bo'lsangiz, noqulay bo'lishi mumkin."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🔙", "used to", "ˈjuːst tə|yuust ta", "ibora", "…ardi (o'tmishdagi odat)", "Something was true in the past but isn't now.", "We tend to get less sleep overall than we used to.", "Biz ilgarigidan umuman kamroq uxlaymiz."),
      w("🔁", "would often", "wʊd ˈɒfn|wud ofn", "ibora", "Ko'pincha …ardi", "Past habit (not for states).", "People would often get up for a while in the night.", "Odamlar ko'pincha kechasi bir muddat turishardi."),
      w("✅", "used to getting up", "ˌjuːst tə ˌɡetɪŋ ˈʌp|yuust ta geting ap", "ibora", "Erta turishga o'rgangan", "Familiar with getting up (at a certain time).", "It's difficult because I'm not used to getting up so early.", "Qiyin, chunki men bunchalik erta turishga o'rganmaganman."),
      w("🔄", "get used to", "ˌɡet ˈjuːst tə|get yuust ta", "ibora", "…ga ko'nikmoq", "Become familiar with something.", "I found it difficult to get used to sleeping in my new bed.", "Yangi karavotimda uxlashga ko'nikish menga qiyin bo'ldi."),
      w("🌙", "bedtime", "ˈbedtaɪm|bedtaym", "ot", "Uxlash vaqti", "The time when you usually go to bed.", "My bedtime used to be nine o'clock.", "Ilgari uxlash vaqtim soat to'qqiz edi."),
      w("🐄", "farm animals", "ˈfɑːm ˌænɪmlz|faam enimlz", "ibora", "Uy hayvonlari (fermadagi)", "Cows, sheep, chickens and other animals on a farm.", "My grandfather would always check the farm animals before bed.", "Bobom yotishdan oldin doim fermadagi hayvonlarni tekshirardi."),
      w("🎧", "earplugs", "ˈɪəplʌɡz|iaplagz", "ot", "Quloq tiqinlari", "Small soft things you put in your ears to block noise.", "I put in the earplugs and put on the eye mask, but I still couldn't sleep.", "Quloq tiqinlarini taqib, ko'z niqobini kiydim, lekin baribir uxlay olmadim."),
      w("🫖", "without sugar", "wɪðˌaʊt ˈʃʊɡə|wizaut shuga", "ibora", "Shakarsiz", "With no sugar added.", "I don't think I'll ever get used to taking my tea without sugar.", "Choyni shakarsiz ichishga hech qachon ko'nikmasam kerak."),
      w("🏰", "the Middle Ages", "ðə ˌmɪdl ˈeɪdʒɪz|za midl eyjiz", "ibora", "O'rta asrlar", "The period in Europe from about 500 to 1500.", "In the Middle Ages, people slept in two parts.", "O'rta asrlarda odamlar ikki bo'lib uxlashgan."),
      w("✈️", "sitting upright", "ˌsɪtɪŋ ˈʌpraɪt|siting apravt", "ibora", "Tik o'tirib", "Sitting with your back straight, not lying down.", "I just can't sleep sitting upright on a plane.", "Samolyotda tik o'tirib umuman uxlay olmayman."),
    ],
  },
];

const ARTICLE = `SOME FACTS ABOUT SLEEP WHICH MAY SURPRISE YOU
Insomnia is almost twice as common in women as in men. Nowadays we believe we need eight hours' uninterrupted sleep, but in the Middle Ages people would often get up for a while in the night to chat or visit neighbours. Since we started using artificial light, we get less sleep than we used to.
Nearly half of US adults admit to falling asleep unintentionally during the day, and twice as many men as women admit to nodding off while driving. A short nap is more refreshing than a cup of coffee.
Teenagers usually go to bed much later once parents stop managing their bedtimes, but they still need nine to ten hours a night — as much as a six-year-old.
80% of people need six to nine hours' sleep. If you are used to sleeping for nine hours, you can't force yourself to get used to having only six — but you can catch up on missed sleep by having a lie-in.`;
const tf = trueFalse(ARTICLE);

export const B2_26_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("I never used to like classical music.", ["I never used to like classical music.", "I never use to like classical music.", "I'm not used to liking classical music.", "I never used to like modern music."]),
      listen("My grandfather would always check the farm animals.", ["My grandfather would always check the farm animals.", "My grandfather used to always check the farm animals.", "My grandfather would always feed the farm animals.", "My grandfather will always check the farm animals."]),
      listen("I'm not used to making phone calls in Spanish.", ["I'm not used to making phone calls in Spanish.", "I didn't use to make phone calls in Spanish.", "I'm not used to make phone calls in Spanish.", "I'm not used to making phone calls in French."]),
      listen("I don't think I'll ever get used to taking my tea without sugar.", ["I don't think I'll ever get used to taking my tea without sugar.", "I don't think I'll ever get used to take my tea without sugar.", "I don't think I ever got used to taking my tea without sugar.", "I don't think I'll ever get used to taking my coffee without sugar."]),
      listen("I didn't sleep a wink.", ["I didn't sleep a wink.", "I didn't sleep a week.", "I didn't sleep at all.", "I couldn't sleep a wink."]),
      listen("You can catch up on missed sleep by having a lie-in.", ["You can catch up on missed sleep by having a lie-in.", "You can catch up on lost sleep by having a lie-in.", "You can catch up on missed sleep by having a nap.", "You can't catch up on missed sleep by having a lie-in."]),
      listen("He sleeps like a log.", ["He sleeps like a log.", "He sleeps like a dog.", "He slept like a log.", "He sleeps like a baby."]),
      listen("insomnia", ["insomnia", "insomniac", "amnesia", "in Somalia"]),
      listen("uninterrupted", ["uninterrupted", "interrupted", "uninterested", "uninhabited"]),
      listen("refreshing", ["refreshing", "refreshment", "refresh", "fresh thing"]),
    ],
  },
  {
    title: "Some facts about sleep",
    skill: "Reading",
    kind: "truefalse",
    instructions: "Read the article. Are the sentences true or false?",
    questions: [
      tf("Women are almost twice as likely as men to have insomnia.", true),
      tf("In the Middle Ages people always slept eight hours without waking.", false, "They would often get up in the night."),
      tf("We sleep less since the invention of artificial light.", true),
      tf("Women are more likely than men to fall asleep while driving.", false, "Twice as many men as women."),
      tf("A short nap is more refreshing than a coffee.", true),
      tf("Teenagers need as much sleep as small children.", true, "As much as a six-year-old."),
      tf("You can train yourself to need much less sleep.", false, "Apparently not."),
      tf("A lie-in can help you catch up on missed sleep.", true),
    ],
  },
  {
    title: "used to, would, be/get used to",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct option.",
    questions: [
      say("I have to get up at 6 for my new job. It's difficult because I'm not ___ so early.", ["used to getting up", "used to get up", "use to get up", "getting used get up"]),
      say("João has lived in Brazil all his life, so he's ___ it being hot at night.", ["used to", "getting used to", "use to", "would"]),
      say("I ___ late nights, but now I need my sleep more.", ["used to love", "would love", "am used to love", "use to love"]),
      say("Don't ring me before 9, as I ___ get up late at the weekend.", ["usually", "used to", "would", "am used to"]),
      say("When I first started working nights, it was hard. But now I'm ___ to it.", ["used", "getting use", "use", "using"]),
      say("When I was a child, I ___ stay up late reading with a torch.", ["would", "am used to", "get used to", "was used"]),
      say("We ___ live in Manchester for a few years.", ["used to", "would", "were used to", "use"]),
      say("___ you use to do any sports at school?", ["Did", "Were", "Would", "Do"]),
      say("I didn't ___ read much as a child.", ["use to", "used to", "would", "using to"]),
      say("We're ___ living here — it's slowly feeling like home.", ["getting used to", "used to", "use to", "would"]),
    ],
  },
  {
    title: "Grammar sentences",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear four sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("gr-9.2"), [
        ["I never ___ classical music, but now I find listening to it very relaxing.", "used to like", "would like", "was used to liking"],
        ["My grandfather ___ the farm animals were content before he went to bed.", "would always check", "always used checking", "is used to checking"],
        ["I'm not ___ phone calls in Spanish. I find them a bit stressful.", "used to making", "used to make", "use to making"],
        ["I don't think I'll ever ___ my tea without sugar.", "get used to taking", "get used to take", "use to take"],
      ]),
    ],
  },
  {
    title: "Complete the sentences",
    skill: "Grammar",
    kind: "fill",
    instructions: "Complete each sentence with the correct form of the verb in brackets.",
    questions: written([
      ["If you aren't used to ___ in a hammock, it can be uncomfortable. (sleep)", "sleeping"],
      ["I used to ___ up a lot at night, but now I sleep really heavily. (wake)", "wake"],
      ["I can't get used to ___ to bed when it's still light outside. (go)", "going"],
      ["Did you use to ___ nightmares when you were a kid? (have)", "have"],
      ["I found it difficult to get used to ___ in my new bed. (sleep)", "sleeping"],
      ["She found it hard when she had a baby because she was used to ___ plenty of sleep. (get)", "getting"],
      ["Alaska ___ to Russia. The USA bought it in 1867. (belong — use «used to»)", "used to belong"],
      ["There ___ nine planets, but now there are only eight. (be — use «used to»)", "used to be"],
    ]),
  },
  {
    title: "Sleep idioms",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match each idiom to an expression with a similar or opposite meaning.",
    questions: pairs([
      ["get up at the crack of dawn|opposite: have a lie-in", "fast asleep|opposite: wide awake", "falling asleep|similar: nodding off", "a light sleeper|opposite: sleep like a log"],
      ["sleep soundly all night|opposite: not sleep a wink", "have a nap|similar: have a snooze", "drop off|similar: fall asleep", "catch up on sleep|similar: have a lie-in"],
    ]),
  },
  {
    title: "Complete the idioms",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the word that completes the idiom.",
    questions: [
      say("Would you prefer to have a ___ in or to get up at the crack of dawn?", ["lie", "sleep", "stay", "wake"]),
      say("How quickly do you usually ___ off at night?", ["drop", "fall", "nod", "go"]),
      say("Are you a light sleeper, or do you sleep like a ___?", ["log", "dog", "baby", "stone"]),
      say("When was the last time you didn't sleep a ___?", ["wink", "minute", "moment", "blink"]),
      say("Did you use to ___ asleep more quickly?", ["fall", "drop", "nod", "go"]),
      say("Do you ever have a ___ during the day?", ["nap", "lie-in", "wink", "log"]),
    ],
  },
  {
    title: "Maria's sleep habits",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to Maria talking about her sleep habits. Answer the questions.",
    questions: [
      hearing(track("9.4"))("Which question is Maria answering?", ["When was the last time you had a night where you didn't sleep a wink?", "How quickly do you usually drop off at night?", "Are you a light sleeper?", "Do you ever have a nap during the day?"]),
      hearing(track("9.4"))("Where does she find it difficult to sleep?", ["On aeroplanes", "In hotels", "In a hammock", "At home"]),
      hearing(track("9.4"))("How long was the flight?", ["Thirteen hours", "Three hours", "Thirty hours", "Eight hours"]),
      hearing(track("9.4"))("What did she use to try to sleep?", ["Earplugs and an eye mask", "Sleeping pills", "Music", "A pillow and a blanket"]),
      hearing(track("9.4"))("Why can't she sleep on planes?", ["She can't sleep sitting upright.", "It's too noisy.", "She's afraid of flying.", "The seats are too small."]),
      hearing(track("9.4"))("How did she feel when they arrived?", ["Exhausted", "Refreshed", "Happy", "Hungry"]),
    ],
  },
  {
    title: "Sleep in history",
    skill: "Grammar",
    kind: "choice",
    instructions: "Read about sleep in the past. Choose the correct form.",
    questions: [
      say("Sleep patterns today are not the same as they ___.", ["used to be", "would be", "are used to being", "use to be"]),
      say("Today, we ___ to bed and sleep for up to eight hours.", ["usually go", "used to go", "would go", "are used to go"]),
      say("In the past, humans ___ in two separate phases.", ["used to sleep", "are used to sleeping", "use to sleep", "get used to sleep"]),
      say("The first phase of sleep ___ about two hours after dusk.", ["would begin", "is used to begin", "use to begin", "would to begin"]),
      say("After better street lighting, people soon ___ going to bed later.", ["got used to", "used to", "would", "are used"]),
    ],
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("We *would live in Manchester for a few years.", "State verb → used to live (not would)."),
      mistake("I didn't *used to read much as a child.", "No -d in negatives: didn't use to."),
      mistake("I'm not used to *get up so early.", "be used to + -ing: getting up."),
      mistake("I'm used to *drive on the left now.", "be used to + -ing: driving."),
      mistake("I *use to go to bed at ten every night now.", "Present habit → present simple: I usually go."),
      mistake("I'll never get used to *take my tea without sugar.", "get used to + -ing: taking."),
      mistake("Did you *used to have nightmares?", "Question: Did you use to …?"),
      mistake("I didn't sleep a *blink all night.", "not sleep a wink."),
      mistake("He sleeps like a *stone — nothing wakes him.", "sleep like a log."),
      mistake("I love having a *lie-down in bed on Sunday mornings.", "Staying in bed late in the morning → a lie-in."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "I never used to like classical music.",
      "My grandfather would always check the animals.",
      "I'm not used to getting up so early.",
      "I can't get used to going to bed when it's light.",
      "We get less sleep than we used to.",
      "A short nap is more refreshing than coffee.",
      "I didn't sleep a wink last night.",
      "You can catch up on sleep by having a lie-in.",
    ]),
  },
  {
    title: "Talk about sleep",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best answer.",
    questions: [
      say("Are you a light sleeper?", ["Not at all — I sleep like a log.", "Not at all — I sleep like a light.", "Not at all — I'm used to sleep.", "Not at all — I would sleep a wink."]),
      say("How's the new job? You start at 6 a.m., don't you?", ["It's hard, but I'm getting used to it.", "It's hard, but I'm getting use to it.", "It's hard, but I used to get up.", "It's hard, but I would get up."]),
      say("Did you sleep well on the plane?", ["No, I didn't sleep a wink.", "No, I didn't sleep a log.", "No, I slept like a log.", "No, I had a lie-in."]),
      say("What did you do as a child in summer?", ["We would play outside until it got dark.", "We would to play outside until dark.", "We are used to playing outside.", "We use to play outside now."]),
      say("Do you get up early at weekends?", ["No, I usually have a lie-in.", "No, I used to have a lie-in now.", "No, I would have a lie-in now.", "No, I get used to a lie-in."]),
      say("Is it hard to drive on the right in Europe?", ["Not now — I got used to it pretty quickly.", "Not now — I used to it pretty quickly.", "Not now — I'm used to drive.", "Not now — I would get used."]),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then say it yourself. «used to» is pronounced /ˈjuːstə/.",
    questions: phrases([
      "I never used to like classical music.",
      "My grandfather would always check the farm animals.",
      "I'm not used to making phone calls in Spanish.",
      "I'll never get used to taking my tea without sugar.",
      "I didn't sleep a wink.",
      "He sleeps like a log.",
      "I usually have a lie-in at the weekend.",
      "insomnia",
      "uninterrupted",
      "refreshing",
    ]),
  },
];
