import React from "react";

const SummaryData = ({ className, children }) => {
  return (
    <td className={`text-[#86858c] border-[#F0F2F3] w-1/2 border p-[15px] ${className}`}>
      {children}
    </td>
  );
};

export default SummaryData;
