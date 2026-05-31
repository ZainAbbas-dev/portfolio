import { BrainCircuit, Code2, Rocket, Sparkles } from "lucide-react";
import { MotionReveal } from "@/components/Motion";

const highlights = [
  {
    title: "Build with purpose",
    description:
      "I turn product ideas into practical interfaces and dependable full-stack systems.",
    icon: Code2,
  },
  {
    title: "Integrate intelligence",
    description:
      "I use AI where it adds real value, from case categorization to computer vision workflows.",
    icon: BrainCircuit,
  },
  {
    title: "Ship real products",
    description:
      "My focus is delivery: deployed applications, secure architecture, and useful user experiences.",
    icon: Rocket,
  },
];

export function About() {
  return (
    <section className="site-container section-space scroll-mt-20" id="about">
      <div className="grid items-start gap-8 lg:grid-cols-[0.86fr_1.14fr]">
        <MotionReveal>
          <p className="eyebrow">About Me</p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            I do not just study software.
            <span className="gradient-text block">I ship it.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
            I am a Computer Science undergraduate at COMSATS University
            Islamabad building production-minded applications across web,
            real-time communication, and applied AI. My work combines strong
            engineering foundations with a bias toward useful, deployable
            products.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            <div className="about-stat">
              <strong>2+</strong>
              <span>Live products</span>
            </div>
            <div className="about-stat">
              <strong>3.40</strong>
              <span>CGPA / 4.00</span>
            </div>
            <div className="about-stat">
              <strong>6th</strong>
              <span>Semester</span>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal className="glass-card p-4 sm:p-5" delay={0.12}>
          <div className="flex items-center gap-2 border-b border-white/8 pb-4">
            <Sparkles
              aria-hidden="true"
              className="text-violet-300"
              size={18}
            />
            <p className="text-sm font-semibold text-white">How I work</p>
          </div>

          <div className="mt-2">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <div className="about-highlight" key={highlight.title}>
                  <div className="about-highlight-icon">
                    <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {highlight.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
