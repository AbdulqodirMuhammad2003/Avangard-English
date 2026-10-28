/**
 * Avangard English logotipi — «Humo»: baxt qushi, qanotlari «A» harfini hosil
 * qiladi (oltin va zafaron qanotlar, binafsha dum, indigo bosh). Shu bitta
 * chizma saytdagi LogoMark, favicon, ilova belgilari (scripts/build-icons.mjs)
 * va qo'llanma muqovasida ishlatiladi.
 */

/** 100×100 koordinatalardagi qush (fonsiz). */
export const HUMO_BIRD = `<path d="M48 58 C38 52 23 41 11 13 C15 39 28 58 46 66 Z" fill="#ffb520"/><path d="M52 58 C62 52 77 41 89 13 C85 39 72 58 54 66 Z" fill="#f99307"/><path d="M45 61 C34 55 24 44 17 29 C23 47 33 58 45 64 Z" fill="#ffca4a"/><path d="M50 72 L41 91 Q50 86 59 91 Z" fill="#5146e5"/><path d="M50 40 C56 40 58 46 57 54 C56 64 53 72 50 77 C47 72 44 64 43 54 C42 46 44 40 50 40 Z" fill="#7c3aed"/><circle cx="50" cy="37" r="7.5" fill="#a5a9fc"/><path d="M56.5 35.5 L63 38 L56.5 40.5 Z" fill="#ffb520"/><circle cx="52.5" cy="35.5" r="1.4" fill="#141827"/><path d="M47.5 30 Q45.5 23 50 19.5 Q49 25 52 30 Z" fill="#ffb520"/>`;

export const HUMO_BG = "#141827";

/** To'liq SVG. `rounded` — burchaklari yumaloq plitka; `scale` — qushning
 *  plitka ichidagi o'lchami (maskable belgi uchun kichikroq). */
export function humoSvg({ size = 100, rounded = true, scale = 0.9 }: { size?: number; rounded?: boolean; scale?: number } = {}) {
  const offset = (100 - 100 * scale) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100"><rect width="100" height="100" rx="${rounded ? 24 : 0}" fill="${HUMO_BG}"/><g transform="translate(${offset} ${offset}) scale(${scale})">${HUMO_BIRD}</g></svg>`;
}
