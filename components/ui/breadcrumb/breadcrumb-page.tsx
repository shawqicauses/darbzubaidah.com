"use client"

// DONE REVIEWING: GITHUB COMMIT

import {ComponentPropsWithoutRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const BreadcrumbPage = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<"span">>(
  ({className, ...props}, ref) => (
    <span
      ref={ref}
      role="link"
      aria-current="page"
      aria-disabled="true"
      className={cn("shc-breadcrumb-page-base", className)}
      {...props}
    />
  )
)

BreadcrumbPage.displayName = "BreadcrumbPage"
export default BreadcrumbPage
