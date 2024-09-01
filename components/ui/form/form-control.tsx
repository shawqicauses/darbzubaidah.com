"use client"

// DONE REVIEWING: GITHUB COMMIT

import {Slot} from "@radix-ui/react-slot"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {useFormField} from "./form-field"

const FormControl = forwardRef<ElementRef<typeof Slot>, ComponentPropsWithoutRef<typeof Slot>>(
  ({...props}, ref) => {
    const {error, formItemId, formDescriptionId, formMessageId} = useFormField()
    return (
      <Slot
        id={formItemId}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
        {...props}
      />
    )
  }
)

FormControl.displayName = "FormControl"

export default FormControl
