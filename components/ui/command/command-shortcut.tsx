"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes} from "react"
import {cn} from "../../../lib/utils"

const CommandShortcut = function CommandShortcut({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("shc-command-shortcut-base", className)} {...props} />
}

export default CommandShortcut
