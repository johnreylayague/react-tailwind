import React from "react";

function CompanyLogo({ logoSrc, altText }) {
  return (
    <div className="flex flex-row justify-center">
      <img src={logoSrc} alt={altText} className="max-w-[150px] w-full" />
    </div>
  );
}

export default CompanyLogo;
