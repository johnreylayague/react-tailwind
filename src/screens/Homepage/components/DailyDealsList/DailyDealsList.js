import React from "react";
import DailyDeals from "./DailyDeals.js";
import Slider from "react-slick";

const DailyDealsList = ({ sliderSettings, dataDailyDealsList }) => {
  return (
    <Slider {...sliderSettings} className="mt-[30px] -mx-[15px]">
      {dataDailyDealsList.map((product) => {
        return <DailyDeals key={product.id} productData={product} />;
      })}
    </Slider>
  );
};

export default DailyDealsList;
