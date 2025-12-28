import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none hover:scale-[1.02] active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary-accent hover:bg-primary-hover text-white rounded-lg shadow-lg shadow-primary-accent/20",
        destructive: "bg-error hover:bg-error-light text-white",
        outline: "border border-white/10 bg-surface hover:border-primary-accent/50 hover:bg-surface-hover text-text-primary",
        secondary: "bg-surface hover:bg-surface-hover text-text-primary border border-white/10",
        ghost: "hover:bg-surface text-text-secondary hover:text-text-primary",
        link: "text-primary-accent hover:text-primary-hover underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-lg",
        sm: "h-8 px-3 py-1.5 text-sm",
        lg: "h-12 px-8 py-3 text-lg rounded-xl",
        icon: "h-10 w-10 p-0 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
