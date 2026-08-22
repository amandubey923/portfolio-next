import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    <html lang="en" className="dark">
      <body className="w-full bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
