import React from "react";
import SummaryHeader from "./SummaryHeader";
import SummaryData from "./SummaryData";

const SummaryRow = ({ label, value, className }) => {
  return (
    <tr className="h-[56.19px]">
      <SummaryHeader>{label}</SummaryHeader>
      <SummaryData className={className}>{value}</SummaryData>
    </tr>
  );
};

export default SummaryRow;
