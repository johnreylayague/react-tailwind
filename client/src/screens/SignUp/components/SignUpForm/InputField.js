import React from "react";

const InputField = ({ className, name, placeholder }) => {
  return (
    <div className={className}>
      <input
        type={"text"}
        name={name}
        placeholder={placeholder}
        className={`border-[#F0F2F3] text-[#6e6e6e] bg-[#fff] outline-none mb-[20px] w-full px-[15px] py-[14px] border`}
      />
    </div>
  );
};

export default InputField;
