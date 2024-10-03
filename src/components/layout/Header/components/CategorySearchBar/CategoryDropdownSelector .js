import React from "react";
import styles from "./CategoryDropdownSelector.module.css";
import Icons from "../../../../common/elements/Icons/Icons.js";

const CategoryDropdownSelector = ({ categoriesData, label, selectCategory }) => {
  return (
    <div className="bg-[#F0F2F3] group relative cursor-pointer px-[15px] flex justify-center items-center">
      <span className="text-[13px] font-semibold">{label}</span>
      <ul
        className={`${styles.scrollbar} bg-white border-[#F0F2F3] invisible group-hover:visible opacity-0 group-hover:opacity-100 [transform:rotateX(-75deg)] group-hover:rotate-0  max-h-[300px] origin-top border transition-all duration-[.3s] shadow-[0_3px_24px_rgba(0,0,0,.04)] absolute top-full left-0 w-[230px] z-20`}
      >
        {categoriesData.map((category) => {
          const isCategoryCheckedStyle = category.isChecked
            ? "visible opacity-100 scale-[1]"
            : "invisible opacity-0 scale-0";

          return (
            <li key={category.id}>
              <span
                data-category-id={category.id}
                onClick={selectCategory}
                className={`bg-white hover:bg-[#F0F2F3] text-[#838383] border-b-[#F0F2F3] border-b text-[14px] transition-colors duration-[.3s] px-[20px] py-[17.5px] font-normal flex flex-row justify-between items-center`}
              >
                {category.name}
                <Icons.FontAwesome.Check
                  className={`${isCategoryCheckedStyle} text-[#30ca71] pointer-events-none text-[12px] transition-all duration-[.3s] `}
                />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryDropdownSelector;
