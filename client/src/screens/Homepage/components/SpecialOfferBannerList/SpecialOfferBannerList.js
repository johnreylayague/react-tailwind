import React from "react";
import Slider from "react-slick";
import SpecialOfferBanner from "../SpecialOfferBanner/SpecialOfferBanner";

const SpecialOfferBannerList = ({ sliderSettings, dataSalesProductList }) => {
  return (
    <Slider
      {...sliderSettings}
      className="bg-[#F0F2F3] md:px-[25px] md:py-[24px] md:mt-0 px-[0] py-[25px] mt-[30px] relative flex flex-col justify-between"
    >
      {dataSalesProductList.map((salesProduct) => (
        <SpecialOfferBanner key={salesProduct.id} product={salesProduct} />
      ))}
    </Slider>
  );
};

export default SpecialOfferBannerList;
