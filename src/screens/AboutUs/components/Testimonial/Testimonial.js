import React from "react";
import TestimonialAuthor from "./TestimonialAuthor.js";
import TestimonialRating from "./TestimonialRating.js";

const Testimonial = ({ title, image, pharagraph, jobTitle, name, rating }) => {
  return (
    <>
      <div className="lg:col-span-4 md:col-span-6 col-span-12 px-[15px]">
        <div className="lg:mb-0 mb-[30px]">
          <div className="bg-[#F0F2F3] before:border-t-[#F0F2F3] relative p-[20px] before:absolute before:top-full before:left-[20px] before:content-[''] before:w-0 before:h-0 before:border-l-[10px] before:border-l-[transparent] before:border-r-[10px] before:border-r-[transparent] before:border-t-[10px] after:absolute after:top-[33px] after:right-[20px] after:content-[''] after:w-[34px] after:h-[35px] after:bg-[url('./assets/icons/quotation.png')] after:bg-no-repeat  after:bg-center after:bg-contain">
            <h4 className="text-[#18181D] text-[21px] leading-[1.5] font-medium">{title}</h4>
            <TestimonialRating rating={rating} />
            <p className="mt-[11px] leading-[1.8] text-[#838383]">{pharagraph}</p>
          </div>
          <TestimonialAuthor jobTitle={jobTitle} name={name} imageSrc={image} imageAlt={name} />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
