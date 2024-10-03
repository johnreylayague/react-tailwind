import React from "react";

const ImageCard = ({ title, subTitle, pharagraph, imageClass }) => {
  return (
    <div className="col-span-12 lg:col-span-6 px-[15px]">
      <div
        className={`${imageClass} hover:after:bg-[rgba(0,0,0,.3)] after:bg-[rgba(0,0,0,.4)] lg:mb-[0px] mb-[30px] relative cursor-pointer outline-none p-[20px] overflow-hidden before:-z-10 before:absolute before:top-0 before:left-0 before:content-[''] before:bg-no-repeat before:bg-center before:bg-cover before:w-full before:h-full after:-z-10 after:transition-colors after:duration-[.3s] after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full`}
      >
        <h4 className="text-[#fff]  md:mt-[117px] mt-[5px] leading-[1.4] text-[26px] mb-[10px] font-bold">
          {title} <span className="font-normal">{subTitle}</span>
        </h4>
        <p className="text-[#fff] leading-[1.8] max-w-[350px] w-full">{pharagraph}</p>
      </div>
    </div>
  );
};

export default ImageCard;
