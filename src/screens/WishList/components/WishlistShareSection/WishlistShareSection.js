import React from "react";
import SocialShareList from "./SocialShareList";

const WishlistShareSection = ({ title, noAction, platforms }) => {
  return (
    <div className="text-center">
      <h5 className="text-[21px] leading-[1.5] font-medium text-[#18181D]">{title}</h5>
      <SocialShareList noAction={noAction} platforms={platforms} />
    </div>
  );
};

export default WishlistShareSection;
