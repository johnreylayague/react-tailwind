import React from "react";
import RequiredIndicator from "./RequiredIndicator";

const SelectField = ({ selectData, className, label, required }) => {
  return (
    <div className={className}>
      <div className="mb-[23px]">
        <label className="font-semibold text-[14px] text-[#18181D]">
          {label} <RequiredIndicator required={required} />
        </label>
        <select className="outline-none mt-[12px] block h-[50px] px-[15px] py-[8px] w-full text-[14px] border text-[#6e6e6e] border-[#F0F2F3]">
          <option defaultValue="">Select a Country</option>
          {selectData.map((select) => {
            return (
              <option key={select.id} defaultValue={select.name}>
                {select.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectField;
