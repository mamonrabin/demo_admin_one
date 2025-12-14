"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { productList } from "@/src/api/productsApi";
import Image from "next/image";
import ProductUpdate from "./ProductUpdate";

const ProductsTable = () => {
  return (
    <div className="mt-8">
      <Table>
        <TableHeader className="bg-[#2B748A]">
          <TableRow className="text-white!">
            <TableHead className="text-white">SL</TableHead>
            <TableHead className="text-white">Back-View</TableHead>
            <TableHead className="text-white">Front-View</TableHead>
            <TableHead className="text-white">Tital</TableHead>
            <TableHead className="text-white">Discount Type</TableHead>
            <TableHead className="text-white">Discount</TableHead>
            <TableHead className="text-white">MRP</TableHead>
            <TableHead className="text-white">Price</TableHead>
            <TableHead className="text-white">Inventory Type</TableHead>
            <TableHead className="text-white">Inventory Details</TableHead>
            <TableHead className="text-white">Category</TableHead>
            <TableHead className="text-white">Subcategory</TableHead>
            <TableHead className="text-white">Child Category</TableHead>
            <TableHead className="text-white">Delete</TableHead>
            <TableHead className="text-white">Update</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {productList.map((Product, index) => (
            <TableRow key={Product.id}>
              <TableCell className="text-center">{index + 1}</TableCell>
              <TableCell className="text-center">
                <Image
                  src={Product.frontview}
                  alt="front"
                  width={60}
                  height={60}
                />
              </TableCell>
              <TableCell className="text-center">
                <Image
                  src={Product.backview}
                  alt="backview"
                  width={60}
                  height={60}
                />
              </TableCell>

              <TableCell className="text-center">{Product.title}</TableCell>
              <TableCell className="text-center">
                {Product.discountType}
              </TableCell>
              <TableCell className="text-center">
                ৳ {Product.discount}
              </TableCell>
              <TableCell className="text-center">
                ৳ {Product.mrpPrice}
              </TableCell>
              <TableCell className="text-center">৳ {Product.price}</TableCell>
              <TableCell className="text-center">
                {Product.inventoryType}
              </TableCell>
              <TableCell className="text-sm p-1 grid grid-cols-2 gap-1 w-[420px]">
                {Product.inventory?.map((item) => (
                  <div key={item.id} className="border p-2 bg-gray-200">
                    <div>
                      <p>Size : {item.level ? item.level : "N/A"}</p>
                      <p>Color : {item.color ? item.color : "N/A"}</p>
                    </div>

                    <div>
                      <p className="">Quantity {item.quantity}</p>
                      <p className=" text-green-600">
                        Sold Quantity {item.soldquantity}
                      </p>
                      <p className=" text-orange-500">
                        Hold Quantity {item.holdquantity}
                      </p>
                    </div>
                  </div>
                ))}
              </TableCell>

              <TableCell className="text-center">{Product.category}</TableCell>
              <TableCell className="text-center">
                {Product.subcategory ? Product.subcategory : "N/A"}
              </TableCell>
              <TableCell className="text-center">
                {Product.childcategory ? Product.childcategory : "N/A"}
              </TableCell>

              <TableCell>
                <button className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm">
                  Delete
                </button>
              </TableCell>
              <TableCell>
                <ProductUpdate/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
