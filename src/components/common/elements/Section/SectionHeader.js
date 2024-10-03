import React from "react";
import ArrowButton from "../Button/ArrowButton";

const SectionHeader = ({ title }) => {
  return (
    <div className=" border-b-[#F0F2F3] before:bg-[#634832] before:absolute before:top-[100%] before:left-0 before:h-[3px] before:w-[100px] before:content-[''] relative flex flex-row justify-between items-center pb-[26px] border-b-[3px]">
      <h4 className="text-[#18181D] md:text-[26px] text-[22px] leading-[1.4] font-bold">{title}</h4>
      <div className="flex flex-row gap-[10px]">
        <ArrowButton direction={"left"} />
        <ArrowButton direction={"right"} />
      </div>
    </div>
  );
};

export default SectionHeader;
