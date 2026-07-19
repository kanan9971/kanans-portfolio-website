"use client";

import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 / experience" title="Where I've worked">
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-border sm:block" />
        <div className="space-y-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05}>
              <div className="relative sm:pl-10">
                <span className="absolute left-0 top-1.5 hidden h-4 w-4 rounded-full border-2 border-accent bg-base sm:block" />
                <div className="rounded-2xl border border-border bg-card/50 p-5 sm:p-6">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="text-lg font-semibold text-white">
                      {job.role}
                      <span className="text-accent-soft"> · {job.company}</span>
                    </h3>
                    <span className="shrink-0 font-mono text-xs text-muted">
                      {job.period}
                    </span>
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
