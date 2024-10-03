import React from "react";
import ParagraphList from "./ParagraphList.js";

const PolicyContent = ({ title, pharagraphData }) => {
  return (
    <div className="mb-[20px]">
      <h3 className="text-[#18181D] md:text-[34px] text-[26px] leading-[1.4] font-bold">{title}</h3>
      <ParagraphList pharagraphData={pharagraphData} />
    </div>
  );
};

export default PolicyContent;
