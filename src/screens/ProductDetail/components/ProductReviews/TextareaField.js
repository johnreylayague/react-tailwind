import React from "react";

const TextareaField = ({ name, className, placeholder }) => {
  return (
    <div className={className}>
      <textarea
        name={name}
        placeholder={placeholder}
        className="w-full h-[165px] py-[8px] px-[15px] text-[14px] border border-[#F0F2F3] text-[#6e6e6e] bg-[#fff]"
      />
    </div>
  );
};

export default TextareaField;
