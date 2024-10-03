import React from "react";

const Button = ({ children }) => {
  return (
    <button
      type="button"
      className="text-[#fff] bg-[#634832] mt-[15px]  text-[14px] px-[30px] py-[15px] font-semibold text-center shadow-[0_3px_24px_rgba(0,0,0,.1)]"
    >
      {children}
    </button>
  );
};

export default Button;
