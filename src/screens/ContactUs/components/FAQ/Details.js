import React from "react";
import Icons from "../../../../components/common/elements/Icons/Icons";

const Details = ({ title, description, className }) => {
  return (
    <details className={className}>
      <summary className="text-[#18181D] outline-none py-3 px-5 cursor-pointer list-none  font-bold flex flex-row flex-wrap justify-between items-center">
        {title}
        <Icons.FontAwesome.Plus className={`text-[#848486] text-[14px] `} />
      </summary>
      <p className="text-[#86858c] px-5 pt-2 pb-5">{description}</p>
    </details>
  );
};

export default Details;
