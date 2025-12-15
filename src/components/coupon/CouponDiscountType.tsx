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

export function CouponDiscountType() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm">
        Discount Type <span className="text-red-600"></span>
      </p>
      <Select>
        <SelectTrigger className="md:w-50 w-full h-10! rounded py-1">
          <SelectValue placeholder="Select Discount Type" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup className="text-sm">
            <SelectLabel>Discount Type</SelectLabel>
            <SelectItem className="text-sm" value="flat">
              Flat
            </SelectItem>
            <SelectItem className="text-sm" value="percentage">
              Percentage
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
