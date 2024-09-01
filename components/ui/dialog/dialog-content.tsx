"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as DialogPrimitive from "@radix-ui/react-dialog"
import {X} from "lucide-react"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {DialogClose, DialogPortal} from "."
import {cn} from "../../../lib/utils"
import DialogOverlay from "./dialog-overlay"

const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({children, className, ...props}, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn("dialog shc-dialog-content-base", className)}
      {...props}>
      {children}
      <DialogClose className="shc-dialog-close-base">
        <span className="sr-only">Close</span>
        <X aria-hidden="true" className="h-4 w-4" />
      </DialogClose>
    </DialogPrimitive.Content>
  </DialogPortal>
))

DialogContent.displayName = DialogPrimitive.Content.displayName
export default DialogContent
