import React from "react";
import WishListLink from "./WishListLink";
import SocialMediaIcons from "./SocialMediaIcons";

const WishlistAndSocialIcons = ({ noAction, socialMediaPlatforms }) => {
  return (
    <div className="relative flex flex-row justify-between items-center">
      <WishListLink noAction={noAction} />
      <SocialMediaIcons platforms={socialMediaPlatforms} />
    </div>
  );
};

export default WishlistAndSocialIcons;
