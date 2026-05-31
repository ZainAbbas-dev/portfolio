import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <article className="project-card group">
      <div className="flex items-start justify-between gap-4">
        <div className={`project-icon project-icon-${project.accent}`}>
          <Icon aria-hidden="true" size={24} strokeWidth={1.8} />
        </div>

        {project.liveUrl && (
          <a
            aria-label={`Visit ${project.title} live project`}
            className="project-link"
            href={project.liveUrl}
            rel="noreferrer"
            target="_blank"
          >
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        )}
      </div>

      <p className="mt-6 text-[0.68rem] font-bold uppercase tracking-[0.17em] text-accent-cyan">
        {project.category}
      </p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <span className="project-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
