"use client";

import { useState, useMemo } from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiCplusplus,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiRender,
  SiRailway,
  SiTypescript,
  SiPrisma,
  SiClerk,
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
  Cpu,
  BookOpen,
  Bot,
} from "lucide-react";
import CyberCard from "@/components/shared/CyberCard";
import SectionHeading from "@/components/shared/SectionHeading";

interface SkillPill {
  name: string;
  descriptor?: string;
  subgroup?: string;
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
    desc: "Core syntax for algorithmic problem solving and robust application logic.",
    icon: Code2,
    skills: [
      { name: "C++", descriptor: "Object-oriented & algorithmic programming", icon: <SiCplusplus /> },
      { name: "JavaScript", descriptor: "Modern dynamic scripting & web APIs", icon: <DiJavascript1 /> },
      { name: "TypeScript", descriptor: "Strict static typing & type safety", icon: <SiTypescript /> },
    ],
  },
  {
    id: "frontend",
    tag: "// 02. FRONTEND & UI",
    title: "Frontend & UI Engineering",
    desc: "Component-driven interfaces, reactive state, and modern design systems.",
    icon: Layout,
    skills: [
      { name: "React.js", descriptor: "Component-based UI development", icon: <DiReact /> },
      { name: "Next.js", descriptor: "Full-stack React framework (App Router)", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", descriptor: "Utility-first styling & design tokens", icon: <SiTailwindcss /> },
    ],
  },
  {
    id: "backend",
    tag: "// 03. BACKEND & APIS",
    title: "Backend & Server APIs",
    desc: "Scalable server runtimes and RESTful endpoint architectures.",
    icon: Server,
    skills: [
      { name: "Node.js", descriptor: "Server-side JavaScript runtime", icon: <DiNodejs /> },
      { name: "Express.js", descriptor: "RESTful web API routing & middleware", icon: <SiExpress /> },
    ],
  },
  {
    id: "databases",
    tag: "// 04. DATABASES & DATA",
    title: "Databases & Storage",
    desc: "Document-oriented NoSQL and ACID-compliant relational persistence.",
    icon: Database,
    skills: [
      { name: "MongoDB", descriptor: "NoSQL document database", icon: <DiMongodb /> },
      { name: "PostgreSQL", descriptor: "Relational SQL database", icon: <SiPostgresql /> },
      { name: "Firebase", descriptor: "Cloud backend & auth services", icon: <SiFirebase /> },
      { name: "Convex", descriptor: "Real-time reactive backend", icon: <Layers size={14} /> },
      { name: "Neon (SQL)", descriptor: "Serverless Postgres database", icon: <Database size={14} /> },
    ],
  },
  {
    id: "ai",
    tag: "// 05. AI & INTEGRATIONS",
    title: "AI & Platform Integrations",
    desc: "Practical generative models, voice assistants, and authentication layers.",
    icon: Brain,
    skills: [
      { name: "Gemini AI", descriptor: "Generative AI model integration", icon: <Sparkles size={14} /> },
      { name: "Vapi AI", descriptor: "Conversational voice AI assistant", icon: <Bot size={14} /> },
      { name: "Prisma ORM", descriptor: "Type-safe database ORM & queries", icon: <SiPrisma /> },
      { name: "Clerk Auth", descriptor: "User authentication & security", icon: <SiClerk /> },
    ],
  },
  {
    id: "tools",
    tag: "// 06. TOOLS & CORE CS",
    title: "Tools, Platforms & Core CS",
    desc: "Developer tooling, cloud infrastructure, and computer science foundations.",
    icon: Wrench,
    skills: [
      { name: "Git", descriptor: "Distributed version control", subgroup: "Tools & Platforms", icon: <DiGit /> },
      { name: "GitHub", descriptor: "Code repositories & collaboration", subgroup: "Tools & Platforms", icon: <SiGithub /> },
      { name: "Vercel", descriptor: "Serverless edge deployments", subgroup: "Tools & Platforms", icon: <SiVercel /> },
      { name: "Netlify", descriptor: "Automated web hosting & CI/CD", subgroup: "Tools & Platforms", icon: <SiNetlify /> },
      { name: "Render", descriptor: "Cloud web services & apps", subgroup: "Tools & Platforms", icon: <SiRender /> },
      { name: "Railway", descriptor: "Infrastructure & backend hosting", subgroup: "Tools & Platforms", icon: <SiRailway /> },
      { name: "VS Code", descriptor: "Integrated code environment", subgroup: "Tools & Platforms", icon: <Code2 size={14} /> },
      { name: "Code-Rabbit", descriptor: "AI-assisted code reviews", subgroup: "Tools & Platforms", icon: <Sparkles size={14} /> },
      { name: "Data Structures & Algorithms", descriptor: "Algorithmic problem solving", subgroup: "Core Computer Science", icon: <Cpu size={14} /> },
      { name: "OOP", descriptor: "Object-oriented design patterns", subgroup: "Core Computer Science", icon: <Layers size={14} /> },
      { name: "Operating Systems", descriptor: "Process & memory concepts", subgroup: "Core Computer Science", icon: <Cpu size={14} /> },
      { name: "Web Development", descriptor: "Client-server architecture", subgroup: "Core Computer Science", icon: <BookOpen size={14} /> },
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
  { id: "tools", label: "Tools & Core CS" },
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
            (s.descriptor && s.descriptor.toLowerCase().includes(q)) ||
            (s.subgroup && s.subgroup.toLowerCase().includes(q))
        );

        return matchesGroup || matchesSkills;
      })
      .map((group) => {
        if (!searchQuery.trim()) return group;
        const q = searchQuery.toLowerCase();
        const filteredSkills = group.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            (s.descriptor && s.descriptor.toLowerCase().includes(q)) ||
            (s.subgroup && s.subgroup.toLowerCase().includes(q))
        );
        return {
          ...group,
          skills: filteredSkills.length > 0 ? filteredSkills : group.skills,
        };
      });
  }, [activeFilter, searchQuery]);

  return (
    <section id="skills" className="relative scroll-mt-24 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          tag="// 02. TECHNICAL MATRIX"
          title="Technical Capabilities"
          description="Structured overview of programming languages, frameworks, cloud data stores, and core CS foundations."
        />

        {/* ================= SEARCH & CATEGORY CONTROLS ================= */}
        <div className="mt-8 mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Live Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. MongoDB, TypeScript, C++, Gemini)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-primary/25 bg-card/60 backdrop-blur-xl text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background focus:outline-none transition shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-muted-foreground hover:text-foreground"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Category Filter Badges */}
          <div className="flex flex-wrap gap-1.5 items-center">
            {categoryFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? "bg-primary text-primary-foreground font-bold shadow-[0_0_12px_var(--cyber-glow-primary)]"
                    : "border border-border bg-card/40 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card/80"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ================= 6-GROUP CAPABILITY MATRIX (3 COLS ON DESKTOP) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleGroups.map((group) => {
            const Icon = group.icon;

            // Check if group 6 has subgroups
            const isGroup6 = group.id === "tools";
            const toolsSubgroup = isGroup6
              ? group.skills.filter((s) => s.subgroup === "Tools & Platforms")
              : [];
            const csSubgroup = isGroup6
              ? group.skills.filter((s) => s.subgroup === "Core Computer Science")
              : [];

            return (
              <CyberCard
                key={group.id}
                className="flex flex-col justify-between p-6 h-full border border-primary/20 bg-card/50 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="h-9 w-9 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_12px_var(--cyber-glow-primary)]">
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-primary tracking-widest block uppercase">
                          {group.tag}
                        </span>
                        <h3 className="text-sm font-bold text-foreground">
                          {group.title}
                        </h3>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono text-primary bg-primary/10 border border-primary/20">
                      {group.skills.length} Skills
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                    {group.desc}
                  </p>

                  {/* Skills Rendering */}
                  {isGroup6 && toolsSubgroup.length > 0 && csSubgroup.length > 0 ? (
                    <div className="space-y-4">
                      {/* Subgroup 1: Tools & Platforms */}
                      <div>
                        <span className="text-[10px] font-mono text-primary/80 uppercase block mb-2 font-semibold">
                          // Tools & Cloud Platforms
                        </span>
                        <div className="space-y-1.5">
                          {toolsSubgroup.map((s, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-2 rounded-lg bg-background/60 border border-border/70 hover:border-primary/40 hover:bg-card/90 transition text-xs"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="text-primary flex-shrink-0 text-sm">{s.icon}</span>
                                <span className="font-semibold text-foreground truncate">{s.name}</span>
                              </div>
                              {s.descriptor && (
                                <span className="text-[10px] text-muted-foreground truncate ml-2 text-right">
                                  {s.descriptor}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Subgroup 2: Core Computer Science */}
                      <div className="pt-2 border-t border-border/50">
                        <span className="text-[10px] font-mono text-primary/80 uppercase block mb-2 font-semibold">
                          // Core Computer Science
                        </span>
                        <div className="space-y-1.5">
                          {csSubgroup.map((s, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-2 rounded-lg bg-background/60 border border-border/70 hover:border-primary/40 hover:bg-card/90 transition text-xs"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="text-primary flex-shrink-0 text-sm">{s.icon}</span>
                                <span className="font-semibold text-foreground truncate">{s.name}</span>
                              </div>
                              {s.descriptor && (
                                <span className="text-[10px] text-muted-foreground truncate ml-2 text-right">
                                  {s.descriptor}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Normal Skill List */
                    <div className="space-y-2">
                      {group.skills.map((s, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-background/60 border border-border/70 hover:border-primary/40 hover:bg-card/90 transition text-xs"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="text-primary flex-shrink-0 text-sm">{s.icon}</span>
                            <span className="font-semibold text-foreground truncate">{s.name}</span>
                          </div>
                          {s.descriptor && (
                            <span className="text-[10px] text-muted-foreground truncate ml-2 text-right">
                              {s.descriptor}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CyberCard>
            );
          })}
        </div>

        {visibleGroups.length === 0 && (
          <div className="text-center py-16 rounded-2xl border border-primary/20 bg-card/40">
            <p className="text-sm text-muted-foreground">
              No technical capabilities found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className="mt-3 text-xs font-mono text-primary hover:underline cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
