"use client";
import { BrainCircuit, Code2, Rocket } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "BUILD WITH PURPOSE",
    description: "I turn product ideas into practical interfaces and dependable full-stack systems.",
    icon: Code2,
  },
  {
    title: "INTEGRATE INTELLIGENCE",
    description: "I use AI where it adds real value, from case categorization to computer vision workflows.",
    icon: BrainCircuit,
  },
  {
    title: "SHIP REAL PRODUCTS",
    description: "My focus is delivery: deployed applications, secure architecture, and useful user experiences.",
    icon: Rocket,
  },
]; //[cite: 5]

export function About() {
  return (
    <section className="relative w-full bg-[#0B0E14] py-32 z-10" id="about">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Massive Section Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <p className="eyebrow text-accent-cool mb-4">ABOUT ME</p>
          <h2 className="text-[8vw] md:text-[6vw] font-black leading-[0.9] tracking-tighter text-white uppercase">
            I&apos;m a <span className="text-accent-warm">selectively skilled</span> <br/>
            full-stack developer.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Image and Philosophy */}
          <div>
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-[#121620] mb-10">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent z-10 opacity-80 pointer-events-none" />
              
              <Image
                alt="Muhammad Zain Abbas"
                src="/images/zain-profile-transparent.png"
                width={600}
                height={600}
                
                className="w-full h-auto object-cover opacity-25 saturate-[0.8] brightness-90 group-hover:opacity-90 transition-all duration-700 ease-in-out"
              />
            </div>
            
            <p className="text-xl md:text-2xl font-medium text-gray-300 leading-relaxed">
              I am a Computer Science student at COMSATS University Islamabad building production-minded applications across web, real-time communication, and applied AI. My work combines strong engineering foundations with a bias toward useful, deployable products.
            </p>
          </div>

          {/* Right Column: Stats & Highlights in brutalist style */}
          <div className="space-y-16">
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-b border-white/10 pb-16">
              <div>
                <p className="text-accent-cool font-mono text-xs font-bold tracking-widest uppercase mb-2">Live Products</p>
                <p className="text-5xl font-black text-white">2+</p>
              </div>
              <div>
                <p className="text-accent-cool font-mono text-xs font-bold tracking-widest uppercase mb-2">CGPA</p>
                <p className="text-5xl font-black text-white">3.50</p>
              </div>
              <div>
                <p className="text-accent-cool font-mono text-xs font-bold tracking-widest uppercase mb-2">Semester</p>
                <p className="text-5xl font-black text-white">Final Year</p>
              </div> {/*[cite: 5] */}
            </div>

            {/* How I Work */}
            <div>
               <p className="eyebrow text-accent-warm mb-8">WHAT I DO</p>
               <div className="space-y-10">
                  {highlights.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex gap-6 group">
                        <div className="mt-1 text-accent-cool/50 group-hover:text-accent-cool transition-colors">
                          <Icon size={32} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 font-mono uppercase tracking-tight">{item.title}</h3>
                          <p className="text-muted leading-relaxed text-lg">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}