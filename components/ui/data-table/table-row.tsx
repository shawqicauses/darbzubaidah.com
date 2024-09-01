"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  ({className, ...props}, ref) => (
    <tr ref={ref} className={cn("shc-table-row-base", className)} {...props} />
  )
)

TableRow.displayName = "TableRow"
export default TableRow
