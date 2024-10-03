import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons.js";
import TableCell from "./TableCell.js";
import ProductDetails from "./ProductDetails.js";

const TableRow = ({ wishData, noAction }) => {
  return (
    <tr className={`border-[#F0F2F3] mt-[15px] first:mt-0 md:table-row block border-b`}>
      <TableCell dataTtitle={""} className={`md:!text-center`}>
        <button type="button" name="btnClose" onClick={noAction} className="">
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

      <TableCell dataTtitle={"Price"}>
        <span className="text-[#86858c] font-bold">{wishData.price}</span>
      </TableCell>

      <TableCell dataTtitle={"Availability"}>
        {wishData ? (
          <span className="text-[#58da58] font-semibold">In Stock</span>
        ) : (
          <span className="text-[#f54978] font-semibold">Out of Stock</span>
        )}
      </TableCell>

      <TableCell dataTtitle={"Total"}>
        <span className="text-[#86858c] font-bold">{wishData.total}</span>
      </TableCell>

      <TableCell dataTtitle={"Action"}>
        <button className="text-[#fff] bg-[#634832] font-semibold text-[13px] py-[12px] px-[16px]">
          ADD TO CART
        </button>
      </TableCell>
    </tr>
  );
};

export default TableRow;
