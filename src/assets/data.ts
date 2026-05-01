interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  github?: string;
  website?: string;
}

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Gerador",
    description:
      "Generator of valid Brazilian CPF, CNPJ, RG and Credit Card numbers - JSON Pretty - Base64 Encode and Decode - Hash. 💻",
    tags: ["Astro", "Tailwindcss", "Typescript", "Dev Tools"],
    github: "https://github.com/meccin/gerador",
    website: "https://gerador.dev.br",
  },
  {
    id: "2",
    name: "Sleipnir",
    description:
      "Sleipnir is a minimal harness for disciplined AI-assisted development for Claude Code. 🐦‍⬛ Two ravens, one contract. 🐦‍⬛",
    tags: ["Harness Engineering", "SDD", "AI-assisted development"],
    github: "https://github.com/meccin/sleipnir",
  },
  {
    id: "3",
    name: "TabNews App",
    description:
      "TabNews app made with lots of ♥️ and Flutter by the community, for the TabNews (tabnews.com.br) website.",
    tags: ["Flutter", "Dart", "Mobile", "Community"],
    github: "https://github.com/meccin/tabnews-app",
  },
  {
    id: "4",
    name: "Shizukana.nvim",
    description:
      "🌸 A modern, soothing Neovim theme inspired by traditional Japanese aesthetics, focusing on visual comfort and accessibility.",
    tags: ["NeoVim", "Lua", "Terminal Colors", "Accessibility"],
    github: "https://github.com/meccin/shizukana.nvim",
  },
  {
    id: "5",
    name: "Workout Tracker",
    description:
      "A device app to track your training journey inspired by the anime/manhwa Solo Leveling! A 12-week fitness program. 💪🏻",
    tags: ["Rust", "TUI", "CLI", "Healthy"],
    github: "https://github.com/meccin/workout-tracker",
  },
];

export const workExperience: WorkExperience[] = [
  {
    title: "Senior Software Engineer",
    company: "Wise Group",
    period: "2021 - Present",
    description:
      "Developed serverless and scalable platforms using Node.js, TypeScript, and AWS, delivering LLM-powered products and modern web/mobile applications.",
    highlights: [
      "Built robust serverless services with Node.js, TypeScript, MariaDB, AWS Lambdas (including Python) and Kubernetes, while maintaining legacy PHP systems.",
      "Led the development of an enterprise chatbot leveraging LLMs to enhance service conversion and streamline operations.",
      "Delivered web, mobile, and marketplace products using React.js, Vue, React Native, payment integrations, and PHP APIs.",
    ],
  },
  {
    title: "PHP and Mobile Developer",
    company: "Wise Group",
    period: "2019 - 2021",
    description:
      "Developed and maintained scalable APIs and applications using Angular, Laravel, microservices, and React Native.",
    highlights: [
      "Built and sustained REST APIs using Laravel and MariaDB, including microservice-based architectures.",
      "Developed front-end solutions with Angular and delivered mobile apps using React Native.",
      "Implemented automated testing to ensure reliability, performance, and maintainability across services.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "MSWi",
    period: "2013 - 2019",
    description:
      "Developed high-performance, scalable web and mobile solutions while progressing from intern to mid-level and supporting clients across multiple sectors.",
    highlights: [
      "Rapid promotion from intern to mid-level, with strong technical growth and adaptability.",
      "Solid experience in banking integration, tax automation, and high-impact mobile solutions.",
      "Focus on scalability and performance using GCP and containerization (Docker/Kubernetes).",
    ],
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/meccin" },
  { name: "LinkedIn", url: "https://linkedin.com/in/celopeccin" },
];
