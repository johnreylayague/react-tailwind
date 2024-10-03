import React from "react";

const ProductPrice = ({ currentPrice, previousPrice }) => {
  return (
    <div className="mt-[19px]">
      <span className="text-[#18181D] text-[22px] mr-[15px] leading-[1.2] font-bold">
        {currentPrice}$
      </span>
      <span className="text-[#634832] text-[14px] leading-[1.2] font-bold line-through">
        {previousPrice}$
      </span>
    </div>
  );
};

export default ProductPrice;
