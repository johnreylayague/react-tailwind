import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h4
      className={
        "before:bg-[#634832] border-b-[#F0F2F3] text-[#18181D] relative leading-[1.4] font-bold pb-[25px] border-b-[3px] mb-[30px] before:absolute before:content-[''] before:top-full before:h-[3px] before:w-full before:max-w-[100px] md:text-[26px] text-[22px]"
      }
    >
      {title}
    </h4>
  );
};

export default SectionTitle;
