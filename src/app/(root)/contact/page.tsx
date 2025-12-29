import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto py-32 px-6 overflow-hidden">
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-125 h-125 bg-primary/10 blur-[140px] rounded-full animate-slow-spin" />
        <div className="absolute -bottom-40 -right-40 w-125 h-125 bg-primary/10 blur-[140px] rounded-full animate-slow-spin" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
      </div>

      {/* ================= HEADING ================= */}
      <div className="relative mb-24 text-center animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative inline-block">
          Let’s <span className="text-primary">Connect</span>
          <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-24 h-0.5 bg-primary/60 animate-pulse" />
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Whether you have an opportunity, collaboration idea, or just want to
          say hello — my inbox is always open.
        </p>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* ================= CONTACT CARD ================= */}
        <div className="group relative h-90 rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-10 transition-all duration-500 hover:border-primary hover:shadow-[0_0_80px_var(--cyber-glow-primary)] animate-fadeIn">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/10 group-hover:ring-primary/30 transition" />

          <h3 className="relative z-10 text-2xl font-semibold mb-10">
            Contact Details
          </h3>

          <div className="relative z-10 space-y-6 text-muted-foreground">
            <p>
              <span className="block text-sm text-muted-foreground mb-1">
                Email
              </span>
              <span className="text-lg text-foreground">
                kumaraman19137@gmail.com
              </span>
            </p>

            <p>
              <span className="block text-sm text-muted-foreground mb-1">
                Phone
              </span>
              <span className="text-lg text-foreground">
                +91 8969230625
              </span>
            </p>

            <p>
              <span className="block text-sm text-muted-foreground mb-1">
                Location
              </span>
              <span className="text-lg text-foreground">
                India
              </span>
            </p>
          </div>
        </div>

        {/* ================= SOCIAL CARD ================= */}
        <div className="group relative h-90 rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-10 transition-all duration-500 hover:border-primary hover:shadow-[0_0_80px_var(--cyber-glow-primary)] animate-fadeIn">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/10 group-hover:ring-primary/30 transition" />

          <h3 className="relative z-10 text-2xl font-semibold mb-10">
            Online Presence
          </h3>

          <div className="relative z-10 space-y-6">
            <Link
              href="https://github.com/amandubey923"
              target="_blank"
              className="block text-lg text-muted-foreground hover:text-primary transition-all hover:translate-x-1"
            >
              GitHub →
            </Link>

            <Link
              href="https://www.linkedin.com/in/aman-kr-dubey"
              target="_blank"
              className="block text-lg text-muted-foreground hover:text-primary transition-all hover:translate-x-1"
            >
              LinkedIn →
            </Link>
          </div>
        </div>

        {/* ================= CTA CARD ================= */}
        <div className="group relative h-90 rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-10 transition-all duration-500 hover:border-primary hover:shadow-[0_0_80px_var(--cyber-glow-primary)] animate-fadeIn">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/10 group-hover:ring-primary/30 transition" />

          <h3 className="relative z-10 text-2xl font-semibold mb-8">
            Work With Me
          </h3>

          <p className="relative z-10 text-muted-foreground mb-10 leading-relaxed">
            I’m open to internships, freelance work, collaborations, and
            full-time roles. Let’s build something impactful together.
          </p>

          <Link
            href="/resume/Resume6.pdf"
            target="_blank"
            className="relative z-10 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 hover:scale-[1.03] shadow-lg shadow-primary/30"
          >
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
