import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Code2, FileText, ArrowRight } from "lucide-react";
import CyberCard from "@/components/shared/CyberCard";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactFormComponent from "@/components/shared/ContactFormComponent";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-24 max-w-7xl mx-auto py-10 md:py-16 px-4 sm:px-6"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
        <div className="hidden sm:block absolute -top-40 -left-40 w-125 h-125 bg-primary/10 blur-[140px] rounded-full animate-slow-spin" />
        <div className="hidden sm:block absolute -bottom-40 -right-40 w-125 h-125 bg-primary/10 blur-[140px] rounded-full animate-slow-spin" />
      </div>

      {/* SECTION HEADING */}
      <SectionHeading
        tag="// 05. SECURE TRANSMISSION"
        title="Open a"
        highlight="Secure Channel"
        description="Whether you have a software engineering role, high-impact technical collaboration, or architecture inquiry — initiate communication below."
      />

      {/* ================= COMPACT 2-COLUMN CONTACT LAYOUT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN (5 COLS): DIRECT DETAILS & PROFILES */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Details Card */}
          <CyberCard className="p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/30">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-primary tracking-widest uppercase block">
                  // DIRECT CHANNELS
                </span>
                <h3 className="text-lg font-bold text-foreground">Contact Information</h3>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-muted-foreground pt-1">
              <div>
                <span className="block text-[11px] font-mono text-primary/80 uppercase">
                  Direct Email
                </span>
                <a
                  href="mailto:kumaraman19137@gmail.com"
                  className="text-foreground font-medium hover:text-primary transition-colors block font-mono text-sm truncate"
                >
                  kumaraman19137@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-mono text-primary/80 uppercase">
                  Phone Number
                </span>
                <a
                  href="tel:+918969230625"
                  className="text-foreground font-medium hover:text-primary transition-colors block font-mono text-sm"
                >
                  +91 8969230625
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-mono text-primary/80 uppercase">
                  Location &amp; Availability
                </span>
                <span className="text-foreground font-medium block text-sm">
                  India (Open to Remote / Relocation)
                </span>
              </div>
            </div>
          </CyberCard>

          {/* Profiles Card */}
          <CyberCard className="p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/30">
                <Code2 size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-primary tracking-widest uppercase block">
                  // PROFILES
                </span>
                <h3 className="text-lg font-bold text-foreground">Online Presence</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link
                href="https://github.com/amandubey923"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl border border-primary/10 bg-background/40 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all text-xs font-medium"
              >
                <div className="flex items-center gap-2">
                  <Github size={14} />
                  <span>GitHub</span>
                </div>
                <span className="text-xs font-mono">↗</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/aman-kr-dubey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl border border-primary/10 bg-background/40 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all text-xs font-medium"
              >
                <div className="flex items-center gap-2">
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </div>
                <span className="text-xs font-mono">↗</span>
              </Link>
              <Link
                href="https://leetcode.com/u/aman_dubey923"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl border border-primary/10 bg-background/40 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all text-xs font-medium"
              >
                <div className="flex items-center gap-2">
                  <Code2 size={14} />
                  <span>LeetCode</span>
                </div>
                <span className="text-xs font-mono">↗</span>
              </Link>
              <Link
                href="https://www.geeksforgeeks.org/profile/kumaramag0dt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl border border-primary/10 bg-background/40 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all text-xs font-medium"
              >
                <div className="flex items-center gap-2">
                  <Code2 size={14} />
                  <span>GFG</span>
                </div>
                <span className="text-xs font-mono">↗</span>
              </Link>
            </div>

            <div className="pt-2 border-t border-primary/10">
              <Link
                href="/resume/Resume2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary/15 border border-primary/30 px-4 py-2.5 text-xs font-bold text-primary shadow-[0_0_15px_var(--cyber-glow-primary)] transition hover:bg-primary hover:text-primary-foreground hover:scale-105"
              >
                <FileText size={14} />
                <span>Download Official Resume (PDF)</span>
              </Link>
            </div>
          </CyberCard>
        </div>

        {/* RIGHT COLUMN (7 COLS): EMBEDDED MESSAGE FORM */}
        <div className="lg:col-span-7">
          <ContactFormComponent />
        </div>
      </div>
    </section>
  );
}
