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
    title: "Astrix CanSat Team",
    meta: "Jan 2026 – Present · Main Team",
    detail:
      "On the main CanSat team representing HKUST at the international competition in the United States (funded by NASA) — designing a satellite payload for atmospheric data collection during descent.",
  },
  {
    title: "Cricket Team, HKUST",
    meta: "Aug 2026 · Executive Committee Member",
    detail:
      "Executive committee member helping run team operations, training, and match logistics for HKUST's Cricket Team.",
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
