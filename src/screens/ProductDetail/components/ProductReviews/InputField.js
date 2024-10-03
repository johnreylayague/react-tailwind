import React from "react";

const InputField = ({ name, className, placeholder }) => {
  return (
    <div className={className}>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="border-[#F0F2F3] text-[#6e6e6e] bg-[#fff] w-full h-[50px] py-[8px] px-[15px] text-[14px] border"
      />
    </div>
  );
};

export default InputField;
