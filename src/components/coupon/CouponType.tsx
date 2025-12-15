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

export function CouponType() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm">
        Coupon Type <span className="text-red-600">*</span>
      </p>
      <Select>
        <SelectTrigger className="md:w-50 w-full h-10! rounded py-1">
          <SelectValue placeholder="Select Coupon Type" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup className="text-sm">
            <SelectLabel>Coupon Type</SelectLabel>
            <SelectItem className="text-sm" value="flat">
              Category wise
            </SelectItem>
            <SelectItem className="text-sm" value="percentage">
              Sub-Category wise
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
