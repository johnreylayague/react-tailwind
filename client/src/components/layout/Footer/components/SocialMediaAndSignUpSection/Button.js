import React from "react";
import { Link } from "react-router-dom";

const ButtonPrimary = ({ to, label, className = "" }) => {
  return (
    <Link
      to={to}
      className={`${className} bg-[#634832] text-[#fff] mt-[15px] inline-block px-[16px] py-[12px] text-[13px] font-semibold`}
    >
      {label}
    </Link>
  );
};

export default ButtonPrimary;
