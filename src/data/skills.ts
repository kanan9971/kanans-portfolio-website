export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "C / C++", "TypeScript", "JavaScript", "SQL", "SwiftUI", "HTML / CSS"],
  },
  {
    label: "Web & Backend",
    items: ["React", "Next.js", "FastAPI", "Django", "PostgreSQL", "REST APIs"],
  },
  {
    label: "AI / ML",
    items: ["PyTorch", "scikit-learn", "NumPy", "Pandas", "Chroma", "Ollama", "ComfyUI"],
  },
  {
    label: "Infra & Tools",
    items: ["Docker", "AWS", "Git", "Vercel", "Swagger"],
  },
  {
    label: "Embedded",
    items: ["STM32", "ESP32", "Arduino", "SAVVY CAN", "CAN Bus"],
  },
];

export type Item = {
  title: string;
  detail: string;
  meta?: string;
};

export const leadership: Item[] = [
  {
    title: "PwC AI & Cloud Consulting Day",
    meta: "May 2025 · Selected Attendee",
    detail:
      "Hands-on exposure to end-to-end data-analytics consulting — customer segmentation, predictive modelling, generative-AI enablement, and RegTech — applying prompt engineering and AI-governance frameworks to a stablecoin case study.",
  },
  {
    title: "JPMorgan Takeover Day",
    meta: "Aug 2025 · Selected Participant",
    detail:
      "Selected for JPMorgan's immersive program exploring careers across technology and financial services.",
  },
  {
    title: "Astrix CanSat Team",
    meta: "Jan 2026 – Present · Main Team",
    detail:
      "On the main CanSat team representing HKUST at the international competition in the United States (funded by NASA).",
  },
  {
    title: "24 Hour Race",
    meta: "Oct 2023 · Participant",
    detail:
      "Student-led charity relay that collectively raised over HKD 750,000 for NGOs combating human trafficking across Asia.",
  },
];

export const certifications: string[] = [
  "Google Cybersecurity Foundations",
  "Google — Manage Security Risks",
  "Python Basics — University of Michigan",
  "Quantitative Finance & Algorithmic Trading (Udemy) — In Progress",
  "CompTIA Security+ — In Progress",
];
