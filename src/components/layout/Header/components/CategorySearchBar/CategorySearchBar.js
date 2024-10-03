import React from "react";
import Icons from "../../../../common/elements/Icons/Icons";
import CategoryDropdownSelector from "./CategoryDropdownSelector ";

const CategorySearchBar = ({ categoriesData, selectCategory }) => {
  return (
    <div className="border-[#F0F2F3] hidden lg:flex ml-[-8px] w-[515.783px] flex-row h-[50px] ">
      <CategoryDropdownSelector
        label={"All Categories"}
        categoriesData={categoriesData}
        selectCategory={selectCategory}
      />
      <div className="w-[400px] flex flex-row">
        <input
          type="text"
          name={"in-product-search"}
          placeholder={"Look for Mocha, Robusta Roasted"}
          className="bg-light border-[#F0F2F3] tracking-[.1px] h-[50px] flex-grow py-[8px] px-[15px] focus:z-10 border"
        />
        <button
          type="button"
          name="btnProductSearch"
          className="hover:bg-gray-100 bg-light border-[#F0F2F3] h-[50px] w-[50px] border-l-0 border transition-all duration-[.3s]"
        >
          <Icons.FontAwesome.MagnifyingGlass className={`text-[#838383] text-[14px]`} />
        </button>
      </div>
    </div>
  );
};

export default CategorySearchBar;
