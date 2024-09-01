"use client"

// DONE REVIEWING: GITHUB COMMIT

import {Slot} from "@radix-ui/react-slot"
import {ComponentPropsWithoutRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const BreadcrumbLink = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({asChild, className, ...props}, ref) => {
  const Component = asChild ? Slot : "a"
  return <Component ref={ref} className={cn("shc-breadcrumb-link-base", className)} {...props} />
})

BreadcrumbLink.displayName = "BreadcrumbLink"
export default BreadcrumbLink
