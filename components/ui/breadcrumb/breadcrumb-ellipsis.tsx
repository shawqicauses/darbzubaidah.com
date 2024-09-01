"use client"

// DONE REVIEWING: GITHUB COMMIT

import {MoreHorizontal} from "lucide-react"
import {ComponentProps} from "react"
import {cn} from "../../../lib/utils"

const BreadcrumbEllipsis = function BreadcrumbEllipsis({
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn("shc-breadcrumb-ellipsis-base", className)}
      {...props}>
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"
export default BreadcrumbEllipsis
