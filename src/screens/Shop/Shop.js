import React, { useContext } from "react";
import BreadcrumbHeader from "../../components/common/elements/Breadcrumb/BreadcrumbHeader.js";
import ProductCountAndSort from "./components/ProductCountAndSort/ProductCountAndSort.js";
import Pagination from "./components/Pagination/Pagination.js";
import ProductList from "./components/ProductList/ProductList.js";
import assets from "../../assets/assets.js";
import LayoutWrapper from "../../components/common/elements/Wrapper/LayoutWrapper.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import FilterOptions from "./components/FilterOptions/FilterOptions.js";
import NewsletterSignup from "../../components/common/elements/NewsletterSignup/NewsletterSignup.js";
import UserContext from "../../contexts/UserContext.js";

function Shop() {
  const { handleProductModal } = useContext(UserContext);

  const noAction = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {/* Menu */}
      <BreadcrumbHeader
        label="Shop"
        breadcrumbData={[
          { id: 1, name: "Home", link: "/" },
          { id: 2, name: "Shop", link: "/shop" },
        ]}
      />

      {/* Content */}
      <LayoutWrapper className="pt-[50px]">
        <div className="lg:col-span-8 col-span-12 px-[15px]">
          <ProductCountAndSort
            optionsData={assets.jsonData.productSortingList}
            currentCount={"20"}
            totalCount={"320"}
          />
          <ProductList
            productData={assets.jsonData.topPicksList}
            handleProductModal={handleProductModal}
          />
          <Pagination pages={[1, 2, 3]} currentPage={2} onPageChange={noAction} />
        </div>
        <div className="lg:col-span-4 col-span-12 px-[15px]">
          <SearchBar inputPlaceholder={"Look for Mocha, Robusta Roasted"} />
          <FilterOptions
            type={"list"}
            title={"Category"}
            optionsData={assets.jsonData.categoryList}
          />
          <FilterOptions
            type={"list"}
            title={"Condition"}
            optionsData={assets.jsonData.conditionList}
          />
          <FilterOptions type={"list"} title={"Brand"} optionsData={assets.jsonData.brandList} />
          <FilterOptions
            type={"tags"}
            title={"Popular Tags"}
            optionsData={assets.jsonData.popularTagsList}
          />
          <NewsletterSignup
            className={"mt-[30px]"}
            title={"Join our newsletter"}
            description={"Get exclusive weekly deals with our newsletter subscription"}
            buttonLabel={"Join Newsletter"}
            inputPlaceholder={"Email Address"}
          />
        </div>
      </LayoutWrapper>
    </>
  );
}

export default Shop;
