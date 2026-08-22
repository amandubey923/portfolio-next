"use client";

import { useRef, useEffect } from "react";
import { Palette } from "lucide-react";
import { useTheme, THEME_LIST } from "./ThemeProvider";
import AppearancePanel from "./AppearancePanel";

export default function ThemeButton() {
  const { theme, togglePanel, isOpen, setIsOpen } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const currentConfig = THEME_LIST.find((t) => t.id === theme) || THEME_LIST[0];

  // Robust click outside handler that treats trigger + panel as a single unit
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setIsOpen]);

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          togglePanel();
        }}
        onMouseDown={(e) => e.stopPropagation()}
        aria-label="Open Theme and Appearance Settings"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className={`relative flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold font-mono transition-all duration-200 cursor-pointer ${
          isOpen
            ? "border-primary bg-primary/20 text-primary shadow-[0_0_15px_var(--cyber-glow-primary)]"
            : "border-primary/30 bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/60 hover:bg-primary/10"
        }`}
      >
        <Palette className="h-3.5 w-3.5 text-primary" />
        <span className="hidden sm:inline">Theme</span>
        {/* Dynamic Color Swatch Dot */}
        <span
          className="h-2.5 w-2.5 rounded-full border border-white/20 shadow-sm"
          style={{
            background: `linear-gradient(135deg, ${currentConfig.swatch[0]} 0%, ${currentConfig.swatch[1]} 100%)`,
          }}
        />
      </button>

      {/* Floating Appearance Popover */}
      <AppearancePanel />
    </div>
  );
}
