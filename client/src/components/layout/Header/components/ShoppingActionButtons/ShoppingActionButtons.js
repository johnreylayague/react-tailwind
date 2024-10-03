import React from "react";
import WishListButton from "./WishListButton";
import ShoppingCartButton from "./ShoppingCartButton";
import SidebarToggleButton from "./SidebarToggleButton";

const ShoppingActionButtons = ({ handleSideBar }) => {
  return (
    <ul className="flex flex-row space-x-[10px] items-center">
      <li className="hidden sm:block">
        <WishListButton wishlistLink={"shop/wish-list"} />
      </li>
      <li>
        <ShoppingCartButton cartLink={"/shop/cart"} packetCount={"9"} totalPrice={"249.99"} />
      </li>
      <li className="lg:hidden">
        <SidebarToggleButton handleSidebarToggle={handleSideBar} />
      </li>
    </ul>
  );
};

export default ShoppingActionButtons;
