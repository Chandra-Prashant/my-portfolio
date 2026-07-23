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
  title: "Prashant Chandra | AI Research & Systems Engineer",
  description: "Computer Engineering undergraduate at AMU (Class of 2027). Specializing in Agentic AI Systems, Tool Governance, Local RAG, and Decoupled Deep Learning Architectures.",
  keywords: ["Agentic AI", "LLM Governance", "RAG Systems", "Deep Learning Research", "AMU CSE", "Computer Vision", "XAI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#090D16] text-slate-300 selection:bg-teal-500/30 selection:text-teal-200`}
      >
        {children}
      </body>
    </html>
  );
}