import React from "react";
import ProductRow from "./ProductRow.js";
import ProductTableFooter from "./ProductTableFooter.js";

const ProductTable = ({ tableData, grandTotal }) => {
  return (
    <table className="mt-[10px] lg:mt-0 border border-[#F0F2F3] w-full">
      <thead>
        <tr className="text-left h-[56.9px] ">
          <th className="font-bold p-[15px] border border-[#F0F2F3] text-[#18181D]">Product</th>
          <th className="font-bold p-[15px] border border-[#F0F2F3] text-[#18181D]">Qunantity</th>
          <th className="font-bold p-[15px] border border-[#F0F2F3] text-[#18181D]">Total</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((product, index) => {
          return <ProductRow key={index} product={product} />;
        })}
      </tbody>
      <ProductTableFooter grandTotal={grandTotal} />
    </table>
  );
};

export default ProductTable;
