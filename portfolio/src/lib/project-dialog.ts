import { createContext } from "react"

export interface ProjectDialogContextValue {
  openProject: (slug: string) => void
}

export const ProjectDialogContext = createContext<ProjectDialogContextValue | null>(null)

const PARAM = "project"

export function readProjectParam(): string | null {
  return new URLSearchParams(window.location.search).get(PARAM)
}

/** Keeps ?project=<slug> in the URL so a case study can be shared as a link. */
export function writeProjectParam(slug: string | null) {
  const url = new URL(window.location.href)
  if (slug) url.searchParams.set(PARAM, slug)
  else url.searchParams.delete(PARAM)
  window.history.replaceState(window.history.state, "", url)
}

export function projectShareUrl(slug: string) {
  const url = new URL(window.location.origin + window.location.pathname)
  url.searchParams.set(PARAM, slug)
  return url.toString()
}
