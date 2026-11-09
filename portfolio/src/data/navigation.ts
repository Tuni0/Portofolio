import {
  AwardIcon,
  BriefcaseIcon,
  FolderGit2Icon,
  LayersIcon,
  MailIcon,
  UserRoundIcon,
} from "lucide-react"

import type { IconComponent } from "./tech"

export interface NavSection {
  id: string
  label: string
  icon: IconComponent
}

export const navSections = [
  { id: "about", label: "About", icon: UserRoundIcon },
  { id: "experience", label: "Experience", icon: BriefcaseIcon },
  { id: "projects", label: "Projects", icon: FolderGit2Icon },
  { id: "skills", label: "Skills", icon: LayersIcon },
  { id: "certificates", label: "Certificates", icon: AwardIcon },
  { id: "contact", label: "Contact", icon: MailIcon },
] as const satisfies readonly NavSection[]

export type SectionId = (typeof navSections)[number]["id"]

export const sectionIds: readonly SectionId[] = navSections.map((s) => s.id)
