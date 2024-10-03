import React from "react";
import ProductInformationRow from "./ProductInformationRow";

const ProductInformation = ({ informationData }) => {
  return (
    <table className="mt-[21px]  text-left w-full">
      <thead>
        <tr>
          <th className="border p-[15px] border-[#F0F2F3] bg-[#fff]">Attributes</th>
          <th className="border p-[15px] border-[#F0F2F3] bg-[#fff]">Values</th>
        </tr>
      </thead>
      <tbody>
        {informationData.map((information) => {
          return <ProductInformationRow key={information.id} information={information} />;
        })}
      </tbody>
    </table>
  );
};

export default ProductInformation;
