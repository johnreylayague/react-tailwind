import React from "react";
import Checkbox from "./Checkbox.js";

const CheckboxList = ({ optionsData }) => {
  return (
    <ul className="mt-[32px] space-y-[21.9px]">
      {optionsData.map((option) => {
        return (
          <li key={option.id}>
            <Checkbox id={option.id} name={option.name} />
          </li>
        );
      })}
    </ul>
  );
};

export default CheckboxList;
