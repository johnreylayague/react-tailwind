import React from "react";
import ProductFeatured from "./ProductFeatured.js";
import ProductImage from "./ProductImage.js";
import ProductName from "./ProductName.js";
import ProductPrice from "./ProductPrice.js";
import ProductDescription from "./ProductDescription.js";
import ProductRating from "./ProductRating.js";
import ProductButton from "./ProductButton.js";

const FreshArrivals = ({ productData, openModal }) => {
  return (
    <div className="border-[#F0F2F3] bg-[#fff] relative mx-[15px] p-[20px] shadow-[0_3px_24px_rgba(0,0,0,.04)] border">
      <ProductFeatured title={"Featured"} />
      <ProductImage
        id={productData.id}
        imageSrc={require(`../../../../assets/image/products/${productData.image}`)}
        imageAlt={productData.name}
      />
      <ProductName id={productData.id} title={productData.name} />
      <ProductPrice
        currentPrice={productData.currentPrice}
        previousPrice={productData.previousPrice}
      />
      <ProductDescription description={productData.description} />
      <ProductRating stars={productData.stars} />
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
  );
};

export default FreshArrivals;
