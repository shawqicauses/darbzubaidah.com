"use client"

// DONE REVIEWING: GITHUB COMMIT

import {format} from "date-fns"
import {Calendar as CalendarIcon} from "lucide-react"
import {PropsWithChildren} from "react"
import {cn} from "../../../lib/utils"
import {Button} from "../button"
import Popover, {PopoverTrigger} from "../popover"
import PopoverContent from "../popover/popover-content"

type DatePickerProps = {
  date: Date | string | number | undefined
} & PropsWithChildren

const DatePicker = function DatePicker({date, children}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full max-w-[17.5rem] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">{children}</PopoverContent>
    </Popover>
  )
}

export default DatePicker
