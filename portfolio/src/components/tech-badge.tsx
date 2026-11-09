import { Badge } from "@/components/ui/badge"
import { getTech, type TechId } from "@/data/tech"
import { cn } from "@/lib/utils"

export function TechBadge({ id, className }: { id: TechId; className?: string }) {
  const { label, icon: Icon } = getTech(id)
  return (
    <Badge variant="secondary" className={cn("gap-1.5 font-normal", className)}>
      <Icon aria-hidden="true" />
      {label}
    </Badge>
  )
}

interface TechBadgeListProps {
  ids: readonly TechId[]
  /** Show at most this many, then a "+N" badge. */
  max?: number
  className?: string
}

export function TechBadgeList({ ids, max, className }: TechBadgeListProps) {
  const visible = max ? ids.slice(0, max) : ids
  const hidden = ids.length - visible.length
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)} aria-label="Technologies">
      {visible.map((id) => (
        <li key={id}>
          <TechBadge id={id} />
        </li>
      ))}
      {hidden > 0 && (
        <li>
          <Badge variant="outline" className="font-normal text-muted-foreground">
            +{hidden}
          </Badge>
        </li>
      )}
    </ul>
  )
}
