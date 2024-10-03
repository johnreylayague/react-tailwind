import React from "react";

const ProductAttributes = ({ listData, onClick }) => {
  return (
    <ul className="mt-[23px] flex flex-col space-y-[15px]">
      {listData.map((list) => {
        return (
          <li key={list.id} className="flex flex-row">
            <span className="text-[#18181D] inline-block w-[120px] font-semibold">
              {list.label}:
            </span>
            <a href="http://localhost:3000/" onClick={onClick} className="text-[#838383]">
              {list.value}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductAttributes;
