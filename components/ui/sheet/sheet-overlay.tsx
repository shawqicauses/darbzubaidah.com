"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as SheetPrimitive from "@radix-ui/react-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const SheetOverlay = forwardRef<
  ElementRef<typeof SheetPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({className, ...props}, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn("shc-dialog-overlay-base", className)}
    {...props}
  />
))

SheetOverlay.displayName = SheetPrimitive.Overlay.displayName
export default SheetOverlay
