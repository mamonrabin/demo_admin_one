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

export function ODeliverSeleotor() {
  return (
    <Select>
      <SelectTrigger className="w-30 h-8! rounded py-1">
        <SelectValue placeholder="In Order" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup className="text-sm">
          <SelectLabel>In Order</SelectLabel>
          <SelectItem className="text-sm" value="inorder">In Order</SelectItem>
          <SelectItem className="text-sm" value="concell">Concell</SelectItem>
          <SelectItem className="text-sm" value="previousday">In Process</SelectItem>
          <SelectItem value="thisweek">Deliver</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
