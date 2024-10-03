import React from "react";

const GridWrapper = ({ className = "", children }) => {
  return <div className={`${className} grid grid-cols-12 -mx-[15px]`}>{children}</div>;
};

export default GridWrapper;
