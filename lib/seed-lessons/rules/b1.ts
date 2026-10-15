/**
 * B1 darslarining «Qoida» bo'limi: lug'atdan keyin, mashqlardan oldin
 * ko'rsatiladigan sodda grammatika tushuntirishi (o'zbek tilida) va shu
 * qoida bo'yicha 10 ta test. Matn belgilari: «## » — sarlavha, «• » —
 * ro'yxat, «→ » — misol, «**…**» — qalin. Testlarda to'g'ri javob birinchi
 * yoziladi (seed paytida aralashtiriladi). Namuna:
 *
 *   "A1-01": rule("To be: am / is / are", `...`, [q("I ___ a student.", ["am", "is", "are"]), ...]),
 */
import type { LessonRule } from "./types";

export const B1_RULES: Record<string, LessonRule> = {};
