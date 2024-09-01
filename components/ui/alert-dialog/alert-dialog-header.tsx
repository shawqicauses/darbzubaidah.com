"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes} from "react"
import {cn} from "../../../lib/utils"

const AlertDialogHeader = function AlertDialogHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("shc-alert-dialog-header-base", className)} {...props} />
}

AlertDialogHeader.displayName = "AlertDialogHeader"
export default AlertDialogHeader
