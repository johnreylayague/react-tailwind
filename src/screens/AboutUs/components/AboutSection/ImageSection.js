import React from "react";

const ImageSection = ({ imageSrc, imageAlt }) => {
  return (
    <div className="lg:col-span-6 col-span-12 px-[15px]">
      <div className="flex flex-wrap items-center">
        <img src={imageSrc} alt={imageAlt} className="" />
      </div>
    </div>
  );
};

export default ImageSection;
