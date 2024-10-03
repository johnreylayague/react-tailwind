import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";
import { Link } from "react-router-dom";
import CategorySubMenu from "./CategorySubMenu.js";

const CategorySidebar = ({ dataCategories }) => {
  return (
    <div>
      <h6 className="text-white bg-[#634832] flex flex-row items-center justify-start px-[18px] h-[54px] text-[14px] font-extrabold">
        <Icons.Image.GridMenu className={`!h-[11px] !w-[13px] mr-[12px]`} />
        Categories
      </h6>
      <ul className="border-[#F0F2F3] relative shadow-[0_3px_24px_rgba(0,0,0,.04)] rounded-b border">
        {dataCategories.map((category, index, array) => {
          const currentPosition = index + 1;
          const positionStyle = currentPosition === array.length ? "static" : "relative";
          const ChevronRightIcon = () =>
            category.subCategories && (
              <Icons.FontAwesome.ChevronRight className={`text-[#18181D] mr-[-2px] text-[11px]`} />
            );

          return (
            <li
              key={category.id}
              className={`
                ${positionStyle} group py-[10px] px-[20px] first:pt-[20px] first:pb-[10px] last:pb-[20px] last:pt-[10px]`}
            >
              <Link
                to={category.link}
                className="text-[#18181D] flex flex-row justify-between items-center text-[14px] leading-[1.8]"
              >
                {category.title}
                <ChevronRightIcon />
              </Link>
              <CategorySubMenu subCategories={category.subCategories} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategorySidebar;
