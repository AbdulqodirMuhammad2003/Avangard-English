/**
 * A2, 28-dars — «San'atkor qalb». Musiqa, rassomchilik, raqs; madaniy
 * mashg'ulotlar.
 * Grammatika: present perfect — have/has + V3 (hayot tajribasi), ever/never.
 * Navigate A2, 12.1 asosida: tinglash mashqlarida kitob treklari (yopiq
 * ombordan), savollar va matnlar o'zimizniki. Mashqlar inglizcha.
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

const track = (n: string) => `media:navigate-a2/audio/${n}.mp3`;

export const A2_28_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🦯", "blind", "blaɪnd|blaynd", "sifat", "Ko'r, ko'zi ojiz", "Not able to see.", "He was born blind, but he plays the piano beautifully.", "U ko'zi ojiz tug'ilgan, lekin pianinoni ajoyib chaladi."),
      w("🎻", "instrument", "ˈɪnstrəmənt|instramant", "ot", "Cholg'u asbobi", "A thing you play to make music, like a guitar.", "Do you play an instrument?", "Biror cholg'u asbobini chalasizmi?"),
      w("🎭", "musical", "ˈmjuːzɪkl|myuuzikl", "ot", "Myuzikl", "A play or film where people sing and dance.", "I've seen a musical in London.", "Londonda myuzikl ko'rganman."),
      w("🖼️", "gallery", "ˈɡæləri|gelari", "ot", "Galereya", "A building where you can look at art.", "There's a new art gallery in our town.", "Shahrimizda yangi san'at galereyasi bor."),
      w("✏️", "drawing", "ˈdrɔːɪŋ|drooing", "ot", "Rasm chizish; chizgi rasm", "Making pictures with a pencil.", "My parents are artists, so I've had lots of drawing lessons.", "Ota-onam rassom, shuning uchun ko'p rasm chizish darslarida qatnashganman."),
      w("🎨", "painting", "ˈpeɪntɪŋ|peynting", "ot", "Rassomlik; kartina", "Making pictures with paint; a picture made with paint.", "I enjoy painting a lot.", "Rassomlikni juda yoqtiraman."),
      w("🏛️", "exhibition", "ˌeksɪˈbɪʃn|eksibishn", "ot", "Ko'rgazma", "A show of art or other things in a museum or gallery.", "Have you seen the new exhibition at the museum?", "Muzeydagi yangi ko'rgazmani ko'rdingizmi?"),
      w("🎹", "play the piano", "ˌpleɪ ðə piˈænəʊ|pley za pienou", "ibora", "Pianino chalmoq", "Make music on a piano.", "She started to play the piano at the age of two.", "U ikki yoshida pianino chala boshlagan."),
      w("🎶", "sing in a choir", "ˌsɪŋ ɪn ə ˈkwaɪə|sing in a kwaya", "ibora", "Xorda kuylamoq", "Sing with a big group of people.", "My grandmother likes to sing in a choir.", "Buvim xorda kuylashni yaxshi ko'radi."),
      w("🎪", "music festival", "ˈmjuːzɪk ˌfestɪvl|myuuzik festivl", "ibora", "Musiqa festivali", "An event with many concerts, often outside.", "Every summer I go to a music festival.", "Har yozda musiqa festivaliga boraman."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("❓", "ever", "ˈevə|eva", "ravish", "Hech (qachon) — so'roqda", "At any time in your life (in questions).", "Have you ever been to an opera?", "Hech operaga borganmisiz?"),
      w("✅", "already", "ɔːlˈredi|oolredi", "ravish", "Allaqachon", "Before now, sooner than expected.", "I've already seen that film.", "U filmni allaqachon ko'rganman."),
      w("⏳", "yet", "jet|yet", "ravish", "Hali (inkor/so'roqda)", "Until now (in negatives and questions).", "I haven't finished my book yet.", "Kitobimni hali tugatmadim."),
      w("📍", "since", "sɪns|sins", "predlog", "…dan beri", "From a time in the past until now.", "I've had a big music collection since I was a child.", "Bolaligimdan beri katta musiqa to'plamim bor."),
      w("📊", "so far", "ˌsəʊ ˈfɑː|sou faa", "ibora", "Hozircha, shu paytgacha", "Until now.", "I've written two songs so far.", "Hozircha ikkita qo'shiq yozdim."),
      w("🌍", "in my life", "ɪn ˈmaɪ ˌlaɪf|in may layf", "ibora", "Hayotimda", "In all the time I have lived.", "I've never been to a jazz concert in my life.", "Hayotimda hech qachon jaz kontsertiga bormaganman."),
      w("1️⃣", "once", "wʌns|wans", "ravish", "Bir marta", "One time.", "I've been to Paris once.", "Parijda bir marta bo'lganman."),
      w("2️⃣", "twice", "twaɪs|tways", "ravish", "Ikki marta", "Two times.", "I've visited Brazil twice.", "Braziliyaga ikki marta borganman."),
      w("🔁", "several times", "ˌsevrəl ˈtaɪmz|sevral taymz", "ibora", "Bir necha marta", "More than two times, but not many.", "I've seen that musical several times.", "U myuziklni bir necha marta ko'rganman."),
      w("🏅", "achievement", "əˈtʃiːvmənt|achiivmant", "ot", "Yutuq", "Something good you did after hard work.", "His first big concert was an amazing achievement.", "Uning birinchi katta kontserti ajoyib yutuq bo'ldi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("💃", "salsa", "ˈsælsə|selsa", "ot", "Salsa (raqs)", "A fast dance from Latin America.", "I've started going to salsa classes.", "Salsa darslariga qatnay boshladim."),
      w("🩰", "dance lessons", "ˈdɑːns ˌlesnz|daans lesnz", "ibora", "Raqs darslari", "Classes where you learn to dance.", "I had dance lessons at school.", "Maktabda raqs darslarida qatnashganman."),
      w("🎤", "singing lessons", "ˈsɪŋɪŋ ˌlesnz|singing lesnz", "ibora", "Qo'shiqchilik darslari", "Classes where you learn to sing.", "She's having singing lessons this year.", "U bu yil qo'shiqchilik darslariga qatnayapti."),
      w("🤘", "rock concert", "ˈrɒk ˌkɒnsət|rok konsat", "ibora", "Rok kontserti", "A concert of loud guitar music.", "Have you ever been to a rock concert?", "Hech rok kontsertiga borganmisiz?"),
      w("🎼", "classical music", "ˌklæsɪkl ˈmjuːzɪk|klesikl myuuzik", "ibora", "Mumtoz musiqa", "Serious music by composers like Mozart.", "His classical music fans say this is amazing.", "Uning mumtoz musiqa muxlislari buni ajoyib deyishadi."),
      w("🎷", "jazz", "dʒæz|jez", "ot", "Jaz", "A kind of music with a strong rhythm, from the USA.", "I like pop music, rock and jazz.", "Pop, rok va jaz musiqasini yoqtiraman."),
      w("🎙️", "opera", "ˈɒprə|opra", "ot", "Opera", "A play where all the words are sung.", "I've never been to the opera.", "Hech qachon operaga bormaganman."),
      w("🎬", "stage", "steɪdʒ|steyj", "ot", "Sahna", "The place in a theatre where actors perform.", "The singer walked onto the stage.", "Qo'shiqchi sahnaga chiqdi."),
      w("🏟️", "concert hall", "ˈkɒnsət ˌhɔːl|konsat hool", "ibora", "Kontsert zali", "A big building for concerts.", "The new concert hall has two thousand seats.", "Yangi kontsert zalida ikki ming o'rindiq bor."),
      w("👥", "choir", "ˈkwaɪə|kwaya", "ot", "Xor", "A group of people who sing together.", "The school choir is going to sing tonight.", "Maktab xori bugun kechqurun kuylaydi."),
    ],
  },
];

const TEXT = `MEET MALIKA — A LIFE IN ART
Malika is twenty-six and she lives in Bukhara. She has been an artist since she was a child.
«My father is a painter, so I've always had paints and pencils at home,» she says. She has had drawing lessons and painting lessons, but she has never studied at an art university.
She has painted more than two hundred pictures so far. She has sold them in Uzbekistan, Turkey and Germany. She has had three exhibitions in Tashkent, but she hasn't had an exhibition abroad yet.
She has also tried other arts. She has sung in a choir and she has had dance lessons. «I wasn't very good at dancing,» she laughs. «But I've never stopped painting.»
Has she ever wanted a different job? «No, never. Painting is my life.»`;
const tf = trueFalse(TEXT);

export const A2_28_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("He's given concerts all over the world.", ["He's given concerts all over the world.", "He gave concerts all over the world.", "He's giving concerts all over the world.", "She's given concerts all over the world."]),
      listen("He hasn't seen the written music.", ["He hasn't seen the written music.", "He has seen the written music.", "He didn't see the written music.", "He hasn't seen the right music."]),
      listen("He's sold them all over the world.", ["He's sold them all over the world.", "He sold them all over the world.", "He's told them all over the world.", "He's sold them all around the world."]),
      listen("Thousands of people have watched her.", ["Thousands of people have watched her.", "Thousands of people watched her.", "Hundreds of people have watched her.", "Thousands of people have watched him."]),
      listen("Have you ever been to the opera?", ["Have you ever been to the opera?", "Have you ever gone to the opera?", "Did you ever go to the opera?", "Have you never been to the opera?"]),
      listen("I've never played in a band.", ["I've never played in a band.", "I never played in a band.", "I've ever played in a band.", "I've never played in the band."]),
      listen("instrument", ["instrument", "instruments", "investment", "instruction"]),
      listen("exhibition", ["exhibition", "expedition", "exhibitions", "education"]),
      listen("choir", ["choir", "chair", "quiet", "core"]),
      listen("gallery", ["gallery", "galleries", "salary", "celery"]),
    ],
  },
  {
    title: "Nobuyuki Tsujii",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to a text about a famous pianist. Answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("12.1"))("What was special about Nobuyuki Tsujii when he was born?", ["He was born blind.", "He was born in a concert hall.", "He was born in the USA.", "His parents were pianists."]),
      hearing(track("12.1"))("How old was he when he started playing on a toy piano?", ["Two", "Four", "Twelve", "Twenty"]),
      hearing(track("12.1"))("When did he begin learning the piano?", ["Two years later", "At the age of twelve", "In his twenties", "Ten years later"]),
      hearing(track("12.1"))("Where did he give his first big concert?", ["In Tokyo", "In London", "In New York", "In Paris"]),
      hearingTwo(track("12.1"))("Which TWO things has he done?", ["He has won many prizes.", "He has written music for film and TV."], ["He has seen the written music.", "He has opened a music school."]),
      hearing(track("12.1"))("How has he learnt difficult pieces of music?", ["Only through sound", "From his teacher's notes", "From books", "He hasn't learnt them."]),
    ],
  },
  {
    title: "Present perfect",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct answer.",
    questions: [
      say("I ___ been to a rock concert.", ["'ve", "'s", "am", "did"]),
      say("She ___ won many prizes.", ["has", "have", "is", "did"]),
      say("___ you ever seen a musical?", ["Have", "Has", "Did", "Are"]),
      say("He has ___ concerts all over the world.", ["given", "gave", "give", "giving"]),
      say("I've never ___ the opera.", ["been to", "be to", "was to", "went to"]),
      say("They ___ visited Brazil.", ["haven't", "hasn't", "don't", "didn't have"]),
      say("Has she ever played in a band? — No, she ___.", ["hasn't", "doesn't", "didn't", "haven't"]),
      say("Have you ever had singing lessons? — Yes, I ___.", ["have", "had", "did", "has"]),
      say("We've ___ written two books.", ["already", "yet", "ever", "since"]),
      say("I haven't finished it ___.", ["yet", "already", "ever", "never"]),
    ],
  },
  {
    title: "Music, art and dance",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Three people talk about music and the arts. Listen and answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("12.4"))("What has the first speaker always wanted to do?", ["Play in a band", "Sing in a choir", "Paint pictures", "Dance salsa"]),
      hearingTwo(track("12.4"))("Which TWO kinds of music does the first speaker like?", ["Rock", "Jazz"], ["Classical music", "Opera"]),
      hearing(track("12.4"))("What is the first speaker going to do next week?", ["Go to their first classical music concert", "Go to a music festival", "Play in a band", "Buy an instrument"]),
      hearing(track("12.4"))("Why has the second speaker had lots of drawing and painting lessons?", ["Their parents are artists.", "They study art at university.", "They work in a gallery.", "They want to be a teacher."]),
      hearing(track("12.4"))("What has the second speaker started but not finished?", ["Two or three books", "A painting", "A song", "An exhibition"]),
      hearing(track("12.4"))("Why did the third speaker stop dance lessons at school?", ["They weren't very good.", "They were too expensive.", "They didn't like the teacher.", "They moved to a big city."]),
      hearing(track("12.4"))("What classes does the third speaker go to now?", ["Salsa classes", "Singing lessons", "Painting lessons", "Piano lessons"]),
    ],
  },
  {
    title: "Go, see, play, have",
    skill: "Listening",
    kind: "listengap",
    instructions: "Listen to phrases about free time. Choose the correct word for each one.",
    questions: [
      gaps(track("12.5"), [
        ["go to a music ___", "festival", "lesson", "band"],
        ["go to a ___ class", "salsa", "piano", "drawing"],
        ["go to art ___", "galleries", "lessons", "bands"],
        ["go to a rock ___", "concert", "festival", "band"],
        ["go to the ___", "opera", "musical", "band"],
        ["see a ___", "play", "band", "lesson"],
        ["play the ___", "guitar", "piano", "drums"],
        ["play in a ___", "band", "choir", "concert"],
        ["have music ___", "lessons", "classes", "concerts"],
        ["have ___ lessons", "singing", "salsa", "opera"],
      ]),
    ],
  },
  {
    title: "A life in art",
    skill: "Reading",
    kind: "truefalse",
    instructions: "Read the text. Are the sentences true or false?",
    questions: [
      tf("Malika lives in Bukhara.", true),
      tf("Her mother is a painter.", false, "Her father is a painter."),
      tf("She has studied at an art university.", false, "She has never studied at an art university."),
      tf("She has painted more than two hundred pictures.", true),
      tf("She has sold pictures in three countries.", true, "Uzbekistan, Turkey and Germany."),
      tf("She has had an exhibition abroad.", false, "She hasn't had an exhibition abroad yet."),
      tf("She has had three exhibitions in Tashkent.", true),
      tf("She has sung in a choir.", true),
      tf("She was very good at dancing.", false, "«I wasn't very good at dancing.»"),
      tf("She has often wanted a different job.", false, "«No, never.»"),
    ],
  },
  {
    title: "Past participles",
    skill: "Grammar",
    kind: "fill",
    instructions: "Write the present perfect form of the verb in brackets.",
    questions: written([
      ["I ___ to a music festival. (be)", "'ve been|have been"],
      ["She ___ many prizes. (win)", "'s won|has won"],
      ["We ___ that musical twice. (see)", "'ve seen|have seen"],
      ["He ___ the piano since he was two. (play)", "'s played|has played"],
      ["They ___ in a band. (never / play)", "'ve never played|have never played"],
      ["I ___ singing lessons. (have)", "'ve had|have had"],
      ["She ___ two books so far. (write)", "'s written|has written"],
      ["Have you ever ___ salsa? (dance)", "danced"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("I have *saw that musical.", "Past participle: seen."),
      mistake("She *have won many prizes.", "she → has."),
      mistake("*Did you ever been to the opera?", "Have you ever been…?"),
      mistake("He has *wrote music for films.", "Past participle: written."),
      mistake("I've *ever played in a band.", "Positive: I've played… / Negative: I've never played…"),
      mistake("Has she ever had dance lessons? — Yes, she *does.", "Short answer: Yes, she has."),
      mistake("We've been to Italy *two times.", "We usually say: twice."),
      mistake("I haven't finished it *already.", "Negative: yet."),
      mistake("They have *went to the concert hall.", "Past participle: gone (or been)."),
      mistake("He's played the piano *for he was two.", "since + a point in time."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "Have you ever been to the opera?",
      "I've never played in a band.",
      "He has given concerts all over the world.",
      "She has won many prizes.",
      "I've always wanted to dance.",
      "We've seen all the big musicals.",
      "Have you ever had singing lessons?",
      "I haven't been to a classical music concert.",
      "He's written music for film and TV.",
      "I've started going to salsa classes.",
    ]),
  },
  {
    title: "Find the pairs",
    skill: "Matching",
    kind: "match",
    instructions: "Match the words.",
    questions: pairs([
      ["be|been", "see|seen", "write|written", "win|won"],
      ["give|given", "go|gone", "sing|sung", "have|had"],
      ["play|the piano", "sing|in a choir", "go to|a music festival", "have|dance lessons"],
      ["Have you ever…?|Yes, I have.", "Has he ever…?|No, he hasn't.", "Have they ever…?|Yes, they have.", "Has she ever…?|No, she hasn't."],
      ["once|one time", "twice|two times", "several times|more than two times", "never|not at any time"],
    ]),
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself. Stress the past participle: «He's GIVen concerts».",
    questions: phrases([
      "He's given concerts all over the world.",
      "He hasn't seen the written music.",
      "Have you ever been to the opera?",
      "I've never played in a band.",
      "I've always wanted to dance.",
      "She has won many prizes.",
      "instrument",
      "exhibition",
      "achievement",
      "choir",
    ]),
  },
];
