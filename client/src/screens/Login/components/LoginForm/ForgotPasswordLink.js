import React from "react";
import { Link } from "react-router-dom";

const ForgotPasswordLink = ({ linkText, linkPath }) => {
  return (
    <div className="col-span-12 text-center">
      <Link to={linkPath} relative="path" className="mt-[4px] inline-block underline">
        {linkText}
      </Link>
    </div>
  );
};

export default ForgotPasswordLink;
