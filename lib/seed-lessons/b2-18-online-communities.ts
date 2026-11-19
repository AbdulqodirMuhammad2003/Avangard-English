/**
 * B2, 18-dars — «Online communities, strangers and data». Onlayn jamoalar
 * (P2PU, BookCrossing, cosplay, StreetBank), tez nutqdagi bog'lovchi
 * tovushlar, do/get/give/have/make/put/take/set birikmalari, notanish
 * odam bilan suhbat boshlash, ma'lumotlarni (diagramma) tasvirlash,
 * Sausalito «houseboat» jamoasi videosi so'zlari.
 * Navigate B2, 6.3 + 6.4 + 6.5 asosida: tinglash mashqlarida kitob
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

export const B2_18_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("👫", "peer", "pɪə|pia", "ot", "Tengdosh, teng", "Someone of the same age or position as you.", "P2PU stands for Peer to Peer University, as members learn from each other.", "P2PU «Peer to Peer University» degani, chunki a'zolar bir-biridan o'rganadi."),
      w("🦸", "cosplay", "ˈkɒzpleɪ|kozpley", "ot", "Kosplay (qahramon libosida kiyinish)", "Dressing up as characters from films, comics or games.", "People interested in cosplay post photos of their costumes online.", "Kosplayga qiziquvchilar liboslarining suratlarini internetga joylashadi."),
      w("💻", "virtual communities", "ˌvɜːtʃuəl kəˈmjuːnətiz|voochual kamyuunatiz", "ibora", "Virtual (onlayn) jamoalar", "Groups of people who meet on the internet.", "Virtual communities are used to get people with similar interests together.", "Virtual jamoalar o'xshash qiziqishli odamlarni birlashtirish uchun ishlatiladi."),
      w("🎓", "distance learning", "ˌdɪstəns ˈlɜːnɪŋ|distans looning", "ibora", "Masofaviy ta'lim", "Studying from home, not in a classroom.", "Distance learning is nothing new.", "Masofaviy ta'lim yangilik emas."),
      w("🤝", "face to face", "ˌfeɪs tə ˈfeɪs|feys ta feys", "ibora", "Yuzma-yuz", "Meeting in person, not online.", "They may also meet up face to face in the real world.", "Ular haqiqiy hayotda yuzma-yuz uchrashishlari ham mumkin."),
      w("📚", "set up", "ˌset ˈʌp|set ap", "ibora", "Tashkil qilmoq", "Start or create something.", "Users can set up their own courses and study groups.", "Foydalanuvchilar o'z kurslari va o'quv guruhlarini tashkil qilishi mumkin."),
      w("🌐", "members worldwide", "ˌmembəz ˌwɜːldˈwaɪd|membaz wooldwayd", "ibora", "Butun dunyodagi a'zolar", "People who belong to a group all over the world.", "BookCrossing has over a million members worldwide.", "BookCrossingning butun dunyo bo'ylab milliondan ortiq a'zosi bor."),
      w("🩺", "rare illness", "ˌreər ˈɪlnəs|rear ilnas", "ibora", "Kam uchraydigan kasallik", "A disease that very few people have.", "People with a rare illness can get support from others with the same condition.", "Kam uchraydigan kasallikka chalinganlar shunga o'xshash odamlardan yordam olishi mumkin."),
      w("🔨", "do up", "ˌduː ˈʌp|duu ap", "ibora", "Ta'mirlamoq (uyni)", "Repair and decorate a house.", "Neighbours help each other out as they do up their houses.", "Qo'shnilar uylarini ta'mirlayotganda bir-biriga yordam berishadi."),
      w("🎯", "ultimate aim", "ˌʌltɪmət ˈeɪm|altimat eym", "ibora", "Asosiy maqsad", "The final and most important goal.", "The ultimate aim is to encourage neighbours to be friendlier.", "Asosiy maqsad — qo'shnilarni do'stonaroq bo'lishga undash."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("💪", "do you good", "ˌduː ju ˈɡʊd|duu yu gud", "ibora", "Sizga foyda qiladi", "Be good for your health or happiness.", "A walk in the fresh air will do you good.", "Toza havoda sayr qilish sizga foyda qiladi."),
      w("🧑‍🤝‍🧑", "get to know", "ˌɡet tə ˈnəʊ|get ta nou", "ibora", "Tanishib olmoq", "Spend time with someone and learn about them.", "It takes time to get to know your neighbours.", "Qo'shnilaringiz bilan tanishib olish uchun vaqt kerak."),
      w("🎤", "give a speech", "ˌɡɪv ə ˈspiːtʃ|giv a spiich", "ibora", "Nutq so'zlamoq", "Talk formally to a group of people.", "He was asked to give a speech at the wedding.", "Undan to'yda nutq so'zlash so'raldi."),
      w("🤔", "give it some thought", "ˌɡɪv ɪt sʌm ˈθɔːt|giv it sam soot", "ibora", "O'ylab ko'rmoq", "Think about something carefully.", "It's a big decision, so give it some thought.", "Bu katta qaror, shuning uchun o'ylab ko'ring."),
      w("🛌", "have a lie-down", "ˌhæv ə ˈlaɪ daʊn|hev a lay daun", "ibora", "Biroz yonboshlab dam olmoq", "Lie on a bed for a short rest.", "I'm tired, so I'm going to have a lie-down.", "Charchadim, biroz yonboshlab dam olaman."),
      w("🗣️", "make yourself understood", "ˌmeɪk jɔːˌself ʌndəˈstʊd|meyk yooself andastud", "ibora", "Fikringizni tushuntira olmoq", "Get people to understand what you mean.", "Can you make yourself understood in English?", "Ingliz tilida fikringizni tushuntira olasizmi?"),
      w("🌟", "make all the difference", "ˌmeɪk ɔːl ðə ˈdɪfrəns|meyk ool za difrans", "ibora", "Hamma narsani o'zgartirib yubormoq", "Have a very important good effect.", "A good teacher can make all the difference.", "Yaxshi o'qituvchi hamma narsani o'zgartirib yuborishi mumkin."),
      w("👎", "put the blame on", "ˌpʊt ðə ˈbleɪm ɒn|put za bleym on", "ibora", "Aybni …ga ag'darmoq", "Say that someone is responsible for something bad.", "She put the blame on him for the accident.", "U baxtsiz hodisa uchun aybni unga ag'dardi."),
      w("🔍", "take seriously", "ˌteɪk ˈsɪəriəsli|teyk siariasli", "ibora", "Jiddiy qabul qilmoq", "Think something is important.", "Cosplayers take seriously everything about their costumes.", "Kosplayerlar liboslariga oid hamma narsani jiddiy qabul qilishadi."),
      w("📅", "set a date", "ˌset ə ˈdeɪt|set a deyt", "ibora", "Sanani belgilamoq", "Decide when something will happen.", "Have you set a date for your wedding yet?", "To'yingiz sanasini belgiladingizmi?"),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("😊", "you do look familiar", "ju ˌduː lʊk fəˈmɪliə|yu duu luk familia", "ibora", "Tanish ko'rinyapsiz", "I think I have seen you before.", "I'm not sure, you do look familiar …", "Bilmadim, lekin tanish ko'rinyapsiz…"),
      w("👂", "couldn't help overhearing", "ˌkʊdnt help ˌəʊvəˈhɪərɪŋ|kudnt help ouvahiaring", "ibora", "Beixtiyor eshitib qoldim", "I heard your conversation by accident.", "Sorry, but I couldn't help overhearing — it's your first day today, isn't it?", "Kechirasiz, beixtiyor eshitib qoldim — bugun birinchi kuningizmi?"),
      w("💺", "is anyone sitting there", "ɪz ˌeniwʌn ˈsɪtɪŋ ðeə|iz eniwan siting zea", "ibora", "Bu joy bandmi?", "A polite way to ask if a seat is free.", "Excuse me, is anyone sitting there?", "Kechirasiz, bu joy bandmi?"),
      w("🙏", "I hope you don't mind me asking", "aɪ ˌhəʊp ju ˌdəʊnt ˌmaɪnd mi ˈɑːskɪŋ|ay houp yu dount maynd mi aasking", "ibora", "So'raganim uchun xafa bo'lmang", "A polite way to start a personal question.", "I hope you don't mind me asking, but haven't we met somewhere before?", "So'raganim uchun xafa bo'lmang, avval uchrashmaganmidik?"),
      w("📊", "the chart shows", "ðə ˈtʃɑːt ʃəʊz|za chaat shouz", "ibora", "Diagramma ko'rsatadi", "A way to start describing data.", "The chart shows what percentage of people see their family every day.", "Diagramma har kuni oilasini ko'radigan odamlar foizini ko'rsatadi."),
      w("📉", "on average", "ɒn ˈævərɪdʒ|on evarij", "ibora", "O'rtacha", "Usually; when you calculate the average.", "On average, about 65% of people see their family every day.", "O'rtacha, taxminan 65% odam oilasini har kuni ko'radi."),
      w("👀", "noticeable", "ˈnəʊtɪsəbl|noutisabl", "sifat", "Ko'zga tashlanadigan", "Easy to see or notice.", "Perhaps the most noticeable feature of the data is the drop after 65.", "Ehtimol, ma'lumotlarning eng ko'zga tashlanadigan jihati — 65 yoshdan keyingi pasayish."),
      w("🚤", "houseboat", "ˈhaʊsbəʊt|hausbout", "ot", "Uy-kema (qayiq-uy)", "A boat that people live in.", "The most affordable housing in Sausalito is a houseboat.", "Sausalitodagi eng arzon uy-joy — uy-kema."),
      w("🧶", "tight-knit", "ˌtaɪt ˈnɪt|tayt nit", "sifat", "Ahil, jips (jamoa)", "Close; where people know and help each other.", "The houseboat owners are a tight-knit community.", "Uy-kema egalari ahil jamoa."),
      w("🛡️", "look out for each other", "ˌlʊk ˈaʊt fər ˌiːtʃ ˈʌðə|luk aut far iich aza", "ibora", "Bir-biridan xabar olib turmoq", "Take care of and protect each other.", "In a good neighbourhood, people look out for each other.", "Yaxshi mahallada odamlar bir-biridan xabar olib turishadi."),
    ],
  },
];

const DATA = `The chart shows what percentage of people in England spend time with their family every day, or nearly every day. It is organized by age group, from 16–24 to 65 and over.
On average, about 65% of people see their family every day or nearly every day. The age groups which see their relatives most often are those aged 35–44, with about 75%, closely followed by those aged 45–54, with about 74%.
Younger people also meet up quite often with their families: about 70% of 16–24-year-olds see their family most days. As they get older, this drops slightly to about 68%, before rising again at 35.
Perhaps the most noticeable feature of the data is that fewer than half of those aged over 65 are with their families every day.`;
const data = reading(DATA);

export const B2_18_EXERCISES: SeedExercise[] = [
  {
    title: "Linking sounds",
    skill: "Listening",
    kind: "listengap",
    instructions: "In fluent speech we add /j/, /w/ or /r/ between vowels. You will hear six sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("6.4"), [
        ["How do I make a ___ course?", "P2PU", "PTPU", "P2P"],
        ["All the courses are open to ___.", "anyone", "everyone", "any one"],
        ["Users can set up their ___ courses.", "own", "old", "online"],
        ["… so other people can ___ it.", "see", "say", "share"],
        ["… with over a million members ___.", "worldwide", "online", "world"],
        ["Leave it for ___ person to find.", "another", "other", "an other"],
      ]),
    ],
  },
  {
    title: "Online communities",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to a short podcast about online communities. Answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("6.5"))("Which communities are growing fastest these days?", ["Online communities", "Village communities", "Sports clubs", "Religious groups"]),
      hearing(track("6.5"))("How many countries does BookCrossing have members in?", ["132", "32", "1,320", "13"]),
      hearing(track("6.5"))("Who can benefit from advice in an online community?", ["People with a relatively rare illness", "Only doctors", "Only students", "Only cosplayers"]),
      hearing(track("6.5"))("What are MOOCs?", ["Massive open online courses", "Mobile online offices", "Free online films", "Online shopping sites"]),
      hearing(track("6.5"))("What makes all the difference to distance learning?", ["Being able to talk and see each other online", "Free books", "Exams", "Long holidays"]),
      hearing(track("6.5"))("What do cosplayers organize online?", ["Conventions where they meet in costume", "Film festivals", "Online games", "Book clubs"]),
      hearingTwo(track("6.5"))("Which TWO things can StreetBank neighbours do?", ["Lend things like barbecue equipment", "Help each other do up their houses or gardens"], ["Sell their houses", "Take online courses"]),
    ],
  },
  {
    title: "High-frequency verb collocations",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the verb that completes the collocation.",
    questions: [
      say("Online communities are used to ___ people with similar interests together.", ["get", "make", "take", "set"]),
      say("Many people who ___ an unusual medical condition can chat with others.", ["have", "make", "do", "put"]),
      say("Being able to communicate online ___ all the difference.", ["makes", "does", "gets", "takes"]),
      say("Cosplay conventions are places where everyone can ___ dressed up.", ["get", "make", "take", "give"]),
      say("Cosplayers ___ dressing up very seriously.", ["take", "make", "do", "set"]),
      say("BookCrossers talk about ___ their books free.", ["setting", "making", "taking", "putting"]),
      say("StreetBank neighbours ___ their neighbours permission to borrow things.", ["give", "make", "take", "put"]),
      say("Bad advice from people online can ___ a lot of damage.", ["do", "make", "get", "set"]),
      say("You should ___ a good example to your children.", ["set", "do", "get", "have"]),
      say("Can I ___ a look at your photos?", ["take", "make", "do", "set"]),
    ],
  },
  {
    title: "Say it another way",
    skill: "Vocabulary",
    kind: "fill",
    instructions: "Rewrite the underlined idea with a collocation. Write only the missing words.",
    questions: written([
      ["He needed to be certain of his facts. → He needed to ___ of his facts.", "make sure"],
      ["Have you decided when your wedding will be? → Have you ___ for your wedding yet?", "set a date"],
      ["He couldn't get anyone to understand him. → He couldn't ___ understood.", "make himself"],
      ["She said it was all his fault. → She ___ on him.", "put the blame"],
      ["She thought about it carefully. → She ___ some thought.", "gave it"],
      ["I'm going to lie down for a while. → I'm going to ___.", "have a lie-down"],
    ]),
  },
  {
    title: "Which verb?",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match each verb to a phrase it goes with.",
    questions: pairs([
      ["do|a lot of damage", "get|to know someone", "give|a speech", "have|an argument"],
      ["make|the most of something", "put|pressure on someone", "take|control", "set|a limit"],
    ]),
  },
  {
    title: "Starting a conversation",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to three short conversations between strangers. Answer the questions.",
    questions: [
      hearing(track("6.6"))("Conversation 1: How do the two people know each other?", ["They both know Nicola — one went to school with her.", "They work together.", "They are neighbours.", "They met on holiday."]),
      hearing(track("6.6"))("Conversation 2: Who is D?", ["Peter's new personal assistant", "The new manager", "Josie's friend", "A customer"]),
      hearing(track("6.6"))("Conversation 2: Where does Josie work?", ["In Sales", "In IT", "In reception", "In the café"]),
      hearing(track("6.6"))("Conversation 3: Where does the conversation probably take place?", ["On a busy train or bus", "At a party", "In an office", "At school"]),
      hearing(track("6.6"))("Conversation 3: Why doesn't E usually take this one?", ["E has just started a new job in the city.", "E usually drives.", "E is on holiday.", "E lives nearby."]),
    ],
  },
  {
    title: "Starters and replies",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear the conversation starters again with their replies. Listen and choose the missing words.",
    questions: [
      gaps(track("6.7"), [
        ["I hope you don't mind me asking, but haven't we met somewhere ___?", "before", "else", "recently"],
        ["I'm not sure, you do look ___ …", "familiar", "friendly", "similar"],
        ["Are you a friend of ___?", "Nicola's", "Nicola", "Nicole's"],
        ["Sorry, but I couldn't help ___ … it's your first day today, isn't it?", "overhearing", "hearing", "listening"],
        ["Yes, I'm Peter's new personal ___.", "assistant", "manager", "secretary"],
        ["Excuse me, is anyone ___ there?", "sitting", "standing", "staying"],
        ["Is it always this ___?", "busy", "full", "late"],
      ]),
    ],
  },
  {
    title: "What would you say?",
    skill: "Speaking",
    kind: "situation",
    instructions: "Choose the best conversation starter.",
    questions: [
      say("On a train, you want to sit in an empty seat next to someone.", ["Excuse me, is anyone sitting there?", "Lovely weather, isn't it?", "So, how do you know Jonathan?", "Have you worked here long?"]),
      say("At a party, you think you have seen someone before.", ["I hope you don't mind me asking, but haven't we met before?", "Excuse me, is anyone sitting there?", "Is it always this busy?", "I'm sorry to bother you, but …"]),
      say("You heard two people talking about your favourite band.", ["Sorry, but I couldn't help overhearing …", "Excuse me, do you mind if I sit here?", "Lovely weather, isn't it?", "Have you lived round here long?"]),
      say("At a wedding, you meet a guest you don't know.", ["So, how do you know the bride?", "Excuse me, is anyone sitting there?", "I'm sorry to bother you, but where is the station?", "Is it always this busy?"]),
      say("It's a sunny day at the bus stop.", ["Lovely weather, isn't it?", "Haven't we met before?", "I couldn't help overhearing.", "Do you mind if I open the window?"]),
      say("You need to ask a stranger for directions.", ["I'm sorry to bother you, but could you tell me where the museum is?", "Lovely weather, isn't it?", "Is anyone sitting there?", "So, how do you know Nicola?"]),
    ],
  },
  {
    title: "Describing data",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the description of a chart. Choose the correct answer.",
    questions: [
      data("What does the chart show?", ["How often people in England spend time with their family", "How many people live alone", "How much people earn", "How often people go online"]),
      data("On average, what percentage see their family every day or nearly every day?", ["About 65%", "About 75%", "About 45%", "About 90%"]),
      data("Which age group sees their family most often?", ["35–44", "16–24", "65 and over", "25–34"]),
      data("What is the most noticeable feature of the data?", ["Fewer than half of people over 65 see their family every day.", "Young people never see their family.", "Everyone sees their family every day.", "The percentage rises after 65."]),
      data("Which phrase means the same as «every day»?", ["daily", "nearly", "most", "often"]),
      data("Which phrase means the same as «age group»?", ["age bracket", "family", "relatives", "average"]),
    ],
  },
  {
    title: "Language for describing data",
    skill: "Writing",
    kind: "choice",
    instructions: "Choose the word or phrase that completes the sentence.",
    questions: [
      say("The chart ___ what percentage of people do sport.", ["shows", "says", "tells", "looks"]),
      say("The ___ of people who do sport has risen. (countable)", ["number", "amount", "deal", "quantity"]),
      say("The ___ of time people spend online has risen. (uncountable)", ["amount", "number", "many", "few"]),
      say("Men do much more sport than women. ___, women go to more religious groups.", ["In contrast", "On average", "By far", "Overall the most"]),
      say("___, about 65% of people see their family every day.", ["On average", "In contrast", "However", "By far"]),
      say("Sport is ___ the most popular activity for men.", ["by far", "on average", "in contrast", "however"]),
      say("___ feature of the data is the drop in older age.", ["A key", "A number", "An amount", "A however"]),
    ],
  },
  {
    title: "Video words: communal living",
    skill: "Vocabulary",
    kind: "match",
    instructions: "These words are from the video about houseboats in Sausalito. Match them to their meanings.",
    questions: pairs([
      ["houseboat|a boat that people live in", "dock|a place where boats are tied up", "bay|part of the sea partly surrounded by land", "waterfront|the part of a town next to the water"],
      ["tight-knit|close, where people help each other", "neighbourly|friendly to the people living near you", "hippie|a young person in the 1960s who rejected normal society", "counter culture|ideas and lifestyle against the usual ones"],
    ]),
  },
  {
    title: "Definitions",
    skill: "Listening",
    kind: "audiotext",
    instructions: "You will hear six definitions of words from this unit. Choose the word for each one.",
    questions: (
      [
        ["Definition 1", "resident"],
        ["Definition 2", "facility"],
        ["Definition 3", "global"],
        ["Definition 4", "household"],
        ["Definition 5", "private"],
        ["Definition 6", "shift"],
      ] as [string, string][]
    ).map(([prompt, word]) => {
      const options = ["resident", "facility", "global", "household", "private", "shift"].filter((o) => o !== word).slice(0, 3);
      return { prompt: `${prompt}: which word is it?`, audio: track("6.8"), options: [word, ...options], correct: 0 };
    }),
  },
  {
    title: "Find the mistake",
    skill: "Vocabulary",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("Bad advice can *make a lot of damage.", "do a lot of damage."),
      mistake("Being online *does all the difference.", "makes all the difference."),
      mistake("Cosplayers *make dressing up very seriously.", "take something seriously."),
      mistake("Have you *made a date for the wedding?", "set a date."),
      mistake("He couldn't *get himself understood in French.", "make yourself understood."),
      mistake("She *gave the blame on him.", "put the blame on someone."),
      mistake("I'm going to *make a lie-down.", "have a lie-down."),
      mistake("Excuse me, is anyone *sat there?", "Is anyone sitting there?"),
      mistake("The *amount of people who live alone is growing.", "Countable → the number of people."),
      mistake("*In average, people see their family most days.", "On average."),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then say it yourself. Link the vowels with /j/, /w/ or /r/.",
    questions: phrases([
      "All the courses are open to anyone.",
      "Users can set up their own courses.",
      "Leave it for another person to find.",
      "I hope you don't mind me asking, but haven't we met somewhere before?",
      "Sorry, but I couldn't help overhearing.",
      "Excuse me, is anyone sitting there?",
      "Being online makes all the difference.",
      "The chart shows what percentage of people see their family.",
      "On average, about sixty-five percent of people see their family every day.",
      "They look out for each other.",
    ]),
  },
];
