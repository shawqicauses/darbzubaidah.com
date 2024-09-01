"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const AlertDialogDescription = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({className, ...props}, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("shc-dialog-description-base", className)}
    {...props}
  />
))

AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName
export default AlertDialogDescription
