import React from "react";
import { Link } from "react-router-dom";

const ActionPrompt = ({ text, linkPath, linkText }) => {
  return (
    <p className="text-[#838383] text-center mb-[14px] mt-[20px] leading-[1.8]">
      {text}
      <Link to={linkPath} relative="path" className="text-[#18181D] inline-block underline">
        {linkText}
      </Link>
    </p>
  );
};

export default ActionPrompt;
