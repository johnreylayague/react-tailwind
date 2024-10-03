import React from "react";
import Icons from "../../../../common/elements/Icons/Icons";
import { Link } from "react-router-dom";

const WishListButton = ({ wishlistLink }) => {
  return (
    <Link
      to={wishlistLink}
      relative="path"
      className="border-[#F0F2F3] hover:bg-gray-100 sm:h-[58px] sm:w-[58px] h-[40px] w-[40px] border flex justify-center items-center"
    >
      <Icons.FontAwesome.Heart className={`text-[#838383] text-[22px]`} />
    </Link>
  );
};

export default WishListButton;
