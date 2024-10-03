import React from "react";
import Media from "./Media";

const MediaWrapper = ({ dataBannerList }) => {
  return (
    <div className="lg:col-span-8 col-span-12">
      <div className="grid grid-cols-12 ">
        {dataBannerList.map((banner) => {
          return <Media key={banner.id} image={banner.image} alt={banner.alt} />;
        })}
      </div>
    </div>
  );
};

export default MediaWrapper;
