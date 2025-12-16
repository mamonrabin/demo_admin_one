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

export function CampaignCouponSelector() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm">
        Coupon <span className="text-red-600"> *</span>
      </p>
      <Select>
        <SelectTrigger className="md:w-80 w-full h-10! rounded py-1">
          <SelectValue placeholder="Select Discount Type" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup className="text-sm">
            <SelectLabel>Coupon</SelectLabel>
            <SelectItem className="text-sm" value="flat">
              ABCD12558
            </SelectItem>
            <SelectItem className="text-sm" value="percentage">
              WEFVV855
            </SelectItem>
            <SelectItem className="text-sm" value="16Decembar">
              16Decembar
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
