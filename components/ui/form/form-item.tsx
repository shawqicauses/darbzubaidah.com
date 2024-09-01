"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes, createContext, forwardRef, useId, useMemo} from "react"
import {cn} from "../../../lib/utils"

type FormItemContextValue = {id: string}

export const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue)

const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => {
    const id = useId()
    const value = useMemo(() => ({id}), [id])

    return (
      <FormItemContext.Provider value={value}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    )
  }
)

FormItem.displayName = "FormItem"

export default FormItem
