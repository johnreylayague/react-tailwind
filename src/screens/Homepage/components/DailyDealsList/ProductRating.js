import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const ProductRating = ({ stars }) => {
  return (
    <div className="mt-[16px] flex flex-row justify-between items-center">
      <ul className="flex flex-row space-x-[9px] items-center">
        {stars.map((star, index) => (
          <li key={index}>
            <Icons.Star className={`text-[12px] ${star ? "text-[#38220F]" : "text-[#848486]"}`} />
          </li>
        ))}
      </ul>
      <span className="text-[#848486] font-semibold text-[13px]">{stars.length} Stars</span>
    </div>
  );
};

export default ProductRating;
