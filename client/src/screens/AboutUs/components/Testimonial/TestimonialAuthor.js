import React from "react";

const TestimonialAuthor = ({ name, jobTitle, imageSrc, imageAlt }) => {
  return (
    <div className="mt-[20px] flex flex-row items-center gap-[15px] ">
      <div>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-[80px] h-[80px] object-cover object-center"
        />
      </div>

      <div className="flex-1">
        <h6 className="text-[#18181D] text-[16px] leading-[1.7] font-medium">{name}</h6>
        <span className="text-[#848486] leading-[20px] font-semibold text-[13px]">{jobTitle}</span>
      </div>
    </div>
  );
};

export default TestimonialAuthor;
