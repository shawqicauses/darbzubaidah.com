"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as SheetPrimitive from "@radix-ui/react-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const SheetDescription = forwardRef<
  ElementRef<typeof SheetPrimitive.Description>,
  ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({className, ...props}, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("shc-dialog-description-base", className)}
    {...props}
  />
))

SheetDescription.displayName = SheetPrimitive.Description.displayName
export default SheetDescription
