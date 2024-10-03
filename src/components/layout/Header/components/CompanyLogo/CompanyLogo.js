import React from "react";
import { Link } from "react-router-dom";

const CompanyLogo = ({ image, alt }) => {
  return (
    <div className="md:w-[194px]">
      <Link to={"/"} relative="path" className="w-[70px] block">
        <img src={image} alt={alt} />
      </Link>
    </div>
  );
};

export default CompanyLogo;
