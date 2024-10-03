import React from "react";

const ProductPrice = ({ currentPrice, previousPrice }) => {
  return (
    <div className="mt-[23px] text-center">
      <span className="text-[#18181D] text-[16px] font-bold">{currentPrice}</span>
      <span className="text-[#634832] ml-[5px] font-bold text-[14px] line-through">
        {previousPrice}
      </span>
    </div>
  );
};

export default ProductPrice;
