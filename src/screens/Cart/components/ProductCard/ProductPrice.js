import React from "react";

const ProductPrice = ({ currentPrice, previousPrice }) => {
  return (
    <div className="mt-[19px]">
      <span className="text-[#18181D] text-[16px] leading-[1.2] font-bold">{currentPrice}</span>
      <span className="text-[#634832] ml-[15px] text-[14px] font-bold line-through">
        {previousPrice}
      </span>
    </div>
  );
};

export default ProductPrice;
