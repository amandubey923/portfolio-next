export default function ExperiencePage() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto py-28 px-6">
      {/* Heading */}
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          My <span className="text-primary">Experience</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Hands-on experience gained through hackathons, real-world projects,
          and consistent problem-solving with modern technologies.
        </p>
      </div>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* SIH */}
        <div className="group relative h-[300px] rounded-xl border border-border bg-card/40 backdrop-blur-md p-8 transition-all hover:border-primary hover:shadow-[0_0_40px_var(--cyber-glow-primary)]">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

          <h3 className="relative z-10 text-2xl font-semibold mb-2">
            Smart India Hackathon (SIH)
          </h3>
          <p className="relative z-10 text-sm text-muted-foreground mb-6">
            Participant • 2023 – 2024
          </p>

          <ul className="relative z-10 space-y-3 text-muted-foreground">
            <li>• Participated in SIH 2023 & 2024 as an active team member</li>
            <li>• Cleared college-level rounds both years</li>
            <li>• Contributed to coding, PPT creation, and project presentation</li>
            <li>• Collaborated with team members under tight deadlines</li>
          </ul>
        </div>

        {/* Projects Experience */}
        <div className="group relative h-[300px] rounded-xl border border-border bg-card/40 backdrop-blur-md p-8 transition-all hover:border-primary hover:shadow-[0_0_40px_var(--cyber-glow-primary)]">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

          <h3 className="relative z-10 text-2xl font-semibold mb-2">
            Full-Stack Project Development
          </h3>
          <p className="relative z-10 text-sm text-muted-foreground mb-6">
            Self-driven • Ongoing
          </p>

          <ul className="relative z-10 space-y-3 text-muted-foreground">
            <li>• Built full-stack applications using Next.js & TypeScript</li>
            <li>• Implemented authentication, routing, and API integrations</li>
            <li>• Focused on clean architecture and reusable components</li>
            <li>• Deployed projects using Vercel and Netlify</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
