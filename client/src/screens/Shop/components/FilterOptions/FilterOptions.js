import React from "react";
import SectionTitle from "./SectionTitle.js";
import CheckboxList from "./CheckboxList.js";
import TagOptions from "./TagOptions.js";

const FilterOptions = ({ title, optionsData, type }) => {
  return (
    <div className="pt-[30px]">
      <SectionTitle title={title} />
      {type === "tags" && <TagOptions optionsData={optionsData} />}
      {type === "list" && <CheckboxList optionsData={optionsData} />}
    </div>
  );
};

export default FilterOptions;
