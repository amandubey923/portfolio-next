export default function SkillsPage() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto py-28 px-6">
      {/* Heading */}
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A structured overview of my technical skill set, tools, and
          technologies that I actively use to build scalable and
          production-ready applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {/* Programming Languages */}
        <div className="group relative h-70 rounded-xl border border-border bg-card/40 backdrop-blur-md p-8 transition-all hover:border-primary hover:shadow-[0_0_40px_var(--cyber-glow-primary)]">
          <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
          <h3 className="relative z-10 text-2xl font-semibold mb-6">
            Programming Languages
          </h3>
          <ul className="relative z-10 space-y-3 text-muted-foreground">
            <li>• C</li>
            <li>• C++</li>
            <li>• JavaScript</li>
          </ul>
        </div>

        {/* Frontend */}
        <div className="group relative h-70 rounded-xl border border-border bg-card/40 backdrop-blur-md p-8 transition-all hover:border-primary hover:shadow-[0_0_40px_var(--cyber-glow-primary)]">
          <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
          <h3 className="relative z-10 text-2xl font-semibold mb-6">
            Frontend Development
          </h3>
          <ul className="relative z-10 space-y-3 text-muted-foreground">
            <li>• React.js</li>
            <li>• Next.js & Shadcn</li>
            <li>• Tailwind CSS</li>
            <li>• HTML5</li>
            <li>• React Native</li>
            
          </ul>
        </div>

        {/* Backend */}
        <div className="group relative h-70 rounded-xl border border-border bg-card/40 backdrop-blur-md p-8 transition-all hover:border-primary hover:shadow-[0_0_40px_var(--cyber-glow-primary)]">
          <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
          <h3 className="relative z-10 text-2xl font-semibold mb-6">
            Backend Development
          </h3>
          <ul className="relative z-10 space-y-3 text-muted-foreground">
            <li>• Node.js</li>
            <li>• Express.js</li>
            <li>• REST APIs</li>
            <li>• Postman</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="group relative h-70 rounded-xl border border-border bg-card/40 backdrop-blur-md p-8 transition-all hover:border-primary hover:shadow-[0_0_40px_var(--cyber-glow-primary)]">
          <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
          <h3 className="relative z-10 text-2xl font-semibold mb-6">
            Databases
          </h3>
          <ul className="relative z-10 space-y-3 text-muted-foreground">
            <li>• MongoDB</li>
            <li>• SQL</li>
            <li>• Convex</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="group relative h-70 rounded-xl border border-border bg-card/40 backdrop-blur-md p-8 transition-all hover:border-primary hover:shadow-[0_0_40px_var(--cyber-glow-primary)]">
          <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
          <h3 className="relative z-10 text-2xl font-semibold mb-6">
            Tools & Platforms
          </h3>
          <ul className="relative z-10 space-y-3 text-muted-foreground">
            <li>• Git</li>
            <li>• GitHub</li>
            <li>• Vercel</li>
            <li>• Netlify</li>
            <li>• Adobe</li>
          </ul>
        </div>

        {/* Workflow */}
        <div className="group relative h-70 rounded-xl border border-border bg-card/40 backdrop-blur-md p-8 transition-all hover:border-primary hover:shadow-[0_0_40px_var(--cyber-glow-primary)]">
          <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
          <h3 className="relative z-10 text-2xl font-semibold mb-6">
            Development Workflow
          </h3>
          <ul className="relative z-10 space-y-3 text-muted-foreground">
            <li>• Clean Architecture</li>
            <li>• Component-Driven UI</li>
            <li>• API-First Approach</li>
            <li>• Performance Optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
