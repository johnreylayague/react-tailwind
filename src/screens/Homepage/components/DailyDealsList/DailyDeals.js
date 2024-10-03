import React from "react";
import SaleTag from "./SaleTag.js";
import ProductImageAndTimer from "./ProductImageAndTimer.js";
import ProductName from "./ProductName.js";
import ProductDescription from "./ProductDescription.js";
import ProductRating from "./ProductRating.js";
import ProductPrice from "./ProductPrice.js";
import Button from "./Button.js";

const DailyDeals = ({ productData }) => {
  return (
    <div className="overflow-hidden">
      <div className="border-[#F0F2F3] shadow-[0_3px_24px_rgba(0,0,0,.04)] bg-[#fff] mx-[15px] relative h-[636.44px] p-[20px] border">
        <SaleTag discount={productData.discount} />
        <ProductImageAndTimer
          id={productData.id}
          imageSrc={require(`../../../../assets/image/products/${productData.image}`)}
          imageAlt={productData.name}
        />
        <div className="mt-[24px]">
          <ProductName id={productData.id} title={productData.name} />
          <ProductDescription description={productData.description} />
          <ProductRating stars={productData.stars} />
        </div>
        <div className="border-t-[#F0F2F3] pt-[22px] mt-[25px] border-t  flex flex-row justify-between items-center">
          <ProductPrice
            currentPrice={productData.currentPrice}
            previousPrice={productData.previousPrice}
          />
          <Button>BUY NOW</Button>
        </div>
      </div>
    </div>
  );
};

export default DailyDeals;
