import React from "react";

const Textarea = ({ rows, name, placeholder }) => {
  return (
    <div className="col-span-12 px-[15px]">
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="outline-none w-full mb-[20px] py-[8px] px-[15px] border border-[#F0F2F3] text-[#6e6e6e] bg-[#fff]"
      ></textarea>
    </div>
  );
};

export default Textarea;
