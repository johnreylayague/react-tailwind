import React from "react";
import Icons from "../../../Icons/Icons";

const ButtonClose = ({ handleCloseModal }) => {
  return (
    <button
      type="button"
      name="btnClose"
      onClick={handleCloseModal}
      className="h-[30px] w-[30px] absolute top-[20px] right-[20px]"
    >
      <Icons.Close className={"text-[#000] text-[20px]  opacity-30"} />
    </button>
  );
};

export default ButtonClose;
