/**
 * B2, 7-dars — «Invest in your future». Kelajak kasblari, o'qish va bilim
 * haqidagi iboralar (drop out, pick up, stick at it …).
 * Grammatika: kelasi zamon shakllari — will, going to, present continuous,
 * present simple.
 * Navigate B2, 3.1 asosida: tinglash mashqlarida kitob treklari (yopiq
 * ombordan), lug'at misollari kitob matni va Wordlist'idan yoki unga yaqin;
 * mashq matnlari o'zimizniki. Mashqlar inglizcha.
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

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

export const B2_07_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🤖", "automation", "ˌɔːtəˈmeɪʃn|ootameyshn", "ot", "Avtomatlashtirish", "Using machines and computers instead of people.", "We are likely to have more and more automation.", "Bizda avtomatlashtirish tobora ko'payishi ehtimoli bor."),
      w("🚘", "self-driving", "ˌself ˈdraɪvɪŋ|self drayving", "sifat", "O'zi yuradigan (haydovchisiz)", "Able to drive without a person controlling it.", "Trains and buses won't have drivers. Instead, we'll have self-driving vehicles.", "Poyezd va avtobuslarda haydovchi bo'lmaydi. Uning o'rniga haydovchisiz transport bo'ladi."),
      w("👴", "ageing", "ˈeɪdʒɪŋ|eyjing", "sifat", "Qarib borayotgan", "Becoming older.", "In many countries in the world, populations are ageing.", "Dunyoning ko'p mamlakatlarida aholi qarib bormoqda."),
      w("👷", "workforce", "ˈwɜːkfɔːs|wookfoos", "ot", "Ishchi kuchi", "All the people who work in a country or company.", "An ageing population means there will be a smaller workforce.", "Aholining qarishi ishchi kuchi kamayishini anglatadi."),
      w("🏥", "health care", "ˈhelθ keə|helS kea", "ot", "Sog'liqni saqlash", "The services that look after people's health.", "There will probably be more jobs in the health care sector.", "Sog'liqni saqlash sohasida ish o'rinlari ko'payishi mumkin."),
      w("💻", "proficient", "prəˈfɪʃnt|prafishnt", "sifat", "Mohir, malakali", "Very good at doing something.", "Younger generations will be much more proficient at IT.", "Yosh avlodlar IT da ancha mohirroq bo'ladi."),
      w("🛠️", "customization", "ˌkʌstəmaɪˈzeɪʃn|kastamayzeyshn", "ot", "Moslashtirish (har bir mijozga)", "Making products for what one person wants.", "Another big trend is customization.", "Yana bir katta yo'nalish — har bir mijozga moslashtirish."),
      w("✂️", "tailored", "ˈteɪləd|teylad", "sifat", "Moslab qilingan", "Made specially for a person or purpose.", "Customization means providing goods and services specifically tailored to what individuals want.", "Moslashtirish — tovar va xizmatlarni aynan har kimning xohishiga moslab berish."),
      w("📼", "relive", "ˌriːˈlɪv|riiliv", "fe'l", "Qayta boshdan kechirmoq", "Remember something so clearly that you feel it again.", "Older people often like to relive happy memories.", "Keksa odamlar ko'pincha baxtli xotiralarni qayta boshdan kechirishni yoqtiradi."),
      w("🫙", "take for granted", "ˌteɪk fə ˈɡrɑːntɪd|teyk fa graantid", "ibora", "O'z-o'zidan bor deb bilmoq", "Think something will always be there and not value it.", "Many jobs we take for granted will disappear.", "Biz odatiy deb biladigan ko'p kasblar yo'qoladi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🚪", "drop out", "ˌdrɒp ˈaʊt|drop aut", "ibora", "O'qishni tashlab ketmoq", "Leave school or university before you finish.", "Plenty of successful business people drop out of university.", "Ko'plab muvaffaqiyatli tadbirkorlar universitetni tashlab ketgan."),
      w("🧠", "know your stuff", "ˌnəʊ jə ˈstʌf|nou ya staf", "ibora", "Ishini puxta bilmoq", "Have good practical skills and knowledge.", "If you know your stuff, employers don't care if you've got a degree or not.", "Ishingizni puxta bilsangiz, ish beruvchilarga diplomingiz bor-yo'qligi muhim emas."),
      w("🧲", "pick up a lot", "ˌpɪk ʌp ə ˈlɒt|pik ap a lot", "ibora", "Ko'p narsani o'zlashtirib olmoq", "Learn a lot without really studying.", "You can pick up a lot of things you need to know on the job.", "Kerakli ko'p narsani ish jarayonida o'zlashtirib olasiz."),
      w("📈", "get on", "ˌɡet ˈɒn|get on", "ibora", "Muvaffaqiyatga erishmoq (ishda)", "Be successful in your job.", "If you want to get on in your career, you have to stay up to date.", "Kasbingizda muvaffaqiyatga erishmoqchi bo'lsangiz, zamon bilan hamnafas bo'lishingiz kerak."),
      w("📵", "lose touch", "ˌluːz ˈtʌtʃ|luuz tach", "ibora", "Aloqani yo'qotmoq, uzilib qolmoq", "Stop knowing what is happening.", "It is very easy to lose touch with changes in your area of work.", "Ish sohangizdagi o'zgarishlardan uzilib qolish juda oson."),
      w("🍋", "make the most of", "ˌmeɪk ðə ˈməʊst əv|meyk za moust av", "ibora", "…dan to'liq foydalanmoq", "Get as much benefit as possible from something.", "Try to make the most of opportunities to learn something new.", "Yangi narsa o'rganish imkoniyatlaridan to'liq foydalanishga harakat qiling."),
      w("🔭", "think ahead", "ˌθɪŋk əˈhed|sink ahed", "ibora", "Oldindan o'ylamoq", "Make plans for the future.", "You need to think ahead about the qualifications you may need.", "Sizga kerak bo'ladigan malakalar haqida oldindan o'ylashingiz kerak."),
      w("💯", "do your best", "ˌduː jə ˈbest|duu ya best", "ibora", "Qo'lingizdan kelganini qilmoq", "Try as hard as you can.", "If you're not enjoying a job, do your best to find something you like about it.", "Ishingiz yoqmasa ham, unda yoqadigan narsani topishga harakat qiling."),
      w("🪨", "stick at it", "ˌstɪk ˈæt ɪt|stik et it", "ibora", "Qiyin bo'lsa ham davom ettirmoq", "Continue doing something, even when it's difficult.", "Employers need to see that you can stick at it, even when the work is difficult.", "Ish beruvchilar ish qiyin bo'lsa ham davom ettira olishingizni ko'rishlari kerak."),
      w("🏳️", "give up easily", "ˌɡɪv ʌp ˈiːzəli|giv ap iizali", "ibora", "Oson taslim bo'lmoq", "Stop trying as soon as something is difficult.", "Employers like to see that you don't give up easily if a job is difficult.", "Ish beruvchilar ish qiyin bo'lsa, oson taslim bo'lmasligingizni ko'rishni yoqtiradi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("📜", "qualifications", "ˌkwɒlɪfɪˈkeɪʃnz|kwolifikeyshnz", "ot", "Malaka (hujjatlar, diplom)", "Exams you have passed or courses you have finished.", "Things are moving so fast that it's important to keep your qualifications up to date.", "Hamma narsa shunchalik tez o'zgaryaptiki, malakangizni yangilab turish muhim."),
      w("🎓", "graduate", "ˈɡrædʒueɪt|grejueyt", "fe'l", "(Oliy o'quv yurtini) bitirmoq", "Finish your studies at university.", "I graduate this summer – assuming I pass the course!", "Shu yozda o'qishni bitiraman — kursni topshirsam, albatta!"),
      w("📉", "unemployment", "ˌʌnɪmˈplɔɪmənt|animployment", "ot", "Ishsizlik", "When people do not have jobs.", "There's a lot of unemployment at the moment.", "Hozir ishsizlik ko'p."),
      w("⚡", "straightaway", "ˌstreɪtəˈweɪ|streytawey", "ravish", "Darhol, birdaniga", "Immediately.", "It's probably going to be quite hard to get a good job straightaway.", "Darhol yaxshi ish topish ancha qiyin bo'lsa kerak."),
      w("🔑", "vital", "ˈvaɪtl|vaytl", "sifat", "Hayotiy muhim", "Extremely important.", "I completely agree that IT skills are going to be vital.", "IT ko'nikmalari hayotiy muhim bo'lishiga to'liq qo'shilaman."),
      w("🤸", "flexibility", "ˌfleksəˈbɪləti|fleksabilati", "ot", "Moslashuvchanlik", "Being able to change easily.", "Flexibility is very important in the world of work.", "Ish dunyosida moslashuvchanlik juda muhim."),
      w("🧰", "on the job", "ˌɒn ðə ˈdʒɒb|on za job", "ibora", "Ish jarayonida", "While you are working, not in a classroom.", "It's more important to get practical work experience — you learn a lot on the job.", "Amaliy ish tajribasi muhimroq — ish jarayonida ko'p narsa o'rganasiz."),
      w("🛋️", "interior designer", "ɪnˌtɪəriə dɪˈzaɪnə|intiaria dizayna", "ibora", "Interyer dizayneri", "A person who plans how the inside of a room or house looks.", "A nostalgist will be an interior designer who recreates a time in the past.", "Nostalgist — o'tmishdagi davrni qayta yaratadigan interyer dizayneri bo'ladi."),
      w("🌳", "rewilder", "ˌriːˈwaɪldə|riiwaylda", "ot", "Tabiatni tiklovchi (kelajak kasbi)", "Someone who repairs environmental damage to the countryside.", "A rewilder replants forests and brings back native animals.", "Tabiatni tiklovchi o'rmonlarni qayta ekadi va mahalliy hayvonlarni qaytaradi."),
      w("♻️", "garbage designer", "ˈɡɑːbɪdʒ dɪˌzaɪnə|gaabij dizayna", "ibora", "Chiqindidan buyum loyihalovchi", "Someone who designs products from things we throw away.", "I'm studying design, so I might quite fancy being a garbage designer.", "Dizayn o'qiyapman, shuning uchun chiqindidan buyum yasovchi bo'lish menga yoqishi mumkin."),
    ],
  },
];

const TEXT = `WORK IN 2040
How will we work twenty years from now? Experts agree on a few things.
First, populations are ageing, so there will be more jobs in health care but a smaller workforce.
Second, there is going to be more automation. Self-driving buses and trains are already being tested, so many drivers will need new jobs.
Third, new jobs will appear. Garbage designers will turn rubbish into useful products, and rewilders will replant forests.
So what should students do now? Think ahead, pick up practical skills on the job and keep your qualifications up to date. The world of work is changing — make sure you don't lose touch.`;
const tf = trueFalse(TEXT);

export const B2_07_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("I'm taking a course in app design.", ["I'm taking a course in app design.", "I'll take a course in app design.", "I'm going to take a course in app design.", "I'm taking a course in art design."]),
      listen("It starts next week.", ["It starts next week.", "It's starting next week.", "It'll start next week.", "It started last week."]),
      listen("Look at the traffic. We're going to be late!", ["Look at the traffic. We're going to be late!", "Look at the traffic. We'll be late!", "Look at the traffic. We're late!", "Look at the traffic. We were going to be late!"]),
      listen("I'll help you if you like.", ["I'll help you if you like.", "I help you if you like.", "I'm helping you if you like.", "I'd help you if you like."]),
      listen("We're meeting at the restaurant at 7.30.", ["We're meeting at the restaurant at 7.30.", "We'll meet at the restaurant at 7.30.", "We meet at the restaurant at 7.30.", "We're meeting at the restaurant at 7.13."]),
      listen("Their plane lands at 7 a.m. on Wednesday.", ["Their plane lands at 7 a.m. on Wednesday.", "Their plane will land at 7 a.m. on Wednesday.", "Their plane landed at 7 a.m. on Wednesday.", "Their plane lands at 7 p.m. on Wednesday."]),
      listen("I won't tell anyone. I promise.", ["I won't tell anyone. I promise.", "I don't tell anyone. I promise.", "I want to tell anyone. I promise.", "I won't tell anybody. I promise."]),
      listen("qualifications", ["qualifications", "qualification", "quantifications", "classifications"]),
      listen("unemployment", ["unemployment", "employment", "unemployed", "enjoyment"]),
      listen("proficient", ["proficient", "efficient", "sufficient", "professional"]),
    ],
  },
  {
    title: "Jobs of the future",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to a podcast with a careers consultant and two students. Answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("3.1"))("What does John Moody do?", ["He's a careers consultant.", "He's a train driver.", "He's an app designer.", "He's a university teacher."]),
      hearingTwo(track("3.1"))("Which TWO results of ageing populations does John mention?", ["More jobs in health care", "A smaller workforce"], ["More train drivers", "Fewer IT jobs"]),
      hearing(track("3.1"))("What will an auto transport analyst do?", ["Manage the automatic transport system", "Drive self-driving buses", "Repair old trains", "Sell tickets online"]),
      hearing(track("3.1"))("What does John say about IT skills in the future?", ["Almost everyone will have them, like reading and writing.", "Only a few experts will have them.", "They won't be important.", "They will disappear."]),
      hearing(track("3.1"))("What does a rewilder do?", ["Undoes environmental damage to the countryside", "Designs products from rubbish", "Recreates rooms from the past", "Builds new roads"]),
      hearing(track("3.1"))("Why is Ben taking a course in app design?", ["Younger people are more proficient at IT and he wants to keep up.", "He wants to be a train driver.", "His university made it compulsory.", "He has lost his job."]),
      hearing(track("3.1"))("What does Lucy study?", ["Design", "IT", "History", "Engineering"]),
      hearing(track("3.1"))("Who will nostalgists be particularly attractive to?", ["Older people", "Students", "Children", "Engineers"]),
    ],
  },
  {
    title: "Future forms in the podcast",
    skill: "Listening",
    kind: "listengap",
    instructions: "Listen to the last part of the podcast again. The sentences are in the order you hear them. Choose the future form you hear.",
    questions: [
      gaps(track("3.2"), [
        ["After hearing that, I think I ___ an auto transport analyst!", "'ll be", "'m going to be", "'m being"],
        ["I'm very well aware that younger generations ___ much more proficient.", "are going to be", "will be", "are being"],
        ["So I ___ a course in app design at the University of Westminster.", "'m taking", "'ll take", "take"],
        ["It ___ next week, and I'm really excited.", "starts", "will start", "is going to start"],
        ["I ___ in design in some way.", "'m certainly going to work", "certainly work", "'m certainly working"],
        ["Nostalgists ___ interior designers who specialize in recreating a particular time in the past.", "will be", "are being", "be"],
        ["Well, let me know if you do decide to become a nostalgist! — Yeah, I ___.", "will do", "'m doing", "do"],
      ]),
    ],
  },
  {
    title: "Which future form?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the best option.",
    questions: [
      say("I've booked it: I ___ a new online course in a few weeks.", ["'m starting", "start", "'ll start", "starting"]),
      say("I ___ web design, but I'm not sure where yet.", ["'m going to study", "'m studying", "study", "studied"]),
      say("The course ___ at 9 a.m. every Monday — it's on the timetable.", ["starts", "is starting", "will be start", "going to start"]),
      say("I hope I've passed. I ___ my results tomorrow morning.", ["'m getting", "get", "'ll getting", "going to get"]),
      say("Apparently app designers earn thousands a day! I think I ___ my career.", ["'ll change", "change", "'m changing", "changed"]),
      say("You ___ really like the film — it's brilliant.", ["'ll", "'re going", "are", "do"]),
      say("Look at those black clouds! It ___ rain.", ["'s going to", "will", "rains", "is raining to"]),
      say("The phone's ringing. — I ___ it!", ["'ll get", "'m going to get", "get", "'m getting"]),
      say("The team manager ___ at the meeting tomorrow — he's in Berlin.", ["won't be", "isn't being", "doesn't be", "not going to be"]),
      say("___ you doing anything at the weekend?", ["Are", "Will", "Do", "Going"]),
    ],
  },
  {
    title: "Why this form?",
    skill: "Grammar",
    kind: "match",
    instructions: "Match each sentence to the reason for the future form.",
    questions: pairs([
      ["We're meeting at 7.30.|an arrangement with a time", "The film starts at 8.|a timetable", "Look at the sky — it's going to rain.|evidence now", "I'll carry that for you.|a spontaneous offer"],
      ["I'm going to look for a new job.|a plan I already have", "Children born today will live to 100.|a prediction from opinion", "I won't tell anyone.|a promise", "Will you help me?|a request"],
    ]),
  },
  {
    title: "Grammar sentences",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear four sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("gr-3.1"), [
        ["The team manager ___ at the meeting tomorrow; he's in Berlin at a conference.", "won't be", "isn't", "wasn't"],
        ["George has decided he ___ economics at university.", "'s going to study", "'ll study", "studies"],
        ["Their plane ___ at 7.00 a.m. on Wednesday. Will you go and meet them?", "lands", "is landing", "landed"],
        ["I ___ at 4.00 p.m. today; I have a dentist's appointment at 4.30 p.m.", "'m leaving", "leave", "'ll leave"],
      ]),
    ],
  },
  {
    title: "Bella's plans",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to Bella talking about her career plans. Answer the questions.",
    questions: [
      hearing(track("3.3"))("Which year of university is Bella in?", ["Her third year", "Her first year", "Her second year", "She has finished"]),
      hearing(track("3.3"))("Why does she think it will be hard to get a good job straightaway?", ["There's a lot of unemployment.", "She hasn't got any skills.", "She doesn't want to work.", "She's going to fail her course."]),
      hearing(track("3.3"))("What is she going to do over the summer?", ["Work in her parents' shop", "Travel around Canada", "Study for more exams", "Work in a café"]),
      hearing(track("3.3"))("When is she planning to visit her friend?", ["In September", "In June", "Next week", "At Christmas"]),
      hearing(track("3.3"))("Where does her friend live?", ["Vancouver, Canada", "London, UK", "Sydney, Australia", "Toronto, Canada"]),
    ],
  },
  {
    title: "Plans for tonight",
    skill: "Grammar",
    kind: "fill",
    instructions: "Complete each sentence with the best future form of the verb in brackets.",
    questions: written([
      ["___ anything tonight? (you / do)", "Are you doing"],
      ["Yeah, I ___ Lucy and Thomas at 7. We've arranged it. (meet)", "'m meeting|am meeting"],
      ["Most films ___ between 7.30 and 8 p.m. (start)", "start"],
      ["Thanks, but I ___ Ben tonight, actually. (see — arrangement)", "'m seeing|am seeing"],
      ["Let me know when you're next going out and I ___ with you. (come — decision now)", "'ll come|will come"],
      ["Sure. I ___ you. (call — promise)", "'ll call|will call"],
      ["My sister has decided she ___ medicine. (study — plan)", "'s going to study|is going to study"],
      ["Careful! You ___ that glass! (drop — evidence)", "'re going to drop|are going to drop"],
    ]),
  },
  {
    title: "What would you say?",
    skill: "Grammar",
    kind: "situation",
    instructions: "Read the situation. Choose the most natural sentence.",
    questions: [
      say("Your friend's bag looks heavy. You offer help.", ["I'll carry it for you.", "I'm carrying it for you.", "I carry it for you.", "I'm going to carry it for you yesterday."]),
      say("You bought a ticket for a concert on Friday.", ["I'm going to a concert on Friday.", "I'll go to a concert on Friday, I think.", "I go to a concert on Friday.", "I went to a concert on Friday."]),
      say("You check the timetable. The train is at 6.15.", ["The train leaves at 6.15.", "The train is leaving at 6.15, I've decided.", "The train will leave at 6.15, I promise.", "The train is going to leave at 6.15, look!"]),
      say("You decided last month to learn to drive.", ["I'm going to learn to drive.", "I'll learn to drive, I've just decided.", "I learn to drive.", "I'm learning to drive yesterday."]),
      say("You think robots will do many jobs in the future.", ["I think robots will do many jobs.", "Robots are doing many jobs tomorrow.", "Robots do many jobs next year.", "Robots are going to doing many jobs."]),
      say("Your friend asks you to keep a secret.", ["I won't tell anyone.", "I'm not telling anyone yesterday.", "I don't tell anyone tomorrow.", "I'm not going tell anyone."]),
    ],
  },
  {
    title: "Learning idioms",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the less formal idiom with the same meaning as the words in CAPITALS.",
    questions: [
      say("Plenty of successful people LEAVE UNIVERSITY BEFORE THEY QUALIFY.", ["drop out", "pick up", "get on", "give up"]),
      say("You can LEARN a lot of stuff on the job.", ["pick up", "drop out", "think ahead", "lose touch"]),
      say("So long as you HAVE GOOD PRACTICAL SKILLS AND KNOWLEDGE, employers won't care.", ["know your stuff", "stick at it", "do your best", "get on"]),
      say("You need to MAKE PLANS about the qualifications you may need.", ["think ahead", "drop out", "pick up", "give up"]),
      say("GET AS MUCH BENEFIT AS POSSIBLE FROM any opportunities to learn.", ["Make the most of", "Lose touch with", "Drop out of", "Pick up"]),
      say("It's very easy NOT TO STAY IN CONTACT with changes in your area of work.", ["to lose touch", "to get on", "to know your stuff", "to stick at it"]),
      say("If you want to BE SUCCESSFUL, you can't let that happen.", ["get on", "give up", "drop out", "pick up"]),
      say("Employers need to see that you can CARRY ON WITH SOMETHING, even when it's difficult.", ["stick at it", "drop out", "lose touch", "pick it up"]),
      say("TRY AS HARD AS YOU CAN to find something you like about it.", ["Do your best", "Give up", "Think ahead", "Drop out"]),
      say("Don't STOP until you're really sure it isn't for you.", ["give up", "get on", "pick up", "think ahead"]),
    ],
  },
  {
    title: "Work in 2040",
    skill: "Reading",
    kind: "truefalse",
    instructions: "Read the text. Are the sentences true or false?",
    questions: [
      tf("There will be more jobs in health care.", true),
      tf("The workforce will get bigger.", false, "It will be smaller."),
      tf("There will be less automation.", false, "There is going to be more automation."),
      tf("Many drivers will need new jobs.", true),
      tf("Garbage designers make useful products from rubbish.", true),
      tf("The writer says students should stop thinking about the future.", false, "Think ahead."),
    ],
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("The phone's ringing. — I'm *going to answer it!", "Spontaneous decision → I'll answer it."),
      mistake("Look at those clouds! It *will rain.", "Evidence now → It's going to rain."),
      mistake("The film *is starting at 8 p.m. every evening.", "Timetable → The film starts at 8."),
      mistake("I *meet Lucy at the café at 7 tonight — we've arranged it.", "Arrangement → I'm meeting Lucy."),
      mistake("I promise I *don't tell anyone.", "Promise → I won't tell anyone."),
      mistake("He's going to *studying economics.", "going to + base verb: going to study."),
      mistake("Plenty of people drop *off university.", "drop out of university."),
      mistake("You can pick *on a lot on the job.", "pick up = learn."),
      mistake("It's easy to lose *contact with changes in your work.", "lose touch."),
      mistake("Don't give *in! Stick at it!", "give up = stop trying."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "I'm taking a course in app design.",
      "The course starts next week.",
      "I'm certainly going to work in design.",
      "Younger generations are going to be more proficient.",
      "Many jobs we take for granted will disappear.",
      "You can pick up a lot on the job.",
      "Make the most of every opportunity.",
      "If you know your stuff, employers won't care.",
    ]),
  },
  {
    title: "Talk about your plans",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best answer.",
    questions: [
      say("What are you doing after you graduate?", ["I'm going to work in my parents' shop for the summer.", "I work in my parents' shop yesterday.", "I'll working in my parents' shop.", "I'm work in my parents' shop."]),
      say("When does your course start?", ["It starts on 5 September.", "It's starting yesterday.", "It will to start in September.", "It start in September."]),
      say("This box is really heavy!", ["Wait, I'll help you.", "Wait, I'm helping you tomorrow.", "Wait, I help you.", "Wait, I'm going to helped you."]),
      say("Do you think you'll stay in this job?", ["I don't know. I'm going to stick at it for another year.", "I don't know. I stick at it last year.", "I don't know. I'll sticking at it.", "I don't know. I sticks at it."]),
      say("How can I get on in my career?", ["Think ahead and keep your qualifications up to date.", "Drop out and lose touch.", "Give up when it's difficult.", "Take everything for granted."]),
      say("Let me know if you decide to become a nostalgist!", ["Yeah, I will do.", "Yeah, I'm doing.", "Yeah, I do.", "Yeah, I going to."]),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then say it yourself. In speech we say «I'll», «you'll», «we'll» — with a dark «l».",
    questions: phrases([
      "I'll help you.",
      "What'll happen next?",
      "You'll be great at the job.",
      "She'll start her course soon.",
      "Where'll you go?",
      "We'll work harder.",
      "I'm taking a course in app design.",
      "It starts next week.",
      "Look at the traffic. We're going to be late!",
      "Make the most of every opportunity.",
    ]),
  },
];
