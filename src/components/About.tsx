"use client";

import { GraduationCap, Cpu, LineChart, Brain } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const pillars = [
  {
    icon: Brain,
    title: "AI / Machine Learning",
    body: "LoRA pipelines, RAG systems, fraud modelling, and on-device inference with PyTorch and modern LLM tooling.",
  },
  {
    icon: LineChart,
    title: "Finance & Consulting",
    body: "Summer analyst experience, portfolio optimization, FX algorithms, and consulting exposure at PwC & JPMorgan.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    body: "Real-time C++ firmware and CAN-bus telemetry for HKUST's Red Bird Racing EV team.",
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="01 / about" title="Who I am">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <div className="space-y-4 text-base leading-relaxed text-soft">
            <p>
              I&apos;m a Computer Engineering student at{" "}
              <span className="text-white">HKUST</span> with an extended major in
              Artificial Intelligence. I like building things end-to-end — from generative-AI
              platforms and ML models to embedded firmware and full-stack web apps.
            </p>
            <p>
              My work sits where <span className="text-white">engineering meets business</span>:
              I&apos;ve shipped production apps at a wealth-management firm, analyzed portfolios as a
              summer analyst, and been selected for programs like{" "}
              <span className="text-white">JPMorgan Takeover Day</span> and the{" "}
              <span className="text-white">PwC AI &amp; Cloud Consulting Day</span>.
            </p>
            <p>
              Outside the terminal you&apos;ll find me on the cricket pitch, in the pool, or out
              for a run.
            </p>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4">
            <GraduationCap className="mt-0.5 shrink-0 text-accent-soft" size={20} />
            <div>
              <p className="font-medium text-white">
                HKUST — B.Eng. Computer Engineering
              </p>
              <p className="text-sm text-muted">
                Extended Major in Artificial Intelligence · 2024 – 2028
              </p>
              <p className="mt-1 text-sm text-soft">
                Coursework: Data Structures &amp; Algorithms, AI/ML (PyTorch), Financial
                Management, Statistics, Information Systems Management.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                <p.icon className="mt-0.5 shrink-0 text-accent-soft" size={20} />
                <div>
                  <p className="font-medium text-white">{p.title}</p>
                  <p className="mt-1 text-sm text-soft">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
