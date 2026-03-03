import React from "react";
import { cn } from "../../lib/utils";

const variantClasses = {
  default:
    "bg-primary text-primary-foreground hover:bg-violet-600 dark:hover:bg-violet-500",
  outline:
    "border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-900/70",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900/70",
};

const sizeClasses = {
  default: "h-10 px-4 py-2 text-sm",
  lg: "h-11 px-6 text-sm",
  icon: "h-9 w-9 p-0",
};

export function Button({
  as: Comp = "button",
  variant = "default",
  size = "default",
  className,
  ...props
}) {
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
        variantClasses[variant] || variantClasses.default,
        sizeClasses[size] || sizeClasses.default,
        className
      )}
      {...props}
    />
  );
}

