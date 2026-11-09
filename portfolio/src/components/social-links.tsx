import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { socialLinks } from "@/data/profile"
import { cn } from "@/lib/utils"

interface SocialLinksProps {
  className?: string
  size?: "icon" | "icon-sm" | "icon-lg"
  variant?: "ghost" | "outline"
}

/** GitHub + LinkedIn icon buttons – one source of truth in data/profile.ts. */
export function SocialLinks({ className, size = "icon", variant = "ghost" }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {socialLinks.map(({ id, label, url, icon: Icon }) => (
        <Tooltip key={id}>
          <TooltipTrigger asChild>
            <Button variant={variant} size={size} asChild>
              <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`}>
                <Icon className={cn(size === "icon-lg" ? "size-5" : "size-4")} />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
