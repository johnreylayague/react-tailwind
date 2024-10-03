import React from "react";
import ProductReviewList from "./ProductReviewList.js";
import InputField from "./InputField.js";
import TextareaField from "./TextareaField.js";
import GridWrapper from "../../../../components/common/elements/Wrapper/GridWrapper.js";
import Button from "./Button.js";
import StarReview from "./StarReview.js";

const ProductReviews = ({ noAction, reviewsData }) => {
  return (
    <>
      <StarReview label={"Your Review"} defaultStars={[false, false, false, false, false]} />
      <GridWrapper className="mt-[27px]">
        <InputField
          className={"col-span-12 md:col-span-6 px-[15px] mb-[20px]"}
          name={"in-full-name"}
          placeholder={"Full Name"}
        />
        <InputField
          className={"col-span-12 md:col-span-6 px-[15px] mb-[20px]"}
          name={"in-email-address"}
          placeholder="Email Address"
        />
        <TextareaField
          className={"col-span-12 px-[15px]"}
          name={"in-comment"}
          placeholder={"Type your comment..."}
        />
      </GridWrapper>

      <Button>POST REVIEW</Button>

      <ul className="mt-[50px]">
        {reviewsData.map((review) => {
          return (
            <ProductReviewList
              key={review.id}
              reviewData={review}
              noAction={noAction}
              className={
                "border-b-[rgba(0,0,0,.1)] flex flex-row border-b pb-[32px] mb-[30px]  last:border-0 last:m-0 last:p-0"
              }
            />
          );
        })}
      </ul>
    </>
  );
};

export default ProductReviews;
