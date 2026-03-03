import React, { createContext, useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
const CarouselContext = createContext(null);

export function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within <Carousel>");
  }
  return context;
}

export function Carousel({
  orientation = "horizontal",
  className,
  opts,
  setApi,
  plugins,
  children,
}) {
  const [emblaRef, api] = useEmblaCarousel(
    {
      axis: orientation === "vertical" ? "y" : "x",
      ...opts,
    },
    plugins,
  );

  React.useEffect(() => {
    if (setApi && api) {
      setApi(api);
    }
  }, [api, setApi]);

  return (
    <CarouselContext.Provider
      value={{
        emblaRef,
        orientation,
        api,
      }}
    >
      <div
        className={cn(
          "relative w-full",
          orientation === "horizontal" ? "" : "h-full",
          className,
        )}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className, children }) {
  const { emblaRef, orientation } = useCarousel();

  return (
    <div
      ref={emblaRef}
      className={cn(
        // Hide overflow only on the scroll axis so cards can scale
        // slightly without being vertically clipped.
        "overflow-x-hidden overflow-y-visible",
        orientation === "vertical" && "h-full overflow-y-hidden",
      )}
    >
      <div
        className={cn(
          "flex mb-8",
          orientation === "vertical" ? "flex-col" : "flex-row",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function CarouselItem({ className, children }) {
  const { orientation } = useCarousel();
  return (
    <div
      className={cn(
        "min-w-0 shrink-0 grow-0",
        orientation === "horizontal" ? "basis-full" : "basis-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CarouselPrevious({ className, ...props }) {
  const { api, orientation } = useCarousel();

  const handleClick = () => {
    if (!api) return;
    api.scrollPrev();
  };

  return (
    <Button
      type="button"
      size="icon"
      onClick={handleClick}
      className={cn(
        "rounded-full bg-neutral-900/70 text-neutral-50 shadow-md backdrop-blur hover:bg-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-100",
        orientation === "vertical" &&
          "left-1/2 top-2 -translate-x-1/2 -translate-y-0",
        className,
      )}
      {...props}
    >
      <ArrowLeftIcon aria-hidden="true" className="h-4 w-4" />
    </Button>
  );
}

export function CarouselNext({ className, ...props }) {
  const { api, orientation } = useCarousel();

  const handleClick = () => {
    if (!api) return;
    api.scrollNext();
  };

  return (
    <Button
      type="button"
      size="icon"
      onClick={handleClick}
      className={cn(
        "rounded-full bg-neutral-900/70 text-neutral-50 shadow-md backdrop-blur hover:bg-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-100",
        orientation === "vertical" &&
          "right-1/2 top-auto bottom-2 translate-x-1/2 translate-y-0",
        className,
      )}
      {...props}
    >
      <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
    </Button>
  );
}
