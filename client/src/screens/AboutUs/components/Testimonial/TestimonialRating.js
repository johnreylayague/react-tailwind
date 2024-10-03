import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const TestimonialRating = ({ rating }) => {
  return (
    <ul className="mt-[11px] flex flex-row space-x-[10px]">
      {rating.map((rating, index) => {
        return (
          <li key={index} className="">
            <Icons.FontAwesome.Star
              className={`text-[12px] ${rating ? "text-[#38220F]" : "text-[#848486]"}`}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TestimonialRating;
