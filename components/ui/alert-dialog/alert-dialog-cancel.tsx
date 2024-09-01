"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"
import {buttonVariants} from "../button"

const AlertDialogCancel = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Cancel>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({className, ...props}, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({variant: "outline"}), "mt-2 bg-transparent sm:mt-0", className)}
    {...props}
  />
))

AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName
export default AlertDialogCancel
