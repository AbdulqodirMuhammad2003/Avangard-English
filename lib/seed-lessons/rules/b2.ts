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
  "B2-05": rule(
    "Past perfect simple and continuous",
    `We use the **past perfect** when we are already talking about the past and want to go back to an **earlier past time**.

## Form
• **Simple:** had + past participle → The play **had started** when he got to the theatre. · They **hadn't met** before.
• **Continuous:** had + been + -ing → It **had been raining** for hours. · I **hadn't been feeling** well.
• In speech we often say **'d**: We**'d** met before. · It**'d** been raining for days.

## Past perfect simple — completed actions
• An action that was **finished before** the moment we are talking about.
→ He**'d asked** for her master's permission **before** they got married.
→ By the time we got to the station, the train **had already left**.
• **already** = it happened earlier; **just** = a very short time before: Samir **had just left** when we arrived.

## Past perfect continuous — a longer activity
• An action that **continued for a period of time** up to the past moment (often we can see the result).
→ His body hurt because he **had been sitting** in the same position for hours.
→ When I woke up, I saw that it **had been raining**.

## State verbs — simple only
• be, have, know, like → past perfect **simple**.
→ They **hadn't been** together long before his wife was sold. · We**'d known** each other for five years.

## Adjectives of feeling
• happy → **delighted, relieved, satisfied** · sad → **miserable, down, hurt**
• angry → **furious, bitter** · frightened → **petrified, terrified**
• nervous → **anxious, tense** · confused → **puzzled, disorientated**`,
    [
      q("They ___ each other for a year before they got married.", ["had known", "had been knowing", "have known", "knew been"]),
      q("He was exhausted because he ___ all night.", ["had been driving", "has been driving", "had drove", "drives"]),
      q("By the time we got there, the train ___ left.", ["had already", "has already", "already was", "had been"]),
      q("My eyes hurt because I ___ at the screen all day.", ["had been staring", "had stared been", "have stared", "stare"]),
      q("I ___ the alarm, so I got to work late.", ["hadn't set", "haven't set", "hadn't been setting", "don't set"]),
      q("Past perfect continuous form:", ["had + been + -ing", "had + -ing", "have + been + -ing", "was + -ing"]),
      q("Very happy:", ["delighted", "miserable", "bitter", "tense"]),
      q("Very frightened:", ["petrified", "relieved", "satisfied", "puzzled"]),
      q("Happy because a worry has gone:", ["relieved", "furious", "down", "anxious"]),
      q("Confused about where you are:", ["disorientated", "delighted", "bitter", "satisfied"]),
    ]
  ),
  "B2-06": rule(
    "Telling stories · complaints · American English",
    `## Telling a story
• **Introduce it:** Have I ever told you about …? · Did you hear about …?
• **Give a time context:** This happened about ten years ago. · This was in the days before satnav.
• **Add emphasis:** You'll never guess … · You're not going to believe this … · And then, **to make matters worse**, …
• **End it:** In the end, … · We **ended up** sleeping in the car. (end up + -ing)
• Use **narrative tenses**: We**'d been camping** in France and we **were driving** home when we **got** lost.

## Reacting to a story
• I'm not surprised! · You're kidding! · You can't be serious!
• That is hilarious! · You must have been so embarrassed! · I bet you were furious / petrified!
• Make your voice **rise and fall** — a flat voice sounds bored.

## An email of complaint (formal)
• **Reason:** I am writing to complain about … / to express my dissatisfaction with …
• **The incident:** We had been informed that … · I discovered that … · Clearly, … · I am extremely upset about …
• **Action:** I suggest that you investigate the matter. · I am therefore requesting compensation for …
• **Close:** I look forward to your reply. Yours faithfully,
• Be **respectful, brief, clear** and **reasonable**.

## British and North American English
• Different words: holiday → **vacation** · autumn → **fall** · boot → **trunk** · pavement → **sidewalk** · rubbish → **garbage** · toilet → **restroom** · the Underground → **subway** · motorway → **freeway** · return → **round-trip** · car park → **parking lot** · lorry → **truck** · petrol → **gas**
• Pronunciation: in American English «t» in the middle often sounds like /d/ (water, writer) and «r» is always pronounced (car).`,
    [
      q("Have I ever ___ you about our trip to France?", ["told", "said", "talked", "spoke"]),
      q("And then, to make matters ___, they lost my luggage.", ["worse", "bad", "worst", "badly"]),
      q("We ended up ___ in the car.", ["sleeping", "sleep", "to sleep", "slept"]),
      q("You parked in a playground? That's ___!", ["hilarious", "embarrassed", "furious", "inconvenient"]),
      q("Formal: «I would like my money back.» →", ["I am therefore requesting compensation.", "Give me my money!", "Pay me now.", "I want cash."]),
      q("I look forward to ___ your reply.", ["receiving", "receive", "received", "be receiving"]),
      q("American English for «holiday»:", ["vacation", "fall", "trunk", "subway"]),
      q("American English for «pavement»:", ["sidewalk", "freeway", "restroom", "garbage"]),
      q("British English for «garbage»:", ["rubbish", "luggage", "queue", "petrol"]),
      q("British English for «round-trip ticket»:", ["return", "single", "central", "one-way"]),
    ]
  ),
  "B2-07": rule(
    "Talking about the future (1)",
    `English has **no single future tense**. We choose the form by its meaning.

## will
• a) A **prediction** based on what we know, think or feel.
→ You**'ll** really like the film. · Some children born today **will** probably live to be 120.
• b) A **spontaneous decision** — decided at the moment of speaking.
→ The phone's ringing. — I**'ll** get it!
• c) **Promises, offers, refusals and requests.**
→ I **won't** tell anyone. I promise. · I**'ll** help you if you like. · **Will** you help me?
• In speech: I'll, you'll, we'll · will not → **won't**.

## going to
• d) **Plans and intentions** we already have (decided before now).
→ George has decided he**'s going to study** economics.
• e) A prediction based on **evidence in the present**.
→ Look at the traffic. We**'re going to be** late!

## Present continuous
• f) **Arrangements** and fixed plans, often with a time, date or place.
→ We**'re meeting** at the restaurant at 7.30. · **Are** you **doing** anything at the weekend?

## Present simple
• g) **Scheduled or timetabled** events.
→ Their plane **lands** at 7 a.m. on Wednesday. · The course **starts** next week.

## Learning idioms
• **drop out** (of university) · **pick up** (learn on the job) · **know your stuff**
• **think ahead** · **make the most of** · **lose touch** (with) · **get on** (be successful)
• **do your best** · **stick at it** (don't stop) · **give up** (stop trying)`,
    [
      q("The phone's ringing. — I ___ it!", ["'ll get", "'m going to get", "get", "'m getting"]),
      q("Look at those clouds! It ___ rain.", ["'s going to", "will", "rains", "is raining"]),
      q("We ___ at the restaurant at 7.30 — I've booked a table.", ["'re meeting", "meet", "'ll meet", "met"]),
      q("The course ___ next week — it's on the timetable.", ["starts", "will starting", "is start", "going to start"]),
      q("He's decided he ___ economics.", ["'s going to study", "'ll study", "studies", "is studied"]),
      q("I promise I ___ anyone.", ["won't tell", "don't tell", "'m not telling", "not tell"]),
      q("Which form is for a spontaneous decision?", ["will", "going to", "present continuous", "present simple"]),
      q("Plenty of business people ___ of university.", ["drop out", "pick up", "get on", "stick at"]),
      q("You can ___ a lot on the job.", ["pick up", "drop out", "give up", "lose touch"]),
      q("If something is difficult, don't stop — ___.", ["stick at it", "give it up", "drop out", "lose touch"]),
    ]
  ),
  "B2-08": rule(
    "Future continuous and future perfect",
    `## Future continuous: will + be + -ing
• An action **in progress** at a certain time in the future.
→ This time next year, I**'ll be living** in another country.
→ This time tomorrow I**'ll be flying** to New York.
→ I hope I **won't** still **be working** here in five years.
• Typical phrases: **this time tomorrow / next week / next year**, **in two years' time**, **a week from now**.

## Future perfect: will + have + past participle
• An action **completed before** a certain time in the future.
→ By this time next year, I **will have finished** writing my book.
→ Computers **will have changed** beyond recognition in twenty years' time.
• Also for something still going on up to a future time: Next month, we**'ll have lived** here for twenty years.
• Typical phrases: **by** August / the end of the year / 2030, **in ten years' time**.
• Future perfect continuous (rare): In September, I**'ll have been working** here for a year.

## Compare
→ At 7 p.m. we**'ll be having** dinner. (in the middle of it)
→ By 8 p.m. we**'ll have finished**. (it's over)

## Collocations with time and money
• **time:** kill time · take your time · while away the time
• **money:** get your money's worth · throw your money around
• **both:** be short of · fritter away · have … to spare · invest · run out of · set aside · waste`,
    [
      q("This time next week, we ___ on the beach.", ["'ll be lying", "'ll have lain", "lie", "lay"]),
      q("By the end of the year, I ___ my book.", ["'ll have finished", "'ll be finishing", "finish", "finished"]),
      q("Don't call at 7 — we ___ dinner then.", ["'ll be having", "'ll have had", "have", "had"]),
      q("Future perfect form:", ["will + have + past participle", "will + be + -ing", "will + have + -ing", "will + past simple"]),
      q("Future continuous form:", ["will + be + -ing", "will + have + past participle", "will + -ing", "be + going + -ed"]),
      q("___ 2050, the population will have risen to nine billion.", ["By", "Since", "For", "During"]),
      q("Apps are a good way to ___ time when you're bored.", ["kill", "spend away", "throw", "set"]),
      q("Work hard and get your money's ___.", ["worth", "value", "price", "cost"]),
      q("Which goes with MONEY only?", ["throw … around", "kill", "take your", "while away"]),
      q("Which goes with BOTH time and money?", ["run out of", "kill", "get your … 's worth", "take your"]),
    ]
  ),
  "B2-09": rule(
    "Noun suffixes · likelihood · opinion essays",
    `## Noun suffixes
Some endings tell you that a word is a **noun**:
• **-ence** reference · **-ance** appearance, inheritance
• **-ery / -ry** bravery, robbery · **-ity** reality, generosity
• **-tion** intention, invitation · **-dom** wisdom, freedom
• **-ment** measurement, achievement, enjoyment
• The spelling can change: enter → **entrance** · curious → **curiosity** · converse → **conversation** · vary → **variation** · scarce → **scarcity** · jewel → **jewellery**
• Stress: we often stress the syllable **before** the suffix: gene**ro**sity, invi**ta**tion, a**chieve**ment.

## Saying how likely something is
• **Definitely won't:** There's no chance of (me eating) that!
• **Probably won't:** I doubt (people would be satisfied).
• **Possibly will:** I suppose it might happen.
• **Probably will:** I wouldn't be surprised if it happened. · I expect (they'll travel more).
• **Definitely will:** It's bound to happen. · That's sure to happen.

## A balanced opinion essay (5 paragraphs)
1. **Introduction:** Without doubt, … · In recent years, … · These days, …
2. **First view:** Some people argue that … — for example / such as …
3. **Second view:** Others feel, however, that … — In addition, … / Moreover, …
4. **Your opinion:** Personally, … · In my opinion, … · In fact, …
5. **Conclusion:** In conclusion, … · To sum up, …`,
    [
      q("Thank you for your ___.", ["generosity", "generous", "generously", "generate"]),
      q("Noun from «free»:", ["freedom", "freement", "freeness", "freety"]),
      q("Noun from «brave»:", ["bravery", "braveness", "bravity", "bravement"]),
      q("Noun from «curious»:", ["curiosity", "curiousness", "curiosion", "curiousment"]),
      q("Noun from «enter»:", ["entrance", "enterance", "entrence", "entering"]),
      q("Definitely will happen:", ["It's bound to happen.", "I doubt it.", "I suppose it might.", "There's no chance."]),
      q("Probably won't happen:", ["I doubt it'll happen.", "It's sure to happen.", "I expect so.", "It's bound to."]),
      q("I wouldn't be ___ if it happened.", ["surprised", "surprise", "surprising", "sure"]),
      q("Which phrase gives YOUR opinion?", ["Personally, …", "Some people argue that …", "Others feel that …", "For example, …"]),
      q("Which phrase starts the conclusion?", ["In conclusion, …", "In addition, …", "Such as …", "Others feel, however, …"]),
    ]
  ),
  "B2-10": rule(
    "Passive forms",
    `## Form: be + past participle
The passive has the same tenses as the active. Only **be** changes:
• Present simple: Billions of messages **are sent** every day.
• Present continuous: My car **is being serviced** at the moment.
• Past simple: The computer mouse **was invented** in the 1960s.
• Past continuous: Our rooms **were** still **being cleaned** when we arrived.
• Present perfect: Twenty inventions **have been shortlisted**.
• Past perfect: Linacre **had been inspired** by the drought.
• Future: The winner **will be announced** in November.

## Passive infinitive (be + past participle)
• After **modal verbs**, **be going to** and verbs with **to** (need to, have to, want to):
→ Bags **must not be left** unattended. · Water **can be collected** from the air.
→ The film **is going to be released** next year. · The software **needs to be updated**.
• Past modal: The problem **may have been solved**.

## Why use the passive?
• We are interested in **what happens to something**, not who does it — the doer is **unknown, obvious or unimportant**: The mixture **is heated** to 100°C.
• Use **by** to say who or what does the action: The mouse was invented **by** Douglas Engelbart.

## Two objects → two passives
• They showed **the judges** **the designs**. →
→ **The judges** were shown the designs. OR **The designs** were shown to the judges.
• **was / were born**: I **was born** in Milan. (NOT I born)`,
    [
      q("The winner ___ in November.", ["will be announced", "will announce", "will announced", "is announcing"]),
      q("My car ___ at the moment.", ["is being serviced", "is serviced", "has serviced", "services"]),
      q("Twenty inventions ___ for the award.", ["have been shortlisted", "have shortlisted", "has been shortlist", "are shortlisting"]),
      q("Water ___ from the air.", ["can be collected", "can collect", "can be collect", "can been collected"]),
      q("The mouse was invented ___ Douglas Engelbart.", ["by", "from", "of", "with"]),
      q("The software needs ___.", ["to be updated", "to update", "be updated", "updated be"]),
      q("Where ___ you born?", ["were", "did", "are", "have"]),
      q("They gave the winners a prize. → The winners ___ a prize.", ["were given", "gave", "were giving", "had give"]),
      q("Passive form:", ["be + past participle", "have + past participle", "be + -ing", "will + verb"]),
      q("The problem ___ by a young inventor.", ["may have been solved", "may have solved", "may been solved", "may have be solved"]),
    ]
  ),
  "B2-11": rule(
    "Causative have and get",
    `We use causative structures when **someone else does something for us** (usually because we arranged it).

## have / get + object + past participle
• We **don't say** who does the action.
→ We**'re having** the roof **repaired** in the summer.
→ At this hotel, you can **get** your dry-cleaning **done** for free.
→ Where do you **get** your hair **cut**? · I'm **getting** my car **serviced** tomorrow.
• **get** is a little more **informal** than have.
• Any tense is possible: I **had** my apartment **valued** last week. · We**'re having** our office **decorated**.

## Something bad that happened to us
• **have + object + past participle** — for unwelcome events (NOT get).
→ I **had** my handbag **stolen** last night. · I**'ve had** my car **broken** into.

## have someone do / get someone to do
• We **do say** who does the action.
• **have** + person + infinitive **without to**: We **had the doctor check** her blood pressure.
• **get** + person + infinitive **with to**: I'm **getting Alex to pick** my parents up.
→ I had someone **clean** the carpets. = I got someone **to clean** the carpets.

## Compare
• I **cut** my hair. → I did it myself.
• I **had** my hair **cut**. → A hairdresser did it.

## Describing your impressions
• weird → **odd** · original → **innovative, inventive** · impressive → **remarkable, striking**
• functional → **practical, user-friendly** · childish → **silly** · unimaginative → **conventional**`,
    [
      q("I ___ yesterday. (a hairdresser did it)", ["had my hair cut", "cut my hair", "had cut my hair", "got cut my hair"]),
      q("We're having the roof ___.", ["repaired", "repair", "to repair", "repairing"]),
      q("I got the mechanic ___ my brakes.", ["to check", "check", "checked", "checking"]),
      q("I had the mechanic ___ my brakes.", ["check", "to check", "checked", "checks"]),
      q("Something bad: I ___ my bike stolen.", ["had", "got", "made", "did"]),
      q("Where do you get your car ___?", ["washed", "wash", "to wash", "washing"]),
      q("Which is more informal?", ["get", "have", "both are formal", "neither"]),
      q("Very noticeable and unusual:", ["striking", "conventional", "practical", "silly"]),
      q("Easy to understand and use:", ["user-friendly", "odd", "remarkable", "childish"]),
      q("Always traditional and normal:", ["conventional", "innovative", "inventive", "striking"]),
    ]
  ),
  "B2-12": rule(
    "Confused words · summaries · opinions",
    `## Easily confused words
**1. Different grammar** (verb / noun):
• **affect** (v) / **effect** (n): It **affected** me badly. = It had a bad **effect** on me.
• **advise** (v) / **advice** (n) · **practise** (v) / **practice** (n) — in British English.
**2. Similar sound or spelling:**
• **specially** = for a special purpose: I made this **specially** for you.
• **especially** = in particular: It's popular everywhere, **especially** in the USA.
• **quite** (adverb, fairly) / **quiet** (adjective, not noisy) · **lose** (verb) / **loose** (adjective, not tight)
**3. Close meaning:**
• **manage** = succeed in a difficult situation: She always **manages** to finish on time.
• **control** = have power over: He finds it hard to **control** his children.
• **mistake** = something wrong you do · **fault** = responsibility for something bad: It's my **fault**.

## Lost sounds in fast speech
• /t/ and /d/ at the end of a consonant cluster often **disappear** before another consonant: I'm no(t) going · He stoppe(d) kicking.
• They **stay** before a vowel or /h/: firs**t** of all · She seeme**d** happy.

## Writing a summary
• Include the **main ideas**, not minor details. · Use **your own words**. · Don't add **your opinion**.
• Paraphrase: use synonyms (memorization → rote learning), change active to passive (People say that … → **It is often thought that** …), or a verb to a noun.

## Giving opinions and changing someone's opinion
• **Giving:** Well, I have to say that … · Personally, I think … · As I see it, … · It seems to me …
• **Changing:** Well, you've got a point, but … · Yes, but on the other hand … · No, but look … · Yes, but don't you think …?`,
    [
      q("The new rules will ___ everyone.", ["affect", "effect", "affection", "effective"]),
      q("The medicine had no ___.", ["effect", "affect", "affected", "affecting"]),
      q("Can you give me some ___?", ["advice", "advise", "advices", "advised"]),
      q("Please be ___ in the library.", ["quiet", "quite", "quit", "quietly"]),
      q("These trousers are too ___ — I need a belt.", ["loose", "lose", "lost", "loss"]),
      q("I love fruit, ___ mangoes.", ["especially", "specially", "special", "specialist"]),
      q("She ___ to finish all her work on time.", ["managed", "controlled", "succeeded", "made"]),
      q("A summary should NOT include …", ["your own opinion", "the main ideas", "your own words", "paraphrases"]),
      q("Which phrase tries to change someone's opinion?", ["Well, you've got a point, but …", "Personally, I think …", "As I see it, …", "I have to say that …"]),
      q("Which phrase gives your opinion?", ["It seems to me …", "No, but look …", "Yes, but on the other hand …", "Yes, but don't you think …?"]),
    ]
  ),
  "B2-13": rule(
    "Verbs with -ing and infinitive",
    `When one verb follows another, the second verb is **-ing** or the **infinitive** (with or without **to**).

## verb + -ing
• adore, don't mind, enjoy, fancy, feel like, hate, can't help, can't imagine, can't stand, involve, miss, avoid
→ I don't feel like **going** out tonight. · The job involves **working** with children.

## verb + to + verb
• agree, aim, appear, arrange, choose, decide, expect, hope, learn, offer, plan, pretend, refuse, tend, want
→ We've arranged **to meet** on the 25th. · I pretended **to be** excited.

## verb + object + to + verb
• advise, allow, ask, encourage, expect, forbid, get, need, remind, teach, tell, want
→ They encouraged **me to do** it. · I tried to get **the horse to slow** down.

## make / let + object + verb (no to)
→ My father **let me sit** on his shoulders. · My boss **makes us stay** until 5.30.
• **help** + object + verb with or without to: Help **me (to) cook** dinner.

## Change of meaning
• **remember / forget + -ing** = a memory: I'll never forget **falling** off that horse.
• **remember / forget + to** = something you must do: Remember **to lock** the door.
• **regret + -ing** = sorry about the past: I regret **not speaking** to her.
• **regret + to** = formal bad news: We regret **to inform** you …
• **stop + -ing** = the action ends: I stopped **playing** games.
• **stop + to** = the reason you stopped: We stopped **to get** petrol.

## Talking about memories
• Clear: vivid · I can recall it clearly · as if it were yesterday
• Unclear: vaguely · just about · can't remember the precise details · it has begun to fade
• None: no recollection · no memory of it whatsoever`,
    [
      q("I don't feel like ___ out tonight.", ["going", "to go", "go", "went"]),
      q("We've arranged ___ on Friday.", ["to meet", "meeting", "meet", "met"]),
      q("My father let me ___ on his shoulders.", ["sit", "to sit", "sitting", "sat"]),
      q("They encouraged me ___ it.", ["to do", "do", "doing", "done"]),
      q("I'll never forget ___ you for the first time.", ["meeting", "to meet", "meet", "met"]),
      q("Remember ___ the door when you leave.", ["to lock", "locking", "lock", "locked"]),
      q("We stopped ___ some petrol. (the reason)", ["to get", "getting", "get", "got"]),
      q("I stopped ___ when I was 30. (I don't do it now)", ["smoking", "to smoke", "smoke", "smoked"]),
      q("A very clear memory:", ["vivid", "vague", "faded", "precise-less"]),
      q("I have no ___ of it whatsoever.", ["recollection", "recall", "remember", "memorize"]),
    ]
  ),
  "B2-14": rule(
    "Other uses of -ing and infinitive with to",
    `## -ing form
• As the **subject** or **object** of a sentence: **Running** is my favourite hobby. · I hate **washing** dishes.
• **adjective + preposition + -ing**: fed up **with**, tired **of**, capable **of**, interested **in**
→ I'm **tired of working** here. · Are you **interested in coming** with us?
• **noun + preposition + -ing**: the chance of, difficulty in, a feeling of, the idea of, the purpose of, the thought of
→ I hate **the idea of having** nothing to do.
• **before, after, since, while + -ing** (when the subject is the same):
→ He felt sick **after eating** a whole packet of biscuits. · I fell asleep **while watching** TV.
• In everyday English we often use a clause instead: I fell asleep **while I was watching** TV.

## Infinitive with to
• **adjective + to**: about, desperate, easy, keen, likely, rare, surprised, willing
→ Is the software **easy to install**? · How long are you **willing to wait**?
• **noun + to**: decision, desire, need, motivation, opportunity, plan, reason
→ Have you got any **plans to move** abroad? · There's no **reason to get** upset.
• **noun + be + to**: My **advice is to work** harder.
• **something / anything / nothing / anyone + to**:
→ I haven't got **anything to do**. · She hasn't got **anyone to talk to**.

## Boredom vocabulary
• **bored:** bored to death, bored with, fed up with, tired of, have had enough of
• **boring:** dull, repetitive, uninteresting
• **symptoms:** yawn, can't sit still, lose concentration, your mind wanders, zone out, feel desperate to escape`,
    [
      q("I'm tired of ___ here.", ["working", "to work", "work", "worked"]),
      q("I fell asleep while ___ TV.", ["watching", "to watch", "watch", "watched"]),
      q("Is the software easy ___?", ["to install", "installing", "install", "installed"]),
      q("I haven't got anything ___.", ["to do", "doing", "do", "done"]),
      q("Have you got any plans ___ abroad?", ["to move", "moving", "move", "moved"]),
      q("I hate the idea of ___ nothing to do.", ["having", "to have", "have", "had"]),
      q("___ is good for your health.", ["Swimming", "Swim", "To swimming", "Swam"]),
      q("Which word means «boring»?", ["dull", "fed up", "yawn", "zone out"]),
      q("Which is a symptom of boredom?", ["yawn", "repetitive", "dull", "uninteresting"]),
      q("I'm really fed up ___ this weather.", ["with", "of", "about", "for"]),
    ]
  ),
  "B2-15": rule(
    "Linkers · phrasal verbs · solutions · advice",
    `## Linkers
Linkers show how ideas connect — they help you **predict** what comes next.
• **Making things clearer:** in other words, that is to say, i.e., to put it another way
• **Giving examples:** for example, for instance, e.g., such as
• **Showing a reason:** because of, due to, owing to, since
→ The flight was cancelled **due to** bad weather. · I love sports **such as** tennis.

## Phrasal verbs with up and out
• **up** = begin or appear: come up, pop up, turn up, set up, take up
• **up** = create: come up with, make up, dream up, think up
• **out** = find or discover: work out, find out, figure out, turn out
• **out** = finish or use completely: run out of, sort out, die out, carry out
→ Something urgent has **come up**. · It **turned out** he had cheated. · I **ran out of** time.

## Working out solutions
• **Suggesting:** What if we …? · Would it be worth + -ing? · Would there be any point in + -ing? · One alternative would be + to … · We need to take … into consideration.
• **Accepting:** That would be an effective solution. · I suppose there's no harm in doing that.
• **Rejecting:** I'm not convinced. · I don't think that's an option. · I think a better way forward would be to …

## Writing advice
• **Do:** Make sure you … · It's advisable to … · You should … · Remember to … · Don't forget to …
• **Don't:** It's not advisable to … · Try not to … · Be careful not to … · Avoid + -ing · Whatever you do, don't …
• **Reasons:** … otherwise / or else it might … · … in case it + present tense · … as it could …`,
    [
      q("The flight was cancelled ___ bad weather.", ["due to", "such as", "in other words", "for instance"]),
      q("I love outdoor sports, ___ climbing.", ["such as", "due to", "i.e.", "because of"]),
      q("Something urgent has ___, so I have to go.", ["come up", "turned out", "sorted out", "made up"]),
      q("I ___ time in the exam.", ["ran out of", "came up with", "turned up", "made up"]),
      q("It ___ he had cheated.", ["turned out", "came up", "popped up", "made up"]),
      q("Would it be worth ___ fake cameras?", ["putting in", "to put in", "put in", "to putting in"]),
      q("We need to take cost into ___.", ["consideration", "considerate", "considering", "consider"]),
      q("Which phrase rejects a suggestion?", ["I'm not convinced.", "That would be an effective solution.", "What if we …?", "There's no harm in it."]),
      q("Take a coat ___ it gets cold.", ["in case", "otherwise", "whatever", "such as"]),
      q("___ touching the bulb — it may be hot.", ["Avoid", "Make sure", "Remember", "Don't forget"]),
    ]
  ),
  "B2-16": rule(
    "Articles: a/an, the and – (no article)",
    `## a / an (indefinite article)
• One member of a class, or something we mention **for the first time**:
→ I saw **an** amazing film last night. · There's **a** concert in Hyde Park.
• **a** before a consonant **sound**, **an** before a vowel **sound**: a car, **a u**niversity /juː/, **a e**uro · an apple, **an h**our, an umbrella.
• Rates: one pound **an** hour.

## the (definite article)
• It's **clear which one** (often the second mention): How was **the** concert?
• The **only one**: **the** sun, **the** full moon.
• **Superlatives**: **the** biggest community, **the** quickest way.
• **Rivers, valleys, oceans, seas, deserts, mountain ranges**: the Nile, the Chubut Valley, the Atlantic, the Sahara, the Andes.
• **Plural countries / groups of islands**: the UK, the USA, the Netherlands, the Bahamas.
• **Theatres, cinemas, hotels, galleries, museums**: the Globe Theatre, the British Museum.

## No article (–)
• **Generalizing** with plural or uncountable nouns: **Food** prices have risen. · I love **music**.
• **Most countries, continents, states, lakes, single mountains**: Japan, Asia, California, Lake Superior, Mount Fuji.
• **Towns, cities, neighbourhoods, streets**: Tokyo, Athens, Liberdade, Fifth Avenue.

## Communities vocabulary
• **ancestors** (long ago) ↔ **descendants** (later generations) · **immigrants** · **citizens**
• **custom** (tradition) ≠ **costume** (clothes) · **festival / ceremony / parade**
• **neighbourhood** (place) ≠ **community** (people) · **adjust** (get used to) ≠ **establish** (set up)`,
    [
      q("I saw ___ amazing film yesterday.", ["an", "a", "the", "–"]),
      q("___ sun is very hot today.", ["The", "A", "An", "–"]),
      q("It's ___ biggest carnival in Europe.", ["the", "a", "an", "–"]),
      q("We sailed down ___ Nile.", ["the", "–", "a", "an"]),
      q("Have you been to ___ Japan?", ["–", "the", "a", "an"]),
      q("I'm studying at ___ university.", ["a", "an", "the", "–"]),
      q("I love ___ music. (in general)", ["–", "the", "a", "an"]),
      q("Have you visited ___ British Museum?", ["the", "–", "a", "an"]),
      q("People in a later generation of your family:", ["descendants", "ancestors", "immigrants", "citizens"]),
      q("Traditional clothes for a festival:", ["costumes", "customs", "ceremonies", "communities"]),
    ]
  ),
  "B2-17": rule(
    "Determiners and quantifiers",
    `Determiners come **before a noun** and tell us **how many / how much** or **which**.

## Countable or uncountable?
• **Countable** (houses, people): many, a number of, hundreds of, several, few, a few, too many
→ There are **several** houses on my road. · **Hundreds of** people live this way.
• **Uncountable** (money, time, space): much, a great deal of, a large quantity of, little, a little, too much
→ Did you do **much** sightseeing? — **A little**.
• **Both**: a lot of, lots of, some, any, enough, plenty of
→ There are **a lot of** cafés. · Is there **enough** space?

## few / a few, little / a little
• **a few / a little** = some (positive): **A few** houses have been built already.
• **few / little** = not many / not much (negative): **Few** people learn Latin these days.

## too many / too much / enough
• **too many** + countable, **too much** + uncountable = more than is good.
• **enough** = as many / as much as you need: Are there **enough** chairs?

## all, every, each
• **all** + plural noun (+ plural verb): **All** (of) **the** houses have gardens.
• **every / each** + singular noun (+ singular verb): **Every** house has a front door.
• **each** = every individual one, also for two things: houses on **each** side of the street (NOT every side).

## both, either, neither (two people or things)
• **both** + plural: **Both** doctors work in Edinburgh. · **Both of them** (NOT both them).
• **either / neither** + singular: I don't like **either** house. · **Neither** house is big.
• **either … or**, **neither … nor**: **Neither** David **nor** Andrew speaks German.
• Before the / my / us / them → **of**: either **of** the houses, neither **of** us.`,
    [
      q("How ___ houses are there?", ["many", "much", "a little", "little"]),
      q("Did you do ___ shopping?", ["much", "many", "a few", "several"]),
      q("___ house has a garden.", ["Every", "All", "Both", "Many"]),
      q("___ the apartments have been sold.", ["All", "Every", "Each", "Either"]),
      q("___ of them speak French.", ["Both", "Either", "Every", "Each"]),
      q("Neither David ___ Andrew speaks German.", ["nor", "or", "and", "but"]),
      q("There are far too ___ cars in the city.", ["many", "much", "few", "little"]),
      q("Is there ___ space for everyone?", ["enough", "many", "few", "every"]),
      q("___ people learn Latin now — it's a pity.", ["Few", "A few", "Little", "A little"]),
      q("I don't like ___ of the houses.", ["either", "neither", "both", "every"]),
    ]
  ),
  "B2-18": rule(
    "Verb collocations · conversation starters · describing data",
    `## High-frequency verb collocations
Some very common verbs add little meaning — the main meaning is in the words that go with them. Learn them as **phrases**:
• **do:** do you good, do a lot of damage, do nothing
• **get:** get to know someone, get into an argument, get an illness, get together, get dressed up
• **give:** give someone an idea / a fright / a headache, give permission, give a speech / talk, give something some thought
• **have:** have an argument / a chat, have problems, have an accident, have a lie-down
• **make:** make yourself understood, make the most of, make sure of, make all the difference
• **put:** put into practice, put in charge, put pressure on, put the blame on
• **take:** take the blame, take control, take something seriously, take a look
• **set:** set free, set a limit, set a date, set a good / bad example

## Linking sounds in fluent speech
• Between two vowel sounds we add **/j/** (after /iː/, /aɪ/): be /j/ English
• **/w/** (after /uː/, /aʊ/, /əʊ/): go /w/ outside · who /w/ is
• **/r/** (after a word ending in r / re): the car /r/ is ready

## Starting a conversation with a stranger
• Lovely weather, isn't it? · Is it always this busy?
• Excuse me, is anyone sitting there? · Excuse me, do you mind if I …?
• I hope you don't mind me asking, but (haven't we met before)?
• Sorry, but I couldn't help overhearing … · So, how do you know (Jonathan)?

## Describing data
• The chart shows / illustrates … · It is clear / noticeable that …
• **the number of** + countable · **the amount of** + uncountable
• However, … · In contrast, … · much / significantly more … than …
• On average, … · Overall, … · By far the most … · Perhaps the most striking feature of the data is …`,
    [
      q("Bad advice can ___ a lot of damage.", ["do", "make", "get", "set"]),
      q("It ___ all the difference.", ["makes", "does", "takes", "gives"]),
      q("Have you ___ a date for the wedding?", ["set", "made", "done", "put"]),
      q("She ___ the blame on her brother.", ["put", "gave", "made", "set"]),
      q("Cosplayers ___ dressing up very seriously.", ["take", "make", "do", "have"]),
      q("He couldn't make himself ___.", ["understood", "understand", "understanding", "to understand"]),
      q("Polite starter on a train:", ["Excuse me, is anyone sitting there?", "Give me that seat.", "Move, please.", "Is this my seat?"]),
      q("The ___ of people living alone is growing.", ["number", "amount", "deal", "much"]),
      q("___, about 65% of people see their family daily.", ["On average", "In contrast", "By far", "However of"]),
      q("Which phrase compares two groups?", ["In contrast, …", "On average, …", "The chart shows …", "Overall, …"]),
    ]
  ),
  "B2-19": rule(
    "Present modal verbs",
    `Modal verbs (must, can, could, might, may, should) are followed by the **base verb** (no -s, no to): She **can speak** … · You **must be** …
Some non-modal verbs work in a similar way: **have to, need (to), ought to**.

## Strong obligation
• **must / have to** = it's necessary or a rule: You **must be** at work by 9 a.m. · They **have to give** the money back.
• Questions usually use have to: **Do** you **have to** work on Saturdays?

## Lack of obligation
• **don't have to / don't need to / needn't** = it isn't necessary (you can choose):
→ We **don't have to** wear a tie. · You **needn't** buy any sugar.
• ⚠ **mustn't** does NOT mean this!

## Prohibition
• **mustn't / can't** = it's not allowed: You **mustn't** ever leave that door unlocked. · You **can't** smoke inside.

## Permission
• **can / may** (may is more formal): Employees **can** use the gym. · **May** I leave the room?

## Advice
• **should / shouldn't / ought to**: Do you think I **should** say something? · You **ought to** talk to your boss.
• We don't usually use ought to in questions or negatives.

## Possibility
• **could / might / may** = it's possible: That young man **could** be Angela's brother. · The meeting **might** be interesting.

## Crime and justice vocabulary
• lost property · valuables · illegal · suspended sentence · justify · circumstances · abandoned · accidentally
• Same word, different part of speech: a **reward** / to be **rewarded** · a **claim** / to **claim** · an **official** / **official** · a **suspect** / to **suspect**`,
    [
      q("You ___ be at work by 9 — it's the rule.", ["must", "needn't", "might", "don't have to"]),
      q("We ___ wear a tie. It's our choice.", ["don't have to", "mustn't", "can't", "shouldn't"]),
      q("You ___ leave that door unlocked! It's dangerous.", ["mustn't", "don't have to", "needn't", "don't need to"]),
      q("___ I leave the room? (formal)", ["May", "Must", "Should", "Ought"]),
      q("You ___ talk to your boss. (advice)", ["ought to", "ought", "must to", "can't"]),
      q("He ___ be her brother — they look alike.", ["could", "must to", "has", "needs"]),
      q("Which means «it isn't necessary»?", ["needn't", "mustn't", "can't", "must"]),
      q("She ___ three languages.", ["can speak", "cans speak", "can to speak", "can speaks"]),
      q("It's ___ to keep lost property.", ["illegal", "illegally", "illegality", "unlegal"]),
      q("He got a ___ for returning the bag.", ["reward", "profit", "claim", "suspect"]),
    ]
  ),
  "B2-20": rule(
    "Past modals of deduction · verbs + prepositions",
    `We use **modal + have + past participle** to make **deductions** (logical guesses) about the past.

## must have — almost certain it happened
→ It's very quiet. The children **must have fallen** asleep.
→ Someone **must have spilt** a drink over the computer.

## can't have / couldn't have — almost certain it did NOT happen
→ They **can't have stopped** them having a lunch break.
→ You **couldn't have seen** Alice — she's in Dubai.
• We don't usually say **mustn't have** in this meaning.

## might / could / may have — a guess, it's possible
→ It **might have been** a safety issue. · She **may have missed** the bus.
→ I **could have left** my phone in the taxi.
• Negative: She **might not have got** your message.
• ⚠ NOT can have: I ~~can have left~~ it in the car.

## Pronunciation
• **have** is weak: must've /ˈmʌstəv/, might've, can't've.

## Verbs + prepositions
• protect **from** · prohibit **from** · react **to** · expose **to** · apply **to**
• protest **against** · insist **on** · count **on**
• criticize **for** · blame **for** · accuse **of** · take advantage **of**
• After a preposition use **-ing**: accused of **taking** · prohibited from **contacting**`,
    [
      q("It's very quiet. The kids ___ asleep.", ["must have fallen", "can't have fallen", "must fall", "might fall"]),
      q("He wasn't at the meeting. He ___ about it.", ["can't have known", "must have known", "mustn't know", "can know"]),
      q("She's late. She ___ the bus.", ["might have missed", "can have missed", "must miss", "might missed"]),
      q("Which is NOT correct for a guess about the past?", ["can have", "might have", "may have", "could have"]),
      q("Past modal form:", ["modal + have + past participle", "modal + had + verb", "modal + has + -ing", "modal + to + verb"]),
      q("The laws protect workers ___ stress.", ["from", "of", "on", "to"]),
      q("They were accused ___ cheating.", ["of", "for", "from", "on"]),
      q("The laws insist ___ switching off email.", ["on", "to", "for", "from"]),
      q("Workers protested ___ the new rules.", ["against", "to", "on", "of"]),
      q("The government prohibited them ___ smoking.", ["from", "to", "of", "on"]),
    ]
  ),
  "B2-21": rule(
    "Ellipsis · prefixes · agreeing and disagreeing",
    `## Ellipsis
We often **leave out words** when they are clear from the context.
• **Noun ellipsis** — we don't repeat a noun or pronoun:
→ Julia has six years' experience, but Mike (has) only two (years' experience).
→ She bought a ticket but (she) didn't use it.
• **Verb ellipsis** — we don't repeat the verb, or we use only the auxiliary:
→ The weather has been excellent and the food (has been) delicious.
→ I knew he would do well, but I wouldn't (do well).

## Prefixes
• **self-** (done to or by yourself): self-confidence, self-control, self-interest, self-centred
• **bi-** (two): bilingual, bicycle, bicentenary
• **inter-** (between): international, intercontinental, interstate
• **mono-** (one): monolingual, monotone
• **multi-** (many): multicoloured, multimillionaire
• **semi-** (half, partly): semicircle, semi-detached, semi-retired

## Agreeing
• I'm with you there. (informal) · I completely agree. · True enough.
• Yes, that's spot on. (informal) · Absolutely! · That's just what I was thinking. · I couldn't agree more.

## Disagreeing
• **Strong / informal:** You can't be serious! · Come off it!
• **Polite:** That's not really how I see it. · I'm not sure I quite agree. · I can't agree with you there. · I'm not sure about that.
• **Formal:** I beg to differ.`,
    [
      q("He tried hard but (…) failed. What's missing?", ["he", "was", "I", "do"]),
      q("Speaking two languages:", ["bilingual", "monolingual", "multilingual", "interlingual"]),
      q("Between continents:", ["intercontinental", "multicontinental", "bicontinental", "semicontinental"]),
      q("Thinking only about yourself:", ["self-centred", "self-control", "self-confidence", "semi-centred"]),
      q("Half a circle:", ["semicircle", "bicircle", "monocircle", "multicircle"]),
      q("Informal agreement:", ["I'm with you there.", "I beg to differ.", "Come off it!", "I'm not sure about that."]),
      q("Strong informal disagreement:", ["Come off it!", "True enough.", "I completely agree.", "That's spot on."]),
      q("Formal, polite disagreement:", ["I beg to differ.", "Come off it!", "You can't be serious!", "Absolutely!"]),
      q("I couldn't agree ___.", ["more", "less", "most", "better"]),
      q("Yes, that's spot ___.", ["on", "in", "at", "off"]),
    ]
  ),
  "B2-22": rule(
    "Relative clauses",
    `A **relative clause** gives more information about a noun. It starts with **who** (people), **which** (things), **whose** (possession), **that**, **whom**, **where**.

## Identifying relative clauses
• Tell us **which** person or thing we mean — the sentence makes no sense without it. **No commas.**
→ Do you know anyone **who designs websites**? · IoT is the technology **that allows objects to communicate**.
• You can use **that** instead of who or which.
• You can **leave out** the pronoun when it's the **object** of the clause:
→ The bicycle **(that) you told me about** was on offer. · Have you seen the DVD **(which) I bought**?

## Non-identifying relative clauses
• Give **extra** information — the sentence makes sense without it. Use **commas**.
→ Steve Jobs**, who co-founded Apple,** was very creative.
→ The pump**, which is attached to your body,** monitors insulin.
• ⚠ **Don't use that**, and don't leave out the pronoun.

## whose
• For possession, in both types: That's the girl **whose** brother lives next door.

## Prepositions
• **Informal:** at the end — IoT is an area I'm interested **in**.
• **Formal:** before **which / whom** — an area **in which** money is being invested · the man **for whom** you were waiting.
• Never before **that**.

## Pronunciation
• Pause at the commas of a non-identifying clause: My car, | which is internet-connected, | can book itself in.

## Smart technology collocations
• hack / control a **device** · personal **data** · high-speed **broadband** · a **security** issue · a technical **fault** · advances in **technology** · protect your **privacy**`,
    [
      q("Do you know anyone ___ has a smart fridge?", ["who", "which", "whose", "whom"]),
      q("I have a coffee machine, ___ is connected to my alarm.", ["which", "that", "who", "whose"]),
      q("That's the girl ___ brother lives next door.", ["whose", "who's", "who", "which"]),
      q("Steve Jobs, ___ co-founded Apple, was creative.", ["who", "that", "which", "whose"]),
      q("Which sentence can lose the pronoun?", ["The book that I bought is great.", "The man who called you is here.", "My car, which is new, is red.", "The girl whose bag this is …"]),
      q("Non-identifying clauses use …", ["commas", "that", "no pronoun", "no commas"]),
      q("Formal: an area ___ money is invested.", ["in which", "in that", "which in", "that"]),
      q("I know the man for ___ you were waiting.", ["whom", "who", "that", "which"]),
      q("personal ___ / protect ___", ["data", "device", "fault", "broadband"]),
      q("a technical ___", ["fault", "privacy", "data", "broadband"]),
    ]
  ),
  "B2-23": rule(
    "Participle clauses",
    `A **participle clause** starts with a **present participle** (coming, knowing) or a **past participle** (born, referred to). It lets us say more in one sentence and is common in **formal or written** English.

## Instead of a full clause
→ Because we didn't know the area, we got lost. → **Not knowing** the area, we got lost.
→ As he was born in the 1960s, he is a baby boomer. → **Born** in the 1960s, he is a baby boomer.
→ This generation is sandwiched between … It shares … → **Sandwiched** between Baby Boomers and Gen Y, this generation shares …
• The subject of both parts must be the **same**.

## Active or passive meaning
• **Present participle (-ing) = active**: People **growing up** after the war (= who grew up) …
→ Who's the man **standing** by the window? (= who is standing)
• **Past participle = passive**: Generation Z, **also known as** Generation Net (= who are known) …
→ People **born** in the 1960s (= who were born) …

## having + past participle — earlier in the past
→ **Having missed** the bus, he was late for work.
→ **Having lived** through a recession, Gen Z won't take money for granted.

## Negative
• Put **not** before the participle: **Not speaking** any German, we missed the announcement.

## Describing people
• Positive: open-minded, loyal, well informed, well educated, tech-savvy, self-confident, easy-going
• Negative: arrogant, self-centred, irresponsible, stubborn
• It depends: competitive, critical, conventional, realistic`,
    [
      q("___ in 1990, she's a millennial.", ["Born", "Bearing", "Having born", "Being born of"]),
      q("___ the area, we got lost.", ["Not knowing", "Knowing not", "Not knew", "Don't knowing"]),
      q("___ the bus, he was late.", ["Having missed", "Having miss", "Missed having", "Had missing"]),
      q("Who's the man ___ by the window?", ["standing", "stood", "having stand", "stands"]),
      q("Gen Z, also ___ as Generation Net, …", ["known", "knowing", "having know", "knew"]),
      q("Present participle (-ing) usually has a ___ meaning.", ["active", "passive", "future", "negative"]),
      q("Past participle in a clause usually has a ___ meaning.", ["passive", "active", "future", "present"]),
      q("Knowing a lot about computers:", ["tech-savvy", "well educated", "stubborn", "loyal"]),
      q("Not willing to change your mind:", ["stubborn", "open-minded", "easy-going", "realistic"]),
      q("Thinking you're better than others:", ["arrogant", "loyal", "critical", "realistic"]),
    ]
  ),
};
