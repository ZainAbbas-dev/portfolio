"use client";
import { motion } from "framer-motion";
import { HeroCanvas } from "./3d/HeroCanvas";
import { HeroPortrait } from "./HeroPortrait";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-16 lg:py-0">
      {/* Interactive 3D Background specifically for Hero */}
      <HeroCanvas />

      {/* Typography & Image Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pointer-events-none">

        {/* Left Column: Typography */}
        <div className="flex flex-col items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="eyebrow mb-6 text-accent-cool">
              Muhammad Zain Abbas — Full Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="pointer-events-auto"
          >
            {/* Screen split honay ki wajah se font size thora adjust kiya hai taa ke fit aaye */}
            <h1 className="text-[14vw] md:text-[8vw] lg:text-[6.5vw] font-black leading-[0.85] tracking-tighter uppercase text-foreground font-sans">
              SHIPPING <br />
              <span className="text-[#C97D4C]">SOLID CODE</span> <br />
              SINCE 2023
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 pointer-events-auto"
          >
            <p className="max-w-xl text-lg md:text-xl text-muted font-medium leading-relaxed">
              I don&apos;t just study software — I ship it. I build full-stack web platforms with Next.js and Python, and integrate AI where it adds real value.
            </p>
          </motion.div>

          {/* Call to action buttons */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1.1 }}
             className="mt-10 flex gap-4 pointer-events-auto"
          >
            <a href="#projects" className="hero-primary-button">
              Explore Work
            </a>
            <a href="#contact" className="hero-secondary-button">
              Let&apos;s Talk
            </a>
          </motion.div>
        </div>

        {/* Right Column: 3D Profile Portrait (shown on all screen sizes) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative order-first lg:order-none w-full pointer-events-auto"
        >
          <HeroPortrait />
        </motion.div>

      </div>
    </section>
  );
};