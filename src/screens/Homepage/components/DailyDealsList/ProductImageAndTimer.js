import React from "react";
import { Link } from "react-router-dom";

const ProductImageAndTimer = ({ id, imageSrc, imageAlt }) => {
  return (
    <div className="h-[325px] group mb-[20px]">
      <Link
        to={`/shop/product/${id}`}
        relative="path"
        className="h-[258.719px] overflow-hidden flex justify-center items-center"
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full transition-all duration-[.3s] group-hover:scale-[1.1] group-hover:rotate-[3deg]"
        />
      </Link>
      <div className="transition-colors duration-[.3s] mt-[20px] w-full h-[47px] border p-[10px] text-center group-hover:bg-[#F0F2F3] bg-[#fff] border-[#F0F2F3]">
        <span className="text-[14px] font-semibold leading-[25.2px] text-[#86858c]">
          00 days 00:00:00
        </span>
      </div>
    </div>
  );
};

export default ProductImageAndTimer;
