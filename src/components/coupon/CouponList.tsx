"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import OPagination from "../order/OPagination";
import EditCategory from "../category/EditCategory";
import { couponList } from "@/src/api/couponApi";

const CouponList = () => {
  return (
    <div className="rounded border p-8">
      <h2 className="text-xl font-medium">Coupon List</h2>

      <div className="mt-8">
        <Table>
          <TableHeader className="bg-[#2B748A]">
            <TableRow className="text-white!">
              <TableHead className="text-white">SL</TableHead>
              <TableHead className="text-white">Coupon Code</TableHead>
              <TableHead className="text-white">Discount</TableHead>
              <TableHead className="text-white">Discount Type</TableHead>
              <TableHead className="text-white">Use Limit</TableHead>
              <TableHead className="text-white">Use Count</TableHead>
              <TableHead className="text-white">Start Date</TableHead>
              <TableHead className="text-white">Expire Date</TableHead>
              <TableHead className="text-white">Coupon Type</TableHead>
              <TableHead className="text-white">Brand</TableHead>
              <TableHead className="text-white">Category</TableHead>
              <TableHead className="text-white">Subcategory</TableHead>
              <TableHead className="text-white">Action</TableHead>
            </TableRow>
          </TableHeader>

            <TableBody>
          {couponList.map((coupon, index) => (
            <TableRow key={coupon.id}>
              <TableCell className="px-4 text-center">{index + 1}</TableCell>
              <TableCell className="text-center">{coupon.couponcode}</TableCell>
              
              <TableCell className="text-center">
                {coupon.discount}
              </TableCell>
              <TableCell className="text-center">
                {coupon.discounttype}
              </TableCell>
              <TableCell className="text-center">
                {coupon.uselimit}
              </TableCell>
              <TableCell className="text-center">
                {
                    coupon.usecount ? coupon.usecount:"00"
                }
               
              </TableCell>
              <TableCell className="text-center">
                {coupon.startdate}
              </TableCell>
              <TableCell className="text-center">
                {coupon.expiredate}
              </TableCell>
              <TableCell className="text-center">
                {coupon.coupontype}
              </TableCell>
              <TableCell className="text-center">
                {
                    coupon.brand ? coupon.brand :"N/A"
                }
               
              </TableCell>
              <TableCell className="text-center">
                {
                    coupon.category ? coupon.category: "N/A"
                }
                
              </TableCell>
              <TableCell className="text-center">
                {coupon.subcategory ? coupon.subcategory : "N/A"}
              </TableCell>
        


              <TableCell className="flex items-center gap-2">
                <button  className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm">
                  Delete
                </button>
                <EditCategory/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </div>

      <div className='py-4 '>
                <OPagination/>
            </div>
    </div>
  );
};

export default CouponList;
