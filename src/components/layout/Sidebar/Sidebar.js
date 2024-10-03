import React from "react";
import assets from "../../../assets/assets.js";
import SideBarOverLay from "./SideBarOverLay.js";
import SidebarNavLinks from "./SideBarNavLinks.js";
import SideBarNavLogo from "./SideBarNavLogo.js";
import SideBarContainer from "./SideBarContainer.js";

const Sidebar = ({ handleSideBar, toggleSidebar, categoryData }) => {
  return (
    <>
      <SideBarContainer toggleSidebar={toggleSidebar}>
        <SideBarNavLogo logoSrc={assets.image.mp3Logo} logoAlt={"mp3 logo"} />
        <SidebarNavLinks categoryData={categoryData} />
      </SideBarContainer>
      <SideBarOverLay handleSideBar={handleSideBar} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Sidebar;
