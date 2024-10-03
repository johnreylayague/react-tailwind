import React from "react";
import Icons from "../../../Icons/Icons";

const QuantityHandler = ({ value }) => {
  return (
    <div className="flex flex-row">
      <button
        type="button"
        name="btnQtySubstract"
        className="border-[#F0F2F3] bg-[#fff] h-[50px] w-[40px] text-[13px] border "
      >
        <Icons.Minus className="text-[#86858c] text-[13px]" />
      </button>
      <input
        type="text"
        name=""
        className="border-[#F0F2F3] bg-[#fff] md:w-[50px] w-full outline-none h-[50px]  text-[14px] font-semibold text-center border border-l-0 border-r-0 "
        defaultValue={value}
      />
      <button
        type="button"
        name="btnAddSubstract"
        className="border-[#F0F2F3] bg-[#fff] h-[50px] w-[40px] text-[13px] border "
      >
        <Icons.Plus className="text-[#86858c] text-[13px]" />
      </button>
    </div>
  );
};

export default QuantityHandler;
