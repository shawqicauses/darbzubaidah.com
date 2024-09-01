"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes} from "react"
import {cn} from "../../../lib/utils"

const DialogFooter = function DialogFooter({className, ...props}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("shc-dialog-footer-base", className)} {...props} />
}

DialogFooter.displayName = "DialogFooter"
export default DialogFooter
