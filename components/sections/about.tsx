"use client"

import { useLang } from "../language-provider"
import { ui } from "@/lib/content"
import { FadeIn } from "../fade-in"

export function About() {
  const { lang } = useLang()

  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 flex items-center gap-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            <span className="font-mono normal-case tracking-normal">02</span>
            <span className="h-px w-10 bg-muted-foreground/60" />
            <span>{ui.about.label[lang]}</span>
          </div>
        </FadeIn>

        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <FadeIn className="md:col-span-7">
            <p className="font-serif text-2xl leading-relaxed text-pretty text-foreground md:text-[28px] md:leading-[1.45]">
              {ui.about.bio[lang]}
            </p>
          </FadeIn>

          <FadeIn className="md:col-span-5 md:pt-3" delay={120}>
            <ul className="divide-y divide-border border-y border-border">
              {ui.about.stats.map((s, i) => (
                <li
                  key={i}
                  className="flex items-baseline justify-between gap-4 py-4 text-sm md:text-[15px]"
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 pl-4 text-foreground">{s[lang]}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
