import React from "react";
import ProductImage from "./ProductImage.js";
import ProductRating from "./ProductRating.js";
import ProductName from "./ProductName.js";
import ProductPrice from "./ProductPrice.js";
import ProductDescription from "./ProductDescription.js";
import ProductButton from "./ProductButton.js";

const TopPicks = ({ productData, openModal }) => {
  return (
    <div className="col-span-12 lg:col-span-6 px-[15px]">
      <div className="border-[#F0F2F3] flex flex-col justify-between mb-[30px] shadow-[0_3px_24px_rgba(0,0,0,.04)] border">
        <div className="sm:flex-row flex flex-col p-[20px] pb-[0px]">
          <ProductImage
            imageSrc={require(`../../../../assets/image/products/${productData.image}`)}
            imageAlt={"fruits"}
            link={`/shop/product/${productData.id}`}
          />
          <div className="flex-1">
            <ProductRating stars={productData.stars} />
            <ProductName link={`/shop/product/${productData.id}`} title={productData.name} />
            <ProductPrice
              currentPrice={productData.currentPrice}
              previousPrice={productData.previousPrice}
            />
            <ProductDescription description={productData.description} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-[18px]">
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

export default TopPicks;
