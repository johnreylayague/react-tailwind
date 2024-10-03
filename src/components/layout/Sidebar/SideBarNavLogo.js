import React from "react";

const SideBarNavLogo = ({ logoSrc, logoAlt }) => {
  return (
    <div className="h-[100px] flex justify-center items-center w-full px-[15px] py-[10px]">
      <img src={logoSrc} alt={logoAlt} className="h-full" />
    </div>
  );
};

export default SideBarNavLogo;
