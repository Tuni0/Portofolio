import { BotIcon, LockIcon, SparklesIcon, UsersIcon, WandSparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { projectKinds } from "@/data/projects"
import type { AiUsage, Project, ProjectStatus } from "@/data/types"
import { cn } from "@/lib/utils"

type IconType = typeof SparklesIcon

const statusConfig: Record<ProjectStatus, { label: string; dot: string }> = {
  completed: { label: "Completed", dot: "bg-emerald-500" },
  "in-progress": { label: "In progress", dot: "bg-amber-500" },
}

const aiConfig: Record<AiUsage, { label: string; icon: IconType }> = {
  "ai-agent": { label: "Integrated AI agent", icon: BotIcon },
  "vibe-coded": { label: "Vibe-coded", icon: WandSparklesIcon },
  "ai-assisted": { label: "AI-assisted", icon: SparklesIcon },
}

/** Team / private / AI flags of a project, in display order. */
function projectFlags(project: Project) {
  const ai = project.ai ? aiConfig[project.ai] : null
  return [
    project.team && { icon: UsersIcon, label: "Team" },
    project.private && { icon: LockIcon, label: "Private" },
    ai && { icon: ai.icon, label: ai.label },
  ].filter(Boolean) as { icon: IconType; label: string }[]
}

export function StatusBadge({ status, className }: { status: ProjectStatus; className?: string }) {
  const { label, dot } = statusConfig[status]
  return (
    <Badge variant="outline" className={cn("gap-1.5", className)}>
      <span className={cn("size-1.5 rounded-full", dot)} aria-hidden="true" />
      {label}
    </Badge>
  )
}

interface ProjectBadgesProps {
  project: Project
  className?: string
  /** Sits on top of the cover image: only kind + status, on a frosted surface. */
  onImage?: boolean
}

/** Kind, status and (unless on an image) the team / private / AI flags as badges. */
export function ProjectBadges({ project, className, onImage = false }: ProjectBadgesProps) {
  const flags = onImage ? [] : projectFlags(project)

  return (
    <div className={cn("flex flex-wrap items-center gap-1.5", className)}>
      <Badge className={cn(onImage && "shadow-sm")}>{projectKinds[project.kind]}</Badge>
      <StatusBadge
        status={project.status}
        className={cn(onImage && "border-transparent bg-background/85 shadow-sm backdrop-blur")}
      />
      {flags.map(({ icon: Icon, label }) => (
        <Badge key={label} variant="outline" className="gap-1">
          <Icon aria-hidden="true" />
          {label}
        </Badge>
      ))}
    </div>
  )
}

/** Compact, text-only flags for project cards. */
export function ProjectFlags({ project, className }: { project: Project; className?: string }) {
  const flags = projectFlags(project)
  if (flags.length === 0) return null

  return (
    <ul className={cn("flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground", className)}>
      {flags.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-1">
          <Icon className="size-3.5" aria-hidden="true" />
          {label}
        </li>
      ))}
    </ul>
  )
}
