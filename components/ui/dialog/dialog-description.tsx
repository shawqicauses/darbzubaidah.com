"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as DialogPrimitive from "@radix-ui/react-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({className, ...props}, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("shc-dialog-description-base", className)}
    {...props}
  />
))

DialogDescription.displayName = DialogPrimitive.Description.displayName
export default DialogDescription
