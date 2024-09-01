"use client"

// DONE REVIEWING: GITHUB COMMIT

import {ThHTMLAttributes, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({className, ...props}, ref) => (
    <th ref={ref} className={cn("shc-table-head-base", className)} {...props} />
  )
)

TableHead.displayName = "TableHead"
export default TableHead
