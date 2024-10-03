import React from "react";

const Button = ({ type, name, text }) => {
  return (
    <div className="col-span-12 px-[15px]">
      <button
        type={type}
        name={name}
        className="outline-none text-center font-semibold py-[14.5px] px-[30px] text-[#fff] bg-[#634832] "
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
