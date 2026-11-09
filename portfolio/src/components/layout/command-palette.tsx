import { useRef } from "react"
import {
  CopyIcon,
  DownloadIcon,
  FolderGit2Icon,
  HouseIcon,
  MailIcon,
  MonitorIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { navSections } from "@/data/navigation"
import { profile, socialLinks } from "@/data/profile"
import { projects } from "@/data/projects"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { useProjectDialog } from "@/hooks/use-project-dialog"
import { useTheme } from "@/hooks/use-theme"
import { openExternal, scrollToSection } from "@/lib/dom"

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

/** The ⌘K dialog itself – lazy-loaded the first time it's needed (keeps cmdk out of the main bundle). */
export default function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  // Actions that scroll or open another dialog run after this dialog has fully closed.
  const pendingAction = useRef<(() => void) | null>(null)
  const { openProject } = useProjectDialog()
  const { setTheme } = useTheme()
  const { copy } = useCopyToClipboard()

  const runAfterClose = (action: () => void) => {
    pendingAction.current = action
    onOpenChange(false)
  }

  const runNow = (action: () => void) => {
    action()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="top-[20%] translate-y-0 overflow-hidden rounded-xl! p-0 sm:max-w-lg"
        onCloseAutoFocus={(event) => {
          const action = pendingAction.current
          if (!action) return
          pendingAction.current = null
          event.preventDefault()
          action()
        }}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Command menu</DialogTitle>
          <DialogDescription>Jump to a section, open a project or run an action.</DialogDescription>
        </DialogHeader>
        <Command loop className="**:data-[slot=command-input-wrapper]:p-2 **:data-[slot=command-input-wrapper]:pb-1">
          <CommandInput placeholder="Type a command or search…" />
          <CommandList className="max-h-[min(60vh,420px)]">
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Navigate">
              <CommandItem onSelect={() => runAfterClose(() => scrollToSection("home"))}>
                <HouseIcon />
                Home
              </CommandItem>
              {navSections.map(({ id, label, icon: Icon }) => (
                <CommandItem key={id} onSelect={() => runAfterClose(() => scrollToSection(id))}>
                  <Icon />
                  {label}
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandSeparator />
            <CommandGroup heading="Projects">
              {projects.map((project) => (
                <CommandItem
                  key={project.slug}
                  value={`project ${project.title}`}
                  onSelect={() => runAfterClose(() => openProject(project.slug))}
                >
                  <FolderGit2Icon />
                  <span className="truncate">{project.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandSeparator />
            <CommandGroup heading="Links">
              {socialLinks.map(({ id, label, url, icon: Icon }) => (
                <CommandItem key={id} onSelect={() => runNow(() => openExternal(url))}>
                  <Icon />
                  {label}
                  <CommandShortcut>↗</CommandShortcut>
                </CommandItem>
              ))}
              <CommandItem onSelect={() => runNow(() => void copy(profile.email, "Email copied"))}>
                <CopyIcon />
                Copy email address
              </CommandItem>
              <CommandItem onSelect={() => runNow(() => window.location.assign(`mailto:${profile.email}`))}>
                <MailIcon />
                Send an email
              </CommandItem>
              {profile.cvUrl && (
                <CommandItem onSelect={() => runNow(() => openExternal(profile.cvUrl!))}>
                  <DownloadIcon />
                  Download CV
                </CommandItem>
              )}
            </CommandGroup>

            <CommandSeparator />
            <CommandGroup heading="Theme">
              <CommandItem onSelect={() => runNow(() => setTheme("light"))}>
                <SunIcon />
                Light
              </CommandItem>
              <CommandItem onSelect={() => runNow(() => setTheme("dark"))}>
                <MoonIcon />
                Dark
              </CommandItem>
              <CommandItem onSelect={() => runNow(() => setTheme("system"))}>
                <MonitorIcon />
                System
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
