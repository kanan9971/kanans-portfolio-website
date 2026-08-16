"use client";

import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { experience } from "@/data/experience";

function ExperienceCard({
  job,
  featured = false,
}: {
  job: (typeof experience)[number];
  featured?: boolean;
}) {
  return (
    <div
      className={`card-hover flex h-full flex-col rounded-2xl border border-border bg-card/50 p-5 sm:p-6 ${
        featured ? "sm:p-7" : ""
      }`}
    >
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <h3 className={featured ? "text-xl font-semibold text-white" : "text-lg font-semibold text-white"}>
          {job.role}
          <span className="block text-accent-soft sm:inline"> · {job.company}</span>
        </h3>
        <span className="shrink-0 font-mono text-xs text-muted">{job.period}</span>
      </div>
      <ul className="mt-4 space-y-2">
        {job.points.map((pt, j) => (
          <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-soft">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
            {pt}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags.map((t) => (
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

export function Experience() {
  const [flagship, ...rest] = experience;

  return (
    <Section id="experience" eyebrow="02 / experience" title="Where I've worked">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Reveal className="sm:col-span-3">
          <ExperienceCard job={flagship} featured />
        </Reveal>
        {rest.map((job, i) => (
          <Reveal key={job.company} delay={0.05 + i * 0.05}>
            <ExperienceCard job={job} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
