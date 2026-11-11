/**
 * A1, 13-dars — «Kiyim: always, never». Navigate A1, 5.1 «Clothes» asosida:
 * kiyim turlari va ranglar, kiyim-kechak uslublari (smart, casual, sports,
 * fashion), odamlarning kiyimini tasvirlash. Grammatika: chastota
 * ravishlari (always, usually, often, sometimes, never) — oddiy fe'ldan
 * oldin, be dan keyin; and, but, because. Tinglash mashqlarida kitob
 * treklari (yopiq ombordan), savollar va matnlar o'zimizniki.
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
  slots,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-a1/audio/${n}.mp3`;

export const A1_13_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("👗", "dress", "dres|dres", "ot", "Ko'ylak (ayollar)", "One piece of clothing for a woman, from the top to the legs.", "A woman in a red dress.", "Qizil ko'ylakdagi ayol."),
      w("👒", "hat", "hæt|het", "ot", "Shlyapa, bosh kiyim", "You wear it on your head.", "She's got a grey hat.", "Uning kulrang shlyapasi bor."),
      w("🧥", "jacket", "ˈdʒækɪt|jekit", "ot", "Kurtka, pidjak", "A short coat.", "He wears a blue jacket to work.", "U ishga ko'k pidjak kiyadi."),
      w("👖", "jeans", "dʒiːnz|jiinz", "ot", "Jinsi shim", "Blue cotton trousers.", "A man in blue jeans and a green jumper.", "Ko'k jinsi va yashil sviterdagi erkak."),
      w("🧶", "jumper", "ˈdʒʌmpə|jampa", "ot", "Sviter", "A warm top for the cold.", "I've got a green jumper.", "Mening yashil sviterim bor."),
      w("👔", "shirt", "ʃɜːt|shyort", "ot", "Ko'ylak (erkaklar), ko'ylak-rubashka", "A top with buttons and a collar.", "He's got a blue shirt.", "Uning ko'k ko'ylagi bor."),
      w("👞", "shoes", "ʃuːz|shuuz", "ot", "Poyabzal, tufli", "You wear them on your feet.", "Good shoes are often expensive.", "Yaxshi tufli ko'pincha qimmat bo'ladi."),
      w("👗", "skirt", "skɜːt|skyort", "ot", "Yubka", "Clothing for a woman from the waist down, without legs.", "She's in a grey skirt and black shoes.", "U kulrang yubka va qora tufli kiygan."),
      w("👚", "top", "tɒp|top", "ot", "Kofta (ayollar)", "A piece of clothing for the top of the body.", "A woman in a red top.", "Qizil koftadagi ayol."),
      w("👖", "trousers", "ˈtraʊzəz|trauzaz", "ot", "Shim", "Clothing for the legs.", "He's got brown trousers.", "Uning jigarrang shimi bor."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("👕", "T-shirt", "ˈtiː ʃɜːt|tii shyort", "ot", "Futbolka", "A simple top with short arms.", "A man in a yellow T-shirt.", "Sariq futbolkadagi erkak."),
      w("👟", "trainers", "ˈtreɪnəz|treynaz", "ot", "Krossovka", "Sports shoes.", "He's got white trainers.", "Uning oq krossovkasi bor."),
      w("👚", "clothes", "kləʊðz|klouz", "ot", "Kiyim-kechak", "Shirts, trousers, dresses and other things you wear.", "I buy my clothes online.", "Kiyimlarimni internetdan olaman."),
      w("🧍", "wear", "weə|uea", "fe'l", "Kiymoq, kiyib yurmoq", "Have clothes on your body.", "I usually wear jeans at the weekend.", "Dam olish kunlari odatda jinsi kiyaman."),
      w("🤵", "smart", "smɑːt|smaat", "sifat", "Rasmiy, ozoda (kiyim)", "Nice and formal, for work or going out.", "I always wear smart clothes at work.", "Ishda doim rasmiy kiyinaman."),
      w("👕", "casual", "ˈkæʒuəl|kejual", "sifat", "Erkin, kundalik (kiyim)", "Comfortable, not formal.", "I sometimes wear casual clothes.", "Ba'zan erkin kiyim kiyaman."),
      w("💃", "fashion", "ˈfæʃn|feshn", "ot", "Moda", "The newest style of clothes.", "She likes fashion from the 1960s.", "U 1960-yillar modasini yoqtiradi."),
      w("🛍️", "shopping", "ˈʃɒpɪŋ|shoping", "ot", "Xarid qilish", "Going to shops to buy things.", "I love clothes shopping.", "Kiyim xarid qilishni juda yaxshi ko'raman."),
      w("💳", "buy", "baɪ|bay", "fe'l", "Sotib olmoq", "Get something with money.", "I don't often buy clothes.", "Men kiyimni tez-tez sotib olmayman."),
      w("🙋", "own", "əʊn|oun", "sifat", "O'zining", "Belonging to you.", "She sometimes makes her own clothes.", "U ba'zan kiyimlarini o'zi tikadi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("💯", "always", "ˈɔːlweɪz|oolueyz", "ravish", "Doim, har doim", "Every time.", "I always wear smart clothes in the week.", "Hafta davomida doim rasmiy kiyinaman."),
      w("🔁", "usually", "ˈjuːʒuəli|yuujuali", "ravish", "Odatda", "Almost always.", "At the weekend, I usually wear sports clothes.", "Dam olish kunlari odatda sport kiyimida yuraman."),
      w("📈", "often", "ˈɒfn|ofn", "ravish", "Tez-tez, ko'pincha", "Many times.", "David often wears his grandfather's old clothes.", "Devid ko'pincha bobosining eski kiyimlarini kiyadi."),
      w("🔀", "sometimes", "ˈsʌmtaɪmz|samtaymz", "ravish", "Ba'zan", "Not always, not often.", "I sometimes go shopping with my wife.", "Ba'zan xotinim bilan xaridga boraman."),
      w("🚫", "never", "ˈnevə|neva", "ravish", "Hech qachon", "Not at any time.", "I never wear yellow clothes.", "Men hech qachon sariq kiyim kiymayman."),
      w("🎨", "colour", "ˈkʌlə|kala", "ot", "Rang", "Red, blue, green… are colours.", "What's your favourite colour?", "Eng yoqtirgan rangingiz qaysi?"),
      w("💛", "yellow", "ˈjeləʊ|yelou", "sifat", "Sariq", "The colour of a lemon.", "He's wearing a yellow T-shirt.", "U sariq futbolka kiygan."),
      w("💚", "green", "ɡriːn|griin", "sifat", "Yashil", "The colour of grass.", "My bag is green.", "Sumkam yashil."),
      w("💙", "blue", "bluː|bluu", "sifat", "Ko'k", "The colour of the sky.", "My phone is blue.", "Telefonim ko'k."),
      w("🖤", "black", "blæk|blek", "sifat", "Qora", "The darkest colour.", "She's got black shoes.", "Uning qora tuflisi bor."),
    ],
  },
];

const STYLE = `WHAT CLOTHES TYPE ARE YOU?
There are four basic types of clothes: sports clothes, smart clothes (for work or going out), casual clothes and fashion clothes. Most of us wear different types at different times. Here are three readers' comments.

Jasur: «I always wear smart clothes in the week because I work in a bank. At the weekend, I usually wear sports clothes because I play football with my friends.»

Kamola: «Clothes aren't important to me. I don't often buy clothes. I sometimes go shopping with my sister, but I don't like it.»

Nigora: «I never wear smart clothes at work because I work at home. But I love fashion, and I often go clothes shopping with my friend Dilya at the weekend. Dilya's clothes are always amazing!»`;
const read = reading(STYLE);

export const A1_13_EXERCISES: SeedExercise[] = [
  {
    title: "Ranglar",
    skill: "Tinglash",
    kind: "listenmatch",
    instructions: "Sakkizta rang aytiladi. Tinglang va har bir raqam yoniga rangni inglizcha yozing.",
    questions: [
      slots(track("5.1"), [
        ["1.", "yellow"],
        ["2.", "green"],
        ["3.", "red"],
        ["4.", "brown"],
        ["5.", "blue"],
        ["6.", "white"],
        ["7.", "grey;gray"],
        ["8.", "black"],
      ]),
    ],
  },
  {
    title: "Kim nima kiygan?",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "To'rt juft odam tasvirlanadi (a–d). Tinglang va har bir gap uchun to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("5.2"), [
        ["a) The man's T-shirt is ___.", "yellow", "green", "blue"],
        ["a) His trainers are ___.", "white", "black", "grey"],
        ["a) The woman has got a grey top and a grey ___.", "hat", "skirt", "dress"],
        ["b) The man's jacket and trousers are ___.", "blue", "black", "brown"],
        ["b) The woman is in a red ___.", "dress", "top", "skirt"],
        ["c) The man is in blue jeans and a green ___.", "jumper", "shirt", "jacket"],
        ["d) The man's trousers are ___.", "brown", "black", "blue"],
        ["d) The woman's skirt is ___.", "grey", "red", "black"],
      ]),
    ],
  },
  {
    title: "Bir yoki ikki bo'g'in?",
    skill: "Talaffuz",
    kind: "listenmatch",
    instructions: "Kiyim nomlari aytiladi. Tinglang: so'zda nechta bo'g'in bor? Har biriga 1 yoki 2 yozing.",
    questions: [
      slots(track("5.4"), [
        ["dress", "1;one"],
        ["jacket", "2;two"],
        ["jeans", "1;one"],
        ["jumper", "2;two"],
        ["shoes", "1;one"],
        ["trainers", "2;two"],
        ["skirt", "1;one"],
        ["trousers", "2;two"],
      ]),
    ],
  },
  {
    title: "Kiyim uslubi",
    skill: "O'qish",
    kind: "reading",
    instructions: "Matn va o'quvchilar fikrlarini o'qing. Savollarga javob bering.",
    questions: [
      read("How many basic types of clothes are there?", ["Four", "Three", "Two", "Many"]),
      read("Who always enjoys clothes shopping?", ["Nigora", "Kamola", "Jasur", "Dilya"]),
      read("Who doesn't often buy clothes?", ["Kamola", "Nigora", "Jasur", "Dilya"]),
      read("Who usually wears sports clothes at the weekend?", ["Jasur", "Kamola", "Nigora", "Nobody"]),
      read("Who sometimes goes shopping with her sister?", ["Kamola", "Nigora", "Dilya", "Jasur"]),
      read("Who never wears smart clothes at work?", ["Nigora", "Jasur", "Kamola", "Dilya"]),
      read("Why does Jasur wear smart clothes in the week?", ["He works in a bank.", "He likes fashion.", "He goes out a lot.", "His wife buys them."]),
      read("Why does Nigora never wear smart clothes at work?", ["She works at home.", "She doesn't have any.", "She doesn't like fashion.", "Her job is in a gym."]),
      read("Whose clothes are always amazing?", ["Dilya's", "Kamola's", "Jasur's", "Nigora's"]),
      read("«I always wear smart clothes» — where is «always»?", ["Before the verb «wear»", "After the verb «wear»", "At the end", "At the start"]),
    ],
  },
  {
    title: "Ravish qayerda turadi?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "Chastota ravishi oddiy fe'ldan OLDIN keladi (I always wear…), lekin be dan KEYIN (Her clothes are always amazing). To'g'ri gapni tanlang.",
    questions: [
      say("Qaysi gap to'g'ri?", ["I never wear yellow clothes.", "I wear never yellow clothes.", "Never I wear yellow clothes.", "I wear yellow clothes never."]),
      say("Qaysi gap to'g'ri?", ["My father sometimes wears sports clothes.", "My father wears sometimes sports clothes.", "My father sometimes wear sports clothes.", "Sometimes my father wear sports clothes."]),
      say("Qaysi gap to'g'ri?", ["My work clothes are always smart.", "My work clothes always are smart.", "Always my work clothes are smart.", "My work clothes are smart always always."]),
      say("Qaysi gap to'g'ri?", ["I usually buy my clothes online.", "I buy usually my clothes online.", "Usually I buy online my clothes.", "I buy my usually clothes online."]),
      say("Qaysi gap to'g'ri?", ["I often go clothes shopping at the weekend.", "I go often clothes shopping at the weekend.", "Often I go clothes shopping often.", "I go clothes often shopping at the weekend."]),
      say("Clothes shopping ___ exciting. (har doim)", ["is always", "always is", "always", "are always"]),
      say("Good shoes ___ expensive. (ko'pincha)", ["are often", "often are", "often is", "is often"]),
      say("I ___ jeans to work. (hech qachon)", ["never wear", "wear never", "never wears", "don't never wear"]),
      say("She ___ late. (ba'zan)", ["is sometimes", "sometimes is", "sometimes are", "is sometime"]),
      say("We ___ to the market on Sundays. (odatda)", ["usually go", "go usually", "usually goes", "are usually go"]),
    ],
  },
  {
    title: "Necha marta?",
    skill: "Lug'at",
    kind: "match",
    instructions: "Juftlarni ulang.",
    questions: pairs([
      ["always|100%", "usually|80%", "often|60%", "never|0%"],
      ["always|doim", "usually|odatda", "sometimes|ba'zan", "never|hech qachon"],
      ["smart clothes|work", "sports clothes|the gym", "casual clothes|home", "fashion clothes|a party"],
      ["shoes|feet", "hat|head", "jumper|cold days", "T-shirt|hot days"],
      ["yellow|sariq", "green|yashil", "blue|ko'k", "black|qora"],
    ]),
  },
  {
    title: "and, but yoki because?",
    skill: "O'qish",
    kind: "choice",
    instructions: "and — ma'lumot qo'shadi; but — boshqa, qarama-qarshi ma'lumot beradi; because — sabab.",
    questions: [
      say("She lives in the city ___ her job is there.", ["because", "but", "and"]),
      say("She starts work at 8 a.m. ___ she finishes at 5 p.m.", ["and", "because", "but"]),
      say("She's got a lot of money, ___ she doesn't wear expensive clothes.", ["but", "because", "and"]),
      say("She works in a clothes shop in the day ___ in a restaurant in the evening.", ["and", "because", "but"]),
      say("She is thirty-two years old, ___ she lives with her parents.", ["but", "and", "because"]),
      say("She wears smart clothes ___ she works in a bank.", ["because", "but", "and"]),
      say("I don't drive to work ___ I haven't got a car.", ["because", "but", "and"]),
      say("I like Ramon's jeans, ___ I don't like his hat.", ["but", "because", "and"]),
      say("Kuniko's got a red top ___ her shoes are red, too.", ["and", "but", "because"]),
      say("They love fashion, ___ they don't like new clothes.", ["but", "and", "because"]),
    ],
  },
  {
    title: "Gapga ravish qo'shing",
    skill: "Grammatika",
    kind: "type",
    instructions: "Qavs ichidagi ravishni to'g'ri joyga qo'yib, gapni to'liq yozing.",
    questions: written([
      ["Clothes shopping is exciting. (always)", "Clothes shopping is always exciting."],
      ["I wear sports clothes. (never)", "I never wear sports clothes."],
      ["Good shoes are expensive. (often)", "Good shoes are often expensive."],
      ["I go shopping at the weekend. (usually)", "I usually go shopping at the weekend."],
      ["I wear casual clothes. (sometimes)", "I sometimes wear casual clothes."],
      ["My father wears a tie. (always)", "My father always wears a tie."],
      ["Her clothes are amazing. (always)", "Her clothes are always amazing."],
      ["We buy clothes online. (often)", "We often buy clothes online."],
      ["He is late for work. (never)", "He is never late for work.|He's never late for work."],
      ["She makes her own clothes. (sometimes)", "She sometimes makes her own clothes."],
    ]),
  },
  {
    title: "Kiyimlarni eslang",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "To'rt juft odamning tasvirini yana tinglang va savollarga javob bering.",
    questions: [
      hearing(track("5.2"))("a) What colour is the man's T-shirt?", ["Yellow", "Green", "White", "Blue"]),
      hearing(track("5.2"))("a) What colour are his trousers?", ["Black", "Brown", "Blue", "Grey"]),
      hearing(track("5.2"))("b) What is the woman wearing?", ["A red dress", "A red top and jeans", "A grey skirt", "A black top"]),
      hearing(track("5.2"))("c) What is the woman wearing?", ["A red top and blue jeans", "A red dress", "A grey hat", "A black top and a grey skirt"]),
      hearing(track("5.2"))("d) What colour are the woman's shoes?", ["Black", "White", "Red", "Grey"]),
    ],
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("I wear *never yellow clothes.", "Ravish fe'ldan oldin: I never wear…"),
      mistake("My clothes *always are smart.", "be dan keyin: are always smart."),
      mistake("I don't *never wear a hat.", "never o'zi inkor: I never wear a hat."),
      mistake("She *wear jeans at the weekend.", "she → wears."),
      mistake("He's wearing a blue *trouser.", "Shim — trousers (doim ko'plikda)."),
      mistake("I like fashion *because I don't buy new clothes.", "Qarama-qarshi fikr — but."),
      mistake("I don't drive *but I haven't got a car.", "Sabab — because."),
      mistake("A woman in a *dress red.", "Rang (sifat) otdan oldin: a red dress."),
      mistake("I *usualy go shopping on Saturdays.", "Imlo: usually (ikkita l)."),
      mistake("These shoes *is very expensive.", "shoes — ko'plik → are."),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "I never wear yellow clothes.",
      "My father sometimes wears sports clothes.",
      "My work clothes are always smart.",
      "I usually buy my clothes online.",
      "I often go clothes shopping at the weekend.",
      "A man in blue jeans and a green jumper.",
      "She's got a red top and blue jeans.",
      "What's your favourite colour?",
      "I don't drive because I haven't got a car.",
      "They love fashion, but they don't like new clothes.",
    ]),
  },
  {
    title: "Tinglang va toping",
    skill: "Tinglash",
    kind: "listen",
    instructions: "Gap ovoz chiqarib o'qiladi. Eshitganingizni toping.",
    questions: [
      listen("I always wear smart clothes.", ["I always wear smart clothes.", "I never wear smart clothes.", "I usually wear smart clothes.", "I always wear sports clothes."]),
      listen("She sometimes goes shopping.", ["She sometimes goes shopping.", "She often goes shopping.", "She never goes shopping.", "She sometimes goes swimming."]),
      listen("He's got a green jumper.", ["He's got a green jumper.", "He's got a grey jumper.", "He's got a green jacket.", "She's got a green jumper."]),
      listen("a red dress", ["a red dress", "a red top", "a white dress", "a red hat"]),
      listen("white trainers", ["white trainers", "white trousers", "black trainers", "white shoes"]),
      listen("I don't often buy clothes.", ["I don't often buy clothes.", "I often buy clothes.", "I don't always buy clothes.", "I don't often buy shoes."]),
      listen("brown trousers", ["brown trousers", "brown trainers", "blue trousers", "black trousers"]),
      listen("My phone is blue.", ["My phone is blue.", "My phone is black.", "My bag is blue.", "My phone isn't blue."]),
      listen("a grey skirt", ["a grey skirt", "a grey shirt", "a green skirt", "a red skirt"]),
      listen("Her clothes are always amazing.", ["Her clothes are always amazing.", "Her clothes are usually amazing.", "His clothes are always amazing.", "Her clothes aren't amazing."]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "yellow, green, red, brown",
      "blue, white, grey, black",
      "dress, hat, jeans, shirt, shoes",
      "jacket, jumper, trainers, trousers",
      "My favourite colour is green.",
      "I always wear smart clothes at work.",
      "I usually go shopping at the weekend.",
      "I never wear yellow clothes.",
      "She's got a red top and blue jeans.",
      "Her clothes are always amazing.",
    ]),
  },
];
