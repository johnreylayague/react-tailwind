import React from "react";

const CouponInputSection = ({ couponDropDown }) => {
  return (
    <div
      className={`
        ${couponDropDown ? "h-[100px] mb-[30px]" : "h-0"}
        overflow-hidden mt-[30px] transition-all duration-[.3s] 
      `}
    >
      <p className="text-[#838383] text-[14px] leading-[1.8]">
        If you have a coupon code, apply it below
      </p>
      <div className="flex flex-row mt-[15px]">
        <input
          type="text"
          className="border-[#F0F2F3] outline-none px-[15px] py-[14px] border flex-1 border-r-0"
          placeholder="Coupon Code"
        />
        <button
          type="button"
          className="text-[#fff] bg-[#634832] outline-none font-semibold text-[14px] px-[30px] py-[14px] text-center leading-[15px]"
        >
          APPLY CODE
        </button>
      </div>
    </div>
  );
};

export default CouponInputSection;
