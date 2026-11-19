/**
 * B2, 19-dars — «Finders keepers?». Topilgan qimmatbaho buyumlar (Faberge
 * tuxumi, oltin tangalar, rasmlar, olmoslar), jinoyat va adolat so'zlari.
 * Grammatika: present modal verbs (must/have to, don't have to/needn't,
 * mustn't/can't, can/may, should/ought to, could/might/may).
 * Navigate B2, 7.1 asosida: tinglash mashqlarida kitob treklari (yopiq
 * ombordan), lug'at misollari kitob matni va Wordlist'idan yoki unga yaqin;
 * mashq matnlari o'zimizniki. Mashqlar inglizcha.
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
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

export const B2_19_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("💎", "worth", "wɜːθ|wooS", "sifat", "…ga arziydigan, qiymati …", "Having a particular value in money.", "It is estimated that the coins are worth around $10 million.", "Tangalar taxminan 10 million dollar turishi taxmin qilinmoqda."),
      w("🏅", "reward", "rɪˈwɔːd|riwood", "ot", "Mukofot", "Money you get for doing something good.", "The young man has received a reward from the dealer.", "Yigit diler'dan mukofot oldi."),
      w("💰", "profit", "ˈprɒfɪt|profit", "ot", "Foyda", "Money you make when you sell something for more than you paid.", "A scrap metal dealer has made a profit of more than $32 million.", "Metallolom sotuvchisi 32 million dollardan ortiq foyda ko'rdi."),
      w("📰", "news report", "ˈnjuːz rɪˌpɔːt|nyuuz ripoot", "ibora", "Yangilik xabari", "A piece of news in a newspaper or online.", "He found a news report about the eight Fabergé eggs still missing.", "U hali yo'qolgan sakkizta Faberge tuxumi haqida yangilik xabarini topdi."),
      w("✋", "claim", "kleɪm|kleym", "fe'l", "Da'vo qilmoq (o'zimniki deb)", "Say that something belongs to you.", "They claim ownership of the coins found on their property.", "Ular o'z yerlaridan topilgan tangalarga egalik da'vo qilishadi."),
      w("👔", "official", "əˈfɪʃl|afishl", "ot", "Amaldor, rasmiy shaxs", "A person with an important job in an organization or government.", "They have had to hand the coins over to an official.", "Ular tangalarni amaldorga topshirishlari kerak bo'ldi."),
      w("🕵️", "suspect", "səˈspekt|saspekt", "fe'l", "Gumon qilmoq", "Think that something is probably true.", "The police suspect that the thieves abandoned the paintings on the train.", "Politsiya o'g'rilar rasmlarni poyezdda tashlab ketgan deb gumon qilmoqda."),
      w("🗑️", "abandoned", "əˈbændənd|abendand", "sifat", "Tashlab ketilgan", "Left and no longer wanted or needed.", "You can usually keep anything which the owner has clearly abandoned.", "Odatda egasi aniq tashlab ketgan narsani olib qolishingiz mumkin."),
      w("⚖️", "justify", "ˈdʒʌstɪfaɪ|jastifay", "fe'l", "Oqlamoq (sabab ko'rsatib)", "Give a good reason for something.", "People use the saying to justify keeping money that they find.", "Odamlar topgan pullarini olib qolishni oqlash uchun bu maqoldan foydalanishadi."),
      w("💍", "valuables", "ˈvæljuəblz|velyuablz", "ot", "Qimmatbaho buyumlar", "Small things you own that are worth a lot of money.", "Never leave your valuables in the car.", "Qimmatbaho buyumlaringizni hech qachon mashinada qoldirmang."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🔓", "suspended sentence", "səˌspendɪd ˈsentəns|saspendid sentans", "ibora", "Shartli hukm", "A punishment where you go to prison only if you commit another crime.", "A couple have been given an eleven-month suspended sentence.", "Er-xotinga o'n bir oylik shartli hukm berildi."),
      w("🚫", "illegal", "ɪˈliːɡl|iliigl", "sifat", "Noqonuniy", "Against the law.", "In most countries it is illegal to keep any lost property.", "Ko'p mamlakatlarda yo'qolgan buyumni o'zlashtirish noqonuniy."),
      w("🧳", "lost property", "ˌlɒst ˈprɒpəti|lost propati", "ibora", "Yo'qolgan buyumlar", "Things that people have left in a public place by accident.", "The car worker bought them at an auction of lost property.", "Avtozavod ishchisi ularni yo'qolgan buyumlar auksionidan sotib olgan."),
      w("🧩", "circumstances", "ˈsɜːkəmstənsɪz|sookamstansiz", "ot", "Vaziyat, sharoit", "The facts that affect what happens in a situation.", "It does depend on the circumstances, of course.", "Albatta, bu vaziyatga bog'liq."),
      w("🎲", "accidentally", "ˌæksɪˈdentəli|eksidentali", "ravish", "Tasodifan, bilmay", "By chance, not planned.", "Her children had accidentally lost the money by giving the sofa away.", "Bolalari divanni berib yuborib, pulni bilmay yo'qotib qo'yishgan edi."),
      w("🪙", "scrap metal", "ˈskræp ˌmetl|skrep metl", "ibora", "Metallolom", "Old metal that is sold so it can be used again.", "A scrap metal dealer bought an antique gold egg for $13,000.", "Metallolom sotuvchisi antik oltin tuxumni 13 000 dollarga sotib oldi."),
      w("🔨", "auction", "ˈɔːkʃn|ookshn", "ot", "Auksion, kim oshdi savdosi", "A sale where things are sold to the person who offers the most.", "He bought the paintings at an auction.", "U rasmlarni auksionda sotib olgan."),
      w("🤲", "hand over", "ˌhænd ˈəʊvə|hend ouva", "ibora", "Topshirmoq", "Give something to someone in authority.", "If you find a wallet, you should hand over the money to the police.", "Hamyon topsangiz, pulni politsiyaga topshirishingiz kerak."),
      w("🙏", "grateful", "ˈɡreɪtfl|greytfl", "sifat", "Minnatdor", "Feeling thankful.", "The bag has been returned to its grateful owner.", "Sumka minnatdor egasiga qaytarildi."),
      w("🏠", "ownership", "ˈəʊnəʃɪp|ounaship", "ot", "Egalik", "The fact of owning something.", "The couple's claim to ownership is strong.", "Er-xotinning egalik da'vosi kuchli."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🤑", "finders keepers", "ˌfaɪndəz ˈkiːpəz|fayndaz kiipaz", "ibora", "Kim topsa — o'shaniki (bolalar maqoli)", "A children's saying: if you find something, you can keep it.", "«Finders keepers, losers weepers» goes the old playground chant.", "«Kim topsa — o'shaniki, yo'qotgan yig'laydi», deydi eski bolalar maqoli."),
      w("🛋️", "stuffed", "stʌft|staft", "sifat", "Tiqilgan", "Filled tightly with something.", "Some students found $40,000 stuffed into an old sofa.", "Ba'zi talabalar eski divanga tiqilgan 40 000 dollarni topishdi."),
      w("🏦", "life's savings", "ˌlaɪfs ˈseɪvɪŋz|layfs seyvingz", "ibora", "Butun umrlik jamg'arma", "All the money someone has saved during their life.", "She kept her life's savings in the sofa.", "U butun umrlik jamg'armasini divanda saqlagan edi."),
      w("👮", "theft", "θeft|Seft", "ot", "O'g'rilik", "The crime of stealing.", "Is «finders keepers» fair enough? No, in my opinion, it's just theft.", "«Kim topsa — o'shaniki» adolatlimi? Menimcha, bu shunchaki o'g'rilik."),
      w("✔️", "have to", "ˈhæv tə|hev ta", "ibora", "…ga majbur bo'lmoq", "Must; it is necessary.", "They also have to give the money back.", "Ular pulni ham qaytarishlari kerak."),
      w("🆓", "don't have to", "ˌdəʊnt ˈhæv tə|dount hev ta", "ibora", "…shart emas", "It isn't necessary.", "Legally, you don't have to report a small amount of money.", "Qonunan kichik miqdordagi pulni xabar qilish shart emas."),
      w("🙅", "mustn't", "ˈmʌsnt|masnt", "fe'l", "…mumkin emas, taqiqlangan", "It is not allowed.", "You mustn't ever leave that door unlocked.", "Bu eshikni hech qachon qulfsiz qoldirmaslik kerak."),
      w("🙆", "needn't", "ˈniːdnt|niidnt", "fe'l", "…shart emas", "It isn't necessary.", "You needn't buy any sugar — I've given it up.", "Shakar olish shart emas — men uni tashladim."),
      w("💡", "ought to", "ˈɔːt tə|oot ta", "ibora", "…kerak (maslahat)", "Should.", "The teacher ought to be much stricter with them.", "O'qituvchi ularga ancha qattiqroq bo'lishi kerak."),
      w("👪", "looks very like", "lʊks ˌveri ˈlaɪk|luks veri layk", "ibora", "…ga juda o'xshaydi", "Is very similar in appearance to someone.", "Could he be Angela's brother? He looks very like her.", "U Anjelaning akasi bo'lishi mumkinmi? Unga juda o'xshaydi."),
    ],
  },
];

const BLOG = `FINDERS KEEPERS?
«Finders keepers, losers weepers» goes the old playground chant, and many people use it to justify keeping money they find. But is it that simple?
A couple recently got a suspended sentence for claiming the money on a winning lottery ticket they found on a shop floor — and they have to give the money back. In most countries it is illegal to keep lost property unless you can't find the owner.
If you find a small amount of money, you don't have to report it, and you can usually keep things that have clearly been abandoned. But if something could be identified, you can't just keep it.
Some students once found $40,000 stuffed into an old sofa from a charity shop. They found the owner: her children had accidentally given away her life's savings.
So is «finders keepers» fair enough? In the writer's opinion, it's just theft.`;
const read = reading(BLOG);

export const B2_19_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("I might leave early this afternoon.", ["I might leave early this afternoon.", "I must leave early this afternoon.", "I may leave early this afternoon.", "I might leave late this afternoon."]),
      listen("You needn't buy any sugar.", ["You needn't buy any sugar.", "You mustn't buy any sugar.", "You don't need buy any sugar.", "You needn't buy any more sugar."]),
      listen("Children no longer have to wear uniforms in school.", ["Children no longer have to wear uniforms in school.", "Children no longer need to wear uniforms in school.", "Children no longer had to wear uniforms in school.", "Children don't have to wear uniforms in school."]),
      listen("The teacher ought to be much stricter with them.", ["The teacher ought to be much stricter with them.", "The teacher ought to be stricter with them.", "The teacher has to be much stricter with them.", "The teacher ought be much stricter with them."]),
      listen("You can't smoke inside the building.", ["You can't smoke inside the building.", "You can smoke inside the building.", "You mustn't smoke inside the building.", "You can't smoke outside the building."]),
      listen("Do you think that young man could be Angela's brother?", ["Do you think that young man could be Angela's brother?", "Do you think that young man might be Angela's brother?", "Do you think that young man is Angela's brother?", "Do you think that young man could be Angela's boyfriend?"]),
      listen("It's illegal to keep lost property.", ["It's illegal to keep lost property.", "It's legal to keep lost property.", "It's illegal to keep lost properties.", "It was illegal to keep lost property."]),
      listen("circumstances", ["circumstances", "circumstance", "circulation", "circles"]),
      listen("accidentally", ["accidentally", "accidental", "incidentally", "occasionally"]),
      listen("valuables", ["valuables", "valuable", "variables", "vegetables"]),
    ],
  },
  {
    title: "Four news stories",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to four short news items about valuable things that were found. Answer the questions.",
    questions: [
      hearing(track("7.1"))("Story 1: How much did the scrap metal dealer pay for the gold egg?", ["$13,000", "$32 million", "$10 million", "$200,000"]),
      hearing(track("7.1"))("Story 1: What had the dealer planned to do with the egg?", ["Sell it for the value of its gold and jewels", "Give it to a museum", "Keep it at home", "Give it back to Russia"]),
      hearing(track("7.1"))("Story 2: What did the Californian couple find?", ["Eight old tin cans full of gold coins", "A gold egg", "Two paintings", "A bag of diamonds"]),
      hearing(track("7.1"))("Story 2: Why is their claim to ownership strong?", ["The coins were found on their property.", "They bought them at an auction.", "They paid for them.", "The police gave them the coins."]),
      hearing(track("7.1"))("Story 3: Where were the paintings hanging?", ["In an Italian car worker's kitchen", "In a London museum", "On a train", "In a bank"]),
      hearing(track("7.1"))("Story 3: Where did he buy them?", ["At an auction of lost property left on Italian trains", "In a shop in London", "Online", "From the painters"]),
      hearing(track("7.1"))("Story 4: Who found the bag of diamonds?", ["A young man who handed them in to the police", "The diamond dealer", "A police officer", "A shop assistant"]),
      hearing(track("7.1"))("Story 4: What did the young man get?", ["A reward from the dealer", "The diamonds", "A suspended sentence", "Nothing"]),
    ],
  },
  {
    title: "Noun or verb?",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Is the underlined word in CAPITALS a noun, a verb or an adjective?",
    questions: [
      say("He has received a REWARD from the dealer.", ["noun", "verb", "adjective"]),
      say("He was REWARDED for his honesty.", ["verb", "noun", "adjective"]),
      say("They CLAIM ownership of the coins.", ["verb", "noun", "adjective"]),
      say("Their CLAIM to ownership is strong.", ["noun", "verb", "adjective"]),
      say("They handed the coins to an OFFICIAL.", ["noun", "verb", "adjective"]),
      say("This is the OFFICIAL website.", ["adjective", "noun", "verb"]),
      say("The police SUSPECT the thieves left them on the train.", ["verb", "noun", "adjective"]),
      say("The police arrested the main SUSPECT.", ["noun", "verb", "adjective"]),
    ],
  },
  {
    title: "Crime and justice",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match the words to their meanings.",
    questions: pairs([
      ["lost property|things left in a public place by accident", "illegal|against the law", "justify|give a good reason for", "circumstances|the facts that affect a situation"],
      ["suspended sentence|prison only if you commit another crime", "accidentally|by chance, not planned", "abandoned|left and no longer wanted", "valuables|small things worth a lot of money"],
    ]),
  },
  {
    title: "The gold coins",
    skill: "Vocabulary",
    kind: "fill",
    instructions: "Complete the sentences about the couple who found the gold coins.",
    questions: written([
      ["According to the ___, the coins are two hundred years old. (news story)", "report"],
      ["The coins were lost or ___ two hundred years ago. (left and no longer wanted)", "abandoned"],
      ["They were only found ___ — the couple were just out for a walk. (by chance)", "accidentally"],
      ["In these ___, the coins ought to be in a museum.", "circumstances"],
      ["It wouldn't matter if the coins were only ___ a small amount. (value)", "worth"],
      ["The couple should get a ___ instead of getting to keep the coins.", "reward"],
    ]),
  },
  {
    title: "Finders keepers?",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the blog post. Choose the correct answer.",
    questions: [
      read("Which sentence best summarizes the writer's view?", ["If something doesn't belong to you, it is almost never OK to keep it.", "If people lose something, it's their own fault.", "You can keep anything you find.", "Lost property should always go to charity."]),
      read("What happened to the couple with the lottery ticket?", ["They got a suspended sentence and must give the money back.", "They kept the money.", "They got a reward.", "They went to prison for ten years."]),
      read("When can you usually keep something you find?", ["When the owner has clearly abandoned it", "When it is very valuable", "When nobody saw you", "Always"]),
      read("Why had the woman lost her life's savings?", ["Her children accidentally gave the sofa away.", "Students stole the sofa.", "She sold the sofa.", "She forgot where she put the money."]),
      read("What does the writer think «finders keepers» is?", ["Just theft", "Fair enough", "A good rule", "Funny"]),
    ],
  },
  {
    title: "Present modal verbs",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct option.",
    questions: [
      say("You ___ be at work by 9 a.m. It's the rule.", ["must", "needn't", "might", "may"]),
      say("We ___ wear a tie at work. It's our choice.", ["don't have to", "mustn't", "can't", "shouldn't"]),
      say("You ___ ever leave that door unlocked! It's very dangerous.", ["mustn't", "don't have to", "needn't", "might not"]),
      say("We ___ leave until this afternoon — there's plenty of time.", ["don't need to", "mustn't", "can't", "ought not"]),
      say("Do you think I ___ say something to him?", ["should", "must", "can", "may"]),
      say("You ___ talk to your boss about it. That's my advice.", ["ought to", "must not", "can", "may"]),
      say("Employees ___ use the gym for free.", ["can", "must", "should", "ought"]),
      say("You ___ smoke in public buildings.", ["can't", "don't have to", "needn't", "might"]),
      say("The meeting ___ be quite interesting — I'm not sure.", ["might", "must", "has to", "needs"]),
      say("___ I leave the room? (formal)", ["May", "Must", "Should", "Have"]),
    ],
  },
  {
    title: "Grammar sentences",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear six sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("gr-7.1"), [
        ["I ___ early this afternoon, as the meeting has been cancelled.", "might leave", "must leave", "can leave"],
        ["You ___ any sugar — I've given it up.", "needn't buy", "mustn't buy", "can't buy"],
        ["Children no longer ___ uniforms in school, thank goodness.", "have to wear", "must wear", "need wear"],
        ["They ___ like that in class. The teacher ought to be much stricter.", "shouldn't behave", "mustn't behave", "can't behave"],
        ["You ___ inside the building. You have to go to the smoking area.", "can't smoke", "don't have to smoke", "needn't smoke"],
        ["Do you think that young man ___ Angela's brother?", "could be", "must be", "should be"],
      ]),
    ],
  },
  {
    title: "An email about an exam",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct option to complete the email.",
    questions: [
      say("If you are unable to attend the exam, you ___ let us know as soon as possible.", ["should", "can't", "mustn't", "needn't"]),
      say("… so that we ___ offer the place to another candidate.", ["may", "must", "mustn't", "ought"]),
      say("If you are able to attend, you ___ contact us.", ["do not need to", "must", "should", "have to"]),
      say("You ___ bring some form of photo ID to the exam.", ["must", "might", "needn't", "may not"]),
      say("This ___ be an original document and not a photocopy.", ["must", "might", "can", "needn't"]),
      say("If you do not provide photo ID, you ___ take the exam.", ["will not be able to", "will not have to", "needn't", "ought not"]),
      say("You ___ also take one bottle of water into the room.", ["can", "have to", "must", "ought"]),
    ],
  },
  {
    title: "Two possible answers",
    skill: "Grammar",
    kind: "choice",
    instructions: "Two options are possible in each sentence. Choose the one that is NOT possible.",
    questions: [
      say("The law about lost property ___ be different in different countries.", ["can't", "might", "could"]),
      say("You ___ keep a lottery ticket if you find one.", ["have to", "can't", "mustn't"]),
      say("If you find a small amount of money, you ___ hand it in.", ["mustn't", "don't have to", "needn't"]),
      say("Go back and look for your wallet — it ___ still be there.", ["can't", "might", "may"]),
      say("You ___ leave your bag here — it will be safe.", ["mustn't", "may", "can"]),
      say("I ___ be more careful with my valuables in future.", ["can", "ought to", "have to"]),
    ],
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("We *mustn't wear a tie — it's our choice.", "No obligation → don't have to."),
      mistake("You must *to be at work by 9.", "Modal + base verb: must be."),
      mistake("You *don't have to smoke here — it's against the rules.", "Prohibition → mustn't / can't."),
      mistake("She *cans speak three languages.", "Modals don't take -s: can."),
      mistake("You ought *talk to your boss.", "ought to talk."),
      mistake("Do you *must work on Saturdays?", "Do you have to work …?"),
      mistake("It is *illegally to keep lost property.", "Adjective: illegal."),
      mistake("He received a *profit for finding the diamonds.", "Money for doing something good: reward."),
      mistake("It depends on the *circumstance, of course.", "Plural: circumstances."),
      mistake("They had to hand the coins *out to an official.", "hand over."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "It is illegal to keep lost property.",
      "You don't have to report a small amount of money.",
      "You can't just keep it.",
      "They also have to give the money back.",
      "It depends on the circumstances.",
      "The coins are worth around ten million dollars.",
      "He has received a reward from the dealer.",
      "You mustn't ever leave that door unlocked.",
    ]),
  },
  {
    title: "Rules and advice",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best answer.",
    questions: [
      say("Can I smoke in here?", ["No, you can't. You have to go outside.", "No, you don't have to.", "Yes, you mustn't.", "No, you needn't."]),
      say("Do I need to bring my own pen?", ["No, you don't need to. We'll give you one.", "No, you mustn't.", "No, you can't.", "Yes, you needn't."]),
      say("I found a wallet in the street. What should I do?", ["You should hand it in to the police.", "You must keep it.", "You don't have to give it back.", "You might steal it."]),
      say("Is that Angela's brother?", ["He could be — he looks very like her.", "He must to be.", "He has to be her brother.", "He needn't be."]),
      say("Do you have to wear a uniform at work?", ["No, we don't have to, but most people do.", "No, we mustn't.", "No, we can't.", "No, we needn't to."]),
      say("Should I tell my boss?", ["Yes, I think you ought to talk to her.", "Yes, you ought talk to her.", "Yes, you must to talk to her.", "Yes, you can't talk to her."]),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself.",
    questions: phrases([
      "I might leave early this afternoon.",
      "You needn't buy any sugar.",
      "You can't smoke inside the building.",
      "The teacher ought to be much stricter with them.",
      "It's illegal to keep lost property.",
      "It depends on the circumstances.",
      "They have to give the money back.",
      "circumstances",
      "accidentally",
      "valuables",
    ]),
  },
];
