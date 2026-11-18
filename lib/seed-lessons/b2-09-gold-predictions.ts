/**
 * B2, 9-dars — «Gold, predictions and opinions». Oltin haqidagi maqola
 * (topic sentences bilan tez o'qish), ot yasovchi qo'shimchalar, ehtimollik
 * iboralari, balanced opinion essay, ish muhiti so'zlari.
 * Navigate B2, 3.3 + 3.4 + 3.5 asosida: tinglash mashqlarida kitob
 * treklari (yopiq ombordan), lug'at misollari kitob matni va Wordlist'idan
 * yoki unga yaqin; mashq matnlari o'zimizniki. Mashqlar inglizcha.
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
  stress,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

export const B2_09_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("💛", "have a heart of gold", "hæv ə ˌhɑːt əv ˈɡəʊld|hev a haat av gould", "ibora", "Oltin yurakli (juda mehribon) bo'lmoq", "Be very kind.", "In English, kind people are said to have a heart of gold.", "Ingliz tilida mehribon odamlarni «oltin yurakli» deyishadi."),
      w("👼", "as good as gold", "əz ˌɡʊd əz ˈɡəʊld|az gud az gould", "ibora", "Juda odobli (bola haqida)", "Very well-behaved (about children).", "The children were as good as gold all day.", "Bolalar kun bo'yi juda odobli bo'lishdi."),
      w("🌟", "golden opportunity", "ˌɡəʊldən ˌɒpəˈtjuːnəti|gouldan opatyuunati", "ibora", "Oltin imkoniyat", "A very good chance that you shouldn't miss.", "This job is a golden opportunity — don't miss it.", "Bu ish — oltin imkoniyat, uni boy bermang."),
      w("💎", "rarity", "ˈreərəti|rearati", "ot", "Kamyoblik", "The fact of being rare.", "The rarity of gold adds to its value.", "Oltinning kamyobligi uning qiymatini oshiradi."),
      w("🌍", "mankind", "mænˈkaɪnd|menkaynd", "ot", "Insoniyat", "All people in the world.", "From ancient times, gold has been of great importance to mankind.", "Qadim zamonlardan beri oltin insoniyat uchun katta ahamiyatga ega."),
      w("☄️", "asteroid", "ˈæstərɔɪd|estaroyd", "ot", "Asteroid", "A large rock that moves through space.", "Gold may have arrived on Earth on an asteroid.", "Oltin Yerga asteroid bilan kelgan bo'lishi mumkin."),
      w("🏦", "wealth", "welθ|welS", "ot", "Boylik", "A lot of money or valuable things.", "Many people prefer to keep their wealth in gold rather than in the bank.", "Ko'pchilik boyligini bankdan ko'ra oltinda saqlashni afzal ko'radi."),
      w("☀️", "brightness", "ˈbraɪtnəs|braytnas", "ot", "Yorqinlik", "The quality of shining a lot.", "Because of its brightness, the Greeks thought gold was made of water and sunshine.", "Yorqinligi tufayli yunonlar oltinni suv va quyosh nuridan iborat deb o'ylashgan."),
      w("🕵️", "robbery", "ˈrɒbəri|robari", "ot", "O'g'rilik, talonchilik", "Taking money or things from a person or place illegally.", "All her gold jewellery was taken in the robbery.", "O'g'rilikda uning barcha oltin taqinchoqlari olib ketildi."),
      w("📜", "inheritance", "ɪnˈherɪtəns|inheritans", "ot", "Meros", "Money or things you get when someone dies.", "The gold necklace was part of her inheritance.", "Oltin marjon uning merosining bir qismi edi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🏛️", "civilization", "ˌsɪvəlaɪˈzeɪʃn|sivilayzeyshn", "ot", "Sivilizatsiya", "A society with its own culture and way of life.", "The Incas were an ancient civilization.", "Inklar qadimiy sivilizatsiya edi."),
      w("🤲", "generosity", "ˌdʒenəˈrɒsəti|jenarosati", "ot", "Saxiylik", "Being happy to give money, time or help.", "Thank you for your generosity.", "Saxiyligingiz uchun rahmat."),
      w("🔌", "conduct", "kənˈdʌkt|kandakt", "fe'l", "O'tkazmoq (issiqlik, tok)", "Allow heat or electricity to pass through.", "Gold is a metal that can conduct heat and electricity very well.", "Oltin issiqlik va elektr tokini juda yaxshi o'tkaza oladigan metall."),
      w("🕊️", "freedom", "ˈfriːdəm|friidam", "ot", "Erkinlik", "Being able to do what you want.", "Having enough money gives you the freedom to do what you want.", "Yetarli pul sizga xohlaganingizni qilish erkinligini beradi."),
      w("⭐", "significance", "sɪɡˈnɪfɪkəns|signifikans", "ot", "Ahamiyat", "Special importance or meaning.", "Gold has a special significance in some countries.", "Ba'zi mamlakatlarda oltin alohida ahamiyatga ega."),
      w("👉", "preference", "ˈprefrəns|prefrans", "ot", "Afzallik, ko'proq yoqtirish", "Liking one thing more than another.", "I have a preference for silver jewellery, rather than gold.", "Men oltindan ko'ra kumush taqinchoqni afzal ko'raman."),
      w("😊", "enjoyment", "ɪnˈdʒɔɪmənt|injoyment", "ot", "Zavq, rohat", "The pleasure you get from something.", "I get a lot of enjoyment from shopping.", "Xarid qilishdan katta zavq olaman."),
      w("🦁", "bravery", "ˈbreɪvəri|breyvari", "ot", "Jasurlik", "Being brave.", "The firefighter received an award for her bravery.", "O't o'chiruvchi ayol jasurligi uchun mukofot oldi."),
      w("💪", "encouragement", "ɪnˈkʌrɪdʒmənt|inkarijment", "ot", "Rag'bat, dalda", "Words or actions that give someone confidence.", "People usually work better if they are given encouragement.", "Odamlarga dalda berilsa, odatda yaxshiroq ishlaydi."),
      w("🦉", "wisdom", "ˈwɪzdəm|wizdam", "ot", "Donolik", "Good judgement that comes from experience.", "Older people have greater wisdom because of their life experience.", "Keksalar hayotiy tajribasi tufayli donoroq bo'ladi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🤷", "I wouldn't be surprised if", "aɪ ˌwʊdnt bi səˈpraɪzd ɪf|ay wudnt bi saprayzd if", "ibora", "…sa hayron bo'lmasdim", "I think it will probably happen.", "I wouldn't be surprised if it happened.", "Bu sodir bo'lsa hayron bo'lmasdim."),
      w("🤔", "I doubt", "aɪ ˈdaʊt|ay daut", "ibora", "Shubha qilaman", "I don't think it will happen.", "I doubt people would be satisfied with a virtual holiday.", "Odamlar virtual sayohatdan qoniqishiga shubham bor."),
      w("💭", "I expect", "aɪ ɪkˈspekt|ay ikspekt", "ibora", "Kutaman, menimcha (bo'lsa kerak)", "I think it will probably happen.", "I expect they'll just travel more within their own countries.", "Menimcha, ular shunchaki o'z mamlakatlari ichida ko'proq sayohat qiladi."),
      w("🎯", "bound to", "ˈbaʊnd tə|baund ta", "ibora", "Albatta …adi", "Certain to happen.", "I don't like the sound of a printed meal, but I think it's bound to happen.", "Bosib chiqarilgan taom menga yoqmaydi, lekin bu albatta bo'ladi deb o'ylayman."),
      w("🚫", "there's no chance", "ðeəz ˌnəʊ ˈtʃɑːns|zeaz nou chaans", "ibora", "Hech imkoni yo'q", "It definitely won't happen.", "There's no chance of me eating something like that!", "Men bunday narsani yeyishimning hech imkoni yo'q!"),
      w("✅", "sure to", "ˈʃɔː tə|shoo ta", "ibora", "Aniq …adi", "Certain to happen.", "People will get fed up with screens — that's sure to happen.", "Odamlar ekranlardan bezib qoladi — bu aniq bo'ladi."),
      w("🥽", "virtual reality", "ˌvɜːtʃuəl riˈæləti|voochual rielati", "ibora", "Virtual reallik", "A computer world that seems real.", "People will enjoy virtual reality holidays at home.", "Odamlar uyda virtual reallik sayohatlaridan zavqlanadi."),
      w("⚖️", "balanced", "ˈbælənst|belanst", "sifat", "Muvozanatli (ikki tomonni ko'rsatadigan)", "Showing both sides fairly.", "A balanced opinion essay discusses both views.", "Muvozanatli fikr inshosi ikkala qarashni ham muhokama qiladi."),
      w("🏢", "work environment", "ˈwɜːk ɪnˌvaɪrənmənt|wook invayranment", "ibora", "Ish muhiti", "Everything around you at work — colleagues, light, space, rules.", "A good work environment makes people happier.", "Yaxshi ish muhiti odamlarni baxtliroq qiladi."),
      w("🏃", "agile working", "ˌædʒaɪl ˈwɜːkɪŋ|ejayl wooking", "ibora", "Moslashuvchan ish (vaqt va joy jihatidan)", "Flexibility in when or where you work.", "Agile working means you can work from a café or from home.", "Moslashuvchan ish — kafeda yoki uyda ishlay olishingizni anglatadi."),
    ],
  },
];

const GOLD = `THE STORY OF GOLD
1 Gold has been important to people since ancient times. Many languages use it to describe anything beautiful or valuable — kind people «have a heart of gold».
2 The Ancient Greeks thought gold was a mix of water and sunshine. In fact, it may have come from space: it is always found near the Earth's surface, so asteroids may have brought it here.
3 Gold is found on every continent, but it is extremely rare. If all the gold in the world were put together, it would make a block only about twenty metres square. Its rarity adds to its value.
4 Gold is especially treasured in the Middle East, China and India, where many people keep their wealth in gold rather than in a bank. In India, half the gold bought each year is for weddings and celebrations.
5 Gold is also used in industry. Air and water don't damage it, so it protects machines, and it conducts heat and electricity very well.`;
const gold = reading(GOLD);

const ESSAY = `Without doubt, computers are becoming more and more important in our lives. However, it is uncertain whether they will give us more or less leisure time.
Some people argue that computers will do more and more for us, at home and at work — for example, cleaning robots and smart devices.
Others feel, however, that employers may simply expect us to do more work. In addition, wearable technology may mean we are expected to be available at all times.
Personally, I doubt that we will have more leisure time. In fact, it seems that the more technology we invent, the harder we work.
In conclusion, while employers may not expect us to be constantly available, I believe they will demand more of us.`;
const essay = reading(ESSAY);

export const B2_09_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("I wouldn't be surprised if it happened.", ["I wouldn't be surprised if it happened.", "I would be surprised if it happened.", "I wouldn't be surprised if it happens.", "I won't be surprised if it happened."]),
      listen("I think it's bound to happen.", ["I think it's bound to happen.", "I think it's about to happen.", "I think it's going to happen.", "I think it's found to happen."]),
      listen("There's no chance of me eating something like that!", ["There's no chance of me eating something like that!", "There's a chance of me eating something like that!", "There's no change of me eating something like that!", "There's no chance of me eating anything like that!"]),
      listen("Oh, that's sure to happen.", ["Oh, that's sure to happen.", "Oh, that's sure it'll happen.", "Oh, that's not sure to happen.", "Oh, that's bound to happen."]),
      listen("Winning a gold medal is quite an achievement.", ["Winning a gold medal is quite an achievement.", "Winning a gold medal is quite an agreement.", "Winning a gold medal was quite an achievement.", "Winning a gold medal is a great achievement."]),
      listen("Thank you for your generosity.", ["Thank you for your generosity.", "Thank you for your general city.", "Thank you for your curiosity.", "Thanks for your generosity."]),
      listen("Older people have greater wisdom.", ["Older people have greater wisdom.", "Older people have greater freedom.", "Older people have great wisdom.", "Old people have greater wisdom."]),
      listen("significance", ["significance", "significant", "signature", "magnificence"]),
      listen("inheritance", ["inheritance", "inherit", "inherited", "insurance"]),
      listen("civilization", ["civilization", "civilized", "citizen", "specialization"]),
    ],
  },
  {
    title: "The story of gold",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the text quickly — look at the first sentence of each paragraph. Then answer.",
    questions: [
      gold("Which paragraph is about gold as a symbol in language?", ["Paragraph 1", "Paragraph 3", "Paragraph 4", "Paragraph 5"]),
      gold("Which paragraph asks if gold is «not from this world»?", ["Paragraph 2", "Paragraph 1", "Paragraph 4", "Paragraph 5"]),
      gold("Which paragraph says there is less gold than you might think?", ["Paragraph 3", "Paragraph 2", "Paragraph 4", "Paragraph 5"]),
      gold("Which paragraph is about the importance of gold in certain countries?", ["Paragraph 4", "Paragraph 1", "Paragraph 2", "Paragraph 5"]),
      gold("Which paragraph is about how gold is used in manufacturing?", ["Paragraph 5", "Paragraph 3", "Paragraph 2", "Paragraph 1"]),
      gold("What adds to the value of gold?", ["Its rarity", "Its colour", "Its weight", "Its smell"]),
      gold("Why is gold good for protecting machines?", ["Air and water don't damage it.", "It is very cheap.", "It is very heavy.", "It is very soft."]),
    ],
  },
  {
    title: "Gold idioms",
    skill: "Vocabulary",
    kind: "situation",
    instructions: "Choose the idiom that fits the situation.",
    questions: [
      say("Your neighbour always helps everyone and never asks for anything.", ["She has a heart of gold.", "She's as good as gold.", "It's a golden opportunity.", "She's worth her weight."]),
      say("The children sat quietly all through the long wedding.", ["They were as good as gold.", "They had a heart of gold.", "It was a golden opportunity.", "They were bound to happen."]),
      say("A famous company offers you a job in London. Don't miss it!", ["It's a golden opportunity.", "It has a heart of gold.", "It's as good as gold.", "There's no chance."]),
    ],
  },
  {
    title: "Make a noun",
    skill: "Vocabulary",
    kind: "fill",
    instructions: "Complete each sentence with the noun form of the word in brackets.",
    questions: written([
      ["Winning a gold medal is quite an ___. (achieve)", "achievement"],
      ["All her gold jewellery was taken in the ___. (rob)", "robbery"],
      ["The gold necklace was part of her ___. (inherit)", "inheritance"],
      ["The Incas were an ancient ___. (civilize)", "civilization|civilisation"],
      ["Thank you for your ___. (generous)", "generosity"],
      ["The whole village received an ___ to the wedding. (invite)", "invitation"],
      ["Having enough money gives you the ___ to do what you want. (free)", "freedom"],
      ["Gold has a special ___ in some countries. (signify)", "significance"],
      ["I have a ___ for silver jewellery, rather than gold. (prefer)", "preference"],
      ["I get a lot of ___ from shopping. (enjoy)", "enjoyment"],
    ]),
  },
  {
    title: "Noun suffixes",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear ten sentences. Listen and choose the noun you hear.",
    questions: [
      gaps(track("3.6"), [
        ["Winning a gold medal is quite an ___.", "achievement", "achieving", "achiever"],
        ["All her gold jewellery was taken in the ___.", "robbery", "robber", "robbing"],
        ["The gold necklace was part of her ___.", "inheritance", "inheriting", "heritage"],
        ["The Incas were an ancient ___.", "civilization", "civilian", "city"],
        ["Thank you for your ___.", "generosity", "generation", "general"],
        ["The whole village received an ___ to the wedding.", "invitation", "invite", "inviting"],
        ["Having enough money gives you the ___ to do what you want.", "freedom", "freely", "free"],
        ["Gold has a special ___ in some countries.", "significance", "signature", "sign"],
        ["I have a ___ for silver jewellery, rather than gold.", "preference", "prefer", "reference"],
        ["I get a lot of ___ from shopping.", "enjoyment", "enjoying", "joy"],
      ]),
    ],
  },
  {
    title: "Which suffix?",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match the word to its noun.",
    questions: pairs([
      ["appear|appearance", "brave|bravery", "real|reality", "wise|wisdom"],
      ["enter|entrance", "curious|curiosity", "converse|conversation", "vary|variation"],
      ["measure|measurement", "intend|intention", "refer|reference", "scarce|scarcity"],
    ]),
  },
  {
    title: "Stress in nouns",
    skill: "Pronunciation",
    kind: "stress",
    instructions: "Listen to the noun. Tap the stressed syllable. We often stress the syllable before the suffix.",
    questions: stress([
      ["a|chieve|ment", 1],
      ["rob|be|ry", 0],
      ["in|he|ri|tance", 1],
      ["ci|vi|li|za|tion", 3],
      ["ge|ne|ro|si|ty", 2],
      ["in|vi|ta|tion", 2],
      ["free|dom", 0],
      ["sig|ni|fi|cance", 1],
      ["pre|fe|rence", 0],
      ["en|joy|ment", 1],
    ]),
  },
  {
    title: "Life in the future",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to two friends, George and Evie, discussing three predictions. Answer the questions.",
    questions: [
      hearing(track("3.8"))("What does George think about virtual reality holidays?", ["He wouldn't be surprised if they happened.", "He's sure they won't happen.", "He has already tried one.", "He thinks they are too expensive."]),
      hearing(track("3.8"))("Why does George think they might happen?", ["We can't all keep flying — the planet would get so polluted.", "Travel agents are closing.", "People are bored of beaches.", "Flights are getting cheaper."]),
      hearing(track("3.8"))("What does Evie expect people to do instead?", ["Travel more within their own countries", "Stay at home all year", "Fly even more", "Go on virtual holidays every month"]),
      hearing(track("3.8"))("What does George say about printed meals?", ["He doesn't like the sound of them, but they're bound to happen.", "He loves the idea.", "He's sure they'll never happen.", "He has eaten one."]),
      hearing(track("3.8"))("How does Evie feel about eating printed food?", ["There's no chance of her eating it.", "She'd love to try it.", "She eats it every day.", "She's not sure."]),
      hearing(track("3.8"))("Why does Evie think technology-free leisure is sure to happen?", ["People will get fed up with being in front of a screen.", "Technology will get too expensive.", "Gardening is fashionable.", "The internet will stop working."]),
    ],
  },
  {
    title: "How likely is it?",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear seven phrases from George and Evie's discussion. Listen and choose the missing words.",
    questions: [
      gaps(track("3.9"), [
        ["I wouldn't be ___ if it happened.", "surprised", "sure", "surprising"],
        ["I still ___ people would be satisfied with a virtual holiday.", "doubt", "think", "expect"],
        ["I ___ they'll just travel more within their own countries.", "expect", "doubt", "wonder"],
        ["I think it's ___ to happen.", "bound", "about", "sure"],
        ["There's no ___ of me eating something like that!", "chance", "way", "time"],
        ["Oh, that's ___ to happen.", "sure", "bound", "likely"],
        ["Well, yes, I ___ it might happen …", "suppose", "doubt", "expect"],
      ]),
    ],
  },
  {
    title: "From «definitely won't» to «definitely will»",
    skill: "Speaking",
    kind: "choice",
    instructions: "How sure is the speaker? Choose the meaning.",
    questions: [
      say("There's no chance of that happening.", ["definitely won't happen", "probably won't happen", "possibly will happen", "definitely will happen"]),
      say("I doubt it'll happen.", ["probably won't happen", "definitely won't happen", "probably will happen", "definitely will happen"]),
      say("I suppose it might happen.", ["possibly will happen", "definitely won't happen", "definitely will happen", "probably won't happen"]),
      say("I wouldn't be surprised if it happened.", ["probably will happen", "definitely won't happen", "probably won't happen", "possibly won't happen"]),
      say("I expect it'll happen.", ["probably will happen", "definitely won't happen", "probably won't happen", "possibly will happen"]),
      say("It's bound to happen.", ["definitely will happen", "possibly will happen", "probably won't happen", "definitely won't happen"]),
      say("That's sure to happen.", ["definitely will happen", "possibly will happen", "probably won't happen", "definitely won't happen"]),
    ],
  },
  {
    title: "A balanced opinion essay",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the essay. Choose the correct answer.",
    questions: [
      essay("What is the essay question about?", ["Whether technology will give us more or less leisure time", "How to buy a cleaning robot", "Why people work at home", "How to write an essay"]),
      essay("Which paragraph gives arguments for the FIRST belief?", ["Paragraph 2 («Some people argue that …»)", "Paragraph 3", "Paragraph 4", "Paragraph 5"]),
      essay("Which phrase introduces the other side of the argument?", ["Others feel, however, that …", "Without doubt, …", "In conclusion, …", "For example, …"]),
      essay("Which phrase gives the writer's own opinion?", ["Personally, …", "Some people argue that …", "In addition, …", "Others feel …"]),
      essay("What does the writer believe?", ["Employers will demand more of us.", "We will have a five-day weekend.", "Computers will do all our work.", "Robots will replace employers."]),
    ],
  },
  {
    title: "Essay phrases",
    skill: "Writing",
    kind: "match",
    instructions: "Match each phrase to its job in an essay.",
    questions: pairs([
      ["Without doubt, …|introduction", "Some people argue that …|first side of the argument", "Others feel, however, that …|second side", "In conclusion, …|conclusion"],
      ["such as|an example", "In addition, …|an extra point", "Personally, …|your own opinion", "In fact, …|adding a stronger point"],
    ]),
  },
  {
    title: "Work words",
    skill: "Vocabulary",
    kind: "match",
    instructions: "These words are from the video «The future of work». Match them to their meanings.",
    questions: pairs([
      ["workforce|the people who work for an organization", "working practices|the usual way work is done", "work environment|colleagues, light, space, rules …", "agile working|flexibility in when or where you work"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Vocabulary",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("Thank you for your *generous.", "Noun: generosity."),
      mistake("The firefighter got an award for her *brave.", "Noun: bravery."),
      mistake("Having money gives you the *free to travel.", "Noun: freedom."),
      mistake("I have a *prefer for silver jewellery.", "Noun: preference."),
      mistake("Winning a medal is quite an *achieve.", "Noun: achievement."),
      mistake("I think it's *bind to happen.", "bound to happen."),
      mistake("There's no *change of me eating that!", "There's no chance."),
      mistake("I wouldn't be *surprising if it happened.", "surprised (feeling)."),
      mistake("My grandmother has a heart *from gold.", "a heart of gold."),
      mistake("*Personal, I doubt we will have more free time.", "Personally, … (adverb)."),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then say it yourself. Sound certain or uncertain with your voice.",
    questions: phrases([
      "I wouldn't be surprised if it happened.",
      "I still doubt people would be satisfied.",
      "I expect they'll travel more.",
      "I think it's bound to happen.",
      "There's no chance of me eating something like that!",
      "Oh, that's sure to happen.",
      "Well, yes, I suppose it might happen.",
      "She has a heart of gold.",
      "achievement",
      "generosity",
    ]),
  },
];
