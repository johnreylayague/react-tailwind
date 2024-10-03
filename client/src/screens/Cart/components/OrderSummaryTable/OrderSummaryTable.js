import React from "react";
import SummaryRow from "./SummaryRow";

const OrderSummaryTable = ({ items }) => {
  return (
    <table className="border-[#F0F2F3] border w-full text-left">
      <tbody>
        {items.map((item, index, array) => {
          const currentItemCount = index + 1;
          const className = array.length === currentItemCount ? "font-bold" : "font-normal";

          return (
            <SummaryRow
              key={item.label}
              label={item.label}
              value={item.value}
              className={className}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default OrderSummaryTable;
