"use client";

import { useEffect, useRef } from "react";
import { X, Sun, Moon, Check, Sparkles } from "lucide-react";
import { useTheme, THEME_LIST, ColorTheme } from "./ThemeProvider";

export default function AppearancePanel() {
  const { mode, theme, isOpen, setIsOpen, setMode, setTheme } = useTheme();
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  // Close on Click Outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-label="Appearance & Theme Settings"
      aria-modal="true"
      className="absolute right-0 top-full mt-3 w-80 sm:w-96 rounded-3xl p-5 bg-card/95 backdrop-blur-2xl border border-primary/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)] z-50 animate-fadeIn"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-primary/15">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            APPEARANCE SYSTEM
          </span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close Appearance Panel"
          className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Light / Dark Mode Toggle */}
      <div className="pt-4 space-y-2">
        <span className="text-[10px] font-mono text-muted-foreground uppercase block">
          // MODE
        </span>
        <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-background/60 border border-primary/20">
          <button
            onClick={() => setMode("light")}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
              mode === "light"
                ? "bg-primary text-primary-foreground shadow-[0_0_12px_var(--cyber-glow-primary)]"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <Sun className="h-3.5 w-3.5" />
            <span>Light</span>
          </button>
          <button
            onClick={() => setMode("dark")}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
              mode === "dark"
                ? "bg-primary text-primary-foreground shadow-[0_0_12px_var(--cyber-glow-primary)]"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <Moon className="h-3.5 w-3.5" />
            <span>Dark</span>
          </button>
        </div>
      </div>

      {/* Curated Color Themes */}
      <div className="pt-4 space-y-2">
        <span className="text-[10px] font-mono text-muted-foreground uppercase block">
          // CURATED COLOR THEMES
        </span>
        <div className="space-y-1.5 max-h-64 overflow-y-auto pr-0.5">
          {THEME_LIST.map((t) => {
            const isSelected = theme === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id as ColorTheme)}
                className={`w-full flex items-center justify-between p-2.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-primary bg-primary/15 shadow-[0_0_15px_var(--cyber-glow-primary)]"
                    : "border-primary/10 bg-background/40 hover:border-primary/40 hover:bg-primary/5"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Color Swatch */}
                  <div
                    className="h-7 w-7 rounded-xl border border-white/20 shadow-sm shrink-0 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${t.swatch[0]} 0%, ${t.swatch[1]} 100%)`,
                    }}
                  />
                  <div className="min-w-0">
                    <span className="block text-xs font-bold text-foreground truncate">
                      {t.name}
                    </span>
                    <span className="block text-[10px] text-muted-foreground truncate">
                      {t.desc}
                    </span>
                  </div>
                </div>

                {isSelected && (
                  <div className="h-5 w-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 ml-2 shadow-[0_0_8px_var(--cyber-glow-primary)]">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
