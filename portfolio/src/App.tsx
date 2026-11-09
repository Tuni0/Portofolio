import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from "react"
import { domAnimation, LazyMotion, MotionConfig } from "motion/react"

import { BackgroundGlow } from "@/components/background-glow"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { ScrollProgress } from "@/components/scroll-progress"
import { About } from "@/components/sections/about"
import { Certificates } from "@/components/sections/certificates"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects/projects"
import { Skills } from "@/components/sections/skills"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { findProject } from "@/data/projects"
import { loadProjectDetails, prefetchWhenIdle } from "@/lib/lazy"
import { ProjectDialogContext, readProjectParam, writeProjectParam } from "@/lib/project-dialog"

const ProjectDetails = lazy(loadProjectDetails)

function initialProjectState() {
  const slug = readProjectParam()
  const exists = Boolean(findProject(slug))
  return { open: exists, slug: exists ? slug : null }
}

export default function App() {
  // `slug` is kept after closing so the dialog can play its exit animation.
  const [projectState, setProjectState] = useState(initialProjectState)

  const openProject = useCallback((slug: string) => {
    if (!findProject(slug)) return
    setProjectState({ open: true, slug })
    writeProjectParam(slug)
  }, [])

  const onProjectOpenChange = useCallback((open: boolean) => {
    if (open) return
    setProjectState((state) => ({ ...state, open: false }))
    writeProjectParam(null)
  }, [])

  const projectDialog = useMemo(() => ({ openProject }), [openProject])

  useEffect(() => prefetchWhenIdle(), [])

  return (
    <ThemeProvider>
      {/* LazyMotion + `m.*` components keep motion's layout/drag features out of the bundle. */}
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <TooltipProvider delayDuration={300}>
            <ProjectDialogContext value={projectDialog}>
              <a
                href="#main"
                className="sr-only z-[70] rounded-md bg-background px-4 py-2 text-sm font-medium shadow focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
              >
                Skip to content
              </a>
              <ScrollProgress />
              <BackgroundGlow />
              <SiteHeader />

              <main id="main" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Certificates />
                <Contact />
              </main>

              <SiteFooter />

              {projectState.slug && (
                <Suspense fallback={null}>
                  <ProjectDetails
                    project={findProject(projectState.slug)}
                    open={projectState.open}
                    onOpenChange={onProjectOpenChange}
                  />
                </Suspense>
              )}
              <Toaster position="bottom-center" />
            </ProjectDialogContext>
          </TooltipProvider>
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  )
}
