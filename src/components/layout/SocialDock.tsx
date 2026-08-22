"use client";

import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin, Instagram, Mail, Copy, Check } from "lucide-react";

export default function SocialDock() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("kumaraman19137@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialItems = [
    {
      label: "GitHub Profile",
      href: "https://github.com/amandubey923",
      icon: Github,
      isExternal: true,
    },
    {
      label: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/aman-kr-dubey",
      icon: Linkedin,
      isExternal: true,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: Instagram,
      isExternal: true,
    },
    {
      label: "Send Direct Email",
      href: "mailto:kumaraman19137@gmail.com",
      icon: Mail,
      isExternal: false,
    },
  ];

  return (
    <aside
      aria-label="Social connections dock"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 p-2 rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-xl shadow-[0_0_30px_var(--cyber-glow-primary)]"
    >
      {socialItems.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="group relative flex items-center justify-center">
            {/* Tooltip on hover (slides left) */}
            <div className="pointer-events-none absolute right-12 px-3 py-1.5 rounded-lg bg-card/95 border border-primary/30 text-xs font-mono text-foreground whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-[0_0_15px_var(--cyber-glow-primary)] z-50">
              {item.label}
              {/* Arrow */}
              <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-card/95 border-t border-r border-primary/30 rotate-45" />
            </div>

            <Link
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:bg-primary/20 text-muted-foreground hover:text-primary hover:scale-110"
            >
              <Icon size={19} />
            </Link>
          </div>
        );
      })}

      {/* Copy Email Button */}
      <div className="group relative flex items-center justify-center pt-2 border-t border-primary/20">
        <div className="pointer-events-none absolute right-12 px-3 py-1.5 rounded-lg bg-card/95 border border-primary/30 text-xs font-mono text-foreground whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-[0_0_15px_var(--cyber-glow-primary)] z-50">
          {copied ? "✓ Copied to clipboard!" : "Copy Email"}
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-card/95 border-t border-r border-primary/30 rotate-45" />
        </div>

        <button
          onClick={copyEmail}
          aria-label="Copy email address"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:bg-primary/20 text-muted-foreground hover:text-primary hover:scale-110"
        >
          {copied ? (
            <Check size={18} className="text-green-400" />
          ) : (
            <Copy size={18} />
          )}
        </button>
      </div>
    </aside>
  );
}

