/**
 * B2, 17-dars — «Alone or together?». Yolg'iz yashash va co-housing
 * (birgalikda yashash jamoasi); uy-joy va turmush so'zlari.
 * Grammatika: determiners va quantifiers (many/much, a few/few, all/every/
 * each, both/either/neither, too many/enough).
 * Navigate B2, 6.2 asosida: tinglash mashqlarida kitob treklari (yopiq
 * ombordan), lug'at misollari kitob matni va Wordlist'idan yoki unga yaqin;
 * mashq matnlari o'zimizniki. Mashqlar inglizcha.
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
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

const heardTrue = (statement: string, isTrue: boolean, explanation?: string): SeedQuestion => ({
  prompt: statement,
  audio: track("6.1"),
  options: ["True", "False"],
  correct: isTrue ? 0 : 1,
  explanation,
});

export const B2_17_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🌍", "globally", "ˈɡləʊbəli|gloubali", "ravish", "Butun dunyo bo'yicha", "In the whole world.", "Globally, there's been a rise from 153 million people living alone to nearly 300 million.", "Butun dunyo bo'yicha yolg'iz yashovchilar 153 milliondan qariyb 300 millionga yetdi."),
      w("📈", "growth", "ɡrəʊθ|grouS", "ot", "O'sish", "An increase in size or number.", "The nations with the fastest growth in one-person households are China, India and Brazil.", "Bir kishilik xonadonlar eng tez o'sayotgan mamlakatlar — Xitoy, Hindiston va Braziliya."),
      w("🏠", "households", "ˈhaʊshəʊldz|haushouldz", "ot", "Xonadonlar, oilalar", "All the people living together in one home.", "Sweden has the highest percentage of one-person households.", "Shvetsiyada bir kishilik xonadonlar ulushi eng yuqori."),
      w("🚶", "independently", "ˌɪndɪˈpendəntli|indipendantli", "ravish", "Mustaqil ravishda", "Without help from other people.", "It's more popular to live independently in some countries than in others.", "Ba'zi mamlakatlarda mustaqil yashash boshqalarnikidan ko'ra ommaviyroq."),
      w("🧑", "resident", "ˈrezɪdənt|rezidant", "ot", "Aholi, yashovchi", "A person who lives in a place.", "47% of homes in Sweden have just one resident.", "Shvetsiyadagi uylarning 47 foizida faqat bitta kishi yashaydi."),
      w("🔄", "shift", "ʃɪft|shift", "ot", "O'zgarish, siljish", "A change in opinion or attitude.", "For many countries it represents a dramatic cultural shift.", "Ko'p mamlakatlar uchun bu keskin madaniy o'zgarishdir."),
      w("🏊", "shared facilities", "ˌʃeəd fəˈsɪlətiz|sheed fasilatiz", "ibora", "Umumiy qulayliklar", "Rooms or equipment that many people use.", "The houses have some shared facilities, such as heating, gardens and a laundry.", "Uylarda isitish, bog' va kir yuvish xonasi kabi umumiy qulayliklar bor."),
      w("🔒", "private", "ˈpraɪvət|prayvat", "sifat", "Shaxsiy", "Belonging to one person or group only.", "People live separately in private houses.", "Odamlar alohida shaxsiy uylarda yashashadi."),
      w("🏘️", "properties", "ˈprɒpətiz|propatiz", "ot", "Mulklar (uy-joylar)", "Buildings and the land around them.", "The properties are grouped into a small community.", "Uy-joylar kichik jamoaga birlashtirilgan."),
      w("⚡", "resources", "rɪˈsɔːsɪz|risoosiz", "ot", "Resurslar", "Things like electricity, water or money that people use.", "What are the advantages of sharing resources with your neighbours?", "Qo'shnilar bilan resurslarni bo'lishishning qanday afzalliklari bor?"),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🏡", "separately", "ˈseprətli|sepratli", "ravish", "Alohida", "Not together.", "In co-housing, people live separately but share some spaces.", "Co-housingda odamlar alohida yashashadi, lekin ba'zi joylarni birga ishlatishadi."),
      w("🤝", "supported", "səˈpɔːtɪd|sapootid", "fe'l", "Qo'llab-quvvatlagan", "Helped.", "In an old village, everyone supported each other.", "Eski qishloqda hamma bir-birini qo'llab-quvvatlardi."),
      w("☕", "socially", "ˈsəʊʃəli|soushali", "ravish", "Ijtimoiy jihatdan, birga dam olib", "With other people for fun.", "Do you see your neighbours socially?", "Qo'shnilaringiz bilan birga vaqt o'tkazasizmi?"),
      w("🏘️", "co-housing", "ˌkəʊ ˈhaʊzɪŋ|kou hauzing", "ot", "Birgalikda yashash jamoasi", "A small community of private homes with shared spaces.", "There is a big move towards something called co-housing.", "Co-housing degan narsaga katta qiziqish bor."),
      w("🏝️", "isolated", "ˈaɪsəleɪtɪd|ayslaytid", "sifat", "Yolg'izlangan, ajralgan", "Far away from other people.", "It's a way of having private space but not being completely isolated.", "Bu shaxsiy joyga ega bo'lib, butunlay yolg'izlanmaslik usuli."),
      w("🛏️", "spare bedroom", "ˌspeə ˈbedruːm|spea bedruum", "ibora", "Ortiqcha (mehmon) yotoqxona", "A bedroom that nobody usually uses.", "A lot of people have a spare bedroom for guests.", "Ko'pchilikda mehmonlar uchun ortiqcha yotoqxona bor."),
      w("🗑️", "a waste of space", "ə ˌweɪst əv ˈspeɪs|a weyst av speys", "ibora", "Joyni behuda isrof qilish", "Space that is not used well.", "An empty guest room is a waste of space!", "Bo'sh mehmon xonasi — joyni behuda isrof qilish!"),
      w("🛝", "play area", "ˈpleɪ ˌeəriə|pley earia", "ibora", "O'yin maydonchasi", "A place where children can play.", "We share a huge garden with a play area for the kids.", "Biz bolalar uchun o'yin maydonchali katta bog'ni birga ishlatamiz."),
      w("🧺", "laundry", "ˈlɔːndri|loondri", "ot", "Kir yuvish xonasi", "A room where you wash clothes.", "They share a laundry and an entertainment space.", "Ular kir yuvish xonasi va dam olish joyini birga ishlatishadi."),
      w("🏝️", "Scottish island", "ˌskɒtɪʃ ˈaɪlənd|skotish ayland", "ibora", "Shotlandiya oroli", "An island near the coast of Scotland.", "Emma is the only person living on a small Scottish island.", "Emma kichik Shotlandiya orolida yashaydigan yagona odam."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🔢", "a number of", "ə ˈnʌmbər əv|a nambar av", "ibora", "Bir qancha", "Several.", "A number of people in the project live alone.", "Loyihada bir qancha odam yolg'iz yashaydi."),
      w("💯", "hundreds of", "ˈhʌndrədz əv|handradz av", "ibora", "Yuzlab", "Many hundreds.", "Hundreds of people are living this way.", "Yuzlab odamlar shu tarzda yashayapti."),
      w("📦", "a great deal of", "ə ˌɡreɪt ˈdiːl əv|a greyt diil av", "ibora", "Ko'p (sanalmaydigan)", "A lot of (with uncountable nouns).", "Building a community takes a great deal of time.", "Jamoa qurish ko'p vaqt talab qiladi."),
      w("🤏", "a few houses", "ə ˌfjuː ˈhaʊzɪz|a fyuu hauziz", "ibora", "Bir nechta uy", "A small number of houses (positive).", "A few houses have been built already.", "Bir nechta uy allaqachon qurilgan."),
      w("😕", "few", "fjuː|fyuu", "olmosh", "Kam (kutilgandan)", "Not many (negative).", "Few people learn Latin at school these days.", "Hozir maktabda lotin tilini kamdan-kam odam o'rganadi."),
      w("🚗", "too many", "ˌtuː ˈmeni|tuu meni", "ibora", "Haddan tashqari ko'p (sanaladigan)", "More than you need.", "Far too many people drive to work every day.", "Haddan tashqari ko'p odam har kuni ishga mashinada boradi."),
      w("🪑", "enough chairs", "ɪˌnʌf ˈtʃeəz|inaf cheaz", "ibora", "Yetarli stullar", "As many chairs as you need.", "Are you sure there are enough chairs for everyone?", "Hammaga yetarli stul borligiga ishonchingiz komilmi?"),
      w("✌️", "both doctors", "ˌbəʊθ ˈdɒktəz|bouS doktaz", "ibora", "Ikkala shifokor ham", "The two doctors together.", "Both doctors now have practices in Edinburgh.", "Ikkala shifokorning ham hozir Edinburgda klinikasi bor."),
      w("❌", "neither", "ˈnaɪðə|nayza", "olmosh", "Ikkalasi ham … emas", "Not one and not the other.", "Neither of us wants to move.", "Ikkalamiz ham ko'chishni xohlamaymiz."),
      w("🔀", "either", "ˈaɪðə|ayza", "olmosh", "Ikkalasidan biri", "One or the other of two.", "I'm from neither the USA nor Canada — and I don't like either country's weather!", "Men AQShdan ham, Kanadadan ham emasman — ikkalasining ham ob-havosi yoqmaydi!"),
    ],
  },
];

const TEXT = `LIVING TOGETHER, APART
In many countries, more and more people are living alone. Globally, the number of one-person households has almost doubled in twenty years.
At the same time, co-housing is growing. Residents live separately in private houses, but the properties are grouped together and share facilities — a big garden, a laundry, a play area and a common house where guests can stay.
Supporters say it's the best of both worlds: you have your own space, but you're never completely isolated. Neighbours see each other socially and help each other, a bit like in an old-fashioned village.
Critics say that not everyone wants to see their neighbours every day — and that too many shared rules can be annoying.`;
const read = reading(TEXT);

export const B2_17_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("Far too many people drive to work every day.", ["Far too many people drive to work every day.", "Far too much people drive to work every day.", "Too many people drive to work every day.", "Far too many people drove to work every day."]),
      listen("Are you sure there are enough chairs for everyone?", ["Are you sure there are enough chairs for everyone?", "Are you sure there are enough chairs for every one?", "Are you sure there is enough chairs for everyone?", "Are you sure there are enough chairs for all?"]),
      listen("Few people learn Latin at school these days.", ["Few people learn Latin at school these days.", "A few people learn Latin at school these days.", "Few people learned Latin at school these days.", "Fewer people learn Latin at school these days."]),
      listen("All students must register before Tuesday.", ["All students must register before Tuesday.", "Every students must register before Tuesday.", "All the students must register before Thursday.", "All students must registered before Tuesday."]),
      listen("Both doctors now have practices in Edinburgh.", ["Both doctors now have practices in Edinburgh.", "Both of doctors now have practices in Edinburgh.", "Both doctors now has practices in Edinburgh.", "Both doctors now have practice in Edinburgh."]),
      listen("Neither of us wants to move.", ["Neither of us wants to move.", "Either of us wants to move.", "Neither of us want to move.", "None of us wants to move."]),
      listen("What a waste of space!", ["What a waste of space!", "What a waste of time!", "What a waste of place!", "What waste of space!"]),
      listen("households", ["households", "household", "householders", "housewives"]),
      listen("independently", ["independently", "independent", "independence", "dependently"]),
      listen("facilities", ["facilities", "facility", "families", "faculties"]),
    ],
  },
  {
    title: "Housing and living",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the word that completes the sentence.",
    questions: [
      say("___, there's been a rise from 153 million people living alone to nearly 300 million.", ["Globally", "Socially", "Separately", "Privately"]),
      say("It's more popular to live ___ in some countries than in others.", ["independently", "globally", "socially", "together"]),
      say("47% of homes in Sweden have just one ___.", ["resident", "resource", "property", "facility"]),
      say("For many countries it represents a dramatic cultural ___.", ["shift", "growth", "household", "resource"]),
      say("The fastest ___ in one-person households is in China, India and Brazil.", ["growth", "shift", "resident", "property"]),
      say("In co-housing, people live ___ in private houses.", ["separately", "globally", "independently of", "socially"]),
      say("The ___ are grouped into a small community.", ["properties", "residents", "growths", "shifts"]),
      say("They share ___, such as heating, gardens and a laundry.", ["facilities", "households", "shifts", "residents"]),
      say("In an old village, everyone ___ each other.", ["supported", "separated", "shifted", "resided"]),
      say("Neighbours spent time together ___.", ["socially", "globally", "separately", "privately"]),
    ],
  },
  {
    title: "Alone or together?",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to a radio programme about Emma, who lives alone, and Harry, who lives in co-housing. Answer the questions.",
    questions: [
      hearing(track("6.1"))("Where does Emma live?", ["Alone on a remote Scottish island", "In a co-housing project in Yorkshire", "In a big city flat", "With her parents"]),
      hearing(track("6.1"))("Where does Harry live?", ["In the Lilac co-housing project in Yorkshire", "On a farm in Scotland", "In London", "In Sweden"]),
      hearing(track("6.1"))("Who does Harry live with?", ["His young family", "Alone", "His brother", "Friends from university"]),
      hearing(track("6.1"))("Why doesn't Emma feel lonely?", ["She lives on a farm with animals and has a phone.", "She has many neighbours.", "She lives with her family.", "She works in a big office."]),
      hearing(track("6.1"))("What appealed to Harry about co-housing?", ["A private house, but with other people around", "Cheap rent", "Living on an island", "No neighbours at all"]),
      hearing(track("6.1"))("Where do guests stay in Harry's community?", ["In a guest room in the shared Common Hall", "In a spare bedroom in every house", "In a hotel", "In tents in the garden"]),
    ],
  },
  {
    title: "True or false?",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to the programme again. Are the sentences true or false?",
    questions: [
      heardTrue("Many more people now live alone than before.", true),
      heardTrue("Both Emma and Harry live with family.", false, "Emma lives alone."),
      heardTrue("A number of people in the Lilac co-housing project don't share their house.", true, "Plenty of people there live alone."),
      heardTrue("Neither Harry nor Emma feels lonely.", true),
      heardTrue("According to Harry, too many people have rooms they don't use.", true, "A spare bedroom is «a waste of space»."),
      heardTrue("Every house at the Lilac co-housing project has its own garden.", false, "Some still do, but they share a huge garden."),
    ],
  },
  {
    title: "Living together, apart",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the text. Choose the correct answer.",
    questions: [
      read("What has happened to one-person households?", ["They have almost doubled in twenty years.", "They have disappeared.", "They have stayed the same.", "They have halved."]),
      read("How do people live in co-housing?", ["In private houses with shared facilities", "All in one big house", "In tents", "Alone on islands"]),
      read("Where can guests stay?", ["In the common house", "In a spare bedroom", "In a hotel", "In the laundry"]),
      read("Why do supporters like co-housing?", ["You have your own space but aren't isolated.", "It's very cheap.", "You never see your neighbours.", "There are no rules."]),
      read("What do critics say?", ["Too many shared rules can be annoying.", "The houses are too big.", "The gardens are too small.", "There are no facilities."]),
    ],
  },
  {
    title: "Determiners and quantifiers",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct option.",
    questions: [
      say("How ___ houses are there in the community?", ["many", "much", "a great deal of", "little"]),
      say("___ house is the same size.", ["Every", "All", "Both", "Many"]),
      say("___ people could live completely alone on an island.", ["Few", "Little", "Much", "A little"]),
      say("___ the houses have three bedrooms.", ["All", "Every", "Each", "Either"]),
      say("___ of the bedrooms is very large.", ["Neither", "Both", "All", "Many"]),
      say("There aren't ___ car parking spaces.", ["enough", "much", "every", "each"]),
      say("Did you do ___ sightseeing in Paris?", ["much", "many", "a few", "several"]),
      say("There are houses on ___ side of the street.", ["each", "every", "all", "both of"]),
      say("___ of them speak French.", ["Both", "Either", "Every", "Each"]),
      say("I don't like ___ house.", ["either", "neither", "both", "all"]),
    ],
  },
  {
    title: "Grammar sentences",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear five sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("gr-6.2"), [
        ["___ people drive to work every day.", "Far too many", "Far too much", "A few"],
        ["Are you sure there are ___ chairs for everyone?", "enough", "too many", "much"],
        ["___ people learn Latin at school these days. It's such a pity.", "Few", "A few", "Little"],
        ["___ students must register before Tuesday.", "All", "Every", "Each"],
        ["Although they trained in Glasgow, ___ doctors now have practices in Edinburgh.", "both", "either", "neither"],
      ]),
    ],
  },
  {
    title: "Weak «of»",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear five sentences. «of» is weak: /əv/. Listen and choose the missing words.",
    questions: [
      gaps(track("6.2"), [
        ["___ people are living this way.", "Hundreds of", "Hundred of", "Hundreds"],
        ["___ love the footpaths.", "Most of us", "Most us", "Most of"],
        ["___ people live alone.", "Plenty of", "Plenty", "Lots"],
        ["___ people don't have a car.", "A lot of", "A lots of", "Lot of"],
        ["___ wants to move.", "Neither of us", "Either of us", "None us"],
      ]),
    ],
  },
  {
    title: "A brochure",
    skill: "Grammar",
    kind: "fill",
    instructions: "Complete the brochure with all, both, each, either or a few.",
    questions: written([
      ["___ the apartments are finished to the same high standard.", "All"],
      ["At the same time, ___ apartment has its own colour scheme.", "each|every"],
      ["You can choose an apartment with a river view or a view of the park. ___ of the apartments have both views.", "A few|a few"],
      ["You can choose ___ a one-bedroom or a two-bedroom option.", "either"],
      ["Whichever you choose, ___ bedrooms have en-suite bathrooms.", "all"],
      ["Would you like tea or coffee? — ___ — I don't mind.", "Either"],
    ]),
  },
  {
    title: "Countable or uncountable?",
    skill: "Grammar",
    kind: "match",
    instructions: "Which kind of noun does each quantifier go with?",
    questions: pairs([
      ["many|countable", "much|uncountable", "a few|countable", "a little|uncountable"],
      ["several|countable", "a great deal of|uncountable", "a lot of|both", "enough|both"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("How *much houses are there?", "Countable → How many houses?"),
      mistake("*Every the apartments have been sold.", "All (of) the apartments / Every apartment."),
      mistake("*Both them speak French.", "Both of them."),
      mistake("I don't like either *the houses.", "either of the houses."),
      mistake("Neither David *or Andrew speaks German.", "neither … nor."),
      mistake("There are too *much cars in the city.", "Countable → too many."),
      mistake("I haven't got *enough of time.", "enough time."),
      mistake("*All house has the same door.", "Singular → Every house."),
      mistake("Sweden has the highest number of one-person *housing.", "households."),
      mistake("An empty guest room is a waste of *place.", "a waste of space."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "Hundreds of people are living this way.",
      "Neither of us wants to move.",
      "Every house has its own front door.",
      "Both the communities share a garden.",
      "There aren't enough parking spaces.",
      "Far too many people drive to work.",
      "Residents share facilities such as a laundry.",
      "It's a way of not being completely isolated.",
    ]),
  },
  {
    title: "Talk about where you live",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best answer.",
    questions: [
      say("Do many people live alone in your city?", ["Quite a few, especially young professionals.", "Quite a little, especially young professionals.", "Much people live alone.", "Every people live alone."]),
      say("Do you know your neighbours?", ["Yes, I know a few of them quite well.", "Yes, I know few of them very well and I see them every day.", "Yes, I know a little of them.", "Yes, I know much of them."]),
      say("Would you like tea or coffee?", ["Either — I don't mind.", "Neither — I don't mind.", "Both — I don't mind.", "All — I don't mind."]),
      say("Are your parents from Tashkent?", ["Both of them are, actually.", "Both them are, actually.", "Either of them are.", "Neither them is."]),
      say("Is there enough space in your flat?", ["Not really — there isn't enough room for guests.", "Not really — there isn't enough rooms for guest.", "Not really — there aren't enough of space.", "Not really — too much rooms."]),
      say("Would you like to live in co-housing?", ["Maybe — I like the idea of sharing facilities.", "Maybe — I like the idea of share facilities.", "Maybe — I like the idea to sharing.", "Maybe — I like idea of sharing facility."]),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then say it yourself. «of» is weak and links to the word before it.",
    questions: phrases([
      "Hundreds of people are living this way.",
      "Most of us love the footpaths.",
      "Plenty of people live alone.",
      "A lot of people don't have a car.",
      "Neither of us wants to move.",
      "Far too many people drive to work.",
      "Are there enough chairs for everyone?",
      "households",
      "facilities",
      "independently",
    ]),
  },
];
