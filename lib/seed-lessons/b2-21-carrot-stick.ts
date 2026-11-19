/**
 * B2, 21-dars — «The carrot or the stick? Agreeing and disagreeing».
 * Rag'bat va jazo (practical wisdom), ellipsis, prefikslar (self-, bi-,
 * inter-, mono-, multi-, semi-), rozilik/norozilik iboralari, ishontiruvchi
 * xat, g'alati qonunlar videosi so'zlari.
 * Navigate B2, 7.3 + 7.4 + 7.5 asosida: tinglash mashqlarida kitob
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
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

export const B2_21_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🥕", "the carrot or the stick", "ðə ˌkærət ɔː ðə ˈstɪk|za kerat oo za stik", "ibora", "Rag'bat yoki jazo", "A reward or a punishment, used to make people do something.", "What motivates you more, the carrot or the stick?", "Sizni ko'proq nima rag'batlantiradi: mukofotmi yoki jazo?"),
      w("🎁", "incentive", "ɪnˈsentɪv|insentiv", "ot", "Rag'bat", "Something that encourages you to do something.", "A bonus is a good incentive to work harder.", "Mukofot puli ko'proq ishlash uchun yaxshi rag'bat."),
      w("⚠️", "threat of punishment", "ˌθret əv ˈpʌnɪʃmənt|Sret av panishment", "ibora", "Jazo tahdidi", "The possibility of being punished.", "The stick means the threat of punishment.", "«Tayoq» jazo tahdidini anglatadi."),
      w("⚖️", "judgment", "ˈdʒʌdʒmənt|jajment", "ot", "Mulohaza, aql bilan baho berish", "The ability to make good decisions.", "If people can't use their own judgment, they make unfair decisions.", "Odamlar o'z mulohazasini ishlata olmasa, adolatsiz qarorlar qabul qiladi."),
      w("🙋", "self-interest", "ˌself ˈɪntrəst|self intrast", "ot", "Shaxsiy manfaat", "Caring only about what is good for you.", "Incentives create people who are only concerned about their own self-interest.", "Rag'batlar faqat o'z manfaatini o'ylaydigan odamlarni yaratadi."),
      w("🎮", "game the system", "ˌɡeɪm ðə ˈsɪstəm|geym za sistam", "ibora", "Tizimdan ayyorlik bilan foydalanmoq", "Use the rules unfairly to get an advantage.", "Incentives encourage people to game the system.", "Rag'batlar odamlarni tizimdan ayyorlik bilan foydalanishga undaydi."),
      w("🦉", "practical wisdom", "ˌpræktɪkl ˈwɪzdəm|prektikl wizdam", "ibora", "Amaliy donolik", "Knowing the right thing to do in real situations.", "Rules and incentives are not enough. We also need practical wisdom.", "Qoida va rag'batlar yetarli emas. Bizga amaliy donolik ham kerak."),
      w("😎", "self-centred", "ˌself ˈsentəd|self sentad", "sifat", "Xudbin", "Thinking only about yourself.", "Schwarz says that incentives make us self-centred.", "Shvartsning aytishicha, rag'batlar bizni xudbin qiladi."),
      w("🃏", "manipulate", "məˈnɪpjuleɪt|manipyuleyt", "fe'l", "Boshqarmoq (ayyorlik bilan)", "Control someone in a clever, unfair way.", "If you have the skill but not the will, you use your skills to manipulate people.", "Mahoratingiz bo'lib, irodangiz bo'lmasa, mahoratingizni odamlarni boshqarishga ishlatasiz."),
      w("☔", "save for a rainy day", "ˌseɪv fər ə ˌreɪni ˈdeɪ|seyv far a reyni dey", "ibora", "Qora kun uchun jamg'armoq", "Keep money for a time when you may need it.", "It is always wise to save for a rainy day.", "Qora kun uchun jamg'arish doim oqilona."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🗣️", "bilingual", "ˌbaɪˈlɪŋɡwəl|baylingwal", "sifat", "Ikki tilli", "Speaking two languages.", "People who are bilingual often earn more.", "Ikki tilni biladigan odamlar ko'pincha ko'proq pul topadi."),
      w("💬", "monolingual", "ˌmɒnəˈlɪŋɡwəl|monalingwal", "sifat", "Bir tilli", "Speaking only one language.", "People who speak more than one language earn more than people who are monolingual.", "Bir nechta tilni biladiganlar bir tilli odamlardan ko'proq topadi."),
      w("🌍", "intercontinental", "ˌɪntəˌkɒntɪˈnentl|intakontinentl", "sifat", "Qit'alararo", "Between continents.", "It was a long intercontinental flight from Tashkent to New York.", "Toshkentdan Nyu-Yorkka uzoq qit'alararo parvoz edi."),
      w("🌐", "international", "ˌɪntəˈnæʃnəl|intaneshnal", "sifat", "Xalqaro", "Between or involving different countries.", "The company set up an international competition, with entries from all over the world.", "Kompaniya butun dunyodan ishtirokchilar bilan xalqaro tanlov tashkil qildi."),
      w("🌈", "multicoloured", "ˌmʌltiˈkʌləd|maltikalad", "sifat", "Rang-barang", "With lots of different colours.", "She was wearing a multicoloured scarf.", "U rang-barang sharf taqib olgan edi."),
      w("🏠", "semi-detached", "ˌsemi dɪˈtætʃt|semi ditecht", "sifat", "Yarim alohida (bitta devori qo'shni bilan)", "Joined to another house on one side.", "We live in a semi-detached house.", "Biz yarim alohida uyda yashaymiz."),
      w("👴", "semi-retired", "ˌsemi rɪˈtaɪəd|semi ritayad", "sifat", "Yarim nafaqaga chiqqan", "Working only part of the time after retiring.", "Although he is seventy, he's still only semi-retired.", "Yetmish yoshda bo'lsa ham, u hali yarim nafaqada."),
      w("🍫", "self-control", "ˌself kənˈtrəʊl|self kantroul", "ot", "O'zini tutish", "The ability to control what you do.", "When it comes to chocolate, I have absolutely no self-control.", "Shokolad masalasida o'zimni umuman tuta olmayman."),
      w("💪", "self-confidence", "ˌself ˈkɒnfɪdəns|self konfidans", "ot", "O'ziga ishonch", "Believing in your own abilities.", "Learning a language gave her more self-confidence.", "Til o'rganish unga ko'proq o'ziga ishonch berdi."),
      w("🎉", "bicentenary", "ˌbaɪsenˈtiːnəri|baysentiinari", "ot", "200 yillik yubiley", "The day exactly 200 years after something happened.", "The school opened 200 years ago, so they are celebrating their bicentenary.", "Maktab 200 yil oldin ochilgan, shuning uchun ular 200 yillik yubileyni nishonlashmoqda."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("👍", "I'm with you there", "aɪm ˈwɪð ju ðeə|aym wiz yu zea", "ibora", "Bu borada sizga qo'shilaman", "I agree with you (informal).", "I'm with you there. Everyone should pay the same.", "Bu borada sizga qo'shilaman. Hamma bir xil to'lashi kerak."),
      w("🎯", "that's spot on", "ðæts ˌspɒt ˈɒn|zets spot on", "ibora", "Aynan to'g'ri", "Exactly right (informal).", "Yes, that's spot on.", "Ha, aynan to'g'ri."),
      w("💯", "I couldn't agree more", "aɪ ˌkʊdnt əˈɡriː mɔː|ay kudnt agrii moo", "ibora", "To'liq qo'shilaman", "I completely agree.", "I couldn't agree more — it's a great idea.", "To'liq qo'shilaman — bu ajoyib fikr."),
      w("🙅", "that's not really how I see it", "ðæts ˌnɒt ˌrɪəli haʊ aɪ ˈsiː ɪt|zets not riali hau ay sii it", "ibora", "Men buni boshqacha ko'raman", "A polite way to disagree.", "Well, that's not really how I see it. My car is quite old.", "Men buni boshqacha ko'raman. Mashinam ancha eski."),
      w("😤", "come off it", "ˌkʌm ˈɒf ɪt|kam of it", "ibora", "Qo'ysangiz-chi! (rozi emasman)", "I don't believe you (informal, strong).", "Come off it! You use your car all the time.", "Qo'ysangiz-chi! Mashinangizni doim ishlatasiz-ku."),
      w("🤨", "I beg to differ", "aɪ ˌbeɡ tə ˈdɪfə|ay beg ta difa", "ibora", "Kechirasiz, men boshqacha fikrdaman (rasmiy)", "A formal, polite way to disagree.", "I beg to differ. I think the new law is unfair.", "Kechirasiz, men boshqacha fikrdaman. Yangi qonun adolatsiz deb o'ylayman."),
      w("🚦", "parking meters", "ˈpɑːkɪŋ ˌmiːtəz|paaking miitaz", "ibora", "To'xtash joyi hisoblagichlari", "Machines where you pay to park your car.", "Smart parking meters will charge more for more polluting cars.", "Aqlli hisoblagichlar ko'proq ifloslantiradigan mashinalardan ko'proq haq oladi."),
      w("🏭", "polluting", "pəˈluːtɪŋ|paluuting", "sifat", "Ifloslantiradigan", "Making air, water or land dirty.", "Drivers of more polluting cars will pay more.", "Ko'proq ifloslantiradigan mashina haydovchilari ko'proq to'laydi."),
      w("📜", "misdemeanour", "ˌmɪsdɪˈmiːnə|misdimiina", "ot", "Kichik huquqbuzarlik", "A crime that is not very serious.", "Is building sandcastles a major crime or a minor misdemeanour?", "Qum qal'a qurish katta jinoyatmi yoki kichik huquqbuzarlikmi?"),
      w("🧠", "common sense", "ˌkɒmən ˈsens|koman sens", "ibora", "Sog'lom fikr", "The ability to make good, practical decisions.", "Some old laws go against common sense.", "Ba'zi eski qonunlar sog'lom fikrga zid."),
    ],
  },
];

const ARTICLE = `THE CARROT OR THE STICK?
When we try to make things better, whether a workplace or a whole system like the health service, we usually either reward people with incentives or control them with rules.
But there are problems with both. If people have to follow the rules and can't use their own judgment, they will sometimes make decisions that are clearly unfair. And if we rely on incentives, people only think about their own self-interest and game the system.
Psychologist Barry Schwarz says we also need «practical wisdom». It has two parts: «moral skill» — trying things out and seeing them fail — and «moral will» — the wish to do what is right for others as well as for yourself.
In the old days, Schwarz argues, bankers wanted to make money but also to serve their clients. By focusing on incentives, banking lost its moral will.`;
const read = reading(ARTICLE);

export const B2_21_EXERCISES: SeedExercise[] = [
  {
    title: "The carrot or the stick?",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the article. Choose the correct answer.",
    questions: [
      read("What does «the carrot» mean?", ["An incentive or promise of reward", "A threat of punishment", "A healthy meal", "A rule"]),
      read("What is the problem with simply following rules?", ["People can't use their own judgment and make unfair decisions.", "Rules are too expensive.", "Nobody follows them.", "They make people self-centred."]),
      read("What do incentives encourage people to do?", ["Game the system", "Help others", "Use their judgment", "Save money"]),
      read("What are the two parts of practical wisdom?", ["Moral skill and moral will", "Rules and incentives", "The carrot and the stick", "Money and power"]),
      read("According to Schwarz, what did banking lose?", ["Its moral will", "Its money", "Its rules", "Its clients"]),
    ],
  },
  {
    title: "Ellipsis",
    skill: "Reading",
    kind: "choice",
    instructions: "Which words have been left out of the sentence?",
    questions: [
      say("He tried several times, but (…) failed.", ["he", "I", "was", "say"]),
      say("I knew he would do well, but I wouldn't (…).", ["do well", "he", "say", "was"]),
      say("He fired two members of staff and promoted a third (…).", ["member of staff", "he", "do well", "was"]),
      say("What you don't say is as important as what you do (…).", ["say", "do well", "was", "he"]),
      say("His ideas were imaginative and his work (…) excellent.", ["was", "he", "say", "do well"]),
      say("I applied for promotion, but (…) didn't get it.", ["I", "he", "was", "say"]),
    ],
  },
  {
    title: "Prefixes",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match each prefix to its meaning.",
    questions: pairs([
      ["self-|done to or by yourself", "bi-|two", "inter-|between", "mono-|one"],
      ["multi-|many", "semi-|half or partly", "bilingual|speaking two languages", "semicircle|half a circle"],
    ]),
  },
  {
    title: "Complete with a prefix",
    skill: "Vocabulary",
    kind: "fill",
    instructions: "Complete each sentence with the root word in brackets and a suitable prefix.",
    questions: written([
      ["People who speak more than one language earn more than people who are ___. (lingual)", "monolingual"],
      ["When it comes to chocolate, I have absolutely no ___. (control)", "self-control"],
      ["Although he is seventy, he's still only ___; he works two days a week. (retired)", "semi-retired"],
      ["The company set up an ___ competition, with entries from all over the world. (national)", "international"],
      ["It is 200 years since the school opened, so they are celebrating their ___. (centenary)", "bicentenary"],
      ["She has lots of ___ — she believes in her own abilities. (confidence)", "self-confidence"],
    ]),
  },
  {
    title: "Prefix definitions",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear six definitions. Choose the word that matches each one.",
    questions: [
      gaps(track("7.8"), [
        ["with lots of different colours → ___", "multicoloured", "monochrome", "bicoloured"],
        ["only speaking one language → ___", "monolingual", "bilingual", "multilingual"],
        ["between different states in a country → ___", "interstate", "intercontinental", "multistate"],
        ["a vehicle with two wheels and no engine → ___", "bicycle", "tricycle", "motorbike"],
        ["a house which is joined to another house → ___", "semi-detached", "detached", "multi-storey"],
        ["believing in your own abilities → ___", "self-confidence", "self-control", "self-interest"],
      ]),
    ],
  },
  {
    title: "Adverbs with a sound",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear five sentences. Listen and choose the missing word.",
    questions: [
      gaps(track("7.7"), [
        ["When she saw him, she screamed ___.", "loudly", "quietly", "suddenly"],
        ["The man was wearing a very ___ suit.", "smart", "small", "short"],
        ["There were lots of people at the ___.", "party", "station", "match"],
        ["He was ___.", "crying", "trying", "lying"],
        ["It was hot and ___.", "sunny", "funny", "sandy"],
      ]),
    ],
  },
  {
    title: "Smart parking meters",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to three friends discussing the new parking meters in Madrid. Answer the questions.",
    questions: [
      hearing(track("7.4"))("What will the new parking meters do?", ["Charge more for cars that cause more pollution", "Charge everyone the same", "Ban all cars", "Give free parking to old cars"]),
      hearing(track("7.4"))("What does speaker A think?", ["It's a great idea.", "It's unfair.", "It won't work.", "It's too expensive."]),
      hearing(track("7.4"))("Why does B disagree?", ["B's car is old and B can't afford a new one.", "B doesn't have a car.", "B lives in Madrid.", "B thinks pollution isn't a problem."]),
      hearing(track("7.4"))("What does C think?", ["Everyone should pay the same for the same service.", "Old cars should be banned.", "Parking should be free.", "Electric cars should pay more."]),
      hearingTwo(track("7.4"))("Which TWO arguments does A use?", ["Pollution is very bad these days.", "We need to encourage people to buy cars that are better for the environment."], ["Parking is too cheap.", "Old cars are dangerous."]),
      hearing(track("7.4"))("What does A suggest at the end?", ["Maybe B should just use the car less.", "B should sell the car.", "B should move to the country.", "B should walk everywhere."]),
    ],
  },
  {
    title: "Agreeing and disagreeing",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear the phrases for agreeing and disagreeing in order. Choose the missing word.",
    questions: [
      gaps(track("7.5"), [
        ["I'm ___ you there.", "with", "for", "on"],
        ["I ___ agree.", "completely", "really", "totally"],
        ["True ___.", "enough", "indeed", "fact"],
        ["Yes, that's spot ___.", "on", "in", "off"],
        ["That's just what I was ___.", "thinking", "saying", "hoping"],
        ["I couldn't agree ___.", "more", "less", "better"],
        ["That's not really how I ___ it.", "see", "say", "think"],
        ["You can't be ___!", "serious", "sure", "right"],
        ["Come ___ it!", "off", "on", "out"],
        ["I beg to ___.", "differ", "disagree", "different"],
      ]),
    ],
  },
  {
    title: "Agree or disagree?",
    skill: "Speaking",
    kind: "match",
    instructions: "Does the phrase agree or disagree?",
    questions: pairs([
      ["I'm with you there.|agree", "True enough.|agree", "I beg to differ.|disagree", "Come off it!|disagree"],
      ["That's just what I was thinking.|agree", "I couldn't agree more.|agree", "I'm not sure I quite agree.|disagree", "You can't be serious!|disagree"],
    ]),
  },
  {
    title: "Formal or informal?",
    skill: "Speaking",
    kind: "situation",
    instructions: "Choose the most suitable reply.",
    questions: [
      say("A close friend says: «This new law is completely crazy.» You strongly disagree.", ["Come off it!", "I beg to differ.", "I'm with you there.", "True enough."]),
      say("Your manager, in a meeting, makes a point you politely disagree with.", ["I'm not sure I quite agree.", "Come off it!", "You can't be serious!", "Yes, that's spot on."]),
      say("Your friend says exactly what you think.", ["That's just what I was thinking!", "I beg to differ.", "I can't agree with you there.", "Come off it!"]),
      say("A colleague you don't know well says something you agree with.", ["I completely agree.", "Come off it!", "You can't be serious!", "I beg to differ."]),
      say("Your friend says something you can't believe.", ["You can't be serious!", "True enough.", "I couldn't agree more.", "I'm with you there."]),
      say("In a formal debate, you want to disagree very politely.", ["I beg to differ.", "Come off it!", "Absolutely!", "That's spot on."]),
    ],
  },
  {
    title: "Video words: against the law?",
    skill: "Vocabulary",
    kind: "match",
    instructions: "These collocations are from the video about strange laws. Match the two parts.",
    questions: pairs([
      ["common|sense", "legal|statute", "major|crime", "minor|misdemeanour"],
      ["prison|sentence", "parking|meters", "polluting|cars", "practical|wisdom"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Vocabulary",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("I'm with you *their.", "I'm with you there."),
      mistake("Yes, that's spot *in.", "spot on."),
      mistake("I couldn't agree *most.", "I couldn't agree more."),
      mistake("Come *of it!", "Come off it!"),
      mistake("I beg to *different.", "I beg to differ."),
      mistake("He speaks two languages — he's *monolingual.", "Two languages → bilingual."),
      mistake("I have no *self-interest when it comes to chocolate.", "I can't stop → no self-control."),
      mistake("Incentives can make us *self-control.", "Thinking only about yourself → self-centred."),
      mistake("It was a long *international flight from Asia to America.", "Between continents → intercontinental."),
      mistake("Building sandcastles is a minor *misdemean.", "misdemeanour."),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then say it yourself. Strong phrases are said with emphasis — the voice rises and falls.",
    questions: phrases([
      "Yes, that's spot on.",
      "Absolutely!",
      "That's just what I was thinking.",
      "I couldn't agree more.",
      "You can't be serious!",
      "Come off it!",
      "I'm not sure I quite agree.",
      "I beg to differ.",
      "What motivates you more, the carrot or the stick?",
      "self-confidence",
    ]),
  },
];
