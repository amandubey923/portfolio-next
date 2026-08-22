import { Calendar, Trophy, Terminal, Award, GitBranch, Code, CheckCircle2, Cpu } from "lucide-react";
import CyberCard from "@/components/shared/CyberCard";
import SectionHeading from "@/components/shared/SectionHeading";

interface TimelineItem {
  id: string;
  title: string;
  category: string;
  period: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  context: string;
  points: string[];
}

const experiences: TimelineItem[] = [
  {
    id: "01",
    title: "Smart India Hackathon (SIH)",
    category: "National Hackathon",
    period: "2023 – 2024",
    icon: Trophy,
    context: "SIH Participant // Collaborative Engineering & Problem Solving",
    points: [
      "Active team participant across SIH national hackathon problem statement selection and development rounds.",
      "Collaborated in agile team sprints, system architecture formulation, and live technical evaluations.",
      "Engineered core application logic, database schemas, and intuitive responsive frontend interfaces.",
      "Strengthened rapid problem-solving, real-time collaboration, and delivery under rigorous deadlines.",
    ],
  },
  {
    id: "02",
    title: "Full-Stack & AI Systems Engineering",
    category: "Autonomous Engineering",
    period: "2023 – Present",
    icon: Terminal,
    context: "Production-Grade Web Applications",
    points: [
      "Architected and deployed full-stack web applications utilizing Next.js (App Router), React, TypeScript, and Tailwind CSS.",
      "Integrated multi-model databases including MongoDB, PostgreSQL, Firebase, Convex, and Neon SQL.",
      "Implemented AI assistants leveraging Gemini AI and Vapi AI for conversational voice and clinical triage.",
      "Configured automated CI/CD workflows on Vercel and Netlify ensuring optimized serverless execution.",
    ],
  },
  {
    id: "03",
    title: "Competitive Programming & Problem Solving",
    category: "Algorithmic Foundations",
    period: "500+ Problems",
    icon: Cpu,
    context: "Data Structures & Algorithmic Optimization",
    points: [
      "Solved 500+ algorithmic problems across LeetCode and GeeksforGeeks platforms.",
      "Developed deep mastery in asymptotic complexity analysis, arrays, strings, trees, and graph algorithms.",
      "Maintained consistent problem-solving discipline earning LeetCode and GFG recognition badges.",
    ],
  },
  {
    id: "04",
    title: "Open Source & Collaborative Engineering",
    category: "Developer Community",
    period: "Continuous Practice",
    icon: GitBranch,
    context: "Git Workflows & Version Control",
    points: [
      "Managed Git and GitHub workflows including feature branching, pull request reviews, and merge conflict resolution.",
      "Maintained modular repository architectures adhering to industry best practices and strict TypeScript typing.",
      "Utilized modern developer tooling including Code-Rabbit and VS Code extensions for code quality.",
    ],
  },
  {
    id: "05",
    title: "Applied Web Systems & Product Ownership",
    category: "End-to-End Delivery",
    period: "Ongoing Practice",
    icon: Award,
    context: "Full-Lifecycle Engineering",
    points: [
      "Delivered complete end-to-end web applications independently from architectural planning to live cloud deployment.",
      "Formulated clean, user-centric interfaces with responsive layouts, accessible controls, and resilient error states.",
      "Maintained complete project ownership, delivery accountability, and rigorous cross-device testing.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          tag="// 04. ENGINEERING JOURNEY"
          title="Milestones & Experience"
          description="Chronological record of competitive problem solving, hackathon participation, and end-to-end system engineering."
        />

        {/* ================= TIMELINE CONTAINER ================= */}
        <div className="relative mt-12 space-y-8 before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/30 before:to-transparent">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`relative flex items-center md:justify-between ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* TIMELINE NODE ICON */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-xl bg-card border border-primary/50 text-primary shadow-[0_0_15px_var(--cyber-glow-primary)] z-10">
                  <Icon size={16} />
                </div>

                {/* CONTENT CARD */}
                <div className="ml-12 md:ml-0 md:w-[44%]">
                  <CyberCard className="p-6 border border-primary/20 bg-card/60 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 shadow-[0_0_25px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-wider">
                        {exp.category}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-muted-foreground bg-background/60 border border-border">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-xs font-mono text-primary/80 mb-4">
                      {exp.context}
                    </p>

                    <ul className="space-y-2 text-xs text-muted-foreground">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </CyberCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
