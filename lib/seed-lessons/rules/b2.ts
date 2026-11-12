/**
 * B2 darslarining «Qoida» bo'limi: lug'atdan keyin, mashqlardan oldin
 * ko'rsatiladigan grammatika tushuntirishi — B2 da inglizcha (Navigate B2
 * Grammar focus / Grammar reference asosida, misollar o'zimizniki yoki
 * kitobga yaqin) va shu qoida bo'yicha 10 ta test. Matn belgilari: «## » —
 * sarlavha, «• » — ro'yxat, «→ » — misol, «**…**» — qalin. Testlarda to'g'ri
 * javob birinchi yoziladi (seed paytida aralashtiriladi).
 */
import { q, rule, type LessonRule } from "./types";

export const B2_RULES: Record<string, LessonRule> = {
  "B2-01": rule(
    "Different question types",
    `Most questions put an **auxiliary verb before the subject**: **Does** Sam speak French? · Where **did** they go? · **Have** you been to Italy?
But there are three types of question where the word order is different.

## 1. Subject questions
• When **who, what, which** or **whose** is the **subject**, we **don't use do / does / did**. The word order is the same as in a statement.
→ **Who said** that? (NOT Who did say that?)
→ **Which nationality speaks** the loudest? · **What happened**?
• Compare with an **object question**: Maria called **someone**. → **Who did** Maria **call**?
• We **do** use don't / doesn't / didn't to ask about a negative idea: **Who didn't receive** the email?

## 2. Indirect questions
• After **Do you know …? / Do you think …? / Have you any idea …? / I was just wondering if …** we use **normal word order (subject + verb)** and **no do / does / did**.
→ Do you know where **Dariusz works**? (NOT where does Dariusz work)
→ Have you any idea where **Alex is**? (NOT where is Alex)
→ Do you think **you'll come** to the party?
• Indirect questions sound **more polite** — useful with strangers.

## 3. Questions with prepositions
• When a Wh- word is the object of a preposition, the preposition usually goes at the **end**.
→ What are you talking **about**? · Who will you vote **for**? · Whereabouts are you **from**?
• Preposition at the beginning sounds very formal: **For whom** did she work?`,
    [
      q("___ that? — My brother said it.", ["Who said", "Who did say", "Who did said", "Who says did"]),
      q("Which nationality ___ the loudest?", ["speaks", "does speak", "do speak", "is speak"]),
      q("Maria met someone. — Who ___?", ["did Maria meet", "met Maria", "Maria met", "did Maria met"]),
      q("Do you know where ___?", ["Dariusz works", "does Dariusz work", "works Dariusz", "Dariusz does work"]),
      q("Have you any idea where ___?", ["Alex is", "is Alex", "Alex does", "does Alex be"]),
      q("Do you think ___ to the party?", ["you'll come", "will you come", "do you come", "come you"]),
      q("What are you talking ___?", ["about", "of", "with", "to"]),
      q("Who will you vote ___ in the election?", ["for", "to", "at", "on"]),
      q("Which question is formal?", ["For whom did she work?", "Who did she work for?", "Who's she working for?", "Who does she work for?"]),
      q("Which is a subject question?", ["What happened?", "What did you do?", "Where did they go?", "Who did you see?"]),
    ]
  ),
  "B2-02": rule(
    "Present perfect simple and continuous",
    `We use the present perfect to **connect the past and the present**.

## Form
• **Simple:** have / has + past participle → I've **written** three letters.
• **Continuous:** have / has + **been** + -ing → It's **been raining** since 10 o'clock.

## 1. Both are possible (for / since)
• For an action that **started in the past and is still going on**, we can often use either form with **for** or **since**.
→ He **has worked / has been working** at the post office **since** 1987.
• **for** + a period (for six months) · **since** + a point in time (since 1987, since university).

## 2. Continuous: «how long», activity, short time
• Focus on the **activity** and **how long**: I've **been working** hard since the start of term.
• Short-term or temporary: He's only **been working** here for a few weeks.
• With **all day, all morning, recently, lately**: You've **been working** on that letter all morning!

## 3. Simple: «how many», results, states
• **How many / how much** → simple: I've **written** three assignments since the start of term.
• **State verbs** (be, have, know, seem) → simple only: We've **known** each other since university. (NOT have been knowing)

## 4. Simple: news and unspecified time
• Something happened at an **unspecified time** and it matters **now**: Researchers **have found** that texting can improve spelling.
• Giving news: **Have you heard?** Tom**'s lost** his job. · I**'ve finished** at last!
• With **just, already, yet, so far**: I haven't finished the report **yet**.

## Pronunciation
• have and been are weak: I've /bɪn/ working very hard lately.`,
    [
      q("I ___ hard since the start of term — I'm exhausted.", ["'ve been working", "'ve worked", "work", "was working"]),
      q("I ___ three assignments since the start of term.", ["'ve written", "'ve been writing", "write", "was writing"]),
      q("We ___ each other since university.", ["'ve known", "'ve been knowing", "know", "are knowing"]),
      q("She has been living here ___ six months.", ["for", "since", "from", "during"]),
      q("He has worked here ___ 1987.", ["since", "for", "from", "ago"]),
      q("Have you heard? Tom ___ his job.", ["'s lost", "'s been losing", "loses", "is losing"]),
      q("___ long? — No, just a few minutes.", ["Have you been waiting", "Have you waited", "Are you waiting", "Do you wait"]),
      q("I haven't finished the report ___.", ["yet", "already", "just", "since"]),
      q("Present perfect continuous form:", ["have + been + -ing", "have + -ing", "have + past participle", "be + past participle"]),
      q("Which verb is NOT normally used in the continuous?", ["know", "work", "write", "wait"]),
    ]
  ),
  "B2-03": rule(
    "Verbs + prepositions · ellipsis",
    `## Verbs + prepositions
Some verbs are usually followed by a **particular preposition**. After the preposition we use a **noun, a pronoun or verb + -ing**.

• **verb + preposition + object**
→ Have you **heard of** Silbo Gomero? · Silbo **consists of** four vowels.
→ Mobile phones **contributed to** the decline of Silbo. · You can't **depend on** the coverage.
→ Some locals **disapprove of** it. · Whistling can **result in** bad luck.

• **verb + object + preposition + object**
→ It's easy to **confuse** Silbo **with** birdsong.
→ They **adapted** the language **to** Spanish.
→ an attempt to **prevent** the language **from** becoming extinct
→ Henry Ford **banned** his workers **from** whistling.

• After a preposition, use **-ing**: prevent it **from becoming** (NOT from become).
• Learn verbs **together with** their preposition: communicate **in**, hear **of**, depend **on**, result **in**.

## Ellipsis in informal writing
In informal emails and speech we often **leave out words at the beginning** of a sentence.
1. Leave out the **pronoun**: It sounds amazing. → **Sounds amazing.** · I hope to hear from you soon. → **Hope to hear from you soon.**
2. Leave out the **pronoun + auxiliary**: It's great to hear from you. → **Great to hear from you.** · Are you going anywhere? → **Going anywhere?**

## Phone phrases
• Ending politely: I'd better get off the phone. · I'll let you get on. · I won't take up any more of your time.
• Distractions: Just bear with me a moment. · I'm afraid you've caught me at a bad time.
• A bad line: The coverage isn't too good here. · You're breaking up. · I'm losing you again.`,
    [
      q("Silbo consists ___ four vowels and four consonants.", ["of", "in", "from", "with"]),
      q("It's easy to confuse Silbo ___ birdsong.", ["with", "to", "from", "of"]),
      q("They wanted to prevent the language from ___ extinct.", ["becoming", "become", "to become", "became"]),
      q("Some locals disapprove ___ teaching Silbo.", ["of", "on", "about", "with"]),
      q("In much of the island, you cannot depend ___ phone coverage.", ["on", "of", "from", "to"]),
      q("Whistling indoors can result ___ bad luck.", ["in", "to", "with", "on"]),
      q("Informal: «I hope to hear from you soon.» →", ["Hope to hear from you soon.", "Hear from you soon hope.", "I hope hear from you soon.", "To hear from you soon."]),
      q("Informal: «It's great to hear from you.» →", ["Great to hear from you.", "Is great to hear from you.", "It great to hear from you.", "Great hear from you."]),
      q("You can't hear the other person well. You say:", ["You're breaking up.", "I'll let you get on.", "Bear with me.", "I don't take sales calls."]),
      q("You want to end a call politely:", ["I'd better get off the phone.", "You're breaking up.", "Hold the line.", "I'm losing you."]),
    ]
  ),
  "B2-04": rule(
    "Past events — narrative forms",
    `A **narrative** is a story about the past. We usually tell it with three tenses: the **past simple**, the **past continuous** and the **past perfect**.

## Past simple — the main events
• The events that move the story forward, in order.
→ In 1893, she **sailed** to Sierra Leone. · I **looked** out of the window and **saw** the Taj Mahal.

## Past continuous — the background
• a) An action **in progress** when the main event happened.
→ **While** she **was canoeing** along the river, she **had** an encounter with a crocodile.
→ I **was waiting** for them **when** I **heard** the news.
• b) Two actions in progress **at the same time**.
→ We **were drinking** coffee and Haruki **was doing** some shopping.
• Form: was / were + -ing.

## Past perfect — earlier in the past
• An action that happened **before** a main event, or before the story began.
→ She decided to travel to West Africa, a place she **had always dreamt** of visiting.
→ The hotel was not as nice as we **had expected**.
• Form: had + past participle (had seen, had learnt, had warned).
• **Past perfect continuous** (had been + -ing) for a longer activity before: We**'d been driving** all day and were exhausted.

## Linking words
• **when, while, before, after, as soon as, by the time**
→ **After** she **had learnt** the skills, she **set off** alone.
→ **By the time** we arrived, we **had got** lost several times.`,
    [
      q("In 1893, she ___ to Sierra Leone.", ["sailed", "was sailing", "had sailed", "has sailed"]),
      q("While she ___ along the river, she saw a crocodile.", ["was canoeing", "canoed", "had canoed", "canoes"]),
      q("She went to Africa, a place she ___ of visiting.", ["had always dreamt", "was always dreaming", "has always dreamt", "always dreams"]),
      q("By the time we arrived, the film ___.", ["had started", "started", "was starting", "has started"]),
      q("I ___ for the bus when I heard the news.", ["was waiting", "had waited", "waited", "have waited"]),
      q("We ___ coffee and Tom was doing some shopping.", ["were drinking", "drank", "had drunk", "drink"]),
      q("Which tense is for the MAIN events of a story?", ["past simple", "past continuous", "past perfect", "present perfect"]),
      q("Which tense shows something happened EARLIER?", ["past perfect", "past continuous", "past simple", "present simple"]),
      q("We'd been driving all day, so we ___ exhausted.", ["were", "had been", "are", "have been"]),
      q("___ she had learnt the skills, she set off alone.", ["After", "While", "During", "By"]),
    ]
  ),
};
