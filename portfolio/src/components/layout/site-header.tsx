import { CommandMenu } from "@/components/layout/command-menu"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Logo } from "@/components/logo"
import { ModeToggle } from "@/components/mode-toggle"
import { SocialLinks } from "@/components/social-links"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { navSections, sectionIds } from "@/data/navigation"
import { useActiveSection } from "@/hooks/use-active-section"
import { scrollToSection } from "@/lib/dom"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const active = useActiveSection(sectionIds)

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 rounded-2xl border bg-background/75 px-2.5 shadow-sm shadow-black/5 backdrop-blur-xl sm:px-3 dark:bg-background/60">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection("home")
          }}
          className="flex items-center gap-2.5 rounded-lg pr-2 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="Back to top"
        >
          <Logo />
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            wiktor<span className="text-brand">.</span>mazepa
          </span>
        </a>

        <NavigationMenu viewport={false} className="mx-auto hidden lg:flex" aria-label="Main">
          <NavigationMenuList className="gap-1">
            {navSections.map(({ id, label }) => (
              <NavigationMenuItem key={id}>
                <NavigationMenuLink
                  href={`#${id}`}
                  active={active === id}
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection(id)
                  }}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "h-8 bg-transparent px-3 text-muted-foreground hover:text-foreground data-[active=true]:bg-muted data-[active=true]:text-foreground"
                  )}
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-1 lg:ml-0">
          <CommandMenu />
          <Separator orientation="vertical" className="mx-1 hidden h-5! sm:block" />
          <SocialLinks className="hidden sm:flex" />
          <ModeToggle />
          <MobileNav active={active} />
        </div>
      </div>
    </header>
  )
}
