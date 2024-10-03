import React from "react";
import { Link } from "react-router-dom";
import SubItemList from "./SubItemList";

const PopularItemsList = ({ dataPopularItems }) => {
  return (
    <ul className="text-[#838383] mt-[34px] mb-[30px] text-[14px] space-y-[26px]">
      {dataPopularItems.map((item) => {
        return (
          <li key={item.id}>
            <Link to={item.link} className="flex flex-row justify-between">
              {item.title}
              <span>({item.total})</span>
            </Link>
            <SubItemList subListData={item.subList} />
          </li>
        );
      })}
    </ul>
  );
};

export default PopularItemsList;
