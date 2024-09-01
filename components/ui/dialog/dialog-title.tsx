"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as DialogPrimitive from "@radix-ui/react-dialog"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({className, ...props}, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn("shc-dialog-title-base", className)} {...props} />
))

DialogTitle.displayName = DialogPrimitive.Title.displayName
export default DialogTitle
