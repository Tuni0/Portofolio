import { useState } from "react"
import { AwardIcon, BriefcaseIcon, ChevronRightIcon, FolderGit2Icon, GraduationCapIcon } from "lucide-react"

import { Reveal, Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Separator } from "@/components/ui/separator"
import { getTech, techCategories, techIdsByCategory, type TechId } from "@/data/tech"
import { techUsage, type TechUsage } from "@/data/usage"
import { useProjectDialog } from "@/hooks/use-project-dialog"

const usageIcons = {
  project: FolderGit2Icon,
  job: BriefcaseIcon,
  degree: GraduationCapIcon,
  certificate: AwardIcon,
} satisfies Record<TechUsage["kind"], unknown>

function UsageList({ usages }: { usages: TechUsage[] }) {
  const { openProject } = useProjectDialog()

  if (usages.length === 0) {
    return <p className="px-1.5 text-xs text-muted-foreground">General experience – not tied to a showcased project yet.</p>
  }

  return (
    <ul className="space-y-1">
      {usages.map((usage) => {
        const Icon = usageIcons[usage.kind]
        if (usage.kind === "project") {
          return (
            <li key={usage.label}>
              <button
                type="button"
                onClick={() => openProject(usage.slug)}
                className="group/usage flex w-full items-center gap-2 rounded-md px-1.5 py-1 text-left text-xs transition-colors outline-none hover:bg-muted focus-visible:bg-muted"
              >
                <Icon className="size-3.5 shrink-0 text-brand" aria-hidden="true" />
                <span className="flex-1 truncate">{usage.label}</span>
                <ChevronRightIcon className="size-3.5 opacity-0 transition-opacity group-hover/usage:opacity-100" aria-hidden="true" />
              </button>
            </li>
          )
        }
        return (
          <li key={usage.label} className="flex items-center gap-2 px-1.5 py-1 text-xs text-muted-foreground">
            <Icon className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{usage.label}</span>
          </li>
        )
      })}
    </ul>
  )
}

function SkillChip({ id }: { id: TechId }) {
  const [open, setOpen] = useState(false)
  const { label, icon: Icon } = getTech(id)
  const usages = techUsage.get(id) ?? []
  const projectCount = usages.filter((usage) => usage.kind === "project").length

  return (
    <HoverCard open={open} onOpenChange={setOpen} openDelay={120} closeDelay={100}>
      <HoverCardTrigger asChild>
        {/* click/tap opens it too, so it also works on touch screens */}
        <Badge asChild variant="outline" className="h-8 cursor-pointer gap-2 rounded-lg bg-background/50 px-2.5 text-sm font-normal transition-colors hover:border-primary/50 hover:bg-muted data-[state=open]:border-primary/60 data-[state=open]:bg-muted">
          <button type="button" onClick={() => setOpen(true)} aria-label={`${label} – where I used it`}>
            <Icon className="size-4!" aria-hidden="true" />
            {label}
            {projectCount > 0 && (
              <span className="text-xs text-muted-foreground" aria-hidden="true">
                ×{projectCount}
              </span>
            )}
          </button>
        </Badge>
      </HoverCardTrigger>
      <HoverCardContent align="start" className="w-72 p-3">
        <div className="flex items-center gap-3 px-1.5">
          <span className="grid size-9 place-items-center rounded-lg bg-muted">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-semibold">{label}</p>
            <p className="text-xs text-muted-foreground">
              {projectCount > 0
                ? `Used in ${projectCount} project${projectCount === 1 ? "" : "s"}`
                : "Where I've used it"}
            </p>
          </div>
        </div>
        <Separator className="my-2.5" />
        <UsageList usages={usages} />
      </HoverCardContent>
    </HoverCard>
  )
}

export function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Skills"
      title="Tech stack"
      description="Hover or tap a technology to see where I actually used it – every entry is linked to projects, work or studies."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((category, index) => {
          const ids = techIdsByCategory(category.id)
          if (ids.length === 0) return null
          const Icon = category.icon
          return (
            <Reveal key={category.id} delay={(index % 3) * 0.06} className="h-full">
              <Card className="h-full bg-card/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-semibold">
                    <Icon className="size-4 text-brand" aria-hidden="true" />
                    {category.label}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                  <CardAction>
                    <Badge variant="secondary">{ids.length}</Badge>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-2">
                    {ids.map((id) => (
                      <li key={id}>
                        <SkillChip id={id} />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
