/**
 * B2, 23-dars — «Gen X, Gen Y, Gen Z». Avlodlar profili (Baby Boomers,
 * X, Y, Z), odamlarni tasvirlovchi sifatlar.
 * Grammatika: participle clauses (present/past participle, having + pp).
 * Navigate B2, 8.2 asosida: grammatika tinglash mashqida kitob treki
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

export const B2_23_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("👨‍👩‍👧", "generation gap", "ˌdʒenəˈreɪʃn ɡæp|jenareyshn gep", "ibora", "Avlodlar o'rtasidagi tafovut", "Differences in ideas between young and older people.", "What do you understand by the term «generation gap»?", "«Avlodlar tafovuti» deganda nimani tushunasiz?"),
      w("👶", "Baby Boomers", "ˈbeɪbi ˌbuːməz|beybi buumaz", "ibora", "Urushdan keyingi avlod (1946–1964)", "People born between 1946 and 1964.", "Born shortly after World War II, Baby Boomers had more opportunities than their parents.", "Ikkinchi jahon urushidan keyin tug'ilgan avlod ota-onalaridan ko'proq imkoniyatlarga ega bo'ldi."),
      w("🌅", "optimistic", "ˌɒptɪˈmɪstɪk|optimistik", "sifat", "Optimistik, umidvor", "Expecting good things to happen.", "Optimistic and willing to work long hours, they define themselves by their jobs.", "Optimistik va uzoq ishlashga tayyor bo'lib, ular o'zlarini kasbi orqali belgilaydi."),
      w("🎓", "well educated", "ˌwel ˈedʒukeɪtɪd|wel ejukeytid", "sifat", "Yaxshi ta'lim olgan", "Having studied at college or university.", "They are often well educated and can be quite competitive.", "Ular ko'pincha yaxshi ta'lim olgan va ancha raqobatbardosh bo'ladi."),
      w("🏆", "competitive", "kəmˈpetətɪv|kampetativ", "sifat", "Raqobatchi, g'olib bo'lishni istovchi", "Wanting very much to be better than others.", "They can be quite competitive in the workplace.", "Ular ish joyida ancha raqobatchi bo'lishi mumkin."),
      w("🤳", "reputation", "ˌrepjuˈteɪʃn|repyuteyshn", "ot", "Obro', nom", "What people think about someone.", "Millennials have a (perhaps unfair) reputation for being lazy.", "Millenniallar (ehtimol nohaq) dangasa degan nomga ega."),
      w("😤", "arrogant", "ˈærəɡənt|eragant", "sifat", "Takabbur", "Thinking you are better than other people.", "Some people say this generation is arrogant.", "Ba'zilar bu avlodni takabbur deyishadi."),
      w("🌍", "open-minded", "ˌəʊpən ˈmaɪndɪd|oupan mayndid", "sifat", "Ochiq fikrli", "Willing to accept ideas different from your own.", "This generation is more open-minded about other cultures.", "Bu avlod boshqa madaniyatlarga nisbatan ochiqroq fikrli."),
      w("📰", "well informed", "ˌwel ɪnˈfɔːmd|wel infoomd", "sifat", "Xabardor", "Knowing a lot about current events.", "Because of the internet they are very well informed about world events.", "Internet tufayli ular dunyo voqealaridan juda xabardor."),
      w("📱", "tech-savvy", "ˌtek ˈsævi|tek sevi", "sifat", "Texnologiyani yaxshi biladigan", "Knowing a lot about computers and modern technology.", "They are even more tech-savvy than previous generations.", "Ular oldingi avlodlardan ham ko'proq texnologiyani biladi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🏠", "family-focused", "ˌfæməli ˈfəʊkəst|femali foukast", "sifat", "Oilaga yo'naltirilgan", "Thinking that family is the most important thing.", "They tend to be independent and family-focused.", "Ular odatda mustaqil va oilaga yo'naltirilgan bo'ladi."),
      w("🎯", "realistic", "ˌrɪəˈlɪstɪk|rialistik", "sifat", "Real, haqiqatga mos (qarash)", "Accepting things as they really are.", "They have a realistic attitude to life.", "Ularning hayotga qarashi realistik."),
      w("🗯️", "critical", "ˈkrɪtɪkl|kritikl", "sifat", "Tanqidiy", "Expressing your negative opinion about something.", "They also tend to be critical of authority.", "Ular hokimiyatga nisbatan tanqidiy bo'lishga moyil."),
      w("🛋️", "easy-going", "ˌiːzi ˈɡəʊɪŋ|iizi gouing", "sifat", "Bosiq, hech narsadan tashvishlanmaydigan", "Relaxed and not easily worried.", "My brother is very easy-going — nothing makes him angry.", "Akam juda bosiq — uni hech narsa jahlini chiqarmaydi."),
      w("🙈", "irresponsible", "ˌɪrɪˈspɒnsəbl|irisponsabl", "sifat", "Mas'uliyatsiz", "Not thinking about what might happen.", "It was irresponsible to leave the children alone.", "Bolalarni yolg'iz qoldirish mas'uliyatsizlik edi."),
      w("🐕", "loyal", "ˈlɔɪəl|loyal", "sifat", "Sodiq", "Always supporting your friends, family or company.", "She has been a loyal friend for many years.", "U ko'p yillardan beri sodiq do'st."),
      w("💪", "self-confident", "ˌself ˈkɒnfɪdənt|self konfidant", "sifat", "O'ziga ishongan", "Sure of your own abilities.", "He's very self-confident when he speaks in public.", "U ommaviy chiqishlarda o'ziga juda ishongan."),
      w("🐐", "stubborn", "ˈstʌbən|staban", "sifat", "O'jar", "Not willing to change your opinion.", "My grandfather is so stubborn — he never changes his mind.", "Bobom juda o'jar — hech qachon fikrini o'zgartirmaydi."),
      w("⚖️", "work-life balance", "ˌwɜːk laɪf ˈbæləns|wook layf belans", "ibora", "Ish va hayot muvozanati", "Having enough time for both work and your private life.", "They care less about large salaries and more about work-life balance.", "Ular katta maoshdan ko'ra ish va hayot muvozanati haqida ko'proq qayg'urishadi."),
      w("📉", "recession", "rɪˈseʃn|rishesn", "ot", "Iqtisodiy tanazzul", "A time when a country's economy is doing badly.", "Having lived through an economic recession, they won't take money for granted.", "Iqtisodiy tanazzulni boshdan kechirgani uchun ular pulni oddiy narsa deb bilmaydi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🌐", "millennial", "mɪˈleniəl|milenial", "ot", "Millennial (Y avlodi vakili)", "A person born between about 1981 and 2000.", "Generation Y is also known as the «millennial» generation.", "Y avlodi «millennial» avlod deb ham ataladi."),
      w("🥪", "sandwiched between", "ˈsænwɪdʒt bɪˌtwiːn|senwijt bitwiin", "ibora", "…orasida qolgan", "Placed between two other things.", "Sandwiched between Baby Boomers and Generation Y, this generation shares many of their characteristics.", "Baby Boomers va Y avlodi orasida qolgan bu avlod ularning ko'p xususiyatlariga ega."),
      w("💼", "retirement age", "rɪˈtaɪəmənt eɪdʒ|ritayament eyj", "ibora", "Nafaqa yoshi", "The age when people usually stop working.", "Baby boomers are now coming up to retirement age.", "«Baby boomers» hozir nafaqa yoshiga yetmoqda."),
      w("🏅", "achievements", "əˈtʃiːvmənts|achiivments", "ot", "Yutuqlar", "Things you have done successfully.", "They tend to define themselves by their professional achievements.", "Ular o'zlarini kasbiy yutuqlari bilan belgilashga moyil."),
      w("📋", "priorities", "praɪˈɒrətiz|prayoratiz", "ot", "Ustuvorliklar", "Things you think are most important.", "They have different priorities from their parents.", "Ularning ustuvorliklari ota-onalarinikidan farq qiladi."),
      w("🔊", "hearing", "ˈhɪərɪŋ|hiaring", "fe'l", "Eshitib (participle)", "Present participle used to start a clause.", "Hearing a noise downstairs, Jason got up to investigate.", "Pastda shovqin eshitib, Jeyson tekshirish uchun turdi."),
      w("🚫", "not speaking", "ˌnɒt ˈspiːkɪŋ|not spiiking", "ibora", "…bilmagani uchun (gapirmay)", "Because we didn't speak.", "Not speaking any German, we missed the announcement.", "Nemischa bilmaganimiz uchun e'lonni o'tkazib yubordik."),
      w("🏷️", "referred to as", "rɪˈfɜːd tʊ əz|rifood tu az", "ibora", "…deb ataladigan", "Called by a particular name.", "Often referred to as baby boomers, this generation is now coming up to retirement age.", "Ko'pincha «baby boomers» deb ataladigan bu avlod hozir nafaqa yoshiga yetmoqda."),
      w("✈️", "having lived", "ˌhævɪŋ ˈlɪvd|heving livd", "ibora", "Yashagani uchun (o'tmishda)", "Perfect participle: because someone lived.", "Having lived abroad since she was a child, Catherine has never really felt English.", "Bolaligidan chet elda yashagani uchun Ketrin o'zini hech qachon ingliz deb his qilmagan."),
      w("🪟", "overlooking", "ˌəʊvəˈlʊkɪŋ|ouvaluking", "fe'l", "…ga qaragan (deraza, xona)", "Having a view of something from above.", "We stayed in a room overlooking the town square.", "Biz shahar maydoniga qaragan xonada qoldik."),
    ],
  },
];

const PROFILES = `A — Born shortly after World War II, this generation had more opportunities than their parents. Optimistic and willing to work long hours, they define themselves by their achievements. They are often well educated and competitive, but like to be active and enjoy life.
B — Joining the workforce at the start of this millennium, this generation cares less about large salaries and more about work-life balance. They have a reputation for being self-centred, perhaps because they were told from birth that they are special. They are more open-minded about other cultures.
C — Sometimes referred to as Generation Net, this generation never experienced a world without the internet. They are well informed and tech-savvy: even two-year-olds can operate smartphones. Having lived through a recession, they won't take money for granted.
D — Sandwiched between Baby Boomers and Generation Y, this generation tends to be hard-working, but values work-life balance. Many grew up with working mothers, so they are independent, family-focused, realistic and critical of authority.`;
const read = reading(PROFILES);

export const B2_23_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("Hearing a noise downstairs, Jason got up to investigate.", ["Hearing a noise downstairs, Jason got up to investigate.", "Having heard a noise downstairs, Jason got up.", "Hearing a noise upstairs, Jason got up to investigate.", "Heard a noise downstairs, Jason got up to investigate."]),
      listen("Not speaking any German, we missed the announcement.", ["Not speaking any German, we missed the announcement.", "Not speaking German, we missed the announcement.", "Not speaking any German, we missed the bus.", "Speaking no German, we missed the announcement."]),
      listen("Having lived abroad since she was a child, Catherine has never felt English.", ["Having lived abroad since she was a child, Catherine has never felt English.", "Living abroad since she was a child, Catherine has never felt English.", "Having lived abroad since she was a child, Catherine has always felt English.", "Having moved abroad as a child, Catherine has never felt English."]),
      listen("They are very tech-savvy.", ["They are very tech-savvy.", "They are very tech-happy.", "They were very tech-savvy.", "They are rather tech-savvy."]),
      listen("This generation is more open-minded.", ["This generation is more open-minded.", "This generation is more absent-minded.", "This generation was more open-minded.", "This generation is more narrow-minded."]),
      listen("They value a work-life balance.", ["They value a work-life balance.", "They value their work-life balance.", "They valued a work-life balance.", "They value a work balance."]),
      listen("They won't take money for granted.", ["They won't take money for granted.", "They don't take money for granted.", "They won't take time for granted.", "They want money for granted."]),
      listen("competitive", ["competitive", "competition", "comparative", "competent"]),
      listen("irresponsible", ["irresponsible", "responsible", "irreplaceable", "responsibility"]),
      listen("stubborn", ["stubborn", "stubble", "suburban", "stubbornly"]),
    ],
  },
  {
    title: "Which generation?",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the four generation profiles. Choose the correct answer.",
    questions: [
      read("Profile A describes …", ["Baby Boomers (born 1946–1964)", "Generation X", "Generation Y", "Generation Z"]),
      read("Profile B describes …", ["Generation Y (millennials)", "Baby Boomers", "Generation X", "Generation Z"]),
      read("Profile C describes …", ["Generation Z", "Generation X", "Baby Boomers", "Generation Y"]),
      read("Profile D describes …", ["Generation X", "Generation Z", "Baby Boomers", "Generation Y"]),
      read("Which generation has a reputation for being self-centred?", ["Generation Y", "Baby Boomers", "Generation X", "Generation Z"]),
      read("Why won't Generation Z take money for granted?", ["They have lived through a recession.", "They earn a lot.", "Their parents are rich.", "They don't use money."]),
      read("Why is Generation X independent?", ["Many grew up with working mothers.", "They are tech-savvy.", "They were born after the war.", "They live abroad."]),
    ],
  },
  {
    title: "Describing people",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match the adjectives to their meanings.",
    questions: pairs([
      ["well informed|knowing a lot", "tech-savvy|knowing a lot about computers", "well educated|having studied at university", "open-minded|accepting different ideas"],
      ["critical|expressing a negative opinion", "stubborn|not willing to change your mind", "loyal|always supporting your friends", "easy-going|relaxed and calm"],
    ]),
  },
  {
    title: "Positive, negative or it depends?",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Is the adjective usually positive, negative, or does it depend?",
    questions: [
      say("open-minded", ["positive", "negative", "it depends"]),
      say("arrogant", ["negative", "positive", "it depends"]),
      say("self-centred", ["negative", "positive", "it depends"]),
      say("loyal", ["positive", "negative", "it depends"]),
      say("irresponsible", ["negative", "positive", "it depends"]),
      say("competitive", ["it depends", "positive", "negative"]),
      say("critical", ["it depends", "positive", "negative"]),
      say("well informed", ["positive", "negative", "it depends"]),
    ],
  },
  {
    title: "Which adjective?",
    skill: "Vocabulary",
    kind: "situation",
    instructions: "Choose the adjective that describes the person.",
    questions: [
      say("Ali never gets angry or worried about anything.", ["easy-going", "stubborn", "arrogant", "competitive"]),
      say("Nodira always wants to win, even in board games.", ["competitive", "loyal", "easy-going", "realistic"]),
      say("My grandfather never changes his mind, even when he's wrong.", ["stubborn", "open-minded", "loyal", "tech-savvy"]),
      say("She reads the news every day and knows what's happening in the world.", ["well informed", "arrogant", "irresponsible", "self-centred"]),
      say("He only ever talks about himself.", ["self-centred", "loyal", "open-minded", "realistic"]),
      say("My little sister can fix any problem with my laptop.", ["tech-savvy", "stubborn", "critical", "arrogant"]),
    ],
  },
  {
    title: "Participle clauses",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct participle.",
    questions: [
      say("___ shortly after World War II, this generation had more opportunities.", ["Born", "Bearing", "Being born of", "Having born"]),
      say("___ the workforce at the start of this millennium, Gen Y has different priorities.", ["Joining", "Joined", "Having joined to", "To join"]),
      say("Sometimes ___ to as Generation Net, Gen Z never knew a world without the internet.", ["referred", "referring", "having referred", "refer"]),
      say("___ between Baby Boomers and Generation Y, Gen X shares many of their characteristics.", ["Sandwiched", "Sandwiching", "Having sandwiched", "To sandwich"]),
      say("___ through an economic recession, Gen Z won't take money for granted.", ["Having lived", "Lived", "Having living", "To live"]),
      say("It's not strange to see two-year-olds ___ smartphones.", ["operating", "operated", "to operating", "having operated"]),
      say("Generation X, ___ «Gen X» for short, was born between 1965 and 1980.", ["called", "calling", "having calling", "call"]),
      say("Generation Y is the generation ___ Generation X.", ["following", "followed", "having follow", "to following"]),
      say("___ grown up in the Digital Age, Gen X and Y are tech-savvy.", ["Having", "Have", "Had", "Being"]),
      say("Gen X is the name of a punk band, ___ in 1976.", ["formed", "forming", "having form", "form"]),
    ],
  },
  {
    title: "Grammar sentences",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear four sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("gr-8.2"), [
        ["___ a noise downstairs, Jason got up to investigate.", "Hearing", "Heard", "Having hear"],
        ["___ any German, we missed the announcement and got on the wrong bus.", "Not speaking", "Not spoken", "Don't speaking"],
        ["Often ___ as baby boomers, this generation is now coming up to retirement age.", "referred to", "referring to", "refer to"],
        ["___ abroad since she was a child, Catherine has never really felt English.", "Having lived", "Living", "Lived"],
      ]),
    ],
  },
  {
    title: "Active or passive meaning?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Does the participle have an active or a passive meaning?",
    questions: [
      say("People growing up after World War II had more opportunities. (= who grew up)", ["active", "passive"]),
      say("Generation Z, also known as Generation Net, … (= who are known)", ["passive", "active"]),
      say("Who's the man standing next to the window? (= who is standing)", ["active", "passive"]),
      say("People born in the 1960s are Baby Boomers. (= who were born)", ["passive", "active"]),
      say("We stayed in a room overlooking the square. (= which overlooked)", ["active", "passive"]),
      say("Generation Y, told since birth that they are special, … (= who have been told)", ["passive", "active"]),
    ],
  },
  {
    title: "Rewrite with a participle clause",
    skill: "Grammar",
    kind: "type",
    instructions: "Rewrite the first part as a participle clause.",
    questions: written([
      ["Because we didn't know the area, we got lost. → ___ the area, we got lost.", "Not knowing"],
      ["Because he was born in the 1960s, he is a baby boomer. → ___ in the 1960s, he is a baby boomer.", "Born"],
      ["He had missed the bus, so he was late again. → ___ the bus, he was late again.", "Having missed"],
      ["We arrived late, so we were not allowed into the theatre. → ___ late, we were not allowed in.", "Arriving|Having arrived"],
      ["Jake hadn't stayed in the hotel before, so he didn't know what to expect. → ___ in the hotel before, Jake didn't know what to expect.", "Not having stayed|Having not stayed"],
      ["There were several people who were waiting for us. → There were several people ___ for us.", "waiting"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("*Bearing in the 1960s, he is a baby boomer.", "Passive meaning → Born in the 1960s."),
      mistake("*Knowing not the area, we got lost.", "Negative: Not knowing the area."),
      mistake("Having *miss the bus, he was late.", "having + past participle: Having missed."),
      mistake("Who's the man *stood next to the window?", "Active meaning → standing."),
      mistake("A bag containing over a million dollars *were found.", "Subject «a bag» is singular → was found."),
      mistake("Generation Z, also *knowing as Gen Net, was born after 2000.", "Passive → known as."),
      mistake("He's very *stubbornly — he never changes his mind.", "Adjective: stubborn."),
      mistake("She's very *self-centre and only talks about herself.", "self-centred."),
      mistake("They care more about work-life *balancing.", "work-life balance."),
      mistake("My grandmother is very *techy-savvy.", "tech-savvy."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "Born after World War II, they had more opportunities.",
      "Not speaking any German, we missed the announcement.",
      "Having lived abroad, she never felt English.",
      "They are very well informed about world events.",
      "This generation is more open-minded.",
      "They value a work-life balance.",
      "We stayed in a room overlooking the square.",
      "Who's the man standing next to the window?",
    ]),
  },
  {
    title: "Talk about yourself",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best answer.",
    questions: [
      say("How would you describe yourself?", ["I'd say I'm quite easy-going, but I can be a bit stubborn sometimes.", "I'd say I'm quite easy-go, but stubbornly sometimes.", "I'd say I'm quite easily-going.", "I'd say I'm stubborned."]),
      say("Which generation are you?", ["Born in 2002, I'm Generation Z.", "Bearing in 2002, I'm Generation Z.", "Having born in 2002, I'm Generation Z.", "Borning in 2002, I'm Generation Z."]),
      say("Why did you get lost?", ["Not knowing the area, we took the wrong road.", "Knowing not the area, we took the wrong road.", "Not knew the area, we took the wrong road.", "Don't knowing the area, we took the wrong road."]),
      say("Are your parents tech-savvy?", ["Not really — having grown up without the internet, they find it hard.", "Not really — grown up without the internet, they find it hard yesterday.", "Not really — having grow up without the internet.", "Not really — growing up having without internet."]),
      say("Is there a generation gap in your family?", ["Yes — my grandparents are much less open-minded than my parents.", "Yes — my grandparents are much less open-mind.", "Yes — my grandparents are more less open-minded.", "Yes — my grandparents is open-minded."]),
      say("What's important to you in a job?", ["A good work-life balance, rather than a large salary.", "A good work-life balancing, rather a large salary.", "Work life balance than salary large.", "A large salary rather than nothing."]),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself.",
    questions: phrases([
      "Hearing a noise downstairs, Jason got up to investigate.",
      "Not speaking any German, we missed the announcement.",
      "Often referred to as baby boomers, this generation is now retiring.",
      "Having lived abroad since she was a child, Catherine has never felt English.",
      "They are very tech-savvy.",
      "I'd say I'm quite easy-going.",
      "generation gap",
      "open-minded",
      "competitive",
      "irresponsible",
    ]),
  },
];
