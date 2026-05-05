"use client"

import { useLang } from "./language-provider"
import { cn } from "@/lib/utils"

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang()

  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-0 rounded-full border border-border bg-background/60 p-0.5 text-xs tracking-wider uppercase",
        className,
      )}
      role="group"
      aria-label="Language toggle"
    >
      {/* Sliding active pill */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-0.125rem)] rounded-full bg-foreground",
          "transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform",
          lang === "es" ? "translate-x-0" : "translate-x-full",
        )}
      />

      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={cn(
          "relative z-10 rounded-full px-3 py-1 transition-colors duration-300",
          lang === "es" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "relative z-10 rounded-full px-3 py-1 transition-colors duration-300",
          lang === "en" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        EN
      </button>
    </div>
  )
}
