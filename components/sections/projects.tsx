"use client"

import { useMemo, useState } from "react"
import { useLang } from "../language-provider"
import { projects, ui, type Project } from "@/lib/content"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import { FadeIn } from "../fade-in"

type Filter = "all" | "academic" | "professional"

function ProjectImage({ name, ratio = "16/9" }: { name: string; ratio?: "16/9" | "4/3" }) {
  return (
    <div
      className="relative w-full overflow-hidden bg-secondary"
      style={{ aspectRatio: ratio }}
      aria-label={`${name} — image placeholder`}
      role="img"
    >
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Diagonal architectural lines */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-accent"
        preserveAspectRatio="none"
        viewBox="0 0 400 225"
      >
        <line x1="0" y1="225" x2="400" y2="0" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1="0" y1="180" x2="400" y2="45" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <rect
          x="60"
          y="80"
          width="120"
          height="100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.6"
        />
        <rect
          x="200"
          y="50"
          width="160"
          height="130"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </svg>
      <div className="absolute inset-0 flex items-end justify-between p-4 md:p-6">
        <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">{name}</span>
        <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground/70 uppercase">— Image</span>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project
  featured?: boolean
}) {
  const { lang } = useLang()
  const category = ui.projects.categoryLabel[project.category][lang]

  return (
    <article
      className={cn(
        "group relative flex flex-col gap-5",
        featured ? "md:gap-7" : "",
      )}
    >
      <div className="relative overflow-hidden">
        <ProjectImage name={project.title[lang]} ratio={featured ? "16/9" : "4/3"} />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/40">
          <span className="flex translate-y-2 items-center gap-2 text-sm tracking-wide text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {ui.projects.view[lang]}
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        {project.status && (
          <div className="absolute top-3 left-3 rounded-full border border-foreground/20 bg-background/80 px-3 py-1 text-[10px] tracking-[0.18em] text-foreground uppercase backdrop-blur-sm">
            {project.status[lang]}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">{category}</span>
          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>
        <h3
          className={cn(
            "font-serif text-pretty text-foreground",
            featured ? "text-3xl leading-tight md:text-4xl" : "text-xl leading-tight md:text-2xl",
          )}
        >
          {project.title[lang]}
        </h3>
        <p
          className={cn(
            "text-pretty text-muted-foreground leading-relaxed",
            featured ? "text-base md:text-lg md:max-w-2xl" : "text-sm",
          )}
        >
          {project.description[lang]}
        </p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {project.tags[lang].map((t) => (
            <li
              key={t}
              className="rounded-full border border-border px-3 py-1 text-[11px] tracking-wide text-foreground/70"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function Projects() {
  const { lang } = useLang()
  const [filter, setFilter] = useState<Filter>("all")

  const filtered = useMemo(() => {
    if (filter === "all") return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  // Build editorial layout: alternate featured (full-width) with grid pairs
  const layout = useMemo(() => {
    const result: Array<{ type: "featured"; project: Project } | { type: "pair"; projects: Project[] }> = []
    const queue = [...filtered]
    let toggle = true
    while (queue.length) {
      const featuredIndex = queue.findIndex((p) => p.featured)
      if (toggle && featuredIndex !== -1) {
        const [feat] = queue.splice(featuredIndex, 1)
        result.push({ type: "featured", project: feat })
      } else {
        const pair = queue.splice(0, 2)
        if (pair.length) result.push({ type: "pair", projects: pair })
      }
      toggle = !toggle
    }
    return result
  }, [filtered])

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: ui.projects.filters.all[lang] },
    { key: "academic", label: ui.projects.filters.academic[lang] },
    { key: "professional", label: ui.projects.filters.professional[lang] },
  ]

  return (
    <section id="projects" className="relative scroll-mt-20 px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-10 flex items-center gap-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            <span className="font-mono normal-case tracking-normal">02</span>
            <span className="h-px w-10 bg-muted-foreground/60" />
            <span>{ui.projects.title[lang]}</span>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 border-b border-border pb-10 md:flex-row md:items-end">
            <h2 className="font-serif max-w-2xl text-balance text-4xl leading-tight text-foreground md:text-6xl">
              {ui.projects.title[lang]}
              <span className="text-muted-foreground">.</span>
            </h2>
            <p className="max-w-md text-pretty text-muted-foreground md:text-right">{ui.projects.intro[lang]}</p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="my-10 flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs tracking-wide transition-colors",
                  filter === f.key
                    ? "border-foreground bg-foreground text-primary-foreground"
                    : "border-border text-foreground/70 hover:border-foreground hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
            <span className="ml-auto font-mono text-xs text-muted-foreground">
              {String(filtered.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-20 md:gap-28">
          {layout.map((row, idx) =>
            row.type === "featured" ? (
              <FadeIn key={`f-${row.project.id}-${idx}`}>
                <ProjectCard project={row.project} featured />
              </FadeIn>
            ) : (
              <div key={`p-${idx}`} className="grid gap-12 md:grid-cols-2 md:gap-10">
                {row.projects.map((p, i) => (
                  <FadeIn key={p.id} delay={i * 80}>
                    <ProjectCard project={p} />
                  </FadeIn>
                ))}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
