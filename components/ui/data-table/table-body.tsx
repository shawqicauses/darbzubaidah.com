"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({className, ...props}, ref) => (
    <tbody ref={ref} className={cn("shc-table-body-base", className)} {...props} />
  )
)

TableBody.displayName = "TableBody"
export default TableBody
