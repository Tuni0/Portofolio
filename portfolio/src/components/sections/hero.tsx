import { ArrowRightIcon, DownloadIcon, GraduationCapIcon, MapPinIcon } from "lucide-react"
import { m, useReducedMotion } from "motion/react"

import { SocialLinks } from "@/components/social-links"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { degrees } from "@/data/experience"
import { profile } from "@/data/profile"
import { useTypewriter } from "@/hooks/use-typewriter"
import { scrollToSection } from "@/lib/dom"

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export function Hero() {
  const reduceMotion = useReducedMotion()
  const { text, isTyping } = useTypewriter(`${profile.name}.`, { enabled: !reduceMotion })
  const latestDegree = degrees[0]

  // The current role is already in the badge above, so it isn't repeated here.
  const facts = [
    profile.location && { icon: MapPinIcon, label: profile.location },
    latestDegree && { icon: GraduationCapIcon, label: `${latestDegree.degree} ${latestDegree.field}` },
  ].filter(Boolean) as { icon: typeof MapPinIcon; label: string }[]

  return (
    <section id="home" aria-label="Introduction" className="scroll-mt-24 pt-12 pb-16 sm:pt-20 lg:pt-24 lg:pb-24">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
        <div className="order-2 flex min-w-0 flex-col items-start gap-6 lg:order-1">
          <m.div {...fadeUp(0)}>
            <Badge variant="outline" className="h-7 gap-2 rounded-full bg-background/60 px-3 font-normal backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Currently: {profile.currentRole}
            </Badge>
          </m.div>

          <div className="w-full">
            <m.p {...fadeUp(0.05)} className="mb-3 text-sm font-medium text-brand sm:text-base">
              Hi, my name is
            </m.p>
            <h1 className="font-heading text-[clamp(1.9rem,8.5vw,3.75rem)] leading-[1.1] font-bold tracking-tight whitespace-nowrap">
              <span className="sr-only">{profile.name}</span>
              <span aria-hidden="true" className="bg-linear-to-r from-violet-500 via-violet-600 to-indigo-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-violet-500 dark:to-indigo-400">
                {text}
              </span>
              <span
                aria-hidden="true"
                data-typing={isTyping}
                className="ml-1 inline-block h-[0.9em] w-[0.5ch] translate-y-[0.12em] rounded-[2px] bg-brand animate-caret-blink data-[typing=true]:animate-none"
              />
            </h1>
            <m.p {...fadeUp(0.15)} className="mt-4 text-lg font-semibold text-foreground/90 sm:text-2xl">
              {profile.headline}
            </m.p>
          </div>

          <m.p {...fadeUp(0.25)} className="max-w-xl leading-relaxed text-pretty text-muted-foreground">
            {profile.tagline}
          </m.p>

          <m.div {...fadeUp(0.35)} className="flex flex-wrap items-center gap-3">
            <Button size="lg" className="px-4 shadow-lg shadow-primary/25" onClick={() => scrollToSection("projects")}>
              View projects
              <ArrowRightIcon />
            </Button>
            <Button size="lg" variant="outline" className="px-4" onClick={() => scrollToSection("contact")}>
              Get in touch
            </Button>
            {profile.cvUrl && (
              <Button size="lg" variant="ghost" className="px-4" asChild>
                <a href={profile.cvUrl} download>
                  <DownloadIcon />
                  Download CV
                </a>
              </Button>
            )}
            <Separator orientation="vertical" className="mx-1 hidden h-6! sm:block" />
            <SocialLinks variant="outline" size="icon-lg" />
          </m.div>

          <m.ul {...fadeUp(0.45)} className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {facts.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-1.5">
                <Icon className="size-4 text-brand" aria-hidden="true" />
                {label}
              </li>
            ))}
          </m.ul>
        </div>

        <m.div
          className="group relative order-1 mx-auto w-[220px] sm:w-[280px] lg:order-2 lg:mx-0 lg:w-[320px] xl:w-[360px]"
          initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.1, bounce: 0.3, delay: 0.1 }}
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-full bg-linear-to-tr from-violet-500 to-indigo-500 opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
          />
          <div className="relative aspect-[3/4] overflow-hidden rounded-full border-4 border-background shadow-2xl">
            <img
              src={profile.photo.src}
              alt={profile.photo.alt}
              width={900}
              height={1200}
              fetchPriority="high"
              className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          {latestDegree && (
            <Card className="absolute -bottom-3 -left-4 flex-row items-center gap-3 rounded-xl bg-background/85 px-3.5 py-3 shadow-lg backdrop-blur sm:-left-10">
              <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-brand">
                <GraduationCapIcon className="size-4.5" aria-hidden="true" />
              </span>
              <span className="text-left leading-tight">
                <span className="block text-sm font-semibold">{latestDegree.degree} graduate</span>
                <span className="block text-xs text-muted-foreground">Applied CS · PWr</span>
              </span>
            </Card>
          )}
        </m.div>
      </div>
    </section>
  )
}
