/**
 * B2, 27-dars — «Man and the moon, interrupting, a town in the shadows».
 * Oy haqidagi afsonalar, reference (bog'lovchi ishoralar), sinonim va
 * antonimlar, yig'ilishda gapni bo'lish, hisobot yozish, Rjukan videosi
 * so'zlari.
 * Navigate B2, 9.3 + 9.4 + 9.5 asosida: tinglash mashqlarida kitob
 * treklari (yopiq ombordan), lug'at misollari kitob matni va Wordlist'idan
 * yoki unga yaqin; mashq matnlari o'zimizniki. Mashqlar inglizcha.
 */
import type { SeedExercise, SeedQuestion } from "../seed-exercises";
import {
  gaps,
  hearing,
  mistake,
  pairs,
  phrases,
  reading,
  say,
  w,
  type Rounds,
} from "./helpers";

const track = (n: string) => `media:navigate-b2/audio/${n}.mp3`;

/** 9.5: oy haqidagi afsona — haqiqatmi yoki yo'q. */
const moonFact = (statement: string, isTrue: boolean, explanation?: string): SeedQuestion => ({
  prompt: statement,
  audio: track("9.5"),
  options: ["True", "False"],
  correct: isTrue ? 0 : 1,
  explanation,
});

export const B2_27_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🚀", "moon landings", "ˈmuːn ˌlændɪŋz|muun lendingz", "ibora", "Oyga qo'nishlar", "When astronauts landed on the moon.", "Why do so many people believe that the moon landings were faked?", "Nega shuncha odam Oyga qo'nishlar soxta bo'lgan deb ishonadi?"),
      w("🎬", "faked", "feɪkt|feykt", "fe'l", "Soxtalashtirilgan", "Made to look real when it isn't.", "Some people said the 1969 moon landings were faked.", "Ba'zilar 1969-yilgi Oyga qo'nish soxta bo'lgan deyishdi."),
      w("✔️", "genuine", "ˈdʒenjuɪn|jenyuin", "sifat", "Haqiqiy, asl", "Real; not false.", "Science was not advanced enough, so the film could not be genuine.", "Fan yetarli rivojlanmagan, shuning uchun film haqiqiy bo'lishi mumkin emas edi."),
      w("🌕", "supermoon", "ˈsuːpəmuːn|suupamuun", "ot", "Superoy", "When the moon looks bigger because it is closer to Earth.", "Can a supermoon cause a tsunami?", "Superoy tsunamiga sabab bo'la oladimi?"),
      w("🌊", "tides", "taɪdz|taydz", "ot", "Suv ko'tarilishi va pasayishi", "The regular rise and fall of the sea.", "The moon does have an effect on the tides.", "Oy dengiz suvining ko'tarilishiga ta'sir qiladi."),
      w("🎲", "coincidence", "kəʊˈɪnsɪdəns|kouinsidans", "ot", "Tasodif", "When two things happen at the same time by chance.", "Such occurrences are just coincidence.", "Bunday hodisalar shunchaki tasodif."),
      w("🌍", "axis", "ˈæksɪs|eksis", "ot", "O'q (Yer o'qi)", "An imaginary line through the centre of the Earth.", "On Mars, the axis tilts so much that the ice has moved to the equator.", "Marsda o'q shunchalik og'adiki, muz ekvatorgacha ko'chgan."),
      w("👀", "overlook", "ˌəʊvəˈlʊk|ouvaluk", "fe'l", "E'tibordan chetda qoldirmoq", "Not notice something.", "With electric street lights, it is easy to overlook the moon.", "Elektr ko'cha chiroqlari bor ekan, Oyni e'tibordan chetda qoldirish oson."),
      w("🦁", "predators", "ˈpredətəz|predataz", "ot", "Yirtqichlar", "Animals that kill and eat other animals.", "Predators are better able to hunt unseen on darker nights.", "Yirtqichlar qorong'iroq tunlarda ko'rinmasdan ov qila oladi."),
      w("🕰️", "body clock", "ˈbɒdi klɒk|bodi klok", "ibora", "Biologik soat", "The natural system that controls when you sleep and wake.", "We may still have the remnants of an ancient body clock.", "Bizda hali ham qadimiy biologik soatning qoldiqlari bo'lishi mumkin."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🚫", "absence", "ˈæbsəns|ebsans", "ot", "Yo'qlik", "When something is not there (antonym: presence).", "In the absence of street lights, people relied on the moon.", "Ko'cha chiroqlari bo'lmaganda odamlar Oyga tayanishgan."),
      w("⏹️", "cease", "siːs|siis", "fe'l", "To'xtamoq (rasmiy)", "Stop.", "Please cease talking — the meeting has started.", "Iltimos, gaplashishni to'xtating — majlis boshlandi."),
      w("🎯", "deliberate", "dɪˈlɪbərət|diliberat", "sifat", "Ataylab qilingan", "Done on purpose (antonym: accidental).", "It wasn't a mistake — it was a deliberate decision.", "Bu xato emas edi — bu ataylab qilingan qaror edi."),
      w("😈", "evil", "ˈiːvl|iivl", "sifat", "Yovuz", "Very bad.", "In old stories, evil creatures hunt under a full moon.", "Eski ertaklarda yovuz maxluqlar to'lin oyda ov qiladi."),
      w("🤝", "match", "mætʃ|mech", "fe'l", "Mos kelmoq", "Be the same as (antonym: contrast).", "Do the results match what the scientists expected?", "Natijalar olimlar kutganiga mos keladimi?"),
      w("👏", "praise", "preɪz|preyz", "ot", "Maqtov", "Words that show you approve (antonym: criticism).", "The report received a lot of praise.", "Hisobot ko'p maqtovga sazovor bo'ldi."),
      w("🛡️", "reassured", "ˌriːəˈʃʊəd|riiashuad", "sifat", "Xotirjam bo'lgan", "Less worried.", "We can be reassured by the light of the moon.", "Oy nuri bizni xotirjam qilishi mumkin."),
      w("🔍", "confirm", "kənˈfɜːm|kanfoom", "fe'l", "Tasdiqlamoq", "Show that something is true.", "Plenty of research has failed to confirm this.", "Ko'p tadqiqotlar buni tasdiqlay olmadi."),
      w("🛌", "deep sleep", "ˌdiːp ˈsliːp|diip sliip", "ibora", "Chuqur uyqu", "The part of sleep when you are hardest to wake.", "Brain scans showed 30% less deep sleep when the moon was full.", "Oy to'lin bo'lganda miya tasvirlari 30% kam chuqur uyquni ko'rsatdi."),
      w("🌙", "moonlit", "ˈmuːnlɪt|muunlit", "sifat", "Oy nuri bilan yoritilgan", "Lit by the light of the moon.", "Anyone committing a crime would think twice on a moonlit night.", "Jinoyat qilmoqchi bo'lgan odam oydin kechada ikki marta o'ylardi."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("✋", "if I could just interrupt a second", "ɪf aɪ kʊd ˌdʒʌst ɪntəˈrʌpt ə ˈsekənd|if ay kud jast intarapt a sekand", "ibora", "Bir soniya gapingizni bo'lsam (muloyim)", "A polite way to interrupt.", "If I could just interrupt a second, shouldn't we agree on the charity first?", "Bir soniya gapingizni bo'lsam, avval xayriya tashkilotini kelishib olmaymizmi?"),
      w("🙏", "excuse me for interrupting", "ɪkˌskjuːz mi fər ˌɪntəˈrʌptɪŋ|ikskyuuz mi far intarapting", "ibora", "Gapingizni bo'lganim uchun kechirasiz", "A polite way to interrupt.", "Excuse me for interrupting, but can I just ask when the last meeting was?", "Gapingizni bo'lganim uchun kechirasiz, oxirgi yig'ilish qachon bo'lgan edi?"),
      w("💬", "I'd like to comment on that", "aɪd ˌlaɪk tə ˈkɒment ɒn ðæt|ayd layk ta koment on zet", "ibora", "Bunga fikr bildirmoqchiman", "A formal way to join a discussion.", "I'd like to comment on that. I think we should vote.", "Bunga fikr bildirmoqchiman. Menimcha, ovoz berishimiz kerak."),
      w("✊", "just a second", "ˌdʒʌst ə ˈsekənd|jast a sekand", "ibora", "Bir soniya (norasmiy)", "An informal way to interrupt.", "Just a second. Before we open the meeting, I'd like to explain.", "Bir soniya. Yig'ilishni ochishdan oldin tushuntirmoqchiman."),
      w("⏸️", "hang on a minute", "ˌhæŋ ɒn ə ˈmɪnɪt|heng on a minit", "ibora", "Bir daqiqa to'xtang (norasmiy)", "An informal way to interrupt.", "Hang on a minute — that's not what we agreed!", "Bir daqiqa to'xtang — biz bunday kelishmagan edik!"),
      w("🍽️", "food quarter", "ˈfuːd ˌkwɔːtə|fuud kwoota", "ibora", "Restoranlar mahallasi", "An area of a town with many restaurants.", "The proposed new food quarter will be in Regent Court.", "Taklif etilgan yangi restoranlar mahallasi Regent Kortda bo'ladi."),
      w("🗑️", "litter", "ˈlɪtə|lita", "ot", "Axlat (ko'chada)", "Rubbish dropped in public places.", "I'm not happy because of the noise and litter it's likely to cause.", "Men u keltirib chiqaradigan shovqin va axlat tufayli norozi."),
      w("🏛️", "councillor", "ˈkaʊnsələ|kaunsala", "ot", "Kengash a'zosi", "A member of a town council.", "Sorry, Councillor, can I just say that I'm a local restaurant owner?", "Kechirasiz, kengash a'zosi, men mahalliy restoran egasiman, desam bo'ladimi?"),
      w("🏔️", "snow-capped", "ˈsnəʊ kæpt|snou kept", "sifat", "Qor bilan qoplangan cho'qqili", "Covered in snow on top.", "Rjukan lies in a deep valley between snow-capped mountains.", "Rjukan qorli cho'qqilar orasidagi chuqur vodiyda joylashgan."),
      w("🌲", "wooded", "ˈwʊdɪd|wudid", "sifat", "O'rmon bilan qoplangan", "Covered with trees.", "The town is surrounded by rugged, wooded hills.", "Shahar notekis, o'rmonli tepaliklar bilan o'ralgan."),
    ],
  },
];

const ARTICLE = `MAN AND THE MOON
In a world of street lights and car headlamps, it is easy to overlook the moon and forget that not long ago anyone travelling at night depended on a full moon to light their way. Anyone committing a crime would think twice about doing so on a moonlit night.
Myths tell of creatures that hunt under a full moon, but most animals are actually less active when the moon is at its brightest. Animals which fear being eaten feel safer on darker nights, and predators are better able then to hunt unseen.
People have also feared the effect of the full moon on human behaviour. This dates back thousands of years: the Ancient Greeks thought the moon affected the water in the brain, as it affects the tides. But research has failed to confirm this.
However, a recent study showed that on nights with a full moon people had 30% less deep sleep, took longer to get to sleep and slept for less time.`;
const read = reading(ARTICLE);

export const B2_27_EXERCISES: SeedExercise[] = [
  {
    title: "Myths about the moon",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to two people talking about common beliefs about the moon. Are the beliefs true or false?",
    questions: [
      moonFact("The 1969 moon landings were faked.", false, "There's no evidence of a fake."),
      moonFact("Supermoons cause tsunamis.", false, "The moon only makes a small difference to the tides."),
      moonFact("The far side of the moon is always dark.", false, "It is lit by the sun just as often."),
      moonFact("A full moon makes people go crazy.", false, "Several studies failed to prove this."),
      moonFact("Without the moon, the Earth would sometimes lie on its side.", true),
      moonFact("Without the moon, life on Earth would end.", false, "The Earth would survive."),
    ],
  },
  {
    title: "Man and the moon",
    skill: "Reading",
    kind: "reading",
    instructions: "Read the article. You'll need to understand reference words (this, then, doing so …).",
    questions: [
      read("What would people avoid doing on a full moon?", ["Committing a crime", "Travelling", "Farming", "Sleeping"]),
      read("What does «doing so» refer to?", ["committing a crime", "travelling at night", "lighting their way", "forgetting the moon"]),
      read("What kind of nights do hunting animals prefer?", ["Darker nights", "Moonlit nights", "Cold nights", "Rainy nights"]),
      read("What does «then» refer to?", ["on darker nights", "at full moon", "in the morning", "in the past"]),
      read("What does «This dates back thousands of years» refer to?", ["People's fear of the moon's effect on behaviour", "The moon itself", "The tides", "Street lights"]),
      read("How did the Ancient Greeks explain the moon's effect on people?", ["It affected the water in the brain, as it affects the tides.", "It made people hungry.", "It changed the weather.", "It made people sleep more."]),
      read("What effect does the full moon seem to have on sleep?", ["Less deep sleep, taking longer to fall asleep and sleeping less", "More dreams", "Longer sleep", "No effect at all"]),
    ],
  },
  {
    title: "Reference words",
    skill: "Reading",
    kind: "choice",
    instructions: "What does the word in CAPITALS refer to?",
    questions: [
      say("Nor is it true that the other side of the moon is always dark. THIS is just a myth.", ["that the other side of the moon is always dark", "the moon", "the sun", "the side we can see"]),
      say("When the American team landed on the moon, they planted a flag. In DOING SO, they started a myth.", ["planting a flag", "landing on the moon", "making a film", "travelling there"]),
      say("The flag appeared to flutter in the wind — and there is no wind THERE.", ["on the moon", "in America", "on Earth", "in the film"]),
      say("Sometimes there are tsunamis at the same time as a supermoon, but SUCH occurrences are coincidence.", ["tsunamis at the same time as a supermoon", "supermoons", "all tsunamis", "full moons"]),
      say("Most animals are less active when the moon is at ITS brightest.", ["the moon's", "the animals'", "the sun's", "the night's"]),
    ],
  },
  {
    title: "Synonyms and antonyms",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match each word to its synonym (S) or antonym (A).",
    questions: pairs([
      ["cease|stop (S)", "praise|criticism (A)", "evil|bad (S)", "match|contrast (A)"],
      ["absence|presence (A)", "deliberate|accidental (A)", "faked|genuine (A)", "nearer|closer (S)"],
    ]),
  },
  {
    title: "Find a synonym in the text",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Choose the word from the article with a similar or opposite meaning.",
    questions: [
      say("forget — a synonym is …", ["overlook", "confirm", "fear", "believe"]),
      say("impact — a synonym is …", ["effect", "tide", "brain", "research"]),
      say("believe — an opposite idea is …", ["fail to confirm", "fear", "know", "reassure"]),
      say("stayed asleep — an opposite is …", ["took longer to get to sleep", "deep sleep", "moonlit", "body clock"]),
      say("animals which fear being eaten — an opposite is …", ["predators", "creatures", "primates", "humans"]),
    ],
  },
  {
    title: "Dropped syllables",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear five words. The syllable after the stress is often dropped. Choose the word you hear.",
    questions: [
      gaps(track("9.10"), [
        ["___", "vegetable", "vegetarian", "valuable"],
        ["___", "every", "very", "ivory"],
        ["___", "camera", "camel", "cameras"],
        ["___", "restaurant", "restless", "rest room"],
        ["___", "mystery", "mastery", "history"],
      ]),
    ],
  },
  {
    title: "A town council meeting",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to part of a town council meeting about a new food quarter. Answer the questions.",
    questions: [
      hearing(track("9.6"))("Where will the new food quarter be?", ["In Regent Court", "In the town centre", "By the river", "Next to the school"]),
      hearing(track("9.6"))("Who has shown interest in the units?", ["Big restaurant chains", "Local schools", "Supermarkets", "Banks"]),
      hearing(track("9.6"))("Why is the Eco Party councillor (E) not happy?", ["Because of the noise and litter", "Because of the cost", "Because there are no parking spaces", "Because restaurants are expensive"]),
      hearing(track("9.6"))("Who interrupts to say they'd like to rent a unit?", ["A local restaurant owner", "A student", "A parent", "A police officer"]),
      hearing(track("9.6"))("Why does the chair (C) think the food quarter is a good idea?", ["Many shop units are empty and it would bring life back to the town.", "He owns a restaurant.", "Tourists asked for it.", "It will be very cheap."]),
    ],
  },
  {
    title: "Interrupting",
    skill: "Listening",
    kind: "listengap",
    instructions: "You will hear five phrases for interrupting. Choose the missing word.",
    questions: [
      gaps(track("9.8"), [
        ["If I could just ___ a second, …", "interrupt", "interfere", "stop"],
        ["Excuse me for ___, but …", "interrupting", "asking", "stopping"],
        ["I'd like to say something, if I ___.", "may", "can", "might"],
        ["Can I just ___, …", "say", "ask", "speak"],
        ["Just a ___, …", "second", "minute", "moment"],
      ]),
    ],
  },
  {
    title: "Formal or informal?",
    skill: "Speaking",
    kind: "match",
    instructions: "Is the phrase more formal/polite or less formal/more familiar?",
    questions: pairs([
      ["If I could just interrupt a second, …|formal", "Excuse me for interrupting, but …|formal", "Can I say something here?|informal", "Hang on a minute, …|informal"],
      ["I'd like to comment on that …|formal", "I'd like to say something, if I may.|formal", "Just a second, …|informal", "Can I just come in here?|informal"],
    ]),
  },
  {
    title: "The charity meeting",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to a short meeting. Answer the questions.",
    questions: [
      hearing(track("9.11"))("What did they agree at the last meeting?", ["To raise as much money as possible for charity", "To close the office", "To have a party", "To vote for a new chair"]),
      hearing(track("9.11"))("When was the last meeting?", ["Last month", "Last week", "Last year", "Yesterday"]),
      hearing(track("9.11"))("What does B suggest?", ["Voting on which charity to raise money for", "Cancelling the meeting", "Raising less money", "Asking the boss"]),
      hearing(track("9.11"))("How does A respond when C interrupts again?", ["«If I could just finish what I was saying …»", "«Yes, of course.»", "«Please leave the meeting.»", "«I agree completely.»"]),
    ],
  },
  {
    title: "Video words: a town in the shadows",
    skill: "Vocabulary",
    kind: "match",
    instructions: "These words describe Rjukan in Norway, from the video. Match them to their meanings.",
    questions: pairs([
      ["snow-capped|covered in snow on top", "rugged|rough and rocky", "towering|very tall", "wooded|covered with trees"],
      ["valley|low land between mountains", "narrow|not wide", "deep|going a long way down", "mountain|a very high hill"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Vocabulary",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("If I could just *interrupting a second, …", "If I could just interrupt a second."),
      mistake("Excuse me for *interrupt, but …", "Excuse me for interrupting."),
      mistake("I'd like to say something, if I *might be.", "if I may."),
      mistake("*Hold on a second — that's wrong! (formal meeting)", "In a formal meeting: If I could just interrupt a second …"),
      mistake("Praise is the *synonym of criticism.", "They are opposites → antonym."),
      mistake("The film was *genuine — it was made in a studio.", "Made to look real → faked."),
      mistake("It wasn't an accident. It was *accidental.", "On purpose → deliberate."),
      mistake("The moon has an effect on the *tights of the sea.", "tides."),
      mistake("Such occurrences are just a *coincident.", "coincidence (noun)."),
      mistake("It's easy to *overlooking the moon these days.", "to overlook."),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then say it yourself. Interrupt politely: rise slightly at the start.",
    questions: phrases([
      "If I could just interrupt a second, …",
      "Excuse me for interrupting, but …",
      "I'd like to say something, if I may.",
      "Can I just say, …",
      "Just a second, …",
      "If I could just finish what I was saying, …",
      "vegetable",
      "restaurant",
      "camera",
      "mystery",
    ]),
  },
];
