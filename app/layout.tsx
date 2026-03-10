import type { Metadata } from "next";
import { DM_Sans, Dancing_Script, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Manvinder Rayat | Portfolio",
  description: "Personal portfolio of Manvinder Rayat, product designer and photographer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dancingScript.variable} ${jetbrainsMono.variable}`}
      >
        <div className="min-h-screen flex flex-col pt-[70px]">
          <Nav />
          <main className="flex-1 w-full max-w-[1100px] mx-auto px-6 sm:px-12 relative z-0">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
