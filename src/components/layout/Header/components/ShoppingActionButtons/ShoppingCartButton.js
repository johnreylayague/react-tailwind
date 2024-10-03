import React from "react";
import Icons from "../../../../common/elements/Icons/Icons";
import { Link } from "react-router-dom";

const ShoppingCartButton = ({ cartLink, packetCount, totalPrice }) => {
  return (
    <Link
      to={cartLink}
      relative="path"
      className="hover:bg-gray-100 bg-light border-[#F0F2F3] sm:w-[126px] sm:h-[58px] h-[40px] w-[40px] flex flex-row justify-center items-center border"
    >
      <Icons.FontAwesome.BasketShopping
        className={`text-gray-400 mt-[-2px] text-[18px] sm:text-[22px]`}
      />
      <div className="hidden sm:block ml-[16px]">
        <span className="text-[#18181D] mt-[1px] mb-[3px] text-[13px] font-semibold block">
          {packetCount} Packet
        </span>
        <span className="text-[#634832] text-[13px] font-semibold">{totalPrice}</span>
      </div>
    </Link>
  );
};

export default ShoppingCartButton;
