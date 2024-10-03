import React from "react";

const TagOptions = ({ optionsData }) => {
  return (
    <ul className="mt-[32px] flex flex-row flex-wrap">
      {optionsData.map((option) => {
        return (
          <li key={option.id}>
            <a
              href={"http://localhost:3000/"}
              className="border-[#F0F2F3] text-[#848486] bg-[#fff] inline-block leading-[24px] border h-[31.39px] px-[12px] py-[3px] mt-[6px] mr-[10px] text-[13px]"
            >
              {option.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default TagOptions;
