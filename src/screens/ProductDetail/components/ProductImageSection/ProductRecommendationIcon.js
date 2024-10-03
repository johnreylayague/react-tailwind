import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const ProductRecommendationIcon = ({ currentCount }) => {
  const content =
    currentCount % 2 === 0 ? (
      <Icons.FontAwesome.ChevronLeft className="text-[#838383] text-[14px] mr-[20px] ml-auto" />
    ) : (
      <Icons.FontAwesome.ChevronRight className="text-[#838383] text-[14px] mr-[20px] ml-auto" />
    );

  return content;
};

export default ProductRecommendationIcon;
