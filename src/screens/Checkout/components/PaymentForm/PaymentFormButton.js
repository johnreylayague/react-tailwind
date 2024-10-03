import React from "react";

const PaymenFormButton = ({ className, btnLabel }) => {
  return (
    <div className={className}>
      <button
        type="button"
        className="text-[#fff] bg-[#634832] mt-[16px] h-[49px] font-semibold w-full px-[30px] py-[12px]"
      >
        {btnLabel}
      </button>
    </div>
  );
};

export default PaymenFormButton;
