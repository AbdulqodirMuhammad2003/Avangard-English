/**
 * B2, 25-dars — «Dark days and white nights». Tromsyodagi qutb tuni va oq
 * tunlar, iqlim va turmush tarzi, tushib qoladigan bo'g'inlar.
 * Grammatika: adjectives va adverbs.
 * Navigate B2, 9.1 asosida: tinglash mashqlarida kitob treklari (yopiq
 * ombordan), lug'at misollari kitob matni va Wordlist'idan yoki unga yaqin;
 * mashq matnlari o'zimizniki. Mashqlar inglizcha.
 */
import type { SeedExercise } from "../seed-exercises";
import {
  gaps,
  hearing,
  hearingTwo,
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

export const B2_25_ROUNDS: Rounds = [
  {
    title: "1-bosqich",
    words: [
      w("🌌", "polar night", "ˌpəʊlə ˈnaɪt|poula nayt", "ibora", "Qutb tuni", "A time in the Arctic when the sun doesn't rise for days.", "In Tromsø we have something called a «polar night».", "Tromsyoda bizda «qutb tuni» degan narsa bor."),
      w("☀️", "white nights", "ˌwaɪt ˈnaɪts|wayt nayts", "ibora", "Oq tunlar", "Summer nights when it never gets really dark.", "They're called «White Nights», and everyone makes the most of them.", "Ular «Oq tunlar» deyiladi va hamma ulardan to'liq foydalanadi."),
      w("💡", "artificial", "ˌɑːtɪˈfɪʃl|aatifishl", "sifat", "Sun'iy", "Not natural; made by people.", "People go skiing even if it's under artificial light.", "Odamlar sun'iy yorug'likda bo'lsa ham chang'i uchishadi."),
      w("🤖", "automatically", "ˌɔːtəˈmætɪkli|ootametikli", "ravish", "O'z-o'zidan, o'ylamay", "Done without thinking.", "People automatically assume that I must find it really difficult.", "Odamlar o'z-o'zidan buni men uchun juda qiyin deb o'ylashadi."),
      w("🔑", "basically", "ˈbeɪsɪkli|beysikli", "ravish", "Asosan, aslida", "In the most important ways.", "The sun basically doesn't appear for twenty-four hours.", "Quyosh asosan yigirma to'rt soat davomida chiqmaydi."),
      w("📏", "considerably", "kənˈsɪdərəbli|kansidarabli", "ravish", "Ancha, sezilarli darajada", "Much or a lot.", "Pakistan is considerably warmer than Norway.", "Pokiston Norvegiyadan ancha issiq."),
      w("🛋️", "cosy", "ˈkəʊzi|kouzi", "sifat", "Shinam, iliq", "Warm and comfortable.", "You might think everyone would stay indoors, nice and cosy.", "Hamma uyda, shinam joyda qoladi deb o'ylashingiz mumkin."),
      w("😞", "depressing", "dɪˈpresɪŋ|dipresing", "sifat", "Ruhni tushiradigan", "Making you feel sad and not enthusiastic.", "Two months with no daylight sounds really depressing.", "Ikki oy kunduzi yorug'liksiz yashash juda ruhni tushiradigandek eshitiladi."),
      w("🎭", "dramatic", "drəˈmætɪk|dramatik", "sifat", "Keskin, ta'sirli", "Noticeable, surprising or impressive.", "The seasons are much more dramatic here in Norway.", "Bu yerda, Norvegiyada fasllar ancha keskin."),
      w("🐌", "gradually", "ˈɡrædʒuəli|grejuali", "ravish", "Asta-sekin", "Slowly, over a period of time.", "The light gradually starts to come back.", "Yorug'lik asta-sekin qaytib kela boshlaydi."),
    ],
  },
  {
    title: "2-bosqich",
    words: [
      w("🎉", "as lively as", "əz ˈlaɪvli əz|az layvli az", "ibora", "…dek jonli", "Full of energy, in the same way as.", "In summer the nights are as lively as the days.", "Yozda tunlar kunduzi kabi jonli."),
      w("✨", "magical", "ˈmædʒɪkl|mejikl", "sifat", "Sehrli", "Wonderful, mysterious and exciting.", "The first winter is really a magical time of year.", "Birinchi qish — yilning chindan sehrli payti."),
      w("🏠", "originally come from", "əˌrɪdʒənəli ˈkʌm frəm|arijanali kam fram", "ibora", "Asli …dan bo'lmoq", "Were born in or first lived in a place.", "I originally come from Pakistan.", "Men asli Pokistondanman."),
      w("🤏", "slightly darker", "ˌslaɪtli ˈdɑːkə|slaytli daaka", "ibora", "Biroz qorong'iroq", "A little darker.", "It only gets slightly darker for about an hour in the middle of the night.", "Tun o'rtasida taxminan bir soatga biroz qorong'ilashadi."),
      w("🧥", "wrap up warm", "ˌræp ʌp ˈwɔːm|rep ap woom", "ibora", "Issiq kiyinmoq", "Put on warm clothes.", "They wrap up warm and get out in the fresh air.", "Ular issiq kiyinib, toza havoga chiqishadi."),
      w("🌇", "streetlamps", "ˈstriːtlæmps|striitlemps", "ot", "Ko'cha chiroqlari", "Lamps on tall posts in a street.", "The snow looks so beautiful under the glow of the streetlamps.", "Ko'cha chiroqlari nurida qor juda chiroyli ko'rinadi."),
      w("🕯️", "candles", "ˈkændlz|kendlz", "ot", "Shamlar", "Sticks of wax that give light when they burn.", "There are lights and candles everywhere.", "Hamma joyda chiroq va shamlar bor."),
      w("🌧️", "rainy season", "ˈreɪni ˌsiːzn|reyni siizn", "ibora", "Yomg'ir fasli", "The months when it rains a lot in some countries.", "It's considerably hotter in the rainy season than in the winter.", "Yomg'ir faslida qishdagidan ancha issiq."),
      w("🌲", "landscape", "ˈlændskeɪp|lendskeyp", "ot", "Manzara", "Everything you can see in an area of land.", "Norway has a dramatic landscape.", "Norvegiyaning manzarasi hayratlanarli."),
      w("☁️", "downside", "ˈdaʊnsaɪd|daunsayd", "ot", "Kamchilik, salbiy tomoni", "The negative part of something.", "The only downside is that it's a bit difficult to sleep.", "Yagona kamchiligi — uxlash biroz qiyin."),
    ],
  },
  {
    title: "3-bosqich",
    words: [
      w("🌴", "sun sets", "ˌsʌn ˈsets|san sets", "ibora", "Quyosh botadi", "The sun goes down in the evening.", "In tropical countries, the sun sets very quickly.", "Tropik mamlakatlarda quyosh juda tez botadi."),
      w("🌱", "springtime", "ˈsprɪŋtaɪm|springtaym", "ot", "Bahor payti", "The season of spring.", "In springtime, the flowers smell wonderful.", "Bahorda gullar ajoyib hid taratadi."),
      w("😊", "feel cheerful", "ˌfiːl ˈtʃɪəfl|fiil chiafl", "ibora", "O'zini quvnoq his qilmoq", "Feel happy and positive.", "I always feel cheerful when it's spring.", "Bahorda o'zimni doim quvnoq his qilaman."),
      w("🤝", "friendly way", "ˈfrendli weɪ|frendli wey", "ibora", "Do'stona tarzda", "A kind manner («friendly» is an adjective, not an adverb).", "She spoke to me in a very friendly way.", "U men bilan juda do'stona tarzda gaplashdi."),
      w("💧", "fell so hard", "ˌfel səʊ ˈhɑːd|fel sou haad", "ibora", "Shunchalik qattiq yog'di", "Came down with a lot of force.", "The rain fell so hard, it washed away the mountainside.", "Yomg'ir shunchalik qattiq yog'diki, tog' yonbag'rini yuvib ketdi."),
      w("❌", "hardly", "ˈhɑːdli|haadli", "ravish", "Deyarli … emas", "Almost not.", "I hardly ever go out at night in winter.", "Qishda kechasi deyarli tashqariga chiqmayman."),
      w("📰", "a daily paper", "ə ˌdeɪli ˈpeɪpə|a deyli peypa", "ibora", "Kundalik gazeta", "A newspaper that comes out every day.", "I get a daily paper.", "Men kundalik gazeta olaman."),
      w("🛌", "comfortable", "ˈkʌmftəbl|kamftabl", "sifat", "Qulay", "Making you feel physically relaxed.", "This sofa is really comfortable.", "Bu divan juda qulay."),
      w("🌑", "daylight", "ˈdeɪlaɪt|deylayt", "ot", "Kunduzgi yorug'lik", "Natural light from the sun.", "Imagine that — two months with no daylight.", "Tasavvur qiling — ikki oy kunduzgi yorug'liksiz."),
      w("🌗", "separate", "ˈseprət|seprat", "sifat", "Alohida", "Not joined or together.", "Norway has two separate winters.", "Norvegiyada ikkita alohida qish bor."),
    ],
  },
];

const tromso = trueFalse(
  "In Tromsø, the sun doesn't appear for sixty days in winter — the «polar night». But people don't stay indoors: they wrap up warm and go skiing, even under artificial light. November to February is full of light and candles because of celebrations. In summer, the sun never really sets: it only gets slightly darker for about an hour. During these «White Nights», people go to the beach and to outdoor concerts. The only downside is that it's a bit hard to sleep."
);

export const B2_25_EXERCISES: SeedExercise[] = [
  {
    title: "Life in Tromsø",
    skill: "Listening",
    kind: "audiotext",
    instructions: "Listen to Amna, who comes from Pakistan, talking about life in Tromsø, Norway. Answer the questions. Some questions have TWO correct answers.",
    questions: [
      hearing(track("9.1"))("What is the «polar night»?", ["A time when the sun doesn't appear for twenty-four hours", "A night festival", "A very cold night", "A night when you can see the stars"]),
      hearing(track("9.1"))("How long does it go on?", ["Sixty days", "Six days", "Six months", "Two weeks"]),
      hearing(track("9.1"))("How does Amna feel about it?", ["She loves it.", "She finds it really difficult.", "She hates it.", "She is bored by it."]),
      hearing(track("9.1"))("What does she say about the weather in Pakistan?", ["It's considerably warmer than Norway.", "It's very cold.", "It's the same as Norway.", "It snows a lot."]),
      hearing(track("9.1"))("How many winters are there in Tromsø, according to Amna?", ["Two", "One", "Three", "None"]),
      hearingTwo(track("9.1"))("What do people do in the dark winter? Choose TWO.", ["They wrap up warm and go out", "They ski and play in the snow"], ["They stay indoors all the time", "They go on holiday to Pakistan"]),
      hearing(track("9.1"))("What is the only downside of the White Nights?", ["It's a bit difficult to sleep.", "It's too cold.", "There are too many tourists.", "It's too dark."]),
      hearing(track("9.1"))("If she had to choose, which does Amna prefer?", ["The dark days of winter", "The White Nights", "Spring", "Neither"]),
    ],
  },
  {
    title: "Complete the phrases",
    skill: "Listening",
    kind: "listengap",
    instructions: "Listen again. The sentences are in the order you hear them. Choose the missing adverb.",
    questions: [
      gaps(track("9.2"), [
        ["… the sun ___ doesn't appear for twenty-four hours …", "basically", "slightly", "gradually"],
        ["… people ___ assume that I must find it really difficult …", "automatically", "considerably", "originally"],
        ["I ___ come from Pakistan …", "originally", "basically", "gradually"],
        ["… not only is it ___ warmer than Norway, …", "considerably", "slightly", "automatically"],
        ["… the light ___ starts to come back …", "gradually", "basically", "originally"],
        ["It only gets ___ darker for about an hour …", "slightly", "considerably", "automatically"],
      ]),
    ],
  },
  {
    title: "Adjective or adverb?",
    skill: "Vocabulary",
    kind: "choice",
    instructions: "Is the word an adjective or an adverb?",
    questions: [
      say("artificial", ["adjective", "adverb"]),
      say("automatically", ["adverb", "adjective"]),
      say("cosy", ["adjective", "adverb"]),
      say("considerably", ["adverb", "adjective"]),
      say("lively", ["adjective", "adverb"]),
      say("gradually", ["adverb", "adjective"]),
      say("magical", ["adjective", "adverb"]),
      say("slightly", ["adverb", "adjective"]),
    ],
  },
  {
    title: "What does it mean?",
    skill: "Vocabulary",
    kind: "match",
    instructions: "Match the words to their meanings.",
    questions: pairs([
      ["lively|full of energy and interest", "magical|wonderful, mysterious and exciting", "depressing|making you feel sad", "dramatic|noticeable or impressive"],
      ["considerably|much or a lot", "basically|in the most important ways", "gradually|slowly, over time", "originally|in the beginning"],
    ]),
  },
  {
    title: "Climates and lifestyles",
    skill: "Vocabulary",
    kind: "fill",
    instructions: "Complete each sentence with a word from the lesson: magical, automatically, cosy, basically, artificial.",
    questions: written([
      ["I love the Golden Autumn in Poland — the colours of the trees are so ___.", "magical"],
      ["When I hear people talk about the rainy season, I ___ think of tropical islands.", "automatically"],
      ["If it's cold outside, I prefer being ___ by the fire to going outside.", "cosy"],
      ["England is so green because it ___ rains all the time.", "basically"],
      ["There's nothing like the smell of freshly-cut grass. Much better than any ___ perfume.", "artificial"],
    ]),
  },
  {
    title: "Adjective or adverb?",
    skill: "Grammar",
    kind: "choice",
    instructions: "Choose the correct option.",
    questions: [
      say("In tropical countries, the sun sets very ___.", ["quickly", "quick", "quicker", "quickness"]),
      say("Staying awake all night is ___ stupid.", ["completely", "complete", "completed", "completing"]),
      say("In springtime, the flowers smell ___.", ["wonderful", "wonderfully", "wonder", "wonders"]),
      say("She spoke to me ___.", ["in a very friendly way", "very friendly", "very friendlily", "friendly way"]),
      say("I feel much more ___ when it's spring.", ["cheerful", "cheerfully", "cheer", "cheered"]),
      say("The rain fell so ___, it washed away the mountainside.", ["hard", "hardly", "harder", "hardness"]),
      say("The room looks ___.", ["cosy", "cosily", "cosiness", "cosier than"]),
      say("The weather has ___ improved since this morning.", ["gradually", "gradual", "graduated", "grade"]),
      say("It's ___ hotter in the rainy season than in winter.", ["considerably", "considerable", "consider", "considering"]),
      say("I ___ go out at night in winter — almost never.", ["rarely", "rare", "hard", "hardest"]),
    ],
  },
  {
    title: "Dropped syllables",
    skill: "Listening",
    kind: "listengap",
    instructions: "In normal speech, the syllable after the stress is often dropped: com(for)table → «comftable». You will hear seven adjectives. Choose the word you hear.",
    questions: [
      gaps(track("9.3"), [
        ["___", "comfortable", "comforting", "comfort"],
        ["___", "different", "difference", "difficult"],
        ["___", "family", "familiar", "famine"],
        ["___", "favourite", "favourable", "flavour"],
        ["___", "interesting", "interested", "interest"],
        ["___", "miserable", "memorable", "miser"],
        ["___", "separate", "separately", "desperate"],
      ]),
    ],
  },
  {
    title: "The seasons in Tromsø",
    skill: "Reading",
    kind: "truefalse",
    instructions: "Read about the seasons in Tromsø. Are the sentences true or false?",
    questions: [
      tromso("During the polar night, the sun doesn't appear for two months.", true),
      tromso("Most people stay indoors all winter.", false, "They wrap up warm and go out."),
      tromso("November to February is full of light because of celebrations.", true),
      tromso("In summer it gets completely dark for a few hours.", false, "It only gets slightly darker for about an hour."),
      tromso("People go to the beach and outdoor concerts during the White Nights.", true),
      tromso("The only problem with the White Nights is that it's hard to sleep.", true),
    ],
  },
  {
    title: "How sure? How much?",
    skill: "Grammar",
    kind: "match",
    instructions: "Match each adverb to what it tells us.",
    questions: pairs([
      ["gradually|how something happens", "basically|your attitude", "weekly|how often or when", "considerably|the level or extent"],
      ["rarely|how often", "slightly|a small level", "automatically|without thinking", "originally|in the beginning"],
    ]),
  },
  {
    title: "Find the mistake",
    skill: "Grammar",
    kind: "mistake",
    instructions: "Each sentence has one wrong word. Tap it.",
    questions: [
      mistake("The sun sets very *quick in the tropics.", "Describes the verb → quickly."),
      mistake("The flowers smell *wonderfully in spring.", "After smell (= seem) → adjective: wonderful."),
      mistake("She spoke to me very *friendlily.", "friendly is an adjective → in a friendly way."),
      mistake("He works very *hardly.", "hard is the adverb; hardly = almost not."),
      mistake("The light *gradual comes back in spring.", "Adverb: gradually."),
      mistake("I *original come from Pakistan.", "Adverb: originally."),
      mistake("Pakistan is *considerable warmer than Norway.", "Adverb before an adjective: considerably."),
      mistake("Two months with no daylight sounds *depressed.", "Describing a thing → depressing."),
      mistake("I prefer to stay at home, nice and *cosily.", "After «be/stay» → adjective: cosy."),
      mistake("People go skiing under *artificially light.", "Before a noun → adjective: artificial."),
    ],
  },
  {
    title: "Make a sentence",
    skill: "Word order",
    kind: "order",
    instructions: "Tap the words in the correct order.",
    questions: sentences([
      "The sun basically doesn't appear for sixty days.",
      "I originally come from Pakistan.",
      "The light gradually starts to come back.",
      "It's considerably warmer than Norway.",
      "The nights are as lively as the days.",
      "They wrap up warm and get out in the fresh air.",
      "It only gets slightly darker in the middle of the night.",
      "The first winter is a magical time of year.",
    ]),
  },
  {
    title: "Talk about the seasons",
    skill: "Speaking",
    kind: "dialog",
    instructions: "Choose the best answer.",
    questions: [
      say("What's your favourite season?", ["Spring — I feel much more cheerful when the days get longer.", "Spring — I feel much more cheerfully.", "Spring — it is cheerfulness.", "Spring — I feel cheer."]),
      say("What's winter like in Tashkent?", ["It's quite cold, but it rarely snows for long.", "It's quite coldly, but rare snows.", "It's cold quite, rarely snow.", "It's quite cold, but it snows rarely long."]),
      say("Could you live with no daylight for two months?", ["I think it would be really depressing.", "I think it would be really depressed.", "I think it depressingly.", "I think it depresses really."]),
      say("How does the city change at night in summer?", ["It's as lively as the day.", "It's as livelily as the day.", "It's lively as day as.", "It lives as the day."]),
      say("Do you go out much in winter?", ["Hardly ever — I prefer to stay at home, nice and cosy.", "Hard ever — I prefer cosily.", "Hardly — cosy I prefer stay.", "Hardly never — I stay cosily."]),
      say("Is it much hotter in summer?", ["Yes, it's considerably hotter.", "Yes, it's considerable hotter.", "Yes, it's hotter considerable.", "Yes, it's considering hotter."]),
    ],
  },
  {
    title: "Say it",
    skill: "Pronunciation",
    kind: "speak",
    instructions: "Listen, then say it yourself. Drop the weak syllable: comf(or)table, diff(e)rent, int(e)resting.",
    questions: phrases([
      "comfortable",
      "different",
      "family",
      "favourite",
      "interesting",
      "miserable",
      "separate",
      "The sun basically doesn't appear for sixty days.",
      "The light gradually starts to come back.",
      "It's a really magical time of year.",
    ]),
  },
];
