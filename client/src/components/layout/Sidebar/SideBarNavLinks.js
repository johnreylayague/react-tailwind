import React from "react";
import { Link } from "react-router-dom";

const SidebarNavLinks = ({ categoryData }) => {
  return (
    <ul>
      {categoryData.map((category) => {
        return (
          <li key={category.id}>
            <Link
              to={category.link}
              className="text-[#18181D] border-b-[rgba(0,0,0,.1)] border-b flex flex-row justify-between items-start px-[15px] py-[12.5px] font-bold text-[14px]"
            >
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarNavLinks;
