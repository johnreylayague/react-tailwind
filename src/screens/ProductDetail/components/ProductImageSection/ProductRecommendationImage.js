import React from "react";

const ProductRecommendationImage = ({ imageSrc, imageAlt }) => {
  return (
    <div className="border-[#F0F2F3] h-[50px] w-[50px] mr-[10px] flex justify-center items-center rounded-[15px] border">
      <img
        src={require(`../../../../assets/image/products/${imageSrc}`)}
        alt={imageAlt}
        className="w-full max-w-[40px]"
      />
    </div>
  );
};

export default ProductRecommendationImage;
