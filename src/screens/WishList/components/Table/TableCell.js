import React from "react";

const TableCell = ({ dataTtitle, className, children }) => {
  return (
    <td
      data-title={dataTtitle}
      className={`
        ${className}
        md:border-[#F0F2F3] md:table-cell md:p-[15px] md:border md:text-left md:before:hidden
        border-[#F0F2F3] p-[15px] block pl-[50%] text-right border border-b-0 
        before:text-[#86858c] before:content-[attr(data-title)] before:absolute before:top-[50%] before:left-[15px] before:translate-y-[-50%] before:w-[45%] before:truncate before:text-left before:font-bold 
        relative
        `}
    >
      {children}
    </td>
  );
};

export default TableCell;
