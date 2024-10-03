import React from "react";

const ProductSortOptions = ({ optionsData }) => {
  return (
    <select className="h-[50px] w-full max-w-[171px] px-[15px] py-[8px] border border-[#F0F2F3] bg-[#fff] text-[#6e6e6e]">
      <option defaultValue="">Default sorting</option>
      {optionsData.map((option) => {
        return (
          <option key={option.id} defaultValue={option.id}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default ProductSortOptions;
