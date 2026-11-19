/**
 * B2, 11-dars — «Creative environments». Ijodkorlikni oshiradigan ofislar,
 * taassurotni tasvirlovchi sifatlar, ish joyidagi qulayliklar (perks).
 * Grammatika: causative have / get (have something done, get someone to do).
 * Navigate B2, 4.2 asosida: tinglash mashqlarida kitob treklari (yopiq
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
  reading,
  say,
  sentences,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

export const B2_11_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🗄️", "conventional", "kənˈvenʃənl|kanvenshanl", "sifat", "An'anaviy, odatiy", "Always behaving in a traditional or normal way.", "Most people still work in fairly conventional offices.", "Ko'pchilik hali ham ancha an'anaviy ofislarda ishlaydi."),
      w("💡", "innovative", "ˈɪnəveɪtɪv|inaveytiv", "sifat", "Innovatsion, yangicha", "Using a new way of doing something.", "A lot of companies want their employees to be innovative and creative.", "Ko'p kompaniyalar xodimlari innovatsion va ijodkor bo'lishini xohlaydi."),
      w("🛠️", "inventive", "ɪnˈventɪv|inventiv", "sifat", "Ixtirochilikka moyil, topqir", "Good at thinking of new and clever ideas.", "Having a messy desk is actually better for being inventive.", "Stolning tartibsiz bo'lishi aslida topqir bo'lish uchun yaxshiroq."),
      w("🤪", "odd", "ɒd|od", "sifat", "G'alati", "Strange or unusual.", "There's something a bit odd about a meeting room with swings.", "Arg'imchoqli majlislar xonasida qandaydir g'alatilik bor."),
      w("🧰", "practical", "ˈpræktɪkl|prektikl", "sifat", "Amaliy, qulay (ishlatishga)", "Useful and suitable for the job.", "A quiet desk is more practical than a slide.", "Tinch stol tepalikdan (slide) ko'ra amaliyroq."),
      w("🌟", "remarkable", "rɪˈmɑːkəbl|rimaakabl", "sifat", "Ajoyib, e'tiborga loyiq", "Unusual and surprising in a good way.", "We are at the beginning of a remarkable time for design.", "Biz dizayn uchun ajoyib davrning boshidamiz."),
      w("🤡", "silly", "ˈsɪli|sili", "sifat", "Bema'ni, bolalarcha", "Not serious; childish.", "Having fun on a slide might just be a silly waste of time.", "Tepalikda o'ynash shunchaki bema'ni vaqt isrofi bo'lishi mumkin."),
      w("🎯", "striking", "ˈstraɪkɪŋ|strayking", "sifat", "Ko'zga yaqqol tashlanadigan", "Very noticeable and unusual.", "We've all seen pictures of striking, original offices.", "Ko'zga tashlanadigan, o'ziga xos ofislar suratlarini hammamiz ko'rganmiz."),
      w("👌", "user-friendly", "ˌjuːzə ˈfrendli|yuuza frendli", "sifat", "Foydalanishga qulay", "Easy to understand and use.", "A quiet office might actually be more user-friendly.", "Tinch ofis aslida foydalanishga qulayroq bo'lishi mumkin."),
      w("😴", "unimaginative", "ˌʌnɪˈmædʒɪnətɪv|animejinativ", "sifat", "Tasavvursiz, zerikarli", "Not showing new ideas.", "Grey desks in rows look so unimaginative.", "Qator tizilgan kulrang stollar juda zerikarli ko'rinadi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("👶", "childish", "ˈtʃaɪldɪʃ|chayldish", "sifat", "Bolalarcha", "Behaving like a child, not an adult.", "Some people think office slides are a bit childish.", "Ba'zilar ofisdagi tepaliklarni biroz bolalarcha deb hisoblaydi."),
      w("🔧", "functional", "ˈfʌŋkʃənl|fankshanl", "sifat", "Funksional, amaliy", "Practical and useful rather than attractive.", "The furniture is functional rather than beautiful.", "Mebel chiroyli emas, balki amaliy."),
      w("🎁", "perk", "pɜːk|pook", "ot", "Qo'shimcha imtiyoz (ishda)", "Something extra you get from your employer as well as a salary.", "Free lunch is one perk of working for the company.", "Bepul tushlik — kompaniyada ishlashning bir imtiyozi."),
      w("💥", "bump into", "ˈbʌmp ɪntə|bamp inta", "ibora", "Tasodifan uchrashib qolmoq", "Meet someone by chance.", "Companies want staff to bump into colleagues all the time.", "Kompaniyalar xodimlar hamkasblari bilan doim tasodifan uchrashib turishini xohlaydi."),
      w("✨", "spark", "spɑːk|spaak", "fe'l", "Uchqun bermoq, uyg'otmoq", "Make something start to happen.", "All this chatting might spark some ideas.", "Bu suhbatlar qandaydir g'oyalarni uyg'otishi mumkin."),
      w("🧠", "inventiveness", "ɪnˈventɪvnəs|inventivnas", "ot", "Topqirlik", "The ability to think of new ideas.", "How can inventiveness be encouraged at work?", "Ish joyida topqirlikni qanday rag'batlantirish mumkin?"),
      w("🎢", "in spite of", "ɪn ˈspaɪt əv|in spayt av", "ibora", "…ga qaramay", "Without being stopped by something.", "People often have the best ideas in spite of their environment.", "Odamlarga eng yaxshi g'oyalar ko'pincha muhitiga qaramay keladi."),
      w("🎲", "nothing to lose", "ˌnʌθɪŋ tə ˈluːz|nasing ta luuz", "ibora", "Yo'qotadigan hech narsasi yo'q", "In a situation where trying can't make things worse.", "We had nothing to lose and everything to gain.", "Bizning yo'qotadigan hech narsamiz yo'q, yutadiganimiz esa ko'p edi."),
      w("🍽️", "provided", "prəˈvaɪdɪd|pravaydid", "sifat", "Ta'minlangan, beriladigan", "Given to someone, often for free.", "At some companies, breakfast, lunch and dinner are all provided free.", "Ba'zi kompaniyalarda nonushta, tushlik va kechki ovqat bepul beriladi."),
      w("🙃", "weird", "wɪəd|wiad", "sifat", "Juda g'alati", "Very strange.", "Some offices are truly weird, with beds and ping-pong tables.", "Ba'zi ofislar juda g'alati — karavotlar va stol tennisi stollari bilan."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🗑️", "messy", "ˈmesi|mesi", "sifat", "Tartibsiz", "Untidy.", "Having a messy desk is actually better for being inventive.", "Tartibsiz stol aslida topqirlik uchun yaxshiroq."),
      w("💤", "nap", "næp|nep", "ot", "Qisqa uyqu (kunduzi)", "A short sleep during the day.", "A nap can help you remember things.", "Qisqa uyqu narsalarni eslab qolishga yordam berishi mumkin."),
      w("📞", "distracting", "dɪˈstræktɪŋ|distrekting", "sifat", "Chalg'ituvchi", "Making it hard to concentrate.", "Hearing other people's phone conversations is particularly distracting.", "Boshqalarning telefon suhbatlarini eshitish ayniqsa chalg'itadi."),
      w("🔈", "moderate", "ˈmɒdərət|modarat", "sifat", "O'rtacha, me'yorida", "Not too much and not too little.", "A moderate level of noise is better for creativity than silence.", "Ijodkorlik uchun o'rtacha shovqin jimjitlikdan yaxshiroq."),
      w("🌡️", "heating", "ˈhiːtɪŋ|hiiting", "ot", "Isitish (tizimi)", "The system that keeps a building warm.", "Is it better to have the heating turned down?", "Isitishni pasaytirib qo'ygan yaxshiroqmi?"),
      w("💇", "have your hair cut", "ˌhæv jə ˈheə kʌt|hev ya hea kat", "ibora", "Soch oldirmoq", "Pay someone to cut your hair.", "At work, you can even have your hair cut.", "Ishda hatto soch oldirishingiz ham mumkin."),
      w("🚲", "get your bike repaired", "ˌɡet jə ˈbaɪk rɪˌpeəd|get ya bayk ripead", "ibora", "Velosipedni ta'mirlatmoq", "Pay someone to repair your bike.", "You can get your bike repaired without leaving the building.", "Binodan chiqmasdan velosipedingizni ta'mirlatishingiz mumkin."),
      w("🧺", "get your washing done", "ˌɡet jə ˈwɒʃɪŋ dʌn|get ya woshing dan", "ibora", "Kirlarni yuvdirmoq", "Pay someone to wash your clothes.", "Some companies let you get your washing done at work.", "Ba'zi kompaniyalarda kirlaringizni ishda yuvdirib olishingiz mumkin."),
      w("🔑", "stolen", "ˈstəʊlən|stoulan", "sifat", "O'g'irlangan", "Taken by a thief.", "I had my handbag stolen last night.", "Kecha sumkamni o'g'irlatib qo'ydim."),
      w("🏢", "creative environment", "kriˌeɪtɪv ɪnˈvaɪrənmənt|krieytiv invayranment", "ibora", "Ijodiy muhit", "A place that helps people have new ideas.", "Can a creative environment really make people more inventive?", "Ijodiy muhit odamlarni chindan topqirroq qila oladimi?"),
    ],
  },
];

const TEXT = `DO SLIDES MAKE YOU CREATIVE?
Many companies want their staff to be innovative, so they build striking offices with ping-pong tables, swings and slides. But do these weird offices really lead to more creativity?
Some companies think that if they get people to bump into colleagues all the time, they'll share more ideas. They have their staff eat lunch at long tables so they meet more people.
Others try to remove everyday worries. Meals are provided free, and you can have your hair cut, get your car washed or even get your washing done at work. These perks are nice — but they may also be a way of keeping you at work longer.
In the end, people often come up with their best ideas in spite of their environment, not because of it.`;
const read = reading(TEXT);

export const B2_11_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("We're having the roof repaired in the summer.", ["We're having the roof repaired in the summer.", "We're repairing the roof in the summer.", "We had the roof repaired in the summer.", "We're having the roof painted in the summer."]),
      listen("At this hotel, you can get your dry-cleaning done for free.", ["At this hotel, you can get your dry-cleaning done for free.", "At this hotel, you can do your dry-cleaning for free.", "At this hotel, you can get your washing done for free.", "At this hotel, you get your dry-cleaning done for free."]),
      listen("He had to have his head shaved when he joined the army.", ["He had to have his head shaved when he joined the army.", "He had to shave his head when he joined the army.", "He had his head shaved when he joined the army.", "He had to have his hair cut when he joined the army."]),
      listen("We had the doctor check her blood pressure.", ["We had the doctor check her blood pressure.", "We had the doctor checked her blood pressure.", "We got the doctor to check her blood pressure.", "We had the nurse check her blood pressure."]),
      listen("I'm getting Alex to pick my parents up from the airport.", ["I'm getting Alex to pick my parents up from the airport.", "I'm getting Alex pick my parents up from the airport.", "I'm having Alex pick my parents up from the airport.", "I'm getting Alex to pick my parents up from the station."]),
      listen("I had my handbag stolen last night.", ["I had my handbag stolen last night.", "I had my handbag stole last night.", "My handbag was stolen last night.", "I had my laptop stolen last night."]),
      listen("Having a messy desk is better for being inventive.", ["Having a messy desk is better for being inventive.", "Having a messy desk is better for being innovative.", "Having a tidy desk is better for being inventive.", "A messy desk is better for being inventive."]),
      listen("conventional", ["conventional", "conversational", "convention", "constitutional"]),
      listen("user-friendly", ["user-friendly", "user friendly's", "use friendly", "users' friendly"]),
      listen("unimaginative", ["unimaginative", "imaginative", "unimaginable", "imagination"]),
    ],
  },
  {
    title: "Describing your impressions",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match each word to a word with a similar meaning.",
    questions: pairs([
      ["odd|weird", "innovative|original", "remarkable|impressive", "silly|childish"],
      ["inventive|original", "striking|impressive", "practical|functional", "conventional|unimaginative"],
      ["user-friendly|functional", "childish|silly", "weird|odd", "unimaginative|conventional"],
    ]),
  },
  {
    title: "Which word?",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the word that best completes the sentence.",
    questions: [
      say("The new app is very ___ — even my grandmother can use it.", ["user-friendly", "striking", "odd", "childish"]),
      say("He always wears grey suits. His style is very ___.", ["conventional", "remarkable", "inventive", "striking"]),
      say("The building is bright red and shaped like an egg — very ___!", ["striking", "conventional", "practical", "unimaginative"]),
      say("Throwing paper planes in a meeting is a bit ___.", ["silly", "practical", "functional", "remarkable"]),
      say("She's always coming up with clever new ideas — she's so ___.", ["inventive", "conventional", "unimaginative", "childish"]),
      say("The furniture isn't beautiful, but it's very ___.", ["practical", "striking", "silly", "weird"]),
      say("The film was boring and ___ — we've seen the same story many times.", ["unimaginative", "remarkable", "innovative", "inventive"]),
      say("It was a ___ achievement for such a young engineer.", ["remarkable", "silly", "childish", "odd"]),
    ],
  },
  {
    title: "Do slides make you creative?",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the text. Choose the correct answer.",
    questions: [
      read("Why do companies build striking offices?", ["They want their staff to be innovative.", "They want to save money.", "They want fewer employees.", "They want quieter offices."]),
      read("Why do some companies want people to bump into colleagues?", ["So they share more ideas", "So they work less", "So they go home early", "So they stop talking"]),
      read("Why do staff eat lunch at long tables?", ["To meet more people", "Because there's no space", "To eat faster", "Because it's cheaper"]),
      read("Which is NOT mentioned as a perk?", ["Free holidays", "Free meals", "Getting your hair cut", "Getting your washing done"]),
      read("What might be the hidden reason for the perks?", ["Keeping you at work longer", "Making you healthier", "Saving the company money", "Helping the environment"]),
      read("Where do the best ideas often come from, according to the text?", ["In spite of the environment", "From slides and swings", "From long lunch tables", "From free meals"]),
    ],
  },
  {
    title: "Who does it?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Did the person do it themselves, or did someone do it for them?",
    questions: [
      say("I had my hair cut yesterday.", ["Someone did it for me.", "I did it myself."]),
      say("I cut my hair yesterday.", ["I did it myself.", "Someone did it for me."]),
      say("We're having our kitchen painted.", ["Someone is doing it for us.", "We're doing it ourselves."]),
      say("She got her car washed.", ["Someone did it for her.", "She did it herself."]),
      say("He repaired his bike.", ["He did it himself.", "Someone did it for him."]),
      say("I'm getting my phone fixed tomorrow.", ["Someone will do it for me.", "I'll do it myself."]),
    ],
  },
  {
    title: "have or get?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct option.",
    questions: [
      say("Where do you ___ your hair cut?", ["get", "make", "do", "let"]),
      say("I'm getting my car ___ tomorrow.", ["serviced", "service", "to service", "servicing"]),
      say("I had someone ___ the carpets.", ["clean", "to clean", "cleaned", "cleaning"]),
      say("I got someone ___ the carpets.", ["to clean", "clean", "cleaned", "cleaning"]),
      say("We're going to have some of the students ___ one of the lessons.", ["teach", "to teach", "taught", "teaching"]),
      say("Sarah's had her bike ___.", ["stolen", "steal", "stole", "to steal"]),
      say("I've had my car ___ into.", ["broken", "broke", "break", "to break"]),
      say("We do our shopping online and have it ___ to the house.", ["delivered", "deliver", "to deliver", "delivering"]),
      say("There's a problem with my computer. I'm going to get someone ___ at it.", ["to look", "look", "looked", "looking"]),
      say("The windows are dirty. We need to get them ___.", ["cleaned", "clean", "to clean", "cleaning"]),
    ],
  },
  {
    title: "Grammar sentences",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear five sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("gr-4.2"), [
        ["We're having the roof ___ in the summer.", "repaired", "repair", "to repair"],
        ["At this hotel, you can get your dry-cleaning ___ for free.", "done", "do", "to do"],
        ["He had to have his head ___ when he joined the army.", "shaved", "shave", "shaving"],
        ["We had the doctor ___ her blood pressure.", "check", "checked", "to check"],
        ["I'm getting Alex ___ my parents up from the airport.", "to pick", "pick", "picked"],
      ]),
    ],
  },
  {
    title: "Perks of the job",
    skill: "Grammar",
    kind: "type",
    instructions: "Rewrite the sentence with «have» or «get» + object + past participle. Example: A chef will cook your breakfast. → You can have your breakfast cooked.",
    questions: written([
      ["A doctor will give you free health checks. → You can have your health ___ for free.", "checked"],
      ["Someone will do your dry-cleaning for free. → You can get your dry-cleaning ___ for free.", "done"],
      ["Someone will fix your car for you. → You can have your car ___.", "fixed"],
      ["Someone will wash your car. → You can get your car ___.", "washed"],
      ["A hairdresser will cut your hair at work. → You can have your hair ___ at work.", "cut"],
      ["Someone will repair your bike. → You can get your bike ___.", "repaired"],
    ]),
  },
  {
    title: "Causative sentences",
    skill: "Grammar",
    kind: "fill",
    instructions: "Complete each sentence with the words in brackets in the correct causative form.",
    questions: written([
      ["I've lost my key. I need to ___ as soon as I can. (get / a new one / cut)", "get a new one cut"],
      ["How often ___ your hair cut? (you / get)", "do you get"],
      ["I can't give you a lift tomorrow. I'm ___. (have / my car / serviced)", "having my car serviced"],
      ["We have someone ___ the house once a week. (clean)", "clean"],
      ["If you're cold, get your boss ___ the heating. (turn up)", "to turn up"],
      ["Trying to work while your neighbours are ___ their apartment renovated is hard. (have)", "having"],
    ]),
  },
  {
    title: "How do we work best?",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to a radio programme about how people work best. Answer the questions.",
    questions: [
      hearing(track("4.4"))("What does the speaker's partner do while she works?", ["She always has music on.", "She works in silence.", "She has a nap.", "She tidies her desk."]),
      hearing(track("4.4"))("According to Professor Ravi Mehta, what is best for creativity?", ["A moderate level of noise", "Complete silence", "Very loud music", "Other people's phone calls"]),
      hearing(track("4.4"))("Why are other people's phone conversations distracting?", ["Our brain tries to guess what the other person is saying.", "They are too loud.", "They are boring.", "They are in another language."]),
      hearing(track("4.4"))("What happened at 20°C in the Cornell study?", ["Employees made 44% more mistakes than at 25°C.", "Employees worked 44% faster.", "Employees fell asleep.", "Employees had more ideas."]),
      hearing(track("4.4"))("Why does feeling cold make you less innovative?", ["You use a lot of energy to keep warm.", "You can't hold a pen.", "You go home early.", "You drink too much coffee."]),
      hearing(track("4.4"))("What does the speaker say about a messy desk?", ["It's better for being inventive.", "It makes you tired.", "It causes mistakes.", "It's bad for creativity."]),
      hearing(track("4.4"))("Why can being tired help creativity?", ["The brain is more likely to make new connections.", "You work faster.", "You remember more.", "You talk to more people."]),
    ],
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("I had my hair *cutted yesterday.", "Past participle of cut = cut."),
      mistake("We're having the roof *repair in the summer.", "have + object + past participle: repaired."),
      mistake("I got the mechanic *check my brakes.", "get + person + to + verb: to check."),
      mistake("I had the mechanic *to check my brakes.", "have + person + verb without to: check."),
      mistake("She *got her bike stolen last week.", "For bad things, use have: She had her bike stolen."),
      mistake("Where do you get your car *wash?", "get + object + past participle: washed."),
      mistake("This app is very *user-friend — anyone can use it.", "user-friendly (adjective)."),
      mistake("Free lunch is a nice *perks of the job.", "a perk (singular)."),
      mistake("I bumped *onto an old friend at the station.", "bump into."),
      mistake("She succeeded *in spite her difficult life.", "in spite of."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "I need to get a new key cut.",
      "We're having our office decorated at the moment.",
      "I'm getting my car serviced tomorrow.",
      "We do our shopping online and have it delivered.",
      "I'm going to get someone to look at it.",
      "Sarah has had her bike stolen.",
      "Companies want staff to bump into colleagues.",
      "A messy desk is better for being inventive.",
    ]),
  },
  {
    title: "Talk about it",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best answer.",
    questions: [
      say("Your hair looks great!", ["Thanks, I had it cut yesterday.", "Thanks, I had cut it by someone.", "Thanks, I got cut it yesterday.", "Thanks, I've cut it by a hairdresser."]),
      say("Why are you walking to work?", ["I'm having my car repaired.", "I'm repairing by my car.", "I'm having repaired my car.", "I'm getting my car repair."]),
      say("Can you fix my laptop?", ["No, but I can get my brother to look at it.", "No, but I can get my brother look at it.", "No, but I can have my brother to look at it.", "No, but I can get my brother looked at it."]),
      say("What do you think of the new office?", ["It's striking, but not very practical.", "It's striking, but not very practically.", "It's strike, but not practical.", "It's struck, but not practical."]),
      say("Would you like to work somewhere with slides?", ["Not really — I think it's a bit childish.", "Not really — I think it's a bit conventional.", "Yes — it's very unimaginative.", "Yes — it's very functional and grey."]),
      say("What's the best perk at your company?", ["We can get our washing done at work.", "We can do washing get at work.", "We can washing done at work.", "We can get done washing at work."]),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself.",
    questions: phrases([
      "We're having the roof repaired.",
      "I'm getting my car serviced tomorrow.",
      "I had my handbag stolen last night.",
      "Where do you get your hair cut?",
      "I'm getting Alex to pick my parents up.",
      "It's a bit too childish for me.",
      "The office is striking but not very practical.",
      "remarkable",
      "innovative",
      "user-friendly",
    ]),
  },
];
