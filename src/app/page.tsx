import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="ambient-background relative isolate min-h-screen overflow-hidden"
        id="home"
      >
        <div className="grid-overlay pointer-events-none absolute inset-0 -z-10" />
        <div className="absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-accent-blue/20 blur-3xl" />
        <div className="absolute -right-20 top-36 -z-10 h-80 w-80 rounded-full bg-accent-violet/20 blur-3xl" />

        <Hero />
        <Projects />
        <Skills />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
