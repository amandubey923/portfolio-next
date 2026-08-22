import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AmanChatbot from "@/components/chat/AmanChatbot";
import CustomCursor from "@/components/cursor/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://amandubey.vercel.app"),
  title: "Aman Dubey | Full-Stack Software Engineer",
  description:
    "Professional portfolio of Aman Dubey – Full-Stack Software Engineer specializing in Next.js, React, TypeScript, Node.js, and scalable web architecture.",
  keywords: [
    "Aman Dubey",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "MERN Stack",
    "Portfolio",
  ],
  authors: [{ name: "Aman Dubey" }],
  creator: "Aman Dubey",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Aman Dubey | Full-Stack Software Engineer",
    description:
      "Explore the portfolio, production projects, engineering milestones, and technical capabilities of Aman Dubey.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/aman.png",
        width: 800,
        height: 800,
        alt: "Aman Dubey Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-theme="cyber" data-mode="dark" suppressHydrationWarning>
      <head>
        {/* Instant Runtime Theme Restoration Script to prevent theme flashing */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const mode = localStorage.getItem('aman_portfolio_mode') || 'dark';
                const theme = localStorage.getItem('aman_portfolio_theme') || 'cyber';
                const THEMES = {
                  cyber: { dark: { p: '#18cef2', pf: '#0a0c14', bg: '#0a0c14', fg: '#f2f2f2', c: '#111827', b: 'rgba(24, 206, 242, 0.25)', g: 'rgba(24, 206, 242, 0.3)', grid: 'rgba(24, 206, 242, 0.06)' }, light: { p: '#0284c7', pf: '#ffffff', bg: '#f8fafc', fg: '#0f172a', c: '#ffffff', b: 'rgba(2, 132, 199, 0.25)', g: 'rgba(2, 132, 199, 0.25)', grid: 'rgba(2, 132, 199, 0.06)' } },
                  nebula: { dark: { p: '#a855f7', pf: '#0d0b18', bg: '#0d0b18', fg: '#f5f3ff', c: '#131024', b: 'rgba(168, 85, 247, 0.28)', g: 'rgba(168, 85, 247, 0.35)', grid: 'rgba(168, 85, 247, 0.07)' }, light: { p: '#9333ea', pf: '#ffffff', bg: '#faf8ff', fg: '#1e122b', c: '#ffffff', b: 'rgba(147, 51, 234, 0.25)', g: 'rgba(147, 51, 234, 0.25)', grid: 'rgba(147, 51, 234, 0.06)' } },
                  architect: { dark: { p: '#eab308', pf: '#0c0f14', bg: '#0c0f14', fg: '#fefce8', c: '#141923', b: 'rgba(234, 179, 8, 0.28)', g: 'rgba(234, 179, 8, 0.35)', grid: 'rgba(234, 179, 8, 0.07)' }, light: { p: '#d97706', pf: '#ffffff', bg: '#faf9f6', fg: '#1c1917', c: '#ffffff', b: 'rgba(217, 119, 6, 0.25)', g: 'rgba(217, 119, 6, 0.25)', grid: 'rgba(217, 119, 6, 0.06)' } },
                  aurora: { dark: { p: '#10b981', pf: '#081210', bg: '#081210', fg: '#f0fdf4', c: '#0f201c', b: 'rgba(16, 185, 129, 0.28)', g: 'rgba(16, 185, 129, 0.35)', grid: 'rgba(16, 185, 129, 0.07)' }, light: { p: '#059669', pf: '#ffffff', bg: '#f4fbf7', fg: '#062d22', c: '#ffffff', b: 'rgba(5, 150, 105, 0.25)', g: 'rgba(5, 150, 105, 0.25)', grid: 'rgba(5, 150, 105, 0.06)' } },
                  sunset: { dark: { p: '#f97316', pf: '#140d10', bg: '#140d10', fg: '#fff1f2', c: '#201318', b: 'rgba(249, 115, 22, 0.28)', g: 'rgba(249, 115, 22, 0.35)', grid: 'rgba(249, 115, 22, 0.07)' }, light: { p: '#ea580c', pf: '#ffffff', bg: '#fff9f6', fg: '#2e150b', c: '#ffffff', b: 'rgba(234, 88, 12, 0.25)', g: 'rgba(234, 88, 12, 0.25)', grid: 'rgba(234, 88, 12, 0.06)' } }
                };
                const t = (THEMES[theme] || THEMES.cyber)[mode] || THEMES.cyber.dark;
                const root = document.documentElement;
                root.className = mode;
                root.setAttribute('data-theme', theme);
                root.setAttribute('data-mode', mode);
                root.style.setProperty('--primary', t.p);
                root.style.setProperty('--primary-foreground', t.pf);
                root.style.setProperty('--background', t.bg);
                root.style.setProperty('--foreground', t.fg);
                root.style.setProperty('--card', t.c);
                root.style.setProperty('--border', t.b);
                root.style.setProperty('--cyber-glow-primary', t.g);
                root.style.setProperty('--cyber-grid-color', t.grid);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="w-full bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <AmanChatbot />
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
