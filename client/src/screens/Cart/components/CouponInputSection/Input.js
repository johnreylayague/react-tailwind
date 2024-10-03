import React from "react";

const Input = ({ name, placeholder }) => {
  return (
    <input
      type={"text"}
      name={name}
      placeholder={placeholder}
      className={`border-[#F0F2F3] text-[#6e6e6e] bg-[#fff] outline-none w-full px-[15px] py-[14px] border`}
    />
  );
};

export default Input;
