import React from "react";

const ProductTabs = ({ productDetailTabs, productTabsDetailNumber, tabs }) => {
  return (
    <div className="col-span-12 lg:col-span-4 px-[15px]">
      <ul className="space-y-[10px]">
        {tabs.map((tab) => {
          return (
            <li key={tab.number}>
              <button
                type="button"
                onClick={() => productDetailTabs(tab.number)}
                className={`text-left w-full font-semibold transition-colors duration-[.3s] leading-[21px] h-[45.19px] py-[12.5px] px-[20px]  
                  ${
                    productTabsDetailNumber === tab.number
                      ? "bg-[#38220F] text-[#fff]"
                      : "bg-[#F0F2F3] text-[#18181D]"
                  }`}
              >
                {tab.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductTabs;
