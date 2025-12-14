import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Upload } from "lucide-react";

import { ChildCategorySelector } from "./ChildCategorySelector";


const EditChildCategory = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <button className="bg-[#2B748A] hover:bg-[#2c97b8] duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm">
            Edit
          </button>
        </SheetTrigger>
        <SheetContent className="md:max-w-2xl">
          <div className="p-6">
            <h2 className="text-lg font-medium border-b pb-2">
              Edit Child-Category
            </h2>

            <form className="mt-4 ">
              <div className="flex lg:flex-row flex-col items-start gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1 md:w-90 w-full">
                    <label>
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="px-4 py-2 border outline-none text-sm rounded"
                      type="text"
                      placeholder="Enter child-category Name"
                    />
                  </div>

                  <div>
                    <ChildCategorySelector/>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-medium">
                    Image <span className="text-red-500"></span>
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default EditChildCategory;
