import { Calendar, Trophy, Terminal, Award, GitBranch, Code, CheckCircle2 } from "lucide-react";
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
    category: "National Competition",
    period: "2023 – 2024",
    icon: Trophy,
    context: "National Finalist & Technical Architecture Lead",
    points: [
      "Core engineering team member across SIH 2023 & 2024 national hackathon editions.",
      "Successfully cleared intensive college evaluation and national problem statement shortlisting rounds.",
      "Spearheaded core logic building, architecture diagramming, system workflows, and technical presentations.",
      "Strengthened cross-functional collaboration, high-pressure execution, and rapid agile delivery under strict deadlines.",
    ],
  },
  {
    id: "02",
    title: "Full-Stack System Engineering",
    category: "Autonomous Engineering",
    period: "2023 – Present",
    icon: Terminal,
    context: "Production Deployments & Scale",
    points: [
      "Architected and deployed 10+ production-ready full-stack applications using Next.js 16, React 19, TypeScript, and Tailwind CSS.",
      "Implemented secure authentication, RESTful APIs, real-time WebRTC communications, and database schemas.",
      "Enforced clean architecture, modular component patterns, and responsive mobile-first interfaces.",
      "Configured automated CI/CD deployment pipelines on Vercel and Netlify with optimized build outputs.",
    ],
  },
  {
    id: "03",
    title: "Applied Software Engineering",
    category: "Practical Development",
    period: "Ongoing Practice",
    icon: Code,
    context: "Full-Stack Application Development",
    points: [
      "Engineered comprehensive frontend interfaces and backend services addressing practical real-world problem statements.",
      "Participated in iterative code reviews, debugging sessions, and performance benchmarking.",
      "Adhered to modern web standards, semantic HTML, and strict TypeScript type-safety.",
      "Developed strong engineering discipline and rapid troubleshooting capabilities across full-stack environments.",
    ],
  },
  {
    id: "04",
    title: "Open Source & Developer Community",
    category: "Collaborative Engineering",
    period: "Active Contributor",
    icon: GitBranch,
    context: "Git Workflows & Version Control",
    points: [
      "Actively engaged with open source codebases, improving code readability, documentation, and maintainability.",
      "Managed version control workflows, pull requests, branch management, and collaborative code merges via GitHub.",
      "Refactored legacy code into modular, reusable components adhering to industry best practices.",
    ],
  },
  {
    id: "05",
    title: "Independent Solutions & Projects",
    category: "End-to-End Delivery",
    period: "Independent Practice",
    icon: Award,
    context: "Product Ownership & Deployment",
    points: [
      "Delivered complete end-to-end web applications independently from concept to production deployment.",
      "Translated complex user requirements into clean, scalable software architectures with intuitive user interfaces.",
      "Maintained complete project ownership, delivery accountability, and rigorous testing across diverse device viewports.",
    ],
  },
  {
    id: "06",
    title: "Competitive Programming & Problem Solving",
    category: "Algorithmic Mastery",
    period: "100+ Days Streak",
    icon: Award,
    context: "DSA & Algorithmic Optimization",
    points: [
      "Earned the LeetCode 100 Days Badge through disciplined daily problem solving in Data Structures and Algorithms.",
      "Strengthened proficiency in computational thinking, time/space complexity analysis, and algorithmic optimization in C++ and JavaScript.",
      "Solved 500+ algorithmic problems across GeeksforGeeks and LeetCode platforms.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 scroll-mt-24 max-w-7xl mx-auto py-10 md:py-16 px-4 sm:px-6 space-y-8"
    >
      {/* SECTION HEADING */}
      <SectionHeading
        tag="// 04. ENGINEERING JOURNEY"
        title="Engineering"
        highlight="Journey & Milestones"
        description="A chronological record of national hackathons, production system deployments, algorithmic achievements, and autonomous product deliveries."
      />

      {/* ================= TIMELINE CONTAINER ================= */}
      <div className="relative">
        {/* Desktop Center Spine */}
        <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary via-primary/30 to-primary/10" />

        {/* Mobile Left Spine */}
        <div className="lg:hidden absolute left-5 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-primary/10" />

        <div className="space-y-6 lg:space-y-8">
          {experiences.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-6 lg:gap-12`}
              >
                {/* Center Node Dot for Desktop */}
                <div className="hidden lg:flex absolute left-1/2 top-7 -translate-x-1/2 z-20 h-7 w-7 items-center justify-center rounded-full bg-cyber-dark border-2 border-primary shadow-[0_0_20px_var(--cyber-glow-primary)]">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Mobile Node Dot */}
                <div className="lg:hidden absolute left-5 top-7 -translate-x-1/2 z-20 h-4 w-4 rounded-full bg-cyber-dark border-2 border-primary shadow-[0_0_12px_var(--cyber-glow-primary)] flex items-center justify-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>

                {/* Card Container */}
                <div className="w-full lg:w-[calc(50%-1.5rem)] pl-9 lg:pl-0">
                  <CyberCard className="p-5 sm:p-6 space-y-3">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-primary/15">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/30">
                          <Icon size={16} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block">
                            // MILESTONE {item.id} • {item.category}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors truncate">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-primary bg-primary/10 border border-primary/20 shrink-0">
                        <Calendar size={11} />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-primary/80">
                      // Context: {item.context}
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-primary font-bold text-xs leading-none mt-1 shrink-0">
                            ›
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CyberCard>
                </div>

                {/* Empty space for opposite side on Desktop */}
                <div className="hidden lg:block lg:w-[calc(50%-1.5rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
