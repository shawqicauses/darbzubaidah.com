"use client"

// DONE REVIEWING: GITHUB COMMIT

import {HTMLAttributes, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
  ({className, ...props}, ref) => (
    <div className="shc-table-wrapper-base">
      <table ref={ref} className={cn("shc-table-base", className)} {...props} />
    </div>
  )
)

Table.displayName = "Table"
export default Table
