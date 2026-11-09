import { useContext } from "react"

import { ProjectDialogContext } from "@/lib/project-dialog"

export function useProjectDialog() {
  const context = useContext(ProjectDialogContext)
  if (!context) throw new Error("useProjectDialog must be used within <ProjectDialogContext>")
  return context
}
