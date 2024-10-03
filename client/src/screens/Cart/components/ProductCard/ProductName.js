import React from "react";
import { Link } from "react-router-dom";

const ProductName = ({ linkPath, title }) => {
  return (
    <Link
      to={linkPath}
      className="text-[#18181D] truncate block pt-[20px] text-[21px] leading-[1.5] font-medium"
    >
      {title}
    </Link>
  );
};

export default ProductName;
