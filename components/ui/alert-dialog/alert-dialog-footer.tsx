"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes} from "react"
import {cn} from "../../../lib/utils"

const AlertDialogFooter = function AlertDialogFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("shc-alert-dialog-footer-base", className)} {...props} />
}

AlertDialogFooter.displayName = "AlertDialogFooter"
export default AlertDialogFooter
