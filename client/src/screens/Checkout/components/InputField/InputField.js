import React from "react";
import RequiredIndicator from "./RequiredIndicator.js";

const InputField = ({ type, placeholder, name, className, label, required }) => {
  return (
    <div className={className}>
      <div className="mb-[23px]">
        <label className="text-[#18181D] font-semibold text-[14px]">
          {label} <RequiredIndicator required={required} />
        </label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="outline-none mt-[12px] w-full h-[50px] border px-[15px] py-[8px] border-[#F0F2F3]"
        />
      </div>
    </div>
  );
};

export default InputField;
