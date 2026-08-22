export type ThemeMode = "dark" | "light";
export type ColorTheme = "cyber" | "nebula" | "architect" | "aurora" | "sunset";

export interface ThemeTokens {
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  border: string;
  glow: string;
  glowStrong: string;
  grid: string;
}

export interface ThemeItem {
  id: ColorTheme;
  name: string;
  desc: string;
  swatch: [string, string, string];
  dark: ThemeTokens;
  light: ThemeTokens;
}

export const THEMES: Record<ColorTheme, ThemeItem> = {
  cyber: {
    id: "cyber",
    name: "Cyber Neon & Blue",
    desc: "Electric cyan · deep sapphire · developer terminal",
    swatch: ["#18cef2", "#1089bd", "#0a0c14"],
    dark: {
      primary: "#18cef2",
      primaryForeground: "#0a0c14",
      secondary: "#1089bd",
      secondaryForeground: "#ffffff",
      accent: "#38bdf8",
      background: "#0a0c14",
      foreground: "#f2f2f2",
      card: "#111827",
      cardForeground: "#f2f2f2",
      border: "rgba(24, 206, 242, 0.25)",
      glow: "rgba(24, 206, 242, 0.3)",
      glowStrong: "rgba(24, 206, 242, 0.6)",
      grid: "rgba(24, 206, 242, 0.07)",
    },
    light: {
      primary: "#0284c7",
      primaryForeground: "#ffffff",
      secondary: "#0369a1",
      secondaryForeground: "#ffffff",
      accent: "#0ea5e9",
      background: "#f8fafc",
      foreground: "#0f172a",
      card: "#ffffff",
      cardForeground: "#0f172a",
      border: "rgba(2, 132, 199, 0.25)",
      glow: "rgba(2, 132, 199, 0.25)",
      glowStrong: "rgba(2, 132, 199, 0.45)",
      grid: "rgba(2, 132, 199, 0.07)",
    },
  },
  nebula: {
    id: "nebula",
    name: "Midnight Nebula",
    desc: "Royal violet · vibrant magenta · dark space",
    swatch: ["#a855f7", "#ec4899", "#0d0b18"],
    dark: {
      primary: "#a855f7",
      primaryForeground: "#0d0b18",
      secondary: "#c084fc",
      secondaryForeground: "#ffffff",
      accent: "#ec4899",
      background: "#0d0b18",
      foreground: "#f5f3ff",
      card: "#131024",
      cardForeground: "#f5f3ff",
      border: "rgba(168, 85, 247, 0.3)",
      glow: "rgba(168, 85, 247, 0.35)",
      glowStrong: "rgba(236, 72, 153, 0.65)",
      grid: "rgba(168, 85, 247, 0.08)",
    },
    light: {
      primary: "#9333ea",
      primaryForeground: "#ffffff",
      secondary: "#7e22ce",
      secondaryForeground: "#ffffff",
      accent: "#db2777",
      background: "#faf8ff",
      foreground: "#1e122b",
      card: "#ffffff",
      cardForeground: "#1e122b",
      border: "rgba(147, 51, 234, 0.25)",
      glow: "rgba(147, 51, 234, 0.25)",
      glowStrong: "rgba(219, 39, 119, 0.45)",
      grid: "rgba(147, 51, 234, 0.07)",
    },
  },
  architect: {
    id: "architect",
    name: "Architect Ivory & Gold",
    desc: "Brushed gold · warm amber · luxury architectural",
    swatch: ["#eab308", "#f59e0b", "#0c0f14"],
    dark: {
      primary: "#eab308",
      primaryForeground: "#0c0f14",
      secondary: "#f59e0b",
      secondaryForeground: "#ffffff",
      accent: "#fbbf24",
      background: "#0c0f14",
      foreground: "#fefce8",
      card: "#141923",
      cardForeground: "#fefce8",
      border: "rgba(234, 179, 8, 0.3)",
      glow: "rgba(234, 179, 8, 0.35)",
      glowStrong: "rgba(245, 158, 11, 0.65)",
      grid: "rgba(234, 179, 8, 0.08)",
    },
    light: {
      primary: "#d97706",
      primaryForeground: "#ffffff",
      secondary: "#b45309",
      secondaryForeground: "#ffffff",
      accent: "#f59e0b",
      background: "#faf9f6",
      foreground: "#1c1917",
      card: "#ffffff",
      cardForeground: "#1c1917",
      border: "rgba(217, 119, 6, 0.25)",
      glow: "rgba(217, 119, 6, 0.25)",
      glowStrong: "rgba(245, 158, 11, 0.45)",
      grid: "rgba(217, 119, 6, 0.07)",
    },
  },
  aurora: {
    id: "aurora",
    name: "Nordic Aurora",
    desc: "Vibrant mint · arctic teal · cool technical",
    swatch: ["#10b981", "#14b8a6", "#081210"],
    dark: {
      primary: "#10b981",
      primaryForeground: "#081210",
      secondary: "#14b8a6",
      secondaryForeground: "#ffffff",
      accent: "#34d399",
      background: "#081210",
      foreground: "#f0fdf4",
      card: "#0f201c",
      cardForeground: "#f0fdf4",
      border: "rgba(16, 185, 129, 0.3)",
      glow: "rgba(16, 185, 129, 0.35)",
      glowStrong: "rgba(20, 184, 166, 0.65)",
      grid: "rgba(16, 185, 129, 0.08)",
    },
    light: {
      primary: "#059669",
      primaryForeground: "#ffffff",
      secondary: "#0d9488",
      secondaryForeground: "#ffffff",
      accent: "#10b981",
      background: "#f4fbf7",
      foreground: "#062d22",
      card: "#ffffff",
      cardForeground: "#062d22",
      border: "rgba(5, 150, 105, 0.25)",
      glow: "rgba(5, 150, 105, 0.25)",
      glowStrong: "rgba(13, 148, 136, 0.45)",
      grid: "rgba(5, 150, 105, 0.07)",
    },
  },
  sunset: {
    id: "sunset",
    name: "Sunset Horizon",
    desc: "Radiant coral · sunset amber · deep twilight",
    swatch: ["#f97316", "#fb7185", "#140d10"],
    dark: {
      primary: "#f97316",
      primaryForeground: "#140d10",
      secondary: "#fb7185",
      secondaryForeground: "#ffffff",
      accent: "#f43f5e",
      background: "#140d10",
      foreground: "#fff1f2",
      card: "#201318",
      cardForeground: "#fff1f2",
      border: "rgba(249, 115, 22, 0.3)",
      glow: "rgba(249, 115, 22, 0.35)",
      glowStrong: "rgba(244, 63, 94, 0.65)",
      grid: "rgba(249, 115, 22, 0.08)",
    },
    light: {
      primary: "#ea580c",
      primaryForeground: "#ffffff",
      secondary: "#e11d48",
      secondaryForeground: "#ffffff",
      accent: "#f97316",
      background: "#fff9f6",
      foreground: "#2e150b",
      card: "#ffffff",
      cardForeground: "#2e150b",
      border: "rgba(234, 88, 12, 0.25)",
      glow: "rgba(234, 88, 12, 0.25)",
      glowStrong: "rgba(225, 29, 72, 0.45)",
      grid: "rgba(234, 88, 12, 0.07)",
    },
  },
};

export const THEME_LIST = Object.values(THEMES);

export function getThemeTokens(theme: ColorTheme, mode: ThemeMode): ThemeTokens {
  const item = THEMES[theme] || THEMES.cyber;
  return mode === "light" ? item.light : item.dark;
}

