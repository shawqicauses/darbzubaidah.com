"use client"

// DONE REVIEWING: GITHUB COMMIT

import {Slot} from "@radix-ui/react-slot"
import {VariantProps, cva} from "class-variance-authority"
import {ButtonHTMLAttributes, forwardRef} from "react"
import {cn} from "../../lib/utils"

const buttonVariants = cva("shc-button-base", {
  variants: {
    variant: {
      primary: "shc-button-primary",
      secondary: "shc-button-secondary",
      accent: "shc-button-accent",
      outline: "shc-button-outline",
      ghost: "shc-button-ghost",
      link: "shc-button-link"
    },
    size: {
      normal: "shc-button-normal",
      sm: "shc-button-sm",
      lg: "shc-button-lg",
      icon: "shc-button-icon"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "normal"
  }
})

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, asChild = false, ...props}, ref) => {
    const Component = asChild ? Slot : "button"
    return (
      <Component
        type="button"
        ref={ref}
        className={cn(buttonVariants({variant, size, className}))}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export {Button, buttonVariants}
export default Button
