export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/** Smoothly scrolls to a section (or the top for "home") and keeps the hash in sync. */
export function scrollToSection(id: string) {
  const behavior: ScrollBehavior = prefersReducedMotion() ? "auto" : "smooth"
  if (id === "home") {
    window.scrollTo({ top: 0, behavior })
    window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search)
    return
  }
  const element = document.getElementById(id)
  if (!element) return
  element.scrollIntoView({ behavior, block: "start" })
  window.history.replaceState(window.history.state, "", `#${id}`)
}

export function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer")
}

export const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.userAgent)

const monthYear = new Intl.DateTimeFormat("en", { month: "short", year: "numeric" })

/** "2026-02-27" → "Feb 2026" */
export function formatMonthYear(isoDate: string) {
  return monthYear.format(new Date(`${isoDate}T00:00:00`))
}
