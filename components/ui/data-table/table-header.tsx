"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({className, ...props}, ref) => (
    <thead ref={ref} className={cn("shc-table-header-base", className)} {...props} />
  )
)

TableHeader.displayName = "TableHeader"
export default TableHeader
