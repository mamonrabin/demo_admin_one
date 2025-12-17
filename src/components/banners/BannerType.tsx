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

export function BannerType() {
  return (
   <div className="flex flex-col gap-1">
    <p>Banner Type <span className="text-red-600">*</span></p>
     <Select>
      <SelectTrigger className="md:w-80 w-full h-10! rounded py-1">
        <SelectValue placeholder="Select Banner Type" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup className="text-sm">
          <SelectLabel>Banner</SelectLabel>
          <SelectItem className="text-sm" value="main">Main</SelectItem>
          <SelectItem className="text-sm" value="order">Other</SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>
   </div>
  )
}
