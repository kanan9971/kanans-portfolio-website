"use client";

import { Brain, Server, Code2, Boxes, Cpu, type LucideIcon } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { skills } from "@/data/skills";

const meta: Record<string, { icon: LucideIcon; span: string; accent: string }> = {
  "AI / ML": {
    icon: Brain,
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    accent: "text-accent-cyan",
  },
  "Web & Backend": {
    icon: Server,
    span: "lg:col-span-1",
    accent: "text-accent-soft",
  },
  Languages: {
    icon: Code2,
    span: "sm:col-span-2 lg:col-span-2",
    accent: "text-accent-soft",
  },
  "Infra & Tools": {
    icon: Boxes,
    span: "lg:col-span-1",
    accent: "text-accent-soft",
  },
  Embedded: {
    icon: Cpu,
    span: "sm:col-span-2 lg:col-span-2",
    accent: "text-emerald-400",
  },
};

export function Skills() {
  return (
    <Section id="skills" eyebrow="04 / stack" title="What I build with">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[9rem]">
        {skills.map((group, i) => {
          const m = meta[group.label] ?? { icon: Boxes, span: "", accent: "text-accent-soft" };
          const Icon = m.icon;
          return (
            <Reveal key={group.label} delay={i * 0.05} className={`h-full ${m.span}`}>
              <div className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card/50 p-5">
                <div className="flex items-center gap-2">
                  <Icon size={18} className={m.accent} />
                  <p className="font-mono text-sm text-white">{group.label}</p>
                </div>
                <div className="mt-3 flex flex-wrap content-start gap-2">
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
          );
        })}
      </div>
    </Section>
  );
}
