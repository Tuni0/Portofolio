import { useEffect, useState } from "react"

import { CarouselDots } from "@/components/carousel-dots"
import { Reveal, Section } from "@/components/section"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { projectKinds, projects } from "@/data/projects"
import type { ProjectKind } from "@/data/types"
import { useProjectDialog } from "@/hooks/use-project-dialog"
import { ProjectCard } from "./project-card"

type Filter = "all" | ProjectKind

const kinds = Object.keys(projectKinds).filter((kind) =>
  projects.some((project) => project.kind === kind)
) as ProjectKind[]

const countByKind = (kind: ProjectKind) => projects.filter((project) => project.kind === kind).length

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all")
  const [api, setApi] = useState<CarouselApi>()
  const { openProject } = useProjectDialog()

  const visible = filter === "all" ? projects : projects.filter((project) => project.kind === filter)

  // Embla re-initialises itself when slides change; start the filtered list from the beginning.
  useEffect(() => {
    api?.scrollTo(0, true)
  }, [api, filter])

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Featured work"
      description="Case-study style breakdowns focused on real problems, engineering trade-offs and production-ready decisions."
    >
      <Reveal>
        <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full" aria-label="Projects">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <ToggleGroup
              type="single"
              variant="outline"
              size="sm"
              spacing={0}
              value={filter}
              onValueChange={(value) => value && setFilter(value as Filter)}
              aria-label="Filter projects by type"
              className="max-w-full overflow-x-auto"
            >
              <ToggleGroupItem value="all" className="gap-1.5 px-3">
                All <span className="text-muted-foreground">{projects.length}</span>
              </ToggleGroupItem>
              {kinds.map((kind) => (
                <ToggleGroupItem key={kind} value={kind} className="gap-1.5 px-3">
                  {projectKinds[kind]} <span className="text-muted-foreground">{countByKind(kind)}</span>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>

            <div className="hidden items-center gap-2 sm:flex">
              <CarouselPrevious className="static my-0" />
              <CarouselNext className="static my-0" />
            </div>
          </div>

          <CarouselContent className="py-2">
            {visible.map((project) => (
              <CarouselItem key={project.slug} className="basis-[88%] sm:basis-1/2 lg:basis-1/3">
                <ProjectCard project={project} onOpen={() => openProject(project.slug)} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselDots label="slide" className="mt-6" />
        </Carousel>
      </Reveal>
    </Section>
  )
}
