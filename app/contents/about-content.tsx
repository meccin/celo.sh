import { TerminalContent } from "./terminal-content"

const aboutContent = [
  "# Marcelo Pecin - Software developer",
  "imgcat ~/me.jpg",
  "IMAGE_PLACEHOLDER",
  "",
  "# About me",
  "",
  "whoami",
  "Marcelo Pecin - Brazilian software developer based in Italy",
  "",
  "cat ~/bio.txt",
  "Working with development of software, websites, and mobile apps.",
  "I work as PHP developer since 2013, and now too development",
  "with ReactJs and React Native, DevOps, NodeJs, and Flutter.",
  "",
  "Ever looking to learn about my area, and developing new skills",
  "and improving already known.",
  "",
  "ls ~/current_location/",
  "🇮🇹 Italy/ 🇧🇷 Brazil/",
  "",
  "cat ~/education.txt",
  "🎓 Technology of Information",
  "📍 FAE Centro Universitário"
]

export function AboutContent() {
  return <TerminalContent content={aboutContent} />
}
