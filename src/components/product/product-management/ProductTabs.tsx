import React from "react";
import { PCategorySelector } from "./PCategorySelector";
import { PSubSeleotor } from "./PSubSeleotor";
import { PChildSeleotor } from "./PChildSeleotor";
import { PDateSelector } from "./PDateSelector";
import { PDownloadSelector } from "./PDownloadSelector";

const ProductTabs = () => {
  return (
    <div>
      <div className="flex md:flex-nowrap flex-wrap items-center md:justify-end gap-2 mt-4">
        <PCategorySelector />
        <PSubSeleotor/>
        <PChildSeleotor/>
        <PDateSelector/>
        <PDownloadSelector/>
      </div>
    </div>
  );
};

export default ProductTabs;
