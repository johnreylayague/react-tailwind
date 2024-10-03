import React from "react";

const ProductCount = ({ currentCount, totalCount }) => {
  return (
    <div className="text-[#838383]">
      Showing <b className="font-bold">{currentCount}</b> of{" "}
      <b className="font-bold">{totalCount}</b> products
    </div>
  );
};

export default ProductCount;
