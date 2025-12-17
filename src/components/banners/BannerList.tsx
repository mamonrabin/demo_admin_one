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
import { bannerList } from "@/src/api/bannerApi";

const BannerList = () => {
  return (
    <div className="rounded border p-8">
      <h2 className="text-xl font-medium">Banner List</h2>

      <div className="mt-8">
        <Table>
          <TableHeader className="bg-[#2B748A]">
            <TableRow className="text-white!">
              <TableHead className="text-white">SL</TableHead>
              <TableHead className="text-white">Banner Image</TableHead>
              <TableHead className="text-white">Banner Title</TableHead>
              <TableHead className="text-white text-center">Description</TableHead>
              <TableHead className="text-white">bannertype</TableHead>
              <TableHead className="text-white">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {bannerList.map((banner, index) => (
              <TableRow key={banner.id}>
                <TableCell className="px-4">{index + 1}</TableCell>
                <TableCell>
                  <Image
                    src={banner.bannerImage}
                    alt="image"
                    width={120}
                    height={120}
                    className="rounded object-cover"
                  />
                </TableCell>
                <TableCell className="uppercase">
                  {banner.bannertitle}
                </TableCell>

                <TableCell className="uppercase">
                  {banner.bannerdescription}
                </TableCell>

                <TableCell className="uppercase text-center">
                  {banner.bannertype}
                </TableCell>

                <TableCell className="flex items-center justify-center lg:mt-8 gap-2">
                  <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm">
                    Delete
                  </button>
                  <EditCategory />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="py-4 ">
        <OPagination />
      </div>
    </div>
  );
};

export default BannerList;
