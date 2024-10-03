import React from "react";

const Button = ({ label, name }) => {
  return (
    <button
      type="button"
      name={name}
      className="text-[#fff] bg-[#634832] h-[50px] w-full max-w-[102.38px] font-semibold py-[12px] px-[30px] text[14px]"
    >
      {label}
    </button>
  );
};

export default Button;
