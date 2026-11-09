import { certificates } from "./certificates"
import { degrees, jobs } from "./experience"
import { projects } from "./projects"
import type { TechId } from "./tech"

export type TechUsage =
  | { kind: "project"; label: string; slug: string }
  | { kind: "job" | "degree" | "certificate"; label: string }

/**
 * Where each technology was actually used – derived from the content,
 * so the skills section can't drift out of sync with projects and experience.
 */
export const techUsage: ReadonlyMap<TechId, TechUsage[]> = (() => {
  const map = new Map<TechId, TechUsage[]>()
  const add = (id: TechId, usage: TechUsage) => {
    const list = map.get(id) ?? []
    if (!list.some((u) => u.label === usage.label)) list.push(usage)
    map.set(id, list)
  }

  for (const project of projects) {
    for (const id of project.tech) add(id, { kind: "project", label: project.title, slug: project.slug })
    for (const item of project.stack) {
      if (item.tech) add(item.tech, { kind: "project", label: project.title, slug: project.slug })
    }
  }
  for (const job of jobs) {
    for (const id of job.tech) add(id, { kind: "job", label: job.role })
  }
  for (const degree of degrees) {
    for (const id of degree.tech) add(id, { kind: "degree", label: `${degree.degree} ${degree.field}` })
  }
  for (const cert of certificates) {
    for (const id of cert.tech ?? []) add(id, { kind: "certificate", label: cert.title })
  }
  return map
})()
