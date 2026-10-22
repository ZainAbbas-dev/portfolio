"use client";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";

const orbitChips = [
  { label: "Next.js", className: "left-0 top-[18%]", depth: 110, delay: "-1s" },
  { label: "Python", className: "right-0 top-[36%]", depth: 140, delay: "-3s" },
  { label: "AI", className: "left-[8%] bottom-[26%]", depth: 90, delay: "-5s" },
];

export const HeroPortrait = () => {
  const reduceMotion = useReducedMotion();

  // Pointer driven tilt, layered on top of the always-on idle 3D motion
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 18 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 18 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-16, 16]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      className="portrait-stage relative mx-auto aspect-square w-full max-w-[19rem] sm:max-w-sm lg:max-w-lg"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
    >
      <motion.div className="portrait-3d absolute inset-0" style={{ rotateX, rotateY }}>
        <div className="portrait-3d portrait-idle absolute inset-0">
          {/* Depth glow behind the portrait */}
          <div className="portrait-glow absolute inset-[12%] rounded-full" />

          {/* Orbit rings pass behind and in front of the portrait in 3D space */}
          <div className="portrait-orbit portrait-orbit-warm">
            <span className="portrait-orbit-dot bg-accent-warm text-accent-warm" />
          </div>
          <div className="portrait-orbit portrait-orbit-cool">
            <span className="portrait-orbit-dot bg-accent-cool text-accent-cool" />
          </div>

          <div
            className="absolute inset-0"
            style={{ transform: "translateZ(60px)" }}
          >
            <Image
              src="/images/hero-profile.png"
              alt="Muhammad Zain Abbas"
              width={600}
              height={600}
              priority
              sizes="(min-width: 1024px) 512px, (min-width: 640px) 384px, 304px"
              className="h-full w-full object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.7)]"
              style={{
                maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              }}
            />
          </div>

          {orbitChips.map((chip) => (
            <div
              key={chip.label}
              className={`absolute ${chip.className}`}
              style={{ transform: `translateZ(${chip.depth}px)` }}
            >
              <span className="portrait-chip" style={{ animationDelay: chip.delay }}>
                {chip.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
