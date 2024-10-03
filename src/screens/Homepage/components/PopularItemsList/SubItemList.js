import React from "react";
import { Link } from "react-router-dom";

const SubItemList = ({ subListData }) => {
  if (!Array.isArray(subListData)) return null;

  return (
    <ul className="mt-[25px] ml-[20px] space-y-[25px]">
      {subListData.map((subList) => {
        return (
          <li key={subList.id}>
            <Link to={subList.link} className="flex flex-row justify-between">
              {subList.title} <span>({subList.total})</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SubItemList;
