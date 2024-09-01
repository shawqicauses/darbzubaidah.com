"use client"

// DONE REVIEWING: GITHUB COMMIT

import {Command as CommandPrimitive} from "cmdk"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const CommandSeparator = forwardRef<
  ElementRef<typeof CommandPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({className, ...props}, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("shc-command-separator-base", className)}
    {...props}
  />
))

CommandSeparator.displayName = CommandPrimitive.Separator.displayName
export default CommandSeparator
