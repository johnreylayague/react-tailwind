import React from "react";
import { Link } from "react-router-dom";

const PromoBanner = ({
  title,
  pharagraph,
  buttonLabel,
  buttonLink,
  backgroundAlt,
  backgroundSrc,
}) => {
  return (
    <div className={`relative`}>
      <img
        src={backgroundSrc}
        alt={backgroundAlt}
        className="absolute top-0 left-0 h-full w-full object-cover object-center -z-[1]"
      />
      <div className="p-[20px] sm:p-[40px] max-w-[600px] w-full">
        <h3 className="text-[#fff] text-[26px] md:text-[34px] leading-[1.4] font-bold">{title}</h3>
        <p className="text-[#fff] mt-[20px]  text-[14px] leading-[1.8]">{pharagraph}</p>
        <Link
          to={buttonLink}
          className="bg-[#fff] text-[#634832] mt-[25px] inline-block leading-[24px] text-center px-[30px] py-[12px] text-[14px] font-semibold"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
};

export default PromoBanner;
