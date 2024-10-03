import React from "react";

const ContainerWrapper = ({ children, className }) => {
  return (
    <div className={className}>
      <div className="container">{children}</div>
    </div>
  );
};

export default ContainerWrapper;
