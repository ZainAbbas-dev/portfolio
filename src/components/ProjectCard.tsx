"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects"; //[cite: 13]

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;
  const cardRef = useRef<HTMLDivElement>(null);

  // Framer Motion values for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group w-full perspective-[1000px]"
    >
      <article className="relative h-full flex flex-col justify-between overflow-hidden border border-white/10 rounded-2xl bg-gradient-to-br from-[#121620] to-[#0B0E14] p-8 shadow-2xl transition-colors duration-300 group-hover:border-white/30">
        
        {/* Background Glow Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-accent-warm/10 via-transparent to-accent-cool/10 pointer-events-none" />

        {/* 3D Elevated Content */}
        <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div className={`flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-[#0B0E14] text-white shadow-inner`}>
              <Icon aria-hidden="true" size={28} strokeWidth={1.5} />
            </div>

            {project.liveUrl && (
              <a
                aria-label={`Visit ${project.title} live project`}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:bg-white hover:text-black hover:scale-110"
                href={project.liveUrl}
                rel="noreferrer"
                target="_blank"
              >
                <ArrowUpRight aria-hidden="true" size={20} strokeWidth={2} />
              </a>
            )}
          </div>

          <div className="mt-12">
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-accent-warm mb-3">
              {project.category}
            </p>
            <h3 className="text-3xl font-bold tracking-tight text-white font-sans uppercase">
              {project.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted line-clamp-3">
              {project.description}
            </p>
          </div>
        </div>

        {/* Tech Stack Tags (Elevated) */}
        <div style={{ transform: "translateZ(30px)" }} className="relative z-10 mt-8 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span 
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-mono font-medium text-gray-300 backdrop-blur-md" 
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>

      </article>
    </motion.div>
  );
}