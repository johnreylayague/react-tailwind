import React from "react";
import Icons from "../../../Icons/Icons";

const ProductDetails = ({ title, price, discount, description, stars }) => {
  return (
    <>
      <div className="flex flex-row gap-[15px]">
        <ul className="flex flex-row space-x-[11px]">
          {stars.map((star, index) => (
            <li key={index}>
              <Icons.Star className={`text-[12px] ${star ? "text-[#38220F]" : "text-[#848486]"}`} />
            </li>
          ))}
        </ul>
        <span className="text-[#848486] text-[13px]">{stars.length} Stars</span>
      </div>
      <h3 className="text-[#18181D] text-[34px] leading-[1.4] mb-[20px] font-bold">{title}</h3>
      <div className="flex flex-row items-end gap-[10px] mb-[20px]">
        <span className="text-[#18181D] leading-[1.2] font-bold text-[22px]">{price}$</span>
        <span className="text-[#634832] font-bold text-[14px] line-through">{discount}$</span>
      </div>
      <p className="text-[#838383] text-[14px] leading-[1.8] mb-[25px]">{description}</p>
    </>
  );
};

export default ProductDetails;
