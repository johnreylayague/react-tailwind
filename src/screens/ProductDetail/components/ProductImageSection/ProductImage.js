import React from "react";

const ProductImage = ({ productImage, productAlt }) => {
  return (
    <div className="h-[373.797px] relative overflow-hidden flex justify-center items-center">
      <img src={require(`../../../../assets/image/products/${productImage}`)} alt={productAlt} />
    </div>
  );
};

export default ProductImage;
