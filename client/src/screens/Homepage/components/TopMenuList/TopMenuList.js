import React from "react";
import { Link } from "react-router-dom";
import SubMenuList from "./SubMenuList";

const TopMenuList = ({ dataTopList }) => {
  return (
    <ul className="text-[#18181D] lg:pt-[3px] md:flex pt-[30px] hidden flex-row font-semibold text-sm">
      {dataTopList.map((toplist) => {
        return (
          <li key={toplist.id} className="group relative">
            <Link
              to={"/shop"}
              className="hover:text-[#634832] transition-colors duration-[.3s] block font-semibold pr-[10px] pt-0 pb-[22.5px]"
            >
              {toplist.title}
            </Link>
            <SubMenuList subList={toplist.subList} />
          </li>
        );
      })}
    </ul>
  );
};

export default TopMenuList;
