import React from "react";

const ParagraphList = ({ pharagraphData }) => {
  return (
    <>
      {pharagraphData.map((pharagraph, index) => {
        return (
          <p key={index} className="text-[#838383] mt-[20px] leading-[1.8]">
            {pharagraph}
          </p>
        );
      })}
    </>
  );
};

export default ParagraphList;
