import React from "react";

const SaleTag = ({ discount }) => {
  return (
    <div className="z-50 h-[28.09px] px-[12px] py-[3px] text-[13px] absolute top-0 left-1/2 -translate-x-1/2 rounded rounded-t-none  bg-[#5d5d5d]">
      <span className="block truncate w-full max-w-[250px] text-[13px] font-semibold text-[#fff]">
        {discount}
      </span>
    </div>
  );
};

export default SaleTag;
