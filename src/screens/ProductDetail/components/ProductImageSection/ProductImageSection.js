import React from "react";
import ProductImage from "./ProductImage";
import ProductRecommendation from "./ProductRecommendation";

const ProductImageSection = ({ productImage, productName, productRecommendation }) => {
  return (
    <div className="col-span-12 lg:col-span-5 px-[15px]">
      <ProductImage productImage={productImage} productAlt={productName} />
      <ProductRecommendation productRecommendation={productRecommendation} />
    </div>
  );
};

export default ProductImageSection;
