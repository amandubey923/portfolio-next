import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Images, Code2 } from "lucide-react";
import CyberCard from "@/components/shared/CyberCard";
import SectionHeading from "@/components/shared/SectionHeading";
import TechBadge from "@/components/shared/TechBadge";

interface ProjectItem {
  id: string;
  image: string;
  title: string;
  category: string;
  desc: string;
  tags: string[];
  live?: string;
  github?: string;
  imagePreview?: string;
  isUpcoming?: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "transaction-validator",
    image: "/projects/project10.png",
    title: "Transaction-Validator",
    category: "Data Processing & Fintech",
    desc: "A high-performance transaction validation & processing platform. Upload transaction CSV files, validate records with automated integrity checks, clean data anomalies, detect errors, and export processed files.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Data Validation", "CSV Parser"],
    live: "https://transaction-validator-aman.vercel.app",
    github: "https://github.com/amandubey923/transaction-validator",
  },
  {
    id: "dentiva-ai",
    image: "/projects/project7.png",
    title: "Dentiva AI Dental-Health",
    category: "AI & Healthcare",
    desc: "An AI-powered dental health assistant web application enabling seamless appointment scheduling, intelligent doctor booking workflows, and interactive AI voice chat for patient triage.",
    tags: ["React", "AI Voice Chat", "Tailwind CSS", "Node.js", "REST APIs"],
    live: "https://dentiva-ai-aman.netlify.app",
    github: "https://github.com/amandubey923/dentiva-ai",
  },
  {
    id: "ai-fitness",
    image: "/projects/project1.png",
    title: "AI Fitness Platform",
    category: "AI & Health Optimization",
    desc: "An intelligent fitness web application that analyzes user health metrics, fitness goals, and dietary preferences to generate personalized, adaptive workout and nutritional plans.",
    tags: ["React", "JavaScript", "Tailwind CSS", "AI Engine", "Responsive UI"],
    live: "https://ai-fitness-aman.netlify.app",
    github: "https://github.com/amandubey923/ai-fitness",
  },
  {
    id: "ai-image-generator",
    image: "/projects/project9.png",
    title: "AI Image Generator Studio",
    category: "Generative AI & SaaS",
    desc: "A full-stack SaaS studio allowing creators to upload source imagery and transform them into distinct artistic styles instantaneously with custom diffusion prompts and a sleek dark interface.",
    tags: ["Full-Stack", "React", "Node.js", "Image API", "Tailwind CSS"],
    live: "https://image-generator-studio.netlify.app",
    github: "https://github.com/amandubey923/image-generator",
  },
  {
    id: "productify",
    image: "/projects/project8.png",
    title: "Productify SaaS Platform",
    category: "E-Commerce & Digital Products",
    desc: "A full-stack SaaS platform empowering digital creators to securely upload, organize, showcase, and monetize digital assets with a scalable backend and intuitive catalog management.",
    tags: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    live: "https://frontend-productify.vercel.app",
    github: "https://github.com/amandubey923/productify",
  },
  {
    id: "video-calling-interview",
    image: "/projects/project2.png",
    title: "Video Calling Interview Platform",
    category: "Real-Time Systems & WebRTC",
    desc: "A real-time video communication platform purpose-built for conducting technical coding interviews, featuring bidirectional audio/video channels and an integrated candidate assessment environment.",
    tags: ["WebRTC", "React", "Node.js", "Socket.io", "Real-Time"],
    live: "https://video-calling-interview-plattform.netlify.app",
    github: "https://github.com/amandubey923/Interview-video-calling-platform",
  },
  {
    id: "book-suggestion-app",
    image: "/projects/project5.png",
    title: "Book Suggestion & Review App",
    category: "Full-Stack Web Application",
    desc: "A community book curation application where users can upload book covers, log detailed reading reviews, score ratings, and discover curated literary recommendations.",
    tags: ["MERN Stack", "Express.js", "MongoDB", "React", "Cloudinary"],
    imagePreview: "/project5/projectimg5.jpg",
    github: "https://github.com/amandubey923/book-store-app",
  },
  {
    id: "library-book",
    image: "/projects/project3.png",
    title: "Library Book Website",
    category: "Frontend Application",
    desc: "A responsive, accessible library catalog platform enabling readers to search, discover, preview, and explore world-famous literary works with clean visual categorization.",
    tags: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "Book Catalog"],
    live: "https://library-book1.netlify.app/index.html",
    github: "https://github.com/amandubey923/LIBRARY-BOOK",
  },
  {
    id: "text-workspace",
    image: "/projects/project4.png",
    title: "Text Utility Workspace",
    category: "Developer Tool",
    desc: "A productivity-focused text manipulation web application built with React, designed for high-speed paragraph transformations, formatting analysis, word counts, and regex cleanup.",
    tags: ["React", "JavaScript", "Text Processing", "Bootstrap", "Utility"],
    live: "https://text-workspace.vercel.app",
    github: "https://github.com/amandubey923/TextWorkspace",
  },
  {
    id: "future-project",
    image: "/projects/project6.png",
    title: "Next-Gen AI Workspace",
    category: "Upcoming Innovation",
    desc: "An upcoming experimental application currently in architectural planning, exploring next-generation full-stack workflows and autonomous agent integrations.",
    tags: ["Architecture", "System Design", "Next.js", "AI Integration"],
    isUpcoming: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 scroll-mt-24 max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6">
      {/* SECTION HEADING */}
      <SectionHeading
        tag="// 01. FEATURED PROJECTS"
        title="Featured"
        highlight="Engineering Projects"
        description="A curated showcase of full-stack applications, real-time platforms, and AI systems built with scalable architecture, clean code standards, and production-grade performance."
      />

      {/* ================= PROJECT GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project) => (
          <CyberCard
            key={project.id}
            className="flex flex-col justify-between"
          >
            {/* Top Image Frame with Browser Mockup Header */}
            <div>
              <div className="relative h-60 w-full overflow-hidden border-b border-primary/20 bg-cyber-dark">
                {/* Browser Mockup Top Bar */}
                <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-2 bg-card/80 backdrop-blur-md border-b border-primary/10">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground/80 tracking-wider truncate max-w-[200px]">
                    {project.category}
                  </span>
                  <Code2 size={12} className="text-primary/60" />
                </div>

                {/* Project Image with hover zoom */}
                <div className="relative w-full h-full pt-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 md:p-8 space-y-4">
                {/* Category & Title */}
                <div>
                  <span className="text-xs font-mono text-primary tracking-widest uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mt-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <TechBadge key={i} name={tag} variant="subtle" />
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons Footer */}
            <div className="p-6 md:p-8 pt-0 mt-auto border-t border-primary/10 flex items-center justify-between gap-3">
              {project.isUpcoming ? (
                <div className="flex items-center gap-2 text-xs font-mono text-primary/80 italic py-2">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span>In Development • Coming Soon</span>
                </div>
              ) : (
                <>
                  {/* Primary Action (Live Demo or Image Preview) */}
                  {project.live ? (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary/20 border border-primary/40 px-4 py-2 text-xs font-semibold text-primary shadow-[0_0_15px_var(--cyber-glow-primary)] transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95"
                    >
                      <span>Live Project</span>
                      <ExternalLink size={14} />
                    </Link>
                  ) : project.imagePreview ? (
                    <Link
                      href={project.imagePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary/20 border border-primary/40 px-4 py-2 text-xs font-semibold text-primary shadow-[0_0_15px_var(--cyber-glow-primary)] transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95"
                    >
                      <Images size={14} />
                      <span>Project Showcase</span>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {/* Secondary Action (GitHub Repository) */}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-4 py-2 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/60 hover:text-foreground hover:bg-card/90 hover:scale-105 active:scale-95"
                    >
                      <Github size={14} />
                      <span>Source Code</span>
                    </Link>
                  )}
                </>
              )}
            </div>
          </CyberCard>
        ))}
      </div>
    </section>
  );
}

