"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { categorysList } from "@/src/api/categoriesApi";
import Image from "next/image";
import OPagination from "../order/OPagination";

import EditSubCategory from "./EditSubCategory";

const SubCategoryList = () => {
  return (
    <div className="rounded border p-8">
      <h2 className="text-xl font-medium">Sub Category List</h2>

      <div className="mt-8">
        <Table>
          <TableHeader className="bg-[#2B748A]">
            <TableRow className="text-white!">
              <TableHead className="text-white">SL</TableHead>
              <TableHead className="text-white">Sub-Category Name</TableHead>
              <TableHead className="text-white">Sub-Category Image</TableHead>
              <TableHead className="text-white">Action</TableHead>
            </TableRow>
          </TableHeader>

            <TableBody>
          {categorysList.map((categoty, index) => (
            <TableRow key={categoty.id}>
              <TableCell className="px-4">{index + 1}</TableCell>
              <TableCell className="uppercase">{categoty.title}</TableCell>
              
              <TableCell>
                <Image src={categoty.image} alt={categoty.title} width={80} height={80} className="rounded object-cover"/>
              </TableCell>
        


              <TableCell className="flex items-center gap-2">
                <button  className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm">
                  Delete
                </button>
                <EditSubCategory/>
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

export default SubCategoryList;
