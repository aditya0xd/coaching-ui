import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "large" | "outline" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
           // Base styles
          variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 text-sm font-semibold shadow-sm",
          
          variant === "large" && "bg-accent text-accent-foreground font-bold px-8 py-4 rounded-2xl shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:brightness-110 active:scale-95 transition-all",
          
          variant === "outline" && "border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent",
          
          variant === "ghost" && "text-foreground hover:bg-accent/10 hover:text-accent",
          
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
