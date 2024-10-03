import React from "react";

const BannerWithCTA = ({
  title,
  backGroundImageSrc,
  backGroundImageAlt,
  buttonLink,
  buttonLabel,
  noAction,
}) => {
  return (
    <div className="lg:col-span-4 col-span-12 relative">
      <img
        src={backGroundImageSrc}
        alt={backGroundImageAlt}
        className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10"
      />
      <div className="lg:p-0 lg:max-w-[300px] p-[40px] max-w-[400px] flex flex-col justify-center items-center h-full w-full  mx-auto">
        <h4 className="text-[#fff] text-center text-[34px] leading-[1.4] font-bold">{title}</h4>
        <a
          href={buttonLink}
          onClick={noAction}
          className="text-[#634832] bg-[#fff] mt-[30px] text-[14px] px-[30px] py-[12px] font-semibold text-center inline-block leading-[25px]"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default BannerWithCTA;
