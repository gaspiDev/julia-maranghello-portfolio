"use client"

import { useLang } from "./language-provider"
import { cn } from "@/lib/utils"

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang()

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0 rounded-full border border-border bg-background/60 p-0.5 text-xs tracking-wider uppercase",
        className,
      )}
      role="group"
      aria-label="Language toggle"
    >
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={cn(
          "rounded-full px-3 py-1 transition-colors",
          lang === "es" ? "bg-foreground text-primary-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "rounded-full px-3 py-1 transition-colors",
          lang === "en" ? "bg-foreground text-primary-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        EN
      </button>
    </div>
  )
}
