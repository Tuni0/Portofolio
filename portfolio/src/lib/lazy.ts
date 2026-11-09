/**
 * Code-split chunks that aren't needed for the first paint.
 * The same loader is used for React.lazy and for prefetching, so the chunk is only fetched once.
 */
export const loadProjectDetails = () => import("@/components/sections/projects/project-details")
export const loadCommandPalette = () => import("@/components/layout/command-palette")

/** Warm up the lazy chunks once the browser is idle, so opening them later feels instant. */
export function prefetchWhenIdle() {
  const prefetch = () => {
    void loadProjectDetails()
    void loadCommandPalette()
  }
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(prefetch, { timeout: 4000 })
    return () => window.cancelIdleCallback(id)
  }
  const timeout = setTimeout(prefetch, 2500)
  return () => clearTimeout(timeout)
}
