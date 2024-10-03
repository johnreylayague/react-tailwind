import React from "react";

const ParagraphList = ({ paragraphData }) => {
  return (
    <>
      {paragraphData.map((paragraph, index) => {
        return (
          <p key={index} className="text-[#838383] mt-[17px] leading-[1.8]">
            {paragraph}
          </p>
        );
      })}
    </>
  );
};

export default ParagraphList;
