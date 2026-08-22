"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Menu,
  X,
  FileText,
} from "lucide-react";
import SocialDock from "./SocialDock";

const navLinks = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Experience", href: "/#experience", id: "experience" },
  { name: "Dossier", href: "/dossier", id: "dossier" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Track scroll position for navbar background blur
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamically track active visible section on single page with requestAnimationFrame
  useEffect(() => {
    if (pathname !== "/") {
      const currentSegment = pathname.replace("/", "");
      if (currentSegment) {
        setActiveSection(currentSegment);
      }
      return;
    }

    const sectionIds = ["home", "about", "projects", "skills", "experience", "contact"];
    let ticking = false;

    const handleScrollSpy = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 220; // optimal detection line
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const id = sectionIds[i];
            const el = document.getElementById(id);
            if (el) {
              const top = el.offsetTop;
              if (scrollPosition >= top) {
                setActiveSection(id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId);
        window.history.pushState(null, "", href);
      }
      setOpen(false);
    }
  };

  return (
    <>
      {/* RIGHT FIXED SOCIAL DOCK (DESKTOP) */}
      <SocialDock />

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-background/60 backdrop-blur-md border-b border-border"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* LOGO */}
          <Link
            href="/#home"
            onClick={(e) => handleNavClick(e, "/#home")}
            className="group flex items-center gap-3 transition-transform hover:scale-105"
          >
            <div className="relative h-9 w-9 rounded-xl overflow-hidden border border-primary/40 shadow-[0_0_15px_var(--cyber-glow-primary)]">
              <Image
                src="/images/aman.png"
                alt="Aman Dubey"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-wide text-foreground group-hover:text-primary transition-colors">
                Aman Dubey
              </span>
              <span className="text-[10px] font-mono text-primary/80 tracking-widest hidden sm:inline-block">
                // FULL-STACK DEV
              </span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 text-sm tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-primary font-semibold drop-shadow-[0_0_10px_var(--cyber-glow-primary)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {/* Glowing Active Indicator */}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] rounded-full bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_8px_var(--cyber-glow-primary)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/resume/Resume2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_20px_var(--cyber-glow-primary)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_var(--cyber-glow-strong)] active:scale-95"
            >
              <FileText size={16} />
              <span>Resume</span>
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open navigation menu"}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-card/60 text-foreground backdrop-blur-md transition hover:border-primary hover:text-primary"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* MOBILE MENU DRAWER */}
        {open && (
          <div className="lg:hidden fixed inset-0 top-[73px] z-40 bg-background/95 backdrop-blur-2xl border-t border-primary/20 flex flex-col justify-between p-6 animate-fadeIn overflow-y-auto">
            {/* Links List */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono tracking-widest text-primary/70 mb-2">
                // NAVIGATION
              </span>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-base transition-all duration-200 ${
                      isActive
                        ? "bg-primary/15 text-primary font-semibold border border-primary/30 shadow-[0_0_15px_var(--cyber-glow-primary)]"
                        : "text-muted-foreground hover:bg-card/40 hover:text-foreground"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_var(--cyber-glow-primary)]" />
                    )}
                  </Link>
                );
              })}

              <Link
                href="/resume/Resume2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_25px_var(--cyber-glow-primary)] transition hover:opacity-90 active:scale-95"
              >
                <FileText size={18} />
                <span>View & Download Resume</span>
              </Link>
            </div>

            {/* Mobile Social Connections */}
            <div className="pt-6 border-t border-border mt-6">
              <span className="block text-xs font-mono tracking-widest text-primary/70 mb-4">
                // CONNECT
              </span>
              <div className="grid grid-cols-4 gap-3">
                {[
                  {
                    href: "https://github.com/amandubey923",
                    icon: Github,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/aman-kr-dubey",
                    icon: Linkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://www.instagram.com/",
                    icon: Instagram,
                    label: "Instagram",
                  },
                  {
                    href: "mailto:kumaraman19137@gmail.com",
                    icon: Mail,
                    label: "Email",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={i}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border border-primary/20 bg-card/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition"
                    >
                      <Icon size={20} />
                      <span className="text-[10px] font-mono">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
