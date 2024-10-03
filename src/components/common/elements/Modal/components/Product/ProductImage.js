import React from "react";

const ProductImage = ({ src, alt }) => {
  return (
    <div className="col-span-12 md:col-span-5 px-[15px]">
      <img src={src} alt={alt} className=" mb-[30px] md:mb-0" />
    </div>
  );
};

export default ProductImage;
