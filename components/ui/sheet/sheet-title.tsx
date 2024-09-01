"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as SheetPrimitive from "@radix-ui/react-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const SheetTitle = forwardRef<
  ElementRef<typeof SheetPrimitive.Title>,
  ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({className, ...props}, ref) => (
  <SheetPrimitive.Title ref={ref} className={cn("shc-dialog-title-base", className)} {...props} />
))

SheetTitle.displayName = SheetPrimitive.Title.displayName
export default SheetTitle
