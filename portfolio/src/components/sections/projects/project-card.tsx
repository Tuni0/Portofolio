import { ArrowRightIcon } from "lucide-react"
import { FaGithub } from "react-icons/fa6"

import { SmartImage } from "@/components/smart-image"
import { TechBadgeList } from "@/components/tech-badge"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import type { Project } from "@/data/types"
import { cn } from "@/lib/utils"
import { ProjectBadges, ProjectFlags } from "./project-meta"

interface ProjectCardProps {
  project: Project
  onOpen: () => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group/project relative h-full gap-0 bg-card/75 py-0 backdrop-blur-sm transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:ring-primary/40",
        "has-[[data-card-trigger]:focus-visible]:ring-2 has-[[data-card-trigger]:focus-visible]:ring-ring",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      )}
    >
      <div className="relative overflow-hidden border-b">
        <AspectRatio ratio={16 / 10} className="bg-muted">
          <SmartImage
            src={project.cover.src}
            alt={project.cover.alt}
            loading="lazy"
            className={cn(
              "size-full transition-transform duration-700 group-hover/project:scale-105 motion-reduce:transition-none",
              project.cover.fit === "contain" ? "object-contain p-4" : "object-cover object-top"
            )}
          />
        </AspectRatio>
        <ProjectBadges project={project} onImage className="absolute inset-x-3 top-3" />
      </div>

      <CardHeader className="pt-5">
        <CardTitle className="text-base font-semibold leading-snug transition-colors group-hover/project:text-brand">
          {/* Stretched button: the whole card is clickable, the GitHub link stays separately focusable. */}
          <button
            type="button"
            data-card-trigger
            onClick={onOpen}
            className="text-left outline-none after:absolute after:inset-0 after:z-0 after:content-['']"
          >
            {project.title}
          </button>
        </CardTitle>
        <CardDescription className="line-clamp-2">{project.summary}</CardDescription>
      </CardHeader>

      <CardContent className="mt-4 mb-5 flex-1 gap-3">
        <ProjectFlags project={project} />
        <TechBadgeList ids={project.tech} max={4} />
      </CardContent>

      <CardFooter className="justify-between border-t py-3">
        <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover/project:text-foreground">
          Read case study
          <ArrowRightIcon className="size-3.5 transition-transform group-hover/project:translate-x-0.5" aria-hidden="true" />
        </span>
        {project.links.repo && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="relative z-10" asChild>
                <a href={project.links.repo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
                  <FaGithub />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>View source</TooltipContent>
          </Tooltip>
        )}
      </CardFooter>
    </Card>
  )
}
