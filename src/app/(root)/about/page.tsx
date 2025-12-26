import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-40">
      {/* ===================== HERO ROW ===================== */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            About{" "}
            <span className="text-primary underline underline-offset-8">
              Me
            </span>
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            More than just a{" "}
            <span className="font-semibold text-foreground">developer</span> —  
            a thinker, builder, and lifelong learner driven by{" "}
            <span className="font-semibold text-foreground">discipline</span>,{" "}
            <span className="font-semibold text-foreground">philosophy</span>,
            and a deep curiosity about how systems, people, and the world truly
            work.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            I believe clarity in thinking creates clarity in execution. I do not
            chase shortcuts — I build foundations.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative w-[360px] h-[440px] rounded-2xl overflow-hidden border border-border bg-card/30 backdrop-blur-md shadow-[0_0_80px_var(--cyber-glow-primary)]">
            <Image
              src="/aman/image.png" // dummy image
              alt="Aman Kumar"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-80 animate-bounce">
          <span className="text-xs tracking-widest text-muted-foreground">
            SCROLL
          </span>
          <div className="h-10 w-[2px] bg-primary/60 rounded-full" />
        </div>
      </div>

      {/* ===================== WHO I AM + PERSPECTIVE ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold underline underline-offset-6">
            Who I Am
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            My name is{" "}
            <span className="font-semibold text-foreground">Aman Kumar</span>, a
            disciplined and goal-driven Information Technology undergraduate at
            Chandigarh Group of Colleges, Landran.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            I approach technology not merely as a tool, but as a{" "}
            <span className="font-semibold text-foreground">
              system for solving real-world problems
            </span>{" "}
            with clarity, logic, and long-term impact.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            I value structure over chaos, fundamentals over shortcuts, and{" "}
            <span className="font-semibold text-foreground">
              consistency over motivation
            </span>.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold underline underline-offset-6">
            My Perspective
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            I see the world as an{" "}
            <span className="font-semibold text-foreground">
              interconnected system
            </span>{" "}
            — where technology, psychology, philosophy, and human behavior
            overlap.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            This mindset allows me to build solutions that are not only
            technically correct, but also{" "}
            <span className="font-semibold text-foreground">
              intuitive, human-centric, and scalable
            </span>.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            I am deeply interested in stoicism, self-mastery, discipline, and the
            idea of continuous self-improvement.
          </p>
        </div>
      </div>

      {/* ===================== HIGHLIGHT CARDS ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-36">
        {[
          {
            title: "Mindset",
            text:
              "I operate with a long-term, growth-oriented mindset. I focus on daily improvement, deep work, and becoming resilient under pressure.",
          },
          {
            title: "Interests",
            text:
              "Philosophy, fitness, analytical thinking, and observing how systems — both technical and human — behave under constraints.",
          },
          {
            title: "Learning",
            text:
              "Alongside software engineering, I am currently learning the German language to expand global exposure and structured thinking.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group relative rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-10 transition-all hover:border-primary hover:shadow-[0_0_60px_var(--cyber-glow-primary)]"
          >
            <h3 className="text-2xl font-semibold mb-4 underline underline-offset-4">
              {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* ===================== LEARNING & DISCIPLINE ===================== */}
      <div className="max-w-4xl space-y-6 mb-28">
        <h2 className="text-3xl font-semibold underline underline-offset-6">
          Discipline & Growth
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          My journey is built on discipline, not motivation. I believe real
          growth happens when effort continues even when excitement fades.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          I consistently sharpen my problem-solving skills, improve my
          communication, and refine my understanding of system design and
          architecture.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Learning German has strengthened my patience, structure, and
          consistency — qualities that directly translate into my engineering
          mindset.
        </p>
      </div>

      {/* ===================== CLOSING ===================== */}
      <div className="max-w-4xl">
        <h2 className="text-3xl font-semibold underline underline-offset-6 mb-6">
          Looking Ahead
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          My goal is to build impactful products, grow as an engineer, and
          contribute to systems that genuinely matter.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          I am not chasing quick success — I am building mastery, depth, and a
          career aligned with clarity of thought and strength of character.
        </p>
      </div>
    </section>
  );
}
