"use client";

import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Github } from "lucide-react";

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 / projects" title="Things I've built">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.06} className={p.featured ? "sm:col-span-2" : ""}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent-soft hover:bg-surface"
        >
          <Github size={16} /> See more on GitHub
        </a>
      </Reveal>
    </Section>
  );
}
