import Link from "next/link";
import { Home, Layers, Mail, Terminal, AlertTriangle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Page Not Found — Aman Dubey",
  description: "The requested resource could not be found on Aman Dubey's developer portfolio.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-[85vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Cyber Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--cyber-grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--cyber-grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient Radial Energy Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
        style={{ backgroundColor: "var(--primary)" }}
      />

      <div className="relative z-10 max-w-2xl w-full text-center space-y-8 animate-fadeIn">
        {/* Top Cyber Error Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-card/60 backdrop-blur-xl text-primary text-xs font-mono tracking-widest uppercase shadow-[0_0_20px_var(--cyber-glow-primary)]">
          <AlertTriangle className="h-3.5 w-3.5 text-primary animate-pulse" />
          <span>// ERROR_CODE: 404_PAGE_NOT_FOUND</span>
        </div>

        {/* 404 Glowing Numeric Centerpiece */}
        <div className="relative select-none py-2">
          <h1
            className="text-8xl sm:text-9xl md:text-[11rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground to-primary/40 leading-none transition-all duration-500 hover:scale-105"
            style={{
              textShadow: "0 0 60px var(--cyber-glow-primary)",
              fontFamily: "var(--font-mono, monospace)",
            }}
          >
            404
          </h1>
          {/* Scanning line effect */}
          <div
            className="pointer-events-none absolute inset-x-1/4 top-1/2 h-[1px] opacity-60"
            style={{
              background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
              boxShadow: "0 0 10px var(--primary)",
            }}
          />
        </div>

        {/* Headline & Description */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Navigation Pathway Unresolved
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            The requested sector or resource does not exist in this database or has been relocated to another dimension.
          </p>
        </div>

        {/* System Diagnostics Terminal Block */}
        <div className="mx-auto max-w-lg rounded-2xl border border-primary/25 bg-card/75 backdrop-blur-2xl p-5 text-left font-mono text-xs shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between pb-3 border-b border-primary/15 text-muted-foreground text-[11px]">
            <span className="flex items-center gap-1.5 text-primary">
              <Terminal className="h-3.5 w-3.5" />
              PORTFOLIO_CORE // DIAGNOSTICS
            </span>
            <span className="text-[10px] text-green-400">● SYSTEM_ONLINE</span>
          </div>

          <div className="pt-3 space-y-1.5 text-muted-foreground/90">
            <div className="flex justify-between">
              <span>STATUS:</span>
              <span className="text-red-400 font-bold">404 (NOT_FOUND)</span>
            </div>
            <div className="flex justify-between">
              <span>REQUEST_URI:</span>
              <span className="text-foreground">TARGET_UNAVAILABLE</span>
            </div>
            <div className="flex justify-between">
              <span>RECOVERY_ACTION:</span>
              <span className="text-primary font-bold">REDIRECT_TO_HOME</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          {/* Primary: Return Home */}
          <Link
            href="/#home"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_25px_var(--cyber-glow-primary)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_var(--cyber-glow-strong)] active:scale-95 cursor-pointer"
          >
            <Home className="h-4 w-4" />
            <span>Return to Home</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Secondary: View Projects */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-card/80 px-5 py-3 text-sm font-medium text-foreground backdrop-blur-xl transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Layers className="h-4 w-4 text-primary" />
            <span>View Projects</span>
          </Link>

          {/* Secondary: Contact Aman */}
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-card/80 px-5 py-3 text-sm font-medium text-foreground backdrop-blur-xl transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Mail className="h-4 w-4 text-primary" />
            <span>Contact Aman</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

