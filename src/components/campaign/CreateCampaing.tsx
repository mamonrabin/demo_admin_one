"use client";

import "react-datepicker/dist/react-datepicker.css";
import { CampaignCouponSelector } from "./CampaignCouponSelector";
import { Upload } from "lucide-react";

const CreateCampaing = () => {
  return (
    <div className="rounded border p-8 pb-12">
      <h2 className="text-xl font-medium">Create Campaign</h2>

      <form className="mt-4">
        <div className="flex lg:flex-row flex-col items-start gap-4">
          {/* Coupon Code */}
          <div className="flex flex-col gap-2 md:w-80 w-full">
            <label className="text-sm">
              Campaign Title<span className="text-red-500"> *</span>
            </label>
            <input
              className="px-4 py-2 border outline-none text-sm rounded"
              type="text"
              placeholder="Enter campaign title"
            />
          </div>

          {/* coupon */}
          <div>
            <CampaignCouponSelector />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label className="font-medium text-sm">
            Campaign Banner <span className="text-red-500"></span>
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

        {/* Submit */}
        <button
          className="mt-6 px-6 py-2 bg-[#2B748A] text-white rounded hover:bg-[#2383a0] transition cursor-pointer"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateCampaing;
