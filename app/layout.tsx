import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DayGrid — музыка для DayZ-сервера | Music for your DayZ server",
  description:
    "DayGrid превращает обычный DayZ-сервер в место с живой атмосферой. Add music, playlists, and in-game playlist unlocks to your DayZ server.",
  keywords: [
    "DayGrid",
    "DayZ",
    "музыка",
    "мод",
    "сервер DayZ",
    "плейлисты",
    "DayZ mod",
    "DayZ music",
    "DayZ server music",
  ],
  openGraph: {
    title: "DayGrid — музыка для DayZ-сервера | Music for your DayZ server",
    description:
      "Живая атмосфера для твоего DayZ-сервера: своя музыка в игре, гибкие плейлисты, unlock-предметы и полный контроль из онлайн-панели.",
    type: "website",
    locale: "ru_RU",
    siteName: "DayGrid",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
