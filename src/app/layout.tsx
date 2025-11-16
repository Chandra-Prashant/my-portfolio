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

// 1. UPDATED METADATA: Personalized for you
export const metadata: Metadata = {
  title: "Prashant Chandra - AI Full Stack Developer",
  description: "Portfolio of a B.Tech CSE student specializing in AI and Full Stack Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. ADDED: "scroll-smooth" for nice navigation
    <html lang="en" className="scroll-smooth">
      <body
        // 3. ADDED: "bg-gray-950 text-white" for the global dark theme
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}