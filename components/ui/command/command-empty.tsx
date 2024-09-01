"use client"

// DONE REVIEWING: GITHUB COMMIT

import {Command as CommandPrimitive} from "cmdk"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"

const CommandEmpty = forwardRef<
  ElementRef<typeof CommandPrimitive.Empty>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="shc-command-empty-base" {...props} />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName
export default CommandEmpty
