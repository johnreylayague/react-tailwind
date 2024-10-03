import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const ProductRating = ({ stars }) => {
  const starsCount = stars.filter((star) => star === true).length;

  return (
    <div className="flex flex-row justify-between items-center mt-[17px]">
      <ul className="flex flex-row space-x-[9px]">
        {stars.map((star, index) => {
          return (
            <li key={index}>
              <Icons.FontAwesome.Star
                className={`text-[12px] ${star ? "text-[#38220F]" : "text-[#848486]"}`}
              />
            </li>
          );
        })}
      </ul>
      <div className="text-[#848486] font-semibold text-[13px]">{starsCount} Stars</div>
    </div>
  );
};

export default ProductRating;
