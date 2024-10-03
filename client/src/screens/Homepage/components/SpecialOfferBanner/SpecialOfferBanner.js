import React from "react";
import { Link } from "react-router-dom";

const SpecialOfferBanner = ({ product }) => {
  return (
    <div key={product.id}>
      <div className="grid grid-cols-12 px-[15px] -mx-[15px] items-center">
        <div className="col-span-12 lg:col-span-6 px-[15px]">
          <p className="text-[#838383]">
            Use code
            <span className="text-[#38220F] font-bold"> {product.discountCode} </span>
            during checkout
          </p>
          <h5 className="mt-[10px] text-[32px] leading-[38px] font-normal">
            <span className="font-bold text-[32px]">{product.percentageSale} Sale</span> On Select
            Products
          </h5>
          <p className="mt-[23px] text-[#838383] leading-[25px]">{product.description}</p>
          <Link
            to={`/shop`}
            className="bg-[#634832] text-[#fff] mt-[20px] font-bold pt-[15px] pb-[14px] pl-[30px] pr-[28px] inline-block"
          >
            SHOP NOW
          </Link>
        </div>
        <div className="lg:block hidden col-span-6 px-[15px]">
          <div className="flex justify-center items-center h-[300px]">
            <img
              src={require(`../../../../assets/image/products/${product.image}`)}
              alt={product.description}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferBanner;
