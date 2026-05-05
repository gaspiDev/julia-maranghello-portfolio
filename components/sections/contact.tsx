"use client"

import { useLang } from "../language-provider"
import { ui } from "@/lib/content"
import { Phone, Mail, Linkedin, MapPin, ArrowDownToLine } from "lucide-react"
import { FadeIn } from "../fade-in"

export function Contact() {
  const { lang } = useLang()

  const items = [
    { icon: Phone, label: ui.contact.phone, href: `tel:${ui.contact.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: ui.contact.email, href: `mailto:${ui.contact.email}` },
    { icon: Linkedin, label: ui.contact.linkedin, href: `https://${ui.contact.linkedin}` },
    { icon: MapPin, label: ui.contact.location[lang], href: null },
  ] as const

  return (
    <section id="contact" className="relative scroll-mt-20 px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="mb-10 flex items-center gap-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            <span className="font-mono normal-case tracking-normal">04</span>
            <span className="h-px w-10 bg-muted-foreground/60" />
            <span>{ui.contact.title[lang]}</span>
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="font-serif max-w-3xl text-balance text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            {ui.contact.line[lang]}
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {ui.contact.sub[lang]}
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {items.map((item, i) => {
                const Icon = item.icon
                const content = (
                  <span className="flex items-center gap-5 py-5">
                    <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground transition-colors group-hover:text-foreground">{item.label}</span>
                  </span>
                )
                return (
                  <li key={i}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex items-center justify-between text-sm text-foreground transition-colors md:text-base"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {content}
                        <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase transition-colors group-hover:text-foreground">
                          →
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center justify-between text-sm md:text-base">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </FadeIn>

          <FadeIn className="md:col-span-5" delay={150}>
            <div className="flex h-full flex-col items-start justify-between gap-8 rounded-md border border-border bg-secondary/40 p-8 md:p-10">
              <div>
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">CV · 2026</p>
                <p className="font-serif mt-3 text-2xl leading-snug text-foreground md:text-3xl">
                  Julia Maranghello
                  <br />
                  <span className="italic text-muted-foreground">Architecture portfolio</span>
                </p>
              </div>
              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-foreground/85"
              >
                {ui.contact.cv[lang]}
                <ArrowDownToLine className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
