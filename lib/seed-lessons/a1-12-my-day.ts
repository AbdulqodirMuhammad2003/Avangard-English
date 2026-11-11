/**
 * A1, 12-dars — «Kun tartibim: Do you…?». Navigate A1, 4.3 «My day» va 4.4
 * «in a shop / an informal email» asosida: hafta kunlari, kundalik ishlar
 * (get up, have breakfast…), go / get / have birikmalari, do'konda xarid,
 * narxlarni tushunish, do'stga xat va tinish belgilari.
 * Grammatika: Present Simple so'roq — Do you…? Does he…? va qisqa javoblar;
 * What time do you…? Tinglash mashqlarida kitob treklari (yopiq ombordan),
 * savollar va matnlar o'zimizniki.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  gaps,
  hearing,
  hearingTwo,
  mistake,
  pairs,
  phrases,
  reading,
  say,
  slots,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-a1/audio/${n}.mp3`;

export const A1_12_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("1️⃣", "Monday", "ˈmʌndeɪ|mandey", "ot", "Dushanba", "The first day of the working week.", "From Monday to Friday I get up at 5.00.", "Dushanbadan jumagacha soat 5 da turaman."),
      w("2️⃣", "Tuesday", "ˈtjuːzdeɪ|tyuuzdey", "ot", "Seshanba", "The day after Monday.", "I've got an English class on Tuesday.", "Seshanba kuni ingliz tili darsim bor."),
      w("3️⃣", "Wednesday", "ˈwenzdeɪ|uenzdey", "ot", "Chorshanba", "The day after Tuesday. We don't say the first «d»!", "The meeting is on Wednesday.", "Yig'ilish chorshanba kuni."),
      w("4️⃣", "Thursday", "ˈθɜːzdeɪ|syorzdey", "ot", "Payshanba", "The day after Wednesday.", "We play tennis on Thursday.", "Payshanba kuni tennis o'ynaymiz."),
      w("5️⃣", "Friday", "ˈfraɪdeɪ|fraydey", "ot", "Juma", "The last day of the working week.", "Friday is my favourite day.", "Juma — eng sevimli kunim."),
      w("6️⃣", "Saturday", "ˈsætədeɪ|setadey", "ot", "Shanba", "The first day of the weekend.", "On Saturday evenings we watch a film.", "Shanba kechqurunlari film ko'ramiz."),
      w("7️⃣", "Sunday", "ˈsʌndeɪ|sandey", "ot", "Yakshanba", "The last day of the weekend.", "I don't work on Sunday.", "Yakshanba kuni ishlamayman."),
      w("📆", "day", "deɪ|dey", "ot", "Kun", "24 hours; Monday, Tuesday…", "What's your favourite day?", "Eng sevimli kuningiz qaysi?"),
      w("🌄", "early", "ˈɜːli|yorli", "sifat, ravish", "Erta", "Before the usual time.", "Do you get up early?", "Erta turasizmi?"),
      w("🌃", "late", "leɪt|leyt", "sifat, ravish", "Kech", "After the usual time.", "I get up at 8 a.m. — That's late!", "Men soat 8 da turaman. — Bu kech-ku!"),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("⏰", "get up", "ˌɡet ˈʌp|get ap", "fe'l", "O'rnidan turmoq", "Leave your bed in the morning.", "I get up at 5 a.m.", "Men ertalab soat 5 da turaman."),
      w("🚿", "have a shower", "ˌhæv ə ˈʃaʊə|hev a shaua", "ibora", "Dush qabul qilmoq", "Wash your body under water.", "I have a shower and get dressed.", "Dush qabul qilib, kiyinaman."),
      w("👕", "get dressed", "ˌɡet ˈdrest|get drest", "ibora", "Kiyinmoq", "Put on your clothes.", "The children get dressed at seven.", "Bolalar soat yettida kiyinadi."),
      w("🥣", "have breakfast", "ˌhæv ˈbrekfəst|hev brekfast", "ibora", "Nonushta qilmoq", "Eat your morning meal.", "We have breakfast together.", "Biz birga nonushta qilamiz."),
      w("📧", "check emails", "ˌtʃek ˈiːmeɪlz|chek iimeylz", "ibora", "Elektron xatlarni tekshirmoq", "Look at the new messages on your computer.", "I get up and check emails.", "Turaman va pochtamni tekshiraman."),
      w("▶️", "start work", "ˌstɑːt ˈwɜːk|staat uyork", "ibora", "Ishni boshlamoq", "Begin your work.", "I start work at 8.00 a.m.", "Men ishni soat 8 da boshlayman."),
      w("⏹️", "finish work", "ˌfɪnɪʃ ˈwɜːk|finish uyork", "ibora", "Ishni tugatmoq", "Stop working at the end of the day.", "I finish work at about 6 p.m.", "Ishni taxminan soat 6 da tugataman."),
      w("🏠", "get home", "ˌɡet ˈhəʊm|get houm", "ibora", "Uyga yetib kelmoq", "Arrive at your house.", "I get home at about 6.30.", "Uyga taxminan 6:30 da yetib kelaman."),
      w("🍽️", "have dinner", "ˌhæv ˈdɪnə|hev dina", "ibora", "Kechki ovqatlanmoq", "Eat your evening meal.", "Do you have dinner with your family?", "Oilangiz bilan kechki ovqat qilasizmi?"),
      w("🛌", "go to bed", "ˌɡəʊ tə ˈbed|gou tu bed", "ibora", "Uxlashga yotmoq", "Go to sleep at night.", "I go to bed at ten.", "Soat o'nda uxlashga yotaman."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("💊", "pharmacy", "ˈfɑːməsi|faamasi", "ot", "Dorixona", "A shop that sells medicine.", "Is there a pharmacy near here?", "Bu yerga yaqin dorixona bormi?"),
      w("🏬", "department store", "dɪˈpɑːtmənt stɔː|dipaatmant stoo", "ot", "Univermag", "A big shop that sells a lot of different things.", "I buy clothes in a department store.", "Kiyimni univermagdan olaman."),
      w("📚", "bookshop", "ˈbʊkʃɒp|bukshop", "ot", "Kitob do'koni", "A shop that sells books.", "There's a good bookshop in the city centre.", "Shahar markazida yaxshi kitob do'koni bor."),
      w("🍊", "vitamins", "ˈvɪtəmɪnz|vitaminz", "ot", "Vitaminlar", "Small pills that help you to be healthy.", "I need vitamins, too.", "Menga vitaminlar ham kerak."),
      w("🏷️", "price", "praɪs|prays", "ot", "Narx", "How much money something costs.", "What's the price of this umbrella?", "Bu soyabonning narxi qancha?"),
      w("💵", "how much", "ˌhaʊ ˈmʌtʃ|hau mach", "ibora", "Qancha (turadi)?", "A question about price.", "How much is this tablet, please?", "Bu planshet qancha turadi?"),
      w("🛒", "I'll take it", "aɪl ˈteɪk ɪt|ayl teyk it", "ibora", "Olaman (xarid qilaman)", "You say it when you decide to buy something.", "It's £75. — OK. I'll take it.", "75 funt. — Xo'p. Olaman."),
      w("👀", "just looking", "ˌdʒʌst ˈlʊkɪŋ|jast luking", "ibora", "Shunchaki ko'ryapman", "You say it when you don't want help in a shop.", "Can I help you? — No, thanks. Just looking.", "Yordam beraymi? — Yo'q, rahmat. Shunchaki ko'ryapman."),
      w("🙏", "need", "niːd|niid", "fe'l", "Kerak bo'lmoq, muhtoj bo'lmoq", "You must have it.", "I need four pens.", "Menga to'rtta ruchka kerak."),
      w("✅", "everything", "ˈevriθɪŋ|evrising", "olmosh", "Hammasi", "All things.", "Is that everything? — Yes, thank you.", "Hammasi shumi? — Ha, rahmat."),
    ],
  },
];

const EMAILS = `Hi Bekzod,
I arrive at Tashkent International Airport at 5.10 p.m., but I don't have your address. Does the bus go to your house? How much is a ticket?
Thanks,
Anna

Hi Anna,
Thanks for your email. The airport bus doesn't go to my house, but it goes to the hotel near my house — the Grand Hotel. You buy your ticket on the bus. It's not expensive. Call me when you get to the hotel. My mobile phone number is 90 123 45 67.
Can't wait to see you!
Bekzod`;
const read = reading(EMAILS);

export const A1_12_EXERCISES: SeedExercise[] = [
  {
    title: "Hafta kunlari",
    skill: "Tinglash",
    kind: "listenmatch",
    instructions: "Hafta kunlarini tinglang va tartib bo'yicha yozing (bosh harf bilan!).",
    questions: [
      slots(track("4.9"), [
        ["1.", "Monday"],
        ["2.", "Tuesday"],
        ["3.", "Wednesday"],
        ["4.", "Thursday"],
        ["5.", "Friday"],
        ["6.", "Saturday"],
        ["7.", "Sunday"],
      ]),
    ],
  },
  {
    title: "Kundalik ishlar",
    skill: "Lug'at",
    kind: "choice",
    instructions: "Iboraning birinchi qismini tanlang: go, get yoki have?",
    questions: [
      say("___ up", ["get", "have", "go", "start"]),
      say("___ breakfast", ["have", "get", "go", "do"]),
      say("___ to bed", ["go", "get", "have", "start"]),
      say("___ dressed", ["get", "have", "go", "check"]),
      say("___ a shower", ["have", "go", "get", "start"]),
      say("___ home (uyga yetib kelmoq)", ["get", "have", "start", "finish"]),
      say("___ out with friends", ["go", "have", "get", "start"]),
      say("___ dinner", ["have", "go", "get", "check"]),
      say("___ to work", ["go", "have", "get", "start"]),
      say("___ emails", ["check", "have", "go", "get"]),
    ],
  },
  {
    title: "Helenaning kuni",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Helena Morrissey to'qqiz farzandli katta kompaniya rahbari. U kun tartibi haqida gapiradi. Tinglang va to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("4.11"), [
        ["I get up at 5 a.m. and ___.", "check my emails", "have a shower", "have breakfast"],
        ["I have breakfast with my ___.", "children", "husband", "parents"],
        ["I go to work by ___.", "train", "taxi", "car"],
        ["I start work at 8.00 a.m. and ___ at about 6 p.m.", "finish", "get home", "go out"],
        ["We have dinner at about ___ p.m.", "7.30", "8.30", "6.30"],
        ["After dinner I ___.", "work again", "go to bed", "watch TV"],
        ["I ___ at the weekend.", "work", "don't work", "go abroad"],
        ["On Saturday evenings I watch a film with my family. And we sometimes ___ with friends.", "go out", "have dinner", "play tennis"],
      ]),
    ],
  },
  {
    title: "Vaqtlarni yozing",
    skill: "Tinglash",
    kind: "listenmatch",
    instructions: "Helenani yana tinglang. Vaqtlarni raqamlar bilan yozing (masalan: 7:30).",
    questions: [
      slots(track("4.11"), [
        ["1. She gets up at", "5:00;5"],
        ["2. Her children get up at about", "6:30"],
        ["3. She leaves the house at", "7:30"],
        ["4. She starts work at", "8:00;8"],
        ["5. She gets home at about", "6:30"],
        ["6. She goes to bed at", "10:00;10"],
      ]),
    ],
  },
  {
    title: "Do yoki does?",
    skill: "Grammatika",
    kind: "choice",
    instructions: "So'roq: Do I / you / we / they…? Does he / she / it…? Fe'l -s siz! Qisqa javob: Yes, I do. / No, he doesn't.",
    questions: [
      say("___ you get up early?", ["Do", "Does", "Are", "Is"]),
      say("___ your husband work?", ["Does", "Do", "Is", "Has"]),
      say("Does she ___ to work?", ["drive", "drives", "driving", "drove"]),
      say("Do you get up early? — Yes, I ___.", ["do", "does", "am", "get"]),
      say("Does your husband work? — No, he ___.", ["doesn't", "don't", "isn't", "hasn't"]),
      say("___ her children live at home?", ["Do", "Does", "Are", "Is"]),
      say("Do they all live at home? — No, they ___.", ["don't", "doesn't", "aren't", "not"]),
      say("___ Helena work at the weekend?", ["Does", "Do", "Is", "Has"]),
      say("What time ___ you go to work?", ["do", "does", "are", "is"]),
      say("What time does he ___ up?", ["get", "gets", "getting", "got"]),
    ],
  },
  {
    title: "Helena haqida savollar",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Intervyuni yana tinglang va savollarga qisqa javob tanlang. Ba'zi savollarda IKKITA to'g'ri javob bor.",
    questions: [
      hearing(track("4.11"))("Does Helena get up early?", ["Yes, she does.", "No, she doesn't.", "Yes, she is.", "Only on Sundays."]),
      hearing(track("4.11"))("Does she drive to work?", ["No, she doesn't.", "Yes, she does.", "Yes, she drives.", "No, she isn't."]),
      hearing(track("4.11"))("Does she work after dinner?", ["Yes, she does.", "No, she doesn't.", "No, she goes to bed.", "Only at the weekend."]),
      hearing(track("4.11"))("Does her husband work?", ["No, he doesn't.", "Yes, he does.", "Yes, at home.", "He doesn't say."]),
      hearing(track("4.11"))("How many children have they got?", ["Nine", "Seven", "Two", "Twenty-one"]),
      hearingTwo(track("4.11"))("Which TWO are true?", ["Seven children live at home.", "They sometimes go out with friends."], ["All the children live at home.", "Helena doesn't work at the weekend."]),
    ],
  },
  {
    title: "Savollarda urg'u",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Do you…? savol va qisqa javoblarda muhim so'zlar urg'u bilan aytiladi. Tinglang va eshitgan so'zingizni tanlang.",
    questions: [
      gaps(track("4.12"), [
        ["1. «Do you work at the ___?»", "weekend", "office", "station"],
        ["1. «Yes, I ___.»", "do", "does", "am"],
        ["2. «Does your ___ work?»", "husband", "wife", "brother"],
        ["2. «No, he ___.»", "doesn't", "don't", "isn't"],
      ]),
    ],
  },
  {
    title: "Savol tuzing",
    skill: "Grammatika",
    kind: "type",
    instructions: "Present Simple'da so'roq gap yozing. Misol: she / get up early → Does she get up early?",
    questions: written([
      ["she / get up early", "Does she get up early?"],
      ["her children / get up / at 5.00", "Do her children get up at 5.00?|Do her children get up at 5?"],
      ["she / have breakfast / with her family", "Does she have breakfast with her family?"],
      ["she / drive / to work", "Does she drive to work?"],
      ["she / work / after dinner", "Does she work after dinner?"],
      ["her children / live / at home", "Do her children live at home?"],
      ["she / work / at the weekend", "Does she work at the weekend?"],
      ["Helena and her husband / go out / with friends", "Do Helena and her husband go out with friends?"],
      ["what time / you / get up", "What time do you get up?"],
      ["what job / he / do", "What job does he do?"],
    ]),
  },
  {
    title: "Kechasi ishlaydigan John",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "John kechasi zavodda ishlaydi. Uning kuni qanday o'tadi? Tinglang va to'g'ri so'zni tanlang.",
    questions: [
      gaps(track("4.17"), [
        ["John works in a car ___.", "factory", "shop", "office"],
        ["He starts work at ___.", "8 p.m.", "8 a.m.", "4 p.m."],
        ["He finishes at ___.", "4 a.m.", "5 a.m.", "7 a.m."],
        ["He gets home at ___ and goes to bed at 7 a.m.", "5 a.m.", "4 a.m.", "6 a.m."],
        ["He gets up around ___.", "2 p.m.", "12 p.m.", "3 p.m."],
        ["Then he goes to his daughter's ___.", "school", "university", "work"],
        ["His wife gets home at ___ and they have dinner together.", "five", "six", "seven"],
      ]),
    ],
  },
  {
    title: "Do'konda",
    skill: "Tinglash",
    kind: "audiotext",
    instructions: "Do'kondagi to'rtta suhbatni tinglang. Har bir xaridor nima olmoqchi?",
    questions: [
      hearing(track("4.13"))("1. What does the customer want?", ["Umbrellas", "Vitamins", "A tablet", "Nothing"]),
      hearing(track("4.13"))("1. Where are they?", ["Over there, near the window", "Next to the door", "On the second floor", "There aren't any."]),
      hearing(track("4.13"))("2. What does the customer want?", ["Nothing — just looking", "An umbrella", "Vitamins", "A tablet"]),
      hearing(track("4.13"))("3. What does the customer need, too?", ["Vitamins", "An umbrella", "A tablet", "A bag"]),
      hearing(track("4.13"))("4. How much is the tablet?", ["£75", "£57", "£70", "£15"]),
      hearing(track("4.13"))("4. Does the customer buy the tablet?", ["Yes — «OK. I'll take it.»", "No, it's expensive.", "No — «Just looking.»", "The customer doesn't say."]),
    ],
  },
  {
    title: "Narxlar",
    skill: "Tinglash",
    kind: "listengap",
    instructions: "Narxlarda bitta son (£96 — ninety-six pounds) yoki ikkita son (€6.49 — six forty-nine) eshitiladi. Tinglang va to'g'ri narxni tanlang.",
    questions: [
      gaps(track("4.15"), [
        ["1. OK. That's ___, please.", "€6.49", "€6.94", "€64.90"],
        ["2. How much is this phone? — It's ___.", "£96", "£69", "£9.60"],
        ["3. A cup of coffee is ___.", "£5.75", "£5.57", "£57.50"],
        ["4. How much are these? — They're ___.", "$24.90", "$42.90", "$24.19"],
      ]),
    ],
  },
  {
    title: "Xaridor yoki sotuvchi",
    skill: "Dialog",
    kind: "dialog",
    instructions: "Do'kondagi suhbat. Unga mos javobni tanlang.",
    questions: [
      say("Can I help you?", ["No, thanks. Just looking.", "Yes, they're over there.", "It's £10.", "OK. I'll take it."]),
      say("Excuse me. Do you have any wallets?", ["Yes, they're over there, near the window.", "No, thanks. Just looking.", "OK. I'll take it.", "Yes, I do."]),
      say("It's $24.99.", ["OK. I'll take it.", "Can I help you?", "Is that everything?", "Do you have any?"]),
      say("Is that everything?", ["No, I need a notepad, too.", "Yes, it's £6.", "Just looking.", "They're over there."]),
      say("How much is this umbrella?", ["It's £6.", "Yes, it is.", "It's over there.", "I'll take it."]),
      say("Do you get up early?", ["Yes, I do. I get up at six.", "Yes, I get.", "Yes, I does.", "Yes, I am."]),
      say("Does your sister work?", ["Yes, she does. She's a nurse.", "Yes, she do.", "Yes, she works.", "Yes, she is work."]),
      say("What time do you go to bed?", ["At about eleven.", "Yes, I do.", "On Monday.", "To bed."]),
      say("Do you work at home?", ["No, I don't. But my husband works at home.", "No, I not.", "No, I doesn't.", "No, I'm not work."]),
      say("What job does he do?", ["He works for a newspaper. He's a journalist.", "Yes, he does.", "He does a job.", "At 9 a.m."]),
    ],
  },
  {
    title: "Aeroportdan uyga",
    skill: "O'qish",
    kind: "reading",
    instructions: "Anna va Bekzodning xatlarini o'qing va savollarga javob bering.",
    questions: [
      read("When does Anna arrive?", ["In the evening (5.10 p.m.)", "In the morning", "At 10.15 a.m.", "The text doesn't say."]),
      read("What doesn't Anna have?", ["Bekzod's address", "A ticket", "A phone", "Money"]),
      read("Does the airport bus go to Bekzod's house?", ["No, it doesn't.", "Yes, it does.", "Only in the evening.", "The text doesn't say."]),
      read("Where does the bus go?", ["To a hotel near Bekzod's house", "To the city centre", "To the station", "To Bekzod's work"]),
      read("Where does Anna buy her ticket?", ["On the bus", "At the airport", "At the hotel", "Online"]),
      read("Is the ticket expensive?", ["No, it isn't.", "Yes, it is.", "It's free.", "The text doesn't say."]),
      read("What does Bekzod want Anna to do at the hotel?", ["Call him", "Wait for a taxi", "Buy a ticket", "Have dinner"]),
      read("How does Bekzod start his email?", ["Hi Anna, … Thanks for your email.", "Dear Madam,", "Can't wait to see you!", "How much is a ticket?"]),
      read("Which punctuation ends a question?", ["?", ".", "!", ","]),
      read("«Can't wait to see you!» — Why is there an apostrophe (')?", ["A letter is missing (cannot → can't).", "It's a question.", "It shows strong feelings.", "It's before «but»."]),
    ],
  },
  {
    title: "Xatoni toping",
    skill: "Grammatika",
    kind: "mistake",
    instructions: "Har bir gapda bitta xato so'z bor. Uni bosing.",
    questions: [
      mistake("*Does you get up early?", "you → Do you…?"),
      mistake("Does she *works at the weekend?", "Does + fe'l -s siz: work."),
      mistake("*Do your husband work?", "your husband = he → Does…?"),
      mistake("Do you like tea? — Yes, I *like.", "Qisqa javob: Yes, I do."),
      mistake("Does he drive? — No, he *don't.", "he → doesn't."),
      mistake("What time *you get up?", "What time do you get up?"),
      mistake("I *make breakfast at seven and have a shower.", "Nonushta qilmoq — have breakfast."),
      mistake("I get up and *do a shower.", "have a shower."),
      mistake("How much *are this tablet?", "Bitta narsa — is: How much is this tablet?"),
      mistake("I'm in *monday's class.", "Hafta kunlari bosh harf bilan: Monday."),
    ],
  },
  {
    title: "Juftini toping",
    skill: "Juftlik",
    kind: "match",
    instructions: "Juftlarni ulang.",
    questions: pairs([
      ["get|up", "have|breakfast", "go|to bed", "check|emails"],
      ["Can I help you?|No, thanks. Just looking.", "Is that everything?|Yes, thank you.", "How much is this umbrella?|It's £6.", "Do you have any wallets?|Yes, they're over there."],
      ["Do you get up early?|Yes, I do.", "Does your husband work?|No, he doesn't.", "Do they live at home?|No, they don't.", "Does she drive?|Yes, she does."],
      ["Monday|dushanba", "Wednesday|chorshanba", "Friday|juma", "Sunday|yakshanba"],
      ["pharmacy|vitamins", "bookshop|books", "electronics shop|tablets", "department store|clothes"],
    ]),
  },
  {
    title: "Ayting",
    skill: "Talaffuz",
    kind: "speak",
    instructions: "Iborani eshiting, keyin mikrofon tugmasini bosib o'zingiz ayting.",
    questions: phrases([
      "Monday, Tuesday, Wednesday",
      "Thursday, Friday, Saturday, Sunday",
      "Do you get up early?",
      "Yes, I do.",
      "Does your husband work?",
      "No, he doesn't.",
      "What time do you go to bed?",
      "How much is this tablet, please?",
      "OK. I'll take it.",
      "No, thanks. Just looking.",
    ]),
  },
];
