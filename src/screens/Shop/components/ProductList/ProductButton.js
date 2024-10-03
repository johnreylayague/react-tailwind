import React from "react";

const ProductButton = ({ title, onClickHandler, hoverColor, textColor, backGroundColor }) => {
  return (
    <button
      type="button"
      name="btnAddToCart"
      onClick={onClickHandler}
      className={`text-[${textColor}] bg-[${backGroundColor}] hover:bg-[${hoverColor}] px-[30px] py-[14.6px] flex-1 font-semibold transition-all duration-[.3s]`}
    >
      {title}
    </button>
  );
};

export default ProductButton;
