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
    title: "Love 21 Connect",
    subtitle: "Charity Platform · Morgan Stanley Code to Give Hackathon",
    award: "Pro-Bono Build, Pitched to Morgan Stanley Engineers",
    description:
      "Rebuilt the live site for a Hong Kong charity supporting the Down syndrome, autistic, and neurodiverse community — public volunteering pages, QR-based clock-in with verified hours, recurring donations with automated review, live Instagram updates via webhooks, and AI-assisted resource management.",
    tags: ["Next.js 14", "Prisma", "Turso", "Webhooks"],
    github: "https://github.com/mck0124/team13-love21-connect",
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
    title: "Client Websites",
    subtitle: "Freelance / Internship builds",
    description:
      "A set of production business sites shipped to Vercel — MCM Wealth Management, MCU, SmartHub, and MCF — covering marketing pages, dashboards, and live data integrations.",
    tags: ["Next.js", "TypeScript", "HTML/CSS", "Vercel"],
    live: "https://mcm-website-seven.vercel.app",
    github: "https://github.com/kanan9971?tab=repositories",
  },
];
