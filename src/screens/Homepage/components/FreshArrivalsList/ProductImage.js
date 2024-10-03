import React from "react";
import { Link } from "react-router-dom";

const ProductImage = ({ id, imageSrc, imageAlt }) => {
  return (
    <Link
      to={`/shop/product/${id}`}
      className="overflow-hidden group h-[409px] sm:h-[181px] md:h-[260px] lg:h-[277px] xl:h-[277px] flex justify-center items-center"
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="transition-all duration-[.3s] group-hover:scale-[1.1] group-hover:rotate-[3deg] w-full"
      />
    </Link>
  );
};

export default ProductImage;
