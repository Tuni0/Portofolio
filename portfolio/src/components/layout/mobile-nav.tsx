import { useRef, useState } from "react"
import { DownloadIcon, MenuIcon } from "lucide-react"

import { ModeToggle } from "@/components/mode-toggle"
import { SocialLinks } from "@/components/social-links"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navSections, type SectionId } from "@/data/navigation"
import { profile } from "@/data/profile"
import { scrollToSection } from "@/lib/dom"
import { cn } from "@/lib/utils"

export function MobileNav({ active }: { active: SectionId | null }) {
  const [open, setOpen] = useState(false)
  const target = useRef<string | null>(null)

  const navigate = (id: string) => {
    target.current = id
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation menu">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[85%] max-w-xs"
        onCloseAutoFocus={(event) => {
          if (!target.current) return
          event.preventDefault()
          scrollToSection(target.current)
          target.current = null
        }}
      >
        <SheetHeader className="flex-row items-center gap-3">
          <Avatar size="lg" className="size-11">
            <AvatarImage src={profile.photo.src} alt="" className="object-[center_30%]" />
            <AvatarFallback>{profile.initials}</AvatarFallback>
          </Avatar>
          <div>
            <SheetTitle>{profile.name}</SheetTitle>
            <SheetDescription>{profile.headline}</SheetDescription>
          </div>
        </SheetHeader>
        <Separator />
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-3">
          {navSections.map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              variant="ghost"
              className={cn(
                "h-11 justify-start gap-3 px-3 text-base",
                active === id && "bg-muted text-brand"
              )}
              aria-current={active === id ? "location" : undefined}
              onClick={() => navigate(id)}
            >
              <Icon />
              {label}
            </Button>
          ))}
        </nav>
        <SheetFooter className="gap-4">
          {profile.cvUrl && (
            <Button asChild>
              <a href={profile.cvUrl} download>
                <DownloadIcon />
                Download CV
              </a>
            </Button>
          )}
          <div className="flex items-center justify-between">
            <SocialLinks variant="outline" />
            <ModeToggle />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
