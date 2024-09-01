"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"
import {buttonVariants} from "../button"

const AlertDialogAction = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Action>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({className, ...props}, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants({variant: "accent"}), className)}
    {...props}
  />
))

AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName
export default AlertDialogAction
