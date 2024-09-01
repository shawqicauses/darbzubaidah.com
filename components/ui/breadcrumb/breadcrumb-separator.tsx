"use client"

// DONE REVIEWING: GITHUB COMMIT

import {ChevronRight} from "lucide-react"
import {ComponentProps} from "react"
import {cn} from "../../../lib/utils"

const BreadcrumbSeparator = function BreadcrumbSeparator({
  className,
  children,
  ...props
}: ComponentProps<"li">) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn("shc-breadcrumb-separator-base", className)}
      {...props}>
      {children ?? <ChevronRight />}
    </li>
  )
}

BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
export default BreadcrumbSeparator
