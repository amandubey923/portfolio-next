"use client";

import { Palette } from "lucide-react";
import { useTheme, THEME_LIST } from "./ThemeProvider";

export default function ThemeButton({ className = "" }: { className?: string }) {
  const { theme, togglePanel, isOpen } = useTheme();
  const currentConfig = THEME_LIST.find((t) => t.id === theme) || THEME_LIST[0];

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        togglePanel();
      }}
      aria-label="Open Theme and Appearance Settings"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      className={`theme-trigger-btn relative flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold font-mono transition-all duration-200 cursor-pointer ${
        isOpen
          ? "border-primary bg-primary/20 text-primary shadow-[0_0_15px_var(--cyber-glow-primary)]"
          : "border-primary/30 bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/60 hover:bg-primary/10"
      } ${className}`}
    >
      <Palette className="h-3.5 w-3.5 text-primary pointer-events-none" />
      <span className="hidden sm:inline pointer-events-none">Theme</span>
      {/* Dynamic Color Swatch Dot */}
      <span
        className="h-2.5 w-2.5 rounded-full border border-white/20 shadow-sm pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${currentConfig.swatch[0]} 0%, ${currentConfig.swatch[1]} 100%)`,
        }}
      />
    </button>
  );
}
