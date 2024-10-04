import React from "react";

const ProductTabsDetails = ({ tabs, productTabsDetailNumber }) => {
  return (
    <>
      {tabs
        .filter((tab) => tab.number === productTabsDetailNumber)
        .map((tab) => {
          return (
            <div key={tab.number} className="col-span-12 lg:col-span-8 px-[15px]">
              <div className="border-[#F0F2F3] shadow-[0_3px_24px_rgba(0,0,0,.04)] bg-[#fff] sm:p-[40px] lg:mt-0 mt-[30px] p-[20px] border">
                <h4 className="text-[#18181D] text-[26px] font-bold leading-[1.4]">{tab.label}</h4>
                {tab.content}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductTabsDetails;
