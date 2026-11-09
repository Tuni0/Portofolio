import { useCallback, useEffect, useMemo, useState, useSyncExternalStore, type ReactNode } from "react"

import { THEME_STORAGE_KEY, ThemeContext, type ResolvedTheme, type Theme } from "@/lib/theme"

const DARK_QUERY = "(prefers-color-scheme: dark)"

function subscribeToSystemTheme(onChange: () => void) {
  const mql = window.matchMedia(DARK_QUERY)
  mql.addEventListener("change", onChange)
  return () => mql.removeEventListener("change", onChange)
}

function readStoredTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === "light" || stored === "dark" || stored === "system") return stored
  } catch {
    // storage can be blocked (private mode, strict cookie settings)
  }
  return "system"
}

/** Applies the theme class without animating every color transition on the page. */
function applyTheme(theme: ResolvedTheme) {
  const root = document.documentElement
  const freeze = document.createElement("style")
  freeze.textContent = "*,*::before,*::after{transition:none!important}"
  document.head.appendChild(freeze)

  root.classList.remove("light", "dark")
  root.classList.add(theme)
  root.style.colorScheme = theme

  // force a reflow before re-enabling transitions
  void window.getComputedStyle(document.body).opacity
  window.setTimeout(() => freeze.remove(), 0)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readStoredTheme)
  const systemIsDark = useSyncExternalStore(
    subscribeToSystemTheme,
    () => window.matchMedia(DARK_QUERY).matches,
    () => false
  )
  const resolvedTheme: ResolvedTheme =
    theme === "system" ? (systemIsDark ? "dark" : "light") : theme

  useEffect(() => {
    applyTheme(resolvedTheme)
  }, [resolvedTheme])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // ignore – the choice simply won't persist
    }
  }, [])

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme]
  )

  return <ThemeContext value={value}>{children}</ThemeContext>
}
