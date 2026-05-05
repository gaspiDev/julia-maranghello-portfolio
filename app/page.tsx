import { LanguageProvider } from "@/components/language-provider"
import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Contact } from "@/components/sections/contact"
import { SiteFooter } from "@/components/sections/footer"
import { ScrollBarIndicator } from "@/components/scrollbar-indicator"

export default function Page() {
  return (
    <LanguageProvider>
      <SiteNav />
      <ScrollBarIndicator />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
