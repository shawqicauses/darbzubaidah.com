"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes, forwardRef} from "react"
import {cn} from "../../../lib/utils"
import {useFormField} from "./form-field"

const FormDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({className, ...props}, ref) => {
    const {formDescriptionId} = useFormField()
    return (
      <p
        id={formDescriptionId}
        ref={ref}
        className={cn("shc-description-base text-muted-foreground", className)}
        {...props}
      />
    )
  }
)

FormDescription.displayName = "FormDescription"

export default FormDescription
