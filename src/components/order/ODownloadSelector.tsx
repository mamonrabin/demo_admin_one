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

export function ODownloadSelector() {
  return (
    <Select>
      <SelectTrigger className="w-40 h-8! rounded py-1">
        <SelectValue placeholder="Download" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup className="text-sm">
          <SelectLabel>Download</SelectLabel>
          <SelectItem className="text-sm" value="thisday">Download SVG</SelectItem>
          <SelectItem className="text-sm" value="previousday">Download PNG</SelectItem>
          <SelectItem value="thisweek">Download CSV</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
