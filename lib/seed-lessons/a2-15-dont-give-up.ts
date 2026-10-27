/**
 * A2, 15-dars — «Taslim bo'lma!». Avval muvaffaqiyatsiz bo'lib, keyin
 * mashhur bo'lgan odamlar; o'tgan zamon iboralari (in 1930, last century,
 * 2,800 years ago, in the 1990s).
 * Grammatika: was / were — darak, inkor (wasn't / weren't), so'roq va qisqa
 * javoblar; there was / there were.
 * Navigate A2, 6.1 asosida: tinglash mashqlarida kitob treklari (yopiq
 * ombordan), savollar va matnlar o'zimizniki. Mashqlar inglizcha.
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
  slots,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-a2/audio/${n}.mp3`;

export const A2_15_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🔟", "decade", "ˈdekeɪd|dekeyd", "ot", "O'n yillik", "A period of ten years.", "The city changed a lot in the last decade.", "Oxirgi o'n yillikda shahar ancha o'zgardi."),
      w("📜", "last century", "ˌlɑːst ˈsentʃəri|laast senchari", "ibora", "O'tgan asr", "The 1900s (from now: the 20th century).", "The first World Cup was in the last century, in 1930.", "Birinchi jahon chempionati o'tgan asrda, 1930-yilda bo'lgan."),
      w("📼", "in the 1990s", "ɪn ðə ˌnaɪntiːn ˈnaɪntiz|in za nayntiin nayntiz", "ibora", "1990-yillarda", "From 1990 to 1999.", "My parents were students in the 1990s.", "Ota-onam 1990-yillarda talaba bo'lgan."),
      w("🎂", "at the age of", "ət ði ˈeɪdʒ əv|at zi eyj av", "ibora", "…yoshida", "When someone was a certain age.", "He started his company at the age of 25.", "U kompaniyasini 25 yoshida ochgan."),
      w("🏺", "a long time ago", "ə ˌlɒŋ taɪm əˈɡəʊ|a long taym agou", "ibora", "Ancha oldin, qadimda", "Many years before now.", "People used salt as money a long time ago.", "Qadimda odamlar tuzni pul sifatida ishlatgan."),
      w("🆕", "recently", "ˈriːsntli|riisntli", "ravish", "Yaqinda", "Not long ago.", "I recently moved to a new flat.", "Yaqinda yangi kvartiraga ko'chdim."),
      w("🕰️", "in those days", "ɪn ˌðəʊz ˈdeɪz|in zouz deyz", "ibora", "O'sha paytlarda", "At that time in the past.", "There weren't any mobile phones in those days.", "O'sha paytlarda mobil telefonlar yo'q edi."),
      w("📆", "the other day", "ði ˌʌðə ˈdeɪ|zi aza dey", "ibora", "Yaqinda, kuni kecha", "A few days ago.", "I saw your brother the other day.", "Kuni kecha akangni ko'rdim."),
      w("🗓️", "earlier this year", "ˌɜːliə ðɪs ˈjɪə|yorlia zis yia", "ibora", "Shu yilning boshida", "Before now, in this year.", "I was in Bukhara earlier this year.", "Shu yil boshida Buxoroda edim."),
      w("🔙", "years ago", "ˌjɪəz əˈɡəʊ|yiaz agou", "ibora", "Yillar oldin", "Many years before now.", "There was a cinema here years ago.", "Yillar oldin bu yerda kinoteatr bor edi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🏆", "successful", "səkˈsesfl|saksesfl", "sifat", "Muvaffaqiyatli", "Doing well; getting what you want.", "Today she is a very successful designer.", "Bugun u juda muvaffaqiyatli dizayner."),
      w("🎉", "success", "səkˈses|sakses", "ot", "Muvaffaqiyat", "When something goes well.", "The film was a huge success.", "Film katta muvaffaqiyat qozondi."),
      w("❌", "fail", "feɪl|feyl", "fe'l", "Muvaffaqiyatsizlikka uchramoq; yiqilmoq (imtihondan)", "Not succeed.", "Lots of successful people fail at first.", "Ko'p muvaffaqiyatli odamlar avvaliga omadsizlikka uchraydi."),
      w("🏳️", "give up", "ˌɡɪv ˈʌp|giv ap", "ibora", "Taslim bo'lmoq, voz kechmoq", "Stop trying.", "Don't give up! Try again.", "Taslim bo'lma! Yana urinib ko'r."),
      w("⭐", "popular", "ˈpɒpjələ|popyala", "sifat", "Mashhur, ommabop", "Liked by a lot of people.", "The team was very popular with the people watching.", "Jamoa tomoshabinlar orasida juda mashhur edi."),
      w("🐘", "huge", "hjuːdʒ|hyuuj", "sifat", "Ulkan", "Very big.", "It was a huge success.", "Bu ulkan muvaffaqiyat edi."),
      w("💪", "try hard", "ˌtraɪ ˈhɑːd|tray haad", "ibora", "Astoydil harakat qilmoq", "Do your best.", "You have to try hard to win a medal.", "Medal yutish uchun astoydil harakat qilish kerak."),
      w("🏅", "Olympics", "əˈlɪmpɪks|alimpiks", "ot", "Olimpiada o'yinlari", "The biggest international sports competition.", "She wanted to skate in the Olympics.", "U Olimpiadada konkida uchmoqchi edi."),
      w("🏁", "race", "reɪs|reys", "ot", "Poyga", "A competition to see who is fastest.", "They didn't win a single race.", "Ular birorta ham poygada g'alaba qozonmadi."),
      w("⛸️", "ice skater", "ˈaɪs ˌskeɪtə|ays skeyta", "ibora", "Figurachi, konkichi", "A person who moves on ice in special boots.", "When she was younger, she was a very good ice skater.", "Yoshligida u juda yaxshi konkichi edi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🏗️", "founder", "ˈfaʊndə|faunda", "ot", "Asoschi", "A person who starts a company or organisation.", "He was the founder of Sony.", "U Sony asoschisi edi."),
      w("📦", "product", "ˈprɒdʌkt|prodakt", "ot", "Mahsulot", "Something a company makes and sells.", "Their first product was a rice cooker.", "Ularning birinchi mahsuloti guruch pishirgich edi."),
      w("🔥", "burn", "bɜːn|byorn", "fe'l", "Kuydirmoq, kuymoq", "Make something black with too much heat.", "The rice cooker always burnt the rice. Don't burn the rice!", "Guruch pishirgich doim guruchni kuydirardi. Guruchni kuydirma!"),
      w("🏷️", "label", "ˈleɪbl|leybl", "ot", "Brend (kiyim)", "A company name for clothes or music.", "She has her own fashion label.", "Uning o'z moda brendi bor."),
      w("🤝", "partner", "ˈpɑːtnə|paatna", "ot", "Hamkor, sherik", "A person you work or do business with.", "He started the company with his business partner.", "U kompaniyani biznes sherigi bilan ochgan."),
      w("🛷", "bobsleigh", "ˈbɒbsleɪ|bobsley", "ot", "Bobsley (muzda chana)", "A small sledge for racing on ice.", "There was a bobsleigh team from Jamaica.", "Yamaykadan bobsley jamoasi bor edi."),
      w("🥇", "medal", "ˈmedl|medl", "ot", "Medal", "A small metal prize for winning.", "She won a gold medal.", "U oltin medal yutdi."),
      w("😢", "unhappy", "ʌnˈhæpi|anhepi", "sifat", "Baxtsiz, xafa", "Sad.", "She was very unhappy when she wasn't in the team.", "Jamoaga kirmaganida u juda xafa edi."),
      w("💡", "invention", "ɪnˈvenʃn|invenshn", "ot", "Ixtiro", "Something new that someone made for the first time.", "The telephone was a great invention.", "Telefon ajoyib ixtiro edi."),
      w("🎯", "ambition", "æmˈbɪʃn|embishn", "ot", "Orzu-maqsad, intilish", "Something you really want to do in your life.", "Her ambition was to be a fashion designer.", "Uning orzusi moda dizayneri bo'lish edi."),
    ],
  },
];

const STORY = `THE MAN WHO DIDN'T GIVE UP
Thomas Edison is one of the most famous inventors in history, but his life wasn't easy. He was born in the USA in 1847. As a child he wasn't a good student, and his teachers were often angry with him. He was only at school for three months — after that, his mother was his teacher at home.
His first inventions weren't successful. People weren't interested in his machine for counting votes, and there wasn't any money for him. But he didn't give up. Later, his inventions were a huge success: there were his famous light bulbs, and there was a machine for recording sound.
When people asked about his failures, he said: «I didn't fail. I found 10,000 ways that don't work.»`;
const read = reading(STORY);

export const A2_15_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("She was a good ice skater.", ["She was a good ice skater.", "She is a good ice skater.", "She wasn't a good ice skater.", "They were good ice skaters."]),
      listen("They weren't successful.", ["They weren't successful.", "They were successful.", "They aren't successful.", "They wasn't successful."]),
      listen("Was it easy?", ["Was it easy?", "Is it easy?", "Wasn't it easy?", "Were it easy?"]),
      listen("There were no bobsleighs.", ["There were no bobsleighs.", "There was no bobsleigh.", "There are no bobsleighs.", "They were no bobsleighs."]),
      listen("Yes, they were.", ["Yes, they were.", "Yes, there were.", "Yes, they are.", "No, they weren't."]),
      listen("in the last century", ["in the last century", "in the last country", "in the next century", "at the last century"]),
      listen("2,800 years ago", ["2,800 years ago", "2,080 years ago", "1,800 years ago", "2,800 years old"]),
      listen("Olympics", ["Olympics", "Olympic", "Olympus", "a limp kiss"]),
      listen("successful", ["successful", "success", "successfully", "stressful"]),
      listen("give up", ["give up", "get up", "give it", "keep up"]),
    ],
  },
  {
    title: "was or were?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct answer.",
    questions: [
      say("Vera Wang ___ born in New York in 1949.", ["was", "were", "is", "did"]),
      say("Her parents ___ from China.", ["were", "was", "are", "did"]),
      say("She ___ in the US Olympic team.", ["wasn't", "weren't", "didn't", "isn't"]),
      say("Morita and Ibuku ___ successful at first.", ["weren't", "wasn't", "didn't", "aren't"]),
      say("___ it expensive? — Yes, it was.", ["Was", "Were", "Did", "Is"]),
      say("___ they born in China? — No, they weren't.", ["Were", "Was", "Did", "Are"]),
      say("There ___ no ice in Jamaica.", ["was", "were", "is", "be"]),
      say("There ___ no bobsleighs for them to use.", ["were", "was", "are", "did"]),
      say("Where ___ you last night?", ["were", "was", "did", "are"]),
      say("I ___ tired yesterday, so I went to bed early.", ["was", "were", "am", "did"]),
    ],
  },
  {
    title: "Cool Runnings",
    skill: "Listening",
    kind: "listengap",
    instructions: "Listen to a short text about a famous team. Choose the correct word for each sentence. Pause or go back if you need to.",
    questions: [
      gaps(track("6.1"), [
        ["People ___ surprised to see a bobsleigh team from Jamaica.", "were", "was", "are"],
        ["It was at the 1988 Winter Olympics in ___.", "Canada", "Jamaica", "Norway"],
        ["It ___ very easy for the team to practise in Jamaica.", "wasn't", "was", "weren't"],
        ["There ___ no ice in Jamaica.", "was", "were", "is"],
        ["And there ___ no bobsleighs for them to use.", "were", "was", "are"],
        ["They ___ successful in their races.", "weren't", "were", "wasn't"],
        ["But they were very ___ with the people watching.", "popular", "successful", "unhappy"],
        ["… because they tried so ___.", "hard", "fast", "often"],
        ["There was a film about them in ___.", "1993", "1988", "2003"],
        ["The film made $___ around the world.", "150,000,000", "15,000,000", "1,500,000"],
      ]),
    ],
  },
  {
    title: "Short answers",
    skill: "Listening",
    kind: "listenmatch",
    instructions: "Listen to four questions about the Jamaican team (1–4). Write the short answer you hear, e.g. Yes, there was.",
    questions: [
      slots(track("6.2"), [
        ["1. Was there a bobsleigh team at the Olympics?", "Yes, there was."],
        ["2. Was it easy for them to practise?", "No, it wasn't."],
        ["3. Were there bobsleighs for them to use?", "No, there weren't."],
        ["4. Were they popular?", "Yes, they were."],
      ]),
    ],
  },
  {
    title: "When was it?",
    skill: "Listening",
    kind: "listengap",
    instructions: "Listen to six facts about famous «firsts». Choose the correct year or time.",
    questions: [
      gaps(track("6.3"), [
        ["The first football World Cup was in ___.", "1930", "1913", "1950"],
        ["The first Olympic Games were about ___ years ago.", "2,800", "1,800", "280"],
        ["The first dishwasher was in the ___ century.", "19th", "20th", "18th"],
        ["The first Sony Walkman was in ___.", "1979", "1989", "1997"],
        ["The first talking film was in ___.", "1927", "1937", "1917"],
        ["The first Oscars ceremony was in ___.", "1929", "1939", "1919"],
      ]),
    ],
  },
  {
    title: "Write was or were",
    skill: "Grammar",
    kind: "fill",
    instructions: "Write was, were, wasn't or weren't.",
    questions: written([
      ["Akio Morita ___ born in 1921.", "was"],
      ["He ___ a businessman from the age of 25.", "was"],
      ["At first they ___ very successful. (–)", "weren't|were not"],
      ["Their first product ___ a rice cooker.", "was"],
      ["It ___ a good product. It always burnt the rice! (–)", "wasn't|was not"],
      ["___ you at home yesterday?", "Were"],
      ["___ there a cinema here in the past?", "Was"],
      ["There ___ any mobile phones in those days. (–)", "weren't|were not"],
      ["My grandparents ___ very poor when they were young.", "were"],
      ["It ___ cold yesterday, so I wore a coat.", "was"],
    ]),
  },
  {
    title: "The man who didn't give up",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the text and answer the questions.",
    questions: [
      read("When was Edison born?", ["In 1847", "In 1874", "In 1947", "The text doesn't say."]),
      read("Was he a good student?", ["No, he wasn't.", "Yes, he was.", "Only at maths.", "The text doesn't say."]),
      read("How long was he at school?", ["Only three months", "Three years", "Ten years", "The text doesn't say."]),
      read("Who was his teacher after school?", ["His mother", "His father", "A famous inventor", "Nobody"]),
      read("Were his first inventions successful?", ["No, they weren't.", "Yes, they were.", "Only one of them.", "The text doesn't say."]),
      read("What was his machine for counting votes like?", ["People weren't interested in it.", "It was very popular.", "It was very expensive.", "It was too big."]),
      read("What did he do after his first failures?", ["He didn't give up.", "He stopped inventing.", "He went back to school.", "He moved to another country."]),
      read("Which of these was one of his inventions?", ["Light bulbs", "The telephone", "The car", "The computer"]),
      read("What did he say about his failures?", ["He found 10,000 ways that don't work.", "He was very unhappy.", "His teachers were right.", "He never failed."]),
      read("What is the message of the text?", ["Don't give up.", "School isn't important.", "Inventions are easy.", "Money is everything."]),
    ],
  },
  {
    title: "Past time expressions",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the correct answer.",
    questions: [
      say("The first World Cup was ___ 1930.", ["in", "on", "at", "ago"]),
      say("I saw him two days ___.", ["ago", "last", "before", "in"]),
      say("We went to Samarkand ___ summer.", ["last", "ago", "in", "on"]),
      say("My parents were students ___ the 1990s.", ["in", "on", "at", "—"]),
      say("He started his company ___ the age of 25.", ["at", "in", "on", "with"]),
      say("Ten years = a ___", ["decade", "century", "age", "period of ten"]),
      say("The 1900s = the last ___", ["century", "decade", "year", "age"]),
      say("___, there weren't any mobile phones. (at that time)", ["In those days", "These days", "Nowadays", "Next year"]),
      say("I moved to Tashkent ___. (not long ago)", ["recently", "a long time ago", "in the past", "next week"]),
      say("I met your sister ___. (a few days ago)", ["the other day", "the other year", "in those days", "last century"]),
    ],
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("Her parents *was from China.", "Plural: were."),
      mistake("She *weren't in the Olympic team.", "she → wasn't."),
      mistake("*Was they successful?", "they → Were they…?"),
      mistake("Were you tired? — Yes, I *were.", "Short answer: Yes, I was."),
      mistake("There *was no bobsleighs.", "Plural: There were no bobsleighs."),
      mistake("I *didn't was at home yesterday.", "Negative of was: wasn't."),
      mistake("The World Cup was *on 1930.", "With years we use in."),
      mistake("I saw him three days *before.", "From now: three days ago."),
      mistake("We were in Bukhara *the last summer.", "No article: last summer."),
      mistake("Don't give *in! Try again.", "We say give up."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "Vera Wang was born in New York.",
      "Her parents were from China.",
      "They weren't successful at first.",
      "Was it easy for them to practise?",
      "There was no ice in Jamaica.",
      "The film was a huge success.",
      "He started his company at the age of 25.",
      "In those days there weren't any mobile phones.",
      "The first World Cup was in 1930.",
      "Don't give up!",
    ]),
  },
  {
    title: "Find the pairs",
    skill: "Matching",
    kind: "match",
    instructions: "Match the words.",
    questions: pairs([
      ["is|was", "are|were", "isn't|wasn't", "aren't|weren't"],
      ["success|successful", "fail|failure", "invent|invention", "found|founder"],
      ["decade|ten years", "century|a hundred years", "recently|not long ago", "in those days|at that time"],
      ["give|up", "try|hard", "win|a medal", "at the age|of 25"],
      ["Was it easy?|No, it wasn't.", "Were they popular?|Yes, they were.", "Was there ice?|No, there wasn't.", "Were there bobsleighs?|No, there weren't."],
    ]),
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself. In sentences was and were are short: /wəz/, /wə/.",
    questions: phrases([
      "She was a very good ice skater.",
      "They weren't successful at first.",
      "Was it expensive?",
      "Yes, it was.",
      "There were no bobsleighs.",
      "Don't give up!",
      "successful",
      "Olympics",
      "invention",
      "decade",
    ]),
  },
];
