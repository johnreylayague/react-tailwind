import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const Featured = ({ title }) => {
  return (
    <h5 className="bg-[#38220F] z-10 absolute top-0 left-0 w-[98px] py-[4.7px] flex flex-row items-center px-[12px]">
      <Icons.FontAwesome.Star className={`text-white w-[15px]`} />
      <span className="text-[#fff] ml-[5px] text-[13px] font-normal">{title}</span>
    </h5>
  );
};

export default Featured;
