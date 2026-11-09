import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"

/** Monogram used in the header (matches public/favicon.svg). */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid size-8 place-items-center rounded-lg bg-linear-to-br from-violet-500 to-violet-700 text-xs font-bold tracking-tight text-white shadow-sm shadow-violet-500/30",
        className
      )}
    >
      {profile.initials}
    </span>
  )
}
