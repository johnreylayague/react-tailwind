import React from "react";
import { Link } from "react-router-dom";
import ListItem from "./ListItem.js";
import ParagraphList from "./ParagraphList.js";

const TextContent = ({ title, paragraphData, listItemData, linkText, linkTo }) => {
  return (
    <div className="col-span-12 lg:col-span-6 px-[15px]">
      <div className="relative ml-0 lg:ml-[30px] flex items-center h-full">
        <div>
          <h3 className="text-[#18181D] lg:text-[43px] text-[30px] font-bold leading-[1.2]">
            {title}
          </h3>

          <ParagraphList paragraphData={paragraphData} />

          <ListItem listItemData={listItemData} />

          <Link
            to={linkTo}
            relative="path"
            className="text-[#fff] bg-[#634832] mt-[23px] inline-block py-[12px] px-[30px] font-semibold text-center leading-[27px]"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TextContent;
