import Link from "next/link";
import { Mail, Github, Linkedin, Code2, FileText } from "lucide-react";
import CyberCard from "@/components/shared/CyberCard";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactFormComponent from "@/components/shared/ContactFormComponent";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 scroll-mt-24 max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 -left-40 w-125 h-125 bg-primary/10 blur-[140px] rounded-full animate-slow-spin" />
        <div className="absolute -bottom-40 -right-40 w-125 h-125 bg-primary/10 blur-[140px] rounded-full animate-slow-spin" />
      </div>

      {/* SECTION HEADING */}
      <SectionHeading
        tag="// 06. GET IN TOUCH"
        title="Let’s"
        highlight="Connect & Collaborate"
        description="Whether you have an engineering opportunity, a technical collaboration idea, or want to discuss full-stack software architecture — my inbox is always open."
      />

      {/* ================= MAIN 3-CARD INFO GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* CARD 1: CONTACT DETAILS */}
        <CyberCard className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/30">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-primary tracking-widest uppercase">
                  // DIRECT CHANNELS
                </span>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  Contact Info
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <span className="block text-xs font-mono text-primary/80 uppercase">
                  Direct Email
                </span>
                <a
                  href="mailto:kumaraman19137@gmail.com"
                  className="text-foreground font-medium hover:text-primary transition-colors block text-base truncate"
                >
                  kumaraman19137@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-xs font-mono text-primary/80 uppercase">
                  Phone Number
                </span>
                <a
                  href="tel:+918969230625"
                  className="text-foreground font-medium hover:text-primary transition-colors block text-base"
                >
                  +91 8969230625
                </a>
              </div>

              <div>
                <span className="block text-xs font-mono text-primary/80 uppercase">
                  Location
                </span>
                <span className="text-foreground font-medium block text-base">
                  India (Available for Remote / Relocation)
                </span>
              </div>
            </div>
          </div>
        </CyberCard>

        {/* CARD 2: ONLINE PROFILES */}
        <CyberCard className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/30">
                <Code2 size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-primary tracking-widest uppercase">
                  // PROFILES
                </span>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  Online Presence
                </h3>
              </div>
            </div>

            <div className="space-y-2.5">
              {[
                { name: "GitHub Profile", href: "https://github.com/amandubey923", icon: Github },
                { name: "LinkedIn Profile", href: "https://www.linkedin.com/in/aman-kr-dubey", icon: Linkedin },
                { name: "LeetCode (100+ Days)", href: "https://leetcode.com/u/aman_dubey923", icon: Code2 },
                { name: "GeeksforGeeks Profile", href: "https://www.geeksforgeeks.org/profile/kumaramag0dt", icon: Code2 },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl border border-primary/10 bg-background/40 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all text-sm font-medium"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon size={16} />
                      <span>{item.name}</span>
                    </div>
                    <span className="text-xs font-mono">↗</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </CyberCard>

        {/* CARD 3: WORK WITH ME */}
        <CyberCard className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/30">
                <FileText size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-primary tracking-widest uppercase">
                  // COLLABORATION
                </span>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  Work With Me
                </h3>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              I’m actively looking for software engineering roles, full-stack opportunities,
              and collaborative projects. Let’s build something impactful together.
            </p>
          </div>

          <div className="pt-4 border-t border-primary/10">
            <Link
              href="/resume/Resume2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground shadow-[0_0_20px_var(--cyber-glow-primary)] transition-all hover:scale-105"
            >
              <FileText size={15} />
              <span>Download Official Resume</span>
            </Link>
          </div>
        </CyberCard>
      </div>

      {/* ================= EMBEDDED CONTACT FORM ================= */}
      <div className="max-w-3xl mx-auto">
        <ContactFormComponent />
      </div>
    </section>
  );
}

