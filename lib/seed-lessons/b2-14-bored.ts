/**
 * B2, 14-dars — «Bored!». Zerikish: his-tuyg'u va xatti-harakat so'zlari
 * (fed up with, zone out, your mind wanders …), zerikishning besh turi.
 * Grammatika: -ing va to-infinitive'ning boshqa qo'llanishlari (sifat/ot +
 * predlog + -ing, before/after/while + -ing, sifat/ot + to, something to do).
 * Navigate B2, 5.2 asosida: tinglash mashqlarida kitob treklari (yopiq
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

export const B2_14_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("💀", "bored to death", "ˌbɔːd tə ˈdeθ|bood ta deS", "ibora", "Zerikib o'lay deb qolgan", "Extremely bored.", "I was bored to death in that three-hour meeting.", "O'sha uch soatlik majlisda zerikib o'lay dedim."),
      w("😑", "bored with", "ˈbɔːd wɪð|bood wiz", "ibora", "…dan zerikkan", "Not interested in something any more.", "I'm bored with doing the same thing every day.", "Har kuni bir xil ishni qilishdan zerikdim."),
      w("🪑", "can't sit still", "ˌkɑːnt sɪt ˈstɪl|kaant sit stil", "ibora", "Joyida o'tirolmaydi", "Keep moving because you are bored or nervous.", "I hate that feeling when you can't sit still.", "Joyingda o'tirolmaydigan holatni yomon ko'raman."),
      w("😴", "dull", "dʌl|dal", "sifat", "Zerikarli", "Not interesting.", "Nothing is more likely to send me to sleep than a dull lecture.", "Zerikarli ma'ruzadan ko'ra meni uxlatadigan narsa yo'q."),
      w("😤", "fed up with", "ˌfed ˈʌp wɪð|fed ap wiz", "ibora", "…dan bezor bo'lgan", "Annoyed and bored with something.", "I get really fed up with being stuck indoors.", "Uyda qamalib qolishdan rosa bezor bo'laman."),
      w("🏃", "desperate to escape", "ˌdespərət tʊ ɪˈskeɪp|desparat tu iskeyp", "ibora", "Qochib ketishga zor", "Wanting very much to get away.", "Boredom is that feeling of being trapped in a situation you're desperate to escape from.", "Zerikish — qochib ketishga zor bo'lgan vaziyatda qamalib qolish hissi."),
      w("✋", "had enough of", "ˌhæd ɪˈnʌf əv|hed inaf av", "ibora", "…dan to'yib ketmoq", "Not want any more of something.", "I've had enough of this rain.", "Bu yomg'irdan to'yib ketdim."),
      w("🎯", "lose concentration", "ˌluːz ˌkɒnsnˈtreɪʃn|luuz konsntreyshn", "ibora", "Diqqatni yo'qotmoq", "Stop being able to pay attention.", "I normally lose concentration after about half an hour.", "Odatda yarim soatdan keyin diqqatimni yo'qotaman."),
      w("🔁", "repetitive", "rɪˈpetətɪv|ripetativ", "sifat", "Takroriy, bir xil", "Doing the same thing again and again.", "Ironing is the most boring and repetitive of all household jobs.", "Dazmollash — uy ishlarining eng zerikarli va takroriysi."),
      w("😩", "tired of", "ˈtaɪəd əv|tayad av", "ibora", "…dan charchagan, bezgan", "Bored with something you have done too much.", "I'm tired of working here.", "Bu yerda ishlashdan charchadim."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🥱", "uninteresting", "ʌnˈɪntrəstɪŋ|anintrasting", "sifat", "Qiziqarsiz", "Not interesting.", "The second half of the film was long and uninteresting.", "Filmning ikkinchi yarmi uzun va qiziqarsiz edi."),
      w("😮", "yawn", "jɔːn|yoon", "fe'l", "Esnamoq", "Open your mouth wide because you are tired or bored.", "My mind starts to wander and I start to yawn.", "Xayolim chalg'iy boshlaydi va esnay boshlayman."),
      w("☁️", "your mind wanders", "jə ˌmaɪnd ˈwɒndəz|ya maynd wondaz", "ibora", "Xayolingiz chalg'iydi", "You stop paying attention and think of other things.", "In long meetings, your mind wanders.", "Uzun majlislarda xayolingiz chalg'iydi."),
      w("📴", "zone out", "ˌzəʊn ˈaʊt|zoun aut", "ibora", "Xayolga botib qolmoq (atrofni sezmay)", "Stop paying attention and not notice what is happening.", "After a hard day's work, it's nice to zone out in front of the TV.", "Og'ir ish kunidan keyin televizor oldida xayolga botish yoqimli."),
      w("🪤", "trapped", "træpt|trept", "sifat", "Qamalib qolgan", "Unable to escape.", "We've all felt trapped in a boring situation.", "Hammamiz zerikarli vaziyatda qamalib qolgandek his qilganmiz."),
      w("🔥", "desire", "dɪˈzaɪə|dizaya", "ot", "Kuchli xohish", "A strong wish.", "There's a desire to fall asleep in a dull lecture.", "Zerikarli ma'ruzada uxlab qolish xohishi paydo bo'ladi."),
      w("🧭", "steer", "stɪə|stia", "fe'l", "Yo'naltirmoq", "Move something in a particular direction.", "Boredom can steer us away from useless activities.", "Zerikish bizni foydasiz ishlardan uzoqlashtirishi mumkin."),
      w("📱", "occupied", "ˈɒkjupaɪd|okyupayd", "sifat", "Band", "Busy doing something.", "There's always something to keep our minds occupied.", "Doim xayolimizni band qiladigan biror narsa bor."),
      w("💪", "capable of", "ˈkeɪpəbl əv|keypabl av", "ibora", "…ga qodir", "Able to do something.", "Are we still capable of doing nothing?", "Biz hali ham hech narsa qilmay turishga qodirmizmi?"),
      w("🙂", "keen to", "ˈkiːn tə|kiin ta", "ibora", "…ga ishtiyoqmand", "Wanting to do something very much.", "After boredom we are keen to do meaningful things.", "Zerikishdan keyin biz mazmunli ishlar qilishga ishtiyoqmand bo'lamiz."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("❤️", "give blood", "ˌɡɪv ˈblʌd|giv blad", "ibora", "Qon topshirmoq (donor)", "Let doctors take some of your blood to help others.", "People who feel bored are more likely to give blood.", "Zerikkan odamlar qon topshirishga ko'proq moyil bo'ladi."),
      w("🎁", "give money to charity", "ˌɡɪv ˌmʌni tə ˈtʃærəti|giv mani ta cherati", "ibora", "Xayriyaga pul bermoq", "Give money to an organization that helps people.", "Some people give money to charity after they feel bored.", "Ba'zilar zerikkandan keyin xayriyaga pul beradi."),
      w("🛋️", "indifferent", "ɪnˈdɪfrənt|indifrant", "sifat", "Befarq", "Not interested or worried.", "Indifferent boredom is a calm, pleasant feeling.", "Befarq zerikish — sokin, yoqimli his."),
      w("😞", "apathetic", "ˌæpəˈθetɪk|epasetik", "sifat", "Loqayd, hech narsaga qiziqmaydigan", "Showing no interest or energy.", "Apathetic boredom is the most worrying type.", "Loqayd zerikish — eng tashvishli turi."),
      w("🔎", "search for", "ˈsɜːtʃ fə|sooch fa", "fe'l", "…ni qidirmoq", "Look for something.", "You actively search for something to occupy yourself.", "O'zingizni band qilish uchun faol ravishda biror narsa qidirasiz."),
      w("✅", "willing to", "ˈwɪlɪŋ tə|wiling ta", "ibora", "…ga tayyor", "Happy to do something.", "How long are you willing to wait?", "Qancha kutishga tayyorsiz?"),
      w("🧩", "the idea of", "ði aɪˈdɪə əv|zi aydia av", "ibora", "…degan fikr", "The thought of something.", "I hate the idea of having nothing to do.", "Hech narsa qilmaslik fikrini yomon ko'raman."),
      w("🎯", "the purpose of", "ðə ˈpɜːpəs əv|za poopas av", "ibora", "…ning maqsadi", "The reason for something.", "Fear has the purpose of steering us away from danger.", "Qo'rquvning maqsadi bizni xavfdan uzoqlashtirish."),
      w("⏳", "anything to do", "ˌeniθɪŋ tə ˈduː|enising ta duu", "ibora", "Qiladigan biror ish", "Any activity to keep you busy.", "I haven't got anything to do this weekend.", "Bu dam olish kunlari qiladigan hech ishim yo'q."),
      w("✈️", "long-haul flight", "ˌlɒŋ hɔːl ˈflaɪt|long hool flayt", "ibora", "Uzoq masofali parvoz", "A very long journey by plane.", "Towards the end of a long-haul flight I'm desperate to get off the plane.", "Uzoq parvoz oxirida samolyotdan tushishga zor bo'laman."),
    ],
  },
];

const TEXT = `THE FIVE TYPES OF BOREDOM
Scientists say there is not one, but five types of boredom.
Indifferent boredom is the calm feeling you have while watching a boring TV programme. It gives you a chance to zone out after a hard day.
Calibrating boredom is when your mind wanders. You think about doing something different, but you don't have the motivation to act.
Searching boredom is when you are fed up with having nothing to do, so you look for something to occupy yourself.
Reactant boredom comes from feeling trapped — for example, in a long queue. You have a strong desire to leave, but you can't.
Apathetic boredom is the most worrying type. You have no interest in trying anything new.`;
const read = reading(TEXT);

export const B2_14_EXERCISES: SeedExercise[] = [
  {
    title: "What do you hear?",
    skill: "Listening",
    kind: "listen",
    instructions: "Listen to the sentence. Choose what you hear.",
    questions: [
      listen("I'm fed up with eating the same thing day after day.", ["I'm fed up with eating the same thing day after day.", "I'm fed up of eating the same thing every day.", "I was fed up with eating the same thing day after day.", "I'm fed up with eating the same food day after day."]),
      listen("He felt really sick after eating a whole packet of biscuits.", ["He felt really sick after eating a whole packet of biscuits.", "He felt really sick after he ate a packet of biscuits.", "He felt really sick before eating a whole packet of biscuits.", "He feels really sick after eating a whole packet of biscuits."]),
      listen("Cheer up. There's no reason to get upset.", ["Cheer up. There's no reason to get upset.", "Cheer up. There's no reason getting upset.", "Cheer up. There's a reason to get upset.", "Cheer up. There's no need to get upset."]),
      listen("Zoe's bored; she hasn't got anyone to talk to.", ["Zoe's bored; she hasn't got anyone to talk to.", "Zoe's bored; she hasn't got anything to talk about.", "Zoe was bored; she hadn't got anyone to talk to.", "Zoe's bored; she hasn't got anyone talking to."]),
      listen("Have you got any plans to move abroad?", ["Have you got any plans to move abroad?", "Have you got any plans for moving abroad?", "Have you got any plan to move abroad?", "Did you have any plans to move abroad?"]),
      listen("My mind starts to wander.", ["My mind starts to wander.", "My mind starts to wonder.", "My mind starts wandering.", "My mind started to wander."]),
      listen("I can't sit still.", ["I can't sit still.", "I can sit still.", "I can't sit down still.", "I couldn't sit still."]),
      listen("repetitive", ["repetitive", "repetition", "competitive", "repeated"]),
      listen("uninteresting", ["uninteresting", "interesting", "uninterested", "disinteresting"]),
      listen("apathetic", ["apathetic", "sympathetic", "pathetic", "empathetic"]),
    ],
  },
  {
    title: "Seven boring things",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to seven people talking about boring experiences. Answer the questions.",
    questions: [
      hearing(track("5.3"))("Speaker 1: Why is listening to her boss boring?", ["She goes into too much detail.", "She speaks too quietly.", "She never says anything.", "She talks about football."]),
      hearing(track("5.3"))("Speaker 2: What does this speaker find boring?", ["Watching a slow-moving film at the cinema", "Reading a long book", "Waiting for a bus", "Doing homework"]),
      hearing(track("5.3"))("Speaker 3: Which household job is the most boring?", ["Ironing", "Washing up", "Cooking", "Cleaning windows"]),
      hearing(track("5.3"))("Speaker 4: When does this speaker get bored?", ["Towards the end of long-haul flights", "At the start of a flight", "In the airport", "On short train journeys"]),
      hearing(track("5.3"))("Speaker 5: What does she do on rainy days?", ["Gets fed up with being stuck indoors", "Goes for a long walk", "Watches films happily", "Sleeps all day"]),
      hearing(track("5.3"))("Speaker 6: What kind of lecture does he hate most?", ["One where the lecturer just reads the PowerPoint slides", "One with lots of questions", "One with group discussion", "One that is very short"]),
      hearing(track("5.3"))("Speaker 7: What is the most boring thing at work for this speaker?", ["Not having enough to do", "Having too much work", "Long meetings", "Working at weekends"]),
    ],
  },
  {
    title: "Boredom words",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Is the phrase a word for «bored», «boring» or a symptom of boredom?",
    questions: pairs([
      ["fed up with|bored", "dull|boring", "yawn|symptom", "bored to death|bored"],
      ["repetitive|boring", "zone out|symptom", "tired of|bored", "uninteresting|boring"],
      ["can't sit still|symptom", "have had enough of|bored", "your mind wanders|symptom", "lose concentration|symptom"],
    ]),
  },
  {
    title: "Which phrase?",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the word or phrase that completes the sentence.",
    questions: [
      say("I'm really ___ with this weather — it's rained all week.", ["fed up", "bored to", "tired", "desperate"]),
      say("The lecture was so ___ that half the students fell asleep.", ["dull", "trapped", "keen", "capable"]),
      say("After an hour of the meeting, my mind started to ___.", ["wander", "wonder", "yawn", "steer"]),
      say("The kids can't sit ___ — they keep jumping around.", ["still", "quiet", "down", "calm"]),
      say("Doing the same thing again and again is so ___.", ["repetitive", "occupied", "capable", "keen"]),
      say("I'm so tired I keep ___.", ["yawning", "zoning", "steering", "trapping"]),
      say("After work, I just want to ___ out in front of the TV.", ["zone", "zoom", "sit", "lose"]),
      say("We'd been in the queue for hours and felt completely ___.", ["trapped", "keen", "capable", "occupied"]),
    ],
  },
  {
    title: "The five types of boredom",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the text. Choose the correct answer.",
    questions: [
      read("Which boredom is a calm, pleasant feeling?", ["Indifferent boredom", "Apathetic boredom", "Reactant boredom", "Searching boredom"]),
      read("Which boredom is when your mind wanders but you don't act?", ["Calibrating boredom", "Searching boredom", "Indifferent boredom", "Reactant boredom"]),
      read("Which boredom makes you look for something to do?", ["Searching boredom", "Indifferent boredom", "Apathetic boredom", "Calibrating boredom"]),
      read("Which boredom comes from feeling trapped?", ["Reactant boredom", "Indifferent boredom", "Calibrating boredom", "Searching boredom"]),
      read("Which is the most worrying type?", ["Apathetic boredom", "Indifferent boredom", "Reactant boredom", "Searching boredom"]),
    ],
  },
  {
    title: "Words from the article",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match the words to their meanings.",
    questions: pairs([
      ["capable of|able to do something", "trapped|unable to escape", "desire|a strong wish", "occupied|busy doing something"],
      ["steer|move in a particular direction", "keen to|wanting to do something", "willing to|happy to do something", "indifferent|not interested"],
    ]),
  },
  {
    title: "-ing or infinitive?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct option.",
    questions: [
      say("I'm tired of ___ here.", ["working", "to work", "work", "worked"]),
      say("Are you interested in ___ with us?", ["coming", "to come", "come", "came"]),
      say("All participants must sign out before ___.", ["leaving", "to leave", "leave", "left"]),
      say("I fell asleep while ___ TV last night.", ["watching", "to watch", "watch", "watched"]),
      say("Is the software easy ___?", ["to install", "installing", "install", "installed"]),
      say("It was nice ___ you.", ["to meet", "meeting", "meet", "met"]),
      say("My advice is ___ harder.", ["to work", "working", "work", "worked"]),
      say("I haven't got anything ___.", ["to do", "doing", "do", "done"]),
      say("___ is my favourite hobby.", ["Running", "To running", "Run", "Ran"]),
      say("Can you do your times tables without ___ a mistake?", ["making", "to make", "make", "made"]),
    ],
  },
  {
    title: "Grammar sentences",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear six sentences. Listen and choose the missing words.",
    questions: [
      gaps(track("gr-5.2"), [
        ["I'm fed up with ___ the same thing day after day.", "eating", "to eat", "eat"],
        ["Can you do your seven times tables without ___ a mistake?", "making", "to make", "make"],
        ["He felt really sick after ___ a whole packet of biscuits.", "eating", "to eat", "ate"],
        ["Cheer up. There's no reason ___ upset.", "to get", "getting", "get"],
        ["Have you got any plans ___ abroad?", "to move", "moving", "move"],
        ["Zoe's bored; she hasn't got anyone ___ to.", "to talk", "talking", "talk"],
      ]),
    ],
  },
  {
    title: "Boredom types",
    skill: "Grammar",
    kind: "fill",
    instructions: "Complete each sentence with the -ing form or the infinitive with to of the verb in brackets.",
    questions: written([
      ["Indifferent boredom is what you feel while ___ a boring TV programme. (watch)", "watching"],
      ["It gives you the opportunity ___ out after a hard day's work. (zone)", "to zone"],
      ["You have thoughts about ___ something different. (do)", "doing"],
      ["… but not the motivation ___ on them. (act)", "to act"],
      ["You are fed up with ___ nothing to do. (have)", "having"],
      ["You actively search for something ___ yourself. (occupy)", "to occupy"],
      ["You have a desire ___ something but can't. (do)", "to do"],
      ["You have no interest in ___ anything new. (try)", "trying"],
      ["You are incapable of ___ enjoyment in life. (find)", "finding"],
    ]),
  },
  {
    title: "Complete the conversation",
    skill: "Grammar",
    kind: "type",
    instructions: "Write the correct form of the verb in brackets.",
    questions: written([
      ["Are you serious about ___ your job? (quit)", "quitting"],
      ["Yes, I'm really fed up with ___ there. (work)", "working"],
      ["That'll be your fifth job since ___ university. (leave)", "leaving"],
      ["I'm sorry for ___ late. (be)", "being"],
      ["Don't worry. There was a delay in ___ the meeting anyway. (start)", "starting"],
      ["It's always nice ___ back home again. (get)", "to get"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("I'm tired of *to work here.", "Preposition + -ing: tired of working."),
      mistake("I fell asleep while *watch TV.", "while + -ing: watching."),
      mistake("Is the app easy *installing?", "Adjective + to: easy to install."),
      mistake("I haven't got anything *doing.", "anything + to: anything to do."),
      mistake("There's no reason *getting upset.", "Noun + to: reason to get."),
      mistake("Wash your hands before *eat.", "before + -ing: eating."),
      mistake("I'm fed up *of with this rain.", "fed up with."),
      mistake("My mind starts to *wonder in long meetings.", "wander = stop paying attention."),
      mistake("The lecture was really *bored.", "Describing the lecture: boring."),
      mistake("Are you capable *to doing nothing?", "capable of + -ing."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "I'm fed up with eating the same thing.",
      "I fell asleep while watching TV.",
      "There's no reason to get upset.",
      "She hasn't got anyone to talk to.",
      "I hate the idea of having nothing to do.",
      "My mind starts to wander in long meetings.",
      "Are you interested in coming with us?",
      "How long are you willing to wait?",
    ]),
  },
  {
    title: "Talk about boredom",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best answer.",
    questions: [
      say("What's the most boring thing you have to do?", ["Ironing — it's so repetitive.", "Ironing — it's so occupied.", "Ironing — it's so keen.", "Ironing — it's so capable."]),
      say("How was the lecture?", ["Dull. I was bored to death.", "Dull. I was boring to death.", "Dull. I bored to death.", "Dull. I was bore to death."]),
      say("Why are you yawning?", ["I'm tired of sitting in this meeting.", "I'm tired to sit in this meeting.", "I'm tired of sit in this meeting.", "I'm tired sitting of this meeting."]),
      say("Do you want to come out?", ["Sorry, I don't feel like going out tonight.", "Sorry, I don't feel like to go out tonight.", "Sorry, I don't feel to go out.", "Sorry, I don't feel like go out."]),
      say("What do you do on long flights?", ["I watch films to kill time.", "I watch films killing time.", "I watch films kill time.", "I watch films for kill time."]),
      say("Is there anything to do here?", ["Not much — there's nothing to do at all.", "Not much — there's nothing doing at all.", "Not much — there's nothing do at all.", "Not much — there's anything to do."]),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then tap the microphone and say it yourself.",
    questions: phrases([
      "I'm fed up with eating the same thing.",
      "I was bored to death.",
      "My mind starts to wander.",
      "I can't sit still.",
      "There's no reason to get upset.",
      "She hasn't got anyone to talk to.",
      "I fell asleep while watching TV.",
      "repetitive",
      "uninteresting",
      "concentration",
    ]),
  },
];
