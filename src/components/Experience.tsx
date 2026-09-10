"use client";

import { Award, GraduationCap, UsersRound } from "lucide-react";
import { motion } from "framer-motion";

const educationHighlights = [
  "BS Computer Science",
  "COMSATS University Islamabad",
  "Graduation: 2027",
  "CGPA: 3.50 / 4.00",
]; {/*[cite: 8] */}

export function Experience() {
  return (
    <section className="relative w-full bg-[#0B0E14] py-32 z-10" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Massive Section Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <p className="eyebrow text-accent-cool mb-4 uppercase tracking-[0.2em] font-mono font-bold text-sm">
            Learning & Growth {/*[cite: 8] */}
          </p>
          <h2 className="text-[8vw] md:text-[6vw] font-black leading-[0.85] tracking-tighter text-white uppercase">
            EDUCATION & <br />
            <span className="text-[#C97D4C]">EXPERIENCE</span> {/*[cite: 8] */}
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-muted font-medium leading-relaxed">
            Building a strong academic foundation while applying it through shipped products, professional certificates, and developer community involvement. {/*[cite: 8] */}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Main Education Card with 3D Hover */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
            style={{ transformStyle: "preserve-3d" }}
            className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-[#121620] to-[#0B0E14] p-10 rounded-3xl shadow-2xl transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-warm/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B0E14] border border-white/10 text-white">
                  <GraduationCap aria-hidden="true" size={32} /> {/*[cite: 8] */}
                </div>
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent-cool mb-1">2023 / 2027</p> {/*[cite: 8] */}
                  <h3 className="text-2xl font-bold tracking-tight text-white uppercase">BS Computer Science</h3> {/*[cite: 8] */}
                </div>
              </div>

              <p className="text-xl font-medium text-accent-warm mb-6">COMSATS University Islamabad</p> {/*[cite: 8] */}
              <p className="text-muted leading-relaxed text-lg mb-10">
                Currently in the final year, focused on full-stack software engineering and practical AI integration alongside coursework in algorithms, databases, networks, and computer vision. {/*[cite: 8] */}
              </p>

              <div className="flex flex-wrap gap-3">
                {educationHighlights.map((item) => (
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono font-medium text-gray-300" key={item}>
                    {item} {/*[cite: 8] */}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Secondary Cards Column */}
          <div className="grid gap-6">
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group border border-white/10 bg-[#121620]/80 p-8 rounded-3xl hover:bg-[#121620] hover:border-white/20 transition-colors"
            >
              <Award aria-hidden="true" size={28} className="text-[#C97D4C] mb-6" /> {/*[cite: 8] */}
              <h3 className="text-xl font-bold text-white uppercase mb-3">Professional Certificates</h3> {/*[cite: 8] */}
              <p className="text-muted leading-relaxed">
                Meta Front-End Developer and Google IT Automation with Python professional certificates through Coursera. {/*[cite: 8] */}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group border border-white/10 bg-[#121620]/80 p-8 rounded-3xl hover:bg-[#121620] hover:border-white/20 transition-colors"
            >
              <UsersRound aria-hidden="true" size={28} className="text-[#4FD9C7] mb-6" /> {/*[cite: 8] */}
              <h3 className="text-xl font-bold text-white uppercase mb-3">Developer Community</h3> {/*[cite: 8] */}
              <p className="text-muted leading-relaxed">
                Active volunteer with GDGoC COMSATS and IEEE Society, supporting technical workshops, developer sessions, and student events. {/*[cite: 8] */}
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}