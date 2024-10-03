import React from "react";
import { Link } from "react-router-dom";

const CheckoutButton = ({ linkPath, linkLabel }) => {
  return (
    <Link
      to={linkPath}
      relative="path"
      className="text-[#fff] bg-[#634832] w-full mt-[30px] inline-block h-[49.9px] text-center leading-[26px] text-[14px] font-semibold px-[30px] py-[12px]"
    >
      {linkLabel}
    </Link>
  );
};

export default CheckoutButton;
