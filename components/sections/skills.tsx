"use client"

import { useLang } from "../language-provider"
import { ui } from "@/lib/content"
import { FadeIn } from "../fade-in"

function resolve(item: string | { es: string; en: string }, lang: "es" | "en") {
  return typeof item === "string" ? item : item[lang]
}

export function Skills() {
  const { lang } = useLang()

  return (
    <section id="skills" className="relative scroll-mt-20 bg-secondary/40 px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-10 flex items-center gap-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            <span className="font-mono normal-case tracking-normal">04</span>
            <span className="h-px w-10 bg-muted-foreground/60" />
            <span>{ui.skills.title[lang]}</span>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 border-b border-border pb-10 md:flex-row md:items-end">
            <h2 className="font-serif max-w-2xl text-balance text-4xl leading-tight text-foreground md:text-6xl">
              {ui.skills.title[lang]}
              <span className="text-muted-foreground">.</span>
            </h2>
            <p className="max-w-md text-pretty text-muted-foreground md:text-right">{ui.skills.intro[lang]}</p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-20">
          <FadeIn>
            <div className="mb-6 flex items-center justify-between border-b border-border pb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              <span>{ui.skills.software.label[lang]}</span>
              <span className="font-mono normal-case tracking-normal">
                {String(ui.skills.software.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {ui.skills.software.items.map((item, i) => (
                <li
                  key={i}
                  className="group flex items-center gap-3 rounded-md border border-border bg-background px-4 py-4 text-sm text-foreground transition-colors hover:border-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-[10px] text-muted-foreground"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-pretty">{resolve(item, lang)}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="mb-6 flex items-center justify-between border-b border-border pb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              <span>{ui.skills.languages.label[lang]}</span>
              <span className="font-mono normal-case tracking-normal">
                {String(ui.skills.languages.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {ui.skills.languages.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-baseline justify-between gap-4 border-b border-border/60 py-3 text-sm"
                >
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-pretty pl-4 text-foreground">{item[lang]}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
