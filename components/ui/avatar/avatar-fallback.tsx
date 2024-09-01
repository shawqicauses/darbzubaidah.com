"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({className, ...props}, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("shc-avatar-fallback-base", className)}
    {...props}
  />
))

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName
export default AvatarFallback
