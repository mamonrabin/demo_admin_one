import { Upload } from "lucide-react";
import React from "react";
import { BannerType } from "./BannerType";

const CreateBanner = () => {
  return (
    <div className="rounded border p-8 pb-12">
      <h2 className="text-xl font-medium">Create Banner</h2>

      <form className="mt-4 ">
        <div className="flex lg:flex-row flex-col items-start gap-4">
          <div className="flex flex-col gap-2 md:w-120 w-full">
            <label className="text-sm">
              Banner Title <span className="text-red-500"></span>
            </label>
            <input
              className="px-4 py-2 border outline-none text-sm rounded"
              type="text"
              placeholder="Enter banner title"
            />
          </div>
          <div>
            <BannerType />
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4 w-full">
          <label className="text-sm">
            Banner Description <span className="text-red-500"></span>
          </label>
          <textarea
            className="px-4 w-full py-2 border outline-none text-sm rounded"
            cols={10}
            rows={6}
            placeholder="Enter banner description"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="font-medium text-sm">
             Banner Image <span className="text-red-500"> *</span>
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

export default CreateBanner;
