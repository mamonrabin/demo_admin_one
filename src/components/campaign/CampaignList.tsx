"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import OPagination from "../order/OPagination";

import { campaignList } from "@/src/api/campaignApi";
import Editcampaign from "./Editcampaign";

const CampaignList = () => {
  return (
    <div className="rounded border p-8">
      <h2 className="text-xl font-medium">campaign List</h2>

      <div className="mt-8">
        <Table>
          <TableHeader className="bg-[#2B748A]">
            <TableRow className="text-white!">
              <TableHead className="text-white">SL</TableHead>
              <TableHead className="text-white">Title</TableHead>
              <TableHead className="text-white">Coupon Code</TableHead>
              <TableHead className="text-white">Discount Type</TableHead>
              <TableHead className="text-white">Discount</TableHead>
              <TableHead className="text-white">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {campaignList.map((campaign, index) => (
              <TableRow key={campaign.id}>
                <TableCell className="px-4">{index + 1}</TableCell>
                <TableCell className="">{campaign.title}</TableCell>

                <TableCell className="">
                  {campaign.couponcode}
                </TableCell>
                <TableCell className="">
                  {campaign.discounttype}
                </TableCell>
                <TableCell className="">
                  {campaign.discount}
                </TableCell>

                <TableCell className="flex items-center gap-2">
                  <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm">
                    Delete
                  </button>
                  <Editcampaign />
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

export default CampaignList;
