import React from "react";

const ParagraphList = ({ paragraphData }) => {
  return (
    <>
      {paragraphData.map((paragraph, index) => {
        return (
          <p key={index} className="mt-[15px] leading-[1.8] text-[#838383]">
            {paragraph}
          </p>
        );
      })}
    </>
  );
};

export default ParagraphList;
