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
};
