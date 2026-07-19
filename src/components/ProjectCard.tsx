"use client";

import { Github, ExternalLink, Trophy, Star } from "lucide-react";
import { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`card-hover flex flex-col rounded-2xl border border-border bg-card/50 p-5 sm:p-6 ${
        project.featured ? "sm:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          {project.featured && (
            <span className="mb-2 inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[11px] text-accent-soft">
              <Star size={11} /> Featured
            </span>
          )}
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          {project.subtitle && (
            <p className="text-sm text-muted">{project.subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
              className="rounded-lg p-2 text-soft transition-colors hover:bg-surface hover:text-white"
            >
              <Github size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label="Live site"
              className="rounded-lg p-2 text-soft transition-colors hover:bg-surface hover:text-white"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {project.award && (
        <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-300">
          <Trophy size={12} /> {project.award}
        </p>
      )}

      <p className="mt-3 flex-1 text-sm leading-relaxed text-soft">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-surface/60 px-2.5 py-1 font-mono text-xs text-soft"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
