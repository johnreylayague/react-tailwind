import React from "react";

const NewsletterSignup = ({ className, title, description, buttonLabel, inputPlaceholder }) => {
  return (
    <div className={`bg-[#F0F2F3] p-[20px] ${className}`}>
      <h5 className="text-[#fff] text-[20px] leading-[1.5] font-medium">{title}</h5>
      <p className="text-[#838383] mt-[15px] text-[14px] leading-[1.8]">{description}</p>
      <form className="mt-[20px]">
        <input
          type="text"
          placeholder={inputPlaceholder}
          className="text-[#6e6e6e] bg-[#fff] outline-none h-[50px] px-[15px] py-[8px] w-full text-[14px]"
        />
        <button
          type="button"
          className="text-[#fff] bg-[#5d5d5d] outline-none mt-[20px] w-full h-[49.9px] text-center font-semibold px-[30px] py-[12px] text-[14px]"
        >
          {buttonLabel}
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
