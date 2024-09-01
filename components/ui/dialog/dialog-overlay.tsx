"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as DialogPrimitive from "@radix-ui/react-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({className, ...props}, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("shc-dialog-overlay-base", className)}
    {...props}
  />
))

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
export default DialogOverlay
