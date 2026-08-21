import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Triyara } from "@/components/sections/Triyara";
import { Projects } from "@/components/sections/Projects";
import { TechMatrix } from "@/components/sections/TechMatrix";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Cursor } from "@/components/ui/Cursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <div aria-hidden className="grain" />
      <ScrollProgress />
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Triyara />
        <Projects />
        <TechMatrix />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
