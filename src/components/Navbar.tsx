"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

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
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      initial={reduceMotion ? false : { opacity: 0, y: -18 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        aria-label="Main navigation"
        className="site-container glass-navbar relative flex min-h-16 items-center justify-between px-4 sm:px-6"
      >
        <a
          aria-label="Muhammad Zain Abbas home"
          className="gradient-text text-xl font-bold tracking-tight sm:text-2xl"
          href="#home"
          onClick={() => setIsMenuOpen(false)}
        >
          MZA
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="connect-button hidden sm:flex" href="#contact">
          Let&apos;s Connect
          <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
        </a>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="nav-menu-button lg:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isMenuOpen && (
          <div className="mobile-nav-panel absolute inset-x-0 top-[calc(100%+0.75rem)] z-[60] overflow-hidden rounded-2xl border border-white/20 bg-[#050919]/98 p-2 shadow-2xl backdrop-blur-3xl lg:hidden">
            {navItems.map((item) => (
              <a
                className="mobile-nav-link"
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="connect-button mt-2 flex justify-center sm:hidden"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Let&apos;s Connect
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
            </a>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
