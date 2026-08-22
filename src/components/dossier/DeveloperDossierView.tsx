"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  ExternalLink,
  Code2,
  GraduationCap,
  Sparkles,
  Languages,
  CheckCircle2,
  FolderGit2,
  Flame,
  Download,
  BookOpen,
  Dumbbell,
  Terminal,
} from "lucide-react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiGithub,
  SiTypescript,
} from "react-icons/si";

import {
  PERSONAL_INFO,
  DOSSIER_EDUCATION,
  DOSSIER_PROJECTS,
  DOSSIER_DSA,
  DOSSIER_LANGUAGES,
} from "@/data/portfolioData";

export default function DeveloperDossierView() {
  return (
    <div className="relative min-h-[calc(100vh-120px)] flex items-center justify-center py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Background Ambient Radial Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(24,206,242,0.1),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.07),transparent_50%)]" />

      {/* Main Dossier Glass Shell */}
      <div className="relative w-full rounded-3xl p-[1.5px] overflow-hidden bg-gradient-to-b from-primary/40 via-primary/10 to-transparent shadow-[0_0_50px_rgba(0,0,0,0.6)]">
        <div className="relative z-10 rounded-[22.5px] p-5 sm:p-7 space-y-5 sm:space-y-6 bg-card/90 backdrop-blur-2xl border border-primary/20">
          
          {/* ================= 1. PROFILE IDENTIFICATION HEADER ================= */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-5 border-b border-primary/15">
            {/* Avatar Frame */}
            <div className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden shrink-0 border border-primary/40 bg-cyber-dark shadow-[0_0_20px_var(--cyber-glow-primary)]">
              <Image
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-1.5 left-1.5 right-1.5 px-1 py-0.5 rounded bg-background/85 backdrop-blur-md text-[9px] font-mono text-center text-primary font-bold border border-primary/25">
                VERIFIED ID
              </div>
            </div>

            {/* Candidate Title & Strip */}
            <div className="flex-1 text-center sm:text-left space-y-2 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-[10px] font-mono text-primary tracking-widest uppercase">
                      // DEVELOPER DOSSIER
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground leading-none mt-1">
                    {PERSONAL_INFO.name.toUpperCase()}
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-primary mt-1">
                    {PERSONAL_INFO.headline}
                  </p>
                </div>

                <div className="flex items-center justify-center sm:justify-end gap-2">
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-primary text-primary-foreground shadow-[0_0_15px_var(--cyber-glow-primary)] hover:scale-105 active:scale-95 transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Resume (PDF)</span>
                  </a>
                </div>
              </div>

              {/* Compact Contact Strip */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-foreground/80 pt-1 font-mono">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1.5 hover:text-primary transition font-medium"
                  title="Email"
                >
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <span className="opacity-30 hidden sm:inline">•</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-1.5 hover:text-primary transition font-medium"
                  title="Phone"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
                <span className="opacity-30 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
                <span className="opacity-30 hidden sm:inline">•</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-primary transition font-medium"
                  title="GitHub"
                >
                  <Github className="w-3.5 h-3.5 text-primary" />
                  <span>GitHub</span>
                </a>
                <span className="opacity-30 hidden sm:inline">•</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-primary transition font-medium"
                  title="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 text-primary" />
                  <span>LinkedIn</span>
                </a>
                <span className="opacity-30 hidden sm:inline">•</span>
                <Link
                  href="/"
                  className="flex items-center gap-1.5 hover:text-primary transition font-medium"
                  title="Portfolio Home"
                >
                  <Globe className="w-3.5 h-3.5 text-primary" />
                  <span>Portfolio</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ================= 2-COLUMN INFORMATION-DENSE GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* LEFT COLUMN (5 COLS): SUMMARY + SKILLS + LANGUAGES + INTERESTS */}
            <div className="md:col-span-5 space-y-5">
              
              {/* Profile Summary */}
              <div className="space-y-1.5">
                <h3 className="text-xs sm:text-[13px] font-bold text-primary uppercase tracking-wider flex items-center gap-1.5 font-mono">
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  <span>Profile Summary</span>
                </h3>
                <p className="text-xs sm:text-[13px] text-foreground/90 leading-relaxed font-normal">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              {/* Technical Skills Matrix */}
              <div className="space-y-2.5">
                <h3 className="text-xs sm:text-[13px] font-bold text-primary uppercase tracking-wider flex items-center gap-1.5 font-mono">
                  <Code2 className="w-3.5 h-3.5 text-primary" />
                  <span>Technical Skills</span>
                </h3>

                {/* Languages */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-foreground/60 uppercase block font-mono">
                    Languages
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <SiC className="w-3 h-3 text-blue-400" />
                      <span>C / C++</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <DiJavascript1 className="w-3.5 h-3.5 text-amber-400" />
                      <span>JavaScript (ES6+)</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <SiTypescript className="w-3 h-3 text-sky-400" />
                      <span>TypeScript</span>
                    </span>
                  </div>
                </div>

                {/* Frontend */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-foreground/60 uppercase block font-mono">
                    Frontend
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <DiReact className="w-3.5 h-3.5 text-cyan-400" />
                      <span>React.js</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <SiNextdotjs className="w-3 h-3 text-foreground" />
                      <span>Next.js (App Router)</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <SiTailwindcss className="w-3 h-3 text-teal-400" />
                      <span>Tailwind CSS</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <DiHtml5 className="w-3.5 h-3.5 text-orange-400" />
                      <span>HTML5</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <DiCss3 className="w-3.5 h-3.5 text-blue-400" />
                      <span>CSS3</span>
                    </span>
                  </div>
                </div>

                {/* Backend */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-foreground/60 uppercase block font-mono">
                    Backend
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <DiNodejs className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Node.js</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <SiExpress className="w-3 h-3 text-foreground/80" />
                      <span>Express.js</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <span>REST APIs</span>
                    </span>
                  </div>
                </div>

                {/* Databases */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-foreground/60 uppercase block font-mono">
                    Databases
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <DiMongodb className="w-3.5 h-3.5 text-green-500" />
                      <span>MongoDB</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <SiMysql className="w-3.5 h-3.5 text-sky-400" />
                      <span>SQL / MySQL</span>
                    </span>
                  </div>
                </div>

                {/* AI & Tools */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-foreground/60 uppercase block font-mono">
                    AI &amp; Tools
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <Sparkles className="w-3 h-3 text-primary" />
                      <span>Gemini AI</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <DiGit className="w-3.5 h-3.5 text-rose-500" />
                      <span>Git</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <SiGithub className="w-3 h-3 text-foreground" />
                      <span>GitHub</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50 text-xs font-medium text-foreground hover:border-primary/50 transition">
                      <Terminal className="w-3 h-3 text-blue-400" />
                      <span>VS Code</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Languages Proficiency */}
              <div className="space-y-1.5">
                <h3 className="text-xs sm:text-[13px] font-bold text-primary uppercase tracking-wider flex items-center gap-1.5 font-mono">
                  <Languages className="w-3.5 h-3.5 text-primary" />
                  <span>Languages</span>
                </h3>
                <div className="flex flex-wrap gap-1.5 text-xs font-medium text-foreground">
                  {DOSSIER_LANGUAGES.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50"
                    >
                      {lang.flag} {lang.name}{" "}
                      <span className="text-[11px] text-foreground/60">
                        ({lang.level})
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-1.5">
                <h3 className="text-xs sm:text-[13px] font-bold text-primary uppercase tracking-wider flex items-center gap-1.5 font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>Interests</span>
                </h3>
                <div className="flex flex-wrap gap-1.5 text-xs font-medium text-foreground">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50">
                    <BookOpen className="w-3.5 h-3.5 text-primary" />
                    <span>Reading Philosophy</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/20 bg-background/50">
                    <Dumbbell className="w-3.5 h-3.5 text-primary" />
                    <span>Fitness / Gym</span>
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (7 COLS): EDUCATION + 2 SELECTED PROJECTS + DSA */}
            <div className="md:col-span-7 space-y-5">
              
              {/* Education Block */}
              <div className="space-y-1.5">
                <h3 className="text-xs sm:text-[13px] font-bold text-primary uppercase tracking-wider flex items-center gap-1.5 font-mono">
                  <GraduationCap className="w-3.5 h-3.5 text-primary" />
                  <span>Education</span>
                </h3>
                <div className="p-3.5 rounded-xl border border-primary/20 bg-background/50 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-foreground">
                        {DOSSIER_EDUCATION.degree}
                      </h4>
                      <p className="text-xs text-foreground/70">
                        {DOSSIER_EDUCATION.institution}
                      </p>
                    </div>
                    <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/30 shrink-0">
                      CGPA: {DOSSIER_EDUCATION.cgpa}
                    </span>
                  </div>
                  <div className="text-[11px] text-foreground/65 flex items-center justify-between pt-0.5 font-mono">
                    <span>{DOSSIER_EDUCATION.duration}</span>
                    <span>Coursework: {DOSSIER_EDUCATION.coursework}</span>
                  </div>
                </div>
              </div>

              {/* Selected Projects (EXACTLY TWO) */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-[13px] font-bold text-primary uppercase tracking-wider flex items-center gap-1.5 font-mono">
                    <FolderGit2 className="w-3.5 h-3.5 text-primary" />
                    <span>Selected Projects</span>
                  </h3>
                  <span className="text-[11px] text-foreground/60 font-mono">
                    2 Featured Builds
                  </span>
                </div>

                {DOSSIER_PROJECTS.map((proj, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-3.5 sm:p-4 rounded-2xl border border-primary/25 bg-background/50 space-y-2 shadow-sm transition hover:border-primary/50"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-primary/20 text-primary border border-primary/30 uppercase">
                            {proj.badge}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-foreground">
                            {proj.name}
                          </h4>
                        </div>
                        <p className="text-xs font-semibold text-primary mt-0.5">
                          {proj.tagline}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary text-primary-foreground text-[11px] font-bold shadow-sm hover:scale-105 transition"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>Live</span>
                          </a>
                        )}
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-border bg-card/60 text-[11px] font-semibold text-foreground hover:border-primary hover:text-primary transition"
                            title="Source Code"
                          >
                            <Github className="w-3 h-3 text-primary" />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-1 text-xs sm:text-[13px] text-foreground/85 leading-relaxed">
                      {proj.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {proj.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded border border-primary/20 bg-background/60 text-[11px] text-foreground/75 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Problem Solving / DSA */}
              <div className="space-y-1.5">
                <h3 className="text-xs sm:text-[13px] font-bold text-primary uppercase tracking-wider flex items-center gap-1.5 font-mono">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Problem Solving / DSA</span>
                </h3>
                <div className="p-3.5 rounded-xl border border-primary/20 bg-background/50 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-base sm:text-lg font-black text-foreground">
                      {DOSSIER_DSA.problemsSolved}
                    </span>
                    <p className="text-xs text-foreground/70 font-mono">
                      {DOSSIER_DSA.streak}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={DOSSIER_DSA.leetcodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg border border-primary/30 bg-background/80 text-xs font-bold text-primary hover:border-primary hover:bg-primary/10 transition"
                    >
                      LeetCode
                    </a>
                    <a
                      href={DOSSIER_DSA.gfgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg border border-primary/30 bg-background/80 text-xs font-bold text-primary hover:border-primary hover:bg-primary/10 transition"
                    >
                      GFG
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

