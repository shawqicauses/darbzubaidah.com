"use client"

// DONE REVIEWING: GITHUB COMMIT

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({className, ...props}, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("shc-avatar-image-base", className)} {...props} />
))

AvatarImage.displayName = AvatarPrimitive.Image.displayName
export default AvatarImage
