import React from "react";
import ProductCard from "./ProductCard";
import GridWrapper from "../../../../components/common/elements/Wrapper/GridWrapper.js";

const ProductList = ({ productData, handleProductModal }) => {
  return (
    <GridWrapper className={"pt-[30px]"}>
      {productData.map((product) => {
        return (
          <ProductCard key={product.id} openModal={handleProductModal} productData={product} />
        );
      })}
    </GridWrapper>
  );
};

export default ProductList;
