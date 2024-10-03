import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons.js";

const ListItem = ({ listItemData }) => {
  return (
    <ul className="text-[#838383] mt-[18px] space-y-[15px]">
      {listItemData.map((item, index) => {
        return (
          <li key={index} className="mt-[10px] flex flex-row items-center gap-[10px]">
            <Icons.FontAwesome.CirclePlus className="text-[#634832] text-[13px]" />
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default ListItem;
