import React from "react";

const LayoutWrapper = ({ children, className }) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="grid grid-cols-12 mx-[-15px]">{children}</div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
