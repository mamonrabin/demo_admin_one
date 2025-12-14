import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function PDateSelector() {
  return (
    <Select>
      <SelectTrigger className="w-40 h-8! rounded py-1">
        <SelectValue placeholder="Today" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup className="text-sm">
          <SelectLabel>Today</SelectLabel>
          <SelectItem className="text-sm" value="thisday">This Day</SelectItem>
          <SelectItem className="text-sm" value="previousday">Previous Day</SelectItem>
          <SelectItem value="thisweek">This Week</SelectItem>
          <SelectItem value="previousweek">Previous Week</SelectItem>
          <SelectItem value="thismonth">This Month</SelectItem>
          <SelectItem value="previousmonth">Previous Month</SelectItem>
          <SelectItem value="thisyear">This Year</SelectItem>
          <SelectItem value="previousyear">Previous Year</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
