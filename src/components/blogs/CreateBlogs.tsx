"use client";

import { Upload } from "lucide-react";
import React, { useState } from "react";
import TiptapEditor from "../editor/TiptapEditor";

const CreateBlogs = () => {
  const [description, setDescription] = useState("");
  return (
    <div className="rounded border p-8 pb-12">
      <h2 className="text-xl font-medium">Create Blog</h2>

      <form className="mt-4 ">
        <div className="flex flex-col gap-2  w-full">
          <label className="text-sm">
            Blog Title <span className="text-red-500"> *</span>
          </label>
          <input
            className="px-4 py-2 border outline-none text-sm rounded"
            type="text"
            placeholder="Enter blog title"
          />
        </div>

        <div className="flex flex-col gap-2 mt-4 w-full">
          <label className="text-sm font-medium">
            Blog Description <span className="text-red-600">*</span>
          </label>

          <TiptapEditor value={description} onChange={setDescription} />
        </div>

        {/* blog image */}

        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col gap-2 mt-4">
            <label className="font-medium text-sm">
              Blog Image <span className="text-red-500"> *</span>
            </label>

            <label
              htmlFor="fileUpload"
              className="flex flex-col items-center justify-center w-full h-40 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#2B748A] transition"
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

          <div className="flex flex-col gap-2 mt-4">
            <label className="font-medium text-sm">
              Blog Images(optional) <span className="text-red-500"></span>
            </label>

            <label
              htmlFor="fileUpload"
              className="flex flex-col items-center justify-center w-full h-40 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#2B748A] transition"
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
        <div className="">
          <button
            className="mt-6 px-6 py-2 bg-[#2B748A] text-white rounded hover:bg-[#2383a0] transition cursor-pointer"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogs;
