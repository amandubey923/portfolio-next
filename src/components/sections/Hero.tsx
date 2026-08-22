"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";
import {
  ArrowRight,
  FileText,
  MessageSquare,
} from "lucide-react";
import { SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";

export default function Hero() {
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageFrameRef.current) return;
    const rect = imageFrameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Gentle tilt
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="relative z-10 scroll-mt-28 min-h-[calc(100vh-100px)] flex flex-col justify-center py-12 md:py-20">
      {/* Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-125 h-125 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-125 h-125 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

      {/* MAIN GRID */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        {/* ================= LEFT CONTENT (7 COLS) ================= */}
        <div className="lg:col-span-7 space-y-8 relative">
          {/* Decorative Left Accent Line */}
          <div className="absolute -left-6 top-3 h-20 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent hidden lg:block" />

          {/* Terminal Metadata Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest text-primary bg-primary/10 border border-primary/30 shadow-[0_0_20px_var(--cyber-glow-primary)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>&gt; FULL-STACK SOFTWARE ENGINEER</span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <span className="block text-sm md:text-base font-mono tracking-widest text-muted-foreground uppercase">
              Hello, I’m
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Aman{" "}
              <span className="text-primary relative inline-block">
                Dubey
                <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-primary via-accent to-transparent rounded-full shadow-[0_0_12px_var(--cyber-glow-primary)]" />
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            A disciplined Full-Stack Developer specializing in architecting
            high-performance, scalable web systems and modern interactive user
            experiences with production-grade engineering practices.
          </p>

          {/* ================= UNIFIED CTA ACTION GROUP ================= */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary CTA */}
            <Link
              href="/#projects"
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_25px_var(--cyber-glow-primary)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_var(--cyber-glow-strong)] active:scale-95"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/resume/Resume2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 bg-card/60 px-5 py-3.5 text-sm font-medium text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            >
              <FileText className="h-4 w-4 text-primary" />
              <span>Download Resume</span>
            </Link>

            {/* Tertiary CTA */}
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/40 px-5 py-3.5 text-sm font-medium text-muted-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/60 hover:text-foreground hover:bg-card/70 hover:scale-105 active:scale-95"
            >
              <MessageSquare className="h-4 w-4 text-primary" />
              <span>Message Me</span>
            </Link>
          </div>

          {/* ================= STATS HIGHLIGHT STRIP ================= */}
          <div className="pt-6 border-t border-primary/20 grid grid-cols-3 gap-4 max-w-lg">
            <div className="space-y-1">
              <span className="block text-2xl font-bold font-mono text-primary drop-shadow-[0_0_8px_var(--cyber-glow-primary)]">
                10+
              </span>
              <span className="block text-xs text-muted-foreground">
                Projects Built
              </span>
            </div>
            <div className="space-y-1">
              <span className="block text-2xl font-bold font-mono text-primary drop-shadow-[0_0_8px_var(--cyber-glow-primary)]">
                100+
              </span>
              <span className="block text-xs text-muted-foreground">
                Days LeetCode
              </span>
            </div>
            <div className="space-y-1">
              <span className="block text-2xl font-bold font-mono text-primary drop-shadow-[0_0_8px_var(--cyber-glow-primary)]">
                SIH &apos;24
              </span>
              <span className="block text-xs text-muted-foreground">
                National Finalist
              </span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE & 3D FRAME (5 COLS) ================= */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
          {/* Ambient Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-primary/15 blur-[120px] pointer-events-none" />

          {/* Interactive Tilt Container */}
          <div
            ref={imageFrameRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: isHovered
                ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
                : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
              transition: isHovered
                ? "transform 0.1s ease-out"
                : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="relative w-[290px] sm:w-[330px] md:w-[360px] h-[390px] sm:h-[430px] md:h-[460px] rounded-3xl p-2 border border-primary/30 bg-card/50 backdrop-blur-xl shadow-[0_0_70px_var(--cyber-glow-primary)]"
          >
            {/* Inner Profile Image Frame */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/20 bg-cyber-dark">
              <Image
                src="/hero/casual.png"
                alt="Aman Dubey"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
              />

              {/* Gradient lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent" />

              {/* Available for Work Status Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2.5 bg-background/80 backdrop-blur-xl py-2.5 px-4 rounded-xl border border-primary/30 shadow-[0_0_20px_rgba(0,0,0,0.6)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-xs font-mono text-white font-medium">
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>
            </div>

            {/* Decorative Cyber Corner Accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-primary shadow-[0_0_10px_var(--cyber-glow-primary)]" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-primary shadow-[0_0_10px_var(--cyber-glow-primary)]" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-primary shadow-[0_0_10px_var(--cyber-glow-primary)]" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-primary shadow-[0_0_10px_var(--cyber-glow-primary)]" />
          </div>

          {/* ================= FLOATING TECH BADGES ================= */}
          {/* Badge 1: Next.js (Top Right) */}
          <div className="absolute -top-4 right-2 sm:right-6 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-primary/40 bg-card/90 backdrop-blur-xl shadow-[0_0_20px_var(--cyber-glow-primary)] animate-float-slow">
            <SiNextdotjs className="text-primary text-base" />
            <span className="text-xs font-mono font-medium text-foreground">
              Next.js 16
            </span>
          </div>

          {/* Badge 2: React (Bottom Left) */}
          <div className="absolute bottom-16 -left-4 sm:-left-6 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-primary/40 bg-card/90 backdrop-blur-xl shadow-[0_0_20px_var(--cyber-glow-primary)] animate-float-delayed">
            <SiReact className="text-primary text-base animate-spin" style={{ animationDuration: "12s" }} />
            <span className="text-xs font-mono font-medium text-foreground">
              React 19
            </span>
          </div>

          {/* Badge 3: TypeScript (Mid Right) */}
          <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-primary/40 bg-card/90 backdrop-blur-xl shadow-[0_0_20px_var(--cyber-glow-primary)] animate-float-slow">
            <SiTypescript className="text-primary text-base" />
            <span className="text-xs font-mono font-medium text-foreground">
              TypeScript
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
