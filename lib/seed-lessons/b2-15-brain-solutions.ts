/**
 * B2, 15-dars — «Right brain, left brain? Solutions and advice». Miya
 * haqidagi afsona, bog'lovchi so'zlar (linkers), out/up bilan phrasal
 * verblar, muammoga yechim taklif qilish, maslahat maqolasi, zerikish
 * videosidagi qo'shma otlar.
 * Navigate B2, 5.3 + 5.4 + 5.5 asosida: tinglash mashqlarida kitob
 * treklari (yopiq ombordan), lug'at misollari kitob matni va Wordlist'idan
 * yoki unga yaqin; mashq matnlari o'zimizniki. Mashqlar inglizcha.
 */
import type { SeedExercise, SeedQuestion } from "../seed-exercises";
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
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

/** 5.8: ta'riflar o'qiladi — to'g'ri yoki noto'g'ri. */
const heardTrue = (statement: string, isTrue: boolean, explanation?: string): SeedQuestion => ({
  prompt: statement,
  audio: track("5.8"),
  options: ["True", "False"],
  correct: isTrue ? 0 : 1,
  explanation,
});

export const B2_15_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🧠", "logically", "ˈlɒdʒɪkli|lojikli", "ravish", "Mantiqan", "In a clear and reasonable way.", "The left side of the brain is dominant for thinking logically.", "Miyaning chap tomoni mantiqan fikrlashda ustun."),
      w("👑", "dominant", "ˈdɒmɪnənt|dominant", "sifat", "Ustun, hukmron", "More important or powerful than others.", "In most people, the left side of the brain is dominant for language.", "Ko'pchilikda miyaning chap tomoni til uchun ustun."),
      w("🎵", "melody", "ˈmelədi|meladi", "ot", "Kuy, ohang", "The tune of a piece of music.", "The right side of the brain is best at appreciating the melody of music.", "Miyaning o'ng tomoni musiqa kuyidan zavqlanishda eng yaxshi."),
      w("🔄", "in other words", "ɪn ˌʌðə ˈwɜːdz|in aza woodz", "ibora", "Boshqacha aytganda", "Used to explain something more clearly.", "Are you right-brained or left-brained — in other words, creative or logical?", "Siz o'ng miyalimisiz yoki chap — boshqacha aytganda, ijodkormi yoki mantiqiy?"),
      w("✍️", "i.e.", "ˌaɪ ˈiː|ay ii", "qisqartma", "Ya'ni", "That is (used to explain).", "There's no evidence that one side dominates, i.e. that a person can be left-brained.", "Bir tomon ustunligiga dalil yo'q, ya'ni odam «chap miyali» bo'lishiga."),
      w("📌", "for instance", "fər ˈɪnstəns|far instans", "ibora", "Masalan", "For example.", "Take language skills, for instance.", "Masalan, til ko'nikmalarini oling."),
      w("📋", "such as", "ˈsʌtʃ əz|sach az", "ibora", "…kabi", "For example (before a noun).", "The left side deals with processes such as understanding words.", "Chap tomon so'zlarni tushunish kabi jarayonlar bilan shug'ullanadi."),
      w("➡️", "due to", "ˈdjuː tə|dyuu ta", "ibora", "…tufayli", "Because of.", "This is probably due to the fact that we love labels.", "Bu, ehtimol, biz yorliqlarni yaxshi ko'rishimiz tufayli."),
      w("🙅", "a load of nonsense", "ə ˌləʊd əv ˈnɒnsəns|a loud av nonsans", "ibora", "Bema'ni gap", "Completely untrue or silly.", "It's a shame, then, that it's all a load of nonsense.", "Afsuski, bularning hammasi bema'ni gap."),
      w("🏷️", "labels", "ˈleɪblz|leyblz", "ot", "Yorliqlar", "Words used to describe people in a simple way.", "Human beings love labels and categories.", "Odamlar yorliq va toifalarni yaxshi ko'radi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🧮", "work out", "ˌwɜːk ˈaʊt|wook aut", "ibora", "Aniqlamoq, hal qilmoq", "Find the answer to something.", "These questions help you work out whether you are right-brained or left-brained.", "Bu savollar o'ng yoki chap miyali ekaningizni aniqlashga yordam beradi."),
      w("💬", "pop up", "ˌpɒp ˈʌp|pop ap", "ibora", "Birdan chiqib qolmoq", "Appear suddenly.", "Google «right brain, left brain» and hundreds of quizzes will pop up.", "«Right brain, left brain» deb qidiring — yuzlab testlar chiqib keladi."),
      w("🔬", "carry out", "ˌkæri ˈaʊt|keri aut", "ibora", "Amalga oshirmoq, o'tkazmoq", "Do or complete something, e.g. research.", "Researchers decided to carry out a study at the University of Utah.", "Tadqiqotchilar Yuta universitetida tadqiqot o'tkazishga qaror qilishdi."),
      w("💡", "come up with", "ˌkʌm ˈʌp wɪð|kam ap wiz", "ibora", "O'ylab topmoq", "Think of an idea or plan.", "The media wanted to come up with a simple idea about the brain.", "Ommaviy axborot vositalari miya haqida oddiy g'oya o'ylab topmoqchi edi."),
      w("🚨", "come up", "ˌkʌm ˈʌp|kam ap", "ibora", "Kutilmaganda chiqib qolmoq", "Happen unexpectedly.", "Something urgent has come up, so I'm afraid I have to rush off.", "Shoshilinch ish chiqib qoldi, shuning uchun ketishim kerak."),
      w("🛠️", "sort out", "ˌsɔːt ˈaʊt|soot aut", "ibora", "Hal qilmoq, tuzatmoq", "Solve a problem.", "Can someone from IT sort out my computer problems?", "IT dan kimdir kompyuterimdagi muammolarni hal qila oladimi?"),
      w("😲", "turn out", "ˌtɜːn ˈaʊt|toon aut", "ibora", "Ma'lum bo'lmoq", "Be discovered to be true in the end.", "Things don't always turn out the way you expect.", "Ishlar har doim ham siz kutgandek chiqmaydi."),
      w("🤥", "make up", "ˌmeɪk ˈʌp|meyk ap", "ibora", "To'qib chiqarmoq", "Invent a story that isn't true.", "Don't make up stories — tell me the truth.", "Hikoya to'qimang — menga rostini ayting."),
      w("🚪", "turn up", "ˌtɜːn ˈʌp|toon ap", "ibora", "Kelib qolmoq (oldindan aytmay)", "Arrive, often without planning.", "You don't need to book the restaurant — you can just turn up.", "Restoranni band qilish shart emas — shunchaki kelaverishingiz mumkin."),
      w("⏰", "ran out of", "ˌræn ˈaʊt əv|ren aut av", "ibora", "…tugab qoldi", "Used all of something.", "I ran out of time in the exam and couldn't finish my essay.", "Imtihonda vaqtim tugab qoldi va inshoni tugata olmadim."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🪟", "vandalism", "ˈvændəlɪzəm|vendalizam", "ot", "Vandalizm (buzg'unchilik)", "Damaging public or private property on purpose.", "What are we going to do about this vandalism problem?", "Bu vandalizm muammosi bilan nima qilamiz?"),
      w("💭", "one alternative would be", "ˌwʌn ɔːlˈtɜːnətɪv wʊd bi|wan ooltoonativ wud bi", "ibora", "Bir variant shu bo'lardi", "A way to suggest a possible solution.", "One alternative would be to install some security cameras.", "Bir variant xavfsizlik kameralarini o'rnatish bo'lardi."),
      w("💰", "into consideration", "ˌɪntə kənˌsɪdəˈreɪʃn|inta kansidareyshn", "ibora", "E'tiborga olmoq", "Think about something when you decide.", "We need to take cost into consideration.", "Narxni e'tiborga olishimiz kerak."),
      w("🤔", "I'm not convinced", "aɪm ˌnɒt kənˈvɪnst|aym not kanvinst", "ibora", "Ishonchim komil emas", "I don't think this idea is good.", "I'm not convinced by those fake cameras.", "O'sha soxta kameralarga ishonchim komil emas."),
      w("✅", "effective solution", "ɪˌfektɪv səˈluːʃn|ifektiv saluushn", "ibora", "Samarali yechim", "A way of solving a problem that works well.", "I think that would be an effective solution.", "Menimcha, bu samarali yechim bo'lardi."),
      w("🙂", "there's no harm in", "ðeəz ˌnəʊ ˈhɑːm ɪn|zeaz nou haam in", "ibora", "…ning hech zarari yo'q", "It's OK to try it.", "There's no harm in painting the walls as well.", "Devorlarni ham bo'yashning hech zarari yo'q."),
      w("⚠️", "otherwise", "ˈʌðəwaɪz|azawayz", "ravish", "Aks holda", "If not.", "Remove your hand after ten minutes, otherwise you might damage your fingers.", "O'n daqiqadan keyin qo'lingizni oling, aks holda barmoqlaringizga zarar yetishi mumkin."),
      w("🛡️", "in case", "ɪn ˈkeɪs|in keys", "ibora", "…sa kerak bo'lib qolar deb", "Because something might happen.", "Don't use strong soap in case it irritates the skin.", "Teriga ta'sir qilishi mumkinligi uchun kuchli sovun ishlatmang."),
      w("⏳", "attention span", "əˈtenʃn spæn|atenshn spen", "ibora", "Diqqatni ushlab turish muddati", "How long you can concentrate on something.", "He has a very short attention span.", "Uning diqqatini jamlash muddati juda qisqa."),
      w("⚡", "instant gratification", "ˌɪnstənt ˌɡrætɪfɪˈkeɪʃn|instant gretifikeyshn", "ibora", "Darhol qoniqish (kutmasdan)", "Getting what you want immediately.", "We live in an age of instant gratification.", "Biz darhol qoniqish davrida yashayapmiz."),
    ],
  },
];

const ARTICLE = `RIGHT BRAIN, LEFT BRAIN?
Online quizzes promise to help you work out whether you are right-brained or left-brained — in other words, creative or logical. It's a shame that it's all a load of nonsense.
Research carried out at the University of Utah found no evidence that one side of the brain dominates, i.e. that a person can be «left-brained» or «right-brained».
The idea started in the 1960s, when Roger Sperry discovered that different halves of the brain control different activities. The media then came up with the idea that some people use one side more.
In fact, you use both sides all the time. Take language, for instance: the left side deals with processes such as understanding words, while the right side understands intonation.
The myth has survived, probably due to the fact that people love labels.`;
const article = reading(ARTICLE);

export const B2_15_EXERCISES: SeedExercise[] = [
  {
    title: "Left or right?",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to a short talk about the brain. Which side of the brain is best at each activity?",
    questions: (
      [
        ["thinking logically", "left"],
        ["spelling", "left"],
        ["understanding jokes", "right"],
        ["hearing the rhythm of music", "left"],
        ["controlling the right half of your body", "left"],
        ["recognizing objects", "right"],
        ["appreciating the melody of music", "right"],
      ] as [string, string][]
    ).map(([activity, side]) => ({
      prompt: `Which side is best at ${activity}?`,
      audio: track("5.4"),
      options: ["Left side", "Right side"],
      correct: side === "left" ? 0 : 1,
    })),
  },
  {
    title: "Right brain, left brain?",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the article. Choose the correct answer.",
    questions: [
      article("What is the purpose of the article?", ["To explain the truth behind a common myth", "To help you find out if you are right-brained", "To give advice on developing right-brain skills", "To sell a brain quiz"]),
      article("According to popular psychology, what does «right-brained» mean?", ["Creative", "Logical", "Organized", "Analytical"]),
      article("What did the research at the University of Utah find?", ["No evidence that one side dominates", "That most people are left-brained", "That creative people use the right side", "That the brain has three parts"]),
      article("Who discovered that different halves control different activities?", ["Roger Sperry", "The media", "Online quizzes", "The University of Utah"]),
      article("How do the two sides work with language?", ["The left understands words; the right understands intonation.", "Only the left side is used.", "Only the right side is used.", "The right side understands words."]),
      article("Why has the myth survived?", ["People love labels.", "It is true.", "Scientists agree with it.", "It is very new."]),
    ],
  },
  {
    title: "Linkers",
    skill: "Reading",
    kind: "match",
    instructions: "What does each linker do?",
    questions: pairs([
      ["in other words|making things clearer", "i.e.|making things clearer", "for instance|giving examples", "due to|showing a reason"],
      ["that is to say|making things clearer", "such as|giving examples", "owing to|showing a reason", "because of|showing a reason"],
    ]),
  },
  {
    title: "Choose the linker",
    skill: "Reading",
    kind: "choice",
    instructions: "Choose the linker that completes the sentence.",
    questions: [
      say("The flight was cancelled ___ bad weather.", ["due to", "for instance", "in other words", "such as"]),
      say("I love outdoor sports, ___ skiing and climbing.", ["such as", "due to", "i.e.", "because"]),
      say("He's a vegan — ___, he doesn't eat any animal products.", ["in other words", "for instance", "due to", "such as"]),
      say("Many cities are expensive. Take London, ___.", ["for instance", "due to", "i.e.", "owing"]),
      say("The meeting is on the last Friday, ___ 29 March.", ["i.e.", "such as", "due to", "for instance of"]),
      say("The match was postponed ___ the snow.", ["owing to", "such as", "in other words", "e.g."]),
    ],
  },
  {
    title: "Phrasal verbs with out and up",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the phrasal verb that completes the sentence.",
    questions: [
      say("Something urgent has ___, so I'm afraid I have to rush off.", ["come up", "turned out", "sorted out", "made up"]),
      say("You don't need to book the restaurant — you can just ___.", ["turn up", "come up", "work out", "carry out"]),
      say("She said she was ill, but I think she was ___ it ___.", ["making … up", "turning … out", "sorting … out", "coming … up"]),
      say("He got top marks, but it ___ he had cheated.", ["turned out", "came up", "made up", "popped up"]),
      say("Someone from IT ___ my computer problems.", ["sorted out", "made up", "turned up", "popped up"]),
      say("I ___ time in the exam and couldn't finish my essay.", ["ran out of", "came up with", "turned up", "made up"]),
      say("Can you ___ this maths problem in your head?", ["work out", "turn up", "pop up", "make up"]),
      say("Hundreds of quizzes ___ when you search online.", ["pop up", "turn out", "carry out", "sort out"]),
      say("The scientists ___ a study at the university.", ["carried out", "popped up", "turned up", "made up"]),
      say("Who ___ this crazy idea?", ["came up with", "ran out of", "turned up", "sorted out"]),
    ],
  },
  {
    title: "What does it mean?",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match the phrasal verbs to their meanings.",
    questions: pairs([
      ["work out|find the answer", "pop up|appear suddenly", "carry out|do (a study, a task)", "come up with|think of an idea"],
      ["sort out|solve a problem", "turn out|be discovered in the end", "make up|invent a story", "turn up|arrive"],
    ]),
  },
  {
    title: "Phrasal verb definitions",
    skill: "Listening",
    kind: "audiotext",
    instructions: "You will hear seven sentences about words. Are they true or false?",
    questions: [
      heardTrue("«Zoning out» is something you do when you're very excited.", false, "You zone out when you stop paying attention."),
      heardTrue("If you're «still», it means you don't move.", true),
      heardTrue("«Yawning» is a gesture you make to show your approval.", false, "You yawn when you are tired or bored."),
      heardTrue("If something is described as «dull», it means it isn't interesting.", true),
      heardTrue("If you're «fed up», it means you've had enough to eat.", false, "Fed up = bored and annoyed."),
      heardTrue("If your mind «wanders», it means you have stopped paying attention.", true),
      heardTrue("If you are «trapped», it means you can't escape.", true),
    ],
  },
  {
    title: "A vandalism problem",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to three business partners discussing a problem. Answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("5.5"))("What is the problem at the factory?", ["Vandalism — graffiti and broken windows", "A fire", "Stolen computers", "Noisy neighbours"]),
      hearing(track("5.5"))("Who do they think is causing the problem?", ["Bored kids", "Their own workers", "Thieves", "Neighbours"]),
      hearing(track("5.5"))("Why don't they install security cameras?", ["They are expensive to set up and maintain.", "They are illegal.", "They don't work at night.", "The kids would steal them."]),
      hearing(track("5.5"))("Why don't they put in fake cameras?", ["B isn't convinced they would stop the vandals.", "They are too expensive.", "They are too big.", "The police don't allow them."]),
      hearing(track("5.5"))("Why don't they change the lock on the gate?", ["The lock hasn't been broken — they climbed over the wall.", "It's too expensive.", "They don't have the key.", "The gate is new."]),
      hearingTwo(track("5.5"))("Which TWO solutions do they choose?", ["Lights that come on when they sense movement", "Anti-climb paint on the walls"], ["Security cameras", "A new lock"]),
    ],
  },
  {
    title: "Language for solutions",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear nine sentences from the discussion. Listen and choose the missing word.",
    questions: [
      gaps(track("5.6"), [
        ["One ___ would be to install some security cameras.", "alternative", "option", "idea"],
        ["We need to take cost into ___.", "consideration", "account", "thought"],
        ["I don't ___ that's an option.", "think", "suppose", "believe"],
        ["Would it be ___ putting in some of those fake cameras?", "worth", "good", "better"],
        ["I think a better ___ forward would be to put in some of those lights.", "way", "step", "plan"],
        ["That would be an ___ solution.", "effective", "excellent", "expensive"],
        ["Do you think there would be any ___ in changing the lock?", "point", "sense", "need"],
        ["What ___ we also paint the walls with anti-climb paint?", "if", "about", "when"],
        ["There's no ___ in doing that.", "harm", "point", "problem"],
      ]),
    ],
  },
  {
    title: "Suggest, accept or reject?",
    skill: "Speaking",
    kind: "match",
    instructions: "Is the phrase used to suggest, accept or reject a solution?",
    questions: pairs([
      ["What if we …?|suggesting", "Would it be worth …?|suggesting", "That would be an effective solution.|accepting", "I'm not convinced.|rejecting"],
      ["One alternative would be to …|suggesting", "I suppose there's no harm in doing that.|accepting", "I don't think that's an option.|rejecting", "I think a better way forward would be to …|rejecting"],
    ]),
  },
  {
    title: "Giving advice",
    skill: "Writing",
    kind: "choice",
    instructions: "Choose the phrase that completes the advice.",
    questions: [
      say("___ you turn the power off before you change a light bulb.", ["Make sure", "Avoid", "In case", "Otherwise"]),
      say("Wait a few seconds before touching the old bulb ___ it's hot.", ["in case", "otherwise", "make sure", "avoid"]),
      say("Push the new bulb in gently, ___ it might break.", ["otherwise", "in case", "make sure", "avoid"]),
      say("___ you do, don't turn the switch on until you've finished.", ["Whatever", "However", "Whenever", "Wherever"]),
      say("It's ___ to wrap the old bulb in the packaging from the new one.", ["advisable", "advice", "advise", "advising"]),
      say("___ winding the floss so tightly that your finger turns blue.", ["Avoid", "Make sure", "Remember", "Don't forget"]),
      say("Be careful ___ twist the ring too hard.", ["not to", "to not", "don't", "not"]),
      say("It's better not to use strong soap ___ it irritates the skin.", ["in case", "otherwise", "whatever", "such as"]),
    ],
  },
  {
    title: "Video words: boredom",
    skill: "Vocabulary",
    kind: "match",
    instructions: "These compound nouns are from the video about boredom. Match the two parts.",
    questions: pairs([
      ["spread|sheet", "production|line", "attention|span", "instant|gratification"],
      ["pie|chart", "long-haul|flight", "time|management", "work|environment"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Vocabulary",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("Something urgent has come *out, so I have to go.", "come up = happen unexpectedly."),
      mistake("She was making it *out — it wasn't true.", "make up = invent."),
      mistake("Someone sorted *up my computer problems.", "sort out = solve."),
      mistake("I ran out *from time in the exam.", "run out of."),
      mistake("The match was cancelled due *of the rain.", "due to."),
      mistake("I love sports, such *like tennis.", "such as."),
      mistake("Would it be worth *to put in fake cameras?", "worth + -ing: putting."),
      mistake("We need to take cost into *considerate.", "into consideration."),
      mistake("Take an umbrella *otherwise it rains.", "in case it rains (a possible event)."),
      mistake("He has a very short attention *spin.", "attention span."),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then say it yourself. Fixed phrases have their own rhythm — stress the main words.",
    questions: phrases([
      "One alternative would be to install some cameras.",
      "We need to take cost into consideration.",
      "I don't think that's an option.",
      "Would it be worth putting in some lights?",
      "That would be an effective solution.",
      "There's no harm in doing that.",
      "Something urgent has come up.",
      "It turned out he had cheated.",
      "Make sure you turn the power off.",
      "attention span",
    ]),
  },
  {
    title: "Video words: compound nouns",
    skill: "Vocabulary",
    kind: "fill",
    instructions: "These compound nouns are from the video «Boredom» (watch it in «Inglizcha tomosha» after the exercises). Complete each sentence: attention span, pie chart, spreadsheet, instant gratification, production line.",
    questions: written([
      ["He has a very short ___. He can't concentrate on anything for more than a few minutes.", "attention span"],
      ["A ___ consists of a circle divided into sections.", "pie chart"],
      ["I find inputting data into a ___ so tedious.", "spreadsheet|spread sheet"],
      ["We live in an age of ___, where we want things immediately.", "instant gratification"],
      ["I once had a really repetitive job working on a ___ in a bottling factory.", "production line"],
    ]),
  },
];
