"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({className, ...props}, ref) => (
    <p ref={ref} className={cn("shc-card-description", className)} {...props} />
  )
)

CardDescription.displayName = "CardDescription"
export default CardDescription
