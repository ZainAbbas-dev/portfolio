import { ArrowUpRight, Sparkles } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { MotionItem, MotionReveal, MotionStagger } from "@/components/Motion";

export function Projects() {
  return (
    <section className="site-container section-space scroll-mt-20" id="projects">
      <MotionReveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2 className="mt-4 flex items-center gap-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Featured Projects
            <Sparkles
              aria-hidden="true"
              className="text-violet-300"
              size={22}
            />
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Production-minded builds spanning legal tech, secure communication,
            and applied computer vision.
          </p>
        </div>

        <a
          className="view-all-link"
          href="https://github.com/ZainAbbas-dev"
          rel="noreferrer"
          target="_blank"
        >
          View GitHub profile
          <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </MotionReveal>

      <MotionStagger className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <MotionItem key={project.title}>
            <ProjectCard project={project} />
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
}
