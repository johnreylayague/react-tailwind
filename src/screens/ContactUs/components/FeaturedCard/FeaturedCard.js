import React from "react";

const FeatureCard = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <div className="col-span-12 lg:col-span-4 px-[15px]">
      <div className="border-[#F0F2F3] bg-[#fff] relative mb-[30px] p-[20px] border shadow-[0_3px_24px_rgba(0,0,0,.04)]">
        <img src={imgSrc} alt={imgAlt} className="h-[40p] w-[40px]" />
        <h5 className="text-[18px] font-medium mt-[18px]">{title}</h5>
        <p className="text-[#838383] leading-[1.8] mt-[14px]">{description}</p>
        <div className="bg-[#634832] hidden lg:block absolute bottom-0 right-[64px] rounded h-[2px] w-[101px]"></div>
      </div>
    </div>
  );
};

export default FeatureCard;
