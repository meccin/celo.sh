export const jobs = [
  {
    title: "Senior Software Engineer",
    company: "Wise Group",
    period: "2021 — now",
    location: "Remote, from Italy",
    stack: ["Node.js", "TypeScript", "AWS Lambda", "Kubernetes", "MariaDB", "Python", "React", "Vue"],
    bullets: [
      "Built robust serverless services with Node.js, TypeScript, MariaDB, AWS Lambdas (including Python) and Kubernetes, while maintaining legacy PHP systems.",
      "Led the development of an enterprise chatbot leveraging LLMs to enhance service conversion and streamline operations.",
      "Delivered web, mobile, and marketplace products using React.js, Vue, React Native, payment integrations, and PHP APIs.",
    ],
  },
  {
    title: "PHP and Mobile Developer",
    company: "Wise Group",
    period: "2019 — 2021",
    location: "Brazil",
    stack: ["Laravel", "Angular", "React Native", "MariaDB"],
    bullets: [
      "Built and sustained REST APIs using Laravel and MariaDB, including microservice-based architectures.",
      "Developed front-end solutions with Angular and delivered mobile apps using React Native.",
      "Implemented automated testing to ensure reliability, performance, and maintainability across services.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "MSWi",
    period: "2013 — 2019",
    location: "Brazil",
    stack: ["PHP", "GCP", "Docker", "Kubernetes"],
    bullets: [
      "Rapid promotion from intern to mid-level, with strong technical growth and adaptability.",
      "Solid experience in banking integration, tax automation, and high-impact mobile solutions.",
      "Focus on scalability and performance using GCP and containerization (Docker/Kubernetes).",
    ],
  },
];

// stars: snapshot, refreshed from the GitHub API at build time (see index.astro)
export const projects = [
  {
    name: "Gerador",
    repo: "meccin/gerador",
    stars: 26,
    lang: "TypeScript · Astro",
    desc: "Valid Brazilian CPF, CNPJ, RG and credit card generator, plus JSON pretty, Base64 and hashing. Live at gerador.dev.br.",
  },
  {
    name: "TabNews App",
    repo: "meccin/tabnews-app",
    stars: 75,
    lang: "Dart · Flutter",
    desc: "Community-built mobile app for tabnews.com.br, made with lots of ♥ and Flutter.",
  },
  {
    name: "Sleipnir",
    repo: "meccin/sleipnir",
    stars: 2,
    lang: "Shell",
    desc: "A minimal harness for disciplined AI-assisted development with Claude Code. Two ravens, one contract.",
  },
  {
    name: "Yggdrasil",
    repo: "meccin/yggdrasil",
    stars: 4,
    lang: "TypeScript · TUI",
    desc: "Multi-agent dashboard for Claude Code: dispatch N parallel agents on GitLab/GitHub issues in isolated git worktrees.",
  },
  {
    name: "Shizukana.nvim",
    repo: "meccin/shizukana.nvim",
    stars: 3,
    lang: "Lua",
    desc: "A soothing Neovim colorscheme inspired by traditional Japanese aesthetics. Visual comfort and accessibility first.",
  },
  {
    name: "Workout Tracker",
    repo: "meccin/workout-tracker",
    stars: 0,
    lang: "Rust · CLI",
    desc: "Terminal app to track a 12-week fitness program inspired by Solo Leveling.",
  },
];

export const skills = [
  ["code", "TypeScript, JavaScript, PHP, Python, Dart, Rust, Lua"],
  ["backend", "Node.js, Laravel, REST APIs, microservices, serverless, LLM integrations"],
  ["frontend & mobile", "React, Vue, Angular, React Native, Flutter"],
  ["infra", "AWS (Lambda), GCP, Kubernetes, Docker, MariaDB"],
  ["tooling", "Neovim, Claude Code harnesses, CI/CD, automated testing"],
  ["spoken", "Portuguese (native), English, Italian"],
];
