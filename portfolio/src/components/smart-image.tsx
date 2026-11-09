import { useState, type ComponentProps } from "react"

import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

/** <img> that shows a shadcn Skeleton until it has loaded. Parent must be `relative`. */
export function SmartImage({ className, onLoad, ...props }: ComponentProps<"img">) {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Skeleton aria-hidden="true" className="absolute inset-0 size-full rounded-none" />}
      <img
        decoding="async"
        {...props}
        onLoad={(event) => {
          setLoaded(true)
          onLoad?.(event)
        }}
        className={cn("transition-opacity duration-500", loaded ? "opacity-100" : "opacity-0", className)}
      />
    </>
  )
}
