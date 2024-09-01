"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes} from "react"
import {cn} from "../../../lib/utils"

const DialogHeader = function DialogHeader({className, ...props}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("shc-dialog-header-base", className)} {...props} />
}

DialogHeader.displayName = "DialogHeader"
export default DialogHeader
