import React from "react";
import { Link } from "react-router-dom";

const ProductName = ({ id, title }) => {
  return (
    <Link
      to={`/shop/product/${id}`}
      className="
        block text-center pt-[20px] text-[16px] leading-[1.5] font-medium 
        text-[#18181D]"
    >
      {title}
    </Link>
  );
};

export default ProductName;
