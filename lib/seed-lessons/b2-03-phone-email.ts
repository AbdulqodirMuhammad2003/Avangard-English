/**
 * B2, 3-dars — «Whistles, phones and emails». Silbo Gomero (hushtak tili),
 * verbs + prepositions, telefondagi muammolar, norasmiy email va ellipsis,
 * ozchilik tillari (minority languages).
 * Navigate B2, 1.3 + 1.4 + 1.5 asosida: tinglash mashqlarida kitob treklari
 * (yopiq ombordan), lug'at misollari kitobning Wordlist'idan yoki unga
 * yaqin; mashq matnlari o'zimizniki. Mashqlar inglizcha.
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
  trueFalse,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

export const B2_03_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🧩", "consist of", "kənˈsɪst əv|kansist av", "fe'l", "…dan iborat bo'lmoq", "Be made of particular parts.", "What does a healthy diet consist of?", "Sog'lom ovqatlanish nimalardan iborat?"),
      w("🐦", "confuse", "kənˈfjuːz|kanfyuuz", "fe'l", "Adashtirmoq, chalkashtirmoq", "Think that one thing is another thing.", "It's easy to confuse Silbo with birdsong.", "Silboni qushlar sayrashi bilan adashtirish oson."),
      w("😊", "contribute to", "kənˈtrɪbjuːt tə|kantribyuut ta", "fe'l", "…ga hissa qo'shmoq, sabab bo'lmoq", "Help to cause something.", "What factors do you think contribute to a person's happiness?", "Sizningcha, qanday omillar insonning baxtiga hissa qo'shadi?"),
      w("🛑", "prevent", "prɪˈvent|privent", "fe'l", "Oldini olmoq (…dan saqlamoq)", "Stop something from happening.", "Teachers want to prevent the language from becoming extinct.", "O'qituvchilar tilni yo'qolib ketishdan saqlab qolmoqchi."),
      w("👎", "disapprove of", "ˌdɪsəˈpruːv əv|disapruuv av", "fe'l", "…ni yoqtirmaslik, qoralamoq", "Think that something is bad or wrong.", "Do you disapprove of e-cigarettes?", "Elektron sigaretlarni qoralaysizmi?"),
      w("🗣️", "communicate in", "kəˈmjuːnɪkeɪt ɪn|kamyuunikeyt in", "fe'l", "…da (biror tilda) muloqot qilmoq", "Use a language to talk to people.", "On La Gomera you might hear people communicate in Silbo.", "La Gomerada odamlarning Silboda muloqot qilishini eshitishingiz mumkin."),
      w("🔄", "adapt", "əˈdæpt|adept", "fe'l", "Moslashtirmoq", "Change something to make it suitable.", "The locals had to adapt the whistling language to Spanish.", "Mahalliy aholi hushtak tilini ispan tiliga moslashtirishi kerak edi."),
      w("🚫", "be banned from", "bi ˈbænd frəm|bi bend fram", "ibora", "…dan man qilinmoq", "Not be allowed to do something by law or rule.", "Do you think drivers should be banned from using mobile phones?", "Haydovchilarga mobil telefondan foydalanish taqiqlanishi kerak deb o'ylaysizmi?"),
      w("🍀", "result in", "rɪˈzʌlt ɪn|rizalt in", "fe'l", "…ga olib kelmoq", "Cause a particular situation.", "In Russia, it is believed that whistling indoors can result in bad luck.", "Rossiyada uy ichida hushtak chalish omadsizlikka olib keladi, deb ishonishadi."),
      w("⛈️", "bring on", "ˌbrɪŋ ˈɒn|bring on", "ibora", "Keltirib chiqarmoq", "Make something bad start to happen.", "There is an old tradition amongst sailors that whistling can bring on a storm.", "Dengizchilar orasida hushtak bo'ron keltirib chiqaradi, degan eski odat bor."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("😗", "whistle", "ˈwɪsl|wisl", "fe'l", "Hushtak chalmoq", "Make a high sound by blowing through your lips.", "We whistle when we want to get someone's attention.", "Birovning e'tiborini tortmoqchi bo'lsak, hushtak chalamiz."),
      w("⛰️", "steep", "stiːp|stiip", "sifat", "Tik, qiya", "Going up or down very sharply.", "La Gomera has numerous steep hills.", "La Gomerada ko'plab tik tepaliklar bor."),
      w("🏞️", "ravine", "rəˈviːn|raviin", "ot", "Jarlik, chuqur dara", "A deep, narrow valley with steep sides.", "It is difficult to cross a deep ravine on foot.", "Chuqur jarlikni piyoda kesib o'tish qiyin."),
      w("⛵", "settlers", "ˈsetləz|setlaz", "ot", "Ko'chib kelganlar (yangi yerga)", "People who go to live in a new place.", "When the first European settlers arrived, the islanders were already whistling.", "Birinchi yevropalik ko'chmanchilar kelganda, orolliklar allaqachon hushtak bilan gaplashishardi."),
      w("🦤", "extinct", "ɪkˈstɪŋkt|ikstinkt", "sifat", "Yo'qolib ketgan", "No longer existing.", "Experts predict that many languages will become extinct by the end of the century.", "Mutaxassislar asr oxirigacha ko'p tillar yo'qolib ketadi, deb bashorat qilmoqda."),
      w("🏫", "compulsory", "kəmˈpʌlsəri|kampalsari", "sifat", "Majburiy", "That you must do because of a rule.", "Silbo was made a compulsory subject in La Gomera's primary schools.", "Silbo La Gomeraning boshlang'ich maktablarida majburiy fanga aylantirildi."),
      w("📡", "coverage", "ˈkʌvərɪdʒ|kavarij", "ot", "Aloqa qamrovi (signal)", "How well a phone network works in an area.", "The coverage isn't too good here.", "Bu yerda aloqa unchalik yaxshi emas."),
      w("🤯", "extraordinary", "ɪkˈstrɔːdnri|ikstroodnri", "sifat", "G'ayrioddiy", "Very unusual or surprising.", "Silbo is an extraordinary language which is whistled rather than spoken.", "Silbo — gapirilmaydigan, balki hushtak bilan chalinadigan g'ayrioddiy til."),
      w("🗺️", "minority language", "maɪˌnɒrəti ˈlæŋɡwɪdʒ|maynorati lengvij", "ibora", "Ozchilik tili", "A language spoken by a small number of people in a country.", "Welsh is a minority language in the UK.", "Uels tili Buyuk Britaniyada ozchilik tili hisoblanadi."),
      w("🌿", "indigenous", "ɪnˈdɪdʒənəs|indijanas", "sifat", "Mahalliy, tub (aholi, til)", "Native to a country or region.", "An indigenous language is native to a country or region.", "Tub til — biror mamlakat yoki hududning asl tili."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("⏳", "bear with me", "ˈbeə wɪð mi|bea wiz mi", "ibora", "Bir daqiqa sabr qiling", "Please wait a moment (polite).", "Just bear with me a moment.", "Bir daqiqa sabr qiling."),
      w("🙇", "caught me at a bad time", "ˌkɔːt mi ət ə ˌbæd ˈtaɪm|koot mi at a bed taym", "ibora", "Noqulay paytda qo'ng'iroq qildingiz", "You called when I'm busy.", "I'm afraid you've caught me at a bad time.", "Afsuski, noqulay paytda qo'ng'iroq qildingiz."),
      w("☎️", "hold the line", "ˌhəʊld ðə ˈlaɪn|hould za layn", "ibora", "Go'shakni qo'ymay turing", "Wait on the phone.", "Could you just hold the line?", "Go'shakni qo'ymay turolasizmi?"),
      w("📵", "breaking up", "ˌbreɪkɪŋ ˈʌp|breyking ap", "ibora", "Ovoz uzilib qolyapti", "Your voice keeps disappearing on the phone.", "Sorry, you're breaking up again.", "Kechirasiz, ovozingiz yana uzilyapti."),
      w("🏠", "landline", "ˈlændlaɪn|lendlayn", "ot", "Uy (statsionar) telefoni", "A phone that is connected by a wire, not a mobile.", "Could you call me back on my landline?", "Uy telefonimga qayta qo'ng'iroq qila olasizmi?"),
      w("👋", "let you get on", "ˌlet ju ɡet ˈɒn|let yu get on", "ibora", "Sizni ortiq ushlab turmayman", "A polite way to end a call so the other person can continue their work.", "OK, I'll let you get on.", "Mayli, sizni ortiq ushlab turmayman."),
      w("📴", "get off the phone", "ˌɡet ɒf ðə ˈfəʊn|get of za foun", "ibora", "Telefonni qo'ymoq (suhbatni tugatmoq)", "End a phone call.", "I'd better get off the phone.", "Telefonni qo'yganim ma'qul."),
      w("💬", "catch up", "ˌkætʃ ˈʌp|kech ap", "ibora", "Yangiliklar bilan bo'lishmoq (uzoq ko'rishmagach)", "Talk to a friend about what has happened since you last met.", "It would be great if we could catch up properly soon.", "Yaqinda bemalol gaplashib olsak zo'r bo'lardi."),
      w("🌙", "over the moon", "ˌəʊvə ðə ˈmuːn|ouva za muun", "ibora", "Juda xursand", "Extremely happy.", "My sister and her husband are over the moon because they are having twins!", "Opam va eri juda xursand, chunki ularning egizaklari bo'ladi!"),
      w("⌛", "ages", "ˈeɪdʒɪz|eyjiz", "ot", "Uzoq vaqt (so'zlashuvda)", "A very long time (informal).", "It seems like ages since we were in touch.", "Aloqada bo'lganimizga ancha vaqt bo'lganga o'xshaydi."),
    ],
  },
];

const SILBO = `SILBO GOMERO: A LANGUAGE YOU WHISTLE
La Gomera is a small Spanish island off the coast of north-west Africa. Its steep hills and deep ravines make it hard to cross, but a whistle can be heard up to seven kilometres away — so whistling is a perfect way to communicate there.
When the first European settlers arrived in the 15th century, the islanders were already communicating with whistles. Later they adapted the language to Spanish.
Silbo consists of only four vowels and four consonants, but whistlers can make over 4,000 words. They put a finger in the mouth and cup a hand to control the sound.
In the 1950s many whistlers left the island to find work. Roads and, later, mobile phones also contributed to the decline of Silbo.
To prevent the language from becoming extinct, Silbo became a compulsory subject in the island's primary schools in 1999. Some locals disapprove of this, but others say Silbo is part of their identity — and in many places you still can't depend on phone coverage.`;
const silbo = reading(SILBO);

const EMAIL = `Hi Marco,
Seems like ages since we've been in touch! Hope all's well. Life's pretty busy here. I've changed jobs — still teaching, but at a different school. Been working there for three months now. Love it, but it's hard work!
The big news is that my brother's getting married in June. Mum's over the moon, of course. And we're off to Lisbon for the wedding. Can't wait!
So, enough about me. What have you been up to? Still living in the same flat? I'll have plenty of time on my hands in August, so maybe I could come and visit.
Would be great to catch up properly. Speak soon, hopefully.
Lots of love,
Anna`;
const tf = trueFalse(EMAIL);

export const B2_03_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("I'm afraid you've caught me at a bad time.", ["I'm afraid you've caught me at a bad time.", "I'm afraid you caught me at a bad time.", "I'm afraid you've called me at a bad time.", "I'm afraid you've caught me at a busy time."]),
      listen("Could you call me back on my landline?", ["Could you call me back on my landline?", "Could you call me back on my mobile?", "Could you call me back on the landline?", "Can you call me back on my landline?"]),
      listen("I won't take up any more of your time.", ["I won't take up any more of your time.", "I won't take any more of your time.", "I don't take up any more of your time.", "I won't take up much more of your time."]),
      listen("It's easy to confuse Silbo with birdsong.", ["It's easy to confuse Silbo with birdsong.", "It's easy to confuse Silbo and birdsong.", "It was easy to confuse Silbo with birdsong.", "It's easy to confuse Silbo with a bird song."]),
      listen("Seems like ages since we've been in touch!", ["Seems like ages since we've been in touch!", "It seems like ages since we were in touch!", "Seems like ages since we've been in town!", "Seems like age since we've been in touch!"]),
      listen("We're off on a study trip to Amsterdam.", ["We're off on a study trip to Amsterdam.", "We're off on a school trip to Amsterdam.", "We were off on a study trip to Amsterdam.", "We're on a study trip to Amsterdam."]),
      listen("What have you been up to?", ["What have you been up to?", "What have you been doing?", "What are you up to?", "What have you got up to?"]),
      listen("extraordinary", ["extraordinary", "ordinary", "extraordinarily", "extra ordinary"]),
      listen("compulsory", ["compulsory", "complimentary", "compulsive", "computer"]),
      listen("indigenous", ["indigenous", "ingenious", "indigestion", "independent"]),
    ],
  },
  {
    title: "A whistling language",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to part of a podcast about whistling. Answer the questions.",
    questions: [
      hearing(track("1.4"))("Why do we usually whistle?", ["To get someone's attention", "To call a taxi only", "To show we are angry", "To start a race"]),
      hearing(track("1.4"))("Where do people whistle to show appreciation?", ["At a concert", "At a funeral", "At school", "In a library"]),
      hearing(track("1.4"))("Where is there an entire whistling language?", ["On the Spanish island of La Gomera", "In the mountains of Peru", "In northern Scotland", "On a Greek island"]),
      hearing(track("1.4"))("How long has the language existed?", ["For thousands of years", "For about a hundred years", "Since the 1950s", "Since 1999"]),
      hearing(track("1.4"))("What were the two whistlers talking about?", ["A party", "A concert", "A lost sheep", "The weather"]),
      hearing(track("1.4"))("What did one whistler ask the other to bring?", ["A musical instrument", "Some food", "A sheep", "A friend"]),
    ],
  },
  {
    title: "Silbo Gomero",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the text. Choose the correct answer.",
    questions: [
      silbo("Why is whistling ideal for communicating on La Gomera?", ["A whistle can be heard up to seven kilometres away.", "The islanders can't speak Spanish.", "Phones are banned on the island.", "Whistling is quieter than speaking."]),
      silbo("Who was already whistling when the Europeans arrived?", ["The islanders", "Spanish sailors", "Teachers", "Tourists"]),
      silbo("What did the islanders do later?", ["They adapted the language to Spanish.", "They stopped whistling.", "They wrote the language down.", "They taught it to birds."]),
      silbo("Which TWO things contributed to the decline of Silbo, according to the text?", ["Roads and mobile phones", "Schools and teachers", "Birds and the weather", "Tourists and music"]),
      silbo("What happened in 1999?", ["Silbo became a compulsory school subject.", "Silbo became extinct.", "Mobile phones arrived.", "Many whistlers left the island."]),
      silbo("Why do some people want to keep Silbo?", ["It's part of their identity and phone coverage is poor.", "It's easier than Spanish.", "Tourists pay to hear it.", "It's a compulsory subject in Spain."]),
    ],
  },
  {
    title: "Verbs + prepositions",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the correct preposition.",
    questions: [
      say("Have you heard ___ Silbo Gomero?", ["of", "on", "with", "to"]),
      say("Silbo consists ___ four vowels and four consonants.", ["of", "in", "from", "with"]),
      say("It's easy to confuse Silbo ___ birdsong.", ["with", "to", "from", "of"]),
      say("Mobile phones contributed ___ the decline of Silbo.", ["to", "for", "with", "on"]),
      say("They wanted to prevent the language ___ becoming extinct.", ["from", "of", "to", "with"]),
      say("Some locals disapprove ___ teaching Silbo in schools.", ["of", "on", "with", "about"]),
      say("You can't depend ___ phone coverage on the island.", ["on", "of", "to", "from"]),
      say("The locals adapted the language ___ Spanish.", ["to", "with", "for", "on"]),
      say("Whistling indoors can result ___ bad luck.", ["in", "to", "with", "of"]),
      say("Henry Ford banned his workers ___ whistling.", ["from", "of", "to", "for"]),
    ],
  },
  {
    title: "Whistling trivia",
    skill: "Vocabulary",
    kind: "fill",
    instructions: "Complete each sentence with the correct form of ban, bring, disapprove, lead or result.",
    questions: written([
      ["A car company boss once ___ his workers from whistling at work.", "banned"],
      ["Some people believe that whistling at home can ___ in bad luck.", "result"],
      ["In some countries, football fans whistle when they ___ of the referee's decision.", "disapprove"],
      ["Sailors used to say that whistling could ___ on a storm.", "bring"],
      ["In one small town, whistling in public can ___ to a fine of $500.", "lead"],
      ["Do you think drivers should be ___ from using mobile phones?", "banned"],
    ]),
  },
  {
    title: "Guess the meaning",
    skill: "Reading",
    kind: "match",
    instructions: "Use the context to guess the meaning. Match the words.",
    questions: pairs([
      ["ravine|a deep, narrow valley", "settlers|people who come to live in a new place", "extinct|no longer existing", "compulsory|that you must do"],
      ["decline|a fall, getting smaller", "coverage|how well a phone signal works", "sticking out of|coming out from", "cup your hand|make it into a bowl shape"],
    ]),
  },
  {
    title: "Four phone calls",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to four phone conversations. In each one there is a problem. Choose the problem.",
    questions: [1, 2, 3, 4].map((n) => ({
      prompt: `Conversation ${n}: What is the problem?`,
      audio: track("1.5"),
      options: ["An unclear telephone line", "One of the speakers is distracted", "An unwanted sales call", "A friend wants to talk for too long"],
      correct: [2, 3, 1, 0][n - 1],
    })),
  },
  {
    title: "Phone call details",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to the four phone conversations again. Answer the questions.",
    questions: [
      hearing(track("1.5"))("Conversation 1: What is the caller selling?", ["An electricity deal", "A new phone", "Insurance", "Holidays"]),
      hearing(track("1.5"))("Conversation 1: What does Mrs Carter ask the caller to do?", ["Remove her details from the database", "Call back later", "Send an email", "Speak to her husband"]),
      hearing(track("1.5"))("Conversation 2: Why does the first speaker want to end the call?", ["He's still at the office with a lot of work.", "His phone battery is low.", "He's driving.", "He's at the cinema."]),
      hearing(track("1.5"))("Conversation 3: How much will it cost to repair the engine?", ["£550", "£150", "£505", "£5,500"]),
      hearing(track("1.5"))("Conversation 3: Why is Sarah distracted?", ["Her children are arguing about a balloon.", "She's cooking dinner.", "She's watching TV.", "Someone is at the door."]),
      hearing(track("1.5"))("Conversation 4: What is the call about?", ["The agenda for a training day next Tuesday", "A new car", "A party at the weekend", "An electricity bill"]),
      hearing(track("1.5"))("Conversation 4: Where is the speaker working today?", ["From home", "In the office", "On a train", "In a café"]),
    ],
  },
  {
    title: "Phone language",
    skill: "Listening",
    kind: "listengap",
    instructions: "Listen and complete the sentences.",
    questions: [
      gaps(track("1.6"), [
        ["1. I don't take ___ calls.", "sales", "phone", "work"],
        ["2. Would you remove my ___ from your database?", "name", "details", "number"],
        ["3. It's been great ___ to you.", "talking", "speaking", "chatting"],
        ["4. I'd ___ get off the phone.", "better", "rather", "like"],
        ["6. I've got a ___ of work to do.", "ton", "lot", "pile"],
        ["8. Just ___ with me a moment.", "bear", "wait", "stay"],
        ["11. The ___ isn't too good here.", "coverage", "signal", "line"],
        ["13. I'm ___ you again.", "losing", "missing", "leaving"],
      ]),
    ],
  },
  {
    title: "What would you say?",
    skill: "Speaking",
    kind: "situation",
    instructions: "Read the situation. Choose the best phrase.",
    questions: [
      say("A company calls you at dinner time to sell you something.", ["I don't take sales calls.", "I'll let you get on.", "You're breaking up.", "It's been great talking to you."]),
      say("Your friend has been talking for an hour and you need to finish the call.", ["Anyway, I'd better get off the phone.", "Could you just hold the line?", "I don't take sales calls.", "You're breaking up."]),
      say("You are on the phone and your child starts crying.", ["Just bear with me a moment.", "I'll let you get on.", "Would you remove my name from your database?", "It's been great talking to you."]),
      say("You can hardly hear the other person.", ["Sorry, you're breaking up.", "I've got a ton of work to do.", "I'll let you get on.", "I don't take sales calls."]),
      say("You are very busy and can't talk now.", ["I'm afraid you've caught me at a bad time.", "It's been great talking to you.", "Could you call me back on my landline?", "You're breaking up."]),
      say("You are calling your boss and want to end the call politely.", ["I won't take up any more of your time.", "I don't take sales calls.", "Just bear with me a moment.", "I'm losing you again."]),
      say("Your mobile signal is bad at home.", ["Could you call me back on my landline?", "I'll let you get on.", "I've got a ton of work to do.", "I won't take up any more of your time."]),
      say("You need to find a document while your colleague waits on the phone.", ["Could you just hold the line?", "I'll let you get on.", "It's been great talking to you.", "I'm losing you again."]),
    ],
  },
  {
    title: "Ellipsis: leave words out",
    skill: "Writing",
    kind: "type",
    instructions: "Make the sentence more informal: leave out the words at the beginning (the pronoun, or the pronoun + auxiliary verb).",
    questions: written([
      ["I'm just writing to say hello.", "Just writing to say hello."],
      ["It was great to see you last week.", "Great to see you last week."],
      ["I hope to hear from you soon.", "Hope to hear from you soon."],
      ["Are you going anywhere this summer?", "Going anywhere this summer?"],
      ["I'll see you in a week's time.", "See you in a week's time."],
      ["I miss you!", "Miss you!"],
      ["It sounds amazing.", "Sounds amazing."],
      ["It's great to hear from you.", "Great to hear from you."],
    ]),
  },
  {
    title: "Informal or formal?",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match the informal words to their more formal meaning.",
    questions: pairs([
      ["loads of|a lot of", "in touch|in contact", "over the moon|extremely happy", "ages|a long time"],
      ["We're off|We're going away", "catch up|exchange news", "pretty busy|very busy", "What have you been up to?|What have you been doing?"],
      ["official language|has special legal status", "dominant language|most people in a country speak it", "minority language|spoken by a small number of people", "global language|spoken all around the world"],
    ]),
  },
  {
    title: "An email to a friend",
    skill: "Reading",
    kind: "truefalse",
    instructions: "Read Anna's email. Are the sentences true or false?",
    questions: [
      tf("Anna and Marco have been in touch a lot recently.", false, "«Seems like ages since we've been in touch!»"),
      tf("Anna has changed jobs.", true),
      tf("She's been working at the new school for six months.", false, "For three months."),
      tf("Anna's brother is getting married.", true),
      tf("Anna's mum is very happy about the wedding.", true, "over the moon = extremely happy"),
      tf("The wedding is in Lisbon.", true, "«we're off to Lisbon» = we're going to Lisbon"),
      tf("Anna will be very busy in August.", false, "She'll have plenty of time on her hands."),
      tf("«Love it, but it's hard work» is an example of ellipsis.", true, "I love it → Love it."),
    ],
  },
  {
    title: "Find the mistake",
    skill: "Vocabulary",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("Silbo consists *in four vowels and four consonants.", "consist of."),
      mistake("It's easy to confuse Silbo *to birdsong.", "confuse something with something."),
      mistake("They tried to prevent the language *of becoming extinct.", "prevent something from …"),
      mistake("I strongly disapprove *with smoking in public.", "disapprove of."),
      mistake("Whistling indoors can result *to bad luck.", "result in."),
      mistake("Just *carry with me a moment.", "Just bear with me a moment."),
      mistake("I'm afraid you've *catched me at a bad time.", "caught (past participle of catch)."),
      mistake("Sorry, you're breaking *down — I can't hear you.", "You're breaking up."),
      mistake("Could you call me back on my *landing?", "landline."),
      mistake("Seems like *age since we've been in touch!", "ages = a long time."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "Have you heard of Silbo Gomero?",
      "It's easy to confuse Silbo with birdsong.",
      "Mobile phones contributed to the decline of Silbo.",
      "Would you remove my name from your database?",
      "I'm afraid you've caught me at a bad time.",
      "Could you call me back on my landline?",
      "It would be great to catch up properly.",
      "Seems like ages since we've been in touch.",
    ]),
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself.",
    questions: phrases([
      "I don't take sales calls.",
      "It's been great talking to you.",
      "I'd better get off the phone.",
      "I'll let you get on.",
      "Just bear with me a moment.",
      "Could you just hold the line?",
      "The coverage isn't too good here.",
      "You're breaking up.",
      "Hope to hear from you soon.",
      "What have you been up to?",
    ]),
  },
];
