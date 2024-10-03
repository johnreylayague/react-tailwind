import React from "react";
import { Link } from "react-router-dom";

const ProductRow = ({ product }) => {
  return (
    <tr className="h-[75.8px]">
      <td className="p-[15px] border border-[#F0F2F3]">
        <Link to={"/"} relative="path" className="text-[14px] font-medium text-[#18181D]">
          {product.name}
        </Link>
        <span className="block text-[13px] font-normal leading-[21px] text-[#848486]">
          {product.details}
        </span>
      </td>
      <td className="text-[#86858c] p-[15px] border border-[#F0F2F3]">{product.quantity}</td>
      <td className="font-bold p-[15px] border border-[#F0F2F3] text-[#86858c]">{product.total}</td>
    </tr>
  );
};

export default ProductRow;
