"use client"

// DONE REVIEWING: GITHUB COMMIT

import {Command as CommandPrimitive} from "cmdk"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const CommandGroup = forwardRef<
  ElementRef<typeof CommandPrimitive.Group>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({className, ...props}, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn("shc-command-group-base", className)}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName
export default CommandGroup
