import { Calendar, Trophy, Terminal, Award, GitBranch, Code } from "lucide-react";
import CyberCard from "@/components/shared/CyberCard";
import SectionHeading from "@/components/shared/SectionHeading";

interface TimelineItem {
  title: string;
  category: string;
  period: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  points: string[];
}

const experiences: TimelineItem[] = [
  {
    title: "Smart India Hackathon (SIH)",
    category: "National Competition",
    period: "2023 – 2024",
    icon: Trophy,
    points: [
      "Core engineering team member across SIH 2023 & 2024 editions.",
      "Successfully cleared intensive internal college evaluation & problem statement rounds.",
      "Spearheaded core logic building, architecture diagramming, system workflows, and technical presentations.",
      "Strengthened cross-functional team collaboration, high-pressure execution, and agile delivery under strict deadlines.",
    ],
  },
  {
    title: "Full-Stack System Engineering",
    category: "Autonomous Engineering",
    period: "2023 – Present",
    icon: Terminal,
    points: [
      "Architected and deployed 10+ production-ready full-stack applications using Next.js 16, React 19, TypeScript, and Tailwind CSS.",
      "Implemented secure authentication, RESTful APIs, real-time WebRTC communications, and database schemas.",
      "Enforced clean architecture, modular component patterns, and responsive mobile-first interfaces.",
      "Configured automated CI/CD deployment pipelines on Vercel and Netlify with optimized build outputs.",
    ],
  },
  {
    title: "Applied Software Engineering",
    category: "Practical Development",
    period: "Ongoing Practice",
    icon: Code,
    points: [
      "Engineered comprehensive frontend interfaces and backend services addressing practical real-world problem statements.",
      "Participated in iterative code reviews, debugging sessions, and performance benchmarking.",
      "Adhered to modern web standards, semantic HTML, and strict TypeScript type-safety.",
      "Developed strong engineering discipline and rapid troubleshooting capabilities across full-stack environments.",
    ],
  },
  {
    title: "Open Source & Developer Community",
    category: "Collaborative Engineering",
    period: "Active Contributor",
    icon: GitBranch,
    points: [
      "Actively engaged with open source codebases, improving code readability, documentation, and maintainability.",
      "Managed version control workflows, pull requests, branch management, and collaborative code merges via GitHub.",
      "Refactored legacy code into modular, reusable components adhering to industry best practices.",
    ],
  },
  {
    title: "Independent Solutions & Projects",
    category: "End-to-End Delivery",
    period: "Independent Practice",
    icon: Award,
    points: [
      "Delivered complete end-to-end web applications independently from concept to production deployment.",
      "Translated complex user requirements into clean, scalable software architectures with intuitive user interfaces.",
      "Maintained complete project ownership, delivery accountability, and rigorous testing across diverse device viewports.",
    ],
  },
  {
    title: "Competitive Programming & Problem Solving",
    category: "Algorithmic Mastery",
    period: "100+ Days Streak",
    icon: Award,
    points: [
      "Earned the LeetCode 100 Days Badge through disciplined daily problem solving in Data Structures and Algorithms.",
      "Strengthened proficiency in computational thinking, time/space complexity analysis, and algorithmic optimization in C++ and JavaScript.",
      "Active problem solver on GeeksforGeeks and LeetCode platforms.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 scroll-mt-24 max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6">
      {/* SECTION HEADING */}
      <SectionHeading
        tag="// 04. EXPERIENCE & MILESTONES"
        title="Engineering"
        highlight="Journey & Milestones"
        description="A chronological overview of national hackathon competitions, self-driven system development, algorithmic milestones, and collaborative engineering achievements."
      />

      {/* ================= TIMELINE CONTAINER ================= */}
      <div className="relative">
        {/* Desktop Center Spine */}
        <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary via-primary/30 to-primary/10" />

        {/* Mobile Left Spine */}
        <div className="lg:hidden absolute left-5 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-primary/10" />

        <div className="space-y-12 lg:space-y-16">
          {experiences.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-16`}
              >
                {/* Center Node Dot for Desktop */}
                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-20 h-7 w-7 items-center justify-center rounded-full bg-cyber-dark border-2 border-primary shadow-[0_0_20px_var(--cyber-glow-primary)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Mobile Node Dot */}
                <div className="lg:hidden absolute left-5 top-8 -translate-x-1/2 z-20 h-5 w-5 rounded-full bg-cyber-dark border-2 border-primary shadow-[0_0_15px_var(--cyber-glow-primary)] flex items-center justify-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>

                {/* Card Container (Takes 50% width on Desktop, full width with left margin on mobile) */}
                <div className="w-full lg:w-[calc(50%-2rem)] pl-10 lg:pl-0">
                  <CyberCard className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-primary/10">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/30">
                          <Icon size={18} />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-primary tracking-widest uppercase">
                            {item.category}
                          </span>
                          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-primary bg-primary/10 border border-primary/20">
                        <Calendar size={12} />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                      {item.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <span className="text-primary font-bold text-base leading-none mt-1">
                            ›
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CyberCard>
                </div>

                {/* Empty space for opposite side on Desktop */}
                <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

