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
  SiAdobe,
  SiTypescript,
  SiShadcnui,
} from "react-icons/si";
import { Code2, Server, Database, Wrench, Layers, Workflow } from "lucide-react";
import CyberCard from "@/components/shared/CyberCard";
import SectionHeading from "@/components/shared/SectionHeading";

interface SkillItem {
  name: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  tag: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    tag: "// CORE LANGUAGES",
    icon: Code2,
    skills: [
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "JavaScript (ES6+)", icon: <DiJavascript1 /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    title: "Frontend Engineering",
    tag: "// CLIENT ARCHITECTURE",
    icon: Layers,
    skills: [
      { name: "React.js", icon: <DiReact /> },
      { name: "Next.js (App Router)", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Shadcn UI", icon: <SiShadcnui /> },
      { name: "HTML5 Semantic", icon: <DiHtml5 /> },
      { name: "CSS3 & Modern Layouts", icon: <DiCss3 /> },
    ],
  },
  {
    title: "Backend & Systems",
    tag: "// SERVER & APIS",
    icon: Server,
    skills: [
      { name: "Node.js Runtime", icon: <DiNodejs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "RESTful API Design", icon: <SiPostman /> },
      { name: "Postman API Testing", icon: <SiPostman /> },
    ],
  },
  {
    title: "Databases & Storage",
    tag: "// DATA ARCHITECTURE",
    icon: Database,
    skills: [
      { name: "MongoDB & NoSQL", icon: <DiMongodb /> },
      { name: "SQL Databases (MySQL)", icon: <SiMysql /> },
      { name: "Convex Realtime DB", icon: <span className="font-bold text-xs text-primary">CV</span> },
    ],
  },
  {
    title: "DevOps, Tools & Cloud",
    tag: "// DEPLOYMENT & TOOLS",
    icon: Wrench,
    skills: [
      { name: "Git Version Control", icon: <DiGit /> },
      { name: "GitHub Collaboration", icon: <SiGithub /> },
      { name: "Vercel Cloud", icon: <SiVercel /> },
      { name: "Netlify Cloud", icon: <SiNetlify /> },
      { name: "Adobe Creative Suite", icon: <SiAdobe /> },
    ],
  },
  {
    title: "Engineering Workflows",
    tag: "// ARCHITECTURE PRACTICES",
    icon: Workflow,
    skills: [
      { name: "Clean Architecture & Modular Code" },
      { name: "Component-Driven UI Design" },
      { name: "API-First Architecture" },
      { name: "Web Performance Optimization" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 scroll-mt-24 max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6">
      {/* SECTION HEADING */}
      <SectionHeading
        tag="// 03. TECHNICAL CAPABILITIES"
        title="Technical"
        highlight="Skills & Stack"
        description="A structured overview of the core technologies, programming languages, database architectures, and engineering workflows I utilize to deliver production-ready software."
      />

      {/* SKILLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => {
          const CategoryIcon = category.icon;
          return (
            <CyberCard
              key={index}
              className="p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/30 shadow-[0_0_12px_var(--cyber-glow-primary)]">
                    <CategoryIcon size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-primary tracking-widest uppercase">
                      {category.tag}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/item flex items-center justify-between p-2.5 rounded-xl border border-primary/10 bg-background/40 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_var(--cyber-glow-primary)]"
                    >
                      <div className="flex items-center gap-3">
                        {skill.icon ? (
                          <span className="text-lg text-primary drop-shadow-[0_0_6px_var(--cyber-glow-primary)]">
                            {skill.icon}
                          </span>
                        ) : (
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        )}
                        <span className="text-sm font-medium text-sky-200 group-hover/item:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-primary/60 opacity-0 group-hover/item:opacity-100 transition-opacity">
                        // ACTIVE
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CyberCard>
          );
        })}
      </div>
    </section>
  );
}

