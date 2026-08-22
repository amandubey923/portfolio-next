import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col space-y-10 md:space-y-16">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. ABOUT SECTION */}
      <About />

      {/* 3. PROJECTS SECTION */}
      <Projects />

      {/* 4. SKILLS SECTION */}
      <Skills />

      {/* 5. EXPERIENCE SECTION */}
      <Experience />

      {/* 6. CONTACT SECTION */}
      <Contact />
    </div>
  );
}
