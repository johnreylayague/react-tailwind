import assets from "../../../assets/assets";
import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../../contexts/UserContext";
import Sidebar from "../Sidebar/Sidebar";
import NavLink from "./components/NavLink/NavLink.js";
import ContainerWrapper from "../../common/elements/Wrapper/ContainerWrapper.js";
import CompanyLogo from "./components/CompanyLogo/CompanyLogo.js";
import CategorySearchBar from "./components/CategorySearchBar/CategorySearchBar.js";
import ShoppingActionButtons from "./components/ShoppingActionButtons/ShoppingActionButtons.js";
import SocialMediaIcons from "./components/SocialMediaIcons/SocialMediaIcons.js";
import UserAccount from "./components/UserAccount/UserAccount.js";

const PublicHeader = () => {
  const { sharedState, setSharedState } = useContext(UserContext);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const updatedCategories = assets.jsonData.categoriesList.map((category) => {
      return { ...category, isChecked: false };
    });

    setCategoriesData(updatedCategories);
  }, [setCategoriesData]);

  const selectCategory = (event) => {
    event.preventDefault();
    const categoryId = Number.parseInt(event.target.getAttribute("data-category-id"));

    setCategoriesData((prevCategoriesData) => {
      const updatedCategories = prevCategoriesData.map((category) => {
        return category.id === categoryId
          ? { ...category, isChecked: !category.isChecked }
          : { ...category };
      });

      return updatedCategories;
    });
  };

  const handleNoAction = (event) => {
    event.preventDefault();
  };

  const handleSideBar = (event) => {
    event.preventDefault();
    setSharedState((prevState) => {
      return { ...prevState, toggleSidebar: !prevState.toggleSidebar };
    });
  };

  return (
    <>
      {/* Top - Social Media and Accounts */}
      <ContainerWrapper className={"bg-primary"}>
        <div className="min-h-[43px] flex items-center justify-between">
          <SocialMediaIcons
            platforms={["facebook", "twitter", "instagram", "youtube", "pinterest"]}
            noAction={handleNoAction}
          />
          <UserAccount />
        </div>
      </ContainerWrapper>

      {/* Middle - Main Content */}
      <ContainerWrapper className={"bg-light"}>
        <div className="flex flex-row flex-wrap justify-between items-center min-h-[94px]">
          <CompanyLogo image={assets.image.mp3Logo} alt={"mp3 logo"} />
          <CategorySearchBar categoriesData={categoriesData} selectCategory={selectCategory} />
          <ShoppingActionButtons handleSideBar={handleSideBar} />
        </div>
      </ContainerWrapper>

      {/* Bottom - NavLinks */}
      <ContainerWrapper className="bg-primary hidden lg:block">
        <NavLink navLinksData={assets.jsonData.header.navLinks} />
      </ContainerWrapper>

      {/* Mobile Nav Bar */}
      <Sidebar
        categoryData={assets.jsonData.mobileHeaderList}
        handleSideBar={handleSideBar}
        toggleSidebar={sharedState.toggleSidebar}
      />
    </>
  );
};

export default PublicHeader;
