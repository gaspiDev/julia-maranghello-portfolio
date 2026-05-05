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

const TICKS_PER_SECTION = 4

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
        "pointer-events-none fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 sm:flex md:right-4",
        "transition-all duration-500 ease-out",
        visible ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0",
      )}
    >
      <div
        className={cn(
          "pointer-events-auto flex flex-col items-stretch gap-0.5 rounded-full px-1 py-1.5",
          "bg-primary/95 shadow-[0_4px_16px_rgb(28,28,28,0.15)] ring-1 ring-primary/30 backdrop-blur",
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
                "group flex flex-col items-center gap-1 rounded-full px-1.5 py-1",
                "outline-none focus-visible:ring-1 focus-visible:ring-primary-foreground/60",
                "transition-colors duration-200",
              )}
            >
              <span
                className={cn(
                  "font-mono text-[9px] leading-none tracking-wider tabular-nums",
                  "transition-all duration-300",
                  isActive
                    ? "text-primary-foreground"
                    : "text-primary-foreground/30 group-hover:text-primary-foreground/60",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="flex flex-col items-center gap-[2px]" aria-hidden="true">
                {Array.from({ length: TICKS_PER_SECTION }).map((_, t) => (
                  <span
                    key={t}
                    className={cn(
                      "block h-px w-2 origin-center transition-all duration-300",
                      isActive
                        ? "bg-accent"
                        : "bg-primary-foreground/20 group-hover:bg-primary-foreground/40",
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
