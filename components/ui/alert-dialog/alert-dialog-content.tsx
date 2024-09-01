"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {AlertDialogPortal} from "."
import {cn} from "../../../lib/utils"
import AlertDialogOverlay from "./alert-dialog-overlay"

const AlertDialogContent = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({className, ...props}, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn("shc-dialog-content-base", className)}
      {...props}
    />
  </AlertDialogPortal>
))

AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName
export default AlertDialogContent
