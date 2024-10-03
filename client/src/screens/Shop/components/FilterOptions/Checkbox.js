import React from "react";
import assets from "../../../../assets/assets";

const Checkbox = ({ id, name }) => {
  return (
    <>
      <div className="inline-flex items-center">
        <label className="relative flex items-center rounded-full cursor-pointer" htmlFor={id}>
          <input
            type="checkbox"
            className="bg-[#dee2e6] active:bg-[#b3d7ff] checked:border-[#38220F] checked:bg-[#38220F] checked:before:bg-[#38220F] checked:active:bg-[#38220F] peer relative h-[16px] w-[16px] cursor-pointer appearance-none rounded-[.25rem] transition-colors duration-[.3s]"
            id={id}
          />
          <span className="absolute transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <img src={assets.icons.check} alt="" className="w-[8px]" />
          </span>
        </label>
        <label
          className="pl-[8px] font-normal cursor-pointer select-none leading-[23px] text-[#18181D]"
          htmlFor={id}
        >
          {name}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
