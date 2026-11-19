/**
 * B2, 10-dars — «Inventive ideas». James Dyson Award ixtirolari (Stack,
 * Mamori, Xarius, Sono, Airdrop), narsalar qanday ishlashi haqidagi fe'llar.
 * Grammatika: passive forms (barcha zamonlarda, modal bilan, ikki to'ldiruvchi).
 * Navigate B2, 4.1 asosida: tinglash mashqlarida kitob treklari (yopiq
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

export const B2_10_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("⚡", "generate", "ˈdʒenəreɪt|jenareyt", "fe'l", "Ishlab chiqarmoq (energiya)", "Produce or create something, e.g. energy.", "Xarius uses the wind to generate electricity.", "Xarius elektr ishlab chiqarish uchun shamoldan foydalanadi."),
      w("🩺", "treat", "triːt|triit", "fe'l", "Davolamoq", "Give medical care to someone.", "Doctors can treat an injured player more quickly.", "Shifokorlar jarohatlangan o'yinchini tezroq davolay oladi."),
      w("🎛️", "control", "kənˈtrəʊl|kantroul", "fe'l", "Boshqarmoq", "Be able to make something do what you want.", "With the Sono, you can control which sounds you hear.", "Sono yordamida qaysi tovushlarni eshitishni boshqarishingiz mumkin."),
      w("🛡️", "protect", "prəˈtekt|pratekt", "fe'l", "Himoya qilmoq", "Keep something safe.", "Mamori is worn inside the mouth to protect the players' teeth.", "Mamori o'yinchilarning tishlarini himoya qilish uchun og'izga taqiladi."),
      w("📌", "fixed to", "ˈfɪkst tə|fikst ta", "ibora", "…ga mahkamlangan", "Put in place so it will not move.", "The Sono is fixed to a window.", "Sono derazaga mahkamlanadi."),
      w("🔋", "recharge", "ˌriːˈtʃɑːdʒ|riichaaj", "fe'l", "Qayta quvvatlamoq", "Fill with electrical power again.", "You can recharge your phone using wind power.", "Telefoningizni shamol kuchi bilan qayta quvvatlashingiz mumkin."),
      w("🔗", "be attached to", "bi əˈtætʃt tə|bi atecht ta", "ibora", "…ga biriktirilmoq", "Be fastened or joined to something.", "Xarius can be attached to almost anything.", "Xariusni deyarli har qanday narsaga biriktirish mumkin."),
      w("📏", "measure", "ˈmeʒə|meja", "fe'l", "O'lchamoq", "Find the size, weight or amount of something.", "Mamori can measure how fast a player is moving.", "Mamori o'yinchi qanchalik tez harakatlanayotganini o'lchay oladi."),
      w("🔉", "reduce noise", "rɪˌdjuːs ˈnɔɪz|ridyuus noyz", "ibora", "Shovqinni kamaytirmoq", "Make sounds less loud.", "The Sono helps to reduce noise from the street.", "Sono ko'chadagi shovqinni kamaytirishga yordam beradi."),
      w("📍", "placed on top of", "ˌpleɪst ɒn ˈtɒp əv|pleyst on top av", "ibora", "…ning ustiga qo'yilgan", "Put carefully on the highest part of something.", "The printer is placed on top of a pile of paper.", "Printer qog'oz taxlamining ustiga qo'yiladi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("✏️", "designed to", "dɪˈzaɪnd tə|dizaynd ta", "ibora", "…ga mo'ljallab loyihalangan", "Be planned and made for a particular purpose.", "This printer was designed to take up as little space as possible.", "Bu printer iloji boricha kam joy egallaydigan qilib loyihalangan."),
      w("👀", "monitor", "ˈmɒnɪtə|monita", "fe'l", "Kuzatib bormoq", "Check or test something regularly.", "Mamori can monitor players for injury.", "Mamori o'yinchilarni jarohat jihatidan kuzatib bora oladi."),
      w("📋", "shortlisted", "ˈʃɔːtlɪstɪd|shootlistid", "sifat", "Qisqa ro'yxatga kiritilgan", "Chosen from a large group as one of the best.", "Twenty new inventions have been shortlisted for the award.", "Mukofot uchun yigirmata yangi ixtiro qisqa ro'yxatga kiritildi."),
      w("📝", "entrant", "ˈentrənt|entrant", "ot", "Ishtirokchi (tanlovda)", "A person who takes part in a competition.", "Every entrant was given an application form.", "Har bir ishtirokchiga ariza shakli berildi."),
      w("📢", "announced", "əˈnaʊnst|anaunst", "sifat", "E'lon qilingan", "Told to people officially.", "The winning entry will be announced in November.", "G'olib loyiha noyabrda e'lon qilinadi."),
      w("📚", "pile", "paɪl|payl", "ot", "Taxlam, uyum", "A number of things on top of each other.", "The printer sits on top of a pile of paper.", "Printer qog'oz taxlami ustida turadi."),
      w("📡", "wirelessly", "ˈwaɪələsli|wayalasli", "ravish", "Simsiz", "Without wires.", "The information is sent wirelessly to a computer.", "Ma'lumot kompyuterga simsiz yuboriladi."),
      w("🤕", "injury", "ˈɪndʒəri|injari", "ot", "Jarohat", "Damage to the body.", "Players are checked for injury during the game.", "O'yin davomida o'yinchilar jarohatga tekshiriladi."),
      w("🌵", "drought", "draʊt|draut", "ot", "Qurg'oqchilik", "A long time with no rain.", "Linacre had been inspired by Australia's worst drought in a century.", "Linakrni Avstraliyadagi asrning eng dahshatli qurg'oqchiligi ilhomlantirgan edi."),
      w("💧", "moisture", "ˈmɔɪstʃə|moyscha", "ot", "Namlik", "Very small amounts of water in the air.", "The Namib Beetle survives by collecting tiny amounts of moisture.", "Namib qo'ng'izi juda oz miqdordagi namlikni yig'ib omon qoladi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🪲", "beetle", "ˈbiːtl|biitl", "ot", "Qo'ng'iz", "An insect with a hard shell.", "The idea was given to him by the Namib Beetle.", "G'oya unga Namib qo'ng'izidan kelgan."),
      w("🏭", "industrial", "ɪnˈdʌstriəl|indastrial", "sifat", "Sanoat (miqyosidagi)", "Connected with factories and making things.", "In the future, it'll be taken up to a more industrial level.", "Kelajakda u sanoat miqyosiga olib chiqiladi."),
      w("🎨", "industrial designer", "ɪnˌdʌstriəl dɪˈzaɪnə|indastrial dizayna", "ibora", "Sanoat dizayneri", "A person who designs products that are made in factories.", "The printer was invented by an industrial designer from Japan.", "Printerni yaponiyalik sanoat dizayneri ixtiro qilgan."),
      w("🏡", "backyard", "ˌbækˈjɑːd|bekyaad", "ot", "Hovli (uy orqasidagi)", "The garden behind a house.", "Up until now, the system has been developed in his mum's backyard.", "Hozircha tizim onasining hovlisida ishlab chiqilgan."),
      w("💡", "inventor", "ɪnˈventə|inventa", "ot", "Ixtirochi", "A person who makes something new.", "The inventor, Mark Dillon, is actually Irish.", "Ixtirochi Mark Dillon aslida irlandiyalik."),
      w("🏅", "winning entry", "ˌwɪnɪŋ ˈentri|wining entri", "ibora", "G'olib ish (tanlovda)", "The work that wins a competition.", "The winning entry will receive a prize of £30,000.", "G'olib ish 30 000 funt mukofot oladi."),
      w("🌬️", "wind power", "ˈwɪnd ˌpaʊə|wind paua", "ibora", "Shamol energiyasi", "Energy made from the wind.", "Xarius makes electricity using wind power.", "Xarius shamol energiyasi yordamida elektr ishlab chiqaradi."),
      w("🔄", "twist", "twɪst|twist", "fe'l", "Burmoq", "Turn something round with your hand.", "Twist the middle to choose which sounds you hear.", "Qaysi tovushlarni eshitishni tanlash uchun o'rtasini burang."),
      w("🏉", "taken out of", "ˌteɪkən ˈaʊt əv|teykan aut av", "ibora", "…dan olib chiqilgan", "Removed from a place or activity.", "An injured player will be taken out of the game.", "Jarohatlangan o'yinchi o'yindan olib chiqiladi."),
      w("📦", "take up space", "ˌteɪk ʌp ˈspeɪs|teyk ap speys", "ibora", "Joy egallamoq", "Use an amount of room.", "A big printer can take up space on your desk.", "Katta printer stolingizda ko'p joy egallashi mumkin."),
    ],
  },
];

const TEXT = `HOW AIRDROP WORKS
In 2011, the James Dyson Award was won by Edward Linacre, a young engineer from Australia. He had been inspired by a terrible drought: farmers' crops were dying because there was no rain.
Linacre's invention, Airdrop, collects water from the air. Air is pumped under the ground, where it is cooled. When warm air is cooled, the moisture in it turns into water, which is then sent to the plants' roots.
The idea was given to him by a small desert insect, the Namib Beetle, which drinks the tiny drops of water that form on its back.
The system has been tested in his mother's backyard, but it is hoped that it will soon be used by farmers all over the world.`;
const tf = trueFalse(TEXT);

export const B2_10_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("This invention has been designed to take up as little space as possible.", ["This invention has been designed to take up as little space as possible.", "This invention was designed to take up as little space as possible.", "This invention has been designed to take up as much space as possible.", "This invention is designed to take up little space."]),
      listen("The information is sent to a computer.", ["The information is sent to a computer.", "The information was sent to a computer.", "The information is sent by a computer.", "The information is being sent to a computer."]),
      listen("It can be attached to almost anything.", ["It can be attached to almost anything.", "It can attach to almost anything.", "It could be attached to almost anything.", "It can be attached to anything."]),
      listen("My car is being serviced at the moment.", ["My car is being serviced at the moment.", "My car has been serviced at the moment.", "My car was being serviced at the moment.", "My car is serviced at the moment."]),
      listen("Machu Picchu was built in the fifteenth century.", ["Machu Picchu was built in the fifteenth century.", "Machu Picchu was built in the fifth century.", "Machu Picchu has been built in the fifteenth century.", "Machu Picchu is built in the fifteenth century."]),
      listen("The name on the ticket can't be changed.", ["The name on the ticket can't be changed.", "The name on the ticket can be changed.", "The name on the ticket couldn't be changed.", "The name on the ticket can't change."]),
      listen("I was born in Milan.", ["I was born in Milan.", "I am born in Milan.", "I was borne in Milan.", "I was born in Milton."]),
      listen("wirelessly", ["wirelessly", "wireless", "worthlessly", "carelessly"]),
      listen("recharge", ["recharge", "charge", "recharged", "discharge"]),
      listen("drought", ["drought", "draught", "brought", "drown"]),
    ],
  },
  {
    title: "The Dyson Award entries",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to descriptions of four entries for the James Dyson Award. Answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("4.1"))("Why was the James Dyson Award created?", ["To inspire students and graduates to come up with new ideas", "To sell vacuum cleaners", "To help farmers in Australia", "To find new football players"]),
      hearing(track("4.1"))("Why is the printer called «Stack»?", ["It is placed on top of a pile, or stack, of paper.", "It can print very fast.", "It was made by a man called Stack.", "It is very tall."]),
      hearing(track("4.1"))("What does «Mamori» mean in Japanese?", ["Protect", "Teeth", "Football", "Computer"]),
      hearingTwo(track("4.1"))("Which TWO things does Mamori do?", ["Protects the players' teeth", "Monitors players for injury"], ["Makes electricity", "Reduces noise"]),
      hearing(track("4.1"))("Who created Xarius?", ["A German team", "An Irish inventor", "A team from Austria", "A Japanese designer"]),
      hearing(track("4.1"))("What is the energy from Xarius used for?", ["Recharging mobile phones", "Heating houses", "Printing paper", "Cooling water"]),
      hearing(track("4.1"))("Where is the Sono fixed?", ["To a window", "Inside the mouth", "On top of paper", "To a car"]),
      hearing(track("4.1"))("How do you control which sounds you hear with the Sono?", ["By twisting the middle of it", "With a mobile phone app", "By shouting at it", "By closing the window"]),
    ],
  },
  {
    title: "Passive phrases",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear six sentences about Edward Linacre's invention. Listen and choose the missing words.",
    questions: [
      gaps(track("4.3"), [
        ["The problem of drought-affected farmers ___ by a recent James Dyson Award winner.", "may have been solved", "may be solved", "has solved"],
        ["Linacre ___ by Australia's worst drought in a century …", "had been inspired", "was inspiring", "has inspired"],
        ["The idea ___ to him by the Namib beetle.", "was given", "has given", "is given"],
        ["Linacre ___ to develop his device by the Chinese government.", "has recently been asked", "recently asked", "is recently asking"],
        ["The system ___ in his mum's backyard.", "has been developed", "has developed", "is developing"],
        ["In the future, it'll ___ up to a more industrial level.", "be taken", "take", "been taken"],
      ]),
    ],
  },
  {
    title: "Which passive?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct passive form.",
    questions: [
      say("Billions of text messages ___ every day.", ["are sent", "is sent", "are sending", "sent"]),
      say("Our office ___ at the moment, so we're working from home.", ["is being decorated", "is decorated", "has decorating", "decorates"]),
      say("The computer mouse ___ in the late 1960s.", ["was invented", "has been invented", "invented", "is invented"]),
      say("Our rooms ___ still ___ when we arrived.", ["were … being cleaned", "are … cleaned", "had … cleaned", "were … cleaning"]),
      say("Why ___ the conference ___ ?", ["has … been postponed", "has … postponed", "is … postponing", "did … postponed"]),
      say("The design ___ a number of times before the final version.", ["had been altered", "has altered", "had altered", "was altering"]),
      say("Bags must not ___ unattended.", ["be left", "left", "leave", "being left"]),
      say("The film ___ next year.", ["is going to be released", "is going to release", "will release", "is releasing"]),
      say("The software needs ___ .", ["to be updated", "to update", "be updated", "updating be"]),
      say("Where ___ you born?", ["were", "did", "are", "have"]),
    ],
  },
  {
    title: "The Airdrop",
    skill: "Grammar",
    kind: "fill",
    instructions: "Complete each sentence with the correct passive form of the verb in brackets.",
    questions: written([
      ["The problem of drought ___ by a young inventor. (may / solve)", "may have been solved|may be solved"],
      ["Linacre ___ by Australia's worst drought in a century. (inspire)", "had been inspired|was inspired"],
      ["Using his system, water ___ from the air. (can / collect)", "can be collected"],
      ["The idea ___ to him by the Namib Beetle. (give)", "was given"],
      ["Up until now, the system ___ in his mum's backyard. (develop)", "has been developed"],
      ["In the future, it ___ up to a more industrial level. (take)", "will be taken|'ll be taken"],
      ["The winning entry ___ in November. (announce)", "will be announced"],
      ["650 projects ___ by scientists from eighteen countries. (enter)", "were entered"],
    ]),
  },
  {
    title: "Two passives",
    skill: "Grammar",
    kind: "choice",
    instructions: "Some verbs have two objects. Choose the correct passive sentence.",
    questions: [
      say("They had given all the entrants an application form.", ["All the entrants had been given an application form.", "All the entrants had given an application form.", "An application form had given all the entrants.", "All the entrants were giving an application form."]),
      say("They will give the winners a £10,000 prize.", ["The winners will be given a £10,000 prize.", "The winners will give a £10,000 prize.", "A £10,000 prize will give the winners.", "The winners will been given a prize."]),
      say("The Chinese government has sent Edward Linacre an offer.", ["Edward Linacre has been sent an offer.", "Edward Linacre has sent an offer.", "An offer has sent to Edward Linacre.", "Edward Linacre was sending an offer."]),
      say("They showed the judges the designs.", ["The judges were shown the designs.", "The judges showed the designs.", "The designs showed the judges.", "The judges were showing the designs."]),
      say("They sent the wrong person the email.", ["The email was sent to the wrong person.", "The email sent the wrong person.", "The wrong person sent the email.", "The email was sending to the wrong person."]),
      say("The Namib Beetle gave Linacre the idea.", ["Linacre was given the idea by the Namib Beetle.", "Linacre gave the idea to the Namib Beetle.", "The idea gave Linacre the Namib Beetle.", "Linacre was giving the idea."]),
    ],
  },
  {
    title: "Grammar sentences",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear four sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("gr-4.1"), [
        ["I'll have to go in by train, as my car ___ at the moment.", "is being serviced", "is serviced", "was serviced"],
        ["Machu Picchu ___ sometime in the fifteenth century.", "was built", "is built", "has been built"],
        ["I couldn't get my money back because the name on the ticket ___.", "can't be changed", "can't change", "isn't changed"],
        ["The machine ___ to use as little energy as possible.", "had been designed", "has designed", "was designing"],
      ]),
    ],
  },
  {
    title: "How things work",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match the verbs to their meanings.",
    questions: pairs([
      ["generate|produce, e.g. energy", "treat|give medical care", "control|make it do what you want", "protect|keep safe"],
      ["fix|put in place so it won't move", "recharge|fill with power again", "attach|fasten or join to something", "measure|find the size or amount"],
      ["reduce|make less", "place|put carefully in a position", "design|plan how it will be made", "monitor|check regularly"],
    ]),
  },
  {
    title: "Describe an invention",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the verb that completes the sentence.",
    questions: [
      say("Xarius uses the wind to ___ electricity.", ["generate", "treat", "measure", "place"]),
      say("Mamori is worn inside the mouth to ___ the players' teeth.", ["protect", "recharge", "generate", "attach"]),
      say("You can ___ your phone with the energy from Xarius.", ["recharge", "reduce", "treat", "design"]),
      say("The Sono helps to ___ the noise from the street.", ["reduce", "generate", "attach", "monitor"]),
      say("Doctors use the information to ___ injured players quickly.", ["treat", "attach", "place", "generate"]),
      say("The paper is ___ under the printer.", ["placed", "treated", "recharged", "generated"]),
      say("Players' speed is ___ during the game.", ["monitored", "recharged", "treated", "attached"]),
      say("Xarius can be ___ to a bike or a tent.", ["attached", "generated", "treated", "reduced"]),
    ],
  },
  {
    title: "How Airdrop works",
    skill: "Reading",
    kind: "truefalse",
    instructions: "Read the text. Are the sentences true or false?",
    questions: [
      tf("Linacre was inspired by a terrible drought.", true),
      tf("Airdrop collects water from rivers.", false, "It collects water from the air."),
      tf("The air is cooled under the ground.", true),
      tf("The water is sent to the plants' roots.", true),
      tf("The idea was given to him by a farmer.", false, "By the Namib Beetle."),
      tf("The system has already been used by farmers all over the world.", false, "It is hoped that it will be used."),
    ],
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("The winner will *announced in November.", "will be announced."),
      mistake("Twenty inventions have been *shortlist for the award.", "have been shortlisted (past participle)."),
      mistake("I *born in Milan.", "I was born in Milan."),
      mistake("My car is *been serviced at the moment.", "is being serviced."),
      mistake("Bags must not *being left unattended.", "must not be left."),
      mistake("The software needs to be *update.", "to be updated."),
      mistake("The idea was given to him *from the Namib Beetle.", "Agent → by the Namib Beetle."),
      mistake("Mamori is worn inside the *mouths of the player.", "the player's mouth / the players' mouths."),
      mistake("The Sono is *fixing to a window.", "is fixed (passive)."),
      mistake("Xarius can *attach to almost anything.", "can be attached."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "The winning entry will be announced in November.",
      "Water can be collected from the air.",
      "The idea was given to him by a beetle.",
      "The system has been developed in his backyard.",
      "The information is sent wirelessly to a computer.",
      "It can be attached to almost anything.",
      "Twenty inventions have been shortlisted.",
      "My car is being serviced at the moment.",
    ]),
  },
  {
    title: "Talk about inventions",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best answer.",
    questions: [
      say("Who invented the computer mouse?", ["It was invented by Douglas Engelbart.", "It invented by Douglas Engelbart.", "It was inventing by Douglas Engelbart.", "Douglas Engelbart was invented it."]),
      say("Can I change the name on my ticket?", ["I'm afraid it can't be changed.", "I'm afraid it can't change it.", "I'm afraid it isn't changing.", "I'm afraid it can't been changed."]),
      say("Why are you taking the bus today?", ["My car is being repaired.", "My car is repairing.", "My car has repairing.", "My car repaired."]),
      say("How does the Sono work?", ["It's fixed to a window and it reduces noise.", "It fixes a window and reduces it.", "It's fixing to a window.", "It was fixed noise."]),
      say("Has the winner been chosen yet?", ["Not yet — it'll be announced in November.", "Not yet — it'll announce in November.", "Not yet — it announced in November.", "Not yet — it's announcing in November yesterday."]),
      say("Where were you born?", ["I was born in Samarkand.", "I born in Samarkand.", "I'm born in Samarkand.", "I have born in Samarkand."]),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then say it yourself. Forms of «be» in the passive are weak: /bi/, /bɪn/, /wəz/.",
    questions: phrases([
      "The problem may have been solved.",
      "He had been inspired by the drought.",
      "The idea was given to him by a beetle.",
      "He has recently been asked to develop it.",
      "The system has been developed in his backyard.",
      "It'll be taken up to an industrial level.",
      "It can be attached to almost anything.",
      "The winner will be announced in November.",
      "wirelessly",
      "recharge",
    ]),
  },
];
