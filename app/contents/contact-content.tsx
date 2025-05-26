import { TerminalContent } from "./terminal-content"

const contactContent = [
  "# Get in Touch",
  "",
  "cat ~/contact.json",
  "{",
  '  "name": "Marcelo Pecin",',
  '  "email": "MAILTO:hello@celo.sh",',
  '  "role": "Software Developer",',
  '  "specialties": ["PHP", "NodeJs", "React", "Flutter"],',
  '  "github": "LINK:https://github.com/avuenja",',
  '  "linkedin": "LINK:https://www.linkedin.com/in/celopeccin",',
  '  "instagram": "LINK:https://www.instagram.com/celopeccin",',
  '  "location": "Italy 🇮🇹",',
  '  "time": "LOCALTIME"',
  "}",
  "",
  "# Quick contact methods:",
  "echo 'Hey Marcelo! Let`s talk a little ;3' | mail -s 'Contact from site' MAILTO:hello@celo.sh",
  "",
]

export function ContactContent() {
  return <TerminalContent content={contactContent} />
}
