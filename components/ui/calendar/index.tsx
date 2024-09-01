"use client"

// DONE REVIEWING: GITHUB COMMIT

import {ChevronLeft, ChevronRight} from "lucide-react"
import {ComponentProps} from "react"
import {DayPicker} from "react-day-picker"
import {cn} from "../../../lib/utils"
import {buttonVariants} from "../button"

export type CalendarProps = ComponentProps<typeof DayPicker>

const IconLeft = function IconLeft() {
  return <ChevronLeft className="h-4 w-4" />
}

const IconRight = function IconRight() {
  return <ChevronRight className="h-4 w-4" />
}

const Calendar = function Calendar({
  showOutsideDays = true,
  className,
  classNames,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "relative flex items-center justify-center pt-1",
        caption_label: "text-sm font-medium",
        nav: "flex items-center space-x-1",
        nav_button: cn(
          buttonVariants({variant: "outline"}),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground",
        row: "mt-2 flex w-full",
        cell: "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-transparent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-muted [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-range-end)]:bg-muted [&:has([aria-selected].day-range-middle)]:bg-muted [&:has([aria-selected].day-range-start)]:bg-muted",
        day: cn(
          buttonVariants({variant: "ghost"}),
          "h-9 w-9 cursor-pointer p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-muted aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "day-range-middle aria-selected:bg-muted aria-selected:text-muted-foreground",
        day_hidden: "invisible",
        ...classNames
      }}
      components={{IconLeft, IconRight}}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"

export default Calendar
