"use client"

// DONE REVIEWING: GITHUB COMMIT

import {Command as CommandPrimitive} from "cmdk"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const CommandList = forwardRef<
  ElementRef<typeof CommandPrimitive.List>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({className, ...props}, ref) => (
  <CommandPrimitive.List ref={ref} className={cn("shc-command-list-base", className)} {...props} />
))

CommandList.displayName = CommandPrimitive.List.displayName
export default CommandList
