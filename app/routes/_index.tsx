import type { MetaFunction } from '@remix-run/node'
import { AboutContent } from '~/contents/about-content'
import TerminalLayout from '~/components/terminal-layout'

export const meta: MetaFunction = () => {
  return [
    { title: 'Marcelo Pecin | Homepage' },
    { name: 'description', content: 'Marcelo Pecin 👨🏻‍💻' },
  ]
}

export default function Index() {
  return (
   <TerminalLayout activeTab="about">
     <AboutContent />
   </TerminalLayout>
  )
}
