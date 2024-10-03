import React from "react";
import { Link } from "react-router-dom";

const SubMenuList = ({ subList }) => {
  if (!subList) return null;

  return (
    <ul className="bg-white border-[#F0F2F3] group-hover:visible group-hover:opacity-100 group-hover:rotate-0 [transform:rotateX(-75deg)] origin-top border transition-all duration-[.3s] opacity-0 invisible shadow-[0_3px_24px_rgba(0,0,0,.04)] absolute top-full left-0 w-[230px] z-20">
      {subList.map((sublist) => {
        return (
          <li key={sublist.id}>
            <Link
              to={sublist.link}
              className="hover:bg-[#F0F2F3] text-[#838383] bg-white border-b-[#F0F2F3] text-[14px] transition-colors duration-[.3s] block border-b px-[20px] py-[17.5px] font-normal"
            >
              {sublist.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenuList;
