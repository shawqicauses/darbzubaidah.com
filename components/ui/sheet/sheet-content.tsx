"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as SheetPrimitive from "@radix-ui/react-dialog"
import {VariantProps, cva} from "class-variance-authority"
import {X} from "lucide-react"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {SheetClose, SheetPortal} from "."
import {cn} from "../../../lib/utils"
import SheetOverlay from "./sheet-overlay"

export const sheetVariants = cva("shc-sheet-base", {
  variants: {
    side: {
      top: "shc-sheet-top",
      right: "shc-sheet-right",
      bottom: "shc-sheet-bottom",
      left: "shc-sheet-left"
    }
  },
  defaultVariants: {
    side: "right"
  }
})

export interface SheetContentProps
  extends ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = forwardRef<ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({side = "right", className, children, ...props}, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({side}), className)} {...props}>
        {children}
        <SheetClose className="shc-dialog-close-base">
          <span className="sr-only">Close</span>
          <X aria-hidden="true" className="h-4 w-4" />
        </SheetClose>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
)

SheetContent.displayName = SheetPrimitive.Content.displayName
export default SheetContent
