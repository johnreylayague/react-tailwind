import React from "react";
import { Link } from "react-router-dom";
import ParagraphList from "./ParagraphList";

const TextContent = ({ title, paragraphData, linkText, linkTo }) => {
  return (
    <div className="lg:col-span-6 col-span-12 px-[15px]">
      <div className="lg:ml-[30px]">
        <h3 className="text-[30px] lg:text-[42px] font-bold leading-[1.2]">{title}</h3>

        <ParagraphList paragraphData={paragraphData} />

        <Link
          to={linkTo}
          relative="path"
          className="bg-[#634832] text-[#fff] mt-[15px] inline-block leading-[26px] text-center font-semibold px-[30px] py-[12px]"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default TextContent;
