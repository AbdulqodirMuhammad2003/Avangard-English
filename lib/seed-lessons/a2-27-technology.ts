/**
 * A2, 27-dars — «Texnologiya va yordam». Texnologiya so'zlari, kuchli
 * sifatlar (tiny, delighted), yordam taklif qilish.
 * Grammatika: kuchli sifatlar va «really» (very tiny emas, really tiny);
 * taklif: Shall I…? / I'll… / Let me… / Would you like me to…?
 * Navigate A2, 11.3–11.4 asosida: tinglash mashqlarida kitob treklari
 * (yopiq ombordan), savollar va matnlar o'zimizniki. Mashqlar inglizcha.
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
  reading,
  say,
  sentences,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-a2/audio/${n}.mp3`;

export const A2_27_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("📱", "smartphone", "ˈsmɑːtfəʊn|smaatfoun", "ot", "Smartfon", "A mobile phone that can use the internet and apps.", "I have a smartphone, so I can use the internet when I'm out.", "Smartfonim bor, shuning uchun tashqarida ham internetdan foydalana olaman."),
      w("⬇️", "download", "ˌdaʊnˈləʊd|daunloud", "fe'l", "Yuklab olmoq", "Copy something from the internet to your computer or phone.", "I often download apps for my phone.", "Telefonimga tez-tez ilovalar yuklab olaman."),
      w("🌐", "website", "ˈwebsaɪt|websayt", "ot", "Veb-sayt", "A place on the internet with pages of information.", "The school has a new website.", "Maktabning yangi veb-sayti bor."),
      w("📧", "email address", "ˈiːmeɪl əˌdres|iimeyl adres", "ibora", "Elektron pochta manzili", "The address you use to get emails.", "Can I have your email address?", "Elektron pochta manzilingizni bera olasizmi?"),
      w("📶", "wireless", "ˈwaɪələs|wayalas", "sifat", "Simsiz", "Working without wires.", "The café has free wireless internet.", "Kafeda bepul simsiz internet bor."),
      w("👆", "touchscreen", "ˈtʌtʃskriːn|tachskriin", "ot", "Sensorli ekran", "A screen you use with your finger.", "My laptop has a touchscreen.", "Noutbukimda sensorli ekran bor."),
      w("🎧", "earphones", "ˈɪəfəʊnz|iafounz", "ot", "Quloqchin", "Small things you put in your ears to listen to music.", "I always take my earphones on the bus.", "Avtobusga doim quloqchinimni olaman."),
      w("⬆️", "upload", "ˌʌpˈləʊd|aploud", "fe'l", "Yuklamoq (internetga)", "Put photos or files on the internet.", "She's going to upload the photos tonight.", "U bugun kechqurun rasmlarni internetga yuklaydi."),
      w("📰", "news website", "ˈnjuːz ˌwebsaɪt|nyuuz websayt", "ibora", "Yangiliklar sayti", "A website with the news.", "I check my favourite news website every day.", "Har kuni sevimli yangiliklar saytimni ko'raman."),
      w("🔎", "search engine", "ˈsɜːtʃ ˌendʒɪn|syorch enjin", "ibora", "Qidiruv tizimi", "A website that helps you find things on the internet.", "Type the word into a search engine.", "So'zni qidiruv tizimiga yozing."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🥳", "delighted", "dɪˈlaɪtɪd|dilaytid", "sifat", "Juda xursand", "Very, very happy.", "I was really delighted to get the job!", "Ishga kirganimdan juda xursand bo'ldim!"),
      w("🐜", "tiny", "ˈtaɪni|tayni", "sifat", "Juda kichkina, mitti", "Very, very small.", "My car is really tiny!", "Mashinam juda kichkina!"),
      w("🏆", "excellent", "ˈeksələnt|eksalant", "sifat", "A'lo, ajoyib", "Very, very good.", "She's really excellent at tennis.", "U tennisni a'lo darajada o'ynaydi."),
      w("😩", "exhausted", "ɪɡˈzɔːstɪd|igzoostid", "sifat", "Juda charchagan, holdan toygan", "Very, very tired.", "After the marathon I was exhausted.", "Marafondan keyin holdan toydim."),
      w("🍽️", "starving", "ˈstɑːvɪŋ|staaving", "sifat", "Juda och", "Very, very hungry.", "Is dinner ready? I'm starving!", "Kechki ovqat tayyormi? Juda och qoldim!"),
      w("🤩", "thrilled", "θrɪld|srild", "sifat", "Juda hayajonlangan va xursand", "Very excited and happy.", "The children were thrilled with their presents.", "Bolalar sovg'alaridan juda xursand bo'lishdi."),
      w("😡", "furious", "ˈfjʊəriəs|fyuarias", "sifat", "Qattiq g'azablangan", "Very, very angry.", "My boss was furious when I was late.", "Kech qolganimda boshlig'im qattiq g'azablandi."),
      w("🧐", "fascinating", "ˈfæsɪneɪtɪŋ|fesineyting", "sifat", "Juda qiziqarli, maftunkor", "Very, very interesting.", "The museum was fascinating.", "Muzey juda qiziqarli edi."),
      w("🧽", "filthy", "ˈfɪlθi|filsi", "sifat", "Juda iflos", "Very, very dirty.", "After the football match my shoes were filthy.", "Futbol o'yinidan keyin poyabzalim juda iflos edi."),
      w("🐘", "enormous", "ɪˈnɔːməs|inoomas", "sifat", "Ulkan, juda katta", "Very, very big.", "They live in an enormous house.", "Ular ulkan uyda yashaydi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🙋", "offer", "ˈɒfə|ofa", "fe'l, ot", "Taklif qilmoq; taklif", "Say that you are happy to do something for someone.", "Thank you for your offer of help.", "Yordam taklifingiz uchun rahmat."),
      w("📝", "take notes", "ˌteɪk ˈnəʊts|teyk nouts", "ibora", "Qayd qilib bormoq", "Write down the important things you hear.", "I'll take notes so we don't forget.", "Unutmaslik uchun qayd qilib boraman."),
      w("✋", "I'll do it", "ˌaɪl ˈduː ɪt|ayl duu it", "ibora", "Men qilaman", "You say this to offer help.", "Who can buy the milk? — I'll do it!", "Sutni kim oladi? — Men olaman!"),
      w("🤲", "let me help", "ˌlet mi ˈhelp|let mi help", "ibora", "Yordam beray", "You say this to offer help.", "Let me help you with that bag.", "Sumkangizni ko'tarishga yordam beray."),
      w("✍️", "write down", "ˌraɪt ˈdaʊn|rayt daun", "ibora", "Yozib olmoq", "Write something on paper so you remember it.", "Shall I write down your number?", "Raqamingizni yozib olaymi?"),
      w("🤝", "give a hand", "ˌɡɪv ə ˈhænd|giv a hend", "ibora", "Qo'l cho'zmoq, yordamlashmoq", "Help someone.", "Can you give a hand with the chairs?", "Stullarga yordamlashib yuborasizmi?"),
      w("😇", "helpful", "ˈhelpfl|helpfl", "sifat", "Foydali, yordami tegadigan", "Useful; ready to help.", "Thank you. That's very helpful.", "Rahmat. Bu juda foydali."),
      w("💡", "suggestion", "səˈdʒestʃən|sajeschan", "ot", "Taklif, maslahat", "An idea that you give to someone.", "Do you have a suggestion for the party?", "Ziyofat uchun biror taklifingiz bormi?"),
      w("📌", "noticeboard", "ˈnəʊtɪsbɔːd|noutisbood", "ot", "E'lonlar taxtasi", "A board on a wall for information.", "The list is on the noticeboard.", "Ro'yxat e'lonlar taxtasida."),
      w("🙏", "would you like me to", "wʊd ju ˌlaɪk mi tə|wud yu layk mi ta", "ibora", "…ishimni xohlaysizmi?", "A polite way to offer help.", "Would you like me to ask them?", "Ulardan so'rab berishimni xohlaysizmi?"),
    ],
  },
];

const ARTICLE = `THE STREET HELPERS APP
Last month Kamola, a student from Samarkand, made a small app for her street. It's called «Street Helpers».
It's really simple. You download it to your smartphone and write what you need — for example, «I need someone to fix my bike» or «Can someone give me a hand with my shopping?». Your neighbours can see it and offer to help. They write «I'll do it!» or «Shall I come at six?».
At first only ten people used it. Now there are more than four hundred! An elderly man uses it to find someone to read his letters. A busy mum uses it when she needs someone to look after her children.
«I was really delighted,» says Kamola. «I thought it was a tiny idea, but people say it's very helpful.» Next year she's going to upload a new version with a noticeboard for the whole town.`;
const read = reading(ARTICLE);

export const A2_27_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("Shall I write that down?", ["Shall I write that down?", "Should I write that down?", "Shall I write it down?", "Shall we write that down?"]),
      listen("I'll take notes so we don't forget.", ["I'll take notes so we don't forget.", "I take notes so we don't forget.", "I'll take notes so we won't forget.", "I'll make notes so we don't forget."]),
      listen("Let me help you with that.", ["Let me help you with that.", "Let me help you with this.", "Let's help you with that.", "Let me help with that."]),
      listen("Would you like me to ask them?", ["Would you like me to ask them?", "Would you like to ask them?", "Do you want me to ask them?", "Would you like me to ask him?"]),
      listen("My car is really tiny!", ["My car is really tiny!", "My car is very tiny!", "My car is really tidy!", "My cat is really tiny!"]),
      listen("I was really delighted!", ["I was really delighted!", "I was very delighted!", "I'm really delighted!", "I was really excited!"]),
      listen("download", ["download", "downtown", "upload", "downloads"]),
      listen("exhausted", ["exhausted", "excited", "exhaust", "existed"]),
      listen("furious", ["furious", "curious", "famous", "various"]),
      listen("enormous", ["enormous", "nervous", "anonymous", "normal"]),
    ],
  },
  {
    title: "How I use technology",
    skill: "Listening",
    kind: "listengap",
    instructions: "Listen to five people talk about technology. Choose the correct word for each sentence.",
    questions: [
      gaps(track("11.6"), [
        ["I have a ___, so I can use the internet when I'm out.", "smartphone", "laptop", "tablet"],
        ["I often buy ___ for my phone.", "apps", "games", "music"],
        ["I take my ___ everywhere, so I can work or study.", "tablet", "laptop", "smartphone"],
        ["I check the news every day on my favourite newspaper ___.", "website", "app", "blog"],
        ["I have ___ on my phone because I drive to lots of places for work.", "GPS", "maps", "music"],
      ]),
    ],
  },
  {
    title: "Strong adjectives",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the strong adjective with the same meaning.",
    questions: [
      say("very small = ___", ["tiny", "enormous", "filthy", "furious"]),
      say("very big = ___", ["enormous", "tiny", "excellent", "starving"]),
      say("very tired = ___", ["exhausted", "delighted", "thrilled", "filthy"]),
      say("very hungry = ___", ["starving", "exhausted", "furious", "tiny"]),
      say("very angry = ___", ["furious", "delighted", "fascinating", "starving"]),
      say("very dirty = ___", ["filthy", "tiny", "furious", "thrilled"]),
      say("very good = ___", ["excellent", "awful", "filthy", "tiny"]),
      say("very bad = ___", ["awful", "excellent", "delighted", "enormous"]),
      say("very interesting = ___", ["fascinating", "furious", "exhausted", "tiny"]),
      say("We say «really tiny», not «___ tiny».", ["very", "really", "so", "absolutely"], "With strong adjectives we use «really», not «very»."),
    ],
  },
  {
    title: "Really!",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to five short conversations. Answer the questions.",
    questions: [
      hearing(track("11.10"))("1. How did the speaker feel about the job?", ["Really delighted", "Really exhausted", "Really furious", "A bit sad"]),
      hearing(track("11.10"))("2. What was the weather like on holiday?", ["Really lovely", "Really awful", "Very cold", "Very rainy"]),
      hearing(track("11.10"))("3. Why is she really excellent at tennis?", ["She always wins.", "She plays every day.", "She has a good teacher.", "She's very tall."]),
      hearing(track("11.10"))("4. What happened to the speaker?", ["They failed their driving test.", "They lost their job.", "They broke their phone.", "They missed the bus."]),
      hearing(track("11.10"))("5. Why are they going to use the other person's car?", ["The speaker's car is really tiny.", "The speaker's car is filthy.", "The speaker's car is broken.", "The speaker hasn't got a car."]),
    ],
  },
  {
    title: "Offering help",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to two conversations in a class. Answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("11.11"))("Who did Ryan and Jan make a list of questions for?", ["Dr Pedersen", "Their teacher", "Janek", "The exam office"]),
      hearing(track("11.11"))("How many main questions are on the list?", ["Five", "Three", "Ten", "Two"]),
      hearing(track("11.11"))("Who is going to give the list to Dr Pedersen?", ["Shaz", "Ryan", "Jan", "Janek"]),
      hearing(track("11.11"))("Why does Janek offer to help with the rubbish in the park?", ["He goes to the park every day anyway.", "He lives next to the park.", "He likes cleaning.", "It's a small park."]),
      hearingTwo(track("11.11"))("Which TWO are true?", ["Someone is going to take notes.", "Someone needs to paint the walls of the school."], ["Nobody wants to help in the park.", "The park is very small."]),
      hearing(track("11.11"))("Who could probably paint the walls?", ["A classmate's husband and his brother", "Janek", "The teacher", "The students"]),
    ],
  },
  {
    title: "The Street Helpers app",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the text and answer the questions.",
    questions: [
      read("Who made the app?", ["A student from Samarkand", "A teacher from Tashkent", "A big company", "An elderly man"]),
      read("Who was the app for at first?", ["People in her street", "Students", "Her family", "The whole country"]),
      read("What do you do first?", ["Download it to your smartphone", "Go to the noticeboard", "Call Kamola", "Buy a ticket"]),
      read("How do neighbours offer help?", ["They write «I'll do it!» or «Shall I come at six?»", "They phone Kamola.", "They send an email.", "They go to the noticeboard."]),
      read("How many people used it at first?", ["Ten", "Four hundred", "Forty", "One hundred"]),
      read("How many people use it now?", ["More than four hundred", "Ten", "About forty", "Exactly four hundred"]),
      read("What does the elderly man need help with?", ["Reading his letters", "His shopping", "His bike", "His children"]),
      read("How did Kamola feel?", ["Really delighted", "Exhausted", "Furious", "A bit sad"]),
      read("What did she think about her idea at first?", ["It was a tiny idea.", "It was an enormous idea.", "It was a bad idea.", "It was an expensive idea."]),
      read("What is she going to add next year?", ["A noticeboard for the whole town", "A shop", "Games", "A news website"]),
    ],
  },
  {
    title: "Offers",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct answer.",
    questions: [
      say("___ I open the window? — Yes, please.", ["Shall", "Will", "Do", "Would"]),
      say("This bag is really heavy. — ___ carry it for you.", ["I'll", "I", "Shall I", "I'm"]),
      say("Let ___ help you.", ["me", "I", "my", "mine"]),
      say("Would you like me ___ them?", ["to ask", "ask", "asking", "asked"]),
      say("The phone's ringing! — Don't worry, I'll ___ it.", ["answer", "to answer", "answering", "answers"]),
      say("Shall I ___ that down?", ["write", "to write", "writing", "wrote"]),
      say("We need someone to buy the food. — I'll ___ it!", ["do", "make", "doing", "to do"]),
      say("___ you like me to call a taxi?", ["Would", "Shall", "Will", "Do"]),
      say("I'm starving! — ___ I make you a sandwich?", ["Shall", "Would", "Let", "Will"]),
      say("Thanks, that's very ___.", ["helpful", "help", "helping", "helped"]),
    ],
  },
  {
    title: "Make an offer",
    skill: "Grammar",
    kind: "fill",
    instructions: "Write the missing word.",
    questions: written([
      ["___ I write that down?", "Shall"],
      ["I'll take ___ so we don't forget.", "notes"],
      ["___ me help you with that.", "Let"],
      ["Would you like me ___ ask them?", "to"],
      ["It's cold in here. — ___ close the window. (I will — short form)", "I'll"],
      ["Can you give me a ___ with these boxes?", "hand"],
      ["I'm really ___. I didn't have lunch. (very hungry)", "starving"],
      ["Their house is ___. It has twelve bedrooms! (very big)", "enormous"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("*Will I write that down?", "Offer as a question: Shall I…?"),
      mistake("Would you like me *ask them?", "Would you like me to ask them?"),
      mistake("Let *I help you with that.", "Let me help you."),
      mistake("I'll *to take notes so we don't forget.", "I'll + base verb: I'll take notes."),
      mistake("My car is *very tiny!", "Strong adjectives: really tiny, not very tiny."),
      mistake("I was very, *very delighted.", "With strong adjectives use «really»."),
      mistake("Shall I *writing that down?", "Shall I + base verb: write."),
      mistake("Thank you. That's very *help.", "Adjective: helpful."),
      mistake("I often *upload apps for my phone.", "Get apps from the internet: download."),
      mistake("Type the word into a search *machine.", "search engine."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "Shall I write that down?",
      "I'll take notes so we don't forget.",
      "Let me help you with that.",
      "Would you like me to ask them?",
      "Why don't I give him the list then?",
      "My car is really tiny!",
      "I was really delighted to get the job.",
      "I check the news on my favourite website.",
      "I often download apps for my phone.",
      "Can you give me a hand with these chairs?",
    ]),
  },
  {
    title: "Find the pairs",
    skill: "Matching",
    kind: "match",
    instructions: "Match the words.",
    questions: pairs([
      ["very small|tiny", "very big|enormous", "very tired|exhausted", "very hungry|starving"],
      ["very angry|furious", "very dirty|filthy", "very good|excellent", "very interesting|fascinating"],
      ["Shall I|write that down?", "I'll|take notes.", "Let me|help you.", "Would you like me|to ask them?"],
      ["download|an app", "upload|photos", "search|engine", "email|address"],
      ["It's so heavy!|I'll carry it.", "I'm starving!|Shall I make you a sandwich?", "I can't find my keys.|Let me help you look.", "It's dark in here.|Shall I turn on the light?"],
    ]),
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself. Stress the strong adjective: «really TIny».",
    questions: phrases([
      "Shall I write that down?",
      "I'll take notes so we don't forget.",
      "Let me help you with that.",
      "Would you like me to ask them?",
      "My car is really tiny!",
      "I was really delighted!",
      "exhausted",
      "furious",
      "fascinating",
      "enormous",
    ]),
  },
];
