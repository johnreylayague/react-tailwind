import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";
import { Link } from "react-router-dom";

const ProductReviewList = ({ reviewData, noAction, className }) => {
  return (
    <li className={className}>
      <div className="w-[45px] sm:w-[65px] mr-[20px]">
        <img
          src={require(`../../../../assets/image/photos/${reviewData.image}`)}
          alt={reviewData.name}
          className="object-cover object-center"
        />
      </div>
      <div className={"flex-1"}>
        <div className={"flex flex-col sm:flex-row"}>
          <div className={"flex-1"}>
            <h5 className={"text-[#18181D] text-[18px] leading-[1.5] font-medium "}>
              {reviewData.name}
            </h5>
            <ul className={"mt-[18px] flex flex-row space-x-[9px]"}>
              {reviewData.stars.map((star, index) => (
                <li key={index}>
                  <Icons.FontAwesome.Star
                    className={`text-[12px] ${star ? "text-[#38220F]" : "text-[#848486]"}`}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className={"flex-1 text-left sm:text-right pt-[25px] sm:pt-[5px]"}>
            <span className="text-[#848486] leading-[21px] text-[13px]">
              Posted on: {reviewData.date}
            </span>
          </div>
        </div>

        <p className={"text-[#838383] mt-[15px] text-[14px] leading-[1.8]"}>{reviewData.comment}</p>
        <Link
          to="/"
          onClick={noAction}
          className={"text-[#18181D] inline-block mt-[18px] font-semibold"}
        >
          Reply
        </Link>
      </div>
    </li>
  );
};

export default ProductReviewList;
