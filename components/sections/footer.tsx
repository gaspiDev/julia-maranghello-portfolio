"use client"

import { useLang } from "../language-provider"
import { ui } from "@/lib/content"
import { LanguageToggle } from "../language-toggle"

export function SiteFooter() {
  const { lang } = useLang()

  return (
    <footer className="border-t border-border px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex flex-col gap-1 text-xs tracking-wide text-muted-foreground">
          <span className="font-serif text-base text-foreground">Julia Maranghello</span>
          <span>
            © 2026 · {ui.footer.designed[lang]}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#top"
            className="text-xs tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            ↑ Top
          </a>
          <LanguageToggle />
        </div>
      </div>
    </footer>
  )
}
