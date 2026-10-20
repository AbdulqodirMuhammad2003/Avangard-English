/**
 * A1, 9-dars — «Oilam». Oila a'zolari, tabrik va kundalik iboralar.
 * Grammatika: egalik olmoshlari (my, your, his, her, its, our, their),
 * egalik 's (Aziz's car, my sister's name), Whose…? Matn va mashqlar
 * o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  hearing,
  listen,
  mistake,
  pairs,
  phrases,
  pick,
  reading,
  say,
  sentences,
  w,
  written,
  type Rounds,
} from "./helpers";

export const A1_09_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("👩", "mother", "ˈmʌðə|maza", "ot", "Ona", "Your female parent. Mum is short for mother.", "My mother is a teacher.", "Onam — o'qituvchi."),
      w("👨", "father", "ˈfɑːðə|faaza", "ot", "Ota", "Your male parent. Dad is short for father.", "My father is fifty.", "Otam ellik yoshda."),
      w("👫", "parents", "ˈpeərənts|pearents", "ot (ko'plik)", "Ota-ona", "Your mother and father.", "My parents are at home.", "Ota-onam uyda."),
      w("👦", "brother", "ˈbrʌðə|braza", "ot", "Aka; uka", "A boy or man with the same parents as you.", "Have you got a brother?", "Akangiz (ukangiz) bormi?"),
      w("👧", "sister", "ˈsɪstə|sista", "ot", "Opa; singil", "A girl or woman with the same parents as you.", "My sister is a student.", "Opam (singlim) — talaba."),
      w("👶", "son", "sʌn|san", "ot", "O'g'il", "Your male child. It sounds like «sun»!", "Their son is a doctor.", "Ularning o'g'li — shifokor."),
      w("👧", "daughter", "ˈdɔːtə|doota", "ot", "Qiz (farzand)", "Your female child. The «gh» is silent.", "Their daughter is ten.", "Ularning qizi o'n yoshda."),
      w("🤵", "husband", "ˈhʌzbənd|hazbend", "ot", "Er (turmush o'rtoq)", "The man a woman is married to.", "Her husband is an engineer.", "Uning eri — muhandis."),
      w("👰", "wife", "waɪf|uayf", "ot", "Xotin (turmush o'rtoq)", "The woman a man is married to.", "His wife is from Tashkent.", "Uning xotini Toshkentdan."),
      w("👴👵", "grandparents", "ˈɡrænpeərənts|grenpearents", "ot (ko'plik)", "Bobo va buvi", "The parents of your mother or father.", "My grandparents live in a village.", "Bobom va buvim qishloqda yashashadi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("👵", "grandmother", "ˈɡrænmʌðə|grenmaza", "ot", "Buvi", "The mother of your mother or father. Granny.", "My grandmother makes great plov.", "Buvim zo'r palov pishiradi."),
      w("👴", "grandfather", "ˈɡrænfɑːðə|grenfaaza", "ot", "Bobo", "The father of your mother or father. Grandpa.", "My grandfather is eighty.", "Bobom sakson yoshda."),
      w("🧔", "uncle", "ˈʌŋkl|ankl", "ot", "Amaki; tog'a", "The brother of your mother or father.", "My uncle is a pilot.", "Amakim — uchuvchi."),
      w("👩‍🦱", "aunt", "ɑːnt|aant", "ot", "Amma; xola", "The sister of your mother or father.", "My aunt has got three children.", "Xolamning uchta farzandi bor."),
      w("🧑‍🤝‍🧑", "cousin", "ˈkʌzn|kazn", "ot", "Amakivachcha, xolavachcha", "The child of your uncle or aunt.", "Aziz is my cousin.", "Aziz — amakivachcham."),
      w("👨‍👩‍👧‍👦", "family", "ˈfæməli|femili", "ot", "Oila", "Parents, children, grandparents…", "We are a big family.", "Biz katta oilamiz."),
      w("👯", "twins", "twɪnz|tuinz", "ot (ko'plik)", "Egizaklar", "Two children born at the same time to one mother.", "Hasan and Husan are twins.", "Hasan va Husan — egizaklar."),
      w("☝️", "only child", "ˌəʊnli ˈtʃaɪld|ounli chayld", "ibora", "Yagona farzand", "A child with no brothers or sisters.", "I'm an only child.", "Men yagona farzandman."),
      w("🎂", "birthday", "ˈbɜːθdeɪ|byosdey", "ot", "Tug'ilgan kun", "The day you were born, every year.", "When is your birthday?", "Tug'ilgan kuningiz qachon?"),
      w("💒", "wedding", "ˈwedɪŋ|ueding", "ot", "To'y (nikoh to'yi)", "The day two people get married.", "The wedding is on Saturday.", "To'y shanba kuni."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("👨", "his", "hɪz|hiz", "olmosh", "Uning (erkakning)", "Belongs to him.", "His car is new.", "Uning mashinasi yangi."),
      w("👩", "her", "hɜː|hyo", "olmosh", "Uning (ayolning)", "Belongs to her.", "Her name is Malika.", "Uning ismi Malika."),
      w("👪", "our", "ˈaʊə|aua", "olmosh", "Bizning", "Belongs to us.", "Our flat is small.", "Bizning kvartiramiz kichik."),
      w("👥", "their", "ðeə|zea", "olmosh", "Ularning", "Belongs to them. It sounds like «there».", "Their house is very big.", "Ularning uyi juda katta."),
      w("🐈", "its", "ɪts|its", "olmosh", "Uning (narsa, hayvon)", "Belongs to it. No apostrophe!", "The cat is in its bed.", "Mushuk o'z to'shagida."),
      w("❓", "whose", "huːz|huuz", "so'roq so'z", "Kimning", "A question word about who something belongs to.", "Whose bag is this?", "Bu kimning sumkasi?"),
      w("🎉", "happy birthday", "ˌhæpi ˈbɜːθdeɪ|hepi byosdey", "ibora", "Tug'ilgan kuning muborak", "You say it on someone's birthday.", "Happy birthday, Mum!", "Tug'ilgan kuningiz muborak, oyijon!"),
      w("🥳", "congratulations", "kənˌɡrætʃuˈleɪʃnz|kangrechuleyshnz", "undov", "Tabriklayman", "You say it when someone does something great.", "Congratulations on your new job!", "Yangi ishingiz bilan tabriklayman!"),
      w("🍀", "good luck", "ˌɡʊd ˈlʌk|gud lak", "ibora", "Omad", "You say it before an exam or a game.", "Good luck in your exam!", "Imtihoningizda omad!"),
      w("👌", "no problem", "ˌnəʊ ˈprɒbləm|nou problem", "ibora", "Hechqisi yo'q, arzimaydi", "An answer to «thank you» or «sorry».", "— Thank you! — No problem.", "— Rahmat! — Arzimaydi."),
    ],
  },
];

const POSS = ["my", "your", "his", "her", "its", "our", "their"];

const FAMILY = `My name is Dilshod. I'm from Andijan. This is a photo of my family. These are my parents. My father's name is Rustam — he's a farmer. My mother's name is Nodira. She's a nurse. I've got one sister and two brothers. My sister Zarina is married. Her husband is a teacher, and their daughter is two. My brothers are twins. Their names are Hasan and Husan. They're students. And this old man is my grandfather. He's eighty-five! My grandmother isn't in the photo — she's at her sister's house.`;
const read = reading(FAMILY);

const PARTY = `Hi, Anvar! Happy birthday!
Thank you, Laylo! Come in, please.
Wow, a lot of people! Whose children are these?
They're my sister's children. Her son is six and her daughter is four.
And who's that man next to the window?
That's my uncle Bakhtiyor. He's my mother's brother.
Is the woman with him his wife?
Yes, that's my aunt Gulnoza. Their son is my best friend!
Here's your present. Good luck at your new job!
Thank you so much!`;
const hear = hearing(PARTY);

export const A1_09_EXERCISES: SeedExercise[] = [
  {
    title: "Oila a'zolari",
    skill: "Tinglash",
    kind: "listen",
    instructions: "So'z o'qiladi. Eshitganingizni toping.",
    questions: [
      listen("mother", ["mother", "brother", "father", "other"]),
      listen("brother", ["mother", "brother", "bother", "father"]),
      listen("daughter", ["daughter", "doctor", "water", "dirty"]),
      listen("son", ["son", "sun", "some", "sing"], "son va sun bir xil eshitiladi — ma'nosi gapdan bilinadi."),
      listen("aunt", ["aunt", "ant", "and", "uncle"]),
      listen("cousin", ["cousin", "kitchen", "chicken", "dozen"]),
      listen("husband", ["husband", "hospital", "headband", "hundred"]),
      listen("twins", ["twins", "twice", "twenty", "tins"]),
      listen("wedding", ["wedding", "waiting", "reading", "writing"]),
      listen("grandparents", ["grandparents", "grandmother", "parents", "grandfather"]),
    ],
  },
  {
    title: "Rasmga mos so'z",
    skill: "Rasm",
    kind: "picture",
    instructions: "Rasmga qarang va mos inglizcha so'zni toping.",
    questions: [
      pick("👵", ["grandmother", "mother", "aunt", "sister"], 0),
      pick("👴", ["father", "grandfather", "uncle", "brother"], 1),
      pick("👯", ["cousins", "parents", "twins", "grandparents"], 2),
      pick("💒", ["birthday", "family", "holiday", "wedding"], 3),
      pick("🎂", ["birthday", "wedding", "Happy New Year", "party"], 0),
      pick("🍀", ["congratulations", "good luck", "no problem", "happy birthday"], 1),
      pick("👰", ["husband", "sister", "wife", "daughter"], 2),
      pick("🤵", ["wife", "uncle", "cousin", "husband"], 3),
      pick("👨‍👩‍👧‍👦", ["family", "parents", "twins", "children"], 0),
      pick("🥳", ["good luck", "congratulations", "sorry", "goodbye"], 1),
    ],
  },
  {
    title: "Kim u menga?",
    skill: "Lug'at",
    kind: "choice",
    instructions: "Oila a'zolari orasidagi bog'liqlikni toping.",
    questions: [
      say("My father's brother is my …", ["uncle", "aunt", "cousin", "grandfather"]),
      say("My mother's sister is my …", ["aunt", "uncle", "sister", "grandmother"]),
      say("My uncle's son is my …", ["cousin", "brother", "nephew", "uncle"]),
      say("My mother's mother is my …", ["grandmother", "aunt", "mother", "sister"]),
      say("My father's wife is my …", ["mother", "aunt", "sister", "grandmother"]),
      say("My sister's husband is my …", ["brother-in-law", "uncle", "cousin", "father"], "brother-in-law — kuyov (opa-singilning eri)."),
      say("My parents' son is my …", ["brother", "cousin", "uncle", "son"]),
      say("A man and his wife are …", ["husband and wife", "brother and sister", "twins", "cousins"]),
      say("I haven't got brothers or sisters. I'm an …", ["only child", "twin", "cousin", "aunt"]),
      say("My grandmother's husband is my …", ["grandfather", "uncle", "father", "husband"]),
    ],
  },
  {
    title: "my, his, her…",
    skill: "Grammatika",
    kind: "choice",
    instructions:
      "I → my, you → your, he → his, she → her, it → its, we → our, they → their. Mos egalik olmoshini tanlang.",
    questions: [
      pick("I'm Aziz. ___ surname is Karimov.", POSS, 0),
      pick("You're a student. What's ___ name?", POSS, 1),
      pick("He's a doctor. ___ wife is a nurse.", POSS, 2),
      pick("She's my aunt. ___ son is my cousin.", POSS, 3),
      pick("The dog is in ___ bed.", POSS, 4, "Hayvon yoki narsa — its (apostrofsiz!)."),
      pick("We live in Tashkent. ___ flat is small.", POSS, 5),
      pick("They're my neighbours. ___ garden is beautiful.", POSS, 6),
      pick("My brother and I love ___ grandmother.", POSS, 5),
      pick("Malika and Aziz are married. ___ daughter is two.", POSS, 6),
      pick("Mr Karimov is our teacher. ___ car is old.", POSS, 2),
    ],
  },
  {
    title: "Egalik 's",
    skill: "Grammatika",
    kind: "type",
    instructions: "Kimning narsasi ekanini 's bilan yozing. Masalan: Aziz / car → Aziz's car.",
    questions: written([
      ["Aziz / car", "Aziz's car"],
      ["my sister / name", "my sister's name"],
      ["Malika / phone", "Malika's phone"],
      ["my father / brother", "my father's brother", "Otamning akasi — amakim."],
      ["the teacher / bag", "the teacher's bag"],
      ["my mother / birthday", "my mother's birthday"],
      ["Anvar / wife", "Anvar's wife"],
      ["my parents / house", "my parents' house", "Ko'plik -s bilan tugasa, faqat apostrof: parents'."],
      ["Mr Brown / office", "Mr Brown's office"],
      ["my cousin / wedding", "my cousin's wedding"],
    ]),
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Chap va o'ng tomonni ulang.",
    questions: pairs([
      ["mother|father", "son|daughter", "husband|wife", "brother|sister"],
      ["grandmother|grandfather", "uncle|aunt", "aunt|uncle", "mother|father"],
      ["I|my", "you|your", "he|his", "she|her"],
      ["it|its", "we|our", "they|their", "I|my"],
      ["mother|ona", "daughter|qiz (farzand)", "uncle|amaki", "cousin|amakivachcha"],
      ["Happy birthday!|Thank you!", "Thank you!|No problem.", "I've got an exam today.|Good luck!", "I've got a new job!|Congratulations!"],
      ["family|oila", "wedding|to'y", "birthday|tug'ilgan kun", "twins|egizaklar"],
    ]),
  },
  {
    title: "Nima deysiz?",
    skill: "Vaziyat",
    kind: "situation",
    instructions: "Vaziyatni o'qing va unga mos inglizcha iborani tanlang.",
    questions: [
      say("Bugun do'stingizning tug'ilgan kuni.", ["Happy birthday!", "Good luck!", "No problem!", "Congratulations on your new job!"]),
      say("Do'stingizning ertaga imtihoni bor.", ["Good luck!", "Happy birthday!", "Sorry!", "Welcome!"]),
      say("Opangiz yangi ishga kirdi.", ["Congratulations!", "No problem!", "Good night!", "Sorry!"]),
      say("Do'stingiz sizga «Thank you!» dedi.", ["No problem!", "Good luck!", "Happy birthday!", "Congratulations!"]),
      say("Do'stingiz «Sorry, I'm late!» dedi.", ["No problem.", "Congratulations!", "Happy birthday!", "Good luck!"]),
      say("Akangizning to'yi bo'lyapti. Kelin-kuyovga nima deysiz?", ["Congratulations!", "Good luck!", "No problem!", "Sorry!"]),
      say("Stol ustida kimningdir sumkasi turibdi. So'rang.", ["Whose bag is this?", "Who is this bag?", "Whose is bag?", "Where bag is this?"]),
      say("Yangi do'stingizdan oilasi haqida so'rang.", ["Have you got any brothers or sisters?", "Are you got a brother?", "Whose is your family?", "How old is your family?"]),
      say("Do'stingiz «I've got a baby sister!» dedi.", ["Congratulations!", "Good luck!", "No problem!", "Sorry!"]),
      say("Oilangiz haqida gapiring.", ["There are five people in my family.", "My family are five people have.", "I've got family five.", "Five my family."]),
    ],
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("She's my sister. *His name is Zarina.", "Ayol — her: Her name is Zarina."),
      mistake("This is *Aziz car.", "Egalik — 's: Aziz's car."),
      mistake("The cat is in *it's bed.", "it's = it is. Egalik — its: in its bed."),
      mistake("*Who's bag is this?", "Kimning — whose: Whose bag is this?"),
      mistake("They love *there grandmother.", "Ularning — their: their grandmother."),
      mistake("We're students. *Us teacher is Mrs Brown.", "Bizning — our: Our teacher is Mrs Brown."),
      mistake("My *fathers name is Rustam.", "Egalik apostrof bilan: My father's name."),
      mistake("I've got two *daughter.", "Ko'plik: two daughters."),
      mistake("My mother's brother is my *aunt.", "Onamning akasi — tog'am: uncle."),
      mistake("Happy birthday! — *No problem.", "Tabrikka javob — Thank you!"),
    ],
  },
  {
    title: "Gap tuzing",
    skill: "Gap tuzish",
    kind: "order",
    instructions: "So'zlarni to'g'ri tartibda bosib, gap tuzing.",
    questions: sentences([
      "This is my sister's husband.",
      "Their daughter is two.",
      "Whose bag is this?",
      "Her name is Malika.",
      "My father's name is Rustam.",
      "Our flat is small.",
      "His wife is from Tashkent.",
      "I'm an only child.",
      "My grandparents are in the village.",
      "Good luck in your exam!",
    ]),
  },
  {
    title: "Bo'sh joyni to'ldiring",
    skill: "Yozish",
    kind: "fill",
    instructions: "Gapda bitta so'z tushib qolgan. Uni inglizcha yozing.",
    questions: written([
      ["He's married. ___ wife is a doctor.", "His"],
      ["She's my aunt. ___ husband is my uncle.", "Her"],
      ["We've got a dog. ___ dog is very big.", "Our"],
      ["___ bag is this? — It's Aziz's.", "Whose"],
      ["My father's sister is my ___.", "aunt"],
      ["My uncle's daughter is my ___.", "cousin"],
      ["My mother and father are my ___.", "parents"],
      ["Happy ___, Mum!", "birthday"],
      ["Good ___ in your exam!", "luck"],
      ["The bird is in ___ nest. (uning — hayvon)", "its"],
    ]),
  },
  {
    title: "Dilshodning oilasi",
    skill: "Matn bilan ishlash",
    kind: "reading",
    instructions: "Matnni diqqat bilan o'qing va har bir savolga javob bering.",
    questions: [
      read("Where is Dilshod from?", ["Andijan", "Tashkent", "Bukhara", "The text doesn't say."]),
      read("What's his father's job?", ["He's a farmer.", "He's a nurse.", "He's a teacher.", "He's a student."]),
      read("What's his mother's name?", ["Nodira", "Zarina", "Rustam", "Gulnoza"]),
      read("How many brothers has Dilshod got?", ["Two", "One", "Three", "None"]),
      read("Who is Zarina?", ["His sister", "His mother", "His aunt", "His cousin"]),
      read("What's Zarina's husband's job?", ["He's a teacher.", "He's a farmer.", "He's a nurse.", "He's a student."]),
      read("How old is Zarina's daughter?", ["Two", "Four", "Six", "Ten"]),
      read("Who are Hasan and Husan?", ["Dilshod's brothers — twins", "His cousins", "His uncles", "His sister's children"]),
      read("How old is his grandfather?", ["Eighty-five", "Eighty", "Fifty-five", "Seventy-five"]),
      read("Where is his grandmother?", ["At her sister's house", "In the photo", "At home", "At the hospital"]),
    ],
  },
  {
    title: "Tug'ilgan kunda",
    skill: "Tinglab tushunish",
    kind: "audiotext",
    instructions: "Suhbatni tinglang (kerak bo'lsa, qayta yoki sekinroq) va savollarga javob bering. Matn ekranda ko'rsatilmaydi.",
    questions: [
      hear("Kimning tug'ilgan kuni?", ["Anvarning", "Layloning", "Baxtiyorning", "Gulnozaning"]),
      hear("Bolalar kimniki?", ["Anvarning opasi/singlisiniki", "Anvarning o'zini", "Amakisiniki", "Layloniki"]),
      hear("O'g'il bola necha yoshda?", ["6", "4", "10", "2"]),
      hear("Deraza yonidagi kishi kim?", ["Anvarning tog'asi", "Anvarning otasi", "Anvarning akasi", "Layloning amakisi"]),
      hear("Baxtiyor kimning akasi/ukasi?", ["Anvarning onasining", "Anvarning otasining", "Layloning", "Gulnozaning"]),
      hear("Gulnoza kim?", ["Tog'asining xotini (aunt)", "Anvarning opasi", "Anvarning onasi", "Layloning opasi"]),
      hear("Anvarning eng yaqin do'sti kim?", ["Tog'asining o'g'li (cousin)", "Laylo", "Baxtiyor", "Akasi"]),
      hear("Laylo nima olib keldi?", ["Sovg'a", "Gul", "Tort", "Kitob"]),
      hear("Laylo Anvarga yana nima tiladi?", ["Yangi ishida omad", "Imtihonda omad", "Sog'lik", "Baxt"]),
      hear("Suhbat qanday tugaydi?", ["Thank you so much!", "No problem!", "Good luck!", "Happy birthday!"]),
    ],
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "This is my family.",
      "My mother's name is Nodira.",
      "Her husband is a teacher.",
      "Their daughter is two.",
      "Whose bag is this?",
      "Happy birthday!",
      "Congratulations!",
      "Good luck!",
      "daughter",
      "cousin",
    ]),
  },
];
