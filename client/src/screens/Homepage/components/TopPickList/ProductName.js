import React from "react";
import { Link } from "react-router-dom";

const ProductName = ({ link, title }) => {
  return (
    <div className="mt-[13px]">
      <Link to={link} className="text-[#18181D] text-[20px] leading-[1.5] font-medium">
        {title}
      </Link>
    </div>
  );
};

export default ProductName;
