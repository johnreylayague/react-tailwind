import React from "react";

const ProductInfoSection = ({ children }) => {
  return (
    <div className="col-span-12 md:col-span-7 px-[15px]">
      <div className="px-0 lg:px-[40px]">{children}</div>
    </div>
  );
};

export default ProductInfoSection;
