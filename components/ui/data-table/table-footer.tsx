"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const TableFooter = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({className, ...props}, ref) => (
    <tfoot ref={ref} className={cn("shc-table-footer-base", className)} {...props} />
  )
)

TableFooter.displayName = "TableFooter"
export default TableFooter
