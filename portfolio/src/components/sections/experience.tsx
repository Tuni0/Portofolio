import { BriefcaseIcon, CheckIcon, ExternalLinkIcon, GraduationCapIcon, ScrollTextIcon } from "lucide-react"

import { Reveal, Section } from "@/components/section"
import { TechBadgeList } from "@/components/tech-badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"
import { degrees, jobs } from "@/data/experience"
import type { Degree, Job, Thesis } from "@/data/types"

type Entry = { type: "work"; job: Job } | { type: "education"; degree: Degree }

const entries: Entry[] = [
  ...jobs.map((job): Entry => ({ type: "work", job })),
  ...degrees.map((degree): Entry => ({ type: "education", degree })),
]

function jobPeriod(job: Job) {
  if (job.start) return `${job.start} – ${job.end ?? (job.current ? "Present" : "")}`
  return job.current ? "Present" : ""
}

function entryPeriod(entry: Entry) {
  return entry.type === "work" ? jobPeriod(entry.job) : `${entry.degree.start} – ${entry.degree.end}`
}

function JobCard({ job }: { job: Job }) {
  return (
    <Card className="bg-card/70 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{job.role}</CardTitle>
        {(job.company || job.location) && (
          <CardDescription>
            {job.companyUrl ? (
              <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                {job.company}
              </a>
            ) : (
              job.company
            )}
            {job.company && job.location && " · "}
            {job.location}
          </CardDescription>
        )}
        {job.current && (
          <CardAction>
            <Badge variant="secondary" className="gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              Current role
            </Badge>
          </CardAction>
        )}
      </CardHeader>
      <CardContent className="gap-5">
        <ul className="space-y-2.5">
          {job.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 leading-relaxed text-muted-foreground">
              <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>
        <TechBadgeList ids={job.tech} />
      </CardContent>
    </Card>
  )
}

function ThesisItem({ thesis }: { thesis: Thesis }) {
  const title = thesis.url ? (
    <a href={thesis.url} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
      {thesis.title}
      <ExternalLinkIcon className="ml-1 inline size-3.5 align-[-2px] opacity-60" aria-hidden="true" />
    </a>
  ) : (
    thesis.title
  )

  return (
    <Item variant="muted" size="sm" className="items-start">
      <ItemMedia className="mt-0.5 grid size-8 place-items-center rounded-md bg-primary/10 text-brand">
        <ScrollTextIcon className="size-4" aria-hidden="true" />
      </ItemMedia>
      <ItemContent>
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{thesis.kind}</p>
        <ItemTitle className="line-clamp-none leading-snug">{title}</ItemTitle>
        {thesis.originalTitle && (
          <ItemDescription lang={thesis.originalLang} className="line-clamp-none text-xs italic">
            {thesis.originalTitle}
          </ItemDescription>
        )}
      </ItemContent>
    </Item>
  )
}

function DegreeCard({ degree }: { degree: Degree }) {
  return (
    <Card className="bg-card/70 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {degree.degree} {degree.field}
        </CardTitle>
        <CardDescription>
          {degree.schoolUrl ? (
            <a href={degree.schoolUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
              {degree.school}
            </a>
          ) : (
            degree.school
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="gap-4">
        {degree.specialization && (
          <p className="text-muted-foreground">
            Specialization: <span className="font-medium text-foreground">{degree.specialization}</span>
          </p>
        )}
        {degree.thesis && <ThesisItem thesis={degree.thesis} />}
        <ul className="flex flex-wrap gap-1.5" aria-label="Key topics">
          {degree.topics.map((topic) => (
            <li key={topic}>
              <Badge variant="secondary" className="font-normal">
                {topic}
              </Badge>
            </li>
          ))}
        </ul>
        <Accordion type="single" collapsible className="-mb-4">
          <AccordionItem value="highlights" className="border-t">
            <AccordionTrigger>Program highlights</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {degree.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Experience & education"
      description="Where I work today and how I got here – from electronics engineering to applied computer science."
    >
      <ol className="relative">
        {entries.map((entry, index) => {
          const isWork = entry.type === "work"
          const Icon = isWork ? BriefcaseIcon : GraduationCapIcon
          const period = entryPeriod(entry)
          const isLast = index === entries.length - 1

          return (
            <li
              key={isWork ? entry.job.role : entry.degree.field}
              className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-4 md:grid-cols-[10.5rem_1.75rem_minmax(0,1fr)] md:gap-x-6"
            >
              <div className="hidden pt-6 text-right md:block">
                <p className="text-sm font-semibold text-brand">{period}</p>
                <p className="mt-1 text-xs text-muted-foreground">{isWork ? "Work" : "Education"}</p>
              </div>

              <div className="relative flex justify-center">
                <span className="relative z-10 mt-5 grid size-7 place-items-center rounded-full border bg-background text-brand shadow-[0_0_0_4px_var(--background),0_0_18px_rgba(139,92,246,0.45)]">
                  <Icon className="size-3.5" aria-hidden="true" />
                </span>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute top-12 -bottom-5 w-px bg-linear-to-b from-primary/70 via-border to-border"
                  />
                )}
              </div>

              <Reveal className="min-w-0 pb-10">
                <p className="mb-2 text-xs font-semibold text-brand md:hidden">
                  {period} · {isWork ? "Work" : "Education"}
                </p>
                {isWork ? <JobCard job={entry.job} /> : <DegreeCard degree={entry.degree} />}
              </Reveal>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
