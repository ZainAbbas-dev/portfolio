import { ArrowRight, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import { HeroCanvas } from "@/components/3d/HeroCanvas";
import { MotionHero } from "@/components/Motion";

export function Hero() {
  return (
    <section className="site-container relative flex min-h-screen items-center pb-16 pt-32 sm:pb-20 sm:pt-36">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
        <MotionHero className="relative z-10">
          <div className="availability-pill">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_#6ee7b7]" />
            Available for internship opportunities
          </div>

          <p className="eyebrow mt-8">Full Stack Developer / AI Integration</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-7xl lg:text-[5.4rem]">
            Muhammad
            <span className="gradient-text block">Zain Abbas</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-medium text-violet-300 sm:text-2xl">
            I build modern web platforms with intelligent AI features.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Full-stack developer shipping production applications with secure
            real-time experiences, thoughtful interfaces, and practical AI
            integrations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="hero-primary-button" href="#projects">
              View My Work
              <ArrowRight aria-hidden="true" size={17} />
            </a>
            <a
              className="hero-secondary-button"
              download
              href="/images/resume.pdf"
            >
              Download CV
              <Download aria-hidden="true" size={16} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-slate-400">
            <span>Next.js / React</span>
            <span>Node.js / Python</span>
            <span>Gemini API / OpenCV</span>
          </div>
        </MotionHero>

        <MotionHero
          className="relative mx-auto min-h-[27rem] w-full max-w-[34rem] sm:min-h-[33rem]"
          delay={0.16}
        >
          <HeroCanvas />

          <div className="hero-orbit-glow" />
          <div className="hero-profile-card glass-card-strong">
            <div className="hero-profile-sheen" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-[0.62rem]">MZA / Portfolio</span>
                <Sparkles
                  aria-hidden="true"
                  className="text-violet-300"
                  size={18}
                />
              </div>

              <div className="flex flex-1 items-center justify-center">
                <div className="hero-avatar">
                  <Image
                    alt="Muhammad Zain Abbas"
                    className="hero-profile-image"
                    fill
                    priority
                    sizes="(max-width: 640px) 60vw, 16rem"
                    src="/images/zain-profile-transparent.png"
                  />
                </div>
              </div>

              <div>
                <p className="text-lg font-semibold tracking-tight text-white">
                  Crafting code.
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Integrating intelligence. Building the future.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-platform" />
        </MotionHero>
      </div>
    </section>
  );
}
