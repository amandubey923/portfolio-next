import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto py-32 px-6">
      {/* Heading */}
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          A curated selection of projects showcasing my ability to design,
          develop, and deploy scalable, real-world applications using modern
          web technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* PROJECT 1 */}
        <div className="group rounded-2xl border border-border bg-card/40 backdrop-blur-xl overflow-hidden transition hover:border-primary hover:shadow-[0_0_60px_var(--cyber-glow-primary)]">
          {/* Image */}
          <div className="relative h-[240px] w-full overflow-hidden">
            <Image
              src="/projects/project1.png"
              alt="AI Fitness Platform"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 space-y-4">
            <h3 className="text-2xl font-semibold">
              AI Fitness Platform
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              An AI-powered fitness web application that generates personalized
              workout and diet plans based on user input. The platform focuses
              on intelligent recommendations, clean UI, and performance-driven
              architecture to deliver a seamless fitness experience.
            </p>

            <Link
              href="https://ai-fitness-aman.netlify.app/"
              target="_blank"
              className="inline-block text-primary font-medium hover:underline"
            >
              View Live Project →
            </Link>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="group rounded-2xl border border-border bg-card/40 backdrop-blur-xl overflow-hidden transition hover:border-primary hover:shadow-[0_0_60px_var(--cyber-glow-primary)]">
          <div className="relative h-[240px] w-full overflow-hidden">
            <Image
              src="/projects/project2.png"
              alt="Video Calling Interview Platform"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 space-y-4">
            <h3 className="text-2xl font-semibold">
              Video Calling Interview Platform
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              A real-time video calling platform built for conducting technical
              interviews. It supports live video rooms, authentication, and
              smooth peer-to-peer communication with a strong focus on
              reliability and user experience.
            </p>

            <Link
              href="https://video-calling-interview-plattform.netlify.app/"
              target="_blank"
              className="inline-block text-primary font-medium hover:underline"
            >
              View Live Project →
            </Link>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="group rounded-2xl border border-border bg-card/40 backdrop-blur-xl overflow-hidden transition hover:border-primary hover:shadow-[0_0_60px_var(--cyber-glow-primary)]">
          <div className="relative h-[240px] w-full overflow-hidden">
            <Image
              src="/projects/project3.png"
              alt="Library Book Website"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 space-y-4">
            <h3 className="text-2xl font-semibold">
              Library Book Website
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              A responsive library platform that allows users to explore and
              read world-famous books. The project emphasizes clean UI,
              structured content presentation, and smooth navigation for an
              engaging reading experience.
            </p>

            <Link
              href="https://library-book1.netlify.app/index.html"
              target="_blank"
              className="inline-block text-primary font-medium hover:underline"
            >
              View Live Project →
            </Link>
          </div>
        </div>

        {/* PROJECT 4 */}
        <div className="group rounded-2xl border border-border bg-card/40 backdrop-blur-xl overflow-hidden transition hover:border-primary hover:shadow-[0_0_60px_var(--cyber-glow-primary)]">
          <div className="relative h-[240px] w-full overflow-hidden">
            <Image
              src="/projects/project4.png"
              alt="Text Utility App"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 space-y-4">
            <h3 className="text-2xl font-semibold">
              Text Utility Application
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              A productivity-focused text utility web app built with React. It
              provides features like text transformation, word and character
              counting, and formatting tools designed to improve daily writing
              efficiency.
            </p>

            <Link
              href="https://ephemeral-melomakarona-52889a.netlify.app/"
              target="_blank"
              className="inline-block text-primary font-medium hover:underline"
            >
              View Live Project →
            </Link>
          </div>
        </div>

        {/* PROJECT 5 (DEMO) */}
        <div className="group rounded-2xl border border-border bg-card/40 backdrop-blur-xl overflow-hidden opacity-80">
          <div className="relative h-[240px] w-full overflow-hidden">
            <Image
              src="/projects/project5.png"
              alt="Upcoming Project"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 space-y-4">
            <h3 className="text-2xl font-semibold">
              Upcoming Project
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              A new project currently under development. This section will be
              updated soon with detailed information, features, and live demo
              once the project is completed.
            </p>

            <span className="text-muted-foreground italic">
              Coming Soon
            </span>
          </div>
        </div>

        {/* PROJECT 6 (DEMO) */}
        <div className="group rounded-2xl border border-border bg-card/40 backdrop-blur-xl overflow-hidden opacity-80">
          <div className="relative h-[240px] w-full overflow-hidden">
            <Image
              src="/projects/project6.png"
              alt="Future Project"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 space-y-4">
            <h3 className="text-2xl font-semibold">
              Future Project
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              An upcoming idea planned for future implementation. This space is
              reserved for showcasing another impactful project once it goes
              live.
            </p>

            <span className="text-muted-foreground italic">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
