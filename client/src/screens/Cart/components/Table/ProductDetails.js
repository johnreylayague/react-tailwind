import React from "react";
import { Link } from "react-router-dom";

const ProductDetails = ({ id, image, productName }) => {
  return (
    <div className="md:justify-start justify-end flex flex-row ">
      <div className="h-[42px]">
        <img
          src={require(`../../../../assets/image/products/${image}`)}
          alt=""
          className="w-[50px] mr-[15px]"
        />
      </div>
      <div className="md:flex-1 flex-none">
        <Link to={`../product/${id}`} relative="path">
          {productName}
        </Link>
        <p className="text-[#848486] text-[13px] font-normal leading-[24px]">Packets</p>
      </div>
    </div>
  );
};

export default ProductDetails;
