import React from "react";

const ProductDescription = ({ description }) => {
  return (
    <div className="mt-[13px]">
      <p className="text-[#838383] text-[14px] leading-[1.8]">{description}</p>
    </div>
  );
};

export default ProductDescription;
