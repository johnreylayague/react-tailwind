import React from "react";
import { Link } from "react-router-dom";

const ProductImage = ({ id, imageSrc, imageAlt }) => {
  return (
    <Link
      to={`/shop/product/${id}`}
      className="overflow-hidden group h-[254px] sm:h-[166px] lg:h-[241px] xl:h-[258px]  flex justify-center items-center"
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="group-hover:scale-[1.1] group-hover:rotate-[3deg] transition-all duration-[.3s] w-full"
      />
    </Link>
  );
};

export default ProductImage;
