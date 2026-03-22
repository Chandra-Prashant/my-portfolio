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
  title: "Prashant Chandra | AI Researcher & Systems Engineer",
  description: "Computer Science student at AMU (Class of 2027). Specializing in Explainable AI (XAI), Computer Vision, and Deep Learning for Medical Diagnostics.",
  keywords: ["Machine Learning", "AI Researcher", "Explainable AI", "Computer Vision", "AMU CSE", "MS Candidate"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        {children}
      </body>
    </html>
  );
}