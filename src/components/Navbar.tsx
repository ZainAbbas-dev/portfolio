"use client";

import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  // Solid backdrop once the page scrolls so content never runs under the logo
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBackdrop = isScrolled || isMenuOpen;

  return (
    <motion.header
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 px-6 border-b transition-[padding,background-color,border-color] duration-300 ${
        showBackdrop
          ? "py-4 bg-[#0B0E14]/85 backdrop-blur-xl border-white/10"
          : "py-6 bg-transparent border-transparent"
      }`}
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
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-4 right-4 bg-[#0B0E14] border border-white/10 p-6 rounded-2xl flex flex-col gap-6 lg:hidden shadow-2xl">
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