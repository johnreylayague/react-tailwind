import React from "react";

const ProductTableFooter = ({ grandTotal }) => {
  return (
    <tfoot>
      <tr className="h-[58.19px] text-left">
        <th className="p-[15px] font-medium leading-[1.6] text-[16px] border border-[#F0F2F3]">
          Grand Total
        </th>
        <td className="text-[#86858c] p-[15px] border border-[#F0F2F3]"></td>
        <td className="font-bold p-[15px] border border-[#F0F2F3] text-[#86858c]">{grandTotal}$</td>
      </tr>
    </tfoot>
  );
};

export default ProductTableFooter;
