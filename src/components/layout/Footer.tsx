import Link from "next/link";
import { Terminal, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-primary/20 bg-background/80 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        {/* Left branding */}
        <div className="flex items-center gap-2 font-mono">
          <Terminal size={14} className="text-primary" />
          <span className="text-foreground font-semibold">Aman Dubey</span>
          <span className="text-primary/70">|</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        {/* Center quote */}
        <div className="text-center text-muted-foreground font-mono text-[11px]">
          <span>Designing resilient systems with clarity & long-term impact</span>
        </div>

        {/* Right status */}
        <div className="flex items-center gap-4">
          <Link
            href="/dossier"
            className="text-muted-foreground hover:text-primary font-mono text-[11px] transition"
          >
            Developer Dossier
          </Link>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-[11px] text-green-400">
              System Online
            </span>
          </div>
          <Link
            href="/#contact"
            className="text-primary hover:underline font-mono text-[11px]"
          >
            Get In Touch →
          </Link>
        </div>
      </div>
    </footer>
  );
}
