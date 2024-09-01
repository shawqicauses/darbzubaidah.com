"use client"

// DONE REVIEWING: GITHUB COMMIT

import {Command as CommandPrimitive} from "cmdk"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const Command = forwardRef<
  ElementRef<typeof CommandPrimitive>,
  ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({className, ...props}, ref) => (
  <CommandPrimitive ref={ref} className={cn("shc-command-base", className)} {...props} />
))

Command.displayName = CommandPrimitive.displayName
export default Command
