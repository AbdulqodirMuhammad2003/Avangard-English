/**
 * B2, 13-dars — «As if it were yesterday …». Bolalik xotiralari, xotira
 * haqidagi iboralar (vaguely, vivid, recollection …).
 * Grammatika: -ing yoki infinitive bilan keladigan fe'llar (remember/forget/
 * stop/regret ma'no farqi bilan).
 * Navigate B2, 5.1 asosida: tinglash mashqlarida kitob treklari (yopiq
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
  reading,
  say,
  sentences,
  w,
  written,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

export const B2_13_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🌫️", "vaguely", "ˈveɪɡli|veygli", "ravish", "Noaniq, xira (eslamoq)", "Not clearly.", "I can vaguely remember my first day at school.", "Maktabdagi birinchi kunimni xira eslayman."),
      w("🌈", "vivid", "ˈvɪvɪd|vivid", "sifat", "Yorqin, aniq (xotira)", "Very clear and detailed.", "I have a vivid memory of my grandfather's garden.", "Bobomning bog'i haqida yorqin xotiram bor."),
      w("🚫", "whatsoever", "ˌwɒtsəʊˈevə|wotsouweva", "ravish", "Umuman, zarracha ham", "At all (used after «no» for emphasis).", "I've no memory of it whatsoever.", "Bu haqda umuman hech qanday xotiram yo'q."),
      w("🎯", "precise", "prɪˈsaɪs|prisays", "sifat", "Aniq (tafsilot)", "Exact and accurate.", "I can't remember the precise details.", "Aniq tafsilotlarini eslay olmayman."),
      w("🤏", "just about", "ˌdʒʌst əˈbaʊt|jast abaut", "ibora", "Arang, zo'rg'a", "Almost; only just.", "I can just about remember it.", "Buni arang eslayman."),
      w("🧠", "recollection", "ˌrekəˈlekʃn|rekalekshn", "ot", "Xotira, eslash", "Something you remember; the ability to remember.", "I have no recollection of how we got home.", "Uyga qanday qaytganimizni umuman eslamayman."),
      w("🍂", "fade", "feɪd|feyd", "fe'l", "So'nmoq, xiralashmoq", "Slowly become less clear.", "My memory of it has begun to fade.", "Bu haqdagi xotiram xiralasha boshladi."),
      w("📅", "as if it were yesterday", "əz ˌɪf ɪt wə ˈjestədeɪ|az if it wa yestadey", "ibora", "Xuddi kecha bo'lgandek", "Very clearly, although it was long ago.", "I remember it as if it were yesterday.", "Buni xuddi kecha bo'lgandek eslayman."),
      w("💭", "recall", "rɪˈkɔːl|rikool", "fe'l", "Eslamoq", "Remember something from the past.", "I can recall it very clearly.", "Buni juda aniq eslay olaman."),
      w("👶", "childhood amnesia", "ˌtʃaɪldhʊd æmˈniːziə|chayldhud emniizia", "ibora", "Bolalik xotirasining yo'qolishi", "The loss of memories from early childhood.", "Childhood amnesia happens at around the age of seven.", "Bolalik xotirasining yo'qolishi taxminan yetti yoshda yuz beradi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🗄️", "store", "stɔː|stoo", "fe'l", "Saqlamoq (xotirada)", "Keep information to use later.", "Older children store memories in a more effective way.", "Kattaroq bolalar xotiralarni samaraliroq saqlaydi."),
      w("🔓", "access", "ˈækses|ekses", "fe'l", "Kira olmoq, olmoq (ma'lumotga)", "Be able to get or use something.", "It is easier to access these memories in later life.", "Keyingi hayotda bu xotiralarga murojaat qilish osonroq."),
      w("🔍", "identify", "aɪˈdentɪfaɪ|aydentifay", "fe'l", "Aniqlamoq", "Find out exactly what something is.", "Scientists wanted to identify when childhood memories fade.", "Olimlar bolalik xotiralari qachon so'nishini aniqlamoqchi edi."),
      w("💡", "understanding", "ˌʌndəˈstændɪŋ|andastending", "ot", "Tushuncha", "Knowledge of how something works.", "At seven, children have a better understanding of time and place.", "Yetti yoshda bolalar vaqt va makonni yaxshiroq tushunadi."),
      w("😢", "deep emotion", "ˌdiːp ɪˈməʊʃn|diip imoushn", "ibora", "Kuchli his-tuyg'u", "A very strong feeling.", "Memories involving deep emotion can survive childhood amnesia.", "Kuchli his-tuyg'u bilan bog'liq xotiralar saqlanib qolishi mumkin."),
      w("🎉", "cheer", "tʃɪə|chia", "fe'l", "Olqishlamoq, qichqirib quvonmoq", "Shout because you are happy or support someone.", "Thousands of people came to cheer and sing outside the palace.", "Minglab odamlar saroy oldida olqishlab, qo'shiq aytish uchun kelishdi."),
      w("👑", "royal family", "ˌrɔɪəl ˈfæməli|royal femali", "ibora", "Qirollik oilasi", "The king or queen and their family.", "The royal family waved from the palace.", "Qirollik oilasi saroydan qo'l silkitdi."),
      w("🐎", "trot", "trɒt|trot", "fe'l", "Yo'rtmoq (ot)", "When a horse runs quite slowly.", "Everything was fine while the horse was walking, but then it started to trot.", "Ot yurganda hammasi joyida edi, keyin u yo'rta boshladi."),
      w("🪢", "reins", "reɪnz|reynz", "ot", "Jilov", "Long straps used to control a horse.", "I didn't dare to take my hands off the reins.", "Qo'llarimni jilovdan olishga jur'at etmadim."),
      w("😳", "pride", "praɪd|prayd", "ot", "G'urur, faxr", "Feeling of respect for yourself.", "I wasn't injured, but my pride was very hurt!", "Jarohat olmadim, lekin g'ururim qattiq toptaldi!"),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🎭", "pretend to", "prɪˈtend tə|pritend ta", "fe'l", "…dek ko'rsatmoq", "Behave as if something is true when it isn't.", "I tried to pretend to be excited, but I was nervous.", "Hayajonlangandek ko'rsatishga harakat qildim, lekin asabiy edim."),
      w("🚸", "avoid", "əˈvɔɪd|avoyd", "fe'l", "Chetlab o'tmoq, qochmoq", "Keep away from something.", "The other children had to avoid riding over me.", "Boshqa bolalar ustimdan otda o'tib ketmaslik uchun chetlab o'tishlari kerak edi."),
      w("🙆", "let me sit", "ˌlet mi ˈsɪt|let mi sit", "ibora", "O'tirishimga ruxsat bermoq", "Allow me to sit.", "My father let me sit on his shoulders.", "Otam yelkasiga o'tirishimga ruxsat berdi."),
      w("💪", "makes us stay", "ˌmeɪks əs ˈsteɪ|meyks as stey", "ibora", "Bizni qolishga majbur qiladi", "Forces us to stay.", "My boss always makes us stay until 5.30.", "Xo'jayinim bizni doim 5:30 gacha qolishga majbur qiladi."),
      w("🔄", "get the horse to slow down", "ˌɡet ðə ˈhɔːs tə ˌsləʊ ˈdaʊn|get za hoos ta slou daun", "ibora", "Otni sekinlashtirmoq (ko'ndirmoq)", "Make the horse go more slowly.", "I tried to get the horse to slow down.", "Otni sekinlashtirishga harakat qildim."),
      w("😔", "regret", "rɪˈɡret|rigret", "fe'l", "Afsuslanmoq", "Feel sorry about something you did.", "I really regret not speaking to her when I had the chance.", "Imkonim bo'lganda u bilan gaplashmaganimdan chindan afsuslanaman."),
      w("🙂", "don't mind", "ˌdəʊnt ˈmaɪnd|dount maynd", "ibora", "Qarshi emasman", "Be happy to do something; it isn't a problem.", "I don't mind not having dessert.", "Shirinliksiz qolishga qarshi emasman."),
      w("🤝", "agreed to", "əˈɡriːd tə|agriid ta", "fe'l", "…ga rozi bo'ldi", "Said yes to doing something.", "The staff agreed to work overtime.", "Xodimlar qo'shimcha ishlashga rozi bo'lishdi."),
      w("📋", "involves", "ɪnˈvɒlvz|involvz", "fe'l", "O'z ichiga oladi", "Includes as a necessary part.", "The job involves working with children and animals.", "Bu ish bolalar va hayvonlar bilan ishlashni o'z ichiga oladi."),
      w("🎯", "aiming to", "ˈeɪmɪŋ tə|eyming ta", "ibora", "…ni maqsad qilib", "Planning or trying to do something.", "We're aiming to leave at around six in the morning.", "Ertalab soat oltilarda yo'lga chiqishni maqsad qilyapmiz."),
    ],
  },
];

const TEXT = `WHEN DO CHILDHOOD MEMORIES START TO FADE?
Most adults find it hard to recall anything from their first few years. Now scientists have identified when these early memories fade.
According to a study of «childhood amnesia», it happens at around the age of seven. Three-year-olds can remember events from more than a year before, and these memories survive while they are five and six. But by the time they are over seven, most children have little or no recollection of those early years.
At seven, children understand time and place better, so they store memories more effectively and in more precise detail. However, memories with deep emotion can survive childhood amnesia.`;
const read = reading(TEXT);

export const B2_13_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("I remember it as if it were yesterday.", ["I remember it as if it were yesterday.", "I remember it as if it was yesterday.", "I remembered it as if it were yesterday.", "I remember it like it was yesterday."]),
      listen("I have no recollection of it.", ["I have no recollection of it.", "I have no collection of it.", "I had no recollection of it.", "I have a recollection of it."]),
      listen("My memory of it has begun to fade.", ["My memory of it has begun to fade.", "My memory of it has begun to fail.", "My memory of it began to fade.", "My memories of it have begun to fade."]),
      listen("I'll never forget falling off that horse.", ["I'll never forget falling off that horse.", "I'll never forget to fall off that horse.", "I never forgot falling off that horse.", "I'll never forget falling off the horse."]),
      listen("Sorry we're late. We stopped to get some petrol.", ["Sorry we're late. We stopped to get some petrol.", "Sorry we're late. We stopped getting some petrol.", "Sorry we're late. We stopped for some petrol.", "Sorry we were late. We stopped to get some petrol."]),
      listen("My boss never lets me leave work early.", ["My boss never lets me leave work early.", "My boss never lets me to leave work early.", "My boss never let me leave work early.", "My boss never lets me leave work late."]),
      listen("We regret to inform you that the train has been cancelled.", ["We regret to inform you that the train has been cancelled.", "We regret informing you that the train has been cancelled.", "We regret to tell you that the train has been cancelled.", "We regret to inform you that the plane has been cancelled."]),
      listen("recollection", ["recollection", "collection", "reflection", "recognition"]),
      listen("whatsoever", ["whatsoever", "whatever", "whosoever", "whenever"]),
      listen("vaguely", ["vaguely", "vague", "vaguer", "weekly"]),
    ],
  },
  {
    title: "Clear, unclear or no memory?",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Does the sentence describe a clear memory, an unclear memory or no memory at all?",
    questions: [
      say("I can vaguely remember it.", ["unclear memory", "clear memory", "no memory"]),
      say("I have a vivid memory of it.", ["clear memory", "unclear memory", "no memory"]),
      say("I've no memory of it whatsoever.", ["no memory", "clear memory", "unclear memory"]),
      say("I can't remember the precise details.", ["unclear memory", "clear memory", "no memory"]),
      say("I can just about remember it.", ["unclear memory", "clear memory", "no memory"]),
      say("I have no recollection of it.", ["no memory", "unclear memory", "clear memory"]),
      say("My memory of it has begun to fade.", ["unclear memory", "clear memory", "no memory"]),
      say("I remember it as if it were yesterday.", ["clear memory", "unclear memory", "no memory"]),
      say("I can recall it very clearly.", ["clear memory", "unclear memory", "no memory"]),
    ],
  },
  {
    title: "When do memories fade?",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the text. Choose the correct answer.",
    questions: [
      read("At what age does childhood amnesia happen?", ["At around seven", "At around three", "At around five", "At around twelve"]),
      read("What can three-year-olds remember?", ["Events from more than a year before", "Nothing at all", "Only last week", "Everything from birth"]),
      read("What do most children have by the time they are over seven?", ["Little or no recollection of early years", "Very vivid memories of being babies", "Better memories of age three", "No new memories"]),
      read("Why do seven-year-olds store memories better?", ["They understand time and place better.", "They sleep more.", "They go to school.", "They watch less TV."]),
      read("Which memories can survive childhood amnesia?", ["Memories with deep emotion", "Memories of food", "Memories from TV", "No memories"]),
    ],
  },
  {
    title: "Childhood memories",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to Irene and Tobias describing a childhood memory. Answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("5.1"))("Irene: What day is her clearest childhood memory?", ["The day the Second World War ended", "Her first day at school", "Her fourth birthday", "A royal wedding"]),
      hearing(track("5.1"))("Irene: How old was she?", ["About four", "About seven", "About ten", "About two"]),
      hearing(track("5.1"))("Irene: Where did her family go?", ["To Buckingham Palace in London", "To the seaside", "To a farm", "To a cinema"]),
      hearingTwo(track("5.1"))("Irene: Which TWO things does she remember clearly?", ["Sitting on her father's shoulders", "The queen wearing a pale blue dress"], ["The train journey home", "Meeting the prime minister"]),
      hearing(track("5.1"))("Irene: Why was she disappointed?", ["Princess Elizabeth didn't look like a princess.", "It was raining.", "She couldn't see anything.", "The queen didn't come out."]),
      hearing(track("5.1"))("Tobias: What was his memory?", ["Going horse riding for the first time", "His first football match", "A school trip to the zoo", "Learning to swim"]),
      hearing(track("5.1"))("Tobias: How did he really feel before riding?", ["Nervous — he was a bit frightened of horses", "Very excited", "Bored", "Tired"]),
      hearing(track("5.1"))("Tobias: What did he do in the end?", ["He made himself fall off the horse.", "He jumped over a fence.", "He stopped the horse.", "He followed the teacher's instructions."]),
    ],
  },
  {
    title: "Extracts from the stories",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear five sentences from the stories. Listen and choose the missing words.",
    questions: [
      gaps(track("5.2"), [
        ["My father let me ___ on his shoulders.", "sit", "to sit", "sitting"],
        ["I remember ___ disappointed because Princess Elizabeth didn't look like a princess.", "feeling", "to feel", "feel"],
        ["I tried to get the horse ___ down …", "to slow", "slow", "slowing"],
        ["I made myself ___ off the horse.", "fall", "to fall", "falling"],
        ["In my panic, I didn't remember ___ the teacher's instructions.", "to follow", "following", "follow"],
      ]),
    ],
  },
  {
    title: "-ing or infinitive?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct option.",
    questions: [
      say("I don't feel like ___ out tonight.", ["going", "to go", "go", "went"]),
      say("We've arranged ___ on the 25th.", ["to meet", "meeting", "meet", "met"]),
      say("They encouraged me ___ it.", ["to do", "do", "doing", "done"]),
      say("My boss always makes us ___ until 5.30.", ["stay", "to stay", "staying", "stayed"]),
      say("Can you help me ___ dinner?", ["cook", "cooking", "cooked", "to cooking"]),
      say("The job involves ___ with children.", ["working", "to work", "work", "worked"]),
      say("The staff agreed ___ overtime.", ["to work", "working", "work", "worked"]),
      say("I can't stand ___ team-building exercises.", ["doing", "to doing", "do", "done"]),
      say("Elisa's hoping ___ history at university.", ["to study", "studying", "study", "studied"]),
      say("James has decided ___ for a promotion.", ["not to apply", "not applying", "to not applying", "don't apply"]),
    ],
  },
  {
    title: "Change of meaning",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct option.",
    questions: [
      say("I'll never forget ___ Alice for the first time. (a memory)", ["meeting", "to meet", "meet", "met"]),
      say("I forgot ___ your letter. Sorry! (I didn't do it)", ["to post", "posting", "post", "posted"]),
      say("Remember ___ the door when you leave.", ["to lock", "locking", "lock", "locked"]),
      say("I remember ___ the fireman's face at the window.", ["seeing", "to see", "see", "saw"]),
      say("I really regret ___ to her when I had the chance.", ["not speaking", "not to speak", "don't speak", "not speak"]),
      say("We regret ___ you that the train has been cancelled.", ["to inform", "informing", "inform", "informed"]),
      say("I stopped ___ computer games when I was about 30. (I don't play now)", ["playing", "to play", "play", "played"]),
      say("We stopped ___ some petrol. (the reason)", ["to get", "getting", "get", "got"]),
      say("The car stopped ___ the horse go by.", ["to let", "letting", "let", "lets"]),
      say("The horse stopped ___ grass and looked up.", ["eating", "to eat", "eat", "ate"]),
    ],
  },
  {
    title: "Grammar sentences",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear five sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("gr-5.1"), [
        ["I'm not sure I want the job because it involves ___ with children and animals.", "working", "to work", "work"],
        ["I don't mind ___ dessert; I'm watching my weight.", "not having", "not to have", "don't have"],
        ["The staff agreed ___ overtime, provided they were paid overtime.", "to work", "working", "work"],
        ["Roger chose ___ the sports car.", "not to buy", "not buying", "don't buy"],
        ["The bank has authorized me ___ the full amount.", "to pay", "pay", "paying"],
      ]),
    ],
  },
  {
    title: "Locked in the bathroom",
    skill: "Grammar",
    kind: "fill",
    instructions: "Complete the story with the correct form of the verb in brackets.",
    questions: written([
      ["I'll never forget ___ locked in the bathroom when I was two. (be)", "being"],
      ["I remember ___ my mother outside the door. (hear)", "hearing"],
      ["She couldn't get me ___ it — I was too young. (do)", "to do"],
      ["When the fireman broke the window, it made me ___ even more. (cry)", "cry"],
      ["I only stopped ___ when he let me try on his helmet. (cry)", "crying"],
      ["He let me ___ on his helmet. (try)", "try"],
      ["Telling the story many times has helped me ___ it. (remember)", "remember|to remember"],
      ["My parents allowed me ___ to bed whenever I wanted. (go)", "to go"],
    ]),
  },
  {
    title: "Say it another way",
    skill: "Grammar",
    kind: "type",
    instructions: "Complete the second sentence so it means the same as the first.",
    questions: written([
      ["She won't say who broke the window. → She's refusing ___ who broke the window.", "to say"],
      ["We should arrive in about ten minutes. → We expect ___ in about ten minutes.", "to arrive"],
      ["I wish I could see my friends back home. → I really miss ___ my friends back home.", "seeing"],
      ["Henrik wishes he hadn't said those things. → Henrik really regrets ___ those things.", "saying"],
      ["Hua watched TV for two hours. → Hua spent two hours ___ TV.", "watching"],
    ]),
  },
  {
    title: "Verb patterns",
    skill: "Grammar",
    kind: "match",
    instructions: "Match each verb to the pattern that follows it.",
    questions: pairs([
      ["enjoy|+ -ing", "hope|+ to + verb", "let|+ object + verb", "encourage|+ object + to + verb"],
      ["can't stand|+ -ing", "refuse|+ to + verb", "make|+ object + verb", "advise|+ object + to + verb"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("My father let me *to sit on his shoulders.", "let + object + verb (no to): let me sit."),
      mistake("I made myself *to fall off the horse.", "make + object + verb: made myself fall."),
      mistake("I tried to get the horse *slow down.", "get + object + to + verb: to slow down."),
      mistake("I don't feel like *to go out tonight.", "feel like + -ing: going."),
      mistake("We've arranged *meeting on the 25th.", "arrange + to + verb: to meet."),
      mistake("Don't forget *locking the door!", "A thing to do → forget + to: to lock."),
      mistake("I'll never forget *to see the sea for the first time.", "A memory → forget + -ing: seeing."),
      mistake("I can *vague remember my first teacher.", "Adverb: vaguely."),
      mistake("I have a *vividly memory of that day.", "Adjective: vivid."),
      mistake("I have no *recollect of it whatsoever.", "Noun: recollection."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "I remember it as if it were yesterday.",
      "I have no recollection of it whatsoever.",
      "My father let me sit on his shoulders.",
      "I'll never forget falling off that horse.",
      "Remember to lock the door.",
      "We stopped to get some petrol.",
      "I really regret not speaking to her.",
      "My memory of it has begun to fade.",
    ]),
  },
  {
    title: "Talk about memories",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best answer.",
    questions: [
      say("What's your earliest childhood memory?", ["I can vaguely remember my third birthday party.", "I can vague remember my third birthday.", "I remember to have my third birthday.", "I have a recollect of my birthday."]),
      say("Do you remember your first day at school?", ["Yes, I remember it as if it were yesterday.", "Yes, I remember it as if it is tomorrow.", "Yes, I remember to go to school.", "Yes, I remember it whatsoever."]),
      say("Did you post my letter?", ["Oh no, I forgot to post it! Sorry.", "Oh no, I forgot posting it! Sorry.", "Oh no, I forgot post it.", "Oh no, I forgot to posting it."]),
      say("Why are you late?", ["We stopped to get some coffee.", "We stopped getting some coffee.", "We stopped get some coffee.", "We stop to got some coffee."]),
      say("Do your parents let you stay out late?", ["Only at the weekend.", "Only at the weekend to.", "They let me to stay.", "They let staying."]),
      say("Do you still smoke?", ["No, I stopped smoking two years ago.", "No, I stopped to smoke two years ago.", "No, I stop smoke.", "No, I stopped smoked."]),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself.",
    questions: phrases([
      "I remember it as if it were yesterday.",
      "I can vaguely remember it.",
      "I have a vivid memory of it.",
      "I have no recollection of it whatsoever.",
      "My father let me sit on his shoulders.",
      "I'll never forget falling off that horse.",
      "Don't forget to lock the door.",
      "We stopped to get some petrol.",
      "recollection",
      "whatsoever",
    ]),
  },
];
