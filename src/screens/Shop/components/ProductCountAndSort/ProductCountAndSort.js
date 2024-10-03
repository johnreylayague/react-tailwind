import React from "react";
import ProductCount from "./ProductCount";
import ProductSorting from "./ProductSortOptions";

const ProductCountAndSort = ({ optionsData, currentCount, totalCount }) => {
  return (
    <div className="border-[#F0F2F3] shadow-[0_3px_24px_rgba(0,0,0,.04)] h-[92px] border p-[20px] flex flex-row justify-between items-center">
      <ProductCount currentCount={currentCount} totalCount={totalCount} />
      <ProductSorting optionsData={optionsData} />
    </div>
  );
};

export default ProductCountAndSort;
