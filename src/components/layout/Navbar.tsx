"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* RIGHT FIXED SOCIAL ICONS */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
        <Link
          href="https://github.com/amandubey923"
          target="_blank"
          className="text-muted-foreground hover:text-primary transition"
        >
          <Github size={20} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/aman-kr-dubey"
          target="_blank"
          className="text-muted-foreground hover:text-primary transition"
        >
          <Linkedin size={20} />
        </Link>

        <Link
          href="https://www.instagram.com/"
          target="_blank"
          className="text-muted-foreground hover:text-primary transition"
        >
          <Instagram size={20} />
        </Link>

        <Link
          href="mailto:kumaraman19137@gmail.com"
          className="text-muted-foreground hover:text-primary transition"
        >
          <Mail size={20} />
        </Link>
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border bg-background/70">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/aman.png"
              alt="Aman Dubey"
              width={36}
              height={36}
              priority
            />
            <span className="text-lg font-semibold tracking-wide">
              Aman Dubey
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <Link
            href="/resume/resume.pdf"
            target="_blank"
            className="ml-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Hire Me
          </Link>
        </nav>
      </header>
    </>
  );
}
