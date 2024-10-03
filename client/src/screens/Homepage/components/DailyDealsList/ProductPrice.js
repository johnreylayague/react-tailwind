import React from "react";

const ProductPrice = ({ currentPrice, previousPrice }) => {
  return (
    <div className="flex flex-col">
      <span className="block text-[18px] leading-[1.2] font-bold text-[#18181D]">
        {currentPrice}
      </span>
      <span className="block line-through text-[14px] font-bold text-[#634832]">
        {previousPrice}
      </span>
    </div>
  );
};

export default ProductPrice;
