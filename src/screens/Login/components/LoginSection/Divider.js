import React from "react";

const Divider = ({ text }) => {
  return (
    <div className="after:bg-[rgba(0,0,0,.1)] before:bg-[rgba(0,0,0,.1)] text-[#9F9E9E] relative mb-[33px] mt-[31px] flex items-center text-[13px] font-medium before:content-[''] before:flex-1  before:h-[1px] before:mr-[20px] after:content-[''] after:flex-1  after:h-[1px] after:ml-[20px]">
      {text}
    </div>
  );
};

export default Divider;
