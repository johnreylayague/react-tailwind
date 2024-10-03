import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const ProductFeatured = ({ title }) => {
  return (
    <h5 className="bg-[#38220F] z-10 absolute top-0 left-0 py-[4.7px] flex flex-row items-center px-[11.8px]">
      <Icons.Star className={"text-white w-[15px]"} />
      <span className="text-[#fff] ml-[5px] text-[13px] font-normal">{title}</span>
    </h5>
  );
};

export default ProductFeatured;
