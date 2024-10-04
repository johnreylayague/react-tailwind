import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";
import { Link } from "react-router-dom";

const WishListLink = ({ noAction }) => {
  return (
    <Link
      to="/"
      onClick={noAction}
      className="border-[#F0F2F3] flex justify-center items-center h-[50px] w-[50px] border"
    >
      <Icons.FontAwesome.Heart className="text-[#838383] text-[21px]" />
    </Link>
  );
};

export default WishListLink;
