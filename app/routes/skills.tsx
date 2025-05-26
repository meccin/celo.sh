import { MetaFunction } from "@remix-run/node"
import TerminalLayout from "~/components/terminal-layout"
import { SkillsContent } from "~/contents/skills-content"

export const meta: MetaFunction = () => {
  return [
    { title: 'Marcelo Pecin | Skills' },
    { name: 'description', content: 'Marcelo Pecin 👨🏻‍💻 - Skills' },
  ]
}

export default function Skills() {
  return (
    <TerminalLayout activeTab="skills">
      <SkillsContent />
    </TerminalLayout>
  )
}
