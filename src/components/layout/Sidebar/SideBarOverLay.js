import React from "react";

const SideBarOverLay = ({ handleSideBar, toggleSidebar }) => {
  return (
    <div
      onClick={handleSideBar}
      className={`${!toggleSidebar ? "opacity-0 invisible" : "opacity-100 visible"} 
      bg-[rgba(0,0,0,.7)] lg:hidden fixed top-0 left-0 w-full h-full z-40 transition-all duration-[.3s]`}
    ></div>
  );
};

export default SideBarOverLay;
