export const jobs = [
  {
    title: "Senior Software Engineer",
    company: "Wise Group",
    period: "2021 — now",
    location: "Remote, from Italy",
    stack: ["Node.js", "TypeScript", "AWS", "Serverless", "Fastify", "Prisma", "MariaDB", "Python", "Kubernetes"],
    bullets: [
      "Tech lead of an LLM chatbot. I own the API (Node.js, Fastify, Prisma, MariaDB) and the AWS infra: Lambda, SQS, SNS, EventBridge, WebSocket, two regions.",
      "Serverless systems for clients, like a tax report on Lambda + DynamoDB that I still update every tax season.",
      "NestJS monorepo with unit tests; web and mobile with Next.js, Nuxt and React Native when needed.",
    ],
  },
  {
    title: "PHP and Mobile Developer",
    company: "Wise Group",
    period: "2019 — 2021",
    location: "Brazil",
    stack: ["Laravel", "Angular", "React Native", "MariaDB"],
    bullets: [
      "A whistleblowing portal in Laravel on AWS, with online payments and a marketplace integration. I kept coming back to it in later phases.",
      "A React Native app that helps small business owners map out their business model.",
      "Portals and internal systems for institutions: document management, an institutional portal, and long-term support on Laravel + Angular systems.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "MSWi",
    period: "2013 — 2019",
    location: "Brazil",
    stack: ["PHP", "GCP", "Docker", "Kubernetes"],
    bullets: [
      "Joined as an intern, left as mid-level.",
      "White-label ERP: Brazilian tax invoices (NF-e, NFC-e, CT-e, MDF-e) and bank slips with CNAB 240/400 reconciliation.",
      "Sites, e-commerces, news portals, an accessible portal (WCAG 2.1 AA), hybrid apps. Hosting on GCP with Docker/K8s.",
    ],
  },
];

// stars: snapshot, refreshed from the GitHub API at build time (see index.astro)
export const projects = [
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
    desc: "Community-built Flutter app for tabnews.com.br, made with lots of love.",
  },
  {
    name: "Shizukana.nvim",
    repo: "meccin/shizukana.nvim",
    stars: 3,
    lang: "Lua",
    desc: "My Neovim colorscheme, inspired by Japanese aesthetics. Moon, Dawn and Dusk variants. This site uses it.",
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
  ["code", "TypeScript, JavaScript, PHP, SQL, Python, Dart, Lua, Rust"],
  ["backend", "Node.js, NestJS, Fastify, Prisma, Laravel, REST APIs, WebSocket"],
  ["ai", "LLMs, RAG, tool calling, Claude Code agents"],
  ["cloud", "AWS (Lambda, SQS, SNS, EventBridge, API Gateway, RDS), Serverless Framework, Docker, Kubernetes, GitLab CI, GCP"],
  ["data", "MariaDB, MySQL, PostgreSQL, DynamoDB, Redis"],
  ["frontend & mobile", "React, Next.js, Vue, Nuxt, Angular, Flutter, React Native"],
  ["spoken", "Portuguese (native), English (working), Italian (basic)"],
];
