/**
 * B2, 12-dars — «Yarn-bombing, rote learning and good teachers».
 * Yarn-bombing (ko'cha san'ati), tez nutqda tushib qoladigan /t/ va /d/,
 * oson adashtiriladigan so'zlar (affect/effect, quite/quiet …), xulosa
 * (summary) yozish, fikr bildirish va fikrni o'zgartirishga urinish.
 * Navigate B2, 4.3 + 4.4 + 4.5 asosida: tinglash mashqlarida kitob
 * treklari (yopiq ombordan), lug'at misollari kitob matni va Wordlist'idan
 * yoki unga yaqin; mashq matnlari o'zimizniki. Mashqlar inglizcha.
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
  w,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;
/** Unit video (Navigate B2 «Report») — used as clip and in the video tasks. */
const VIDEO = "media:navigate-b2/video/report-04.mp4";

export const B2_12_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🧶", "yarn-bombing", "ˈjɑːn ˌbɒmɪŋ|yaan boming", "ot", "Yarn-bombing (narsalarni to'qima bilan bezash)", "Covering objects in public places with colourful knitting.", "Yarn-bombing is a kind of street art, a little bit like graffiti.", "Yarn-bombing — graffitiga biroz o'xshash ko'cha san'ati turi."),
      w("🪡", "knit", "nɪt|nit", "fe'l", "To'qimoq", "Make clothes or covers from wool with two long needles.", "I'd like to knit something like that.", "Shunga o'xshash narsa to'qishni xohlardim."),
      w("🧵", "wool", "wʊl|wul", "ot", "Jun (ip)", "Thread made from the hair of sheep.", "A yarn-bomber in Paris filled cracks in the pavement with brightly coloured wool.", "Parijdagi yarn-bomber trotuar yoriqlarini rang-barang jun bilan to'ldirdi."),
      w("🎨", "graffiti", "ɡrəˈfiːti|grafiiti", "ot", "Graffiti (devordagi yozuv/rasm)", "Writing or pictures painted on walls in public places.", "I'd rather see this than graffiti.", "Graffitidan ko'ra buni ko'rganim yaxshi."),
      w("🗿", "statue", "ˈstætʃuː|stechuu", "ot", "Haykal", "A figure of a person or animal made of stone or metal.", "They shouldn't cover a famous statue with knitting.", "Ular mashhur haykalni to'qima bilan qoplamasliklari kerak."),
      w("🌍", "global phenomenon", "ˌɡləʊbl fəˈnɒmɪnən|gloubl fanominan", "ibora", "Butun dunyoga tarqalgan hodisa", "Something that happens all over the world.", "Yarn-bombing started in the USA but is now a global phenomenon.", "Yarn-bombing AQSHda boshlangan, endi esa butun dunyoga tarqalgan."),
      w("🌙", "secretly", "ˈsiːkrətli|siikratli", "ravish", "Yashirincha", "Without other people knowing.", "Yarn-bombing is often done secretly at night.", "Yarn-bombing ko'pincha kechasi yashirincha qilinadi."),
      w("🧽", "easily removed", "ˌiːzəli rɪˈmuːvd|iizali rimuuvd", "ibora", "Osongina olib tashlanadigan", "Possible to take away without any problem.", "It's less damaging than graffiti as it can be easily removed.", "U graffitidan kamroq zarar keltiradi, chunki osongina olib tashlanadi."),
      w("🤝", "admire", "ədˈmaɪə|admaya", "fe'l", "Hayratlanib qaramoq", "Look at something and think it is beautiful.", "They post photos online for others to admire.", "Ular boshqalar hayratlanib qarashi uchun suratlarni internetga joylashadi."),
      w("🙂", "put a smile on someone's face", "ˌpʊt ə ˈsmaɪl ɒn ˌsʌmwʌnz ˈfeɪs|put a smayl on samwanz feys", "ibora", "Birovni xursand qilmoq", "Make someone happy.", "Yarn-bombing aims to put a smile on someone's face.", "Yarn-bombing kimnidir xursand qilishni maqsad qiladi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("💥", "affect", "əˈfekt|afekt", "fe'l", "Ta'sir qilmoq", "Change or influence something.", "Bad news can affect you for a long time.", "Yomon xabar sizga uzoq vaqt ta'sir qilishi mumkin."),
      w("🌈", "effect", "ɪˈfekt|ifekt", "ot", "Ta'sir, natija", "A change caused by something.", "The effect of the knitting is quite striking.", "To'qimaning ta'siri ancha ko'zga tashlanadi."),
      w("🎁", "specially", "ˈspeʃəli|speshali", "ravish", "Maxsus (biror maqsadda)", "For a particular purpose.", "I made this cake specially for you.", "Bu tortni maxsus siz uchun pishirdim."),
      w("⭐", "especially", "ɪˈspeʃəli|ispeshali", "ravish", "Ayniqsa", "More than usual; in particular.", "It is popular all over the world, especially in the United States.", "U butun dunyoda, ayniqsa AQShda mashhur."),
      w("🤫", "quiet or quite", "ˈkwaɪət ɔː ˈkwaɪt|kwayat oo kwayt", "ibora", "Jim (quiet) yoki ancha (quite)", "Quiet = not noisy (adjective); quite = fairly (adverb).", "Is it quiet or quite noisy in your office?", "Ofisingiz jimmi yoki ancha shovqinlimi?"),
      w("👖", "loose", "luːs|luus", "sifat", "Bo'sh (tor emas)", "Not tight.", "The knitted covers are usually quite loose.", "To'qilgan g'iloflar odatda ancha bo'sh bo'ladi."),
      w("💬", "advice", "ədˈvaɪs|advays", "ot", "Maslahat", "An opinion about what someone should do.", "The best advice to yarn-bombers is to do it at night.", "Yarn-bomberlarga eng yaxshi maslahat — buni kechasi qilish."),
      w("🗣️", "advise", "ədˈvaɪz|advayz", "fe'l", "Maslahat bermoq", "Tell someone what you think they should do.", "I'd advise you to practise every day.", "Har kuni mashq qilishingizni maslahat beraman."),
      w("🏋️", "practice or practise", "ˈpræktɪs|prektis", "ibora", "Mashq (ot) yoki mashq qilmoq (fe'l)", "In British English: practice = noun, practise = verb.", "Is it practice or practise in this sentence: I need more practice?", "Bu gapda qaysi biri: practice yoki practise? I need more practice."),
      w("🧑‍🏫", "manage", "ˈmænɪdʒ|menij", "fe'l", "Uddalamoq, boshqarmoq", "Succeed in dealing with something difficult.", "How does she manage to get all her work done on time?", "U barcha ishini vaqtida tugatishni qanday uddalaydi?"),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🧠", "rote learning", "ˌrəʊt ˈlɜːnɪŋ|rout looning", "ibora", "Yodlash (takrorlab o'rganish)", "Learning by repeating something until you remember it.", "Rote learning is often considered unnecessary and uncreative.", "Yodlash ko'pincha keraksiz va ijodiy emas deb hisoblanadi."),
      w("❤️", "learn by heart", "ˌlɜːn baɪ ˈhɑːt|loon bay haat", "ibora", "Yod olmoq", "Learn something so you can say it from memory.", "At school we had to learn by heart a lot of poems.", "Maktabda ko'p she'rlarni yod olishimiz kerak edi."),
      w("🗃️", "memorization", "ˌmeməraɪˈzeɪʃn|memarayzeyshn", "ot", "Yodlash", "The process of learning something so you remember it.", "Memorization actually helps the brain to develop.", "Yodlash aslida miyaning rivojlanishiga yordam beradi."),
      w("🎓", "expertise", "ˌekspɜːˈtiːz|ekspootiiz", "ot", "Mutaxassislik bilimi", "Expert knowledge or skill.", "Expertise is developed through hours of learning and practice.", "Mutaxassislik soatlab o'qish va mashq orqali rivojlanadi."),
      w("📚", "background knowledge", "ˌbækɡraʊnd ˈnɒlɪdʒ|bekgraund nolij", "ibora", "Asosiy (poydevor) bilim", "Basic information you need before you can understand more.", "People need background knowledge before they can be creative.", "Ijodkor bo'lish uchun odamlarga asosiy bilim kerak."),
      w("📝", "summary", "ˈsʌməri|samari", "ot", "Qisqacha mazmun", "A short text that gives the main ideas.", "A summary should include the main ideas, not minor details.", "Qisqacha mazmun mayda tafsilotlarni emas, asosiy fikrlarni o'z ichiga olishi kerak."),
      w("🔁", "paraphrase", "ˈpærəfreɪz|perafreyz", "fe'l", "O'z so'zlari bilan qayta aytmoq", "Say something again in different words.", "Try to paraphrase the main ideas in your own words.", "Asosiy fikrlarni o'z so'zlaringiz bilan qayta aytishga harakat qiling."),
      w("🎯", "you've got a point", "juːv ˌɡɒt ə ˈpɔɪnt|yuuv got a poynt", "ibora", "Gapingizda jon bor", "What you say is partly right.", "Well, you've got a point, but teachers need good ideas too.", "Gapingizda jon bor, lekin o'qituvchilarga yaxshi g'oyalar ham kerak."),
      w("⚖️", "on the other hand", "ˌɒn ði ˌʌðə ˈhænd|on zi aza hend", "ibora", "Boshqa tomondan", "Used to give a different view.", "Yes, but on the other hand, sometimes fun lessons teach you nothing.", "Ha, lekin boshqa tomondan, ba'zan qiziqarli darslar hech narsa o'rgatmaydi."),
      w("👁️", "as I see it", "əz aɪ ˈsiː ɪt|az ay sii it", "ibora", "Menimcha, mening nazarimda", "In my opinion.", "As I see it, a motivating teacher is the most important thing.", "Mening nazarimda, ruhlantiruvchi o'qituvchi eng muhimi."),
    ],
  },
];

const BLOG = `IN DEFENCE OF LEARNING BY HEART
These days people often say that the «Google generation» can find any fact online, so memorization is a waste of time. Rote learning is seen as pointless and uncreative.
But how can you use your mind creatively if there's nothing stored in it? You can't create something from nothing.
In fact, learning things by heart helps the brain to develop. Research shows that people who had to memorize things at school are better at focusing on their work as adults.
Of course you can use a calculator, but isn't it faster to know your multiplication tables? Knowing the basics frees up your brain for bigger things.
And would you want an operation from a doctor who had just looked up how to do it online? Expertise comes from hours of learning, practice and memorization.`;
const read = reading(BLOG);

export const B2_12_EXERCISES: SeedExercise[] = [
  {
    title: "Lost sounds",
    skill: "Listening",
    kind: "listengap",
    instructions: "In fast speech, /t/ and /d/ at the end of a word often disappear. You will hear nine sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("4.6"), [
        ["It looks a bit ___ to me.", "weird", "weirder", "wide"],
        ["What ___ it mean?", "does", "did", "do"],
        ["What does it ___?", "mean", "meant", "need"],
        ["___ like to knit something like that.", "I'd", "I", "I'll"],
        ["I'd like to ___ something like that.", "knit", "knot", "need"],
        ["It ___ amazing!", "looks", "look", "looked"],
        ["___ rather see this than graffiti.", "I'd", "I", "I'll"],
        ["They ___ put it on statues.", "shouldn't", "should", "couldn't"],
        ["It ___ do any harm.", "doesn't", "does", "didn't"],
      ]),
    ],
  },
  {
    title: "Yarn-bombing",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to a short podcast about yarn-bombing. Answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("4.7"))("What is the first example of yarn-bombing the speaker gives?", ["A lamp post that is suddenly multicoloured", "A knitted bus", "A covered statue", "A bridge in Paris"]),
      hearing(track("4.7"))("Where did yarn-bombing probably start?", ["In the United States", "In France", "In Poland", "In Mexico"]),
      hearing(track("4.7"))("What has a yarn-bomber done in Paris?", ["Filled cracks in the pavement with brightly knitted wool", "Covered the Eiffel Tower", "Knitted a cover for a bus", "Covered a house"]),
      hearing(track("4.7"))("What did Magda Sayeg cover in Mexico City?", ["A city bus", "A statue", "A tree", "Her grandmother's house"]),
      hearing(track("4.7"))("When is yarn-bombing often done?", ["Secretly at night", "Early in the morning", "At weekends", "In the summer"]),
      hearing(track("4.7"))("What do yarn-bombers do with their photos?", ["Post them online for others to admire", "Sell them", "Send them to the police", "Put them in museums"]),
      hearingTwo(track("4.7"))("Which TWO reasons for yarn-bombing does the speaker give?", ["To make an ugly public space more beautiful", "To put a smile on people's faces"], ["To make money", "To protest against the government"]),
    ],
  },
  {
    title: "Easily confused words",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the correct word.",
    questions: [
      say("The ___ of the knitting is quite striking.", ["effect", "affect", "effective", "affection"]),
      say("I knitted something ___ for his birthday.", ["specially", "especially", "special", "specialty"]),
      say("She made a ___ and the knitting ended up with a big hole in it.", ["mistake", "fault", "wrong", "error of"]),
      say("Magda Sayeg ___ a large team of knitters.", ["manages", "controls", "succeeds", "handles at"]),
      say("The knitted covers are usually quite ___, so it's easy to fix them.", ["loose", "lose", "lost", "loss"]),
      say("It doesn't take a lot of ___ to knit simple patterns.", ["practice", "practise", "practising", "practical"]),
      say("Yarn-bombers often have to be ___.", ["quiet", "quite", "quietly", "quit"]),
      say("The best ___ to yarn-bombers is to do it at night.", ["advice", "advise", "advices", "advised"]),
      say("It is popular all over the world, ___ in the United States.", ["especially", "specially", "special", "specialty"]),
      say("The noise ___ my concentration.", ["affected", "effected", "effect", "affection"]),
    ],
  },
  {
    title: "Which word do you hear?",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear four words. Choose the word you hear.",
    questions: [
      gaps(track("4.8"), [
        ["___", "especially", "specially", "special"],
        ["___", "quite", "quiet", "quit"],
        ["___", "loose", "lose", "loss"],
        ["___", "advise", "advice", "advised"],
      ]),
    ],
  },
  {
    title: "Grammar or meaning?",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match each word to its type or meaning.",
    questions: pairs([
      ["affect|verb", "effect|noun", "advise|verb", "advice|noun"],
      ["quite|adverb (fairly)", "quiet|adjective (not noisy)", "lose|verb (not find)", "loose|adjective (not tight)"],
      ["specially|for a special purpose", "especially|in particular", "manage|deal with a difficult situation", "control|have power over"],
    ]),
  },
  {
    title: "In defence of learning by heart",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the blog post. Choose the correct answer.",
    questions: [
      read("What do many people say about memorization today?", ["It's a waste of time.", "It's the best way to learn.", "It's only for doctors.", "It's very creative."]),
      read("What does the writer think about the «Google generation» argument?", ["The writer disagrees with it.", "The writer agrees with it.", "The writer doesn't mention it.", "The writer is not sure."]),
      read("Why does the writer say you can't be creative with nothing stored in your mind?", ["You can't create something from nothing.", "Computers are more creative.", "Creativity is not important.", "Facts are boring."]),
      read("What does research show about people who memorized things at school?", ["They are better at focusing on their work as adults.", "They are less creative.", "They earn more money.", "They forget everything."]),
      read("How does knowing basic facts help?", ["It frees up your brain for bigger things.", "It makes calculators unnecessary.", "It helps you sleep.", "It makes you a doctor."]),
      read("Which is the best summary of the blog?", ["Rote learning is often criticized, but it gives us the knowledge we need to be creative and expert.", "Rote learning is a waste of time because of Google.", "Doctors should look things up online.", "Calculators are better than learning tables."]),
    ],
  },
  {
    title: "Writing a summary",
    skill: "Writing",
    kind: "choice",
    instructions: "Choose the best paraphrase for a summary.",
    questions: [
      say("«Learning by heart is seen as pointless.»", ["Rote learning is often considered unnecessary.", "Learning by heart is seen as pointless.", "I think rote learning is great.", "Heart learning is not pointed."]),
      say("«People often say that …»", ["It is often thought that …", "People often say that …", "I always say that …", "Nobody says that …"]),
      say("«Learning by heart helps the brain to develop.»", ["Brain development is encouraged by memorization.", "Learning by heart helps the brain to develop.", "The brain learns hearts.", "Memorization is bad for the brain."]),
      say("Which tip is correct for writing a summary?", ["Include the main ideas, not minor details.", "Add your own opinion.", "Copy whole sentences from the text.", "Add extra information."]),
      say("Which tip is correct for writing a summary?", ["Use your own words where possible.", "Use exactly the same words as the text.", "Make it longer than the text.", "Start with a joke."]),
    ],
  },
  {
    title: "What makes a good teacher?",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to two friends discussing what makes a good teacher. Answer the questions.",
    questions: [
      hearing(track("4.10"))("What does the first speaker (M) think is the most important quality?", ["Being patient", "Being strict", "Being funny", "Being creative"]),
      hearing(track("4.10"))("What does the second speaker (J) add?", ["Teachers need to be creative and have good ideas.", "Teachers should be strict.", "Teachers should give lots of homework.", "Teachers should be young."]),
      hearing(track("4.10"))("What is M's problem with very fun lessons?", ["Sometimes you don't really learn anything.", "They are too short.", "They are too expensive.", "They are boring."]),
      hearing(track("4.10"))("What does J say a good teacher is, personally?", ["Quite strict", "Very kind", "Always funny", "Never strict"]),
      hearing(track("4.10"))("What does M think about strict teachers?", ["It's a bit old-fashioned.", "It's the best kind.", "It's very creative.", "It's motivating."]),
      hearing(track("4.10"))("Which quality do they both agree on at the end?", ["Hard-working and well organized", "Strict and old-fashioned", "Funny and silly", "Young and rich"]),
    ],
  },
  {
    title: "Opinion phrases",
    skill: "Speaking",
    kind: "choice",
    instructions: "Complete the phrase.",
    questions: [
      say("Well, I have to ___ that …", ["say", "tell", "speak", "talk"]),
      say("Well, you've got a ___, but …", ["point", "idea", "sense", "right"]),
      say("Yes, but on the other ___ …", ["hand", "side", "way", "part"]),
      say("No, but ___ …", ["look", "see", "watch", "listen at"]),
      say("___, I think …", ["Personally", "Personal", "Person", "In person"]),
      say("As I ___ it, …", ["see", "look", "say", "think"]),
      say("It ___ to me …", ["seems", "looks", "says", "thinks"]),
    ],
  },
  {
    title: "Giving or changing an opinion?",
    skill: "Speaking",
    kind: "match",
    instructions: "Is the phrase used to give your opinion or to try to change someone else's opinion?",
    questions: pairs([
      ["Well, I have to say that …|giving an opinion", "Personally, I think …|giving an opinion", "Well, you've got a point, but …|changing someone's opinion", "Yes, but on the other hand …|changing someone's opinion"],
      ["As I see it, …|giving an opinion", "It seems to me …|giving an opinion", "No, but look …|changing someone's opinion", "Yes, but don't you think …?|changing someone's opinion"],
    ]),
  },
  {
    title: "Softening phrases",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear three phrases. Listen and choose the missing word.",
    questions: [
      gaps(track("4.11"), [
        ["Yes, but on the other ___ …", "hand", "side", "way"],
        ["No, but ___ …", "look", "listen", "see"],
        ["Well, you've got a ___, but …", "point", "chance", "reason"],
      ]),
    ],
  },
  {
    title: "Video words: La Belle Époque",
    skill: "Vocabulary",
    kind: "match",
    instructions: "These words are from the video about Paris in La Belle Époque. Match them to their meanings.",
    questions: pairs([
      ["prosperity|being rich and successful", "optimism|hope for a good future", "elegance|being beautiful and stylish", "peace|no war"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Vocabulary",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("The noise had a bad *affect on my work.", "Noun: effect."),
      mistake("Can you give me some *advise?", "Noun: advice."),
      mistake("The library is very *quite today.", "Adjective: quiet."),
      mistake("Don't *loose your keys!", "Verb: lose."),
      mistake("I made this cake *especially for you.", "For a special purpose: specially."),
      mistake("I need to *practice the piano every day.", "BrE verb: practise."),
      mistake("She *controls to finish her work on time.", "Succeed in doing: manages to."),
      mistake("It was my *fault — I wrote 5 instead of 6.", "An error you make: mistake."),
      mistake("Yarn-bombing is often done *secret at night.", "Adverb: secretly."),
      mistake("You've got a *point of view, but …", "Fixed phrase: You've got a point, but …"),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then say it yourself. Let the /t/ and /d/ disappear before consonants, and soften the start of your reply.",
    questions: phrases([
      "It looks a bit weird to me.",
      "I'd rather see this than graffiti.",
      "They shouldn't put it on statues.",
      "It doesn't do any harm.",
      "Yes, but on the other hand …",
      "Well, you've got a point, but …",
      "As I see it, teachers need to be patient.",
      "especially",
      "quiet",
      "advice",
    ]),
  },
  {
    title: "Video: La Belle Époque",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to the video «La Belle Époque» about Paris around 1900 (you can also watch it in «Inglizcha tomosha» after the exercises). Choose the option that completes the summary.",
    questions: [
      hearing(VIDEO)("The Eiffel Tower was built to commemorate the hundredth anniversary of the ___.", ["French Revolution", "World Fair", "Paris metro", "Musée d'Orsay"]),
      hearing(VIDEO)("For more than ___ years, it was the tallest tower in the world.", ["forty", "ten", "a hundred", "twenty"]),
      hearing(VIDEO)("The 1900 World Fair also popularized «___ Nouveau», a popular style of design.", ["Art", "Belle", "Paris", "Style"]),
      hearing(VIDEO)("The Musée d'Orsay was originally a ___.", ["railway station", "palace", "theatre", "factory"]),
      hearing(VIDEO)("It became a museum in ___.", ["1986", "1900", "1950", "2000"]),
      hearing(VIDEO)("The underground metro opened in 1900, on ___.", ["19 July", "1 January", "14 July", "25 December"]),
    ],
  },
];
