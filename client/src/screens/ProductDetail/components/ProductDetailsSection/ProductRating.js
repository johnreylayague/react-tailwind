import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const ProductRating = ({ stars }) => {
  return (
    <div className="mt-[23px] flex flex-row gap-[15px]">
      <ul className="flex flex-row space-x-[9px] items-center">
        {stars.map((star, index) => (
          <li key={index}>
            <Icons.FontAwesome.Star
              className={`text-[13px] ${star ? "text-[#38220F]" : "text-[#848486]"}`}
            />
          </li>
        ))}
      </ul>
      <span className="text-[13px] text-[#848486]">{stars.length} Stars</span>
    </div>
  );
};

export default ProductRating;
