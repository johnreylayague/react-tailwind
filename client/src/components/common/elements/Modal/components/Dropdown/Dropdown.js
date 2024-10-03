import React from "react";

const Dropdown = ({ label, dataDropdown }) => {
  return (
    <select
      defaultValue={""}
      onChange={() => {}}
      className="text-[#6e6e6e] border-[#F0F2F3] bg-[#fff] h-[50px] py-[8px] px-[15px] border w-full text-[14px] mb-[20px]"
    >
      <option value="">{label}</option>
      {dataDropdown.map((dropdown) => {
        return (
          <option key={dropdown.id} value={dropdown.id}>
            {dropdown.text}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
