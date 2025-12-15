import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ShippingFee() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm">
        Free Shipping <span className="text-red-600"></span>
      </p>
      <Select>
        <SelectTrigger className="md:w-50 w-full h-10! rounded py-1">
          <SelectValue placeholder="Select Shipping" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup className="text-sm">
            <SelectLabel>Shipping</SelectLabel>
            <SelectItem className="text-sm" value="yes">
              Yes
            </SelectItem>
            <SelectItem className="text-sm" value="no">
              No
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
