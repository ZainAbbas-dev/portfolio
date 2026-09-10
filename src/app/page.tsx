import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AmbientScene } from "@/components/AmbientScene";

export default function Home() {
  return (
    <>
      {/* Navbar overlay - pointer-events handled so it doesn't block clicks */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="pointer-events-auto">
           <Navbar />
        </div>
      </div>

      {/* Main Content Wrapper - Removed overflow-hidden so the page can scroll naturally */}
      <main className="relative isolate min-h-screen bg-[#0B0E14] overflow-x-hidden text-white" id="home">
        
        {/* Global Ambient Glows & Grid */}
        <AmbientScene />

        {/* All Sections Rendered in Order */}
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer outside the main wrapper for proper layout */}
      <Footer />
    </>
  );
}