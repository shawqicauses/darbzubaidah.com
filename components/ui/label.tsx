"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as LabelPrimitive from "@radix-ui/react-label"
import {VariantProps, cva} from "class-variance-authority"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../lib/utils"

const labelVariants = cva("shc-label-base")

const Label = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({className, ...props}, ref) => {
  return <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
})

Label.displayName = LabelPrimitive.Root.displayName

export default Label
