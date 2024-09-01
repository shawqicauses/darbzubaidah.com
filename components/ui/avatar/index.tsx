"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const Avatar = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({className, ...props}, ref) => (
  <AvatarPrimitive.Root ref={ref} className={cn("shc-avatar-base", className)} {...props} />
))

Avatar.displayName = AvatarPrimitive.Root.displayName
export default Avatar
