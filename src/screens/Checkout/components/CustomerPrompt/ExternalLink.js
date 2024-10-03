import React from "react";
import { Link } from "react-router-dom";

const ExternalLink = ({ to, children }) => {
  return (
    <Link to={to} relative="path" className="text-[#634832]">
      {children}
    </Link>
  );
};

export default ExternalLink;
