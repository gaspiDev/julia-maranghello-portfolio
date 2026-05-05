"use client"

import { useEffect, useState } from "react"
import { useLang } from "./language-provider"
import { LanguageToggle } from "./language-toggle"
import { ui } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function SiteNav() {
  const { lang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "#projects", label: ui.nav.projects[lang] },
    { href: "#skills", label: ui.nav.skills[lang] },
    { href: "#contact", label: ui.nav.contact[lang] },
  ]

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-5"
        aria-label="Main"
      >
        <a
          href="#top"
          className="font-serif text-base tracking-wide text-foreground md:text-lg"
          aria-label="Julia Maranghello — home"
        >
          Julia Maranghello
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8 text-sm tracking-wide text-foreground/80">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative py-1 transition-colors hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-border text-foreground transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground"
          >
            <Menu
              aria-hidden="true"
              className={cn(
                "absolute h-4 w-4 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                open ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100",
              )}
            />
            <X
              aria-hidden="true"
              className={cn(
                "absolute h-4 w-4 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0",
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "grid overflow-hidden border-border bg-background md:hidden",
          "transition-[grid-template-rows,opacity,border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
          open ? "grid-rows-[1fr] border-t opacity-100" : "grid-rows-[0fr] border-t-transparent opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="min-h-0">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 text-base">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
                  className={cn(
                    "block py-3 text-foreground/80 transition-all duration-300 ease-out hover:text-foreground",
                    open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
