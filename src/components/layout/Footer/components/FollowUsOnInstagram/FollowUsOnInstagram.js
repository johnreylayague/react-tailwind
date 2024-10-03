import React from "react";
import MediaWrapper from "./MediaWrapper.js";
import BannerWithCTA from "./BannerWithCTA.js";

const FollowUsOnInstagram = ({
  title,
  backGroundImageSrc,
  backGroundImageAlt,
  buttonLink,
  buttonLabel,
  dataBannerList,
  noAction,
}) => {
  return (
    <div className="pt-[50px]">
      <div className="grid grid-cols-12">
        <BannerWithCTA
          buttonLabel={buttonLabel}
          title={title}
          noAction={noAction}
          buttonLink={buttonLink}
          backGroundImageAlt={backGroundImageAlt}
          backGroundImageSrc={backGroundImageSrc}
        />
        <MediaWrapper dataBannerList={dataBannerList} />
      </div>
    </div>
  );
};

export default FollowUsOnInstagram;
