import React from "react";

const ContainerWrapper = ({ children }) => {
  return (
    <div className={"pt-[50px]"}>
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="text-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ContainerWrapper;
