/**
 * B2, 5-dars — «An extraordinary escape». Henry «Box» Brown — o'zini
 * qutida pochta orqali erkinlikka jo'natgan odam; his-tuyg'u sifatlari.
 * Grammatika: past perfect simple va past perfect continuous.
 * Navigate B2, 2.2 asosida: tinglash mashqlarida kitob treklari (yopiq
 * ombordan), lug'at misollari kitob Wordlist'idan yoki unga yaqin; mashq
 * matnlari o'zimizniki. Mashqlar inglizcha.
 */
import type { SeedExercise, SeedQuestion } from "../seed-exercises";
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
  stress,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

/** Tinglab «True / False»: variantlar tartibi qat'iy, to'g'risi ko'rsatiladi. */
const heardTrue = (statement: string, isTrue: boolean, explanation?: string): SeedQuestion => ({
  prompt: statement,
  audio: track("2.2"),
  options: ["True", "False"],
  correct: isTrue ? 0 : 1,
  explanation,
});

export const B2_05_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("😰", "anxious", "ˈæŋkʃəs|enkshas", "sifat", "Xavotirli, bezovta", "Worried and nervous about what might happen.", "Henry Brown must have felt anxious before he got into his box.", "Genri Braun qutiga kirishdan oldin xavotirda bo'lgan bo'lsa kerak."),
      w("😒", "bitter", "ˈbɪtə|bita", "sifat", "Alamli, achchiq (ko'ngli)", "Angry and sad because something unfair happened.", "Henry Brown felt bitter after his owner allowed his family to be taken from him.", "Xo'jayini oilasini olib ketishga yo'l qo'ygach, Genri Braun alam his qildi."),
      w("🙃", "upside down", "ˌʌpsaɪd ˈdaʊn|apsayd daun", "ibora", "Teskari, boshi pastga", "With the top at the bottom.", "He almost died after he had been sitting upside down for several hours.", "U bir necha soat boshi pastga o'tirib qolgach, deyarli o'lib qolayozdi."),
      w("😵‍💫", "disorientated", "dɪsˈɔːriənteɪtɪd|disooriyanteytid", "sifat", "Mo'ljalni yo'qotgan, garang", "Confused about where you are.", "When Henry Brown first climbed out of his box, he felt disorientated.", "Genri Braun qutidan birinchi chiqqanda garang bo'lib qoldi."),
      w("🕳️", "breathing holes", "ˈbriːðɪŋ həʊlz|briizing houlz", "ibora", "Nafas olish teshiklari", "Small holes that let air in.", "Brown had water in the box and breathing holes.", "Braunning qutisida suv va nafas olish teshiklari bor edi."),
      w("😞", "miserable", "ˈmɪzrəbl|mizrabl", "sifat", "Juda baxtsiz, ezilgan", "Very unhappy.", "Henry Brown felt miserable while he was travelling in the box.", "Qutida ketayotganda Genri Braun o'zini juda baxtsiz his qildi."),
      w("😱", "petrified", "ˈpetrɪfaɪd|petrifayd", "sifat", "Qo'rquvdan qotib qolgan", "So frightened that you can't move.", "You saw a snake in your tent? I bet you were petrified!", "Chodiringda ilon ko'rdingmi? Qo'rquvdan qotib qolgan bo'lsang kerak!"),
      w("🤨", "puzzled", "ˈpʌzld|pazld", "sifat", "Hayron, tushunolmay qolgan", "Confused because you can't understand something.", "The men were puzzled when they heard a voice from inside the box.", "Quti ichidan ovoz eshitganda erkaklar hayron qolishdi."),
      w("😮‍💨", "relieved", "rɪˈliːvd|riliivd", "sifat", "Yengil tortgan", "Happy because a worry or danger has gone.", "He was so relieved when they finally opened the box.", "Nihoyat qutini ochishganda u yengil tortdi."),
      w("😬", "tense", "tens|tens", "sifat", "Asabiy, tarang", "Nervous and not able to relax.", "Everyone in the room was tense as they waited for the box to arrive.", "Xonadagilar quti kelishini kutib, asabiy holatda edi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("😌", "satisfied", "ˈsætɪsfaɪd|setisfayd", "sifat", "Mamnun, qoniqqan", "Pleased because you got what you wanted.", "She was satisfied with her exam results.", "U imtihon natijalaridan mamnun edi."),
      w("😨", "terrified", "ˈterɪfaɪd|terifayd", "sifat", "Dahshatga tushgan", "Very frightened.", "He was terrified that someone would open the box before it arrived.", "U quti yetib kelmasdan ochib qo'yishlaridan dahshatga tushgan edi."),
      w("💔", "hurt", "hɜːt|hoot", "sifat", "Ranjigan, ko'ngli og'rigan", "Upset because of what someone said or did.", "She felt hurt when her best friend didn't invite her.", "Eng yaqin dugonasi taklif qilmaganda uning ko'ngli og'ridi."),
      w("☁️", "down", "daʊn|daun", "sifat", "Kayfiyati yo'q, ma'yus", "A little sad (informal).", "I've been feeling a bit down lately.", "So'nggi paytlarda kayfiyatim biroz tushkun."),
      w("📦", "package", "ˈpækɪdʒ|pekij", "ot", "Posilka, quti", "A box that is sent by post.", "People in Pennsylvania were waiting anxiously for the arrival of the package from Virginia.", "Pensilvaniyadagi odamlar Virjiniyadan keladigan posilkani xavotir bilan kutishardi."),
      w("🚚", "freight", "freɪt|freyt", "ot", "Yuk (transportda tashiladigan)", "Goods carried by trains, ships, planes or lorries.", "He escaped by sending himself as freight to Philadelphia.", "U o'zini yuk sifatida Filadelfiyaga jo'natib qochdi."),
      w("🏅", "feat", "fiːt|fiit", "ot", "Jasorat, qahramonlik ishi", "An action that needs skill, strength or courage.", "In honour of this creative but dangerous feat, he became known as Henry 'Box' Brown.", "Bu ijodkorona, ammo xavfli jasorati sharafiga u Genri «Quti» Braun deb tanildi."),
      w("🦁", "courage", "ˈkʌrɪdʒ|karij", "ot", "Jasorat, mardlik", "The ability to do something that frightens you.", "Because of the extraordinary courage he had shown, his story became famous.", "U ko'rsatgan g'ayrioddiy jasorat tufayli uning hikoyasi mashhur bo'ldi."),
      w("🎯", "determined", "dɪˈtɜːmɪnd|ditoomind", "sifat", "Qat'iyatli", "Wanting to do something very much, so nothing will stop you.", "This terrible loss made Brown determined to escape slavery.", "Bu dahshatli yo'qotish Braunni qullikdan qochishga qat'iy ahd qildirdi."),
      w("💪", "determination", "dɪˌtɜːmɪˈneɪʃn|ditoomineyshn", "ot", "Qat'iyat", "The quality of not giving up.", "Henry Brown had shown great determination on his way to freedom.", "Genri Braun erkinlik yo'lida katta qat'iyat ko'rsatgan edi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🤲", "assistance", "əˈsɪstəns|asistans", "ot", "Yordam", "Help.", "With the assistance of two friends, Henry made arrangements for them to receive the package.", "Ikki do'stining yordamida Genri posilkani qabul qilishlarini kelishib qo'ydi."),
      w("👥", "gather", "ˈɡæðə|geza", "fe'l", "Yig'ilmoq", "Come together in one place.", "Several members of the society came to gather at the office that morning.", "O'sha kuni ertalab jamiyatning bir necha a'zosi idoraga yig'ilish uchun keldi."),
      w("⛓️", "slavery", "ˈsleɪvəri|sleyvari", "ot", "Qullik", "The system of owning people and forcing them to work.", "Henry Brown escaped from slavery in 1849.", "Genri Braun 1849-yilda qullikdan qochdi."),
      w("⚖️", "injustice", "ɪnˈdʒʌstɪs|injastis", "ot", "Adolatsizlik", "A situation that is not fair.", "The box itself became a symbol of the injustice of slavery.", "Qutining o'zi qullik adolatsizligining ramziga aylandi."),
      w("🤞", "break a promise", "ˌbreɪk ə ˈprɒmɪs|breyk a promis", "ibora", "Va'dani buzmoq", "Not do what you said you would do.", "You should never break a promise to a friend.", "Do'stga bergan va'dani hech qachon buzmaslik kerak."),
      w("👆", "tap", "tæp|tep", "fe'l", "Sekin taqillatmoq", "Hit something gently with your fingers.", "Leaning over the box, one man began to tap on it quietly.", "Qutiga engashib, bir kishi uni sekin taqillata boshladi."),
      w("💔", "separation", "ˌsepəˈreɪʃn|separeyshn", "ot", "Ajralish", "When people are taken away from each other.", "Selling her to another owner might lead to the couple's separation.", "Uni boshqa xo'jayinga sotish er-xotinning ajralishiga olib kelishi mumkin edi."),
      w("🏆", "succeed in", "səkˈsiːd ɪn|saksiid in", "fe'l", "…ga erishmoq, uddalamoq", "Manage to do something difficult.", "Few people succeed in escaping in such a dangerous way.", "Bunday xavfli yo'l bilan qochishni kamdan-kam odam uddalaydi."),
      w("😖", "horrendous", "hɒˈrendəs|horendas", "sifat", "Dahshatli", "Extremely bad or unpleasant.", "The 27-hour journey in the box was horrendous.", "Qutidagi 27 soatlik yo'l dahshatli edi."),
      w("✊", "anti-slavery", "ˌænti ˈsleɪvəri|enti sleyvari", "sifat", "Qullikka qarshi", "Fighting to end slavery.", "After he arrived, he became a member of the anti-slavery movement.", "U yetib kelgach, qullikka qarshi harakat a'zosiga aylandi."),
    ],
  },
];

const TEXT = `A STRANGE DELIVERY
Early one Saturday morning in March 1849, a wooden box arrived at an office in Philadelphia. Several men had been waiting there since early morning — they were members of an anti-slavery society.
When the box arrived, they locked the door. One man knocked on the box and asked quietly, «Is all right inside?» A voice answered, «All right.»
Inside was Henry Brown. He had been travelling in the box for 27 hours. He had escaped from slavery in Virginia by sending himself as freight to a free state.
Because of this amazing feat, people called him Henry «Box» Brown for the rest of his life.`;
const read = reading(TEXT);

export const B2_05_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("I hadn't set the alarm, so I got to work late.", ["I hadn't set the alarm, so I got to work late.", "I didn't set the alarm, so I got to work late.", "I hadn't set the alarm, so I got to work early.", "I haven't set the alarm, so I got to work late."]),
      listen("By the time Nicola called, Anna had left.", ["By the time Nicola called, Anna had left.", "By the time Nicola called, Anna left.", "When Nicola called, Anna had left.", "By the time Nicola called, Anna had lived."]),
      listen("It had been raining for hours.", ["It had been raining for hours.", "It has been raining for hours.", "It had rained for hours.", "It had been raining for days."]),
      listen("We'd known each other for five years.", ["We'd known each other for five years.", "We've known each other for five years.", "We'd been knowing each other for five years.", "We knew each other for five years."]),
      listen("He was exhausted because he'd been driving all night.", ["He was exhausted because he'd been driving all night.", "He was exhausted because he'd driven all night.", "He's exhausted because he's been driving all night.", "He was exhausted because he was driving all night."]),
      listen("I bet you were petrified!", ["I bet you were petrified!", "I bet you were terrified!", "I bet you are petrified!", "I bet you were puzzled!"]),
      listen("He felt disorientated when he climbed out of the box.", ["He felt disorientated when he climbed out of the box.", "He felt disappointed when he climbed out of the box.", "He felt disorientated when he climbed into the box.", "He was disorientated when he climbed out of the box."]),
      listen("relieved", ["relieved", "believed", "received", "relived"]),
      listen("furious", ["furious", "curious", "serious", "famous"]),
      listen("miserable", ["miserable", "memorable", "admirable", "miserably"]),
    ],
  },
  {
    title: "Henry Box Brown",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to a talk about what happened before Henry Box Brown arrived in Philadelphia. Answer the questions.",
    questions: [
      hearing(track("2.2"))("Where had Brown been working in Virginia?", ["At a tobacco factory", "On a cotton farm", "At a post office", "In his owner's house"]),
      hearing(track("2.2"))("How did his owner, William Barret, treat him?", ["Kindly, compared to other slave owners", "Very badly", "He beat him every day", "He never paid him"]),
      hearing(track("2.2"))("What terrible event led to his decision to escape?", ["His wife and children were sold to another owner.", "He lost his job.", "His owner died.", "His house burnt down."]),
      hearing(track("2.2"))("Where were his wife and children taken?", ["North Carolina", "Philadelphia", "Virginia", "New York"]),
      hearing(track("2.2"))("Who helped him escape?", ["Two friends and a carpenter", "His owner, Barret", "His wife, Nancy", "A doctor"]),
      hearing(track("2.2"))("Which forms of transport carried the box?", ["Trains, boats and road wagons", "Only trains", "A plane and a ship", "Horses only"]),
      hearing(track("2.2"))("How long had he been travelling in the box when it was opened?", ["27 hours", "Three days", "Four hours", "Twelve hours"]),
      hearing(track("2.2"))("Why did he almost die?", ["He had been sitting upside down for several hours.", "He had no water.", "There were no breathing holes.", "The box fell off a train."]),
    ],
  },
  {
    title: "True or false?",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to the talk again. Are the sentences true or false?",
    questions: [
      heardTrue("Brown wanted to escape because his owner had been beating him.", false, "His owner had treated him kindly; his family had been sold."),
      heardTrue("Nancy's owner sold her even though he had promised not to.", true),
      heardTrue("Before they were separated, the couple had been living in Brown's owner's house.", false, "They had been living in their own house."),
      heardTrue("Brown had held his wife's hand for four miles before she was taken away.", true),
      heardTrue("Brown almost died in the box because he hadn't had anything to drink.", false, "He had water; he almost died because he had been upside down."),
      heardTrue("After he had arrived in Philadelphia, he joined the anti-slavery movement.", true),
    ],
  },
  {
    title: "A strange delivery",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the text. Choose the correct answer.",
    questions: [
      read("Who had been waiting at the office?", ["Members of an anti-slavery society", "Henry Brown's family", "Police officers", "Post office workers"]),
      read("What did the men do when the box arrived?", ["They locked the door.", "They called the police.", "They opened it at once.", "They sent it back."]),
      read("How long had Henry been travelling in the box?", ["27 hours", "Since early morning", "Two days", "A week"]),
      read("How had he escaped from slavery?", ["By sending himself as freight", "By running through the forest", "By buying his freedom", "By taking a train"]),
      read("Why was he called Henry «Box» Brown?", ["Because of his amazing feat", "Because he built boxes", "Because he worked at a post office", "Because it was his father's name"]),
    ],
  },
  {
    title: "Simple or continuous?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct past perfect form.",
    questions: [
      say("They ___ each other for a year before they got married.", ["had known", "had been knowing", "have known", "were knowing"]),
      say("He was exhausted because he ___ all night.", ["had been driving", "has been driving", "drove", "was drived"]),
      say("She was in a panic because she ___ her passport.", ["had lost", "had been losing", "has lost", "was losing"]),
      say("He ___ the car for just a month when someone crashed into it.", ["had had", "had been having", "has had", "was having"]),
      say("The alarm didn't go off because I ___ to set it.", ["had forgotten", "had been forgetting", "have forgotten", "was forgetting"]),
      say("My eyes were hurting because I ___ at the computer screen all day.", ["had been staring", "had stared", "have stared", "stare"]),
      say("I was sorry that the trip was cancelled. I ___ forward to it.", ["had been looking", "had looked", "have looked", "look"]),
      say("When I woke up, I saw that it ___.", ["had been raining", "has been raining", "rains", "had been rained"]),
      say("By the time we got to the station, the train ___ left.", ["had already", "has already", "was already", "already had been"]),
      say("They'd been painting the room for an hour when they realized they ___ the wrong colour.", ["had been using", "have been using", "are using", "had used been"]),
    ],
  },
  {
    title: "Complete the sentences",
    skill: "Grammar",
    kind: "fill",
    instructions: "Complete each sentence with the past perfect simple or continuous of the verb in brackets.",
    questions: written([
      ["He'd asked for her master's permission before they ___ married. (get) — past simple", "got"],
      ["His body hurt because he ___ in the same position for hours. (sit)", "had been sitting|'d been sitting"],
      ["They ___ together long before his wife was sold. (not be)", "hadn't been|had not been"],
      ["No, I didn't get a ticket. They ___ out by the time I tried. (sell)", "had sold|'d sold"],
      ["Why didn't you join us for lunch? — Because I ___. (already / eat)", "had already eaten|'d already eaten"],
      ["You look exhausted in this photo! — I was. I ___ for days by bus. (travel)", "had been travelling|'d been travelling|had been traveling"],
      ["Don't worry about being late. We ___ very long. (not wait)", "hadn't been waiting|had not been waiting"],
      ["Sara ___ there long when she was promoted. (not work)", "hadn't been working|had not been working"],
    ]),
  },
  {
    title: "Grammar sentences",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear four sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("gr-2.2"), [
        ["I ___ the alarm, so I got to work late.", "hadn't set", "didn't set", "haven't set"],
        ["By the time Nicola called, Anna ___ for the station.", "had left", "left", "was leaving"],
        ["Sara ___ there long when she was promoted.", "hadn't been working", "hadn't worked", "wasn't working"],
        ["They'd been painting the room for nearly an hour when they realized they'd been using the wrong ___.", "colour", "paint", "brush"],
      ]),
    ],
  },
  {
    title: "What had happened?",
    skill: "Grammar",
    kind: "situation",
    instructions: "Choose the best explanation.",
    questions: [
      say("She felt dizzy because …", ["she'd been spinning round and round.", "she spins round and round.", "she'd spin round and round.", "she has been spinning round."]),
      say("He was out of breath because …", ["he'd been running for the bus.", "he runs for the bus.", "he's running for the bus.", "he'd ran for the bus."]),
      say("He had oil on his hands because …", ["he'd been repairing his car.", "he repairs his car.", "he'd been repaired his car.", "he has repaired his car tomorrow."]),
      say("Her boots were muddy because …", ["she'd been walking in the woods after the rain.", "she walks in the woods.", "she'd walking in the woods.", "she's been walked in the woods."]),
      say("The kitchen smelt of cake because …", ["Dad had been baking all morning.", "Dad bakes all morning.", "Dad had baking all morning.", "Dad is baking tomorrow."]),
      say("I couldn't get into the flat because …", ["I'd left my keys at work.", "I'd been leaving my keys at work.", "I leave my keys at work.", "I've left my keys at work yesterday."]),
    ],
  },
  {
    title: "Adjectives of feeling",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match each strong adjective to its basic feeling.",
    questions: pairs([
      ["delighted|happy", "miserable|sad", "furious|angry", "petrified|frightened"],
      ["satisfied|happy", "down|sad", "bitter|angry", "puzzled|confused"],
      ["relieved|happy", "hurt|sad", "terrified|frightened", "anxious|nervous"],
      ["tense|nervous", "disorientated|confused", "furious|very angry", "delighted|very pleased"],
    ]),
  },
  {
    title: "Fourteen adjectives",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear fourteen adjectives in this order. Choose the word you hear each time.",
    questions: [
      gaps(track("2.3"), [
        ["___", "anxious", "ambitious", "annoyed"],
        ["___", "bitter", "better", "bored"],
        ["___", "delighted", "decided", "delicate"],
        ["___", "disorientated", "disappointed", "disorganized"],
        ["___", "down", "done", "dull"],
        ["___", "furious", "curious", "famous"],
        ["___", "hurt", "hard", "heard"],
        ["___", "miserable", "memorable", "admirable"],
        ["___", "petrified", "satisfied", "terrified"],
        ["___", "puzzled", "pleased", "bustled"],
        ["___", "relieved", "received", "believed"],
        ["___", "satisfied", "sanctified", "petrified"],
        ["___", "tense", "tens", "dense"],
        ["___", "terrified", "petrified", "satisfied"],
      ]),
    ],
  },
  {
    title: "How did he feel?",
    skill: "Vocabulary",
    kind: "situation",
    instructions: "Think about Henry Box Brown. Choose the best adjective.",
    questions: [
      say("How did he feel when he heard that Nancy was going to be sold?", ["furious", "delighted", "relieved", "satisfied"]),
      say("How did he feel when his owner said «You can get another wife»?", ["bitter", "delighted", "relieved", "puzzled"]),
      say("How did he feel just before his journey in the box?", ["anxious", "satisfied", "delighted", "down"]),
      say("How did he feel while he was upside down in the box?", ["miserable", "delighted", "satisfied", "relieved"]),
      say("How did the men feel when a voice came from inside the box?", ["puzzled", "bitter", "furious", "down"]),
      say("How did he feel just after he got out of the box?", ["disorientated", "bitter", "furious", "down"]),
    ],
  },
  {
    title: "Which syllable is stressed?",
    skill: "Pronunciation",
    kind: "stress",
    instructions: "Listen to the adjective. Tap the stressed syllable.",
    questions: stress([
      ["anx|ious", 0],
      ["de|ligh|ted", 1],
      ["dis|o|ri|en|ta|ted", 1],
      ["fu|ri|ous", 0],
      ["mi|se|ra|ble", 0],
      ["pe|tri|fied", 0],
      ["re|lieved", 1],
      ["sa|tis|fied", 0],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("They had been *knowing each other for a year before they married.", "know is a state verb: had known."),
      mistake("When we arrived, the film *has already started.", "Past perfect: had already started."),
      mistake("He was tired because he *has been driving all night.", "had been driving."),
      mistake("I had *forget to set the alarm.", "had forgotten."),
      mistake("By the time Nicola called, Anna had *leave.", "had left."),
      mistake("She had lost her keys, so she *can't get in.", "It's a past story: so she couldn't get in."),
      mistake("He was *delightful when he reached Philadelphia.", "delighted = very happy (feeling)."),
      mistake("I was really *petrifying when I saw the snake.", "petrified (feeling)."),
      mistake("He felt *relief when the box was opened.", "relieved (adjective)."),
      mistake("It's wrong to *broke a promise.", "break a promise."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "He had been travelling in the box for 27 hours.",
      "Nancy's master had promised not to sell her.",
      "They hadn't been together long before she was sold.",
      "His body hurt because he had been sitting for hours.",
      "By the time we got there, the bank had closed.",
      "He was relieved when they opened the box.",
      "With the assistance of two friends, he escaped.",
      "The box became a symbol of injustice.",
    ]),
  },
  {
    title: "React to a story",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best answer.",
    questions: [
      say("There was a snake in my tent last night!", ["Really? I bet you were petrified!", "Really? I bet you were delighted!", "Really? I bet you were satisfied!", "Really? I bet you were relieved!"]),
      say("Why were you so tired yesterday?", ["I'd been working on my essay all night.", "I've been working on my essay all night.", "I work on my essay all night.", "I'd working on my essay all night."]),
      say("Did you catch the train?", ["No, it had already left when we got there.", "No, it has already left when we got there.", "No, it already leaves when we got there.", "No, it had been leaving when we got there."]),
      say("We finally found our lost dog!", ["Oh, you must be so relieved!", "Oh, you must be so bitter!", "Oh, you must be so furious!", "Oh, you must be so down!"]),
      say("My best friend forgot my birthday.", ["Oh no. You must feel quite hurt.", "Oh no. You must feel quite delighted.", "Oh no. You must feel quite satisfied.", "Oh no. You must feel quite relieved."]),
      say("How long had you lived there before you moved?", ["About three years.", "Since three years.", "Three years ago.", "For three years ago."]),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself.",
    questions: phrases([
      "He had been travelling in the box for 27 hours.",
      "I hadn't set the alarm, so I got to work late.",
      "By the time Nicola called, Anna had left.",
      "It had been raining for hours.",
      "I bet you were petrified!",
      "You must be so relieved!",
      "disorientated",
      "delighted",
      "miserable",
      "determination",
    ]),
  },
];
