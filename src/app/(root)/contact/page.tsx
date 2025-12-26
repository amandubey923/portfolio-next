import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto py-32 px-6">
      {/* Heading */}
      <div className="mb-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Let’s <span className="text-primary">Connect</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
          Whether you have an opportunity, collaboration idea, or just want to
          say hello — my inbox is always open.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Card */}
        <div className="group relative h-[360px] rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-10 transition-all hover:border-primary hover:shadow-[0_0_60px_var(--cyber-glow-primary)]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

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

        {/* Social Card */}
        <div className="group relative h-[360px] rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-10 transition-all hover:border-primary hover:shadow-[0_0_60px_var(--cyber-glow-primary)]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

          <h3 className="relative z-10 text-2xl font-semibold mb-10">
            Online Presence
          </h3>

          <div className="relative z-10 space-y-6">
            <Link
              href="https://github.com/amandubey923"
              target="_blank"
              className="block text-lg text-muted-foreground hover:text-primary transition"
            >
              GitHub →
            </Link>

            <Link
              href="https://www.linkedin.com/in/aman-kr-dubey"
              target="_blank"
              className="block text-lg text-muted-foreground hover:text-primary transition"
            >
              LinkedIn →
            </Link>
          </div>
        </div>

        {/* CTA Card */}
        <div className="group relative h-[360px] rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-10 transition-all hover:border-primary hover:shadow-[0_0_60px_var(--cyber-glow-primary)]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

          <h3 className="relative z-10 text-2xl font-semibold mb-8">
            Work With Me
          </h3>

          <p className="relative z-10 text-muted-foreground mb-10 leading-relaxed">
            I’m open to internships, freelance work, collaborations, and
            full-time roles. Let’s build something impactful together.
          </p>

          <Link
            href="/resume/resume.pdf"
            target="_blank"
            className="relative z-10 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
