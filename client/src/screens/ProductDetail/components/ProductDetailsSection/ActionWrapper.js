import React from "react";

const ActionWrapper = ({ children }) => {
  return <div className="flex-col sm:flex-row mt-[25px] flex gap-[20px]">{children}</div>;
};

export default ActionWrapper;
