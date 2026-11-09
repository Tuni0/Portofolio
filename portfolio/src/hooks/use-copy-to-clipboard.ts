import { useCallback, useEffect, useState } from "react"
import { toast } from "sonner"

export function useCopyToClipboard(resetAfter = 2000) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timeout = window.setTimeout(() => setCopied(false), resetAfter)
    return () => window.clearTimeout(timeout)
  }, [copied, resetAfter])

  const copy = useCallback(async (value: string, successMessage = "Copied to clipboard") => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      toast.success(successMessage, { description: value })
    } catch {
      toast.error("Couldn't access the clipboard", { description: value })
    }
  }, [])

  return { copied, copy }
}
