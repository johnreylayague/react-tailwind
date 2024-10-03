import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const StarReview = ({ defaultStars, label }) => {
  return (
    <div className="mt-[25px] flex flex-row gap-[13px]">
      <ul className="flex flex-row items-center space-x-[9px] ">
        {defaultStars.map((star, index) => (
          <li key={index}>
            <Icons.FontAwesome.Star
              className={`text-[12px] ${star ? "text-[#38220F]" : "text-[#848486]"}`}
            />
          </li>
        ))}
      </ul>
      <span className="text-[13px] text-[#848486]">{label}</span>
    </div>
  );
};

export default StarReview;
