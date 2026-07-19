"use client";

import { Award, BadgeCheck } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { leadership, certifications } from "@/data/skills";

export function Leadership() {
  return (
    <Section id="leadership" eyebrow="05 / more" title="Leadership & credentials">
      <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4">
          {leadership.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card/50 p-5">
                <Award className="mt-0.5 shrink-0 text-accent-soft" size={20} />
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-medium text-white">{item.title}</p>
                    {item.meta && (
                      <span className="font-mono text-xs text-muted">{item.meta}</span>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-soft">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-border bg-card/50 p-5">
            <p className="font-mono text-sm text-accent-soft">Certifications</p>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-soft">
                  <BadgeCheck className="mt-0.5 shrink-0 text-emerald-400" size={16} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
