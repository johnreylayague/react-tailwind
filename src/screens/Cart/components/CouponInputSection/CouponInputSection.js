import React from "react";
import Button from "./Button.js";
import Input from "./Input.js";

const CouponInputSection = ({ inputName, inputPlaceholder, btnLabel, btnName }) => {
  return (
    <div className="pt-[29px] w-full lg:max-w-[445px] flex flex-row">
      <Input name={inputName} placeholder={inputPlaceholder} />
      <Button label={btnLabel} name={btnName} />
    </div>
  );
};

export default CouponInputSection;
