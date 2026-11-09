import { useEffect, useState } from "react"

interface TypewriterOptions {
  /** ms per typed character */
  typeSpeed?: number
  /** ms per deleted character */
  deleteSpeed?: number
  /** how long the full text stays on screen */
  holdDuration?: number
  /** pause on an empty line before typing again */
  emptyDuration?: number
  /** when false the full text is shown statically (e.g. reduced motion) */
  enabled?: boolean
}

type Phase = "typing" | "deleting"

/**
 * Endless "type → hold → delete → type" loop.
 * Starts with the full text visible, so the first paint already shows the name.
 */
export function useTypewriter(
  text: string,
  {
    typeSpeed = 110,
    deleteSpeed = 55,
    holdDuration = 2800,
    emptyDuration = 450,
    enabled = true,
  }: TypewriterOptions = {}
) {
  const [length, setLength] = useState(text.length)
  const [phase, setPhase] = useState<Phase>("typing")

  useEffect(() => {
    if (!enabled) return

    let delay: number
    let next: () => void

    if (phase === "typing") {
      if (length < text.length) {
        delay = typeSpeed
        next = () => setLength((n) => n + 1)
      } else {
        delay = holdDuration
        next = () => setPhase("deleting")
      }
    } else if (length > 0) {
      delay = deleteSpeed
      next = () => setLength((n) => n - 1)
    } else {
      delay = emptyDuration
      next = () => setPhase("typing")
    }

    const timeout = window.setTimeout(next, delay)
    return () => window.clearTimeout(timeout)
  }, [enabled, phase, length, text.length, typeSpeed, deleteSpeed, holdDuration, emptyDuration])

  const visible = enabled ? text.slice(0, Math.min(length, text.length)) : text
  return { text: visible, isTyping: enabled && visible.length < text.length }
}
