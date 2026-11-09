import {
  ExternalLinkIcon,
  GaugeIcon,
  InfoIcon,
  KeyRoundIcon,
  LayersIcon,
  LightbulbIcon,
  LinkIcon,
  RocketIcon,
  ServerIcon,
  ShieldCheckIcon,
  TargetIcon,
  WebhookIcon,
} from "lucide-react"
import { FaGithub } from "react-icons/fa6"

import { CarouselDots } from "@/components/carousel-dots"
import { SmartImage } from "@/components/smart-image"
import { TechBadgeList } from "@/components/tech-badge"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getTech } from "@/data/tech"
import type { ArchitectureAspect, ImageAsset, Project } from "@/data/types"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { useMediaQuery } from "@/hooks/use-media-query"
import { projectShareUrl } from "@/lib/project-dialog"
import { cn } from "@/lib/utils"
import { ProjectBadges } from "./project-meta"

const aspects: Record<ArchitectureAspect, { label: string; icon: typeof KeyRoundIcon }> = {
  auth: { label: "Auth", icon: KeyRoundIcon },
  api: { label: "API & integration", icon: WebhookIcon },
  data: { label: "Data & storage", icon: ServerIcon },
  performance: { label: "Performance", icon: GaugeIcon },
  security: { label: "Security", icon: ShieldCheckIcon },
  deployment: { label: "Deployment", icon: RocketIcon },
}

const aspectOrder: ArchitectureAspect[] = ["auth", "api", "data", "deployment", "performance", "security"]

/* ------------------------------------------------------------------------------------------------
 * Gallery
 * ----------------------------------------------------------------------------------------------*/

function ProjectGallery({ images }: { images: ImageAsset[] }) {
  return (
    <Carousel opts={{ loop: images.length > 1 }} className="w-full" aria-label="Project screenshots">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.src}>
            <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg border bg-muted/50">
              <SmartImage
                src={image.src}
                alt={image.alt}
                className={cn("size-full", image.fit === "cover" ? "object-cover object-top" : "object-contain")}
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious className="left-2 bg-background/80 backdrop-blur" />
          <CarouselNext className="right-2 bg-background/80 backdrop-blur" />
          <CarouselDots label="image" className="mt-3" />
        </>
      )}
    </Carousel>
  )
}

/* ------------------------------------------------------------------------------------------------
 * Body (tabs)
 * ----------------------------------------------------------------------------------------------*/

function ProjectBody({ project }: { project: Project }) {
  const architecture = aspectOrder.filter((aspect) => project.architecture[aspect])

  return (
    <Tabs defaultValue="overview" className="gap-5">
      <TabsList className="w-full sm:w-fit">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="stack">Tech stack</TabsTrigger>
        {architecture.length > 0 && <TabsTrigger value="architecture">Architecture</TabsTrigger>}
      </TabsList>

      <TabsContent value="overview" className="space-y-5">
        <p className="leading-relaxed text-pretty text-muted-foreground">{project.overview}</p>
        <ItemGroup className="gap-3">
          <Item variant="muted" className="items-start">
            <ItemMedia className="mt-0.5 text-brand">
              <TargetIcon className="size-5" aria-hidden="true" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Problem</ItemTitle>
              <ItemDescription className="line-clamp-none leading-relaxed">{project.problem}</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="muted" className="items-start">
            <ItemMedia className="mt-0.5 text-brand">
              <LightbulbIcon className="size-5" aria-hidden="true" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Solution</ItemTitle>
              <ItemDescription className="line-clamp-none leading-relaxed">{project.solution}</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </TabsContent>

      <TabsContent value="stack">
        <ItemGroup className="grid gap-2.5 sm:grid-cols-2">
          {project.stack.map((item) => {
            const Icon = item.tech ? getTech(item.tech).icon : LayersIcon
            return (
              <Item key={item.name} variant="outline" size="sm" className="items-start">
                <ItemMedia className="mt-0.5 grid size-8 place-items-center rounded-md bg-muted">
                  <Icon className="size-4" aria-hidden="true" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="line-clamp-none">{item.name}</ItemTitle>
                  <ItemDescription className="line-clamp-none text-xs leading-relaxed">{item.reason}</ItemDescription>
                </ItemContent>
              </Item>
            )
          })}
        </ItemGroup>
      </TabsContent>

      {architecture.length > 0 && (
        <TabsContent value="architecture">
          <ItemGroup className="grid gap-2.5 sm:grid-cols-2">
            {architecture.map((aspect) => {
              const { label, icon: Icon } = aspects[aspect]
              return (
                <Item key={aspect} variant="muted" size="sm" className="items-start">
                  <ItemMedia className="mt-0.5 text-brand">
                    <Icon className="size-4" aria-hidden="true" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{label}</ItemTitle>
                    <ItemDescription className="line-clamp-none text-xs leading-relaxed">
                      {project.architecture[aspect]}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              )
            })}
          </ItemGroup>
        </TabsContent>
      )}
    </Tabs>
  )
}

/* ------------------------------------------------------------------------------------------------
 * Links
 * ----------------------------------------------------------------------------------------------*/

function ProjectLinks({ project }: { project: Project }) {
  const { copy } = useCopyToClipboard()
  const { repo, demo, note } = project.links

  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {note ? (
        <p className="flex items-start gap-2 text-xs text-muted-foreground">
          <InfoIcon className="mt-px size-3.5 shrink-0" aria-hidden="true" />
          {note}
        </p>
      ) : (
        <span />
      )}
      <div className="flex flex-wrap gap-2">
        <Button variant="ghost" size="sm" onClick={() => void copy(projectShareUrl(project.slug), "Link copied")}>
          <LinkIcon />
          Copy link
        </Button>
        {repo && (
          <Button variant="outline" size="sm" asChild>
            <a href={repo} target="_blank" rel="noopener noreferrer">
              <FaGithub />
              Source code
            </a>
          </Button>
        )}
        {demo && (
          <Button size="sm" asChild>
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Live demo
              <ExternalLinkIcon />
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------------------------------------
 * Responsive container: Dialog on desktop, Drawer on mobile
 * ----------------------------------------------------------------------------------------------*/

interface ProjectDetailsProps {
  project: Project | undefined
  open: boolean
  onOpenChange: (open: boolean) => void
}

/** Default export so it can be code-split with React.lazy (see src/lib/lazy.ts). */
export default function ProjectDetails({ project, open, onOpenChange }: ProjectDetailsProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  if (!project) return null

  const images = [project.cover, ...(project.gallery ?? [])]

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="flex max-h-[90vh] flex-col gap-0 overflow-hidden p-0 sm:max-w-5xl">
          <DialogHeader className="gap-3 border-b p-6 pr-14">
            <ProjectBadges project={project} />
            <DialogTitle className="text-2xl font-bold tracking-tight">{project.title}</DialogTitle>
            <DialogDescription className="text-base">{project.summary}</DialogDescription>
            <TechBadgeList ids={project.tech} className="pt-1" />
          </DialogHeader>

          <div className="grid h-[min(56vh,560px)] grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div className="border-r bg-muted/30 p-6">
              <ProjectGallery key={project.slug} images={images} />
            </div>
            <ScrollArea className="h-full min-h-0">
              <div className="p-6">
                <ProjectBody key={project.slug} project={project} />
              </div>
            </ScrollArea>
          </div>

          <DialogFooter className="border-t px-6 py-4">
            <ProjectLinks project={project} />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[92dvh]">
        <DrawerHeader className="gap-2 text-left">
          <ProjectBadges project={project} />
          <DrawerTitle className="text-xl font-bold tracking-tight">{project.title}</DrawerTitle>
          <DrawerDescription>{project.summary}</DrawerDescription>
        </DrawerHeader>
        <div className="min-h-0 flex-1 space-y-6 overflow-y-auto overscroll-contain px-4 pb-4">
          <ProjectGallery key={project.slug} images={images} />
          <TechBadgeList ids={project.tech} />
          <ProjectBody key={`${project.slug}-body`} project={project} />
        </div>
        <DrawerFooter className="border-t">
          <ProjectLinks project={project} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
