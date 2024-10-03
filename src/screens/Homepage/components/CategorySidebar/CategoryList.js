import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ categoryData }) => {
  return (
    <ul className="space-y-[26px] inline-block align-top">
      {categoryData.map((category) => {
        return (
          <li key={category.id} className="px-[20px] first:pt-[22px]">
            <Link to={category.link}>{category.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
