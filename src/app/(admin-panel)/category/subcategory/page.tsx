import CreateSubCategory from "@/src/components/sub-category/CreateSubCategory";
import SubCategoryList from "@/src/components/sub-category/SubCategoryList";
import React from "react";

const page = () => {
  return (
    <div className="lg:p-6 my-4">
      <div className="flex flex-col gap-6">
        <CreateSubCategory />
        <SubCategoryList/>
      </div>
    </div>
  );
};

export default page;
