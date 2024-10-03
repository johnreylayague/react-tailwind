import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const ProductRating = ({ stars }) => {
  return (
    <ul className="flex justify-center flex-row space-x-[11px] mt-[22px]">
      {stars.map((star, index) => (
        <li key={index}>
          <Icons.Star className={`text-[12px] ${star ? "text-[#38220F]" : "text-[#848486]"}`} />
        </li>
      ))}
    </ul>
  );
};

export default ProductRating;
