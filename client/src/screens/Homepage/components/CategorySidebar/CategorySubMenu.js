import React from "react";
import styles from "./CategorySubMenu.module.css";
import CategoryList from "./CategoryList";

const CategorySubMenu = ({ subCategories }) => {
  if (!subCategories) return null;

  return (
    <ul className="bg-white lg:group-hover:left-full lg:w-[400px] lg:top-0 lg:left-[90%] w-full left-0 group-hover:left-0 top-full group-hover:opacity-100 group-hover:visible invisible space-y-[26px] pb-[22px] transition-all duration-[.3s] opacity-0 z-50  absolute shadow-md">
      <li>
        <div className={`bg-red-50 relative ${styles["category_banner"]} `}>
          <img
            src={require(`../../../../assets/image/banner/${subCategories.bannerImage}`)}
            alt={subCategories.bannerAlt}
            className="w-full"
          />
          <div className="text-white absolute z-10 bottom-0 w-full px-[20px] py-[23px]">
            <h6 className="text-base font-semibold mb-[4px]">{subCategories.title}</h6>
            <p className="text-sm">{subCategories.subTitle}</p>
          </div>
        </div>
        {subCategories.categories.map((subCategory, index) => {
          return <CategoryList key={index} categoryData={subCategory} />;
        })}
      </li>
    </ul>
  );
};

export default CategorySubMenu;
