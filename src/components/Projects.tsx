"use client";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects"; //[cite: 14]
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section className="relative w-full bg-[#0B0E14] py-32 z-10" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Massive Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12 mb-16">
          <div>
            <p className="eyebrow text-accent-cool mb-4">SELECTED WORK</p>
            <h2 className="text-[9vw] md:text-[7vw] font-black leading-[0.85] tracking-tighter text-white uppercase">
              FEATURED <br />
              <span className="text-accent-warm">PROJECTS</span>
            </h2>
          </div>

          <a
            className="flex items-center gap-2 group text-muted hover:text-white transition-colors pb-2"
            href="https://github.com/ZainAbbas-dev"
            rel="noreferrer"
            target="_blank"
          >
            <span className="font-mono text-sm font-bold uppercase tracking-widest">View GitHub</span>
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
               <ArrowUpRight aria-hidden="true" size={20} />
            </span>
          </a>
        </div>

        {/* 3D Interactive Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}