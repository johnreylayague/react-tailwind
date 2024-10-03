import React from "react";

const RequiredIndicator = ({ required }) => {
  if (!required) return null;
  return <span className="text-[#dc3545]">*</span>;
};

export default RequiredIndicator;
