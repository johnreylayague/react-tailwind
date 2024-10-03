import React from "react";
import CouponMessage from "./CouponMessage";
import CouponInputSection from "./CouponInputSection";

const CouponPrompt = ({ couponDropDown, onClick }) => {
  return (
    <div className="mt-[30px]">
      <CouponMessage onClick={onClick} />
      <CouponInputSection couponDropDown={couponDropDown} />
    </div>
  );
};

export default CouponPrompt;
