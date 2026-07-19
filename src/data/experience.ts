export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "NGMT Ltd",
    role: "Software Engineering Intern",
    period: "Jul 2026 – Sep 2026",
    points: [
      "Architected a generative-AI web platform end-to-end with Next.js, FastAPI, and PostgreSQL, targeting sub-90s generation latency.",
      "Engineered per-creator LoRA training pipelines (Python, PyTorch, kohya-ss) on a studio GPU with async job queuing — automating handle-to-model in under 4 hours.",
      "Containerized the full system with Docker, authored architecture diagrams and runbooks, and enforced security best practices across all API surfaces.",
      "Integrated a ComfyUI-backed inference API with vision analysis and dataset-prep modules to support scalable model deployment.",
    ],
    tags: ["Next.js", "FastAPI", "PostgreSQL", "PyTorch", "Docker", "ComfyUI"],
  },
  {
    company: "Fusion Asset Management",
    role: "Summer Analyst",
    period: "Jul 2026 – Aug 2026",
    points: [
      "Compiled quarterly investment reports by analyzing market outlook to help formulate targeted investment strategies for institutional clients.",
      "Optimized 8 fund portfolios to evaluate risk-adjusted returns using S&P 500 benchmarking and calculated portfolio weightings.",
    ],
    tags: ["Portfolio Analysis", "S&P 500", "Risk-Adjusted Returns"],
  },
  {
    company: "MCM Wealth Management",
    role: "IT Intern",
    period: "Apr 2026 – Jun 2026",
    points: [
      "Deployed 3+ full-stack apps including a real-time crypto dashboard integrating live market data for portfolio monitoring.",
      "Remediated critical vulnerabilities across 2 production sites via CVE patching and dependency upgrades, eliminating active malware vectors.",
      "Improved average page-load times by ~40% through bundle and asset refactoring on legacy codebases.",
      "Refined a Stop-and-Reverse FX algorithm for USD/EUR, backtesting on historical data and improving directional signal accuracy by ~5–7%.",
    ],
    tags: ["Full-Stack", "Security / CVE", "Performance", "FX Algo"],
  },
  {
    company: "Red Bird Racing EVRT · HKUST",
    role: "Embedded Software Team Member",
    period: "Jan 2026 – Present",
    points: [
      "Developed C++ firmware for real-time CAN bus communication, decoding live signals via SAVVY CAN across powertrain and battery systems.",
      "Onboarded data-logging modules processing 500+ data points per second to support pit-crew telemetry for tire and energy management.",
    ],
    tags: ["C++", "CAN Bus", "SAVVY CAN", "Embedded", "Telemetry"],
  },
];
