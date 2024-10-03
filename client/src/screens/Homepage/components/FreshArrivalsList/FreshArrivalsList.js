import React from "react";
import FreshArrivals from "./FreshArrivals.js";
import Slider from "react-slick";

const FreshArrivalsList = ({ sliderRef, sliderSettings, dataFreshArrivalsList, openModal }) => {
  return (
    <>
      <Slider
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        {...sliderSettings}
        className="mx-[-15px] mt-[30px]"
      >
        {dataFreshArrivalsList.map((product) => (
          <FreshArrivals key={product.id} productData={product} openModal={openModal} />
        ))}
      </Slider>
    </>
  );
};

export default FreshArrivalsList;
