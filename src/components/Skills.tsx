"use client";

import { motion } from "framer-motion";
import { skillGroups, skills } from "@/data/skills"; //

export function Skills() {
  return (
    <section className="relative w-full bg-[#0B0E14] py-32 z-10" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Massive Section Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <p className="eyebrow text-accent-cool mb-4 uppercase tracking-[0.2em] font-mono font-bold text-sm">
            Technical Toolkit
          </p>
          <h2 className="text-[8vw] md:text-[7vw] font-black leading-[0.85] tracking-tighter text-white uppercase">
            CORE <br />
            <span className="text-accent-cool">TECHNOLOGIES</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-muted font-medium leading-relaxed">
            A practical stack for building polished interfaces, scalable services, secure real-time systems, and AI-powered experiences. {/*[cite: 15]*/}
          </p>
        </div>

        {/* Skill Groups (Large Brutalist Cards) */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-16">
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden border border-white/10 bg-[#121620] p-8 rounded-2xl hover:border-white/30 transition-colors"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col items-start gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B0E14] border border-white/10 text-accent-warm group-hover:scale-110 transition-transform duration-300">
                    <GroupIcon aria-hidden="true" size={24} strokeWidth={1.5} /> {/*[cite: 15]*/}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase font-sans tracking-tight mb-3">
                      {group.title} {/*[cite: 15]*/}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted font-medium">
                      {group.description} {/*[cite: 15]*/}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Individual Skills (Dense 3D Hover Grid) */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 perspective-[1000px]">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.05, 
                  translateZ: 30,
                  rotateX: 5,
                  rotateY: -5,
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative flex flex-col items-center justify-center gap-4 border border-white/5 bg-[#121620]/50 p-6 rounded-2xl hover:bg-[#121620] hover:border-white/20 transition-all cursor-crosshair shadow-lg"
              >
                <div className="text-white/60 group-hover:text-accent-cool transition-colors duration-300 transform group-hover:translate-z-[20px]">
                  <Icon aria-hidden="true" size={32} strokeWidth={1.5} /> {/*[cite: 15]*/}
                </div>
                <div className="text-center transform group-hover:translate-z-[10px]">
                  <p className="text-sm font-bold text-white tracking-wide">
                    {skill.name} {/*[cite: 15]*/}
                  </p>
                  <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {skill.category} {/*[cite: 15]*/}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}