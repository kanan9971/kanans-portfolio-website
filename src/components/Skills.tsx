"use client";

import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" eyebrow="04 / skills" title="Tools I work with">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-card/50 p-5">
              <p className="font-mono text-sm text-accent-soft">{group.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-surface/60 px-2.5 py-1 text-sm text-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
