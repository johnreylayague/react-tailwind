import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ title, items }) => {
  return (
    <div className="lg:col-span-3 col-span-12 px-[15px]">
      <div className="lg:mb-0 lg:text-left mb-[40px] text-center">
        <h3 className="font-bold text-xl">{title}</h3>
        <ul className="text-[#515151] space-y-[15px] mt-[25px] font-normal text-[14px]">
          {items.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
