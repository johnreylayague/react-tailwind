import React from "react";
import Featured from "./Featured.js";

const FeaturedList = ({ dataFeaturedProductList, openModal }) => {
  return (
    <div className="grid grid-cols-12 -mx-[15px]">
      {dataFeaturedProductList.map((product) => (
        <Featured key={product.id} openModal={openModal} productData={product} />
      ))}
    </div>
  );
};

export default FeaturedList;
