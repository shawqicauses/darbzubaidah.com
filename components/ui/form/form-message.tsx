"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes, forwardRef} from "react"
import {cn} from "../../../lib/utils"
import {useFormField} from "./form-field"

const FormMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({className, children, ...props}, ref) => {
    const {error, formMessageId} = useFormField()
    const body = error ? String(error.message) : children

    if (!body) return null

    return (
      <p
        id={formMessageId}
        ref={ref}
        className={cn("shc-description-base text-red-500", className)}
        {...props}>
        {body}
      </p>
    )
  }
)

FormMessage.displayName = "FormMessage"

export default FormMessage
