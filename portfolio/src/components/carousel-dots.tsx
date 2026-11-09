import { useCallback, useSyncExternalStore } from "react"

import { useCarousel } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

/** Pagination dots for the shadcn Carousel (must be rendered inside <Carousel>). */
export function CarouselDots({ className, label = "slide" }: { className?: string; label?: string }) {
  const { api } = useCarousel()

  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!api) return () => {}
      api.on("select", onChange).on("reInit", onChange)
      return () => {
        api.off("select", onChange).off("reInit", onChange)
      }
    },
    [api]
  )
  const selected = useSyncExternalStore(subscribe, () => api?.selectedScrollSnap() ?? 0)
  const count = useSyncExternalStore(subscribe, () => api?.scrollSnapList().length ?? 0)

  if (count < 2) return null

  return (
    <div className={cn("flex items-center justify-center gap-1.5", className)}>
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => api?.scrollTo(index)}
          aria-label={`Go to ${label} ${index + 1} of ${count}`}
          aria-current={index === selected ? "true" : undefined}
          className={cn(
            "h-1.5 rounded-full transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
            index === selected ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
          )}
        />
      ))}
    </div>
  )
}
