import React from "react";
import ProductRecommendationImage from "./ProductRecommendationImage.js";
import ProductRecommendationLabel from "./ProductRecommendationLabel.js";
import ProductRecommendationIcon from "./ProductRecommendationIcon.js";
import { Link } from "react-router-dom";

const ProductRecommendation = ({ productRecommendation }) => {
  return (
    <div className="mb-[30px] mt-[37px]">
      <ul className="space-y-[10px]">
        {productRecommendation.map((product, index) => {
          return (
            <li key={product.id}>
              <Link
                to={`/shop/product/${product.id}`}
                relative="path"
                className="bg-[#fff] border-[#F0F2F3] p-[10px] flex flex-row items-center border shadow-[0_3px_24px_rgba(0,0,0,.04)]"
              >
                <ProductRecommendationImage
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                />
                <ProductRecommendationLabel label={product.title} />
                <ProductRecommendationIcon currentCount={index} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductRecommendation;
