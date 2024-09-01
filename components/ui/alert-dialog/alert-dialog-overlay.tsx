"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const AlertDialogOverlay = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({className, ...props}, ref) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    className={cn("shc-dialog-overlay-base", className)}
    {...props}
  />
))

AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName
export default AlertDialogOverlay
