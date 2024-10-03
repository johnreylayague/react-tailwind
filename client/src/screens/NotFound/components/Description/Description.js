import React from "react";

const Description = ({ description }) => {
  return (
    <p className="text-[#838383] mt-[22px] leading-[1.8] mx-auto w-full max-w-[500px]">
      {description}
    </p>
  );
};

export default Description;
