"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as LabelPrimitive from "@radix-ui/react-label"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"
import Label from "../label"
import {useFormField} from "./form-field"

const FormLabel = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({className, ...props}, ref) => {
  const {error, formItemId} = useFormField()
  return (
    <Label
      ref={ref}
      htmlFor={formItemId}
      className={cn(error && "text-red-500", className)}
      {...props}
    />
  )
})

FormLabel.displayName = "FormLabel"

export default FormLabel
