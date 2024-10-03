import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const WishListLink = ({ onClick }) => {
  return (
    <a
      href="http://localhost:3000/"
      onClick={onClick}
      className="border-[#F0F2F3] flex justify-center items-center h-[50px] w-[50px] border"
    >
      <Icons.FontAwesome.Heart className="text-[#838383] text-[21px]" />
    </a>
  );
};

export default WishListLink;
