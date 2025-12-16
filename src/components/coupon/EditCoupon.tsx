"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { CouponType } from "./CouponType";
import DatePicker from "react-datepicker";
import { CouponDiscountType } from "./CouponDiscountType";
import { useState } from "react";

const EditCoupon = () => {
     const [startDate, setStartDate] = useState<Date | null>(null);
      const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <button className="bg-[#2B748A] hover:bg-[#2c97b8] duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm">
            Edit
          </button>
        </SheetTrigger>
        <SheetContent className="md:max-w-2xl">
          <div className="p-6">
            <h2 className="text-lg font-medium border-b pb-2">Edit Coupon</h2>

            <form className="mt-4">
                   <div className="flex lg:flex-row flex-col items-start gap-4">
                     {/* Coupon Code */}
                     <div className="flex flex-col gap-2 md:w-50 w-full">
                       <label className="text-sm">
                         Coupon Code<span className="text-red-500">*</span>
                       </label>
                       <input
                         className="px-4 py-2 border outline-none text-sm rounded"
                         type="text"
                         placeholder="Enter Coupon Code"
                       />
                     </div>
           
                     {/* Discount Type */}
                     <div>
                       <CouponDiscountType />
                     </div>
           
                     {/* Discount Amount */}
                     <div className="flex flex-col gap-2 md:w-50 w-full">
                       <label className="text-sm">Discount Amount</label>
                       <input
                         className="px-4 py-2 border outline-none text-sm rounded"
                         type="text"
                         placeholder="Enter discount amount"
                       />
                     </div>
           
                     {/* Use Limit */}
                     <div className="flex flex-col gap-2 md:w-50 w-full">
                       <label className="text-sm">Use Limit</label>
                       <input
                         className="px-4 py-2 border outline-none text-sm rounded"
                         type="text"
                         placeholder="Enter use limit"
                       />
                     </div>
           
                     {/* Start Date */}
                   </div>
           
                   <div className="mt-4 flex gap-4">
                     <div className="flex flex-col gap-2 md:w-50 w-full">
                       <label className="text-sm">
                         Start Date<span className="text-red-500"></span>
                       </label>
                       <DatePicker
                         selected={startDate}
                         onChange={(date) => setStartDate(date)}
                         placeholderText="Start Date"
                         className="w-full px-4 py-2 border outline-none text-sm rounded"
                         dateFormat="yyyy-MM-dd"
                       />
                     </div>
           
                     <div className="flex flex-col gap-2 md:w-50 w-full">
                       <label className="text-sm">
                         End Date<span className="text-red-500"></span>
                       </label>
                       <DatePicker
                         selected={endDate}
                         onChange={(date) => setEndDate(date)}
                         placeholderText="End Date"
                         className="w-full px-4 py-2 border outline-none text-sm rounded"
                         dateFormat="yyyy-MM-dd"
                       />
                     </div>
           
                     <div>
                       <CouponType/>
                     </div>
                   </div>
           
                   {/* Submit */}
                   <button
                     className="mt-6 px-6 py-2 bg-[#2B748A] text-white rounded hover:bg-[#2383a0] transition cursor-pointer"
                     type="submit"
                   >
                     Update
                   </button>
                 </form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default EditCoupon;
