"use client"

// DONE REVIEWING: GITHUB COMMIT

import {TdHTMLAttributes, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({className, ...props}, ref) => (
    <td ref={ref} className={cn("shc-table-cell-base", className)} {...props} />
  )
)

TableCell.displayName = "TableCell"
export default TableCell
