import { Sparkles } from "lucide-react";
import { skillGroups, skills } from "@/data/skills";
import { MotionItem, MotionReveal, MotionStagger } from "@/components/Motion";

export function Skills() {
  return (
    <section className="site-container section-space scroll-mt-20" id="skills">
      <MotionReveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Technical Toolkit</p>
        <h2 className="mt-4 flex items-center justify-center gap-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Skills & Technologies
          <Sparkles
            aria-hidden="true"
            className="text-violet-300"
            size={22}
          />
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
          A practical stack for building polished interfaces, scalable
          services, secure real-time systems, and AI-powered experiences.
        </p>
      </MotionReveal>

      <MotionStagger className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => {
          const GroupIcon = group.icon;

          return (
            <MotionItem className="skill-group-card" key={group.title}>
              <div className="flex items-start gap-3">
                <div className="skill-group-icon">
                  <GroupIcon aria-hidden="true" size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-muted">
                    {group.description}
                  </p>
                </div>
              </div>
            </MotionItem>
          );
        })}
      </MotionStagger>

      <MotionStagger className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <MotionItem className="skill-card group" key={skill.name}>
              <div className={`skill-icon skill-icon-${skill.accent}`}>
                <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-100">
                {skill.name}
              </p>
              <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                {skill.category}
              </p>
            </MotionItem>
          );
        })}
      </MotionStagger>
    </section>
  );
}
