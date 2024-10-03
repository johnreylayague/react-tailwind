import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons.js";
import TableCell from "./TableCell.js";
import ProductDetails from "./ProductDetails.js";

const TableRow = ({ wishData, noAction }) => {
  return (
    <tr className={`border-[#F0F2F3] mt-[15px] first:mt-0 md:table-row block border-b`}>
      <TableCell dataTtitle={""} className={`md:!p-0 !p-[15px]`}>
        <button
          type="button"
          name="btnClose"
          onClick={noAction}
          className="ml-auto md:mx-auto flex justify-center items-center w-[30px] h-[30px]"
        >
          <Icons.Image.CloseRed className="!h-[12px] !w-[12px]" />
        </button>
      </TableCell>

      <TableCell dataTtitle={"Product"}>
        <ProductDetails
          id={wishData.id}
          image={wishData.image}
          productName={wishData.productName}
        />
      </TableCell>

      <TableCell dataTtitle={"Availability"}>
        <span className="text-[#86858c] font-bold">{wishData.price}</span>
      </TableCell>

      <TableCell dataTtitle={"Quantity"}>
        <input
          type="number"
          className="border-[#F0F2F3] text-[#6e6e6e] h-full w-full px-[8px] py-[15px] border"
          defaultValue={1}
        />
      </TableCell>

      <TableCell dataTtitle={"Total"}>
        <span className="text-[#86858c] font-bold">{wishData.total}</span>
      </TableCell>
    </tr>
  );
};

export default TableRow;
