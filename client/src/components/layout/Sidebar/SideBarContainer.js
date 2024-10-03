import React from "react";

const SideBarContainer = ({ toggleSidebar, children }) => {
  return (
    <div
      className={`${
        !toggleSidebar ? "left-[-300px]" : "left-0"
      } bg-white w-full  fixed max-w-[300px] top-0 transition-all duration-[.3s] h-full block z-50 lg:hidden`}
    >
      {children}
    </div>
  );
};

export default SideBarContainer;
