import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const ProductReviewList = ({ reviewData, noAction, className }) => {
  return (
    <li className={className}>
      <div className="h-[65px] w-[65px] mr-[20px]">
        <img
          src={require(`../../../../assets/image/photos/${reviewData.image}`)}
          alt={reviewData.name}
          className="object-cover object-center"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-row justify-between items-center">
          <h5 className="text-[#18181D] text-[18px] leading-[1.5] font-medium ">
            {reviewData.name}
          </h5>
          <span className="text-[#848486] leading-[21px] text-[13px] ">
            Posted on: {reviewData.date}
          </span>
        </div>
        <ul className="mt-[18px] flex flex-row space-x-[9px]">
          {reviewData.stars.map((star, index) => (
            <li key={index}>
              <Icons.FontAwesome.Star
                className={`text-[12px] ${star ? "text-[#38220F]" : "text-[#848486]"}`}
              />
            </li>
          ))}
        </ul>
        <p className="text-[#838383] mt-[22px] text-[14px] leading-[1.8]">{reviewData.comment}</p>
        <a
          href="http://localhost:3000/"
          onClick={noAction}
          className="text-[#18181D] inline-block mt-[18px] font-semibold"
        >
          Reply
        </a>
      </div>
    </li>
  );
};

export default ProductReviewList;
