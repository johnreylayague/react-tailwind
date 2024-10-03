import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ linkPath, linkLabel }) => {
  return (
    <Link
      to={linkPath}
      className="text-[#634832] bg-[#fff] mt-[20px] inline-block font-semibold text-center py-[15px] px-[30px] shadow-[0_3px_24px_rgba(0,0,0,.1)]"
    >
      {linkLabel}
    </Link>
  );
};

export default ButtonLink;
