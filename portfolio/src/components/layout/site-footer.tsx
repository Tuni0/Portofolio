import { ArrowUpIcon } from "lucide-react"

import { SocialLinks } from "@/components/social-links"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { profile } from "@/data/profile"
import { scrollToSection } from "@/lib/dom"

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
      <Separator className="mb-8" />
      <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="text-xs">
            Built with React, TypeScript, Tailwind CSS &amp; shadcn/ui · self-hosted with Docker &amp; Traefik
          </p>
        </div>
        <div className="flex items-center gap-2">
          <SocialLinks />
          <Separator orientation="vertical" className="h-5!" />
          <Button variant="ghost" size="sm" onClick={() => scrollToSection("home")}>
            Back to top
            <ArrowUpIcon />
          </Button>
        </div>
      </div>
    </footer>
  )
}
