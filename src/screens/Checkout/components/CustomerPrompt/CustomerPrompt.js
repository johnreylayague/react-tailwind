import React from "react";
import ExternalLink from "./ExternalLink.js";
import PrompText from "./PrompText.js";

const CustomerPrompt = ({ text, linkLabel, linkPath }) => {
  return (
    <div className="w-full p-[21px] bg-[#F0F2F3]">
      <PrompText>
        {text} <ExternalLink to={linkPath}>{linkLabel}</ExternalLink>
      </PrompText>
    </div>
  );
};

export default CustomerPrompt;
