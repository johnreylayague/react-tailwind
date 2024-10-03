import React from "react";
import ProductImage from "./ProductImage.js";
import ProductName from "./ProductName.js";
import ProductRating from "./ProductRating.js";
import ProductPrice from "./ProductPrice.js";
import ProductButton from "./ProductButton.js";

const Featured = ({ productData, openModal }) => {
  return (
    <div className="col-span-12 sm:col-span-6  px-[15px]">
      <div className="border-[#F0F2F3] bg-[#fff] shadow-[0_3px_24px_rgba(0,0,0,.04)] relative mb-[28px] mx-auto flex flex-col p-[20px] border">
        <ProductImage
          id={productData.id}
          imageSrc={require(`../../../../assets/image/products/${productData.image}`)}
          imageAlt={productData.name}
        />
        <ProductName id={productData.id} title={productData.name} />
        <ProductRating stars={productData.stars} />
        <ProductPrice
          currentPrice={productData.currentPrice}
          previousPrice={productData.previousPrice}
        />
        <div className="flex flex-col xl:flex-row  mt-[23px] -mx-[20px] -mb-[20px] border-b-0">
          <ProductButton
            title={"ADD TO CART"}
            textColor={"#fff"}
            backGroundColor={"#634832"}
            hoverColor={""}
          />
          <ProductButton
            title={"QUICK VIEW"}
            textColor={"#634832"}
            backGroundColor={"#fff"}
            hoverColor={"#F0F2F3"}
            onClickHandler={openModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
