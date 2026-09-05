"use client";

import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import {
  ColorTheme,
  ThemeMode,
  ThemeTokens,
  THEMES,
  THEME_LIST,
  getThemeTokens,
} from "./themeConfig";

export type { ColorTheme, ThemeMode, ThemeTokens };
export { THEMES, THEME_LIST, getThemeTokens };

interface ThemeContextType {
  mode: ThemeMode;
  theme: ColorTheme;
  tokens: ThemeTokens;
  isOpen: boolean;
  setMode: (mode: ThemeMode) => void;
  setTheme: (theme: ColorTheme) => void;
  setIsOpen: (open: boolean) => void;
  togglePanel: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_MODE_KEY = "aman_portfolio_mode";
const STORAGE_THEME_KEY = "aman_portfolio_theme";

function applyDirectDOMTokens(tokens: ThemeTokens, theme: ColorTheme, mode: ThemeMode) {
  if (typeof document === "undefined") return;
  try {
    const root = document.documentElement;
    root.style.setProperty("--primary", tokens.primary);
    root.style.setProperty("--primary-foreground", tokens.primaryForeground);
    root.style.setProperty("--secondary", tokens.secondary);
    root.style.setProperty("--secondary-foreground", tokens.secondaryForeground);
    root.style.setProperty("--accent", tokens.accent);
    root.style.setProperty("--background", tokens.background);
    root.style.setProperty("--foreground", tokens.foreground);
    root.style.setProperty("--card", tokens.card);
    root.style.setProperty("--card-foreground", tokens.cardForeground);
    root.style.setProperty("--border", tokens.border);
    root.style.setProperty("--glow", tokens.glow);
    root.style.setProperty("--cyber-glow-primary", tokens.glow);
    root.style.setProperty("--cyber-glow-strong", tokens.glowStrong);
    root.style.setProperty("--grid", tokens.grid);
    root.style.setProperty("--cyber-grid-color", tokens.grid);
    root.style.setProperty("--cyber-dark", tokens.background);

    root.setAttribute("data-theme", theme);
    root.setAttribute("data-mode", mode);
    root.classList.remove("light", "dark");
    root.classList.add(mode);
  } catch {}
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("dark");
  const [theme, setThemeState] = useState<ColorTheme>("cyber");
  const [isOpen, setIsOpen] = useState(false);

  const tokens = useMemo(() => getThemeTokens(theme, mode), [theme, mode]);

  // Sync to document.documentElement.style directly whenever theme or mode changes
  useEffect(() => {
    applyDirectDOMTokens(tokens, theme, mode);
  }, [theme, mode, tokens]);

  // Initialize from localStorage on mount
  useEffect(() => {
    try {
      const savedMode = localStorage.getItem(STORAGE_MODE_KEY) as ThemeMode | null;
      const savedTheme = localStorage.getItem(STORAGE_THEME_KEY) as ColorTheme | null;

      const activeMode = savedMode === "light" || savedMode === "dark" ? savedMode : "dark";
      const activeTheme =
        savedTheme === "cyber" ||
        savedTheme === "nebula" ||
        savedTheme === "architect" ||
        savedTheme === "aurora" ||
        savedTheme === "sunset"
          ? savedTheme
          : "cyber";

      setModeState(activeMode);
      setThemeState(activeTheme);
      applyDirectDOMTokens(getThemeTokens(activeTheme, activeMode), activeTheme, activeMode);
    } catch {}
  }, []);

  const setMode = useCallback(
    (newMode: ThemeMode) => {
      setModeState(newMode);
      applyDirectDOMTokens(getThemeTokens(theme, newMode), theme, newMode);
      try {
        localStorage.setItem(STORAGE_MODE_KEY, newMode);
      } catch {}
    },
    [theme]
  );

  const setTheme = useCallback(
    (newTheme: ColorTheme) => {
      setThemeState(newTheme);
      applyDirectDOMTokens(getThemeTokens(newTheme, mode), newTheme, mode);
      try {
        localStorage.setItem(STORAGE_THEME_KEY, newTheme);
      } catch {}
    },
    [mode]
  );

  const togglePanel = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const rootStyle = useMemo<React.CSSProperties>(
    () => ({
      backgroundColor: tokens.background,
      color: tokens.foreground,
      "--primary": tokens.primary,
      "--primary-foreground": tokens.primaryForeground,
      "--secondary": tokens.secondary,
      "--accent": tokens.accent,
      "--background": tokens.background,
      "--foreground": tokens.foreground,
      "--card": tokens.card,
      "--card-foreground": tokens.cardForeground,
      "--border": tokens.border,
      "--glow": tokens.glow,
      "--cyber-glow-primary": tokens.glow,
      "--cyber-glow-strong": tokens.glowStrong,
      "--grid": tokens.grid,
      "--cyber-grid-color": tokens.grid,
      "--cyber-dark": tokens.background,
    } as React.CSSProperties),
    [tokens]
  );

  return (
    <ThemeContext.Provider
      value={{
        mode,
        theme,
        tokens,
        isOpen,
        setMode,
        setTheme,
        setIsOpen,
        togglePanel,
      }}
    >
      <div
        id="portfolio-root"
        className="portfolio-root min-h-screen w-full transition-colors duration-300 relative overflow-x-clip"
        style={rootStyle}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
