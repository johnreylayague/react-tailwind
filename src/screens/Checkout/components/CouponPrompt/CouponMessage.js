import React from "react";

const CouponMessage = ({ onClick }) => {
  return (
    <div className="bg-[#F0F2F3] w-full p-[21px]">
      <p className="text-[#838383] font-semibold text-[14px] leading-[1.8]">
        Do you have a coupon code?{" "}
        <button type="button" name={"btn"} onClick={onClick} className="text-[#634832]">
          Click here to apply
        </button>
      </p>
    </div>
  );
};

export default CouponMessage;
