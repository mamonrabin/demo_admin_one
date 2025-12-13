import { Upload } from "lucide-react";
import React from "react";

const CategoryCreate = () => {
  return (
    <div className="rounded border p-8 pb-12">
      <h2 className="text-xl font-medium">Create Category</h2>

      <form className="mt-4 ">
        <div className="flex lg:flex-row flex-col items-start gap-4">
          <div className="flex flex-col gap-1 md:w-120 w-full">
            <label>
              Category Name <span>*</span>
            </label>
            <input
              className="px-4 py-2 border outline-none text-sm rounded"
              type="text"
              placeholder="Enter Category Name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">
              Image <span className="text-red-500">*</span>
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
        <div className="lg:mt-[-90px]">
          <button
            className="mt-6 px-6 py-2 bg-[#2B748A] text-white rounded hover:bg-[#2383a0] transition cursor-pointer"
          type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CategoryCreate;
