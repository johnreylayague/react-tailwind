import React from "react";

const SummaryHeader = ({ children }) => {
  return (
    <th className="text-[#18181D] border-[#F0F2F3] w-1/2 border p-[15px] font-bold text-[14px]">
      {children}
    </th>
  );
};

export default SummaryHeader;
