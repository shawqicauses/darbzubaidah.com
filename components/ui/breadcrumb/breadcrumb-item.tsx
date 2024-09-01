"use client"

// DONE REVIEWING: GITHUB COMMIT

import {ComponentPropsWithoutRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const BreadcrumbItem = forwardRef<HTMLLIElement, ComponentPropsWithoutRef<"li">>(
  ({className, ...props}, ref) => (
    <li ref={ref} className={cn("shc-breadcrumb-item-base", className)} {...props} />
  )
)

BreadcrumbItem.displayName = "BreadcrumbItem"
export default BreadcrumbItem
