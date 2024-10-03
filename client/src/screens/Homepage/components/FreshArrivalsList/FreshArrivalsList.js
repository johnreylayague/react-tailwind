import React from "react";
import FreshArrivals from "./FreshArrivals.js";
import Slider from "react-slick";

const FreshArrivalsList = ({ sliderSettings, dataFreshArrivalsList, openModal }) => {
  return (
    <Slider {...sliderSettings} className="mx-[-15px] mt-[30px]">
      {dataFreshArrivalsList.map((product) => (
        <FreshArrivals key={product.id} productData={product} openModal={openModal} />
      ))}
    </Slider>
  );
};

export default FreshArrivalsList;
