import Image from "next/image";
import Link from "next/link";
import { FileText, Cpu, Brain, Target, Compass, Sparkles } from "lucide-react";
import CyberCard from "@/components/shared/CyberCard";
import SectionHeading from "@/components/shared/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative z-10 scroll-mt-24 max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6">
      {/* Background Ambient Radial Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(24,206,242,0.1),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(56,189,248,0.08),transparent_45%)]" />

      {/* SECTION HEADING */}
      <SectionHeading
        tag="// 02. BIOGRAPHY & PHILOSOPHY"
        title="Engineering"
        highlight="Discipline & Philosophy"
        description="A deeper look into my architectural mindset, engineering principles, and commitment to disciplined, long-term software excellence."
      />

      {/* ================= TOP HERO CARD (INTRO & PHOTO) ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        {/* Left Bio Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-xl space-y-5">
            <span className="text-xs font-mono text-primary tracking-widest uppercase">
              // CORE MISSION
            </span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Building Scalable Systems with Clarity & Structural Integrity
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base">
              I’m a disciplined software engineer focused on architecting thoughtful,
              reliable systems with long-term impact. I emphasize solid computer
              science fundamentals, clean code organization, and writing software
              that remains scalable, maintainable, and resilient over time.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Rather than adopting quick shortcuts, I prioritize craftsmanship,
              rigorous problem breakdown, and disciplined engineering workflows.
            </p>

            <div className="pt-2">
              <Link
                href="/resume/Resume2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary/20 border border-primary/40 px-5 py-2.5 text-xs font-semibold text-primary shadow-[0_0_15px_var(--cyber-glow-primary)] transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
              >
                <FileText size={16} />
                <span>View Full Resume Profile</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Photo Column (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-[280px] sm:w-[320px] h-[360px] sm:h-[400px] rounded-3xl p-2 border border-primary/30 bg-card/50 backdrop-blur-xl shadow-[0_0_50px_var(--cyber-glow-primary)]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/20 bg-cyber-dark">
              <Image
                src="/aman/hero.png"
                alt="Aman Kumar"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md px-4 py-2 rounded-xl border border-primary/20 text-center">
                <span className="text-sm font-bold text-foreground">Aman Kumar (Dubey)</span>
                <span className="block text-[11px] font-mono text-primary/80">Information Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PROFILE & APPROACH CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Profile Card */}
        <CyberCard className="p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary border border-primary/30">
              <Cpu size={20} />
            </div>
            <div>
              <span className="text-xs font-mono text-primary tracking-widest uppercase">
                // 01. PROFILE
              </span>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Engineering Identity
              </h3>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            My name is <span className="text-foreground font-semibold">Aman Kumar</span>, an
            Information Technology undergraduate with a strong focus on real-world problem
            solving and system-level thinking.
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed">
            I prioritize consistency, continuous practice, and high standards of execution.
            My work is guided by deep curiosity about how large-scale web systems and algorithmic
            architectures operate under the hood.
          </p>
        </CyberCard>

        {/* Approach Card */}
        <CyberCard className="p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary border border-primary/30">
              <Brain size={20} />
            </div>
            <div>
              <span className="text-xs font-mono text-primary tracking-widest uppercase">
                // 02. APPROACH
              </span>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Systems & Human Context
              </h3>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            I view technology as part of a larger ecosystem involving human behavior,
            psychology, and user experience. 
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed">
            This balanced perspective enables me to craft interfaces that are immediately
            intuitive while designing backends that remain performant, modular, and effortless
            to maintain.
          </p>
        </CyberCard>
      </div>

      {/* ================= CORE PILLARS / FOCUS AREAS ================= */}
      <div>
        <div className="mb-8">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            // CORE PILLARS
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-foreground mt-1">
            Focus Areas & Personal Growth
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: "Mindset",
              text: "Long-term architectural thinking, daily consistency, and calm resilience under challenging deadlines.",
            },
            {
              icon: Compass,
              title: "Interests",
              text: "Software system design, algorithmic problem solving, modern web technologies, fitness, and philosophy.",
            },
            {
              icon: Sparkles,
              title: "Growth",
              text: "Learning German to broaden linguistic structure, global collaboration, and international engineering exposure.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <CyberCard key={i} className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                    <Icon size={16} />
                  </div>
                  <h4 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </CyberCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

