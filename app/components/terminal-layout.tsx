import { Link } from '@remix-run/react'
import type { ReactNode } from 'react'

const tabs = [
  { id: 'about', label: 'about', path: '/' },
  { id: 'skills', label: 'skills', path: '/skills' },
  { id: 'contact', label: 'contact', path: '/contact' },
]

interface TerminalLayoutProps {
  children: ReactNode
  activeTab: string
}

export default function TerminalLayout({
  children,
  activeTab,
}: TerminalLayoutProps) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-black font-mono text-sm text-green-400">
      <div className="border-b border-gray-800 bg-gray-900">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="mr-4 flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.path}
                className={`rounded-none border-r border-gray-700 px-3 py-1 text-xs transition-colors hover:bg-gray-800 last:border-r-0 ${
                  activeTab === tab.id
                    ? 'bg-black text-green-400'
                    : 'text-gray-500 hover:text-green-400'
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-grow flex-1 overflow-auto p-4">{children}</div>

      <div className="border-t border-gray-800 bg-gray-900 px-4 py-2 text-xs text-gray-500">
        <div className="flex justify-between">
          <span>guest@celo.sh:~$ </span>
          <span>Marcelo Pecin &copy; {new Date().getFullYear()} | All rights reserved</span>
        </div>
      </div>
    </div>
  )
}
