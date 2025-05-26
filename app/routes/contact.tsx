import { MetaFunction } from "@remix-run/node"
import TerminalLayout from "~/components/terminal-layout"
import { ContactContent } from "~/contents/contact-content"

export const meta: MetaFunction = () => {
  return [
    { title: 'Marcelo Pecin | Contact' },
    { name: 'description', content: 'Marcelo Pecin 👨🏻‍💻 - Contact' },
  ]
}

export default function Contact() {
  return (
    <TerminalLayout activeTab="contact">
      <ContactContent />
    </TerminalLayout>
  )
}
