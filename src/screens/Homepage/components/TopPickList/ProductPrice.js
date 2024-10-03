import React from "react";

const ProductPrice = ({ currentPrice, previousPrice }) => {
  return (
    <div className="mt-[19px]">
      <span className="text-[16px] leading-[1.2] font-bold text-[#18181D]">{currentPrice}</span>
      <span className="ml-[15px] text-[14px] font-bold line-through text-[#634832]">
        {previousPrice}
      </span>
    </div>
  );
};

export default ProductPrice;
