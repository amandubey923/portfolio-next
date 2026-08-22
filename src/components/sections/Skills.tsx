"use client";

import { useState, useMemo } from "react";
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
  SiPostman,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiTypescript,
  SiShadcnui,
} from "react-icons/si";
import {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
  Search,
  Sparkles,
  Layers,
} from "lucide-react";
import CyberCard from "@/components/shared/CyberCard";
import SectionHeading from "@/components/shared/SectionHeading";

interface SkillPill {
  name: string;
  descriptor?: string;
  icon?: React.ReactNode;
}

interface CapabilityGroup {
  id: string;
  tag: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: SkillPill[];
}

const capabilityGroups: CapabilityGroup[] = [
  {
    id: "languages",
    tag: "// 01. LANGUAGES",
    title: "Programming Languages",
    desc: "Foundational syntax for algorithmic problem solving and web systems.",
    icon: Code2,
    skills: [
      { name: "C++", descriptor: "DSA & Algorithmic Optimization", icon: <SiCplusplus /> },
      { name: "JavaScript (ES6+)", descriptor: "Modern Async & Dynamic Logic", icon: <DiJavascript1 /> },
      { name: "TypeScript", descriptor: "Strict Static Typing & DX", icon: <SiTypescript /> },
      { name: "C", descriptor: "Systems Programming & Memory", icon: <SiC /> },
    ],
  },
  {
    id: "frontend",
    tag: "// 02. FRONTEND & UI",
    title: "Frontend & UI Architecture",
    desc: "Component-driven responsive interfaces with modern rendering patterns.",
    icon: Layout,
    skills: [
      { name: "React.js", descriptor: "Component Lifecycle & Hooks", icon: <DiReact /> },
      { name: "Next.js 16", descriptor: "App Router & SSR / SSG", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", descriptor: "Utility-First Design Tokens", icon: <SiTailwindcss /> },
      { name: "Shadcn UI", descriptor: "Accessible Primitive Design", icon: <SiShadcnui /> },
      { name: "HTML5 & CSS3", descriptor: "Semantic Markup & Flex/Grid", icon: <DiHtml5 /> },
    ],
  },
  {
    id: "backend",
    tag: "// 03. BACKEND & APIS",
    title: "Backend & Server-Side APIs",
    desc: "Scalable server runtimes, RESTful endpoint architectures, and middleware.",
    icon: Server,
    skills: [
      { name: "Node.js", descriptor: "Event-Driven Async Runtime", icon: <DiNodejs /> },
      { name: "Express.js", descriptor: "RESTful Web Framework", icon: <SiExpress /> },
      { name: "RESTful APIs", descriptor: "Contract Design & JSON Protocols", icon: <SiPostman /> },
      { name: "Postman", descriptor: "Endpoint Integration Testing", icon: <SiPostman /> },
    ],
  },
  {
    id: "databases",
    tag: "// 04. DATABASES & STORAGE",
    title: "Databases & Data Modeling",
    desc: "Document-oriented NoSQL and ACID-compliant relational schemas.",
    icon: Database,
    skills: [
      { name: "MongoDB", descriptor: "NoSQL Collections & Aggregation", icon: <DiMongodb /> },
      { name: "SQL / MySQL", descriptor: "Relational Queries & Indexes", icon: <SiMysql /> },
      { name: "Convex", descriptor: "Realtime Reactive State", icon: <Layers size={14} /> },
    ],
  },
  {
    id: "ai",
    tag: "// 05. AI & INTEGRATIONS",
    title: "AI & Real-Time Integrations",
    desc: "Practical generative AI model integration and peer-to-peer protocols.",
    icon: Brain,
    skills: [
      { name: "Gemini AI API", descriptor: "LLM Reasoning & Structured Output", icon: <Sparkles size={14} /> },
      { name: "WebRTC", descriptor: "Low-Latency Audio/Video Streams", icon: <Code2 size={14} /> },
      { name: "AI Voice Triage", descriptor: "Conversational Clinical Logic", icon: <Brain size={14} /> },
      { name: "Prompt Design", descriptor: "System Context Optimization", icon: <Sparkles size={14} /> },
    ],
  },
  {
    id: "tools",
    tag: "// 06. TOOLS & DEPLOYMENT",
    title: "Tools, Cloud & Deployment",
    desc: "Distributed version control, continuous integration, and edge hosting.",
    icon: Wrench,
    skills: [
      { name: "Git", descriptor: "Distributed Version Control", icon: <DiGit /> },
      { name: "GitHub", descriptor: "Branching, Reviews & PRs", icon: <SiGithub /> },
      { name: "Vercel", descriptor: "Serverless & Edge Deployment", icon: <SiVercel /> },
      { name: "Netlify", descriptor: "Continuous Web Hosting", icon: <SiNetlify /> },
      { name: "VS Code", descriptor: "Optimized Dev Environment", icon: <Code2 size={14} /> },
    ],
  },
];

const categoryFilters = [
  { id: "all", label: "All Capabilities" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & APIs" },
  { id: "databases", label: "Databases" },
  { id: "ai", label: "AI & Integrations" },
  { id: "tools", label: "Tools & Deployment" },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const visibleGroups = useMemo(() => {
    return capabilityGroups
      .filter((group) => {
        if (activeFilter !== "all" && group.id !== activeFilter) {
          return false;
        }
        if (!searchQuery.trim()) return true;

        const q = searchQuery.toLowerCase();
        const matchesGroup =
          group.title.toLowerCase().includes(q) ||
          group.desc.toLowerCase().includes(q);
        const matchesSkills = group.skills.some(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            (s.descriptor && s.descriptor.toLowerCase().includes(q))
        );

        return matchesGroup || matchesSkills;
      })
      .map((group) => {
        if (!searchQuery.trim()) return group;
        const q = searchQuery.toLowerCase();
        return {
          ...group,
          highlightedSkills: group.skills.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              (s.descriptor && s.descriptor.toLowerCase().includes(q)) ||
              group.title.toLowerCase().includes(q)
          ),
        };
      });
  }, [activeFilter, searchQuery]);

  return (
    <section
      id="skills"
      className="relative z-10 scroll-mt-24 max-w-7xl mx-auto py-10 md:py-16 px-4 sm:px-6 space-y-8"
    >
      {/* SECTION HEADING */}
      <SectionHeading
        tag="// 03. TECHNICAL CAPABILITIES"
        title="Technical"
        highlight="Capability Matrix"
        description="A structured, grouped overview of my core programming languages, frontend/backend architectures, databases, AI systems, and cloud tooling."
      />

      {/* FILTER TABS & SEARCH INPUT */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {categoryFilters.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_var(--cyber-glow-primary)]"
                    : "bg-card/60 text-muted-foreground border border-primary/20 hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-primary/70 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technology (e.g. React, Node, C++)..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs font-mono bg-card/60 border border-primary/20 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:shadow-[0_0_12px_var(--cyber-glow-primary)] transition"
          />
        </div>
      </div>

      {/* ================= 6-GROUP CAPABILITY MATRIX (3 COLUMNS × 2 ROWS) ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleGroups.map((group) => {
          const GroupIcon = group.icon;
          const displaySkills = group.skills;

          return (
            <CyberCard
              key={group.id}
              className="p-5 sm:p-6 flex flex-col justify-between h-full space-y-4 group"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-primary/15">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/30 shadow-[0_0_10px_var(--cyber-glow-primary)]">
                      <GroupIcon size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-primary tracking-widest uppercase block truncate">
                        {group.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors truncate">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                    {group.skills.length} Skills
                  </span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mt-2.5 line-clamp-2">
                  {group.desc}
                </p>
              </div>

              {/* Grouped Compact Skill Pills */}
              <div className="space-y-2 pt-1 mt-auto">
                {displaySkills.map((skill, sIdx) => {
                  const isMatching =
                    !searchQuery.trim() ||
                    skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (skill.descriptor &&
                      skill.descriptor
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()));

                  return (
                    <div
                      key={sIdx}
                      className={`flex items-center justify-between p-2 rounded-xl border transition-all duration-200 ${
                        isMatching
                          ? "border-primary/20 bg-background/50 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_12px_var(--cyber-glow-primary)]"
                          : "opacity-40 border-border/40 bg-background/20"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {skill.icon ? (
                          <span className="text-primary text-sm shrink-0 drop-shadow-[0_0_5px_var(--cyber-glow-primary)]">
                            {skill.icon}
                          </span>
                        ) : (
                          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        )}
                        <div className="min-w-0">
                          <span className="block text-xs font-bold text-foreground leading-tight truncate">
                            {skill.name}
                          </span>
                          {skill.descriptor && (
                            <span className="block text-[10px] font-mono text-muted-foreground leading-tight truncate">
                              {skill.descriptor}
                            </span>
                          )}
                        </div>
                      </div>

                      <span className="text-[9px] font-mono text-primary/70 px-1 py-0.5 rounded bg-primary/5 border border-primary/10 uppercase shrink-0 ml-1">
                        Active
                      </span>
                    </div>
                  );
                })}
              </div>
            </CyberCard>
          );
        })}
      </div>

      {visibleGroups.length === 0 && (
        <div className="p-8 text-center rounded-2xl border border-primary/20 bg-card/40 text-xs font-mono text-muted-foreground">
          // No capability group found matching &quot;{searchQuery}&quot;. Try resetting search or category filter.
        </div>
      )}
    </section>
  );
}
