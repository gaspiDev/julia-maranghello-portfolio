"use client"

import { useLang } from "../language-provider"
import { ui } from "@/lib/content"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const { lang } = useLang()

  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[100svh] flex-col justify-between overflow-hidden px-6 pt-24 pb-6 md:h-auto md:px-10 md:pt-40 md:pb-16"
      style={{
        backgroundImage: "url('/portada-render.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundColor: "var(--background)",
      }}
    >
      {/* Warm cream gradient overlay — heavier where text sits, lighter where the building shows through */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(245,243,239,0.94) 0%, rgba(245,243,239,0.78) 22%, rgba(245,243,239,0.45) 50%, rgba(245,243,239,0.82) 82%, rgba(245,243,239,0.96) 100%)",
        }}
      />

      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center">
        <div className="flex items-center gap-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          <span className="h-px w-10 bg-muted-foreground/60" />
          <span>{ui.hero.eyebrow[lang]}</span>
        </div>

        <h1 className="font-serif mt-6 max-w-5xl text-balance text-[2.75rem] leading-[1.05] tracking-tight text-foreground md:mt-8 md:text-7xl lg:text-[7rem] lg:leading-[1]">
          Julia
          <br />
          <span className="italic text-foreground/90">Maranghello</span>
        </h1>

        <div className="mt-6 grid gap-4 md:mt-12 md:gap-8 md:grid-cols-12">
          <p className="font-serif text-lg leading-snug text-pretty text-foreground md:col-span-7 md:text-3xl lg:text-4xl">
            {ui.hero.headline[lang]}
          </p>
          <div className="md:col-span-5 md:pt-2">
            <p className="text-sm leading-relaxed text-pretty text-foreground/80 md:text-[15px]">
              {ui.hero.subtext[lang]}
            </p>

            <a
              href="#projects"
              className="group mt-5 inline-flex items-center gap-3 rounded-full border border-foreground px-5 py-2.5 text-sm tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground md:mt-8 md:px-6 md:py-3"
            >
              {ui.hero.cta[lang]}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-6 flex w-full max-w-7xl items-end justify-between border-t border-border pt-4 text-[10px] tracking-[0.2em] text-muted-foreground uppercase md:mt-16 md:pt-6 md:text-xs">
        <span>{ui.hero.location[lang]}</span>
        <span className="hidden md:inline">UNR · MATCH arqs</span>
      </div>
    </section>
  )
}
