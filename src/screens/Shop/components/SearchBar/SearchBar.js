import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const SearchBar = ({ inputPlaceholder }) => {
  return (
    <div className="h-[92px] w-full p-[20px] border border-[#F0F2F3] shadow-[0_3px_24px_rgba(0,0,0,.04)]">
      <div className="flex flex-row">
        <input
          type="text"
          placeholder={inputPlaceholder}
          className="flex-1 h-[50px] py-[8px] px-[15px] border-r-0 border border-[#F0F2F3]"
        />
        <button type="button" className="h-[50px] w-[50px] border  border-[#F0F2F3]">
          <Icons.FontAwesome.MagnifyingGlass className={"text-[#838383] text-[14px]"} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
