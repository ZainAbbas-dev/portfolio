"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type MotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.06, staggerChildren: 0.08 },
  },
};

export function MotionReveal({ children, className, delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();
  const { isVisible, ref } = useRevealObserver(reduceMotion);

  return (
    <motion.div
      animate={isVisible ? "visible" : "hidden"}
      className={className}
      custom={delay}
      ref={ref}
      variants={revealVariants}
    >
      {children}
    </motion.div>
  );
}

export function MotionStagger({ children, className }: MotionProps) {
  const reduceMotion = useReducedMotion();
  const { isVisible, ref } = useRevealObserver(reduceMotion);

  return (
    <motion.div
      animate={isVisible ? "visible" : "hidden"}
      className={className}
      ref={ref}
      variants={staggerVariants}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({ children, className }: MotionProps) {
  return (
    <motion.div className={className} variants={revealVariants}>
      {children}
    </motion.div>
  );
}

export function MotionHero({ children, className, delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      transition={{ delay, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function useRevealObserver(reduceMotion: boolean | null) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const element = ref.current;

    if (!element || typeof IntersectionObserver === "undefined") {
      queueMicrotask(() => setHasEnteredViewport(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [reduceMotion]);

  return { isVisible: Boolean(reduceMotion) || hasEnteredViewport, ref };
}
