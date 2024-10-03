import React from "react";

const SidebarToggleButton = ({ handleSidebarToggle }) => {
  return (
    <button
      onClick={handleSidebarToggle}
      name="btnBars"
      className="hover:bg-gray-100 border-[#F0F2F3] bg-[#fff] sm:h-[58px] sm:w-[58px] w-[40px] h-[40px] border flex flex-col justify-center items-center"
    >
      <span className="bg-black h-[2px] w-[20px] rounded-[3px] mb-[4px]"></span>
      <span className="bg-black h-[2px] w-[20px] rounded-[3px] mb-[4px]"></span>
      <span className="bg-black h-[2px] w-[20px] rounded-[3px] mb-[4px]"></span>
    </button>
  );
};

export default SidebarToggleButton;
