"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeroCanvas } from "./3d/HeroCanvas";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Interactive 3D Background specifically for Hero */}
      <HeroCanvas />

      {/* Typography & Image Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pointer-events-none">
        
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
              I don&apos;t just study software — I ship it. Specializing in Next.js, Python, and AI integration to build impactful digital platforms.
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

        {/* Right Column: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:block w-full max-w-lg mx-auto pointer-events-auto group"
        >
          {/* Subtle glow effect behind image on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#C97D4C]/20 to-[#4FD9C7]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* CSS Mask: Image ko bottom se fade karne ke liye */}
          <div 
            className="relative z-10 w-full"
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)' 
            }}
          >
            <Image
              src="/images/hero-profile.png"
              alt="Muhammad Zain Abbas"
              width={600}
              height={600}
              priority
              className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};