/**
 * A2, 29-dars — «Kino olami». Film turlari, kinoteatr, kinofestival.
 * Grammatika: present perfect va past simple — tajriba (have you ever…?)
 * va aniq vaqt (last summer, a few months ago).
 * Navigate A2, 12.2 asosida: tinglash mashqlarida kitob treklari (yopiq
 * ombordan), savollar va matnlar o'zimizniki. Mashqlar inglizcha.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  hearing,
  hearingTwo,
  listen,
  mistake,
  pairs,
  phrases,
  reading,
  say,
  sentences,
  slots,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-a2/audio/${n}.mp3`;

export const A2_29_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("👻", "horror film", "ˈhɒrə ˌfɪlm|hora film", "ibora", "Qo'rqinchli film", "A film that makes you feel scared.", "I never watch a horror film alone.", "Qo'rqinchli filmni hech qachon yolg'iz ko'rmayman."),
      w("💕", "romantic film", "rəʊˌmæntɪk ˈfɪlm|roumentik film", "ibora", "Romantik film", "A film that tells a love story.", "Titanic is a famous romantic film.", "«Titanik» — mashhur romantik film."),
      w("😂", "comedy", "ˈkɒmədi|komadi", "ot", "Komediya", "A funny film or play.", "We laughed a lot at the comedy.", "Komediyada ko'p kuldik."),
      w("🎭", "drama", "ˈdrɑːmə|draama", "ot", "Drama", "A serious film or play about people's lives.", "My favourite film is a drama.", "Sevimli filmim — drama."),
      w("💥", "action film", "ˈækʃn ˌfɪlm|ekshn film", "ibora", "Jangari film", "A film with fights and fast cars.", "James Bond is a famous action film hero.", "Jeyms Bond — jangari filmlarning mashhur qahramoni."),
      w("🚀", "science fiction", "ˌsaɪəns ˈfɪkʃn|sayans fikshn", "ibora", "Ilmiy fantastika", "Stories about the future or other planets.", "Avatar is a science fiction film.", "«Avatar» — ilmiy fantastik film."),
      w("🖥️", "animation", "ˌænɪˈmeɪʃn|enimeyshn", "ot", "Animatsion film", "A film made with drawings or computers, not real people.", "Shrek is a famous animation.", "«Shrek» — mashhur animatsion film."),
      w("🎥", "documentary", "ˌdɒkjuˈmentri|dokyumentri", "ot", "Hujjatli film", "A film with facts about real life.", "We watched a documentary about the ocean.", "Okean haqida hujjatli film ko'rdik."),
      w("🐭", "cartoon", "kɑːˈtuːn|kaatuun", "ot", "Multfilm", "A short funny film with drawings, often for children.", "The children watch a cartoon every morning.", "Bolalar har tong multfilm ko'radi."),
      w("🔪", "thriller", "ˈθrɪlə|srila", "ot", "Triller", "An exciting film, often about crime.", "The thriller was so exciting that I didn't move.", "Triller shunchalik hayajonli ediki, qimirlamadim."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🎬", "director", "dəˈrektə|darekta", "ot", "Rejissyor", "The person who makes a film and tells the actors what to do.", "The director has won three prizes.", "Rejissyor uchta mukofot yutgan."),
      w("👥", "audience", "ˈɔːdiəns|oodians", "ot", "Tomoshabinlar", "The people who watch a film, play or concert.", "The audience loved the film.", "Tomoshabinlarga film juda yoqdi."),
      w("👏", "clap", "klæp|klep", "fe'l", "Qarsak chalmoq", "Hit your hands together to show you liked something.", "People clap at the end of a good film.", "Yaxshi film oxirida odamlar qarsak chaladi."),
      w("🚶", "walk out", "ˌwɔːk ˈaʊt|wook aut", "ibora", "(Norozi bo'lib) chiqib ketmoq", "Leave a cinema or theatre before the end.", "The film was so bad that I wanted to walk out.", "Film shunchalik yomon ediki, chiqib ketgim keldi."),
      w("😴", "fall asleep", "ˌfɔːl əˈsliːp|fool asliip", "ibora", "Uxlab qolmoq", "Start to sleep.", "When the film is slow, I fall asleep.", "Film zerikarli bo'lsa, uxlab qolaman."),
      w("🎉", "festival", "ˈfestɪvl|festivl", "ot", "Festival", "A special event with many films, concerts or shows.", "Pavel is here for the Rio de Janeiro film festival.", "Pavel Rio-de-Janeyro kinofestivali uchun shu yerda."),
      w("🎞️", "scene", "siːn|siin", "ot", "Sahna, epizod", "One part of a film or play.", "The last scene was really sad.", "Oxirgi sahna juda qayg'uli edi."),
      w("📖", "plot", "plɒt|plot", "ot", "Syujet", "The story of a film or book.", "The plot was really boring.", "Syujet juda zerikarli edi."),
      w("⭐", "star in", "ˈstɑːr ɪn|staar in", "ibora", "Bosh rolni o'ynamoq", "Be one of the main actors in a film.", "Kate Winslet and Leonardo DiCaprio star in Titanic.", "«Titanik»da Keyt Uinslet va Leonardo Di Kaprio bosh rollarni o'ynaydi."),
      w("🏁", "ending", "ˈendɪŋ|ending", "ot", "Yakun, final", "The last part of a story.", "I didn't like the ending of the film.", "Filmning yakuni menga yoqmadi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("😱", "scary", "ˈskeəri|skeari", "sifat", "Qo'rqinchli", "Making you feel afraid.", "Dracula films are really scary.", "Drakula haqidagi filmlar juda qo'rqinchli."),
      w("🥹", "moving", "ˈmuːvɪŋ|muuving", "sifat", "Ta'sirli", "Making you feel strong emotions, often sad.", "It was a very moving story.", "Bu juda ta'sirli hikoya edi."),
      w("🤯", "gripping", "ˈɡrɪpɪŋ|griping", "sifat", "Qiziqarli, o'ziga tortadigan", "So exciting that you can't stop watching.", "The thriller was gripping from start to finish.", "Triller boshidan oxirigacha o'ziga tortdi."),
      w("🥱", "predictable", "prɪˈdɪktəbl|pridiktabl", "sifat", "Oldindan ma'lum, kutilgan", "You know what is going to happen.", "The plot was very predictable.", "Syujet juda oldindan ma'lum edi."),
      w("✨", "special effects", "ˌspeʃl ɪˈfekts|speshl ifekts", "ibora", "Maxsus effektlar", "Pictures and sounds made by computers in a film.", "The special effects in Avatar are amazing.", "«Avatar»dagi maxsus effektlar ajoyib."),
      w("🎵", "soundtrack", "ˈsaʊndtræk|saundtrek", "ot", "Saundtrek (filmdagi musiqa)", "The music from a film.", "I listen to the soundtrack of my favourite film.", "Sevimli filmimning saundtrekini tinglayman."),
      w("💬", "subtitles", "ˈsʌbtaɪtlz|sabtaytlz", "ot", "Subtitrlar", "Words at the bottom of the screen that translate what people say.", "I watch English films with subtitles.", "Inglizcha filmlarni subtitr bilan ko'raman."),
      w("🎟️", "box office", "ˈbɒks ˌɒfɪs|boks ofis", "ibora", "Kassa; kassa tushumi", "The place where you buy tickets; the money a film makes.", "The film made $2 billion at the box office.", "Film kassada 2 milliard dollar yig'di."),
      w("2️⃣", "sequel", "ˈsiːkwəl|siikwal", "ot", "Davomi (filmning)", "A film that continues the story of another film.", "The sequel is better than the first film.", "Davomi birinchi filmdan yaxshiroq."),
      w("🌟", "premiere", "ˈpremieə|premiea", "ot", "Premyera", "The first time a film is shown.", "The actors came to the premiere in London.", "Aktyorlar Londondagi premyeraga kelishdi."),
    ],
  },
];

const ARTICLE = `FILM CLUB REVIEW: «THE LAST TRAIN»
Have you ever seen a film that you wanted to leave after ten minutes? I have — and last Friday I almost walked out of «The Last Train».
The film is a thriller and it stars two famous actors. I've seen them in lots of action films, so I was excited. But the plot was really predictable and the first hour was slow. The man next to me fell asleep!
Then everything changed. The last scene was gripping, and the ending was really moving. When the film finished, the audience clapped.
The special effects aren't great, but the soundtrack is excellent. The director has made five films, and this is his best.
So, don't walk out early — wait for the ending! There's going to be a sequel next year.`;
const read = reading(ARTICLE);

export const A2_29_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("I've opened the door.", ["I've opened the door.", "I opened the door.", "I've closed the door.", "I open the door."]),
      listen("She ran a marathon.", ["She ran a marathon.", "She's run a marathon.", "She runs a marathon.", "He ran a marathon."]),
      listen("We've met him.", ["We've met him.", "We met him.", "We've met them.", "We meet him."]),
      listen("I watched Star Wars twice last month.", ["I watched Star Wars twice last month.", "I've watched Star Wars twice this month.", "I watched Star Wars twice this month.", "I watched Star Wars once last month."]),
      listen("Have you ever left the cinema early?", ["Have you ever left the cinema early?", "Did you ever leave the cinema early?", "Have you ever left the cinema late?", "Have you never left the cinema early?"]),
      listen("I walked out once.", ["I walked out once.", "I've walked out once.", "I walked out twice.", "I walk out once."]),
      listen("documentary", ["documentary", "documentaries", "document", "dictionary"]),
      listen("audience", ["audience", "audio", "audiences", "obedience"]),
      listen("thriller", ["thriller", "thrilled", "killer", "filler"]),
      listen("subtitles", ["subtitles", "subtitle", "titles", "subjects"]),
    ],
  },
  {
    title: "Types of film",
    skill: "Listening",
    kind: "listenmatch",
    instructions: "Listen to eight descriptions of films. Write the type of film for each one.",
    questions: [
      slots(track("12.6"), [
        ["1. You don't want to look because they're scary.", "horror films;horror film;horror"],
        ["2. They tell a love story.", "romantic films;romantic film;romantic"],
        ["3. You laugh at them because they're funny.", "comedies;comedy"],
        ["4. A story about people's lives, sometimes very sad.", "dramas;drama"],
        ["5. People fight and drive fast cars.", "action films;action film;action"],
        ["6. Spaceships, other planets or the future.", "science fiction films;science fiction film;science fiction"],
        ["7. No real people — made with computers.", "animations;animation"],
        ["8. People sing and dance.", "musicals;musical"],
      ]),
    ],
  },
  {
    title: "Have you ever left the cinema early?",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Four people answer the question. Listen and answer. Some questions have TWO correct answers.",
    questions: [
      hearing(track("12.9"))("Why does the first speaker leave in the middle of bad films?", ["Life's too short.", "The seats are uncomfortable.", "The cinema is too cold.", "They have to go to work."]),
      hearing(track("12.9"))("What happened at the end of the terrible film for the second speaker?", ["They were the only person left.", "Everyone clapped.", "They fell asleep.", "They walked out."]),
      hearing(track("12.9"))("What does the second speaker think?", ["You have to watch the whole film.", "You can leave after ten minutes.", "Films are too long.", "Cinemas are too expensive."]),
      hearingTwo(track("12.9"))("Which TWO things are true about the third speaker?", ["They walked out once.", "The film was really boring."], ["It was a rainy day.", "They've walked out many times."]),
      hearing(track("12.9"))("When did the third speaker walk out?", ["Last summer", "Last winter", "A few months ago", "Last week"]),
      hearing(track("12.9"))("What happens to the fourth speaker in the cinema?", ["They fall asleep.", "They walk out.", "They talk on the phone.", "They eat a lot."]),
      hearing(track("12.9"))("Why doesn't the fourth speaker walk out?", ["It's rude to other people.", "Tickets are expensive.", "They love all films.", "They're always too tired."]),
    ],
  },
  {
    title: "Present perfect or past simple?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct answer.",
    questions: [
      say("I ___ that film last week.", ["saw", "'ve seen", "see", "have saw"], "last week = a finished time → past simple."),
      say("___ you ever been to a film festival?", ["Have", "Did", "Were", "Do"]),
      say("Yes, I have. I ___ to Cannes in 2019.", ["went", "'ve been", "go", "have gone"]),
      say("She ___ a marathon three times in her life.", ["has run", "ran", "runs", "run"]),
      say("When ___ you meet him?", ["did", "have", "has", "were"]),
      say("I've ___ Star Wars twice this month.", ["watched", "watch", "watching", "to watch"]),
      say("A few months ago I ___ to see a terrible film.", ["went", "'ve been", "have gone", "go"]),
      say("He ___ never left the cinema early.", ["has", "did", "was", "is"]),
      say("Have you seen his latest film? — Yes, I ___ it last night.", ["saw", "'ve seen", "see", "seen"]),
      say("We ___ him at the party yesterday.", ["met", "'ve met", "meet", "have met"]),
    ],
  },
  {
    title: "At the film festival",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to an interview with two actors at a film festival. Answer the questions.",
    questions: [
      hearing(track("12.11"))("Where is the film festival?", ["In Rio de Janeiro", "In Cannes", "In London", "In Venice"]),
      hearing(track("12.11"))("How many times has Pavel been to Brazil before?", ["Twice", "Once", "Never", "Three times"]),
      hearing(track("12.11"))("When did Pavel come to Brazil for work?", ["Three years ago", "When he was a child", "Last year", "Last week"]),
      hearing(track("12.11"))("Has Wanda been to Rio before?", ["No, never.", "Yes, once.", "Yes, twice.", "She doesn't say."]),
      hearing(track("12.11"))("What is the name of their latest film?", ["Inbox Me", "Rio Nights", "The Last Train", "Star Wars"]),
      hearing(track("12.11"))("What did people in the cinema do at the end?", ["They stood up and clapped.", "They walked out.", "They fell asleep.", "They asked questions."]),
      hearing(track("12.11"))("What did someone tell Wanda last week?", ["It was their favourite film of the year.", "It was too long.", "It was very scary.", "It was predictable."]),
    ],
  },
  {
    title: "Film club review",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the text and answer the questions.",
    questions: [
      read("When did the writer see «The Last Train»?", ["Last Friday", "Last Saturday", "Last year", "Yesterday"]),
      read("What kind of film is it?", ["A thriller", "A comedy", "A horror film", "An animation"]),
      read("Why was the writer excited?", ["They've seen the actors in lots of action films.", "They love the director.", "It was a premiere.", "The tickets were free."]),
      read("What was the problem with the first hour?", ["It was slow and the plot was predictable.", "It was too scary.", "There were no subtitles.", "The sound was bad."]),
      read("What happened to the man next to the writer?", ["He fell asleep.", "He walked out.", "He clapped.", "He laughed."]),
      read("What was the last scene like?", ["Gripping", "Boring", "Funny", "Scary"]),
      read("What did the audience do at the end?", ["They clapped.", "They walked out.", "They fell asleep.", "They complained."]),
      read("What is excellent?", ["The soundtrack", "The special effects", "The first hour", "The plot"]),
      read("How many films has the director made?", ["Five", "Two", "Ten", "One"]),
      read("What is going to happen next year?", ["There's going to be a sequel.", "There's going to be a premiere in London.", "The director is going to stop making films.", "The film is going to be on TV."]),
    ],
  },
  {
    title: "Write the verb",
    skill: "Grammar",
    kind: "fill",
    instructions: "Write the verb in brackets in the present perfect or the past simple.",
    questions: written([
      ["I ___ that musical last year. (see)", "saw"],
      ["___ you ever been to a premiere? (have)", "Have"],
      ["She ___ in three films so far. (star)", "'s starred|has starred"],
      ["We ___ the cinema early last night. (leave)", "left"],
      ["He ___ never seen a horror film. (have)", "has|'s"],
      ["The audience ___ at the end of the film yesterday. (clap)", "clapped"],
      ["I ___ asleep in a lot of cinemas! (fall)", "'ve fallen|have fallen"],
      ["Two years ago they ___ a documentary about Bukhara. (make)", "made"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("I *have seen that film last week.", "last week = finished time → I saw."),
      mistake("*Did you ever been to a film festival?", "Have you ever been…?"),
      mistake("When *have you met him?", "When…? → past simple: When did you meet him?"),
      mistake("She has *ran a marathon.", "Past participle: run."),
      mistake("I've watched Star Wars twice *last month.", "Present perfect + this month; past simple + last month."),
      mistake("A few months ago I *have gone to see a terrible film.", "a few months ago → I went."),
      mistake("He's never *walk out of a film.", "Past participle: walked."),
      mistake("Have you seen it? — Yes, I *seen it yesterday.", "yesterday → past simple: saw."),
      mistake("The *audiences loved the film.", "The audience (one group)."),
      mistake("I watch English films with *subtitle.", "subtitles (plural)."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "Have you ever left the cinema early?",
      "I walked out once last summer.",
      "I've never walked out of a film.",
      "I've fallen asleep in a lot of cinemas.",
      "When the film finished, people clapped.",
      "A few months ago I went to see a terrible film.",
      "Have you visited Brazil before?",
      "I came here three years ago for work.",
      "Kate Winslet and Leonardo DiCaprio star in Titanic.",
      "The special effects are amazing.",
    ]),
  },
  {
    title: "Find the pairs",
    skill: "Matching",
    kind: "match",
    instructions: "Match the words.",
    questions: pairs([
      ["horror film|scary", "comedy|funny", "romantic film|a love story", "action film|fights and fast cars"],
      ["animation|made with computers", "documentary|facts about real life", "science fiction|the future and other planets", "musical|people sing and dance"],
      ["I've seen it|experience, no time", "I saw it yesterday|a finished time", "Have you ever…?|in your life", "When did you…?|a time in the past"],
      ["walk|out", "fall|asleep", "star|in", "box|office"],
      ["soundtrack|music from a film", "subtitles|words at the bottom of the screen", "sequel|the next film in the story", "premiere|the first time a film is shown"],
    ]),
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself.",
    questions: phrases([
      "Have you ever left the cinema early?",
      "Yes, I have. I walked out once.",
      "No, I haven't, but I've often wanted to.",
      "I've opened the door.",
      "She ran a marathon.",
      "I've watched Star Wars twice this month.",
      "documentary",
      "audience",
      "science fiction",
      "special effects",
    ]),
  },
];
