import React from "react";

const Button = ({ type, name, className, text }) => {
  return (
    <div className={className}>
      <button
        type={type}
        name={name}
        className="text-[#fff] bg-[#634832] mt-[20px] inline-block text-center font-semibold py-[14.5px] px-[30px] shadow-[0_3px_24px_rgba(0,0,0,.1)] "
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
