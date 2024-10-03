import React from "react";

const ProductCardWrapper = ({ children }) => {
  return (
    <div className="col-span-12 sm:col-span-6">
      <div className="mx-[15px]">
        <div className="border-[#F0F2F3] bg-[#fff] mb-[30px] relative flex flex-col mx-auto p-[20px] shadow-[0_3px_24px_rgba(0,0,0,.04)] border">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProductCardWrapper;
