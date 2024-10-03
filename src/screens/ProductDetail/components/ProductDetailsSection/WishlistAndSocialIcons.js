import React from "react";
import WishListLink from "./WishListLink";
import SocialMediaIcons from "./SocialMediaIcons";

const WishlistAndSocialIcons = ({ wishListOnClick, socialMediaPlatforms }) => {
  return (
    <div className="relative flex flex-row justify-between items-center">
      <WishListLink onClick={wishListOnClick} />
      <SocialMediaIcons platforms={socialMediaPlatforms} />
    </div>
  );
};

export default WishlistAndSocialIcons;
