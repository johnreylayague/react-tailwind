import React from "react";

const Table = ({ children }) => {
  return (
    <table className="md:border-[#F0F2F3] md:table md:border block border-0 w-full">
      {children}
    </table>
  );
};

export default Table;
