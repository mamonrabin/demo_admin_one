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

export function SCategorySelector() {
  return (
   <div className="flex flex-col gap-1">
    <p>Category <span className="text-red-600">*</span></p>
     <Select>
      <SelectTrigger className="md:w-90 w-full h-10! rounded py-1">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup className="text-sm">
          <SelectLabel>Category</SelectLabel>
          <SelectItem className="text-sm" value="shirt">Shirt</SelectItem>
          <SelectItem className="text-sm" value="pant">Pant</SelectItem>
          <SelectItem value="tshirt">t-shirt</SelectItem>
          <SelectItem value="underwear">underwear</SelectItem>
          <SelectItem value="bags">bags</SelectItem>
          <SelectItem value="belts">belts</SelectItem>
          <SelectItem value="shoes">shoes</SelectItem>
          <SelectItem value="shorts">shorts</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
   </div>
  )
}
