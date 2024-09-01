"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const TableCaption = forwardRef<HTMLTableCaptionElement, HTMLAttributes<HTMLTableCaptionElement>>(
  ({className, ...props}, ref) => (
    <caption ref={ref} className={cn("shc-table-caption-base", className)} {...props} />
  )
)

TableCaption.displayName = "TableCaption"
export default TableCaption
