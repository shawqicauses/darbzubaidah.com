"use client"

// DONE REVIEWING: GITHUB COMMIT

import {InputHTMLAttributes, forwardRef} from "react"
import {cn} from "../../lib/utils"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({className, type, ...props}, ref) => {
  return <input ref={ref} type={type} className={cn("shc-input-base", className)} {...props} />
})

Input.displayName = "Input"

export default Input
