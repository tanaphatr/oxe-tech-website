import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
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
  title: "OXE Tech Thailand - Technology Solutions Company",
  description: "Leading technology solutions provider in Thailand offering innovative software development, web applications, and digital transformation services.",
  keywords: ["technology", "software development", "Thailand", "web development", "digital solutions"],
  authors: [{ name: "OXE Tech Thailand" }],
  openGraph: {
    title: "OXE Tech Thailand - Technology Solutions Company",
    description: "Leading technology solutions provider in Thailand offering innovative software development and digital transformation services.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
