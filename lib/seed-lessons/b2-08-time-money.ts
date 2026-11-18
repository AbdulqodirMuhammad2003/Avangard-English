/**
 * B2, 8-dars — «Best ways to invest your time». Vaqt va pul bilan
 * birikmalar (kill time, fritter away, get your money's worth …), maqsad
 * qo'yish.
 * Grammatika: future continuous va future perfect.
 * Navigate B2, 3.2 asosida: grammatika tinglash mashqida kitob treki
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
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

export const B2_08_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🪙", "be short of", "bi ˈʃɔːt əv|bi shoot av", "ibora", "…ga kamchil bo'lmoq", "Not have enough of something.", "Students often seem to be short of money at the end of the month.", "Talabalarda oy oxirida ko'pincha pul kamlik qiladi."),
      w("🐢", "take your time", "ˌteɪk jə ˈtaɪm|teyk ya taym", "ibora", "Shoshilmaslik", "Do something slowly, without hurrying.", "Take your time — there's no hurry.", "Shoshilmang — vaqt yetarli."),
      w("🍂", "fritter away", "ˌfrɪtər əˈweɪ|fritar awey", "ibora", "Behuda sovurmoq (vaqt, pul)", "Waste time or money on small, unimportant things.", "Stephen Covey feels we fritter away too much time.", "Stiven Kovining fikricha, biz juda ko'p vaqtni behuda sovuramiz."),
      w("💯", "get your money's worth", "ˌɡet jə ˌmʌniz ˈwɜːθ|get ya maniz wooS", "ibora", "To'lagan puliga arzigulik narsa olmoq", "Get enough value for the money you paid.", "You should get to the festival early if you want to get your money's worth.", "Pulingizga arzigulik narsa olmoqchi bo'lsangiz, festivalga erta boring."),
      w("⏳", "time to spare", "ˌtaɪm tə ˈspeə|taym ta spea", "ibora", "Ortiqcha (bo'sh) vaqt", "Extra time that you don't need for anything else.", "I'm really busy, so I have no time to spare this week.", "Juda bandman, shu hafta bo'sh vaqtim yo'q."),
      w("🏦", "invest time", "ɪnˌvest ˈtaɪm|invest taym", "ibora", "Vaqt sarflamoq (foydali ishga)", "Spend time on something that will help you later.", "Invest time in looking after your health.", "Sog'lig'ingizga g'amxo'rlik qilishga vaqt ajrating."),
      w("🎮", "kill time", "ˌkɪl ˈtaɪm|kil taym", "ibora", "Vaqt o'tkazmoq (zerikkanda)", "Do something unimportant while you wait.", "Why do we kill time playing games on our phones or tablets?", "Nega telefon yoki planshetda o'yin o'ynab vaqt o'tkazamiz?"),
      w("📺", "waste hours", "ˌweɪst ˈaʊəz|weyst auaz", "ibora", "Soatlab vaqtni bekor o'tkazmoq", "Use many hours badly.", "Why do we waste hours watching boring TV programmes?", "Nega zerikarli teleko'rsatuvlarni ko'rib soatlab vaqtni bekor o'tkazamiz?"),
      w("🗂️", "set aside", "ˌset əˈsaɪd|set asayd", "ibora", "Ajratib qo'ymoq (vaqt, pul)", "Keep time or money for a special purpose.", "Set aside an hour every week to plan your goals.", "Maqsadlaringizni rejalash uchun har hafta bir soat ajrating."),
      w("☀️", "while away", "ˌwaɪl əˈweɪ|wayl awey", "ibora", "Vaqtni maroqli o'tkazmoq", "Spend time in a relaxed way.", "We used to while away the summer afternoons reading in the garden.", "Yozgi tushdan keyinlarni bog'da kitob o'qib o'tkazardik."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("💸", "throw your money around", "ˌθrəʊ jə ˈmʌni əˌraʊnd|srou ya mani araund", "ibora", "Pulni sovurmoq", "Spend money carelessly.", "Don't throw your money around — try to save it for something really worth buying.", "Pulni sovurmang — uni chindan arziydigan narsa uchun saqlang."),
      w("🛍️", "worth buying", "ˌwɜːθ ˈbaɪɪŋ|wooS baying", "ibora", "Sotib olishga arziydigan", "Good enough to spend money on.", "Is this phone really worth buying?", "Bu telefon chindan sotib olishga arziydimi?"),
      w("🦉", "wisely", "ˈwaɪzli|wayzli", "ravish", "Oqilona", "In a sensible way.", "Like money, we can choose to spend our time wisely.", "Pul kabi vaqtni ham oqilona sarflashni tanlashimiz mumkin."),
      w("🚨", "urgent", "ˈɜːdʒənt|oojant", "sifat", "Shoshilinch", "Needing to be done immediately.", "These plans may not be urgent, but that doesn't mean they aren't important.", "Bu rejalar shoshilinch bo'lmasligi mumkin, lekin bu ular muhim emas degani emas."),
      w("🆘", "emergencies", "ɪˈmɜːdʒənsiz|imoojansiz", "ot", "Favqulodda holatlar", "Sudden problems that need action now.", "If you are always dealing with day-to-day emergencies, you'll never achieve anything bigger.", "Doim kundalik favqulodda ishlar bilan band bo'lsangiz, kattaroq narsaga erisholmaysiz."),
      w("📏", "measurable", "ˈmeʒərəbl|mejarabl", "sifat", "O'lchasa bo'ladigan", "That you can measure or count.", "Make sure your goals are specific and measurable.", "Maqsadlaringiz aniq va o'lchasa bo'ladigan bo'lsin."),
      w("📈", "overestimate", "ˌəʊvərˈestɪmeɪt|ouvarestimeyt", "fe'l", "Ortiqcha baholamoq", "Think something is bigger or better than it is.", "Most people overestimate what they can do in a day.", "Ko'pchilik bir kunda nima qila olishini ortiqcha baholaydi."),
      w("📉", "underestimate", "ˌʌndərˈestɪmeɪt|andarestimeyt", "fe'l", "Kam baholamoq", "Think something is smaller or less than it is.", "People underestimate what can be achieved in a year.", "Odamlar bir yilda nimaga erishish mumkinligini kam baholaydi."),
      w("🎯", "break down", "ˌbreɪk ˈdaʊn|breyk daun", "ibora", "Bo'laklarga ajratmoq", "Divide something into smaller parts.", "Break down each goal so that you know exactly what to do each week.", "Har bir maqsadni bo'laklarga ajrating, shunda har hafta nima qilishni aniq bilasiz."),
      w("🥗", "home-cooked", "ˌhəʊm ˈkʊkt|houm kukt", "sifat", "Uyda pishirilgan", "Made at home, not bought ready.", "I much prefer to spend money on home-cooked food than on microwaveable meals.", "Mikroto'lqinli ovqatdan ko'ra uyda pishirilgan taomga pul sarflashni afzal ko'raman."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🍱", "ready-prepared", "ˌredi prɪˈpeəd|redi pripead", "sifat", "Tayyor (sotib olinadigan ovqat)", "Already made, so you only need to heat it.", "Ready-prepared meals can be just as good as home-cooked food.", "Tayyor ovqatlar uyda pishirilgan taomdek yaxshi bo'lishi mumkin."),
      w("🏡", "settle down", "ˌsetl ˈdaʊn|setl daun", "ibora", "O'rnashib qolmoq (bir joyda)", "Start living a calm life in one place.", "After years of travelling, she wants to settle down in Canada.", "Yillar davomida sayohat qilgach, u Kanadada o'rnashmoqchi."),
      w("🔁", "take over", "ˌteɪk ˈəʊvə|teyk ouva", "ibora", "(Ishni) o'z zimmasiga olmoq", "Start doing a job after someone else.", "Who will take over from you when you start your new job?", "Yangi ishga o'tganingizda sizning o'rningizni kim egallaydi?"),
      w("🔄", "beyond recognition", "bɪˌjɒnd ˌrekəɡˈnɪʃn|biyond rekagnishn", "ibora", "Tanib bo'lmas darajada", "So much that it is very hard to recognize.", "Computers will have changed beyond recognition in twenty years' time.", "Yigirma yildan keyin kompyuterlar tanib bo'lmas darajada o'zgargan bo'ladi."),
      w("📅", "this time next year", "ˌðɪs taɪm nekst ˈjɪə|zis taym nekst yia", "ibora", "Kelasi yil aynan shu paytda", "At the same time one year from now.", "This time next year, I'll be living in another country.", "Kelasi yil shu paytda men boshqa mamlakatda yashayotgan bo'laman."),
      w("⌛", "in five years' time", "ɪn ˌfaɪv jɪəz ˈtaɪm|in fayv yiaz taym", "ibora", "Besh yildan keyin", "Five years from now.", "Where do you think you'll be living in five years' time?", "Sizningcha, besh yildan keyin qayerda yashayotgan bo'lasiz?"),
      w("🏁", "by the end of", "baɪ ði ˈend əv|bay zi end av", "ibora", "…ning oxirigacha", "Not later than the end of a period.", "Do you think you'll have finished the report by the end of the week?", "Hisobotni hafta oxirigacha tugatgan bo'lasiz deb o'ylaysizmi?"),
      w("🧬", "cure", "kjʊə|kyua", "ot", "Davo", "A medicine or treatment that makes an illness go away.", "Do you think humans will have found a cure for cancer in the next ten years?", "Sizningcha, keyingi o'n yilda odamlar saratonga davo topgan bo'ladimi?"),
      w("🌍", "populous", "ˈpɒpjələs|popyulas", "sifat", "Aholisi ko'p", "With a lot of people living there.", "By 2030, India will have overtaken China as the world's most populous country.", "2030-yilga kelib Hindiston aholisi eng ko'p mamlakat sifatida Xitoydan o'zib ketgan bo'ladi."),
      w("🏃", "overtake", "ˌəʊvəˈteɪk|ouvateyk", "fe'l", "O'zib ketmoq", "Become bigger or go faster than something else.", "Electric cars may soon overtake petrol cars in sales.", "Elektromobillar tez orada savdoda benzinli mashinalardan o'zib ketishi mumkin."),
    ],
  },
];

const BLOG = `SPENDING TIME WISELY
Which is more valuable, time or money? Most people say «time». So why do we waste hours watching boring TV or kill time playing games on our phones?
We can't make more time, but — like money — we can choose to spend it wisely or fritter it away.
1. Health. Most of us take our health for granted until we get ill. We are «too busy» to go to the gym or cook a healthy meal. Invest time in your health now.
2. Plan ahead. We spend most of our time on things that must be done today, or on things that don't need to be done at all. Instead, think about what you will be doing in five years' time.
3. Set goals. Make your goals specific and measurable, then break each one down into weekly steps. You'll be amazed at what you will have achieved by the end of the year.`;
const read = reading(BLOG);

export const B2_08_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("This time next year, I'll be living in another country.", ["This time next year, I'll be living in another country.", "This time next year, I'll have lived in another country.", "This time last year, I was living in another country.", "This time next year, I'm living in another country."]),
      listen("By this time next year, I will have finished writing my book.", ["By this time next year, I will have finished writing my book.", "By this time next year, I will be finishing my book.", "By this time next year, I finish writing my book.", "By this time next year, I will have finished reading my book."]),
      listen("This time tomorrow I'll be flying to New York.", ["This time tomorrow I'll be flying to New York.", "This time tomorrow I'll have flown to New York.", "This time tomorrow I'm flying to New York.", "This time tomorrow I'll be flying from New York."]),
      listen("Next month, we'll have lived here for twenty years.", ["Next month, we'll have lived here for twenty years.", "Next month, we'll be living here for twenty years.", "Next month, we've lived here for twenty years.", "Next month, we'll have lived here for ten years."]),
      listen("Why do we kill time playing games?", ["Why do we kill time playing games?", "Why do we fill time playing games?", "Why do we kill time paying games?", "Why did we kill time playing games?"]),
      listen("Don't throw your money around.", ["Don't throw your money around.", "Don't throw your money away.", "Don't throw money around.", "Don't throw your money down."]),
      listen("Take your time.", ["Take your time.", "Take some time.", "Take the time.", "Make your time."]),
      listen("measurable", ["measurable", "miserable", "measured", "memorable"]),
      listen("overestimate", ["overestimate", "underestimate", "estimate", "overestimated"]),
      listen("valuable", ["valuable", "available", "variable", "valuables"]),
    ],
  },
  {
    title: "Time, money or both?",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Does the phrase go with time, money or both?",
    questions: [
      say("kill ___", ["time", "money", "both"]),
      say("take your ___", ["time", "money", "both"]),
      say("while away the ___", ["time", "money", "both"]),
      say("get your ___'s worth", ["money", "time", "both"]),
      say("throw your ___ around", ["money", "time", "both"]),
      say("be short of ___", ["both", "time", "money"]),
      say("fritter away ___", ["both", "time", "money"]),
      say("have ___ to spare", ["both", "time", "money"]),
      say("run out of ___", ["both", "time", "money"]),
      say("set aside ___", ["both", "time", "money"]),
    ],
  },
  {
    title: "Time and money collocations",
    skill: "Vocabulary",
    kind: "fill",
    instructions: "Complete each sentence with one word.",
    questions: written([
      ["Apps like Candy Crush are a good way to ___ time when you're bored.", "kill"],
      ["Don't ___ your money around — save it for something worth buying.", "throw"],
      ["It's important to set ___ time for the people you care about.", "aside"],
      ["The best way to ___ money is in your education.", "invest"],
      ["If your course is expensive, make sure you get your money's ___.", "worth"],
      ["I'm sorry, I can't help today — I'm a bit short ___ time.", "of"],
      ["There's no hurry. Take ___ time.", "your"],
      ["We ran ___ of money on the last day of our holiday.", "out"],
    ]),
  },
  {
    title: "Spending time wisely",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the blog. Choose the correct answer.",
    questions: [
      read("What is the blog about?", ["How to use your time more effectively", "Why we shouldn't save money", "How to save more money", "Why TV is bad"]),
      read("What can we choose to do with time, like money?", ["Spend it wisely or fritter it away", "Make more of it", "Save it in a bank", "Sell it"]),
      read("When do most people start thinking about their health?", ["When they get ill", "When they join a gym", "When they are young", "Every morning"]),
      read("What should we think about, according to section 2?", ["What we will be doing in five years' time", "What we need to do by tomorrow", "What we did last year", "What other people are doing"]),
      read("What should good goals be like?", ["Specific and measurable", "Urgent and short", "Secret and big", "Easy and quick"]),
      read("What should you do with each goal?", ["Break it down into weekly steps", "Change it every month", "Forget it", "Tell everyone about it"]),
    ],
  },
  {
    title: "What does it mean?",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match the phrases to their meanings.",
    questions: pairs([
      ["kill time|do something while you wait", "fritter away|waste on small things", "set aside|keep for a special purpose", "run out of|have none left"],
      ["take your time|don't hurry", "get your money's worth|get good value", "throw your money around|spend carelessly", "while away|spend time in a relaxed way"],
    ]),
  },
  {
    title: "Future continuous or future perfect?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct option.",
    questions: [
      say("Don't call me at 7 p.m. — we ___ dinner then.", ["'ll be having", "'ll have had", "have", "'re having had"]),
      say("But we ___ by about 8 p.m., so call after that.", ["'ll have finished", "'ll be finishing", "finish", "'re finished"]),
      say("This time next week, I ___ to Scotland. Maybe I'll be halfway there.", ["'ll be driving", "'ll have driven", "drive", "drove"]),
      say("I ___ by the evening, as long as there are no delays.", ["'ll have arrived", "'ll be arriving at", "arrive at", "'m arrived"]),
      say("By 2050, the world's population ___ to over nine billion.", ["will have risen", "will be rising", "rises", "is rising"]),
      say("This time tomorrow I ___ to New York.", ["'ll be flying", "'ll have flown", "fly", "flew"]),
      say("In September, I ___ here for a year.", ["'ll have been working", "'ll be work", "work", "worked"]),
      say("By the end of the century, humans ___ on the moon.", ["will be living", "will have lived", "live", "lived"]),
      say("I hope I ___ here in five years — I want a new job.", ["won't still be working", "won't still have work", "don't still work", "am not still worked"]),
      say("Do you think you ___ the report by Friday?", ["'ll have finished", "'ll be finishing", "finish", "finished"]),
    ],
  },
  {
    title: "Grammar sentences",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear six sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("gr-3.2"), [
        ["This time next week, we'll ___ on the Eurostar to Paris.", "be travelling", "have travelled", "travel"],
        ["I'm sure I ___ the same job five years from now.", "won't be doing", "won't have done", "don't do"],
        ["Who'll ___ over from you when you start your new job?", "be taking", "have taken", "take"],
        ["Computers ___ beyond recognition in twenty years' time.", "will have changed", "will be changing", "change"],
        ["The director is very angry because the decorators ___ the hall in time for the conference.", "won't have finished", "won't be finishing", "didn't finish"],
        ["Do you think humans ___ a cure for cancer in the next ten years?", "will have found", "will be finding", "find"],
      ]),
    ],
  },
  {
    title: "How to set goals",
    skill: "Grammar",
    kind: "fill",
    instructions: "Complete each sentence with the future continuous or future perfect of the verb in brackets.",
    questions: written([
      ["Think about what you ___ by this time next year. (achieve)", "will have achieved|'ll have achieved"],
      ["«By this time next year, I ___ more money.» (earn) — the action is in progress then", "will be earning|'ll be earning"],
      ["Know exactly what you ___ each week to reach your goal. (do)", "will be doing|'ll be doing"],
      ["By this time next year, I ___ ten different countries. (visit)", "will have visited|'ll have visited"],
      ["This coming year, I ___ on settling down to my new life in Canada. (concentrate)", "will be concentrating|'ll be concentrating"],
      ["You'll be amazed at what you ___ by the end of the year. (achieve)", "will have achieved|'ll have achieved"],
    ]),
  },
  {
    title: "Which sentence fits?",
    skill: "Grammar",
    kind: "situation",
    instructions: "Read the situation. Choose the best sentence.",
    questions: [
      say("Your exam is tomorrow from 9 to 12. Your friend wants to call at 10.", ["Don't call — I'll be doing my exam then.", "Don't call — I'll have done my exam then.", "Don't call — I do my exam then.", "Don't call — I did my exam then."]),
      say("Dinner finishes at 8. Your friend wants to come at 8.30.", ["Come at 8.30 — we'll have eaten by then.", "Come at 8.30 — we'll be eating then.", "Come at 8.30 — we eat by then.", "Come at 8.30 — we're eating by then."]),
      say("You move to Canada in March. Talk about next summer.", ["Next summer I'll be living in Canada.", "Next summer I'll have lived in Canada.", "Next summer I lived in Canada.", "Next summer I've lived in Canada."]),
      say("You have three chapters left. You'll finish them in May.", ["By June, I'll have finished my book.", "By June, I'll be finishing my book.", "By June, I finish my book.", "By June, I'm finishing my book."]),
      say("You started this job in 2020. It's 2029 now.", ["Next year I'll have been working here for ten years.", "Next year I'll be working here for ten years ago.", "Next year I work here for ten years.", "Next year I've worked here for ten years."]),
      say("The bus leaves in two minutes and you're still at home.", ["If we don't hurry, the bus will have left.", "If we don't hurry, the bus will be leaving yesterday.", "If we don't hurry, the bus leaves.", "If we don't hurry, the bus left."]),
    ],
  },
  {
    title: "Write about the future",
    skill: "Grammar",
    kind: "type",
    instructions: "Write the verb in the future continuous or future perfect.",
    questions: written([
      ["Come round at 6.30. We ___ eating by then. (finish)", "will have finished|'ll have finished"],
      ["I ___ my biology exam this time tomorrow. (do)", "will be doing|'ll be doing"],
      ["I imagine I ___ married by the time I'm 30. (get)", "will have got|'ll have got|will have gotten"],
      ["According to the forecast, it ___ when we arrive. (snow)", "will be snowing|'ll be snowing"],
      ["If we don't hurry up, the bus ___. (leave)", "will have left|'ll have left"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("This time next year, I'll be *live in another country.", "will be + -ing: I'll be living."),
      mistake("By 2030, I will have *finish my studies.", "will have + past participle: finished."),
      mistake("Don't call at 7 — we'll *have eating dinner.", "In progress → we'll be eating."),
      mistake("By the end of the week, I'll *be finished the report.", "Completed → I'll have finished."),
      mistake("I'm sure I won't *have doing the same job.", "won't be doing."),
      mistake("Why do we *die time playing games?", "kill time."),
      mistake("We ran *off of money on the last day.", "run out of: We ran out of money."),
      mistake("Make sure you get your *money worth.", "money's worth."),
      mistake("Set *apart some time for your family.", "set aside."),
      mistake("Most people *underestimate what they can do in a day, so they plan far too much.", "They think they can do more than they can → overestimate."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "This time next year, I'll be living in another country.",
      "By the end of the year, I'll have finished my book.",
      "Computers will have changed beyond recognition.",
      "Who will be taking over from you?",
      "Invest time in looking after your health.",
      "Make sure your goals are specific and measurable.",
      "We can choose to spend our time wisely.",
      "Don't throw your money around.",
    ]),
  },
  {
    title: "Talk about your goals",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best answer.",
    questions: [
      say("Where do you think you'll be in five years' time?", ["I'll probably be working abroad.", "I'll probably have worked abroad five years ago.", "I probably work abroad.", "I'm probably working abroad yesterday."]),
      say("Can I call you at nine tonight?", ["Sorry, I'll be driving home then.", "Sorry, I'll have driven home then yesterday.", "Sorry, I drive home then.", "Sorry, I've driven home then."]),
      say("Will the work be ready by Friday?", ["Yes, we'll have finished it by Thursday.", "Yes, we'll be finished it by Thursday.", "Yes, we finish it by Thursday ago.", "Yes, we're finished it by Thursday."]),
      say("Have you got a minute?", ["Sorry, I've got no time to spare today.", "Sorry, I've got no money's worth today.", "Sorry, I kill time today.", "Sorry, I'm fritter away today."]),
      say("This course is so expensive!", ["Then work hard and get your money's worth.", "Then throw your money around.", "Then kill time.", "Then fritter it away."]),
      say("I'm bored waiting for the train.", ["Play a game on your phone to kill time.", "Set aside your money.", "Get your money's worth.", "Take over from the driver."]),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself.",
    questions: phrases([
      "This time next year, I'll be living in another country.",
      "By the end of the year, I'll have finished.",
      "This time tomorrow I'll be flying to New York.",
      "We'll have lived here for twenty years.",
      "Take your time.",
      "Don't throw your money around.",
      "Invest time in your health.",
      "Make the most of your time.",
      "measurable",
      "overestimate",
    ]),
  },
];
