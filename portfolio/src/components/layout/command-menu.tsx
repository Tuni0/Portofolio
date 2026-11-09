import { lazy, Suspense, useEffect, useState } from "react"
import { SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { isMac } from "@/lib/dom"
import { loadCommandPalette } from "@/lib/lazy"

const CommandPalette = lazy(loadCommandPalette)
const modifierKey = isMac ? "⌘" : "Ctrl"

/** Header trigger + global ⌘K / Ctrl+K shortcut. The palette itself is code-split. */
export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setMounted(true)
        setOpen((value) => !value)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="gap-2 text-muted-foreground"
        aria-label="Open command menu"
        onPointerEnter={() => void loadCommandPalette()}
        onFocus={() => void loadCommandPalette()}
        onClick={() => {
          setMounted(true)
          setOpen(true)
        }}
      >
        <SearchIcon />
        <span className="hidden xl:inline">Search…</span>
        <KbdGroup className="hidden sm:inline-flex">
          <Kbd>{modifierKey}</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>

      {mounted && (
        <Suspense fallback={null}>
          <CommandPalette open={open} onOpenChange={setOpen} />
        </Suspense>
      )}
    </>
  )
}
