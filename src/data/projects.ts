export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  award?: string;
};

export const projects: Project[] = [
  {
    title: "ContractLens",
    subtitle: "AI Legal Companion",
    award: "Top 8 of 65 · Hack the East 2026",
    description:
      "A Chrome extension + web dashboard that translates dense legal documents into plain English — delivering summaries, risk flags, and clause breakdowns. Built in 24 hours; backend processes docs in under 3 seconds with 90%+ clause-detection accuracy.",
    tags: ["React", "Vite", "FastAPI", "AWS Lambda", "MiniMax LLM"],
    github: "https://github.com/kanan9971/Hack-the-east",
    featured: true,
  },
  {
    title: "Retrieval-Augmented Generation API",
    subtitle: "Production RAG service",
    description:
      "A production-ready RAG API with REST query and ingestion endpoints, automatic chunking and embedding, a Chroma vector store, Ollama-backed inference, Swagger UI docs, and a containerized DevOps deployment.",
    tags: ["FastAPI", "Chroma", "Ollama", "Docker", "Swagger"],
    github: "https://github.com/kanan9971/rag-api-project",
    featured: true,
  },
  {
    title: "Credit Card Fraud Detection",
    subtitle: "ML for Payments Risk",
    description:
      "A fraud classifier trained on real transaction data under heavy class imbalance. Engineered and scaled features, applied class weighting, and modeled threshold trade-offs for a real-time authorization pipeline — optimizing F1 and ROC-AUC.",
    tags: ["Python", "XGBoost", "scikit-learn", "Pandas"],
    github: "https://github.com/kanan9971/Credit_card_Fraud_system",
  },
  {
    title: "KavaIOS",
    subtitle: "AI Food-Waste App",
    award: "GenAI Hackathon · UN SDG 12",
    description:
      "An iOS prototype for food-inventory tracking, expiry reminders, and LLM-powered recipe generation using on-device object detection. Delivered a working demo addressing responsible consumption within a hackathon timeframe.",
    tags: ["SwiftUI", "On-Device ML", "LLM"],
  },
  {
    title: "Astrix CanSat",
    subtitle: "NASA-Funded Satellite Payload",
    description:
      "A soft-drink-can-sized satellite payload built to collect and transmit atmospheric data during descent — representing HKUST at the international CanSat Competition in the United States.",
    tags: ["Embedded", "Sensors", "Telemetry", "Hardware"],
  },
  {
    title: "Client Websites",
    subtitle: "Freelance / Internship builds",
    description:
      "A set of production business sites shipped to Vercel — MCM Wealth Management, MCU, SmartHub, and MCF — covering marketing pages, dashboards, and live data integrations.",
    tags: ["Next.js", "TypeScript", "HTML/CSS", "Vercel"],
    live: "https://mcm-website-seven.vercel.app",
    github: "https://github.com/kanan9971?tab=repositories",
  },
  {
    title: "Forge",
    subtitle: "Next.js web app",
    description:
      "A Next.js application scaffold with the App Router, optimized fonts, and a deploy-ready architecture — used as a base for rapid product prototyping.",
    tags: ["Next.js", "TypeScript", "React"],
    github: "https://github.com/kanan9971/forge",
  },
  {
    title: "NeetCode Submissions",
    subtitle: "DSA practice",
    description:
      "An ongoing collection of data-structures & algorithms solutions in C++, worked through NeetCode's problem set to sharpen problem-solving fundamentals.",
    tags: ["C++", "Algorithms", "Data Structures"],
    github: "https://github.com/kanan9971/neetcode-submissions",
  },
];
