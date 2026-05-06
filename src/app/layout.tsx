import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Flexpool.ai — De flexibele AI-afdeling voor bedrijven",
    template: "%s | Flexpool.ai",
  },
  description:
    "Van AI-ambitie naar werkende implementatie. Flexpool.ai levert tijdelijke AI-specialisten, projectteams en strategisch AI-advies voor MKB+ en mid-market bedrijven in Nederland.",
  keywords: [
    "AI implementatie",
    "AI specialist inhuren",
    "machine learning consultant",
    "AI staffing",
    "LLM engineer",
    "data scientist tijdelijk",
    "AI consultancy Nederland",
    "AI quickscan",
  ],
  openGraph: {
    title: "Flexpool.ai — De flexibele AI-afdeling voor bedrijven",
    description:
      "Van AI-ambitie naar werkende implementatie. Bewezen AI-specialisten, snel inzetbaar.",
    url: "https://flexpool.ai",
    siteName: "Flexpool.ai",
    locale: "nl_NL",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
