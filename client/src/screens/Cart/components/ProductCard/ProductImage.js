import React from "react";
import { Link } from "react-router-dom";

const ProductImage = ({ imageSrc, imageAlt, link }) => {
  return (
    <div className="sm:h-[105px] sm:w-[125px] sm:mr-[15px] sm:inline-block w-full h-[404px] mr-0 flex items-center justify-center group overflow-hidden">
      <Link to={link}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="transition-all duration-[.3s] group-hover:scale-[1.1] group-hover:rotate-[3deg]"
        />
      </Link>
    </div>
  );
};

export default ProductImage;
