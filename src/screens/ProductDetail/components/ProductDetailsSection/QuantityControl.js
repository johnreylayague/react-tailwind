import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const QuantityControl = ({ quantity }) => {
  return (
    <div className="flex flex-row">
      <button
        type="button"
        name="btnQtySubstract"
        className="border-[#F0F2F3] bg-[#fff] h-[50px] w-[40px] text-[13px] border"
      >
        <Icons.FontAwesome.Minus className="text-[#86858c] text-[15px]" />
      </button>
      <input
        type="text"
        name=""
        className="border-[#F0F2F3] bg-[#fff] sm:w-[50px] w-full outline-none h-[50px]  text-[14px] font-semibold text-center border border-l-0 border-r-0"
        defaultValue={quantity}
      />
      <button
        type="button"
        name="btnAddSubstract"
        className="border-[#F0F2F3] bg-[#fff] h-[50px] w-[40px] text-[13px] border"
      >
        <Icons.FontAwesome.Plus className="text-[#86858c] text-[15px]" />
      </button>
    </div>
  );
};

export default QuantityControl;
