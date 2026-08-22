"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Code2, ChevronDown, ChevronUp, Layers } from "lucide-react";
import CyberCard from "@/components/shared/CyberCard";
import SectionHeading from "@/components/shared/SectionHeading";
import TechBadge from "@/components/shared/TechBadge";

interface ProjectItem {
  id: string;
  image: string;
  title: string;
  category: string;
  filterType: "fullstack" | "ai" | "tools";
  desc: string;
  tags: string[];
  live?: string;
  github?: string;
  isUpcoming?: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "readers-hub",
    image: "/projects/project3.png",
    title: "Reader's HUB — Explore & Read Books",
    category: "Digital Library Ecosystem",
    filterType: "fullstack",
    desc: "Next-gen digital library platform featuring instant catalog search, book curation, reviews, collection management, and custom reading themes.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js"],
    live: "https://reader-hub-library.vercel.app/",
    github: "https://github.com/amandubey923/library-optimized",
  },
  {
    id: "dentiva-ai",
    image: "/projects/project7.png",
    title: "Dentiva AI Dental-Health",
    category: "AI & Healthcare Assistant",
    filterType: "ai",
    desc: "AI-powered clinical dental assistant enabling real-time appointment booking, doctor schedule management, and interactive AI voice triage.",
    tags: ["React", "AI Voice Chat", "Node.js", "Tailwind CSS", "REST APIs"],
    live: "https://dentiva-ai-aman.netlify.app",
    github: "https://github.com/amandubey923/dentiva-ai",
  },
  {
    id: "transaction-validator",
    image: "/projects/project10.png",
    title: "Transaction-Validator",
    category: "Fintech & Data Integrity",
    filterType: "fullstack",
    desc: "High-throughput CSV data validator & processor. Automates syntax verification, anomaly detection, duplicate flagging, and clean file exporting.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "CSV Parser"],
    live: "https://transaction-validator-aman.vercel.app",
    github: "https://github.com/amandubey923/transaction-validator",
  },
  {
    id: "ai-fitness",
    image: "/projects/project1.png",
    title: "AI Fitness Platform",
    category: "AI Health & Optimization",
    filterType: "ai",
    desc: "Intelligent workout and nutrition assistant that analyzes user biometrics and fitness targets to formulate personalized dietary & fitness routines.",
    tags: ["React", "AI Engine", "Tailwind CSS", "Health Metrics"],
    live: "https://ai-fitness-aman.netlify.app",
    github: "https://github.com/amandubey923/ai-fitness",
  },
  {
    id: "ai-image-generator",
    image: "/projects/project9.png",
    title: "AI Image Generator Studio",
    category: "Generative AI & SaaS",
    filterType: "ai",
    desc: "Full-stack creative diffusion studio enabling creators to transform imagery into distinctive artistic styles with customizable generation prompts.",
    tags: ["React", "Node.js", "Image API", "Tailwind CSS"],
    live: "https://image-generator-studio.netlify.app",
    github: "https://github.com/amandubey923/image-generator",
  },
  {
    id: "productify",
    image: "/projects/project8.png",
    title: "Productify SaaS Platform",
    category: "E-Commerce & Storefront",
    filterType: "fullstack",
    desc: "SaaS storefront empowering digital creators to securely upload, categorize, and showcase digital assets with a scalable MongoDB backend.",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
    live: "https://frontend-productify.vercel.app",
    github: "https://github.com/amandubey923/productify",
  },
  {
    id: "video-calling-interview",
    image: "/projects/project2.png",
    title: "Video Calling Interview Platform",
    category: "Real-Time Systems & WebRTC",
    filterType: "fullstack",
    desc: "Low-latency peer-to-peer audio/video communications platform purpose-built for conducting technical coding interviews.",
    tags: ["WebRTC", "React", "Node.js", "Socket.io"],
    live: "https://video-calling-interview-plattform.netlify.app",
    github: "https://github.com/amandubey923/Interview-video-calling-platform",
  },
  {
    id: "book-suggestion-app",
    image: "/projects/project5.png",
    title: "Book Suggestion & Review App",
    category: "Full-Stack Community Hub",
    filterType: "fullstack",
    desc: "Community reading hub where readers upload book covers, record reviews, score ratings, and browse literary recommendations.",
    tags: ["MERN Stack", "Express", "MongoDB", "React"],
    github: "https://github.com/amandubey923/book-store-app",
  },
  {
    id: "text-workspace",
    image: "/projects/project4.png",
    title: "Text Utility Workspace",
    category: "Developer Tool",
    filterType: "tools",
    desc: "Text transformation utility for high-speed string manipulations, case formatting, word metrics, and regex cleanup.",
    tags: ["React", "JavaScript", "Text Processing"],
    live: "https://text-workspace.vercel.app",
    github: "https://github.com/amandubey923/TextWorkspace",
  },
  {
    id: "future-project",
    image: "/projects/project6.png",
    title: "Next-Gen AI Workspace",
    category: "Upcoming Innovation",
    filterType: "ai",
    desc: "Experimental full-stack architecture exploring autonomous agent workflows and realtime developer productivity.",
    tags: ["Architecture", "Next.js", "AI Integration"],
    isUpcoming: true,
  },
];

const projectFilterTabs = [
  { id: "all", label: "All Deployments" },
  { id: "fullstack", label: "Full-Stack & SaaS" },
  { id: "ai", label: "AI & Healthcare" },
  { id: "tools", label: "Tools & Utilities" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.filterType === activeFilter);
  }, [activeFilter]);

  const visibleProjects = useMemo(() => {
    if (activeFilter !== "all" || showAll) {
      return filteredProjects;
    }
    return filteredProjects.slice(0, 6);
  }, [filteredProjects, activeFilter, showAll]);

  return (
    <section
      id="projects"
      className="relative z-10 scroll-mt-24 max-w-7xl mx-auto py-10 md:py-16 px-4 sm:px-6 space-y-8"
    >
      {/* SECTION HEADING */}
      <SectionHeading
        tag="// 01. FEATURED DEPLOYMENTS"
        title="Featured"
        highlight="Engineering Projects"
        description="A curated showcase of production-grade full-stack systems, real-time platforms, and AI applications."
      />

      {/* FILTER TABS */}
      <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
        {projectFilterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveFilter(tab.id);
                setShowAll(false);
              }}
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

      {/* ================= 3-COLUMN COMPACT PROJECT GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <CyberCard
            key={project.id}
            className="flex flex-col justify-between h-full group"
          >
            {/* Top Image Frame with Browser Header */}
            <div>
              <div className="relative h-44 sm:h-48 w-full overflow-hidden border-b border-primary/20 bg-cyber-dark">
                {/* Browser Mockup Top Bar */}
                <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 py-1.5 bg-card/85 backdrop-blur-md border-b border-primary/10">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500/80" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                    <span className="h-2 w-2 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground/80 tracking-wider truncate max-w-[170px]">
                    {project.category}
                  </span>
                  <Code2 size={11} className="text-primary/60" />
                </div>

                {/* Project Image */}
                <div className="relative w-full h-full pt-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-80" />
                </div>
              </div>

              {/* Content Details */}
              <div className="p-4 sm:p-5 space-y-2.5">
                <div>
                  <span className="text-[10px] font-mono text-primary tracking-widest uppercase block">
                    // 0{index + 1} • {project.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground mt-0.5 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {project.desc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <TechBadge key={i} name={tag} variant="subtle" />
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons Footer */}
            <div className="p-4 sm:p-5 pt-0 mt-auto border-t border-primary/10 flex items-center justify-between gap-2.5">
              {project.isUpcoming ? (
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-primary/80 italic py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span>In Development • Coming Soon</span>
                </div>
              ) : (
                <>
                  {project.live ? (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-primary/20 border border-primary/40 px-3.5 py-1.5 text-xs font-bold text-primary shadow-[0_0_12px_var(--cyber-glow-primary)] transition hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95"
                    >
                      <span>Live Project</span>
                      <ExternalLink size={12} />
                    </Link>
                  ) : (
                    <div />
                  )}

                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card/60 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition hover:border-primary hover:text-foreground hover:scale-105 active:scale-95"
                    >
                      <Github size={13} />
                      <span>Source</span>
                    </Link>
                  )}
                </>
              )}
            </div>
          </CyberCard>
        ))}
      </div>

      {/* ================= VIEW MORE / SHOW LESS BUTTON ================= */}
      {activeFilter === "all" && projects.length > 6 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="group inline-flex items-center gap-2 rounded-2xl border border-primary/40 bg-card/70 px-6 py-3 text-xs sm:text-sm font-mono font-bold text-primary backdrop-blur-xl shadow-[0_0_20px_var(--cyber-glow-primary)] transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>
              {showAll
                ? "SHOW LESS PROJECTS"
                : `VIEW ALL PROJECTS (${projects.length})`}
            </span>
            {showAll ? (
              <ChevronUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            )}
          </button>
        </div>
      )}
    </section>
  );
}
