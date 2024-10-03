import React from "react";
import { Link } from "react-router-dom";

const PrivacyNotice = ({ className, mainText, linkText, linkPath }) => {
  return (
    <div className={className}>
      <p className="text-[#838383] text-[11.2px] leading-[1.6]">
        {mainText}
        <Link
          to={linkPath}
          relative="path"
          className="text-[#18181D] hover:underline inline-block font-bold"
        >
          {linkText}
        </Link>
        {"."}
      </p>
    </div>
  );
};

export default PrivacyNotice;
