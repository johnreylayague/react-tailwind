import React from "react";

const SelectField = ({ defaultLabel, optionsData }) => {
  return (
    <select
      defaultValue=""
      className="border-[#F0F2F3] text-[#6e6e6e] mt-[23px] h-[50px] w-full leading-[1.5] py-[8px] px-[15px] border"
    >
      <option defaultValue="">{defaultLabel}</option>
      {optionsData.map((option) => {
        return (
          <option key={option.id} defaultValue={option.id}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectField;
