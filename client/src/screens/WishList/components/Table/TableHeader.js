import React from "react";

const TableHeader = ({ className, children }) => {
  return (
    <th className={`${className} border-[#F0F2F3] border py-[17.6px] px-[15px]`}>
      <span className="font-bold text-[14px] text-[#18181D]">{children}</span>
    </th>
  );
};

export default TableHeader;
