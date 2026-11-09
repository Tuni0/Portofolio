import type { TechId } from "./tech"

export interface ImageAsset {
  src: string
  alt: string
  /** Phone screenshots look better contained than cropped. */
  fit?: "cover" | "contain"
}

export type ProjectKind = "startup" | "academic" | "personal"
export type ProjectStatus = "completed" | "in-progress"
export type AiUsage = "vibe-coded" | "ai-agent" | "ai-assisted"
export type ArchitectureAspect =
  | "auth"
  | "api"
  | "data"
  | "performance"
  | "security"
  | "deployment"

export interface StackItem {
  name: string
  reason: string
  /** Optional link to the tech registry, used for the icon. */
  tech?: TechId
}

export interface Project {
  slug: string
  title: string
  kind: ProjectKind
  status: ProjectStatus
  /** One-line value proposition shown on the card. */
  summary: string
  cover: ImageAsset
  gallery?: ImageAsset[]
  overview: string
  problem: string
  solution: string
  stack: StackItem[]
  architecture: Partial<Record<ArchitectureAspect, string>>
  /** Technologies shown as badges (first ones are the most important). */
  tech: TechId[]
  ai?: AiUsage
  team?: boolean
  private?: boolean
  links: {
    repo?: string
    demo?: string
    /** Shown when the code can't be public (e.g. private startup work). */
    note?: string
  }
}

export interface Job {
  role: string
  company?: string
  companyUrl?: string
  location?: string
  /** Display strings, e.g. "Mar 2025". */
  start?: string
  end?: string
  current?: boolean
  highlights: string[]
  tech: TechId[]
}

export interface Thesis {
  /** e.g. "Master's thesis" */
  kind: string
  /** English title shown on the page. */
  title: string
  /** Title in the original language (shown smaller, with `lang`). */
  originalTitle?: string
  originalLang?: string
  /** Public link (the PWr APD archive needs a university login, so it isn't linked). */
  url?: string
}

export interface Degree {
  /** e.g. "M.Sc. Eng." */
  degree: string
  field: string
  school: string
  schoolUrl?: string
  start: string
  end: string
  specialization?: string
  thesis?: Thesis
  topics: string[]
  highlights: string[]
  tech: TechId[]
}

export interface Certificate {
  title: string
  issuer: string
  /** ISO date, e.g. "2026-02-27". */
  date: string
  credentialId?: string
  url?: string
  image: string
  hours?: number
  tech?: TechId[]
}
