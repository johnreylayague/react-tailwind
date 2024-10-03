import React from "react";

const TableTheadRow = ({ children }) => {
  return (
    <thead className="md:static md:top-0 md:left-0 absolute top-[-9999px] left-[-9999px]">
      <tr className={`border-[#F0F2F3] md:table-row block border-b`}>{children}</tr>
    </thead>
  );
};

export default TableTheadRow;
