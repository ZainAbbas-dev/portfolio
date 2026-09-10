"use client";

import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]; //[cite: 12]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      className="fixed inset-x-0 top-0 z-50 px-6 pt-6"
      initial={reduceMotion ? false : { opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav aria-label="Main navigation" className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Minimal Logo matching the dark aesthetic */}
        <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-white font-mono text-xl font-bold tracking-widest hover:text-accent-cool transition-colors">
          MZA.
        </a>

        {/* Minimalist Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-muted hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-4 right-4 bg-[#0B0E14]/95 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col gap-6 lg:hidden shadow-2xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-mono font-semibold uppercase tracking-[0.2em] text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </motion.header>
  );
}