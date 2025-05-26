import { TerminalContent } from "./terminal-content"

const skillsContent = [
  "# Technical Skills",
  "",
  "cat ~/skills/backend.json",
  "{",
  '  "languages": ["PHP"],',
  '  "frameworks": ["Laravel", "CakePHP"],',
  '  "apis": ["REST API"],',
  '  "runtime": ["NodeJs"],',
  "}",
  "",
  "cat ~/skills/frontend.json",
  "{",
  '  "frameworks": ["ReactJs", "NextJs", "Angular", "Vue"],',
  '  "languages": ["Javascript", "HTML", "CSS"],',
  '  "mobile": ["React Native", "Flutter", "Ionic"]',
  "}",
  "",
  "cat ~/skills/databases.json",
  "{",
  '  "sql": ["MySQL", "MariaDB", "PostgreSQL"],',
  '  "nosql": ["MongoDB", "DynamoDB", "Firebase"]',
  "}",
  "",
  "cat ~/skills/devops.json",
  "{",
  '  "tools": ["Git", "Docker", "CI/CD"],',
  '  "orchestration": ["Kubernetes"],',
  '  "cloud": ["AWS", "Firebase", "Google Cloud", "Digital Ocean"]',
  "}",
  "",
  "git log --oneline --since='2013'",
  "10+ years of continuous learning and development...",
]

export function SkillsContent() {
  return <TerminalContent content={skillsContent} />
}
