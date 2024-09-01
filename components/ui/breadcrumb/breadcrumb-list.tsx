"use client"

// DONE REVIEWING: GITHUB COMMIT

import {ComponentPropsWithoutRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const BreadcrumbList = forwardRef<HTMLOListElement, ComponentPropsWithoutRef<"ol">>(
  ({className, ...props}, ref) => (
    <ol ref={ref} className={cn("shc-breadcrumb-list-base", className)} {...props} />
  )
)

BreadcrumbList.displayName = "BreadcrumbList"
export default BreadcrumbList
