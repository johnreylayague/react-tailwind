import React from "react";
import WishlistAndSocialIcons from "./WishlistAndSocialIcons";
import ProductRating from "./ProductRating";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductDescription from "./ProductDescription";
import SelectField from "./SelectField";
import ActionWrapper from "./ActionWrapper";
import BuyNowButton from "./BuyNowButton";
import QuantityControl from "./QuantityControl";
import ProductAttributes from "./ProductAttributes";

const ProductDetailsSection = ({
  noAction,
  productCurrentPrice,
  productPreviousPrice,
  productName,
  socialMediaPlatforms,
  productRating,
  productDescription,
  productAttribute,
  productQuantity,
}) => {
  return (
    <div className="col-span-12 lg:col-span-7 px-[15px]">
      <WishlistAndSocialIcons noAction={noAction} socialMediaPlatforms={socialMediaPlatforms} />
      <ProductRating stars={productRating} />
      <ProductName title={productName} />
      <ProductPrice currentPrice={productCurrentPrice} previousPrice={productPreviousPrice} />
      <ProductDescription description={productDescription} />
      <SelectField
        defaultLabel={"Select Amount"}
        optionsData={[
          { id: 1, label: "1 Packet" },
          { id: 2, label: "2 Packet" },
          { id: 3, label: "3 Packet" },
        ]}
      />
      <SelectField
        defaultLabel={"Select a Breed"}
        optionsData={[
          { id: 1, label: "1 Packet" },
          { id: 2, label: "Italian" },
          { id: 3, label: "Egyptian" },
        ]}
      />
      <ActionWrapper>
        <BuyNowButton btnLabel={"BUY NOW"} />
        <QuantityControl quantity={productQuantity} />
      </ActionWrapper>
      <ProductAttributes noAction={noAction} listData={productAttribute} />
    </div>
  );
};

export default ProductDetailsSection;
