import React from "react";

const Button = ({ children }) => {
  return (
    <button
      type="button"
      className="text-[#fff] bg-[#634832] text-center font-semibold text-[13px] px-[16px] py-[12px] shadow-[0_3px_24px_rgba(0,0,0,.1)]"
    >
      {children}
    </button>
  );
};

export default Button;
