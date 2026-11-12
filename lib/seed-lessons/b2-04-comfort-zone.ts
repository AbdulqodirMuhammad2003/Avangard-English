/**
 * B2, 4-dars — «Out of your comfort zone». Sayohat va sarguzasht, Mary
 * Kingsley — Viktoriya davri sayohatchisi.
 * Grammatika: narrative forms — past simple, past continuous, past perfect.
 * Navigate B2, 2.1 asosida: tinglash mashqlarida kitob treklari (yopiq
 * ombordan), lug'at misollari kitob matni va Wordlist'idan yoki unga yaqin;
 * mashq matnlari o'zimizniki. Mashqlar inglizcha.
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

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

export const B2_04_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🧗", "adventurous", "ədˈventʃərəs|advencharas", "sifat", "Sarguzashtni yoqtiradigan, jasur", "Happy to try new and exciting things.", "You need to be more adventurous.", "Siz jasurroq bo'lishingiz kerak."),
      w("🛋️", "comfort zone", "ˈkʌmfət zəʊn|kamfat zoun", "ibora", "Qulaylik doirasi (o'rgangan muhit)", "The situations where you feel safe and relaxed.", "Step out of your comfort zone. It's really good for you sometimes.", "Qulaylik doirangizdan chiqing. Bu ba'zan juda foydali."),
      w("😍", "stunning", "ˈstʌnɪŋ|staning", "sifat", "Hayratlanarli darajada go'zal", "Extremely beautiful.", "Apparently, the views are absolutely stunning.", "Aytishlaricha, manzaralar juda go'zal ekan."),
      w("⛺", "roughing it", "ˈrʌfɪŋ ɪt|rafing it", "ibora", "Qulayliklarsiz yashash (chodirda va h.k.)", "Living without the usual comforts, e.g. in a tent.", "I'm not very good at roughing it. I like life's little luxuries!", "Qulayliklarsiz yashashga uncha qodir emasman. Hayotning kichik zavqlarini yoqtiraman!"),
      w("🏔️", "remote", "rɪˈməʊt|rimout", "sifat", "Olis, chekka", "Far away from towns and other people.", "I'd like to experience being in a completely remote environment.", "Butunlay olis muhitda bo'lib ko'rishni xohlardim."),
      w("❄️", "appeal", "əˈpiːl|apiil", "fe'l", "Yoqmoq, jalb qilmoq", "Seem attractive or interesting to someone.", "The cold weather doesn't appeal to me.", "Sovuq havo menga yoqmaydi."),
      w("🚶", "wander", "ˈwɒndə|wonda", "fe'l", "Sayr qilib yurmoq", "Walk slowly with no special plan.", "It would be great just to wander around the old streets.", "Eski ko'chalarda shunchaki aylanib yurish zo'r bo'lardi."),
      w("🌅", "soak up", "ˌsəʊk ˈʌp|souk ap", "ibora", "(Muhitni) his qilmoq, singdirmoq", "Enjoy and feel a place or experience fully.", "I'd love to wander around and soak up the atmosphere.", "Aylanib yurib, muhitni his qilishni juda xohlardim."),
      w("📸", "touristy", "ˈtʊərɪsti|turisti", "sifat", "Turistlar bilan to'la", "Full of tourists, in a way that is not attractive.", "I imagine it gets quite touristy in the summer.", "O'ylaymanki, yozda u yer turistlarga to'lib ketadi."),
      w("🍂", "out of season", "ˌaʊt əv ˈsiːzn|aut av siizn", "ibora", "Mavsumdan tashqari", "At a time of year when few tourists visit.", "It gets touristy in the summer, so it's probably best to go out of season.", "Yozda turist ko'p bo'ladi, shuning uchun mavsumdan tashqari borgan ma'qul."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🐧", "habitat", "ˈhæbɪtæt|hebitet", "ot", "Yashash muhiti", "The natural home of an animal or plant.", "I'd like to see the penguins in their natural habitat.", "Pingvinlarni tabiiy yashash muhitida ko'rishni xohlardim."),
      w("🕌", "magnificent", "mæɡˈnɪfɪsnt|megnifisnt", "sifat", "Muhtasham, ajoyib", "Extremely beautiful and impressive.", "Istanbul has magnificent historic buildings, like the Blue Mosque.", "Istanbulda Ko'k masjid kabi muhtasham tarixiy binolar bor."),
      w("🏕️", "basic facilities", "ˌbeɪsɪk fəˈsɪlətiz|beysik fasilatiz", "ibora", "Oddiy sharoit (qulayliklar)", "Only the simplest things, e.g. no hot water.", "You'd have to camp in tents, with very basic facilities.", "Juda oddiy sharoitli chodirlarda tunashga to'g'ri kelardi."),
      w("🤩", "breathtaking", "ˈbreθteɪkɪŋ|bresteyking", "sifat", "Nafasni to'xtatadigan darajada go'zal", "So beautiful that it surprises you.", "An iceberg would be a breathtaking sight.", "Aysberg nafasni to'xtatadigan manzara bo'lardi."),
      w("🗣️", "apparently", "əˈpærəntli|aperantli", "ravish", "Aytishlaricha, eshitishimcha", "According to what people say.", "Apparently, Machu Picchu is even better than in the photos.", "Aytishlaricha, Machu-Pikchu fotosuratlardagidan ham zo'r ekan."),
      w("🛁", "luxuries", "ˈlʌkʃəriz|lakshariz", "ot", "Hashamat, qulayliklar", "Nice things that you enjoy but don't really need.", "I like life's little luxuries, like a hot shower.", "Hayotning kichik qulayliklarini yoqtiraman, masalan, issiq dush."),
      w("👫", "travelling companion", "ˈtrævəlɪŋ kəmˌpæniən|trevaling kampenian", "ibora", "Hamroh (sayohatda)", "A person you travel with.", "If you need a travelling companion, let me know!", "Sayohatda hamroh kerak bo'lsa, menga ayting!"),
      w("📍", "destination", "ˌdestɪˈneɪʃn|destineyshn", "ot", "Manzil (boriladigan joy)", "The place you are travelling to.", "Can you think of a destination that really appeals to you?", "Sizni chindan jalb qiladigan biror manzilni ayta olasizmi?"),
      w("👀", "with your own eyes", "wɪð jər ˌəʊn ˈaɪz|wiz yor oun ayz", "ibora", "O'z ko'zingiz bilan", "Yourself, not in photos or on TV.", "Is there an animal that you'd like to see with your own eyes?", "O'z ko'zingiz bilan ko'rishni istagan hayvon bormi?"),
      w("➕", "add to", "ˈæd tə|ed ta", "fe'l", "…ni oshirmoq, qo'shmoq", "Make something bigger or better.", "Not speaking the language can add to the adventure.", "Tilni bilmaslik sarguzashtga yana qiziqarlilik qo'shishi mumkin."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🧭", "explorer", "ɪkˈsplɔːrə|iksploora", "ot", "Tadqiqotchi sayohatchi", "A person who travels to unknown places to learn about them.", "Mary Kingsley was the first explorer to show proper respect to the African people.", "Meri Kingsli afrikaliklarga munosib hurmat ko'rsatgan birinchi tadqiqotchi edi."),
      w("💪", "toughest", "ˈtʌfɪst|tafist", "sifat", "Eng chidamli, eng mard", "Strongest and bravest.", "She was one of the world's toughest and most adventurous explorers.", "U dunyodagi eng chidamli va jasur tadqiqotchilardan biri edi."),
      w("🧹", "household chores", "ˌhaʊshəʊld ˈtʃɔːz|haushould chooz", "ibora", "Uy yumushlari", "Jobs you do at home, like cleaning and cooking.", "Mary Kingsley preferred paddling up rivers to household chores.", "Meri Kingsli uy yumushlaridan ko'ra daryoda qayiq haydashni afzal ko'rardi."),
      w("🚣", "paddle", "ˈpædl|pedl", "ot", "Eshkak", "A short pole with a flat end for moving a small boat.", "The crocodile tried to climb into her canoe, so she hit it on the head with a paddle.", "Timsoh qayig'iga chiqmoqchi bo'ldi, u esa uning boshiga eshkak bilan urdi."),
      w("👨‍👧", "accompany", "əˈkʌmpəni|akampani", "fe'l", "Hamrohlik qilmoq", "Go somewhere with someone.", "There was no question that Mary Kingsley could accompany her father on his travels.", "Meri Kingslining otasiga sayohatlarda hamroh bo'lishi haqida gap ham bo'lishi mumkin emas edi."),
      w("📋", "responsibilities", "rɪˌspɒnsəˈbɪlətiz|risponsabilitiz", "ot", "Majburiyatlar", "Things that you must do or look after.", "With no family responsibilities, she decided to travel to West Africa.", "Oilaviy majburiyatlari qolmagach, u G'arbiy Afrikaga sayohat qilishga qaror qildi."),
      w("🎯", "mission", "ˈmɪʃn|mishn", "ot", "Vazifa, missiya", "An important job that someone has to do.", "Her first mission was to meet the native people of West Africa.", "Uning birinchi vazifasi G'arbiy Afrikaning tub aholisi bilan tanishish edi."),
      w("🙉", "ignore", "ɪɡˈnɔː|ignoo", "fe'l", "E'tibor bermaslik", "Pay no attention to something.", "Doctors warned her about tropical diseases, but she decided to ignore them.", "Shifokorlar uni tropik kasalliklar haqida ogohlantirdi, lekin u e'tibor bermaslikka qaror qildi."),
      w("🐊", "encounter", "ɪnˈkaʊntə|inkaunta", "ot", "Kutilmagan uchrashuv", "A sudden, unexpected meeting.", "Mary Kingsley once had an encounter with a crocodile.", "Meri Kingsli bir marta timsoh bilan to'qnash kelib qolgan."),
      w("🏛️", "legacy", "ˈleɡəsi|legasi", "ot", "Meros, qoldirgan izi", "Something that you are remembered for.", "Collecting unknown species of fish was not Mary Kingsley's only legacy.", "Noma'lum baliq turlarini to'plash Meri Kingslining yagona merosi emas edi."),
    ],
  },
];

const TEXT = `A WOMAN WHO SAID YES TO ADVENTURE
Mary Kingsley was born in London in 1862. Her father was a doctor who travelled a lot, but Mary stayed at home because her mother was often ill.
In 1892 both of her parents died. Mary had always dreamt of visiting West Africa, so the next year she sailed to Sierra Leone. Her father's friends had warned her about the dangers, but she ignored them.
While she was travelling, she lived with local people, who taught her how to fish. After she had learnt the necessary skills, she set off alone down the river.
One day, while she was canoeing, a crocodile tried to climb into her canoe. She hit it on the head with a paddle!
When she returned to England, she wrote two books about her travels. They became bestsellers.`;
const tf = trueFalse(TEXT);

export const B2_04_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("Step out of your comfort zone.", ["Step out of your comfort zone.", "Stay out of your comfort zone.", "Step into your comfort zone.", "Step out of the comfort zone."]),
      listen("I'm not very good at roughing it.", ["I'm not very good at roughing it.", "I'm not very good at running it.", "I wasn't very good at roughing it.", "I'm not very good at rough it."]),
      listen("She had always dreamt of visiting Africa.", ["She had always dreamt of visiting Africa.", "She has always dreamt of visiting Africa.", "She always dreamt of visiting Africa.", "She had always dreamt about visiting Africa."]),
      listen("While she was canoeing, she saw a crocodile.", ["While she was canoeing, she saw a crocodile.", "While she canoed, she saw a crocodile.", "When she was canoeing, she saw a crocodile.", "While she was canoeing, she had seen a crocodile."]),
      listen("We'd been driving all day and were totally exhausted.", ["We'd been driving all day and were totally exhausted.", "We'd driven all day and were totally exhausted.", "We were driving all day and were totally exhausted.", "We'd been driving all night and were totally exhausted."]),
      listen("By the time we arrived, we had got lost several times.", ["By the time we arrived, we had got lost several times.", "By the time we arrived, we got lost several times.", "When we arrived, we had got lost several times.", "By the time we arrived, we had lost several times."]),
      listen("It gets quite touristy in the summer.", ["It gets quite touristy in the summer.", "It gets quite touristic in the summer.", "It got quite touristy in the summer.", "It gets quite busy in the summer."]),
      listen("breathtaking", ["breathtaking", "breath-taken", "breathing", "heartbreaking"]),
      listen("adventurous", ["adventurous", "adventure", "advantageous", "adventures"]),
      listen("encounter", ["encounter", "counter", "encountered", "encourage"]),
    ],
  },
  {
    title: "Dream destinations",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to three people telling their friends where they would like to go. Answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("2.1"))("Conversation 1: Where would the woman like to go?", ["Peru, to walk the Inca Trail", "Antarctica", "Istanbul", "The Amazon"]),
      hearingTwo(track("2.1"))("Conversation 1: Which TWO things worry her friend?", ["The trek sounds like hard work.", "Camping in tents with basic facilities"], ["The cold weather", "The tourists"]),
      hearing(track("2.1"))("Conversation 2: Where would the man like to go?", ["Antarctica", "Peru", "Istanbul", "Canada"]),
      hearingTwo(track("2.1"))("Conversation 2: Which TWO things does he want to see?", ["Penguins in their natural habitat", "Icebergs in different shapes and colours"], ["Old palaces", "The Inca Trail"]),
      hearing(track("2.1"))("Conversation 2: What doesn't appeal to his friend?", ["The cold weather", "The long flight", "The food", "The trek"]),
      hearing(track("2.1"))("Conversation 3: Which buildings are mentioned in Istanbul?", ["The Blue Mosque and the royal palaces", "The Colosseum and the royal palaces", "The Blue Mosque and the cathedral", "The museums and the bridges"]),
      hearing(track("2.1"))("Conversation 3: Why is it best to go out of season?", ["It gets quite touristy in the summer.", "It's too hot in the summer.", "It's cheaper in winter.", "The museums are closed in summer."]),
      hearing(track("2.1"))("Conversation 3: Why does she like not speaking the language?", ["It adds to the adventure.", "She doesn't like learning languages.", "Everyone speaks English there.", "Her friend speaks Turkish."]),
    ],
  },
  {
    title: "Travel phrases",
    skill: "Listening",
    kind: "listengap",
    instructions: "Listen to the three conversations again. The sentences are in the order you hear them. Choose the missing words.",
    questions: [
      gaps(track("2.1"), [
        ["Apparently, the views are absolutely ___.", "stunning", "amazing", "beautiful"],
        ["I'm not very good at ___. I like life's little luxuries.", "roughing it", "camping", "walking"],
        ["You need to be more ___.", "adventurous", "active", "careful"],
        ["Step out of your comfort ___.", "zone", "area", "place"],
        ["I'd like to experience being in a completely ___ environment.", "remote", "natural", "quiet"],
        ["It would be a breathtaking ___.", "sight", "view", "place"],
        ["It's just the cold weather that doesn't ___ to me that much.", "appeal", "matter", "happen"],
        ["It would be great just to ___ around the old streets …", "wander", "walk", "look"],
        ["… and ___ the atmosphere.", "soak up", "take in", "enjoy"],
        ["I imagine it gets quite ___ in the summer.", "touristy", "busy", "crowded"],
        ["So it's probably best to go out of ___.", "season", "summer", "town"],
      ]),
    ],
  },
  {
    title: "Travel and adventure",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the word that completes the sentence.",
    questions: [
      say("Where is the most ___ place you've ever been? No roads, no people …", ["remote", "touristy", "stunning", "comfortable"]),
      say("Camping in the rain doesn't really ___ to me.", ["appeal", "wander", "soak", "attract"]),
      say("We spent the afternoon ___ around the old market.", ["wandering", "soaking", "roughing", "appealing"]),
      say("Lie on the beach and ___ up the sun!", ["soak", "wander", "take", "fill"]),
      say("Venice is beautiful, but it's very ___ in August — you can hardly walk.", ["touristy", "remote", "adventurous", "breathtaking"]),
      say("Hotels are much cheaper out of ___.", ["season", "time", "summer", "holiday"]),
      say("I'd love to see a gorilla with my own ___.", ["eyes", "face", "hands", "look"]),
      say("The view from the top of the mountain was ___.", ["breathtaking", "touristy", "remote", "adventurous"]),
      say("My sister is very ___ — she's tried bungee jumping and skydiving.", ["adventurous", "touristy", "remote", "luxurious"]),
      say("Penguins should live in their natural ___, not in a zoo.", ["habitat", "scenery", "atmosphere", "destination"]),
    ],
  },
  {
    title: "Why go there?",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match each reason for travelling to an example.",
    questions: pairs([
      ["wildlife|penguins and whales", "scenery|mountains and lakes", "architecture|palaces and old buildings", "weather|sunshine all year"],
      ["atmosphere|lively old streets and markets", "physical activity|trekking up mountains", "personal challenge|doing something very difficult", "luxuries|a hot shower and a soft bed"],
    ]),
  },
  {
    title: "A woman who said yes to adventure",
    skill: "Reading",
    kind: "truefalse",
    instructions: "Read the text. Are the sentences true or false?",
    questions: [
      tf("Mary often travelled with her father when she was young.", false, "She stayed at home because her mother was often ill."),
      tf("She had dreamt of West Africa before her parents died.", true, "«Mary had always dreamt of visiting West Africa»"),
      tf("She sailed to Sierra Leone in 1892.", false, "Her parents died in 1892; she sailed the next year."),
      tf("Her father's friends warned her before she left.", true),
      tf("Local people taught her how to fish.", true),
      tf("She set off alone before she had learnt the necessary skills.", false, "After she had learnt them."),
      tf("The crocodile attack happened while she was canoeing.", true),
      tf("Her books were not very popular.", false, "They became bestsellers."),
    ],
  },
  {
    title: "Words from the story",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match the words to their meanings.",
    questions: pairs([
      ["responsibilities|things you must do", "toughest|strongest and bravest", "paddling|moving a boat with an oar", "encounter|a sudden, unexpected meeting"],
      ["legacy|what you are remembered for", "ignored|paid no attention to", "accompany|go somewhere with someone", "household chores|cleaning, cooking, washing"],
    ]),
  },
  {
    title: "Which narrative form?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct option.",
    questions: [
      say("In 1893, she ___ to modern-day Sierra Leone.", ["sailed", "was sailing", "had sailed", "has sailed"]),
      say("She decided to travel to West Africa, a place she ___ of visiting.", ["had always dreamt", "was always dreaming", "always dreams", "has always dreamt"]),
      say("___ she was canoeing along the river, she had an encounter with a crocodile.", ["While", "During", "By the time", "After"]),
      say("The crocodile ___ to climb into her canoe, so she hit it with a paddle.", ["was trying", "had tried", "tries", "has tried"]),
      say("After she ___ the necessary skills, she set off alone.", ["had learnt", "was learning", "learns", "has learnt"]),
      say("I ___ for them to arrive when I heard the news.", ["was waiting", "had waited", "waited", "have waited"]),
      say("The hotel was not as nice as we ___.", ["had expected", "were expecting", "expect", "have expected"]),
      say("They were both working in Paris ___ they first met.", ["when", "while", "by the time", "as soon as"]),
      say("___ we arrived, we had got lost several times.", ["By the time", "While", "During", "As"]),
      say("We ___ coffee and Haruki was doing some shopping.", ["were drinking", "had drunk", "drank", "drink"]),
    ],
  },
  {
    title: "More stories about Kingsley",
    skill: "Grammar",
    kind: "fill",
    instructions: "Complete each sentence with the past simple, past continuous or past perfect of the verb in brackets.",
    questions: written([
      ["While she ___ in Africa, she wore a long black dress. (travel)", "was travelling|was traveling"],
      ["She wore the same clothes that she ___ at home. (wear)", "had worn|wore"],
      ["The dress saved her life once after she ___ into a deep hole. (fall)", "had fallen|fell"],
      ["She was one of the first Europeans to see a gorilla. She ___ anything so ugly before! (never see)", "had never seen"],
      ["Once, when she ___ through the jungle, she found a leopard in a trap. (walk)", "was walking"],
      ["She ___ the leopard and let it go. (rescue)", "rescued"],
      ["The leopard ___ caught in the trap the night before. (get)", "had got|had gotten"],
      ["When it started circling her, she ___ back at it and shouted «Go home!». (stare)", "stared"],
      ["I ___ asleep while I was watching TV last night. (fall)", "fell"],
      ["We ___ at the airport for two hours before they told us the flight was cancelled. (be)", "had been"],
    ]),
  },
  {
    title: "Grammar sentences",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear four sentences about Mary Kingsley. Listen and choose the missing words.",
    questions: [
      gaps(track("gr-2.1"), [
        ["Mary Kingsley decided to travel to Africa, a place she ___ of visiting.", "had always dreamt", "always dreamt", "was always dreaming"],
        ["She had two missions to complete while she ___ the continent.", "was travelling", "travelled", "had travelled"],
        ["Her father's friends ___ her of the dangers, but she ignored them.", "had warned", "were warning", "warn"],
        ["She encountered animals and sights she ___ before.", "hadn't seen", "didn't see", "wasn't seeing"],
      ]),
    ],
  },
  {
    title: "when, while, before, after, by the time",
    skill: "Grammar",
    kind: "fill",
    instructions: "Complete each sentence with when, while, after, as soon as or by the time.",
    questions: written([
      ["___ she was canoeing, a crocodile tried to climb into her boat.", "While|When"],
      ["___ she had learnt the skills, she set off alone.", "After|As soon as"],
      ["___ we got to the station, the train had already left.", "By the time"],
      ["I was having a shower ___ the phone rang.", "when"],
      ["___ the plane landed, she called her mother. She didn't wait a minute.", "As soon as"],
      ["___ she returned to England, she wrote two books.", "After|When"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("While she *canoed along the river, she saw a crocodile.", "Background action → past continuous: was canoeing."),
      mistake("She decided to go to Africa, a place she *has always dreamt of visiting.", "Before another past action → past perfect: had always dreamt."),
      mistake("By the time we arrived, the film *started.", "It happened before we arrived → had started."),
      mistake("I *was falling asleep while I was watching TV last night.", "Main event → past simple: I fell asleep."),
      mistake("She had never *saw a gorilla before.", "Past perfect = had + past participle: had never seen."),
      mistake("We *have been driving all day and were totally exhausted.", "Past story → we'd (had) been driving."),
      mistake("I'm not very good at *rough it — I like hotels.", "roughing it."),
      mistake("Step out of your comfort *area!", "comfort zone."),
      mistake("It's best to go out of *summer, when it's quieter.", "out of season."),
      mistake("Cold weather doesn't appeal *for me.", "appeal to someone."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "She had always dreamt of visiting West Africa.",
      "While she was canoeing, she had an encounter with a crocodile.",
      "After she had learnt the necessary skills, she set off alone.",
      "Her father's friends had warned her, but she ignored them.",
      "By the time we arrived, we had got lost several times.",
      "You need to step out of your comfort zone.",
      "I'd like to see a gorilla with my own eyes.",
      "It's probably best to go out of season.",
    ]),
  },
  {
    title: "Talk about a trip",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best answer.",
    questions: [
      say("If you could go anywhere in the world, where would you go?", ["Antarctica — I'd like to see the penguins in their natural habitat.", "Antarctica — I went there last year.", "I'd go to roughing it.", "I'm going anywhere."]),
      say("Would you like to walk the Inca Trail?", ["Not really. I'm not very good at roughing it.", "Yes, I've walked it tomorrow.", "No, it appeals to me a lot.", "Yes, it's very touristy, so I won't go."]),
      say("What happened on your trip?", ["We were driving to the coast when the car broke down.", "We drive to the coast when the car broke down.", "We had driven to the coast when the car breaks down.", "We were driven to the coast when the car broke down."]),
      say("Why were you so tired when you arrived?", ["We'd been travelling for twenty hours.", "We travel for twenty hours.", "We were travelled for twenty hours.", "We've been travelling for twenty hours yesterday."]),
      say("Is Istanbul nice in the summer?", ["Yes, but it gets quite touristy, so go out of season.", "Yes, but it gets quite remote.", "No, it's out of season in summer.", "Yes, it's a comfort zone."]),
      say("Do you want to come with me?", ["Sure — I'd love to be your travelling companion!", "Sure — I'd love to be your travel luxuries!", "Sure — I'm your destination!", "Sure — I ignored you!"]),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself.",
    questions: phrases([
      "Step out of your comfort zone.",
      "Apparently, the views are absolutely stunning.",
      "The cold weather doesn't appeal to me.",
      "It would be great to soak up the atmosphere.",
      "She had always dreamt of visiting Africa.",
      "While she was canoeing, she saw a crocodile.",
      "By the time we arrived, we had got lost.",
      "We'd been driving all day.",
      "breathtaking",
      "adventurous",
    ]),
  },
];
