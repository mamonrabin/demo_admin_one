import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function OPerRowPage() {
  return (
    <Select>
      <SelectTrigger className="w-18 h-8! rounded py-1">
        <SelectValue placeholder="10" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup className="text-sm">
         
          <SelectItem className="text-sm" value="10">10</SelectItem>
          <SelectItem className="text-sm" value="20">20</SelectItem>
          <SelectItem className="text-sm" value="30">30</SelectItem>
          <SelectItem value="40">40</SelectItem>
          <SelectItem value="50">50</SelectItem>
          <SelectItem value="100">100</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
