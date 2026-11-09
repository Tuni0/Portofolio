import type { ReactNode } from "react"
import { m } from "motion/react"

import { cn } from "@/lib/utils"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

/** Fades content in once when it scrolls into view (transform is skipped for reduced motion via MotionConfig). */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </m.div>
  )
}

interface SectionProps {
  id: string
  index: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  /** Rendered on the right of the heading on wide screens. */
  aside?: ReactNode
  className?: string
  children: ReactNode
}

export function Section({ id, index, eyebrow, title, description, aside, className, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("scroll-mt-24 py-20 sm:py-24", className)}>
      <Reveal className="mb-10 flex flex-col gap-6 sm:mb-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-medium text-brand">
            <span className="text-muted-foreground">{index}.</span> {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          {description && <p className="leading-relaxed text-pretty text-muted-foreground">{description}</p>}
        </div>
        {aside}
      </Reveal>
      {children}
    </section>
  )
}
