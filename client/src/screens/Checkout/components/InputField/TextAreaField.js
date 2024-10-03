import React from "react";
import RequiredIndicator from "./RequiredIndicator.js";

const TextAreaField = ({ name, placeholder, rows, className, label, required }) => {
  return (
    <div className={className}>
      <div className="mb-[23px]">
        <label className="text-[#18181D] font-semibold text-[14px]">
          {label} <RequiredIndicator required={required} />
        </label>
        <textarea
          name={name}
          placeholder={placeholder}
          rows={rows}
          className="outline-none mt-[12px] w-full border px-[15px] py-[8px] border-[#F0F2F3]"
        />
      </div>
    </div>
  );
};

export default TextAreaField;
