import React from "react";

const Button = ({ children }) => {
  return (
    <button
      type="button"
      name="btnBuyNow"
      className="text-[#fff] bg-[#634832] leading-[24px] text-center py-[12px] px-[30px] font-semibold shadow-[0_3px_24px_rgba(0,0,0,.1)] "
    >
      {children}
    </button>
  );
};

export default Button;
