import React from "react";
import Icons from "../Icons/Icons";

const ArrowButton = ({ direction }) => {
  let content = "";

  if (direction === "left") {
    content = (
      <Icons.ArrowLeft className="group-hover:text-[#fff] text-[#18181D] text-[17px] transition-all duration-[.3s]" />
    );
  } else if (direction === "right") {
    content = (
      <Icons.ArrowRight className="group-hover:text-[#fff] text-[#18181D] text-[17px] transition-all duration-[.3s]" />
    );
  } else {
    content = <span className="text-[#ff0000] text-[14px]">Invalid direction</span>;
  }

  return (
    <button className="bg-[#F0F2F3] text-[#18181D] hover:bg-[#634832] hover:shadow-[4px_3px_24px_rgba(99,72,50,0.5)] group transition-colors duration-[.3s]  flex flex-row justify-center items-center px-[12.57px] py-[11.5px]">
      {content}
    </button>
  );
};

export default ArrowButton;
