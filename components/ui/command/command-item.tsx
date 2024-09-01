"use client"

// DONE REVIEWING: GITHUB COMMIT

import {Command as CommandPrimitive} from "cmdk"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const CommandItem = forwardRef<
  ElementRef<typeof CommandPrimitive.Item>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({className, ...props}, ref) => (
  <CommandPrimitive.Item ref={ref} className={cn("shc-command-item-base", className)} {...props} />
))

CommandItem.displayName = CommandPrimitive.Item.displayName
export default CommandItem
