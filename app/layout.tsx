import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { getLang } from "@/lib/lang-server";

// Manrope — sarlavhalar uchun zamonaviy, do'stona geometrik shrift; Inter —
// ekranda o'qish uchun eng qulay matn shriftlaridan biri.
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avangard English | Ingliz tili kursi",
  description: "O'zbek o'quvchilari uchun ingliz tilini o'rgatuvchi platforma — darslar, mashqlar, baholar va reyting.",
  applicationName: "Avangard English",
  // iPhone: «Bosh ekranga qo'shish» dan keyin ilova kabi ochiladi.
  appleWebApp: { capable: true, title: "Avangard English", statusBarStyle: "black" },
  icons: { apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#0f131c",
  viewportFit: "cover",
};

const THEME_INIT_SCRIPT = `
  try {
    var stored = localStorage.getItem('avangard-theme');
    var isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) document.documentElement.classList.add('dark');
  } catch (e) {}
`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = await getLang();
  return (
    <html lang={lang} className={`h-full antialiased ${manrope.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* next/script'ning "beforeInteractive" strategiyasi o'rniga oddiy
            inline <script> ishlatilmoqda — u HTML parse qilinayotganda,
            React hidratsiyadan OLDIN sinxron ishlaydi, shu bilan sahifa
            "yaltirashi" (avval yorug', keyin qorong'u tema) oldini oladi.
            (next/script komponenti bu loyihadagi Next.js versiyasida
            React'ning "script tegi bevosita render qilinmaydi" ogohlantirishini
            keltirib chiqargani uchun undan voz kechildi.) */}
        <script
          id="avangard-theme-init"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        {children}
      </body>
    </html>
  );
}
