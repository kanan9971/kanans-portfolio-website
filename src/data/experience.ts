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
    company: "Red Bird Racing EVRT · HKUST",
    role: "Embedded Software Team Member",
    period: "Jan 2026 – Present",
    points: [
      "Developed C++ firmware for real-time CAN bus communication, decoding live signals via SAVVY CAN across powertrain and battery systems.",
      "Onboarded data-logging modules processing 500+ data points per second to support pit-crew telemetry for tire and energy management.",
    ],
    tags: ["C++", "CAN Bus", "SAVVY CAN", "Embedded", "Telemetry"],
  },
  {
    company: "MCM Wealth Management",
    role: "IT Intern",
    period: "Apr 2026 – Jun 2026",
    points: [
      "Deployed 3+ full-stack apps including a real-time crypto dashboard integrating live market data for portfolio monitoring.",
      "Remediated critical vulnerabilities across 2 production sites via CVE patching and dependency upgrades, eliminating active malware vectors.",
      "Improved average page-load times by ~40% through bundle and asset refactoring on legacy codebases.",
      "Built and backtested a Stop-and-Reverse FX signal algorithm for USD/EUR on historical data, improving directional accuracy by ~5–7%.",
    ],
    tags: ["Full-Stack", "Security / CVE", "Performance", "Algo Trading"],
  },
  {
    company: "Fusion Asset Management",
    role: "Summer Analyst — Quant & Portfolio Tooling",
    period: "Jul 2026 – Aug 2026",
    points: [
      "Built portfolio-optimization and risk-adjusted-return models across 8 funds, benchmarking against the S&P 500.",
      "Automated quarterly market-outlook reporting to support data-driven investment strategy for institutional clients.",
    ],
    tags: ["Quant Modeling", "Portfolio Optimization", "Python"],
  },
];
