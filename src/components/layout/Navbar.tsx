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
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-5">
        {[ 
          { href: "https://github.com/amandubey923", icon: Github },
          { href: "https://www.linkedin.com/in/aman-kr-dubey", icon: Linkedin },
          { href: "https://www.instagram.com/", icon: Instagram },
          { href: "mailto:kumaraman19137@gmail.com", icon: Mail },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              href={item.href}
              target="_blank"
              className="group relative flex items-center justify-center"
            >
              <span className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition" />
              <Icon
                size={20}
                className="relative text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110"
              />
            </Link>
          );
        })}
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border bg-background/70">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3 transition hover:opacity-90"
          >
            <Image
              src="/images/aman.png"
              alt="Aman Dubey"
              width={36}
              height={36}
              priority
              className="transition-transform duration-300 hover:scale-105"
            />
            <span className="text-lg font-semibold tracking-wide">
              Aman Dubey
            </span>
          </Link>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm transition-all duration-300 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>

                  {/* underline animation */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-primary transition-all duration-300 ${
                      isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* HIRE ME */}
          <Link
            href="/resume/resume.pdf"
            target="_blank"
            className="ml-4 inline-flex items-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.03]"
          >
            Hire Me
          </Link>
        </nav>
      </header>
    </>
  );
}
