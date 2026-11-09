import { useEffect, useState } from "react"

/**
 * Scroll-spy: returns the id of the section that currently crosses
 * a thin band in the middle of the viewport.
 * `ids` should be a stable (module-level) array.
 */
export function useActiveSection<T extends string>(ids: readonly T[]) {
  const [active, setActive] = useState<T | null>(null)

  useEffect(() => {
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        setActive(ids.find((id) => visible.has(id)) ?? null)
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )

    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}
