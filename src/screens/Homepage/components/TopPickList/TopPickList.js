import React from "react";
import TopPicks from "./TopPicks.js";

const TopPickList = ({ dataTopPicksList, openModal }) => {
  return (
    <div className="grid grid-cols-12 mx-[-15px]">
      {dataTopPicksList.map((product) => (
        <TopPicks key={product.id} openModal={openModal} productData={product} />
      ))}
    </div>
  );
};

export default TopPickList;
