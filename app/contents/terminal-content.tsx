"use client"

import { useState, useEffect } from "react"
import { Image } from "~/components/image"

interface TerminalContentProps {
  content: string[]
}

export function TerminalContent({ content }: TerminalContentProps) {
  const [, setCurrentLine] = useState(0)
  const [displayedContent, setDisplayedContent] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    setDisplayedContent([])
    setCurrentLine(0)
    setIsTyping(true)

    const timer = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < content.length) {
          setDisplayedContent((current) => [...current, content[prev]])
          return prev + 1
        } else {
          setIsTyping(false)
          clearInterval(timer)
          return prev
        }
      })
    }, 100)

    return () => clearInterval(timer)
  }, [content])

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleMailClick = (email: string) => {
    window.location.href = `mailto:${email}`
  }

  const renderLine = (line: string, index: number) => {
    if (line.includes("IMAGE_") && line.includes("_PLACEHOLDER")) {
      return <Image key={index} index={index} />
    }

    if (line.includes("LINK:")) {
      const parts = line.split("LINK:")
      const beforeLink = parts[0]
      const urlPart = parts[1]
      const url = urlPart.replace(/[",]/g, "")

      return (
        <div key={index} className="flex">
          <span className="text-gray-600 w-8 text-right mr-4 select-none">{index + 1}</span>
          <span className="text-orange-400">
            {beforeLink}
            <button
              onClick={() => handleLinkClick(url)}
              className="text-cyan-400 hover:text-cyan-300 underline cursor-pointer transition-colors"
            >
              {url}
            </button>
            {urlPart.includes(",") ? "," : ""}
          </span>
        </div>
      )
    }

    if (line.includes("MAILTO:")) {
      const parts = line.split("MAILTO:")
      const beforeLink = parts[0]
      const emailPart = parts[1]
      const email = emailPart.replace(/[",]/g, "")

      return (
        <div key={index} className="flex">
          <span className="text-gray-600 w-8 text-right mr-4 select-none">{index + 1}</span>
          <span className="text-orange-400">
            {beforeLink}
            <button
              onClick={() => handleMailClick(email)}
              className="text-cyan-400 hover:text-cyan-300 underline cursor-pointer transition-colors"
            >
              {email}
            </button>
            {emailPart.includes(",") ? "," : ""}
          </span>
        </div>
      )
    }

    if (line.includes("LOCALTIME")) {
      const localTime = new Date().toLocaleString("en-GB", { timeZone: "Europe/Rome" })

      return (
        <div key={index} className="flex">
          <span className="text-gray-600 w-8 text-right mr-4 select-none">{index + 1}</span>
          <span className="text-red-400">
            {line.replace("LOCALTIME", localTime)}
          </span>
        </div>
      )

    }

    return (
      <div key={index} className="flex">
        <span className="text-gray-600 w-8 text-right mr-4 select-none">{index + 1}</span>
        <span
          className={`${
            line.startsWith("#")
              ? "text-blue-400"
              : line.startsWith("$")
                ? "text-yellow-400"
                  : line.includes(".json") || line.includes(".md")
                    ? "text-purple-400"
                    : line.includes("whoami") || line.includes(".txt")
                      ? "text-red-400"
                      : line.includes("{") || line.includes("}")
                        ? "text-orange-400"
                        : line.includes("ls ~/")
                          ? "text-yellow-300"
                          : line.includes("🎓") || line.includes("📍")
                            ? "text-green-300"
                              : line.includes("imgcat")
                                ? "text-cyan-400"
                                : "text-green-400"
          }`}
        >
          {line}
        </span>
      </div>
    )
  }

  return (
    <div className="space-y-1">
      {displayedContent.map((line, index) => renderLine(line, index))}

      {isTyping && (
        <div className="flex">
          <span className="text-gray-600 w-8 text-right mr-4 select-none">{displayedContent.length + 1}</span>
          <span className="text-green-400 animate-pulse">▊</span>
        </div>
      )}
    </div>
  )
}
