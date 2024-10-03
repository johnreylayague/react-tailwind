import React from "react";

const ProductInformationRow = ({ information }) => {
  return (
    <tr>
      <td className="border p-[15px] font-bold border-[#F0F2F3] text-[#86858c] bg-[#fff]">
        {information.attribute}
      </td>
      <td className="border p-[15px] border-[#F0F2F3] bg-[#fff] text-[#86858c]">
        {information.value}
      </td>
    </tr>
  );
};

export default ProductInformationRow;
