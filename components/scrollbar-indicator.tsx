"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type Section = {
  id: string
  label: string
}

// Order matches the on-page scroll order: about → projects → skills → contact
const SECTIONS: Section[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

const TICKS_PER_SECTION = 5

export function ScrollBarIndicator() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => {
      const viewportCenter = window.innerHeight / 2
      let bestIdx = 0
      let bestDist = Number.POSITIVE_INFINITY

      SECTIONS.forEach((section, i) => {
        const el = document.getElementById(section.id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const sectionCenter = rect.top + rect.height / 2
        const dist = Math.abs(sectionCenter - viewportCenter)
        if (dist < bestDist) {
          bestDist = dist
          bestIdx = i
        }
      })

      setActiveIndex(bestIdx)

      // Show the indicator once the user scrolls past the hero
      const aboutEl = document.getElementById(SECTIONS[0].id)
      const contactEl = document.getElementById(SECTIONS[SECTIONS.length - 1].id)
      const aboutTop = aboutEl ? aboutEl.getBoundingClientRect().top : Number.POSITIVE_INFINITY
      const contactBottom = contactEl
        ? contactEl.getBoundingClientRect().bottom
        : Number.NEGATIVE_INFINITY

      setVisible(aboutTop <= viewportCenter && contactBottom >= 0)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div
      role="navigation"
      aria-label="Section progress"
      className={cn(
        "pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 sm:flex md:right-6",
        "transition-all duration-500 ease-out",
        visible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
      )}
    >
      <div
        className={cn(
          "pointer-events-auto flex flex-col items-stretch gap-1 rounded-full px-1.5 py-3",
          "bg-foreground/95 shadow-[0_8px_30px_rgb(0,0,0,0.18)] ring-1 ring-foreground/20 backdrop-blur",
        )}
      >
        {SECTIONS.map((section, i) => {
          const isActive = i === activeIndex
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => handleClick(section.id)}
              aria-label={`Go to ${section.label} section`}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "group flex flex-col items-center gap-1.5 rounded-full px-2 py-2",
                "outline-none focus-visible:ring-1 focus-visible:ring-background/60",
                "transition-colors duration-200",
              )}
            >
              <span
                className={cn(
                  "font-mono text-[11px] leading-none tracking-wider tabular-nums",
                  "transition-all duration-300",
                  isActive
                    ? "text-background"
                    : "text-background/35 group-hover:text-background/70",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="flex flex-col items-center gap-[3px]" aria-hidden="true">
                {Array.from({ length: TICKS_PER_SECTION }).map((_, t) => (
                  <span
                    key={t}
                    className={cn(
                      "block h-px w-3 origin-center transition-all duration-300",
                      isActive
                        ? "bg-background/75"
                        : "bg-background/20 group-hover:bg-background/40",
                    )}
                  />
                ))}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
