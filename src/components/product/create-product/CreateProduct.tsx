"use client";

import { useState } from "react";
import TiptapEditor from "../../editor/TiptapEditor";
import { Upload } from "lucide-react";
import { DiscountType } from "./DiscountType";
import { ShippingFee } from "./ShippingFee";
import { CCategorySelector } from "./CCategorySelector";
import { SCCategorySelector } from "./SCCategorySelector";
import { ChildCSelector } from "./ChildCSelector";
import { CreateInventeryType } from "./CreateInventeryType";
import Link from "next/link";

export default function CreateProduct() {
  const [description, setDescription] = useState("");

  return (
    <div className="rounded border p-8">
      <h2 className="text-xl font-medium">Create Product</h2>

      <form className="mt-4 flex flex-col gap-6">
        {/* Product Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Product Name <span className="text-red-600">*</span>
          </label>
          <input
            className="px-3 py-2 border rounded outline-none text-sm
            focus:border-[#2B748A] focus:ring-1 focus:ring-[#2B748A]"
            placeholder="Enter product name"
          />
        </div>

        {/* Product Description */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm font-medium">
            Product Description <span className="text-red-600">*</span>
          </label>

          <TiptapEditor value={description} onChange={setDescription} />
        </div>
        {/* Product images */}
        <div className="flex md:flex-row flex-col md:items-center gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-medium">
              Front-viwe image <span className="text-red-500">*</span>
            </label>

            <label
              htmlFor="fileUpload"
              className="flex flex-col items-center justify-center w-full h-32 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#2B748A] transition"
            >
              <div className="flex flex-col text-gray-500 items-center text-center p-4">
                <Upload size={16} />

                <p className="text-sm text-gray-500 mt-2">upload image</p>
              </div>
            </label>

            <input
              type="file"
              id="fileUpload"
              className="hidden"
              accept="image/*"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium">
              Back-viwe image <span className="text-red-500"></span>
            </label>

            <label
              htmlFor="fileUpload"
              className="flex flex-col items-center justify-center w-full h-32 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#2B748A] transition"
            >
              <div className="flex flex-col text-gray-500 items-center text-center p-4">
                <Upload size={16} />

                <p className="text-sm text-gray-500 mt-2">upload image</p>
              </div>
            </label>

            <input
              type="file"
              id="fileUpload"
              className="hidden"
              accept="image/*"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium">
              Extra images (Miximun 5 images){" "}
              <span className="text-red-500"></span>
            </label>

            <label
              htmlFor="fileUpload"
              className="flex flex-col items-center justify-center w-full h-32 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#2B748A] transition"
            >
              <div className="flex flex-col text-gray-500 items-center text-center p-4">
                <Upload size={16} />

                <p className="text-sm text-gray-500 mt-2">upload image</p>
              </div>
            </label>

            <input
              type="file"
              id="fileUpload"
              className="hidden"
              accept="image/*"
            />
          </div>
        </div>
        {/* Product mrp,discount,type,shpping */}
        <div className="flex md:flex-row flex-col items-center gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Product MRP <span className="text-red-600">*</span>
            </label>
            <input
              className="px-3 py-2 border rounded outline-none text-sm
            focus:border-[#2B748A] focus:ring-1 focus:ring-[#2B748A]"
              placeholder="Enter MRP price"
            />
          </div>
          <div>
            <DiscountType />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Discount <span className="text-red-600"></span>
            </label>
            <input
              className="px-3 py-2 border rounded outline-none text-sm
            focus:border-[#2B748A] focus:ring-1 focus:ring-[#2B748A]"
              placeholder="Enter discount amount"
            />
          </div>

          <div>
            <ShippingFee />
          </div>
        </div>

        {/* Product category,subcategory,childcatergory */}

        <div className="flex md:flex-row flex-col md:items-center gap-4">
          <CCategorySelector />
          <SCCategorySelector />
          <ChildCSelector />
        </div>
        {/* Product inventry type */}
        <div>
          <CreateInventeryType />
        </div>

        <div>
          <Link href="/products">
            <input
              className="px-6 py-3 bg-[#2B748A] hover:bg-[#3b98b4] duration-300 cursor-pointer text-white text-sm rounded"
              type="submit"
              value="Create Product"
            />
          </Link>
        </div>
      </form>
    </div>
  );
}
