import React from "react";
import { Link } from "react-router-dom";

const ProductName = ({ id, title }) => {
  return (
    <Link to={`/shop/product/${id}`} className="text-[#18181D] text-[20px]">
      {title}
    </Link>
  );
};

export default ProductName;
