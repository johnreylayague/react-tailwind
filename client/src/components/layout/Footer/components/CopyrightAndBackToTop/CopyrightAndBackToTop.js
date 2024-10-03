import React from "react";
import Icons from "../../../../common/elements/Icons/Icons";

const CopyrightAndBackToTop = ({ copyrightText, backToTopButtonLabel }) => {
  return (
    <div className="border-[rgba(0,0,0,.1)] md:flex-row flex-col mt-[50px] border-t pb-[19px] pt-[21px] flex justify-between items-center ">
      <p className="text-[#515151] md:text-left md:pb-0 text-center pb-[20px] font-normal text-[14px] ">
        {copyrightText}
      </p>
      <button
        type="button"
        name="btnBackToTop"
        className="text-[#18181D] lg:justify-start justify-center font-semibold text-[14px] flex flex-row items-center "
      >
        {backToTopButtonLabel}
        <div className="bg-[#4e4e4e] ml-[20px] h-[30px] w-[30px] flex justify-center items-center ">
          <Icons.FontAwesome.ChevronUp className={`text-white`} />
        </div>
      </button>
    </div>
  );
};

export default CopyrightAndBackToTop;
